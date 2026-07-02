# Host Health Setup

The dashboard can now read host metrics from node_exporter if it is available on each host at port 9100.

Configured targets:

- optipi: http://192.168.0.192:9100/metrics
- serverpi: http://192.168.0.195:9100/metrics

Until node_exporter is installed, the dashboard will still show management reachability but CPU/RAM/disk metrics will be unknown.

## Quick install idea

For Debian-based hosts, install node_exporter through your preferred package method or as a systemd service. After installation, verify from the Docker LXC:

    curl http://192.168.0.192:9100/metrics
    curl http://192.168.0.195:9100/metrics

If you want, we can make the next bucket a careful node_exporter install runbook for optipi and serverpi.
