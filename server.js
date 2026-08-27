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
const inventoryFile = path.join(dataDir, "inventory.json");
const seedFile = path.join(root, "src", "inventory-seed.json");
const historyFile = path.join(dataDir, "history.json");

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

function readHistory() {
  try {
    const history = JSON.parse(fs.readFileSync(historyFile, "utf8"));
    return {
      status: Array.isArray(history.status) ? history.status : [],
      hosts: Array.isArray(history.hosts) ? history.hosts : [],
      speed: Array.isArray(history.speed) ? history.speed : []
    };
  } catch (error) {
    return { status: [], hosts: [], speed: [] };
  }
}

function saveHistory(history) {
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(historyFile, JSON.stringify(history, null, 2) + "\n", "utf8");
}

function appendHistory(kind, item) {
  const history = readHistory();
  const limit = Number(process.env.HISTORY_LIMIT || 1000);
  history[kind] = (history[kind] || []).concat(item).slice(-limit);
  saveHistory(history);
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

// --- Inventory: a single editable data file (data/inventory.json), seeded once from
// src/inventory-seed.json. New apps added to the seed later show up automatically
// (merged in on every read); anything the user deletes goes on the `removedSeedIds`
// tombstone list so a future seed merge never brings it back. Anything the user edits
// simply lives in data/inventory.json from then on and is never touched by the seed again.

function readSeed() {
  return JSON.parse(fs.readFileSync(seedFile, "utf8"));
}

function emptyInventory() {
  return { seedVersion: 0, removedSeedIds: [], hosts: [], computeUnits: [], serviceGroups: [], concerns: [], plannedChanges: [] };
}

function cloneSeedGroup(group) {
  return Object.assign({}, group, { services: (group.services || []).map((service) => Object.assign({}, service)) });
}

function mergeSeed(live, seed) {
  let changed = false;
  const removed = new Set(live.removedSeedIds || []);
  const inventory = Object.assign(emptyInventory(), live, { removedSeedIds: Array.from(removed) });

  ["hosts", "computeUnits", "concerns", "plannedChanges"].forEach((key) => {
    const existingIds = new Set((inventory[key] || []).map((item) => item.id));
    (seed[key] || []).forEach((item) => {
      if (existingIds.has(item.id) || removed.has(item.id)) return;
      inventory[key] = (inventory[key] || []).concat(item);
      existingIds.add(item.id);
      changed = true;
    });
  });

  const liveGroupsById = new Map((inventory.serviceGroups || []).map((group) => [group.id, group]));
  (seed.serviceGroups || []).forEach((seedGroup) => {
    if (removed.has(seedGroup.id)) return;
    const liveGroup = liveGroupsById.get(seedGroup.id);
    if (!liveGroup) {
      inventory.serviceGroups = (inventory.serviceGroups || []).concat(cloneSeedGroup(seedGroup));
      liveGroupsById.set(seedGroup.id, inventory.serviceGroups[inventory.serviceGroups.length - 1]);
      changed = true;
      return;
    }
    const existingServiceIds = new Set((liveGroup.services || []).map((service) => service.id));
    (seedGroup.services || []).forEach((service) => {
      if (existingServiceIds.has(service.id) || removed.has(service.id)) return;
      liveGroup.services = (liveGroup.services || []).concat(Object.assign({}, service));
      existingServiceIds.add(service.id);
      changed = true;
    });
  });

  if (seed.seedVersion !== inventory.seedVersion) {
    inventory.seedVersion = seed.seedVersion;
    changed = true;
  }

  return { inventory, changed };
}

function writeInventory(inventory) {
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(inventoryFile, JSON.stringify(inventory, null, 2) + "\n", "utf8");
}

function readInventory() {
  const seed = readSeed();
  let live = null;
  try {
    live = JSON.parse(fs.readFileSync(inventoryFile, "utf8"));
  } catch (error) {
    live = null;
  }
  if (!live) {
    const fresh = Object.assign(emptyInventory(), {
      seedVersion: seed.seedVersion,
      hosts: seed.hosts,
      computeUnits: seed.computeUnits,
      serviceGroups: (seed.serviceGroups || []).map(cloneSeedGroup),
      concerns: seed.concerns,
      plannedChanges: seed.plannedChanges
    });
    writeInventory(fresh);
    return fresh;
  }
  const { inventory, changed } = mergeSeed(live, seed);
  if (changed) writeInventory(inventory);
  return inventory;
}

function parentHostId(inventory, id) {
  if ((inventory.hosts || []).some((item) => item.id === id)) return id;
  const unit = (inventory.computeUnits || []).find((item) => item.id === id);
  return unit ? unit.host : id;
}

function findServiceLocation(inventory, serviceId) {
  for (const group of inventory.serviceGroups || []) {
    const index = (group.services || []).findIndex((service) => service.id === serviceId);
    if (index !== -1) return { group, index };
  }
  return null;
}

function matchingGroup(inventory, targetHost, category) {
  const groups = inventory.serviceGroups || [];
  const targetParent = parentHostId(inventory, targetHost);
  return groups.find((group) => group.category === category && (group.host === targetHost || parentHostId(inventory, group.host) === targetParent)) ||
    groups.find((group) => group.category === category) ||
    groups.find((group) => group.host === targetHost || parentHostId(inventory, group.host) === targetParent) ||
    null;
}

function ensureGroupFor(inventory, targetHost, category) {
  const existing = matchingGroup(inventory, targetHost, category);
  if (existing) return existing;
  const group = {
    id: "dashboard-" + slugify(targetHost) + "-" + slugify(category),
    name: "Dashboard Added",
    host: targetHost,
    category,
    importance: "low",
    purpose: "Services added from jaludash.",
    notes: [],
    source: "dashboard",
    services: []
  };
  inventory.serviceGroups = (inventory.serviceGroups || []).concat(group);
  return group;
}

function tombstone(inventory, id) {
  const removed = new Set(inventory.removedSeedIds || []);
  removed.add(id);
  inventory.removedSeedIds = Array.from(removed);
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
      iconUrl: cleanUrl(input.iconUrl) || null,
      purpose: cleanText(input.purpose, 260),
      host,
      category,
      source: "dashboard",
      discovery: input.discovery || (existing && existing.discovery) || null
    })
  };
}

