# NVIDIA DGX Spark

**Type:** Platform
**Tags:** NVIDIA, DGX Spark, GB10, Grace Blackwell, personal AI supercomputer, desktop AI, DGX OS, agentic AI
**Related:** [[NVIDIA-DGX]], [[NVIDIA-DGX-Station]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Grace-CPU]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-NIM]], [[NVIDIA-NemoClaw]], [[NVIDIA-OpenShell]], [[NVIDIA-AI-Workbench]], [[NVIDIA-Isaac]], [[NVIDIA-Metropolis]], [[NVIDIA-Holoscan]], [[NGC]], [[CUDA-Programming-Guide]]
**Sources:** https://www.nvidia.com/en-us/products/workstations/dgx-spark/, https://docs.nvidia.com/dgx/dgx-spark/, https://docs.nvidia.com/dgx/dgx-spark/system-overview.html, https://build.nvidia.com/spark
**Last Updated:** 2026-04-29

## Summary
NVIDIA DGX Spark is NVIDIA's compact desktop AI computer for developers, data scientists, researchers, students, and builders who want local AI development on a Grace Blackwell system. Formerly Project DIGITS, it uses the NVIDIA GB10 Grace Blackwell Superchip, 128 GB of coherent unified memory, NVIDIA DGX OS, and a preinstalled NVIDIA AI software stack to prototype, fine-tune, and run reasoning models locally before moving workloads to data center or cloud infrastructure.

## Detail

### Purpose
DGX Spark gives individual developers and small teams a local version of the NVIDIA AI stack. It is meant for rapid experimentation, local inference, data science, robotics and edge prototyping, and agent development without starting from a remote cluster or public cloud instance.

### Platform role
- Provides up to 1 PFLOP of FP4 AI performance on the GB10 Grace Blackwell Superchip.
- Includes 128 GB LPDDR5x coherent unified system memory for large local models.
- Targets local prototyping, model development, fine-tuning, inference, and data science workflows.
- Product guidance positions single-system inference for models up to 200 billion parameters and dual-system workflows for larger model experiments.
- Includes NVIDIA DGX OS, Docker/container runtime support, [[NGC]] integration, and the broader NVIDIA development ecosystem.
- Uses NVIDIA ConnectX-7 networking and supports practical multi-system development patterns.

### NVIDIA software context
DGX Spark is important because it pulls the data center AI stack into a desk-friendly development system. The current product page explicitly connects DGX Spark to [[NVIDIA-NemoClaw]] and [[NVIDIA-OpenShell]] for local always-on agent experiments. The user guide points builders to the root `build.nvidia.com/spark` page for practical tutorials and examples; treat that as a living tutorial surface, not as a reason to create separate wiki pages for every individual build.

### Current docs notes
The current DGX Spark User Guide is published under `docs.nvidia.com/dgx/dgx-spark/` and was last updated on April 28, 2026. It covers release notes, hardware overview, initial setup, system operation, DGX Dashboard, NVIDIA Sync, DGX OS, container runtime, NGC, AI Enterprise, common use cases, PXE boot, enterprise manageability, updates, recovery, and support.

## Connections
- [[NVIDIA-DGX]] - DGX Spark is the compact personal system in the current DGX family.
- [[NVIDIA-DGX-Station]] - DGX Station is the larger GB300 deskside companion for trillion-parameter-class local development.
- [[NVIDIA-Blackwell-Architecture]] - DGX Spark uses Grace Blackwell technology and fifth-generation Tensor Cores.
- [[NVIDIA-Grace-CPU]] - GB10 combines Arm CPU cores with Blackwell GPU compute in a coherent system design.
- [[NVIDIA-AI-Enterprise]] - DGX Spark has an AI Enterprise evaluation/support path for production-grade software.
- [[NVIDIA-NIM]] - local model-serving and API experimentation can use NIM and NVIDIA AI software.
- [[NVIDIA-NemoClaw]] - NVIDIA positions NemoClaw as a local agent stack for DGX Spark.
- [[NVIDIA-OpenShell]] - OpenShell provides the secure sandbox layer for those local agents.
- [[NVIDIA-AI-Workbench]] - Workbench is the natural project/environment manager for local-to-remote AI development.
- [[NVIDIA-Isaac]], [[NVIDIA-Metropolis]], and [[NVIDIA-Holoscan]] - DGX Spark is positioned for edge, robotics, video analytics, and sensor AI prototyping.

## Source Excerpts
- NVIDIA's DGX Spark product page describes a GB10 Grace Blackwell desktop system with 128 GB memory, preinstalled AI software, and local model development/fine-tuning/inference positioning.
- NVIDIA's DGX Spark User Guide describes the system as a compact AI computer for developers, data scientists, and AI researchers and links to `build.nvidia.com/spark` for up-to-date practical examples.

## Resources
- [NVIDIA DGX Spark](https://www.nvidia.com/en-us/products/workstations/dgx-spark/)
- [DGX Spark User Guide](https://docs.nvidia.com/dgx/dgx-spark/)
- [DGX Spark System Overview](https://docs.nvidia.com/dgx/dgx-spark/system-overview.html)
- [Start Building on DGX Spark](https://build.nvidia.com/spark)
