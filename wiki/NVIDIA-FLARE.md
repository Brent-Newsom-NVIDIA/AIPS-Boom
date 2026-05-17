# NVIDIA FLARE

**Type:** Technology
**Tags:** NVIDIA, FLARE, NVFlare, federated learning, privacy, distributed computing, healthcare, edge AI, PyTorch, MONAI
**Related:** [[NVIDIA-Clara]], [[NVIDIA-MONAI-Toolkit]], [[PyTorch]], [[NVIDIA-RAPIDS]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-NIM]], [[NGC]], [[NVIDIA-Container-Toolkit]]
**Sources:** https://nvflare.readthedocs.io/en/main/flare_overview.html, https://nvflare.readthedocs.io/en/main/welcome.html, https://nvflare.readthedocs.io/en/main/release_notes/flare_272.html, https://developer.nvidia.com/blog/federated-learning-without-the-refactoring-overhead-using-nvidia-flare/
**Last Updated:** 2026-04-30

## Summary
NVIDIA FLARE, the NVIDIA Federated Learning Application Runtime Environment, is an open-source Python SDK for adapting machine learning, deep learning, analytics, and compute workflows to federated and privacy-preserving distributed collaboration. It matters in this wiki because it connects healthcare and regulated AI workflows, [[NVIDIA-Clara]], [[NVIDIA-MONAI-Toolkit]], [[PyTorch]], RAPIDS-style data science, and enterprise deployment patterns.

## Detail

### NVIDIA context
Current NVIDIA FLARE documentation positions FLARE as a domain-agnostic federated computing framework. It supports local simulation, proof-of-concept deployments, and production deployments across cross-silo institutional scenarios and cross-device edge/mobile scenarios.

The key idea is to bring computation to distributed datasets rather than centralizing sensitive data. That is especially important for medical imaging, clinical AI, financial services, autonomous systems, mobile/edge scenarios, and other settings where data residency, privacy, and institutional boundaries matter.

### Capabilities
- Supports federated learning, federated analytics, and federated evaluation patterns.
- Works with ML frameworks such as [[PyTorch]], TensorFlow, scikit-learn, XGBoost, and MONAI-style medical AI workflows.
- Provides simulation, POC, and production modes so the same application can move from local experimentation to real distributed deployment.
- Includes security and privacy features such as PKI-based authentication, role-based authorization, TLS/mTLS deployment, audit logging, differential privacy, homomorphic encryption, confidential computing/TEE support, and Private Set Intersection workflows.
- Supports deployment in on-prem, cloud, hybrid, Docker, Kubernetes, and HPC environments.
- Includes newer large-model and LLM-oriented documentation areas such as federated LLM fine-tuning, tensor/file streaming, quantization, and memory-management topics.

### Fit with the rest of the wiki
FLARE should be the canonical page for federated learning runtime and workflow coverage. [[NVIDIA-Clara]] and [[NVIDIA-MONAI-Toolkit]] should link here when discussing multi-site medical AI training. [[NVIDIA-AI-Enterprise]] and [[NGC]] provide the surrounding enterprise software and artifact context, while [[NVIDIA-RAPIDS]] and [[PyTorch]] represent common workload families that FLARE can federate.

## Connections
- [[NVIDIA-Clara]] - healthcare AI platform where federated learning is a recurring deployment pattern.
- [[NVIDIA-MONAI-Toolkit]] - medical imaging AI toolkit with NVIDIA FLARE integration context.
- [[PyTorch]] - common deep learning framework for FLARE examples and user workloads.
- [[NVIDIA-RAPIDS]] - FLARE can federate data science and analytics-style workloads as well as model training.
- [[NVIDIA-AI-Enterprise]] - enterprise software, security, support, and compliance context for production AI stacks.
- [[NVIDIA-NIM]] - related production AI service layer for deploying models after collaborative development or customization.
- [[NGC]] and [[NVIDIA-Container-Toolkit]] - common artifact and container runtime surfaces for NVIDIA AI deployments.

## Source Excerpts
- NVIDIA FLARE docs describe the project as a domain-agnostic SDK for secure decentralized computing and multi-party collaboration.
- The current overview lists simulation-to-production lifecycle support, cloud/on-prem/hybrid deployment, framework agnosticism, security, privacy, and LLM-oriented capabilities.
- NVIDIA's 2026 technical blog shows FLARE being used to reduce federated-learning refactoring overhead.

## Resources
- [NVIDIA FLARE Overview](https://nvflare.readthedocs.io/en/main/flare_overview.html)
- [NVIDIA FLARE Welcome](https://nvflare.readthedocs.io/en/main/welcome.html)
- [NVIDIA FLARE Release Notes](https://nvflare.readthedocs.io/en/main/release_notes/flare_272.html)
- [NVIDIA Technical Blog: FLARE Refactoring Overhead](https://developer.nvidia.com/blog/federated-learning-without-the-refactoring-overhead-using-nvidia-flare/)
