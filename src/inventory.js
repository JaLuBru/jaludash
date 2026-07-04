export const inventory = {
  questions: {
    primary: "Is anything broken or needing attention, and where do I look first?",
    secondary: "What did I install, where is it running, how do I reach it, and why does it exist?"
  },
  network: {
    subnet: "192.168.0.0/24",
    gateway: "192.168.0.1",
    dns: "192.168.0.1",
    adminPc: { hostname: "Haderach", ip: "192.168.0.162" }
  },
  hosts: [
    {
      id: "optipi",
      name: "Optiplex 5090 Micro",
      shortName: "optipi",
      role: "Main Proxmox server",
      type: "Proxmox host",
      importance: "high",
      addresses: ["192.168.0.192"],
      health: { managementUrl: "https://192.168.0.192:8006", metricsUrl: "http://192.168.0.192:9100/metrics" },
      hardware: ["Intel Core i5-10500T", "64GB DDR4", "256GB NVMe", "465.76GiB Seagate disk"],
      management: [{ label: "Proxmox", url: "https://192.168.0.192:8006" }, { label: "SSH", url: null }],
      notes: ["Intended future home for more services.", "Movie and series stack may move here later once storage is sorted."]
    },
    {
      id: "serverpi",
      name: "Raspberry Pi 4 Model B",
      shortName: "serverpi",
      role: "Media/download stack and current storage host",
      type: "Linux Docker host",
      importance: "high",
      addresses: ["192.168.0.195", "192.168.0.194", "100.84.79.109"],
      health: { managementUrl: "http://192.168.0.195:9000", metricsUrl: "http://192.168.0.195:9100/metrics" },
      hardware: ["8GB RAM", "Corsair MP600 CORE XT 4TB NVMe"],
      management: [{ label: "Portainer", url: "http://192.168.0.195:9000" }, { label: "SSH", url: null }],
      notes: ["Currently hosts media/download suite because storage is attached here.", "NFS-related services are running, so it may serve or mount shared storage."]
    }
  ],
  computeUnits: [
    { id: "plex-lxc", name: "plex", type: "Proxmox LXC", host: "optipi", proxmoxId: 100, ip: "192.168.0.16", importance: "medium", purpose: "Plex Media Server", services: ["plex"] },
    { id: "docker-lxc", name: "docker", type: "Proxmox LXC", host: "optipi", proxmoxId: 101, ip: "192.168.0.191", tailscaleIp: "100.95.244.85", importance: "high", purpose: "Docker service host", services: ["optipi-app-stack", "optipi-network-stack", "optipi-management-stack"] },
    { id: "pihole-lxc", name: "pihole", type: "Proxmox LXC", host: "optipi", proxmoxId: 102, ip: "192.168.0.190", importance: "high", purpose: "DNS and ad blocking", services: ["pihole"] },
    { id: "win11-vm", name: "Win11", type: "Proxmox VM", host: "optipi", proxmoxId: 103, state: "stopped", importance: "low", purpose: "Windows VM", services: [] }
  ],
  serviceGroups: [
    {
      id: "planned-core",
      name: "Planned Core Services",
      host: "optipi",
      category: "home",
      importance: "critical",
      purpose: "Services that should become central to the homelab.",
      services: [{ id: "homeassistant", name: "Home Assistant", status: "planned", importance: "critical", url: null, purpose: "Main home automation service" }]
    },
    {
      id: "plex-stack",
      name: "Plex Media Server",
      host: "plex-lxc",
      category: "media",
      importance: "medium",
      purpose: "Plex Media Server running in its own Proxmox LXC.",
      services: [{ id: "plex", name: "Plex", status: "documented", importance: "medium", url: "http://192.168.0.16:32400/web", checkUrl: "http://192.168.0.16:32400/identity" }]
    },
    {
      id: "optipi-management-stack",
      name: "Optiplex Management",
      host: "docker-lxc",
      category: "management",
      importance: "high",
      purpose: "Tools used to operate the Docker LXC.",
      services: [
        { id: "portainer-optipi", name: "Portainer", status: "documented", importance: "high", url: "http://192.168.0.191:9000" },
        { id: "watchtower-optipi", name: "Watchtower", status: "documented", importance: "medium", url: null },
        { id: "teleport", name: "Teleport", status: "documented", importance: "medium", url: null }
      ]
    },
    {
      id: "optipi-network-stack",
      name: "Optiplex Network Edge",
      host: "docker-lxc",
      category: "network",
      importance: "high",
      purpose: "Reverse proxy and tunnel services on the Optiplex Docker LXC.",
      services: [
        { id: "traefik", name: "Traefik", status: "documented", importance: "high", url: null },
        { id: "cloudflaretunnel", name: "Cloudflare Tunnel", status: "documented", importance: "high", url: null },
        { id: "pihole", name: "Pi-hole", status: "unstable", importance: "high", url: "http://192.168.0.190/admin/", checkUrl: "http://192.168.0.190/admin/", okStatuses: [200, 401, 403] }
      ]
    },
    {
      id: "optipi-app-stack",
      name: "Optiplex Apps",
      host: "docker-lxc",
      category: "apps",
      importance: "low",
      purpose: "Personal apps and utility containers.",
      services: [
        { id: "mealie", name: "Mealie", status: "documented", importance: "low", url: "http://192.168.0.191:9925" },
        { id: "homebox", name: "Homebox", status: "documented", importance: "low", url: "http://192.168.0.191:3100" },
        { id: "convertx", name: "ConvertX", status: "documented", importance: "low", url: "http://192.168.0.191:3000" },
        { id: "it-tools", name: "IT Tools", status: "documented", importance: "low", url: "http://192.168.0.191:8080" },
        { id: "twitchbot", name: "Twitchbot", status: "documented", importance: "low", url: "http://192.168.0.191:5000" }
      ]
    },
    {
      id: "media-stack",
      name: "Media Download Stack",
      host: "serverpi",
      category: "media",
      importance: "medium",
      purpose: "Movie and series download/management suite.",
      notes: ["Candidate for future migration to the Optiplex once storage is moved."],
      services: [
        { id: "sabnzbd", name: "SABnzbd", status: "documented", importance: "medium", url: "http://192.168.0.195:8070" },
        { id: "qbittorrent", name: "qBittorrent", status: "documented", importance: "medium", url: "http://192.168.0.195:5080" },
        { id: "radarr", name: "Radarr", status: "documented", importance: "medium", url: "http://192.168.0.195:7878" },
        { id: "sonarr", name: "Sonarr", status: "documented", importance: "medium", url: "http://192.168.0.195:8989" },
        { id: "bazarr", name: "Bazarr", status: "documented", importance: "low", url: "http://192.168.0.195:6767" },
        { id: "prowlarr", name: "Prowlarr", status: "documented", importance: "medium", url: "http://192.168.0.195:9696" },
        { id: "tautulli", name: "Tautulli", status: "documented", importance: "low", url: "http://192.168.0.195:8181" }
      ]
    },
    {
      id: "network-pi-stack",
      name: "Raspberry Pi Network Edge",
      host: "serverpi",
      category: "network",
      importance: "high",
      purpose: "Reverse proxy services currently running on the Raspberry Pi.",
      services: [{ id: "nginxproxymanager", name: "Nginx Proxy Manager", status: "documented", importance: "high", url: "http://192.168.0.195:81" }]
    },
    {
      id: "management-pi-stack",
      name: "Raspberry Pi Management",
      host: "serverpi",
      category: "management",
      importance: "high",
      purpose: "Tools used to operate the Raspberry Pi Docker host.",
      services: [
        { id: "portainer-serverpi", name: "Portainer", status: "documented", importance: "high", url: "http://192.168.0.195:9000" },
        { id: "watchtower-serverpi", name: "Watchtower", status: "documented", importance: "medium", url: null }
      ]
    }
  ],
  concerns: [
    { id: "homeassistant-missing", label: "Home Assistant is planned but not running yet", priority: "critical", target: "Home Assistant", nextStep: "Choose installation target and bring it into the core services group." },
    { id: "pihole-unstable", label: "Pi-hole is documented as unreliable", priority: "high", target: "Pi-hole", nextStep: "Verify DNS role, admin URL, and whether clients should use it." },
    { id: "storage-on-pi", label: "Media storage is tied to the Raspberry Pi", priority: "medium", target: "Media Download Stack", nextStep: "Plan NAS or shared storage before moving the stack." },
    { id: "missing-live-checks", label: "No live checks are connected yet", priority: "medium", target: "Dashboard", nextStep: "Add reachability checks in a later bucket." }
  ],
  plannedChanges: [
    { id: "add-homeassistant", title: "Set up Home Assistant", priority: "high", status: "planned", targetHost: "optipi" },
    { id: "move-media-stack", title: "Move media/download stack to Optiplex", priority: "medium", status: "blocked", blocker: "Storage is currently attached to the Raspberry Pi." },
    { id: "future-nas", title: "Add NAS or similar shared storage", priority: "medium", status: "future", purpose: "Documents and pictures should eventually be always reachable." }
  ]
};