function groupFromInput(input, existing) {
  const name = cleanText(input.name, 120);
  if (!name) return { error: "Card name is required." };
  const host = cleanText(input.host, 80) || "docker-lxc";
  const category = cleanText(input.category, 40) || "apps";
  return {
    item: Object.assign({}, existing || {}, {
      id: existing && existing.id ? existing.id : "custom-group-" + slugify(name) + "-" + Date.now().toString(36),
      name,
      host,
      category,
      importance: new Set(["critical", "high", "medium", "low"]).has(input.importance) ? input.importance : "low",
      purpose: cleanText(input.purpose, 260),
      notes: cleanText(input.notes, 500) ? cleanText(input.notes, 500).split(/\n+/).map((item) => item.trim()).filter(Boolean) : [],
      source: "dashboard"
    })
  };
}

function allServicesFlat(inventory) {
  return (inventory.serviceGroups || []).flatMap((group) => (group.services || []).map((service) => Object.assign({ groupId: group.id, groupHost: group.host, category: service.category || group.category }, service)));
}

function serviceChecks() {
  const inventory = readInventory();
  const seen = new Set();
  return allServicesFlat(inventory).filter((service) => {
    if (!service.url) return false;
    if (seen.has(service.id)) return false;
    seen.add(service.id);
    return true;
  });
}

