# History And Speed Trends

Jaludash stores local history in the Docker volume at:

```text
/app/data/history.json
```

The dashboard records:

- service status samples whenever live data refreshes
- host memory/root-disk/storage samples whenever host health refreshes
- internet download speed when you press `Run speed test` on the Trends page

Optional `.env` values:

```bash
HISTORY_LIMIT=1000
SPEED_TEST_URL=https://speed.cloudflare.com/__down?bytes=25000000
SPEED_TEST_TIMEOUT_MS=20000
```

Rebuild after changing `.env`:

```bash
docker compose -f /home/apps/jaludash/docker-compose.yml up -d --build
```
