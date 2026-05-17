# NVIDIA AI Enterprise Software

**Type:** Software Catalog
**Tags:** NVIDIA, AI Enterprise, software catalog, application layer, infrastructure layer, NGC, support matrix
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Quick-Start-Guide]], [[NVIDIA-AI-Enterprise-Lifecycle-Policy]], [[NVIDIA-AI-Enterprise-Infrastructure-Support-Matrix]], [[NGC]], [[NVIDIA-NGC-Catalog]], [[NVIDIA-NIM]], [[NVIDIA-NeMo]], [[NVIDIA-Omniverse]], [[NVIDIA-Run-ai]], [[NVIDIA-Run-ai-Support-and-Lifecycle]], [[NVIDIA-RAPIDS]], [[RAPIDS-Accelerator-for-Apache-Spark]], [[NVIDIA-FLARE]], [[TensorRT]], [[Triton-Inference-Server]], [[PyTorch]], [[NVIDIA-Riva]], [[NVIDIA-TAO]], [[NVIDIA-DeepStream]], [[NVIDIA-Holoscan]], [[Morpheus]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-DOCA]], [[NVIDIA-DOCA-Platform-Framework]], [[NVIDIA-vGPU]], [[NVIDIA-vGPU-for-Compute]], [[NVIDIA-MIG]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[NVIDIA-NIM-Operator]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Enterprise-Support-and-Services]]
**Sources:** https://docs.nvidia.com/ai-enterprise/software/latest/overview.html, https://docs.nvidia.com/ai-enterprise/software/latest/application-software.html, https://docs.nvidia.com/ai-enterprise/software/latest/infrastructure-software.html, https://docs.nvidia.com/ai-enterprise/index.html
**Last Updated:** 2026-04-30

## Summary
NVIDIA AI Enterprise Software is the current NVIDIA catalog of AI Enterprise application-layer and infrastructure-layer components. It describes the composable AI Enterprise stack, links components to NGC catalog entries and product docs, explains independent application/infrastructure release cadences, and points administrators to infrastructure support matrices and release notes for deployment compatibility.

## Detail

### Purpose
Use this page to answer "what is included in NVIDIA AI Enterprise?" at the software-catalog level. Use [[NVIDIA-AI-Enterprise]] for the platform overview, [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] for branch support and compatibility timelines, and [[NVIDIA-Enterprise-Support-and-Services]] for support entitlements and case workflows.

### Layer model
- Application Development includes NIM microservices, NeMo tooling, Omniverse libraries, AI frameworks, ML libraries, domain SDKs, and pre-trained models built on CUDA-X and CUDA.
- Infrastructure Management includes GPU drivers, networking drivers, Kubernetes operators, vGPU, MIG, Run:ai self-hosted, Container Toolkit, DOCA components, and Base Command Manager.
- The two layers have independent release cadences so organizations can adopt new application capabilities without replacing validated infrastructure.
- Components include enterprise support with SLAs, security patches, and maintenance updates when used under the AI Enterprise support model.
- NGC is the distribution and catalog surface for supported software components, while some infrastructure software is supported but obtained through support portals, licensing portals, partner channels, or vendor channels.

### Application layer
The current application-layer table includes catalog and documentation entries for inference/deployment, AI frameworks and libraries, domain SDKs/toolkits, and pre-trained models. Durable wiki connections include [[NVIDIA-NIM]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-NeMo]], [[PyTorch]], [[NVIDIA-RAPIDS]], [[RAPIDS-Accelerator-for-Apache-Spark]], [[NVIDIA-FLARE]], [[NVIDIA-Riva]], [[NVIDIA-TAO]], [[NVIDIA-DeepStream]], [[NVIDIA-Holoscan]], [[Morpheus]], [[NVIDIA-Omniverse]], and model/NIM pages such as [[NIM-for-Large-Language-Models]].

