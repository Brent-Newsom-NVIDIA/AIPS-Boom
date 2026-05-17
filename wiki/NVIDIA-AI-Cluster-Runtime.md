# NVIDIA AI Cluster Runtime

**Type:** Tool
**Tags:** NVIDIA, AI Cluster Runtime, AICR, Kubernetes, GPU Operator, validated stack, runtime recipe, AI cloud
**Related:** [[NVIDIA-Cloud-Accelerator-NCX]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[NVIDIA-Cloud-Native-Technologies]], [[NVIDIA-Run-ai]], [[NVIDIA-NVSentinel]], [[NVIDIA-Project-GPUd]]
**Sources:** https://docs.nvidia.com/ncx/index.html; https://github.com/NVIDIA/aicr
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Cluster Runtime (AICR) is an open NVIDIA project for reproducible GPU-accelerated Kubernetes cluster runtime recipes. NCX describes it as a canonical, continuously validated definition of the NVIDIA-accelerated Kubernetes runtime. The public repository explains that AICR captures known-good combinations of drivers, operators, kernels, and system configurations and publishes them as version-locked recipes for Helm, Argo CD, and other deployment frameworks.

## Detail
AICR addresses a practical AI infrastructure problem: GPU Kubernetes clusters fail in subtle ways when kernel versions, drivers, container runtimes, Kubernetes versions, and operators drift out of validated combinations. AICR packages those combinations into recipes so operators can generate, query, and validate consistent deployments.

The public README describes AICR recipes as optimized for specific hardware, cloud, OS, and workload intent; validated through automated constraint and compatibility checks; and reproducible from the same inputs. Example workflows include taking a cluster snapshot, generating a recipe for service/accelerator/OS/intent/platform combinations, querying hydrated configuration values, and validating a recipe against a snapshot.

## Connections
- [[NVIDIA-Cloud-Accelerator-NCX]] - NCX lists AICR as a reproducible AI infrastructure component.
- [[NVIDIA-GPU-Operator]] - AICR recipes include operator and driver combinations for GPU Kubernetes clusters.
- [[NVIDIA-Network-Operator]] - validated AI cluster runtimes can include NVIDIA networking requirements.
- [[NVIDIA-Cloud-Native-Technologies]] - AICR operationalizes cloud-native NVIDIA stack combinations.
- [[NVIDIA-Run-ai]] - Run:ai operates on top of Kubernetes clusters that AICR helps standardize.
- [[NVIDIA-NVSentinel]] - health and remediation tooling depends on predictable cluster runtime foundations.
- [[NVIDIA-Project-GPUd]] - telemetry agents fit into the validated cluster runtime/operations layer.

## Source Excerpts
- "AI Cluster Runtime provides a canonical, continuously validated definition."
- "captures known-good combinations of drivers, operators, kernels, and system configurations"

