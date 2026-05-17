# NVIDIA AI Enterprise Software Reference Architecture

**Type:** Reference Architecture
**Tags:** NVIDIA, AI Enterprise, software reference architecture, Kubernetes, NIM, NIM Operator, GPU Operator, Network Operator, Base Command Manager
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Lifecycle-Policy]], [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], [[NVIDIA-AI-Enterprise-Cloud-Deployment]], [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], [[NVIDIA-NVL72-AI-Factory]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[NVIDIA-NIM]], [[NVIDIA-NIM-Operator]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-DOCA]], [[GPUDirect-RDMA]], [[GPU-Direct-Storage]], [[NVIDIA-Certified-Systems]], [[NeMo-Platform]], [[NVIDIA-AI-Blueprints]]
**Sources:** https://docs.nvidia.com/ai-enterprise/reference-architecture/latest/index.html, https://docs.nvidia.com/ai-enterprise/reference-architecture/latest/platform-overview.html, https://docs.nvidia.com/ai-enterprise/reference-architecture/latest/introduction.html, https://docs.nvidia.com/ai-enterprise/reference-architecture/latest/compute-node-hardware.html, https://docs.nvidia.com/ai-enterprise/reference-architecture/latest/software-stack.html, https://docs.nvidia.com/ai-enterprise/reference-architecture/latest/target-workloads.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/platform-overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Enterprise Software Reference Architecture is NVIDIA's current example full-stack deployment pattern for production AI Enterprise workloads. It is aimed at OEMs, partners, and enterprise customers building single-tenant AI systems for inference, fine-tuning, and retrieval-augmented generation, while keeping the software stack consistent across modular hardware choices.

## Detail

### Purpose
The software RA gives a supported starting point for turning NVIDIA-certified hardware into production AI infrastructure. It covers application-layer services, infrastructure-layer software, Kubernetes, platform software, and workload examples that can run across Enterprise RA hardware.

### Platform layers
- The application layer includes [[NVIDIA-NIM]], AI frameworks, toolkits, SDKs, pretrained models, and NGC-delivered software.
- The infrastructure layer includes data center drivers, vGPU components, DOCA networking drivers, [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], DPU/DPF functionality through DOCA, [[NVIDIA-NIM-Operator]], and [[NVIDIA-Base-Command-Manager]].
- The reference platform software uses Ubuntu, upstream Kubernetes, and containerd as an agnostic starting point.
- Kubernetes is the orchestration base for namespaces, workload management, GPU device integration, and microservice deployment.

### Hardware and workload focus
The current RA describes H200 NVL PCIe optimized 2-8-5 systems as an example compute-node pattern, with additional 2-4-3 and 2-8-9/HGX style configurations available through the Enterprise RA program. Target workloads include LLM inference, fine-tuning, traditional deep learning inference, RAG, KServe/NIM deployment, NeMo workflows, and blueprint-style applications.

### NVIDIA context
Use this page for the current AI Enterprise software reference design. Use [[NVIDIA-AI-Enterprise]] for the product suite, [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] for branch/support planning, [[NVIDIA-Enterprise-Reference-Architectures]] for the RA program, and hardware-specific pages such as [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], and [[NVIDIA-NVL72-AI-Factory]] for node and fabric designs. Use [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], or [[NVIDIA-AI-Enterprise-Cloud-Deployment]] for install paths, and use [[Red-Hat-AI-Factory-with-NVIDIA]] when the deployment target is Red Hat OpenShift AI rather than the generic Ubuntu/upstream Kubernetes reference.

## Connections
- [[NVIDIA-AI-Enterprise]] - product and support umbrella for the software RA.
- [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] - compatibility and support planning for the software stack.
- [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], and [[NVIDIA-AI-Enterprise-Cloud-Deployment]] - install-path guides that operationalize the software stack.
- [[NVIDIA-Enterprise-Reference-Architectures]] - program-level RA hub.
- [[NVIDIA-Enterprise-AI-Factory]] - strategic AI factory context.
- [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], and [[NVIDIA-NVL72-AI-Factory]] - hardware RA pages that use the software stack.
- [[NVIDIA-Enterprise-RA-Observability-Guide]] - monitoring and alerting layer built on the software stack.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift-specific deployment guide using AI Enterprise, NIM, GPU Operator, Network Operator, and NIM Operator.
- [[NVIDIA-NIM]] - primary model-serving microservice layer.
- [[NVIDIA-NIM-Operator]] - Kubernetes lifecycle manager for NIM services.
- [[NVIDIA-GPU-Operator]] - GPU enablement and telemetry for Kubernetes.
- [[NVIDIA-Network-Operator]] - network enablement for high-throughput GPU clusters.
- [[NVIDIA-Base-Command-Manager]] - deployment and cluster management path.
- [[NVIDIA-DOCA]] - networking and DPU driver/service layer.
- [[GPUDirect-RDMA]] - high-throughput network-to-GPU path.
- [[GPU-Direct-Storage]] - direct storage-to-GPU path.
- [[NVIDIA-Certified-Systems]] - validated server baseline for the RA.
- [[NeMo-Platform]] - LLMOps microservices used by target workloads.
- [[NVIDIA-AI-Blueprints]] - reference application patterns that can run on the stack.

## Source Excerpts
- The current AI Enterprise Software RA says it is an example infrastructure stack for OEMs and partners building systems for single-tenant production AI workloads.
- The software stack section lists Ubuntu, upstream Kubernetes, containerd, NVIDIA infrastructure software, NIM, NIM Operator, GPU Operator, Network Operator, DOCA drivers, GPUDirect RDMA, and GPUDirect Storage as core pieces of the reference.

## Resources
- [NVIDIA AI Enterprise Software Reference Architecture](https://docs.nvidia.com/ai-enterprise/reference-architecture/latest/index.html)
- [AI Enterprise Software RA Platform Overview](https://docs.nvidia.com/ai-enterprise/reference-architecture/latest/platform-overview.html)
- [AI Enterprise Software RA Software Stack](https://docs.nvidia.com/ai-enterprise/reference-architecture/latest/software-stack.html)
- [Red Hat AI Factory Platform Overview](https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/platform-overview.html)
