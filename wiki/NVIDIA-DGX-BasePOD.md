# NVIDIA DGX BasePOD

**Type:** Platform
**Tags:** NVIDIA, DGX BasePOD, DGX, reference architecture, AI factory, enterprise AI, Mission Control, Base Command Manager
**Related:** [[NVIDIA-DGX]], [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]], [[NVIDIA-DGX-B200]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-B300]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Mission-Control]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-BaseOS]], [[NVIDIA-Run-ai]], [[NVIDIA-Certified-Storage]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-Certified-Systems]], [[NVIDIA-DGX-Enterprise-Support]]
**Sources:** https://docs.nvidia.com/dgx-basepod/index.html, https://www.nvidia.com/en-us/data-center/dgx-basepod/, https://docs.nvidia.com/dgx-basepod/reference-architecture-infrastructure-foundation-enterprise-ai/latest/index.html
**Last Updated:** 2026-05-09

## Summary
NVIDIA DGX BasePOD is NVIDIA's prescriptive enterprise AI infrastructure reference architecture for building and scaling DGX-based AI infrastructure. It sits between individual DGX systems and full [[NVIDIA-DGX-SuperPOD]] deployments by combining DGX systems, NVIDIA networking, storage, software, MLOps components, and deployment guidance into a validated base architecture for enterprise AI factories.

## Detail

### Purpose
Enterprise teams often need a validated path to deploy AI infrastructure without designing every compute, network, storage, software, and operations component from scratch. DGX BasePOD provides that prescriptive base so organizations can build an AI Center of Excellence or enterprise AI factory with lower deployment complexity and more repeatable operations.

### Platform role
- Reference architecture for DGX infrastructure using DGX B200, H200, H100, and A100 era systems in current documentation.
- The current [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]] document covers a two-to-eight-node NDR400 InfiniBand design with DGX B200, H200, and H100 options.
- Connects compute, networking switches, software, MLOps solutions, and third-party storage into validated configurations.
- Provides deployment guides for DGX B200 with [[NVIDIA-Mission-Control]], DGX H200 and DGX A100 with [[NVIDIA-Base-Command-Manager]], Run:ai on DGX BasePOD, AWS connectivity, RHEL deployment, and update workflows.
- Works with [[NVIDIA-AI-Enterprise]] for supported enterprise AI software.
- Connects to [[NVIDIA-Certified-Storage]] and partner storage reference architectures for high-throughput training, inference, and data pipeline workloads.

### BasePOD vs SuperPOD
DGX BasePOD is the enterprise foundation pattern: validated, repeatable infrastructure for organizations building production AI capacity. [[NVIDIA-DGX-SuperPOD]] is the larger leadership-class AI supercomputing architecture for the most demanding training, simulation, and AI factory workloads. BasePOD can be a stepping stone toward SuperPOD-scale operations.

### NVIDIA context
BasePOD makes several wiki areas queryable together: [[NVIDIA-DGX]] systems, [[NVIDIA-Mission-Control]] operations, [[NVIDIA-Base-Command-Manager]] cluster management, [[NVIDIA-Run-ai]] workload orchestration, [[NVIDIA-AI-Enterprise]] software, and certified storage/data platform guidance.

## Connections
- [[NVIDIA-DGX]] - DGX systems are the compute building blocks.
- [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]] - current detailed BasePOD RA page for B200/H200/H100 systems.
- [[NVIDIA-DGX-B200]] - current Blackwell system option in the BasePOD RA.
- [[NVIDIA-DGX-SuperPOD]] - larger-scale architecture above BasePOD.
- [[NVIDIA-DGX-SuperPOD-B200-RA]] - B200 SuperPOD path when BasePOD scale is not enough.
- [[NVIDIA-DGX-B300]] and [[NVIDIA-GB300-NVL72]] - current Blackwell Ultra DGX direction for AI factory infrastructure.
- [[NVIDIA-AI-Enterprise]] - supported software suite used with DGX BasePOD deployments.
- [[NVIDIA-Mission-Control]] - current deployment path for DGX B200 BasePOD guidance.
- [[NVIDIA-Base-Command-Manager]] - cluster-management path for H200/A100 BasePOD deployment guides.
- [[NVIDIA-Run-ai]] - workload orchestration guide exists for DGX BasePOD deployment.
- [[NVIDIA-Certified-Storage]] - storage partner validation is central to BasePOD data feeding and checkpoint workflows.
- [[NVIDIA-AI-Data-Platform]] - data platform reference designs build on the same AI factory storage and retrieval concerns.
- [[NVIDIA-DGX-Enterprise-Support]] - BasePOD deployments are covered by DGX support and services options.

## Source Excerpts
- NVIDIA's DGX BasePOD docs describe a prescriptive enterprise AI infrastructure that reduces design, deployment, and management complexity.
- NVIDIA's DGX BasePOD product page positions it as the infrastructure foundation for enterprise AI factories and connects it to AI Enterprise and partner storage reference architectures.

## Resources
- [NVIDIA DGX BasePOD Docs](https://docs.nvidia.com/dgx-basepod/index.html)
- [NVIDIA DGX BasePOD Product Page](https://www.nvidia.com/en-us/data-center/dgx-basepod/)
- [DGX BasePOD B200 H200 H100 RA](https://docs.nvidia.com/dgx-basepod/reference-architecture-infrastructure-foundation-enterprise-ai/latest/index.html)
