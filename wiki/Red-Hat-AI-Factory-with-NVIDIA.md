# Red Hat AI Factory with NVIDIA

**Type:** Deployment Guide
**Tags:** NVIDIA, Red Hat AI Factory, AI Enterprise, OpenShift AI, NIM, Kubernetes, AI factory, OpenShift, agentic AI
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Lifecycle-Policy]], [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-Cloud-Deployment]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-AI-Software-for-Regulated-Environments]], [[NVIDIA-AI-Enterprise-Security]], [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[NVIDIA-NIM-Operator]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[NVIDIA-Dynamo]], [[NIXL]], [[vLLM]], [[TensorRT-LLM]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NeMo-Platform]], [[NeMo-Retriever]], [[NVIDIA-AI-Blueprints]], [[NVIDIA-AI-Q-Blueprint]], [[Nemotron]], [[NVIDIA-Cosmos]], [[NVIDIA-Certified-Systems]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Spectrum-X]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-DOCA]], [[GPUDirect-RDMA]], [[GPU-Direct-Storage]]
**Sources:** https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/index.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/platform-overview.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/overview.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/prerequisites.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/software-overview.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/network-operator.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/gpu-operator.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/deploy-ai-workloads-nim-operator.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/deploy-nvidia-nim-redhat.html
**Last Updated:** 2026-04-29

## Summary
Red Hat AI Factory with NVIDIA is NVIDIA's deployment guide for a co-engineered enterprise AI factory stack that combines [[NVIDIA-AI-Enterprise]] with Red Hat OpenShift AI. It is a production deployment pattern for running NVIDIA-accelerated AI workloads on OpenShift, from GPU and networking operator setup through NIM model serving, OpenShift AI integration, and Gen AI Studio experimentation.

## Detail

### Purpose
This page is the canonical wiki page for the current NVIDIA-authored Red Hat AI Factory with NVIDIA guide. It should stay as one solution page rather than splitting the deployment steps into separate wiki pages. Use the linked component pages for details on [[NVIDIA-NIM]], [[NVIDIA-NIM-Operator]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[NVIDIA-Dynamo]], [[NIXL]], and [[NVIDIA-AI-Enterprise]].

### Stack
- **NVIDIA AI Enterprise:** application and infrastructure software for production AI, including NIM, NeMo-family tooling, NGC-delivered assets, data center drivers, DOCA drivers, GPU Operator, Network Operator, NIM Operator, DPU/DPF operator paths, and Base Command Manager context.
- **Red Hat OpenShift and OpenShift AI:** Kubernetes and MLOps control plane for projects, dashboards, model serving, Gen AI Studio, and Playground-style experimentation against hosted NIM-backed models.
- **NVIDIA infrastructure:** [[NVIDIA-Certified-Systems]] with supported NVIDIA AI Enterprise GPUs, NVIDIA networking such as [[NVIDIA-Spectrum-X]] Ethernet or Quantum InfiniBand, and [[NVIDIA-Certified-Storage]] or supported dynamic storage classes.
- **NIM deployment paths:** Helm-based LLM NIM deployment, [[NVIDIA-NIM-Operator]] deployment with `NIMCache`, `NIMService`, and `NIMPipeline`, KServe integration, and OpenShift AI model registration.
- **Scale-out inference:** Red Hat AI Inference Server and NVIDIA NIM can use engines such as [[vLLM]], [[TensorRT-LLM]], or SGLang. The guide also positions llm-d with [[NVIDIA-Dynamo]] and [[NIXL]] for distributed inference patterns.
- **Networking:** [[NVIDIA-Network-Operator]] is optional for clusters without NVIDIA networking devices, but it becomes important for high-speed multi-node inference, GPUDirect-style workloads, RDMA, and large distributed serving deployments.
- **Security and operations:** the solution combines Red Hat platform hardening with NVIDIA production-branch software, NGC authentication, possible air-gapped deployment patterns, BlueField/DOCA infrastructure services, and OpenShift-native lifecycle management.

### NVIDIA context
The guide belongs in the same graph as [[NVIDIA-Enterprise-AI-Factory]] and the current Enterprise RA pages, but it is specifically the Red Hat/OpenShift deployment track. It is narrower than the strategic AI factory design guide and more platform-specific than the generic [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]].

