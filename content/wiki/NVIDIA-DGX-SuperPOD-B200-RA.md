# NVIDIA DGX SuperPOD B200 Reference Architecture

**Type:** Reference Architecture
**Tags:** NVIDIA, DGX SuperPOD, DGX B200, Blackwell, NDR InfiniBand, Spectrum-X, Mission Control, Base Command Manager, AI factory
**Related:** [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-B200]], [[NVIDIA-DGX]], [[NVIDIA-DGX-BasePOD]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-DGX-B300]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Mission-Control]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Run-ai]], [[NVIDIA-AI-Enterprise]], [[NGC]], [[NVIDIA-UFM]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/abstract.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/dgx-superpod-components.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/network-fabrics.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/dgx-software.html
**Last Updated:** 2026-05-09

## Summary
NVIDIA DGX SuperPOD B200 Reference Architecture is the NVIDIA DGX SuperPOD design for Blackwell-generation [[NVIDIA-DGX-B200]] systems. It uses 32-DGX-system scalable units, NDR 400 Gb/s InfiniBand compute networking, optional Spectrum-X/Spectrum-4 Ethernet storage networking, high-performance storage, [[NVIDIA-Mission-Control]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Run-ai]], [[NVIDIA-AI-Enterprise]], NGC, CUDA, Magnum IO, Slurm, and NVIDIA Enterprise Experience support.

## Detail

### Purpose
Use this page for the NVIDIA document titled "NVIDIA DGX SuperPOD: Next Generation Scalable Infrastructure for AI Leadership Reference Architecture Featuring NVIDIA DGX B200." Use [[NVIDIA-DGX-B200]] for the single-system identity and [[NVIDIA-DGX-SuperPOD]] for the generic SuperPOD family.

### Architecture notes
- Document number RA-11334-001 V08; publication date 2025-04-24; docs last updated 2025-11-19.
- The RA is based on [[NVIDIA-DGX-B200]] systems with eight B200 GPUs per system.
- The design uses scalable units; each SU contains 32 DGX B200 systems.
- The fully tested system scales to four SUs, with larger deployments possible based on customer requirements.
- Each rack can support up to two DGX B200 systems, allowing the rack layout to be adapted to data center constraints.
- Compute fabric uses NVIDIA Quantum QM9700 NDR 400 Gb/s InfiniBand in a rail-optimized, balanced, full-fat-tree topology with eight NDR400 connections per system.
- Storage fabric can be InfiniBand or RDMA over Converged Ethernet; the RA lists Spectrum-X SN5600 800 Gb/s Ethernet as the optional Ethernet storage fabric.
- Storage planning separates high-performance storage from user storage, with high-performance storage targeted at parallel I/O/checkpoint workflows and user storage typically exposed through NFS on the in-band management fabric.

### Software stack
The software stack includes [[NVIDIA-Mission-Control]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Run-ai]], [[NVIDIA-AI-Enterprise]], Magnum IO, [[NGC]], and Slurm. The current docs note that Mission Control includes Base Command Manager and Run:ai functionality.

### NVIDIA context
This is the B200 SuperPOD bridge between [[NVIDIA-DGX-BasePOD]] scale and later rack-scale [[NVIDIA-DGX-SuperPOD-GB200-RA]] / [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]] / [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]] designs. It is important for customers comparing Blackwell-era DGX systems before deciding whether they need B200 nodes, GB200 rack-scale NVLink domains, or B300/GB300 Blackwell Ultra systems.

## Connections
- [[NVIDIA-DGX-SuperPOD]] - parent SuperPOD architecture family.
- [[NVIDIA-DGX-B200]] - DGX compute system used by this RA.
- [[NVIDIA-DGX]] - broader DGX systems family.
- [[NVIDIA-DGX-BasePOD]] - smaller enterprise reference architecture that can precede SuperPOD deployments.
- [[NVIDIA-DGX-SuperPOD-GB200-RA]] - next rack-scale Grace Blackwell SuperPOD RA.
- [[NVIDIA-DGX-B300]] - Blackwell Ultra successor generation.
- [[NVIDIA-Blackwell-Architecture]] - GPU architecture foundation.
- [[NVIDIA-Quantum-InfiniBand]] - NDR InfiniBand compute and storage fabric context.
- [[NVIDIA-Spectrum-X]] - optional Ethernet/RoCE storage fabric direction.
- [[NVIDIA-Mission-Control]] - integrated operations and workload plane for current SuperPOD software.
- [[NVIDIA-Base-Command-Manager]] and [[NVIDIA-Run-ai]] - management and orchestration capabilities included through Mission Control.
- [[NVIDIA-AI-Enterprise]] - enterprise AI software layer.
- [[NGC]] - GPU-optimized containers and software catalog.
- [[NVIDIA-UFM]] - InfiniBand fabric management and telemetry.
- [[NVIDIA-Certified-Storage]] - storage partner validation is part of the SuperPOD design.
- [[NVIDIA-Enterprise-AI-Factory]] - the RA is a practical AI factory build pattern.

## Source Excerpts
- NVIDIA describes the B200 RA as a DGX SuperPOD architecture for AI, HPC, and hybrid workloads.
- The abstract says each scalable unit contains 32 DGX B200 systems.
- The key-components page lists NDR 400 Gb/s InfiniBand compute fabric, optional Spectrum-X SN5600 Ethernet storage fabric, Mission Control, Base Command Manager, Run:ai, AI Enterprise, NGC, Magnum IO, and Slurm.

## Resources
- [NVIDIA DGX SuperPOD B200 Reference Architecture](https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/index.html)
