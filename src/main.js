import { inventory } from "./inventory.js";
const rank = { critical: 4, high: 3, medium: 2, low: 1 };
let serviceDocs = {};
let serviceDocsLoaded = false;
let serviceDocsLoading = false;
const state = {
  view: "overview",
  query: "",
  host: "all",
  category: "all",
  focus: "all",
  selectedServiceId: "",
  theme: localStorage.getItem("jaludash-theme") || "light",
  roadmapItems: [],
  roadmapLoaded: false,
  roadmapError: "",
  savingRoadmap: false,
  statusResults: {},
  statusSummary: { online: 0, degraded: 0, offline: 0, unknown: 0 },
  statusCheckedAt: "",
  statusLoading: false,
  statusError: "",
  history: { status: [], hosts: [], speed: [] },
  historyLoaded: false,
  historyError: "",
  speedTesting: false,
  hostHealth: [],
  hostHealthCheckedAt: "",
  hostHealthError: "",
  hostHealthLoading: false,
  clientInfo: { localIp: "", publicIp: "", hostname: "", error: "" },
  clientInfoLoaded: false,
  discovery: { dockerAvailable: false, containers: [], unknown: [], checkedAt: "" },
  discoveryLoading: false,
  discoveryError: "",
  proxmox: { configured: false, guests: [], checkedAt: "" },
  proxmoxLoading: false,
  proxmoxError: "",
  customServices: [],
  customGroups: [],
  groupModalOpen: false,
  groupDraft: null,
  groupSaveError: "",
  savingGroup: false,
  deletingGroupId: "",
  serviceModalOpen: false,
  serviceDraft: null,
  serviceSaveError: "",
  savingService: false,
  deletingServiceId: ""
};
const app = document.querySelector("#app");
const fencePattern = new RegExp(String.fromCharCode(96) + String.fromCharCode(96) + String.fromCharCode(96) + "[\\s\\S]*?" + String.fromCharCode(96) + String.fromCharCode(96) + String.fromCharCode(96), "g");

async function loadServiceDocs() {
  if (serviceDocsLoaded || serviceDocsLoading) return;
  serviceDocsLoading = true;
  try {
    const module = await import("./serviceDocs.js");
    serviceDocs = module.serviceDocs || {};
    serviceDocsLoaded = true;
  } finally {
    serviceDocsLoading = false;
  }
}

async function copyToClipboard(text, button) {
  const original = button.textContent || "Copy";
  const showResult = (label) => {
    button.textContent = label;
    setTimeout(() => { button.textContent = original; }, 1200);
  };

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "0";
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      const copied = document.execCommand("copy");
      textarea.remove();
      if (!copied) throw new Error("copy command failed");
    }
    showResult("Copied");
  } catch (error) {
    showResult("Copy failed");
  }
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem("jaludash-theme", state.theme);
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
}

async function loadHostHealth() {
  state.hostHealthLoading = true;
  state.hostHealthError = "";
  try {
    const response = await fetch("/api/host-health");
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Host health failed.");
    state.hostHealth = Array.isArray(data.results) ? data.results : [];
    state.hostHealthCheckedAt = data.checkedAt || "";
  } catch (error) {
    state.hostHealthError = error.message;
  } finally {
    state.hostHealthLoading = false;
  }
}

async function loadClientInfo() {
  try {
    const response = await fetch("/api/client-info");
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Client info unavailable.");
    state.clientInfo = Object.assign({}, state.clientInfo, data);
  } catch (error) {
    state.clientInfo.error = error.message;
  }

  try {
    const response = await fetch("https://api.ipify.org?format=json", { cache: "no-store" });
    const data = await response.json();
    state.clientInfo.publicIp = data.ip || "";
  } catch (error) {
    state.clientInfo.publicIp = "";
  } finally {
    state.clientInfoLoaded = true;
  }
}

function clientInfoCard() {
  const info = state.clientInfo || {};
  const title = info.hostname || info.localIp || "This device";
  const local = info.localIp ? "Local " + info.localIp : "Local unknown";
  const pub = info.publicIp ? "Public " + info.publicIp : "Public unknown";
  return '<aside class="network-card"><span>This device</span><strong>' + escapeHtml(title) + '</strong><small>' + escapeHtml(local + ' / ' + pub) + '</small></aside>';
}

async function loadDiscovery() {
  state.discoveryLoading = true;
  state.discoveryError = "";
  try {
    const response = await fetch("/api/discovery");
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Discovery failed.");
    state.discovery = data;
    state.discoveryError = data.error || "";
  } catch (error) {
    state.discoveryError = error.message;
  } finally {
    state.discoveryLoading = false;
  }
}

async function loadProxmox() {
  state.proxmoxLoading = true;
  state.proxmoxError = "";
  try {
    const response = await fetch("/api/proxmox");
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Proxmox failed.");
    state.proxmox = data;
    state.proxmoxError = data.error || "";
  } catch (error) {
    state.proxmoxError = error.message;
    state.proxmox = { configured: false, guests: [], checkedAt: "" };
  } finally {
    state.proxmoxLoading = false;
  }
}

function refreshLiveDataAndRender() {
  Promise.all([loadStatus(), loadHostHealth(), loadDiscovery(), loadProxmox()]).then(loadHistory).finally(render);
}

function formatUptime(seconds) {
  if (!seconds && seconds !== 0) return "Unknown";
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  if (days) return days + "d " + hours + "h";
  return hours + "h";
}

function healthBar(label, metric) {
  if (!metric) return '<div class="health-meter unknown"><span>' + label + '</span><strong>Unknown</strong></div>';
  return '<div class="health-meter"><div><span>' + label + '</span><strong>' + metric.usedPercent + '%</strong></div><div class="meter-track"><span style="width:' + Math.min(100, metric.usedPercent) + '%"></span></div><small>' + metric.usedGiB + ' / ' + metric.totalGiB + ' GiB</small></div>';
}

function hostHealthSection() {
  const cards = state.hostHealth.map((host) => {
    const managementState = host.management && host.management.state ? host.management.state : 'unknown';
    const metrics = host.metrics || {};
    return '<article class="host-health-card"><div class="card-head"><div><h3>' + escapeHtml(host.name) + '</h3><p>' + escapeHtml(host.shortName) + ' / ' + escapeHtml((host.addresses || []).join(', ')) + '</p></div><div class="health-states"><span class="status-chip ' + managementState + '">Mgmt ' + managementState + '</span><span class="status-chip ' + host.metricsState + '">Metrics ' + host.metricsState + '</span></div></div><div class="health-grid">' + healthBar('Memory', metrics.memory) + healthBar('Root disk', metrics.disk) + '<div class="health-meter unknown"><span>Uptime</span><strong>' + escapeHtml(formatUptime(metrics.uptimeSeconds)) + '</strong></div></div><div class="host-health-foot"><span>' + escapeHtml(host.metricsError || 'Metrics connected') + '</span><code>' + escapeHtml(host.metricsUrl || '') + '</code></div></article>';
  }).join('') || '<div class="empty">No host health targets configured yet.</div>';
  return '<section class="host-health-section"><div class="section-title"><p class="eyebrow">Host Health</p><h2>Management reachability and exporter-backed stats</h2><p class="status-timestamp">' + (state.hostHealthCheckedAt ? 'Last checked ' + new Date(state.hostHealthCheckedAt).toLocaleTimeString() : 'Host health not checked yet') + (state.hostHealthError ? ' / ' + escapeHtml(state.hostHealthError) : '') + '</p></div><div class="host-health-grid">' + cards + '</div></section>';
}

async function loadStatus() {
  state.statusLoading = true;
  state.statusError = "";
  try {
    const response = await fetch("/api/status");
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Status checks failed.");
    state.statusResults = Object.fromEntries((data.results || []).map((result) => [result.id, result]));
    state.statusSummary = data.summary || { online: 0, degraded: 0, offline: 0, unknown: 0 };
    state.statusCheckedAt = data.checkedAt || "";
  } catch (error) {
    state.statusError = error.message;
  } finally {
    state.statusLoading = false;
  }
}

async function loadHistory() {
  try {
    const response = await fetch("/api/history");
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "History unavailable.");
    state.history = {
      status: Array.isArray(data.status) ? data.status : [],
      hosts: Array.isArray(data.hosts) ? data.hosts : [],
      speed: Array.isArray(data.speed) ? data.speed : []
    };
    state.historyLoaded = true;
    state.historyError = "";
  } catch (error) {
    state.historyError = error.message;
  }
}

async function runSpeedTest() {
  state.speedTesting = true;
  trends();
  try {
    const response = await fetch("/api/speed-test", { method: "POST" });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Speed test failed.");
    state.history.speed = state.history.speed.concat(data).slice(-1000);
    state.historyError = "";
  } catch (error) {
    state.historyError = error.message;
  } finally {
    state.speedTesting = false;
    trends();
  }
}

function serviceStatus(serviceId) {
  return state.statusResults[serviceId] || { state: "unknown" };
}

