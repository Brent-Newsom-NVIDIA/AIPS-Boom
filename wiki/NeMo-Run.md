# NeMo Run

**Type:** Tool
**Tags:** NVIDIA, NeMo, experiment management, job launcher, Slurm, Kubernetes, Docker, SkyPilot, DGX Cloud
**Related:** [[NVIDIA-NeMo]], [[Nemotron-Training-Recipes]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Megatron-Bridge]], [[NeMo-Export-Deploy]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-Run-ai]], [[NVIDIA-Base-Command]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nemo/run/latest/index.html, https://docs.nvidia.com/nemo/automodel/latest/launcher/nemo-run.html, https://docs.nvidia.com/nemo-framework/user-guide/latest/overview.html, https://docs.nvidia.com/nemotron/latest/nemo_runspec/nemo-run.html
**Last Updated:** 2026-04-29

## Summary
NeMo Run is NVIDIA's tool for configuring, executing, and managing machine-learning experiments across compute environments. Current NVIDIA docs describe it as the reusable job-submission layer for NeMo workflows, with support for local execution, Docker, Slurm, Kubernetes, cloud/SkyPilot paths, and executor definitions that let the same training configuration target different infrastructure.

## Detail

### Purpose
Training and post-training workflows need repeatable job definitions that can move between a laptop, workstation, Slurm cluster, Kubernetes cluster, or cloud environment. NeMo Run separates experiment configuration from execution infrastructure so NeMo jobs can be launched and tracked consistently.

### Current scope
- Three core responsibilities in current docs: configuration, execution, and management.
- Python-based configuration primitives such as `Partial`, `Config`, and experiment objects.
- Executor definitions that map named compute targets to local, Docker, Slurm, Kubernetes, or cloud environments.
- AutoModel launcher guidance for Slurm, Kubernetes, Docker, local execution, and SkyPilot.
- Tutorials for configuring Python functions, running locally/remotely, visualizing configs, and managing experiments.
- Current [[Nemotron-Training-Recipes]] docs use NeMo-Run through `nemo_runspec` execution profiles, with `--run`, `--batch`, `--dry-run`, `env.toml` inheritance, packagers, and Slurm-oriented profiles.

### NVIDIA context
NeMo Run is not a model or service by itself. It is the execution glue around [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Megatron-Bridge]], and other NeMo training workflows, making it relevant to DGX, cluster, cloud, and AI Enterprise operations.

## Connections
- [[NVIDIA-NeMo]] - parent framework family that uses NeMo Run for repeatable experiments.
- [[Nemotron-Training-Recipes]] - Nemotron cookbook layer that uses NeMo-Run profiles for recipe execution.
- [[NeMo-AutoModel]] - current AutoModel docs include a NeMo-Run launch guide.
- [[NeMo-RL]] - post-training jobs can use repeatable execution patterns on shared infrastructure.
- [[NeMo-Megatron-Bridge]] - large-model training and conversion workflows need cluster execution.
- [[NeMo-Export-Deploy]] - deployment experiments can sit downstream of NeMo training jobs.
- [[NVIDIA-DGX-Cloud]], [[NVIDIA-Base-Command]], and [[NVIDIA-Run-ai]] - infrastructure and orchestration layers adjacent to NeMo workload execution.
- [[NVIDIA-AI-Enterprise]] - enterprise software context for production training and deployment workflows.

## Source Excerpts
- NVIDIA docs describe NeMo Run around configuration, execution, and management of ML experiments.
- Current AutoModel docs describe NeMo-Run as an NVIDIA open-source tool for job submission across execution backends.

## Resources
- [NeMo-Run Documentation](https://docs.nvidia.com/nemo/run/latest/index.html)
- [Run AutoModel with NeMo-Run](https://docs.nvidia.com/nemo/automodel/latest/launcher/nemo-run.html)