## Connections
- [[NVIDIA-AI-Enterprise]] - supported NVIDIA software suite that anchors the Red Hat AI Factory deployment.
- [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] - branch and compatibility planning for the AI Enterprise/OpenShift stack.
- [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]] and [[NVIDIA-AI-Enterprise-Cloud-Deployment]] - adjacent installation paths for physical and cloud infrastructure.
- [[NVIDIA-Enterprise-AI-Factory]] - broader NVIDIA AI factory strategy that this OpenShift deployment pattern operationalizes.
- [[NVIDIA-Enterprise-Reference-Architectures]] - adjacent NVIDIA-authored AI factory RA family.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - generic AI Enterprise software stack comparable to the OpenShift-specific guide.
- [[NVIDIA-AI-Software-for-Regulated-Environments]] and [[NVIDIA-AI-Enterprise-Security]] - regulated and security context for hardened Red Hat/OpenShift deployments.
- [[NVIDIA-RTX-PRO-AI-Factory]] - cited by the prerequisites as an example certified hardware reference architecture.
- [[NVIDIA-NIM]] - model-serving microservice layer used for AI workloads in the guide.
- [[NIM-for-Large-Language-Models]] - LLM-specific NIM deployment surface behind the Helm, KServe, and NIM Operator examples.
- [[NVIDIA-NIM-Operator]] - Kubernetes operator path for NIMCache, NIMService, NIMPipeline, and KServe-style deployment.
- [[NVIDIA-GPU-Operator]] - installs and manages drivers, device plugin, Container Toolkit, and DCGM-style components on OpenShift GPU nodes.
- [[NVIDIA-Network-Operator]] - configures NVIDIA networking resources for multi-node high-speed inference and GPUDirect-style workloads.
- [[NVIDIA-Dynamo]] and [[NIXL]] - distributed inference and transfer layers referenced for llm-d and large scale-out serving.
- [[vLLM]] and [[TensorRT-LLM]] - inference backends relevant to Red Hat AI Inference Server and NIM-backed model serving.
- [[NVIDIA-Agent-Intelligence-Toolkit]], [[NeMo-Platform]], and [[NeMo-Retriever]] - agent, customization, evaluation, and retrieval layers that fit above the deployment foundation.
- [[NVIDIA-AI-Blueprints]] and [[NVIDIA-AI-Q-Blueprint]] - validated application patterns that can run on the AI Enterprise/OpenShift foundation.
- [[Nemotron]] and [[NVIDIA-Cosmos]] - representative NVIDIA model families called out by the guide for agentic and physical AI workloads.
- [[NVIDIA-Certified-Systems]] and [[NVIDIA-Certified-Storage]] - recommended validated infrastructure targets.
- [[NVIDIA-Spectrum-X]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-DOCA]], [[GPUDirect-RDMA]], and [[GPU-Direct-Storage]] - infrastructure acceleration and data-movement pieces for AI factory-scale deployments.

## Source Excerpts
- NVIDIA describes the guide as a co-engineered Red Hat AI Factory deployment that integrates NVIDIA AI Enterprise with Red Hat OpenShift AI.
- The prerequisites emphasize NVIDIA-Certified Systems, supported NVIDIA AI Enterprise GPUs, NVIDIA networking, and NVIDIA Certified Storage.
- The deployment sections show NIM on OpenShift through Helm, NIM Operator custom resources, KServe, and OpenShift AI/Gen AI Studio integration.
- The networking section notes that GPUDirect with RDMA can help large distributed inference workloads even when it is not strictly required.

## Resources
- [Red Hat AI Factory with NVIDIA Deployment Guide](https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/index.html)
- [Red Hat AI Factory with NVIDIA Overview](https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/overview.html)
- [Red Hat AI Factory Software Overview](https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/software-overview.html)
- [Deploying AI workloads on Red Hat OpenShift](https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/deploy-ai-workloads-nim-operator.html)
- [Deploying NVIDIA NIM with Red Hat OpenShift AI](https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/deploy-nvidia-nim-redhat.html)
