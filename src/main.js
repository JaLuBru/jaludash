import { inventory } from "./inventory.js";
import { serviceDocs } from "./serviceDocs.js";

const rank = { critical: 4, high: 3, medium: 2, low: 1 };
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
  hostHealth: [],
  hostHealthCheckedAt: "",
  hostHealthError: "",
  hostHealthLoading: false
};
const app = document.querySelector("#app");
const fencePattern = new RegExp(String.fromCharCode(96) + String.fromCharCode(96) + String.fromCharCode(96) + "[\\s\\S]*?" + String.fromCharCode(96) + String.fromCharCode(96) + String.fromCharCode(96), "g");

function copyToClipboard(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const original = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => { button.textContent = original; }, 1200);
  }).catch(() => {
    button.textContent = "Copy failed";
    setTimeout(() => { button.textContent = "Copy"; }, 1200);
  });
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

function refreshLiveDataAndRender() {
  Promise.all([loadStatus(), loadHostHealth()]).finally(render);
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

function serviceStatus(serviceId) {
  return state.statusResults[serviceId] || { state: "unknown" };
}

function statusChip(serviceId) {
  const result = serviceStatus(serviceId);
  const label = result.state === "online" ? "Online" : result.state === "offline" ? "Offline" : result.state === "degraded" ? "Degraded" : "Unknown";
  const detail = result.httpStatus ? 'HTTP ' + result.httpStatus : result.error || '';
  return '<span class="status-chip ' + result.state + '" title="' + escapeHtml(detail) + '">' + label + '</span>';
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

function services() {
  return inventory.serviceGroups.flatMap((group) => group.services.map((service) => Object.assign({}, service, {
    group: group.name,
    groupId: group.id,
    groupHost: group.host,
    parentHost: parentHostId(group.host),
    category: group.category,
    groupPurpose: group.purpose,
    groupNotes: group.notes || []
  })));
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
  const tabs = [["overview", "Overview"], ["services", "Services"], ["roadmap", "Roadmap"]];
  app.innerHTML = '<header class="topbar"><div><h1>Personal Homelab</h1></div><div class="top-actions"><button class="theme-toggle" data-status-refresh="true" type="button">' + ((state.statusLoading || state.hostHealthLoading) ? 'Checking...' : 'Refresh live data') + '</button><button class="theme-toggle" data-theme-toggle="true" type="button">' + (state.theme === 'dark' ? 'Light mode' : 'Dark mode') + '</button><aside class="network-card"><span>' + inventory.network.subnet + '</span><strong>' + inventory.network.adminPc.hostname + '</strong><small>' + inventory.network.adminPc.ip + '</small></aside></div></header><nav class="tabs">' + tabs.map(([id, label]) => '<button class="' + ((state.view === id || (state.view === 'service-detail' && id === 'services')) ? 'active' : '') + '" data-view="' + id + '">' + label + '</button>').join('') + '</nav>' + content;
  document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => { state.view = button.dataset.view; Promise.all([loadRoadmapItems(), loadStatus(), loadHostHealth()]).finally(render); }));
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
  const groups = inventory.serviceGroups.filter((group) => group.host === host.id || units.some((unit) => unit.id === group.host));
  const computeHtml = units.map((unit) => '<span>' + escapeHtml(unit.name) + ' <small>' + escapeHtml(unit.type) + '</small></span>').join('') || '<span>Docker on host</span>';
  const groupsHtml = groups.map((group) => '<div><strong>' + escapeHtml(group.name) + '</strong><span>' + group.services.length + ' services on ' + escapeHtml(hostName(group.host)) + '</span></div>').join('');
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
  return inventory.serviceGroups.map((group) => {
    const groupParentHost = parentHostId(group.host);
    const groupText = [group.name, group.category, group.purpose, hostName(group.host), hostName(groupParentHost)].join(' ').toLowerCase();
    const groupMatchesQuery = !query || groupText.includes(query);
    const groupMatchesHost = state.host === 'all' || groupParentHost === state.host || group.host === state.host;
    const groupMatchesCategory = state.category === 'all' || group.category === state.category;
    if (!groupMatchesHost || !groupMatchesCategory) return null;
    const matchedServices = group.services.filter((rawService) => {
      const service = Object.assign({}, rawService, { groupPurpose: group.purpose });
      const serviceText = [service.name, service.importance, service.status, service.url || '', group.name, group.category, hostName(group.host)].join(' ').toLowerCase();
      return (groupMatchesQuery || serviceText.includes(query)) && matchesFocus(service);
    });
    if (matchedServices.length) return Object.assign({}, group, { services: matchedServices });
    return null;
  }).filter(Boolean);
}

