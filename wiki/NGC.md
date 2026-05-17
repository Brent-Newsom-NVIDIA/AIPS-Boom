# NGC (NVIDIA GPU Cloud)

**Type:** Platform
**Tags:** NVIDIA, GPU, containers, model registry, software catalog, cloud, MLOps, NGC
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Quick-Start-Guide]], [[NVIDIA-AI-Enterprise-Software]], [[NVIDIA-NIM]], [[NVIDIA-NGC-Catalog]], [[NVIDIA-Optimized-Frameworks]], [[PyG]], [[NVIDIA-DGL]], [[NVIDIA-RAPIDS]], [[NVIDIA-Merlin]], [[NVIDIA-TAO]], [[Nemotron]], [[NeMo-Platform]], [[NVIDIA-BioNeMo]], [[BioNeMo-Recipes]], [[Transformer-Engine]], [[NVIDIA-Dynamo]], [[Triton-Inference-Server]], [[NVIDIA-NeMo]], [[TensorRT]], [[NVIDIA-HPC-SDK]], [[cuQuantum-Appliance]], [[Nsight-Cloud]], [[NVIDIA-DGX-Spark]], [[NVIDIA-DGX-Station]], [[NVIDIA-Base-Command]], [[NVIDIA-GPU-Operator]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge), https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/running.html, https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/index.html, https://developer.nvidia.com/topics/ai/data-science/cuda-x-data-science-libraries
**Last Updated:** 2026-04-30

## Summary
NGC (NVIDIA GPU Cloud) is NVIDIA's centralized hub for GPU-optimized software, providing a curated catalog of pre-built containers, pre-trained AI models, Helm charts, and SDKs. It eliminates the friction of configuring GPU computing environments by delivering containers that are NVIDIA-tested, CVE-scanned, and refreshed monthly across the full CUDA software stack. NGC serves both individual developers and enterprises, including as the primary distribution channel for NVIDIA AI Enterprise software.

## Detail

### Purpose
Setting up a functional GPU computing environment — with correct CUDA versions, cuDNN, framework builds, and dependencies — is time-consuming and error-prone. NGC solves this by providing a curated catalog of pre-built, NVIDIA-tested containers and models that work out of the box on any NVIDIA GPU or cloud instance, dramatically reducing time-to-experiment and time-to-production. For enterprises, NGC also acts as the licensing and distribution layer for NVIDIA AI Enterprise software.

### Key Features
- **Container Registry:** GPU-optimized Docker containers for PyTorch, [[PyG]], legacy [[NVIDIA-DGL]], TensorFlow, JAX, TensorRT, NeMo, Triton, [[NVIDIA-RAPIDS]], [[cuQuantum-Appliance]], and dozens of other frameworks, hosted at `nvcr.io`
- **Model Catalog:** Pre-trained AI models spanning NLP, computer vision, speech, medical imaging, biology (protein structure, genomics), and generative AI
- **Helm Charts:** Kubernetes-ready deployment charts for NVIDIA platforms (Triton, Riva, Metropolis, etc.)
- **Software SDKs:** Direct downloads of NVIDIA SDKs and toolkits (cuDNN, TensorRT, Nsight, CUDA Toolkit, etc.)
- **Security Scanning:** All containers are regularly scanned for CVEs and cryptographically signed by NVIDIA
- **Monthly Container Updates:** Refreshed monthly with the latest CUDA, cuDNN, and upstream framework versions (e.g., `23.10-py3` versioning scheme)
- **NGC Private Registry:** Enterprise customers can maintain private registries co-located with the public NGC catalog for custom models and containers
- **NGC CLI:** `ngc` command-line tool for pulling containers, models, datasets, and managing registry credentials programmatically
- **Cloud Integration:** Available natively on AWS Marketplace, GCP Marketplace, Azure Marketplace, and NVIDIA LaunchPad
- **NIM Catalog:** As of 2024, NGC hosts the full NVIDIA NIM microservice catalog for one-click LLM and AI model deployment
- **Collections:** Curated groupings of containers, models, and Helm charts for specific use cases (e.g., "LLM Inference Collection," "Medical Imaging Collection")

### Use Cases
- Rapidly bootstrapping deep learning training and inference environments without manual CUDA/cuDNN installation
- Pulling [[NVIDIA-Optimized-Frameworks]] containers for versioned PyTorch, [[PyG]], TensorFlow, JAX, CUDA Deep Learning, and related framework environments
- Deploying production inference servers with verified, optimized Triton Inference Server containers
- Accessing pre-trained foundation models (LLMs, vision-language models, protein structure models) for fine-tuning or deployment
- Pulling BioNeMo-related containers, model artifacts, and NIM assets for life-sciences model training and inference workflows
- Enterprise software distribution — NVIDIA AI Enterprise software delivered and licensed via NGC
- Reproducible research and MLOps pipelines using pinned NGC container versions
- Running GPU workloads on DGX, cloud GPU instances (A100, H100, H200, Blackwell B100/B200), or NVIDIA-certified servers
- Deploying NIM inference microservices via Helm on Kubernetes

