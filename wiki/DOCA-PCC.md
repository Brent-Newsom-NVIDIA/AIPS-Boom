# DOCA PCC

**Type:** Library
**Tags:** NVIDIA, DOCA, PCC, programmable congestion control, Ethernet, BlueField, DPA, RoCE, congestion control
**Related:** [[NVIDIA-DOCA]], [[DOCA-DPA]], [[DOCA-Flow]], [[DOCA-RDMA]], [[DOCA-GPUNetIO]], [[NVIDIA-Spectrum-X]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-Firmware-Tools]], [[NVIDIA-DOCA-OFED]]
**Sources:** https://docs.nvidia.com/doca/sdk/doca-pcc/index.html; https://docs.nvidia.com/doca/sdk/doca-pcc-application-guide/index.html; https://docs.nvidia.com/doca/sdk/changes-and-new-features/index.html
**Last Updated:** 2026-04-29

## Summary
DOCA PCC is the DOCA Programmable Congestion Control API. It lets developers implement customized congestion-control algorithms using NVIDIA BlueField hardware acceleration while abstracting the low-level hardware operations. It is currently Ethernet-only and is relevant to RoCE, [[NVIDIA-Spectrum-X]], BlueField-3, and AI networking environments where congestion response needs to be tuned beyond fixed defaults.

## Detail
The current DOCA PCC guide says PCC-based applications can run either on the host machine or on NVIDIA BlueField-3 Platform or later. The API supports configuring probe packets, retrieving congestion-control events or packets, setting flow rate limits, maintaining per-flow contexts, initiating and configuring custom algorithms, and processing incoming request packets to generate response packets.

DOCA PCC has host and device pieces. The host library manages PCC context configuration, while device libraries support reaction point (RP) and notification point (NP) roles. RP monitors network conditions and adjusts transmission rates; NP receives congestion notifications and processes them for application decisions. Developers implement congestion-control algorithms and callbacks, then use DPACC to build the DPA application that contains the device code.

The docs also point to [[NVIDIA-Firmware-Tools]]-style enablement through `mlxconfig` settings such as `USER_PROGRAMMABLE_CC`, `PCC_INT_EN`, and `FLEX_PARSER_PROFILE_ENABLE`. DOCA 3.3.0 release notes add PCC to the DOCA Networking profile and call out BlueField-3 firmware/PCC improvements for response timestamping and DSCP query support.

## Connections
- [[NVIDIA-DOCA]] - DOCA PCC is a DOCA SDK library for programmable network behavior.
- [[DOCA-DPA]] - PCC algorithms and callbacks are built through DPACC/DPA-style device code.
- [[DOCA-Flow]] - flow steering and programmable congestion behavior are neighboring packet-processing concepts.
- [[DOCA-RDMA]] - PCC is relevant to RoCE/RDMA congestion behavior in Ethernet networks.
- [[DOCA-GPUNetIO]] - GPU packet processing can depend on predictable congestion behavior in the same fabric.
- [[NVIDIA-Spectrum-X]] - Spectrum-X Ethernet AI networking depends on congestion management for RoCE/NCCL workloads.
- [[NVIDIA-BlueField-DPU]] - BlueField-3 hardware acceleration is the core target for DOCA PCC.
- [[NVIDIA-Firmware-Tools]] - PCC enablement and related device settings use `mlxconfig`.
- [[NVIDIA-DOCA-OFED]] - DOCA Networking and OFED/RoCE host profiles provide the driver substrate around PCC.

## Source Excerpts
- "DOCA PCC library offers a high-level programming interface."
- "Currently, DOCA PCC is supported only for the ETHERNET link type."

