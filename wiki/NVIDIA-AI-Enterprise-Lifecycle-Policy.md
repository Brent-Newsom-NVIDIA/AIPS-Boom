# NVIDIA AI Enterprise Lifecycle Policy

**Type:** Policy
**Tags:** NVIDIA, AI Enterprise, lifecycle, release branches, compatibility, support, EOL
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Software]], [[NVIDIA-AI-Enterprise-Infrastructure-Support-Matrix]], [[NVIDIA-Enterprise-Licensing-Guide]], [[NVIDIA-NIM]], [[NVIDIA-NIM-Operator]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[NVIDIA-DOCA-Platform-Framework]], [[NVIDIA-Run-ai]], [[NVIDIA-Run-ai-Support-and-Lifecycle]], [[NVIDIA-Omniverse]], [[NVIDIA-vGPU]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], [[NVIDIA-AI-Enterprise-Cloud-Deployment]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[NVIDIA-AI-Enterprise-Security]], [[NVIDIA-AI-Software-for-Regulated-Environments]]
**Sources:** https://docs.nvidia.com/ai-enterprise/lifecycle/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Enterprise Lifecycle Policy is the current NVIDIA document for choosing AI Enterprise release branches, checking support timelines, and validating cross-stack compatibility before deployment or upgrade. It covers Feature Branch, Production Branch, Long-Term Support Branch, Infrastructure Branch, end-of-life notices, archived branches, and the interactive lifecycle/compatibility explorer.

## Detail

### Purpose
AI Enterprise is split across application software and infrastructure software, with different update cadences and support windows. The lifecycle policy is the planning surface for deciding whether a workload should follow latest Feature Branch innovation, Production Branch stability, or Long-Term Support Branch stability for regulated environments.

### Current lifecycle context
- The current policy adds NVIDIA AI Enterprise Infrastructure 8.x with the R595 driver branch.
- Infrastructure 6.x is archived after reaching end of support in March 2026.
- The active application release set includes PB 25h2 and LTSB 2, with Omniverse PB 25h2 tracked separately.
- The active infrastructure set includes Infra 8, Infra 7 LTSB, and Infra 4 LTSB.
- The compatibility explorer helps validate driver, GPU Operator, Network Operator, and Run:ai version alignment.

### NVIDIA context
Use this page when a question asks which AI Enterprise branch to deploy, whether a branch is current, how to plan upgrades, or how to reason about support/EOL. Use [[NVIDIA-AI-Enterprise]] for the product suite and the deployment pages for installation paths.

## Connections
- [[NVIDIA-AI-Enterprise]] - product suite governed by the lifecycle policy.
- [[NVIDIA-AI-Enterprise-Software]] - software catalog whose application/infrastructure layers are governed by lifecycle branches.
- [[NVIDIA-AI-Enterprise-Infrastructure-Support-Matrix]] - release-specific compatibility matrix for infrastructure software, GPUs, platforms, OS, hypervisors, orchestration, and clouds.
- [[NVIDIA-Enterprise-Licensing-Guide]] - entitlement, support, and license duration context that should be checked alongside lifecycle branch policy.
- [[NVIDIA-NIM]] - application software whose production and long-term branches matter for enterprise deployment.
- [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], and [[NVIDIA-NIM-Operator]] - infrastructure and Kubernetes components whose versions must align.
- [[NVIDIA-DOCA-Platform-Framework]] - DPU/DPF component in the infrastructure software layer.
- [[NVIDIA-Run-ai]] and [[NVIDIA-Run-ai-Support-and-Lifecycle]] - self-hosted Run:ai compatibility and product support dates are part of lifecycle planning.
- [[NVIDIA-Omniverse]] - Omniverse has AI Enterprise branch coverage but separate documentation.
- [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], [[NVIDIA-AI-Enterprise-Cloud-Deployment]], and [[Red-Hat-AI-Factory-with-NVIDIA]] - deployment paths that should be checked against lifecycle compatibility.
- [[NVIDIA-AI-Enterprise-Security]] and [[NVIDIA-AI-Software-for-Regulated-Environments]] - security and regulated-environment pages depend on branch stability and support windows.

## Source Excerpts
- The lifecycle policy says the interactive explorer validates infrastructure stack compatibility before deployment or upgrade.
- The April 2026 update adds Infrastructure 8 and archives Infrastructure 6.

## Resources
- [NVIDIA AI Enterprise Lifecycle Policy](https://docs.nvidia.com/ai-enterprise/lifecycle/latest/index.html)
