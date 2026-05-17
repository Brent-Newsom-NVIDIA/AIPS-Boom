# NVIDIA AIStore

**Type:** Platform
**Tags:** NVIDIA, AIStore, storage, object storage, AI data, distributed systems
**Related:** [[NVIDIA-DGX-SuperPOD]], [[NeMo-Curator]], [[NVIDIA-Base-Command]], [[GPUDirect-RDMA]], [[GPU-Direct-Storage]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/aistore
**Last Updated:** 2026-04-29

## Summary
NVIDIA AIStore (AIS) is a lightweight distributed storage stack tailored for AI workloads. It is designed to scale elastically, operate on in-cluster and remote data, and provide high-throughput storage behavior for data-heavy training and inference workflows.

## Detail

### Purpose
AI pipelines need storage that can keep GPUs fed while handling large datasets, transformations, and elastic infrastructure. AIStore provides a distributed object-storage layer that can run from a single Linux machine to large bare-metal or Kubernetes clusters.

### Key capabilities
- Elastic cluster behavior that can grow and shrink at runtime.
- Native operation over local cluster data and remote data sources.
- Bucket and namespace concepts for AI data management.
- Data transformation support for preprocessing and pipeline integration.
- Focus on balanced I/O distribution and linear scale-out.

### NVIDIA context
AIStore belongs with the AI factory data layer: it can support [[NeMo-Curator]], training pipelines, model evaluation, and storage-intensive inference workflows on [[NVIDIA-DGX-SuperPOD]] or similar clusters.

## Connections
- [[NeMo-Curator]] - data curation workflows need scalable storage and transformation pipelines.
- [[NVIDIA-Base-Command]] - AI training platforms depend on dataset and storage management.
- [[GPU-Direct-Storage]] - adjacent NVIDIA storage acceleration path for GPU data movement.
- [[NVIDIA-DGX-SuperPOD]] - large-scale infrastructure target for distributed AI storage.
- [[NVIDIA-AI-Enterprise]] - enterprise AI stacks need reliable data infrastructure.

## Source Excerpts
- NVIDIA AIStore docs describe a distributed storage stack tailored for AI applications and elastic deployments.