### Infrastructure layer
The current infrastructure-layer table includes NGC catalog resources, core GPU/networking drivers, DOCA microservices, virtualization, container platform tooling, GPU orchestration, and Kubernetes operators. Durable wiki connections include [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-DOCA]], [[NVIDIA-DOCA-Platform-Framework]], [[NVIDIA-vGPU]], [[NVIDIA-MIG]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-Run-ai]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[NVIDIA-NIM-Operator]], and [[NVIDIA-Base-Command-Manager]].

### NVIDIA context
The software catalog is a map, not an installation guide. Use deployment-specific pages for bare metal, VMware, cloud, and Red Hat OpenShift installation paths; use the lifecycle policy to decide branches and validate compatibility; use NGC pages for artifact discovery.

## Connections
- [[NVIDIA-AI-Enterprise]] - parent platform that includes this software catalog.
- [[NVIDIA-AI-Enterprise-Quick-Start-Guide]] - account activation, NGC access, and first software installation path that leads into this catalog.
- [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] and [[NVIDIA-AI-Enterprise-Infrastructure-Support-Matrix]] - define branch timelines and validate supported infrastructure combinations for software layers.
- [[NGC]] and [[NVIDIA-NGC-Catalog]] - catalog/distribution path for AI Enterprise application and infrastructure software.
- [[NVIDIA-NIM]], [[NVIDIA-NeMo]], [[TensorRT]], and [[Triton-Inference-Server]] - core application-layer inference and model development components.
- [[NVIDIA-RAPIDS]] and [[RAPIDS-Accelerator-for-Apache-Spark]] - accelerated data science, analytics, ML, and Spark data-engineering components.
- [[NVIDIA-FLARE]] - federated learning and privacy-preserving collaboration SDK adjacent to healthcare, edge, and regulated AI workflows.
- [[NVIDIA-Omniverse]] - application-layer physical AI, digital twin, and OpenUSD component now included in AI Enterprise software documentation.
- [[NVIDIA-Riva]], [[NVIDIA-TAO]], [[NVIDIA-DeepStream]], [[NVIDIA-Holoscan]], and [[Morpheus]] - domain SDK/toolkit examples from the application layer.
- [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-DOCA]], [[NVIDIA-vGPU]], [[NVIDIA-vGPU-for-Compute]], [[NVIDIA-MIG]], and [[NVIDIA-Container-Toolkit]] - infrastructure-layer runtime, virtualization, and driver foundations.
- [[NVIDIA-Run-ai]] and [[NVIDIA-Run-ai-Support-and-Lifecycle]] - self-hosted GPU orchestration component and its product support/lifecycle companion.
- [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], and [[NVIDIA-NIM-Operator]] - Kubernetes operators in the infrastructure layer.
- [[NVIDIA-Base-Command-Manager]] - cluster provisioning/management software supported for AI Enterprise deployments but not distributed through NGC.
- [[NVIDIA-Enterprise-Support-and-Services]] - support entitlement and case handling for supported AI Enterprise software components.

## Source Excerpts
- The software overview describes AI Enterprise as a two-layer stack with independent release cadences.
- The application-layer page lists NIM, TensorRT, Triton, CUDA Deep Learning, NeMo, PyTorch, RAPIDS, domain SDKs, Omniverse, Riva, TAO, and pre-trained models.
- The infrastructure-layer page lists drivers, DOCA, vGPU for Compute, Container Toolkit, Run:ai, GPU Operator, Network Operator, NIM Operator, support matrices, and infrastructure release notes.

## Resources
- [NVIDIA AI Enterprise Software Overview](https://docs.nvidia.com/ai-enterprise/software/latest/overview.html)
- [Application Layer Software](https://docs.nvidia.com/ai-enterprise/software/latest/application-software.html)
- [Infrastructure Layer Software](https://docs.nvidia.com/ai-enterprise/software/latest/infrastructure-software.html)
- [NVIDIA AI Enterprise Docs Hub](https://docs.nvidia.com/ai-enterprise/index.html)