function directoryStats() {
  const all = services();
  return { total: all.length, openable: all.filter((item) => item.url).length, missingUrl: all.filter((item) => !item.url).length, important: all.filter((item) => ['critical', 'high'].includes(item.importance)).length };
}

function uniqueCategories() {
  return Array.from(new Set(inventory.serviceGroups.map((group) => group.category))).sort();
}

function serviceDirectory() {
  const stats = directoryStats();
  const groups = visibleGroups();
  const filterButtons = [['all', 'All'], ['openable', 'Has URL'], ['needs-docs', 'Needs Docs'], ['important', 'High/Critical'], ['planned', 'Planned']].map(([id, label]) => '<button class="' + (state.focus === id ? 'active' : '') + '" data-focus="' + id + '">' + label + '</button>').join('');
  const hostOptions = ['<option value="all">All hosts</option>'].concat(inventory.hosts.map((host) => '<option value="' + host.id + '" ' + (state.host === host.id ? 'selected' : '') + '>' + host.shortName + '</option>')).join('');
  const categoryOptions = ['<option value="all">All categories</option>'].concat(uniqueCategories().map((category) => '<option value="' + category + '" ' + (state.category === category ? 'selected' : '') + '>' + category + '</option>')).join('');
  shell('<main class="page service-page"><section class="service-hero"><div><h2>Service directory</h2><p class="status-timestamp">' + (state.statusCheckedAt ? 'Last checked ' + new Date(state.statusCheckedAt).toLocaleTimeString() : 'Status not checked yet') + (state.statusError ? ' / ' + state.statusError : '') + '</p></div><div class="directory-stats"><article><span>Total</span><strong>' + stats.total + '</strong></article><article><span>Openable</span><strong>' + stats.openable + '</strong></article><article><span>No URL</span><strong>' + stats.missingUrl + '</strong></article><article><span>Important</span><strong>' + stats.important + '</strong></article></div></section><section class="service-controls"><label class="search"><span>Search</span><input type="search" value="' + escapeHtml(state.query) + '" placeholder="Try Plex, network, serverpi..." /></label><label><span>Host</span><select data-filter="host">' + hostOptions + '</select></label><label><span>Category</span><select data-filter="category">' + categoryOptions + '</select></label><div class="quick-filters" aria-label="Quick service filters">' + filterButtons + '</div></section><section class="directory-result"><div class="result-line"><strong>' + groups.reduce((sum, group) => sum + group.services.length, 0) + '</strong><span> matching services in </span><strong>' + groups.length + '</strong><span> stacks</span></div></section><section class="group-grid service-groups">' + (groups.map(groupCard).join('') || '<div class="empty">No services match these filters.</div>') + '</section></main>');
  const input = document.querySelector("input[type='search']");
  if (input) { input.addEventListener('input', (event) => { state.query = event.target.value; serviceDirectory(); }); input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
  document.querySelectorAll('[data-filter]').forEach((select) => select.addEventListener('change', (event) => { state[event.target.dataset.filter] = event.target.value; serviceDirectory(); }));
  document.querySelectorAll('[data-focus]').forEach((button) => button.addEventListener('click', () => { state.focus = button.dataset.focus; serviceDirectory(); }));
  document.querySelectorAll('[data-service-id]').forEach((button) => button.addEventListener('click', () => { state.selectedServiceId = button.dataset.serviceId; state.view = 'service-detail'; render(); }));
}

function groupCard(group) {
  const serviceRows = group.services.sort((a, b) => rank[b.importance] - rank[a.importance] || a.name.localeCompare(b.name)).map((service) => serviceRow(service, group)).join('');
  const note = group.notes ? '<p class="note">' + escapeHtml(group.notes.join(' ')) + '</p>' : '';
  return '<article class="group-card enhanced-group"><div class="card-head"><div><h3>' + escapeHtml(group.name) + '</h3><p>' + escapeHtml(group.purpose) + '</p></div><div class="badge-row">' + badge(group.category) + badge(group.importance, group.importance) + '</div></div><div class="group-meta"><span>Runs on ' + escapeHtml(hostName(group.host)) + '</span><span>Physical host: ' + escapeHtml(hostName(parentHostId(group.host))) + '</span><span>' + group.services.length + ' shown</span></div><div class="service-table enhanced-table">' + serviceRows + '</div>' + note + '</article>';
}

function serviceRow(service, group) {
  const issues = serviceIssues(Object.assign({}, service, { groupPurpose: group.purpose }));
  const issueHtml = issues.length ? '<div class="issue-row">' + issues.map((issue) => '<span>' + escapeHtml(issue) + '</span>').join('') + '</div>' : '';
  const details = [service.status, group.category, hostName(group.host)].filter(Boolean).join(' / ');
  const url = service.url ? '<code>' + escapeHtml(service.url.replace(/^https?:\/\//, '')) + '</code>' : '<code>add preferred URL later</code>';
  const docsBadge = serviceDocs[service.id] ? '<span class="docs-badge">Docs</span>' : '<span class="docs-badge missing">No docs</span>';
  const contextualBadges = [state.focus === 'needs-docs' ? docsBadge : '', state.focus === 'important' ? badge(service.importance, service.importance) : '', state.focus === 'needs-docs' ? issueHtml : ''].join('');
  return '<div class="service-row service-row-expanded"><div class="service-name"><div class="service-title-line"><button class="service-title-button" type="button" data-service-id="' + escapeHtml(service.id) + '">' + escapeHtml(service.name) + '</button>' + statusChip(service.id) + '</div><span>' + escapeHtml(details) + '</span></div><div class="service-url">' + url + '</div><div class="service-context-badges">' + contextualBadges + '</div>' + openLink(service) + '</div>';
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
  const docsPanel = doc ? '<div class="wiki-content"><section class="wiki-main runbook-main"><div class="section-title"><p class="eyebrow">Service Notes</p><h2>Runbook</h2></div>' + runbookCommands + '</section><section class="wiki-main"><div class="section-title"><p class="eyebrow">Obsidian Note</p><h2>' + escapeHtml(doc.title) + '</h2></div><p class="source-file">' + escapeHtml(doc.sourceFile) + '</p><div class="wiki-markdown">' + renderMarkdown(doc.markdown) + '</div></section></div>' : '<section class="wiki-main empty-doc"><h2>No Obsidian note matched yet</h2><p>This service still has inventory data, but no app note was matched during import.</p></section>';
  shell('<main class="page wiki-page"><button class="back-button" type="button" data-back-services="true">Back to services</button><section class="wiki-hero"><div><p class="eyebrow">Service Detail</p><h2>' + escapeHtml(service.name) + '</h2><p>' + escapeHtml(service.groupPurpose || service.purpose || 'No purpose documented yet.') + '</p></div><div class="wiki-actions">' + openLink(service) + statusChip(service.id) + badge(service.importance, service.importance) + badge(service.status || 'documented') + '</div></section><section class="wiki-layout"><aside class="wiki-side"><div class="wiki-box"><h3>Inventory</h3><div class="fact-list"><div><span>Stack</span><strong>' + escapeHtml(service.group) + '</strong></div><div><span>Runs on</span><strong>' + escapeHtml(hostName(service.groupHost)) + '</strong></div><div><span>Physical host</span><strong>' + escapeHtml(hostName(service.parentHost)) + '</strong></div><div><span>Category</span><strong>' + escapeHtml(service.category) + '</strong></div><div><span>URL</span><strong>' + escapeHtml(service.url || 'No URL yet') + '</strong></div><div><span>Status detail</span><strong>' + escapeHtml(statusMeta(service.id)) + '</strong></div></div></div><div class="wiki-box"><h3>Documentation status</h3><div class="issue-row wiki-issues">' + (issues.length ? issues.map((issue) => '<span>' + escapeHtml(issue) + '</span>').join('') : '<span>Looks documented</span>') + '</div></div><div class="wiki-box"><h3>Obsidian metadata</h3><div class="fact-list">' + (doc ? frontmatterRows(doc.frontmatter) : '<div><span>source</span><strong>Not matched</strong></div>') + '</div></div><div class="wiki-box link-list"><h3>Links</h3>' + links + '</div></aside>' + docsPanel + '</section></main>');
  const back = document.querySelector('[data-back-services]');
  if (back) back.addEventListener('click', () => { state.view = 'services'; render(); });
  document.querySelectorAll('[data-copy-code]').forEach((button) => button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    copyToClipboard(decodeURIComponent(button.dataset.copyCode || ''), button);
  }));
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

function render() {
  if (state.view === "services") return serviceDirectory();
  if (state.view === "roadmap") return roadmap();
  if (state.view === "service-detail") return serviceDetail();
  overview();
}

Promise.all([loadRoadmapItems(), loadStatus(), loadHostHealth()]).finally(render);
