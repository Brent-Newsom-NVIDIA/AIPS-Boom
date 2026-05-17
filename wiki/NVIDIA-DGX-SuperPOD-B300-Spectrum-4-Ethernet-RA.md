# NVIDIA DGX SuperPOD B300 Spectrum-4 Ethernet Reference Architecture

**Type:** Reference Architecture
**Tags:** NVIDIA, DGX SuperPOD, DGX B300, Spectrum-4, Spectrum-X, DC Busbar, Blackwell, InfiniBand, Mission Control, AI factory
**Related:** [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-B300]], [[NVIDIA-DGX-B200]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Spectrum-X-Validated-Solution-Stack]], [[NVIDIA-Quantum-X800-InfiniBand]], [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-Mission-Control]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Run-ai]], [[NVIDIA-AI-Enterprise]], [[NGC]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/abstract.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/dgx-superpod-components.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/network-fabrics.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/dgx-software.html
**Last Updated:** 2026-05-09

## Summary
NVIDIA DGX SuperPOD B300 Spectrum-4 Ethernet Reference Architecture is the DGX B300 SuperPOD design focused on Spectrum-4/Spectrum-X Ethernet and DC busbar power for modern, power-efficient data centers. It is a DGX SuperPOD reference architecture for building next-generation AI factories with [[NVIDIA-DGX-B300]], NVIDIA XDR InfiniBand, Spectrum-X/Spectrum-4 Ethernet, NVLink, [[NVIDIA-Mission-Control]], [[NVIDIA-AI-Enterprise]], CUDA, Magnum IO, storage guidance, and NVIDIA Enterprise Support.

## Detail

### Purpose
Use this page for the DGX B300 SuperPOD reference architecture document titled "NVIDIA SuperPOD DGX B300 Systems, Spectrum-4 Ethernet and DC Busbar Power Reference Architecture." Use [[NVIDIA-DGX-SuperPOD]] for the generic SuperPOD concept and [[NVIDIA-DGX-B300]] for the DGX B300 system identity.

### Architecture notes
- Document number RA-11337-001 V01; publication date 2025-05-29; docs last updated 2025-11-19.
- Based on DGX B300 systems powered by Blackwell GPUs.
- Built around scalable units; each SU contains 64 DGX B300 systems for rapid deployment of multiple SuperPOD sizes.
- The RA discusses SU design, InfiniBand and Ethernet fabric topologies, storage specifications, rack layouts, wiring, and power design.
- The DC busbar version is the focus for modern high-density, power-efficient data centers.
- DGX B300 system highlights include DC busbar powered MGX-rack capable design, alternate AC PSU appliance design, 72 PFLOPS FP8 training, 144 PFLOPS FP4 inference, fifth-generation NVLink, and 2.1 TB aggregate HBM3e memory.
- The architecture includes high-performance InfiniBand, Spectrum-X/Spectrum-4 Ethernet, NVLink, and [[NVIDIA-Mission-Control]] as core technologies.

### Fabrics and operations
The docs describe four network fabrics: compute fabric, storage fabric, in-band Ethernet network, and out-of-band management network. The Ethernet fabric is segmented with VXLAN/EVPN for control and admin isolation. The in-band management network connects cluster services, lower-speed NFS storage, uplinks to services such as NGC/code/data sources, and user access to Slurm and Kubernetes services.

### Software stack
The software stack includes [[NVIDIA-Mission-Control]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Run-ai]], [[NGC]], and [[NVIDIA-AI-Enterprise]]. Mission Control is the standard for every DGX SuperPOD with DGX B300 and includes Base Command Manager and Run:ai functionality as part of integrated software delivery.

## Connections
- [[NVIDIA-DGX-SuperPOD]] - parent SuperPOD architecture family.
- [[NVIDIA-DGX-B300]] - compute system used by this RA.
- [[NVIDIA-DGX-B200]] - predecessor DGX Blackwell system for comparison.
- [[NVIDIA-Blackwell-Architecture]] - GPU architecture foundation.
- [[NVIDIA-Spectrum-X]] - Ethernet AI networking platform in the design.
- [[NVIDIA-Spectrum-X-Validated-Solution-Stack]] - version compatibility for current Spectrum-X deployments.
- [[NVIDIA-Quantum-X800-InfiniBand]] and [[NVIDIA-Quantum-InfiniBand]] - InfiniBand compute/storage fabric context.
- [[NVIDIA-Mission-Control]] - required administration and operations plane.
- [[NVIDIA-Base-Command-Manager]] and [[NVIDIA-Run-ai]] - cluster management and workload orchestration included through Mission Control.
- [[NVIDIA-AI-Enterprise]] - enterprise AI software and support layer.
- [[NGC]] - GPU-optimized containers and software catalog.
- [[NVIDIA-Certified-Storage]] - storage partner validation is part of the SuperPOD environment.
- [[NVIDIA-Enterprise-AI-Factory]] - the RA is a practical AI factory build pattern.

## Source Excerpts
- NVIDIA describes this DGX SuperPOD RA as a next-generation AI factory design based on DGX B300 systems.
- The docs identify DC busbar power as the focus of this RA for modern, power-efficient data centers.
- The DGX SuperPOD software page says Mission Control is the standard for every DGX SuperPOD with DGX B300.

## Resources
- [NVIDIA SuperPOD DGX B300 Systems, Spectrum-4 Ethernet and DC Busbar Power Reference Architecture](https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/index.html)
