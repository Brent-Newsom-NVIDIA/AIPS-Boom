# NVIDIA DSX Air

**Type:** Platform
**Tags:** NVIDIA, DSX Air, Air, network simulation, digital twin, Cumulus Linux, NetQ, data center networking
**Related:** [[NVIDIA-Cumulus-Linux]], [[NVIDIA-NetQ]], [[NVIDIA-Spectrum-X]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-Network-Operator]], [[NVIDIA-UFM]]
**Sources:** https://docs.nvidia.com/networking-ethernet-software/; https://docs.nvidia.com/networking-ethernet-software/nvidia-air/
**Last Updated:** 2026-04-29

## Summary
NVIDIA DSX Air is NVIDIA's cloud-hosted data center network simulation platform. Current docs describe it as a real-world-like production environment for creating a digital twin of IT infrastructure, validating configurations, testing automation, and running full-scale network architectures with multiple network operating systems. It is the current docs-facing name for the NVIDIA Air simulation surface used with [[NVIDIA-Cumulus-Linux]], [[NVIDIA-NetQ]], and Ethernet AI networking workflows.

## Detail
DSX Air lets network teams build or load simulated topologies before touching production hardware. The user guide covers account setup, quick start, API authentication, simulation management, pre-built demos, sharing images, custom topology, out-of-band management networks, cloud-init, API/SDK access, and node instructions.

The key NVIDIA wiki value is that DSX Air is not a single demo or one person's build. It is a durable NVIDIA-operated simulation platform. It should be used to connect questions about "NVIDIA Air", "DSX Air", "network digital twin", "Cumulus demos", and "validate switch automation before deploying" back to the canonical NVIDIA networking pages.

The current Cumulus Linux docs also point to Try It demos that run in Air/DSX Air. That makes it a practical learning and validation surface for Cumulus Linux features, Spectrum switch behavior, EVPN/VXLAN design, RoCE configuration practice, and automated network operations.

## Connections
- [[NVIDIA-Cumulus-Linux]] - Cumulus Linux docs include Try It demos that run in DSX Air.
- [[NVIDIA-NetQ]] - NetQ and DSX Air are paired in the networking docs as operations and simulation tools.
- [[NVIDIA-Spectrum-X]] - Spectrum-X Ethernet designs can be reasoned about through validated software stacks and simulation workflows.
- [[NVIDIA-ConnectX-InfiniBand]] - host adapter behavior connects to simulated Ethernet and RDMA fabric design.
- [[NVIDIA-Network-Operator]] - Kubernetes networking deployment patterns benefit from pre-production fabric validation.
- [[NVIDIA-UFM]] - DSX Air complements fabric-management tools by validating designs before production rollout.

## Source Excerpts
- "NVIDIA DSX Air is a cloud-hosted, data center simulation platform."
- "Validate configurations, features, and automation code."

