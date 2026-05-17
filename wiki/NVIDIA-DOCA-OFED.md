# NVIDIA DOCA-OFED

**Type:** Driver Stack
**Tags:** NVIDIA, DOCA-OFED, DOCA-Host, OFED, RDMA, RoCE, InfiniBand, ConnectX, BlueField, Linux, drivers
**Related:** [[NVIDIA-DOCA]], [[NVIDIA-MLNX-OFED]], [[NVIDIA-MLNX-EN]], [[NVIDIA-Network-Operator]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-ConnectX-9]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-Firmware-Tools]], [[NVIDIA-HPC-X]], [[GPUDirect-RDMA]], [[NCCL]]
**Sources:** https://docs.nvidia.com/doca/sdk/index.html; https://docs.nvidia.com/doca/sdk/mlnx_ofed-to-doca-ofed-transition-guide/index.html; https://docs.nvidia.com/doca/sdk/general-support/index.html; https://docs.nvidia.com/doca/sdk/changes-and-new-features/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA DOCA-OFED is the current NVIDIA Linux host-driver package for InfiniBand, Ethernet, RoCE, RDMA, and related user-space libraries and tools. It is delivered as a DOCA-Host installation profile and is the replacement path for standalone [[NVIDIA-MLNX-OFED]]. NVIDIA's transition guide states that DOCA-OFED is a one-to-one substitute for MLNX_OFED, while current DOCA release notes place new host-driver features in DOCA-OFED rather than legacy MLNX_OFED.

## Detail
DOCA-Host is the unified host-server package for [[NVIDIA-BlueField-DPU]], BlueField SuperNIC, and [[NVIDIA-ConnectX-InfiniBand]] devices. NVIDIA defines several host profiles: `doca-all` for the full DOCA libraries and drivers, `doca-networking` for networking functionality, and `doca-ofed` for users who want the same user experience and content as MLNX_OFED without the rest of the DOCA components.

The DOCA-OFED profile provides the kernel drivers, user-space libraries, and management tools used by NVIDIA networking products. That makes it the practical software base for RDMA applications, [[GPUDirect-RDMA]], [[NVIDIA-HPC-X]], MPI, [[NCCL]], storage-over-fabrics, and Kubernetes deployments managed by [[NVIDIA-Network-Operator]].

The current public DOCA docs are DOCA 3.3.0. The general support page lists DOCA OFED 3.3.0 as a host component, and the release notes add first-GA DOCA-Host support for [[NVIDIA-ConnectX-9]]. The same release line also calls out host-driver updates such as RS-FEC histogram reporting, PTP raw cycle-counter exposure, TCP header-data split zero-copy, PCIe congestion event counters, PSP security protocol support, ESXi validation, and universal `doca-sosreport` coverage across host profiles.

DOCA-OFED is the page to use when a question asks for "current OFED", "DOCA-Host drivers", "doca-ofed", or "what replaces MLNX_OFED". Use [[NVIDIA-MLNX-OFED]] for the legacy standalone LTS package and [[NVIDIA-MLNX-EN]] for the older Ethernet-only Linux package.

## Connections
- [[NVIDIA-DOCA]] - DOCA-OFED is one DOCA-Host profile within the broader DOCA software platform.
- [[NVIDIA-MLNX-OFED]] - DOCA-OFED is the replacement and one-to-one substitute for standalone MLNX_OFED.
- [[NVIDIA-MLNX-EN]] - MLNX_EN transitions toward inbox drivers or DOCA-Host's Ethernet/RoCE-focused profile.
- [[NVIDIA-Network-Operator]] - deploys and manages DOCA-OFED driver containers in Kubernetes clusters.
- [[NVIDIA-ConnectX-InfiniBand]] - ConnectX adapters use DOCA-OFED for current Linux host RDMA/RoCE/InfiniBand stacks.
- [[NVIDIA-ConnectX-9]] - DOCA 3.3.0 is the first GA DOCA release enabling ConnectX-9.
- [[NVIDIA-BlueField-DPU]] - BlueField-3 networking platforms must use DOCA-Host as the host driver.
- [[NVIDIA-Firmware-Tools]] - MFT complements DOCA-OFED with firmware, port, and device-level tooling.
- [[NVIDIA-HPC-X]] - HPC-X consumes the RDMA/UCX/UCC substrate that DOCA-OFED provides on NVIDIA hosts.
- [[GPUDirect-RDMA]] - DOCA-OFED supplies the host-driver layer for direct GPU-to-NIC data paths.
- [[NCCL]] - multi-node NCCL jobs depend on properly configured NVIDIA host networking drivers.

## Source Excerpts
- "DOCA-OFED is a 1-to-1 substitute for MLNX_OFED."
- "NVIDIA BlueField-3 networking platforms must use DOCA-Host as the host driver."

