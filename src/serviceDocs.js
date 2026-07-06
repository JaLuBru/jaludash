export const serviceDocs = {
  "homeassistant": {
    "serviceId": "homeassistant",
    "sourceFile": "Homeassistant.md",
    "title": "Homeassistant",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Homeassistant"
      ],
      "ITname": "Homeassistant",
      "ITmachine": [
        "OptiPi"
      ],
      "ITcategory": "Smart Home",
      "ITinstalltype": "docker",
      "ITstatus": [
        "todo"
      ]
    },
    "summary": ">[[00 Homelab]] --- Text - github rpi-nas --- [[Nginx Proxy Manager|Back to - Installation together with Nginx Proxy Manager]]",
    "links": [
      {
        "label": "Text - github rpi-nas",
        "url": "https://github.com/timoknapp/rpi-nas"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "yaml",
        "code": "version: \"3\" # can be adapapted if necessary\nservices:\n  homeassistant: # homeassistant\n    image: homeassistant/raspberrypi4-homeassistant:stable\n    container_name: homeassistant\n    environment:\n      - TZ=Europe/Berlin\n    volumes:\n      - ${PATH_TO_DISK}/appdata/homeassistant:/config\n    ports:\n      - 8123:8123\n    restart: unless-stopped"
      },
      {
        "language": "yaml",
        "code": "version: \"3\"\nservices:\n  homeassistant: \n    image: lscr.io/linuxserver/homeassistant:latest \n    container_name: homeassistant \n    environment: \n      - PUID=1000 \n      - PGID=1000 \n      - TZ=Europe/Riga \n    volumes: \n      - ./hass/config:/config \n    restart: unless-stopped"
      }
    ],
    "markdown": ">[[00 Homelab]]\n```toc\n```\n---\n[Text - github rpi-nas](https://github.com/timoknapp/rpi-nas)\n\n---\n\n[[Nginx Proxy Manager|Back to - Installation together with Nginx Proxy Manager]]\n## Idea\n\n```yaml\nversion: \"3\" # can be adapapted if necessary\nservices:\n  homeassistant: # homeassistant\n    image: homeassistant/raspberrypi4-homeassistant:stable\n    container_name: homeassistant\n    environment:\n      - TZ=Europe/Berlin\n    volumes:\n      - ${PATH_TO_DISK}/appdata/homeassistant:/config\n    ports:\n      - 8123:8123\n    restart: unless-stopped\n```\n\n```yaml\nversion: \"3\"\nservices:\n  homeassistant: \n    image: lscr.io/linuxserver/homeassistant:latest \n    container_name: homeassistant \n    environment: \n      - PUID=1000 \n      - PGID=1000 \n      - TZ=Europe/Riga \n    volumes: \n      - ./hass/config:/config \n    restart: unless-stopped \n```"
  },
  "plex": {
    "serviceId": "plex",
    "sourceFile": "Plex.md",
    "title": "Plex",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Plex"
      ],
      "ITname": "Plex",
      "ITcategory": "Mediaserver",
      "ITmachine": [
        "OptiPi",
        "Raspberry Pi"
      ],
      "ITinstalltype": "docker, lxc",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab]] --- Video - addicted2tech setup plex Text - addicted2tech plex setup using docker ---",
    "links": [
      {
        "label": "Video - addicted2tech setup plex",
        "url": "https://www.youtube.com/watch?v=XudbMJ_3NRc"
      },
      {
        "label": "Text - addicted2tech plex setup using docker",
        "url": "https://www.addictedtotech.net/install-plex-on-raspberry-pi-4-using-portainer-docker/"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "cd /media/wd2001ext4/apps/mediaserver/plex-config\nsudo nano docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "version: \"2.1\"\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n      - /media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped"
      }
    ],
    "markdown": ">[[00 Homelab]]\n```toc\n```\n---\n[Video - addicted2tech setup plex](https://www.youtube.com/watch?v=XudbMJ_3NRc)\n[Text - addicted2tech plex setup using docker](https://www.addictedtotech.net/install-plex-on-raspberry-pi-4-using-portainer-docker/)\n\n---\n```bash\ncd /media/wd2001ext4/apps/mediaserver/plex-config\nsudo nano docker-compose.yaml\n```\n## Docker compose \n\n>[!info] Disclaimer\n>Included in the [[Mediaserver#^mediaserver-docker-compose|Mediastack - Docker Compose]] file!\n\n```yaml\nversion: \"2.1\"\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n      - /media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n```\n\nshare movie downloads to Network [[NFS Server]]\n\n---\n\n## LXC"
  },
  "pihole": {
    "serviceId": "pihole",
    "sourceFile": "Pi-Hole.md",
    "title": [
      "Pi-Hole"
    ],
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Pi-Hole"
      ],
      "ITname": [
        "Pi-Hole"
      ],
      "ITmachine": [
        "Raspberry Pi"
      ],
      "ITcategory": [
        "Ad Blocker",
        "Local DNS"
      ],
      "ITinstalltype": "script",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab]] --- --- Text - The World’s Greatest Pi-hole (and Unbound) Tutorial 2023 Youtube - World's Greatest Pi-hole Tutorial - Easy Raspberry Pi Project!",
    "links": [
      {
        "label": "Text - The World’s Greatest Pi-hole (and Unbound) Tutorial 2023",
        "url": "https://www.crosstalksolutions.com/the-worlds-greatest-pi-hole-and-unbound-tutorial-2023/#Let%E2%80%99s_get_started"
      },
      {
        "label": "Youtube - World's Greatest Pi-hole Tutorial - Easy Raspberry Pi Project!",
        "url": "https://www.youtube.com/watch?v=cE21YjuaB6o"
      },
      {
        "label": "The Firebog",
        "url": "https://firebog.net/"
      },
      {
        "label": "Commonly Whitelisted Domains - FAQs - Pi-hole Userspace",
        "url": "https://discourse.pi-hole.net/t/commonly-whitelisted-domains/212"
      },
      {
        "label": "d3ward.github.io",
        "url": "https://d3ward.github.io/toolz/adblock.html"
      },
      {
        "label": "Pi-hole Proxmox - YouTube",
        "url": "https://youtu.be/rDNWhwWCk2k?si=cjw1yDWAfof9ZRNo"
      },
      {
        "label": "Pihole v6 Traefik fix : r/pihole",
        "url": "https://www.reddit.com/r/pihole/comments/1iu44g8/pihole_v6_traefik_fix/"
      },
      {
        "label": "The Best Pi-hole Blocklists",
        "url": "https://avoidthehack.com/best-pihole-blocklists"
      },
      {
        "label": "The Firebog",
        "url": "https://firebog.net/"
      },
      {
        "label": "commonly whitelisted domains",
        "url": "https://discourse.pi-hole.net/t/commonly-whitelisted-domains/212"
      },
      {
        "label": "HERE",
        "url": "https://docs.pi-hole.net/guides/dns/unbound/"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "curl -sSL https://install.pi-hole.net | bash"
      },
      {
        "language": "bash",
        "code": "pihole -a -p"
      },
      {
        "language": "text",
        "code": "DataTables warning: table id=messagesTable - Ajax error. For more information about this error, please see http://datatables.net/tn/7"
      },
      {
        "language": "bash",
        "code": "sudo apt install php-sqlite3"
      },
      {
        "language": "bash",
        "code": "usermod -aG pihole www-data"
      },
      {
        "language": "bash",
        "code": "sudo systemctl restart apache2"
      },
      {
        "language": "bash",
        "code": "sudo ufw allow 80/tcp \nsudo ufw allow 53/tcp \nsudo ufw allow 53/udp \nsudo ufw allow 67/tcp \nsudo ufw allow 67/udp"
      }
    ],
    "markdown": ">[[00 Homelab]]\n---\n```toc\n```\n---\n\n[Text - The World’s Greatest Pi-hole (and Unbound) Tutorial 2023](https://www.crosstalksolutions.com/the-worlds-greatest-pi-hole-and-unbound-tutorial-2023/#Let%E2%80%99s_get_started)\n[Youtube - World's Greatest Pi-hole Tutorial - Easy Raspberry Pi Project!](https://www.youtube.com/watch?v=cE21YjuaB6o)\nhttps://www.raspberrypi.com/tutorials/running-pi-hole-on-a-raspberry-pi/\nhttps://pimylifeup.com/pi-hole-docker/#:~:text=You%20can%20run%20Pi-Hole,set%20up%20within%20the%20container\n\n### Adlists\n[The Firebog](https://firebog.net/)\n[Commonly Whitelisted Domains - FAQs - Pi-hole Userspace](https://discourse.pi-hole.net/t/commonly-whitelisted-domains/212)\n\n---\n## Prerequisites\nStatic IP [[Set static IP]]\n\n---\n## Check if blocking is working\n\n[d3ward.github.io](https://d3ward.github.io/toolz/adblock.html)\n\n---\n## Installation\n\n### LXC\n[Pi-hole Proxmox - YouTube](https://youtu.be/rDNWhwWCk2k?si=cjw1yDWAfof9ZRNo)\n### Version 6 error (too many reloads)\n- [Pihole v6 Traefik fix : r/pihole](https://www.reddit.com/r/pihole/comments/1iu44g8/pihole_v6_traefik_fix/)\n\n\nChange local usage by inserting container IP into DNS settings\n\n### Docker Compose\n\n\n### Script\n```bash\ncurl -sSL https://install.pi-hole.net | bash\n```\n\n![[pi-hole installation complete.png]]\n\nChange admin password\n```bash\npihole -a -p\n```\n\n---\n## Configuration\n\nLog into the Pi-hole GUI\n\nhttp://192.168.0.195/admin\nor\nhttp://pi.hole/admin\n\nDown the left-hand side of the dashboard are our menu options. The 4 colored blocks across the top are some statistics. The blue box is the total number of queries Pi-hole has processed. The red box is how many of those queries matched FQDN’s on the block list and were blocked. The yellow box is a percentage of blocked requests (red box divided into the blue box). Finally the green box is the number of domains that are on the block lists. Since we only have a single block list for now, we can see we have about 158,000 domains that will be blocked by this Pi-hole.\n\nGoing down the left-hand menu – I won’t cover every single setting, but I will point out some of the more important ones.\n\n**Query Log** – this shows you the Pi-hole’s history of DNS lookups in descending order (most recent lookups at the top). You can see all domain statuses – both passed and blocked domains. For passed domains, there is a button to blacklist, and for blocked domains, there is a button to whitelist.\n\n**Long-Term Data** – much like the Query Log, this section gives you a deeper dive look into the Pi-hole’s DNS history and lets you filter into that data in great detail.\n\n**Groups and Clients** – some pretty interesting functionality here in Groups and Clients – we’re not going to dig into this section for this tutorial, but you can use this section if you wanted to block DNS queries for all devices except for devices in a specific group. Or, if you wanted to ONLY block DNS queries for devices in a specific group – you can get very granular with which clients and groups use which block lists as well.\n\n**Domains** – this section allows you to specifically add domains to a blacklist or whitelist. For instance, if there are specific stores where you like to shop online, and those stores are being blocked, you can whitelist them here.\n\n**Blocking Resources** – if you’re interested in taking a deeper dive into what block lists you can add to Pi-hole, here are some good resources:  \n  \n[The Best Pi-hole Blocklists](https://avoidthehack.com/best-pihole-blocklists) – Avoidthehack.com – This article does an excellent job of explaining the different types of block lists, and then lists a number of resources for lists in different categories of blocking.  \n  \n[The Firebog](https://firebog.net/) (blocklist collection) – This blocklist resource does an excellent job of providing sources of blocklists in multiple categories such as Suspicious, Advertising, Tracking & Telemetry, & Malicious. It further breaks those lists down into green links and blue links – the green links are the ones least likely to interfere with normal Internet activity. A good rule of thumb is to add one or two of these lists from each category to your Pi-hole.  \n\nOne more thing to point out – there is a list of [commonly whitelisted domains](https://discourse.pi-hole.net/t/commonly-whitelisted-domains/212) over at Pi-hole.net. If you’re having issues with a particular website or service (say Spotify or Xbox functionality for instance), go see if there are resources for whitelisting that particular service on that page – it may save you a lot of headache.\n\nCopy the first link under ‘Suspicious Lists’ and paste it into the ‘Address:’ field – then click Add.\n\nRepeat this for as many block lists as you want – for this tutorial, I’m going to copy/paste the first two green URLs from each of the Firebog sections. Once completed, we need to tell Pi-hole to import these lists.\n\nNavigate to Tools –> Update Gravity and then click the ‘Update’ button. This will comb through all of the block lists and add the blocked URLs to the Pi-hole database. Once complete, you’ll see a green ‘Success’ banner at the top of the screen.\n\n---\n## Error Fixing\n\n```\nDataTables warning: table id=messagesTable - Ajax error. For more information about this error, please see http://datatables.net/tn/7\n```\n\nInstall php-sqlite3\n```bash\nsudo apt install php-sqlite3\n```\n\nadd apache user to pihole group\n```bash\nusermod -aG pihole www-data\n```\n\nrestart apache server\n```bash\nsudo systemctl restart apache2\n```\nhttps://discourse.pi-hole.net/t/pihole-5-upgrade-error-datatables-warning-table-id-groupstable-ajax-error-for-more-information-about-this-error/32275\n\nadd ufw rules to allow pihole access (IPv4)\n```bash\nsudo ufw allow 80/tcp \nsudo ufw allow 53/tcp \nsudo ufw allow 53/udp \nsudo ufw allow 67/tcp \nsudo ufw allow 67/udp\n```\n\n---\n## Disable Blocking\n\nthis lets you stop Pi-hole from blocking any domains for various amounts of time (or indefinitely). Very useful in troubleshooting – if something isn’t working in your network or Internet browsing, try disabling blocking for 5 minutes and see if that fixes it. If it DOES fix it, then you know there are probably some domains you’re going to have to whitelist.\n\nOne extra tip since we’re talking about disabling blocking – logging into the Pi-hole Admin GUI to disable blocking can be cumbersome! I find myself doing this on a fairly regular basis (once or twice a week), and I have multiple Pi-holes running for redundancy! So – it can take some time. To shorten up the time it takes to disable blocking, you can do some scripting. It all starts with this URL:\n\n```\nhttp://192.168.0.195/admin/api.php?disable=300&auth=[REDACTED]\n```\n\nLet’s break this down – the IP address is the IP address of your Pi-hole (don’t use mine for this). The ‘disable=300’ means disable for 300 seconds (5 minutes), and the auth=PWHASH is the hashed value of WEBPASSWORD which can be found in the /etc/pihole/setupVars.conf file. You can see it if you log into your Pi-hole with SSH and run the command:\n\n```\ncat /etc/pihole/setupVars.conf |grep WEBPASSWORD\n```\n\nThis will show you your hashed password – copy and paste everything after the = and append it to the end of the URL above.\n\n---\n## Configure Devices to use the Pi-hole\n\nAwesome – we’ve got our Pi-hole all up and running, and configured to block ads and other bad guys. But – right now, nothing is using this Pi-hole! Let’s fix that – there are two main ways to configure your devices to use the Pi-hole – manually, and via DHCP.\n\nManual device configuration – to configure your devices to use the Pi-hole manually, you need to open up your device’s network settings and set your DNS server to be the IP address of the Pi-hole (or Pi-holes if you’re setting up multiple for redundancy).\n\nIn Windows 11, you’ll need to go to Network & Internet settings, click on ‘Change adapter options’ (or Properties of the current adapter). Then ‘Edit’ IP settings.\n\nYou’ll have to set your IP address for your device to ‘Manual’ and then give it an IP, gateway, and input the IP address of your Pi-hole for ‘Preferred DNS.’ If you have multiple Pi-holes, enter the 2nd one as the ‘Alternate DNS.’\n\n---\n## Unbound Setup\n\nOK – so we have our Pi-hole working and blocking stuff – excellent! But let’s take this a step further. Right now, when we look up a website, if the Pi-hole doesn’t know where to find it, it forwards that request to an upstream DNS provider (as we have it configured right now, that upstream provider is Cloudflare). Those who are more security-conscious may not want some random 3rd party knowing which domains they’re surfing to or looking up (even though Cloudflare doesn’t keep logs of DNS queries).\n\nFor those folks, you can install Unbound on your Pi-hole. Unbound is a service that directly queries the DNS root domain servers for any uncached FQDN requests. First we’ll need to install Unbound, and then we’ll configure it for use with our Pi-hole.\n\nTo install Unbound, SSH into the Pi-hole and run this command:\n\n```\nsudo apt install unbound -y\n```\n\nThis should only take about 10-15 seconds. Next, we need to add a whole wall of text to an Unbound configuration file – create this file by running this command to edit it:\n\n```\nsudo nano -w /etc/unbound/unbound.conf.d/pi-hole.conf\n```\n\nCopy all of this text below – you can also find this text in the Pi-hole documentation [HERE](https://docs.pi-hole.net/guides/dns/unbound/).\n\n```\nserver:\n# If no logfile is specified, syslog is used\n# logfile: \"/var/log/unbound/unbound.log\"\nverbosity: 0\n\ninterface: 127.0.0.1\nport: 5335\ndo-ip4: yes\ndo-udp: yes\ndo-tcp: yes\n\n# May be set to yes if you have IPv6 connectivity\ndo-ip6: no\n\n# You want to leave this to no unless you have *native* IPv6. With 6to4 and\n# Terredo tunnels your web browser should favor IPv4 for the same reasons\nprefer-ip6: no\n\n# Use this only when you downloaded the list of primary root servers!\n# If you use the default dns-root-data package, unbound will find it automatically\n#root-hints: \"/var/lib/unbound/root.hints\"\n\n# Trust glue only if it is within the server's authority\nharden-glue: yes\n\n# Require DNSSEC data for trust-anchored zones, if such data is absent, the zone becomes BOGUS\nharden-dnssec-stripped: yes\n\n# Don't use Capitalization randomization as it known to cause DNSSEC issues sometimes\n# see https://discourse.pi-hole.net/t/unbound-stubby-or-dnscrypt-proxy/9378 for further details\nuse-caps-for-id: no\n\n# Reduce EDNS reassembly buffer size.\n# IP fragmentation is unreliable on the Internet today, and can cause\n# transmission failures when large DNS messages are sent via UDP. Even\n# when fragmentation does work, it may not be secure; it is theoretically\n# possible to spoof parts of a fragmented DNS message, without easy\n# detection at the receiving end. Recently, there was an excellent study\n# >>> Defragmenting DNS - Determining the optimal maximum UDP response size for DNS <<<\n# by Axel Koolhaas, and Tjeerd Slokker (https://indico.dns-oarc.net/event/36/contributions/776/)\n# in collaboration with NLnet Labs explored DNS using real world data from the\n# the RIPE Atlas probes and the researchers suggested different values for\n# IPv4 and IPv6 and in different scenarios. They advise that servers should\n# be configured to limit DNS messages sent over UDP to a size that will not\n# trigger fragmentation on typical network links. DNS servers can switch\n# from UDP to TCP when a DNS response is too big to fit in this limited\n# buffer size. This value has also been suggested in DNS Flag Day 2020.\nedns-buffer-size: 1232\n\n# Perform prefetching of close to expired message cache entries\n# This only applies to domains that have been frequently queried\nprefetch: yes\n\n# One thread should be sufficient, can be increased on beefy machines. In reality for most users running on small networks or on a single machine, it should be unnecessary to seek performance enhancement by in"
  },
  "traefik": {
    "serviceId": "traefik",
    "sourceFile": "Traefik.md",
    "title": "Traefik",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Traefik"
      ],
      "ITname": "Traefik",
      "ITcategory": "Reverse Proxy",
      "ITmachine": [
        "OptiPi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "todo"
      ],
      "priority": [
        "\"3\""
      ]
    },
    "summary": ">[[00 Homelab]] --- Reddit - Traefik with multiple lxcs BEST & NEW: Traefik 3 and FREE Wildcard Certificates with Docker | Techno Tim",
    "links": [
      {
        "label": "Reddit - Traefik with multiple lxcs",
        "url": "https://www.reddit.com/r/Traefik/s/sUgxpqsvhe"
      },
      {
        "label": "Traefik 3 and FREE Wildcard Certificates with Docker | Techno Tim",
        "url": "https://technotim.live/posts/traefik-3-docker-certificates/"
      },
      {
        "label": "Traefik 3 and FREE Wildcard Certificates with Docker - YouTube",
        "url": "https://www.youtube.com/watch?v=n1vOfdz5Nm8"
      },
      {
        "label": "Traefik + Docker - Christian Lempa - YouTube",
        "url": "https://www.youtube.com/watch?v=NzSdNoR-JPo"
      },
      {
        "label": "Is this the BEST Reverse Proxy for Docker? // Traefik Tutorial - YouTube",
        "url": "https://www.youtube.com/watch?v=wLrmmh1eI94"
      },
      {
        "label": "boilerplates/docker-compose/traefik at main · ChristianLempa/boilerplates · GitHub",
        "url": "https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/traefik"
      },
      {
        "label": "Put Wildcard Certificates and SSL on EVERYTHING - Traefik + Portainer Tutorial - YouTube",
        "url": "https://www.youtube.com/watch?v=liV3c9m_OX8"
      },
      {
        "label": "Put Wildcard Certificates and SSL on EVERYTHING | Techno Tim",
        "url": "https://technotim.live/posts/traefik-portainer-ssl/"
      },
      {
        "label": "techno-tim.github.io/reference\\_files/traefik-portainer-ssl/traefik at master · techno-tim/techno-tim.github.io · GitHub",
        "url": "https://github.com/techno-tim/techno-tim.github.io/tree/master/reference_files/traefik-portainer-ssl/traefik"
      },
      {
        "label": "Cloudflare API Tokens",
        "url": "https://dash.cloudflare.com/profile/api-tokens"
      }
    ],
    "codeBlocks": [
      {
        "language": "yaml",
        "code": "labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.APP.rule=Host(`APP.local.jalubru.com`)\"\n      - \"traefik.http.routers.APP.entrypoints=https\"\n      - \"traefik.http.routers.APP.tls=true\"\n      - \"traefik.http.services.APP.loadbalancer.server.port=PORT\""
      },
      {
        "language": "yaml",
        "code": "networks:\n      proxy:\n        external: true"
      },
      {
        "language": "bash",
        "code": "sudo mkdir -p /home/apps/traefik/data/"
      },
      {
        "language": "bash",
        "code": "sudo touch /home/apps/traefik/{cf_api_token.txt,docker-compose.yaml} && sudo touch /home/apps/traefik/data/{acme.json,config.yml,traefik.yml} && sudo chmod 600 /home/apps/traefik/data/acme.json"
      },
      {
        "language": "bash",
        "code": "sudo nano /home/apps/traefik/data/traefik.yml"
      },
      {
        "language": "yaml",
        "code": "api:\n  dashboard: true\n  debug: true\nentryPoints:\n  http:\n    address: \":80\"\n    http:\n      redirections:\n        entryPoint:\n          to: https\n          scheme: https\n  https:\n    address: \":443\"\nserversTransport:\n  insecureSkipVerify: true\nproviders:\n  docker:\n    endpoint: \"unix:///var/run/docker.sock\"\n    exposedByDefault: false\n  file:\n    filename: /config.yml\ncertificatesResolvers:\n  cloudflare:\n    acme:\n      email: jalu@bruderek.de\n      storage: acme.json\n      # caServer: https://acme-v02.api.letsencrypt.org/directory # prod (default)\n      caServer: https://acme-staging-v02.api.letsencrypt.org/directory # staging\n      dnsChallenge:\n        provider: cloudflare\n        #disablePropagationCheck: true # uncomment this if you have issues pulling certificates through cloudflare, By setting this flag to true disables the need to wait for the propagation of the TXT record to all authoritative name servers.\n        #delayBeforeCheck: 60s # uncomment along with disablePropagationCheck if needed to ensure the TXT record is ready before verification is attempted \n        resolvers:\n          - \"1.1.1.1:53\"\n          - \"1.0.0.1:53\""
      },
      {
        "language": "bash",
        "code": "sudo docker network create proxy"
      },
      {
        "language": "bash",
        "code": "sudo nano /home/apps/traefik/docker-compose.yaml"
      }
    ],
    "markdown": ">[[00 Homelab]]\n---\n\n[Reddit - Traefik with multiple lxcs](https://www.reddit.com/r/Traefik/s/sUgxpqsvhe)\n\nBEST & NEW:\n[Traefik 3 and FREE Wildcard Certificates with Docker | Techno Tim](https://technotim.live/posts/traefik-3-docker-certificates/)\n[Traefik 3 and FREE Wildcard Certificates with Docker - YouTube](https://www.youtube.com/watch?v=n1vOfdz5Nm8)\nAND\n[Traefik + Docker - Christian Lempa - YouTube](https://www.youtube.com/watch?v=NzSdNoR-JPo)\n\nSecurity see [[CrowdSec]]\n\n[Is this the BEST Reverse Proxy for Docker? // Traefik Tutorial - YouTube](https://www.youtube.com/watch?v=wLrmmh1eI94)\n[boilerplates/docker-compose/traefik at main · ChristianLempa/boilerplates · GitHub](https://github.com/ChristianLempa/boilerplates/tree/main/docker-compose/traefik)\n\nOr this\n[Put Wildcard Certificates and SSL on EVERYTHING - Traefik + Portainer Tutorial - YouTube](https://www.youtube.com/watch?v=liV3c9m_OX8)\n[Put Wildcard Certificates and SSL on EVERYTHING | Techno Tim](https://technotim.live/posts/traefik-portainer-ssl/)\n[techno-tim.github.io/reference\\_files/traefik-portainer-ssl/traefik at master · techno-tim/techno-tim.github.io · GitHub](https://github.com/techno-tim/techno-tim.github.io/tree/master/reference_files/traefik-portainer-ssl/traefik)\n\nsee also [[Teleport]], [[Tailscale]]\n\n## Default Labels\n```yaml\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.APP.rule=Host(`APP.local.jalubru.com`)\"\n      - \"traefik.http.routers.APP.entrypoints=https\"\n      - \"traefik.http.routers.APP.tls=true\"\n      - \"traefik.http.services.APP.loadbalancer.server.port=PORT\"\n```\n```yaml\n    networks:\n      proxy:\n        external: true\n```\n\n## Docker\n\n```bash\nsudo mkdir -p /home/apps/traefik/data/\n```\n\n```bash\nsudo touch /home/apps/traefik/{cf_api_token.txt,docker-compose.yaml} && sudo touch /home/apps/traefik/data/{acme.json,config.yml,traefik.yml} && sudo chmod 600 /home/apps/traefik/data/acme.json\n```\n\n### Traefik.yaml\n\n```bash\nsudo nano /home/apps/traefik/data/traefik.yml\n```\n\n```yaml\napi:\n  dashboard: true\n  debug: true\nentryPoints:\n  http:\n    address: \":80\"\n    http:\n      redirections:\n        entryPoint:\n          to: https\n          scheme: https\n  https:\n    address: \":443\"\nserversTransport:\n  insecureSkipVerify: true\nproviders:\n  docker:\n    endpoint: \"unix:///var/run/docker.sock\"\n    exposedByDefault: false\n  file:\n    filename: /config.yml\ncertificatesResolvers:\n  cloudflare:\n    acme:\n      email: jalu@bruderek.de\n      storage: acme.json\n      # caServer: https://acme-v02.api.letsencrypt.org/directory # prod (default)\n      caServer: https://acme-staging-v02.api.letsencrypt.org/directory # staging\n      dnsChallenge:\n        provider: cloudflare\n        #disablePropagationCheck: true # uncomment this if you have issues pulling certificates through cloudflare, By setting this flag to true disables the need to wait for the propagation of the TXT record to all authoritative name servers.\n        #delayBeforeCheck: 60s # uncomment along with disablePropagationCheck if needed to ensure the TXT record is ready before verification is attempted \n        resolvers:\n          - \"1.1.1.1:53\"\n          - \"1.0.0.1:53\"\n```\n\n### Docker compose\n\n```bash\nsudo docker network create proxy\n```\n\n```bash\nsudo nano /home/apps/traefik/docker-compose.yaml\n```\n\n```yaml\nservices:\n  traefik:\n    image: traefik:latest\n    container_name: traefik\n    restart: unless-stopped\n    security_opt:\n      - no-new-privileges:true\n    networks:\n      - proxy\n    ports:\n      - 80:80\n      - 443:443\n      # - 443:443/tcp # Uncomment if you want HTTP3\n      # - 443:443/udp # Uncomment if you want HTTP3\n    environment:\n#      CF_DNS_API_TOKEN_FILE: /run/secrets/cf_api_token # note using _FILE for docker secrets\n      CF_DNS_API_TOKEN: ${CF_DNS_API_TOKEN} # if using .env\n      TRAEFIK_DASHBOARD_CREDENTIALS: ${TRAEFIK_DASHBOARD_CREDENTIALS}\n    secrets:\n      - cf_api_token\n    env_file: .env # use .env\n    volumes:\n      - /etc/localtime:/etc/localtime:ro\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n      - /home/apps/traefik/data/traefik.yml:/traefik.yml:ro\n      - /home/apps/traefik/data/acme.json:/acme.json\n#      - /home/apps/traefik/data/config.yml:/config.yml:ro\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.traefik.entrypoints=http\"\n      - \"traefik.http.routers.traefik.rule=Host(`traefik.local.jalubru.com`)\"\n      - \"traefik.http.middlewares.traefik-auth.basicauth.users=[REDACTED]\"\n      - \"traefik.http.middlewares.traefik-https-redirect.redirectscheme.scheme=https\"\n      - \"traefik.http.middlewares.sslheader.headers.customrequestheaders.X-Forwarded-Proto=https\"\n      - \"traefik.http.routers.traefik.middlewares=traefik-https-redirect\"\n      - \"traefik.http.routers.traefik-secure.entrypoints=https\"\n      - \"traefik.http.routers.traefik-secure.rule=Host(`traefik.local.jalubru.com`)\"\n      - \"traefik.http.routers.traefik-secure.middlewares=traefik-auth\"\n      - \"traefik.http.routers.traefik-secure.tls=true\"\n      - \"traefik.http.routers.traefik-secure.tls.certresolver=cloudflare\"\n      - \"traefik.http.routers.traefik-secure.tls.domains[0].main=local.jalubru.com\"\n      - \"traefik.http.routers.traefik-secure.tls.domains[0].sans=*.local.jalubru.com\"\n      - \"traefik.http.routers.traefik-secure.service=api@internal\"\n\nsecrets:\n  cf_api_token:\n    file: /home/apps/traefik/data/cloudflare.env\n\nnetworks:\n  proxy:\n    external: true\n```\n\n```bash\nsudo nano /home/apps/traefik/cf_api_token.txt\n```\nfrom [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)\n```\nxgI3pcYPqY3dVUskUKlEhX-tSPKdvSUUaCiITyzx\n```\nNEW\n```\nLZLPPJzOy5t-3TuhO1jaPvkTNOSnALG5UiRbXUNa\n```\n\n```bash\necho \"CLOUDFLARE_DNS_API_TOKEN=LZLPPJzOy5t-3TuhO1jaPvkTNOSnALG5UiRbXUNa\" | sudo tee /home/apps/traefik/data/cloudflare.env > /dev/null\n```\n\n```bash\nsudo apt update\nsudo apt install apache2-utils\n```\n\n```bash\necho $(htpasswd -nB admin) | sed -e s/\\\\$/\\\\$\\\\$/g\n```\n\n```bash\nsudo nano /home/apps/traefik/.env\n```\n\n```bash\nTRAEFIK_DASHBOARD_CREDENTIALS=admin:$$2y$$05$$7y7JjfC3L5ZguZgVVitQcePdAZJytapi32nZSwFqAPI7fgA/eOpsm\n```\n\n```bash\nsudo docker compose -f /home/apps/traefik/docker-compose.yaml up -d\n```\n\nCreate local DNS record pointing to IP address of container and CNAME pointing to that record using [[Pi-Hole]]\n\nif everything is working, go back to traefik.yaml and comment out staging and uncomment production and delete acme.json contents\n\nFor [[Teleport]] setup, see Lempa video\n\n```bash\nsudo docker compose -f /home/apps/traefik/docker-compose.yaml up -d --force-recreate\n```\n\n### config.yml\n```Bash\nsudo nano /home/apps/traefik/data/config.yml\n```\n\nJust proxmox and pi-hole\n```yaml \nhttp:\n #region routers \n  routers:\n    proxmox:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`proxmox.local.jalubru.com`)\"\n      middlewares:\n        - default-headers\n        - https-redirectscheme\n      tls: {}\n      service: proxmox\n    pihole:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`pihole.local.jalubru.com`)\"\n      middlewares:\n        #- redirectregex-pihole\n        - default-headers\n        #- addprefix-pihole\n        - https-redirectscheme\n      tls: {}\n      service: pihole\n    portainer:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`portainer.local.jalubru.com`)\"\n      tls: true\n      service: portainer\n#endregion\n#region services\n  services:\n    proxmox:\n      loadBalancer:\n        servers:\n          - url: \"https://192.168.0.192:8006\"\n        passHostHeader: true\n    pihole:\n      loadBalancer:\n        servers:\n          - url: \"http://192.168.0.190:80\"\n        passHostHeader: true\n    portainer:\n      loadBalancer:\n        servers:\n          - url: \"http://portainer:9000\"\n#endregion\n  middlewares:\n    addprefix-pihole:\n      addPrefix:\n        prefix: \"/admin\"\n    https-redirectscheme:\n      redirectScheme:\n        scheme: https\n        permanent: true\n    redirectregex-pihole:\n      redirectRegex:\n        regex: \"/admin/(.*)\"\n        replacement: /\n    default-headers:\n      headers:\n        frameDeny: true\n        browserXssFilter: true\n        contentTypeNosniff: true\n        forceSTSHeader: true\n        stsIncludeSubdomains: true\n        stsPreload: true\n        stsSeconds: 15552000\n        customFrameOptionsValue: SAMEORIGIN\n        customRequestHeaders:\n          X-Forwarded-Proto: https\n\n    default-whitelist:\n      ipAllowList:\n        sourceRange:\n        - \"10.0.0.0/8\"\n        - \"192.168.0.0/16\"\n        - \"172.16.0.0/12\"\n\n    secured:\n      chain:\n        middlewares:\n        - default-whitelist\n        - default-headers\n```\n\nAll possible:\n```yaml\nhttp:\n #region routers\n  routers:\n    proxmox:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`proxmox.local.example.com`)\" \n      middlewares:\n        - default-headers\n        - https-redirectscheme\n      tls: {}\n      service: proxmox\n    pihole:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`pihole.local.example.com`)\"\n      middlewares:\n        - redirectregex-pihole\n        - default-headers\n        - addprefix-pihole\n        - https-redirectscheme\n      tls: {}\n      service: pihole\n    homebridge:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`homebridge.local.example.com`)\"\n      middlewares:\n        - default-headers\n        - https-redirectscheme\n      tls: {}\n      service: homebridge\n    homeassistant:\n      # For Homeassistant config, check: https://www.home-assistant.io/integrations/http/#reverse-proxies\n      # This relies on Homeassistant using http. No certs are needed in the Homeassistant config.\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`homeassistant.local.example.com`)\"\n      middlewares:\n        - default-headers\n        - https-redirectscheme\n      tls: {}\n      service: homeassistant\n    syncthing:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`syncthing.local.example.com`)\"\n      middlewares:\n        - default-headers\n        - https-redirectscheme\n      tls: {}\n      service: syncthing\n    truenas:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`truenas.local.example.com`)\"\n      middlewares:\n        - default-headers\n        - https-redirectscheme\n      tls: {}\n      service: truenas\n    plex:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`plex.local.example.com`)\"\n      middlewares:\n        - default-headers\n        - https-redirectscheme\n      tls: {}\n      service: plex\n    minio:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`minio.local.example.com`)\"\n      middlewares:\n        - default-headers\n        - https-redirectscheme\n      tls: {}\n      service: minio\n    rancher:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`rancher.local.example.com`)\"\n      middlewares:\n        - default-headers\n        - https-redirectscheme\n      tls: {}\n      service: rancher\n    idrac:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`idrac.local.example.com`)\"\n      middlewares:\n        - idrac\n        - https-redirectscheme\n      tls: {}\n      service: idrac\n    idrac-console:\n      entryPoints:\n        - \"idrac\" # REQUIRED for iDRAC virtual console: Create a new TCP entry point in traefik on port 5900\n      rule: \"Host(`idrac.local.example.com`)\"\n      middlewares:\n        - idrac\n        - https-redirectscheme\n      tls: {}\n      service: idrac-console\n    opnsense:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`opnsense.local.example.com`)\"\n      middlewares:\n        - default-headers\n        - https-redirectscheme\n      tls: {}\n      service: opnsense\n    pterodactyl:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`pterodactyl.local.example.com`)\"\n      middlewares:\n        - default-headers\n        - https-redirectscheme\n      tls: {}\n      service: pterodactyl\n    openmediavault:\n      entryPoints:\n        - \"https\"\n      rule: \"Host(`openmediavault.local.example.com`)\"\n      middlewares:\n        - default-headers\n        - https-redirectscheme\n      tls: {}\n      ser"
  },
  "cloudflaretunnel": {
    "serviceId": "cloudflaretunnel",
    "sourceFile": "Cloudflare Tunnel.md",
    "title": "Cloudflare Tunnel",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Cloudflare Tunnel"
      ],
      "ITname": "Cloudflare Tunnel",
      "ITcategory": "Tunnel",
      "ITmachine": [
        "OptiPi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab|home]] --- --- How to use Cloudflare Tunnel in your Homelab (even with Traefik) - YouTube videos/cloudflare-tunnel-tutorial at main · ChristianLempa/videos · GitHub",
    "links": [
      {
        "label": "How to use Cloudflare Tunnel in your Homelab (even with Traefik) - YouTube",
        "url": "https://www.youtube.com/watch?v=yMmxw-DZ5Ec&"
      },
      {
        "label": "videos/cloudflare-tunnel-tutorial at main · ChristianLempa/videos · GitHub",
        "url": "https://github.com/ChristianLempa/videos/tree/main/cloudflare-tunnel-tutorial"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "sudo mkdir /home/apps/cloudflaretunnel"
      },
      {
        "language": "bash",
        "code": "sudo nano /home/apps/cloudflaretunnel/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "services:\n  cloudflaretunnel:\n    container_name: cloudflaretunnel\n    image: cloudflare/cloudflared:latest\n    environment:\n      - TUNNEL_TOKEN=eyJhIjoiYjdhOTY5YWJmOWU0NTQzMzRmYzgyNGRmNGU0MDdkZTMiLCJ0IjoiOGU0NGQ5ODItMGI5Yi00ZTVkLWExN2YtNzA0ZjJmNjIxNzZiIiwicyI6Ik56bGhORGRrTlRRdE16azNNQzAwWkdZNExXRTJNRFV0TXpabE5XRXpNekV5TVRsbSJ9\n    command: tunnel --no-autoupdate run\n    networks:\n      - proxy\n    restart: unless-stopped\n\nnetworks:\n  proxy:\n    external: true"
      },
      {
        "language": "bash",
        "code": "sudo docker compose -f /home/apps/cloudflaretunnel/docker-compose.yaml up -d"
      },
      {
        "language": "text",
        "code": "eyJhIjoiYjdhOTY5YWJmOWU0NTQzMzRmYzgyNGRmNGU0MDdkZTMiLCJ0IjoiOGU0NGQ5ODItMGI5Yi00ZTVkLWExN2YtNzA0ZjJmNjIxNzZiIiwicyI6Ik56bGhORGRrTlRRdE16azNNQzAwWkdZNExXRTJNRFV0TXpabE5XRXpNekV5TVRsbSJ9"
      }
    ],
    "markdown": ">[[00 Homelab|home]]\n---\n```toc\n```\n---\n[How to use Cloudflare Tunnel in your Homelab (even with Traefik) - YouTube](https://www.youtube.com/watch?v=yMmxw-DZ5Ec&)\n[videos/cloudflare-tunnel-tutorial at main · ChristianLempa/videos · GitHub](https://github.com/ChristianLempa/videos/tree/main/cloudflare-tunnel-tutorial)\n\n---\n## Docker Compose\n\n\n```bash\nsudo mkdir /home/apps/cloudflaretunnel\n```\n\n```bash\nsudo nano /home/apps/cloudflaretunnel/docker-compose.yaml\n```\n\n```yaml\nservices:\n  cloudflaretunnel:\n    container_name: cloudflaretunnel\n    image: cloudflare/cloudflared:latest\n    environment:\n      - TUNNEL_TOKEN=eyJhIjoiYjdhOTY5YWJmOWU0NTQzMzRmYzgyNGRmNGU0MDdkZTMiLCJ0IjoiOGU0NGQ5ODItMGI5Yi00ZTVkLWExN2YtNzA0ZjJmNjIxNzZiIiwicyI6Ik56bGhORGRrTlRRdE16azNNQzAwWkdZNExXRTJNRFV0TXpabE5XRXpNekV5TVRsbSJ9\n    command: tunnel --no-autoupdate run\n    networks:\n      - proxy\n    restart: unless-stopped\n\nnetworks:\n  proxy:\n    external: true\n```\n\n```bash\nsudo docker compose -f /home/apps/cloudflaretunnel/docker-compose.yaml up -d\n```\n\n```\neyJhIjoiYjdhOTY5YWJmOWU0NTQzMzRmYzgyNGRmNGU0MDdkZTMiLCJ0IjoiOGU0NGQ5ODItMGI5Yi00ZTVkLWExN2YtNzA0ZjJmNjIxNzZiIiwicyI6Ik56bGhORGRrTlRRdE16azNNQzAwWkdZNExXRTJNRFV0TXpabE5XRXpNekV5TVRsbSJ9\n```"
  },
  "convertx": {
    "serviceId": "convertx",
    "sourceFile": "ConvertX.md",
    "title": "ConvertX",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "ConvertX"
      ],
      "ITname": "ConvertX",
      "ITcategory": "Converter",
      "ITmachine": [
        "OptiPi"
      ],
      "ITinstalltype": [
        "docker, lxc"
      ],
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab|home]] --- --- GitHub - C4illin/ConvertX: Self-hosted online file converter. Supports 1000+ formats ---",
    "links": [
      {
        "label": "GitHub - C4illin/ConvertX: Self-hosted online file converter. Supports 1000+ formats",
        "url": "https://github.com/C4illin/ConvertX"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "sudo mkdir -p /home/server/apps/convertx"
      },
      {
        "language": "bash",
        "code": "sudo nano /home/server/apps/convertx/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "services:\n  convertx: \n    image: ghcr.io/c4illin/convertx\n    container_name: convertx\n    restart: unless-stopped\n    ports:\n      - \"3000:3000\"\n    environment: # Defaults are listed below. All are optional.\n      - ACCOUNT_REGISTRATION=false # true or false, doesn't matter for the first account (e.g. keep this to false if you only want one account)\n      - JWT_SECRET=aLongAndSecretStringUsedToSignTheJSONWebToken1234 # will use randomUUID() by default\n      - HTTP_ALLOWED=false # setting this to true is unsafe, only set this to true locally\n      - ALLOW_UNAUTHENTICATED=false # allows anyone to use the service without logging in, only set this to true locally\n      - AUTO_DELETE_EVERY_N_HOURS=24 # checks every n hours for files older then n hours and deletes them, set to 0 to disable\n    volumes:\n      - /home/server/apps/convertx:/app/data\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.convertx.rule=Host(`convertx.local.jalubru.com`)\"\n      - \"traefik.http.routers.convertx.entrypoints=https\"\n      - \"traefik.http.routers.convertx.tls=true\"\n      - \"traefik.http.services.convertx.loadbalancer.server.port=3000\"\n    networks:\n      - proxy\n\nnetworks:\n  proxy:\n    external: true"
      },
      {
        "language": "bash",
        "code": "docker compose -f /home/server/apps/convertx/docker-compose.yaml up -d"
      }
    ],
    "markdown": ">[[00 Homelab|home]]\n---\n```toc\n```\n---\n[GitHub - C4illin/ConvertX: Self-hosted online file converter. Supports 1000+ formats](https://github.com/C4illin/ConvertX)\n\n---\n## Docker Compose\n\n```bash\nsudo mkdir -p /home/server/apps/convertx\n```\n\n```bash\nsudo nano /home/server/apps/convertx/docker-compose.yaml\n```\n\n```yaml\nservices:\n  convertx: \n    image: ghcr.io/c4illin/convertx\n    container_name: convertx\n    restart: unless-stopped\n    ports:\n      - \"3000:3000\"\n    environment: # Defaults are listed below. All are optional.\n      - ACCOUNT_REGISTRATION=false # true or false, doesn't matter for the first account (e.g. keep this to false if you only want one account)\n      - JWT_SECRET=aLongAndSecretStringUsedToSignTheJSONWebToken1234 # will use randomUUID() by default\n      - HTTP_ALLOWED=false # setting this to true is unsafe, only set this to true locally\n      - ALLOW_UNAUTHENTICATED=false # allows anyone to use the service without logging in, only set this to true locally\n      - AUTO_DELETE_EVERY_N_HOURS=24 # checks every n hours for files older then n hours and deletes them, set to 0 to disable\n    volumes:\n      - /home/server/apps/convertx:/app/data\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.convertx.rule=Host(`convertx.local.jalubru.com`)\"\n      - \"traefik.http.routers.convertx.entrypoints=https\"\n      - \"traefik.http.routers.convertx.tls=true\"\n      - \"traefik.http.services.convertx.loadbalancer.server.port=3000\"\n    networks:\n      - proxy\n\nnetworks:\n  proxy:\n    external: true\n```\n\n```bash\ndocker compose -f /home/server/apps/convertx/docker-compose.yaml up -d\n```"
  },
  "homebox": {
    "serviceId": "homebox",
    "sourceFile": "HomeBox.md",
    "title": "HomeBox",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "HomeBox"
      ],
      "ITname": "HomeBox",
      "ITcategory": "Organisation",
      "ITmachine": [
        "OptiPi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": "Homebox --- Video - DB Tech Video - Awesome Open Source ---",
    "links": [
      {
        "label": "Video - DB Tech",
        "url": "https://www.youtube.com/watch?v=QwfJZ2sUDUE"
      },
      {
        "label": "Video - Awesome Open Source",
        "url": "https://www.youtube.com/watch?v=XawMT0fg_To"
      },
      {
        "label": "Quick Start - Docker-Compose",
        "url": "https://hay-kot.github.io/homebox/quick-start/#docker-compose"
      }
    ],
    "codeBlocks": [
      {
        "language": "bash",
        "code": "sudo mkdir /home/apps/homebox"
      },
      {
        "language": "bash",
        "code": "sudo nano /home/apps/homebox/docker-compose.yaml"
      },
      {
        "language": "yml",
        "code": "services:\n  homebox:\n    image: ghcr.io/hay-kot/homebox:latest \n    container_name: homebox\n    networks:\n      - proxy\n    environment: \n    - HBOX_LOG_LEVEL=critical \n    - HBOX_LOG_FORMAT=text\n    - HBOX_WEB_MAX_UPLOAD_SIZE=10 \n    volumes: \n    - /home/apps/homebox/data:/data/\n    ports:\n      - 3100:7745\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.homebox.rule=Host(`homebox.local.jalubru.com`)\"\n      - \"traefik.http.routers.homebox.entrypoints=https\"\n      - \"traefik.http.routers.homebox.tls=true\"\n      - \"traefik.http.services.homebox.loadbalancer.server.port=7745\"\n    restart: unless-stopped\n\nvolumes: \n  homebox-data: \n    driver: local\n\nnetworks:\n  proxy:\n    external: true"
      },
      {
        "language": "bash",
        "code": "docker compose -f /home/apps/homebox/docker-compose.yaml up -d"
      }
    ],
    "markdown": "## Homebox\n\n---\n[Video - DB Tech](https://www.youtube.com/watch?v=QwfJZ2sUDUE)\n[Video - Awesome Open Source](https://www.youtube.com/watch?v=XawMT0fg_To)\n\n---\n### Installation\n[Quick Start - Docker-Compose](https://hay-kot.github.io/homebox/quick-start/#docker-compose)\n\n```bash\nsudo mkdir /home/apps/homebox\n```\n\n```bash\nsudo nano /home/apps/homebox/docker-compose.yaml\n```\n\n```yml\nservices:\n  homebox:\n    image: ghcr.io/hay-kot/homebox:latest \n    container_name: homebox\n    networks:\n      - proxy\n    environment: \n    - HBOX_LOG_LEVEL=critical \n    - HBOX_LOG_FORMAT=text\n    - HBOX_WEB_MAX_UPLOAD_SIZE=10 \n    volumes: \n    - /home/apps/homebox/data:/data/\n    ports:\n      - 3100:7745\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.homebox.rule=Host(`homebox.local.jalubru.com`)\"\n      - \"traefik.http.routers.homebox.entrypoints=https\"\n      - \"traefik.http.routers.homebox.tls=true\"\n      - \"traefik.http.services.homebox.loadbalancer.server.port=7745\"\n    restart: unless-stopped\n\nvolumes: \n  homebox-data: \n    driver: local\n\nnetworks:\n  proxy:\n    external: true\n```\n\n```bash\ndocker compose -f /home/apps/homebox/docker-compose.yaml up -d\n```\n\n---\n\n### Env Variable Options\n\n| Variable                             | Default                 | Description                                                                       |\n| ------------------------------------ | ----------------------- | --------------------------------------------------------------------------------- |\n| HBOX_MODE                            | production              | application mode used for runtime behavior can be one of: development, production |\n| HBOX_WEB_PORT                        | 7745                    | port to run the web server on, if you're using docker do not change this          |\n| HBOX_WEB_HOST                        |                         | host to run the web server on, if you're using docker do not change this          |\n| HBOX_OPTIONS_ALLOW\\_</br>REGISTRATION      | true                    | allow users to register themselves                                                |\n| HBOX_OPTIONS_AUTO\\_</br>INCREMENT_ASSET_ID | true                    | auto increments the asset_id field for new items                                  |\n| HBOX_WEB_MAX\\_</br>UPLOAD_SIZE             | 10                      | maximum file upload size supported in MB                                          |\n| HBOX_STORAGE_DATA                    | /data/                  | path to the data directory, do not change this if you're using docker             |\n| HBOX_STORAGE_SQLITE_URL              | /data/</br>homebox.db?\\_fk=1 | sqlite database url, in you're using docker do not change this                    |\n| HBOX_LOG_LEVEL                       | info                    | log level to use, can be one of: trace, debug, info, warn, error, critical        |\n| HBOX_LOG_FORMAT                      | text                    | log format to use, can be one of: text, json                                      |\n| HBOX_MAILER_HOST                     |                         | email host to use, if not set no email provider will be used                      |\n| HBOX_MAILER_PORT                     | 587                     | email port to use                                                                 |\n| HBOX_MAILER_USERNAME                 |                         | email user to use                                                                 |\n| HBOX_MAILER_PASSWORD                 |                         | email password to use                                                             |\n| HBOX_MAILER_FROM                     |                         | email from address to use                                                         |\n| HBOX_SWAGGER_HOST                    | 7745                    | swagger host to use, if not set swagger will be disabled                          |\n| HBOX_SWAGGER_SCHEMA                  | http                    | swagger schema to use, can be one of: http, https                                 |\n\n---\n[[00 Homelab|home]] | origin | source"
  },
  "it-tools": {
    "serviceId": "it-tools",
    "sourceFile": "IT-tools.md",
    "title": "IT-tools",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "IT-tools"
      ],
      "ITname": "IT-tools",
      "ITcategory": "Utility",
      "ITmachine": [
        "OptiPi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ],
      "url": "ittools.local.jalubru.com"
    },
    "summary": ">[[00 Homelab|home]] --- --- https://github.com/CorentinTh/it-tools ---",
    "links": [],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "text",
        "code": "docker run -d --name it-tools --restart unless-stopped -p 8080:80 corentinth/it-tools:latest"
      },
      {
        "language": "yaml",
        "code": "services:\n  it-tools:\n    image: corentinth/it-tools:latest\n    container_name: it-tools\n    ports: 8080:80\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.twitchbot.rule=Host(`ittools.local.jalubru.com`)\"\n      - \"traefik.http.routers.ittools.entrypoints=https\"\n      - \"traefik.http.routers.ittools.tls=true\"\n      - \"traefik.http.services.ittools.loadbalancer.server.port=80\"\n    networks:\n      - proxy\n    restart: unless-stopped\n    pull_policy: always\n\nnetworks:\n  proxy:\n    external: true"
      },
      {
        "language": "bash",
        "code": "sudo mkdir -p /home/server/apps/ittools"
      },
      {
        "language": "bash",
        "code": "sudo nano /home/server/apps/ittools/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "services:\n  it-tools:\n    image: corentinth/it-tools:latest\n    container_name: it-tools\n    ports: \n      - 8080:80\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.ittools.rule=Host(`ittools.local.jalubru.com`)\"\n      - \"traefik.http.routers.ittools.entrypoints=https\"\n      - \"traefik.http.routers.ittools.tls=true\"\n      - \"traefik.http.services.ittools.loadbalancer.server.port=8080\"\n    networks:\n      - proxy\n    restart: unless-stopped\n    pull_policy: always\n\nnetworks:\n  proxy:\n    external: true"
      },
      {
        "language": "bash",
        "code": "docker compose -f /home/server/apps/ittools/docker-compose.yaml up -d"
      }
    ],
    "markdown": ">[[00 Homelab|home]]\n---\n```toc\n```\n---\nhttps://github.com/CorentinTh/it-tools\n\n---\n## docker\n\n```\ndocker run -d --name it-tools --restart unless-stopped -p 8080:80 corentinth/it-tools:latest\n```\n\n```yaml\nservices:\n  it-tools:\n    image: corentinth/it-tools:latest\n    container_name: it-tools\n    ports: 8080:80\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.twitchbot.rule=Host(`ittools.local.jalubru.com`)\"\n      - \"traefik.http.routers.ittools.entrypoints=https\"\n      - \"traefik.http.routers.ittools.tls=true\"\n      - \"traefik.http.services.ittools.loadbalancer.server.port=80\"\n    networks:\n      - proxy\n    restart: unless-stopped\n    pull_policy: always\n\nnetworks:\n  proxy:\n    external: true\n```\n\n\n```bash\nsudo mkdir -p /home/server/apps/ittools\n```\n\n```bash\nsudo nano /home/server/apps/ittools/docker-compose.yaml\n```\n\n```yaml\nservices:\n  it-tools:\n    image: corentinth/it-tools:latest\n    container_name: it-tools\n    ports: \n      - 8080:80\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.ittools.rule=Host(`ittools.local.jalubru.com`)\"\n      - \"traefik.http.routers.ittools.entrypoints=https\"\n      - \"traefik.http.routers.ittools.tls=true\"\n      - \"traefik.http.services.ittools.loadbalancer.server.port=8080\"\n    networks:\n      - proxy\n    restart: unless-stopped\n    pull_policy: always\n\nnetworks:\n  proxy:\n    external: true\n```\n\n```bash\ndocker compose -f /home/server/apps/ittools/docker-compose.yaml up -d\n```"
  },
  "mealie": {
    "serviceId": "mealie",
    "sourceFile": "Mealie.md",
    "title": "Mealie",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Mealie"
      ],
      "ITname": "Mealie",
      "ITcategory": "Organisation",
      "ITmachine": [
        "OptiPi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab|home]] --- --- Installation - Mealie ---",
    "links": [
      {
        "label": "Installation - Mealie",
        "url": "https://docs.mealie.io/documentation/getting-started/installation/sqlite/"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "sudo mkdir -p /home/apps/mealie"
      },
      {
        "language": "bash",
        "code": "docker volume create mealie-data"
      },
      {
        "language": "bash",
        "code": "sudo nano /home/apps/mealie/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "services:\n  mealie:\n    image: ghcr.io/mealie-recipes/mealie:latest # \n    container_name: mealie\n    restart: always\n    ports:\n        - \"9925:9000\" # \n    deploy:\n      resources:\n        limits:\n          memory: 1000M # \n    networks:\n      - proxy\n    volumes:\n      - mealie-data:/app/data/\n    environment:\n      # Set Backend ENV Variables Here\n      ALLOW_SIGNUP: true\n      PUID: 1000\n      PGID: 1000\n      TZ: Europe/Riga\n      MAX_WORKERS: 1\n      WEB_CONCURRENCY: 1\n      BASE_URL: https://192.168.0.191\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.mealie.rule=Host(`mealie.local.jalubru.com`)\n      - \"traefik.http.routers.mealie.entrypoints=http\"\n      - \"traefik.http.routers.mealie.tls=true\"\n      - \"traefik.http.services.mealie.loadbalancer.server.port=9925\"\nnetworks:\n  proxy:\n    external: true\nvolumes:\n  mealie-data:"
      },
      {
        "language": "bash",
        "code": "sudo docker compose -f /home/apps/mealie/docker-compose.yaml up -d"
      }
    ],
    "markdown": ">[[00 Homelab|home]]\n---\n```toc\n```\n---\n[Installation - Mealie](https://docs.mealie.io/documentation/getting-started/installation/sqlite/)\n\n---\n## Docker Compose\n\n\n```bash\nsudo mkdir -p /home/apps/mealie\n```\n\n```bash\ndocker volume create mealie-data\n```\n\n```bash\nsudo nano /home/apps/mealie/docker-compose.yaml\n```\n\n```yaml\nservices:\n  mealie:\n    image: ghcr.io/mealie-recipes/mealie:latest # \n    container_name: mealie\n    restart: always\n    ports:\n        - \"9925:9000\" # \n    deploy:\n      resources:\n        limits:\n          memory: 1000M # \n    networks:\n      - proxy\n    volumes:\n      - mealie-data:/app/data/\n    environment:\n      # Set Backend ENV Variables Here\n      ALLOW_SIGNUP: true\n      PUID: 1000\n      PGID: 1000\n      TZ: Europe/Riga\n      MAX_WORKERS: 1\n      WEB_CONCURRENCY: 1\n      BASE_URL: https://192.168.0.191\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.mealie.rule=Host(`mealie.local.jalubru.com`)\n      - \"traefik.http.routers.mealie.entrypoints=http\"\n      - \"traefik.http.routers.mealie.tls=true\"\n      - \"traefik.http.services.mealie.loadbalancer.server.port=9925\"\nnetworks:\n  proxy:\n    external: true\nvolumes:\n  mealie-data:\n```\n\n```bash\nsudo docker compose -f /home/apps/mealie/docker-compose.yaml up -d\n```"
  },
  "teleport": {
    "serviceId": "teleport",
    "sourceFile": "Teleport.md",
    "title": "Teleport",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Teleport"
      ],
      "ITname": "Teleport",
      "ITcategory": "Reverse Proxy",
      "ITmachine": [
        "OptiPi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "todo"
      ],
      "priority": [
        "\"3\""
      ]
    },
    "summary": ">[[00 Homelab|home]] --- --- Traefik + Teleport - Christian Lempa - YouTube ---",
    "links": [
      {
        "label": "Traefik + Teleport - Christian Lempa - YouTube",
        "url": "https://www.youtube.com/watch?v=NzSdNoR-JPo"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "sudo mkdir -p /home/apps/teleport/{config,data}"
      },
      {
        "language": "bash",
        "code": "sudo nano /home/apps/teleport/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "---\n# -- (Optional) When using Traefik, use this section\nnetworks:\n  proxy:\n    external: true\nservices:\n  teleport:\n    image: public.ecr.aws/gravitational/teleport-distroless:16.0.1\n    container_name: teleport\n    # ports:\n      # -- (Optional) Remove this section, when using Traefik\n      # - \"3080:3080\"\n      # - \"3023:3023\"\n      # - \"3024:3024\"\n      # - \"3025:3025\"\n    volumes:\n      - /home/apps/teleport/config:/etc/teleport\n      - /home/apps/teleport/data:/var/lib/teleport\n    # -- (Optional) Traefik example configuration\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.teleport.rule=Host(`teleport.local.jalubru.com`) || HostRegexp(`{subhost:[a-z]+}.teleport.local.jalubru.com`)\"\n      - \"traefik.http.routers.teleport.entrypoints=https\"\n      - \"traefik.http.routers.teleport.tls=true\"\n      - \"traefik.http.services.teleport.loadbalancer.server.port=3080\"\n    networks:\n      - proxy\n    restart: unless-stopped"
      },
      {
        "language": "yaml",
        "code": "---\n# -- (Optional) When using Traefik, use this section\nnetworks:\n  proxy:\n    external: true\nservices:\n  teleport:\n    image: public.ecr.aws/gravitational/teleport-distroless:16.0.1\n    container_name: teleport\n    ports:\n      # -- (Optional) Remove this section, when using Traefik\n      # - \"3080:3080\"\n      # - \"3023:3023\"\n      # - \"3024:3024\"\n      # - \"3025:3025\"\n    volumes:\n      - /home/apps/teleport/config:/etc/teleport\n      - /home/apps/teleport/data:/var/lib/teleport\n    # -- (Optional) Traefik example configuration\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.services.teleport.loadbalancer.server.port=3080\"\n      - \"traefik.http.services.teleport.loadbalancer.server.scheme=https\"\n      - \"traefik.http.routers.teleport-http.entrypoints=http\"\n      - \"traefik.http.routers.teleport-http.rule=Host(`teleport.local.jalubru.com`) || HostRegexp(`{subhost:[a-z]+}.teleport.local.jalubru.com`)\"\n      - \"traefik.http.routers.teleport-https.entrypoints=https\"\n      - \"traefik.http.routers.teleport-https.rule=Host(`teleport.local.jalubru.com`) || HostRegexp(`{subhost:[a-z]+}.teleport.local.jalubru.com`)\"\n      - \"traefik.http.routers.teleport-https.tls=true\"\n      - \"traefik.http.routers.teleport-https.tls.certresolver=cloudflare\"\n      - \"traefik.http.routers.teleport-https.tls.domains[0].main=teleport.local.jalubru.com\"\n      - \"traefik.http.routers.teleport-https.tls.domains[0].sans=*.teleport.local.jalubru.com\"\n    networks:\n      - proxy\n    restart: unless-stopped"
      },
      {
        "language": "bash",
        "code": "sudo nano /home/apps/teleport/config/teleport.yaml"
      },
      {
        "language": "yaml",
        "code": "version: v2\nteleport:\n  nodename: optiport\n  data_dir: /var/lib/teleport\n  log:\n    output: stderr\n    severity: INFO\n    format:\n      output: text\n\nauth_service:\n  enabled: \"yes\"\n  listen_addr: 0.0.0.0:3025\n  proxy_listener_mode: multiplex\n  cluster_name: teleport.local.jalubru.com\n  # -- (Optional) Passwordless Authentication\n  # authentication:\n  #   type: local\n  #   second_factor: on\n  #   webauthn:\n  #     rp_id: your-server-url\n  #   connector_name: passwordless\n  # -- (Optional) Teleport Assist\n  # assist:\n  #   openai:\n  #     api_token_path: /etc/teleport/openai_key\n\nssh_service:\n  enabled: \"no\"\n\nproxy_service:\n  enabled: \"yes\"\n  web_listen_addr: 0.0.0.0:3080\n  # -- (Optional) when using reverse proxy\n  public_addr: ['teleport.local.jalubru.com:443']\n  https_keypairs: []\n  acme: {}\n  # --(Optional) ACME\n  # acme:\n  #   enabled: \"yes\"\n  #   email: your-email-address\n  # -- (Optional) Teleport Assist\n  # assist:\n  #   openai:\n  #     api_token_path: /etc/teleport/openai_key\n\napp_service:\n  enabled: yes\n  # -- (Optional) App Service\n  # enabled: yes\n  apps:\n    - name: \"proxmox\"\n      uri: \"https://proxmox.local.jalubru.com\"\n      insecure_skip_verify: false"
      },
      {
        "language": "bash",
        "code": "sudo docker compose -f /home/apps/teleport/docker-compose.yaml up -d"
      }
    ],
    "markdown": ">[[00 Homelab|home]]\n---\n```toc\n```\n---\n[Traefik + Teleport - Christian Lempa - YouTube](https://www.youtube.com/watch?v=NzSdNoR-JPo)\n\n---\nConnected with [[Traefik]]\n## Docker-Compose\n```bash\nsudo mkdir -p /home/apps/teleport/{config,data}\n```\n\n```bash\nsudo nano /home/apps/teleport/docker-compose.yaml\n```\n\n```yaml\n---\n# -- (Optional) When using Traefik, use this section\nnetworks:\n  proxy:\n    external: true\nservices:\n  teleport:\n    image: public.ecr.aws/gravitational/teleport-distroless:16.0.1\n    container_name: teleport\n    # ports:\n      # -- (Optional) Remove this section, when using Traefik\n      # - \"3080:3080\"\n      # - \"3023:3023\"\n      # - \"3024:3024\"\n      # - \"3025:3025\"\n    volumes:\n      - /home/apps/teleport/config:/etc/teleport\n      - /home/apps/teleport/data:/var/lib/teleport\n    # -- (Optional) Traefik example configuration\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.routers.teleport.rule=Host(`teleport.local.jalubru.com`) || HostRegexp(`{subhost:[a-z]+}.teleport.local.jalubru.com`)\"\n      - \"traefik.http.routers.teleport.entrypoints=https\"\n      - \"traefik.http.routers.teleport.tls=true\"\n      - \"traefik.http.services.teleport.loadbalancer.server.port=3080\"\n    networks:\n      - proxy\n    restart: unless-stopped\n```\n\nChristian Lempa:\n```yaml\n---\n# -- (Optional) When using Traefik, use this section\nnetworks:\n  proxy:\n    external: true\nservices:\n  teleport:\n    image: public.ecr.aws/gravitational/teleport-distroless:16.0.1\n    container_name: teleport\n    ports:\n      # -- (Optional) Remove this section, when using Traefik\n      # - \"3080:3080\"\n      # - \"3023:3023\"\n      # - \"3024:3024\"\n      # - \"3025:3025\"\n    volumes:\n      - /home/apps/teleport/config:/etc/teleport\n      - /home/apps/teleport/data:/var/lib/teleport\n    # -- (Optional) Traefik example configuration\n    labels:\n      - \"traefik.enable=true\"\n      - \"traefik.http.services.teleport.loadbalancer.server.port=3080\"\n      - \"traefik.http.services.teleport.loadbalancer.server.scheme=https\"\n      - \"traefik.http.routers.teleport-http.entrypoints=http\"\n      - \"traefik.http.routers.teleport-http.rule=Host(`teleport.local.jalubru.com`) || HostRegexp(`{subhost:[a-z]+}.teleport.local.jalubru.com`)\"\n      - \"traefik.http.routers.teleport-https.entrypoints=https\"\n      - \"traefik.http.routers.teleport-https.rule=Host(`teleport.local.jalubru.com`) || HostRegexp(`{subhost:[a-z]+}.teleport.local.jalubru.com`)\"\n      - \"traefik.http.routers.teleport-https.tls=true\"\n      - \"traefik.http.routers.teleport-https.tls.certresolver=cloudflare\"\n      - \"traefik.http.routers.teleport-https.tls.domains[0].main=teleport.local.jalubru.com\"\n      - \"traefik.http.routers.teleport-https.tls.domains[0].sans=*.teleport.local.jalubru.com\"\n    networks:\n      - proxy\n    restart: unless-stopped\n```\n\n```bash\nsudo nano /home/apps/teleport/config/teleport.yaml\n```\n\n```yaml\nversion: v2\nteleport:\n  nodename: optiport\n  data_dir: /var/lib/teleport\n  log:\n    output: stderr\n    severity: INFO\n    format:\n      output: text\n\nauth_service:\n  enabled: \"yes\"\n  listen_addr: 0.0.0.0:3025\n  proxy_listener_mode: multiplex\n  cluster_name: teleport.local.jalubru.com\n  # -- (Optional) Passwordless Authentication\n  # authentication:\n  #   type: local\n  #   second_factor: on\n  #   webauthn:\n  #     rp_id: your-server-url\n  #   connector_name: passwordless\n  # -- (Optional) Teleport Assist\n  # assist:\n  #   openai:\n  #     api_token_path: /etc/teleport/openai_key\n\nssh_service:\n  enabled: \"no\"\n\nproxy_service:\n  enabled: \"yes\"\n  web_listen_addr: 0.0.0.0:3080\n  # -- (Optional) when using reverse proxy\n  public_addr: ['teleport.local.jalubru.com:443']\n  https_keypairs: []\n  acme: {}\n  # --(Optional) ACME\n  # acme:\n  #   enabled: \"yes\"\n  #   email: your-email-address\n  # -- (Optional) Teleport Assist\n  # assist:\n  #   openai:\n  #     api_token_path: /etc/teleport/openai_key\n\napp_service:\n  enabled: yes\n  # -- (Optional) App Service\n  # enabled: yes\n  apps:\n    - name: \"proxmox\"\n      uri: \"https://proxmox.local.jalubru.com\"\n      insecure_skip_verify: false\n```\n\n```bash\nsudo docker compose -f /home/apps/teleport/docker-compose.yaml up -d\n```\n\n```bash\ncd /home/apps/teleport\n```\n\n```bash\nsudo docker compose exec teleport tctl users add jalubru --roles=editor\n```"
  },
  "watchtower-optipi": {
    "serviceId": "watchtower-optipi",
    "sourceFile": "Watchtower.md",
    "title": "Watchtower",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Watchtower"
      ],
      "ITname": "Watchtower",
      "ITcategory": "Network Monitoring",
      "ITmachine": [
        "OptiPi",
        "Raspberry Pi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab]] --- Container.dev/Watchtower Text - Watchtower Telegram Notifications ---",
    "links": [
      {
        "label": "Container.dev/Watchtower",
        "url": "https://containrrr.dev/watchtower/"
      },
      {
        "label": "Text - Watchtower Telegram Notifications",
        "url": "https://github.com/Pyenb/Watchtower-telegram-notifications"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "sudo mkdir /home/apps/watchtower"
      },
      {
        "language": "bash",
        "code": "sudo nano /home/apps/watchtower/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "services:\n  watchtower:\n    image: containrrr/watchtower\n    container_name: watchtower\n    hostname: opti/raspi\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    environment:\n      - TZ=Europe/Riga\n      - WATCHTOWER_NOTIFICATIONS=shoutrrr\n      - WATCHTOWER_NOTIFICATION_URL=telegram://6009198592:AAHJIAo80E3e22kjKWOI_z1HHHFTxvY7KC4@telegram?chats=-4258936764\n      - WATCHTOWER_CLEANUP=true\n      - WATCHTOWER_INCLUDE_RESTARTING=true\n      - WATCHTOWER_INCLUDE_STOPPED=true\n      - WATCHTOWER_SCHEDULE= 0 0 04 ? * FRI #At 04:00 AM, only on Friday\n    restart: unless-stopped\n    pull_policy: always"
      },
      {
        "language": "bash",
        "code": "docker compose -f /home/apps/watchtower/docker-compose.yaml up -d"
      },
      {
        "language": "yaml",
        "code": "#      - WATCHTOWER_SCHEDULE= 0 0 04 ? * FRI #At 04:00 AM, only on Friday\n      - WATCHTOWER_RUN_ONCE=true"
      }
    ],
    "markdown": ">[[00 Homelab]]\n```toc\n```\n---\n[Container.dev/Watchtower](https://containrrr.dev/watchtower/)\n[Text - Watchtower Telegram Notifications](https://github.com/Pyenb/Watchtower-telegram-notifications)\n\n---\n\n## Docker-Compose\n\n```bash\nsudo mkdir /home/apps/watchtower\n```\n\n```bash\nsudo nano /home/apps/watchtower/docker-compose.yaml\n```\n\n```yaml\nservices:\n  watchtower:\n    image: containrrr/watchtower\n    container_name: watchtower\n    hostname: opti/raspi\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    environment:\n      - TZ=Europe/Riga\n      - WATCHTOWER_NOTIFICATIONS=shoutrrr\n      - WATCHTOWER_NOTIFICATION_URL=telegram://6009198592:AAHJIAo80E3e22kjKWOI_z1HHHFTxvY7KC4@telegram?chats=-4258936764\n      - WATCHTOWER_CLEANUP=true\n      - WATCHTOWER_INCLUDE_RESTARTING=true\n      - WATCHTOWER_INCLUDE_STOPPED=true\n      - WATCHTOWER_SCHEDULE= 0 0 04 ? * FRI #At 04:00 AM, only on Friday\n    restart: unless-stopped\n    pull_policy: always\n```\n\n```bash\ndocker compose -f /home/apps/watchtower/docker-compose.yaml up -d\n```\n\n---\nRun once\n```yaml\n#      - WATCHTOWER_SCHEDULE= 0 0 04 ? * FRI #At 04:00 AM, only on Friday\n      - WATCHTOWER_RUN_ONCE=true\n```"
  },
  "watchtower-serverpi": {
    "serviceId": "watchtower-serverpi",
    "sourceFile": "Watchtower.md",
    "title": "Watchtower",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Watchtower"
      ],
      "ITname": "Watchtower",
      "ITcategory": "Network Monitoring",
      "ITmachine": [
        "OptiPi",
        "Raspberry Pi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab]] --- Container.dev/Watchtower Text - Watchtower Telegram Notifications ---",
    "links": [
      {
        "label": "Container.dev/Watchtower",
        "url": "https://containrrr.dev/watchtower/"
      },
      {
        "label": "Text - Watchtower Telegram Notifications",
        "url": "https://github.com/Pyenb/Watchtower-telegram-notifications"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "sudo mkdir /home/apps/watchtower"
      },
      {
        "language": "bash",
        "code": "sudo nano /home/apps/watchtower/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "services:\n  watchtower:\n    image: containrrr/watchtower\n    container_name: watchtower\n    hostname: opti/raspi\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    environment:\n      - TZ=Europe/Riga\n      - WATCHTOWER_NOTIFICATIONS=shoutrrr\n      - WATCHTOWER_NOTIFICATION_URL=telegram://6009198592:AAHJIAo80E3e22kjKWOI_z1HHHFTxvY7KC4@telegram?chats=-4258936764\n      - WATCHTOWER_CLEANUP=true\n      - WATCHTOWER_INCLUDE_RESTARTING=true\n      - WATCHTOWER_INCLUDE_STOPPED=true\n      - WATCHTOWER_SCHEDULE= 0 0 04 ? * FRI #At 04:00 AM, only on Friday\n    restart: unless-stopped\n    pull_policy: always"
      },
      {
        "language": "bash",
        "code": "docker compose -f /home/apps/watchtower/docker-compose.yaml up -d"
      },
      {
        "language": "yaml",
        "code": "#      - WATCHTOWER_SCHEDULE= 0 0 04 ? * FRI #At 04:00 AM, only on Friday\n      - WATCHTOWER_RUN_ONCE=true"
      }
    ],
    "markdown": ">[[00 Homelab]]\n```toc\n```\n---\n[Container.dev/Watchtower](https://containrrr.dev/watchtower/)\n[Text - Watchtower Telegram Notifications](https://github.com/Pyenb/Watchtower-telegram-notifications)\n\n---\n\n## Docker-Compose\n\n```bash\nsudo mkdir /home/apps/watchtower\n```\n\n```bash\nsudo nano /home/apps/watchtower/docker-compose.yaml\n```\n\n```yaml\nservices:\n  watchtower:\n    image: containrrr/watchtower\n    container_name: watchtower\n    hostname: opti/raspi\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    environment:\n      - TZ=Europe/Riga\n      - WATCHTOWER_NOTIFICATIONS=shoutrrr\n      - WATCHTOWER_NOTIFICATION_URL=telegram://6009198592:AAHJIAo80E3e22kjKWOI_z1HHHFTxvY7KC4@telegram?chats=-4258936764\n      - WATCHTOWER_CLEANUP=true\n      - WATCHTOWER_INCLUDE_RESTARTING=true\n      - WATCHTOWER_INCLUDE_STOPPED=true\n      - WATCHTOWER_SCHEDULE= 0 0 04 ? * FRI #At 04:00 AM, only on Friday\n    restart: unless-stopped\n    pull_policy: always\n```\n\n```bash\ndocker compose -f /home/apps/watchtower/docker-compose.yaml up -d\n```\n\n---\nRun once\n```yaml\n#      - WATCHTOWER_SCHEDULE= 0 0 04 ? * FRI #At 04:00 AM, only on Friday\n      - WATCHTOWER_RUN_ONCE=true\n```"
  },
  "nginxproxymanager": {
    "serviceId": "nginxproxymanager",
    "sourceFile": "Nginx Proxy Manager.md",
    "title": "Nginx Proxy Manager",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Nginx Proxy Manager",
        "nginx"
      ],
      "ITname": "Nginx Proxy Manager",
      "ITcategory": "Reverse Proxy",
      "ITmachine": [
        "Raspberry Pi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab]] --- --- https://github.com/christianlempa/videos/tree/main/nginxproxymanager-tutorial https://notthebe.ee/blog/easy-ssl-in-homelab-dns01/",
    "links": [
      {
        "label": "Nginx Proxy Manager",
        "url": "https://nginxproxymanager.com/"
      },
      {
        "label": "https://nginxproxymanager.com/guide/",
        "url": "https://nginxproxymanager.com/guide/"
      },
      {
        "label": "portainer.io",
        "url": "http://serverpi.local:9000/#!/2/docker/stacks"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "docker network create proxy\nmkdir /home/server/apps/nginxproxymanager/{data,letsencrypt}"
      },
      {
        "language": "bash",
        "code": "sudo nano /home/server/apps/nginxproxymanager/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "networks:\n  proxy:\n    external: true\n\nservices:\n  nginxproxymanager:\n    image: \"jc21/nginx-proxy-manager:latest\"\n    container_name: nginxproxymanager \n    restart: always\n    ports:\n      - \"80:80\"\n      - \"443:443\"\n      - \"81:81\"\n    environment:\n      DB_SQLITE_FILE: \"/data/database.sqlite\"\n      DISABLE_IPV6: \"true\"\n    volumes:\n      - /home/server/apps/nginxproxymanager/data:/data\n      - /home/server/apps/nginxproxymanager/letsencrypt:/etc/letsencrypt\n    networks:\n      - proxy"
      },
      {
        "language": "bash",
        "code": "sudo docker compose -f /home/server/apps/nginxproxymanager/docker-compose.yaml up -d"
      },
      {
        "language": "text",
        "code": "Email:    admin@example.com\nPassword: changeme"
      },
      {
        "language": "bash",
        "code": "sudo mkdir /home/server/apps/nginxproxymanager\nsudo mkdir /media/wd2001ext4"
      },
      {
        "language": "bash",
        "code": "cd /home/server/apps/nginxproxymanager"
      }
    ],
    "markdown": ">[[00 Homelab]]\n---\n```toc\n```\n---\nhttps://github.com/christianlempa/videos/tree/main/nginxproxymanager-tutorial\nhttps://notthebe.ee/blog/easy-ssl-in-homelab-dns01/\nhttps://www.youtube.com/watch?v=qlcVx-k-02E&t\n---\n\n[[Nextcloud|See also - Nextcloud]]\n[[Homeassistant|See also - Homeassistant]]\n[[Jellyfin|See also - Jellyfin]] or [[Mediaserver]]\n\n## Chrisbeard Tutorial\nhttps://github.com/chrisbeardy/nextcloud-docker-raspberrypi-tutorial\n\n### Setting up the reverse proxy stack\n\nWe are going to use [Nginx Proxy Manager](https://nginxproxymanager.com/) for our reverse proxy, but as we are only running on a raspberry pi will setup using sqlite and not a full SQL database.\n\n```bash\ndocker network create proxy\nmkdir /home/server/apps/nginxproxymanager/{data,letsencrypt}\n```\n\n```bash\nsudo nano /home/server/apps/nginxproxymanager/docker-compose.yaml\n```\n\n```yaml\nnetworks:\n  proxy:\n    external: true\n\nservices:\n  nginxproxymanager:\n    image: \"jc21/nginx-proxy-manager:latest\"\n    container_name: nginxproxymanager \n    restart: always\n    ports:\n      - \"80:80\"\n      - \"443:443\"\n      - \"81:81\"\n    environment:\n      DB_SQLITE_FILE: \"/data/database.sqlite\"\n      DISABLE_IPV6: \"true\"\n    volumes:\n      - /home/server/apps/nginxproxymanager/data:/data\n      - /home/server/apps/nginxproxymanager/letsencrypt:/etc/letsencrypt\n    networks:\n      - proxy\n```\n\nCreate container:\n\n```bash\nsudo docker compose -f /home/server/apps/nginxproxymanager/docker-compose.yaml up -d\n```\n\nNavigate to `http://192.168.0.195:81` and enter the default credentials:\n\n```\nEmail:    admin@example.com\nPassword: changeme\n```\n\nYou will immediately be prompted to change these.\n\n---\n\n## Set up Nginx Proxy Manager\n\ncreate directory for nginxproxymanager\n```bash\nsudo mkdir /home/server/apps/nginxproxymanager\nsudo mkdir /media/wd2001ext4\n```\n\ngo to folder\n```bash\ncd /home/server/apps/nginxproxymanager\n```\n\nCreate a new file `docker-compose.yaml` file, please refer to the nginxproxymanager documentation: [https://nginxproxymanager.com/guide/](https://nginxproxymanager.com/guide/).\n```bash\nsudo nano docker-compose.yaml\n```\n\n```yaml\nversion: '2.2' \n\nnetworks:\n  frontend:\n    external:\n      name: proxy\n  backend:\n  \nservices:\n#  nginxproxymanager:\n#    image: 'jc21/nginx-proxy-manager:latest'\n#    container_name: nginxproxymanager \n#    restart: unless-stopped \n#    ports:\n#      - '80:80' \n#      - '81:81' \n#      - '443:443' \n#    environment:\n      # Mysql/Maria connection parameters:\n#      - DB_MYSQL_HOST: \"database\"\n#      - DB_MYSQL_PORT: 3306\n#      - DB_MYSQL_USER: \"npm\"\n#      - DB_MYSQL_PASSWORD: \"4n0nymus\"\n#      - DB_MYSQL_NAME: \"npm\"\n#      - DISABLE_IPV6: 'true'\n#    volumes: \n#      - ./nginx/data:/data \n#      - ./nginx/letsencrypt:/etc/letsencrypt\n#    depends_on:\n#      - database\n\n  nextcloud:\n    image: lscr.io/linuxserver/nextcloud:latest\n    container_name: nextcloud \n    environment: \n      - PUID=1000 \n      - PGID=1000 \n      - TZ=Europe/Riga \n      - MYSQL_HOST=nextcloud-db\n#      - MYSQL_PORT=3306\n      - MYSQL_USER=nextcloud\n      - MYSQL_PASSWORD=4n0nymus\n      - MYSQL_DATABASE=nextcloud\n      - PHP_UPLOAD_LIMIT=10G\n      - PHP_MEMORY_LIMIT=512M\n    volumes: \n      - ./nextcloud/appdata:/config \n      - ./nextcloud/data:/data \n    restart: unless-stopped \n\n\n\n  jellyfin: \n    image: lscr.io/linuxserver/jellyfin:latest \n    container_name: jellyfin \n    environment: \n      - PUID=1000 \n      - PGID=1000 \n      - TZ=Europe/Riga \n    volumes: \n      - ./jellyfin/config:/config \n      - ./jellyfin/tvshows:/data/tvshows \n      - ./jellyfin/movies:/data/movies \n    restart: unless-stopped\n\n```\n\n**Example Docker-Compose File**:\n```yaml\nversion: '3.8'\nservices:\n  app:\n    image: 'jc21/nginx-proxy-manager:latest'\n    restart: unless-stopped\n    ports:\n      - '80:80' # Public HTTP Port\n      - '443:443' # Public HTTPS Port\n      - '81:81' # Admin Web Port\n    environment:\n      DB_MYSQL_HOST: \"db\"\n      DB_MYSQL_PORT: 3306\n      DB_MYSQL_USER: \"npm\"\n      DB_MYSQL_PASSWORD: \"npm\"\n      DB_MYSQL_NAME: \"npm\"\n      DISABLE_IPV6: 'true'\n    volumes:\n      - ./data:/data\n      - ./letsencrypt:/etc/letsencrypt\n    depends_on:\n      - db\n  db:\n    image: 'jc21/mariadb-aria:latest'\n    restart: unless-stopped\n    environment:\n      MYSQL_ROOT_PASSWORD: 'npm'\n      MYSQL_DATABASE: 'npm'\n      MYSQL_USER: 'npm'\n      MYSQL_PASSWORD: 'npm'\n    volumes:\n      - ./mysql:/var/lib/mysql\n```\n\nStart the Nginx Proxy Manager\n```bash\ndocker compose up -d\n```\n\nLogin to the web UI of NGINX proxy manager\n\nNow we can log in to the web UI. Simply use your browser to connect to your server by using the IP address or an FQDN and connect on port `81`. Log in with the username `admin@example.com` and the password `changeme`. Next, you should change your username and password, and that’s it!\n\n---\n## Deployment via Portainer\n\n1. Go to [portainer.io](http://serverpi.local:9000/#!/2/docker/stacks)\n2. Click on \"Stacks\"\n3. \"\"+ Add stack\"\n4. Name: \"nginxproxymanager\"\n5. Insert `docker-compose` file into Web editor (change version 3 to version: '2')\n6. Click \"Deploy this stack\"\n7. Go to http://192.168.0.195:81/"
  },
  "sabnzbd": {
    "serviceId": "sabnzbd",
    "sourceFile": "NZB.md",
    "title": "NZB",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "NZB"
      ],
      "ITname": "NZB",
      "ITcategory": "Mediaserver",
      "ITmachine": [
        "Raspberry Pi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab]] >[[Mediaserver]] --- Text - addictedtotech how to install nzbget docker Text - addictedtotech how to install radarr with nzb on docker",
    "links": [
      {
        "label": "Text - addictedtotech how to install nzbget docker",
        "url": "https://www.addictedtotech.net/how-to-install-nzbget-docker-on-a-raspberry-pi-4/#How_to_install_NZBGet_Docker_on_A_Raspberry_Pi"
      },
      {
        "label": "Text - addictedtotech how to install radarr with nzb on docker",
        "url": "https://www.addictedtotech.net/how-to-install-radarr-docker-on-a-raspberry-pi-4/"
      },
      {
        "label": "Text - Github - SABNZBdb",
        "url": "https://github.com/linuxserver/docker-sabnzbd"
      },
      {
        "label": "Reddit Provider Deals",
        "url": "https://www.reddit.com/r/usenet/wiki/providerdeals/"
      },
      {
        "label": "Reddit Indexer List",
        "url": "https://www.reddit.com/r/usenet/wiki/indexers/"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      }
    ],
    "markdown": ">[[00 Homelab]]\n>[[Mediaserver]]\n```toc\n```\n---\n[Text - addictedtotech how to install nzbget docker](https://www.addictedtotech.net/how-to-install-nzbget-docker-on-a-raspberry-pi-4/#How_to_install_NZBGet_Docker_on_A_Raspberry_Pi)\n[Text - addictedtotech how to install radarr with nzb on docker](https://www.addictedtotech.net/how-to-install-radarr-docker-on-a-raspberry-pi-4/)\n[Text - Github - SABNZBdb](https://github.com/linuxserver/docker-sabnzbd)\n\n---\n## Accounts\n[[Usenet]]\n\n>[!info] Disclaimer\n>Both [[Torrent|Torrents]] and [[NZB|NZBs]] are using the same [[Mediaserver#^mediaserver-docker-compose|Docker Compose]] file!\n\n\n---\n[](Torrent.md)ddit [](NZB.md).reddit.com/r/usenet/wiki/providers/), [Reddit Provider Deals](https://www.reddit.com/r/usenet/wiki/providerdeals/))\n- [[Usenet#Eweka|Eweka Account Details]]: https://www.eweka.nl/en/myeweka?p=acd (50€ anually)\n\nIndexer: ([Reddit Indexer List](https://www.reddit.com/r/usenet/wiki/indexers/))\n- [[Usenet#NBZGeek|nzbgeek Account]]: https://nzbgeek.info (80€ lifetime)\n- [[Usenet#NzbPlanet|NzbPlanet Account]]: https://nzbplanet.net (45€ lifetime)\n\n### Configure SABnzbd\n372970eeeabc44d6bc24e29ffd136294\n\n- Open SABnzbd at http://192.168.0.195:8070\n- Sorting? Handled by Sonarr, Radarr?"
  },
  "qbittorrent": {
    "serviceId": "qbittorrent",
    "sourceFile": "Torrent.md",
    "title": [
      "Torrent",
      "qbittorrent"
    ],
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Torrent"
      ],
      "ITname": [
        "Torrent",
        "qbittorrent"
      ],
      "ITcategory": "Mediaserver",
      "ITmachine": [
        "Raspberry Pi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab]] >[[Mediaserver]] --- Text - github media-stack ---",
    "links": [
      {
        "label": "Text - github media-stack",
        "url": "https://github.com/navilg/media-stack"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "docker network create mediastack"
      },
      {
        "language": "bash",
        "code": "VPN_SERVICE_PROVIDER=nordvpn OPENVPN_USER=[REDACTED]\n\n# docker compose -f docker-compose-nginx.yml up -d # OPTIONAL to use Nginx as reverse proxy"
      },
      {
        "language": "bash",
        "code": "docker compose up -d\n# docker compose -f docker-compose-nginx.yml up -d # OPTIONAL to use Nginx as reverse proxy"
      },
      {
        "language": "bash",
        "code": "docker exec -it qbittorrent bash # Get inside qBittorrent container\n\n# Above command will get you inside qBittorrent interactive terminal, Run below command in qbt terminal\nmkdir /downloads/movies /downloads/tvshows\nchown 1000:1000 /downloads/movies /downloads/tvshows"
      },
      {
        "language": "text",
        "code": "location /qbt/ {\n    proxy_pass         http://qbittorrent:5080/; # Comment this line if VPN is enabled.\n    # proxy_pass         http://vpn:5080/; # Uncomment this line if VPN is enabled.\n    proxy_http_version 1.1;\n\n    proxy_set_header   Host               http://qbittorrent:5080; # Comment this line if VPN is enabled.\n    # proxy_set_header   Host               http://vpn:5080; # Uncomment this line if VPN is enabled.\n    proxy_set_header   X-Forwarded-Host   $http_host;\n    proxy_set_header   X-Forwarded-For    $remote_addr;\n    proxy_cookie_path  /                  \"/; Secure\";\n}"
      }
    ],
    "markdown": ">[[00 Homelab]]\n>[[Mediaserver]]\n```toc\n```\n---\n[Text - github media-stack](https://github.com/navilg/media-stack)\n\n---\n>[!info] Disclaimer\n>Both [[Torrent|Torrents]] and [[NZB|NZBs]] are using the same [[Mediaserver#^mediaserver-docker-compose|Docker Compose]] file!\n## Docker Compose\n\ncd /media/wd2001ext4/apps/mediaserver\nsudo nano docker-compose.yaml\n\n![[Mediaserver#^mediaserver-docker-compose]]\n\n\n\n\n---\n\n## media-stack\n\nA stack of self-hosted media managers and streamer along with VPN. \n\nStack include VPN, Radarr, Sonarr, Prowlarr, qBittorrent and Jellyfin.\n\n### Requirements\n\n- Docker version 24.0.5 and above\n- Docker compose version v2.20.2 and above\n- It may also work on some of lower versions, but its not tested.\n\n### Install media stack\n\nThere are two ways this stack can be deployed.\n\n1. With a VPN (Recommended)\n2. Without a VPN\n\nBefore we deploy the stack, We must create docker network first\n\n```bash\ndocker network create mediastack\n```\n\n**Deploy the stack with VPN**\n\nIf VPN is enabled, qBittorrent and Prowlarr will be put behind VPN.\n\nBy default, NordVPN is configured in `docker-compose.yml` file. This can be updated to use ExpressVPN, SurfShark, Custom OpenVPN or Wireguard VPN. It uses OpenVPN type for all the providers. \n\nCheck respective document of your VPN provider to generate OpenVPN username and password.\n\nBy default, VPN is disabled in `docker-compose.yml`. We just need comment and uncomment few lines in `docker-compose.yml` file to enable and use VPN. Go through the comment messages in `docker-compose.yml` file to update them accordingly. Its very well guided in the compose file itself.\n\nUpdate the `docker-compose.yml` file as guided in comment messsage in same file and follow below commands to deploy the stack.\n\nTo deploy the stack with VPN (with nordvpn):\n\n```bash\nVPN_SERVICE_PROVIDER=nordvpn OPENVPN_USER=[REDACTED]\n\n# docker compose -f docker-compose-nginx.yml up -d # OPTIONAL to use Nginx as reverse proxy\n```\n\n**Deploy the stack without VPN**\n\nTo deploy the stack with without VPN (highly discouraged), Run below command.\n\n```bash\ndocker compose up -d\n# docker compose -f docker-compose-nginx.yml up -d # OPTIONAL to use Nginx as reverse proxy\n```\n\n---\n## Configuration\n### Configure qBittorrent\n\n- Open qBitTorrent at http://192.168.0.195:5080. Default username:password is admin:adminadmin\n- Go to Tools --> Options --> WebUI --> Change password\n- Run below commands on the server\n\n```bash\ndocker exec -it qbittorrent bash # Get inside qBittorrent container\n\n# Above command will get you inside qBittorrent interactive terminal, Run below command in qbt terminal\nmkdir /downloads/movies /downloads/tvshows\nchown 1000:1000 /downloads/movies /downloads/tvshows\n```\n## Nginx Configuration\n\n- Get inside Nginx container\n- `cd /etc/nginx/conf.d`\n- Add proxies for all tools.\n\n`docker cp nginx.conf nginx:/etc/nginx/conf.d/default.conf && docker exec -it nginx nginx -s reload`\n- Close ports of other tools in firewall/security groups except port 80 and 443.\n\n\n### Apply SSL in Nginx\n\n- Open port 80 and 443.\n- Get inside Nginx container and install certbot and certbot-nginx `apk add certbot certbot-nginx`\n- Add URL in server block. e.g. `server_name  localhost armdev.navratangupta.in;` in /etc/nginx/conf.d/default.conf\n- Run `certbot --nginx` and provide details asked.\n\n\n### qBittorrent Nginx proxy\n\n```\nlocation /qbt/ {\n    proxy_pass         http://qbittorrent:5080/; # Comment this line if VPN is enabled.\n    # proxy_pass         http://vpn:5080/; # Uncomment this line if VPN is enabled.\n    proxy_http_version 1.1;\n\n    proxy_set_header   Host               http://qbittorrent:5080; # Comment this line if VPN is enabled.\n    # proxy_set_header   Host               http://vpn:5080; # Uncomment this line if VPN is enabled.\n    proxy_set_header   X-Forwarded-Host   $http_host;\n    proxy_set_header   X-Forwarded-For    $remote_addr;\n    proxy_cookie_path  /                  \"/; Secure\";\n}\n```\n\n**Note: If VPN is enabled, then qbittorrent is reachable on vpn's service name**"
  },
  "radarr": {
    "serviceId": "radarr",
    "sourceFile": "Mediaserver.md",
    "title": "Plex & Co.",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Mediaserver"
      ],
      "ITname": "Plex & Co.",
      "ITcategory": "Mediaserver",
      "ITmachine": [
        "Raspberry Pi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab]] --- Torrent [[Torrent]] qBitTorrent Setup",
    "links": [
      {
        "label": "Jellyfin API",
        "url": "https://jellyfin.jalubru.duckdns.org/web/index.html#!/apikeys.html"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "docker network create mediastack\nsudo mkdir -p /media/wd2001ext4/apps/mediaserver/{plex-config,tautulli-config,plex-logs,radarr-config,sonarr-config,prowlarr-config,bazarr-config,qbittorrent-config,sabnzbd-config}"
      },
      {
        "language": "bash",
        "code": "sudo nano /media/wd2001ext4/apps/mediaserver/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "name: media-stack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n      - /media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\n  ## Default credentials of qBittorrent - Username: admin password: adminadmin ##\n  ## Change password after install from UI --> Tools --> Options --> WebUI ##\n  qbittorrent:\n    image: lscr.io/linuxserver/qbittorrent:latest\n    # image: lscr.io/linuxserver/qbittorrent:4.5.4 older version\n    container_name: qbittorrent\n    # Unomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # Comment below lines if VPN is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    # Unomment below line if vpn is enabled\n    # network_mode: service:vpn\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - WEBUI_PORT=5080\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/qbittorrent-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ## Comment/Disable below ports if VPN is enabled\n    ports:\n      - 5080:5080\n      - 6881:6881\n      - 6881:6881/udp\n    restart: unless-stopped\n    pull_policy: always\n\n  radarr:\n    image: lscr.io/linuxserver/radarr:latest\n    # image: lscr.io/linuxserver/radarr:4.7.5 older version\n    container_name: radarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    ports:\n      - 7878:7878\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/radarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    restart: unless-stopped\n    pull_policy: always\n\n  sonarr:\n    image: linuxserver/sonarr:latest #using v4 instead of v3\n#    image: linuxserver/sonarr:4.0.0-develop\n    container_name: sonarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sonarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ports:\n      - 8989:8989\n    restart: unless-stopped\n    pull_policy: always\n\n  prowlarr:\n    image: linuxserver/prowlarr:latest\n    container_name: prowlarr\n    # Uncomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # network_mode: service:vpn # Uncomment this line if vpn is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/prowlarr-config:/config\n    # Comment below ports if VPN is enabled.\n    ports:\n      - 9696:9696\n    restart: unless-stopped\n    pull_policy: always\n\n# Subtitel Manager and Downloader\n  bazarr:\n    image: lscr.io/linuxserver/bazarr:latest\n    container_name: bazarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/bazarr-config:/config\n      - /media/wd2001ext4/media/downloads/movies:/movies\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n    ports:\n      - 6767:6767\n    restart: unless-stopped\n    pull_policy: always\n\n# NZB Provider\n  sabnzbd:\n    image: lscr.io/linuxserver/sabnzbd:latest\n    container_name: sabnzbd\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sabnzbd-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n      - /media/wd2001ext4/media/incomplete-downloads:/incomplete-downloads\n    ports:\n      - 8070:8080\n    restart: unless-stopped\n    pull_policy: always\n\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n  radarr-config:\n  sonarr-config:\n  prowlarr-config:\n  bazarr-config:\n  qbittorrent-config:\n  sabnzbd-config:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true"
      },
      {
        "language": "bash",
        "code": "sudo docker compose -f /media/wd2001ext4/apps/mediaserver/docker-compose.yaml up -d"
      },
      {
        "language": "bash",
        "code": "docker network create mediastack"
      },
      {
        "language": "bash",
        "code": "sudo mkdir /mediaserver\nsudo nano /mediaserver/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "name: mediastack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /mnt/media/wd2001ext4/media/downloads/tvshows:/tv\n      - /mnt/media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true"
      }
    ],
    "markdown": ">[[00 Homelab]]\n```toc\n```\n---\n## Torrent\n\n[[Torrent]]\nqBitTorrent Setup\n\n---\n## NZB\n\n[[NZB]]\nSABnzb Setup\n\n---\n## Docker Compose\n\n```bash\ndocker network create mediastack\nsudo mkdir -p /media/wd2001ext4/apps/mediaserver/{plex-config,tautulli-config,plex-logs,radarr-config,sonarr-config,prowlarr-config,bazarr-config,qbittorrent-config,sabnzbd-config}\n```\n\n```bash\nsudo nano /media/wd2001ext4/apps/mediaserver/docker-compose.yaml\n```\n\n```yaml\nname: media-stack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n      - /media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\n  ## Default credentials of qBittorrent - Username: admin password: adminadmin ##\n  ## Change password after install from UI --> Tools --> Options --> WebUI ##\n  qbittorrent:\n    image: lscr.io/linuxserver/qbittorrent:latest\n    # image: lscr.io/linuxserver/qbittorrent:4.5.4 older version\n    container_name: qbittorrent\n    # Unomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # Comment below lines if VPN is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    # Unomment below line if vpn is enabled\n    # network_mode: service:vpn\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - WEBUI_PORT=5080\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/qbittorrent-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ## Comment/Disable below ports if VPN is enabled\n    ports:\n      - 5080:5080\n      - 6881:6881\n      - 6881:6881/udp\n    restart: unless-stopped\n    pull_policy: always\n\n  radarr:\n    image: lscr.io/linuxserver/radarr:latest\n    # image: lscr.io/linuxserver/radarr:4.7.5 older version\n    container_name: radarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    ports:\n      - 7878:7878\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/radarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    restart: unless-stopped\n    pull_policy: always\n\n  sonarr:\n    image: linuxserver/sonarr:latest #using v4 instead of v3\n#    image: linuxserver/sonarr:4.0.0-develop\n    container_name: sonarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sonarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ports:\n      - 8989:8989\n    restart: unless-stopped\n    pull_policy: always\n\n  prowlarr:\n    image: linuxserver/prowlarr:latest\n    container_name: prowlarr\n    # Uncomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # network_mode: service:vpn # Uncomment this line if vpn is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/prowlarr-config:/config\n    # Comment below ports if VPN is enabled.\n    ports:\n      - 9696:9696\n    restart: unless-stopped\n    pull_policy: always\n\n# Subtitel Manager and Downloader\n  bazarr:\n    image: lscr.io/linuxserver/bazarr:latest\n    container_name: bazarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/bazarr-config:/config\n      - /media/wd2001ext4/media/downloads/movies:/movies\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n    ports:\n      - 6767:6767\n    restart: unless-stopped\n    pull_policy: always\n\n# NZB Provider\n  sabnzbd:\n    image: lscr.io/linuxserver/sabnzbd:latest\n    container_name: sabnzbd\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sabnzbd-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n      - /media/wd2001ext4/media/incomplete-downloads:/incomplete-downloads\n    ports:\n      - 8070:8080\n    restart: unless-stopped\n    pull_policy: always\n\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n  radarr-config:\n  sonarr-config:\n  prowlarr-config:\n  bazarr-config:\n  qbittorrent-config:\n  sabnzbd-config:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true\n```\n\n^mediaserver-docker-compose\n\n```bash\nsudo docker compose -f /media/wd2001ext4/apps/mediaserver/docker-compose.yaml up -d\n```\n\n---\n### Optiplex\n```bash\ndocker network create mediastack\n```\n\n```bash\nsudo mkdir /mediaserver\nsudo nano /mediaserver/docker-compose.yaml\n```\n\nalso included is [[Overseerr]]\n\n```yaml\nname: mediastack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /mnt/media/wd2001ext4/media/downloads/tvshows:/tv\n      - /mnt/media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true\n```\n\n```bash\nsudo docker compose -f /mediaserver/docker-compose.yaml up -d\n```\n---\n#### Unused:\n\n```yaml\n  # To use/enable VPN, Run this compose file with --profile=vpn. Its highly recommended to use VPN.\n  vpn:\n  ## Read https://github.com/qdm12/gluetun/wiki for details on configuring VPN for different service providers.\n    profiles: [\"vpn\"]\n    container_name: vpn\n    image: qmcgaw/gluetun:v3.35.0\n    cap_add:\n      - NET_ADMIN\n    environment:\n      - VPN_SERVICE_PROVIDER=${VPN_SERVICE_PROVIDER:-nordvpn} # Valid values: nordvpn, expressvpn, protonvpn, surfshark or custom\n      - OPENVPN_USER=[REDACTED]\"\"}\n      - OPENVPN_PASSWORD=[REDACTED]\"\"}\n\n      ## For list of server countries, visit https://raw.githubusercontent.com/qdm12/gluetun/master/internal/storage/servers.json\n\n      - SERVER_COUNTRIES=${SERVER_COUNTRIES:-Latvia}\n    \n      # - FREE_ONLY=on  # Valid with protonvpn only. Value willbe set \"on\" if using free subscription provided by protonvpn\n\n      ## Enable below if VPN_SERVICE_PROVIDER=custom\n      # - VPN_TYPE=openvpn # or wireguard. \n\n      ## If VPN_TYPE is openvpn\n      # - OPENVPN_CUSTOM_CONFIG=/gluetun/custom.conf\n\n      ## If VPN_TYPE is wireguard. Replace below env variables as required.\n      # - VPN_ENDPOINT_IP=1.2.3.4                                               # Replace with your wg endpoint ip or domain\n      # - VPN_ENDPOINT_PORT=51820                                               # Replace with wg server port\n      # - WIREGUARD_PUBLIC_KEY=[REDACTED]\n      # - WIREGUARD_PRIVATE_KEY=[REDACTED]\n      # - WIREGUARD_PRESHARED_KEY=[REDACTED]\n      # - WIREGUARD_ADDRESSES=\"10.64.222.21/32\"                                 # Replace with wg address\n\n    ## Enable volume if VPN_SERVICE_PROVIDER=custom and VPN_TYPE=openvpn is used\n    # volumes:\n      # - /yourpath/yourconfig.conf:/gluetun/config.conf:ro\n\n    networks:\n      - mediastack\n    \n    # Uncomment/enable below ports if VPN is used/enabled\n    # ports:\n    #   # qbittorrent ports\n    #   - 5080:5080\n    #   - 6881:6881\n    #   - 6881:6881/udp\n    #   # prowlarr ports\n    #   - 9696:9696\n    restart: \"unless-stopped\"\n\n  jellyfin:\n    image: linuxserver/jellyfin:latest\n    container_name: jellyfin\n    # image: linuxserver/jellyfin:10.8.10 - old image\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/jellyfin-config:/config\n      - /media/wd2001ext4/media/downloads:/data\n  # devices:\n  #  - /dev/videoN:/dev/videoN # Mount GPU device \n    ports:\n      - 8096:8096\n      - 7359:7359/udp\n      - 8920:8920\n    restart: unless-stopped\n\n# Jellyfin stats\n  embystat:\n    image: lscr.io/linuxserver/embystat:latest\n    container_name: embystat\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/embystat-config:/config\n    ports:\n      - 6555:6555\n    restart: unless-stopped\n\n  cleanmyarr:\n    depends_on:\n      - radarr\n      - sonarr\n    image: linuxshots/cleanmyarr:0.4.1-beta\n    container_name: cleanmyarr\n    networks:\n      - mediastack\n      - proxy\n    volumes:\n      - cleanmyarr-config:/config\n    restart: unless-stopped\n  \nvolumes:\n  jellyfin-config:\n  embystat-config:\n  sabnzbd-config:\n  cleanmyarr-config:\n```\n\n---\n## Configuration\n\n### Configure Plex\n\n- Open Plex at http://192.168.0.195:32400/web\n- Configure as it asks for the first time adding /tvshows and /movies\n\n### Configure Tautulli\n\n- Open Tautulli at http://192.168.0.195:8181\n\n### Configure Jellyfin\n\n- Open Jellyfin at http://192.168.0.195:8096\n- Configure as it asks for first time.\n- Add media library folder and choose /data/movies/\n\n### Configure EmbyStat\n\n- Open EmbyStat at http://192.168.0.195:6555\n- Configure as it asks for first time.\n- Server: at 172.25.0.4 URL: https://jellyfin.jalubru.duckdns.org\n- API: [REDACTED] [Jellyfin API](https://jellyfin.jalubru.duckdns.org/web/index.html#!/apikeys.html)\n\n### Configure Radarr\n7c3c9a4c12fe4c9487d94aa3a0cfb4e5\n\n- Open Radarr at http://192.168.0.195:7878\n- Settings --> Media Management --> Check mark \"Movies deleted from disk are automatically unmonitored in Radarr\" under File management section --> Save\n- Settings --> Download clients --> Transmission --> Add Host (qbittorrent) and port (5080) --> Username and password --> Test --> Save **Note: If VPN is enabled, then qbittorrent is reachable on vpn's service name**\n- Settings --> General --> Enable advance setting --> Select Authentication and add username and password\n- Indexer will get automatically added during configuration of P"
  },
  "sonarr": {
    "serviceId": "sonarr",
    "sourceFile": "Mediaserver.md",
    "title": "Plex & Co.",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Mediaserver"
      ],
      "ITname": "Plex & Co.",
      "ITcategory": "Mediaserver",
      "ITmachine": [
        "Raspberry Pi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab]] --- Torrent [[Torrent]] qBitTorrent Setup",
    "links": [
      {
        "label": "Jellyfin API",
        "url": "https://jellyfin.jalubru.duckdns.org/web/index.html#!/apikeys.html"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "docker network create mediastack\nsudo mkdir -p /media/wd2001ext4/apps/mediaserver/{plex-config,tautulli-config,plex-logs,radarr-config,sonarr-config,prowlarr-config,bazarr-config,qbittorrent-config,sabnzbd-config}"
      },
      {
        "language": "bash",
        "code": "sudo nano /media/wd2001ext4/apps/mediaserver/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "name: media-stack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n      - /media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\n  ## Default credentials of qBittorrent - Username: admin password: adminadmin ##\n  ## Change password after install from UI --> Tools --> Options --> WebUI ##\n  qbittorrent:\n    image: lscr.io/linuxserver/qbittorrent:latest\n    # image: lscr.io/linuxserver/qbittorrent:4.5.4 older version\n    container_name: qbittorrent\n    # Unomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # Comment below lines if VPN is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    # Unomment below line if vpn is enabled\n    # network_mode: service:vpn\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - WEBUI_PORT=5080\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/qbittorrent-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ## Comment/Disable below ports if VPN is enabled\n    ports:\n      - 5080:5080\n      - 6881:6881\n      - 6881:6881/udp\n    restart: unless-stopped\n    pull_policy: always\n\n  radarr:\n    image: lscr.io/linuxserver/radarr:latest\n    # image: lscr.io/linuxserver/radarr:4.7.5 older version\n    container_name: radarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    ports:\n      - 7878:7878\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/radarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    restart: unless-stopped\n    pull_policy: always\n\n  sonarr:\n    image: linuxserver/sonarr:latest #using v4 instead of v3\n#    image: linuxserver/sonarr:4.0.0-develop\n    container_name: sonarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sonarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ports:\n      - 8989:8989\n    restart: unless-stopped\n    pull_policy: always\n\n  prowlarr:\n    image: linuxserver/prowlarr:latest\n    container_name: prowlarr\n    # Uncomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # network_mode: service:vpn # Uncomment this line if vpn is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/prowlarr-config:/config\n    # Comment below ports if VPN is enabled.\n    ports:\n      - 9696:9696\n    restart: unless-stopped\n    pull_policy: always\n\n# Subtitel Manager and Downloader\n  bazarr:\n    image: lscr.io/linuxserver/bazarr:latest\n    container_name: bazarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/bazarr-config:/config\n      - /media/wd2001ext4/media/downloads/movies:/movies\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n    ports:\n      - 6767:6767\n    restart: unless-stopped\n    pull_policy: always\n\n# NZB Provider\n  sabnzbd:\n    image: lscr.io/linuxserver/sabnzbd:latest\n    container_name: sabnzbd\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sabnzbd-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n      - /media/wd2001ext4/media/incomplete-downloads:/incomplete-downloads\n    ports:\n      - 8070:8080\n    restart: unless-stopped\n    pull_policy: always\n\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n  radarr-config:\n  sonarr-config:\n  prowlarr-config:\n  bazarr-config:\n  qbittorrent-config:\n  sabnzbd-config:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true"
      },
      {
        "language": "bash",
        "code": "sudo docker compose -f /media/wd2001ext4/apps/mediaserver/docker-compose.yaml up -d"
      },
      {
        "language": "bash",
        "code": "docker network create mediastack"
      },
      {
        "language": "bash",
        "code": "sudo mkdir /mediaserver\nsudo nano /mediaserver/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "name: mediastack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /mnt/media/wd2001ext4/media/downloads/tvshows:/tv\n      - /mnt/media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true"
      }
    ],
    "markdown": ">[[00 Homelab]]\n```toc\n```\n---\n## Torrent\n\n[[Torrent]]\nqBitTorrent Setup\n\n---\n## NZB\n\n[[NZB]]\nSABnzb Setup\n\n---\n## Docker Compose\n\n```bash\ndocker network create mediastack\nsudo mkdir -p /media/wd2001ext4/apps/mediaserver/{plex-config,tautulli-config,plex-logs,radarr-config,sonarr-config,prowlarr-config,bazarr-config,qbittorrent-config,sabnzbd-config}\n```\n\n```bash\nsudo nano /media/wd2001ext4/apps/mediaserver/docker-compose.yaml\n```\n\n```yaml\nname: media-stack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n      - /media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\n  ## Default credentials of qBittorrent - Username: admin password: adminadmin ##\n  ## Change password after install from UI --> Tools --> Options --> WebUI ##\n  qbittorrent:\n    image: lscr.io/linuxserver/qbittorrent:latest\n    # image: lscr.io/linuxserver/qbittorrent:4.5.4 older version\n    container_name: qbittorrent\n    # Unomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # Comment below lines if VPN is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    # Unomment below line if vpn is enabled\n    # network_mode: service:vpn\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - WEBUI_PORT=5080\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/qbittorrent-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ## Comment/Disable below ports if VPN is enabled\n    ports:\n      - 5080:5080\n      - 6881:6881\n      - 6881:6881/udp\n    restart: unless-stopped\n    pull_policy: always\n\n  radarr:\n    image: lscr.io/linuxserver/radarr:latest\n    # image: lscr.io/linuxserver/radarr:4.7.5 older version\n    container_name: radarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    ports:\n      - 7878:7878\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/radarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    restart: unless-stopped\n    pull_policy: always\n\n  sonarr:\n    image: linuxserver/sonarr:latest #using v4 instead of v3\n#    image: linuxserver/sonarr:4.0.0-develop\n    container_name: sonarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sonarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ports:\n      - 8989:8989\n    restart: unless-stopped\n    pull_policy: always\n\n  prowlarr:\n    image: linuxserver/prowlarr:latest\n    container_name: prowlarr\n    # Uncomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # network_mode: service:vpn # Uncomment this line if vpn is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/prowlarr-config:/config\n    # Comment below ports if VPN is enabled.\n    ports:\n      - 9696:9696\n    restart: unless-stopped\n    pull_policy: always\n\n# Subtitel Manager and Downloader\n  bazarr:\n    image: lscr.io/linuxserver/bazarr:latest\n    container_name: bazarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/bazarr-config:/config\n      - /media/wd2001ext4/media/downloads/movies:/movies\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n    ports:\n      - 6767:6767\n    restart: unless-stopped\n    pull_policy: always\n\n# NZB Provider\n  sabnzbd:\n    image: lscr.io/linuxserver/sabnzbd:latest\n    container_name: sabnzbd\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sabnzbd-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n      - /media/wd2001ext4/media/incomplete-downloads:/incomplete-downloads\n    ports:\n      - 8070:8080\n    restart: unless-stopped\n    pull_policy: always\n\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n  radarr-config:\n  sonarr-config:\n  prowlarr-config:\n  bazarr-config:\n  qbittorrent-config:\n  sabnzbd-config:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true\n```\n\n^mediaserver-docker-compose\n\n```bash\nsudo docker compose -f /media/wd2001ext4/apps/mediaserver/docker-compose.yaml up -d\n```\n\n---\n### Optiplex\n```bash\ndocker network create mediastack\n```\n\n```bash\nsudo mkdir /mediaserver\nsudo nano /mediaserver/docker-compose.yaml\n```\n\nalso included is [[Overseerr]]\n\n```yaml\nname: mediastack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /mnt/media/wd2001ext4/media/downloads/tvshows:/tv\n      - /mnt/media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true\n```\n\n```bash\nsudo docker compose -f /mediaserver/docker-compose.yaml up -d\n```\n---\n#### Unused:\n\n```yaml\n  # To use/enable VPN, Run this compose file with --profile=vpn. Its highly recommended to use VPN.\n  vpn:\n  ## Read https://github.com/qdm12/gluetun/wiki for details on configuring VPN for different service providers.\n    profiles: [\"vpn\"]\n    container_name: vpn\n    image: qmcgaw/gluetun:v3.35.0\n    cap_add:\n      - NET_ADMIN\n    environment:\n      - VPN_SERVICE_PROVIDER=${VPN_SERVICE_PROVIDER:-nordvpn} # Valid values: nordvpn, expressvpn, protonvpn, surfshark or custom\n      - OPENVPN_USER=[REDACTED]\"\"}\n      - OPENVPN_PASSWORD=[REDACTED]\"\"}\n\n      ## For list of server countries, visit https://raw.githubusercontent.com/qdm12/gluetun/master/internal/storage/servers.json\n\n      - SERVER_COUNTRIES=${SERVER_COUNTRIES:-Latvia}\n    \n      # - FREE_ONLY=on  # Valid with protonvpn only. Value willbe set \"on\" if using free subscription provided by protonvpn\n\n      ## Enable below if VPN_SERVICE_PROVIDER=custom\n      # - VPN_TYPE=openvpn # or wireguard. \n\n      ## If VPN_TYPE is openvpn\n      # - OPENVPN_CUSTOM_CONFIG=/gluetun/custom.conf\n\n      ## If VPN_TYPE is wireguard. Replace below env variables as required.\n      # - VPN_ENDPOINT_IP=1.2.3.4                                               # Replace with your wg endpoint ip or domain\n      # - VPN_ENDPOINT_PORT=51820                                               # Replace with wg server port\n      # - WIREGUARD_PUBLIC_KEY=[REDACTED]\n      # - WIREGUARD_PRIVATE_KEY=[REDACTED]\n      # - WIREGUARD_PRESHARED_KEY=[REDACTED]\n      # - WIREGUARD_ADDRESSES=\"10.64.222.21/32\"                                 # Replace with wg address\n\n    ## Enable volume if VPN_SERVICE_PROVIDER=custom and VPN_TYPE=openvpn is used\n    # volumes:\n      # - /yourpath/yourconfig.conf:/gluetun/config.conf:ro\n\n    networks:\n      - mediastack\n    \n    # Uncomment/enable below ports if VPN is used/enabled\n    # ports:\n    #   # qbittorrent ports\n    #   - 5080:5080\n    #   - 6881:6881\n    #   - 6881:6881/udp\n    #   # prowlarr ports\n    #   - 9696:9696\n    restart: \"unless-stopped\"\n\n  jellyfin:\n    image: linuxserver/jellyfin:latest\n    container_name: jellyfin\n    # image: linuxserver/jellyfin:10.8.10 - old image\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/jellyfin-config:/config\n      - /media/wd2001ext4/media/downloads:/data\n  # devices:\n  #  - /dev/videoN:/dev/videoN # Mount GPU device \n    ports:\n      - 8096:8096\n      - 7359:7359/udp\n      - 8920:8920\n    restart: unless-stopped\n\n# Jellyfin stats\n  embystat:\n    image: lscr.io/linuxserver/embystat:latest\n    container_name: embystat\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/embystat-config:/config\n    ports:\n      - 6555:6555\n    restart: unless-stopped\n\n  cleanmyarr:\n    depends_on:\n      - radarr\n      - sonarr\n    image: linuxshots/cleanmyarr:0.4.1-beta\n    container_name: cleanmyarr\n    networks:\n      - mediastack\n      - proxy\n    volumes:\n      - cleanmyarr-config:/config\n    restart: unless-stopped\n  \nvolumes:\n  jellyfin-config:\n  embystat-config:\n  sabnzbd-config:\n  cleanmyarr-config:\n```\n\n---\n## Configuration\n\n### Configure Plex\n\n- Open Plex at http://192.168.0.195:32400/web\n- Configure as it asks for the first time adding /tvshows and /movies\n\n### Configure Tautulli\n\n- Open Tautulli at http://192.168.0.195:8181\n\n### Configure Jellyfin\n\n- Open Jellyfin at http://192.168.0.195:8096\n- Configure as it asks for first time.\n- Add media library folder and choose /data/movies/\n\n### Configure EmbyStat\n\n- Open EmbyStat at http://192.168.0.195:6555\n- Configure as it asks for first time.\n- Server: at 172.25.0.4 URL: https://jellyfin.jalubru.duckdns.org\n- API: [REDACTED] [Jellyfin API](https://jellyfin.jalubru.duckdns.org/web/index.html#!/apikeys.html)\n\n### Configure Radarr\n7c3c9a4c12fe4c9487d94aa3a0cfb4e5\n\n- Open Radarr at http://192.168.0.195:7878\n- Settings --> Media Management --> Check mark \"Movies deleted from disk are automatically unmonitored in Radarr\" under File management section --> Save\n- Settings --> Download clients --> Transmission --> Add Host (qbittorrent) and port (5080) --> Username and password --> Test --> Save **Note: If VPN is enabled, then qbittorrent is reachable on vpn's service name**\n- Settings --> General --> Enable advance setting --> Select Authentication and add username and password\n- Indexer will get automatically added during configuration of P"
  },
  "bazarr": {
    "serviceId": "bazarr",
    "sourceFile": "Mediaserver.md",
    "title": "Plex & Co.",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Mediaserver"
      ],
      "ITname": "Plex & Co.",
      "ITcategory": "Mediaserver",
      "ITmachine": [
        "Raspberry Pi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab]] --- Torrent [[Torrent]] qBitTorrent Setup",
    "links": [
      {
        "label": "Jellyfin API",
        "url": "https://jellyfin.jalubru.duckdns.org/web/index.html#!/apikeys.html"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "docker network create mediastack\nsudo mkdir -p /media/wd2001ext4/apps/mediaserver/{plex-config,tautulli-config,plex-logs,radarr-config,sonarr-config,prowlarr-config,bazarr-config,qbittorrent-config,sabnzbd-config}"
      },
      {
        "language": "bash",
        "code": "sudo nano /media/wd2001ext4/apps/mediaserver/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "name: media-stack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n      - /media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\n  ## Default credentials of qBittorrent - Username: admin password: adminadmin ##\n  ## Change password after install from UI --> Tools --> Options --> WebUI ##\n  qbittorrent:\n    image: lscr.io/linuxserver/qbittorrent:latest\n    # image: lscr.io/linuxserver/qbittorrent:4.5.4 older version\n    container_name: qbittorrent\n    # Unomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # Comment below lines if VPN is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    # Unomment below line if vpn is enabled\n    # network_mode: service:vpn\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - WEBUI_PORT=5080\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/qbittorrent-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ## Comment/Disable below ports if VPN is enabled\n    ports:\n      - 5080:5080\n      - 6881:6881\n      - 6881:6881/udp\n    restart: unless-stopped\n    pull_policy: always\n\n  radarr:\n    image: lscr.io/linuxserver/radarr:latest\n    # image: lscr.io/linuxserver/radarr:4.7.5 older version\n    container_name: radarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    ports:\n      - 7878:7878\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/radarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    restart: unless-stopped\n    pull_policy: always\n\n  sonarr:\n    image: linuxserver/sonarr:latest #using v4 instead of v3\n#    image: linuxserver/sonarr:4.0.0-develop\n    container_name: sonarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sonarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ports:\n      - 8989:8989\n    restart: unless-stopped\n    pull_policy: always\n\n  prowlarr:\n    image: linuxserver/prowlarr:latest\n    container_name: prowlarr\n    # Uncomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # network_mode: service:vpn # Uncomment this line if vpn is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/prowlarr-config:/config\n    # Comment below ports if VPN is enabled.\n    ports:\n      - 9696:9696\n    restart: unless-stopped\n    pull_policy: always\n\n# Subtitel Manager and Downloader\n  bazarr:\n    image: lscr.io/linuxserver/bazarr:latest\n    container_name: bazarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/bazarr-config:/config\n      - /media/wd2001ext4/media/downloads/movies:/movies\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n    ports:\n      - 6767:6767\n    restart: unless-stopped\n    pull_policy: always\n\n# NZB Provider\n  sabnzbd:\n    image: lscr.io/linuxserver/sabnzbd:latest\n    container_name: sabnzbd\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sabnzbd-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n      - /media/wd2001ext4/media/incomplete-downloads:/incomplete-downloads\n    ports:\n      - 8070:8080\n    restart: unless-stopped\n    pull_policy: always\n\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n  radarr-config:\n  sonarr-config:\n  prowlarr-config:\n  bazarr-config:\n  qbittorrent-config:\n  sabnzbd-config:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true"
      },
      {
        "language": "bash",
        "code": "sudo docker compose -f /media/wd2001ext4/apps/mediaserver/docker-compose.yaml up -d"
      },
      {
        "language": "bash",
        "code": "docker network create mediastack"
      },
      {
        "language": "bash",
        "code": "sudo mkdir /mediaserver\nsudo nano /mediaserver/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "name: mediastack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /mnt/media/wd2001ext4/media/downloads/tvshows:/tv\n      - /mnt/media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true"
      }
    ],
    "markdown": ">[[00 Homelab]]\n```toc\n```\n---\n## Torrent\n\n[[Torrent]]\nqBitTorrent Setup\n\n---\n## NZB\n\n[[NZB]]\nSABnzb Setup\n\n---\n## Docker Compose\n\n```bash\ndocker network create mediastack\nsudo mkdir -p /media/wd2001ext4/apps/mediaserver/{plex-config,tautulli-config,plex-logs,radarr-config,sonarr-config,prowlarr-config,bazarr-config,qbittorrent-config,sabnzbd-config}\n```\n\n```bash\nsudo nano /media/wd2001ext4/apps/mediaserver/docker-compose.yaml\n```\n\n```yaml\nname: media-stack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n      - /media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\n  ## Default credentials of qBittorrent - Username: admin password: adminadmin ##\n  ## Change password after install from UI --> Tools --> Options --> WebUI ##\n  qbittorrent:\n    image: lscr.io/linuxserver/qbittorrent:latest\n    # image: lscr.io/linuxserver/qbittorrent:4.5.4 older version\n    container_name: qbittorrent\n    # Unomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # Comment below lines if VPN is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    # Unomment below line if vpn is enabled\n    # network_mode: service:vpn\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - WEBUI_PORT=5080\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/qbittorrent-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ## Comment/Disable below ports if VPN is enabled\n    ports:\n      - 5080:5080\n      - 6881:6881\n      - 6881:6881/udp\n    restart: unless-stopped\n    pull_policy: always\n\n  radarr:\n    image: lscr.io/linuxserver/radarr:latest\n    # image: lscr.io/linuxserver/radarr:4.7.5 older version\n    container_name: radarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    ports:\n      - 7878:7878\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/radarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    restart: unless-stopped\n    pull_policy: always\n\n  sonarr:\n    image: linuxserver/sonarr:latest #using v4 instead of v3\n#    image: linuxserver/sonarr:4.0.0-develop\n    container_name: sonarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sonarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ports:\n      - 8989:8989\n    restart: unless-stopped\n    pull_policy: always\n\n  prowlarr:\n    image: linuxserver/prowlarr:latest\n    container_name: prowlarr\n    # Uncomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # network_mode: service:vpn # Uncomment this line if vpn is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/prowlarr-config:/config\n    # Comment below ports if VPN is enabled.\n    ports:\n      - 9696:9696\n    restart: unless-stopped\n    pull_policy: always\n\n# Subtitel Manager and Downloader\n  bazarr:\n    image: lscr.io/linuxserver/bazarr:latest\n    container_name: bazarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/bazarr-config:/config\n      - /media/wd2001ext4/media/downloads/movies:/movies\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n    ports:\n      - 6767:6767\n    restart: unless-stopped\n    pull_policy: always\n\n# NZB Provider\n  sabnzbd:\n    image: lscr.io/linuxserver/sabnzbd:latest\n    container_name: sabnzbd\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sabnzbd-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n      - /media/wd2001ext4/media/incomplete-downloads:/incomplete-downloads\n    ports:\n      - 8070:8080\n    restart: unless-stopped\n    pull_policy: always\n\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n  radarr-config:\n  sonarr-config:\n  prowlarr-config:\n  bazarr-config:\n  qbittorrent-config:\n  sabnzbd-config:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true\n```\n\n^mediaserver-docker-compose\n\n```bash\nsudo docker compose -f /media/wd2001ext4/apps/mediaserver/docker-compose.yaml up -d\n```\n\n---\n### Optiplex\n```bash\ndocker network create mediastack\n```\n\n```bash\nsudo mkdir /mediaserver\nsudo nano /mediaserver/docker-compose.yaml\n```\n\nalso included is [[Overseerr]]\n\n```yaml\nname: mediastack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /mnt/media/wd2001ext4/media/downloads/tvshows:/tv\n      - /mnt/media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true\n```\n\n```bash\nsudo docker compose -f /mediaserver/docker-compose.yaml up -d\n```\n---\n#### Unused:\n\n```yaml\n  # To use/enable VPN, Run this compose file with --profile=vpn. Its highly recommended to use VPN.\n  vpn:\n  ## Read https://github.com/qdm12/gluetun/wiki for details on configuring VPN for different service providers.\n    profiles: [\"vpn\"]\n    container_name: vpn\n    image: qmcgaw/gluetun:v3.35.0\n    cap_add:\n      - NET_ADMIN\n    environment:\n      - VPN_SERVICE_PROVIDER=${VPN_SERVICE_PROVIDER:-nordvpn} # Valid values: nordvpn, expressvpn, protonvpn, surfshark or custom\n      - OPENVPN_USER=[REDACTED]\"\"}\n      - OPENVPN_PASSWORD=[REDACTED]\"\"}\n\n      ## For list of server countries, visit https://raw.githubusercontent.com/qdm12/gluetun/master/internal/storage/servers.json\n\n      - SERVER_COUNTRIES=${SERVER_COUNTRIES:-Latvia}\n    \n      # - FREE_ONLY=on  # Valid with protonvpn only. Value willbe set \"on\" if using free subscription provided by protonvpn\n\n      ## Enable below if VPN_SERVICE_PROVIDER=custom\n      # - VPN_TYPE=openvpn # or wireguard. \n\n      ## If VPN_TYPE is openvpn\n      # - OPENVPN_CUSTOM_CONFIG=/gluetun/custom.conf\n\n      ## If VPN_TYPE is wireguard. Replace below env variables as required.\n      # - VPN_ENDPOINT_IP=1.2.3.4                                               # Replace with your wg endpoint ip or domain\n      # - VPN_ENDPOINT_PORT=51820                                               # Replace with wg server port\n      # - WIREGUARD_PUBLIC_KEY=[REDACTED]\n      # - WIREGUARD_PRIVATE_KEY=[REDACTED]\n      # - WIREGUARD_PRESHARED_KEY=[REDACTED]\n      # - WIREGUARD_ADDRESSES=\"10.64.222.21/32\"                                 # Replace with wg address\n\n    ## Enable volume if VPN_SERVICE_PROVIDER=custom and VPN_TYPE=openvpn is used\n    # volumes:\n      # - /yourpath/yourconfig.conf:/gluetun/config.conf:ro\n\n    networks:\n      - mediastack\n    \n    # Uncomment/enable below ports if VPN is used/enabled\n    # ports:\n    #   # qbittorrent ports\n    #   - 5080:5080\n    #   - 6881:6881\n    #   - 6881:6881/udp\n    #   # prowlarr ports\n    #   - 9696:9696\n    restart: \"unless-stopped\"\n\n  jellyfin:\n    image: linuxserver/jellyfin:latest\n    container_name: jellyfin\n    # image: linuxserver/jellyfin:10.8.10 - old image\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/jellyfin-config:/config\n      - /media/wd2001ext4/media/downloads:/data\n  # devices:\n  #  - /dev/videoN:/dev/videoN # Mount GPU device \n    ports:\n      - 8096:8096\n      - 7359:7359/udp\n      - 8920:8920\n    restart: unless-stopped\n\n# Jellyfin stats\n  embystat:\n    image: lscr.io/linuxserver/embystat:latest\n    container_name: embystat\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/embystat-config:/config\n    ports:\n      - 6555:6555\n    restart: unless-stopped\n\n  cleanmyarr:\n    depends_on:\n      - radarr\n      - sonarr\n    image: linuxshots/cleanmyarr:0.4.1-beta\n    container_name: cleanmyarr\n    networks:\n      - mediastack\n      - proxy\n    volumes:\n      - cleanmyarr-config:/config\n    restart: unless-stopped\n  \nvolumes:\n  jellyfin-config:\n  embystat-config:\n  sabnzbd-config:\n  cleanmyarr-config:\n```\n\n---\n## Configuration\n\n### Configure Plex\n\n- Open Plex at http://192.168.0.195:32400/web\n- Configure as it asks for the first time adding /tvshows and /movies\n\n### Configure Tautulli\n\n- Open Tautulli at http://192.168.0.195:8181\n\n### Configure Jellyfin\n\n- Open Jellyfin at http://192.168.0.195:8096\n- Configure as it asks for first time.\n- Add media library folder and choose /data/movies/\n\n### Configure EmbyStat\n\n- Open EmbyStat at http://192.168.0.195:6555\n- Configure as it asks for first time.\n- Server: at 172.25.0.4 URL: https://jellyfin.jalubru.duckdns.org\n- API: [REDACTED] [Jellyfin API](https://jellyfin.jalubru.duckdns.org/web/index.html#!/apikeys.html)\n\n### Configure Radarr\n7c3c9a4c12fe4c9487d94aa3a0cfb4e5\n\n- Open Radarr at http://192.168.0.195:7878\n- Settings --> Media Management --> Check mark \"Movies deleted from disk are automatically unmonitored in Radarr\" under File management section --> Save\n- Settings --> Download clients --> Transmission --> Add Host (qbittorrent) and port (5080) --> Username and password --> Test --> Save **Note: If VPN is enabled, then qbittorrent is reachable on vpn's service name**\n- Settings --> General --> Enable advance setting --> Select Authentication and add username and password\n- Indexer will get automatically added during configuration of P"
  },
  "prowlarr": {
    "serviceId": "prowlarr",
    "sourceFile": "Mediaserver.md",
    "title": "Plex & Co.",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Mediaserver"
      ],
      "ITname": "Plex & Co.",
      "ITcategory": "Mediaserver",
      "ITmachine": [
        "Raspberry Pi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab]] --- Torrent [[Torrent]] qBitTorrent Setup",
    "links": [
      {
        "label": "Jellyfin API",
        "url": "https://jellyfin.jalubru.duckdns.org/web/index.html#!/apikeys.html"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "docker network create mediastack\nsudo mkdir -p /media/wd2001ext4/apps/mediaserver/{plex-config,tautulli-config,plex-logs,radarr-config,sonarr-config,prowlarr-config,bazarr-config,qbittorrent-config,sabnzbd-config}"
      },
      {
        "language": "bash",
        "code": "sudo nano /media/wd2001ext4/apps/mediaserver/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "name: media-stack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n      - /media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\n  ## Default credentials of qBittorrent - Username: admin password: adminadmin ##\n  ## Change password after install from UI --> Tools --> Options --> WebUI ##\n  qbittorrent:\n    image: lscr.io/linuxserver/qbittorrent:latest\n    # image: lscr.io/linuxserver/qbittorrent:4.5.4 older version\n    container_name: qbittorrent\n    # Unomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # Comment below lines if VPN is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    # Unomment below line if vpn is enabled\n    # network_mode: service:vpn\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - WEBUI_PORT=5080\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/qbittorrent-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ## Comment/Disable below ports if VPN is enabled\n    ports:\n      - 5080:5080\n      - 6881:6881\n      - 6881:6881/udp\n    restart: unless-stopped\n    pull_policy: always\n\n  radarr:\n    image: lscr.io/linuxserver/radarr:latest\n    # image: lscr.io/linuxserver/radarr:4.7.5 older version\n    container_name: radarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    ports:\n      - 7878:7878\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/radarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    restart: unless-stopped\n    pull_policy: always\n\n  sonarr:\n    image: linuxserver/sonarr:latest #using v4 instead of v3\n#    image: linuxserver/sonarr:4.0.0-develop\n    container_name: sonarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sonarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ports:\n      - 8989:8989\n    restart: unless-stopped\n    pull_policy: always\n\n  prowlarr:\n    image: linuxserver/prowlarr:latest\n    container_name: prowlarr\n    # Uncomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # network_mode: service:vpn # Uncomment this line if vpn is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/prowlarr-config:/config\n    # Comment below ports if VPN is enabled.\n    ports:\n      - 9696:9696\n    restart: unless-stopped\n    pull_policy: always\n\n# Subtitel Manager and Downloader\n  bazarr:\n    image: lscr.io/linuxserver/bazarr:latest\n    container_name: bazarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/bazarr-config:/config\n      - /media/wd2001ext4/media/downloads/movies:/movies\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n    ports:\n      - 6767:6767\n    restart: unless-stopped\n    pull_policy: always\n\n# NZB Provider\n  sabnzbd:\n    image: lscr.io/linuxserver/sabnzbd:latest\n    container_name: sabnzbd\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sabnzbd-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n      - /media/wd2001ext4/media/incomplete-downloads:/incomplete-downloads\n    ports:\n      - 8070:8080\n    restart: unless-stopped\n    pull_policy: always\n\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n  radarr-config:\n  sonarr-config:\n  prowlarr-config:\n  bazarr-config:\n  qbittorrent-config:\n  sabnzbd-config:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true"
      },
      {
        "language": "bash",
        "code": "sudo docker compose -f /media/wd2001ext4/apps/mediaserver/docker-compose.yaml up -d"
      },
      {
        "language": "bash",
        "code": "docker network create mediastack"
      },
      {
        "language": "bash",
        "code": "sudo mkdir /mediaserver\nsudo nano /mediaserver/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "name: mediastack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /mnt/media/wd2001ext4/media/downloads/tvshows:/tv\n      - /mnt/media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true"
      }
    ],
    "markdown": ">[[00 Homelab]]\n```toc\n```\n---\n## Torrent\n\n[[Torrent]]\nqBitTorrent Setup\n\n---\n## NZB\n\n[[NZB]]\nSABnzb Setup\n\n---\n## Docker Compose\n\n```bash\ndocker network create mediastack\nsudo mkdir -p /media/wd2001ext4/apps/mediaserver/{plex-config,tautulli-config,plex-logs,radarr-config,sonarr-config,prowlarr-config,bazarr-config,qbittorrent-config,sabnzbd-config}\n```\n\n```bash\nsudo nano /media/wd2001ext4/apps/mediaserver/docker-compose.yaml\n```\n\n```yaml\nname: media-stack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n      - /media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\n  ## Default credentials of qBittorrent - Username: admin password: adminadmin ##\n  ## Change password after install from UI --> Tools --> Options --> WebUI ##\n  qbittorrent:\n    image: lscr.io/linuxserver/qbittorrent:latest\n    # image: lscr.io/linuxserver/qbittorrent:4.5.4 older version\n    container_name: qbittorrent\n    # Unomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # Comment below lines if VPN is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    # Unomment below line if vpn is enabled\n    # network_mode: service:vpn\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - WEBUI_PORT=5080\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/qbittorrent-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ## Comment/Disable below ports if VPN is enabled\n    ports:\n      - 5080:5080\n      - 6881:6881\n      - 6881:6881/udp\n    restart: unless-stopped\n    pull_policy: always\n\n  radarr:\n    image: lscr.io/linuxserver/radarr:latest\n    # image: lscr.io/linuxserver/radarr:4.7.5 older version\n    container_name: radarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    ports:\n      - 7878:7878\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/radarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    restart: unless-stopped\n    pull_policy: always\n\n  sonarr:\n    image: linuxserver/sonarr:latest #using v4 instead of v3\n#    image: linuxserver/sonarr:4.0.0-develop\n    container_name: sonarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sonarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ports:\n      - 8989:8989\n    restart: unless-stopped\n    pull_policy: always\n\n  prowlarr:\n    image: linuxserver/prowlarr:latest\n    container_name: prowlarr\n    # Uncomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # network_mode: service:vpn # Uncomment this line if vpn is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/prowlarr-config:/config\n    # Comment below ports if VPN is enabled.\n    ports:\n      - 9696:9696\n    restart: unless-stopped\n    pull_policy: always\n\n# Subtitel Manager and Downloader\n  bazarr:\n    image: lscr.io/linuxserver/bazarr:latest\n    container_name: bazarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/bazarr-config:/config\n      - /media/wd2001ext4/media/downloads/movies:/movies\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n    ports:\n      - 6767:6767\n    restart: unless-stopped\n    pull_policy: always\n\n# NZB Provider\n  sabnzbd:\n    image: lscr.io/linuxserver/sabnzbd:latest\n    container_name: sabnzbd\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sabnzbd-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n      - /media/wd2001ext4/media/incomplete-downloads:/incomplete-downloads\n    ports:\n      - 8070:8080\n    restart: unless-stopped\n    pull_policy: always\n\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n  radarr-config:\n  sonarr-config:\n  prowlarr-config:\n  bazarr-config:\n  qbittorrent-config:\n  sabnzbd-config:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true\n```\n\n^mediaserver-docker-compose\n\n```bash\nsudo docker compose -f /media/wd2001ext4/apps/mediaserver/docker-compose.yaml up -d\n```\n\n---\n### Optiplex\n```bash\ndocker network create mediastack\n```\n\n```bash\nsudo mkdir /mediaserver\nsudo nano /mediaserver/docker-compose.yaml\n```\n\nalso included is [[Overseerr]]\n\n```yaml\nname: mediastack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /mnt/media/wd2001ext4/media/downloads/tvshows:/tv\n      - /mnt/media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true\n```\n\n```bash\nsudo docker compose -f /mediaserver/docker-compose.yaml up -d\n```\n---\n#### Unused:\n\n```yaml\n  # To use/enable VPN, Run this compose file with --profile=vpn. Its highly recommended to use VPN.\n  vpn:\n  ## Read https://github.com/qdm12/gluetun/wiki for details on configuring VPN for different service providers.\n    profiles: [\"vpn\"]\n    container_name: vpn\n    image: qmcgaw/gluetun:v3.35.0\n    cap_add:\n      - NET_ADMIN\n    environment:\n      - VPN_SERVICE_PROVIDER=${VPN_SERVICE_PROVIDER:-nordvpn} # Valid values: nordvpn, expressvpn, protonvpn, surfshark or custom\n      - OPENVPN_USER=[REDACTED]\"\"}\n      - OPENVPN_PASSWORD=[REDACTED]\"\"}\n\n      ## For list of server countries, visit https://raw.githubusercontent.com/qdm12/gluetun/master/internal/storage/servers.json\n\n      - SERVER_COUNTRIES=${SERVER_COUNTRIES:-Latvia}\n    \n      # - FREE_ONLY=on  # Valid with protonvpn only. Value willbe set \"on\" if using free subscription provided by protonvpn\n\n      ## Enable below if VPN_SERVICE_PROVIDER=custom\n      # - VPN_TYPE=openvpn # or wireguard. \n\n      ## If VPN_TYPE is openvpn\n      # - OPENVPN_CUSTOM_CONFIG=/gluetun/custom.conf\n\n      ## If VPN_TYPE is wireguard. Replace below env variables as required.\n      # - VPN_ENDPOINT_IP=1.2.3.4                                               # Replace with your wg endpoint ip or domain\n      # - VPN_ENDPOINT_PORT=51820                                               # Replace with wg server port\n      # - WIREGUARD_PUBLIC_KEY=[REDACTED]\n      # - WIREGUARD_PRIVATE_KEY=[REDACTED]\n      # - WIREGUARD_PRESHARED_KEY=[REDACTED]\n      # - WIREGUARD_ADDRESSES=\"10.64.222.21/32\"                                 # Replace with wg address\n\n    ## Enable volume if VPN_SERVICE_PROVIDER=custom and VPN_TYPE=openvpn is used\n    # volumes:\n      # - /yourpath/yourconfig.conf:/gluetun/config.conf:ro\n\n    networks:\n      - mediastack\n    \n    # Uncomment/enable below ports if VPN is used/enabled\n    # ports:\n    #   # qbittorrent ports\n    #   - 5080:5080\n    #   - 6881:6881\n    #   - 6881:6881/udp\n    #   # prowlarr ports\n    #   - 9696:9696\n    restart: \"unless-stopped\"\n\n  jellyfin:\n    image: linuxserver/jellyfin:latest\n    container_name: jellyfin\n    # image: linuxserver/jellyfin:10.8.10 - old image\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/jellyfin-config:/config\n      - /media/wd2001ext4/media/downloads:/data\n  # devices:\n  #  - /dev/videoN:/dev/videoN # Mount GPU device \n    ports:\n      - 8096:8096\n      - 7359:7359/udp\n      - 8920:8920\n    restart: unless-stopped\n\n# Jellyfin stats\n  embystat:\n    image: lscr.io/linuxserver/embystat:latest\n    container_name: embystat\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/embystat-config:/config\n    ports:\n      - 6555:6555\n    restart: unless-stopped\n\n  cleanmyarr:\n    depends_on:\n      - radarr\n      - sonarr\n    image: linuxshots/cleanmyarr:0.4.1-beta\n    container_name: cleanmyarr\n    networks:\n      - mediastack\n      - proxy\n    volumes:\n      - cleanmyarr-config:/config\n    restart: unless-stopped\n  \nvolumes:\n  jellyfin-config:\n  embystat-config:\n  sabnzbd-config:\n  cleanmyarr-config:\n```\n\n---\n## Configuration\n\n### Configure Plex\n\n- Open Plex at http://192.168.0.195:32400/web\n- Configure as it asks for the first time adding /tvshows and /movies\n\n### Configure Tautulli\n\n- Open Tautulli at http://192.168.0.195:8181\n\n### Configure Jellyfin\n\n- Open Jellyfin at http://192.168.0.195:8096\n- Configure as it asks for first time.\n- Add media library folder and choose /data/movies/\n\n### Configure EmbyStat\n\n- Open EmbyStat at http://192.168.0.195:6555\n- Configure as it asks for first time.\n- Server: at 172.25.0.4 URL: https://jellyfin.jalubru.duckdns.org\n- API: [REDACTED] [Jellyfin API](https://jellyfin.jalubru.duckdns.org/web/index.html#!/apikeys.html)\n\n### Configure Radarr\n7c3c9a4c12fe4c9487d94aa3a0cfb4e5\n\n- Open Radarr at http://192.168.0.195:7878\n- Settings --> Media Management --> Check mark \"Movies deleted from disk are automatically unmonitored in Radarr\" under File management section --> Save\n- Settings --> Download clients --> Transmission --> Add Host (qbittorrent) and port (5080) --> Username and password --> Test --> Save **Note: If VPN is enabled, then qbittorrent is reachable on vpn's service name**\n- Settings --> General --> Enable advance setting --> Select Authentication and add username and password\n- Indexer will get automatically added during configuration of P"
  },
  "tautulli": {
    "serviceId": "tautulli",
    "sourceFile": "Mediaserver.md",
    "title": "Plex & Co.",
    "frontmatter": {
      "tags": [
        "Homelab/Apps"
      ],
      "aliases": [
        "Mediaserver"
      ],
      "ITname": "Plex & Co.",
      "ITcategory": "Mediaserver",
      "ITmachine": [
        "Raspberry Pi"
      ],
      "ITinstalltype": "docker",
      "ITstatus": [
        "installed"
      ]
    },
    "summary": ">[[00 Homelab]] --- Torrent [[Torrent]] qBitTorrent Setup",
    "links": [
      {
        "label": "Jellyfin API",
        "url": "https://jellyfin.jalubru.duckdns.org/web/index.html#!/apikeys.html"
      }
    ],
    "codeBlocks": [
      {
        "language": "toc",
        "code": ""
      },
      {
        "language": "bash",
        "code": "docker network create mediastack\nsudo mkdir -p /media/wd2001ext4/apps/mediaserver/{plex-config,tautulli-config,plex-logs,radarr-config,sonarr-config,prowlarr-config,bazarr-config,qbittorrent-config,sabnzbd-config}"
      },
      {
        "language": "bash",
        "code": "sudo nano /media/wd2001ext4/apps/mediaserver/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "name: media-stack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n      - /media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\n  ## Default credentials of qBittorrent - Username: admin password: adminadmin ##\n  ## Change password after install from UI --> Tools --> Options --> WebUI ##\n  qbittorrent:\n    image: lscr.io/linuxserver/qbittorrent:latest\n    # image: lscr.io/linuxserver/qbittorrent:4.5.4 older version\n    container_name: qbittorrent\n    # Unomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # Comment below lines if VPN is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    # Unomment below line if vpn is enabled\n    # network_mode: service:vpn\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - WEBUI_PORT=5080\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/qbittorrent-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ## Comment/Disable below ports if VPN is enabled\n    ports:\n      - 5080:5080\n      - 6881:6881\n      - 6881:6881/udp\n    restart: unless-stopped\n    pull_policy: always\n\n  radarr:\n    image: lscr.io/linuxserver/radarr:latest\n    # image: lscr.io/linuxserver/radarr:4.7.5 older version\n    container_name: radarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    ports:\n      - 7878:7878\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/radarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    restart: unless-stopped\n    pull_policy: always\n\n  sonarr:\n    image: linuxserver/sonarr:latest #using v4 instead of v3\n#    image: linuxserver/sonarr:4.0.0-develop\n    container_name: sonarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sonarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ports:\n      - 8989:8989\n    restart: unless-stopped\n    pull_policy: always\n\n  prowlarr:\n    image: linuxserver/prowlarr:latest\n    container_name: prowlarr\n    # Uncomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # network_mode: service:vpn # Uncomment this line if vpn is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/prowlarr-config:/config\n    # Comment below ports if VPN is enabled.\n    ports:\n      - 9696:9696\n    restart: unless-stopped\n    pull_policy: always\n\n# Subtitel Manager and Downloader\n  bazarr:\n    image: lscr.io/linuxserver/bazarr:latest\n    container_name: bazarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/bazarr-config:/config\n      - /media/wd2001ext4/media/downloads/movies:/movies\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n    ports:\n      - 6767:6767\n    restart: unless-stopped\n    pull_policy: always\n\n# NZB Provider\n  sabnzbd:\n    image: lscr.io/linuxserver/sabnzbd:latest\n    container_name: sabnzbd\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sabnzbd-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n      - /media/wd2001ext4/media/incomplete-downloads:/incomplete-downloads\n    ports:\n      - 8070:8080\n    restart: unless-stopped\n    pull_policy: always\n\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n  radarr-config:\n  sonarr-config:\n  prowlarr-config:\n  bazarr-config:\n  qbittorrent-config:\n  sabnzbd-config:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true"
      },
      {
        "language": "bash",
        "code": "sudo docker compose -f /media/wd2001ext4/apps/mediaserver/docker-compose.yaml up -d"
      },
      {
        "language": "bash",
        "code": "docker network create mediastack"
      },
      {
        "language": "bash",
        "code": "sudo mkdir /mediaserver\nsudo nano /mediaserver/docker-compose.yaml"
      },
      {
        "language": "yaml",
        "code": "name: mediastack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /mnt/media/wd2001ext4/media/downloads/tvshows:/tv\n      - /mnt/media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true"
      }
    ],
    "markdown": ">[[00 Homelab]]\n```toc\n```\n---\n## Torrent\n\n[[Torrent]]\nqBitTorrent Setup\n\n---\n## NZB\n\n[[NZB]]\nSABnzb Setup\n\n---\n## Docker Compose\n\n```bash\ndocker network create mediastack\nsudo mkdir -p /media/wd2001ext4/apps/mediaserver/{plex-config,tautulli-config,plex-logs,radarr-config,sonarr-config,prowlarr-config,bazarr-config,qbittorrent-config,sabnzbd-config}\n```\n\n```bash\nsudo nano /media/wd2001ext4/apps/mediaserver/docker-compose.yaml\n```\n\n```yaml\nname: media-stack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n      - /media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\n  ## Default credentials of qBittorrent - Username: admin password: adminadmin ##\n  ## Change password after install from UI --> Tools --> Options --> WebUI ##\n  qbittorrent:\n    image: lscr.io/linuxserver/qbittorrent:latest\n    # image: lscr.io/linuxserver/qbittorrent:4.5.4 older version\n    container_name: qbittorrent\n    # Unomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # Comment below lines if VPN is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    # Unomment below line if vpn is enabled\n    # network_mode: service:vpn\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - WEBUI_PORT=5080\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/qbittorrent-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ## Comment/Disable below ports if VPN is enabled\n    ports:\n      - 5080:5080\n      - 6881:6881\n      - 6881:6881/udp\n    restart: unless-stopped\n    pull_policy: always\n\n  radarr:\n    image: lscr.io/linuxserver/radarr:latest\n    # image: lscr.io/linuxserver/radarr:4.7.5 older version\n    container_name: radarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    ports:\n      - 7878:7878\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/radarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    restart: unless-stopped\n    pull_policy: always\n\n  sonarr:\n    image: linuxserver/sonarr:latest #using v4 instead of v3\n#    image: linuxserver/sonarr:4.0.0-develop\n    container_name: sonarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sonarr-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n    ports:\n      - 8989:8989\n    restart: unless-stopped\n    pull_policy: always\n\n  prowlarr:\n    image: linuxserver/prowlarr:latest\n    container_name: prowlarr\n    # Uncomment below if vpn is enabled\n    # depends_on:               # Uncomment this line if vpn is enabled\n    #   - vpn                   # Uncomment this line if vpn is enabled\n    # network_mode: service:vpn # Uncomment this line if vpn is enabled\n    networks:               # Comment this line if vpn is enabled\n      - mediastack          # Comment this line if vpn is enabled\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/prowlarr-config:/config\n    # Comment below ports if VPN is enabled.\n    ports:\n      - 9696:9696\n    restart: unless-stopped\n    pull_policy: always\n\n# Subtitel Manager and Downloader\n  bazarr:\n    image: lscr.io/linuxserver/bazarr:latest\n    container_name: bazarr\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/bazarr-config:/config\n      - /media/wd2001ext4/media/downloads/movies:/movies\n      - /media/wd2001ext4/media/downloads/tvshows:/tv\n    ports:\n      - 6767:6767\n    restart: unless-stopped\n    pull_policy: always\n\n# NZB Provider\n  sabnzbd:\n    image: lscr.io/linuxserver/sabnzbd:latest\n    container_name: sabnzbd\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/sabnzbd-config:/config\n      - /media/wd2001ext4/media/downloads:/downloads\n      - /media/wd2001ext4/media/incomplete-downloads:/incomplete-downloads\n    ports:\n      - 8070:8080\n    restart: unless-stopped\n    pull_policy: always\n\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n  radarr-config:\n  sonarr-config:\n  prowlarr-config:\n  bazarr-config:\n  qbittorrent-config:\n  sabnzbd-config:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true\n```\n\n^mediaserver-docker-compose\n\n```bash\nsudo docker compose -f /media/wd2001ext4/apps/mediaserver/docker-compose.yaml up -d\n```\n\n---\n### Optiplex\n```bash\ndocker network create mediastack\n```\n\n```bash\nsudo mkdir /mediaserver\nsudo nano /mediaserver/docker-compose.yaml\n```\n\nalso included is [[Overseerr]]\n\n```yaml\nname: mediastack\nservices:\n  plex:\n    image: linuxserver/plex:latest\n    container_name: plex\n    network_mode: host\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n      - VERSION=docker\n      - PLEX_CLAIM= [REDACTED]\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-config:/config\n      - /mnt/media/wd2001ext4/media/downloads/tvshows:/tv\n      - /mnt/media/wd2001ext4/media/downloads/movies:/movies\n    restart: unless-stopped\n    pull_policy: always\n\n# plex statistics\n  tautulli:\n    image: linuxserver/tautulli\n    container_name: tautulli\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /mnt/media/wd2001ext4/apps/mediaserver/tautulli-config:/config\n      - /mnt/media/wd2001ext4/apps/mediaserver/plex-logs:/plexlogs\n    ports:\n      - 8181:8181\n    restart: unless-stopped\n    pull_policy: always\n\nvolumes:\n  downloads:\n  incomplete-downloads:\n  plex-config:\n  tautulli-config:\n  plex-logs:\n\nnetworks:\n  mediastack:\n    external: true\n  proxy:\n    external: true\n```\n\n```bash\nsudo docker compose -f /mediaserver/docker-compose.yaml up -d\n```\n---\n#### Unused:\n\n```yaml\n  # To use/enable VPN, Run this compose file with --profile=vpn. Its highly recommended to use VPN.\n  vpn:\n  ## Read https://github.com/qdm12/gluetun/wiki for details on configuring VPN for different service providers.\n    profiles: [\"vpn\"]\n    container_name: vpn\n    image: qmcgaw/gluetun:v3.35.0\n    cap_add:\n      - NET_ADMIN\n    environment:\n      - VPN_SERVICE_PROVIDER=${VPN_SERVICE_PROVIDER:-nordvpn} # Valid values: nordvpn, expressvpn, protonvpn, surfshark or custom\n      - OPENVPN_USER=[REDACTED]\"\"}\n      - OPENVPN_PASSWORD=[REDACTED]\"\"}\n\n      ## For list of server countries, visit https://raw.githubusercontent.com/qdm12/gluetun/master/internal/storage/servers.json\n\n      - SERVER_COUNTRIES=${SERVER_COUNTRIES:-Latvia}\n    \n      # - FREE_ONLY=on  # Valid with protonvpn only. Value willbe set \"on\" if using free subscription provided by protonvpn\n\n      ## Enable below if VPN_SERVICE_PROVIDER=custom\n      # - VPN_TYPE=openvpn # or wireguard. \n\n      ## If VPN_TYPE is openvpn\n      # - OPENVPN_CUSTOM_CONFIG=/gluetun/custom.conf\n\n      ## If VPN_TYPE is wireguard. Replace below env variables as required.\n      # - VPN_ENDPOINT_IP=1.2.3.4                                               # Replace with your wg endpoint ip or domain\n      # - VPN_ENDPOINT_PORT=51820                                               # Replace with wg server port\n      # - WIREGUARD_PUBLIC_KEY=[REDACTED]\n      # - WIREGUARD_PRIVATE_KEY=[REDACTED]\n      # - WIREGUARD_PRESHARED_KEY=[REDACTED]\n      # - WIREGUARD_ADDRESSES=\"10.64.222.21/32\"                                 # Replace with wg address\n\n    ## Enable volume if VPN_SERVICE_PROVIDER=custom and VPN_TYPE=openvpn is used\n    # volumes:\n      # - /yourpath/yourconfig.conf:/gluetun/config.conf:ro\n\n    networks:\n      - mediastack\n    \n    # Uncomment/enable below ports if VPN is used/enabled\n    # ports:\n    #   # qbittorrent ports\n    #   - 5080:5080\n    #   - 6881:6881\n    #   - 6881:6881/udp\n    #   # prowlarr ports\n    #   - 9696:9696\n    restart: \"unless-stopped\"\n\n  jellyfin:\n    image: linuxserver/jellyfin:latest\n    container_name: jellyfin\n    # image: linuxserver/jellyfin:10.8.10 - old image\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/jellyfin-config:/config\n      - /media/wd2001ext4/media/downloads:/data\n  # devices:\n  #  - /dev/videoN:/dev/videoN # Mount GPU device \n    ports:\n      - 8096:8096\n      - 7359:7359/udp\n      - 8920:8920\n    restart: unless-stopped\n\n# Jellyfin stats\n  embystat:\n    image: lscr.io/linuxserver/embystat:latest\n    container_name: embystat\n    networks:\n      - mediastack\n      - proxy\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Europe/Riga\n    volumes:\n      - /media/wd2001ext4/apps/mediaserver/embystat-config:/config\n    ports:\n      - 6555:6555\n    restart: unless-stopped\n\n  cleanmyarr:\n    depends_on:\n      - radarr\n      - sonarr\n    image: linuxshots/cleanmyarr:0.4.1-beta\n    container_name: cleanmyarr\n    networks:\n      - mediastack\n      - proxy\n    volumes:\n      - cleanmyarr-config:/config\n    restart: unless-stopped\n  \nvolumes:\n  jellyfin-config:\n  embystat-config:\n  sabnzbd-config:\n  cleanmyarr-config:\n```\n\n---\n## Configuration\n\n### Configure Plex\n\n- Open Plex at http://192.168.0.195:32400/web\n- Configure as it asks for the first time adding /tvshows and /movies\n\n### Configure Tautulli\n\n- Open Tautulli at http://192.168.0.195:8181\n\n### Configure Jellyfin\n\n- Open Jellyfin at http://192.168.0.195:8096\n- Configure as it asks for first time.\n- Add media library folder and choose /data/movies/\n\n### Configure EmbyStat\n\n- Open EmbyStat at http://192.168.0.195:6555\n- Configure as it asks for first time.\n- Server: at 172.25.0.4 URL: https://jellyfin.jalubru.duckdns.org\n- API: [REDACTED] [Jellyfin API](https://jellyfin.jalubru.duckdns.org/web/index.html#!/apikeys.html)\n\n### Configure Radarr\n7c3c9a4c12fe4c9487d94aa3a0cfb4e5\n\n- Open Radarr at http://192.168.0.195:7878\n- Settings --> Media Management --> Check mark \"Movies deleted from disk are automatically unmonitored in Radarr\" under File management section --> Save\n- Settings --> Download clients --> Transmission --> Add Host (qbittorrent) and port (5080) --> Username and password --> Test --> Save **Note: If VPN is enabled, then qbittorrent is reachable on vpn's service name**\n- Settings --> General --> Enable advance setting --> Select Authentication and add username and password\n- Indexer will get automatically added during configuration of P"
  }
};
