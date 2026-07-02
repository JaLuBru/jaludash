# Service Status Setup Plan

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

No Docker socket or Proxmox token is needed for the first reachability bucket.

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

Plan:

1. Add status check definitions to the service inventory.
2. Add server endpoint /api/status that checks configured services.
3. Show status chips on Overview, Services, and Service Detail pages.
4. Add a refresh button and auto-refresh interval.
5. Checkpoint: verify the dashboard correctly shows reachable/unreachable for known services.

## Later Status Layers

- Docker container discovery from Docker API/socket or a small agent
- Proxmox LXC/VM state from Proxmox API token
- Disk usage via node exporter, SSH command runner, or a tiny host agent
- Status history and trends
