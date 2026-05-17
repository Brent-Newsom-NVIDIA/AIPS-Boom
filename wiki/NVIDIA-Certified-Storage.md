# NVIDIA-Certified Storage

**Type:** Program
**Tags:** NVIDIA, certified storage, AI factory, enterprise storage, GPUDirect Storage, AI Data Platform, storage partners
**Related:** [[NVIDIA-Certified-Systems]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-Enterprise-Reference-Architectures]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], [[NVIDIA-NVL72-AI-Factory]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-STX]], [[GPU-Direct-Storage]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-Cloud]]
**Sources:** https://www.nvidia.com/en-us/data-center/products/certified-storage/, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/ecosystem-architecture.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/prerequisites.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA-Certified Storage is NVIDIA's validation program for enterprise storage platforms that need to feed AI, HPC, RAG, KV-cache, and agentic AI workloads without becoming a bottleneck. It complements [[NVIDIA-Certified-Systems]] by validating the storage layer of AI factories and NVIDIA AI Data Platform deployments.

## Detail

### Purpose
AI factories need storage that can sustain large model training, high-volume inference, fine-tuning, retrieval, vector database access, and context-cache workloads. NVIDIA-Certified Storage gives enterprises and cloud providers a way to select partner storage that has been benchmarked and validated for performance, reliability, scalability, quality of service, security, and multi-tenancy.

### Certification scope
- General-purpose file and object storage for AI and accelerated computing workloads.
- Scale-out performance across training, inference, fine-tuning, and KV-cache read/write patterns.
- Reliability, availability, serviceability, multitenancy, security, and data services.
- Special-purpose system certification for [[NVIDIA-AI-Data-Platform]] deployments, including KV-cache and document extraction validation.

### AI factory context
The Enterprise AI Factory design guide treats certified storage as a core part of AI infrastructure. It helps feed compute nodes, support vector databases and knowledge bases, and protect large datasets and model artifacts. It is also related to [[GPU-Direct-Storage]] where partner systems use direct storage-to-GPU paths for throughput-sensitive workloads.

The [[Red-Hat-AI-Factory-with-NVIDIA]] prerequisites recommend NVIDIA-Certified Storage when OpenShift AI deployments need supported dynamic storage classes, object storage, model cache storage, and production data services.

## Connections
- [[NVIDIA-Certified-Systems]] - certified systems validate compute; certified storage validates the data layer.
- [[NVIDIA-Enterprise-AI-Factory]] - AI factories need validated storage alongside compute, networking, software, and operations.
- [[NVIDIA-Enterprise-Reference-Architectures]] - current Enterprise RA pages include storage bandwidth and validation guidance.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide that recommends NVIDIA-Certified Storage for the storage layer.
- [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], and [[NVIDIA-NVL72-AI-Factory]] - hardware RAs require storage that keeps pace with GPU-intensive workloads.
- [[NVIDIA-AI-Data-Platform]] - special-purpose certification applies to AI Data Platform-style systems.
- [[NVIDIA-STX]] - STX is adjacent to next-generation AI-native storage partner designs.
- [[GPU-Direct-Storage]] - direct GPU/storage data paths are relevant to AI storage performance.
- [[NVIDIA-DGX-SuperPOD]] - SuperPOD-scale environments depend on high-throughput storage.
- [[NVIDIA-DGX-Cloud]] - cloud partner AI infrastructure also needs storage that can sustain AI workloads.

## Source Excerpts
- NVIDIA's certified storage page describes validated partner storage for performance, security, scale, and AI factory workloads.
- The Enterprise AI Factory design guide says storage can become a bottleneck and calls out NVIDIA-Certified Storage as a key design component.
- The Red Hat AI Factory prerequisites recommend NVIDIA Certified Storage for OpenShift AI deployment storage.

## Resources
- [NVIDIA-Certified Storage](https://www.nvidia.com/en-us/data-center/products/certified-storage/)
