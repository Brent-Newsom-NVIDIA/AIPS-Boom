# NVIDIA NIM Operator

**Type:** Tool
**Tags:** NVIDIA, NIM Operator, Kubernetes, NIM, NeMo, inference, microservices, autoscaling, model cache, AI Enterprise
**Related:** [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[NVIDIA-NIM-on-GKE]], [[NeMo-Platform]], [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], [[NeMo-Retriever-Reranking-NIM]], [[NVIDIA-GPU-Operator]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[NVIDIA-Dynamo]], [[NVIDIA-Data-Flywheel-Blueprint]]
**Sources:** https://docs.nvidia.com/nim-operator/latest/index.html; https://docs.nvidia.com/nim-operator/latest/quickstart.html; https://docs.nvidia.com/nim/large-language-models/latest/deployment/kubernetes-deployment/nim-operator-deployment.html; https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/deploy-ai-workloads-nim-operator.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM Operator is the Kubernetes operator for deploying and managing NVIDIA NIM and NeMo microservices. It gives cluster administrators Kubernetes-native custom resources for NIM model caching, NIM service deployment, NIM pipelines, NeMo microservices, autoscaling, observability, air-gapped deployment, and production lifecycle management.

## Detail
The current NIM Operator docs say the operator enables Kubernetes cluster administrators to operate the software components and services needed to deploy NVIDIA NIMs and NVIDIA NeMo microservices in Kubernetes. It supports NIMs across reasoning, retrieval, speech, and biology, and it also manages NeMo components such as Customizer, Evaluator, Guardrails, Data Store, and Entity Store.

The operator is especially important because NIM and NeMo microservices are usually deployed together as full AI workflows rather than as one-off containers. The current docs describe custom resources including `NIMCache`, `NIMService`, and `NIMPipeline`. `NIMCache` downloads and persists model artifacts from NGC; `NIMService` creates and updates a Kubernetes deployment for a NIM microservice; and `NIMPipeline` covers pipeline-style deployments.

NVIDIA also documents advanced NIM Operator patterns for local caching, air-gapped environments, resource quotas, validation webhooks, KServe support, Dynamic Resource Allocation, multi-node NIM deployment, experimental Dynamo CRDs, and experimental Kata Containers isolation. In the wiki graph, NIM Operator sits beside [[NVIDIA-GPU-Operator]] and above individual NIM pages such as [[NIM-for-Large-Language-Models]], [[NeMo-Retriever-Embedding-NIM]], and [[NeMo-Retriever-Reranking-NIM]].

The [[Red-Hat-AI-Factory-with-NVIDIA]] deployment guide uses NIM Operator on OpenShift to manage `NIMCache` model persistence and `NIMService` deployment. Its example path also connects NIM Operator to KServe-style deployment and OpenShift AI model discovery.

## Connections
- [[NVIDIA-NIM]] - NIM Operator is the Kubernetes lifecycle manager for NIM microservices.
- [[NIM-for-Large-Language-Models]] - current NIM LLM docs include a NIM Operator deployment path.
- [[NVIDIA-NIM-on-GKE]] - cloud-specific GKE deployment guide adjacent to operator-managed NIM patterns.
- [[NeMo-Platform]] - NIM Operator can deploy NeMo Customizer, Evaluator, Guardrails, Data Store, and Entity Store.
- [[NeMo-Retriever]] - retrieval microservices can be deployed through NIM Operator patterns.
- [[NeMo-Retriever-Embedding-NIM]] - embedding NIMs are a retrieval-domain NIM deployment target.
- [[NeMo-Retriever-Reranking-NIM]] - reranking NIMs are a retrieval-domain NIM deployment target.
- [[NVIDIA-GPU-Operator]] - GPU Operator provides GPU nodes and device exposure underneath NIM Operator workloads.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide that uses NIMCache, NIMService, NIMPipeline, and KServe patterns.
- [[NVIDIA-AI-Enterprise]] - NIM Operator is part of the enterprise production deployment surface.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - software RA includes NIM Operator in the infrastructure software layer.
- [[NVIDIA-Enterprise-RA-Observability-Guide]] - observability guidance uses NIM Operator/NIM telemetry as part of AI factory dashboards.
- [[NVIDIA-Dynamo]] - current NIM Operator docs include experimental Dynamo CRD support.
- [[NVIDIA-Data-Flywheel-Blueprint]] - production optimization workflows need repeatable NIM deployment and redeployment.

## Source Excerpts
- "deploy NVIDIA NIMs and NVIDIA NeMo microservices"
- "`nimcaches.apps.nvidia.com`"
- "`nimservices.apps.nvidia.com`"
- NVIDIA's Red Hat AI Factory guide deploys standalone NIM resources as `NIMService` custom resources.
