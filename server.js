const http = require("http");
const fs = require("fs");
const path = require("path");
const httpClient = require("http");
const httpsClient = require("https");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";
const dataDir = path.join(root, "data");
const roadmapFile = path.join(dataDir, "roadmap-items.json");

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function readRoadmapItems() {
  try {
    return JSON.parse(fs.readFileSync(roadmapFile, "utf8"));
  } catch (error) {
    return [];
  }
}

function saveRoadmapItems(items) {
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(roadmapFile, JSON.stringify(items, null, 2) + "\n", "utf8");
}

function readBody(req, callback) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
    if (body.length > 20000) req.destroy();
  });
  req.on("end", () => callback(null, body));
  req.on("error", (error) => callback(error));
}

function cleanText(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function readInventoryText() {
  const inventoryPath = path.join(root, "src", "inventory.js");
  return fs.readFileSync(inventoryPath, "utf8");
}

function parseListNumbers(value) {
  if (!value) return null;
  return value.split(",").map((item) => Number(item.trim())).filter((item) => Number.isFinite(item));
}

function readInventoryServices() {
  const text = readInventoryText();
  const matches = Array.from(text.matchAll(/\{ id: "([^"]+)", name: "([^"]+)"([^\n]*?)\}/g));
  return matches.map((match) => {
    const body = match[3] || "";
    const url = body.match(/url: "(https?:\/\/[^"]+)"/);
    if (!url) return null;
    const checkUrl = body.match(/checkUrl: "(https?:\/\/[^"]+)"/);
    const okStatuses = body.match(/okStatuses: \[([^\]]+)\]/);
    const disabled = /checkDisabled: true/.test(body);
    return {
      id: match[1],
      name: match[2],
      url: url[1],
      checkUrl: checkUrl ? checkUrl[1] : url[1],
      okStatuses: parseListNumbers(okStatuses && okStatuses[1]),
      disabled
    };
  }).filter(Boolean);
}

function readInventoryHosts() {
  const text = readInventoryText();
  const blocks = Array.from(text.matchAll(/\{\n      id: "([^"]+)",[\s\S]*?name: "([^"]+)",[\s\S]*?shortName: "([^"]+)"[\s\S]*?addresses: \[([^\]]+)\],[\s\S]*?health: \{ managementUrl: "([^"]+)", metricsUrl: "([^"]+)" \}/g));
  return blocks.map((match) => ({
    id: match[1],
    name: match[2],
    shortName: match[3],
    addresses: match[4].split(',').map((item) => item.replace(/["\s]/g, '')).filter(Boolean),
    managementUrl: match[5],
    metricsUrl: match[6]
  }));
}

function serviceChecks() {
  const seen = new Set();
  return readInventoryServices().filter((service) => {
    if (service.disabled) return false;
    if (seen.has(service.id)) return false;
    seen.add(service.id);
    return true;
  });
}

function requestService(service, method) {
  return new Promise((resolve, reject) => {
    const target = new URL(service.checkUrl || service.url);
    const client = target.protocol === "https:" ? httpsClient : httpClient;
    const started = Date.now();
    const req = client.request(target, { method, timeout: Number(process.env.STATUS_TIMEOUT_MS || 4000), rejectUnauthorized: false }, (response) => {
      response.resume();
      response.on("end", () => {
        resolve({ statusCode: response.statusCode || 0, latencyMs: Date.now() - started });
      });
    });
    req.on("timeout", () => {
      req.destroy(new Error("timeout"));
    });
    req.on("error", reject);
    req.end();
  });
}

async function checkHttpService(service) {
  try {
    let response = await requestService(service, "HEAD");
    if (response.statusCode === 405 || response.statusCode === 501) response = await requestService(service, "GET");
    return {
      id: service.id,
      name: service.name,
      url: service.url,
      checkUrl: service.checkUrl || service.url,
      state: service.okStatuses ? (service.okStatuses.includes(response.statusCode) ? "online" : "degraded") : (response.statusCode >= 500 ? "degraded" : "online"),
      httpStatus: response.statusCode,
      latencyMs: response.latencyMs,
      checkedAt: new Date().toISOString()
    };
  } catch (error) {
    return {
      id: service.id,
      name: service.name,
      url: service.url,
      checkUrl: service.checkUrl || service.url,
      state: "offline",
      error: error.message,
      checkedAt: new Date().toISOString()
    };
  }
}

async function statusPayload() {
  const checks = serviceChecks();
  const results = await Promise.all(checks.map(checkHttpService));
  const summary = results.reduce((acc, result) => {
    acc[result.state] = (acc[result.state] || 0) + 1;
    return acc;
  }, { online: 0, degraded: 0, offline: 0, unknown: 0 });
  return {
    checkedAt: new Date().toISOString(),
    timeoutMs: Number(process.env.STATUS_TIMEOUT_MS || 4000),
    summary,
    results
  };
}

function bytesToGiB(value) {
  return Math.round((Number(value) / 1024 / 1024 / 1024) * 10) / 10;
}

function parseLabels(labelText) {
  if (!labelText) return {};
  return Object.fromEntries(Array.from(labelText.matchAll(/([a-zA-Z_][a-zA-Z0-9_]*)="((?:\\.|[^"])*)"/g)).map((match) => [match[1], match[2].replace(/\\"/g, '"')]));
}