function statusChip(serviceId) {
  const result = serviceStatus(serviceId);
  const label = result.state === "online" ? "Online" : result.state === "offline" ? "Offline" : result.state === "degraded" ? "Degraded" : "Unknown";
  const detail = [label, result.httpStatus ? 'HTTP ' + result.httpStatus : '', result.error || ''].filter(Boolean).join(' / ');
  return '<span class="status-chip dot-only" title="' + escapeHtml(detail) + '" aria-label="' + escapeHtml(label) + '"><span class="status-dot ' + escapeHtml(result.state || 'unknown') + '"></span></span>';
}

function statusMeta(serviceId) {
  const result = serviceStatus(serviceId);
  if (!result || result.state === "unknown") return "Not checked yet";
  const parts = [];
  if (result.httpStatus) parts.push('HTTP ' + result.httpStatus);
  if (typeof result.latencyMs === 'number') parts.push(result.latencyMs + ' ms');
  if (result.error) parts.push(result.error);
  return parts.join(' / ') || result.state;
}

function refreshStatusAndRender() {
  refreshLiveDataAndRender();
}

async function loadCustomServices() {
  try {
    const response = await fetch("/api/services");
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Service API unavailable");
    state.customServices = Array.isArray(data.services) ? data.services : [];
  } catch (error) {
    state.serviceSaveError = error.message;
  }
}

async function loadCustomGroups() {
  try {
    const response = await fetch("/api/groups");
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Group API unavailable");
    state.customGroups = Array.isArray(data.groups) ? data.groups : [];
  } catch (error) {
    state.groupSaveError = error.message;
  }
}

function discoveryToDraft(container) {
  const port = (container.ports || []).find((item) => item.publicPort) || (container.ports || [])[0] || {};
  const publicPort = port.publicPort || port.privatePort || "";
  const url = publicPort ? "http://192.168.0.191:" + publicPort : "";
  return {
    name: container.name || "",
    url,
    checkUrl: url,
    host: "docker-lxc",
    category: "apps",
    importance: "low",
    status: "documented",
    purpose: container.image ? "Container image: " + container.image : "",
    discovery: { type: "docker", id: container.id, image: container.image, state: container.state }
  };
}

function emptyServiceDraft() {
  return { name: "", url: "", checkUrl: "", host: "docker-lxc", category: "apps", importance: "low", status: "documented", purpose: "" };
}

function discoveredServiceOptions() {
  return (state.discovery.unknown || []).filter((container) => container && (container.name || container.id));
}

function findDiscoveredService(value) {
  const selected = String(value || "").trim().toLowerCase();
  if (!selected) return null;
  return discoveredServiceOptions().find((container) => String(container.name || "").trim().toLowerCase() === selected || String(container.id || "").trim().toLowerCase() === selected) || null;
}

function applyDraftToForm(draft, form) {
  if (!draft || !form) return;
  state.serviceDraft = Object.assign({}, state.serviceDraft || {}, draft);
  ["name", "url", "checkUrl", "host", "category", "importance", "status", "purpose"].forEach((field) => {
    if (form.elements[field]) form.elements[field].value = draft[field] || "";
  });
}

function applyDiscoveredService(container, form) {
  if (!container || !form) return;
  applyDraftToForm(discoveryToDraft(container), form);
}

function editServiceDraft(service) {
  return Object.assign(emptyServiceDraft(), service || {}, {
    host: service && (service.host || service.groupHost) ? (service.host || service.groupHost) : "docker-lxc",
    category: service && service.category ? service.category : "apps",
    discovery: service && service.discovery ? service.discovery : null
  });
}

function openServiceModal(draft) {
  state.serviceDraft = Object.assign(emptyServiceDraft(), draft || {});
  state.serviceModalOpen = true;
  state.serviceSaveError = "";
  render();
}

function closeServiceModal() {
  state.serviceModalOpen = false;
  state.serviceDraft = null;
  state.serviceSaveError = "";
  render();
}

