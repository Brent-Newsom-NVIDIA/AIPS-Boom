# NVIDIA WinOF-2

**Type:** Driver Stack
**Tags:** NVIDIA, WinOF-2, Windows, ConnectX, RDMA, RoCE, InfiniBand, Network Direct, DevX, driver
**Related:** [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-ConnectX-9]], [[NVIDIA-Firmware-Tools]], [[NVIDIA-DOCA]], [[NVIDIA-DOCA-OFED]], [[NVIDIA-MLNX-OFED]], [[NVIDIA-BlueField-DPU]], [[GPUDirect-RDMA]]
**Sources:** https://docs.nvidia.com/networking/software/adapter-software/index.html; https://docs.nvidia.com/networking/display/nvidiawinof2documentationv26150000; https://docs.nvidia.com/networking/display/nvidiawinof2documentationv26150000/changes-and-new-features; https://docs.nvidia.com/networking/display/nvidiawinof2documentationv26150000/general-capabilities
**Last Updated:** 2026-04-29

## Summary
NVIDIA WinOF-2 is NVIDIA's Windows host driver package for ConnectX-4 Lx and newer network adapters. The current public docs list WinOF-2 v26.1.50000 as the February 2026 GA release. It is the Windows-side counterpart to Linux host stacks such as [[NVIDIA-DOCA-OFED]] and legacy [[NVIDIA-MLNX-OFED]], covering cloud, storage, high-performance computing, Ethernet, InfiniBand, RDMA, and management utilities on Windows Server and client systems.

## Detail
WinOF-2 packages Windows drivers, protocols, management tools, and installer flows for NVIDIA networking adapters. The current overview states that WinOF-2 supports [[NVIDIA-ConnectX-InfiniBand]] adapters from ConnectX-4 Lx onward and does not support earlier generations.

The v26.1.50000 release notes add first-GA WinOF-2 support for [[NVIDIA-ConnectX-9]], including 1600G link-speed detection/reporting for 1.6T-capable links. They also note Windows INF service-registry modernization for newer Windows versions and deprecation of some diagnostic counter sets on ConnectX-7 and newer adapters and BlueField-3 and newer BlueField devices.

The user manual covers installation, firmware upgrades, booting Windows from iSCSI/PXE, Ethernet and InfiniBand configuration, storage protocols, virtualization, Network Direct Interface, performance tuning, counters, DPU NIC Mode, RShim, DevX, fabric performance utilities, management utilities, and troubleshooting. WinOF-2 also uses [[NVIDIA-Firmware-Tools]] / WinMFT utilities for tasks such as port-type changes through `mlxconfig`.

## Connections
- [[NVIDIA-ConnectX-InfiniBand]] - WinOF-2 is the Windows driver package for supported ConnectX adapters.
- [[NVIDIA-ConnectX-9]] - WinOF-2 v26.1.50000 is the first GA WinOF-2 release with ConnectX-9 support.
- [[NVIDIA-Firmware-Tools]] - MFT/WinMFT utilities provide firmware and port configuration workflows used with WinOF-2.
- [[NVIDIA-DOCA]] - Linux and BlueField DOCA stacks sit beside the Windows WinOF-2 driver family.
- [[NVIDIA-DOCA-OFED]] - current Linux host-driver counterpart for NVIDIA networking.
- [[NVIDIA-MLNX-OFED]] - legacy Linux VPI stack often mentioned in cross-platform networking comparisons.
- [[NVIDIA-BlueField-DPU]] - WinOF-2 docs include DPU NIC Mode and RShim-related Windows workflows.
- [[GPUDirect-RDMA]] - Windows RDMA/Network Direct environments are adjacent to the broader GPU-to-network data path.

## Source Excerpts
- "WinOF-2 is the Windows driver for NVIDIA ConnectX-4 Lx and onwards adapter cards."
- "WinOF-2 v26.1.5000 introduces support for the NVIDIA ConnectX-9 SuperNIC."

