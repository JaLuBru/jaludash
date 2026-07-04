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
curl -s http://127.0.0.1:9100/metrics | grep -m 1 node_memory_MemTotal_bytes
```

## Install On serverpi / Raspberry Pi

Run this on the Raspberry Pi shell:

```bash
sudo apt update
sudo apt install -y prometheus-node-exporter
sudo systemctl enable --now prometheus-node-exporter
sudo systemctl status prometheus-node-exporter --no-pager
curl -s http://127.0.0.1:9100/metrics | grep -m 1 node_memory_MemTotal_bytes
```

## Verify From The Docker LXC

Run this inside the Docker LXC where jaludash runs:

```bash
curl -s http://192.168.0.192:9100/metrics | grep -m 1 node_memory_MemTotal_bytes
curl -s http://192.168.0.195:9100/metrics | grep -m 1 node_memory_MemTotal_bytes
```

If either command fails, check whether the exporter service is running and whether port 9100 is reachable between the machines.

## If The Docker LXC Times Out

If the exporter works on the host itself but the Docker LXC cannot reach it, allow TCP 9100 from the Docker LXC to the host.

Quick temporary test on optipi:

```bash
iptables -I INPUT 1 -s 192.168.0.191 -p tcp --dport 9100 -j ACCEPT
```

Then test again from the Docker LXC:

```bash
curl --max-time 10 http://192.168.0.192:9100/metrics | grep -m 1 node_memory_MemTotal_bytes
```

If that works, add the same allow rule permanently in the Proxmox firewall UI for node optipi:

```text
Direction: IN
Action: ACCEPT
Source: 192.168.0.191
Protocol: tcp
Destination port: 9100
```

## Restart jaludash

After the exporters answer, refresh jaludash or redeploy it:

```bash
docker compose -f /home/apps/jaludash/docker-compose.yml up -d --build
```
