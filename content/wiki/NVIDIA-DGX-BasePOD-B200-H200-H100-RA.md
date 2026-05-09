# NVIDIA DGX BasePOD B200 H200 H100 Reference Architecture

**Type:** Reference Architecture
**Tags:** NVIDIA, DGX BasePOD, DGX B200, DGX H200, DGX H100, NDR400, InfiniBand, Base Command, AI Enterprise, enterprise AI
**Related:** [[NVIDIA-DGX-BasePOD]], [[NVIDIA-DGX]], [[NVIDIA-DGX-B200]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-Cumulus-Linux]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Base-Command-Manager]], [[NGC]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://docs.nvidia.com/dgx-basepod/reference-architecture-infrastructure-foundation-enterprise-ai/latest/index.html, https://docs.nvidia.com/dgx-basepod/reference-architecture-infrastructure-foundation-enterprise-ai/latest/dgx-basepod-overview.html, https://docs.nvidia.com/dgx-basepod/reference-architecture-infrastructure-foundation-enterprise-ai/latest/core-components.html, https://docs.nvidia.com/dgx-basepod/reference-architecture-infrastructure-foundation-enterprise-ai/latest/reference-architectures.html
**Last Updated:** 2026-05-09

## Summary
NVIDIA DGX BasePOD B200 H200 H100 Reference Architecture is the current DGX BasePOD RA for enterprise AI infrastructure built from two to eight DGX systems. It covers DGX B200, DGX H200, and DGX H100 options with NDR400 InfiniBand compute fabric, Ethernet management/storage networking, out-of-band management, five management/control-plane servers, [[NVIDIA-Base-Command-Manager]], [[NGC]], [[NVIDIA-AI-Enterprise]], and certified storage.

## Detail

### Purpose
Use this page for the NVIDIA document titled "NVIDIA DGX BasePOD: The Infrastructure Foundation for Enterprise AI Reference Architecture Featuring NVIDIA DGX B200, H200 and H100 Systems." Use [[NVIDIA-DGX-BasePOD]] for the generic BasePOD concept and [[NVIDIA-DGX-SuperPOD-B200-RA]] when the customer is moving beyond BasePOD into B200 SuperPOD scale.

### Architecture notes
- Document number RA-11127-001 V5; publication date 2025-08-06; docs last updated 2026-04-14.
- The design supports DGX BasePOD deployments from two to eight DGX nodes, with infrastructure scaling from small development clusters toward larger enterprise AI environments.
- Compute node options include DGX B200 systems with eight B200 GPUs, NDR400 InfiniBand networking, and two BlueField-3 DPUs; DGX H100 systems; and DGX H200 systems.
- Compute fabric uses NVIDIA Quantum QM9700 NDR400 Gb/s InfiniBand switches.
- Management and storage fabric uses NVIDIA SN4600C switches.
- Out-of-band management uses NVIDIA SN2201 switches.
- The complete architecture has three networks: InfiniBand compute, Ethernet system-management/storage, and out-of-band management.
- The reference design includes five dual-socket x86 management servers: two head nodes for Base Command Manager and three additional nodes for deployment services such as login nodes, Slurm, Kubernetes, or MLOps partner solutions.

### Software stack
The RA centers on [[NVIDIA-Base-Command-Manager]], [[NGC]], and [[NVIDIA-AI-Enterprise]]. Base Command provides cluster management, provisioning, OS management, monitoring, and workflow management through Slurm or Kubernetes. NGC provides the GPU-optimized software catalog, and AI Enterprise provides supported production AI software.

### NVIDIA context
BasePOD is the smaller, prescriptive enterprise AI factory foundation. It is the right fit for customers who need validated DGX infrastructure but do not yet need [[NVIDIA-DGX-SuperPOD]] scale, [[NVIDIA-GB200-NVL72]] rack-scale NVLink domains, or Blackwell Ultra [[NVIDIA-DGX-B300]]/GB300 designs.

## Connections
- [[NVIDIA-DGX-BasePOD]] - parent BasePOD concept page.
- [[NVIDIA-DGX]] - DGX systems are the compute foundation.
- [[NVIDIA-DGX-B200]] - current Blackwell DGX option in the RA.
- [[NVIDIA-DGX-SuperPOD-B200-RA]] - larger B200 SuperPOD architecture beyond BasePOD scale.
- [[NVIDIA-DGX-SuperPOD]] - larger-scale reference architecture family.
- [[NVIDIA-Quantum-InfiniBand]] - NDR400 compute fabric context.
- [[NVIDIA-ConnectX-InfiniBand]] - ConnectX-7 VPI adapters in DGX nodes.
- [[NVIDIA-BlueField-DPU]] - DGX B200 storage/management networking role.
- [[NVIDIA-Cumulus-Linux]] - switch OS for SN4600C/SN2201 Ethernet management fabrics.
- [[NVIDIA-AI-Enterprise]] - enterprise software layer.
- [[NVIDIA-Base-Command-Manager]] - cluster-management and provisioning layer.
- [[NGC]] - GPU-optimized software catalog.
- [[NVIDIA-Certified-Storage]] - certified partner storage is part of BasePOD design.
- [[NVIDIA-Enterprise-AI-Factory]] - BasePOD is a practical enterprise AI factory foundation.

## Source Excerpts
- NVIDIA describes DGX BasePOD as an integrated solution made of NVIDIA hardware/software, MLOps solutions, and third-party storage.
- The reference architecture page says the NDR400 design supports two to eight DGX nodes and uses InfiniBand compute, Ethernet management/storage, and out-of-band management networks.
- The core-components page lists DGX B200 with eight B200 GPUs, 1.4 TB GPU memory, ConnectX-7 VPI, BlueField-3 DPUs, and dual fifth-generation Intel Xeon processors.

## Resources
- [NVIDIA DGX BasePOD B200 H200 H100 Reference Architecture](https://docs.nvidia.com/dgx-basepod/reference-architecture-infrastructure-foundation-enterprise-ai/latest/index.html)
