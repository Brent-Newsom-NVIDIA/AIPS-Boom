# NVIDIA Firmware Tools (MFT)

**Type:** Tool
**Tags:** NVIDIA, MFT, firmware, networking, ConnectX, BlueField, Spectrum, mlxconfig, flint, mlxfwmanager, mlxlink
**Related:** [[NVIDIA-DOCA]], [[NVIDIA-DOCA-OFED]], [[DOCA-PCC]], [[NVIDIA-MLNX-OFED]], [[NVIDIA-WinOF-2]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-ConnectX-9]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-Spectrum-X]], [[NVIDIA-UFM]]
**Sources:** https://docs.nvidia.com/networking/software/firmware-management/index.html; https://docs.nvidia.com/networking/display/mftv4350; https://docs.nvidia.com/networking/display/mftv4350/general-information; https://docs.nvidia.com/networking/display/mftv4350/changes-and-new-features
**Last Updated:** 2026-04-29

## Summary
NVIDIA Firmware Tools (MFT) is the official firmware management, configuration, and debug toolkit for NVIDIA networking devices. Current public networking docs list MFT v4.35.0 as the latest GA line, and the release notes add first-GA support for [[NVIDIA-ConnectX-9]]. MFT is the page to reach for `mst`, `mlxconfig`, `mlxfwmanager`, `flint`, `mlxburn`, `mlxlink`, cable tools, firmware reset flows, secure-host settings, and device-level debugging across [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-BlueField-DPU]], and NVIDIA switch systems.

## Detail
MFT operates at the adapter or switch-device level. NVIDIA's current general information page explicitly notes that MFT tools apply to single switch systems or adapter cards and do not provide cluster-wide functionality. Cluster-wide fabric management belongs closer to [[NVIDIA-UFM]], [[NVIDIA-NetQ]], and switch/network operating tools such as [[NVIDIA-Cumulus-Linux]].

The toolkit is broad: `mst` discovers and manages register-access devices, `mlxfwmanager` performs firmware query/update workflows, `mlxconfig` changes device configuration without rebuilding firmware, `flint` burns and queries firmware images, `mlxburn` generates and burns images, `mlxfwreset` loads firmware after supported updates, and `mlxlink` exposes physical-link state. The same documentation tree also covers debug utilities such as `fwtrace`, `mlxtrace`, `mstdump`, `mlxreg`, `resourcedump`, `resourceparse`, and cable utilities such as `mlxcables`.

MFT sits next to the host driver stacks rather than replacing them. On Linux, in-band functionality depends on the NVIDIA host networking stack, now centered on [[NVIDIA-DOCA-OFED]] and legacy [[NVIDIA-MLNX-OFED]] LTS deployments. On Windows, WinMFT and MFT-related utilities complement [[NVIDIA-WinOF-2]] for ConnectX configuration and port-mode workflows.

For AI factory operations, MFT matters because firmware, link state, port type, cable status, secure-host controls, and low-level diagnostics often decide whether higher-level CUDA, NCCL, RDMA, and Kubernetes networking layers can perform correctly.

## Connections
- [[NVIDIA-DOCA]] - DOCA and DOCA-Host are the current umbrella software layers around NVIDIA networking drivers and tools.
- [[NVIDIA-DOCA-OFED]] - current Linux host profile used with newer NVIDIA networking deployments.
- [[DOCA-PCC]] - PCC enablement uses MFT-style `mlxconfig` settings.
- [[NVIDIA-MLNX-OFED]] - legacy standalone LTS host stack that MFT can work alongside.
- [[NVIDIA-WinOF-2]] - Windows driver package that uses MFT/WinMFT utilities for device and port configuration.
- [[NVIDIA-ConnectX-InfiniBand]] - ConnectX adapters are primary MFT targets for firmware and device configuration.
- [[NVIDIA-ConnectX-9]] - MFT v4.35.0 adds first-GA ConnectX-9 support.
- [[NVIDIA-BlueField-DPU]] - BlueField platforms use MFT-style device tools alongside DOCA and BlueField software bundles.
- [[NVIDIA-Spectrum-X]] - firmware and link diagnostics are operational dependencies for Spectrum-X Ethernet AI fabrics.
- [[NVIDIA-UFM]] - UFM handles fabric-wide management while MFT handles low-level device firmware/configuration tasks.

## Source Excerpts
- "The MFT tools do not provide cluster wide functionality."
- "MFT v4.35.0 introduces support for the NVIDIA ConnectX-9 SuperNIC."
