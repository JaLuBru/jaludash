# HELP apt_autoremove_pending Apt packages pending autoremoval.
# TYPE apt_autoremove_pending gauge
apt_autoremove_pending 0
# HELP apt_package_cache_timestamp_seconds Apt update last run time.
# TYPE apt_package_cache_timestamp_seconds gauge
apt_package_cache_timestamp_seconds 1.7831319481352272e+09
# HELP apt_upgrades_held Apt packages pending updates but held back.
# TYPE apt_upgrades_held gauge
apt_upgrades_held{arch="",origin=""} 0
# HELP apt_upgrades_pending Apt packages pending updates by origin.
# TYPE apt_upgrades_pending gauge
apt_upgrades_pending{arch="all",origin="Debian:bookworm-security/oldstable-security"} 5
apt_upgrades_pending{arch="all",origin="Debian:bookworm-security/oldstable-security,Debian:bookworm/oldstable"} 2
apt_upgrades_pending{arch="all",origin="Debian:bookworm-updates/oldstable-updates,Debian:bookworm/oldstable"} 1
apt_upgrades_pending{arch="all",origin="Debian:bookworm/oldstable"} 20
apt_upgrades_pending{arch="all",origin="Proxmox:bookworm/stable"} 33
apt_upgrades_pending{arch="amd64",origin="Debian:bookworm-security/oldstable-security"} 22
apt_upgrades_pending{arch="amd64",origin="Debian:bookworm-security/oldstable-security,Debian:bookworm/oldstable"} 14
apt_upgrades_pending{arch="amd64",origin="Debian:bookworm/oldstable"} 84
apt_upgrades_pending{arch="amd64",origin="Proxmox:bookworm/stable"} 46
# HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 1.0835e-05
go_gc_duration_seconds{quantile="0.25"} 1.9437e-05
go_gc_duration_seconds{quantile="0.5"} 1.979e-05
go_gc_duration_seconds{quantile="0.75"} 2.0099e-05
go_gc_duration_seconds{quantile="1"} 5.9911e-05
go_gc_duration_seconds_sum 0.030532555
go_gc_duration_seconds_count 1457
# HELP go_goroutines Number of goroutines that currently exist.
# TYPE go_goroutines gauge
go_goroutines 7
# HELP go_info Information about the Go environment.
# TYPE go_info gauge
go_info{version="go1.19.8"} 1
# HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
# TYPE go_memstats_alloc_bytes gauge
go_memstats_alloc_bytes 2.683536e+06
# HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
# TYPE go_memstats_alloc_bytes_total counter
go_memstats_alloc_bytes_total 5.3317736e+07
# HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
# TYPE go_memstats_buck_hash_sys_bytes gauge
go_memstats_buck_hash_sys_bytes 1.464169e+06
# HELP go_memstats_frees_total Total number of frees.
# TYPE go_memstats_frees_total counter
go_memstats_frees_total 1.238851e+06
# HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
# TYPE go_memstats_gc_sys_bytes gauge
go_memstats_gc_sys_bytes 9.405376e+06
# HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
# TYPE go_memstats_heap_alloc_bytes gauge
go_memstats_heap_alloc_bytes 2.683536e+06
# HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
# TYPE go_memstats_heap_idle_bytes gauge
go_memstats_heap_idle_bytes 3.23584e+06
# HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
# TYPE go_memstats_heap_inuse_bytes gauge
go_memstats_heap_inuse_bytes 4.726784e+06
# HELP go_memstats_heap_objects Number of allocated objects.
# TYPE go_memstats_heap_objects gauge
go_memstats_heap_objects 32216
# HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
# TYPE go_memstats_heap_released_bytes gauge
go_memstats_heap_released_bytes 2.072576e+06
# HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
# TYPE go_memstats_heap_sys_bytes gauge
go_memstats_heap_sys_bytes 7.962624e+06
# HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
# TYPE go_memstats_last_gc_time_seconds gauge
go_memstats_last_gc_time_seconds 1.7831726097015033e+09
# HELP go_memstats_lookups_total Total number of pointer lookups.
# TYPE go_memstats_lookups_total counter
go_memstats_lookups_total 0
# HELP go_memstats_mallocs_total Total number of mallocs.
# TYPE go_memstats_mallocs_total counter
go_memstats_mallocs_total 1.271067e+06
# HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
# TYPE go_memstats_mcache_inuse_bytes gauge
go_memstats_mcache_inuse_bytes 1200
# HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
# TYPE go_memstats_mcache_sys_bytes gauge
go_memstats_mcache_sys_bytes 15600
# HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
# TYPE go_memstats_mspan_inuse_bytes gauge
go_memstats_mspan_inuse_bytes 75744
# HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
# TYPE go_memstats_mspan_sys_bytes gauge
go_memstats_mspan_sys_bytes 97632
# HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
# TYPE go_memstats_next_gc_bytes gauge
go_memstats_next_gc_bytes 5.23036e+06
# HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
# TYPE go_memstats_other_sys_bytes gauge
go_memstats_other_sys_bytes 925583
# HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
# TYPE go_memstats_stack_inuse_bytes gauge
go_memstats_stack_inuse_bytes 425984
# HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
# TYPE go_memstats_stack_sys_bytes gauge
go_memstats_stack_sys_bytes 425984
# HELP go_memstats_sys_bytes Number of bytes obtained from system.
# TYPE go_memstats_sys_bytes gauge
go_memstats_sys_bytes 2.0296968e+07
# HELP go_threads Number of OS threads created.
# TYPE go_threads gauge
go_threads 7
# HELP node_arp_entries ARP entries by device
# TYPE node_arp_entries gauge
node_arp_entries{device="vmbr0"} 7
# HELP node_boot_time_seconds Node boot time, in unixtime.
# TYPE node_boot_time_seconds gauge
node_boot_time_seconds 1.782852021e+09
# HELP node_context_switches_total Total number of context switches.
# TYPE node_context_switches_total counter
node_context_switches_total 5.1147184e+08
# HELP node_cooling_device_cur_state Current throttle state of the cooling device
# TYPE node_cooling_device_cur_state gauge
node_cooling_device_cur_state{name="0",type="Processor"} 0
node_cooling_device_cur_state{name="1",type="Processor"} 0
node_cooling_device_cur_state{name="10",type="Processor"} 0
node_cooling_device_cur_state{name="11",type="Processor"} 0
node_cooling_device_cur_state{name="12",type="dell-smm-fan1"} 1
node_cooling_device_cur_state{name="13",type="intel_powerclamp"} 0
node_cooling_device_cur_state{name="2",type="Processor"} 0
node_cooling_device_cur_state{name="3",type="Processor"} 0
node_cooling_device_cur_state{name="4",type="Processor"} 0
node_cooling_device_cur_state{name="5",type="Processor"} 0
node_cooling_device_cur_state{name="6",type="Processor"} 0
node_cooling_device_cur_state{name="7",type="Processor"} 0
node_cooling_device_cur_state{name="8",type="Processor"} 0
node_cooling_device_cur_state{name="9",type="Processor"} 0
# HELP node_cooling_device_max_state Maximum throttle state of the cooling device
# TYPE node_cooling_device_max_state gauge
node_cooling_device_max_state{name="0",type="Processor"} 10
node_cooling_device_max_state{name="1",type="Processor"} 10
node_cooling_device_max_state{name="10",type="Processor"} 10
node_cooling_device_max_state{name="11",type="Processor"} 10
node_cooling_device_max_state{name="12",type="dell-smm-fan1"} 2
node_cooling_device_max_state{name="13",type="intel_powerclamp"} 100
node_cooling_device_max_state{name="2",type="Processor"} 10
node_cooling_device_max_state{name="3",type="Processor"} 10
node_cooling_device_max_state{name="4",type="Processor"} 10
node_cooling_device_max_state{name="5",type="Processor"} 10
node_cooling_device_max_state{name="6",type="Processor"} 10
node_cooling_device_max_state{name="7",type="Processor"} 10
node_cooling_device_max_state{name="8",type="Processor"} 10
node_cooling_device_max_state{name="9",type="Processor"} 10
# HELP node_cpu_core_throttles_total Number of times this CPU core has been throttled.
# TYPE node_cpu_core_throttles_total counter
node_cpu_core_throttles_total{core="0",package="0"} 0
node_cpu_core_throttles_total{core="1",package="0"} 0
node_cpu_core_throttles_total{core="2",package="0"} 0
node_cpu_core_throttles_total{core="3",package="0"} 0
node_cpu_core_throttles_total{core="4",package="0"} 0
node_cpu_core_throttles_total{core="5",package="0"} 0
# HELP node_cpu_frequency_max_hertz Maximum cpu thread frequency in hertz.
# TYPE node_cpu_frequency_max_hertz gauge
node_cpu_frequency_max_hertz{cpu="0"} 3.8e+09
node_cpu_frequency_max_hertz{cpu="1"} 3.8e+09
node_cpu_frequency_max_hertz{cpu="10"} 3.8e+09
node_cpu_frequency_max_hertz{cpu="11"} 3.8e+09
node_cpu_frequency_max_hertz{cpu="2"} 3.8e+09
node_cpu_frequency_max_hertz{cpu="3"} 3.8e+09
node_cpu_frequency_max_hertz{cpu="4"} 3.8e+09
node_cpu_frequency_max_hertz{cpu="5"} 3.8e+09
node_cpu_frequency_max_hertz{cpu="6"} 3.8e+09
node_cpu_frequency_max_hertz{cpu="7"} 3.8e+09
node_cpu_frequency_max_hertz{cpu="8"} 3.8e+09
node_cpu_frequency_max_hertz{cpu="9"} 3.8e+09
# HELP node_cpu_frequency_min_hertz Minimum cpu thread frequency in hertz.
# TYPE node_cpu_frequency_min_hertz gauge
node_cpu_frequency_min_hertz{cpu="0"} 8e+08
node_cpu_frequency_min_hertz{cpu="1"} 8e+08
node_cpu_frequency_min_hertz{cpu="10"} 8e+08
node_cpu_frequency_min_hertz{cpu="11"} 8e+08
node_cpu_frequency_min_hertz{cpu="2"} 8e+08
node_cpu_frequency_min_hertz{cpu="3"} 8e+08
node_cpu_frequency_min_hertz{cpu="4"} 8e+08
node_cpu_frequency_min_hertz{cpu="5"} 8e+08
node_cpu_frequency_min_hertz{cpu="6"} 8e+08
node_cpu_frequency_min_hertz{cpu="7"} 8e+08
node_cpu_frequency_min_hertz{cpu="8"} 8e+08
node_cpu_frequency_min_hertz{cpu="9"} 8e+08
# HELP node_cpu_guest_seconds_total Seconds the CPUs spent in guests (VMs) for each mode.
# TYPE node_cpu_guest_seconds_total counter
node_cpu_guest_seconds_total{cpu="0",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="0",mode="user"} 0
node_cpu_guest_seconds_total{cpu="1",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="1",mode="user"} 0
node_cpu_guest_seconds_total{cpu="10",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="10",mode="user"} 0
node_cpu_guest_seconds_total{cpu="11",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="11",mode="user"} 0
node_cpu_guest_seconds_total{cpu="2",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="2",mode="user"} 0
node_cpu_guest_seconds_total{cpu="3",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="3",mode="user"} 0
node_cpu_guest_seconds_total{cpu="4",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="4",mode="user"} 0
node_cpu_guest_seconds_total{cpu="5",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="5",mode="user"} 0
node_cpu_guest_seconds_total{cpu="6",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="6",mode="user"} 0
node_cpu_guest_seconds_total{cpu="7",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="7",mode="user"} 0
node_cpu_guest_seconds_total{cpu="8",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="8",mode="user"} 0
node_cpu_guest_seconds_total{cpu="9",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="9",mode="user"} 0
# HELP node_cpu_package_throttles_total Number of times this CPU package has been throttled.
# TYPE node_cpu_package_throttles_total counter
node_cpu_package_throttles_total{package="0"} 0
# HELP node_cpu_scaling_frequency_hertz Current scaled CPU thread frequency in hertz.
# TYPE node_cpu_scaling_frequency_hertz gauge
node_cpu_scaling_frequency_hertz{cpu="0"} 1.157789e+09
node_cpu_scaling_frequency_hertz{cpu="1"} 3.536661e+09
node_cpu_scaling_frequency_hertz{cpu="10"} 3.665073e+09
node_cpu_scaling_frequency_hertz{cpu="11"} 1.296253e+09
node_cpu_scaling_frequency_hertz{cpu="2"} 3.674809e+09
node_cpu_scaling_frequency_hertz{cpu="3"} 3.692173e+09
node_cpu_scaling_frequency_hertz{cpu="4"} 8e+08
node_cpu_scaling_frequency_hertz{cpu="5"} 3.657644e+09
node_cpu_scaling_frequency_hertz{cpu="6"} 3.557738e+09
node_cpu_scaling_frequency_hertz{cpu="7"} 2.727514e+09
node_cpu_scaling_frequency_hertz{cpu="8"} 3.615917e+09
node_cpu_scaling_frequency_hertz{cpu="9"} 8e+08
# HELP node_cpu_scaling_frequency_max_hertz Maximum scaled CPU thread frequency in hertz.
# TYPE node_cpu_scaling_frequency_max_hertz gauge
node_cpu_scaling_frequency_max_hertz{cpu="0"} 3.8e+09
node_cpu_scaling_frequency_max_hertz{cpu="1"} 3.8e+09
node_cpu_scaling_frequency_max_hertz{cpu="10"} 3.8e+09
node_cpu_scaling_frequency_max_hertz{cpu="11"} 3.8e+09
node_cpu_scaling_frequency_max_hertz{cpu="2"} 3.8e+09
node_cpu_scaling_frequency_max_hertz{cpu="3"} 3.8e+09
node_cpu_scaling_frequency_max_hertz{cpu="4"} 3.8e+09
node_cpu_scaling_frequency_max_hertz{cpu="5"} 3.8e+09
node_cpu_scaling_frequency_max_hertz{cpu="6"} 3.8e+09
node_cpu_scaling_frequency_max_hertz{cpu="7"} 3.8e+09
node_cpu_scaling_frequency_max_hertz{cpu="8"} 3.8e+09
node_cpu_scaling_frequency_max_hertz{cpu="9"} 3.8e+09
# HELP node_cpu_scaling_frequency_min_hertz Minimum scaled CPU thread frequency in hertz.
# TYPE node_cpu_scaling_frequency_min_hertz gauge
node_cpu_scaling_frequency_min_hertz{cpu="0"} 8e+08
node_cpu_scaling_frequency_min_hertz{cpu="1"} 8e+08
node_cpu_scaling_frequency_min_hertz{cpu="10"} 8e+08
node_cpu_scaling_frequency_min_hertz{cpu="11"} 8e+08
node_cpu_scaling_frequency_min_hertz{cpu="2"} 8e+08
node_cpu_scaling_frequency_min_hertz{cpu="3"} 8e+08
node_cpu_scaling_frequency_min_hertz{cpu="4"} 8e+08
node_cpu_scaling_frequency_min_hertz{cpu="5"} 8e+08
node_cpu_scaling_frequency_min_hertz{cpu="6"} 8e+08
node_cpu_scaling_frequency_min_hertz{cpu="7"} 8e+08
node_cpu_scaling_frequency_min_hertz{cpu="8"} 8e+08
node_cpu_scaling_frequency_min_hertz{cpu="9"} 8e+08
# HELP node_cpu_seconds_total Seconds the CPUs spent in each mode.
# TYPE node_cpu_seconds_total counter
node_cpu_seconds_total{cpu="0",mode="idle"} 318974.92
node_cpu_seconds_total{cpu="0",mode="iowait"} 262.39
node_cpu_seconds_total{cpu="0",mode="irq"} 0
node_cpu_seconds_total{cpu="0",mode="nice"} 14.96
node_cpu_seconds_total{cpu="0",mode="softirq"} 2.17
node_cpu_seconds_total{cpu="0",mode="steal"} 0
node_cpu_seconds_total{cpu="0",mode="system"} 724.02
node_cpu_seconds_total{cpu="0",mode="user"} 302.56
node_cpu_seconds_total{cpu="1",mode="idle"} 319068.85
node_cpu_seconds_total{cpu="1",mode="iowait"} 219.12
node_cpu_seconds_total{cpu="1",mode="irq"} 0
node_cpu_seconds_total{cpu="1",mode="nice"} 17.8
node_cpu_seconds_total{cpu="1",mode="softirq"} 2.07
node_cpu_seconds_total{cpu="1",mode="steal"} 0
node_cpu_seconds_total{cpu="1",mode="system"} 710.89
node_cpu_seconds_total{cpu="1",mode="user"} 318.38
node_cpu_seconds_total{cpu="10",mode="idle"} 317081.86
node_cpu_seconds_total{cpu="10",mode="iowait"} 244.65
node_cpu_seconds_total{cpu="10",mode="irq"} 0
node_cpu_seconds_total{cpu="10",mode="nice"} 0.14
node_cpu_seconds_total{cpu="10",mode="softirq"} 25.84
node_cpu_seconds_total{cpu="10",mode="steal"} 0
node_cpu_seconds_total{cpu="10",mode="system"} 978.42
node_cpu_seconds_total{cpu="10",mode="user"} 1653.38
node_cpu_seconds_total{cpu="11",mode="idle"} 319627.31
node_cpu_seconds_total{cpu="11",mode="iowait"} 193.98
node_cpu_seconds_total{cpu="11",mode="irq"} 0
node_cpu_seconds_total{cpu="11",mode="nice"} 0.01
node_cpu_seconds_total{cpu="11",mode="softirq"} 0.04
node_cpu_seconds_total{cpu="11",mode="steal"} 0
node_cpu_seconds_total{cpu="11",mode="system"} 641.37
node_cpu_seconds_total{cpu="11",mode="user"} 85.15
node_cpu_seconds_total{cpu="2",mode="idle"} 317220.06
node_cpu_seconds_total{cpu="2",mode="iowait"} 262.9
node_cpu_seconds_total{cpu="2",mode="irq"} 0
node_cpu_seconds_total{cpu="2",mode="nice"} 0.01
node_cpu_seconds_total{cpu="2",mode="softirq"} 29.69
node_cpu_seconds_total{cpu="2",mode="steal"} 0
node_cpu_seconds_total{cpu="2",mode="system"} 1002.47
node_cpu_seconds_total{cpu="2",mode="user"} 1444.89
node_cpu_seconds_total{cpu="3",mode="idle"} 319195
node_cpu_seconds_total{cpu="3",mode="iowait"} 388.68
node_cpu_seconds_total{cpu="3",mode="irq"} 0
node_cpu_seconds_total{cpu="3",mode="nice"} 0
node_cpu_seconds_total{cpu="3",mode="softirq"} 0.04
node_cpu_seconds_total{cpu="3",mode="steal"} 0
node_cpu_seconds_total{cpu="3",mode="system"} 627.88
node_cpu_seconds_total{cpu="3",mode="user"} 279.55
node_cpu_seconds_total{cpu="4",mode="idle"} 319050.77
node_cpu_seconds_total{cpu="4",mode="iowait"} 355.55
node_cpu_seconds_total{cpu="4",mode="irq"} 0
node_cpu_seconds_total{cpu="4",mode="nice"} 1.85
node_cpu_seconds_total{cpu="4",mode="softirq"} 8.77
node_cpu_seconds_total{cpu="4",mode="steal"} 0
node_cpu_seconds_total{cpu="4",mode="system"} 487.13
node_cpu_seconds_total{cpu="4",mode="user"} 407.95
node_cpu_seconds_total{cpu="5",mode="idle"} 316753.55
node_cpu_seconds_total{cpu="5",mode="iowait"} 396.13
node_cpu_seconds_total{cpu="5",mode="irq"} 0
node_cpu_seconds_total{cpu="5",mode="nice"} 0.21
node_cpu_seconds_total{cpu="5",mode="softirq"} 25.31
node_cpu_seconds_total{cpu="5",mode="steal"} 0
node_cpu_seconds_total{cpu="5",mode="system"} 1124.71
node_cpu_seconds_total{cpu="5",mode="user"} 1645.99
node_cpu_seconds_total{cpu="6",mode="idle"} 319730.61
node_cpu_seconds_total{cpu="6",mode="iowait"} 339.48
node_cpu_seconds_total{cpu="6",mode="irq"} 0
node_cpu_seconds_total{cpu="6",mode="nice"} 0.02
node_cpu_seconds_total{cpu="6",mode="softirq"} 0.06
node_cpu_seconds_total{cpu="6",mode="steal"} 0
node_cpu_seconds_total{cpu="6",mode="system"} 277.37
node_cpu_seconds_total{cpu="6",mode="user"} 148.94
node_cpu_seconds_total{cpu="7",mode="idle"} 318912.91
node_cpu_seconds_total{cpu="7",mode="iowait"} 341.44
node_cpu_seconds_total{cpu="7",mode="irq"} 0
node_cpu_seconds_total{cpu="7",mode="nice"} 0.09
node_cpu_seconds_total{cpu="7",mode="softirq"} 23.47
node_cpu_seconds_total{cpu="7",mode="steal"} 0
node_cpu_seconds_total{cpu="7",mode="system"} 308.62
node_cpu_seconds_total{cpu="7",mode="user"} 157.35
node_cpu_seconds_total{cpu="8",mode="idle"} 317430.67
node_cpu_seconds_total{cpu="8",mode="iowait"} 253.1
node_cpu_seconds_total{cpu="8",mode="irq"} 0
node_cpu_seconds_total{cpu="8",mode="nice"} 0.04
node_cpu_seconds_total{cpu="8",mode="softirq"} 29.36
node_cpu_seconds_total{cpu="8",mode="steal"} 0
node_cpu_seconds_total{cpu="8",mode="system"} 865
node_cpu_seconds_total{cpu="8",mode="user"} 1406.04
node_cpu_seconds_total{cpu="9",mode="idle"} 319612.91
node_cpu_seconds_total{cpu="9",mode="iowait"} 256.32
node_cpu_seconds_total{cpu="9",mode="irq"} 0
node_cpu_seconds_total{cpu="9",mode="nice"} 0.01
node_cpu_seconds_total{cpu="9",mode="softirq"} 0.2
node_cpu_seconds_total{cpu="9",mode="steal"} 0
node_cpu_seconds_total{cpu="9",mode="system"} 452.25
node_cpu_seconds_total{cpu="9",mode="user"} 195.97
# HELP node_disk_ata_rotation_rate_rpm ATA disk rotation rate in RPMs (0 for SSDs).
# TYPE node_disk_ata_rotation_rate_rpm gauge
node_disk_ata_rotation_rate_rpm{device="sda"} 5400
# HELP node_disk_ata_write_cache ATA disk has a write cache.
# TYPE node_disk_ata_write_cache gauge
node_disk_ata_write_cache{device="sda"} 1
# HELP node_disk_ata_write_cache_enabled ATA disk has its write cache enabled.
# TYPE node_disk_ata_write_cache_enabled gauge
node_disk_ata_write_cache_enabled{device="sda"} 1
# HELP node_disk_device_mapper_info Info about disk device mapper.
# TYPE node_disk_device_mapper_info gauge
node_disk_device_mapper_info{device="dm-0",lv_layer="",lv_name="swap",name="pve-swap",uuid="LVM-cGLHUWr8J93d2UcIHyRcn0OmML8DLUnIUWcc2KPLUhZ4liOyLw5Ss2rsdoz5bvjT",vg_name="pve"} 1
node_disk_device_mapper_info{device="dm-1",lv_layer="",lv_name="root",name="pve-root",uuid="LVM-cGLHUWr8J93d2UcIHyRcn0OmML8DLUnIeMG9C3G2RXEYYZ5YJ0PhkFYaEKr6T05t",vg_name="pve"} 1
node_disk_device_mapper_info{device="dm-10",lv_layer="",lv_name="vm-103-disk-1",name="pve-vm--103--disk--1",uuid="LVM-cGLHUWr8J93d2UcIHyRcn0OmML8DLUnIuWrRDoJIrq43K4dliqEdXYisGiEe7uCA",vg_name="pve"} 1
node_disk_device_mapper_info{device="dm-11",lv_layer="",lv_name="vm-103-disk-2",name="pve-vm--103--disk--2",uuid="LVM-cGLHUWr8J93d2UcIHyRcn0OmML8DLUnIGyGkM6ruWMJh9YnfTTVLmXScXgLnDm0z",vg_name="pve"} 1
node_disk_device_mapper_info{device="dm-2",lv_layer="",lv_name="data_tmeta",name="pve-data_tmeta",uuid="LVM-cGLHUWr8J93d2UcIHyRcn0OmML8DLUnIFjqX1nQdtj2iBHziMx19wdvbauY5Krh6-tmeta",vg_name="pve"} 1
node_disk_device_mapper_info{device="dm-3",lv_layer="",lv_name="data_tdata",name="pve-data_tdata",uuid="LVM-cGLHUWr8J93d2UcIHyRcn0OmML8DLUnIEOM2BIrBYFsIuJj3aoDgjUJ8E9JSgVs5-tdata",vg_name="pve"} 1
node_disk_device_mapper_info{device="dm-4",lv_layer="tpool",lv_name="data",name="pve-data-tpool",uuid="LVM-cGLHUWr8J93d2UcIHyRcn0OmML8DLUnIVyAg3cAioTL5lRnVWmG5Z8jjiw6Wj2pk-tpool",vg_name="pve"} 1
node_disk_device_mapper_info{device="dm-5",lv_layer="",lv_name="data",name="pve-data",uuid="LVM-cGLHUWr8J93d2UcIHyRcn0OmML8DLUnIVyAg3cAioTL5lRnVWmG5Z8jjiw6Wj2pk-pool",vg_name="pve"} 1
node_disk_device_mapper_info{device="dm-6",lv_layer="",lv_name="vm-100-disk-0",name="pve-vm--100--disk--0",uuid="LVM-cGLHUWr8J93d2UcIHyRcn0OmML8DLUnI1Xxm4nrUHhCcp7CgSPvtxUammVPmgkTM",vg_name="pve"} 1
node_disk_device_mapper_info{device="dm-7",lv_layer="",lv_name="vm-101-disk-0",name="pve-vm--101--disk--0",uuid="LVM-cGLHUWr8J93d2UcIHyRcn0OmML8DLUnI9TKJPkxLAQR9lDV590uzvAQSImacaPZ8",vg_name="pve"} 1
node_disk_device_mapper_info{device="dm-8",lv_layer="",lv_name="vm-102-disk-0",name="pve-vm--102--disk--0",uuid="LVM-cGLHUWr8J93d2UcIHyRcn0OmML8DLUnIkdLUeR1erfFFs2jKdvu7v4FqYc4HoIIj",vg_name="pve"} 1
node_disk_device_mapper_info{device="dm-9",lv_layer="",lv_name="vm-103-disk-0",name="pve-vm--103--disk--0",uuid="LVM-cGLHUWr8J93d2UcIHyRcn0OmML8DLUnIgAGn9fLxYQk9FGKdWN7L1AXhrCODltnF",vg_name="pve"} 1
# HELP node_disk_discard_time_seconds_total This is the total number of seconds spent by all discards.
# TYPE node_disk_discard_time_seconds_total counter
node_disk_discard_time_seconds_total{device="dm-0"} 0
node_disk_discard_time_seconds_total{device="dm-1"} 0
node_disk_discard_time_seconds_total{device="dm-10"} 0
node_disk_discard_time_seconds_total{device="dm-11"} 0
node_disk_discard_time_seconds_total{device="dm-2"} 0
node_disk_discard_time_seconds_total{device="dm-3"} 0
node_disk_discard_time_seconds_total{device="dm-4"} 0
node_disk_discard_time_seconds_total{device="dm-5"} 0
node_disk_discard_time_seconds_total{device="dm-6"} 0
node_disk_discard_time_seconds_total{device="dm-7"} 0
node_disk_discard_time_seconds_total{device="dm-8"} 0
node_disk_discard_time_seconds_total{device="dm-9"} 0
node_disk_discard_time_seconds_total{device="nvme0n1"} 0
node_disk_discard_time_seconds_total{device="sda"} 0
# HELP node_disk_discarded_sectors_total The total number of sectors discarded successfully.
# TYPE node_disk_discarded_sectors_total counter
node_disk_discarded_sectors_total{device="dm-0"} 0
node_disk_discarded_sectors_total{device="dm-1"} 0
node_disk_discarded_sectors_total{device="dm-10"} 0
node_disk_discarded_sectors_total{device="dm-11"} 0
node_disk_discarded_sectors_total{device="dm-2"} 0
node_disk_discarded_sectors_total{device="dm-3"} 0
node_disk_discarded_sectors_total{device="dm-4"} 0
node_disk_discarded_sectors_total{device="dm-5"} 0
node_disk_discarded_sectors_total{device="dm-6"} 0
node_disk_discarded_sectors_total{device="dm-7"} 0
node_disk_discarded_sectors_total{device="dm-8"} 0
node_disk_discarded_sectors_total{device="dm-9"} 0
node_disk_discarded_sectors_total{device="nvme0n1"} 0
node_disk_discarded_sectors_total{device="sda"} 0
# HELP node_disk_discards_completed_total The total number of discards completed successfully.
# TYPE node_disk_discards_completed_total counter
node_disk_discards_completed_total{device="dm-0"} 0
node_disk_discards_completed_total{device="dm-1"} 0
node_disk_discards_completed_total{device="dm-10"} 0
node_disk_discards_completed_total{device="dm-11"} 0
node_disk_discards_completed_total{device="dm-2"} 0
node_disk_discards_completed_total{device="dm-3"} 0
node_disk_discards_completed_total{device="dm-4"} 0
node_disk_discards_completed_total{device="dm-5"} 0
node_disk_discards_completed_total{device="dm-6"} 0
node_disk_discards_completed_total{device="dm-7"} 0
node_disk_discards_completed_total{device="dm-8"} 0
node_disk_discards_completed_total{device="dm-9"} 0
node_disk_discards_completed_total{device="nvme0n1"} 0
node_disk_discards_completed_total{device="sda"} 0
# HELP node_disk_discards_merged_total The total number of discards merged.
# TYPE node_disk_discards_merged_total counter
node_disk_discards_merged_total{device="dm-0"} 0
node_disk_discards_merged_total{device="dm-1"} 0
node_disk_discards_merged_total{device="dm-10"} 0
node_disk_discards_merged_total{device="dm-11"} 0
node_disk_discards_merged_total{device="dm-2"} 0
node_disk_discards_merged_total{device="dm-3"} 0
node_disk_discards_merged_total{device="dm-4"} 0
node_disk_discards_merged_total{device="dm-5"} 0
node_disk_discards_merged_total{device="dm-6"} 0
node_disk_discards_merged_total{device="dm-7"} 0
node_disk_discards_merged_total{device="dm-8"} 0
node_disk_discards_merged_total{device="dm-9"} 0
node_disk_discards_merged_total{device="nvme0n1"} 0
node_disk_discards_merged_total{device="sda"} 0
# HELP node_disk_filesystem_info Info about disk filesystem.
# TYPE node_disk_filesystem_info gauge
node_disk_filesystem_info{device="dm-0",type="swap",usage="other",uuid="476ac21d-18a6-4b0e-9ba3-ec3f87a39409",version="1"} 1
node_disk_filesystem_info{device="dm-1",type="ext4",usage="filesystem",uuid="fa5d3a3c-a1ed-4da9-b76a-28ac25085ba7",version="1.0"} 1
node_disk_filesystem_info{device="dm-6",type="ext4",usage="filesystem",uuid="79de1ffa-a89c-4c26-97e9-2a66f20a79de",version="1.0"} 1
node_disk_filesystem_info{device="dm-7",type="ext4",usage="filesystem",uuid="93c2de3a-a75e-4dd6-86a6-6d511599d0d7",version="1.0"} 1
node_disk_filesystem_info{device="dm-8",type="ext4",usage="filesystem",uuid="550320be-38e4-4c30-86aa-82fa9478a371",version="1.0"} 1
# HELP node_disk_flush_requests_time_seconds_total This is the total number of seconds spent by all flush requests.
# TYPE node_disk_flush_requests_time_seconds_total counter
node_disk_flush_requests_time_seconds_total{device="dm-0"} 0
node_disk_flush_requests_time_seconds_total{device="dm-1"} 0
node_disk_flush_requests_time_seconds_total{device="dm-10"} 0
node_disk_flush_requests_time_seconds_total{device="dm-11"} 0
node_disk_flush_requests_time_seconds_total{device="dm-2"} 0
node_disk_flush_requests_time_seconds_total{device="dm-3"} 0
node_disk_flush_requests_time_seconds_total{device="dm-4"} 0
node_disk_flush_requests_time_seconds_total{device="dm-5"} 0
node_disk_flush_requests_time_seconds_total{device="dm-6"} 0
node_disk_flush_requests_time_seconds_total{device="dm-7"} 0
node_disk_flush_requests_time_seconds_total{device="dm-8"} 0
node_disk_flush_requests_time_seconds_total{device="dm-9"} 0
node_disk_flush_requests_time_seconds_total{device="nvme0n1"} 72.194
node_disk_flush_requests_time_seconds_total{device="sda"} 0.213
# HELP node_disk_flush_requests_total The total number of flush requests completed successfully
# TYPE node_disk_flush_requests_total counter
node_disk_flush_requests_total{device="dm-0"} 0
node_disk_flush_requests_total{device="dm-1"} 0
node_disk_flush_requests_total{device="dm-10"} 0
node_disk_flush_requests_total{device="dm-11"} 0
node_disk_flush_requests_total{device="dm-2"} 0
node_disk_flush_requests_total{device="dm-3"} 0
node_disk_flush_requests_total{device="dm-4"} 0
node_disk_flush_requests_total{device="dm-5"} 0
node_disk_flush_requests_total{device="dm-6"} 0
node_disk_flush_requests_total{device="dm-7"} 0
node_disk_flush_requests_total{device="dm-8"} 0
node_disk_flush_requests_total{device="dm-9"} 0
node_disk_flush_requests_total{device="nvme0n1"} 191308
node_disk_flush_requests_total{device="sda"} 8
# HELP node_disk_info Info of /sys/block/<block_device>.
# TYPE node_disk_info gauge
node_disk_info{device="dm-0",major="252",minor="0",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="dm-1",major="252",minor="1",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="dm-10",major="252",minor="10",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="dm-11",major="252",minor="11",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="dm-2",major="252",minor="2",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="dm-3",major="252",minor="3",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="dm-4",major="252",minor="4",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="dm-5",major="252",minor="5",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="dm-6",major="252",minor="6",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="dm-7",major="252",minor="7",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="dm-8",major="252",minor="8",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="dm-9",major="252",minor="9",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="nvme0n1",major="259",minor="0",model="PC SN530 NVMe WDC 256GB",path="pci-0000:01:00.0-nvme-1",revision="21113012",serial="214219800494",wwn="eui.e8238fa6bf530001001b448b41f52161"} 1
node_disk_info{device="sda",major="8",minor="0",model="ST500LT012-1DG142",path="pci-0000:00:17.0-ata-1.0",revision="0002LVM1",serial="S3P4DDX7",wwn="0x5000c5006da764c9"} 1
# HELP node_disk_io_now The number of I/Os currently in progress.
# TYPE node_disk_io_now gauge
node_disk_io_now{device="dm-0"} 0
node_disk_io_now{device="dm-1"} 0
node_disk_io_now{device="dm-10"} 0
node_disk_io_now{device="dm-11"} 0
node_disk_io_now{device="dm-2"} 0
node_disk_io_now{device="dm-3"} 0
node_disk_io_now{device="dm-4"} 0
node_disk_io_now{device="dm-5"} 0
node_disk_io_now{device="dm-6"} 0
node_disk_io_now{device="dm-7"} 0
node_disk_io_now{device="dm-8"} 0
node_disk_io_now{device="dm-9"} 0
node_disk_io_now{device="nvme0n1"} 0
node_disk_io_now{device="sda"} 0
# HELP node_disk_io_time_seconds_total Total seconds spent doing I/Os.
# TYPE node_disk_io_time_seconds_total counter
node_disk_io_time_seconds_total{device="dm-0"} 0.03
node_disk_io_time_seconds_total{device="dm-1"} 1401.583
node_disk_io_time_seconds_total{device="dm-10"} 0.018000000000000002
node_disk_io_time_seconds_total{device="dm-11"} 0.01
node_disk_io_time_seconds_total{device="dm-2"} 77.938
node_disk_io_time_seconds_total{device="dm-3"} 3322.532
node_disk_io_time_seconds_total{device="dm-4"} 3322.791
node_disk_io_time_seconds_total{device="dm-5"} 0
node_disk_io_time_seconds_total{device="dm-6"} 672.577
node_disk_io_time_seconds_total{device="dm-7"} 2019.461
node_disk_io_time_seconds_total{device="dm-8"} 935.1940000000001
node_disk_io_time_seconds_total{device="dm-9"} 0.015
node_disk_io_time_seconds_total{device="nvme0n1"} 4790.612
node_disk_io_time_seconds_total{device="sda"} 2.865
# HELP node_disk_io_time_weighted_seconds_total The weighted # of seconds spent doing I/Os.
# TYPE node_disk_io_time_weighted_seconds_total counter
node_disk_io_time_weighted_seconds_total{device="dm-0"} 0.033
node_disk_io_time_weighted_seconds_total{device="dm-1"} 23511.772
node_disk_io_time_weighted_seconds_total{device="dm-10"} 0.011
node_disk_io_time_weighted_seconds_total{device="dm-11"} 0.006
node_disk_io_time_weighted_seconds_total{device="dm-2"} 95.749
node_disk_io_time_weighted_seconds_total{device="dm-3"} 20828.693
node_disk_io_time_weighted_seconds_total{device="dm-4"} 20830.302
node_disk_io_time_weighted_seconds_total{device="dm-5"} 0
node_disk_io_time_weighted_seconds_total{device="dm-6"} 829.648
node_disk_io_time_weighted_seconds_total{device="dm-7"} 28654.146
node_disk_io_time_weighted_seconds_total{device="dm-8"} 1556.102
node_disk_io_time_weighted_seconds_total{device="dm-9"} 0.011
node_disk_io_time_weighted_seconds_total{device="nvme0n1"} 33785.339
node_disk_io_time_weighted_seconds_total{device="sda"} 10.491
# HELP node_disk_read_bytes_total The total number of bytes read successfully.
# TYPE node_disk_read_bytes_total counter
node_disk_read_bytes_total{device="dm-0"} 4.25984e+06
node_disk_read_bytes_total{device="dm-1"} 5.39751424e+08
node_disk_read_bytes_total{device="dm-10"} 4.124672e+06
node_disk_read_bytes_total{device="dm-11"} 1.273856e+06
node_disk_read_bytes_total{device="dm-2"} 1.46755584e+08
node_disk_read_bytes_total{device="dm-3"} 2.45108224e+09
node_disk_read_bytes_total{device="dm-4"} 2.45108224e+09
node_disk_read_bytes_total{device="dm-5"} 0
node_disk_read_bytes_total{device="dm-6"} 4.35315712e+08
node_disk_read_bytes_total{device="dm-7"} 1.781912576e+09
node_disk_read_bytes_total{device="dm-8"} 2.32522752e+08
node_disk_read_bytes_total{device="dm-9"} 1.273856e+06
node_disk_read_bytes_total{device="nvme0n1"} 2.8372146176e+10
node_disk_read_bytes_total{device="sda"} 1.2191744e+07
# HELP node_disk_read_time_seconds_total The total number of seconds spent by all reads.
# TYPE node_disk_read_time_seconds_total counter
node_disk_read_time_seconds_total{device="dm-0"} 0.033
node_disk_read_time_seconds_total{device="dm-1"} 4.66
node_disk_read_time_seconds_total{device="dm-10"} 0.011
node_disk_read_time_seconds_total{device="dm-11"} 0.006
node_disk_read_time_seconds_total{device="dm-2"} 94.932
node_disk_read_time_seconds_total{device="dm-3"} 77.311
node_disk_read_time_seconds_total{device="dm-4"} 77.358
node_disk_read_time_seconds_total{device="dm-5"} 0
node_disk_read_time_seconds_total{device="dm-6"} 6.037
node_disk_read_time_seconds_total{device="dm-7"} 77.09400000000001
node_disk_read_time_seconds_total{device="dm-8"} 3.6710000000000003
node_disk_read_time_seconds_total{device="dm-9"} 0.011
node_disk_read_time_seconds_total{device="nvme0n1"} 466.25100000000003
node_disk_read_time_seconds_total{device="sda"} 10.055
# HELP node_disk_reads_completed_total The total number of reads completed successfully.
# TYPE node_disk_reads_completed_total counter
node_disk_reads_completed_total{device="dm-0"} 154
node_disk_reads_completed_total{device="dm-1"} 19854
node_disk_reads_completed_total{device="dm-10"} 184
node_disk_reads_completed_total{device="dm-11"} 103
node_disk_reads_completed_total{device="dm-2"} 35826
node_disk_reads_completed_total{device="dm-3"} 141510
node_disk_reads_completed_total{device="dm-4"} 141510
node_disk_reads_completed_total{device="dm-5"} 0
node_disk_reads_completed_total{device="dm-6"} 18837
node_disk_reads_completed_total{device="dm-7"} 111952
node_disk_reads_completed_total{device="dm-8"} 10592
node_disk_reads_completed_total{device="dm-9"} 103
node_disk_reads_completed_total{device="nvme0n1"} 343123
node_disk_reads_completed_total{device="sda"} 527
# HELP node_disk_reads_merged_total The total number of reads merged.
# TYPE node_disk_reads_merged_total counter
node_disk_reads_merged_total{device="dm-0"} 0
node_disk_reads_merged_total{device="dm-1"} 0
node_disk_reads_merged_total{device="dm-10"} 0
node_disk_reads_merged_total{device="dm-11"} 0
node_disk_reads_merged_total{device="dm-2"} 0
node_disk_reads_merged_total{device="dm-3"} 0
node_disk_reads_merged_total{device="dm-4"} 0
node_disk_reads_merged_total{device="dm-5"} 0
node_disk_reads_merged_total{device="dm-6"} 0
node_disk_reads_merged_total{device="dm-7"} 0
node_disk_reads_merged_total{device="dm-8"} 0
node_disk_reads_merged_total{device="dm-9"} 0
node_disk_reads_merged_total{device="nvme0n1"} 48987
node_disk_reads_merged_total{device="sda"} 58
# HELP node_disk_write_time_seconds_total This is the total number of seconds spent by all writes.
# TYPE node_disk_write_time_seconds_total counter
node_disk_write_time_seconds_total{device="dm-0"} 0
node_disk_write_time_seconds_total{device="dm-1"} 23507.112
node_disk_write_time_seconds_total{device="dm-10"} 0
node_disk_write_time_seconds_total{device="dm-11"} 0
node_disk_write_time_seconds_total{device="dm-2"} 0.8170000000000001
node_disk_write_time_seconds_total{device="dm-3"} 20751.382
node_disk_write_time_seconds_total{device="dm-4"} 20752.944
node_disk_write_time_seconds_total{device="dm-5"} 0
node_disk_write_time_seconds_total{device="dm-6"} 823.611
node_disk_write_time_seconds_total{device="dm-7"} 28577.052
node_disk_write_time_seconds_total{device="dm-8"} 1552.431
node_disk_write_time_seconds_total{device="dm-9"} 0
node_disk_write_time_seconds_total{device="nvme0n1"} 33246.892
node_disk_write_time_seconds_total{device="sda"} 0.222
# HELP node_disk_writes_completed_total The total number of writes completed successfully.
# TYPE node_disk_writes_completed_total counter
node_disk_writes_completed_total{device="dm-0"} 0
node_disk_writes_completed_total{device="dm-1"} 3.114999e+06
node_disk_writes_completed_total{device="dm-10"} 0
node_disk_writes_completed_total{device="dm-11"} 0
node_disk_writes_completed_total{device="dm-2"} 1246
node_disk_writes_completed_total{device="dm-3"} 3.341103e+06
node_disk_writes_completed_total{device="dm-4"} 3.341006e+06
node_disk_writes_completed_total{device="dm-5"} 0
node_disk_writes_completed_total{device="dm-6"} 103750
node_disk_writes_completed_total{device="dm-7"} 3.058959e+06
node_disk_writes_completed_total{device="dm-8"} 178200
node_disk_writes_completed_total{device="dm-9"} 0
node_disk_writes_completed_total{device="nvme0n1"} 4.884589e+06
node_disk_writes_completed_total{device="sda"} 16
# HELP node_disk_writes_merged_total The number of writes merged.
# TYPE node_disk_writes_merged_total counter
node_disk_writes_merged_total{device="dm-0"} 0
node_disk_writes_merged_total{device="dm-1"} 0
node_disk_writes_merged_total{device="dm-10"} 0
node_disk_writes_merged_total{device="dm-11"} 0
node_disk_writes_merged_total{device="dm-2"} 0
node_disk_writes_merged_total{device="dm-3"} 0
node_disk_writes_merged_total{device="dm-4"} 0
node_disk_writes_merged_total{device="dm-5"} 0
node_disk_writes_merged_total{device="dm-6"} 0
node_disk_writes_merged_total{device="dm-7"} 0
node_disk_writes_merged_total{device="dm-8"} 0
node_disk_writes_merged_total{device="dm-9"} 0
node_disk_writes_merged_total{device="nvme0n1"} 1.576485e+06
node_disk_writes_merged_total{device="sda"} 492
# HELP node_disk_written_bytes_total The total number of bytes written successfully.
# TYPE node_disk_written_bytes_total counter
node_disk_written_bytes_total{device="dm-0"} 0
node_disk_written_bytes_total{device="dm-1"} 1.5419990016e+10
node_disk_written_bytes_total{device="dm-10"} 0
node_disk_written_bytes_total{device="dm-11"} 0
node_disk_written_bytes_total{device="dm-2"} 4.308992e+06
node_disk_written_bytes_total{device="dm-3"} 2.5857744896e+10
node_disk_written_bytes_total{device="dm-4"} 2.5857744896e+10
node_disk_written_bytes_total{device="dm-5"} 0
node_disk_written_bytes_total{device="dm-6"} 6.09677312e+08
node_disk_written_bytes_total{device="dm-7"} 2.4366931968e+10
node_disk_written_bytes_total{device="dm-8"} 8.73795584e+08
node_disk_written_bytes_total{device="dm-9"} 0
node_disk_written_bytes_total{device="nvme0n1"} 4.1282049024e+10
node_disk_written_bytes_total{device="sda"} 260096
# HELP node_dmi_info A metric with a constant '1' value labeled by bios_date, bios_release, bios_vendor, bios_version, board_asset_tag, board_name, board_serial, board_vendor, board_version, chassis_asset_tag, chassis_serial, chassis_vendor, chassis_version, product_family, product_name, product_serial, product_sku, product_uuid, product_version, system_vendor if provided by DMI.
# TYPE node_dmi_info gauge
node_dmi_info{bios_date="11/08/2021",bios_release="1.2",bios_vendor="Dell Inc.",bios_version="1.2.1",board_asset_tag="",board_name="04KC81",board_vendor="Dell Inc.",board_version="A00",chassis_asset_tag="",chassis_vendor="Dell Inc.",chassis_version="",product_family="OptiPlex",product_name="OptiPlex 5090",product_sku="0A54",product_version="",system_vendor="Dell Inc."} 1
# HELP node_entropy_available_bits Bits of available entropy.
# TYPE node_entropy_available_bits gauge
node_entropy_available_bits 256
# HELP node_entropy_pool_size_bits Bits of entropy pool.
# TYPE node_entropy_pool_size_bits gauge
node_entropy_pool_size_bits 256
# HELP node_exporter_build_info A metric with a constant '1' value labeled by version, revision, branch, goversion from which node_exporter was built, and the goos and goarch for the build.
# TYPE node_exporter_build_info gauge
node_exporter_build_info{branch="debian/sid",goarch="amd64",goos="linux",goversion="go1.19.8",revision="1.5.0-1+b6",version="1.5.0"} 1
# HELP node_filefd_allocated File descriptor statistics: allocated.
# TYPE node_filefd_allocated gauge
node_filefd_allocated 5344
# HELP node_filefd_maximum File descriptor statistics: maximum.
# TYPE node_filefd_maximum gauge
node_filefd_maximum 9.223372036854776e+18
# HELP node_filesystem_avail_bytes Filesystem space available to non-root users in bytes.
# TYPE node_filesystem_avail_bytes gauge
node_filesystem_avail_bytes{device="/dev/fuse",fstype="fuse",mountpoint="/etc/pve"} 1.34197248e+08
node_filesystem_avail_bytes{device="/dev/mapper/pve-root",fstype="ext4",mountpoint="/"} 5.3119676416e+10
node_filesystem_avail_bytes{device="/dev/nvme0n1p2",fstype="vfat",mountpoint="/boot/efi"} 1.059414016e+09
node_filesystem_avail_bytes{device="lxcfs",fstype="fuse.lxcfs",mountpoint="/var/lib/lxcfs"} 0
# HELP node_filesystem_device_error Whether an error occurred while getting statistics for the given device.
# TYPE node_filesystem_device_error gauge
node_filesystem_device_error{device="/dev/fuse",fstype="fuse",mountpoint="/etc/pve"} 0
node_filesystem_device_error{device="/dev/mapper/pve-root",fstype="ext4",mountpoint="/"} 0
node_filesystem_device_error{device="/dev/nvme0n1p2",fstype="vfat",mountpoint="/boot/efi"} 0
node_filesystem_device_error{device="lxcfs",fstype="fuse.lxcfs",mountpoint="/var/lib/lxcfs"} 0
# HELP node_filesystem_files Filesystem total file nodes.
# TYPE node_filesystem_files gauge
node_filesystem_files{device="/dev/fuse",fstype="fuse",mountpoint="/etc/pve"} 262144
node_filesystem_files{device="/dev/mapper/pve-root",fstype="ext4",mountpoint="/"} 4.54656e+06
node_filesystem_files{device="/dev/nvme0n1p2",fstype="vfat",mountpoint="/boot/efi"} 0
node_filesystem_files{device="lxcfs",fstype="fuse.lxcfs",mountpoint="/var/lib/lxcfs"} 0
# HELP node_filesystem_files_free Filesystem total free file nodes.
# TYPE node_filesystem_files_free gauge
node_filesystem_files_free{device="/dev/fuse",fstype="fuse",mountpoint="/etc/pve"} 262105
node_filesystem_files_free{device="/dev/mapper/pve-root",fstype="ext4",mountpoint="/"} 4.471417e+06
node_filesystem_files_free{device="/dev/nvme0n1p2",fstype="vfat",mountpoint="/boot/efi"} 0
node_filesystem_files_free{device="lxcfs",fstype="fuse.lxcfs",mountpoint="/var/lib/lxcfs"} 0
# HELP node_filesystem_free_bytes Filesystem free space in bytes.
# TYPE node_filesystem_free_bytes gauge
node_filesystem_free_bytes{device="/dev/fuse",fstype="fuse",mountpoint="/etc/pve"} 1.34197248e+08
node_filesystem_free_bytes{device="/dev/mapper/pve-root",fstype="ext4",mountpoint="/"} 5.6860573696e+10
node_filesystem_free_bytes{device="/dev/nvme0n1p2",fstype="vfat",mountpoint="/boot/efi"} 1.059414016e+09
node_filesystem_free_bytes{device="lxcfs",fstype="fuse.lxcfs",mountpoint="/var/lib/lxcfs"} 0
# HELP node_filesystem_readonly Filesystem read-only status.
# TYPE node_filesystem_readonly gauge
node_filesystem_readonly{device="/dev/fuse",fstype="fuse",mountpoint="/etc/pve"} 0
node_filesystem_readonly{device="/dev/mapper/pve-root",fstype="ext4",mountpoint="/"} 0
node_filesystem_readonly{device="/dev/nvme0n1p2",fstype="vfat",mountpoint="/boot/efi"} 0
node_filesystem_readonly{device="lxcfs",fstype="fuse.lxcfs",mountpoint="/var/lib/lxcfs"} 0
# HELP node_filesystem_size_bytes Filesystem size in bytes.
# TYPE node_filesystem_size_bytes gauge
node_filesystem_size_bytes{device="/dev/fuse",fstype="fuse",mountpoint="/etc/pve"} 1.34217728e+08
node_filesystem_size_bytes{device="/dev/mapper/pve-root",fstype="ext4",mountpoint="/"} 7.2722055168e+10
node_filesystem_size_bytes{device="/dev/nvme0n1p2",fstype="vfat",mountpoint="/boot/efi"} 1.071628288e+09
node_filesystem_size_bytes{device="lxcfs",fstype="fuse.lxcfs",mountpoint="/var/lib/lxcfs"} 0
# HELP node_forks_total Total number of forks.
# TYPE node_forks_total counter
node_forks_total 2.275245e+06
# HELP node_hwmon_chip_names Annotation metric for human-readable chip names
# TYPE node_hwmon_chip_names gauge
node_hwmon_chip_names{chip="nvme_nvme0",chip_name="nvme"} 1
node_hwmon_chip_names{chip="platform_coretemp_0",chip_name="coretemp"} 1
node_hwmon_chip_names{chip="power_supply_ucsi_source_psy_usbc000:001",chip_name="ucsi_source_psy_usbc000:001"} 1
node_hwmon_chip_names{chip="thermal_thermal_zone0",chip_name="iwlwifi_1"} 1
node_hwmon_chip_names{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",chip_name="dell_smm"} 1
# HELP node_hwmon_curr_amps Hardware monitor for current (input)
# TYPE node_hwmon_curr_amps gauge
node_hwmon_curr_amps{chip="power_supply_ucsi_source_psy_usbc000:001",sensor="curr1"} 0
# HELP node_hwmon_curr_max_amps Hardware monitor for current (max)
# TYPE node_hwmon_curr_max_amps gauge
node_hwmon_curr_max_amps{chip="power_supply_ucsi_source_psy_usbc000:001",sensor="curr1"} 0
# HELP node_hwmon_fan_max_rpm Hardware monitor for fan revolutions per minute (max)
# TYPE node_hwmon_fan_max_rpm gauge
node_hwmon_fan_max_rpm{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="fan1"} 4000
# HELP node_hwmon_fan_min_rpm Hardware monitor for fan revolutions per minute (min)
# TYPE node_hwmon_fan_min_rpm gauge
node_hwmon_fan_min_rpm{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="fan1"} 0
# HELP node_hwmon_fan_rpm Hardware monitor for fan revolutions per minute (input)
# TYPE node_hwmon_fan_rpm gauge
node_hwmon_fan_rpm{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="fan1"} 1807
# HELP node_hwmon_fan_target_rpm Hardware monitor for fan revolutions per minute (target)
# TYPE node_hwmon_fan_target_rpm gauge
node_hwmon_fan_target_rpm{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="fan1"} 1000
# HELP node_hwmon_in_max_volts Hardware monitor for voltage (max)
# TYPE node_hwmon_in_max_volts gauge
node_hwmon_in_max_volts{chip="power_supply_ucsi_source_psy_usbc000:001",sensor="in0"} 5
# HELP node_hwmon_in_min_volts Hardware monitor for voltage (min)
# TYPE node_hwmon_in_min_volts gauge
node_hwmon_in_min_volts{chip="power_supply_ucsi_source_psy_usbc000:001",sensor="in0"} 5
# HELP node_hwmon_in_volts Hardware monitor for voltage (input)
# TYPE node_hwmon_in_volts gauge
node_hwmon_in_volts{chip="power_supply_ucsi_source_psy_usbc000:001",sensor="in0"} 5
# HELP node_hwmon_pwm Hardware monitor pwm element 
# TYPE node_hwmon_pwm gauge
node_hwmon_pwm{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="pwm1"} 128
# HELP node_hwmon_sensor_label Label for given chip and sensor
# TYPE node_hwmon_sensor_label gauge
node_hwmon_sensor_label{chip="nvme_nvme0",label="Composite",sensor="temp1"} 1
node_hwmon_sensor_label{chip="platform_coretemp_0",label="Core 0",sensor="temp2"} 1
node_hwmon_sensor_label{chip="platform_coretemp_0",label="Core 1",sensor="temp3"} 1
node_hwmon_sensor_label{chip="platform_coretemp_0",label="Core 2",sensor="temp4"} 1
node_hwmon_sensor_label{chip="platform_coretemp_0",label="Core 3",sensor="temp5"} 1
node_hwmon_sensor_label{chip="platform_coretemp_0",label="Core 4",sensor="temp6"} 1
node_hwmon_sensor_label{chip="platform_coretemp_0",label="Core 5",sensor="temp7"} 1
node_hwmon_sensor_label{chip="platform_coretemp_0",label="Package id 0",sensor="temp1"} 1
# HELP node_hwmon_temp_alarm Hardware sensor alarm status (temp)
# TYPE node_hwmon_temp_alarm gauge
node_hwmon_temp_alarm{chip="nvme_nvme0",sensor="temp1"} 0
# HELP node_hwmon_temp_celsius Hardware monitor for temperature (input)
# TYPE node_hwmon_temp_celsius gauge
node_hwmon_temp_celsius{chip="nvme_nvme0",sensor="temp1"} 37.85
node_hwmon_temp_celsius{chip="platform_coretemp_0",sensor="temp1"} 39
node_hwmon_temp_celsius{chip="platform_coretemp_0",sensor="temp2"} 33
node_hwmon_temp_celsius{chip="platform_coretemp_0",sensor="temp3"} 34
node_hwmon_temp_celsius{chip="platform_coretemp_0",sensor="temp4"} 34
node_hwmon_temp_celsius{chip="platform_coretemp_0",sensor="temp5"} 40
node_hwmon_temp_celsius{chip="platform_coretemp_0",sensor="temp6"} 34
node_hwmon_temp_celsius{chip="platform_coretemp_0",sensor="temp7"} 34
node_hwmon_temp_celsius{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="temp1"} 35
node_hwmon_temp_celsius{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="temp2"} 43
node_hwmon_temp_celsius{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="temp3"} 0
node_hwmon_temp_celsius{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="temp4"} 33
node_hwmon_temp_celsius{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="temp5"} 35
node_hwmon_temp_celsius{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="temp6"} 36
node_hwmon_temp_celsius{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="temp7"} 38
node_hwmon_temp_celsius{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="temp8"} 32
node_hwmon_temp_celsius{chip="wmi_bus_pnp0c14:06_f1ddee52_063c_4784_a11e_8a06684b9b01",sensor="temp9"} 0
# HELP node_hwmon_temp_crit_alarm_celsius Hardware monitor for temperature (crit_alarm)
# TYPE node_hwmon_temp_crit_alarm_celsius gauge
node_hwmon_temp_crit_alarm_celsius{chip="platform_coretemp_0",sensor="temp1"} 0
node_hwmon_temp_crit_alarm_celsius{chip="platform_coretemp_0",sensor="temp2"} 0
node_hwmon_temp_crit_alarm_celsius{chip="platform_coretemp_0",sensor="temp3"} 0
node_hwmon_temp_crit_alarm_celsius{chip="platform_coretemp_0",sensor="temp4"} 0
node_hwmon_temp_crit_alarm_celsius{chip="platform_coretemp_0",sensor="temp5"} 0
node_hwmon_temp_crit_alarm_celsius{chip="platform_coretemp_0",sensor="temp6"} 0
node_hwmon_temp_crit_alarm_celsius{chip="platform_coretemp_0",sensor="temp7"} 0
# HELP node_hwmon_temp_crit_celsius Hardware monitor for temperature (crit)
# TYPE node_hwmon_temp_crit_celsius gauge
node_hwmon_temp_crit_celsius{chip="nvme_nvme0",sensor="temp1"} 84.85000000000001
node_hwmon_temp_crit_celsius{chip="platform_coretemp_0",sensor="temp1"} 100
node_hwmon_temp_crit_celsius{chip="platform_coretemp_0",sensor="temp2"} 100
node_hwmon_temp_crit_celsius{chip="platform_coretemp_0",sensor="temp3"} 100
node_hwmon_temp_crit_celsius{chip="platform_coretemp_0",sensor="temp4"} 100
node_hwmon_temp_crit_celsius{chip="platform_coretemp_0",sensor="temp5"} 100
node_hwmon_temp_crit_celsius{chip="platform_coretemp_0",sensor="temp6"} 100
node_hwmon_temp_crit_celsius{chip="platform_coretemp_0",sensor="temp7"} 100
# HELP node_hwmon_temp_max_celsius Hardware monitor for temperature (max)
# TYPE node_hwmon_temp_max_celsius gauge
node_hwmon_temp_max_celsius{chip="nvme_nvme0",sensor="temp1"} 82.85000000000001
node_hwmon_temp_max_celsius{chip="platform_coretemp_0",sensor="temp1"} 80
node_hwmon_temp_max_celsius{chip="platform_coretemp_0",sensor="temp2"} 80
node_hwmon_temp_max_celsius{chip="platform_coretemp_0",sensor="temp3"} 80
node_hwmon_temp_max_celsius{chip="platform_coretemp_0",sensor="temp4"} 80
node_hwmon_temp_max_celsius{chip="platform_coretemp_0",sensor="temp5"} 80
node_hwmon_temp_max_celsius{chip="platform_coretemp_0",sensor="temp6"} 80
node_hwmon_temp_max_celsius{chip="platform_coretemp_0",sensor="temp7"} 80
# HELP node_hwmon_temp_min_celsius Hardware monitor for temperature (min)
# TYPE node_hwmon_temp_min_celsius gauge
node_hwmon_temp_min_celsius{chip="nvme_nvme0",sensor="temp1"} -5.15
# HELP node_intr_total Total number of interrupts serviced.
# TYPE node_intr_total counter
node_intr_total 3.07136183e+08
# HELP node_load1 1m load average.
# TYPE node_load1 gauge
node_load1 0.11
# HELP node_load15 15m load average.
# TYPE node_load15 gauge
node_load15 0.08
# HELP node_load5 5m load average.
# TYPE node_load5 gauge
node_load5 0.08
# HELP node_memory_Active_anon_bytes Memory information field Active_anon_bytes.
# TYPE node_memory_Active_anon_bytes gauge
node_memory_Active_anon_bytes 2.126106624e+09
# HELP node_memory_Active_bytes Memory information field Active_bytes.
# TYPE node_memory_Active_bytes gauge
node_memory_Active_bytes 3.519348736e+09
# HELP node_memory_Active_file_bytes Memory information field Active_file_bytes.
# TYPE node_memory_Active_file_bytes gauge
node_memory_Active_file_bytes 1.393242112e+09
# HELP node_memory_AnonHugePages_bytes Memory information field AnonHugePages_bytes.
# TYPE node_memory_AnonHugePages_bytes gauge
node_memory_AnonHugePages_bytes 0
# HELP node_memory_AnonPages_bytes Memory information field AnonPages_bytes.
# TYPE node_memory_AnonPages_bytes gauge
node_memory_AnonPages_bytes 2.076749824e+09
# HELP node_memory_Bounce_bytes Memory information field Bounce_bytes.
# TYPE node_memory_Bounce_bytes gauge
node_memory_Bounce_bytes 0
# HELP node_memory_Buffers_bytes Memory information field Buffers_bytes.
# TYPE node_memory_Buffers_bytes gauge
node_memory_Buffers_bytes 1.251528704e+09
# HELP node_memory_Cached_bytes Memory information field Cached_bytes.
# TYPE node_memory_Cached_bytes gauge
node_memory_Cached_bytes 1.0421170176e+10
# HELP node_memory_CommitLimit_bytes Memory information field CommitLimit_bytes.
# TYPE node_memory_CommitLimit_bytes gauge
node_memory_CommitLimit_bytes 4.216721408e+10
# HELP node_memory_Committed_AS_bytes Memory information field Committed_AS_bytes.
# TYPE node_memory_Committed_AS_bytes gauge
node_memory_Committed_AS_bytes 8.73639936e+09
# HELP node_memory_DirectMap1G_bytes Memory information field DirectMap1G_bytes.
# TYPE node_memory_DirectMap1G_bytes gauge
node_memory_DirectMap1G_bytes 6.0129542144e+10
# HELP node_memory_DirectMap2M_bytes Memory information field DirectMap2M_bytes.
# TYPE node_memory_DirectMap2M_bytes gauge
node_memory_DirectMap2M_bytes 9.057599488e+09
# HELP node_memory_DirectMap4k_bytes Memory information field DirectMap4k_bytes.
# TYPE node_memory_DirectMap4k_bytes gauge
node_memory_DirectMap4k_bytes 3.29723904e+08
# HELP node_memory_Dirty_bytes Memory information field Dirty_bytes.
# TYPE node_memory_Dirty_bytes gauge
node_memory_Dirty_bytes 192512
# HELP node_memory_FileHugePages_bytes Memory information field FileHugePages_bytes.
# TYPE node_memory_FileHugePages_bytes gauge
node_memory_FileHugePages_bytes 0
# HELP node_memory_FilePmdMapped_bytes Memory information field FilePmdMapped_bytes.
# TYPE node_memory_FilePmdMapped_bytes gauge
node_memory_FilePmdMapped_bytes 0
# HELP node_memory_HardwareCorrupted_bytes Memory information field HardwareCorrupted_bytes.
# TYPE node_memory_HardwareCorrupted_bytes gauge
node_memory_HardwareCorrupted_bytes 0
# HELP node_memory_HugePages_Free Memory information field HugePages_Free.
# TYPE node_memory_HugePages_Free gauge
node_memory_HugePages_Free 0
# HELP node_memory_HugePages_Rsvd Memory information field HugePages_Rsvd.
# TYPE node_memory_HugePages_Rsvd gauge
node_memory_HugePages_Rsvd 0
# HELP node_memory_HugePages_Surp Memory information field HugePages_Surp.
# TYPE node_memory_HugePages_Surp gauge
node_memory_HugePages_Surp 0
# HELP node_memory_HugePages_Total Memory information field HugePages_Total.
# TYPE node_memory_HugePages_Total gauge
node_memory_HugePages_Total 0
# HELP node_memory_Hugepagesize_bytes Memory information field Hugepagesize_bytes.
# TYPE node_memory_Hugepagesize_bytes gauge
node_memory_Hugepagesize_bytes 2.097152e+06
# HELP node_memory_Hugetlb_bytes Memory information field Hugetlb_bytes.
# TYPE node_memory_Hugetlb_bytes gauge
node_memory_Hugetlb_bytes 0
# HELP node_memory_Inactive_anon_bytes Memory information field Inactive_anon_bytes.
# TYPE node_memory_Inactive_anon_bytes gauge
node_memory_Inactive_anon_bytes 0
# HELP node_memory_Inactive_bytes Memory information field Inactive_bytes.
# TYPE node_memory_Inactive_bytes gauge
node_memory_Inactive_bytes 1.018570752e+10
# HELP node_memory_Inactive_file_bytes Memory information field Inactive_file_bytes.
# TYPE node_memory_Inactive_file_bytes gauge
node_memory_Inactive_file_bytes 1.018570752e+10
# HELP node_memory_KReclaimable_bytes Memory information field KReclaimable_bytes.
# TYPE node_memory_KReclaimable_bytes gauge
node_memory_KReclaimable_bytes 7.46074112e+08
# HELP node_memory_KernelStack_bytes Memory information field KernelStack_bytes.
# TYPE node_memory_KernelStack_bytes gauge
node_memory_KernelStack_bytes 1.5335424e+07
# HELP node_memory_Mapped_bytes Memory information field Mapped_bytes.
# TYPE node_memory_Mapped_bytes gauge
node_memory_Mapped_bytes 1.078321152e+09
# HELP node_memory_MemAvailable_bytes Memory information field MemAvailable_bytes.
# TYPE node_memory_MemAvailable_bytes gauge
node_memory_MemAvailable_bytes 6.3645782016e+10
# HELP node_memory_MemFree_bytes Memory information field MemFree_bytes.
# TYPE node_memory_MemFree_bytes gauge
node_memory_MemFree_bytes 5.2068724736e+10
# HELP node_memory_MemTotal_bytes Memory information field MemTotal_bytes.
# TYPE node_memory_MemTotal_bytes gauge
node_memory_MemTotal_bytes 6.7154567168e+10
# HELP node_memory_Mlocked_bytes Memory information field Mlocked_bytes.
# TYPE node_memory_Mlocked_bytes gauge
node_memory_Mlocked_bytes 3.4418688e+07
# HELP node_memory_NFS_Unstable_bytes Memory information field NFS_Unstable_bytes.
# TYPE node_memory_NFS_Unstable_bytes gauge
node_memory_NFS_Unstable_bytes 0
# HELP node_memory_PageTables_bytes Memory information field PageTables_bytes.
# TYPE node_memory_PageTables_bytes gauge
node_memory_PageTables_bytes 2.8880896e+07
# HELP node_memory_Percpu_bytes Memory information field Percpu_bytes.
# TYPE node_memory_Percpu_bytes gauge
node_memory_Percpu_bytes 1.646592e+07
# HELP node_memory_SReclaimable_bytes Memory information field SReclaimable_bytes.
# TYPE node_memory_SReclaimable_bytes gauge
node_memory_SReclaimable_bytes 7.46074112e+08
# HELP node_memory_SUnreclaim_bytes Memory information field SUnreclaim_bytes.
# TYPE node_memory_SUnreclaim_bytes gauge
node_memory_SUnreclaim_bytes 2.27631104e+08
# HELP node_memory_SecPageTables_bytes Memory information field SecPageTables_bytes.
# TYPE node_memory_SecPageTables_bytes gauge
node_memory_SecPageTables_bytes 0
# HELP node_memory_ShmemHugePages_bytes Memory information field ShmemHugePages_bytes.
# TYPE node_memory_ShmemHugePages_bytes gauge
node_memory_ShmemHugePages_bytes 8.388608e+06
# HELP node_memory_ShmemPmdMapped_bytes Memory information field ShmemPmdMapped_bytes.
# TYPE node_memory_ShmemPmdMapped_bytes gauge
node_memory_ShmemPmdMapped_bytes 0
# HELP node_memory_Shmem_bytes Memory information field Shmem_bytes.
# TYPE node_memory_Shmem_bytes gauge
node_memory_Shmem_bytes 8.3931136e+07
# HELP node_memory_Slab_bytes Memory information field Slab_bytes.
# TYPE node_memory_Slab_bytes gauge
node_memory_Slab_bytes 9.73705216e+08
# HELP node_memory_SwapCached_bytes Memory information field SwapCached_bytes.
# TYPE node_memory_SwapCached_bytes gauge
node_memory_SwapCached_bytes 0
# HELP node_memory_SwapFree_bytes Memory information field SwapFree_bytes.
# TYPE node_memory_SwapFree_bytes gauge
node_memory_SwapFree_bytes 8.589930496e+09
# HELP node_memory_SwapTotal_bytes Memory information field SwapTotal_bytes.
# TYPE node_memory_SwapTotal_bytes gauge
node_memory_SwapTotal_bytes 8.589930496e+09
# HELP node_memory_Unaccepted_bytes Memory information field Unaccepted_bytes.
# TYPE node_memory_Unaccepted_bytes gauge
node_memory_Unaccepted_bytes 0
# HELP node_memory_Unevictable_bytes Memory information field Unevictable_bytes.
# TYPE node_memory_Unevictable_bytes gauge
node_memory_Unevictable_bytes 4.4265472e+07
# HELP node_memory_VmallocChunk_bytes Memory information field VmallocChunk_bytes.
# TYPE node_memory_VmallocChunk_bytes gauge
node_memory_VmallocChunk_bytes 0
# HELP node_memory_VmallocTotal_bytes Memory information field VmallocTotal_bytes.
# TYPE node_memory_VmallocTotal_bytes gauge
node_memory_VmallocTotal_bytes 3.5184372087808e+13
# HELP node_memory_VmallocUsed_bytes Memory information field VmallocUsed_bytes.
# TYPE node_memory_VmallocUsed_bytes gauge
node_memory_VmallocUsed_bytes 1.52649728e+08
# HELP node_memory_WritebackTmp_bytes Memory information field WritebackTmp_bytes.
# TYPE node_memory_WritebackTmp_bytes gauge
node_memory_WritebackTmp_bytes 0
# HELP node_memory_Writeback_bytes Memory information field Writeback_bytes.
# TYPE node_memory_Writeback_bytes gauge
node_memory_Writeback_bytes 0
# HELP node_memory_Zswap_bytes Memory information field Zswap_bytes.
# TYPE node_memory_Zswap_bytes gauge
node_memory_Zswap_bytes 0
# HELP node_memory_Zswapped_bytes Memory information field Zswapped_bytes.
# TYPE node_memory_Zswapped_bytes gauge
node_memory_Zswapped_bytes 0
# HELP node_netstat_Icmp6_InErrors Statistic Icmp6InErrors.
# TYPE node_netstat_Icmp6_InErrors untyped
node_netstat_Icmp6_InErrors 0
# HELP node_netstat_Icmp6_InMsgs Statistic Icmp6InMsgs.
# TYPE node_netstat_Icmp6_InMsgs untyped
node_netstat_Icmp6_InMsgs 122730
# HELP node_netstat_Icmp6_OutMsgs Statistic Icmp6OutMsgs.
# TYPE node_netstat_Icmp6_OutMsgs untyped
node_netstat_Icmp6_OutMsgs 20411
# HELP node_netstat_Icmp_InErrors Statistic IcmpInErrors.
# TYPE node_netstat_Icmp_InErrors untyped
node_netstat_Icmp_InErrors 0
# HELP node_netstat_Icmp_InMsgs Statistic IcmpInMsgs.
# TYPE node_netstat_Icmp_InMsgs untyped
node_netstat_Icmp_InMsgs 4
# HELP node_netstat_Icmp_OutMsgs Statistic IcmpOutMsgs.
# TYPE node_netstat_Icmp_OutMsgs untyped
node_netstat_Icmp_OutMsgs 45
# HELP node_netstat_Ip6_InOctets Statistic Ip6InOctets.
# TYPE node_netstat_Ip6_InOctets untyped
node_netstat_Ip6_InOctets 9.172897e+06
# HELP node_netstat_Ip6_OutOctets Statistic Ip6OutOctets.
# TYPE node_netstat_Ip6_OutOctets untyped
node_netstat_Ip6_OutOctets 1.341712e+06
# HELP node_netstat_IpExt_InOctets Statistic IpExtInOctets.
# TYPE node_netstat_IpExt_InOctets untyped
node_netstat_IpExt_InOctets 5.56402844e+08
# HELP node_netstat_IpExt_OutOctets Statistic IpExtOutOctets.
# TYPE node_netstat_IpExt_OutOctets untyped
node_netstat_IpExt_OutOctets 9.5490665e+07
# HELP node_netstat_Ip_Forwarding Statistic IpForwarding.
# TYPE node_netstat_Ip_Forwarding untyped
node_netstat_Ip_Forwarding 2
# HELP node_netstat_TcpExt_ListenDrops Statistic TcpExtListenDrops.
# TYPE node_netstat_TcpExt_ListenDrops untyped
node_netstat_TcpExt_ListenDrops 0
# HELP node_netstat_TcpExt_ListenOverflows Statistic TcpExtListenOverflows.
# TYPE node_netstat_TcpExt_ListenOverflows untyped
node_netstat_TcpExt_ListenOverflows 0
# HELP node_netstat_TcpExt_SyncookiesFailed Statistic TcpExtSyncookiesFailed.
# TYPE node_netstat_TcpExt_SyncookiesFailed untyped
node_netstat_TcpExt_SyncookiesFailed 0
# HELP node_netstat_TcpExt_SyncookiesRecv Statistic TcpExtSyncookiesRecv.
# TYPE node_netstat_TcpExt_SyncookiesRecv untyped
node_netstat_TcpExt_SyncookiesRecv 0
# HELP node_netstat_TcpExt_SyncookiesSent Statistic TcpExtSyncookiesSent.
# TYPE node_netstat_TcpExt_SyncookiesSent untyped
node_netstat_TcpExt_SyncookiesSent 0
# HELP node_netstat_TcpExt_TCPSynRetrans Statistic TcpExtTCPSynRetrans.
# TYPE node_netstat_TcpExt_TCPSynRetrans untyped
node_netstat_TcpExt_TCPSynRetrans 175
# HELP node_netstat_TcpExt_TCPTimeouts Statistic TcpExtTCPTimeouts.
# TYPE node_netstat_TcpExt_TCPTimeouts untyped
node_netstat_TcpExt_TCPTimeouts 503
# HELP node_netstat_Tcp_ActiveOpens Statistic TcpActiveOpens.
# TYPE node_netstat_Tcp_ActiveOpens untyped
node_netstat_Tcp_ActiveOpens 2219
# HELP node_netstat_Tcp_CurrEstab Statistic TcpCurrEstab.
# TYPE node_netstat_Tcp_CurrEstab untyped
node_netstat_Tcp_CurrEstab 11
# HELP node_netstat_Tcp_InErrs Statistic TcpInErrs.
# TYPE node_netstat_Tcp_InErrs untyped
node_netstat_Tcp_InErrs 0
# HELP node_netstat_Tcp_InSegs Statistic TcpInSegs.
# TYPE node_netstat_Tcp_InSegs untyped
node_netstat_Tcp_InSegs 396772
# HELP node_netstat_Tcp_OutRsts Statistic TcpOutRsts.
# TYPE node_netstat_Tcp_OutRsts untyped
node_netstat_Tcp_OutRsts 4037
# HELP node_netstat_Tcp_OutSegs Statistic TcpOutSegs.
# TYPE node_netstat_Tcp_OutSegs untyped
node_netstat_Tcp_OutSegs 263741
# HELP node_netstat_Tcp_PassiveOpens Statistic TcpPassiveOpens.
# TYPE node_netstat_Tcp_PassiveOpens untyped
node_netstat_Tcp_PassiveOpens 4106
# HELP node_netstat_Tcp_RetransSegs Statistic TcpRetransSegs.
# TYPE node_netstat_Tcp_RetransSegs untyped
node_netstat_Tcp_RetransSegs 707
# HELP node_netstat_Udp6_InDatagrams Statistic Udp6InDatagrams.
# TYPE node_netstat_Udp6_InDatagrams untyped
node_netstat_Udp6_InDatagrams 0
# HELP node_netstat_Udp6_InErrors Statistic Udp6InErrors.
# TYPE node_netstat_Udp6_InErrors untyped
node_netstat_Udp6_InErrors 0
# HELP node_netstat_Udp6_NoPorts Statistic Udp6NoPorts.
# TYPE node_netstat_Udp6_NoPorts untyped
node_netstat_Udp6_NoPorts 0
# HELP node_netstat_Udp6_OutDatagrams Statistic Udp6OutDatagrams.
# TYPE node_netstat_Udp6_OutDatagrams untyped
node_netstat_Udp6_OutDatagrams 0
# HELP node_netstat_Udp6_RcvbufErrors Statistic Udp6RcvbufErrors.
# TYPE node_netstat_Udp6_RcvbufErrors untyped
node_netstat_Udp6_RcvbufErrors 0
# HELP node_netstat_Udp6_SndbufErrors Statistic Udp6SndbufErrors.
# TYPE node_netstat_Udp6_SndbufErrors untyped
node_netstat_Udp6_SndbufErrors 0
# HELP node_netstat_UdpLite6_InErrors Statistic UdpLite6InErrors.
# TYPE node_netstat_UdpLite6_InErrors untyped
node_netstat_UdpLite6_InErrors 0
# HELP node_netstat_UdpLite_InErrors Statistic UdpLiteInErrors.
# TYPE node_netstat_UdpLite_InErrors untyped
node_netstat_UdpLite_InErrors 0
# HELP node_netstat_Udp_InDatagrams Statistic UdpInDatagrams.
# TYPE node_netstat_Udp_InDatagrams untyped
node_netstat_Udp_InDatagrams 1679
# HELP node_netstat_Udp_InErrors Statistic UdpInErrors.
# TYPE node_netstat_Udp_InErrors untyped
node_netstat_Udp_InErrors 0
# HELP node_netstat_Udp_NoPorts Statistic UdpNoPorts.
# TYPE node_netstat_Udp_NoPorts untyped
node_netstat_Udp_NoPorts 41
# HELP node_netstat_Udp_OutDatagrams Statistic UdpOutDatagrams.
# TYPE node_netstat_Udp_OutDatagrams untyped
node_netstat_Udp_OutDatagrams 1734
# HELP node_netstat_Udp_RcvbufErrors Statistic UdpRcvbufErrors.
# TYPE node_netstat_Udp_RcvbufErrors untyped
node_netstat_Udp_RcvbufErrors 0
# HELP node_netstat_Udp_SndbufErrors Statistic UdpSndbufErrors.
# TYPE node_netstat_Udp_SndbufErrors untyped
node_netstat_Udp_SndbufErrors 0
# HELP node_network_address_assign_type Network device property: address_assign_type
# TYPE node_network_address_assign_type gauge
node_network_address_assign_type{device="enp0s31f6"} 0
node_network_address_assign_type{device="lo"} 0
node_network_address_assign_type{device="veth100i0"} 3
node_network_address_assign_type{device="veth101i0"} 3
node_network_address_assign_type{device="veth102i0"} 3
node_network_address_assign_type{device="vmbr0"} 3
node_network_address_assign_type{device="wlp0s20f3"} 0
# HELP node_network_carrier Network device property: carrier
# TYPE node_network_carrier gauge
node_network_carrier{device="enp0s31f6"} 1
node_network_carrier{device="lo"} 1
node_network_carrier{device="veth100i0"} 1
node_network_carrier{device="veth101i0"} 1
node_network_carrier{device="veth102i0"} 1
node_network_carrier{device="vmbr0"} 1
# HELP node_network_carrier_changes_total Network device property: carrier_changes_total
# TYPE node_network_carrier_changes_total counter
node_network_carrier_changes_total{device="enp0s31f6"} 2
node_network_carrier_changes_total{device="lo"} 0
node_network_carrier_changes_total{device="veth100i0"} 2
node_network_carrier_changes_total{device="veth101i0"} 2
node_network_carrier_changes_total{device="veth102i0"} 2
node_network_carrier_changes_total{device="vmbr0"} 2
node_network_carrier_changes_total{device="wlp0s20f3"} 0
# HELP node_network_carrier_down_changes_total Network device property: carrier_down_changes_total
# TYPE node_network_carrier_down_changes_total counter
node_network_carrier_down_changes_total{device="enp0s31f6"} 1
node_network_carrier_down_changes_total{device="lo"} 0
node_network_carrier_down_changes_total{device="veth100i0"} 1
node_network_carrier_down_changes_total{device="veth101i0"} 1
node_network_carrier_down_changes_total{device="veth102i0"} 1
node_network_carrier_down_changes_total{device="vmbr0"} 1
node_network_carrier_down_changes_total{device="wlp0s20f3"} 0
# HELP node_network_carrier_up_changes_total Network device property: carrier_up_changes_total
# TYPE node_network_carrier_up_changes_total counter
node_network_carrier_up_changes_total{device="enp0s31f6"} 1
node_network_carrier_up_changes_total{device="lo"} 0
node_network_carrier_up_changes_total{device="veth100i0"} 1
node_network_carrier_up_changes_total{device="veth101i0"} 1
node_network_carrier_up_changes_total{device="veth102i0"} 1
node_network_carrier_up_changes_total{device="vmbr0"} 1
node_network_carrier_up_changes_total{device="wlp0s20f3"} 0
# HELP node_network_device_id Network device property: device_id
# TYPE node_network_device_id gauge
node_network_device_id{device="enp0s31f6"} 0
node_network_device_id{device="lo"} 0
node_network_device_id{device="veth100i0"} 0
node_network_device_id{device="veth101i0"} 0
node_network_device_id{device="veth102i0"} 0
node_network_device_id{device="vmbr0"} 0
node_network_device_id{device="wlp0s20f3"} 0
# HELP node_network_dormant Network device property: dormant
# TYPE node_network_dormant gauge
node_network_dormant{device="enp0s31f6"} 0
node_network_dormant{device="lo"} 0
node_network_dormant{device="veth100i0"} 0
node_network_dormant{device="veth101i0"} 0
node_network_dormant{device="veth102i0"} 0
node_network_dormant{device="vmbr0"} 0
# HELP node_network_flags Network device property: flags
# TYPE node_network_flags gauge
node_network_flags{device="enp0s31f6"} 4867
node_network_flags{device="lo"} 9
node_network_flags{device="veth100i0"} 4867
node_network_flags{device="veth101i0"} 4867
node_network_flags{device="veth102i0"} 4867
node_network_flags{device="vmbr0"} 4099
node_network_flags{device="wlp0s20f3"} 4098
# HELP node_network_iface_id Network device property: iface_id
# TYPE node_network_iface_id gauge
node_network_iface_id{device="enp0s31f6"} 2
node_network_iface_id{device="lo"} 1
node_network_iface_id{device="veth100i0"} 5
node_network_iface_id{device="veth101i0"} 6
node_network_iface_id{device="veth102i0"} 7
node_network_iface_id{device="vmbr0"} 4
node_network_iface_id{device="wlp0s20f3"} 3
# HELP node_network_iface_link Network device property: iface_link
# TYPE node_network_iface_link gauge
node_network_iface_link{device="enp0s31f6"} 2
node_network_iface_link{device="lo"} 1
node_network_iface_link{device="veth100i0"} 2
node_network_iface_link{device="veth101i0"} 2
node_network_iface_link{device="veth102i0"} 2
node_network_iface_link{device="vmbr0"} 4
node_network_iface_link{device="wlp0s20f3"} 3
# HELP node_network_iface_link_mode Network device property: iface_link_mode
# TYPE node_network_iface_link_mode gauge
node_network_iface_link_mode{device="enp0s31f6"} 0
node_network_iface_link_mode{device="lo"} 0
node_network_iface_link_mode{device="veth100i0"} 0
node_network_iface_link_mode{device="veth101i0"} 0
node_network_iface_link_mode{device="veth102i0"} 0
node_network_iface_link_mode{device="vmbr0"} 0
node_network_iface_link_mode{device="wlp0s20f3"} 0
# HELP node_network_info Non-numeric data from /sys/class/net/<iface>, value is always 1.
# TYPE node_network_info gauge
node_network_info{address="00:00:00:00:00:00",broadcast="00:00:00:00:00:00",device="lo",duplex="",ifalias="",operstate="unknown"} 1
node_network_info{address="88:d8:2e:6c:a5:52",broadcast="ff:ff:ff:ff:ff:ff",device="wlp0s20f3",duplex="",ifalias="",operstate="down"} 1
node_network_info{address="c0:25:a5:bf:e9:4a",broadcast="ff:ff:ff:ff:ff:ff",device="enp0s31f6",duplex="full",ifalias="",operstate="up"} 1
node_network_info{address="c0:25:a5:bf:e9:4a",broadcast="ff:ff:ff:ff:ff:ff",device="vmbr0",duplex="unknown",ifalias="",operstate="up"} 1
node_network_info{address="fe:1f:35:f5:97:d5",broadcast="ff:ff:ff:ff:ff:ff",device="veth102i0",duplex="full",ifalias="",operstate="up"} 1
node_network_info{address="fe:63:fd:13:d7:b9",broadcast="ff:ff:ff:ff:ff:ff",device="veth100i0",duplex="full",ifalias="",operstate="up"} 1
node_network_info{address="fe:7c:c3:d0:01:96",broadcast="ff:ff:ff:ff:ff:ff",device="veth101i0",duplex="full",ifalias="",operstate="up"} 1
# HELP node_network_mtu_bytes Network device property: mtu_bytes
# TYPE node_network_mtu_bytes gauge
node_network_mtu_bytes{device="enp0s31f6"} 1500
node_network_mtu_bytes{device="lo"} 65536
node_network_mtu_bytes{device="veth100i0"} 1500
node_network_mtu_bytes{device="veth101i0"} 1500
node_network_mtu_bytes{device="veth102i0"} 1500
node_network_mtu_bytes{device="vmbr0"} 1500
node_network_mtu_bytes{device="wlp0s20f3"} 1500
# HELP node_network_name_assign_type Network device property: name_assign_type
# TYPE node_network_name_assign_type gauge
node_network_name_assign_type{device="enp0s31f6"} 4
node_network_name_assign_type{device="lo"} 2
node_network_name_assign_type{device="veth100i0"} 3
node_network_name_assign_type{device="veth101i0"} 3
node_network_name_assign_type{device="veth102i0"} 3
node_network_name_assign_type{device="vmbr0"} 3
node_network_name_assign_type{device="wlp0s20f3"} 4
# HELP node_network_net_dev_group Network device property: net_dev_group
# TYPE node_network_net_dev_group gauge
node_network_net_dev_group{device="enp0s31f6"} 0
node_network_net_dev_group{device="lo"} 0
node_network_net_dev_group{device="veth100i0"} 0
node_network_net_dev_group{device="veth101i0"} 0
node_network_net_dev_group{device="veth102i0"} 0
node_network_net_dev_group{device="vmbr0"} 0
node_network_net_dev_group{device="wlp0s20f3"} 0
# HELP node_network_protocol_type Network device property: protocol_type
# TYPE node_network_protocol_type gauge
node_network_protocol_type{device="enp0s31f6"} 1
node_network_protocol_type{device="lo"} 772
node_network_protocol_type{device="veth100i0"} 1
node_network_protocol_type{device="veth101i0"} 1
node_network_protocol_type{device="veth102i0"} 1
node_network_protocol_type{device="vmbr0"} 1
node_network_protocol_type{device="wlp0s20f3"} 1
# HELP node_network_receive_bytes_total Network device statistic receive_bytes.
# TYPE node_network_receive_bytes_total counter
node_network_receive_bytes_total{device="enp0s31f6"} 1.0383682171e+10
node_network_receive_bytes_total{device="veth100i0"} 2.0407745e+07
node_network_receive_bytes_total{device="veth101i0"} 1.346511755e+09
node_network_receive_bytes_total{device="veth102i0"} 1.55142489e+08
node_network_receive_bytes_total{device="vmbr0"} 5.50906022e+08
node_network_receive_bytes_total{device="wlp0s20f3"} 0
# HELP node_network_receive_compressed_total Network device statistic receive_compressed.
# TYPE node_network_receive_compressed_total counter
node_network_receive_compressed_total{device="enp0s31f6"} 0
node_network_receive_compressed_total{device="veth100i0"} 0
node_network_receive_compressed_total{device="veth101i0"} 0
node_network_receive_compressed_total{device="veth102i0"} 0
node_network_receive_compressed_total{device="vmbr0"} 0
node_network_receive_compressed_total{device="wlp0s20f3"} 0
# HELP node_network_receive_drop_total Network device statistic receive_drop.
# TYPE node_network_receive_drop_total counter
node_network_receive_drop_total{device="enp0s31f6"} 0
node_network_receive_drop_total{device="veth100i0"} 0
node_network_receive_drop_total{device="veth101i0"} 0
node_network_receive_drop_total{device="veth102i0"} 0
node_network_receive_drop_total{device="vmbr0"} 211482
node_network_receive_drop_total{device="wlp0s20f3"} 0
# HELP node_network_receive_errs_total Network device statistic receive_errs.
# TYPE node_network_receive_errs_total counter
node_network_receive_errs_total{device="enp0s31f6"} 0
node_network_receive_errs_total{device="veth100i0"} 0
node_network_receive_errs_total{device="veth101i0"} 0
node_network_receive_errs_total{device="veth102i0"} 0
node_network_receive_errs_total{device="vmbr0"} 0
node_network_receive_errs_total{device="wlp0s20f3"} 0
# HELP node_network_receive_fifo_total Network device statistic receive_fifo.
# TYPE node_network_receive_fifo_total counter
node_network_receive_fifo_total{device="enp0s31f6"} 0
node_network_receive_fifo_total{device="veth100i0"} 0
node_network_receive_fifo_total{device="veth101i0"} 0
node_network_receive_fifo_total{device="veth102i0"} 0
node_network_receive_fifo_total{device="vmbr0"} 0
node_network_receive_fifo_total{device="wlp0s20f3"} 0
# HELP node_network_receive_frame_total Network device statistic receive_frame.
# TYPE node_network_receive_frame_total counter
node_network_receive_frame_total{device="enp0s31f6"} 0
node_network_receive_frame_total{device="veth100i0"} 0
node_network_receive_frame_total{device="veth101i0"} 0
node_network_receive_frame_total{device="veth102i0"} 0
node_network_receive_frame_total{device="vmbr0"} 0
node_network_receive_frame_total{device="wlp0s20f3"} 0
# HELP node_network_receive_multicast_total Network device statistic receive_multicast.
# TYPE node_network_receive_multicast_total counter
node_network_receive_multicast_total{device="enp0s31f6"} 386838
node_network_receive_multicast_total{device="veth100i0"} 0
node_network_receive_multicast_total{device="veth101i0"} 0
node_network_receive_multicast_total{device="veth102i0"} 0
node_network_receive_multicast_total{device="vmbr0"} 209925
node_network_receive_multicast_total{device="wlp0s20f3"} 0
# HELP node_network_receive_nohandler_total Network device statistic receive_nohandler.
# TYPE node_network_receive_nohandler_total counter
node_network_receive_nohandler_total{device="enp0s31f6"} 0
node_network_receive_nohandler_total{device="veth100i0"} 0
node_network_receive_nohandler_total{device="veth101i0"} 0
node_network_receive_nohandler_total{device="veth102i0"} 0
node_network_receive_nohandler_total{device="vmbr0"} 0
node_network_receive_nohandler_total{device="wlp0s20f3"} 0
# HELP node_network_receive_packets_total Network device statistic receive_packets.
# TYPE node_network_receive_packets_total counter
node_network_receive_packets_total{device="enp0s31f6"} 1.3687229e+07
node_network_receive_packets_total{device="veth100i0"} 268513
node_network_receive_packets_total{device="veth101i0"} 9.644778e+06
node_network_receive_packets_total{device="veth102i0"} 866380
node_network_receive_packets_total{device="vmbr0"} 1.166433e+06
node_network_receive_packets_total{device="wlp0s20f3"} 0
# HELP node_network_speed_bytes Network device property: speed_bytes
# TYPE node_network_speed_bytes gauge
node_network_speed_bytes{device="enp0s31f6"} 1.25e+08
node_network_speed_bytes{device="veth100i0"} 1.25e+09
node_network_speed_bytes{device="veth101i0"} 1.25e+09
node_network_speed_bytes{device="veth102i0"} 1.25e+09
node_network_speed_bytes{device="vmbr0"} 1.25e+09
# HELP node_network_transmit_bytes_total Network device statistic transmit_bytes.
# TYPE node_network_transmit_bytes_total counter
node_network_transmit_bytes_total{device="enp0s31f6"} 1.427888348e+09
node_network_transmit_bytes_total{device="veth100i0"} 2.41340906e+08
node_network_transmit_bytes_total{device="veth101i0"} 9.72922465e+09
node_network_transmit_bytes_total{device="veth102i0"} 2.04719749e+08
node_network_transmit_bytes_total{device="vmbr0"} 6.7436886e+07
node_network_transmit_bytes_total{device="wlp0s20f3"} 0
# HELP node_network_transmit_carrier_total Network device statistic transmit_carrier.
# TYPE node_network_transmit_carrier_total counter
node_network_transmit_carrier_total{device="enp0s31f6"} 0
node_network_transmit_carrier_total{device="veth100i0"} 0
node_network_transmit_carrier_total{device="veth101i0"} 0
node_network_transmit_carrier_total{device="veth102i0"} 0
node_network_transmit_carrier_total{device="vmbr0"} 0
node_network_transmit_carrier_total{device="wlp0s20f3"} 0
# HELP node_network_transmit_colls_total Network device statistic transmit_colls.
# TYPE node_network_transmit_colls_total counter
node_network_transmit_colls_total{device="enp0s31f6"} 0
node_network_transmit_colls_total{device="veth100i0"} 0
node_network_transmit_colls_total{device="veth101i0"} 0
node_network_transmit_colls_total{device="veth102i0"} 0
node_network_transmit_colls_total{device="vmbr0"} 0
node_network_transmit_colls_total{device="wlp0s20f3"} 0
# HELP node_network_transmit_compressed_total Network device statistic transmit_compressed.
# TYPE node_network_transmit_compressed_total counter
node_network_transmit_compressed_total{device="enp0s31f6"} 0
node_network_transmit_compressed_total{device="veth100i0"} 0
node_network_transmit_compressed_total{device="veth101i0"} 0
node_network_transmit_compressed_total{device="veth102i0"} 0
node_network_transmit_compressed_total{device="vmbr0"} 0
node_network_transmit_compressed_total{device="wlp0s20f3"} 0
# HELP node_network_transmit_drop_total Network device statistic transmit_drop.
# TYPE node_network_transmit_drop_total counter
node_network_transmit_drop_total{device="enp0s31f6"} 0
node_network_transmit_drop_total{device="veth100i0"} 0
node_network_transmit_drop_total{device="veth101i0"} 0
node_network_transmit_drop_total{device="veth102i0"} 0
node_network_transmit_drop_total{device="vmbr0"} 0
node_network_transmit_drop_total{device="wlp0s20f3"} 0
# HELP node_network_transmit_errs_total Network device statistic transmit_errs.
# TYPE node_network_transmit_errs_total counter
node_network_transmit_errs_total{device="enp0s31f6"} 0
node_network_transmit_errs_total{device="veth100i0"} 0
node_network_transmit_errs_total{device="veth101i0"} 0
node_network_transmit_errs_total{device="veth102i0"} 0
node_network_transmit_errs_total{device="vmbr0"} 0
node_network_transmit_errs_total{device="wlp0s20f3"} 0
# HELP node_network_transmit_fifo_total Network device statistic transmit_fifo.
# TYPE node_network_transmit_fifo_total counter
node_network_transmit_fifo_total{device="enp0s31f6"} 0
node_network_transmit_fifo_total{device="veth100i0"} 0
node_network_transmit_fifo_total{device="veth101i0"} 0
node_network_transmit_fifo_total{device="veth102i0"} 0
node_network_transmit_fifo_total{device="vmbr0"} 0
node_network_transmit_fifo_total{device="wlp0s20f3"} 0
# HELP node_network_transmit_packets_total Network device statistic transmit_packets.
# TYPE node_network_transmit_packets_total counter
node_network_transmit_packets_total{device="enp0s31f6"} 9.6893e+06
node_network_transmit_packets_total{device="veth100i0"} 1.480362e+06
node_network_transmit_packets_total{device="veth101i0"} 1.251932e+07
node_network_transmit_packets_total{device="veth102i0"} 2.247376e+06
node_network_transmit_packets_total{device="vmbr0"} 244529
node_network_transmit_packets_total{device="wlp0s20f3"} 0
# HELP node_network_transmit_queue_length Network device property: transmit_queue_length
# TYPE node_network_transmit_queue_length gauge
node_network_transmit_queue_length{device="enp0s31f6"} 1000
node_network_transmit_queue_length{device="lo"} 1000
node_network_transmit_queue_length{device="veth100i0"} 1000
node_network_transmit_queue_length{device="veth101i0"} 1000
node_network_transmit_queue_length{device="veth102i0"} 1000
node_network_transmit_queue_length{device="vmbr0"} 1000
node_network_transmit_queue_length{device="wlp0s20f3"} 1000
# HELP node_network_up Value is 1 if operstate is 'up', 0 otherwise.
# TYPE node_network_up gauge
node_network_up{device="enp0s31f6"} 1
node_network_up{device="lo"} 0
node_network_up{device="veth100i0"} 1
node_network_up{device="veth101i0"} 1
node_network_up{device="veth102i0"} 1
node_network_up{device="vmbr0"} 1
node_network_up{device="wlp0s20f3"} 0
# HELP node_nf_conntrack_entries Number of currently allocated flow entries for connection tracking.
# TYPE node_nf_conntrack_entries gauge
node_nf_conntrack_entries 456
# HELP node_nf_conntrack_entries_limit Maximum size of connection tracking table.
# TYPE node_nf_conntrack_entries_limit gauge
node_nf_conntrack_entries_limit 262144
# HELP node_nfs_connections_total Total number of NFSd TCP connections.
# TYPE node_nfs_connections_total counter
node_nfs_connections_total 0
# HELP node_nfs_packets_total Total NFSd network packets (sent+received) by protocol type.
# TYPE node_nfs_packets_total counter
node_nfs_packets_total{protocol="tcp"} 0
node_nfs_packets_total{protocol="udp"} 0
# HELP node_nfs_requests_total Number of NFS procedures invoked.
# TYPE node_nfs_requests_total counter
node_nfs_requests_total{method="Access",proto="3"} 0
node_nfs_requests_total{method="Access",proto="4"} 2
node_nfs_requests_total{method="Allocate",proto="4"} 0
node_nfs_requests_total{method="BindConnToSession",proto="4"} 0
node_nfs_requests_total{method="Clone",proto="4"} 0
node_nfs_requests_total{method="Close",proto="4"} 0
node_nfs_requests_total{method="Commit",proto="3"} 0
node_nfs_requests_total{method="Commit",proto="4"} 0
node_nfs_requests_total{method="Create",proto="2"} 0
node_nfs_requests_total{method="Create",proto="3"} 0
node_nfs_requests_total{method="Create",proto="4"} 0
node_nfs_requests_total{method="CreateSession",proto="4"} 1
node_nfs_requests_total{method="DeAllocate",proto="4"} 0
node_nfs_requests_total{method="DelegReturn",proto="4"} 0
node_nfs_requests_total{method="DestroyClientID",proto="4"} 0
node_nfs_requests_total{method="DestroySession",proto="4"} 0
node_nfs_requests_total{method="ExchangeID",proto="4"} 2
node_nfs_requests_total{method="FreeStateID",proto="4"} 0
node_nfs_requests_total{method="FsInfo",proto="3"} 0
node_nfs_requests_total{method="FsInfo",proto="4"} 4
node_nfs_requests_total{method="FsLocations",proto="4"} 0
node_nfs_requests_total{method="FsStat",proto="2"} 0
node_nfs_requests_total{method="FsStat",proto="3"} 0
node_nfs_requests_total{method="FsidPresent",proto="4"} 0
node_nfs_requests_total{method="GetACL",proto="4"} 0
node_nfs_requests_total{method="GetAttr",proto="2"} 0
node_nfs_requests_total{method="GetAttr",proto="3"} 0
node_nfs_requests_total{method="GetDeviceInfo",proto="4"} 0
node_nfs_requests_total{method="GetDeviceList",proto="4"} 0
node_nfs_requests_total{method="GetLeaseTime",proto="4"} 0
node_nfs_requests_total{method="Getattr",proto="4"} 4
node_nfs_requests_total{method="LayoutCommit",proto="4"} 0
node_nfs_requests_total{method="LayoutGet",proto="4"} 0
node_nfs_requests_total{method="LayoutReturn",proto="4"} 0
node_nfs_requests_total{method="LayoutStats",proto="4"} 0
node_nfs_requests_total{method="Link",proto="2"} 0
node_nfs_requests_total{method="Link",proto="3"} 0
node_nfs_requests_total{method="Link",proto="4"} 0
node_nfs_requests_total{method="Lock",proto="4"} 0
node_nfs_requests_total{method="Lockt",proto="4"} 0
node_nfs_requests_total{method="Locku",proto="4"} 0
node_nfs_requests_total{method="Lookup",proto="2"} 0
node_nfs_requests_total{method="Lookup",proto="3"} 0
node_nfs_requests_total{method="Lookup",proto="4"} 4
node_nfs_requests_total{method="LookupRoot",proto="4"} 1
node_nfs_requests_total{method="MkDir",proto="2"} 0
node_nfs_requests_total{method="MkDir",proto="3"} 0
node_nfs_requests_total{method="MkNod",proto="3"} 0
node_nfs_requests_total{method="Null",proto="2"} 0
node_nfs_requests_total{method="Null",proto="3"} 0
node_nfs_requests_total{method="Null",proto="4"} 2
node_nfs_requests_total{method="Open",proto="4"} 0
node_nfs_requests_total{method="OpenConfirm",proto="4"} 0
node_nfs_requests_total{method="OpenDowngrade",proto="4"} 0
node_nfs_requests_total{method="OpenNoattr",proto="4"} 0
node_nfs_requests_total{method="PathConf",proto="3"} 0
node_nfs_requests_total{method="Pathconf",proto="4"} 3
node_nfs_requests_total{method="Read",proto="2"} 0
node_nfs_requests_total{method="Read",proto="3"} 0
node_nfs_requests_total{method="Read",proto="4"} 0
node_nfs_requests_total{method="ReadDir",proto="2"} 0
node_nfs_requests_total{method="ReadDir",proto="3"} 0
node_nfs_requests_total{method="ReadDir",proto="4"} 0
node_nfs_requests_total{method="ReadDirPlus",proto="3"} 0
node_nfs_requests_total{method="ReadLink",proto="2"} 0
node_nfs_requests_total{method="ReadLink",proto="3"} 0
node_nfs_requests_total{method="ReadLink",proto="4"} 0
node_nfs_requests_total{method="ReclaimComplete",proto="4"} 1
node_nfs_requests_total{method="ReleaseLockowner",proto="4"} 0
node_nfs_requests_total{method="Remove",proto="2"} 0
node_nfs_requests_total{method="Remove",proto="3"} 0
node_nfs_requests_total{method="Remove",proto="4"} 0
node_nfs_requests_total{method="Rename",proto="2"} 0
node_nfs_requests_total{method="Rename",proto="3"} 0
node_nfs_requests_total{method="Rename",proto="4"} 0
node_nfs_requests_total{method="Renew",proto="4"} 0
node_nfs_requests_total{method="RmDir",proto="2"} 0
node_nfs_requests_total{method="RmDir",proto="3"} 0
node_nfs_requests_total{method="Root",proto="2"} 0
node_nfs_requests_total{method="Secinfo",proto="4"} 0
node_nfs_requests_total{method="SecinfoNoName",proto="4"} 1
node_nfs_requests_total{method="Seek",proto="4"} 0
node_nfs_requests_total{method="Sequence",proto="4"} 5218
node_nfs_requests_total{method="ServerCaps",proto="4"} 7
node_nfs_requests_total{method="SetACL",proto="4"} 0
node_nfs_requests_total{method="SetAttr",proto="2"} 0
node_nfs_requests_total{method="SetAttr",proto="3"} 0
node_nfs_requests_total{method="SetClientID",proto="4"} 0
node_nfs_requests_total{method="SetClientIDConfirm",proto="4"} 0
node_nfs_requests_total{method="Setattr",proto="4"} 0
node_nfs_requests_total{method="StatFs",proto="4"} 0
node_nfs_requests_total{method="SymLink",proto="2"} 0
node_nfs_requests_total{method="SymLink",proto="3"} 0
node_nfs_requests_total{method="Symlink",proto="4"} 0
node_nfs_requests_total{method="TestStateID",proto="4"} 0
node_nfs_requests_total{method="WrCache",proto="2"} 0
node_nfs_requests_total{method="Write",proto="2"} 0
node_nfs_requests_total{method="Write",proto="3"} 0
node_nfs_requests_total{method="Write",proto="4"} 0
# HELP node_nfs_rpc_authentication_refreshes_total Number of RPC authentication refreshes performed.
# TYPE node_nfs_rpc_authentication_refreshes_total counter
node_nfs_rpc_authentication_refreshes_total 5250
# HELP node_nfs_rpc_retransmissions_total Number of RPC transmissions performed.
# TYPE node_nfs_rpc_retransmissions_total counter
node_nfs_rpc_retransmissions_total 0
# HELP node_nfs_rpcs_total Total number of RPCs performed.
# TYPE node_nfs_rpcs_total counter
node_nfs_rpcs_total 5250
# HELP node_nvme_info Non-numeric data from /sys/class/nvme/<device>, value is always 1.
# TYPE node_nvme_info gauge
node_nvme_info{device="nvme0",firmware_revision="21113012",model="PC SN530 NVMe WDC 256GB",serial="214219800494",state="live"} 1
# HELP node_os_info A metric with a constant '1' value labeled by build_id, id, id_like, image_id, image_version, name, pretty_name, variant, variant_id, version, version_codename, version_id.
# TYPE node_os_info gauge
node_os_info{build_id="",id="debian",id_like="",image_id="",image_version="",name="Debian GNU/Linux",pretty_name="Debian GNU/Linux 12 (bookworm)",variant="",variant_id="",version="12 (bookworm)",version_codename="bookworm",version_id="12"} 1
# HELP node_os_version Metric containing the major.minor part of the OS version.
# TYPE node_os_version gauge
node_os_version{id="debian",id_like="",name="Debian GNU/Linux"} 12
# HELP node_power_supply_current_ampere current_ampere value of /sys/class/power_supply/<power_supply>.
# TYPE node_power_supply_current_ampere gauge
node_power_supply_current_ampere{power_supply="ucsi-source-psy-USBC000:001"} 0
# HELP node_power_supply_current_max current_max value of /sys/class/power_supply/<power_supply>.
# TYPE node_power_supply_current_max gauge
node_power_supply_current_max{power_supply="ucsi-source-psy-USBC000:001"} 0
# HELP node_power_supply_info info of /sys/class/power_supply/<power_supply>.
# TYPE node_power_supply_info gauge
node_power_supply_info{power_supply="ucsi-source-psy-USBC000:001",scope="Device",type="USB",usb_type="[C] PD PD_PPS"} 1
# HELP node_power_supply_online online value of /sys/class/power_supply/<power_supply>.
# TYPE node_power_supply_online gauge
node_power_supply_online{power_supply="ucsi-source-psy-USBC000:001"} 0
# HELP node_power_supply_voltage_max voltage_max value of /sys/class/power_supply/<power_supply>.
# TYPE node_power_supply_voltage_max gauge
node_power_supply_voltage_max{power_supply="ucsi-source-psy-USBC000:001"} 5
# HELP node_power_supply_voltage_min voltage_min value of /sys/class/power_supply/<power_supply>.
# TYPE node_power_supply_voltage_min gauge
node_power_supply_voltage_min{power_supply="ucsi-source-psy-USBC000:001"} 5
# HELP node_power_supply_voltage_volt voltage_volt value of /sys/class/power_supply/<power_supply>.
# TYPE node_power_supply_voltage_volt gauge
node_power_supply_voltage_volt{power_supply="ucsi-source-psy-USBC000:001"} 5
# HELP node_pressure_cpu_waiting_seconds_total Total time in seconds that processes have waited for CPU time
# TYPE node_pressure_cpu_waiting_seconds_total counter
node_pressure_cpu_waiting_seconds_total 252.87249400000002
# HELP node_pressure_io_stalled_seconds_total Total time in seconds no process could make progress due to IO congestion
# TYPE node_pressure_io_stalled_seconds_total counter
node_pressure_io_stalled_seconds_total 656.7367360000001
# HELP node_pressure_io_waiting_seconds_total Total time in seconds that processes have waited due to IO congestion
# TYPE node_pressure_io_waiting_seconds_total counter
node_pressure_io_waiting_seconds_total 662.633101
# HELP node_pressure_memory_stalled_seconds_total Total time in seconds no process could make progress due to memory congestion
# TYPE node_pressure_memory_stalled_seconds_total counter
node_pressure_memory_stalled_seconds_total 0.000212
# HELP node_pressure_memory_waiting_seconds_total Total time in seconds that processes have waited for memory
# TYPE node_pressure_memory_waiting_seconds_total counter
node_pressure_memory_waiting_seconds_total 0.000232
# HELP node_procs_blocked Number of processes blocked waiting for I/O to complete.
# TYPE node_procs_blocked gauge
node_procs_blocked 0
# HELP node_procs_running Number of processes in runnable state.
# TYPE node_procs_running gauge
node_procs_running 1
# HELP node_reboot_required Node reboot is required for software updates.
# TYPE node_reboot_required gauge
node_reboot_required 0
# HELP node_schedstat_running_seconds_total Number of seconds CPU spent running a process.
# TYPE node_schedstat_running_seconds_total counter
node_schedstat_running_seconds_total{cpu="0"} 1166.638688215
node_schedstat_running_seconds_total{cpu="1"} 1169.128754887
node_schedstat_running_seconds_total{cpu="10"} 2936.889584297
node_schedstat_running_seconds_total{cpu="11"} 760.875221518
node_schedstat_running_seconds_total{cpu="2"} 2750.830170138
node_schedstat_running_seconds_total{cpu="3"} 960.760585025
node_schedstat_running_seconds_total{cpu="4"} 1022.026319229
node_schedstat_running_seconds_total{cpu="5"} 3081.837339862
node_schedstat_running_seconds_total{cpu="6"} 483.160997138
node_schedstat_running_seconds_total{cpu="7"} 552.064791482
node_schedstat_running_seconds_total{cpu="8"} 2574.275425143
node_schedstat_running_seconds_total{cpu="9"} 693.091944596
# HELP node_schedstat_timeslices_total Number of timeslices executed by CPU.
# TYPE node_schedstat_timeslices_total counter
node_schedstat_timeslices_total{cpu="0"} 1.1678526e+07
node_schedstat_timeslices_total{cpu="1"} 1.1513148e+07
node_schedstat_timeslices_total{cpu="10"} 5.1620182e+07
node_schedstat_timeslices_total{cpu="11"} 3.081149e+06
node_schedstat_timeslices_total{cpu="2"} 5.0446603e+07
node_schedstat_timeslices_total{cpu="3"} 5.410642e+06
node_schedstat_timeslices_total{cpu="4"} 1.1946076e+07
node_schedstat_timeslices_total{cpu="5"} 5.2081846e+07
node_schedstat_timeslices_total{cpu="6"} 5.08663e+06
node_schedstat_timeslices_total{cpu="7"} 4.634239e+06
node_schedstat_timeslices_total{cpu="8"} 5.0000904e+07
node_schedstat_timeslices_total{cpu="9"} 4.355106e+06
# HELP node_schedstat_waiting_seconds_total Number of seconds spent by processing waiting for this CPU.
# TYPE node_schedstat_waiting_seconds_total counter
node_schedstat_waiting_seconds_total{cpu="0"} 38.39348047
node_schedstat_waiting_seconds_total{cpu="1"} 33.517399278
node_schedstat_waiting_seconds_total{cpu="10"} 91.589087621
node_schedstat_waiting_seconds_total{cpu="11"} 8.770778128
node_schedstat_waiting_seconds_total{cpu="2"} 72.638039727
node_schedstat_waiting_seconds_total{cpu="3"} 22.184839782
node_schedstat_waiting_seconds_total{cpu="4"} 166.784767815
node_schedstat_waiting_seconds_total{cpu="5"} 102.708069552
node_schedstat_waiting_seconds_total{cpu="6"} 9.329522561
node_schedstat_waiting_seconds_total{cpu="7"} 13.481075818
node_schedstat_waiting_seconds_total{cpu="8"} 68.927003764
node_schedstat_waiting_seconds_total{cpu="9"} 16.756945344
# HELP node_scrape_collector_duration_seconds node_exporter: Duration of a collector scrape.
# TYPE node_scrape_collector_duration_seconds gauge
node_scrape_collector_duration_seconds{collector="arp"} 3.2628e-05
node_scrape_collector_duration_seconds{collector="bcache"} 8.787e-06
node_scrape_collector_duration_seconds{collector="bonding"} 1.1996e-05
node_scrape_collector_duration_seconds{collector="btrfs"} 9.5527e-05
node_scrape_collector_duration_seconds{collector="conntrack"} 3.393e-05
node_scrape_collector_duration_seconds{collector="cpu"} 0.017199334
node_scrape_collector_duration_seconds{collector="cpufreq"} 0.015989093
node_scrape_collector_duration_seconds{collector="diskstats"} 0.000515014
node_scrape_collector_duration_seconds{collector="dmi"} 8.455e-06
node_scrape_collector_duration_seconds{collector="edac"} 2.4801e-05
node_scrape_collector_duration_seconds{collector="entropy"} 3.6835e-05
node_scrape_collector_duration_seconds{collector="fibrechannel"} 2.9502e-05
node_scrape_collector_duration_seconds{collector="filefd"} 3.1719e-05
node_scrape_collector_duration_seconds{collector="filesystem"} 0.017182871
node_scrape_collector_duration_seconds{collector="hwmon"} 0.054146954
node_scrape_collector_duration_seconds{collector="infiniband"} 6.98e-06
node_scrape_collector_duration_seconds{collector="ipvs"} 1.3192e-05
node_scrape_collector_duration_seconds{collector="loadavg"} 0.01698361
node_scrape_collector_duration_seconds{collector="mdadm"} 1.839e-05
node_scrape_collector_duration_seconds{collector="meminfo"} 0.000118263
node_scrape_collector_duration_seconds{collector="netclass"} 0.00191871
node_scrape_collector_duration_seconds{collector="netdev"} 0.000333885
node_scrape_collector_duration_seconds{collector="netstat"} 0.016802956
node_scrape_collector_duration_seconds{collector="nfs"} 9.124e-05
node_scrape_collector_duration_seconds{collector="nfsd"} 1.2097e-05
node_scrape_collector_duration_seconds{collector="nvme"} 4.8791e-05
node_scrape_collector_duration_seconds{collector="os"} 0.001183584
node_scrape_collector_duration_seconds{collector="powersupplyclass"} 0.000154676
node_scrape_collector_duration_seconds{collector="pressure"} 8.1614e-05
node_scrape_collector_duration_seconds{collector="rapl"} 0.000124044
node_scrape_collector_duration_seconds{collector="schedstat"} 0.016637322
node_scrape_collector_duration_seconds{collector="selinux"} 7.64e-07
node_scrape_collector_duration_seconds{collector="sockstat"} 0.000110737
node_scrape_collector_duration_seconds{collector="softnet"} 6.7098e-05
node_scrape_collector_duration_seconds{collector="stat"} 0.00015424
node_scrape_collector_duration_seconds{collector="systemd"} 0.085356435
node_scrape_collector_duration_seconds{collector="tapestats"} 6.054e-06
node_scrape_collector_duration_seconds{collector="textfile"} 0.000807217
node_scrape_collector_duration_seconds{collector="thermal_zone"} 0.003046175
node_scrape_collector_duration_seconds{collector="time"} 5.7064e-05
node_scrape_collector_duration_seconds{collector="timex"} 8.762e-06
node_scrape_collector_duration_seconds{collector="udp_queues"} 0.000259372
node_scrape_collector_duration_seconds{collector="uname"} 0.016972583
node_scrape_collector_duration_seconds{collector="vmstat"} 0.000102161
node_scrape_collector_duration_seconds{collector="xfs"} 8.913e-06
node_scrape_collector_duration_seconds{collector="zfs"} 0.01813055
# HELP node_scrape_collector_success node_exporter: Whether a collector succeeded.
# TYPE node_scrape_collector_success gauge
node_scrape_collector_success{collector="arp"} 1
node_scrape_collector_success{collector="bcache"} 1
node_scrape_collector_success{collector="bonding"} 1
node_scrape_collector_success{collector="btrfs"} 1
node_scrape_collector_success{collector="conntrack"} 0
node_scrape_collector_success{collector="cpu"} 1
node_scrape_collector_success{collector="cpufreq"} 1
node_scrape_collector_success{collector="diskstats"} 1
node_scrape_collector_success{collector="dmi"} 1
node_scrape_collector_success{collector="edac"} 1
node_scrape_collector_success{collector="entropy"} 1
node_scrape_collector_success{collector="fibrechannel"} 0
node_scrape_collector_success{collector="filefd"} 1
node_scrape_collector_success{collector="filesystem"} 1
node_scrape_collector_success{collector="hwmon"} 1
node_scrape_collector_success{collector="infiniband"} 0
node_scrape_collector_success{collector="ipvs"} 0
node_scrape_collector_success{collector="loadavg"} 1
node_scrape_collector_success{collector="mdadm"} 1
node_scrape_collector_success{collector="meminfo"} 1
node_scrape_collector_success{collector="netclass"} 1
node_scrape_collector_success{collector="netdev"} 1
node_scrape_collector_success{collector="netstat"} 1
node_scrape_collector_success{collector="nfs"} 1
node_scrape_collector_success{collector="nfsd"} 0
node_scrape_collector_success{collector="nvme"} 1
node_scrape_collector_success{collector="os"} 1
node_scrape_collector_success{collector="powersupplyclass"} 1
node_scrape_collector_success{collector="pressure"} 1
node_scrape_collector_success{collector="rapl"} 0
node_scrape_collector_success{collector="schedstat"} 1
node_scrape_collector_success{collector="selinux"} 1
node_scrape_collector_success{collector="sockstat"} 1
node_scrape_collector_success{collector="softnet"} 1
node_scrape_collector_success{collector="stat"} 1
node_scrape_collector_success{collector="systemd"} 1
node_scrape_collector_success{collector="tapestats"} 0
node_scrape_collector_success{collector="textfile"} 1
node_scrape_collector_success{collector="thermal_zone"} 1
node_scrape_collector_success{collector="time"} 1
node_scrape_collector_success{collector="timex"} 1
node_scrape_collector_success{collector="udp_queues"} 1
node_scrape_collector_success{collector="uname"} 1
node_scrape_collector_success{collector="vmstat"} 1
node_scrape_collector_success{collector="xfs"} 1
node_scrape_collector_success{collector="zfs"} 1
# HELP node_selinux_enabled SELinux is enabled, 1 is true, 0 is false
# TYPE node_selinux_enabled gauge
node_selinux_enabled 0
# HELP node_sockstat_FRAG6_inuse Number of FRAG6 sockets in state inuse.
# TYPE node_sockstat_FRAG6_inuse gauge
node_sockstat_FRAG6_inuse 0
# HELP node_sockstat_FRAG6_memory Number of FRAG6 sockets in state memory.
# TYPE node_sockstat_FRAG6_memory gauge
node_sockstat_FRAG6_memory 0
# HELP node_sockstat_FRAG_inuse Number of FRAG sockets in state inuse.
# TYPE node_sockstat_FRAG_inuse gauge
node_sockstat_FRAG_inuse 0
# HELP node_sockstat_FRAG_memory Number of FRAG sockets in state memory.
# TYPE node_sockstat_FRAG_memory gauge
node_sockstat_FRAG_memory 0
# HELP node_sockstat_RAW6_inuse Number of RAW6 sockets in state inuse.
# TYPE node_sockstat_RAW6_inuse gauge
node_sockstat_RAW6_inuse 0
# HELP node_sockstat_RAW_inuse Number of RAW sockets in state inuse.
# TYPE node_sockstat_RAW_inuse gauge
node_sockstat_RAW_inuse 0
# HELP node_sockstat_TCP6_inuse Number of TCP6 sockets in state inuse.
# TYPE node_sockstat_TCP6_inuse gauge
node_sockstat_TCP6_inuse 15
# HELP node_sockstat_TCP_alloc Number of TCP sockets in state alloc.
# TYPE node_sockstat_TCP_alloc gauge
node_sockstat_TCP_alloc 125
# HELP node_sockstat_TCP_inuse Number of TCP sockets in state inuse.
# TYPE node_sockstat_TCP_inuse gauge
node_sockstat_TCP_inuse 12
# HELP node_sockstat_TCP_mem Number of TCP sockets in state mem.
# TYPE node_sockstat_TCP_mem gauge
node_sockstat_TCP_mem 788
# HELP node_sockstat_TCP_mem_bytes Number of TCP sockets in state mem_bytes.
# TYPE node_sockstat_TCP_mem_bytes gauge
node_sockstat_TCP_mem_bytes 3.227648e+06
# HELP node_sockstat_TCP_orphan Number of TCP sockets in state orphan.
# TYPE node_sockstat_TCP_orphan gauge
node_sockstat_TCP_orphan 1
# HELP node_sockstat_TCP_tw Number of TCP sockets in state tw.
# TYPE node_sockstat_TCP_tw gauge
node_sockstat_TCP_tw 1
# HELP node_sockstat_UDP6_inuse Number of UDP6 sockets in state inuse.
# TYPE node_sockstat_UDP6_inuse gauge
node_sockstat_UDP6_inuse 2
# HELP node_sockstat_UDPLITE6_inuse Number of UDPLITE6 sockets in state inuse.
# TYPE node_sockstat_UDPLITE6_inuse gauge
node_sockstat_UDPLITE6_inuse 0
# HELP node_sockstat_UDPLITE_inuse Number of UDPLITE sockets in state inuse.
# TYPE node_sockstat_UDPLITE_inuse gauge
node_sockstat_UDPLITE_inuse 0
# HELP node_sockstat_UDP_inuse Number of UDP sockets in state inuse.
# TYPE node_sockstat_UDP_inuse gauge
node_sockstat_UDP_inuse 2
# HELP node_sockstat_UDP_mem Number of UDP sockets in state mem.
# TYPE node_sockstat_UDP_mem gauge
node_sockstat_UDP_mem 899
# HELP node_sockstat_UDP_mem_bytes Number of UDP sockets in state mem_bytes.
# TYPE node_sockstat_UDP_mem_bytes gauge
node_sockstat_UDP_mem_bytes 3.682304e+06
# HELP node_sockstat_sockets_used Number of IPv4 sockets in use.
# TYPE node_sockstat_sockets_used gauge
node_sockstat_sockets_used 322
# HELP node_softnet_dropped_total Number of dropped packets
# TYPE node_softnet_dropped_total counter
node_softnet_dropped_total{cpu="0"} 0
node_softnet_dropped_total{cpu="1"} 0
node_softnet_dropped_total{cpu="10"} 0
node_softnet_dropped_total{cpu="11"} 0
node_softnet_dropped_total{cpu="2"} 0
node_softnet_dropped_total{cpu="3"} 0
node_softnet_dropped_total{cpu="4"} 0
node_softnet_dropped_total{cpu="5"} 0
node_softnet_dropped_total{cpu="6"} 0
node_softnet_dropped_total{cpu="7"} 0
node_softnet_dropped_total{cpu="8"} 0
node_softnet_dropped_total{cpu="9"} 0
# HELP node_softnet_processed_total Number of processed packets
# TYPE node_softnet_processed_total counter
node_softnet_processed_total{cpu="0"} 474387
node_softnet_processed_total{cpu="1"} 493052
node_softnet_processed_total{cpu="10"} 3.929857e+06
node_softnet_processed_total{cpu="11"} 4089
node_softnet_processed_total{cpu="2"} 4.033703e+06
node_softnet_processed_total{cpu="3"} 5792
node_softnet_processed_total{cpu="4"} 1.538817e+06
node_softnet_processed_total{cpu="5"} 3.787139e+06
node_softnet_processed_total{cpu="6"} 5339
node_softnet_processed_total{cpu="7"} 4.7756774e+07
node_softnet_processed_total{cpu="8"} 4.022317e+06
node_softnet_processed_total{cpu="9"} 4771
# HELP node_softnet_times_squeezed_total Number of times processing packets ran out of quota
# TYPE node_softnet_times_squeezed_total counter
node_softnet_times_squeezed_total{cpu="0"} 0
node_softnet_times_squeezed_total{cpu="1"} 0
node_softnet_times_squeezed_total{cpu="10"} 0
node_softnet_times_squeezed_total{cpu="11"} 0
node_softnet_times_squeezed_total{cpu="2"} 0
node_softnet_times_squeezed_total{cpu="3"} 0
node_softnet_times_squeezed_total{cpu="4"} 0
node_softnet_times_squeezed_total{cpu="5"} 0
node_softnet_times_squeezed_total{cpu="6"} 0
node_softnet_times_squeezed_total{cpu="7"} 1
node_softnet_times_squeezed_total{cpu="8"} 0
node_softnet_times_squeezed_total{cpu="9"} 0
# HELP node_systemd_socket_accepted_connections_total Total number of accepted socket connections
# TYPE node_systemd_socket_accepted_connections_total counter
node_systemd_socket_accepted_connections_total{name="dbus.socket"} 0
node_systemd_socket_accepted_connections_total{name="dm-event.socket"} 0
node_systemd_socket_accepted_connections_total{name="iscsid.socket"} 0
node_systemd_socket_accepted_connections_total{name="lvm2-lvmpolld.socket"} 0
node_systemd_socket_accepted_connections_total{name="rpcbind.socket"} 0
node_systemd_socket_accepted_connections_total{name="syslog.socket"} 0
node_systemd_socket_accepted_connections_total{name="systemd-fsckd.socket"} 0
node_systemd_socket_accepted_connections_total{name="systemd-initctl.socket"} 0
node_systemd_socket_accepted_connections_total{name="systemd-journald-audit.socket"} 0
node_systemd_socket_accepted_connections_total{name="systemd-journald-dev-log.socket"} 0
node_systemd_socket_accepted_connections_total{name="systemd-journald.socket"} 0
node_systemd_socket_accepted_connections_total{name="systemd-networkd.socket"} 0
node_systemd_socket_accepted_connections_total{name="systemd-rfkill.socket"} 0
node_systemd_socket_accepted_connections_total{name="systemd-udevd-control.socket"} 0
node_systemd_socket_accepted_connections_total{name="systemd-udevd-kernel.socket"} 0
node_systemd_socket_accepted_connections_total{name="uuidd.socket"} 0
# HELP node_systemd_socket_current_connections Current number of socket connections
# TYPE node_systemd_socket_current_connections gauge
node_systemd_socket_current_connections{name="dbus.socket"} 0
node_systemd_socket_current_connections{name="dm-event.socket"} 0
node_systemd_socket_current_connections{name="iscsid.socket"} 0
node_systemd_socket_current_connections{name="lvm2-lvmpolld.socket"} 0
node_systemd_socket_current_connections{name="rpcbind.socket"} 0
node_systemd_socket_current_connections{name="syslog.socket"} 0
node_systemd_socket_current_connections{name="systemd-fsckd.socket"} 0
node_systemd_socket_current_connections{name="systemd-initctl.socket"} 0
node_systemd_socket_current_connections{name="systemd-journald-audit.socket"} 0
node_systemd_socket_current_connections{name="systemd-journald-dev-log.socket"} 0
node_systemd_socket_current_connections{name="systemd-journald.socket"} 0
node_systemd_socket_current_connections{name="systemd-networkd.socket"} 0
node_systemd_socket_current_connections{name="systemd-rfkill.socket"} 0
node_systemd_socket_current_connections{name="systemd-udevd-control.socket"} 0
node_systemd_socket_current_connections{name="systemd-udevd-kernel.socket"} 0
node_systemd_socket_current_connections{name="uuidd.socket"} 0
# HELP node_systemd_socket_refused_connections_total Total number of refused socket connections
# TYPE node_systemd_socket_refused_connections_total gauge
node_systemd_socket_refused_connections_total{name="dbus.socket"} 0
node_systemd_socket_refused_connections_total{name="dm-event.socket"} 0
node_systemd_socket_refused_connections_total{name="iscsid.socket"} 0
node_systemd_socket_refused_connections_total{name="lvm2-lvmpolld.socket"} 0
node_systemd_socket_refused_connections_total{name="rpcbind.socket"} 0
node_systemd_socket_refused_connections_total{name="syslog.socket"} 0
node_systemd_socket_refused_connections_total{name="systemd-fsckd.socket"} 0
node_systemd_socket_refused_connections_total{name="systemd-initctl.socket"} 0
node_systemd_socket_refused_connections_total{name="systemd-journald-audit.socket"} 0
node_systemd_socket_refused_connections_total{name="systemd-journald-dev-log.socket"} 0
node_systemd_socket_refused_connections_total{name="systemd-journald.socket"} 0
node_systemd_socket_refused_connections_total{name="systemd-networkd.socket"} 0
node_systemd_socket_refused_connections_total{name="systemd-rfkill.socket"} 0
node_systemd_socket_refused_connections_total{name="systemd-udevd-control.socket"} 0
node_systemd_socket_refused_connections_total{name="systemd-udevd-kernel.socket"} 0
node_systemd_socket_refused_connections_total{name="uuidd.socket"} 0
# HELP node_systemd_system_running Whether the system is operational (see 'systemctl is-system-running')
# TYPE node_systemd_system_running gauge
node_systemd_system_running 1
# HELP node_systemd_timer_last_trigger_seconds Seconds since epoch of last trigger.
# TYPE node_systemd_timer_last_trigger_seconds gauge
node_systemd_timer_last_trigger_seconds{name="apt-daily-upgrade.timer"} 1.783134898175116e+09
node_systemd_timer_last_trigger_seconds{name="apt-daily.timer"} 1.783137924156559e+09
node_systemd_timer_last_trigger_seconds{name="dpkg-db-backup.timer"} 1.783112424156981e+09
node_systemd_timer_last_trigger_seconds{name="e2scrub_all.timer"} 1.782725235275346e+09
node_systemd_timer_last_trigger_seconds{name="fstrim.timer"} 1.782726534149472e+09
node_systemd_timer_last_trigger_seconds{name="logrotate.timer"} 1.783112424156527e+09
node_systemd_timer_last_trigger_seconds{name="man-db.timer"} 1.783129764156513e+09
node_systemd_timer_last_trigger_seconds{name="prometheus-node-exporter-apt.timer"} 1.783172335409527e+09
node_systemd_timer_last_trigger_seconds{name="prometheus-node-exporter-ipmitool-sensor.timer"} 0
node_systemd_timer_last_trigger_seconds{name="prometheus-node-exporter-mellanox-hca-temp.timer"} 0
node_systemd_timer_last_trigger_seconds{name="prometheus-node-exporter-nvme.timer"} 1.783172335409089e+09
node_systemd_timer_last_trigger_seconds{name="prometheus-node-exporter-smartmon.timer"} 1.783172335408651e+09
node_systemd_timer_last_trigger_seconds{name="pve-daily-update.timer"} 1.783131945994873e+09
node_systemd_timer_last_trigger_seconds{name="systemd-tmpfiles-clean.timer"} 1.783112265994111e+09
# HELP node_systemd_unit_state Systemd unit
# TYPE node_systemd_unit_state gauge
node_systemd_unit_state{name="apparmor.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="apparmor.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="apparmor.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="apparmor.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="apparmor.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="apt-daily-upgrade.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="apt-daily-upgrade.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="apt-daily-upgrade.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="apt-daily-upgrade.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="apt-daily-upgrade.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="apt-daily-upgrade.timer",state="activating",type=""} 0
node_systemd_unit_state{name="apt-daily-upgrade.timer",state="active",type=""} 1
node_systemd_unit_state{name="apt-daily-upgrade.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="apt-daily-upgrade.timer",state="failed",type=""} 0
node_systemd_unit_state{name="apt-daily-upgrade.timer",state="inactive",type=""} 0
node_systemd_unit_state{name="apt-daily.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="apt-daily.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="apt-daily.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="apt-daily.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="apt-daily.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="apt-daily.timer",state="activating",type=""} 0
node_systemd_unit_state{name="apt-daily.timer",state="active",type=""} 1
node_systemd_unit_state{name="apt-daily.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="apt-daily.timer",state="failed",type=""} 0
node_systemd_unit_state{name="apt-daily.timer",state="inactive",type=""} 0
node_systemd_unit_state{name="auth-rpcgss-module.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="auth-rpcgss-module.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="auth-rpcgss-module.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="auth-rpcgss-module.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="auth-rpcgss-module.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="blk-availability.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="blk-availability.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="blk-availability.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="blk-availability.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="blk-availability.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="chrony.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="chrony.service",state="active",type="forking"} 1
node_systemd_unit_state{name="chrony.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="chrony.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="chrony.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="console-getty.service",state="activating",type="idle"} 0
node_systemd_unit_state{name="console-getty.service",state="active",type="idle"} 0
node_systemd_unit_state{name="console-getty.service",state="deactivating",type="idle"} 0
node_systemd_unit_state{name="console-getty.service",state="failed",type="idle"} 0
node_systemd_unit_state{name="console-getty.service",state="inactive",type="idle"} 1
node_systemd_unit_state{name="console-setup.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="console-setup.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="console-setup.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="console-setup.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="console-setup.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="corosync.service",state="activating",type="notify"} 0
node_systemd_unit_state{name="corosync.service",state="active",type="notify"} 0
node_systemd_unit_state{name="corosync.service",state="deactivating",type="notify"} 0
node_systemd_unit_state{name="corosync.service",state="failed",type="notify"} 0
node_systemd_unit_state{name="corosync.service",state="inactive",type="notify"} 1
node_systemd_unit_state{name="cron.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="cron.service",state="active",type="simple"} 1
node_systemd_unit_state{name="cron.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="cron.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="cron.service",state="inactive",type="simple"} 0
node_systemd_unit_state{name="dbus.service",state="activating",type="notify"} 0
node_systemd_unit_state{name="dbus.service",state="active",type="notify"} 1
node_systemd_unit_state{name="dbus.service",state="deactivating",type="notify"} 0
node_systemd_unit_state{name="dbus.service",state="failed",type="notify"} 0
node_systemd_unit_state{name="dbus.service",state="inactive",type="notify"} 0
node_systemd_unit_state{name="dbus.socket",state="activating",type=""} 0
node_systemd_unit_state{name="dbus.socket",state="active",type=""} 1
node_systemd_unit_state{name="dbus.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="dbus.socket",state="failed",type=""} 0
node_systemd_unit_state{name="dbus.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="dev-disk-by\\x2did-dm\\x2dname\\x2dpve\\x2dswap.swap",state="activating",type=""} 0
node_systemd_unit_state{name="dev-disk-by\\x2did-dm\\x2dname\\x2dpve\\x2dswap.swap",state="active",type=""} 1
node_systemd_unit_state{name="dev-disk-by\\x2did-dm\\x2dname\\x2dpve\\x2dswap.swap",state="deactivating",type=""} 0
node_systemd_unit_state{name="dev-disk-by\\x2did-dm\\x2dname\\x2dpve\\x2dswap.swap",state="failed",type=""} 0
node_systemd_unit_state{name="dev-disk-by\\x2did-dm\\x2dname\\x2dpve\\x2dswap.swap",state="inactive",type=""} 0
node_systemd_unit_state{name="dev-disk-by\\x2did-dm\\x2duuid\\x2dLVM\\x2dcGLHUWr8J93d2UcIHyRcn0OmML8DLUnIUWcc2KPLUhZ4liOyLw5Ss2rsdoz5bvjT.swap",state="activating",type=""} 0
node_systemd_unit_state{name="dev-disk-by\\x2did-dm\\x2duuid\\x2dLVM\\x2dcGLHUWr8J93d2UcIHyRcn0OmML8DLUnIUWcc2KPLUhZ4liOyLw5Ss2rsdoz5bvjT.swap",state="active",type=""} 1
node_systemd_unit_state{name="dev-disk-by\\x2did-dm\\x2duuid\\x2dLVM\\x2dcGLHUWr8J93d2UcIHyRcn0OmML8DLUnIUWcc2KPLUhZ4liOyLw5Ss2rsdoz5bvjT.swap",state="deactivating",type=""} 0
node_systemd_unit_state{name="dev-disk-by\\x2did-dm\\x2duuid\\x2dLVM\\x2dcGLHUWr8J93d2UcIHyRcn0OmML8DLUnIUWcc2KPLUhZ4liOyLw5Ss2rsdoz5bvjT.swap",state="failed",type=""} 0
node_systemd_unit_state{name="dev-disk-by\\x2did-dm\\x2duuid\\x2dLVM\\x2dcGLHUWr8J93d2UcIHyRcn0OmML8DLUnIUWcc2KPLUhZ4liOyLw5Ss2rsdoz5bvjT.swap",state="inactive",type=""} 0
node_systemd_unit_state{name="dev-disk-by\\x2duuid-476ac21d\\x2d18a6\\x2d4b0e\\x2d9ba3\\x2dec3f87a39409.swap",state="activating",type=""} 0
node_systemd_unit_state{name="dev-disk-by\\x2duuid-476ac21d\\x2d18a6\\x2d4b0e\\x2d9ba3\\x2dec3f87a39409.swap",state="active",type=""} 1
node_systemd_unit_state{name="dev-disk-by\\x2duuid-476ac21d\\x2d18a6\\x2d4b0e\\x2d9ba3\\x2dec3f87a39409.swap",state="deactivating",type=""} 0
node_systemd_unit_state{name="dev-disk-by\\x2duuid-476ac21d\\x2d18a6\\x2d4b0e\\x2d9ba3\\x2dec3f87a39409.swap",state="failed",type=""} 0
node_systemd_unit_state{name="dev-disk-by\\x2duuid-476ac21d\\x2d18a6\\x2d4b0e\\x2d9ba3\\x2dec3f87a39409.swap",state="inactive",type=""} 0
node_systemd_unit_state{name="dev-dm\\x2d0.swap",state="activating",type=""} 0
node_systemd_unit_state{name="dev-dm\\x2d0.swap",state="active",type=""} 1
node_systemd_unit_state{name="dev-dm\\x2d0.swap",state="deactivating",type=""} 0
node_systemd_unit_state{name="dev-dm\\x2d0.swap",state="failed",type=""} 0
node_systemd_unit_state{name="dev-dm\\x2d0.swap",state="inactive",type=""} 0
node_systemd_unit_state{name="dev-mapper-pve\\x2dswap.swap",state="activating",type=""} 0
node_systemd_unit_state{name="dev-mapper-pve\\x2dswap.swap",state="active",type=""} 1
node_systemd_unit_state{name="dev-mapper-pve\\x2dswap.swap",state="deactivating",type=""} 0
node_systemd_unit_state{name="dev-mapper-pve\\x2dswap.swap",state="failed",type=""} 0
node_systemd_unit_state{name="dev-mapper-pve\\x2dswap.swap",state="inactive",type=""} 0
node_systemd_unit_state{name="dev-pve-swap.swap",state="activating",type=""} 0
node_systemd_unit_state{name="dev-pve-swap.swap",state="active",type=""} 1
node_systemd_unit_state{name="dev-pve-swap.swap",state="deactivating",type=""} 0
node_systemd_unit_state{name="dev-pve-swap.swap",state="failed",type=""} 0
node_systemd_unit_state{name="dev-pve-swap.swap",state="inactive",type=""} 0
node_systemd_unit_state{name="dm-event.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="dm-event.service",state="active",type="simple"} 1
node_systemd_unit_state{name="dm-event.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="dm-event.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="dm-event.service",state="inactive",type="simple"} 0
node_systemd_unit_state{name="dm-event.socket",state="activating",type=""} 0
node_systemd_unit_state{name="dm-event.socket",state="active",type=""} 1
node_systemd_unit_state{name="dm-event.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="dm-event.socket",state="failed",type=""} 0
node_systemd_unit_state{name="dm-event.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="dpkg-db-backup.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="dpkg-db-backup.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="dpkg-db-backup.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="dpkg-db-backup.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="dpkg-db-backup.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="dpkg-db-backup.timer",state="activating",type=""} 0
node_systemd_unit_state{name="dpkg-db-backup.timer",state="active",type=""} 1
node_systemd_unit_state{name="dpkg-db-backup.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="dpkg-db-backup.timer",state="failed",type=""} 0
node_systemd_unit_state{name="dpkg-db-backup.timer",state="inactive",type=""} 0
node_systemd_unit_state{name="e2scrub_all.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="e2scrub_all.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="e2scrub_all.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="e2scrub_all.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="e2scrub_all.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="e2scrub_all.timer",state="activating",type=""} 0
node_systemd_unit_state{name="e2scrub_all.timer",state="active",type=""} 1
node_systemd_unit_state{name="e2scrub_all.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="e2scrub_all.timer",state="failed",type=""} 0
node_systemd_unit_state{name="e2scrub_all.timer",state="inactive",type=""} 0
node_systemd_unit_state{name="e2scrub_reap.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="e2scrub_reap.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="e2scrub_reap.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="e2scrub_reap.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="e2scrub_reap.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="emergency.service",state="activating",type="idle"} 0
node_systemd_unit_state{name="emergency.service",state="active",type="idle"} 0
node_systemd_unit_state{name="emergency.service",state="deactivating",type="idle"} 0
node_systemd_unit_state{name="emergency.service",state="failed",type="idle"} 0
node_systemd_unit_state{name="emergency.service",state="inactive",type="idle"} 1
node_systemd_unit_state{name="fstrim.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="fstrim.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="fstrim.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="fstrim.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="fstrim.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="fstrim.timer",state="activating",type=""} 0
node_systemd_unit_state{name="fstrim.timer",state="active",type=""} 1
node_systemd_unit_state{name="fstrim.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="fstrim.timer",state="failed",type=""} 0
node_systemd_unit_state{name="fstrim.timer",state="inactive",type=""} 0
node_systemd_unit_state{name="getty-static.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="getty-static.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="getty-static.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="getty-static.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="getty-static.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="getty@tty1.service",state="activating",type="idle"} 0
node_systemd_unit_state{name="getty@tty1.service",state="active",type="idle"} 1
node_systemd_unit_state{name="getty@tty1.service",state="deactivating",type="idle"} 0
node_systemd_unit_state{name="getty@tty1.service",state="failed",type="idle"} 0
node_systemd_unit_state{name="getty@tty1.service",state="inactive",type="idle"} 0
node_systemd_unit_state{name="ifupdown2-pre.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="ifupdown2-pre.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="ifupdown2-pre.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="ifupdown2-pre.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="ifupdown2-pre.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="initrd-cleanup.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="initrd-cleanup.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="initrd-cleanup.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="initrd-cleanup.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="initrd-cleanup.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="initrd-parse-etc.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="initrd-parse-etc.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="initrd-parse-etc.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="initrd-parse-etc.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="initrd-parse-etc.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="initrd-switch-root.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="initrd-switch-root.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="initrd-switch-root.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="initrd-switch-root.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="initrd-switch-root.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="initrd-udevadm-cleanup-db.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="initrd-udevadm-cleanup-db.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="initrd-udevadm-cleanup-db.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="initrd-udevadm-cleanup-db.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="initrd-udevadm-cleanup-db.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="iscsid.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="iscsid.service",state="active",type="forking"} 0
node_systemd_unit_state{name="iscsid.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="iscsid.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="iscsid.service",state="inactive",type="forking"} 1
node_systemd_unit_state{name="iscsid.socket",state="activating",type=""} 0
node_systemd_unit_state{name="iscsid.socket",state="active",type=""} 1
node_systemd_unit_state{name="iscsid.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="iscsid.socket",state="failed",type=""} 0
node_systemd_unit_state{name="iscsid.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="keyboard-setup.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="keyboard-setup.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="keyboard-setup.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="keyboard-setup.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="keyboard-setup.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="kmod-static-nodes.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="kmod-static-nodes.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="kmod-static-nodes.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="kmod-static-nodes.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="kmod-static-nodes.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="ksmtuned.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="ksmtuned.service",state="active",type="forking"} 1
node_systemd_unit_state{name="ksmtuned.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="ksmtuned.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="ksmtuned.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="lm-sensors.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="lm-sensors.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="lm-sensors.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="lm-sensors.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="lm-sensors.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="logrotate.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="logrotate.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="logrotate.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="logrotate.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="logrotate.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="logrotate.timer",state="activating",type=""} 0
node_systemd_unit_state{name="logrotate.timer",state="active",type=""} 1
node_systemd_unit_state{name="logrotate.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="logrotate.timer",state="failed",type=""} 0
node_systemd_unit_state{name="logrotate.timer",state="inactive",type=""} 0
node_systemd_unit_state{name="lvm2-lvmpolld.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="lvm2-lvmpolld.service",state="active",type="simple"} 0
node_systemd_unit_state{name="lvm2-lvmpolld.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="lvm2-lvmpolld.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="lvm2-lvmpolld.service",state="inactive",type="simple"} 1
node_systemd_unit_state{name="lvm2-lvmpolld.socket",state="activating",type=""} 0
node_systemd_unit_state{name="lvm2-lvmpolld.socket",state="active",type=""} 1
node_systemd_unit_state{name="lvm2-lvmpolld.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="lvm2-lvmpolld.socket",state="failed",type=""} 0
node_systemd_unit_state{name="lvm2-lvmpolld.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="lvm2-monitor.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="lvm2-monitor.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="lvm2-monitor.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="lvm2-monitor.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="lvm2-monitor.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="lxc-monitord.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="lxc-monitord.service",state="active",type="simple"} 1
node_systemd_unit_state{name="lxc-monitord.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="lxc-monitord.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="lxc-monitord.service",state="inactive",type="simple"} 0
node_systemd_unit_state{name="lxc-net.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="lxc-net.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="lxc-net.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="lxc-net.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="lxc-net.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="lxc.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="lxc.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="lxc.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="lxc.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="lxc.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="lxcfs.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="lxcfs.service",state="active",type="simple"} 1
node_systemd_unit_state{name="lxcfs.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="lxcfs.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="lxcfs.service",state="inactive",type="simple"} 0
node_systemd_unit_state{name="man-db.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="man-db.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="man-db.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="man-db.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="man-db.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="man-db.timer",state="activating",type=""} 0
node_systemd_unit_state{name="man-db.timer",state="active",type=""} 1
node_systemd_unit_state{name="man-db.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="man-db.timer",state="failed",type=""} 0
node_systemd_unit_state{name="man-db.timer",state="inactive",type=""} 0
node_systemd_unit_state{name="modprobe@configfs.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@configfs.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@configfs.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@configfs.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@configfs.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="modprobe@dm_mod.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@dm_mod.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@dm_mod.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@dm_mod.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@dm_mod.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="modprobe@drm.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@drm.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@drm.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@drm.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@drm.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="modprobe@efi_pstore.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@efi_pstore.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@efi_pstore.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@efi_pstore.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@efi_pstore.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="modprobe@fuse.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@fuse.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@fuse.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@fuse.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@fuse.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="modprobe@loop.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@loop.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@loop.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@loop.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="modprobe@loop.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="networking.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="networking.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="networking.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="networking.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="networking.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="nfs-utils.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="nfs-utils.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="nfs-utils.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="nfs-utils.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="nfs-utils.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="nvmefc-boot-connections.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="nvmefc-boot-connections.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="nvmefc-boot-connections.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="nvmefc-boot-connections.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="nvmefc-boot-connections.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="nvmf-autoconnect.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="nvmf-autoconnect.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="nvmf-autoconnect.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="nvmf-autoconnect.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="nvmf-autoconnect.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="open-iscsi.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="open-iscsi.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="open-iscsi.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="open-iscsi.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="open-iscsi.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="openipmi.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="openipmi.service",state="active",type="forking"} 0
node_systemd_unit_state{name="openipmi.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="openipmi.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="openipmi.service",state="inactive",type="forking"} 1
node_systemd_unit_state{name="postfix.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="postfix.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="postfix.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="postfix.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="postfix.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="postfix@-.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="postfix@-.service",state="active",type="forking"} 1
node_systemd_unit_state{name="postfix@-.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="postfix@-.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="postfix@-.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="prometheus-node-exporter-apt.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-apt.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-apt.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-apt.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-apt.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="prometheus-node-exporter-apt.timer",state="activating",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-apt.timer",state="active",type=""} 1
node_systemd_unit_state{name="prometheus-node-exporter-apt.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-apt.timer",state="failed",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-apt.timer",state="inactive",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-ipmitool-sensor.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-ipmitool-sensor.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-ipmitool-sensor.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-ipmitool-sensor.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-ipmitool-sensor.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="prometheus-node-exporter-ipmitool-sensor.timer",state="activating",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-ipmitool-sensor.timer",state="active",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-ipmitool-sensor.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-ipmitool-sensor.timer",state="failed",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-ipmitool-sensor.timer",state="inactive",type=""} 1
node_systemd_unit_state{name="prometheus-node-exporter-mellanox-hca-temp.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-mellanox-hca-temp.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-mellanox-hca-temp.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-mellanox-hca-temp.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-mellanox-hca-temp.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="prometheus-node-exporter-mellanox-hca-temp.timer",state="activating",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-mellanox-hca-temp.timer",state="active",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-mellanox-hca-temp.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-mellanox-hca-temp.timer",state="failed",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-mellanox-hca-temp.timer",state="inactive",type=""} 1
node_systemd_unit_state{name="prometheus-node-exporter-nvme.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-nvme.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-nvme.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-nvme.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-nvme.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="prometheus-node-exporter-nvme.timer",state="activating",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-nvme.timer",state="active",type=""} 1
node_systemd_unit_state{name="prometheus-node-exporter-nvme.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-nvme.timer",state="failed",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-nvme.timer",state="inactive",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-smartmon.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-smartmon.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-smartmon.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-smartmon.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="prometheus-node-exporter-smartmon.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="prometheus-node-exporter-smartmon.timer",state="activating",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-smartmon.timer",state="active",type=""} 1
node_systemd_unit_state{name="prometheus-node-exporter-smartmon.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-smartmon.timer",state="failed",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter-smartmon.timer",state="inactive",type=""} 0
node_systemd_unit_state{name="prometheus-node-exporter.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="prometheus-node-exporter.service",state="active",type="simple"} 1
node_systemd_unit_state{name="prometheus-node-exporter.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="prometheus-node-exporter.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="prometheus-node-exporter.service",state="inactive",type="simple"} 0
node_systemd_unit_state{name="proxmox-boot-cleanup.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="proxmox-boot-cleanup.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="proxmox-boot-cleanup.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="proxmox-boot-cleanup.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="proxmox-boot-cleanup.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="proxmox-firewall.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="proxmox-firewall.service",state="active",type="simple"} 1
node_systemd_unit_state{name="proxmox-firewall.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="proxmox-firewall.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="proxmox-firewall.service",state="inactive",type="simple"} 0
node_systemd_unit_state{name="pve-cluster.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="pve-cluster.service",state="active",type="forking"} 1
node_systemd_unit_state{name="pve-cluster.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="pve-cluster.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="pve-cluster.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="pve-container@100.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="pve-container@100.service",state="active",type="simple"} 1
node_systemd_unit_state{name="pve-container@100.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="pve-container@100.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="pve-container@100.service",state="inactive",type="simple"} 0
node_systemd_unit_state{name="pve-container@101.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="pve-container@101.service",state="active",type="simple"} 1
node_systemd_unit_state{name="pve-container@101.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="pve-container@101.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="pve-container@101.service",state="inactive",type="simple"} 0
node_systemd_unit_state{name="pve-container@102.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="pve-container@102.service",state="active",type="simple"} 1
node_systemd_unit_state{name="pve-container@102.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="pve-container@102.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="pve-container@102.service",state="inactive",type="simple"} 0
node_systemd_unit_state{name="pve-daily-update.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="pve-daily-update.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="pve-daily-update.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="pve-daily-update.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="pve-daily-update.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="pve-daily-update.timer",state="activating",type=""} 0
node_systemd_unit_state{name="pve-daily-update.timer",state="active",type=""} 1
node_systemd_unit_state{name="pve-daily-update.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="pve-daily-update.timer",state="failed",type=""} 0
node_systemd_unit_state{name="pve-daily-update.timer",state="inactive",type=""} 0
node_systemd_unit_state{name="pve-firewall.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="pve-firewall.service",state="active",type="forking"} 1
node_systemd_unit_state{name="pve-firewall.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="pve-firewall.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="pve-firewall.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="pve-guests.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="pve-guests.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="pve-guests.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="pve-guests.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="pve-guests.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="pve-ha-crm.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="pve-ha-crm.service",state="active",type="forking"} 0
node_systemd_unit_state{name="pve-ha-crm.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="pve-ha-crm.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="pve-ha-crm.service",state="inactive",type="forking"} 1
node_systemd_unit_state{name="pve-ha-lrm.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="pve-ha-lrm.service",state="active",type="forking"} 0
node_systemd_unit_state{name="pve-ha-lrm.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="pve-ha-lrm.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="pve-ha-lrm.service",state="inactive",type="forking"} 1
node_systemd_unit_state{name="pve-lxc-syscalld.service",state="activating",type="notify"} 0
node_systemd_unit_state{name="pve-lxc-syscalld.service",state="active",type="notify"} 1
node_systemd_unit_state{name="pve-lxc-syscalld.service",state="deactivating",type="notify"} 0
node_systemd_unit_state{name="pve-lxc-syscalld.service",state="failed",type="notify"} 0
node_systemd_unit_state{name="pve-lxc-syscalld.service",state="inactive",type="notify"} 0
node_systemd_unit_state{name="pvebanner.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="pvebanner.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="pvebanner.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="pvebanner.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="pvebanner.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="pvedaemon.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="pvedaemon.service",state="active",type="forking"} 1
node_systemd_unit_state{name="pvedaemon.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="pvedaemon.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="pvedaemon.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="pvefw-logger.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="pvefw-logger.service",state="active",type="forking"} 1
node_systemd_unit_state{name="pvefw-logger.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="pvefw-logger.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="pvefw-logger.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="pvenetcommit.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="pvenetcommit.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="pvenetcommit.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="pvenetcommit.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="pvenetcommit.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="pveproxy.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="pveproxy.service",state="active",type="forking"} 1
node_systemd_unit_state{name="pveproxy.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="pveproxy.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="pveproxy.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="pvescheduler.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="pvescheduler.service",state="active",type="forking"} 1
node_systemd_unit_state{name="pvescheduler.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="pvescheduler.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="pvescheduler.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="pvestatd.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="pvestatd.service",state="active",type="forking"} 1
node_systemd_unit_state{name="pvestatd.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="pvestatd.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="pvestatd.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="qmeventd.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="qmeventd.service",state="active",type="forking"} 1
node_systemd_unit_state{name="qmeventd.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="qmeventd.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="qmeventd.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="rbdmap.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="rbdmap.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="rbdmap.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="rbdmap.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="rbdmap.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="rc-local.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="rc-local.service",state="active",type="forking"} 0
node_systemd_unit_state{name="rc-local.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="rc-local.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="rc-local.service",state="inactive",type="forking"} 1
node_systemd_unit_state{name="rescue.service",state="activating",type="idle"} 0
node_systemd_unit_state{name="rescue.service",state="active",type="idle"} 0
node_systemd_unit_state{name="rescue.service",state="deactivating",type="idle"} 0
node_systemd_unit_state{name="rescue.service",state="failed",type="idle"} 0
node_systemd_unit_state{name="rescue.service",state="inactive",type="idle"} 1
node_systemd_unit_state{name="rpc-gssd.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="rpc-gssd.service",state="active",type="forking"} 0
node_systemd_unit_state{name="rpc-gssd.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="rpc-gssd.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="rpc-gssd.service",state="inactive",type="forking"} 1
node_systemd_unit_state{name="rpc-statd-notify.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="rpc-statd-notify.service",state="active",type="forking"} 1
node_systemd_unit_state{name="rpc-statd-notify.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="rpc-statd-notify.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="rpc-statd-notify.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="rpc-svcgssd.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="rpc-svcgssd.service",state="active",type="forking"} 0
node_systemd_unit_state{name="rpc-svcgssd.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="rpc-svcgssd.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="rpc-svcgssd.service",state="inactive",type="forking"} 1
node_systemd_unit_state{name="rpcbind.service",state="activating",type="notify"} 0
node_systemd_unit_state{name="rpcbind.service",state="active",type="notify"} 1
node_systemd_unit_state{name="rpcbind.service",state="deactivating",type="notify"} 0
node_systemd_unit_state{name="rpcbind.service",state="failed",type="notify"} 0
node_systemd_unit_state{name="rpcbind.service",state="inactive",type="notify"} 0
node_systemd_unit_state{name="rpcbind.socket",state="activating",type=""} 0
node_systemd_unit_state{name="rpcbind.socket",state="active",type=""} 1
node_systemd_unit_state{name="rpcbind.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="rpcbind.socket",state="failed",type=""} 0
node_systemd_unit_state{name="rpcbind.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="rrdcached.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="rrdcached.service",state="active",type="forking"} 1
node_systemd_unit_state{name="rrdcached.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="rrdcached.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="rrdcached.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="smartmontools.service",state="activating",type="notify"} 0
node_systemd_unit_state{name="smartmontools.service",state="active",type="notify"} 1
node_systemd_unit_state{name="smartmontools.service",state="deactivating",type="notify"} 0
node_systemd_unit_state{name="smartmontools.service",state="failed",type="notify"} 0
node_systemd_unit_state{name="smartmontools.service",state="inactive",type="notify"} 0
node_systemd_unit_state{name="spiceproxy.service",state="activating",type="forking"} 0
node_systemd_unit_state{name="spiceproxy.service",state="active",type="forking"} 1
node_systemd_unit_state{name="spiceproxy.service",state="deactivating",type="forking"} 0
node_systemd_unit_state{name="spiceproxy.service",state="failed",type="forking"} 0
node_systemd_unit_state{name="spiceproxy.service",state="inactive",type="forking"} 0
node_systemd_unit_state{name="ssh.service",state="activating",type="notify"} 0
node_systemd_unit_state{name="ssh.service",state="active",type="notify"} 1
node_systemd_unit_state{name="ssh.service",state="deactivating",type="notify"} 0
node_systemd_unit_state{name="ssh.service",state="failed",type="notify"} 0
node_systemd_unit_state{name="ssh.service",state="inactive",type="notify"} 0
node_systemd_unit_state{name="syslog.socket",state="activating",type=""} 0
node_systemd_unit_state{name="syslog.socket",state="active",type=""} 0
node_systemd_unit_state{name="syslog.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="syslog.socket",state="failed",type=""} 0
node_systemd_unit_state{name="syslog.socket",state="inactive",type=""} 1
node_systemd_unit_state{name="systemd-ask-password-console.path",state="activating",type=""} 0
node_systemd_unit_state{name="systemd-ask-password-console.path",state="active",type=""} 1
node_systemd_unit_state{name="systemd-ask-password-console.path",state="deactivating",type=""} 0
node_systemd_unit_state{name="systemd-ask-password-console.path",state="failed",type=""} 0
node_systemd_unit_state{name="systemd-ask-password-console.path",state="inactive",type=""} 0
node_systemd_unit_state{name="systemd-ask-password-console.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="systemd-ask-password-console.service",state="active",type="simple"} 0
node_systemd_unit_state{name="systemd-ask-password-console.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="systemd-ask-password-console.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="systemd-ask-password-console.service",state="inactive",type="simple"} 1
node_systemd_unit_state{name="systemd-ask-password-wall.path",state="activating",type=""} 0
node_systemd_unit_state{name="systemd-ask-password-wall.path",state="active",type=""} 1
node_systemd_unit_state{name="systemd-ask-password-wall.path",state="deactivating",type=""} 0
node_systemd_unit_state{name="systemd-ask-password-wall.path",state="failed",type=""} 0
node_systemd_unit_state{name="systemd-ask-password-wall.path",state="inactive",type=""} 0
node_systemd_unit_state{name="systemd-ask-password-wall.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="systemd-ask-password-wall.service",state="active",type="simple"} 0
node_systemd_unit_state{name="systemd-ask-password-wall.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="systemd-ask-password-wall.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="systemd-ask-password-wall.service",state="inactive",type="simple"} 1
node_systemd_unit_state{name="systemd-binfmt.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-binfmt.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-binfmt.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-binfmt.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-binfmt.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-boot-system-token.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-boot-system-token.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="systemd-boot-system-token.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-boot-system-token.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-boot-system-token.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="systemd-firstboot.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-firstboot.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="systemd-firstboot.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-firstboot.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-firstboot.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="systemd-fsck-root.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-fsck-root.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="systemd-fsck-root.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-fsck-root.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-fsck-root.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="systemd-fsck@dev-disk-by\\x2duuid-90a92772\\x2d34c6\\x2d4fa0\\x2db72a\\x2d12623b93216a.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-fsck@dev-disk-by\\x2duuid-90a92772\\x2d34c6\\x2d4fa0\\x2db72a\\x2d12623b93216a.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-fsck@dev-disk-by\\x2duuid-90a92772\\x2d34c6\\x2d4fa0\\x2db72a\\x2d12623b93216a.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-fsck@dev-disk-by\\x2duuid-90a92772\\x2d34c6\\x2d4fa0\\x2db72a\\x2d12623b93216a.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-fsck@dev-disk-by\\x2duuid-90a92772\\x2d34c6\\x2d4fa0\\x2db72a\\x2d12623b93216a.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-fsck@dev-disk-by\\x2duuid-F625\\x2d8DCA.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-fsck@dev-disk-by\\x2duuid-F625\\x2d8DCA.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-fsck@dev-disk-by\\x2duuid-F625\\x2d8DCA.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-fsck@dev-disk-by\\x2duuid-F625\\x2d8DCA.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-fsck@dev-disk-by\\x2duuid-F625\\x2d8DCA.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-fsckd.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="systemd-fsckd.service",state="active",type="simple"} 0
node_systemd_unit_state{name="systemd-fsckd.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="systemd-fsckd.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="systemd-fsckd.service",state="inactive",type="simple"} 1
node_systemd_unit_state{name="systemd-fsckd.socket",state="activating",type=""} 0
node_systemd_unit_state{name="systemd-fsckd.socket",state="active",type=""} 1
node_systemd_unit_state{name="systemd-fsckd.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="systemd-fsckd.socket",state="failed",type=""} 0
node_systemd_unit_state{name="systemd-fsckd.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="systemd-initctl.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="systemd-initctl.service",state="active",type="simple"} 0
node_systemd_unit_state{name="systemd-initctl.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="systemd-initctl.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="systemd-initctl.service",state="inactive",type="simple"} 1
node_systemd_unit_state{name="systemd-initctl.socket",state="activating",type=""} 0
node_systemd_unit_state{name="systemd-initctl.socket",state="active",type=""} 1
node_systemd_unit_state{name="systemd-initctl.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="systemd-initctl.socket",state="failed",type=""} 0
node_systemd_unit_state{name="systemd-initctl.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="systemd-journal-flush.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-journal-flush.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-journal-flush.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-journal-flush.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-journal-flush.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-journald-audit.socket",state="activating",type=""} 0
node_systemd_unit_state{name="systemd-journald-audit.socket",state="active",type=""} 1
node_systemd_unit_state{name="systemd-journald-audit.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="systemd-journald-audit.socket",state="failed",type=""} 0
node_systemd_unit_state{name="systemd-journald-audit.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="systemd-journald-dev-log.socket",state="activating",type=""} 0
node_systemd_unit_state{name="systemd-journald-dev-log.socket",state="active",type=""} 1
node_systemd_unit_state{name="systemd-journald-dev-log.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="systemd-journald-dev-log.socket",state="failed",type=""} 0
node_systemd_unit_state{name="systemd-journald-dev-log.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="systemd-journald.service",state="activating",type="notify"} 0
node_systemd_unit_state{name="systemd-journald.service",state="active",type="notify"} 1
node_systemd_unit_state{name="systemd-journald.service",state="deactivating",type="notify"} 0
node_systemd_unit_state{name="systemd-journald.service",state="failed",type="notify"} 0
node_systemd_unit_state{name="systemd-journald.service",state="inactive",type="notify"} 0
node_systemd_unit_state{name="systemd-journald.socket",state="activating",type=""} 0
node_systemd_unit_state{name="systemd-journald.socket",state="active",type=""} 1
node_systemd_unit_state{name="systemd-journald.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="systemd-journald.socket",state="failed",type=""} 0
node_systemd_unit_state{name="systemd-journald.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="systemd-logind.service",state="activating",type="dbus"} 0
node_systemd_unit_state{name="systemd-logind.service",state="active",type="dbus"} 1
node_systemd_unit_state{name="systemd-logind.service",state="deactivating",type="dbus"} 0
node_systemd_unit_state{name="systemd-logind.service",state="failed",type="dbus"} 0
node_systemd_unit_state{name="systemd-logind.service",state="inactive",type="dbus"} 0
node_systemd_unit_state{name="systemd-machine-id-commit.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-machine-id-commit.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="systemd-machine-id-commit.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-machine-id-commit.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-machine-id-commit.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="systemd-modules-load.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-modules-load.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-modules-load.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-modules-load.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-modules-load.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-networkd.service",state="activating",type="notify"} 0
node_systemd_unit_state{name="systemd-networkd.service",state="active",type="notify"} 0
node_systemd_unit_state{name="systemd-networkd.service",state="deactivating",type="notify"} 0
node_systemd_unit_state{name="systemd-networkd.service",state="failed",type="notify"} 0
node_systemd_unit_state{name="systemd-networkd.service",state="inactive",type="notify"} 1
node_systemd_unit_state{name="systemd-networkd.socket",state="activating",type=""} 0
node_systemd_unit_state{name="systemd-networkd.socket",state="active",type=""} 0
node_systemd_unit_state{name="systemd-networkd.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="systemd-networkd.socket",state="failed",type=""} 0
node_systemd_unit_state{name="systemd-networkd.socket",state="inactive",type=""} 1
node_systemd_unit_state{name="systemd-pcrphase-initrd.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pcrphase-initrd.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pcrphase-initrd.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pcrphase-initrd.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pcrphase-initrd.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="systemd-pcrphase-sysinit.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pcrphase-sysinit.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pcrphase-sysinit.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pcrphase-sysinit.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pcrphase-sysinit.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="systemd-pcrphase.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pcrphase.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pcrphase.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pcrphase.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pcrphase.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="systemd-pstore.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pstore.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pstore.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pstore.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-pstore.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="systemd-quotacheck.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-quotacheck.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="systemd-quotacheck.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-quotacheck.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-quotacheck.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="systemd-random-seed.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-random-seed.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-random-seed.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-random-seed.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-random-seed.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-remount-fs.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-remount-fs.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-remount-fs.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-remount-fs.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-remount-fs.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-repart.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-repart.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="systemd-repart.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-repart.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-repart.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="systemd-rfkill.service",state="activating",type="notify"} 0
node_systemd_unit_state{name="systemd-rfkill.service",state="active",type="notify"} 0
node_systemd_unit_state{name="systemd-rfkill.service",state="deactivating",type="notify"} 0
node_systemd_unit_state{name="systemd-rfkill.service",state="failed",type="notify"} 0
node_systemd_unit_state{name="systemd-rfkill.service",state="inactive",type="notify"} 1
node_systemd_unit_state{name="systemd-rfkill.socket",state="activating",type=""} 0
node_systemd_unit_state{name="systemd-rfkill.socket",state="active",type=""} 1
node_systemd_unit_state{name="systemd-rfkill.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="systemd-rfkill.socket",state="failed",type=""} 0
node_systemd_unit_state{name="systemd-rfkill.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="systemd-sysctl.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-sysctl.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-sysctl.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-sysctl.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-sysctl.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-sysext.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-sysext.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="systemd-sysext.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-sysext.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-sysext.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="systemd-sysusers.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-sysusers.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-sysusers.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-sysusers.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-sysusers.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-tmpfiles-clean.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-tmpfiles-clean.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="systemd-tmpfiles-clean.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-tmpfiles-clean.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-tmpfiles-clean.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="systemd-tmpfiles-clean.timer",state="activating",type=""} 0
node_systemd_unit_state{name="systemd-tmpfiles-clean.timer",state="active",type=""} 1
node_systemd_unit_state{name="systemd-tmpfiles-clean.timer",state="deactivating",type=""} 0
node_systemd_unit_state{name="systemd-tmpfiles-clean.timer",state="failed",type=""} 0
node_systemd_unit_state{name="systemd-tmpfiles-clean.timer",state="inactive",type=""} 0
node_systemd_unit_state{name="systemd-tmpfiles-setup-dev.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-tmpfiles-setup-dev.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-tmpfiles-setup-dev.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-tmpfiles-setup-dev.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-tmpfiles-setup-dev.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-tmpfiles-setup.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-tmpfiles-setup.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-tmpfiles-setup.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-tmpfiles-setup.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-tmpfiles-setup.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-udev-settle.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-udev-settle.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-udev-settle.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-udev-settle.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-udev-settle.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-udev-trigger.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-udev-trigger.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-udev-trigger.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-udev-trigger.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-udev-trigger.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-udevd-control.socket",state="activating",type=""} 0
node_systemd_unit_state{name="systemd-udevd-control.socket",state="active",type=""} 1
node_systemd_unit_state{name="systemd-udevd-control.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="systemd-udevd-control.socket",state="failed",type=""} 0
node_systemd_unit_state{name="systemd-udevd-control.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="systemd-udevd-kernel.socket",state="activating",type=""} 0
node_systemd_unit_state{name="systemd-udevd-kernel.socket",state="active",type=""} 1
node_systemd_unit_state{name="systemd-udevd-kernel.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="systemd-udevd-kernel.socket",state="failed",type=""} 0
node_systemd_unit_state{name="systemd-udevd-kernel.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="systemd-udevd.service",state="activating",type="notify"} 0
node_systemd_unit_state{name="systemd-udevd.service",state="active",type="notify"} 1
node_systemd_unit_state{name="systemd-udevd.service",state="deactivating",type="notify"} 0
node_systemd_unit_state{name="systemd-udevd.service",state="failed",type="notify"} 0
node_systemd_unit_state{name="systemd-udevd.service",state="inactive",type="notify"} 0
node_systemd_unit_state{name="systemd-update-utmp-runlevel.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-update-utmp-runlevel.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="systemd-update-utmp-runlevel.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-update-utmp-runlevel.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-update-utmp-runlevel.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="systemd-update-utmp.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-update-utmp.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-update-utmp.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-update-utmp.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-update-utmp.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="systemd-user-sessions.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-user-sessions.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="systemd-user-sessions.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="systemd-user-sessions.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="systemd-user-sessions.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="user-runtime-dir@0.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="user-runtime-dir@0.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="user-runtime-dir@0.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="user-runtime-dir@0.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="user-runtime-dir@0.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="user-runtime-dir@1000.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="user-runtime-dir@1000.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="user-runtime-dir@1000.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="user-runtime-dir@1000.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="user-runtime-dir@1000.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="user@0.service",state="activating",type="notify"} 0
node_systemd_unit_state{name="user@0.service",state="active",type="notify"} 1
node_systemd_unit_state{name="user@0.service",state="deactivating",type="notify"} 0
node_systemd_unit_state{name="user@0.service",state="failed",type="notify"} 0
node_systemd_unit_state{name="user@0.service",state="inactive",type="notify"} 0
node_systemd_unit_state{name="user@1000.service",state="activating",type="notify"} 0
node_systemd_unit_state{name="user@1000.service",state="active",type="notify"} 1
node_systemd_unit_state{name="user@1000.service",state="deactivating",type="notify"} 0
node_systemd_unit_state{name="user@1000.service",state="failed",type="notify"} 0
node_systemd_unit_state{name="user@1000.service",state="inactive",type="notify"} 0
node_systemd_unit_state{name="uuidd.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="uuidd.service",state="active",type="simple"} 0
node_systemd_unit_state{name="uuidd.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="uuidd.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="uuidd.service",state="inactive",type="simple"} 1
node_systemd_unit_state{name="uuidd.socket",state="activating",type=""} 0
node_systemd_unit_state{name="uuidd.socket",state="active",type=""} 1
node_systemd_unit_state{name="uuidd.socket",state="deactivating",type=""} 0
node_systemd_unit_state{name="uuidd.socket",state="failed",type=""} 0
node_systemd_unit_state{name="uuidd.socket",state="inactive",type=""} 0
node_systemd_unit_state{name="watchdog-mux.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="watchdog-mux.service",state="active",type="simple"} 0
node_systemd_unit_state{name="watchdog-mux.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="watchdog-mux.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="watchdog-mux.service",state="inactive",type="simple"} 1
node_systemd_unit_state{name="zfs-import-cache.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="zfs-import-cache.service",state="active",type="oneshot"} 0
node_systemd_unit_state{name="zfs-import-cache.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="zfs-import-cache.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="zfs-import-cache.service",state="inactive",type="oneshot"} 1
node_systemd_unit_state{name="zfs-import-scan.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="zfs-import-scan.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="zfs-import-scan.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="zfs-import-scan.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="zfs-import-scan.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="zfs-mount.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="zfs-mount.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="zfs-mount.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="zfs-mount.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="zfs-mount.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="zfs-share.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="zfs-share.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="zfs-share.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="zfs-share.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="zfs-share.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="zfs-volume-wait.service",state="activating",type="oneshot"} 0
node_systemd_unit_state{name="zfs-volume-wait.service",state="active",type="oneshot"} 1
node_systemd_unit_state{name="zfs-volume-wait.service",state="deactivating",type="oneshot"} 0
node_systemd_unit_state{name="zfs-volume-wait.service",state="failed",type="oneshot"} 0
node_systemd_unit_state{name="zfs-volume-wait.service",state="inactive",type="oneshot"} 0
node_systemd_unit_state{name="zfs-zed.service",state="activating",type="simple"} 0
node_systemd_unit_state{name="zfs-zed.service",state="active",type="simple"} 1
node_systemd_unit_state{name="zfs-zed.service",state="deactivating",type="simple"} 0
node_systemd_unit_state{name="zfs-zed.service",state="failed",type="simple"} 0
node_systemd_unit_state{name="zfs-zed.service",state="inactive",type="simple"} 0
# HELP node_systemd_units Summary of systemd unit states
# TYPE node_systemd_units gauge
node_systemd_units{state="activating"} 1
node_systemd_units{state="active"} 361
node_systemd_units{state="deactivating"} 0
node_systemd_units{state="failed"} 0
node_systemd_units{state="inactive"} 130
# HELP node_systemd_version Detected systemd version
# TYPE node_systemd_version gauge
node_systemd_version{version="252.22-1~deb12u1"} 252.22
# HELP node_textfile_mtime_seconds Unixtime mtime of textfiles successfully read.
# TYPE node_textfile_mtime_seconds gauge
node_textfile_mtime_seconds{file="/var/lib/prometheus/node-exporter/apt.prom"} 1.783172336e+09
node_textfile_mtime_seconds{file="/var/lib/prometheus/node-exporter/nvme.prom"} 1.783172335e+09
node_textfile_mtime_seconds{file="/var/lib/prometheus/node-exporter/smartmon.prom"} 1.783172335e+09
# HELP node_textfile_scrape_error 1 if there was an error opening or reading a file, 0 otherwise
# TYPE node_textfile_scrape_error gauge
node_textfile_scrape_error 0
# HELP node_thermal_zone_temp Zone temperature in Celsius
# TYPE node_thermal_zone_temp gauge
node_thermal_zone_temp{type="x86_pkg_temp",zone="1"} 38
# HELP node_time_clocksource_available_info Available clocksources read from '/sys/devices/system/clocksource'.
# TYPE node_time_clocksource_available_info gauge
node_time_clocksource_available_info{clocksource="acpi_pm",device="0"} 1
node_time_clocksource_available_info{clocksource="tsc",device="0"} 1
# HELP node_time_clocksource_current_info Current clocksource read from '/sys/devices/system/clocksource'.
# TYPE node_time_clocksource_current_info gauge
node_time_clocksource_current_info{clocksource="tsc",device="0"} 1
# HELP node_time_seconds System time in seconds since epoch (1970).
# TYPE node_time_seconds gauge
node_time_seconds 1.7831726341591196e+09
# HELP node_time_zone_offset_seconds System time zone offset in seconds.
# TYPE node_time_zone_offset_seconds gauge
node_time_zone_offset_seconds{time_zone="EEST"} 10800
# HELP node_timex_estimated_error_seconds Estimated error in seconds.
# TYPE node_timex_estimated_error_seconds gauge
node_timex_estimated_error_seconds 0.001977
# HELP node_timex_frequency_adjustment_ratio Local clock frequency adjustment.
# TYPE node_timex_frequency_adjustment_ratio gauge
node_timex_frequency_adjustment_ratio 1.000010360107422
# HELP node_timex_loop_time_constant Phase-locked loop time constant.
# TYPE node_timex_loop_time_constant gauge
node_timex_loop_time_constant 2
# HELP node_timex_maxerror_seconds Maximum error in seconds.
# TYPE node_timex_maxerror_seconds gauge
node_timex_maxerror_seconds 0.37161
# HELP node_timex_offset_seconds Time offset in between local system and reference clock.
# TYPE node_timex_offset_seconds gauge
node_timex_offset_seconds 0
# HELP node_timex_pps_calibration_total Pulse per second count of calibration intervals.
# TYPE node_timex_pps_calibration_total counter
node_timex_pps_calibration_total 0
# HELP node_timex_pps_error_total Pulse per second count of calibration errors.
# TYPE node_timex_pps_error_total counter
node_timex_pps_error_total 0
# HELP node_timex_pps_frequency_hertz Pulse per second frequency.
# TYPE node_timex_pps_frequency_hertz gauge
node_timex_pps_frequency_hertz 0
# HELP node_timex_pps_jitter_seconds Pulse per second jitter.
# TYPE node_timex_pps_jitter_seconds gauge
node_timex_pps_jitter_seconds 0
# HELP node_timex_pps_jitter_total Pulse per second count of jitter limit exceeded events.
# TYPE node_timex_pps_jitter_total counter
node_timex_pps_jitter_total 0
# HELP node_timex_pps_shift_seconds Pulse per second interval duration.
# TYPE node_timex_pps_shift_seconds gauge
node_timex_pps_shift_seconds 0
# HELP node_timex_pps_stability_exceeded_total Pulse per second count of stability limit exceeded events.
# TYPE node_timex_pps_stability_exceeded_total counter
node_timex_pps_stability_exceeded_total 0
# HELP node_timex_pps_stability_hertz Pulse per second stability, average of recent frequency changes.
# TYPE node_timex_pps_stability_hertz gauge
node_timex_pps_stability_hertz 0
# HELP node_timex_status Value of the status array bits.
# TYPE node_timex_status gauge
node_timex_status 0
# HELP node_timex_sync_status Is clock synchronized to a reliable server (1 = yes, 0 = no).
# TYPE node_timex_sync_status gauge
node_timex_sync_status 1
# HELP node_timex_tai_offset_seconds International Atomic Time (TAI) offset.
# TYPE node_timex_tai_offset_seconds gauge
node_timex_tai_offset_seconds 37
# HELP node_timex_tick_seconds Seconds between clock ticks.
# TYPE node_timex_tick_seconds gauge
node_timex_tick_seconds 0.01
# HELP node_udp_queues Number of allocated memory in the kernel for UDP datagrams in bytes.
# TYPE node_udp_queues gauge
node_udp_queues{ip="v4",queue="rx"} 0
node_udp_queues{ip="v4",queue="tx"} 0
node_udp_queues{ip="v6",queue="rx"} 0
node_udp_queues{ip="v6",queue="tx"} 0
# HELP node_uname_info Labeled system information as provided by the uname system call.
# TYPE node_uname_info gauge
node_uname_info{domainname="(none)",machine="x86_64",nodename="optipi",release="6.8.4-3-pve",sysname="Linux",version="#1 SMP PREEMPT_DYNAMIC PMX 6.8.4-3 (2024-05-02T11:55Z)"} 1
# HELP node_vmstat_oom_kill /proc/vmstat information field oom_kill.
# TYPE node_vmstat_oom_kill untyped
node_vmstat_oom_kill 0
# HELP node_vmstat_pgfault /proc/vmstat information field pgfault.
# TYPE node_vmstat_pgfault untyped
node_vmstat_pgfault 9.7180698e+08
# HELP node_vmstat_pgmajfault /proc/vmstat information field pgmajfault.
# TYPE node_vmstat_pgmajfault untyped
node_vmstat_pgmajfault 12757
# HELP node_vmstat_pgpgin /proc/vmstat information field pgpgin.
# TYPE node_vmstat_pgpgin untyped
node_vmstat_pgpgin 2.7724296e+07
# HELP node_vmstat_pgpgout /proc/vmstat information field pgpgout.
# TYPE node_vmstat_pgpgout untyped
node_vmstat_pgpgout 4.0314755e+07
# HELP node_vmstat_pswpin /proc/vmstat information field pswpin.
# TYPE node_vmstat_pswpin untyped
node_vmstat_pswpin 0
# HELP node_vmstat_pswpout /proc/vmstat information field pswpout.
# TYPE node_vmstat_pswpout untyped
node_vmstat_pswpout 0
# HELP node_zfs_abd_linear_cnt kstat.zfs.misc.abdstats.linear_cnt
# TYPE node_zfs_abd_linear_cnt untyped
node_zfs_abd_linear_cnt 0
# HELP node_zfs_abd_linear_data_size kstat.zfs.misc.abdstats.linear_data_size
# TYPE node_zfs_abd_linear_data_size untyped
node_zfs_abd_linear_data_size 0
# HELP node_zfs_abd_scatter_chunk_waste kstat.zfs.misc.abdstats.scatter_chunk_waste
# TYPE node_zfs_abd_scatter_chunk_waste untyped
node_zfs_abd_scatter_chunk_waste 0
# HELP node_zfs_abd_scatter_cnt kstat.zfs.misc.abdstats.scatter_cnt
# TYPE node_zfs_abd_scatter_cnt untyped
node_zfs_abd_scatter_cnt 1
# HELP node_zfs_abd_scatter_data_size kstat.zfs.misc.abdstats.scatter_data_size
# TYPE node_zfs_abd_scatter_data_size untyped
node_zfs_abd_scatter_data_size 4096
# HELP node_zfs_abd_scatter_order_0 kstat.zfs.misc.abdstats.scatter_order_0
# TYPE node_zfs_abd_scatter_order_0 untyped
node_zfs_abd_scatter_order_0 0
# HELP node_zfs_abd_scatter_order_1 kstat.zfs.misc.abdstats.scatter_order_1
# TYPE node_zfs_abd_scatter_order_1 untyped
node_zfs_abd_scatter_order_1 0
# HELP node_zfs_abd_scatter_order_2 kstat.zfs.misc.abdstats.scatter_order_2
# TYPE node_zfs_abd_scatter_order_2 untyped
node_zfs_abd_scatter_order_2 0
# HELP node_zfs_abd_scatter_order_3 kstat.zfs.misc.abdstats.scatter_order_3
# TYPE node_zfs_abd_scatter_order_3 untyped
node_zfs_abd_scatter_order_3 0
# HELP node_zfs_abd_scatter_order_4 kstat.zfs.misc.abdstats.scatter_order_4
# TYPE node_zfs_abd_scatter_order_4 untyped
node_zfs_abd_scatter_order_4 0
# HELP node_zfs_abd_scatter_order_5 kstat.zfs.misc.abdstats.scatter_order_5
# TYPE node_zfs_abd_scatter_order_5 untyped
node_zfs_abd_scatter_order_5 0
# HELP node_zfs_abd_scatter_order_6 kstat.zfs.misc.abdstats.scatter_order_6
# TYPE node_zfs_abd_scatter_order_6 untyped
node_zfs_abd_scatter_order_6 0
# HELP node_zfs_abd_scatter_order_7 kstat.zfs.misc.abdstats.scatter_order_7
# TYPE node_zfs_abd_scatter_order_7 untyped
node_zfs_abd_scatter_order_7 0
# HELP node_zfs_abd_scatter_order_8 kstat.zfs.misc.abdstats.scatter_order_8
# TYPE node_zfs_abd_scatter_order_8 untyped
node_zfs_abd_scatter_order_8 0
# HELP node_zfs_abd_scatter_order_9 kstat.zfs.misc.abdstats.scatter_order_9
# TYPE node_zfs_abd_scatter_order_9 untyped
node_zfs_abd_scatter_order_9 0
# HELP node_zfs_abd_scatter_page_alloc_retry kstat.zfs.misc.abdstats.scatter_page_alloc_retry
# TYPE node_zfs_abd_scatter_page_alloc_retry untyped
node_zfs_abd_scatter_page_alloc_retry 0
# HELP node_zfs_abd_scatter_page_multi_chunk kstat.zfs.misc.abdstats.scatter_page_multi_chunk
# TYPE node_zfs_abd_scatter_page_multi_chunk untyped
node_zfs_abd_scatter_page_multi_chunk 1
# HELP node_zfs_abd_scatter_page_multi_zone kstat.zfs.misc.abdstats.scatter_page_multi_zone
# TYPE node_zfs_abd_scatter_page_multi_zone untyped
node_zfs_abd_scatter_page_multi_zone 0
# HELP node_zfs_abd_scatter_sg_table_retry kstat.zfs.misc.abdstats.scatter_sg_table_retry
# TYPE node_zfs_abd_scatter_sg_table_retry untyped
node_zfs_abd_scatter_sg_table_retry 0
# HELP node_zfs_abd_struct_size kstat.zfs.misc.abdstats.struct_size
# TYPE node_zfs_abd_struct_size untyped
node_zfs_abd_struct_size 104
# HELP node_zfs_arc_abd_chunk_waste_size kstat.zfs.misc.arcstats.abd_chunk_waste_size
# TYPE node_zfs_arc_abd_chunk_waste_size untyped
node_zfs_arc_abd_chunk_waste_size 0
# HELP node_zfs_arc_access_skip kstat.zfs.misc.arcstats.access_skip
# TYPE node_zfs_arc_access_skip untyped
node_zfs_arc_access_skip 0
# HELP node_zfs_arc_anon_data kstat.zfs.misc.arcstats.anon_data
# TYPE node_zfs_arc_anon_data untyped
node_zfs_arc_anon_data 0
# HELP node_zfs_arc_anon_evictable_data kstat.zfs.misc.arcstats.anon_evictable_data
# TYPE node_zfs_arc_anon_evictable_data untyped
node_zfs_arc_anon_evictable_data 0
# HELP node_zfs_arc_anon_evictable_metadata kstat.zfs.misc.arcstats.anon_evictable_metadata
# TYPE node_zfs_arc_anon_evictable_metadata untyped
node_zfs_arc_anon_evictable_metadata 0
# HELP node_zfs_arc_anon_metadata kstat.zfs.misc.arcstats.anon_metadata
# TYPE node_zfs_arc_anon_metadata untyped
node_zfs_arc_anon_metadata 0
# HELP node_zfs_arc_anon_size kstat.zfs.misc.arcstats.anon_size
# TYPE node_zfs_arc_anon_size untyped
node_zfs_arc_anon_size 0
# HELP node_zfs_arc_arc_dnode_limit kstat.zfs.misc.arcstats.arc_dnode_limit
# TYPE node_zfs_arc_arc_dnode_limit untyped
node_zfs_arc_arc_dnode_limit 3.357728358e+09
# HELP node_zfs_arc_arc_loaned_bytes kstat.zfs.misc.arcstats.arc_loaned_bytes
# TYPE node_zfs_arc_arc_loaned_bytes untyped
node_zfs_arc_arc_loaned_bytes 0
# HELP node_zfs_arc_arc_meta_used kstat.zfs.misc.arcstats.arc_meta_used
# TYPE node_zfs_arc_arc_meta_used untyped
node_zfs_arc_arc_meta_used 2880
# HELP node_zfs_arc_arc_need_free kstat.zfs.misc.arcstats.arc_need_free
# TYPE node_zfs_arc_arc_need_free untyped
node_zfs_arc_arc_need_free 0
# HELP node_zfs_arc_arc_no_grow kstat.zfs.misc.arcstats.arc_no_grow
# TYPE node_zfs_arc_arc_no_grow untyped
node_zfs_arc_arc_no_grow 0
# HELP node_zfs_arc_arc_prune kstat.zfs.misc.arcstats.arc_prune
# TYPE node_zfs_arc_arc_prune untyped
node_zfs_arc_arc_prune 0
# HELP node_zfs_arc_arc_raw_size kstat.zfs.misc.arcstats.arc_raw_size
# TYPE node_zfs_arc_arc_raw_size untyped
node_zfs_arc_arc_raw_size 0
# HELP node_zfs_arc_arc_sys_free kstat.zfs.misc.arcstats.arc_sys_free
# TYPE node_zfs_arc_arc_sys_free untyped
node_zfs_arc_arc_sys_free 2.347350784e+09
# HELP node_zfs_arc_arc_tempreserve kstat.zfs.misc.arcstats.arc_tempreserve
# TYPE node_zfs_arc_arc_tempreserve untyped
node_zfs_arc_arc_tempreserve 0
# HELP node_zfs_arc_async_upgrade_sync kstat.zfs.misc.arcstats.async_upgrade_sync
# TYPE node_zfs_arc_async_upgrade_sync untyped
node_zfs_arc_async_upgrade_sync 0
# HELP node_zfs_arc_bonus_size kstat.zfs.misc.arcstats.bonus_size
# TYPE node_zfs_arc_bonus_size untyped
node_zfs_arc_bonus_size 0
# HELP node_zfs_arc_c kstat.zfs.misc.arcstats.c
# TYPE node_zfs_arc_c untyped
node_zfs_arc_c 2.098580224e+09
# HELP node_zfs_arc_c_max kstat.zfs.misc.arcstats.c_max
# TYPE node_zfs_arc_c_max untyped
node_zfs_arc_c_max 3.3577283584e+10
# HELP node_zfs_arc_c_min kstat.zfs.misc.arcstats.c_min
# TYPE node_zfs_arc_c_min untyped
node_zfs_arc_c_min 2.098580224e+09
# HELP node_zfs_arc_cached_only_in_progress kstat.zfs.misc.arcstats.cached_only_in_progress
# TYPE node_zfs_arc_cached_only_in_progress untyped
node_zfs_arc_cached_only_in_progress 0
# HELP node_zfs_arc_compressed_size kstat.zfs.misc.arcstats.compressed_size
# TYPE node_zfs_arc_compressed_size untyped
node_zfs_arc_compressed_size 0
# HELP node_zfs_arc_data_size kstat.zfs.misc.arcstats.data_size
# TYPE node_zfs_arc_data_size untyped
node_zfs_arc_data_size 0
# HELP node_zfs_arc_dbuf_size kstat.zfs.misc.arcstats.dbuf_size
# TYPE node_zfs_arc_dbuf_size untyped
node_zfs_arc_dbuf_size 0
# HELP node_zfs_arc_deleted kstat.zfs.misc.arcstats.deleted
# TYPE node_zfs_arc_deleted untyped
node_zfs_arc_deleted 0
# HELP node_zfs_arc_demand_data_hits kstat.zfs.misc.arcstats.demand_data_hits
# TYPE node_zfs_arc_demand_data_hits untyped
node_zfs_arc_demand_data_hits 0
# HELP node_zfs_arc_demand_data_iohits kstat.zfs.misc.arcstats.demand_data_iohits
# TYPE node_zfs_arc_demand_data_iohits untyped
node_zfs_arc_demand_data_iohits 0
# HELP node_zfs_arc_demand_data_misses kstat.zfs.misc.arcstats.demand_data_misses
# TYPE node_zfs_arc_demand_data_misses untyped
node_zfs_arc_demand_data_misses 0
# HELP node_zfs_arc_demand_hit_predictive_prefetch kstat.zfs.misc.arcstats.demand_hit_predictive_prefetch
# TYPE node_zfs_arc_demand_hit_predictive_prefetch untyped
node_zfs_arc_demand_hit_predictive_prefetch 0
# HELP node_zfs_arc_demand_hit_prescient_prefetch kstat.zfs.misc.arcstats.demand_hit_prescient_prefetch
# TYPE node_zfs_arc_demand_hit_prescient_prefetch untyped
node_zfs_arc_demand_hit_prescient_prefetch 0
# HELP node_zfs_arc_demand_iohit_predictive_prefetch kstat.zfs.misc.arcstats.demand_iohit_predictive_prefetch
# TYPE node_zfs_arc_demand_iohit_predictive_prefetch untyped
node_zfs_arc_demand_iohit_predictive_prefetch 0
# HELP node_zfs_arc_demand_iohit_prescient_prefetch kstat.zfs.misc.arcstats.demand_iohit_prescient_prefetch
# TYPE node_zfs_arc_demand_iohit_prescient_prefetch untyped
node_zfs_arc_demand_iohit_prescient_prefetch 0
# HELP node_zfs_arc_demand_metadata_hits kstat.zfs.misc.arcstats.demand_metadata_hits
# TYPE node_zfs_arc_demand_metadata_hits untyped
node_zfs_arc_demand_metadata_hits 0
# HELP node_zfs_arc_demand_metadata_iohits kstat.zfs.misc.arcstats.demand_metadata_iohits
# TYPE node_zfs_arc_demand_metadata_iohits untyped
node_zfs_arc_demand_metadata_iohits 0
# HELP node_zfs_arc_demand_metadata_misses kstat.zfs.misc.arcstats.demand_metadata_misses
# TYPE node_zfs_arc_demand_metadata_misses untyped
node_zfs_arc_demand_metadata_misses 0
# HELP node_zfs_arc_dnode_size kstat.zfs.misc.arcstats.dnode_size
# TYPE node_zfs_arc_dnode_size untyped
node_zfs_arc_dnode_size 0
# HELP node_zfs_arc_evict_l2_cached kstat.zfs.misc.arcstats.evict_l2_cached
# TYPE node_zfs_arc_evict_l2_cached untyped
node_zfs_arc_evict_l2_cached 0
# HELP node_zfs_arc_evict_l2_eligible kstat.zfs.misc.arcstats.evict_l2_eligible
# TYPE node_zfs_arc_evict_l2_eligible untyped
node_zfs_arc_evict_l2_eligible 0
# HELP node_zfs_arc_evict_l2_eligible_mfu kstat.zfs.misc.arcstats.evict_l2_eligible_mfu
# TYPE node_zfs_arc_evict_l2_eligible_mfu untyped
node_zfs_arc_evict_l2_eligible_mfu 0
# HELP node_zfs_arc_evict_l2_eligible_mru kstat.zfs.misc.arcstats.evict_l2_eligible_mru
# TYPE node_zfs_arc_evict_l2_eligible_mru untyped
node_zfs_arc_evict_l2_eligible_mru 0
# HELP node_zfs_arc_evict_l2_ineligible kstat.zfs.misc.arcstats.evict_l2_ineligible
# TYPE node_zfs_arc_evict_l2_ineligible untyped
node_zfs_arc_evict_l2_ineligible 0
# HELP node_zfs_arc_evict_l2_skip kstat.zfs.misc.arcstats.evict_l2_skip
# TYPE node_zfs_arc_evict_l2_skip untyped
node_zfs_arc_evict_l2_skip 0
# HELP node_zfs_arc_evict_not_enough kstat.zfs.misc.arcstats.evict_not_enough
# TYPE node_zfs_arc_evict_not_enough untyped
node_zfs_arc_evict_not_enough 0
# HELP node_zfs_arc_evict_skip kstat.zfs.misc.arcstats.evict_skip
# TYPE node_zfs_arc_evict_skip untyped
node_zfs_arc_evict_skip 0
# HELP node_zfs_arc_hash_chain_max kstat.zfs.misc.arcstats.hash_chain_max
# TYPE node_zfs_arc_hash_chain_max untyped
node_zfs_arc_hash_chain_max 0
# HELP node_zfs_arc_hash_chains kstat.zfs.misc.arcstats.hash_chains
# TYPE node_zfs_arc_hash_chains untyped
node_zfs_arc_hash_chains 0
# HELP node_zfs_arc_hash_collisions kstat.zfs.misc.arcstats.hash_collisions
# TYPE node_zfs_arc_hash_collisions untyped
node_zfs_arc_hash_collisions 0
# HELP node_zfs_arc_hash_elements kstat.zfs.misc.arcstats.hash_elements
# TYPE node_zfs_arc_hash_elements untyped
node_zfs_arc_hash_elements 0
# HELP node_zfs_arc_hash_elements_max kstat.zfs.misc.arcstats.hash_elements_max
# TYPE node_zfs_arc_hash_elements_max untyped
node_zfs_arc_hash_elements_max 0
# HELP node_zfs_arc_hdr_size kstat.zfs.misc.arcstats.hdr_size
# TYPE node_zfs_arc_hdr_size untyped
node_zfs_arc_hdr_size 2880
# HELP node_zfs_arc_hits kstat.zfs.misc.arcstats.hits
# TYPE node_zfs_arc_hits untyped
node_zfs_arc_hits 0
# HELP node_zfs_arc_iohits kstat.zfs.misc.arcstats.iohits
# TYPE node_zfs_arc_iohits untyped
node_zfs_arc_iohits 0
# HELP node_zfs_arc_l2_abort_lowmem kstat.zfs.misc.arcstats.l2_abort_lowmem
# TYPE node_zfs_arc_l2_abort_lowmem untyped
node_zfs_arc_l2_abort_lowmem 0
# HELP node_zfs_arc_l2_asize kstat.zfs.misc.arcstats.l2_asize
# TYPE node_zfs_arc_l2_asize untyped
node_zfs_arc_l2_asize 0
# HELP node_zfs_arc_l2_bufc_data_asize kstat.zfs.misc.arcstats.l2_bufc_data_asize
# TYPE node_zfs_arc_l2_bufc_data_asize untyped
node_zfs_arc_l2_bufc_data_asize 0
# HELP node_zfs_arc_l2_bufc_metadata_asize kstat.zfs.misc.arcstats.l2_bufc_metadata_asize
# TYPE node_zfs_arc_l2_bufc_metadata_asize untyped
node_zfs_arc_l2_bufc_metadata_asize 0
# HELP node_zfs_arc_l2_cksum_bad kstat.zfs.misc.arcstats.l2_cksum_bad
# TYPE node_zfs_arc_l2_cksum_bad untyped
node_zfs_arc_l2_cksum_bad 0
# HELP node_zfs_arc_l2_data_to_meta_ratio kstat.zfs.misc.arcstats.l2_data_to_meta_ratio
# TYPE node_zfs_arc_l2_data_to_meta_ratio untyped
node_zfs_arc_l2_data_to_meta_ratio 0
# HELP node_zfs_arc_l2_evict_l1cached kstat.zfs.misc.arcstats.l2_evict_l1cached
# TYPE node_zfs_arc_l2_evict_l1cached untyped
node_zfs_arc_l2_evict_l1cached 0
# HELP node_zfs_arc_l2_evict_lock_retry kstat.zfs.misc.arcstats.l2_evict_lock_retry
# TYPE node_zfs_arc_l2_evict_lock_retry untyped
node_zfs_arc_l2_evict_lock_retry 0
# HELP node_zfs_arc_l2_evict_reading kstat.zfs.misc.arcstats.l2_evict_reading
# TYPE node_zfs_arc_l2_evict_reading untyped
node_zfs_arc_l2_evict_reading 0
# HELP node_zfs_arc_l2_feeds kstat.zfs.misc.arcstats.l2_feeds
# TYPE node_zfs_arc_l2_feeds untyped
node_zfs_arc_l2_feeds 0
# HELP node_zfs_arc_l2_free_on_write kstat.zfs.misc.arcstats.l2_free_on_write
# TYPE node_zfs_arc_l2_free_on_write untyped
node_zfs_arc_l2_free_on_write 0
# HELP node_zfs_arc_l2_hdr_size kstat.zfs.misc.arcstats.l2_hdr_size
# TYPE node_zfs_arc_l2_hdr_size untyped
node_zfs_arc_l2_hdr_size 0
# HELP node_zfs_arc_l2_hits kstat.zfs.misc.arcstats.l2_hits
# TYPE node_zfs_arc_l2_hits untyped
node_zfs_arc_l2_hits 0
# HELP node_zfs_arc_l2_io_error kstat.zfs.misc.arcstats.l2_io_error
# TYPE node_zfs_arc_l2_io_error untyped
node_zfs_arc_l2_io_error 0
# HELP node_zfs_arc_l2_log_blk_asize kstat.zfs.misc.arcstats.l2_log_blk_asize
# TYPE node_zfs_arc_l2_log_blk_asize untyped
node_zfs_arc_l2_log_blk_asize 0
# HELP node_zfs_arc_l2_log_blk_avg_asize kstat.zfs.misc.arcstats.l2_log_blk_avg_asize
# TYPE node_zfs_arc_l2_log_blk_avg_asize untyped
node_zfs_arc_l2_log_blk_avg_asize 0
# HELP node_zfs_arc_l2_log_blk_count kstat.zfs.misc.arcstats.l2_log_blk_count
# TYPE node_zfs_arc_l2_log_blk_count untyped
node_zfs_arc_l2_log_blk_count 0
# HELP node_zfs_arc_l2_log_blk_writes kstat.zfs.misc.arcstats.l2_log_blk_writes
# TYPE node_zfs_arc_l2_log_blk_writes untyped
node_zfs_arc_l2_log_blk_writes 0
# HELP node_zfs_arc_l2_mfu_asize kstat.zfs.misc.arcstats.l2_mfu_asize
# TYPE node_zfs_arc_l2_mfu_asize untyped
node_zfs_arc_l2_mfu_asize 0
# HELP node_zfs_arc_l2_misses kstat.zfs.misc.arcstats.l2_misses
# TYPE node_zfs_arc_l2_misses untyped
node_zfs_arc_l2_misses 0
# HELP node_zfs_arc_l2_mru_asize kstat.zfs.misc.arcstats.l2_mru_asize
# TYPE node_zfs_arc_l2_mru_asize untyped
node_zfs_arc_l2_mru_asize 0
# HELP node_zfs_arc_l2_prefetch_asize kstat.zfs.misc.arcstats.l2_prefetch_asize
# TYPE node_zfs_arc_l2_prefetch_asize untyped
node_zfs_arc_l2_prefetch_asize 0
# HELP node_zfs_arc_l2_read_bytes kstat.zfs.misc.arcstats.l2_read_bytes
# TYPE node_zfs_arc_l2_read_bytes untyped
node_zfs_arc_l2_read_bytes 0
# HELP node_zfs_arc_l2_rebuild_asize kstat.zfs.misc.arcstats.l2_rebuild_asize
# TYPE node_zfs_arc_l2_rebuild_asize untyped
node_zfs_arc_l2_rebuild_asize 0
# HELP node_zfs_arc_l2_rebuild_bufs kstat.zfs.misc.arcstats.l2_rebuild_bufs
# TYPE node_zfs_arc_l2_rebuild_bufs untyped
node_zfs_arc_l2_rebuild_bufs 0
# HELP node_zfs_arc_l2_rebuild_bufs_precached kstat.zfs.misc.arcstats.l2_rebuild_bufs_precached
# TYPE node_zfs_arc_l2_rebuild_bufs_precached untyped
node_zfs_arc_l2_rebuild_bufs_precached 0
# HELP node_zfs_arc_l2_rebuild_cksum_lb_errors kstat.zfs.misc.arcstats.l2_rebuild_cksum_lb_errors
# TYPE node_zfs_arc_l2_rebuild_cksum_lb_errors untyped
node_zfs_arc_l2_rebuild_cksum_lb_errors 0
# HELP node_zfs_arc_l2_rebuild_dh_errors kstat.zfs.misc.arcstats.l2_rebuild_dh_errors
# TYPE node_zfs_arc_l2_rebuild_dh_errors untyped
node_zfs_arc_l2_rebuild_dh_errors 0
# HELP node_zfs_arc_l2_rebuild_io_errors kstat.zfs.misc.arcstats.l2_rebuild_io_errors
# TYPE node_zfs_arc_l2_rebuild_io_errors untyped
node_zfs_arc_l2_rebuild_io_errors 0
# HELP node_zfs_arc_l2_rebuild_log_blks kstat.zfs.misc.arcstats.l2_rebuild_log_blks
# TYPE node_zfs_arc_l2_rebuild_log_blks untyped
node_zfs_arc_l2_rebuild_log_blks 0
# HELP node_zfs_arc_l2_rebuild_lowmem kstat.zfs.misc.arcstats.l2_rebuild_lowmem
# TYPE node_zfs_arc_l2_rebuild_lowmem untyped
node_zfs_arc_l2_rebuild_lowmem 0
# HELP node_zfs_arc_l2_rebuild_size kstat.zfs.misc.arcstats.l2_rebuild_size
# TYPE node_zfs_arc_l2_rebuild_size untyped
node_zfs_arc_l2_rebuild_size 0
# HELP node_zfs_arc_l2_rebuild_success kstat.zfs.misc.arcstats.l2_rebuild_success
# TYPE node_zfs_arc_l2_rebuild_success untyped
node_zfs_arc_l2_rebuild_success 0
# HELP node_zfs_arc_l2_rebuild_unsupported kstat.zfs.misc.arcstats.l2_rebuild_unsupported
# TYPE node_zfs_arc_l2_rebuild_unsupported untyped
node_zfs_arc_l2_rebuild_unsupported 0
# HELP node_zfs_arc_l2_rw_clash kstat.zfs.misc.arcstats.l2_rw_clash
# TYPE node_zfs_arc_l2_rw_clash untyped
node_zfs_arc_l2_rw_clash 0
# HELP node_zfs_arc_l2_size kstat.zfs.misc.arcstats.l2_size
# TYPE node_zfs_arc_l2_size untyped
node_zfs_arc_l2_size 0
# HELP node_zfs_arc_l2_write_bytes kstat.zfs.misc.arcstats.l2_write_bytes
# TYPE node_zfs_arc_l2_write_bytes untyped
node_zfs_arc_l2_write_bytes 0
# HELP node_zfs_arc_l2_writes_done kstat.zfs.misc.arcstats.l2_writes_done
# TYPE node_zfs_arc_l2_writes_done untyped
node_zfs_arc_l2_writes_done 0
# HELP node_zfs_arc_l2_writes_error kstat.zfs.misc.arcstats.l2_writes_error
# TYPE node_zfs_arc_l2_writes_error untyped
node_zfs_arc_l2_writes_error 0
# HELP node_zfs_arc_l2_writes_lock_retry kstat.zfs.misc.arcstats.l2_writes_lock_retry
# TYPE node_zfs_arc_l2_writes_lock_retry untyped
node_zfs_arc_l2_writes_lock_retry 0
# HELP node_zfs_arc_l2_writes_sent kstat.zfs.misc.arcstats.l2_writes_sent
# TYPE node_zfs_arc_l2_writes_sent untyped
node_zfs_arc_l2_writes_sent 0
# HELP node_zfs_arc_memory_all_bytes kstat.zfs.misc.arcstats.memory_all_bytes
# TYPE node_zfs_arc_memory_all_bytes untyped
node_zfs_arc_memory_all_bytes 6.7154567168e+10
# HELP node_zfs_arc_memory_direct_count kstat.zfs.misc.arcstats.memory_direct_count
# TYPE node_zfs_arc_memory_direct_count untyped
node_zfs_arc_memory_direct_count 0
# HELP node_zfs_arc_memory_free_bytes kstat.zfs.misc.arcstats.memory_free_bytes
# TYPE node_zfs_arc_memory_free_bytes untyped
node_zfs_arc_memory_free_bytes 6.2254764032e+10
# HELP node_zfs_arc_memory_indirect_count kstat.zfs.misc.arcstats.memory_indirect_count
# TYPE node_zfs_arc_memory_indirect_count untyped
node_zfs_arc_memory_indirect_count 0
# HELP node_zfs_arc_memory_throttle_count kstat.zfs.misc.arcstats.memory_throttle_count
# TYPE node_zfs_arc_memory_throttle_count untyped
node_zfs_arc_memory_throttle_count 0
# HELP node_zfs_arc_meta kstat.zfs.misc.arcstats.meta
# TYPE node_zfs_arc_meta untyped
node_zfs_arc_meta 1.073741824e+09
# HELP node_zfs_arc_metadata_size kstat.zfs.misc.arcstats.metadata_size
# TYPE node_zfs_arc_metadata_size untyped
node_zfs_arc_metadata_size 0
# HELP node_zfs_arc_mfu_data kstat.zfs.misc.arcstats.mfu_data
# TYPE node_zfs_arc_mfu_data untyped
node_zfs_arc_mfu_data 0
# HELP node_zfs_arc_mfu_evictable_data kstat.zfs.misc.arcstats.mfu_evictable_data
# TYPE node_zfs_arc_mfu_evictable_data untyped
node_zfs_arc_mfu_evictable_data 0
# HELP node_zfs_arc_mfu_evictable_metadata kstat.zfs.misc.arcstats.mfu_evictable_metadata
# TYPE node_zfs_arc_mfu_evictable_metadata untyped
node_zfs_arc_mfu_evictable_metadata 0
# HELP node_zfs_arc_mfu_ghost_data kstat.zfs.misc.arcstats.mfu_ghost_data
# TYPE node_zfs_arc_mfu_ghost_data untyped
node_zfs_arc_mfu_ghost_data 0
# HELP node_zfs_arc_mfu_ghost_evictable_data kstat.zfs.misc.arcstats.mfu_ghost_evictable_data
# TYPE node_zfs_arc_mfu_ghost_evictable_data untyped
node_zfs_arc_mfu_ghost_evictable_data 0
# HELP node_zfs_arc_mfu_ghost_evictable_metadata kstat.zfs.misc.arcstats.mfu_ghost_evictable_metadata
# TYPE node_zfs_arc_mfu_ghost_evictable_metadata untyped
node_zfs_arc_mfu_ghost_evictable_metadata 0
# HELP node_zfs_arc_mfu_ghost_hits kstat.zfs.misc.arcstats.mfu_ghost_hits
# TYPE node_zfs_arc_mfu_ghost_hits untyped
node_zfs_arc_mfu_ghost_hits 0
# HELP node_zfs_arc_mfu_ghost_metadata kstat.zfs.misc.arcstats.mfu_ghost_metadata
# TYPE node_zfs_arc_mfu_ghost_metadata untyped
node_zfs_arc_mfu_ghost_metadata 0
# HELP node_zfs_arc_mfu_ghost_size kstat.zfs.misc.arcstats.mfu_ghost_size
# TYPE node_zfs_arc_mfu_ghost_size untyped
node_zfs_arc_mfu_ghost_size 0
# HELP node_zfs_arc_mfu_hits kstat.zfs.misc.arcstats.mfu_hits
# TYPE node_zfs_arc_mfu_hits untyped
node_zfs_arc_mfu_hits 0
# HELP node_zfs_arc_mfu_metadata kstat.zfs.misc.arcstats.mfu_metadata
# TYPE node_zfs_arc_mfu_metadata untyped
node_zfs_arc_mfu_metadata 0
# HELP node_zfs_arc_mfu_size kstat.zfs.misc.arcstats.mfu_size
# TYPE node_zfs_arc_mfu_size untyped
node_zfs_arc_mfu_size 0
# HELP node_zfs_arc_misses kstat.zfs.misc.arcstats.misses
# TYPE node_zfs_arc_misses untyped
node_zfs_arc_misses 0
# HELP node_zfs_arc_mru_data kstat.zfs.misc.arcstats.mru_data
# TYPE node_zfs_arc_mru_data untyped
node_zfs_arc_mru_data 0
# HELP node_zfs_arc_mru_evictable_data kstat.zfs.misc.arcstats.mru_evictable_data
# TYPE node_zfs_arc_mru_evictable_data untyped
node_zfs_arc_mru_evictable_data 0
# HELP node_zfs_arc_mru_evictable_metadata kstat.zfs.misc.arcstats.mru_evictable_metadata
# TYPE node_zfs_arc_mru_evictable_metadata untyped
node_zfs_arc_mru_evictable_metadata 0
# HELP node_zfs_arc_mru_ghost_data kstat.zfs.misc.arcstats.mru_ghost_data
# TYPE node_zfs_arc_mru_ghost_data untyped
node_zfs_arc_mru_ghost_data 0
# HELP node_zfs_arc_mru_ghost_evictable_data kstat.zfs.misc.arcstats.mru_ghost_evictable_data
# TYPE node_zfs_arc_mru_ghost_evictable_data untyped
node_zfs_arc_mru_ghost_evictable_data 0
# HELP node_zfs_arc_mru_ghost_evictable_metadata kstat.zfs.misc.arcstats.mru_ghost_evictable_metadata
# TYPE node_zfs_arc_mru_ghost_evictable_metadata untyped
node_zfs_arc_mru_ghost_evictable_metadata 0
# HELP node_zfs_arc_mru_ghost_hits kstat.zfs.misc.arcstats.mru_ghost_hits
# TYPE node_zfs_arc_mru_ghost_hits untyped
node_zfs_arc_mru_ghost_hits 0
# HELP node_zfs_arc_mru_ghost_metadata kstat.zfs.misc.arcstats.mru_ghost_metadata
# TYPE node_zfs_arc_mru_ghost_metadata untyped
node_zfs_arc_mru_ghost_metadata 0
# HELP node_zfs_arc_mru_ghost_size kstat.zfs.misc.arcstats.mru_ghost_size
# TYPE node_zfs_arc_mru_ghost_size untyped
node_zfs_arc_mru_ghost_size 0
# HELP node_zfs_arc_mru_hits kstat.zfs.misc.arcstats.mru_hits
# TYPE node_zfs_arc_mru_hits untyped
node_zfs_arc_mru_hits 0
# HELP node_zfs_arc_mru_metadata kstat.zfs.misc.arcstats.mru_metadata
# TYPE node_zfs_arc_mru_metadata untyped
node_zfs_arc_mru_metadata 0
# HELP node_zfs_arc_mru_size kstat.zfs.misc.arcstats.mru_size
# TYPE node_zfs_arc_mru_size untyped
node_zfs_arc_mru_size 0
# HELP node_zfs_arc_mutex_miss kstat.zfs.misc.arcstats.mutex_miss
# TYPE node_zfs_arc_mutex_miss untyped
node_zfs_arc_mutex_miss 0
# HELP node_zfs_arc_overhead_size kstat.zfs.misc.arcstats.overhead_size
# TYPE node_zfs_arc_overhead_size untyped
node_zfs_arc_overhead_size 0
# HELP node_zfs_arc_pd kstat.zfs.misc.arcstats.pd
# TYPE node_zfs_arc_pd untyped
node_zfs_arc_pd 2.147483648e+09
# HELP node_zfs_arc_pm kstat.zfs.misc.arcstats.pm
# TYPE node_zfs_arc_pm untyped
node_zfs_arc_pm 2.147483648e+09
# HELP node_zfs_arc_predictive_prefetch kstat.zfs.misc.arcstats.predictive_prefetch
# TYPE node_zfs_arc_predictive_prefetch untyped
node_zfs_arc_predictive_prefetch 0
# HELP node_zfs_arc_prefetch_data_hits kstat.zfs.misc.arcstats.prefetch_data_hits
# TYPE node_zfs_arc_prefetch_data_hits untyped
node_zfs_arc_prefetch_data_hits 0
# HELP node_zfs_arc_prefetch_data_iohits kstat.zfs.misc.arcstats.prefetch_data_iohits
# TYPE node_zfs_arc_prefetch_data_iohits untyped
node_zfs_arc_prefetch_data_iohits 0
# HELP node_zfs_arc_prefetch_data_misses kstat.zfs.misc.arcstats.prefetch_data_misses
# TYPE node_zfs_arc_prefetch_data_misses untyped
node_zfs_arc_prefetch_data_misses 0
# HELP node_zfs_arc_prefetch_metadata_hits kstat.zfs.misc.arcstats.prefetch_metadata_hits
# TYPE node_zfs_arc_prefetch_metadata_hits untyped
node_zfs_arc_prefetch_metadata_hits 0
# HELP node_zfs_arc_prefetch_metadata_iohits kstat.zfs.misc.arcstats.prefetch_metadata_iohits
# TYPE node_zfs_arc_prefetch_metadata_iohits untyped
node_zfs_arc_prefetch_metadata_iohits 0
# HELP node_zfs_arc_prefetch_metadata_misses kstat.zfs.misc.arcstats.prefetch_metadata_misses
# TYPE node_zfs_arc_prefetch_metadata_misses untyped
node_zfs_arc_prefetch_metadata_misses 0
# HELP node_zfs_arc_prescient_prefetch kstat.zfs.misc.arcstats.prescient_prefetch
# TYPE node_zfs_arc_prescient_prefetch untyped
node_zfs_arc_prescient_prefetch 0
# HELP node_zfs_arc_size kstat.zfs.misc.arcstats.size
# TYPE node_zfs_arc_size untyped
node_zfs_arc_size 2880
# HELP node_zfs_arc_uncached_data kstat.zfs.misc.arcstats.uncached_data
# TYPE node_zfs_arc_uncached_data untyped
node_zfs_arc_uncached_data 0
# HELP node_zfs_arc_uncached_evictable_data kstat.zfs.misc.arcstats.uncached_evictable_data
# TYPE node_zfs_arc_uncached_evictable_data untyped
node_zfs_arc_uncached_evictable_data 0
# HELP node_zfs_arc_uncached_evictable_metadata kstat.zfs.misc.arcstats.uncached_evictable_metadata
# TYPE node_zfs_arc_uncached_evictable_metadata untyped
node_zfs_arc_uncached_evictable_metadata 0
# HELP node_zfs_arc_uncached_hits kstat.zfs.misc.arcstats.uncached_hits
# TYPE node_zfs_arc_uncached_hits untyped
node_zfs_arc_uncached_hits 0
# HELP node_zfs_arc_uncached_metadata kstat.zfs.misc.arcstats.uncached_metadata
# TYPE node_zfs_arc_uncached_metadata untyped
node_zfs_arc_uncached_metadata 0
# HELP node_zfs_arc_uncached_size kstat.zfs.misc.arcstats.uncached_size
# TYPE node_zfs_arc_uncached_size untyped
node_zfs_arc_uncached_size 0
# HELP node_zfs_arc_uncompressed_size kstat.zfs.misc.arcstats.uncompressed_size
# TYPE node_zfs_arc_uncompressed_size untyped
node_zfs_arc_uncompressed_size 0
# HELP node_zfs_dmu_tx_dmu_tx_assigned kstat.zfs.misc.dmu_tx.dmu_tx_assigned
# TYPE node_zfs_dmu_tx_dmu_tx_assigned untyped
node_zfs_dmu_tx_dmu_tx_assigned 0
# HELP node_zfs_dmu_tx_dmu_tx_delay kstat.zfs.misc.dmu_tx.dmu_tx_delay
# TYPE node_zfs_dmu_tx_dmu_tx_delay untyped
node_zfs_dmu_tx_dmu_tx_delay 0
# HELP node_zfs_dmu_tx_dmu_tx_dirty_delay kstat.zfs.misc.dmu_tx.dmu_tx_dirty_delay
# TYPE node_zfs_dmu_tx_dmu_tx_dirty_delay untyped
node_zfs_dmu_tx_dmu_tx_dirty_delay 0
# HELP node_zfs_dmu_tx_dmu_tx_dirty_frees_delay kstat.zfs.misc.dmu_tx.dmu_tx_dirty_frees_delay
# TYPE node_zfs_dmu_tx_dmu_tx_dirty_frees_delay untyped
node_zfs_dmu_tx_dmu_tx_dirty_frees_delay 0
# HELP node_zfs_dmu_tx_dmu_tx_dirty_over_max kstat.zfs.misc.dmu_tx.dmu_tx_dirty_over_max
# TYPE node_zfs_dmu_tx_dmu_tx_dirty_over_max untyped
node_zfs_dmu_tx_dmu_tx_dirty_over_max 0
# HELP node_zfs_dmu_tx_dmu_tx_dirty_throttle kstat.zfs.misc.dmu_tx.dmu_tx_dirty_throttle
# TYPE node_zfs_dmu_tx_dmu_tx_dirty_throttle untyped
node_zfs_dmu_tx_dmu_tx_dirty_throttle 0
# HELP node_zfs_dmu_tx_dmu_tx_error kstat.zfs.misc.dmu_tx.dmu_tx_error
# TYPE node_zfs_dmu_tx_dmu_tx_error untyped
node_zfs_dmu_tx_dmu_tx_error 0
# HELP node_zfs_dmu_tx_dmu_tx_group kstat.zfs.misc.dmu_tx.dmu_tx_group
# TYPE node_zfs_dmu_tx_dmu_tx_group untyped
node_zfs_dmu_tx_dmu_tx_group 0
# HELP node_zfs_dmu_tx_dmu_tx_memory_reclaim kstat.zfs.misc.dmu_tx.dmu_tx_memory_reclaim
# TYPE node_zfs_dmu_tx_dmu_tx_memory_reclaim untyped
node_zfs_dmu_tx_dmu_tx_memory_reclaim 0
# HELP node_zfs_dmu_tx_dmu_tx_memory_reserve kstat.zfs.misc.dmu_tx.dmu_tx_memory_reserve
# TYPE node_zfs_dmu_tx_dmu_tx_memory_reserve untyped
node_zfs_dmu_tx_dmu_tx_memory_reserve 0
# HELP node_zfs_dmu_tx_dmu_tx_quota kstat.zfs.misc.dmu_tx.dmu_tx_quota
# TYPE node_zfs_dmu_tx_dmu_tx_quota untyped
node_zfs_dmu_tx_dmu_tx_quota 0
# HELP node_zfs_dmu_tx_dmu_tx_suspended kstat.zfs.misc.dmu_tx.dmu_tx_suspended
# TYPE node_zfs_dmu_tx_dmu_tx_suspended untyped
node_zfs_dmu_tx_dmu_tx_suspended 0
# HELP node_zfs_dmu_tx_dmu_tx_wrlog_delay kstat.zfs.misc.dmu_tx.dmu_tx_wrlog_delay
# TYPE node_zfs_dmu_tx_dmu_tx_wrlog_delay untyped
node_zfs_dmu_tx_dmu_tx_wrlog_delay 0
# HELP node_zfs_dnode_dnode_alloc_next_block kstat.zfs.misc.dnodestats.dnode_alloc_next_block
# TYPE node_zfs_dnode_dnode_alloc_next_block untyped
node_zfs_dnode_dnode_alloc_next_block 0
# HELP node_zfs_dnode_dnode_alloc_next_chunk kstat.zfs.misc.dnodestats.dnode_alloc_next_chunk
# TYPE node_zfs_dnode_dnode_alloc_next_chunk untyped
node_zfs_dnode_dnode_alloc_next_chunk 0
# HELP node_zfs_dnode_dnode_alloc_race kstat.zfs.misc.dnodestats.dnode_alloc_race
# TYPE node_zfs_dnode_dnode_alloc_race untyped
node_zfs_dnode_dnode_alloc_race 0
# HELP node_zfs_dnode_dnode_allocate kstat.zfs.misc.dnodestats.dnode_allocate
# TYPE node_zfs_dnode_dnode_allocate untyped
node_zfs_dnode_dnode_allocate 0
# HELP node_zfs_dnode_dnode_buf_evict kstat.zfs.misc.dnodestats.dnode_buf_evict
# TYPE node_zfs_dnode_dnode_buf_evict untyped
node_zfs_dnode_dnode_buf_evict 0
# HELP node_zfs_dnode_dnode_free_interior_lock_retry kstat.zfs.misc.dnodestats.dnode_free_interior_lock_retry
# TYPE node_zfs_dnode_dnode_free_interior_lock_retry untyped
node_zfs_dnode_dnode_free_interior_lock_retry 0
# HELP node_zfs_dnode_dnode_hold_alloc_hits kstat.zfs.misc.dnodestats.dnode_hold_alloc_hits
# TYPE node_zfs_dnode_dnode_hold_alloc_hits untyped
node_zfs_dnode_dnode_hold_alloc_hits 0
# HELP node_zfs_dnode_dnode_hold_alloc_interior kstat.zfs.misc.dnodestats.dnode_hold_alloc_interior
# TYPE node_zfs_dnode_dnode_hold_alloc_interior untyped
node_zfs_dnode_dnode_hold_alloc_interior 0
# HELP node_zfs_dnode_dnode_hold_alloc_lock_misses kstat.zfs.misc.dnodestats.dnode_hold_alloc_lock_misses
# TYPE node_zfs_dnode_dnode_hold_alloc_lock_misses untyped
node_zfs_dnode_dnode_hold_alloc_lock_misses 0
# HELP node_zfs_dnode_dnode_hold_alloc_lock_retry kstat.zfs.misc.dnodestats.dnode_hold_alloc_lock_retry
# TYPE node_zfs_dnode_dnode_hold_alloc_lock_retry untyped
node_zfs_dnode_dnode_hold_alloc_lock_retry 0
# HELP node_zfs_dnode_dnode_hold_alloc_misses kstat.zfs.misc.dnodestats.dnode_hold_alloc_misses
# TYPE node_zfs_dnode_dnode_hold_alloc_misses untyped
node_zfs_dnode_dnode_hold_alloc_misses 0
# HELP node_zfs_dnode_dnode_hold_alloc_type_none kstat.zfs.misc.dnodestats.dnode_hold_alloc_type_none
# TYPE node_zfs_dnode_dnode_hold_alloc_type_none untyped
node_zfs_dnode_dnode_hold_alloc_type_none 0
# HELP node_zfs_dnode_dnode_hold_dbuf_hold kstat.zfs.misc.dnodestats.dnode_hold_dbuf_hold
# TYPE node_zfs_dnode_dnode_hold_dbuf_hold untyped
node_zfs_dnode_dnode_hold_dbuf_hold 0
# HELP node_zfs_dnode_dnode_hold_dbuf_read kstat.zfs.misc.dnodestats.dnode_hold_dbuf_read
# TYPE node_zfs_dnode_dnode_hold_dbuf_read untyped
node_zfs_dnode_dnode_hold_dbuf_read 0
# HELP node_zfs_dnode_dnode_hold_free_hits kstat.zfs.misc.dnodestats.dnode_hold_free_hits
# TYPE node_zfs_dnode_dnode_hold_free_hits untyped
node_zfs_dnode_dnode_hold_free_hits 0
# HELP node_zfs_dnode_dnode_hold_free_lock_misses kstat.zfs.misc.dnodestats.dnode_hold_free_lock_misses
# TYPE node_zfs_dnode_dnode_hold_free_lock_misses untyped
node_zfs_dnode_dnode_hold_free_lock_misses 0
# HELP node_zfs_dnode_dnode_hold_free_lock_retry kstat.zfs.misc.dnodestats.dnode_hold_free_lock_retry
# TYPE node_zfs_dnode_dnode_hold_free_lock_retry untyped
node_zfs_dnode_dnode_hold_free_lock_retry 0
# HELP node_zfs_dnode_dnode_hold_free_misses kstat.zfs.misc.dnodestats.dnode_hold_free_misses
# TYPE node_zfs_dnode_dnode_hold_free_misses untyped
node_zfs_dnode_dnode_hold_free_misses 0
# HELP node_zfs_dnode_dnode_hold_free_overflow kstat.zfs.misc.dnodestats.dnode_hold_free_overflow
# TYPE node_zfs_dnode_dnode_hold_free_overflow untyped
node_zfs_dnode_dnode_hold_free_overflow 0
# HELP node_zfs_dnode_dnode_hold_free_refcount kstat.zfs.misc.dnodestats.dnode_hold_free_refcount
# TYPE node_zfs_dnode_dnode_hold_free_refcount untyped
node_zfs_dnode_dnode_hold_free_refcount 0
# HELP node_zfs_dnode_dnode_move_active kstat.zfs.misc.dnodestats.dnode_move_active
# TYPE node_zfs_dnode_dnode_move_active untyped
node_zfs_dnode_dnode_move_active 0
# HELP node_zfs_dnode_dnode_move_handle kstat.zfs.misc.dnodestats.dnode_move_handle
# TYPE node_zfs_dnode_dnode_move_handle untyped
node_zfs_dnode_dnode_move_handle 0
# HELP node_zfs_dnode_dnode_move_invalid kstat.zfs.misc.dnodestats.dnode_move_invalid
# TYPE node_zfs_dnode_dnode_move_invalid untyped
node_zfs_dnode_dnode_move_invalid 0
# HELP node_zfs_dnode_dnode_move_recheck1 kstat.zfs.misc.dnodestats.dnode_move_recheck1
# TYPE node_zfs_dnode_dnode_move_recheck1 untyped
node_zfs_dnode_dnode_move_recheck1 0
# HELP node_zfs_dnode_dnode_move_recheck2 kstat.zfs.misc.dnodestats.dnode_move_recheck2
# TYPE node_zfs_dnode_dnode_move_recheck2 untyped
node_zfs_dnode_dnode_move_recheck2 0
# HELP node_zfs_dnode_dnode_move_rwlock kstat.zfs.misc.dnodestats.dnode_move_rwlock
# TYPE node_zfs_dnode_dnode_move_rwlock untyped
node_zfs_dnode_dnode_move_rwlock 0
# HELP node_zfs_dnode_dnode_move_special kstat.zfs.misc.dnodestats.dnode_move_special
# TYPE node_zfs_dnode_dnode_move_special untyped
node_zfs_dnode_dnode_move_special 0
# HELP node_zfs_dnode_dnode_reallocate kstat.zfs.misc.dnodestats.dnode_reallocate
# TYPE node_zfs_dnode_dnode_reallocate untyped
node_zfs_dnode_dnode_reallocate 0
# HELP node_zfs_fm_erpt_dropped kstat.zfs.misc.fm.erpt-dropped
# TYPE node_zfs_fm_erpt_dropped untyped
node_zfs_fm_erpt_dropped 0
# HELP node_zfs_fm_erpt_duplicates kstat.zfs.misc.fm.erpt-duplicates
# TYPE node_zfs_fm_erpt_duplicates untyped
node_zfs_fm_erpt_duplicates 0
# HELP node_zfs_fm_erpt_set_failed kstat.zfs.misc.fm.erpt-set-failed
# TYPE node_zfs_fm_erpt_set_failed untyped
node_zfs_fm_erpt_set_failed 0
# HELP node_zfs_fm_fmri_set_failed kstat.zfs.misc.fm.fmri-set-failed
# TYPE node_zfs_fm_fmri_set_failed untyped
node_zfs_fm_fmri_set_failed 0
# HELP node_zfs_fm_payload_set_failed kstat.zfs.misc.fm.payload-set-failed
# TYPE node_zfs_fm_payload_set_failed untyped
node_zfs_fm_payload_set_failed 0
# HELP node_zfs_vdev_mirror_non_rotating_linear kstat.zfs.misc.vdev_mirror_stats.non_rotating_linear
# TYPE node_zfs_vdev_mirror_non_rotating_linear untyped
node_zfs_vdev_mirror_non_rotating_linear 0
# HELP node_zfs_vdev_mirror_non_rotating_seek kstat.zfs.misc.vdev_mirror_stats.non_rotating_seek
# TYPE node_zfs_vdev_mirror_non_rotating_seek untyped
node_zfs_vdev_mirror_non_rotating_seek 0
# HELP node_zfs_vdev_mirror_preferred_found kstat.zfs.misc.vdev_mirror_stats.preferred_found
# TYPE node_zfs_vdev_mirror_preferred_found untyped
node_zfs_vdev_mirror_preferred_found 0
# HELP node_zfs_vdev_mirror_preferred_not_found kstat.zfs.misc.vdev_mirror_stats.preferred_not_found
# TYPE node_zfs_vdev_mirror_preferred_not_found untyped
node_zfs_vdev_mirror_preferred_not_found 0
# HELP node_zfs_vdev_mirror_rotating_linear kstat.zfs.misc.vdev_mirror_stats.rotating_linear
# TYPE node_zfs_vdev_mirror_rotating_linear untyped
node_zfs_vdev_mirror_rotating_linear 0
# HELP node_zfs_vdev_mirror_rotating_offset kstat.zfs.misc.vdev_mirror_stats.rotating_offset
# TYPE node_zfs_vdev_mirror_rotating_offset untyped
node_zfs_vdev_mirror_rotating_offset 0
# HELP node_zfs_vdev_mirror_rotating_seek kstat.zfs.misc.vdev_mirror_stats.rotating_seek
# TYPE node_zfs_vdev_mirror_rotating_seek untyped
node_zfs_vdev_mirror_rotating_seek 0
# HELP node_zfs_zfetch_hits kstat.zfs.misc.zfetchstats.hits
# TYPE node_zfs_zfetch_hits untyped
node_zfs_zfetch_hits 0
# HELP node_zfs_zfetch_io_active kstat.zfs.misc.zfetchstats.io_active
# TYPE node_zfs_zfetch_io_active untyped
node_zfs_zfetch_io_active 0
# HELP node_zfs_zfetch_io_issued kstat.zfs.misc.zfetchstats.io_issued
# TYPE node_zfs_zfetch_io_issued untyped
node_zfs_zfetch_io_issued 0
# HELP node_zfs_zfetch_max_streams kstat.zfs.misc.zfetchstats.max_streams
# TYPE node_zfs_zfetch_max_streams untyped
node_zfs_zfetch_max_streams 0
# HELP node_zfs_zfetch_misses kstat.zfs.misc.zfetchstats.misses
# TYPE node_zfs_zfetch_misses untyped
node_zfs_zfetch_misses 0
# HELP node_zfs_zil_zil_commit_count kstat.zfs.misc.zil.zil_commit_count
# TYPE node_zfs_zil_zil_commit_count untyped
node_zfs_zil_zil_commit_count 0
# HELP node_zfs_zil_zil_commit_writer_count kstat.zfs.misc.zil.zil_commit_writer_count
# TYPE node_zfs_zil_zil_commit_writer_count untyped
node_zfs_zil_zil_commit_writer_count 0
# HELP node_zfs_zil_zil_itx_copied_bytes kstat.zfs.misc.zil.zil_itx_copied_bytes
# TYPE node_zfs_zil_zil_itx_copied_bytes untyped
node_zfs_zil_zil_itx_copied_bytes 0
# HELP node_zfs_zil_zil_itx_copied_count kstat.zfs.misc.zil.zil_itx_copied_count
# TYPE node_zfs_zil_zil_itx_copied_count untyped
node_zfs_zil_zil_itx_copied_count 0
# HELP node_zfs_zil_zil_itx_count kstat.zfs.misc.zil.zil_itx_count
# TYPE node_zfs_zil_zil_itx_count untyped
node_zfs_zil_zil_itx_count 0
# HELP node_zfs_zil_zil_itx_indirect_bytes kstat.zfs.misc.zil.zil_itx_indirect_bytes
# TYPE node_zfs_zil_zil_itx_indirect_bytes untyped
node_zfs_zil_zil_itx_indirect_bytes 0
# HELP node_zfs_zil_zil_itx_indirect_count kstat.zfs.misc.zil.zil_itx_indirect_count
# TYPE node_zfs_zil_zil_itx_indirect_count untyped
node_zfs_zil_zil_itx_indirect_count 0
# HELP node_zfs_zil_zil_itx_metaslab_normal_alloc kstat.zfs.misc.zil.zil_itx_metaslab_normal_alloc
# TYPE node_zfs_zil_zil_itx_metaslab_normal_alloc untyped
node_zfs_zil_zil_itx_metaslab_normal_alloc 0
# HELP node_zfs_zil_zil_itx_metaslab_normal_bytes kstat.zfs.misc.zil.zil_itx_metaslab_normal_bytes
# TYPE node_zfs_zil_zil_itx_metaslab_normal_bytes untyped
node_zfs_zil_zil_itx_metaslab_normal_bytes 0
# HELP node_zfs_zil_zil_itx_metaslab_normal_count kstat.zfs.misc.zil.zil_itx_metaslab_normal_count
# TYPE node_zfs_zil_zil_itx_metaslab_normal_count untyped
node_zfs_zil_zil_itx_metaslab_normal_count 0
# HELP node_zfs_zil_zil_itx_metaslab_normal_write kstat.zfs.misc.zil.zil_itx_metaslab_normal_write
# TYPE node_zfs_zil_zil_itx_metaslab_normal_write untyped
node_zfs_zil_zil_itx_metaslab_normal_write 0
# HELP node_zfs_zil_zil_itx_metaslab_slog_alloc kstat.zfs.misc.zil.zil_itx_metaslab_slog_alloc
# TYPE node_zfs_zil_zil_itx_metaslab_slog_alloc untyped
node_zfs_zil_zil_itx_metaslab_slog_alloc 0
# HELP node_zfs_zil_zil_itx_metaslab_slog_bytes kstat.zfs.misc.zil.zil_itx_metaslab_slog_bytes
# TYPE node_zfs_zil_zil_itx_metaslab_slog_bytes untyped
node_zfs_zil_zil_itx_metaslab_slog_bytes 0
# HELP node_zfs_zil_zil_itx_metaslab_slog_count kstat.zfs.misc.zil.zil_itx_metaslab_slog_count
# TYPE node_zfs_zil_zil_itx_metaslab_slog_count untyped
node_zfs_zil_zil_itx_metaslab_slog_count 0
# HELP node_zfs_zil_zil_itx_metaslab_slog_write kstat.zfs.misc.zil.zil_itx_metaslab_slog_write
# TYPE node_zfs_zil_zil_itx_metaslab_slog_write untyped
node_zfs_zil_zil_itx_metaslab_slog_write 0
# HELP node_zfs_zil_zil_itx_needcopy_bytes kstat.zfs.misc.zil.zil_itx_needcopy_bytes
# TYPE node_zfs_zil_zil_itx_needcopy_bytes untyped
node_zfs_zil_zil_itx_needcopy_bytes 0
# HELP node_zfs_zil_zil_itx_needcopy_count kstat.zfs.misc.zil.zil_itx_needcopy_count
# TYPE node_zfs_zil_zil_itx_needcopy_count untyped
node_zfs_zil_zil_itx_needcopy_count 0
# HELP nvme_available_spare_ratio SMART metric available_spare_ratio
# TYPE nvme_available_spare_ratio gauge
nvme_available_spare_ratio{device="nvme0n1"} 1
# HELP nvme_available_spare_threshold_ratio SMART metric available_spare_threshold_ratio
# TYPE nvme_available_spare_threshold_ratio gauge
nvme_available_spare_threshold_ratio{device="nvme0n1"} 0.5
# HELP nvme_controller_busy_time_seconds SMART metric controller_busy_time_seconds
# TYPE nvme_controller_busy_time_seconds gauge
nvme_controller_busy_time_seconds{device="nvme0n1"} 23493
# HELP nvme_critical_warning_total SMART metric critical_warning_total
# TYPE nvme_critical_warning_total counter
nvme_critical_warning_total{device="nvme0n1"} 0
# HELP nvme_data_units_read_total SMART metric data_units_read_total
# TYPE nvme_data_units_read_total counter
nvme_data_units_read_total{device="nvme0n1"} 1.664755614e+09
# HELP nvme_data_units_written_total SMART metric data_units_written_total
# TYPE nvme_data_units_written_total counter
nvme_data_units_written_total{device="nvme0n1"} 2.3475446e+07
# HELP nvme_host_read_commands_total SMART metric host_read_commands_total
# TYPE nvme_host_read_commands_total counter
nvme_host_read_commands_total{device="nvme0n1"} 9.294591153e+09
# HELP nvme_host_write_commands_total SMART metric host_write_commands_total
# TYPE nvme_host_write_commands_total counter
nvme_host_write_commands_total{device="nvme0n1"} 4.99513876e+08
# HELP nvme_media_errors_total SMART metric media_errors_total
# TYPE nvme_media_errors_total counter
nvme_media_errors_total{device="nvme0n1"} 0
# HELP nvme_num_err_log_entries_total SMART metric num_err_log_entries_total
# TYPE nvme_num_err_log_entries_total counter
nvme_num_err_log_entries_total{device="nvme0n1"} 1
# HELP nvme_nvmecli SMART metric nvmecli
# TYPE nvme_nvmecli gauge
nvme_nvmecli{version="2.3"} 1
# HELP nvme_percentage_used_ratio SMART metric percentage_used_ratio
# TYPE nvme_percentage_used_ratio gauge
nvme_percentage_used_ratio{device="nvme0n1"} 0.14
# HELP nvme_power_cycles_total SMART metric power_cycles_total
# TYPE nvme_power_cycles_total counter
nvme_power_cycles_total{device="nvme0n1"} 146
# HELP nvme_power_on_hours_total SMART metric power_on_hours_total
# TYPE nvme_power_on_hours_total counter
nvme_power_on_hours_total{device="nvme0n1"} 3546
# HELP nvme_temperature_celsius SMART metric temperature_celsius
# TYPE nvme_temperature_celsius gauge
nvme_temperature_celsius{device="nvme0n1"} 37
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 1.42
# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 524288
# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 9
# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 2.213888e+07
# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1.78300049024e+09
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 1.124130816e+09
# HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
# TYPE process_virtual_memory_max_bytes gauge
process_virtual_memory_max_bytes 1.8446744073709552e+19
# HELP promhttp_metric_handler_errors_total Total number of internal errors encountered by the promhttp metric handler.
# TYPE promhttp_metric_handler_errors_total counter
promhttp_metric_handler_errors_total{cause="encoding"} 412
promhttp_metric_handler_errors_total{cause="gathering"} 0
# HELP promhttp_metric_handler_requests_in_flight Current number of scrapes being served.
# TYPE promhttp_metric_handler_requests_in_flight gauge
promhttp_metric_handler_requests_in_flight 1
# HELP promhttp_metric_handler_requests_total Total number of scrapes by HTTP status code.
# TYPE promhttp_metric_handler_requests_total counter
promhttp_metric_handler_requests_total{code="200"} 6
promhttp_metric_handler_requests_total{code="500"} 0
promhttp_metric_handler_requests_total{code="503"} 0
# HELP smartmon_airflow_temperature_cel_raw_value SMART metric airflow_temperature_cel_raw_value
# TYPE smartmon_airflow_temperature_cel_raw_value gauge
smartmon_airflow_temperature_cel_raw_value{disk="/dev/sda",smart_id="190",type="sat"} 37
# HELP smartmon_airflow_temperature_cel_threshold SMART metric airflow_temperature_cel_threshold
# TYPE smartmon_airflow_temperature_cel_threshold gauge
smartmon_airflow_temperature_cel_threshold{disk="/dev/sda",smart_id="190",type="sat"} 45
# HELP smartmon_airflow_temperature_cel_value SMART metric airflow_temperature_cel_value
# TYPE smartmon_airflow_temperature_cel_value gauge
smartmon_airflow_temperature_cel_value{disk="/dev/sda",smart_id="190",type="sat"} 63
# HELP smartmon_airflow_temperature_cel_worst SMART metric airflow_temperature_cel_worst
# TYPE smartmon_airflow_temperature_cel_worst gauge
smartmon_airflow_temperature_cel_worst{disk="/dev/sda",smart_id="190",type="sat"} 44
# HELP smartmon_command_timeout_raw_value SMART metric command_timeout_raw_value
# TYPE smartmon_command_timeout_raw_value gauge
smartmon_command_timeout_raw_value{disk="/dev/sda",smart_id="188",type="sat"} 20
# HELP smartmon_command_timeout_threshold SMART metric command_timeout_threshold
# TYPE smartmon_command_timeout_threshold gauge
smartmon_command_timeout_threshold{disk="/dev/sda",smart_id="188",type="sat"} 0
# HELP smartmon_command_timeout_value SMART metric command_timeout_value
# TYPE smartmon_command_timeout_value gauge
smartmon_command_timeout_value{disk="/dev/sda",smart_id="188",type="sat"} 100
# HELP smartmon_command_timeout_worst SMART metric command_timeout_worst
# TYPE smartmon_command_timeout_worst gauge
smartmon_command_timeout_worst{disk="/dev/sda",smart_id="188",type="sat"} 99
# HELP smartmon_current_pending_sector_raw_value SMART metric current_pending_sector_raw_value
# TYPE smartmon_current_pending_sector_raw_value gauge
smartmon_current_pending_sector_raw_value{disk="/dev/sda",smart_id="197",type="sat"} 0
# HELP smartmon_current_pending_sector_threshold SMART metric current_pending_sector_threshold
# TYPE smartmon_current_pending_sector_threshold gauge
smartmon_current_pending_sector_threshold{disk="/dev/sda",smart_id="197",type="sat"} 0
# HELP smartmon_current_pending_sector_value SMART metric current_pending_sector_value
# TYPE smartmon_current_pending_sector_value gauge
smartmon_current_pending_sector_value{disk="/dev/sda",smart_id="197",type="sat"} 100
# HELP smartmon_current_pending_sector_worst SMART metric current_pending_sector_worst
# TYPE smartmon_current_pending_sector_worst gauge
smartmon_current_pending_sector_worst{disk="/dev/sda",smart_id="197",type="sat"} 100
# HELP smartmon_device_active SMART metric device_active
# TYPE smartmon_device_active gauge
smartmon_device_active{disk="/dev/nvme0",type="nvme"} 1
smartmon_device_active{disk="/dev/sda",type="sat"} 1
# HELP smartmon_device_info SMART metric device_info
# TYPE smartmon_device_info gauge
smartmon_device_info{device_model="",disk="/dev/nvme0",firmware_version="21113012",lun_id="",model_family="",product="",revision="",serial_number="214219800494",type="nvme",vendor=""} 1
smartmon_device_info{device_model="ST500LT012-1DG142",disk="/dev/sda",firmware_version="0002LVM1",lun_id="",model_family="Seagate Laptop HDD",product="",revision="",serial_number="S3P4DDX7",type="sat",vendor=""} 1
# HELP smartmon_device_smart_available SMART metric device_smart_available
# TYPE smartmon_device_smart_available gauge
smartmon_device_smart_available{disk="/dev/nvme0",type="nvme"} 0
smartmon_device_smart_available{disk="/dev/sda",type="sat"} 1
# HELP smartmon_device_smart_enabled SMART metric device_smart_enabled
# TYPE smartmon_device_smart_enabled gauge
smartmon_device_smart_enabled{disk="/dev/nvme0",type="nvme"} 0
smartmon_device_smart_enabled{disk="/dev/sda",type="sat"} 1
# HELP smartmon_device_smart_healthy SMART metric device_smart_healthy
# TYPE smartmon_device_smart_healthy gauge
smartmon_device_smart_healthy{disk="/dev/nvme0",type="nvme"} 1
smartmon_device_smart_healthy{disk="/dev/sda",type="sat"} 1
# HELP smartmon_end_to_end_error_raw_value SMART metric end_to_end_error_raw_value
# TYPE smartmon_end_to_end_error_raw_value gauge
smartmon_end_to_end_error_raw_value{disk="/dev/sda",smart_id="184",type="sat"} 0
# HELP smartmon_end_to_end_error_threshold SMART metric end_to_end_error_threshold
# TYPE smartmon_end_to_end_error_threshold gauge
smartmon_end_to_end_error_threshold{disk="/dev/sda",smart_id="184",type="sat"} 99
# HELP smartmon_end_to_end_error_value SMART metric end_to_end_error_value
# TYPE smartmon_end_to_end_error_value gauge
smartmon_end_to_end_error_value{disk="/dev/sda",smart_id="184",type="sat"} 100
# HELP smartmon_end_to_end_error_worst SMART metric end_to_end_error_worst
# TYPE smartmon_end_to_end_error_worst gauge
smartmon_end_to_end_error_worst{disk="/dev/sda",smart_id="184",type="sat"} 100
# HELP smartmon_g_sense_error_rate_raw_value SMART metric g_sense_error_rate_raw_value
# TYPE smartmon_g_sense_error_rate_raw_value gauge
smartmon_g_sense_error_rate_raw_value{disk="/dev/sda",smart_id="191",type="sat"} 410
# HELP smartmon_g_sense_error_rate_threshold SMART metric g_sense_error_rate_threshold
# TYPE smartmon_g_sense_error_rate_threshold gauge
smartmon_g_sense_error_rate_threshold{disk="/dev/sda",smart_id="191",type="sat"} 0
# HELP smartmon_g_sense_error_rate_value SMART metric g_sense_error_rate_value
# TYPE smartmon_g_sense_error_rate_value gauge
smartmon_g_sense_error_rate_value{disk="/dev/sda",smart_id="191",type="sat"} 100
# HELP smartmon_g_sense_error_rate_worst SMART metric g_sense_error_rate_worst
# TYPE smartmon_g_sense_error_rate_worst gauge
smartmon_g_sense_error_rate_worst{disk="/dev/sda",smart_id="191",type="sat"} 100
# HELP smartmon_load_cycle_count_raw_value SMART metric load_cycle_count_raw_value
# TYPE smartmon_load_cycle_count_raw_value gauge
smartmon_load_cycle_count_raw_value{disk="/dev/sda",smart_id="193",type="sat"} 101923
# HELP smartmon_load_cycle_count_threshold SMART metric load_cycle_count_threshold
# TYPE smartmon_load_cycle_count_threshold gauge
smartmon_load_cycle_count_threshold{disk="/dev/sda",smart_id="193",type="sat"} 0
# HELP smartmon_load_cycle_count_value SMART metric load_cycle_count_value
# TYPE smartmon_load_cycle_count_value gauge
smartmon_load_cycle_count_value{disk="/dev/sda",smart_id="193",type="sat"} 50
# HELP smartmon_load_cycle_count_worst SMART metric load_cycle_count_worst
# TYPE smartmon_load_cycle_count_worst gauge
smartmon_load_cycle_count_worst{disk="/dev/sda",smart_id="193",type="sat"} 50
# HELP smartmon_offline_uncorrectable_raw_value SMART metric offline_uncorrectable_raw_value
# TYPE smartmon_offline_uncorrectable_raw_value gauge
smartmon_offline_uncorrectable_raw_value{disk="/dev/sda",smart_id="198",type="sat"} 0
# HELP smartmon_offline_uncorrectable_threshold SMART metric offline_uncorrectable_threshold
# TYPE smartmon_offline_uncorrectable_threshold gauge
smartmon_offline_uncorrectable_threshold{disk="/dev/sda",smart_id="198",type="sat"} 0
# HELP smartmon_offline_uncorrectable_value SMART metric offline_uncorrectable_value
# TYPE smartmon_offline_uncorrectable_value gauge
smartmon_offline_uncorrectable_value{disk="/dev/sda",smart_id="198",type="sat"} 100
# HELP smartmon_offline_uncorrectable_worst SMART metric offline_uncorrectable_worst
# TYPE smartmon_offline_uncorrectable_worst gauge
smartmon_offline_uncorrectable_worst{disk="/dev/sda",smart_id="198",type="sat"} 100
# HELP smartmon_power_cycle_count_raw_value SMART metric power_cycle_count_raw_value
# TYPE smartmon_power_cycle_count_raw_value gauge
smartmon_power_cycle_count_raw_value{disk="/dev/sda",smart_id="12",type="sat"} 5823
# HELP smartmon_power_cycle_count_threshold SMART metric power_cycle_count_threshold
# TYPE smartmon_power_cycle_count_threshold gauge
smartmon_power_cycle_count_threshold{disk="/dev/sda",smart_id="12",type="sat"} 20
# HELP smartmon_power_cycle_count_value SMART metric power_cycle_count_value
# TYPE smartmon_power_cycle_count_value gauge
smartmon_power_cycle_count_value{disk="/dev/sda",smart_id="12",type="sat"} 95
# HELP smartmon_power_cycle_count_worst SMART metric power_cycle_count_worst
# TYPE smartmon_power_cycle_count_worst gauge
smartmon_power_cycle_count_worst{disk="/dev/sda",smart_id="12",type="sat"} 95
# HELP smartmon_power_on_hours_raw_value SMART metric power_on_hours_raw_value
# TYPE smartmon_power_on_hours_raw_value gauge
smartmon_power_on_hours_raw_value{disk="/dev/sda",smart_id="9",type="sat"} 36148
# HELP smartmon_power_on_hours_threshold SMART metric power_on_hours_threshold
# TYPE smartmon_power_on_hours_threshold gauge
smartmon_power_on_hours_threshold{disk="/dev/sda",smart_id="9",type="sat"} 0
# HELP smartmon_power_on_hours_value SMART metric power_on_hours_value
# TYPE smartmon_power_on_hours_value gauge
smartmon_power_on_hours_value{disk="/dev/sda",smart_id="9",type="sat"} 59
# HELP smartmon_power_on_hours_worst SMART metric power_on_hours_worst
# TYPE smartmon_power_on_hours_worst gauge
smartmon_power_on_hours_worst{disk="/dev/sda",smart_id="9",type="sat"} 59
# HELP smartmon_raw_read_error_rate_raw_value SMART metric raw_read_error_rate_raw_value
# TYPE smartmon_raw_read_error_rate_raw_value gauge
smartmon_raw_read_error_rate_raw_value{disk="/dev/sda",smart_id="1",type="sat"} 1.365988e+08
# HELP smartmon_raw_read_error_rate_threshold SMART metric raw_read_error_rate_threshold
# TYPE smartmon_raw_read_error_rate_threshold gauge
smartmon_raw_read_error_rate_threshold{disk="/dev/sda",smart_id="1",type="sat"} 34
# HELP smartmon_raw_read_error_rate_value SMART metric raw_read_error_rate_value
# TYPE smartmon_raw_read_error_rate_value gauge
smartmon_raw_read_error_rate_value{disk="/dev/sda",smart_id="1",type="sat"} 117
# HELP smartmon_raw_read_error_rate_worst SMART metric raw_read_error_rate_worst
# TYPE smartmon_raw_read_error_rate_worst gauge
smartmon_raw_read_error_rate_worst{disk="/dev/sda",smart_id="1",type="sat"} 99
# HELP smartmon_reallocated_sector_ct_raw_value SMART metric reallocated_sector_ct_raw_value
# TYPE smartmon_reallocated_sector_ct_raw_value gauge
smartmon_reallocated_sector_ct_raw_value{disk="/dev/sda",smart_id="5",type="sat"} 24
# HELP smartmon_reallocated_sector_ct_threshold SMART metric reallocated_sector_ct_threshold
# TYPE smartmon_reallocated_sector_ct_threshold gauge
smartmon_reallocated_sector_ct_threshold{disk="/dev/sda",smart_id="5",type="sat"} 36
# HELP smartmon_reallocated_sector_ct_value SMART metric reallocated_sector_ct_value
# TYPE smartmon_reallocated_sector_ct_value gauge
smartmon_reallocated_sector_ct_value{disk="/dev/sda",smart_id="5",type="sat"} 100
# HELP smartmon_reallocated_sector_ct_worst SMART metric reallocated_sector_ct_worst
# TYPE smartmon_reallocated_sector_ct_worst gauge
smartmon_reallocated_sector_ct_worst{disk="/dev/sda",smart_id="5",type="sat"} 100
# HELP smartmon_reported_uncorrect_raw_value SMART metric reported_uncorrect_raw_value
# TYPE smartmon_reported_uncorrect_raw_value gauge
smartmon_reported_uncorrect_raw_value{disk="/dev/sda",smart_id="187",type="sat"} 1
# HELP smartmon_reported_uncorrect_threshold SMART metric reported_uncorrect_threshold
# TYPE smartmon_reported_uncorrect_threshold gauge
smartmon_reported_uncorrect_threshold{disk="/dev/sda",smart_id="187",type="sat"} 0
# HELP smartmon_reported_uncorrect_value SMART metric reported_uncorrect_value
# TYPE smartmon_reported_uncorrect_value gauge
smartmon_reported_uncorrect_value{disk="/dev/sda",smart_id="187",type="sat"} 99
# HELP smartmon_reported_uncorrect_worst SMART metric reported_uncorrect_worst
# TYPE smartmon_reported_uncorrect_worst gauge
smartmon_reported_uncorrect_worst{disk="/dev/sda",smart_id="187",type="sat"} 99
# HELP smartmon_seek_error_rate_raw_value SMART metric seek_error_rate_raw_value
# TYPE smartmon_seek_error_rate_raw_value gauge
smartmon_seek_error_rate_raw_value{disk="/dev/sda",smart_id="7",type="sat"} 5.234255e+10
# HELP smartmon_seek_error_rate_threshold SMART metric seek_error_rate_threshold
# TYPE smartmon_seek_error_rate_threshold gauge
smartmon_seek_error_rate_threshold{disk="/dev/sda",smart_id="7",type="sat"} 30
# HELP smartmon_seek_error_rate_value SMART metric seek_error_rate_value
# TYPE smartmon_seek_error_rate_value gauge
smartmon_seek_error_rate_value{disk="/dev/sda",smart_id="7",type="sat"} 77
# HELP smartmon_seek_error_rate_worst SMART metric seek_error_rate_worst
# TYPE smartmon_seek_error_rate_worst gauge
smartmon_seek_error_rate_worst{disk="/dev/sda",smart_id="7",type="sat"} 60
# HELP smartmon_smartctl_run SMART metric smartctl_run
# TYPE smartmon_smartctl_run gauge
smartmon_smartctl_run{disk="/dev/nvme0",type="nvme"} 1.783172335e+09
smartmon_smartctl_run{disk="/dev/sda",type="sat"} 1.783172335e+09
# HELP smartmon_smartctl_version SMART metric smartctl_version
# TYPE smartmon_smartctl_version gauge
smartmon_smartctl_version{version="7.3"} 1
# HELP smartmon_spin_retry_count_raw_value SMART metric spin_retry_count_raw_value
# TYPE smartmon_spin_retry_count_raw_value gauge
smartmon_spin_retry_count_raw_value{disk="/dev/sda",smart_id="10",type="sat"} 0
# HELP smartmon_spin_retry_count_threshold SMART metric spin_retry_count_threshold
# TYPE smartmon_spin_retry_count_threshold gauge
smartmon_spin_retry_count_threshold{disk="/dev/sda",smart_id="10",type="sat"} 97
# HELP smartmon_spin_retry_count_value SMART metric spin_retry_count_value
# TYPE smartmon_spin_retry_count_value gauge
smartmon_spin_retry_count_value{disk="/dev/sda",smart_id="10",type="sat"} 100
# HELP smartmon_spin_retry_count_worst SMART metric spin_retry_count_worst
# TYPE smartmon_spin_retry_count_worst gauge
smartmon_spin_retry_count_worst{disk="/dev/sda",smart_id="10",type="sat"} 100
# HELP smartmon_spin_up_time_raw_value SMART metric spin_up_time_raw_value
# TYPE smartmon_spin_up_time_raw_value gauge
smartmon_spin_up_time_raw_value{disk="/dev/sda",smart_id="3",type="sat"} 0
# HELP smartmon_spin_up_time_threshold SMART metric spin_up_time_threshold
# TYPE smartmon_spin_up_time_threshold gauge
smartmon_spin_up_time_threshold{disk="/dev/sda",smart_id="3",type="sat"} 0
# HELP smartmon_spin_up_time_value SMART metric spin_up_time_value
# TYPE smartmon_spin_up_time_value gauge
smartmon_spin_up_time_value{disk="/dev/sda",smart_id="3",type="sat"} 99
# HELP smartmon_spin_up_time_worst SMART metric spin_up_time_worst
# TYPE smartmon_spin_up_time_worst gauge
smartmon_spin_up_time_worst{disk="/dev/sda",smart_id="3",type="sat"} 98
# HELP smartmon_start_stop_count_raw_value SMART metric start_stop_count_raw_value
# TYPE smartmon_start_stop_count_raw_value gauge
smartmon_start_stop_count_raw_value{disk="/dev/sda",smart_id="4",type="sat"} 54385
# HELP smartmon_start_stop_count_threshold SMART metric start_stop_count_threshold
# TYPE smartmon_start_stop_count_threshold gauge
smartmon_start_stop_count_threshold{disk="/dev/sda",smart_id="4",type="sat"} 20
# HELP smartmon_start_stop_count_value SMART metric start_stop_count_value
# TYPE smartmon_start_stop_count_value gauge
smartmon_start_stop_count_value{disk="/dev/sda",smart_id="4",type="sat"} 47
# HELP smartmon_start_stop_count_worst SMART metric start_stop_count_worst
# TYPE smartmon_start_stop_count_worst gauge
smartmon_start_stop_count_worst{disk="/dev/sda",smart_id="4",type="sat"} 47
# HELP smartmon_temperature_celsius_raw_value SMART metric temperature_celsius_raw_value
# TYPE smartmon_temperature_celsius_raw_value gauge
smartmon_temperature_celsius_raw_value{disk="/dev/sda",smart_id="194",type="sat"} 37
# HELP smartmon_temperature_celsius_threshold SMART metric temperature_celsius_threshold
# TYPE smartmon_temperature_celsius_threshold gauge
smartmon_temperature_celsius_threshold{disk="/dev/sda",smart_id="194",type="sat"} 0
# HELP smartmon_temperature_celsius_value SMART metric temperature_celsius_value
# TYPE smartmon_temperature_celsius_value gauge
smartmon_temperature_celsius_value{disk="/dev/sda",smart_id="194",type="sat"} 37
# HELP smartmon_temperature_celsius_worst SMART metric temperature_celsius_worst
# TYPE smartmon_temperature_celsius_worst gauge
smartmon_temperature_celsius_worst{disk="/dev/sda",smart_id="194",type="sat"} 56
# HELP smartmon_udma_crc_error_count_raw_value SMART metric udma_crc_error_count_raw_value
# TYPE smartmon_udma_crc_error_count_raw_value gauge
smartmon_udma_crc_error_count_raw_value{disk="/dev/sda",smart_id="199",type="sat"} 0
# HELP smartmon_udma_crc_error_count_threshold SMART metric udma_crc_error_count_threshold
# TYPE smartmon_udma_crc_error_count_threshold gauge
smartmon_udma_crc_error_count_threshold{disk="/dev/sda",smart_id="199",type="sat"} 0
# HELP smartmon_udma_crc_error_count_value SMART metric udma_crc_error_count_value
# TYPE smartmon_udma_crc_error_count_value gauge
smartmon_udma_crc_error_count_value{disk="/dev/sda",smart_id="199",type="sat"} 200
# HELP smartmon_udma_crc_error_count_worst SMART metric udma_crc_error_count_worst
# TYPE smartmon_udma_crc_error_count_worst gauge
smartmon_udma_crc_error_count_worst{disk="/dev/sda",smart_id="199",type="sat"} 200