function parseNodeMetrics(text) {
  const samples = text.split(/\n/).map((line) => {
    const match = line.match(/^([a-zA-Z_:][a-zA-Z0-9_:]*)(?:\{([^}]*)\})?\s+(-?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)/i);
    if (!match) return null;
    return { name: match[1], labels: parseLabels(match[2]), value: Number(match[3]) };
  }).filter(Boolean);

  const metric = (name, labels = {}) => {
    const sample = samples.find((entry) => entry.name === name && Object.entries(labels).every(([key, value]) => entry.labels[key] === value));
    return sample ? sample.value : null;
  };

  const memTotal = metric("node_memory_MemTotal_bytes");
  const memAvailable = metric("node_memory_MemAvailable_bytes");
  const rootTotal = metric("node_filesystem_size_bytes", { mountpoint: "/" });
  const rootFree = metric("node_filesystem_avail_bytes", { mountpoint: "/" });
  const rootSample = samples.find((entry) => entry.name === "node_filesystem_size_bytes" && entry.labels.mountpoint === "/");
  const bootTime = metric("node_boot_time_seconds");
  return {
    memory: memTotal && memAvailable ? { totalGiB: bytesToGiB(memTotal), usedGiB: bytesToGiB(memTotal - memAvailable), usedPercent: Math.round(((memTotal - memAvailable) / memTotal) * 100) } : null,
    disk: rootTotal && rootFree ? { mount: "/", device: rootSample && rootSample.labels.device, totalGiB: bytesToGiB(rootTotal), usedGiB: bytesToGiB(rootTotal - rootFree), usedPercent: Math.round(((rootTotal - rootFree) / rootTotal) * 100) } : null,
    uptimeSeconds: bootTime ? Math.max(0, Math.round(Date.now() / 1000 - bootTime)) : null
  };
}

async function fetchText(url) {
  return new Promise((resolve, reject) => {
    const target = new URL(url);
    const client = target.protocol === "https:" ? httpsClient : httpClient;
    const req = client.request(target, { method: "GET", timeout: Number(process.env.STATUS_TIMEOUT_MS || 4000), rejectUnauthorized: false }, (response) => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => { body += chunk; if (body.length > 2_000_000) req.destroy(new Error("response too large")); });
      response.on("end", () => resolve({ statusCode: response.statusCode || 0, body }));
    });
    req.on("timeout", () => req.destroy(new Error("timeout")));
    req.on("error", reject);
    req.end();
  });
}

async function checkHostHealth(host) {
  const management = await checkHttpService({ id: host.id, name: host.name, url: host.managementUrl, checkUrl: host.managementUrl, okStatuses: [200, 401, 403] });
  let metrics = null;
  let metricsState = "unknown";
  let metricsError = "node_exporter not reachable or not installed";
  try {
    const response = await fetchText(host.metricsUrl);
    if (response.statusCode < 500 && response.body.includes("node_")) {
      metrics = parseNodeMetrics(response.body);
      metricsState = "online";
      metricsError = "";
    } else {
      metricsState = "offline";
      metricsError = "metrics endpoint returned HTTP " + response.statusCode;
    }
  } catch (error) {
    metricsState = "offline";
    metricsError = error.message;
  }
  return { ...host, management, metricsUrl: host.metricsUrl, metricsState, metricsError, metrics, checkedAt: new Date().toISOString() };
}

