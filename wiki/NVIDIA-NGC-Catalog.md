# NVIDIA NGC Catalog

**Type:** Platform
**Tags:** NVIDIA, NGC, Model Catalog, Containers, Pre-Trained Models, AI, Developer
**Related:** [[NGC]], [[NVIDIA-NIM]], [[NVIDIA-TAO]], [[NVIDIA-AI-Enterprise]], [[TensorRT]], [[NVIDIA-NeMo]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-10

## Summary
The NVIDIA NGC Catalog (catalog.ngc.nvidia.com) is the public-facing model and container marketplace within the NGC platform, providing curated, GPU-optimized containers, pre-trained models, Helm charts, and software SDKs ready for immediate deployment. The NGC Catalog specifically includes a rich model section with hundreds of NVIDIA-trained and partner-contributed AI models across domains including NLP, computer vision, speech, drug discovery, and scientific computing, with direct integration to NVIDIA NIM for one-click deployment as inference microservices.

## Detail

### Purpose
Finding, evaluating, and deploying production-ready AI models requires significant infrastructure setup. The NGC Catalog solves this by providing a single curated marketplace where developers and enterprises can browse, evaluate, and immediately pull GPU-optimized models and containers — reducing time from discovery to deployment from weeks to minutes.

### Key Features
- Model catalog: 600+ pre-trained models across NLP, vision, speech, biology, and science domains
- Container registry: NVIDIA-optimized Docker containers for every major framework (PyTorch, TensorFlow, JAX, NeMo, Triton, TensorRT)
- Helm chart repository: Kubernetes-ready deployments for NVIDIA software stacks
- SDK and resource downloads: CUDA-X libraries, TensorRT, NeMo, Riva, Isaac, Omniverse
- NIM integration: many NGC models available as NIM inference microservices with one click
- Monthly container updates: performance improvements and security patches every month
- Team access: private organizational namespaces for enterprise artifact sharing
- API key authentication: secure programmatic access via NGC CLI and Docker pull
- Collection system: curated bundles of related models, containers, and resources

### Use Cases
- Downloading base containers for AI/ML development (PyTorch, TensorFlow, JAX)
- Accessing NVIDIA-optimized DL frameworks with latest cuDNN/CUDA optimizations
- Deploying pre-trained models for fine-tuning (Nemotron, Llama, CLIP, etc.)
- Pulling Helm charts for Kubernetes-based GPU infrastructure
- Distributing custom models within an organization using private NGC spaces
- Evaluating AI models before fine-tuning for specific use cases

### Hardware Requirements / Compatibility
- Web browser: catalog browsing requires no GPU
- Container pull: Docker/containerd runtime, NVIDIA Container Toolkit, CUDA-capable GPU
- Minimum GPU: varies by container; most require Volta (V100) or newer
- NGC CLI: Python 3, any OS

### Language Bindings / APIs
- NGC CLI (Python): `ngc` command-line tool for authentication, search, download
- Docker: `docker pull nvcr.io/nvidia/<container>:<tag>`
- Python API (via NGC SDK)
- REST API for programmatic catalog access

## Connections
- [[NGC]] — NGC Catalog is the public-facing frontend of the NGC platform
- [[NVIDIA-NIM]] — NIM models are delivered through the NGC Catalog
- [[NVIDIA-TAO]] — TAO pretrained models and containers are distributed through the NGC catalog.
- [[NVIDIA-AI-Enterprise]] — NVAIE subscribers get private NGC access with enterprise-grade containers
- [[TensorRT]] — TensorRT containers and engine files distributed via NGC
- [[NVIDIA-NeMo]] — NeMo containers and pre-trained models hosted in NGC Catalog

## Resources
- [NGC Catalog](https://catalog.ngc.nvidia.com/models)
- [NGC CLI Documentation](https://docs.ngc.nvidia.com/cli/)
- [NGC Container Registry](https://catalog.ngc.nvidia.com/containers)
