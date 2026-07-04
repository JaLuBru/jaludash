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

## Current Scope

This deployment is still read-only, but it now includes live reachability checks and host-health overviews when the configured endpoints are reachable.

Next intended buckets:

1. Improve the service directory page.
2. Tune service status checks.
3. Expand host and storage overview.
4. Add a safer Obsidian-vault refresh workflow.

## Roadmap Data

Roadmap items added in the app are stored in the Docker volume `jaludash-data` at `/app/data`. This keeps them through normal `docker compose -f /home/apps/jaludash/docker-compose.yml up -d --build` rebuilds.
