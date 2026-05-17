# NVIDIA DGX Cloud

**Type:** Platform
**Tags:** NVIDIA, DGX Cloud, cloud AI, AI supercomputing, enterprise AI
**Related:** [[NVIDIA-DGX]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Base-Command]], [[NVIDIA-AI-Grid]], [[NVIDIA-NIM]], [[NVIDIA-Quantum-Cloud]], [[CUDA-Q]], [[NVIDIA-Cloud-Accelerator-NCX]], [[NVIDIA-Fleet-Intelligence]], [[NVIDIA-Project-GPUd]], [[NVIDIA-Isaac-GR00T]]
**Sources:** https://docs.nvidia.com/dgx-cloud/index.html, https://www.nvidia.com/en-us/data-center/dgx-cloud/
**Last Updated:** 2026-04-29

## Summary
NVIDIA DGX Cloud is NVIDIA's cloud AI supercomputing platform for accessing NVIDIA AI infrastructure through cloud service environments. In the wiki it should be treated as a deployment platform adjacent to [[NVIDIA-DGX]], [[NVIDIA-DGX-SuperPOD]], and [[NVIDIA-AI-Enterprise]].

## Detail

### Purpose
Not every organization can deploy a full AI supercomputer on premises, and many teams need elastic access to NVIDIA AI infrastructure. DGX Cloud provides a cloud-hosted path for training, customization, and inference workloads that still align with the NVIDIA software stack.

### Key capabilities
- Cloud access to NVIDIA AI supercomputing infrastructure.
- Enterprise AI workflow alignment with [[NVIDIA-AI-Enterprise]] and NVIDIA software containers/models.
- Fits hybrid AI factory planning across on-prem, hosted, and cloud environments.
- Relevant to large training, model customization, inference, and evaluation workflows.

### NVIDIA context
DGX Cloud is part of the [[NVIDIA-AI-Grid]] story: workloads can run where infrastructure, data locality, cost, and latency make the most sense.
It is also a cloud-accessible AI factory path alongside on-premises [[NVIDIA-DGX-SuperPOD]], with [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Data-Platform]], and storage/networking choices determining how training, inference, retrieval, and agent workflows are placed.
[[NVIDIA-Quantum-Cloud]] is the quantum-facing cloud access path for [[CUDA-Q]] projects and is adjacent to DGX Cloud capacity when quantum workloads need GPU-backed cloud resources.

## Connections
- [[NVIDIA-DGX]] - on-prem DGX systems are the hardware/platform counterpart.
- [[NVIDIA-DGX-SuperPOD]] - large on-prem AI supercomputing reference architecture.
- [[NVIDIA-AI-Enterprise]] - enterprise software stack used across DGX Cloud environments.
- [[NVIDIA-Enterprise-AI-Factory]] - DGX Cloud is a hosted capacity option in the broader AI factory pattern.
- [[NVIDIA-AI-Data-Platform]] - data access and retrieval design influence how DGX Cloud workloads connect to enterprise data.
- [[NVIDIA-Certified-Storage]] - cloud partner and AI factory storage choices affect large-scale AI workload throughput.
- [[NVIDIA-Base-Command]] - AI development and job management layer historically tied to DGX Cloud.
- [[NVIDIA-NIM]] - inference microservices can be deployed on NVIDIA cloud or self-hosted GPU infrastructure.
- [[NVIDIA-Quantum-Cloud]] - cloud/API access path for CUDA-Q quantum workloads on NVIDIA GPU systems.
- [[CUDA-Q]] - quantum workloads can use CUDA-Q in NVIDIA cloud contexts.
- [[NVIDIA-Cloud-Accelerator-NCX]] - cloud partner software components support NVIDIA-powered AI cloud operations.
- [[NVIDIA-Fleet-Intelligence]] - fleet health and predictive failure signals are relevant to DGX Cloud-scale operations.
- [[NVIDIA-Project-GPUd]] - GPUd is described as used in DGX Cloud Lepton production infrastructure.
- [[NVIDIA-Isaac-GR00T]] - humanoid robotics foundation model training can use DGX/DGX Cloud-style AI infrastructure.

## Source Excerpts
- NVIDIA documentation and product pages position DGX Cloud as cloud-accessible NVIDIA AI supercomputing infrastructure.
