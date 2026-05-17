# NVIDIA Base Command Platform

**Type:** Platform
**Tags:** NVIDIA, MLOps, cluster management, HPC, training, multi-GPU, job scheduling, DGX, LLMOps
**Related:** [[NVIDIA-DGX]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-BaseOS]], [[NVIDIA-AI-Enterprise]], [[NGC]], [[NVIDIA-AI-Workbench]], [[Megatron-LM]], [[NCCL]], [[NVIDIA-GPU-Operator]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-29

## Summary
NVIDIA Base Command Platform (BCP) is a cloud-native, enterprise MLOps platform for managing, scheduling, and orchestrating large-scale AI training workloads on NVIDIA DGX infrastructure and NVIDIA-Certified servers. It provides job scheduling, dataset and model versioning, team resource management, experiment tracking, and cluster health monitoring — built specifically for the demands of multi-node, multi-GPU AI training at the DGX SuperPOD scale. BCP is the production MLOps layer for enterprises running large foundation model training or industrial AI at scale.

## Detail

### Purpose
Training large AI models (LLMs, multimodal foundation models, scientific AI) requires running hundreds of GPUs for days or weeks. Managing this reliably requires more than a basic job scheduler: teams need fair-share resource allocation, automatic job recovery from GPU failures, experiment versioning, reproducible environments, and visibility into cluster utilization and health. Base Command Platform provides these capabilities as a managed SaaS or on-premises solution purpose-built for NVIDIA GPU clusters, integrating tightly with NGC for container management and DCGM for GPU health.

### Key Features
- **Job Scheduling & Queue Management:** Fair-share scheduling for multi-team environments; priority queues; job preemption; gang scheduling for multi-node distributed training
- **Multi-Node Training Support:** First-class support for MPI and PyTorch DDP/FSDP/Megatron-LM distributed training across 2–thousands of GPUs
- **Dataset & Model Registry:** Versioned dataset and model artifact management — datasets stored in BCP registry, referenced in training jobs by version ID for reproducibility
- **Workspace Persistence:** Persistent workspaces shared across jobs; code, configs, and checkpoints accessible from any cluster node
- **Experiment Tracking:** Integration with W&B (Weights & Biases), MLflow, and built-in BCP experiment logging
- **Team & Resource Management:** Role-based access control (RBAC); per-team quotas and resource pools; utilization dashboards
- **Cluster Health & Monitoring:** Integration with NVIDIA DCGM for GPU health monitoring; automatic job rescheduling around failed GPUs; cluster utilization heat maps
- **NGC Integration:** Jobs run in NGC containers; users select verified base images from NGC catalog; private NGC registry integration for custom containers
- **BCP CLI:** Python-based CLI for job submission, status monitoring, log streaming, and artifact management
- **DGX SuperPOD Native:** Optimized for DGX SuperPOD InfiniBand fabric topology; aware of GPU-to-switch topology for optimal job placement

### Use Cases
- Pre-training and fine-tuning LLMs (GPT, Llama, Nemotron) at multi-node DGX scale
- Large-scale distributed training experiments with Megatron-LM using tensor and pipeline parallelism
- Industrial AI training pipelines: multiple teams sharing DGX cluster resources with guaranteed fairness
- Foundation model checkpoint management and experiment reproducibility across multi-month training runs
- NVIDIA-managed Base Command Manager (BCM) as the on-premises Kubernetes-based cluster software for DGX SuperPOD
- Batch inference jobs at scale: using BCP job scheduler for large-scale dataset processing or model evaluation

### Hardware Requirements / Compatibility
- **Primary Target:** NVIDIA DGX H100, DGX H200, DGX A100, DGX SuperPOD, DGX Cloud
- **Also Supported:** NVIDIA-Certified multi-GPU servers with InfiniBand networking
- **Networking:** InfiniBand HDR/NDR strongly recommended for multi-node training; RoCE also supported
- **Storage:** NVIDIA VAST, WekaFS, Lustre, or NFS for shared workspace storage
- **OS:** Ubuntu 20.04/22.04 on cluster nodes; BCP managed via browser UI + CLI (client OS agnostic)

### Language Bindings / APIs
- **CLI:** `ngc bc` command group (Base Command via NGC CLI); `ngc bc job run --...` for job submission
- **REST API:** BCP REST API for programmatic job management, dataset registration, and workspace operations
- **Python SDK:** NGC Python SDK wraps REST API for workflow automation and CI/CD integration
- **Kubernetes:** BCP on-premises (Base Command Manager) is Kubernetes-native; supports standard `kubectl` alongside BCP CLI

## Connections
- [[NVIDIA-DGX]] — BCP is the primary software platform for managing DGX SuperPOD and DGX cloud deployments
- [[NVIDIA-DGX-Cloud]] — cloud deployment target for Base Command Platform workflows
- [[NVIDIA-DGX-SuperPOD]] — on-prem scale-out AI supercomputing platform managed by Base Command workflows
- [[NVIDIA-Base-Command-Manager]] — infrastructure cluster-management companion to Base Command Platform
- [[NVIDIA-BaseOS]] — validated OS layer underneath managed NVIDIA AI infrastructure
- [[NVIDIA-AI-Enterprise]] — Base Command is part of the AI Enterprise software portfolio for enterprise MLOps
- [[NGC]] — BCP jobs run NGC containers; model and dataset artifacts stored alongside NGC private registry
- [[NVIDIA-AI-Workbench]] — Workbench is the local development companion; jobs are typically developed in Workbench and scaled via BCP
- [[Megatron-LM]] — Megatron-LM distributed training is a primary use case for BCP multi-node job scheduling
- [[NCCL]] — NCCL handles GPU-to-GPU communication in multi-node BCP training jobs over InfiniBand
- [[NVIDIA-GPU-Operator]] — GPU Operator provisions the Kubernetes GPU infrastructure that BCP sits on top of

## Resources
- [Base Command Platform Page](https://www.nvidia.com/en-us/data-center/base-command-platform/)
- [Base Command Platform Documentation](https://docs.nvidia.com/base-command-platform/index.html)
- [NGC CLI Base Command Reference](https://docs.ngc.nvidia.com/cli/index.html)
- [DGX SuperPOD Overview](https://www.nvidia.com/en-us/data-center/dgx-superpod/)
