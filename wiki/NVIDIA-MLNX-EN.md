# NVIDIA MLNX_EN

**Type:** Driver Stack
**Tags:** NVIDIA, MLNX_EN, Ethernet, Linux, RoCE, ConnectX, drivers, SR-IOV, OVS, LTS
**Related:** [[NVIDIA-DOCA-OFED]], [[NVIDIA-MLNX-OFED]], [[NVIDIA-DOCA]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Cumulus-Linux]], [[NVIDIA-Firmware-Tools]], [[GPUDirect-RDMA]]
**Sources:** https://docs.nvidia.com/networking/software/adapter-software/index.html; https://docs.nvidia.com/networking/display/mlnxenv24104140lts; https://docs.nvidia.com/networking/display/mlnxenv24104140lts/features-overview-and-configuration; https://docs.nvidia.com/networking/display/mlnxenv24104140lts/changes-and-new-features
**Last Updated:** 2026-04-29

## Summary
NVIDIA MLNX_EN is the legacy standalone Linux Ethernet driver and software package for NVIDIA ConnectX EN family adapters. The current public line is MLNX_EN v24.10-4.1.4.0 LTS (2024 LTS U4). NVIDIA's adapter-software index says MLNX_EN has transitioned into DOCA-RoCE / DOCA-Host profiles, and that the last standalone MLNX_EN release is the October 2024 LTS branch.

## Detail
MLNX_EN is narrower than [[NVIDIA-MLNX-OFED]]: it is the Ethernet-focused Linux package for enhanced Ethernet and RoCE deployments rather than the full VPI InfiniBand/Ethernet OFED stack. The current docs describe ConnectX EN support with up to 400 GbE per port and include release notes plus a user manual for installation, driver usage, performance tuning, Ethernet features, virtualization, containers, OVS offload, and troubleshooting.

Feature areas in the v24.10 LTS docs include Ethernet interface configuration, QoS, QCN, ethtool, checksum offload, RoCE, flow control, ECN, RSS, timestamping, flow steering, Wake-on-LAN, Q-in-Q tunneling, kTLS offloads, IPsec crypto and packet offloads, MACsec full offload, SR-IOV, VXLAN hardware stateless offloads, scalable functions, Docker/Kubernetes SR-IOV patterns, fast driver unload, and OVS offload using ASAP2 Direct.

For new deployments, this page should normally point users toward [[NVIDIA-DOCA-OFED]] and DOCA-Host profile choices, especially when they need current features. It remains important because older NVIDIA Ethernet/RoCE runbooks, support cases, and cluster notes still use the MLNX_EN name.

## Connections
- [[NVIDIA-DOCA-OFED]] - current DOCA-Host path that contains newer NVIDIA host driver features.
- [[NVIDIA-MLNX-OFED]] - broader InfiniBand/Ethernet VPI stack; MLNX_EN is the lighter Ethernet package.
- [[NVIDIA-DOCA]] - DOCA-Host is the current NVIDIA packaging surface for host networking stacks.
- [[NVIDIA-ConnectX-InfiniBand]] - ConnectX adapters are the hardware line behind MLNX_EN Ethernet/RoCE support.
- [[NVIDIA-Spectrum-X]] - Spectrum-X Ethernet AI fabrics rely on host RoCE behavior that MLNX_EN historically configured.
- [[NVIDIA-Cumulus-Linux]] - switch-side Ethernet configuration pairs with host-side Ethernet/RoCE drivers.
- [[NVIDIA-Firmware-Tools]] - MFT complements MLNX_EN deployments for adapter firmware and device configuration.
- [[GPUDirect-RDMA]] - Ethernet/RoCE deployments can carry GPUDirect RDMA traffic when drivers and fabric settings align.

## Source Excerpts
- "MLNX_EN has transitioned into DOCA-RoCE."
- "The driver and software ... achieve full line rate, full duplex of up to 400GbE performance per port."

