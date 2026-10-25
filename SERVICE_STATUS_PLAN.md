# Service Status Setup Plan

Status: the first bucket (reachability checks) is implemented, and several of the "later layers" have since landed too. See "Implementation Status" at the bottom; the original plan text is kept for history.

Goal: answer "is anything broken or unreachable, and where should I look first?" without requiring Grafana or Prometheus on day one.

## Recommended First Status Layer

Start with dashboard-owned reachability checks:

- HTTP/HTTPS checks for web UIs and services with URLs
- TCP checks for important ports where HTTP is not useful
- Read-only checks only; no restart or control actions yet
- Status history comes later, after current status is reliable

## Server Requirements

The dashboard container must be able to reach LAN services:

- Optiplex Docker LXC: 192.168.0.191
- Proxmox host: 192.168.0.192
- Plex LXC: 192.168.0.123
- Pi-hole LXC: 192.168.0.190
- Raspberry Pi: 192.168.0.195

The first reachability bucket needed no Docker socket or Proxmox token. That was only true for that bucket: the later layers now use a read-only Docker socket mount (`/var/run/docker.sock:ro`) and an optional Proxmox API token (see Implementation Status).

## Quick Connectivity Tests From The Docker LXC

Run these on the Docker LXC before enabling dashboard checks:

    curl -I http://192.168.0.191:9000
    curl -I http://192.168.0.195:9000
    curl -I http://192.168.0.123:32400
    curl -I http://192.168.0.190

If those work from the LXC but not from the dashboard container, test inside the container:

    docker exec -it jaludash sh
    wget -S --spider http://192.168.0.191:9000

## Bucket: Basic Service Status

Plan (implemented, see below):

1. Add status check definitions to the service inventory.
2. Add server endpoint /api/status that checks configured services.
3. Show status chips on Overview, Services, and Service Detail pages.
4. Add a refresh button and auto-refresh interval.
5. Checkpoint: verify the dashboard correctly shows reachable/unreachable for known services.

## Later Status Layers (original list)

- Docker container discovery from Docker API/socket or a small agent
- Proxmox LXC/VM state from Proxmox API token
- Disk usage via node exporter, SSH command runner, or a tiny host agent
- Status history and trends

## Implementation Status

Implemented:

- Reachability checks: `GET /api/status` runs HTTP/HTTPS checks (timeout `STATUS_TIMEOUT_MS`, default 4000) for services in the inventory. Status chips appear on the Overview, Services and service detail pages, with a "Refresh live data" button. Read-only, no restart or control actions.
- Docker container discovery: `GET /api/discovery` reads the local Docker engine through the read-only socket mount and compares containers with the inventory. Docker socket access is powerful even when read-only, so keep jaludash LAN-private.
- Proxmox LXC/VM state: `GET /api/proxmox` uses an optional API token (`PROXMOX_API_URL`, `PROXMOX_NODE`, `PROXMOX_API_TOKEN_ID`, `PROXMOX_API_TOKEN_SECRET`); a read-only role such as `PVEAuditor` is enough. See `PROXMOX_SETUP.md`.
- Host health and storage: `GET /api/host-health` reads node_exporter on the Proxmox host and Raspberry Pi. See `HOST_HEALTH_SETUP.md`.
- Status history and trends: `GET /api/history`, stored in `/app/data/history.json`, plus internet speed tests (`POST /api/speed-test`, optional schedule via `SPEED_TEST_INTERVAL_MINUTES`). See `HISTORY_SETUP.md`.

Not implemented:

- TCP port checks (only HTTP/HTTPS checks exist).
- A small host agent or SSH command runner (node_exporter is used instead).
