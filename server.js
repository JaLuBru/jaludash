const http = require("http");
const fs = require("fs");
const path = require("path");
const httpClient = require("http");
const httpsClient = require("https");
const dns = require("dns").promises;

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";
const dataDir = path.join(root, "data");
const roadmapFile = path.join(dataDir, "roadmap-items.json");
const customServicesFile = path.join(dataDir, "custom-services.json");

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

function readCustomServices() {
  try {
    return JSON.parse(fs.readFileSync(customServicesFile, "utf8"));
  } catch (error) {
    return [];
  }
}

function saveCustomServices(items) {
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(customServicesFile, JSON.stringify(items, null, 2) + "\n", "utf8");
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

function slugify(value) {
  return cleanText(value, 120).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "service";
}

function cleanUrl(value) {
  const url = cleanText(value, 300);
  if (!url) return "";
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol) ? parsed.toString() : "";
  } catch (error) {
    return "";
  }
}

function serviceFromInput(input, existing) {
  const name = cleanText(input.name, 120);
  if (!name) return { error: "Service name is required." };
  const url = cleanUrl(input.url);
  const checkUrl = cleanUrl(input.checkUrl) || url;
  const host = cleanText(input.host, 80) || "docker-lxc";
  const category = cleanText(input.category, 40) || "apps";
  const importance = new Set(["critical", "high", "medium", "low"]).has(input.importance) ? input.importance : "low";
  const status = new Set(["documented", "planned", "unstable", "unknown"]).has(input.status) ? input.status : "documented";
  return {
    item: Object.assign({}, existing || {}, {
      id: existing && existing.id ? existing.id : "custom-" + slugify(name) + "-" + Date.now().toString(36),
      name,
      status,
      importance,
      url: url || null,
      checkUrl: checkUrl || null,
      purpose: cleanText(input.purpose, 260),
      host,
      category,
      source: "dashboard",
      discovery: input.discovery || (existing && existing.discovery) || null,
      createdAt: existing && existing.createdAt ? existing.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })
  };
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
  const customServices = readCustomServices();
  const overrides = new Map(customServices.filter((service) => service.overrideOf).map((service) => [service.overrideOf, service]));
  const inventoryChecks = readInventoryServices().map((service) => Object.assign({}, service, overrides.get(service.id) || {}, { id: service.id }));
  const customChecks = customServices.filter((service) => !service.overrideOf).map((service) => ({ ...service, disabled: !service.url }));
  const seen = new Set();
  return inventoryChecks.concat(customChecks).filter((service) => {
    if (service.disabled) return false;
    if (seen.has(service.id)) return false;
    seen.add(service.id);
    return true;
  });
}

