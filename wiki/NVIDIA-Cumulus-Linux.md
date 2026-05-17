# NVIDIA Cumulus Linux

**Type:** Platform
**Tags:** NVIDIA, Cumulus Linux, Ethernet, Spectrum, switching, networking OS, NVUE, RoCE, EVPN, telemetry, Spectrum-X
**Related:** [[NVIDIA-Spectrum-X]], [[NVIDIA-NetQ]], [[NVIDIA-DSX-Air]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-Network-Operator]], [[NVIDIA-UFM]]
**Sources:** https://docs.nvidia.com/networking-ethernet-software/; https://docs.nvidia.com/networking-ethernet-software/cumulus-linux/; https://docs.nvidia.com/networking-ethernet-software/cumulus-linux/Whats-New/
**Last Updated:** 2026-04-29

## Summary
NVIDIA Cumulus Linux is NVIDIA's Linux-based network operating system for Ethernet switching at data center and AI-factory scale. The current public docs are Cumulus Linux 5.16 and position the OS as an open, automation-friendly switch platform with NVUE configuration, EVPN/VXLAN, BGP, RoCE, telemetry, gNMI, OpenTelemetry export, and NVIDIA Spectrum switch support. It is a core software layer for [[NVIDIA-Spectrum-X]] Ethernet AI networking and is closely paired with [[NVIDIA-NetQ]] and [[NVIDIA-DSX-Air]] for operations and simulation.

## Detail
The Cumulus Linux 5.16 User Guide covers installation, upgrades, system configuration, switch ports, layer 2 and layer 3 networking, EVPN/VXLAN, monitoring, troubleshooting, telemetry, and reference topologies. NVIDIA describes the current Cumulus Linux line as a full-featured Debian bookworm-based network operating system.

The current "What's New" page says Cumulus Linux 5.16.0 is tested and validated as part of Spectrum-X reference architecture 2.1. That matters for the wiki because Spectrum-X is not only a switch ASIC or product name; it is a validated stack involving switch OS, adapter/NIC configuration, congestion control, telemetry, DOCA, and cluster operations.

Administratively, Cumulus Linux is centered around NVIDIA User Experience (NVUE), which provides CLI and API configuration workflows. The docs also expose current telemetry areas such as high frequency telemetry, ASIC monitoring, OpenTelemetry export, gNMI streaming, latency monitoring, WJH, and interface/transceiver monitoring.

For AI clusters, Cumulus Linux sits on the Ethernet switch side of the stack while [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-BlueField-DPU]], and [[NVIDIA-Network-Operator]] handle server-side adapter and Kubernetes integration. In Ethernet storage fabrics and RoCE deployments, Cumulus Linux provides switch-side configuration for predictable, low-latency data movement.

## Connections
- [[NVIDIA-Spectrum-X]] - Cumulus Linux 5.16 is validated in the Spectrum-X reference architecture 2.1 release stack.
- [[NVIDIA-NetQ]] - NetQ monitors Cumulus Linux switches and broader data center networking health.
- [[NVIDIA-DSX-Air]] - DSX Air lets operators simulate Cumulus Linux and multi-OS network topologies before deployment.
- [[NVIDIA-ConnectX-InfiniBand]] - ConnectX adapters connect host systems into Cumulus/Spectrum Ethernet fabrics.
- [[NVIDIA-Network-Operator]] - Kubernetes network automation complements switch-side Cumulus configuration.
- [[NVIDIA-UFM]] - UFM and Cumulus-adjacent tooling both belong to NVIDIA's fabric operations portfolio.

## Source Excerpts
- "Cumulus Linux 5.16.0 is tested and validated as part of the Spectrum-X reference architecture 2.1 release."
- "An open network operating system designed for efficiency, automation, and scale."

