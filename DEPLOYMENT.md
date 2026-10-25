# jaludash Deployment

Target for the first always-on deployment:

- Proxmox host: optipi
- Docker LXC: docker
- Docker LXC IP: 192.168.0.191
- Direct URL: http://192.168.0.191:4173
- Optional Traefik host: jaludash.local.jalubru.com

## First Deploy

Copy this project folder to the Docker LXC, for example under:

```bash
/home/apps/jaludash
```

Then start it:

```bash
docker compose -f /home/apps/jaludash/docker-compose.yml up -d --build
```

After it starts, open:

```text
http://192.168.0.191:4173
```

## Traefik

The compose file includes Traefik labels for:

```text
jaludash.local.jalubru.com
```

This assumes the external Docker network named `proxy` already exists, matching your HomeBox setup. If the `proxy` network is not available, either create it or temporarily remove the `networks` and `labels` sections and use the direct IP/port URL first.

## Update Later

After changing dashboard files:

```bash
docker compose -f /home/apps/jaludash/docker-compose.yml up -d --build
```

## GitHub Pulls On The Server

GitHub no longer accepts account passwords for Git operations. For a public repository, first try clearing any cached credentials and pulling without a prompt:

```bash
cd /home/apps/jaludash
git remote set-url origin https://github.com/JaLuBru/jaludash.git
git -c credential.helper= pull origin main
```

If the server still asks for a password, use either a GitHub personal access token as the password or switch the remote to SSH with a deploy key.

## Storage And Discovery

Storage uses node_exporter metrics from the configured hosts. Auto-discovery reads the local Docker engine through a read-only socket mount:

```yaml
- /var/run/docker.sock:/var/run/docker.sock:ro
```

This lets jaludash list containers on the Docker LXC and compare them with the inventory. It is read-only from the compose file, but Docker socket access is still powerful, so keep jaludash private to your LAN.

## Current Scope

jaludash is a mostly read-only dashboard. It never restarts or controls services; its only writes are to its own data in the `jaludash-data` volume (inventory edits, roadmap items, history). Current features:

- Service inventory grouped by stack, editable from the app (add, edit and delete groups and services), seeded from `src/inventory-seed.json`
- Per-service wiki/runbook pages
- Live HTTP/HTTPS reachability checks
- Host health (memory, root disk, uptime) from node_exporter, and a Storage overview
- Docker container discovery (local read-only socket) and Proxmox LXC/VM discovery (API token, see `PROXMOX_SETUP.md`)
- History and Trends charts, plus internet speed tests, manual or scheduled (see `HISTORY_SETUP.md`)
- Roadmap list
- Light and dark mode

Possible next steps:

1. Tune service status checks (for example TCP checks, which are not implemented yet).
2. Expand host and storage overview.
3. Add a safer Obsidian-vault refresh workflow.

## Roadmap Data

Roadmap items, the editable inventory (`inventory.json`) and `history.json` are stored in the Docker volume `jaludash-data` at `/app/data`. This keeps them through normal `docker compose -f /home/apps/jaludash/docker-compose.yml up -d --build` rebuilds.