function normalizeName(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function knownServiceNames() {
  const inventory = readInventory();
  const names = new Set();
  allServicesFlat(inventory).forEach((service) => {
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
  const payload = {
    checkedAt: new Date().toISOString(),
    timeoutMs: Number(process.env.STATUS_TIMEOUT_MS || 4000),
    summary,
    results
  };
  appendHistory("status", {
    checkedAt: payload.checkedAt,
    summary,
    offline: results.filter((item) => item.state === "offline").map((item) => item.id),
    degraded: results.filter((item) => item.state === "degraded").map((item) => item.id)
  });
  return payload;
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

function ensureExpectedStorage(host, metrics) {
  if (!metrics || !metrics.storage || host.id !== "serverpi") return metrics;
  const hasMediaDisk = metrics.storage.filesystems.some((item) => item.mount === "/media/wd2001ext4" || item.device === "/dev/sda1");
  if (!hasMediaDisk) {
    metrics.storage.filesystems.unshift({
      mount: "/media/wd2001ext4",
      device: "/dev/sda1",
      fstype: "ext4",
      totalGiB: 1843.2,
      availableGiB: null,
      usedGiB: null,
      usedPercent: null,
      readonly: false,
      deviceError: false,
      severity: "unknown",
      expected: true
    });
  }
  return metrics;
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

async function measureDownloadSpeed() {
  const targetUrl = process.env.SPEED_TEST_URL || "https://speed.cloudflare.com/__down?bytes=25000000";
  const started = Date.now();
  let bytes = 0;
  return new Promise((resolve, reject) => {
    const target = new URL(targetUrl);
    const client = target.protocol === "https:" ? httpsClient : httpClient;
    const req = client.request(target, { method: "GET", timeout: Number(process.env.SPEED_TEST_TIMEOUT_MS || 20000), rejectUnauthorized: false }, (response) => {
      response.on("data", (chunk) => { bytes += chunk.length; });
      response.on("end", () => {
        const durationMs = Math.max(1, Date.now() - started);
        const mbps = Math.round(((bytes * 8) / (durationMs / 1000) / 1000 / 1000) * 10) / 10;
        resolve({ checkedAt: new Date().toISOString(), targetUrl, bytes, durationMs, downloadMbps: mbps, state: response.statusCode >= 500 ? "degraded" : "online", httpStatus: response.statusCode || 0 });
      });
    });
    req.on("timeout", () => req.destroy(new Error("timeout")));
    req.on("error", reject);
    req.end();
  });
}

async function speedPayload() {
  try {
    const result = await measureDownloadSpeed();
    appendHistory("speed", result);
    return result;
  } catch (error) {
    const result = { checkedAt: new Date().toISOString(), state: "offline", error: error.message, downloadMbps: null };
    appendHistory("speed", result);
    return result;
  }
}

async function checkHostHealth(host) {
  const management = await checkHttpService({ id: host.id, name: host.name, url: host.health.managementUrl, checkUrl: host.health.managementUrl, okStatuses: [200, 401, 403] });
  let metrics = null;
  let metricsState = "unknown";
  let metricsError = "node_exporter not reachable or not installed";
  try {
    const response = await fetchText(host.health.metricsUrl);
    if (response.statusCode < 500 && response.body.includes("node_")) {
      metrics = ensureExpectedStorage(host, parseNodeMetrics(response.body));
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
  return { id: host.id, name: host.name, shortName: host.shortName, addresses: host.addresses, management, metricsUrl: host.health.metricsUrl, metricsState, metricsError, metrics, checkedAt: new Date().toISOString() };
}

async function hostHealthPayload() {
  const inventory = readInventory();
  const results = await Promise.all((inventory.hosts || []).map(checkHostHealth));
  const checkedAt = new Date().toISOString();
  appendHistory("hosts", {
    checkedAt,
    hosts: results.map((host) => ({
      id: host.id,
      managementState: host.management && host.management.state ? host.management.state : "unknown",
      metricsState: host.metricsState,
      memoryUsedPercent: host.metrics && host.metrics.memory ? host.metrics.memory.usedPercent : null,
      memoryUsedGiB: host.metrics && host.metrics.memory ? host.metrics.memory.usedGiB : null,
      memoryTotalGiB: host.metrics && host.metrics.memory ? host.metrics.memory.totalGiB : null,
      rootUsedPercent: host.metrics && host.metrics.disk ? host.metrics.disk.usedPercent : null,
      rootUsedGiB: host.metrics && host.metrics.disk ? host.metrics.disk.usedGiB : null,
      rootTotalGiB: host.metrics && host.metrics.disk ? host.metrics.disk.totalGiB : null,
      storage: host.metrics && host.metrics.storage ? host.metrics.storage.filesystems.map((fs) => ({ mount: fs.mount, device: fs.device, usedPercent: fs.usedPercent, totalGiB: fs.totalGiB, usedGiB: fs.usedGiB, availableGiB: fs.availableGiB, severity: fs.severity })) : []
    }))
  });
  return { checkedAt, results };
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

function proxmoxConfig() {
  return {
    apiUrl: String(process.env.PROXMOX_API_URL || "").replace(/\/+$/, ""),
    node: String(process.env.PROXMOX_NODE || "optipi"),
    tokenId: String(process.env.PROXMOX_API_TOKEN_ID || ""),
    tokenSecret: String(process.env.PROXMOX_API_TOKEN_SECRET || "")
  };
}

function proxmoxRequest(pathname) {
  const config = proxmoxConfig();
  if (!config.apiUrl || !config.tokenId || !config.tokenSecret) {
    return Promise.reject(new Error("Proxmox API token is not configured"));
  }

  return new Promise((resolve, reject) => {
    const target = new URL(config.apiUrl + pathname);
    const client = target.protocol === "https:" ? httpsClient : httpClient;
    const req = client.request(target, {
      method: "GET",
      timeout: Number(process.env.STATUS_TIMEOUT_MS || 4000),
      rejectUnauthorized: false,
      headers: { Authorization: "PVEAPIToken=" + config.tokenId + "=" + config.tokenSecret }
    }, (response) => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => { body += chunk; if (body.length > 2_000_000) req.destroy(new Error("response too large")); });
      response.on("end", () => {
        if (response.statusCode >= 400) reject(new Error("Proxmox returned HTTP " + response.statusCode));
        else resolve(JSON.parse(body || "{}"));
      });
    });
    req.on("timeout", () => req.destroy(new Error("timeout")));
    req.on("error", reject);
    req.end();
  });
}

function parseProxmoxIps(config) {
  return Object.entries(config || {}).flatMap(([key, value]) => {
    if (!/^net\d+|^ipconfig\d+/.test(key)) return [];
    return Array.from(String(value || "").matchAll(/\bip6?=([^,\s]+)/g)).map((match) => match[1]).filter((ip) => ip && !["dhcp", "manual"].includes(ip));
  });
}

async function enrichProxmoxGuest(node, type, guest) {
  let config = {};
  try {
    const payload = await proxmoxRequest("/api2/json/nodes/" + encodeURIComponent(node) + "/" + type + "/" + encodeURIComponent(guest.vmid) + "/config");
    config = payload.data || {};
  } catch (error) {
    config = {};
  }
  return {
    id: type + "-" + guest.vmid,
    vmid: guest.vmid,
    type,
    node,
    name: guest.name || guest.hostname || String(guest.vmid),
    status: guest.status || "unknown",
    uptime: guest.uptime || 0,
    maxmem: guest.maxmem || 0,
    maxdisk: guest.maxdisk || 0,
    ips: parseProxmoxIps(config)
  };
}

async function proxmoxPayload() {
  const config = proxmoxConfig();
  if (!config.apiUrl || !config.tokenId || !config.tokenSecret) {
    return { configured: false, checkedAt: new Date().toISOString(), guests: [], error: "Set PROXMOX_API_URL, PROXMOX_NODE, PROXMOX_API_TOKEN_ID, and PROXMOX_API_TOKEN_SECRET." };
  }
  const [lxcPayload, qemuPayload] = await Promise.all([
    proxmoxRequest("/api2/json/nodes/" + encodeURIComponent(config.node) + "/lxc"),
    proxmoxRequest("/api2/json/nodes/" + encodeURIComponent(config.node) + "/qemu")
  ]);
  const lxc = (lxcPayload.data || []).map((guest) => enrichProxmoxGuest(config.node, "lxc", guest));
  const qemu = (qemuPayload.data || []).map((guest) => enrichProxmoxGuest(config.node, "qemu", guest));
  const guests = (await Promise.all(lxc.concat(qemu))).sort((a, b) => Number(a.vmid) - Number(b.vmid));
  return { configured: true, checkedAt: new Date().toISOString(), node: config.node, guests };
}

async function discoveryPayload() {
  const knownNames = knownServiceNames();
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
  if (urlPath === "/api/inventory" && req.method === "GET") {
    sendJson(res, 200, readInventory());
    return true;
  }

  if (urlPath === "/api/groups" && req.method === "POST") {
    readBody(req, (error, body) => {
      if (error) return sendJson(res, 400, { error: "Could not read request body." });
      let input;
      try { input = JSON.parse(body || "{}"); } catch (parseError) { return sendJson(res, 400, { error: "Invalid JSON." }); }
      const result = groupFromInput(input);
      if (result.error) return sendJson(res, 400, { error: result.error });
      const inventory = readInventory();
      result.item.services = [];
      inventory.serviceGroups = (inventory.serviceGroups || []).concat(result.item);
      writeInventory(inventory);
      sendJson(res, 201, { group: result.item });
    });
    return true;
  }

  if (urlPath.startsWith("/api/groups/") && req.method === "PUT") {
    const groupId = decodeURIComponent(urlPath.slice("/api/groups/".length));
    readBody(req, (error, body) => {
      if (error) return sendJson(res, 400, { error: "Could not read request body." });
      let input;
      try { input = JSON.parse(body || "{}"); } catch (parseError) { return sendJson(res, 400, { error: "Invalid JSON." }); }
      const inventory = readInventory();
      const existing = (inventory.serviceGroups || []).find((group) => group.id === groupId);
      if (!existing) return sendJson(res, 404, { error: "Card not found." });
      const result = groupFromInput(input, existing);
      if (result.error) return sendJson(res, 400, { error: result.error });
      result.item.id = groupId;
      result.item.services = existing.services || [];
      inventory.serviceGroups = inventory.serviceGroups.map((group) => group.id === groupId ? result.item : group);
      writeInventory(inventory);
      sendJson(res, 200, { group: result.item });
    });
    return true;
  }

  if (urlPath.startsWith("/api/groups/") && req.method === "DELETE") {
    const groupId = decodeURIComponent(urlPath.slice("/api/groups/".length));
    const inventory = readInventory();
    const existing = (inventory.serviceGroups || []).find((group) => group.id === groupId);
    if (existing) (existing.services || []).forEach((service) => tombstone(inventory, service.id));
    tombstone(inventory, groupId);
    inventory.serviceGroups = (inventory.serviceGroups || []).filter((group) => group.id !== groupId);
    writeInventory(inventory);
    sendJson(res, 200, { ok: true });
    return true;
  }

  if (urlPath === "/api/services" && req.method === "POST") {
    readBody(req, (error, body) => {
      if (error) return sendJson(res, 400, { error: "Could not read request body." });
      let input;
      try { input = JSON.parse(body || "{}"); } catch (parseError) { return sendJson(res, 400, { error: "Invalid JSON." }); }
      const result = serviceFromInput(input);
      if (result.error) return sendJson(res, 400, { error: result.error });
      const inventory = readInventory();
      const group = ensureGroupFor(inventory, result.item.host, result.item.category);
      group.services = (group.services || []).concat(result.item);
      writeInventory(inventory);
      sendJson(res, 201, { service: Object.assign({ groupId: group.id }, result.item) });
    });
    return true;
  }

  if (urlPath.startsWith("/api/services/") && req.method === "PUT") {
    const serviceId = decodeURIComponent(urlPath.slice("/api/services/".length));
    readBody(req, (error, body) => {
      if (error) return sendJson(res, 400, { error: "Could not read request body." });
      let input;
      try { input = JSON.parse(body || "{}"); } catch (parseError) { return sendJson(res, 400, { error: "Invalid JSON." }); }
      const inventory = readInventory();
      const location = findServiceLocation(inventory, serviceId);
      const existing = location ? location.group.services[location.index] : { id: serviceId };
      const result = serviceFromInput(input, existing);
      if (result.error) return sendJson(res, 400, { error: result.error });
      result.item.id = serviceId;
      if (location) {
        if (location.group.host === result.item.host && location.group.category === result.item.category) {
          location.group.services[location.index] = result.item;
        } else {
          location.group.services.splice(location.index, 1);
          const target = ensureGroupFor(inventory, result.item.host, result.item.category);
          target.services = (target.services || []).concat(result.item);
        }
      } else {
        const target = ensureGroupFor(inventory, result.item.host, result.item.category);
        target.services = (target.services || []).concat(result.item);
      }
      writeInventory(inventory);
      sendJson(res, 200, { service: result.item });
    });
    return true;
  }

  if (urlPath.startsWith("/api/services/") && req.method === "DELETE") {
    const serviceId = decodeURIComponent(urlPath.slice("/api/services/".length));
    const inventory = readInventory();
    const location = findServiceLocation(inventory, serviceId);
    if (location) location.group.services.splice(location.index, 1);
    tombstone(inventory, serviceId);
    writeInventory(inventory);
    sendJson(res, 200, { ok: true });
    return true;
  }

  if (urlPath === "/api/discovery" && req.method === "GET") {
    discoveryPayload().then((payload) => sendJson(res, 200, payload)).catch((error) => sendJson(res, 500, { error: error.message }));
    return true;
  }

  if (urlPath === "/api/proxmox" && req.method === "GET") {
    proxmoxPayload().then((payload) => sendJson(res, 200, payload)).catch((error) => sendJson(res, 500, { configured: false, checkedAt: new Date().toISOString(), guests: [], error: error.message }));
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

  if (urlPath === "/api/history" && req.method === "GET") {
    sendJson(res, 200, readHistory());
    return true;
  }

  if (urlPath === "/api/speed-test" && req.method === "POST") {
    speedPayload().then((payload) => sendJson(res, 200, payload)).catch((error) => sendJson(res, 500, { error: error.message }));
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

  if (filePath !== root && !filePath.startsWith(root + path.sep)) {
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

function startSpeedTestSchedule() {
  const intervalMinutes = Number(process.env.SPEED_TEST_INTERVAL_MINUTES || 0);
  if (!Number.isFinite(intervalMinutes) || intervalMinutes <= 0) return;
  const intervalMs = Math.max(5, intervalMinutes) * 60 * 1000;
  let running = false;
  setInterval(() => {
    if (running) return;
    running = true;
    speedPayload().catch(() => null).finally(() => { running = false; });
  }, intervalMs);
  console.log("internet speed history scheduled every " + Math.round(intervalMs / 60000) + " minutes");
}

server.listen(port, host, () => {
  console.log("jaludash running at http://" + host + ":" + port);
  startSpeedTestSchedule();
});