async function saveService(form) {
  const payload = Object.fromEntries(new FormData(form).entries());
  payload.discovery = state.serviceDraft && state.serviceDraft.discovery ? state.serviceDraft.discovery : null;
  const editingId = state.serviceDraft && state.serviceDraft.id ? state.serviceDraft.id : "";
  state.savingService = true;
  state.serviceSaveError = "";
  render();
  try {
    const response = await fetch(editingId ? "/api/services/" + encodeURIComponent(editingId) : "/api/services", { method: editingId ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Could not save service.");
    if (editingId) {
      const index = state.customServices.findIndex((service) => service.id === editingId || service.overrideOf === editingId);
      if (index === -1) state.customServices.unshift(data.service);
      else state.customServices = state.customServices.map((service, serviceIndex) => serviceIndex === index ? data.service : service);
    } else state.customServices.unshift(data.service);
    state.serviceModalOpen = false;
    state.serviceDraft = null;
    state.savingService = false;
    refreshLiveDataAndRender();
  } catch (error) {
    state.serviceSaveError = error.message;
    state.savingService = false;
    render();
  }
}

async function deleteService(id) {
  const service = services().find((item) => item.id === id);
  if (!service) return;
  if (!window.confirm('Delete ' + service.name + '?')) return;
  state.deletingServiceId = id;
  render();
  try {
    const response = await fetch('/api/services/' + encodeURIComponent(id), { method: 'DELETE' });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Could not delete service.');
    const index = state.customServices.findIndex((item) => item.id === id || item.overrideOf === id);
    if (index === -1 && !service.dashboardAdded) state.customServices.unshift({ id, overrideOf: id, source: 'dashboard', deleted: true });
    else state.customServices = state.customServices.filter((item) => item.id !== id && item.overrideOf !== id);
    state.deletingServiceId = '';
    refreshLiveDataAndRender();
  } catch (error) {
    state.serviceSaveError = error.message;
    state.deletingServiceId = '';
    render();
  }
}

function serviceModal() {
  if (!state.serviceModalOpen) return "";
  const draft = state.serviceDraft || emptyServiceDraft();
  const hostOptions = ["docker-lxc", "serverpi", "optipi", "plex-lxc", "pihole-lxc"].map((host) => '<option value="' + host + '" ' + (draft.host === host ? 'selected' : '') + '>' + escapeHtml(hostName(host)) + '</option>').join('');
  const categoryOptions = ["apps", "media", "management", "network", "home", "other"].map((category) => '<option value="' + category + '" ' + (draft.category === category ? 'selected' : '') + '>' + escapeHtml(category) + '</option>').join('');
  const importanceOptions = ["low", "medium", "high", "critical"].map((importance) => '<option value="' + importance + '" ' + (draft.importance === importance ? 'selected' : '') + '>' + escapeHtml(importance) + '</option>').join('');
  const statusOptions = ["documented", "planned", "unstable", "unknown"].map((status) => '<option value="' + status + '" ' + (draft.status === status ? 'selected' : '') + '>' + escapeHtml(status) + '</option>').join('');
  const aiNote = '<div class="ai-note"><div><strong>AI fill</strong><span>Manual add works now. OpenAI/Anthropic fill comes next after choosing where API keys live on the server.</span></div><button type="button" disabled>AI fill</button></div>';
  const discovered = discoveredServiceOptions();
  const discoveredList = discovered.length ? '<datalist id="discovered-service-options">' + discovered.map((container) => '<option value="' + escapeHtml(container.name || container.id) + '">' + escapeHtml(container.image || container.status || 'Discovered service') + '</option>').join('') + '</datalist><p class="field-hint">Pick a discovered service here to prefill the form.</p>' : '';
  const nameList = discovered.length ? ' list="discovered-service-options"' : '';
  return '<div class="modal-backdrop"><form class="service-modal" data-service-form="true"><div class="card-head"><div><p class="eyebrow">' + (draft.id ? 'Edit Service' : 'Add Service') + '</p><h2>Service details</h2></div><button type="button" class="icon-close" data-close-service-modal="true">Close</button></div>' + aiNote + '<label><span>Name</span><input name="name" data-service-name-input="true" required maxlength="120"' + nameList + ' value="' + escapeHtml(draft.name) + '" /></label>' + discoveredList + '<label><span>URL</span><input name="url" maxlength="300" placeholder="http://192.168.0.191:1234" value="' + escapeHtml(draft.url) + '" /></label><label><span>Check URL</span><input name="checkUrl" maxlength="300" value="' + escapeHtml(draft.checkUrl || draft.url || '') + '" /></label><div class="form-row"><label><span>Host</span><select name="host">' + hostOptions + '</select></label><label><span>Category</span><select name="category">' + categoryOptions + '</select></label></div><div class="form-row"><label><span>Importance</span><select name="importance">' + importanceOptions + '</select></label><label><span>Status</span><select name="status">' + statusOptions + '</select></label></div><label><span>Purpose</span><textarea name="purpose" rows="4" maxlength="260">' + escapeHtml(draft.purpose) + '</textarea></label><div class="modal-actions"><button class="primary-action" type="submit" ' + (state.savingService ? 'disabled' : '') + '>' + (state.savingService ? 'Saving...' : (draft.id ? 'Save changes' : 'Save service')) + '</button><button type="button" data-close-service-modal="true">Cancel</button></div>' + (draft.id ? '<div class="modal-danger-zone"><button type="button" class="danger" data-delete-service-from-modal="' + escapeHtml(draft.id) + '">Delete service</button></div>' : '') + (state.serviceSaveError ? '<p class="form-error">' + escapeHtml(state.serviceSaveError) + '</p>' : '') + '</form></div>';
}

function wireServiceModal() {
  document.querySelectorAll('[data-close-service-modal]').forEach((button) => button.addEventListener('click', closeServiceModal));
  const form = document.querySelector('[data-service-form]');
  if (form) {
    const nameInput = form.querySelector('[data-service-name-input]');
    if (nameInput) {
      const maybePrefill = () => applyDiscoveredService(findDiscoveredService(nameInput.value), form);
      nameInput.addEventListener('input', maybePrefill);
      nameInput.addEventListener('change', maybePrefill);
    }
    const deleteButton = form.querySelector('[data-delete-service-from-modal]');
    if (deleteButton) deleteButton.addEventListener('click', () => deleteService(deleteButton.dataset.deleteServiceFromModal));
    form.addEventListener('submit', (event) => { event.preventDefault(); saveService(form); });
  }
}

function emptyGroupDraft() {
  return { name: "", host: "docker-lxc", category: "apps", importance: "low", purpose: "", notes: "" };
}

function editGroupDraft(group) {
  return Object.assign(emptyGroupDraft(), group || {}, { notes: Array.isArray(group && group.notes) ? group.notes.join("\n") : (group && group.notes) || "" });
}

function openGroupModal(draft) {
  state.groupDraft = Object.assign(emptyGroupDraft(), draft || {});
  state.groupModalOpen = true;
  state.groupSaveError = "";
  render();
}

function closeGroupModal() {
  state.groupModalOpen = false;
  state.groupDraft = null;
  state.groupSaveError = "";
  render();
}

async function saveGroup(form) {
  const payload = Object.fromEntries(new FormData(form).entries());
  const editingId = state.groupDraft && state.groupDraft.id ? state.groupDraft.id : "";
  state.savingGroup = true;
  state.groupSaveError = "";
  render();
  try {
    const response = await fetch(editingId ? "/api/groups/" + encodeURIComponent(editingId) : "/api/groups", { method: editingId ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Could not save card.");
    const index = state.customGroups.findIndex((group) => group.id === editingId || group.overrideOf === editingId);
    if (editingId && index !== -1) state.customGroups = state.customGroups.map((group, groupIndex) => groupIndex === index ? data.group : group);
    else state.customGroups.unshift(data.group);
    state.groupModalOpen = false;
    state.groupDraft = null;
    state.savingGroup = false;
    render();
  } catch (error) {
    state.groupSaveError = error.message;
    state.savingGroup = false;
    render();
  }
}

async function deleteGroup(id) {
  const group = serviceGroups().find((item) => item.id === id);
  if (!group) return;
  if (!window.confirm('Delete ' + group.name + '? Services inside it will be hidden until moved or restored.')) return;
  state.deletingGroupId = id;
  render();
  try {
    const response = await fetch('/api/groups/' + encodeURIComponent(id), { method: 'DELETE' });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Could not delete card.');
    const index = state.customGroups.findIndex((item) => item.id === id || item.overrideOf === id);
    if (index === -1) state.customGroups.unshift({ id, overrideOf: id, source: 'dashboard', deleted: true });
    else state.customGroups = state.customGroups.map((item, itemIndex) => itemIndex === index ? Object.assign({}, item, { deleted: true }) : item);
    state.deletingGroupId = "";
    closeGroupModal();
  } catch (error) {
    state.groupSaveError = error.message;
    state.deletingGroupId = "";
    render();
  }
}

function groupModal() {
  if (!state.groupModalOpen) return "";
  const draft = state.groupDraft || emptyGroupDraft();
  const hostOptions = ["docker-lxc", "serverpi", "optipi", "plex-lxc", "pihole-lxc"].map((host) => '<option value="' + host + '" ' + (draft.host === host ? 'selected' : '') + '>' + escapeHtml(hostName(host)) + '</option>').join('');
  const categoryOptions = ["apps", "media", "management", "network", "home", "other"].map((category) => '<option value="' + category + '" ' + (draft.category === category ? 'selected' : '') + '>' + escapeHtml(category) + '</option>').join('');
  const importanceOptions = ["low", "medium", "high", "critical"].map((importance) => '<option value="' + importance + '" ' + (draft.importance === importance ? 'selected' : '') + '>' + escapeHtml(importance) + '</option>').join('');
  return '<div class="modal-backdrop"><form class="service-modal" data-group-form="true"><div class="card-head"><div><p class="eyebrow">' + (draft.id ? 'Edit Card' : 'Add Card') + '</p><h2>Service card</h2></div><button type="button" class="icon-close" data-close-group-modal="true">Close</button></div><label><span>Name</span><input name="name" required maxlength="120" value="' + escapeHtml(draft.name) + '" /></label><div class="form-row"><label><span>Host</span><select name="host">' + hostOptions + '</select></label><label><span>Category</span><select name="category">' + categoryOptions + '</select></label></div><label><span>Importance</span><select name="importance">' + importanceOptions + '</select></label><label><span>Purpose</span><textarea name="purpose" rows="3" maxlength="260">' + escapeHtml(draft.purpose) + '</textarea></label><label><span>Notes</span><textarea name="notes" rows="3" maxlength="500">' + escapeHtml(draft.notes || '') + '</textarea></label><div class="modal-actions"><button class="primary-action" type="submit" ' + (state.savingGroup ? 'disabled' : '') + '>' + (state.savingGroup ? 'Saving...' : (draft.id ? 'Save changes' : 'Save card')) + '</button><button type="button" data-close-group-modal="true">Cancel</button></div>' + (draft.id ? '<div class="modal-danger-zone"><button type="button" class="danger" data-delete-group-from-modal="' + escapeHtml(draft.id) + '">Delete card</button></div>' : '') + (state.groupSaveError ? '<p class="form-error">' + escapeHtml(state.groupSaveError) + '</p>' : '') + '</form></div>';
}

function wireGroupModal() {
  document.querySelectorAll('[data-close-group-modal]').forEach((button) => button.addEventListener('click', closeGroupModal));
  const form = document.querySelector('[data-group-form]');
  if (form) {
    const deleteButton = form.querySelector('[data-delete-group-from-modal]');
    if (deleteButton) deleteButton.addEventListener('click', () => deleteGroup(deleteButton.dataset.deleteGroupFromModal));
    form.addEventListener('submit', (event) => { event.preventDefault(); saveGroup(form); });
  }
}

async function loadRoadmapItems() {
  try {
    const response = await fetch("/api/roadmap");
    if (!response.ok) throw new Error("Roadmap API unavailable");
    const data = await response.json();
    state.roadmapItems = Array.isArray(data.items) ? data.items : [];
    state.roadmapLoaded = true;
    state.roadmapError = "";
  } catch (error) {
    state.roadmapItems = [];
    state.roadmapLoaded = true;
    state.roadmapError = "Custom roadmap items are unavailable in this preview.";
  }
}

async function saveRoadmapItem(form) {
  const payload = Object.fromEntries(new FormData(form).entries());
  state.savingRoadmap = true;
  roadmap();
  try {
    const response = await fetch("/api/roadmap", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Could not save roadmap item.");
    state.roadmapItems.unshift(data.item);
    state.roadmapError = "";
    state.savingRoadmap = false;
    roadmap();
  } catch (error) {
    state.roadmapError = error.message;
    state.savingRoadmap = false;
    roadmap();
  }
}

async function updateRoadmapStatus(id, status) {
  state.roadmapError = "";
  try {
    const response = await fetch("/api/roadmap/" + encodeURIComponent(id), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Could not update roadmap item.");
    state.roadmapItems = state.roadmapItems.map((item) => item.id === id ? data.item : item);
    roadmap();
  } catch (error) {
    state.roadmapError = error.message;
    roadmap();
  }
}

async function deleteRoadmapItem(id) {
  state.roadmapError = "";
  try {
    const response = await fetch("/api/roadmap/" + encodeURIComponent(id), { method: "DELETE" });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Could not delete roadmap item.");
    state.roadmapItems = state.roadmapItems.filter((item) => item.id !== id);
    roadmap();
  } catch (error) {
    state.roadmapError = error.message;
    roadmap();
  }
}

applyTheme();

function hostName(id) {
  const host = inventory.hosts.find((item) => item.id === id);
  const unit = inventory.computeUnits.find((item) => item.id === id);
  return (host && host.shortName) || (unit && unit.name) || id;
}

function parentHostId(id) {
  const directHost = inventory.hosts.find((host) => host.id === id);
  if (directHost) return directHost.id;
  const unit = inventory.computeUnits.find((item) => item.id === id);
  return unit ? unit.host : id;
}

function inventoryServiceIds() {
  return new Set(serviceGroups().flatMap((group) => (group.services || []).map((service) => service.id)));
}

function groupOverrides() {
  return new Map(state.customGroups.filter((group) => group.overrideOf).map((group) => [group.overrideOf, group]));
}

function dashboardGroups() {
  return state.customGroups.filter((group) => !group.overrideOf && !group.deleted);
}

function serviceGroups() {
  const overrides = groupOverrides();
  return inventory.serviceGroups.map((group) => Object.assign({}, group, overrides.get(group.id) || {}, { id: group.id })).filter((group) => !group.deleted).concat(dashboardGroups());
}

function serviceOverrides() {
  const ids = inventoryServiceIds();
  return new Map(state.customServices.filter((service) => service.overrideOf || ids.has(service.id)).map((service) => [service.overrideOf || service.id, service]));
}

function dashboardAddedServices() {
  const ids = inventoryServiceIds();
  return state.customServices.filter((service) => !service.overrideOf && !ids.has(service.id) && !service.deleted);
}

function matchingServiceGroup(service) {
  const serviceHost = service.host || "docker-lxc";
  const serviceParent = parentHostId(serviceHost);
  return serviceGroups().find((group) => group.category === service.category && (group.host === serviceHost || parentHostId(group.host) === serviceParent)) ||
    serviceGroups().find((group) => group.category === service.category) ||
    serviceGroups().find((group) => group.host === serviceHost || parentHostId(group.host) === serviceParent) ||
    null;
}

function decorateService(service, group, flags) {
  return Object.assign({}, service, flags || {}, {
    group: group.name,
    groupId: group.id,
    groupHost: group.host,
    parentHost: parentHostId(group.host),
    category: service.category || group.category,
    groupPurpose: group.purpose,
    groupNotes: group.notes || []
  });
}

function services() {
  const overrides = serviceOverrides();
  const inventoryServices = serviceGroups().flatMap((group) => (group.services || []).map((service) => {
    const override = overrides.get(service.id);
    return decorateService(Object.assign({}, service, override || {}, { id: service.id }), group, { dashboardOverride: Boolean(override) });
  }));
  const added = dashboardAddedServices().map((service) => {
    const group = matchingServiceGroup(service) || { id: "dashboard-added", name: "Dashboard Added", host: service.host || "docker-lxc", category: service.category || "apps", purpose: "Services added from jaludash.", notes: [] };
    return decorateService(service, group, { dashboardAdded: true });
  });
  return inventoryServices.concat(added);
}

function findService(serviceId) {
  return services().find((service) => service.id === serviceId) || null;
}

function badge(text, tone) {
  return '<span class="badge ' + (tone || "neutral") + '">' + escapeHtml(text) + '</span>';
}

function openLink(item) {
  if (!item.url) return '<span class="muted compact-missing">No URL</span>';
  return '<a class="open" href="' + escapeHtml(item.url) + '" target="_blank" rel="noreferrer">Open</a>';
}

function shell(content) {
  const tabs = [["overview", "Overview"], ["storage", "Storage"], ["trends", "Trends"], ["services", "Services"], ["discovery", "Discovery"], ["roadmap", "Roadmap"]];
  app.innerHTML = '<header class="topbar"><div><h1>Personal Homelab</h1></div><div class="top-actions"><button class="theme-toggle" data-status-refresh="true" type="button">' + ((state.statusLoading || state.hostHealthLoading) ? 'Checking...' : 'Refresh live data') + '</button><button class="theme-toggle" data-theme-toggle="true" type="button">' + (state.theme === 'dark' ? 'Light mode' : 'Dark mode') + '</button>' + clientInfoCard() + '</div></header><nav class="tabs">' + tabs.map(([id, label]) => '<button class="' + ((state.view === id || (state.view === 'service-detail' && id === 'services')) ? 'active' : '') + '" data-view="' + id + '">' + label + '</button>').join('') + '</nav>' + content;
  document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => { state.view = button.dataset.view; render(); if (state.view === "roadmap" && !state.roadmapLoaded) loadRoadmapItems().finally(render); }));
  const statusRefresh = document.querySelector("[data-status-refresh]");
  if (statusRefresh) statusRefresh.addEventListener("click", refreshStatusAndRender);
  const themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) themeToggle.addEventListener("click", () => { state.theme = state.theme === "dark" ? "light" : "dark"; applyTheme(); render(); });
}

function overview() {
  const allServices = services();
  const highOrCritical = allServices.filter((item) => ["critical", "high"].includes(item.importance)).length;
  const attention = inventory.concerns.sort((a, b) => rank[b.priority] - rank[a.priority]).map((item) => '<article class="attention ' + item.priority + '">' + badge(item.priority, item.priority) + '<h3>' + escapeHtml(item.label) + '</h3><p>' + escapeHtml(item.nextStep) + '</p><span>' + escapeHtml(item.target) + '</span></article>').join('');
  shell('<main class="page"><section class="stats"><article><span>Hosts</span><strong>' + inventory.hosts.length + '</strong></article><article><span>Compute units</span><strong>' + inventory.computeUnits.length + '</strong></article><article><span>Documented services</span><strong>' + allServices.length + '</strong></article><article><span>High or critical</span><strong>' + highOrCritical + '</strong></article><article><span>Online</span><strong>' + (state.statusSummary.online || 0) + '</strong></article><article><span>Offline</span><strong>' + (state.statusSummary.offline || 0) + '</strong></article></section><section class="panel"><div class="section-title"><p class="eyebrow">Needs Attention</p><h2>First places to look</h2></div><div class="attention-grid">' + attention + '</div></section>' + hostHealthSection() + '<section><div class="section-title"><p class="eyebrow">Inventory</p><h2>Hosts and what they run</h2></div><div class="host-grid">' + inventory.hosts.map(hostCard).join('') + '</div></section></main>');
}

function hostCard(host) {
  const units = inventory.computeUnits.filter((unit) => unit.host === host.id);
  const groups = serviceGroups().filter((group) => group.host === host.id || units.some((unit) => unit.id === group.host));
  const computeHtml = units.map((unit) => '<span>' + escapeHtml(unit.name) + ' <small>' + escapeHtml(unit.type) + '</small></span>').join('') || '<span>Docker on host</span>';
  const groupsHtml = groups.map((group) => '<div><strong>' + escapeHtml(group.name) + '</strong><span>' + ((group.services || []).length) + ' services on ' + escapeHtml(hostName(group.host)) + '</span></div>').join('');
  return '<article class="host-card"><div class="card-head"><div><h3>' + escapeHtml(host.name) + '</h3><p>' + escapeHtml(host.role) + '</p></div>' + badge(host.importance, host.importance) + '</div><div class="chips"><span>' + escapeHtml(host.type) + '</span>' + host.addresses.map((address) => '<span>' + escapeHtml(address) + '</span>').join('') + '</div><div class="mini"><h4>Hardware</h4><p>' + escapeHtml(host.hardware.join(' / ')) + '</p></div><div class="mini"><h4>Compute</h4><div class="chips">' + computeHtml + '</div></div><div class="mini"><h4>Stacks</h4><div class="stack-list">' + groupsHtml + '</div></div></article>';
}

function serviceIssues(service) {
  const issues = [];
  if (!service.url) issues.push('No URL');
  if (service.status === 'planned') issues.push('Planned');
  if (service.status === 'unstable') issues.push('Unstable');
  if (!service.purpose && !service.groupPurpose) issues.push('No purpose');
  return issues;
}

function matchesFocus(service) {
  if (state.focus === 'all') return true;
  if (state.focus === 'openable') return Boolean(service.url);
  if (state.focus === 'needs-docs') return serviceIssues(service).length > 0 || !serviceDocs[service.id];
  if (state.focus === 'important') return ['critical', 'high'].includes(service.importance);
  if (state.focus === 'planned') return service.status === 'planned';
  return true;
}

function visibleGroups() {
  const query = state.query.trim().toLowerCase();
  const allServices = services();
  const groups = serviceGroups().map((group) => {
    const groupParentHost = parentHostId(group.host);
    const groupText = [group.name, group.category, group.purpose, hostName(group.host), hostName(groupParentHost)].join(' ').toLowerCase();
    const groupMatchesQuery = !query || groupText.includes(query);
    const groupMatchesHost = state.host === 'all' || groupParentHost === state.host || group.host === state.host;
    const groupMatchesCategory = state.category === 'all' || group.category === state.category;
    if (!groupMatchesHost || !groupMatchesCategory) return null;
    const matchedServices = allServices.filter((service) => service.groupId === group.id).filter((service) => {
      const serviceText = [service.name, service.importance, service.status, service.url || '', group.name, group.category, hostName(service.host || group.host)].join(' ').toLowerCase();
      return (groupMatchesQuery || serviceText.includes(query)) && matchesFocus(service);
    });
    if (matchedServices.length || (!query && state.focus === 'all' && group.source === 'dashboard')) return Object.assign({}, group, { services: matchedServices });
    return null;
  }).filter(Boolean);
  const fallbackServices = allServices.filter((service) => service.groupId === "dashboard-added" && matchesFocus(service));
  if (fallbackServices.length) groups.push({ id: "dashboard-added", name: "Dashboard Added", host: "docker-lxc", category: "apps", importance: "low", purpose: "Services added from jaludash.", services: fallbackServices });
  return groups;
}

function directoryStats() {
  const all = services();
  return { total: all.length, openable: all.filter((item) => item.url).length, missingUrl: all.filter((item) => !item.url).length, important: all.filter((item) => ['critical', 'high'].includes(item.importance)).length };
}

function uniqueCategories() {
  return Array.from(new Set(serviceGroups().map((group) => group.category))).sort();
}

function serviceDirectory() {
  const stats = directoryStats();
  const groups = visibleGroups();
  const filterButtons = [['all', 'All'], ['openable', 'Has URL'], ['needs-docs', 'Needs Docs'], ['important', 'High/Critical'], ['planned', 'Planned']].map(([id, label]) => '<button class="' + (state.focus === id ? 'active' : '') + '" data-focus="' + id + '">' + label + '</button>').join('');
  const hostOptions = ['<option value="all">All hosts</option>'].concat(inventory.hosts.map((host) => '<option value="' + host.id + '" ' + (state.host === host.id ? 'selected' : '') + '>' + host.shortName + '</option>')).join('');
  const categoryOptions = ['<option value="all">All categories</option>'].concat(uniqueCategories().map((category) => '<option value="' + category + '" ' + (state.category === category ? 'selected' : '') + '>' + category + '</option>')).join('');
  shell('<main class="page service-page"><section class="service-hero"><div><h2>Service directory</h2><p class="status-timestamp">' + (state.statusCheckedAt ? 'Last checked ' + new Date(state.statusCheckedAt).toLocaleTimeString() : 'Status not checked yet') + (state.statusError ? ' / ' + state.statusError : '') + '</p><div class="service-hero-actions"><button class="primary-action inline-action" type="button" data-add-service="true">Add Service</button><button class="theme-toggle inline-action" type="button" data-add-group="true">Add Card</button></div></div><div class="directory-stats"><article><span>Total</span><strong>' + stats.total + '</strong></article><article><span>Openable</span><strong>' + stats.openable + '</strong></article><article><span>No URL</span><strong>' + stats.missingUrl + '</strong></article><article><span>Important</span><strong>' + stats.important + '</strong></article></div></section><section class="service-controls"><label class="search"><span>Search</span><input type="search" value="' + escapeHtml(state.query) + '" placeholder="Try Plex, network, serverpi..." /></label><label><span>Host</span><select data-filter="host">' + hostOptions + '</select></label><label><span>Category</span><select data-filter="category">' + categoryOptions + '</select></label><div class="quick-filters" aria-label="Quick service filters">' + filterButtons + '</div></section><section class="directory-result"><div class="result-line"><strong>' + groups.reduce((sum, group) => sum + ((group.services || []).length), 0) + '</strong><span> matching services in </span><strong>' + groups.length + '</strong><span> stacks</span></div></section><section class="group-grid service-groups">' + (groups.map(groupCard).join('') || '<div class="empty">No services match these filters.</div>') + '</section></main>');
  const input = document.querySelector("input[type='search']");
  if (input) { input.addEventListener('input', (event) => { state.query = event.target.value; serviceDirectory(); }); input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
  document.querySelectorAll('[data-filter]').forEach((select) => select.addEventListener('change', (event) => { state[event.target.dataset.filter] = event.target.value; serviceDirectory(); }));
  document.querySelectorAll('[data-focus]').forEach((button) => button.addEventListener('click', () => { state.focus = button.dataset.focus; serviceDirectory(); }));
  document.querySelectorAll('[data-service-id]').forEach((button) => button.addEventListener('click', () => { state.selectedServiceId = button.dataset.serviceId; state.view = 'service-detail'; render(); }));
  document.querySelectorAll('[data-edit-service]').forEach((button) => button.addEventListener('click', () => {
    const service = services().find((item) => item.id === button.dataset.editService);
    if (service) openServiceModal(editServiceDraft(service));
  }));
  document.querySelectorAll('[data-delete-service]').forEach((button) => button.addEventListener('click', () => deleteService(button.dataset.deleteService)));
  document.querySelectorAll('[data-edit-group]').forEach((button) => button.addEventListener('click', () => {
    const group = serviceGroups().find((item) => item.id === button.dataset.editGroup);
    if (group) openGroupModal(editGroupDraft(group));
  }));
  const addButton = document.querySelector('[data-add-service]');
  if (addButton) addButton.addEventListener('click', () => openServiceModal(emptyServiceDraft()));
  const addGroupButton = document.querySelector('[data-add-group]');
  if (addGroupButton) addGroupButton.addEventListener('click', () => openGroupModal(emptyGroupDraft()));
}

function groupCard(group) {
  const shownServices = group.services || [];
  const serviceRows = shownServices.sort((a, b) => rank[b.importance] - rank[a.importance] || a.name.localeCompare(b.name)).map((service) => serviceRow(service, group)).join('');
  const note = group.notes ? '<p class="note">' + escapeHtml(group.notes.join(' ')) + '</p>' : '';
  return '<article class="group-card enhanced-group"><div class="card-head"><div><h3>' + escapeHtml(group.name) + '</h3><p>' + escapeHtml(group.purpose) + '</p></div><div class="badge-row">' + badge(group.category) + '<button class="mini-edit" type="button" data-edit-group="' + escapeHtml(group.id) + '">Edit</button></div></div><div class="group-meta"><span>Runs on ' + escapeHtml(hostName(group.host)) + '</span><span>Physical host: ' + escapeHtml(hostName(parentHostId(group.host))) + '</span><span>' + shownServices.length + ' shown</span></div><div class="service-table enhanced-table">' + (serviceRows || '<div class="empty inline-empty">No services in this card yet.</div>') + '</div>' + note + '</article>';
}

function serviceRow(service, group) {
  const issues = serviceIssues(Object.assign({}, service, { groupPurpose: group.purpose }));
  const issueHtml = issues.length ? '<div class="issue-row">' + issues.map((issue) => '<span>' + escapeHtml(issue) + '</span>').join('') + '</div>' : '';
  const url = service.url ? '<code>' + escapeHtml(service.url.replace(/^https?:\/\//, '')) + '</code>' : '<code>add preferred URL later</code>';
  const docsBadge = serviceDocs[service.id] ? '<span class="docs-badge">Docs</span>' : '<span class="docs-badge missing">No docs</span>';
  const contextualBadges = [state.focus === 'needs-docs' ? docsBadge : '', state.focus === 'important' ? badge(service.importance, service.importance) : '', state.focus === 'needs-docs' ? issueHtml : ''].join('');
  const editable = true;
  const statusLabel = service.status && service.status !== 'documented' ? '<span>' + escapeHtml(service.status) + '</span>' : '';
  const serviceActions = editable ? '<div class="service-edit-actions"><button type="button" data-edit-service="' + escapeHtml(service.id) + '">Edit</button>' + openLink(service) + '</div>' : openLink(service);
  return '<div class="service-row service-row-expanded"><div class="service-name"><div class="service-title-line"><button class="service-title-button" type="button" data-service-id="' + escapeHtml(service.id) + '">' + escapeHtml(service.name) + '</button>' + statusChip(service.id) + '</div><span>' + [group.category, hostName(group.host)].filter(Boolean).map(escapeHtml).join(' / ') + '</span></div><div class="service-url">' + url + '</div><div class="service-context-badges">' + statusLabel + contextualBadges + '</div><div class="service-row-actions">' + serviceActions + '</div></div>';
}

function cleanObsidianText(value) {
  return String(value || '')
    .replace(/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, '$1')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1');
}

function renderInlineMarkdown(value) {
  return escapeHtml(cleanObsidianText(value)).replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
}

function isMarkdownTable(block) {
  const lines = block.split(/\n/).map((line) => line.trim()).filter(Boolean);
  return lines.length >= 2 && lines[0].includes('|') && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(lines[1]);
}

function renderTable(block) {
  const rows = block.split(/\n/).map((line) => line.trim()).filter(Boolean);
  const toCells = (line) => line.replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
  const header = toCells(rows[0]);
  const body = rows.slice(2).map(toCells);
  return '<div class="table-wrap"><table><thead><tr>' + header.map((cell) => '<th>' + renderInlineMarkdown(cell) + '</th>').join('') + '</tr></thead><tbody>' + body.map((row) => '<tr>' + row.map((cell) => '<td>' + renderInlineMarkdown(cell) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
}

function renderMarkdown(markdown) {
  const withoutCode = cleanObsidianText(String(markdown || '').replace(fencePattern, '')).replace(/^---$/gm, '');
  return withoutCode.split(/\n{2,}/).map((block) => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (isMarkdownTable(trimmed)) return renderTable(trimmed);
    if (/^###\s+/.test(trimmed)) return '<h4>' + renderInlineMarkdown(trimmed.replace(/^###\s+/, '')) + '</h4>';
    if (/^##\s+/.test(trimmed)) return '<h3>' + renderInlineMarkdown(trimmed.replace(/^##\s+/, '')) + '</h3>';
    if (/^#\s+/.test(trimmed)) return '<h2>' + renderInlineMarkdown(trimmed.replace(/^#\s+/, '')) + '</h2>';
    if (trimmed.startsWith('- ')) return '<ul>' + trimmed.split(/\n/).map((line) => '<li>' + renderInlineMarkdown(line.replace(/^[-*]\s+/, '')) + '</li>').join('') + '</ul>';
    return '<p>' + renderInlineMarkdown(trimmed).replace(/\n/g, '<br>') + '</p>';
  }).join('');
}

function frontmatterRows(frontmatter) {
  return Object.entries(frontmatter || {}).filter(([, value]) => Array.isArray(value) ? value.length : Boolean(value)).map(([key, value]) => '<div><span>' + escapeHtml(key) + '</span><strong>' + escapeHtml(Array.isArray(value) ? value.join(', ') : value) + '</strong></div>').join('');
}


function commandRank(block) {
  const language = String(block.language || '').toLowerCase();
  if (['bash', 'sh', 'shell', 'zsh'].includes(language)) return 0;
  if (block.code && /docker|curl|sudo|systemctl|nano|mkdir|compose/i.test(block.code)) return 1;
  return 2;
}

function renderRunbookCommands(doc) {
  if (!doc || !doc.codeBlocks || !doc.codeBlocks.length) return '<p class="muted">No command snippets found in the Obsidian note.</p>';
  return doc.codeBlocks.slice().sort((a, b) => commandRank(a) - commandRank(b)).map((block) => {
    const language = block.language || 'text';
    const important = commandRank(block) <= 1 ? ' important' : '';
    const encoded = encodeURIComponent(block.code);
    return '<details class="code-detail' + important + '" open><summary><span>' + escapeHtml(language) + '</span><button type="button" class="copy-code" data-copy-code="' + encoded + '">Copy</button></summary><pre><code>' + escapeHtml(block.code) + '</code></pre></details>';
  }).join('');
}

function serviceDetail() {
  const service = findService(state.selectedServiceId);
  if (!service) { state.view = 'services'; return serviceDirectory(); }
  const doc = serviceDocs[service.id];
  const issues = serviceIssues(service);
  const links = doc && doc.links.length ? doc.links.map((link) => '<a href="' + escapeHtml(link.url) + '" target="_blank" rel="noreferrer">' + escapeHtml(link.label) + '</a>').join('') : '<span class="muted">No links found in the Obsidian note.</span>';
  const runbookCommands = renderRunbookCommands(doc);
  const docsPanel = doc ? '<div class="wiki-content"><section class="wiki-main runbook-main"><div class="section-title"><p class="eyebrow">Service Notes</p><h2>Runbook</h2></div>' + runbookCommands + '</section><section class="wiki-main"><div class="section-title"><p class="eyebrow">Obsidian Note</p><h2>' + escapeHtml(doc.title) + '</h2></div><p class="source-file">' + escapeHtml(doc.sourceFile) + '</p><div class="wiki-markdown">' + renderMarkdown(doc.markdown) + '</div></section></div>' : (!serviceDocsLoaded ? '<section class="wiki-main empty-doc"><h2>Loading documentation</h2><p>The dashboard is loading service notes in the background.</p></section>' : '<section class="wiki-main empty-doc"><h2>No Obsidian note matched yet</h2><p>This service still has inventory data, but no app note was matched during import.</p></section>');
  shell('<main class="page wiki-page"><button class="back-button" type="button" data-back-services="true">Back to services</button><section class="wiki-hero"><div><p class="eyebrow">Service Detail</p><h2>' + escapeHtml(service.name) + '</h2><p>' + escapeHtml(service.groupPurpose || service.purpose || 'No purpose documented yet.') + '</p></div><div class="wiki-actions">' + openLink(service) + statusChip(service.id) + badge(service.importance, service.importance) + (service.status && service.status !== 'documented' ? badge(service.status) : '') + '</div></section><section class="wiki-layout"><aside class="wiki-side"><div class="wiki-box"><h3>Inventory</h3><div class="fact-list"><div><span>Stack</span><strong>' + escapeHtml(service.group) + '</strong></div><div><span>Runs on</span><strong>' + escapeHtml(hostName(service.groupHost)) + '</strong></div><div><span>Physical host</span><strong>' + escapeHtml(hostName(service.parentHost)) + '</strong></div><div><span>Category</span><strong>' + escapeHtml(service.category) + '</strong></div><div><span>URL</span><strong>' + escapeHtml(service.url || 'No URL yet') + '</strong></div><div><span>Status detail</span><strong>' + escapeHtml(statusMeta(service.id)) + '</strong></div></div></div><div class="wiki-box"><h3>Documentation status</h3><div class="issue-row wiki-issues">' + (issues.length ? issues.map((issue) => '<span>' + escapeHtml(issue) + '</span>').join('') : '<span>Looks documented</span>') + '</div></div><div class="wiki-box"><h3>Obsidian metadata</h3><div class="fact-list">' + (doc ? frontmatterRows(doc.frontmatter) : '<div><span>source</span><strong>Not matched</strong></div>') + '</div></div><div class="wiki-box link-list"><h3>Links</h3>' + links + '</div></aside>' + docsPanel + '</section></main>');
  const back = document.querySelector('[data-back-services]');
  if (back) back.addEventListener('click', () => { state.view = 'services'; render(); });
  document.querySelectorAll('[data-copy-code]').forEach((button) => button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    copyToClipboard(decodeURIComponent(button.dataset.copyCode || ''), button);
  }));
}


function storageItems() {
  return state.hostHealth.flatMap((host) => ((host.metrics && host.metrics.storage && host.metrics.storage.filesystems) || []).map((fs) => Object.assign({}, fs, { hostName: host.name, hostShortName: host.shortName, metricsState: host.metricsState })));
}

function storageSummary(items) {
  return {
    total: items.length,
    watch: items.filter((item) => ['medium', 'high', 'critical'].includes(item.severity)).length,
    critical: items.filter((item) => item.severity === 'critical').length,
    capacity: Math.round(items.reduce((sum, item) => sum + (item.totalGiB || 0), 0) * 10) / 10
  };
}

function storageCard(item) {
  const label = item.hostShortName + ' ' + item.mount;
  const flags = [item.fstype, item.readonly ? 'read only' : '', item.deviceError ? 'device error' : ''].filter(Boolean).join(' / ');
  const usage = item.usedPercent === null || item.usedPercent === undefined ? 'Unknown' : escapeHtml(item.usedPercent) + '%';
  const detail = item.usedGiB === null || item.usedGiB === undefined ? 'Mounted disk, usage unavailable' : escapeHtml(item.usedGiB) + ' / ' + escapeHtml(item.totalGiB) + ' GiB used, ' + escapeHtml(item.availableGiB) + ' GiB free';
  return '<article class="storage-card ' + escapeHtml(item.severity) + '"><div class="card-head"><div><h3>' + escapeHtml(label) + '</h3><p>' + escapeHtml(item.device || 'unknown device') + '</p></div>' + badge(item.severity, item.severity) + '</div><div class="health-meter"><div><span>Used</span><strong>' + usage + '</strong></div><div class="meter-track"><span style="width:' + Math.min(100, item.usedPercent || 0) + '%"></span></div><small>' + detail + '</small></div><p class="storage-meta">' + escapeHtml(flags || 'filesystem') + (item.expected ? ' / expected mount' : '') + '</p></article>';
}

function diskCard(host, disk) {
  const details = [disk.model, disk.serial, disk.temperatureC !== null && disk.temperatureC !== undefined ? disk.temperatureC + ' C' : '', disk.wearPercent !== null && disk.wearPercent !== undefined ? disk.wearPercent + '% wear' : ''].filter(Boolean).join(' / ');
  return '<article class="disk-card"><div><strong>' + escapeHtml(disk.device) + '</strong><span>' + escapeHtml(host.shortName) + '</span></div><p>' + escapeHtml(details || disk.type || 'disk') + '</p><span class="status-chip ' + (disk.health === 'healthy' ? 'online' : disk.health === 'attention' ? 'degraded' : 'unknown') + '">' + escapeHtml(disk.health || 'unknown') + '</span></article>';
}

function storageOverview() {
  const items = storageItems();
  const summary = storageSummary(items);
  const diskCards = state.hostHealth.flatMap((host) => ((host.metrics && host.metrics.storage && host.metrics.storage.disks) || []).map((disk) => diskCard(host, disk))).join('') || '<div class="empty">No physical disk details found yet.</div>';
  shell('<main class="page storage-page"><section class="stats"><article><span>Filesystems</span><strong>' + summary.total + '</strong></article><article><span>Watch</span><strong>' + summary.watch + '</strong></article><article><span>Critical</span><strong>' + summary.critical + '</strong></article><article><span>Capacity</span><strong>' + summary.capacity + ' GiB</strong></article></section><section><div class="section-title"><p class="eyebrow">Storage Overview</p><h2>Disks and mounts needing attention</h2><p class="status-timestamp">' + (state.hostHealthCheckedAt ? 'Last checked ' + new Date(state.hostHealthCheckedAt).toLocaleTimeString() : 'Storage not checked yet') + (state.hostHealthError ? ' / ' + escapeHtml(state.hostHealthError) : '') + '</p></div><div class="storage-grid">' + (items.map(storageCard).join('') || '<div class="empty">No storage metrics available yet.</div>') + '</div></section><section><div class="section-title"><p class="eyebrow">Physical Disks</p><h2>SMART and device hints</h2></div><div class="disk-grid">' + diskCards + '</div></section></main>');
}

function discoveryOverview() {
  const containers = state.discovery.containers || [];
  const unknown = state.discovery.unknown || [];
  const proxmoxGuests = state.proxmox.guests || [];
  const cards = containers.map((container) => {
    const ports = (container.ports || []).map((port) => [port.publicPort, port.privatePort].filter(Boolean).join('->') + '/' + (port.type || 'tcp')).join(', ');
    return '<article class="discovery-card ' + (container.known ? 'known' : 'unknown') + '"><div class="card-head"><div><h3>' + escapeHtml(container.name || container.id) + '</h3><p>' + escapeHtml(container.image) + '</p></div><span class="status-chip ' + (container.state === 'running' ? 'online' : 'unknown') + '">' + escapeHtml(container.state || 'unknown') + '</span></div><div class="group-meta"><span>' + (container.known ? 'In inventory' : 'New to inventory') + '</span>' + (ports ? '<span>' + escapeHtml(ports) + '</span>' : '') + '</div><p class="storage-meta">' + escapeHtml(container.status || '') + '</p>' + (!container.known ? '<button class="primary-action inline-action" type="button" data-add-discovered="' + escapeHtml(container.id) + '">Add</button>' : '') + '</article>'; 
  }).join('') || '<div class="empty">No Docker containers found yet.</div>';
  const proxmoxCards = proxmoxGuests.map((guest) => {
    const ips = (guest.ips || []).length ? guest.ips.join(', ') : 'No IP in config';
    const stateClass = guest.status === 'running' ? 'online' : guest.status === 'stopped' ? 'offline' : 'unknown';
    return '<article class="discovery-card"><div class="card-head"><div><h3>' + escapeHtml(guest.name) + '</h3><p>' + escapeHtml(guest.type.toUpperCase() + ' ' + guest.vmid + ' on ' + guest.node) + '</p></div><span class="status-chip ' + stateClass + '">' + escapeHtml(guest.status || 'unknown') + '</span></div><div class="group-meta"><span>' + escapeHtml(ips) + '</span><span>' + escapeHtml(formatUptime(guest.uptime || 0)) + '</span></div></article>';
  }).join('') || '<div class="empty">' + escapeHtml(state.proxmoxError || 'No Proxmox guests found yet.') + '</div>';
  shell('<main class="page discovery-page"><section class="stats"><article><span>Docker</span><strong>' + (state.discovery.dockerAvailable ? 'OK' : 'Off') + '</strong></article><article><span>Containers</span><strong>' + containers.length + '</strong></article><article><span>New</span><strong>' + unknown.length + '</strong></article><article><span>Proxmox</span><strong>' + (state.proxmox.configured ? proxmoxGuests.length : 'Off') + '</strong></article></section><section><div class="section-title"><p class="eyebrow">Proxmox</p><h2>LXC and VM state</h2><p class="status-timestamp">' + (state.proxmox.checkedAt ? 'Last checked ' + new Date(state.proxmox.checkedAt).toLocaleTimeString() : 'Proxmox not checked yet') + (state.proxmoxError ? ' / ' + escapeHtml(state.proxmoxError) : '') + '</p></div><div class="discovery-results">' + proxmoxCards + '</div></section><section><div class="section-title"><p class="eyebrow">Auto Discovery</p><h2>Docker containers compared with inventory</h2><p class="status-timestamp">' + (state.discovery.checkedAt ? 'Last checked ' + new Date(state.discovery.checkedAt).toLocaleTimeString() : 'Discovery not checked yet') + (state.discoveryError ? ' / ' + escapeHtml(state.discoveryError) : '') + '</p></div><div class="discovery-results">' + cards + '</div></section></main>');
  document.querySelectorAll('[data-add-discovered]').forEach((button) => button.addEventListener('click', () => { const container = containers.find((item) => item.id === button.dataset.addDiscovered); openServiceModal(discoveryToDraft(container || {})); }));
}

function roadmapCard(item, sourceLabel) {
  const body = item.blocker || item.purpose || item.note || (item.targetHost ? ('Target host: ' + hostName(item.targetHost)) : item.target || 'No details yet.');
  const meta = sourceLabel ? sourceLabel + ' / ' + item.status : item.status;
  const isDashboard = item.source === 'dashboard' || sourceLabel === 'dashboard';
  const isDone = item.status === 'done';
  const actions = isDashboard ? '<div class="roadmap-actions"><button type="button" data-roadmap-done="' + escapeHtml(item.id) + '">' + (isDone ? 'Reopen' : 'Done') + '</button><button type="button" class="danger" data-roadmap-delete="' + escapeHtml(item.id) + '">Delete</button></div>' : '';
  return '<article class="roadmap-card ' + (isDone ? 'done' : '') + '">' + badge(item.priority || 'medium', item.priority || 'medium') + '<h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(body) + '</p><span>' + escapeHtml(meta || 'planned') + '</span>' + actions + '</article>';
}

function roadmapForm() {
  return '<form class="roadmap-form" data-roadmap-form="true"><div><p class="eyebrow">Add Roadmap Item</p><h2>Capture the next thing while you remember it</h2></div><label><span>Title</span><input name="title" required maxlength="120" placeholder="Example: Add NAS storage overview" /></label><div class="form-row"><label><span>Priority</span><select name="priority"><option value="medium">Medium</option><option value="high">High</option><option value="critical">Critical</option><option value="low">Low</option></select></label><label><span>Status</span><select name="status"><option value="planned">Planned</option><option value="in-progress">In progress</option><option value="blocked">Blocked</option><option value="future">Future</option><option value="done">Done</option></select></label></div><label><span>Target</span><input name="target" maxlength="80" placeholder="Optional: service, host, or stack" /></label><label><span>Note</span><textarea name="note" maxlength="500" rows="4" placeholder="Optional detail or blocker"></textarea></label><button class="primary-action" type="submit" ' + (state.savingRoadmap ? 'disabled' : '') + '>' + (state.savingRoadmap ? 'Saving...' : 'Add item') + '</button>' + (state.roadmapError ? '<p class="form-error">' + escapeHtml(state.roadmapError) + '</p>' : '') + '</form>';
}

function roadmap() {
  const plannedCards = inventory.plannedChanges.map((item) => roadmapCard(item, 'inventory')).join('');
  const customCards = state.roadmapItems.map((item) => roadmapCard(item, 'dashboard')).join('');
  const customSection = customCards || '<div class="empty">No dashboard-added roadmap items yet.</div>';
  shell('<main class="page roadmap-page"><section class="roadmap-header"><div class="section-title"><p class="eyebrow">Living Documentation</p><h2>Planned changes and discovery model</h2></div>' + roadmapForm() + '</section><section><div class="section-title"><p class="eyebrow">Dashboard Items</p><h2>Added from the app</h2></div><div class="roadmap-grid">' + customSection + '</div></section><section><div class="section-title"><p class="eyebrow">Inventory Items</p><h2>Seeded from the model</h2></div><div class="roadmap-grid">' + plannedCards + '</div></section><section class="panel discovery"><div><p class="eyebrow">Future Auto-Discovery</p><h2>What the app should learn by itself later</h2></div><div class="discovery-grid"><article><strong>Proxmox</strong><span>LXCs, VMs, state, host resources</span></article><article><strong>Docker</strong><span>Containers, images, ports, health</span></article><article><strong>Reachability</strong><span>HTTP checks, admin URLs, broken services</span></article><article><strong>History</strong><span>Storage trend, status timeline, changes</span></article></div></section></main>');
  const form = document.querySelector('[data-roadmap-form]');
  if (form) form.addEventListener('submit', (event) => { event.preventDefault(); saveRoadmapItem(form); });
  document.querySelectorAll('[data-roadmap-done]').forEach((button) => button.addEventListener('click', () => {
    const item = state.roadmapItems.find((entry) => entry.id === button.dataset.roadmapDone);
    updateRoadmapStatus(button.dataset.roadmapDone, item && item.status === 'done' ? 'planned' : 'done');
  }));
  document.querySelectorAll('[data-roadmap-delete]').forEach((button) => button.addEventListener('click', () => {
    deleteRoadmapItem(button.dataset.roadmapDelete);
  }));
}

function lastItem(items) {
  return items && items.length ? items[items.length - 1] : null;
}

function formatTrendNumber(value, unit) {
  if (value === null || value === undefined || !Number.isFinite(value)) return "unknown";
  const rounded = Math.abs(value) >= 100 ? Math.round(value) : Math.round(value * 10) / 10;
  return rounded + (unit || "");
}

function formatTrendTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function resourceDetail(usedGiB, totalGiB, usedPercent) {
  const percent = usedPercent === null || usedPercent === undefined ? "usage unknown" : formatTrendNumber(usedPercent, "%");
  if (usedGiB === null || usedGiB === undefined || totalGiB === null || totalGiB === undefined) return percent;
  return formatTrendNumber(usedGiB, " GiB") + " / " + formatTrendNumber(totalGiB, " GiB") + " used, " + percent;
}

function trendLine(items, valueFn, options) {
  const config = options || {};
  const entries = (items || []).slice(-30).map((item) => ({ item, value: valueFn(item) })).filter((entry) => entry.value !== null && entry.value !== undefined && Number.isFinite(entry.value));
  if (!entries.length) return '<div class="empty inline-empty">No trend data yet.</div>';
  const values = entries.map((entry) => entry.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const spread = Math.max(1, max - min);
  const points = entries.map((entry, index) => {
    const x = entries.length === 1 ? 50 : Math.round((index / (entries.length - 1)) * 1000) / 10;
    const y = Math.round((92 - ((entry.value - min) / spread) * 76) * 10) / 10;
    return { x, y, value: entry.value, checkedAt: entry.item && entry.item.checkedAt };
  });
  const polyline = points.map((point) => point.x + "," + point.y).join(" ");
  const mid = min + ((max - min) / 2);
  const firstTime = formatTrendTime(points[0].checkedAt);
  const lastTime = formatTrendTime(points[points.length - 1].checkedAt);
  const pointDots = points.map((point) => '<circle cx="' + point.x + '" cy="' + point.y + '" r="2.2"><title>' + escapeHtml(formatTrendNumber(point.value, config.unit || "") + (point.checkedAt ? " at " + formatTrendTime(point.checkedAt) : "")) + '</title></circle>').join('');
  return '<div class="trend-line"><div class="trend-y-axis"><span>' + escapeHtml(formatTrendNumber(max, config.unit || "")) + '</span><span>' + escapeHtml(formatTrendNumber(mid, config.unit || "")) + '</span><span>' + escapeHtml(formatTrendNumber(min, config.unit || "")) + '</span></div><div class="trend-plot"><svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="' + escapeHtml(config.label || "trend line") + '"><polyline points="' + polyline + '"></polyline>' + pointDots + '</svg><div class="trend-x-axis"><span>' + escapeHtml(firstTime || "start") + '</span><span>' + escapeHtml(lastTime || "now") + '</span></div></div></div>';
}

function hostTrendRows() {
  const latest = lastItem(state.history.hosts) || { hosts: [] };
  const hosts = latest.hosts || [];
  return hosts.map((host) => {
    const hostSamples = state.history.hosts.map((sample) => {
      const match = (sample.hosts || []).find((item) => item.id === host.id);
      return match ? Object.assign({ checkedAt: sample.checkedAt }, match) : null;
    }).filter(Boolean);
    const media = host.storage && host.storage.find((fs) => fs.mount === '/media/wd2001ext4');
    const mediaSamples = hostSamples.map((sample) => {
      const match = (sample.storage || []).find((fs) => fs.mount === '/media/wd2001ext4' || fs.device === '/dev/sda1');
      return match ? Object.assign({ checkedAt: sample.checkedAt }, match) : null;
    }).filter(Boolean);
    const mediaTrend = media ? '<div class="mini"><div class="trend-heading"><h4>wd2001ext4</h4><span>' + escapeHtml(resourceDetail(media.usedGiB, media.totalGiB, media.usedPercent)) + '</span></div>' + trendLine(mediaSamples, (item) => item.usedPercent, { unit: "%", label: "wd2001ext4 disk usage" }) + '</div>' : '';
    return '<article class="trend-card"><div class="card-head"><div><h3>' + escapeHtml(host.id) + '</h3><p>' + escapeHtml(host.metricsState || 'unknown') + '</p></div>' + badge(host.rootUsedPercent === null || host.rootUsedPercent === undefined ? 'unknown' : host.rootUsedPercent + '%') + '</div><div class="mini"><div class="trend-heading"><h4>Root disk</h4><span>' + escapeHtml(resourceDetail(host.rootUsedGiB, host.rootTotalGiB, host.rootUsedPercent)) + '</span></div>' + trendLine(hostSamples, (item) => item.rootUsedPercent, { unit: "%", label: "root disk usage" }) + '</div><div class="mini"><div class="trend-heading"><h4>Memory</h4><span>' + escapeHtml(resourceDetail(host.memoryUsedGiB, host.memoryTotalGiB, host.memoryUsedPercent)) + '</span></div>' + trendLine(hostSamples, (item) => item.memoryUsedPercent, { unit: "%", label: "memory usage" }) + '</div>' + mediaTrend + '</article>';
  }).join('') || '<div class="empty">No host trend samples yet.</div>';
}

function trends() {
  const latestStatus = lastItem(state.history.status);
  const latestSpeed = lastItem(state.history.speed);
  const speedText = latestSpeed ? (latestSpeed.downloadMbps ? latestSpeed.downloadMbps + ' Mbps' : latestSpeed.state || 'unknown') : 'No test yet';
  const offlineText = latestStatus ? ((latestStatus.offline || []).length + ' offline / ' + ((latestStatus.degraded || []).length) + ' degraded') : 'No status samples yet';
  shell('<main class="page trends-page"><section class="stats"><article><span>Status samples</span><strong>' + state.history.status.length + '</strong></article><article><span>Host samples</span><strong>' + state.history.hosts.length + '</strong></article><article><span>Speed tests</span><strong>' + state.history.speed.length + '</strong></article><article><span>Latest speed</span><strong>' + escapeHtml(speedText) + '</strong></article></section><section class="service-hero"><div><h2>History and trends</h2><p class="status-timestamp">' + escapeHtml(offlineText) + (state.historyError ? ' / ' + escapeHtml(state.historyError) : '') + '</p></div><button class="primary-action inline-action" type="button" data-speed-test="true" ' + (state.speedTesting ? 'disabled' : '') + '>' + (state.speedTesting ? 'Testing...' : 'Run speed test') + '</button></section><section><div class="section-title"><p class="eyebrow">Reachability</p><h2>Reachable services over time</h2></div><div class="trend-grid"><article class="trend-card wide-trend"><h3>Online services</h3>' + trendLine(state.history.status, (item) => (item.summary && item.summary.online) || 0, { label: "online services" }) + '</article><article class="trend-card"><h3>Offline</h3>' + trendLine(state.history.status, (item) => (item.summary && item.summary.offline) || 0, { label: "offline services" }) + '</article></div></section><section><div class="section-title"><p class="eyebrow">Hosts</p><h2>Resource trends</h2></div><div class="trend-grid">' + hostTrendRows() + '</div></section><section><div class="section-title"><p class="eyebrow">Internet</p><h2>Download speed history</h2></div><div class="trend-grid"><article class="trend-card wide-trend"><h3>Mbps</h3>' + trendLine(state.history.speed, (item) => item.downloadMbps, { unit: " Mbps", label: "download speed" }) + '<p class="storage-meta">' + (latestSpeed ? 'Last checked ' + new Date(latestSpeed.checkedAt).toLocaleString() : 'Run a test to start history.') + '</p></article></div></section></main>');
  const button = document.querySelector('[data-speed-test]');
  if (button) button.addEventListener('click', runSpeedTest);
}

function renderContent() {
  if (state.view === "storage") return storageOverview();
  if (state.view === "trends") return trends();
  if (state.view === "services") return serviceDirectory();
  if (state.view === "discovery") return discoveryOverview();
  if (state.view === "roadmap") return roadmap();
  if (state.view === "service-detail") return serviceDetail();
  overview();
}

function render() {
  renderContent();
  app.insertAdjacentHTML("beforeend", serviceModal() + groupModal());
  wireServiceModal();
  wireGroupModal();
}

render();
loadServiceDocs().finally(render);
Promise.all([loadCustomServices(), loadCustomGroups()]).finally(render);
loadRoadmapItems().finally(render);
loadClientInfo().finally(render);
loadHistory().finally(render);
refreshLiveDataAndRender();
