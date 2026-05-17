# NVIDIA Mission Control

**Type:** Platform
**Tags:** NVIDIA, AI factory, cluster management, DGX, SuperPOD, orchestration, observability, recovery, B200, B300, GB200, GB300
**Related:** [[NVIDIA-DGX]], [[NVIDIA-DGX-BasePOD]], [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]], [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]], [[NVIDIA-DGX-Enterprise-Support]], [[NVIDIA-DGX-B200]], [[NVIDIA-DGX-B300]], [[NVIDIA-GB200-NVL72]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-NVL72-AI-Factory]], [[NVIDIA-Vera-Rubin]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Base-Command]], [[NVIDIA-Run-ai]], [[NVIDIA-Resiliency-Extension]], [[NVIDIA-UFM]], [[NVIDIA-NetQ]], [[NVIDIA-DCGM]], [[DOCA-Telemetry-Service]], [[NVLink]], [[NVIDIA-GPU-Operator]]
**Sources:** https://docs.nvidia.com/mission-control/index.html; https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.3.0/index.html; https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.3.0/nmc-release-notes.html; https://docs.nvidia.com/mission-control/docs/systems-administration-guide/2.2.0/overview.html; https://docs.nvidia.com/mission-control/docs/systems-administration-guide/2.3.0/nvlink-management-software.html; https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.3.0/nmc-user-guide-runai-installation.html; https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.0.0/ajr/ajr-overview.html; https://docs.nvidia.com/mission-control/docs/systems-administration-guide/2.1.0/prs/introduction.html; https://nvidia.github.io/nvidia-resiliency-ext/; https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/index.html; https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/index.html; https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/index.html; https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/index.html; https://www.nvidia.com/en-us/data-center/gb300-nvl72/
**Last Updated:** 2026-05-09

## Summary
NVIDIA Mission Control is NVIDIA's integrated AI factory management platform for modern DGX and GB200/GB300 NVL72 environments. It combines cluster provisioning, workload orchestration, observability, network management, and automated resiliency workflows into a single operational control plane. In the current docs, Mission Control is the recommended operations stack for DGX B200/B300 and DGX GB200/GB300 class deployments, and it is explicitly required for GB200/GB300 NVL72 installation and management workflows.

## Detail
Mission Control turns a multi-rack AI system into something administrators can provision, operate, monitor, and recover in a coordinated way. The docs describe three main operational planes: a control plane for administration and services, a user access plane for Slurm and Run:ai driven workload submission, and a compute plane that executes GPU workloads on DGX or NVL72 resources.
In the broader [[NVIDIA-Enterprise-AI-Factory]] picture, Mission Control is the operations companion to AI Enterprise software, validated compute, networking, and data/storage layers such as [[NVIDIA-AI-Data-Platform]] and [[NVIDIA-Certified-Storage]].

### Core platform role
Mission Control is positioned as the operations layer for NVIDIA's AI factory model. Its job is not just to bring up hardware, but to keep large GPU environments usable at production scale by standardizing deployment, reducing downtime, and integrating cluster automation with observability and recovery.

### Built-in cluster management and provisioning
The management backbone inside Mission Control is NVIDIA Base Command Manager (BCM). Mission Control uses BCM for cluster provisioning, inventory, GUI and CLI administration, and integration points for the rest of the stack. On supported systems, BCM also provides the setup flows used to install or coordinate Kubernetes services and other Mission Control components.

### Built-in workload management
Mission Control supports both Slurm-style HPC workflows and Kubernetes-native AI orchestration. The docs describe Slurm as the traditional workload manager for queueing and resource allocation, while NVIDIA Run:ai is the AI-specific orchestration layer used for Kubernetes workloads. In Mission Control guidance, Run:ai installation is done through BCM tooling and tied to explicit node categories for system and GPU worker nodes.

### Built-in observability and fabric operations
Mission Control includes an observability stack with Grafana dashboards plus network and fabric-aware visibility. For InfiniBand environments it incorporates UFM, while NVLink and network telemetry are surfaced through NetQ and related NMX components. The docs describe this as unified observability across NVLink and Ethernet, with BCM able to consume a subset of rack-level metrics.

### Built-in resiliency and recovery
Mission Control also bundles automated recovery capabilities rather than treating them as separate products. Autonomous Hardware Recovery covers baseline testing, health checks, firmware workflows, and automated break/fix operations. Autonomous Job Recovery handles failure detection, attribution, checkpoint-aware requeue, and restart for long-running AI training jobs. Current Mission Control docs reference [[NVIDIA-Resiliency-Extension]] as part of the autonomous job recovery stack, while noting that it must be installed separately. This is one of the clearest differentiators between Mission Control and a more conventional cluster-management stack.