async function hostHealthPayload() {
  const hosts = readInventoryHosts();
  const results = await Promise.all(hosts.map(checkHostHealth));
  return { checkedAt: new Date().toISOString(), results };
}

function handleApi(req, res, urlPath) {
  if (urlPath === "/api/host-health" && req.method === "GET") {
    hostHealthPayload().then((payload) => sendJson(res, 200, payload)).catch((error) => sendJson(res, 500, { error: error.message }));
    return true;
  }

  if (urlPath === "/api/status" && req.method === "GET") {
    statusPayload().then((payload) => sendJson(res, 200, payload)).catch((error) => sendJson(res, 500, { error: error.message }));
    return true;
  }

  if (urlPath === "/api/roadmap" && req.method === "GET") {
    sendJson(res, 200, { items: readRoadmapItems() });
    return true;
  }

  if (urlPath === "/api/roadmap" && req.method === "POST") {
    readBody(req, (error, body) => {
      if (error) {
        sendJson(res, 400, { error: "Could not read request body." });
        return;
      }

      let input;
      try {
        input = JSON.parse(body || "{}");
      } catch (parseError) {
        sendJson(res, 400, { error: "Invalid JSON." });
        return;
      }

      const title = cleanText(input.title, 120);
      if (!title) {
        sendJson(res, 400, { error: "Title is required." });
        return;
      }

      const allowedPriorities = new Set(["critical", "high", "medium", "low"]);
      const allowedStatuses = new Set(["planned", "in-progress", "blocked", "future", "done"]);
      const item = {
        id: "custom-" + Date.now().toString(36),
        title,
        priority: allowedPriorities.has(input.priority) ? input.priority : "medium",
        status: allowedStatuses.has(input.status) ? input.status : "planned",
        target: cleanText(input.target, 80),
        note: cleanText(input.note, 500),
        createdAt: new Date().toISOString(),
        source: "dashboard"
      };

      const items = readRoadmapItems();
      items.unshift(item);
      saveRoadmapItems(items);
      sendJson(res, 201, { item });
    });
    return true;
  }

  const roadmapMatch = urlPath.match(/^\/api\/roadmap\/([^/]+)$/);
  if (roadmapMatch && (req.method === "PATCH" || req.method === "DELETE")) {
    const id = decodeURIComponent(roadmapMatch[1]);
    const items = readRoadmapItems();
    const index = items.findIndex((item) => item.id === id && item.source === "dashboard");
    if (index === -1) {
      sendJson(res, 404, { error: "Roadmap item not found." });
      return true;
    }

    if (req.method === "DELETE") {
      const removed = items.splice(index, 1)[0];
      saveRoadmapItems(items);
      sendJson(res, 200, { item: removed });
      return true;
    }

    readBody(req, (error, body) => {
      if (error) {
        sendJson(res, 400, { error: "Could not read request body." });
        return;
      }

      let input;
      try {
        input = JSON.parse(body || "{}");
      } catch (parseError) {
        sendJson(res, 400, { error: "Invalid JSON." });
        return;
      }

      const allowedStatuses = new Set(["planned", "in-progress", "blocked", "future", "done"]);
      if (allowedStatuses.has(input.status)) items[index].status = input.status;
      if (input.status === "done") items[index].completedAt = new Date().toISOString();
      if (input.status && input.status !== "done") delete items[index].completedAt;
      saveRoadmapItems(items);
      sendJson(res, 200, { item: items[index] });
    });
    return true;
  }

  return false;
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);

  if (handleApi(req, res, urlPath)) return;

  const requested = urlPath === "/" ? "/index.html" : urlPath;
  const filePath = path.normalize(path.join(root, requested));

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream"
    });
    res.end(content);
  });
});

server.listen(port, host, () => {
  console.log("jaludash running at http://" + host + ":" + port);
});