### Hardware Requirements / Compatibility
- All modern NVIDIA data center GPUs: V100, A100, H100, H200, B100, B200, GH200
- NVIDIA RTX desktop and laptop GPUs (Turing, Ampere, Ada Lovelace, Blackwell)
- CUDA 10.x and newer (container-specific; most current containers require CUDA 11.8+ or 12.x)
- Compatible with NVIDIA GPU Operator for Kubernetes-based deployment pipelines
- NGC Private Registry deployable on-premises for DGX systems and SuperPODs

### Language Bindings / APIs
- **NGC CLI:** Python-based command-line tool (`pip install ngc-cli`); supports `ngc registry image pull`, `ngc registry model download`, etc.
- **REST API:** Full programmatic access to catalog browsing, artifact downloads, and private registry management
- **Docker:** Standard `docker pull nvcr.io/<org>/<image>:<tag>` workflow
- **Helm:** Kubernetes deployment via `helm install` with NGC-hosted charts using `helm repo add ngc-stable`
- **Python SDK:** Integration with MLOps platforms (MLflow, Weights & Biases, Kubeflow)

## Connections
- [[NVIDIA-AI-Enterprise]] — AI Enterprise software is licensed, distributed, and updated exclusively through NGC
- [[NVIDIA-AI-Enterprise-Quick-Start-Guide]] — first-run path for enterprise account setup, NGC sign-in, API key use, and initial container access.
- [[NVIDIA-AI-Enterprise-Software]] — current AI Enterprise software catalog maps supported application and infrastructure components to NGC and documentation.
- [[NVIDIA-NIM]] — All NIM containers are hosted in the NGC catalog and deployed via NGC credentials
- [[NVIDIA-NGC-Catalog]] — public catalog surface for containers, models, Helm charts, and SDKs
- [[NVIDIA-Optimized-Frameworks]] — deep learning framework containers are distributed through NGC and documented through NVIDIA's framework support matrix.
- [[PyG]] — NVIDIA PyG containers use the `nvcr.io/nvidia/pyg:<xx.xx>-py3` image pattern and are distributed through the NGC container registry path.
- [[NVIDIA-DGL]] — legacy NVIDIA DGL container release notes point to NGC security scanning and now redirect new GNN work toward PyG.
- [[NVIDIA-RAPIDS]] — RAPIDS containers and packages are part of the NVIDIA accelerated data science distribution story.
- [[NVIDIA-Merlin]] — Merlin recommender workflows historically used NGC containers for training, inference, and HugeCTR/NVTabular components.
- [[NVIDIA-TAO]] — TAO containers, pretrained CV models, and model artifacts are distributed through NGC.
- [[cuQuantum-Appliance]] - NGC-distributed container workflow for Qiskit/Cirq quantum simulation on NVIDIA GPUs.
- [[NVIDIA-HPC-SDK]] - current HPC SDK docs include NGC/containerization as a distribution path.
- [[Nemotron]] — NVIDIA model family whose downloadable and API-facing artifacts appear through NVIDIA model catalogs
- [[NeMo-Platform]] — NeMo microservices rely on NGC credentials and NVIDIA-hosted artifacts
- [[NVIDIA-BioNeMo]] and [[BioNeMo-Recipes]] — BioNeMo models, containers, recipes, and NIM assets sit in the same NGC-centered distribution pattern.
- [[Transformer-Engine]] — current installation docs note that TE is preinstalled in NVIDIA PyTorch containers from NGC.
- [[NVIDIA-Dynamo]] — inference-serving stack that fits the NGC/NIM deployment ecosystem
- [[Triton-Inference-Server]] — Official Triton containers updated monthly on NGC; primary distribution channel
- [[NVIDIA-NeMo]] — NeMo framework containers and checkpoint models (GPT, BERT, Llama variants) hosted on NGC
- [[TensorRT]] — TensorRT containers, model optimization pipelines, and ONNX model zoo distributed via NGC
- [[Nsight-Cloud]] - Nsight Cloud collections, containers, and Helm charts are distributed through NGC for cloud-native profiling workflows.
- [[NVIDIA-DGX-Spark]] - DGX Spark user guide includes NGC integration for local AI development.
- [[NVIDIA-DGX-Station]] - DGX Station's preconfigured software stack is adjacent to NGC containers and AI software.
- [[NVIDIA-Base-Command]] — Base Command Platform uses NGC containers and credentials for multi-node job scheduling
- [[NVIDIA-GPU-Operator]] — GPU Operator pulls NVIDIA driver, plugin, and toolkit containers from NGC (`nvcr.io/nvidia/`)
- [[NVIDIA-Riva]] — Riva speech AI containers and pre-trained acoustic/language models distributed via NGC

## Resources
- [NGC Catalog](https://catalog.ngc.nvidia.com)
- [NGC CLI Documentation](https://docs.ngc.nvidia.com/cli/index.html)
- [NGC Private Registry Guide](https://docs.ngc.nvidia.com/registry/index.html)
- [NGC Container Catalog](https://catalog.ngc.nvidia.com/containers)
- [NGC Model Catalog](https://catalog.ngc.nvidia.com/models)
