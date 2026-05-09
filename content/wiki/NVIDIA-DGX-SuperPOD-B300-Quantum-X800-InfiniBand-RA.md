# NVIDIA DGX SuperPOD B300 Quantum-X800 InfiniBand Reference Architecture

**Type:** Reference Architecture
**Tags:** NVIDIA, DGX SuperPOD, DGX B300, Quantum-X800, InfiniBand, XDR, AC Power, Blackwell Ultra, Mission Control, AI factory
**Related:** [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-B300]], [[NVIDIA-DGX-B200]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Quantum-X800-InfiniBand]], [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Mission-Control]], [[NVIDIA-AI-Enterprise]], [[NGC]], [[NVIDIA-UFM]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/abstract.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/dgx-superpod-components.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/network-fabrics.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/components.html
**Last Updated:** 2026-05-09

## Summary
NVIDIA DGX SuperPOD B300 Quantum-X800 InfiniBand Reference Architecture is the DGX B300 SuperPOD design focused on NVIDIA Quantum-X800/XDR InfiniBand switching and AC power. It describes a large SuperPOD configuration built from [[NVIDIA-DGX-B300]] systems, 800 Gb/s InfiniBand compute fabric, storage and Ethernet management fabrics, [[NVIDIA-Mission-Control]], [[NVIDIA-AI-Enterprise]], CUDA, Magnum IO, NGC, Slurm, and NVIDIA Enterprise Support.

## Detail

### Purpose
Use this page for the DGX B300 SuperPOD reference architecture document titled "NVIDIA SuperPOD with DGX B300 Systems, NVIDIA Quantum-X800 InfiniBand switching and AC Power Reference Architecture." Use [[NVIDIA-DGX-SuperPOD]] for the generic SuperPOD concept and [[NVIDIA-Quantum-X800-InfiniBand]] for the network platform.

### Architecture notes
- Document number RA-11339-001 V01; publication date 2025-07-23; docs last updated 2025-11-19.
- Based on DGX B300 systems powered by NVIDIA Blackwell Ultra GPUs.
- Built around scalable units; each SU contains 72 DGX B300 systems.
- The fully tested system scales to 8 SUs, or 576 DGX B300 nodes, with larger deployments possible based on customer requirements.
- The compute fabric uses managed Quantum-X800 switches and a rail-optimized full-fat-tree topology.
- Storage fabric options include InfiniBand and Ethernet storage fabrics; the design also includes in-band and out-of-band Ethernet management networks.
- Full system support, including compute, storage, network, and Mission Control software, is provided by NVIDIA Enterprise Experience (NVEX).

### Software stack
The software table includes [[NVIDIA-Mission-Control]], [[NVIDIA-AI-Enterprise]], Magnum IO, [[NGC]], and Slurm. The docs note that Mission Control includes Base Command Manager and Run:ai functionality, and that SuperPOD supports multiteam environments through Base Command Manager while multitenancy is not currently supported with SuperPOD.

### NVIDIA context
This page captures the InfiniBand/AC-power DGX B300 SuperPOD path. It complements [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]], which captures the Spectrum-4/DC-busbar SuperPOD document, and [[NVIDIA-NVL72-AI-Factory]], which captures the Enterprise RA path for GB300 NVL72 rack-scale systems.

## Connections
- [[NVIDIA-DGX-SuperPOD]] - parent SuperPOD architecture family.
- [[NVIDIA-DGX-B300]] - compute system used by this RA.
- [[NVIDIA-DGX-B200]] - predecessor DGX Blackwell system for comparison.
- [[NVIDIA-Blackwell-Architecture]] - Blackwell Ultra architecture foundation.
- [[NVIDIA-Quantum-X800-InfiniBand]] - 800 Gb/s InfiniBand platform used for large-scale AI fabrics.
- [[NVIDIA-Quantum-InfiniBand]] - broader InfiniBand family and SHARP context.
- [[NVIDIA-Spectrum-X]] - Ethernet fabric counterpart used in storage/management or alternative AI factory fabrics.
- [[NVIDIA-Mission-Control]] - operations and orchestration plane.
- [[NVIDIA-AI-Enterprise]] - enterprise AI software layer.
- [[NGC]] - GPU-optimized software catalog.
- [[NVIDIA-UFM]] - InfiniBand fabric management and telemetry.
- [[NVIDIA-Certified-Storage]] - storage partner validation is part of the SuperPOD environment.
- [[NVIDIA-Enterprise-AI-Factory]] - the RA is a practical AI factory build pattern.

## Source Excerpts
- NVIDIA describes this RA as a DGX B300 SuperPOD design based on Blackwell Ultra GPUs.
- The abstract says each scalable unit contains 72 DGX B300 systems.
- The network fabrics page describes a full 576-node SuperPOD with rail-aligned groups of 72 nodes.

## Resources
- [NVIDIA SuperPOD with DGX B300 Systems, NVIDIA Quantum-X800 InfiniBand Switching and AC Power Reference Architecture](https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/index.html)
