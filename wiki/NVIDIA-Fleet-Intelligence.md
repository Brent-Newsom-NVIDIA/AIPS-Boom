# NVIDIA Fleet Intelligence

**Type:** Tool
**Tags:** NVIDIA, Fleet Intelligence, GPU fleet, health monitoring, predictive failure, AI cloud, operations, NCX
**Related:** [[NVIDIA-Cloud-Accelerator-NCX]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-DCGM]], [[NVIDIA-NVSentinel]], [[NVIDIA-Project-GPUd]], [[NVIDIA-Mission-Control]]
**Sources:** https://docs.nvidia.com/ncx/index.html; https://docs.nvidia.com/fleet-intelligence/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Fleet Intelligence is NVIDIA's agent-based managed service for GPU fleet health monitoring and predictive failure signals. NCX positions it as an AI-cloud operations component for continuous GPU health monitoring, maximum uptime, and stability. The current public docs surface includes a Fleet Intelligence User Guide v1.1, release notes, dashboard, inventory, events/alerts, detailed debugging analysis, reports, settings, enrollment tokens, retention settings, alert configuration, and agent enrollment troubleshooting.

## Detail
Fleet Intelligence belongs in the wiki as the managed fleet health layer in NVIDIA cloud partner and AI factory operations. It is distinct from low-level telemetry collection because its focus is fleet-level inventory, events, alerts, analysis, reporting, and predictive signals for operators responsible for many GPU systems.

The current docs hierarchy shows pages for machine details, events/alerts, standard groupings, tags, detailed debugging analysis, reports, settings, data retention, alert configuration, and agent enrollment troubleshooting. That makes it a natural companion to [[NVIDIA-DCGM]], [[NVIDIA-NVSentinel]], [[NVIDIA-Project-GPUd]], and [[NVIDIA-Mission-Control]] rather than a replacement for them.

## Connections
- [[NVIDIA-Cloud-Accelerator-NCX]] - NCX lists Fleet Intelligence among the AI cloud software components.
- [[NVIDIA-DGX-Cloud]] - Fleet Intelligence is relevant to cloud-scale GPU fleet uptime and stability.
- [[NVIDIA-DCGM]] - DCGM provides low-level GPU health and telemetry that fleet-level tools can consume.
- [[NVIDIA-NVSentinel]] - NVSentinel handles Kubernetes-native fault detection/remediation; Fleet Intelligence provides managed fleet insights.
- [[NVIDIA-Project-GPUd]] - GPUd is a lightweight GPU telemetry agent adjacent to fleet monitoring.
- [[NVIDIA-Mission-Control]] - Mission Control and Fleet Intelligence both target AI factory operations and reliability.

## Source Excerpts
- "continuous GPU health monitoring and predictive failure signals"
- "NVIDIA Fleet Intelligence User Guide"

