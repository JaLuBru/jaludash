# Host Health Setup

jaludash can show host memory, root disk, and uptime when node_exporter is reachable on each host.

Expected metric endpoints:

```text
http://192.168.0.192:9100/metrics
http://192.168.0.195:9100/metrics
```

## Install On optipi / Proxmox

Run this on the Proxmox host shell:

```bash
apt update
apt install -y prometheus-node-exporter
systemctl enable --now prometheus-node-exporter
systemctl status prometheus-node-exporter --no-pager
curl http://127.0.0.1:9100/metrics | head
```

## Install On serverpi / Raspberry Pi

Run this on the Raspberry Pi shell:

```bash
sudo apt update
sudo apt install -y prometheus-node-exporter
sudo systemctl enable --now prometheus-node-exporter
sudo systemctl status prometheus-node-exporter --no-pager
curl http://127.0.0.1:9100/metrics | head
```

## Verify From The Docker LXC

Run this inside the Docker LXC where jaludash runs:

```bash
curl http://192.168.0.192:9100/metrics | head
curl http://192.168.0.195:9100/metrics | head
```

If either command fails, check whether the exporter service is running and whether port 9100 is reachable between the machines.

## Restart jaludash

After the exporters answer, refresh jaludash or redeploy it:

```bash
docker compose -f /home/apps/jaludash/docker-compose.yml up -d --build
```