### Built-in power-aware operations
Mission Control documentation also covers Power Reservation Steering (PRS), which extends operations into facility-level power optimization. PRS treats power as a schedulable resource for Slurm-based environments, helping operators reclaim unused power headroom, oversubscribe more safely, and prioritize critical hero jobs when necessary.

### Current release picture
As of docs accessed on 2026-04-28, the latest surfaced user-guide and release-note content is Mission Control 2.3.0, last updated in late April 2026. Those docs highlight support across DGX B200/B300 and DGX or OEM GB200/GB300 NVL72 systems, air-gapped deployment support, updated Grafana dashboards, newer BCM integration, and continued expansion of autonomous resiliency features.
Current DGX SuperPOD reference architectures for B200, GB200, and B300 also position Mission Control as the integrated operations and workload plane for AI factory deployments.

## Connections
- [[NVIDIA-DGX]] - Mission Control is the operations layer for current DGX B200/B300 and DGX GB200/GB300 deployments.
- [[NVIDIA-DGX-BasePOD]] - current BasePOD docs include a DGX B200 deployment path with Mission Control.
- [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]] - BasePOD RA context for smaller DGX deployments.
- [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]], and [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]] - SuperPOD RAs where Mission Control is part of the production operations stack.
- [[NVIDIA-DGX-Enterprise-Support]] - support/services layer for DGX and AI factory operations.
- [[NVIDIA-DGX-B200]] - Blackwell DGX system generation managed by Mission Control.
- [[NVIDIA-DGX-B300]] - current Blackwell Ultra DGX system generation that needs AI factory operations.
- [[NVIDIA-GB200-NVL72]] - rack-scale Grace Blackwell platform in Mission Control/SuperPOD guidance.
- [[NVIDIA-GB300-NVL72]] - rack-scale Blackwell Ultra platform adjacent to current Mission Control/NVL72 operations.
- [[NVIDIA-NVL72-AI-Factory]] - Enterprise RA that includes Mission Control as part of the GB300 NVL72 software stack.
- [[NVIDIA-Vera-Rubin]] - future rack-scale AI platform direction Mission Control-style operations will need to cover.
- [[NVIDIA-Enterprise-AI-Factory]] - Mission Control is the operational control plane adjacent to enterprise AI factory reference designs.
- [[NVIDIA-Enterprise-RA-Observability-Guide]] - cross-cutting observability guide that complements Mission Control's integrated operations model.
- [[NVIDIA-AI-Data-Platform]] - AI factory operations must account for data ingestion, retrieval, and context infrastructure.
- [[NVIDIA-Certified-Storage]] - certified storage is part of the validated AI factory infrastructure Mission Control may operate around.
- [[NVIDIA-Base-Command]] - BCM is the provisioning and cluster-management backbone inside Mission Control.
- [[NVIDIA-Run-ai]] - Mission Control uses Run:ai for Kubernetes-native AI workload orchestration in supported DGX environments.
- [[NVIDIA-Resiliency-Extension]] - NVRx is the Python/job-level resiliency package referenced by Mission Control autonomous job recovery guidance.
- [[NVIDIA-UFM]] - UFM handles InfiniBand scale-out fabric management inside supported Mission Control deployments.
- [[NVIDIA-NetQ]] - NetQ/NMX-style network and NVLink visibility connects Mission Control to fabric operations.
- [[NVIDIA-AI-Enterprise]] - Mission Control complements AI Enterprise by focusing on day-2 cluster operations and integrated infrastructure management.
- [[NVIDIA-DCGM]] - DCGM provides GPU telemetry that fits into Mission Control's broader observability model.
- [[DOCA-Telemetry-Service]] - DTS provides DPU/network telemetry that complements GPU and fabric observability.
- [[NVLink]] - Mission Control's NetQ/NMX components extend operations into NVLink fabrics and partition-aware telemetry.
- [[NVIDIA-GPU-Operator]] - Mission Control relies on Kubernetes-hosted services, making GPU Operator part of the surrounding GPU software stack.

## Source Excerpts
- "integrated AI factory management platform"
- "single control plane"
- "Mission Control consists of three primary operational planes"
- "through the cm-kubernetes-setup tool included with BCM 11"
- "safely reclaiming unused power headroom"
