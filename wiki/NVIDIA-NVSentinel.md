# NVIDIA NVSentinel

**Type:** Tool
**Tags:** NVIDIA, NVSentinel, Kubernetes, GPU monitoring, fault remediation, GPU health, DCGM, operations
**Related:** [[NVIDIA-Cloud-Accelerator-NCX]], [[NVIDIA-GPU-Operator]], [[NVIDIA-DCGM]], [[NVIDIA-Fleet-Intelligence]], [[NVIDIA-Project-GPUd]], [[NVIDIA-Resiliency-Extension]], [[NVIDIA-AI-Cluster-Runtime]]
**Sources:** https://docs.nvidia.com/ncx/index.html; https://github.com/NVIDIA/NVSentinel
**Last Updated:** 2026-04-29

## Summary
NVIDIA NVSentinel is an open-source, Kubernetes-native GPU fault detection and remediation system. NCX describes it as GPU monitoring and fault remediation for Kubernetes; the public repository describes automatic detection, classification, and remediation of hardware and software faults in GPU nodes. It monitors GPU health, system logs, and cloud provider maintenance events, then can cordon faulty nodes, drain workloads, and trigger break-fix workflows.

## Detail
NVSentinel is part of NVIDIA's operations layer for keeping GPU fleets productive. It requires Kubernetes, Helm, and NVIDIA GPU Operator, which includes DCGM for GPU monitoring. Its features include real-time detection of GPU, NVSwitch, and system-level failures; automated remediation; pluggable health monitors; high availability; event-driven processing; persistent event storage; coordinated workload eviction; and metadata enrichment.

This page should answer questions about Kubernetes-native GPU break/fix automation. It should not be conflated with [[NVIDIA-DCGM]], which provides diagnostics and telemetry, or [[NVIDIA-Fleet-Intelligence]], which is a managed fleet health service. NVSentinel is specifically about automated fault handling inside Kubernetes.

## Connections
- [[NVIDIA-Cloud-Accelerator-NCX]] - NCX lists NVSentinel as a GPU health component for AI clouds.
- [[NVIDIA-GPU-Operator]] - GPU Operator is a prerequisite and supplies DCGM monitoring.
- [[NVIDIA-DCGM]] - DCGM provides GPU health data consumed by remediation systems.
- [[NVIDIA-Fleet-Intelligence]] - Fleet Intelligence provides managed fleet health signals adjacent to NVSentinel.
- [[NVIDIA-Project-GPUd]] - GPUd is a lightweight GPU telemetry agent adjacent to NVSentinel's remediation layer.
- [[NVIDIA-Resiliency-Extension]] - job-level resiliency layer that complements NVSentinel's Kubernetes node/fault remediation.
- [[NVIDIA-AI-Cluster-Runtime]] - AICR standardizes the cluster runtime under health/remediation tools.

## Source Excerpts
- "GPU Fault Detection and Remediation for Kubernetes"
- "cordoning faulty nodes, draining workloads, and triggering break-fix workflows"
