# NVIDIA NVL72 AI Factory

**Type:** Reference Architecture
**Tags:** NVIDIA, NVL72 AI Factory, Enterprise Reference Architecture, GB300 NVL72, Blackwell Ultra, Spectrum-X, NVLink, Mission Control
**Related:** [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-Enterprise-RA-Partner-Endorsed-Designs]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-DGX-B300]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[NVIDIA-Mission-Control]], [[NVIDIA-Dynamo]], [[NVIDIA-Run-ai]], [[NGC]], [[NVIDIA-NetQ]], [[NVIDIA-Spectrum-X]], [[NVIDIA-BlueField-DPU]], [[NVLink]], [[GPUDirect-RDMA]], [[GPU-Direct-Storage]]
**Sources:** https://docs.nvidia.com/enterprise-reference-architectures/index.html, https://docs.nvidia.com/enterprise-reference-architectures/nvl72-ai-factory-with-gb300-nvl72-dual-plane-networking-architecture.pdf
**Last Updated:** 2026-05-17

## Summary
NVIDIA NVL72 AI Factory is the Enterprise Reference Architecture for GB300 NVL72 rack-scale AI factories. The current NVIDIA PDF describes a GB300 NVL72 and Spectrum-X architecture for massive enterprise AI training and inference, with each scalable unit containing 18 compute trays/nodes and 72 Blackwell Ultra GPUs.

## Detail

### Purpose
The NVL72 AI Factory pattern is for the most intensive enterprise AI workloads: large-scale foundation model training, fine-tuning, real-time reasoning, and complex agentic AI pipelines. It turns GB300 NVL72 racks into modular building blocks for AI factory data centers.

### Architecture notes
- The RA uses [[NVIDIA-GB300-NVL72]], BlueField-3 DPUs, ConnectX-8 SuperNICs, Spectrum-X Ethernet, AI Enterprise software, Mission Control, and NVLink/NVLink Switch.
- One scalable unit has 18 trays/nodes and 72 GPUs.
- The document includes 2-rack, 4-rack, and 8-rack designs with 144, 288, and 576 Blackwell Ultra GPUs.
- The compute east-west fabric is separated and rail-optimized for high-bandwidth, low-latency GPU traffic.
- Dual-plane Spectrum fabrics are used for high availability, resiliency, and load balancing.
- Storage guidance uses the same 12.5 Gb/s per GPU planning signal that appears in other Enterprise RAs.

### Software stack
The NVL72 RA includes [[NVIDIA-AI-Enterprise]], [[NVIDIA-Mission-Control]], [[NVIDIA-Dynamo]], [[NVIDIA-Run-ai]], [[NGC]], and [[NVIDIA-NetQ]]. Treat [[NVIDIA-Mission-Control]] as the operations-plane page for NVL72 deployment and lifecycle management.

### NVIDIA context
Use this page for the Enterprise RA document and design pattern. Use [[NVIDIA-GB300-NVL72]] for the system identity, [[NVIDIA-DGX-B300]] for the DGX branded product path, and [[NVIDIA-Blackwell-Architecture]] for GPU architecture context.

## Connections
- [[NVIDIA-Enterprise-Reference-Architectures]] - program-level RA hub.
- [[NVIDIA-Enterprise-RA-Partner-Endorsed-Designs]] - partner design catalog adjacent to the Enterprise RA hardware family.
- [[NVIDIA-Enterprise-AI-Factory]] - strategic AI factory planning context.
- [[NVIDIA-GB300-NVL72]] - rack-scale Blackwell Ultra system used in this RA.
- [[NVIDIA-DGX-B300]] - DGX system path adjacent to GB300 NVL72 deployments.
- [[NVIDIA-DGX-SuperPOD]] - large-scale AI factory and SuperPOD context.
- [[NVIDIA-Blackwell-Architecture]] - Blackwell Ultra architecture foundation.
- [[NVIDIA-AI-Enterprise]] - enterprise software suite included in the software stack.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - common AI Enterprise software pattern.
- [[NVIDIA-Enterprise-RA-Observability-Guide]] - observability guidance for Enterprise RAs.
- [[NVIDIA-Mission-Control]] - operations platform for NVL72 deployments.
- [[NVIDIA-Dynamo]] - open-source inference orchestration component included in the RA software table.
- [[NVIDIA-Run-ai]] - workload orchestration layer.
- [[NGC]] - GPU-optimized containers and AI/HPC artifacts.
- [[NVIDIA-NetQ]] - network operations and validation.
- [[NVIDIA-Spectrum-X]] - Ethernet networking platform for compute and converged connectivity.
- [[NVIDIA-BlueField-DPU]] - DPU role for infrastructure, networking, and storage paths.
- [[NVLink]] - defining rack-scale GPU interconnect for NVL72.
- [[GPUDirect-RDMA]] - direct GPU-network data path.
- [[GPU-Direct-Storage]] - direct storage-to-GPU data path for data-heavy AI workloads.

## Source Excerpts
- NVIDIA's Enterprise RA hub describes NVL72 AI Factory as the GB300 NVL72 rack-scale building block for the most intensive enterprise AI workloads.
- The March 2026 PDF lists GB300 NVL72, BlueField-3, ConnectX-8, Spectrum-X, AI Enterprise, Mission Control, and NVLink/NVLink Switch as core technologies.

## Resources
- [NVIDIA Enterprise Reference Architectures](https://docs.nvidia.com/enterprise-reference-architectures/index.html)
- [NVIDIA NVL72 AI Factory PDF](https://docs.nvidia.com/enterprise-reference-architectures/nvl72-ai-factory-with-gb300-nvl72-dual-plane-networking-architecture.pdf)
