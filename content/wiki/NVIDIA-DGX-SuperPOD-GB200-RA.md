# NVIDIA DGX SuperPOD GB200 Reference Architecture

**Type:** Reference Architecture
**Tags:** NVIDIA, DGX SuperPOD, DGX GB200, GB200 NVL72, Blackwell, Grace Blackwell, NVLink 5, NDR InfiniBand, Spectrum-4, Mission Control, AI factory
**Related:** [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-GB200-NVL72]], [[NVIDIA-DGX]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-B200]], [[NVIDIA-DGX-B300]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Grace-CPU]], [[NVLink]], [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Mission-Control]], [[NVIDIA-AI-Enterprise]], [[NGC]], [[NVIDIA-UFM]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/abstract.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/dgx-superpod-components.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/network-fabrics.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/dgx-software.html
**Last Updated:** 2026-05-09

## Summary
NVIDIA DGX SuperPOD GB200 Reference Architecture is the NVIDIA DGX SuperPOD design for rack-scale [[NVIDIA-GB200-NVL72]] systems powered by Grace CPUs and Blackwell GPUs. It introduces a SuperPOD pattern with eight DGX GB200 rack systems per scalable unit, NVLink 5 inside each rack, NDR 400 Gb/s InfiniBand for cross-rack compute, Spectrum-4/Spectrum-X Ethernet for storage and in-band management, [[NVIDIA-Mission-Control]], [[NVIDIA-AI-Enterprise]], NGC, Magnum IO, Slurm, and NVIDIA Enterprise Support.

## Detail

### Purpose
Use this page for the NVIDIA document titled "NVIDIA DGX SuperPOD: Next Generation Scalable Infrastructure for AI Factories Reference Architecture Featuring NVIDIA DGX GB200." Use [[NVIDIA-GB200-NVL72]] for the rack-scale system identity and [[NVIDIA-DGX-SuperPOD]] for the generic SuperPOD family.

### Architecture notes
- Document number RA-11338-001 V01; publication date 2025-06-16; docs last updated 2025-11-19.
- The RA is based on DGX GB200 systems powered by [[NVIDIA-Grace-CPU]] and Blackwell GPUs.
- Each scalable unit contains eight DGX GB200 systems.
- Each DGX GB200 rack system is a 72-GPU NVLink domain with 18 compute trays and nine NVLink switch trays.
- Each compute tray contains two GB200 Superchips, and each superchip combines two B200 GPUs and one Grace CPU over NVLink-C2C.
- The architecture includes five network fabrics: NVLink 5, compute fabric, storage fabric, in-band management network, and out-of-band management network.
- Physical fabrics include multi-node NVLink, compute InfiniBand, storage/in-band Ethernet, and out-of-band networking.
- Compute fabric uses NVIDIA Quantum QM9700 NDR 400 Gb/s InfiniBand in a rail-optimized full-fat-tree design.
- Storage and in-band management use NVIDIA Spectrum-4 SN5600 Ethernet switches with 800 Gb/s class Ethernet.
- Storage guidance uses RDMA over Converged Ethernet v2 for high-performance storage from DGX SuperPOD certified storage partners.

### Software and operations
[[NVIDIA-Mission-Control]] is the management and operations stack for DGX GB200 SuperPOD deployments. The software components include Mission Control, [[NVIDIA-AI-Enterprise]], Magnum IO, [[NGC]], and Slurm. The RA also calls out building-management-system integration because of the power and cooling complexity of the rack-scale GB200 design.

### NVIDIA context
This page captures the Blackwell rack-scale SuperPOD reference design. It connects [[NVIDIA-DGX-SuperPOD-B200-RA]] to Blackwell Ultra pages such as [[NVIDIA-GB300-NVL72]] and [[NVIDIA-DGX-B300]], and it is especially useful when a customer needs the design implications of rack-scale NVLink domains rather than 8-GPU DGX nodes.

## Connections
- [[NVIDIA-DGX-SuperPOD]] - parent SuperPOD architecture family.
- [[NVIDIA-GB200-NVL72]] - rack-scale Grace Blackwell system used by this RA.
- [[NVIDIA-DGX]] - broader DGX systems family.
- [[NVIDIA-DGX-SuperPOD-B200-RA]] - preceding B200 SuperPOD architecture.
- [[NVIDIA-DGX-B200]] - node-level Blackwell DGX comparison point.
- [[NVIDIA-DGX-B300]] and [[NVIDIA-GB300-NVL72]] - Blackwell Ultra successor direction.
- [[NVIDIA-Blackwell-Architecture]] - GPU architecture foundation.
- [[NVIDIA-Grace-CPU]] - CPU component in Grace Blackwell superchips.
- [[NVLink]] - NVLink 5 creates the 72-GPU rack-scale domain.
- [[NVIDIA-Quantum-InfiniBand]] - NDR InfiniBand compute fabric.
- [[NVIDIA-Spectrum-X]] - Spectrum-4/Spectrum-X Ethernet storage and management fabric direction.
- [[NVIDIA-Mission-Control]] - operations and orchestration stack for DGX GB200 SuperPOD.
- [[NVIDIA-AI-Enterprise]] - enterprise AI software layer.
- [[NGC]] - GPU-optimized software catalog.
- [[NVIDIA-UFM]] - InfiniBand fabric management and telemetry.
- [[NVIDIA-Certified-Storage]] - storage partner validation is required for SuperPOD storage.
- [[NVIDIA-Enterprise-AI-Factory]] - the RA is a practical AI factory build pattern.

## Source Excerpts
- NVIDIA describes the GB200 RA as a next-generation AI factory architecture based on DGX GB200 systems with Grace CPUs and Blackwell GPUs.
- The abstract says each scalable unit contains eight DGX GB200 systems.
- The key-components page lists DGX GB200 NVL72 racks, NVLink 5, Quantum QM9700 InfiniBand, Spectrum-4 SN5600 Ethernet, Mission Control, AI Enterprise, NGC, Magnum IO, and Slurm.

## Resources
- [NVIDIA DGX SuperPOD GB200 Reference Architecture](https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/index.html)