function normalizeName(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function readInventoryServiceNames() {
  const text = readInventoryText();
  const matches = Array.from(text.matchAll(/\{ id: "([^"]+)", name: "([^"]+)"([^\n]*?)\}/g));
  const names = new Set();
  matches.forEach((match) => {
    names.add(normalizeName(match[1]));
    names.add(normalizeName(match[2]));
  });
  readCustomServices().forEach((service) => {
    names.add(normalizeName(service.id));
    names.add(normalizeName(service.name));
  });
  return names;
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

function parseMetricSamples(text) {
  return text.split(/\n/).map((line) => {
    const match = line.match(/^([a-zA-Z_:][a-zA-Z0-9_:]*)(?:\{([^}]*)\})?\s+(-?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)/i);
    if (!match) return null;
    return { name: match[1], labels: parseLabels(match[2]), value: Number(match[3]) };
  }).filter(Boolean);
}

function storageSeverity(usedPercent) {
  if (!Number.isFinite(usedPercent)) return "unknown";
  if (usedPercent >= 90) return "critical";
  if (usedPercent >= 80) return "high";
  if (usedPercent >= 70) return "medium";
  return "low";
}

function parseStorage(samples) {
  const byKey = new Map();
  samples.filter((entry) => ["node_filesystem_size_bytes", "node_filesystem_avail_bytes", "node_filesystem_readonly", "node_filesystem_device_error"].includes(entry.name)).forEach((entry) => {
    const key = [entry.labels.mountpoint || "", entry.labels.device || "", entry.labels.fstype || ""].join("|");
    if (!byKey.has(key)) byKey.set(key, { mount: entry.labels.mountpoint || "", device: entry.labels.device || "", fstype: entry.labels.fstype || "" });
    const item = byKey.get(key);
    if (entry.name === "node_filesystem_size_bytes") item.totalBytes = entry.value;
    if (entry.name === "node_filesystem_avail_bytes") item.availableBytes = entry.value;
    if (entry.name === "node_filesystem_readonly") item.readonly = entry.value === 1;
    if (entry.name === "node_filesystem_device_error") item.deviceError = entry.value === 1;
  });

  const ignoredFstypes = new Set(["autofs", "binfmt_misc", "bpf", "cgroup", "cgroup2", "configfs", "debugfs", "devpts", "devtmpfs", "fusectl", "hugetlbfs", "mqueue", "nsfs", "overlay", "proc", "pstore", "rpc_pipefs", "securityfs", "sysfs", "tmpfs", "tracefs"]);
  const filesystems = Array.from(byKey.values()).filter((item) => item.mount && item.totalBytes > 0 && !ignoredFstypes.has(item.fstype) && !item.mount.startsWith("/run/")).map((item) => {
    const usedBytes = Math.max(0, (item.totalBytes || 0) - (item.availableBytes || 0));
    const usedPercent = item.totalBytes ? Math.round((usedBytes / item.totalBytes) * 100) : null;
    return {
      mount: item.mount,
      device: item.device,
      fstype: item.fstype,
      totalGiB: bytesToGiB(item.totalBytes),
      availableGiB: bytesToGiB(item.availableBytes || 0),
      usedGiB: bytesToGiB(usedBytes),
      usedPercent,
      readonly: Boolean(item.readonly),
      deviceError: Boolean(item.deviceError),
      severity: storageSeverity(usedPercent)
    };
  }).sort((a, b) => (b.totalGiB || 0) - (a.totalGiB || 0));

  const diskInfo = samples.filter((entry) => entry.name === "node_disk_info" || entry.name === "smartmon_device_info").map((entry) => ({
    device: entry.labels.device || entry.labels.disk || "",
    model: entry.labels.model || entry.labels.device_model || entry.labels.model_family || "",
    serial: entry.labels.serial || entry.labels.serial_number || "",
    type: entry.labels.type || "block"
  })).filter((disk) => disk.device);
  const seen = new Set();
  const disks = diskInfo.filter((disk) => {
    const key = disk.device + disk.model + disk.serial;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).map((disk) => {
    const smartDisk = disk.device.startsWith("/dev/") ? disk.device : "/dev/" + disk.device.replace(/p?\d+$/, "");
    const health = samples.find((entry) => entry.name === "smartmon_device_smart_healthy" && entry.labels.disk === smartDisk);
    const temp = samples.find((entry) => (entry.name === "smartmon_temperature_celsius_raw_value" || entry.name === "nvme_temperature_celsius") && (entry.labels.disk === smartDisk || entry.labels.device === disk.device));
    const wear = samples.find((entry) => entry.name === "nvme_percentage_used_ratio" && entry.labels.device === disk.device);
    return { ...disk, health: health ? (health.value === 1 ? "healthy" : "attention") : "unknown", temperatureC: temp ? Math.round(temp.value) : null, wearPercent: wear ? Math.round(wear.value * 100) : null };
  });

  return { filesystems, disks };
}

function parseNodeMetrics(text) {
  const samples = parseMetricSamples(text);
  const metric = (name, labels = {}) => {
    const sample = samples.find((entry) => entry.name === name && Object.entries(labels).every(([key, value]) => entry.labels[key] === value));
    return sample ? sample.value : null;
  };

  const memTotal = metric("node_memory_MemTotal_bytes");
  const memAvailable = metric("node_memory_MemAvailable_bytes");
  const storage = parseStorage(samples);
  const rootFs = storage.filesystems.find((item) => item.mount === "/");
  const bootTime = metric("node_boot_time_seconds");
  return {
    memory: memTotal && memAvailable ? { totalGiB: bytesToGiB(memTotal), usedGiB: bytesToGiB(memTotal - memAvailable), usedPercent: Math.round(((memTotal - memAvailable) / memTotal) * 100) } : null,
    disk: rootFs ? { mount: rootFs.mount, device: rootFs.device, totalGiB: rootFs.totalGiB, usedGiB: rootFs.usedGiB, usedPercent: rootFs.usedPercent } : null,
    storage,
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

function normalizeClientIp(value) {
  const raw = String(value || "").split(",")[0].trim();
  if (!raw) return "";
  if (raw.startsWith("::ffff:")) return raw.slice(7);
  if (raw === "::1") return "127.0.0.1";
  return raw;
}

function isPrivateIp(ip) {
  return /^10\./.test(ip) || /^192\.168\./.test(ip) || /^172\.(1[6-9]|2\d|3[01])\./.test(ip) || ip === "127.0.0.1";
}

async function clientInfoPayload(req) {
  const localIp = normalizeClientIp(req.headers["x-forwarded-for"] || req.socket.remoteAddress);
  let hostname = "";
  if (localIp && isPrivateIp(localIp) && localIp !== "127.0.0.1") {
    try {
      const names = await Promise.race([
        dns.reverse(localIp),
        new Promise((_, reject) => setTimeout(() => reject(new Error("reverse lookup timeout")), 600))
      ]);
      hostname = Array.isArray(names) && names.length ? names[0] : "";
    } catch (error) {
      hostname = "";
    }
  }
  return { localIp, hostname, checkedAt: new Date().toISOString() };
}


function dockerSocketRequest(pathname) {
  return new Promise((resolve, reject) => {
    const req = httpClient.request({ socketPath: "/var/run/docker.sock", path: pathname, method: "GET", timeout: 2500 }, (response) => {
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

async function discoveryPayload() {
  const knownNames = readInventoryServiceNames();
  try {
    const response = await dockerSocketRequest("/containers/json?all=1");
    if (response.statusCode >= 400) throw new Error("Docker returned HTTP " + response.statusCode);
    const raw = JSON.parse(response.body || "[]");
    const containers = raw.map((container) => {
      const name = String((container.Names && container.Names[0]) || "").replace(/^\//, "");
      const image = container.Image || "";
      const normalized = normalizeName(name);
      const known = knownNames.has(normalized) || Array.from(knownNames).some((known) => normalized.includes(known) || known.includes(normalized));
      return {
        id: String(container.Id || "").slice(0, 12),
        name,
        image,
        state: container.State || "unknown",
        status: container.Status || "",
        ports: (container.Ports || []).map((port) => ({ privatePort: port.PrivatePort, publicPort: port.PublicPort, type: port.Type, ip: port.IP })).filter((port) => port.privatePort || port.publicPort),
        known
      };
    }).sort((a, b) => Number(a.known) - Number(b.known) || a.name.localeCompare(b.name));
    return { checkedAt: new Date().toISOString(), dockerAvailable: true, containers, unknown: containers.filter((item) => !item.known) };
  } catch (error) {
    return { checkedAt: new Date().toISOString(), dockerAvailable: false, error: error.message, containers: [], unknown: [] };
  }
}

function handleApi(req, res, urlPath) {
  if (urlPath === "/api/services" && req.method === "GET") {
    sendJson(res, 200, { services: readCustomServices() });
    return true;
  }

  if (urlPath === "/api/services" && req.method === "POST") {
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
      const result = serviceFromInput(input);
      if (result.error) {
        sendJson(res, 400, { error: result.error });
        return;
      }
      const items = readCustomServices();
      items.unshift(result.item);
      saveCustomServices(items);
      sendJson(res, 201, { service: result.item });
    });
    return true;
  }

  if (urlPath.startsWith("/api/services/") && req.method === "PUT") {
    const serviceId = decodeURIComponent(urlPath.slice("/api/services/".length));
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
      const items = readCustomServices();
      const index = items.findIndex((item) => item.id === serviceId || item.overrideOf === serviceId);
      const existing = index === -1 ? { id: serviceId, overrideOf: serviceId, source: "dashboard", createdAt: new Date().toISOString() } : items[index];
      const result = serviceFromInput(input, existing);
      if (result.error) {
        sendJson(res, 400, { error: result.error });
        return;
      }
      if (index === -1) items.unshift(result.item);
      else items[index] = result.item;
      saveCustomServices(items);
      sendJson(res, 200, { service: result.item });
    });
    return true;
  }

  if (urlPath.startsWith("/api/services/") && req.method === "DELETE") {
    const serviceId = decodeURIComponent(urlPath.slice("/api/services/".length));
    const items = readCustomServices();
    const nextItems = items.filter((item) => item.id !== serviceId && item.overrideOf !== serviceId);
    if (nextItems.length === items.length) {
      sendJson(res, 404, { error: "Service not found." });
      return true;
    }
    saveCustomServices(nextItems);
    sendJson(res, 200, { ok: true });
    return true;
  }

  if (urlPath === "/api/discovery" && req.method === "GET") {
    discoveryPayload().then((payload) => sendJson(res, 200, payload)).catch((error) => sendJson(res, 500, { error: error.message }));
    return true;
  }

  if (urlPath === "/api/client-info" && req.method === "GET") {
    clientInfoPayload(req).then((payload) => sendJson(res, 200, payload)).catch((error) => sendJson(res, 500, { error: error.message }));
    return true;
  }

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
