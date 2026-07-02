# jaludash

A personal dashboard for keeping track of what is running in your homelab, where it lives, how to reach it, and what needs attention.

The current version focuses on:

- Service inventory grouped by stack
- Service wiki/runbook pages generated from local documentation
- Reachability checks for configured service URLs
- Host health cards for the Optiplex/Proxmox host and Raspberry Pi
- Roadmap items that can be added, checked off, and deleted from the app
- Light and dark mode

## Run On The Server

The intended deployment path is:

```bash
/home/apps/jaludash
```

First clone the repository there:

```bash
git clone https://github.com/JaLuBru/jaludash.git /home/apps/jaludash
```

Then start or update it with:

```bash
docker compose -f /home/apps/jaludash/docker-compose.yml up -d --build
```

The direct dashboard URL is:

```text
http://192.168.0.191:4173
```

## Update Later

After changes are pushed to GitHub:

```bash
cd /home/apps/jaludash
git pull
docker compose -f /home/apps/jaludash/docker-compose.yml up -d --build
```

## Host Health

Host CPU, memory, disk, and uptime details require node_exporter to be reachable from the dashboard container:

```text
http://192.168.0.192:9100/metrics
http://192.168.0.195:9100/metrics
```

See `HOST_HEALTH_SETUP.md` for the setup notes.

## Local Development

```bash
npm start
```

Then open:

```text
http://localhost:4173
```
