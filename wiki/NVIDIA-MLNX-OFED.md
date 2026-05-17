# NVIDIA MLNX_OFED

**Type:** Driver Stack
**Tags:** NVIDIA, MLNX_OFED, OFED, Linux, InfiniBand, RoCE, RDMA, ConnectX, BlueField, VPI, LTS
**Related:** [[NVIDIA-DOCA-OFED]], [[NVIDIA-DOCA]], [[NVIDIA-MLNX-EN]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-Firmware-Tools]], [[NVIDIA-UFM]], [[NVIDIA-HPC-X]], [[GPUDirect-RDMA]], [[NCCL]]
**Sources:** https://docs.nvidia.com/networking/software/adapter-software/index.html; https://docs.nvidia.com/networking/display/mlnxofedv24104140lts; https://docs.nvidia.com/networking/display/mlnxofedv24104140lts/introduction; https://docs.nvidia.com/networking/display/mlnxofedv24104140lts/changes-and-new-features
**Last Updated:** 2026-04-29

## Summary
NVIDIA MLNX_OFED is the legacy standalone NVIDIA OpenFabrics Enterprise Distribution for Linux. The current public line is MLNX_OFED v24.10-4.1.4.0 LTS (2024 LTS U4), but NVIDIA states that MLNX_OFED has transitioned into [[NVIDIA-DOCA-OFED]] through DOCA-Host. The October 2024 LTS branch is the last standalone MLNX_OFED release, while all new features starting January 2025 go into DOCA-OFED.

## Detail
MLNX_OFED provides a Linux VPI software stack across NVIDIA network adapter solutions, including kernel drivers, user-space libraries, management tools, InfiniBand support, Ethernet support, RDMA verbs, and RoCE. The current LTS documentation describes support up to 400 Gb/s InfiniBand and RoCE over 10/25/40/50/100/200/400 GbE.

The user manual covers adapter support, installation, firmware updates, UEFI Secure Boot, performance tuning, Ethernet features, InfiniBand features, storage protocols, virtualization, Docker/Kubernetes patterns, HPC-X integration, programming, fabric utilities, and troubleshooting. Feature areas include RoCE, ECN, flow steering, kTLS offloads, IPsec crypto/packet offload, MACsec full offload, NVIDIA SM, IPoIB, NVIDIA PeerDirect, SRP, iSER, Lustre, NVMe-oF, SR-IOV, VXLAN stateless offloads, scalable functions, and OVS offload using ASAP2 Direct.

This page is useful for older Linux deployments, for understanding OFED terms that appear in CUDA/NCCL/RDMA conversations, and for mapping legacy MLNX_OFED instructions into the current [[NVIDIA-DOCA-OFED]] path. For new feature enablement, especially with [[NVIDIA-ConnectX-9]] and BlueField-3-class platforms, the current page is [[NVIDIA-DOCA-OFED]].

## Connections
- [[NVIDIA-DOCA-OFED]] - current replacement path for new feature development and DOCA-Host deployment.
- [[NVIDIA-DOCA]] - DOCA is the umbrella software platform that absorbed OFED into DOCA-Host profiles.
- [[NVIDIA-MLNX-EN]] - Ethernet-only sibling package, also transitioning away from standalone releases.
- [[NVIDIA-ConnectX-InfiniBand]] - ConnectX adapters are the main hardware target for MLNX_OFED VPI networking.
- [[NVIDIA-BlueField-DPU]] - BlueField-2 appears in MLNX_OFED support; BlueField-3 requires DOCA-Host.
- [[NVIDIA-Firmware-Tools]] - MFT works with MLNX_OFED-era deployments for firmware and low-level diagnostics.
- [[NVIDIA-UFM]] - UFM manages fabrics that can be built from hosts using OFED-era InfiniBand software.
- [[NVIDIA-HPC-X]] - HPC-X MPI/SHMEM/UCX workflows depend on an RDMA-capable host stack such as MLNX_OFED or DOCA-OFED.
- [[GPUDirect-RDMA]] - GPUDirect RDMA needs compatible NVIDIA host drivers and RDMA libraries.
- [[NCCL]] - NCCL inter-node transports rely on the same RDMA/verbs substrate.

## Source Excerpts
- "MLNX_OFED has transitioned into DOCA-Host."
- "Starting January 2025 all new features will be included in DOCA-OFED only."

