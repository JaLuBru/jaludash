# Proxmox Discovery Setup

Jaludash can read Proxmox LXC/VM state with a Proxmox API token.

Create a token in Proxmox with read-only access. A practical permission is `PVEAuditor` on `/`.

On the server, create or update `/home/apps/jaludash/.env`:

```bash
PROXMOX_API_URL=https://192.168.0.192:8006
PROXMOX_NODE=optipi
PROXMOX_API_TOKEN_ID=root@pam!jaludash
PROXMOX_API_TOKEN_SECRET=replace-with-token-secret
```

Then rebuild:

```bash
docker compose -f /home/apps/jaludash/docker-compose.yml up -d --build
```

The Discovery page will show LXCs and VMs from Proxmox. IP addresses appear when Proxmox exposes them in the guest config.
