# NVIDIA Project GPUd

**Type:** Tool
**Tags:** NVIDIA, GPUd, GPU telemetry, monitoring, diagnostics, DGX Cloud Lepton, Kubernetes, Docker, GPU health
**Related:** [[NVIDIA-Cloud-Accelerator-NCX]], [[NVIDIA-Fleet-Intelligence]], [[NVIDIA-NVSentinel]], [[NVIDIA-DCGM]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-AI-Cluster-Runtime]]
**Sources:** https://docs.nvidia.com/ncx/index.html; https://github.com/leptonai/gpud
**Last Updated:** 2026-04-29

## Summary
NVIDIA Project GPUd is the NCX-listed GPU telemetry agent for monitoring, diagnostics, and issue identification on GPU systems. NCX describes Project GPUd as a lightweight, production-proven GPU telemetry agent that integrates with Docker, containers, Kubernetes, and NVIDIA ecosystems. The public GPUd repository describes GPUd as actively monitoring GPUs and managing AI/ML workload reliability with a unified view of critical GPU metrics and issues.

## Detail
GPUd is a lightweight host agent rather than a complete fleet-management product. Its README emphasizes low CPU and memory overhead, read-only operation, standalone host operation, Kubernetes deployment through Helm, and integration with Docker/containerd/Kubernetes/NVIDIA ecosystems.

Key features include monitoring GPU and GPU-fabric metrics, reporting GPU and fabric status through sources such as nvidia-smi parsing, detecting critical GPU and fabric errors through kernel messages, hardware slowdown signals, NVML Xid events, and DCGM, and monitoring overall system metrics like CPU, memory, and disk.

This page uses the NCX official docs as the NVIDIA source that names Project GPUd as part of the NVIDIA AI cloud component set. The public repository is currently under the LeptonAI GitHub organization, so the wiki should treat it as an NVIDIA-listed project in the DGX Cloud Lepton/NCX context rather than a generic third-party monitoring tool.

## Connections
- [[NVIDIA-Cloud-Accelerator-NCX]] - NCX lists Project GPUd as a software component for GPU telemetry.
- [[NVIDIA-Fleet-Intelligence]] - Fleet Intelligence is the managed fleet-health service adjacent to GPUd telemetry.
- [[NVIDIA-NVSentinel]] - NVSentinel performs Kubernetes-native fault remediation using GPU health signals.
- [[NVIDIA-DCGM]] - GPUd can use DCGM-related error and telemetry signals.
- [[NVIDIA-DGX-Cloud]] - GPUd is described as used in DGX Cloud Lepton production infrastructure.
- [[NVIDIA-AI-Cluster-Runtime]] - AICR standardizes the cluster runtime layer where GPUd may be deployed.

## Source Excerpts
- "Project GPUd is a lightweight, production-proven GPU telemetry agent."
- "production infrastructure" 

