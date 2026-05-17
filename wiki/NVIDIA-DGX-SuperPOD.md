# NVIDIA DGX SuperPOD

**Type:** Platform
**Tags:** NVIDIA, DGX SuperPOD, AI supercomputer, cluster, data center, InfiniBand, Spectrum-X, DGX B200, DGX B300, GB200, AI factory
**Related:** [[NVIDIA-DGX]], [[NVIDIA-DGX-BasePOD]], [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]], [[NVIDIA-DGX-Enterprise-Support]], [[NVIDIA-DGX-B200]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-GB200-NVL72]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-DGX-B300]], [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]], [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-Vera-Rubin]], [[NVIDIA-Vera-Rubin-POD]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-Mission-Control]], [[NVIDIA-Certified-Storage]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-BaseOS]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-ConnectX-9]], [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-Quantum-X800-InfiniBand]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Spectrum-X-Validated-Solution-Stack]]
**Sources:** https://docs.nvidia.com/dgx-superpod/index.html, https://www.nvidia.com/en-us/data-center/dgx-superpod/, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/index.html, https://www.nvidia.com/en-us/data-center/dgx-b200/, https://www.nvidia.com/en-us/data-center/gb300-nvl72/, https://www.nvidia.com/en-us/data-center/technologies/rubin/, https://docs.nvidia.com/dgx-basepod/index.html, https://www.nvidia.com/en-us/data-center/dgx-support/
**Last Updated:** 2026-05-09

## Summary
NVIDIA DGX SuperPOD is NVIDIA's reference AI supercomputing platform for large-scale training and AI factory deployments. It combines DGX compute systems, high-performance networking, storage, validated software, and operational guidance into a scalable cluster architecture. Current wiki coverage now separates the B200 node-based RA, GB200 rack-scale RA, and B300 Blackwell Ultra RA variants so customer conversations can distinguish node-scale, rack-scale NVLink, Ethernet, and InfiniBand design choices.

## Detail

### Purpose
Frontier AI training and high-throughput enterprise AI workloads require more than individual GPU servers. DGX SuperPOD packages compute, network, storage, software, and operational design into a system-level architecture.

### Key capabilities
- Scalable DGX-based AI supercomputing clusters.
- Integration with NVIDIA networking such as InfiniBand and Spectrum-X class infrastructure.
- Validated system software, OS, and management components.
- Target platform for large LLM training, model customization, simulation, and AI factory workloads.

### Current reference architectures
- [[NVIDIA-DGX-SuperPOD-B200-RA]] covers the DGX B200 SuperPOD document with 32 DGX B200 systems per scalable unit and NDR400 InfiniBand compute fabric.
- [[NVIDIA-DGX-SuperPOD-GB200-RA]] covers the rack-scale DGX GB200 SuperPOD document with eight GB200 NVL72 racks per scalable unit, NVLink 5, NDR400 InfiniBand, and Spectrum-4/Spectrum-X Ethernet.
- [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]] covers the DGX B300 SuperPOD document focused on Spectrum-4/Spectrum-X Ethernet and DC busbar power.
- [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]] covers the DGX B300 SuperPOD document focused on Quantum-X800/XDR InfiniBand switching and AC power.
- Both position [[NVIDIA-Mission-Control]] as the standard operations stack for DGX SuperPOD with DGX B300, with [[NVIDIA-AI-Enterprise]], NGC, Run:ai/Base Command Manager functionality, and NVIDIA Enterprise Support in the software/support path.

### NVIDIA context
DGX SuperPOD is a major anchor for many wiki topics: [[NCCL]], [[NVIDIA-ConnectX-InfiniBand]], [[NVLink]], [[NVIDIA-BaseOS]], [[NVIDIA-DCGM]], [[NVIDIA-Base-Command-Manager]], and [[NVIDIA-Mission-Control]].
Current AI factory guidance also makes storage and enterprise data access first-class design concerns, linking SuperPOD-scale compute to [[NVIDIA-Certified-Storage]], [[NVIDIA-AI-Data-Platform]], and agentic AI infrastructure.
[[NVIDIA-DGX-BasePOD]] is the smaller prescriptive enterprise reference architecture that often precedes or complements SuperPOD-scale deployments, while [[NVIDIA-DGX-Enterprise-Support]] covers support, onboarding, administration, and infrastructure services for SuperPOD operations.

## Connections
- [[NVIDIA-DGX]] - DGX systems are the building blocks.
- [[NVIDIA-DGX-BasePOD]] and [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]] - BasePOD is the enterprise reference architecture below SuperPOD scale.
- [[NVIDIA-DGX-Enterprise-Support]] - support/services layer for SuperPOD deployment and administration.
- [[NVIDIA-DGX-B200]] - Blackwell DGX system that precedes the DGX B300 generation.
- [[NVIDIA-DGX-SuperPOD-B200-RA]] - B200 SuperPOD RA with 32-system scalable units and NDR400 InfiniBand.
- [[NVIDIA-GB200-NVL72]] and [[NVIDIA-DGX-SuperPOD-GB200-RA]] - rack-scale Grace Blackwell SuperPOD design with NVLink 5.
- [[NVIDIA-DGX-B300]] - Blackwell Ultra DGX generation for current AI factory deployments.
- [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]] - B300 SuperPOD RA with Spectrum-4/Spectrum-X and DC busbar focus.
- [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]] - B300 SuperPOD RA with Quantum-X800 InfiniBand and AC power focus.
- [[NVIDIA-GB300-NVL72]] - rack-scale Blackwell Ultra NVL72 system in the DGX/SuperPOD direction.
- [[NVIDIA-Vera-Rubin]] and [[NVIDIA-Vera-Rubin-POD]] - next-generation platform and POD-scale architecture beyond Blackwell.
- [[NVIDIA-Enterprise-AI-Factory]] - enterprise AI factory guidance generalizes DGX/SuperPOD patterns into validated full-stack designs.
- [[NVIDIA-Certified-Storage]] - validated storage is needed to feed large SuperPOD-scale workloads.
- [[NVIDIA-AI-Data-Platform]] - data platform reference designs connect SuperPOD-scale compute to retrieval and agent data workflows.
- [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-Quantum-InfiniBand]], and [[NVIDIA-Quantum-X800-InfiniBand]] - high-performance InfiniBand networking for scale-out training.
- [[NVIDIA-ConnectX-9]] - next-generation 1.6 Tb/s-class adapter for future AI factory fabrics.
- [[NVIDIA-Spectrum-X-Validated-Solution-Stack]] - validated software/firmware stack for Spectrum-X AI factory fabrics.
- [[NCCL]] - multi-node collectives are central to training at SuperPOD scale.
- [[NVIDIA-BaseOS]] - validated OS layer for DGX infrastructure.
- [[NVIDIA-Mission-Control]] - AI factory operations layer for large NVIDIA deployments.

## Source Excerpts
- NVIDIA DGX SuperPOD docs provide the documentation entry point for NVIDIA's scalable AI supercomputing platform.
- B200 and GB200 SuperPOD reference architectures are separate docs and are represented as separate wiki pages.
- Current DGX B300 SuperPOD reference architectures split into Spectrum-4/DC-busbar and Quantum-X800/AC-power designs.

## Resources
- [NVIDIA DGX SuperPOD Docs](https://docs.nvidia.com/dgx-superpod/index.html)
- [DGX SuperPOD B200 RA](https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/index.html)
- [DGX SuperPOD GB200 RA](https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/index.html)
- [DGX SuperPOD B300 Spectrum-4 Ethernet RA](https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/index.html)
- [DGX SuperPOD B300 Quantum-X800 InfiniBand RA](https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/index.html)
