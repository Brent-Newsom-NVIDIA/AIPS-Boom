# NVIDIA Enterprise RA Observability Guide

**Type:** Guide
**Tags:** NVIDIA, Enterprise Reference Architecture, observability, telemetry, Grafana, Prometheus, DCGM, NetQ, NIM Operator, Kubernetes
**Related:** [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], [[NVIDIA-NVL72-AI-Factory]], [[NVIDIA-DCGM]], [[NVIDIA-GPU-Operator]], [[NVIDIA-NIM-Operator]], [[NVIDIA-NetQ]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Mission-Control]], [[NVIDIA-Run-ai]]
**Sources:** https://docs.nvidia.com/enterprise-reference-architectures/index.html, https://docs.nvidia.com/enterprise-reference-architectures/observability-guide.pdf
**Last Updated:** 2026-04-29

## Summary
NVIDIA Enterprise RA Observability Guide is a production-oriented monitoring and alerting guide for NVIDIA Enterprise Reference Architecture environments. The current PDF focuses on AI factory observability using Kubernetes-native tooling, Prometheus, Grafana, DCGM, NIM Operator telemetry, BCM metrics, NetQ network metrics, dashboards, and alert templates.

## Detail

### Purpose
The guide gives Enterprise RA operators a repeatable way to monitor AI infrastructure from day one. It covers GPU, CPU, Kubernetes, network, and application telemetry so administrators can see health, utilization, performance, and workload impact across an AI factory.

### Observability stack
- Prometheus and Grafana provide the time-series and dashboard layer.
- [[NVIDIA-DCGM]] and DCGM Exporter expose GPU health and utilization metrics.
- [[NVIDIA-GPU-Operator]] deploys GPU enablement and DCGM Exporter in Kubernetes environments.
- [[NVIDIA-NIM-Operator]] and NIM services provide application-side inference telemetry.
- [[NVIDIA-Base-Command-Manager]] can provide BCM metrics through a Prometheus data source.
- [[NVIDIA-NetQ]] provides network fabric telemetry and validation data.
- The guide includes dashboard and alerting templates for Kubernetes, GPU, CPU, disk, and network conditions.

### Scope notes
The current guide explicitly focuses on dashboards and alerts. Logging and distributed tracing are marked as future/out-of-scope areas, so this wiki page should stay centered on metrics-driven observability until NVIDIA publishes a broader current guide.

### NVIDIA context
Use this page for the cross-cutting observability guide across Enterprise RAs. Use [[NVIDIA-Mission-Control]] for integrated AI factory operations, [[NVIDIA-DCGM]] for GPU telemetry specifics, and [[NVIDIA-NetQ]] for network operations detail.

## Connections
- [[NVIDIA-Enterprise-Reference-Architectures]] - program-level RA hub.
- [[NVIDIA-Enterprise-AI-Factory]] - strategic AI factory context.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - software stack that observability builds on.
- [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], and [[NVIDIA-NVL72-AI-Factory]] - hardware RA targets for observability.
- [[NVIDIA-DCGM]] - GPU telemetry and health monitoring source.
- [[NVIDIA-GPU-Operator]] - Kubernetes deployment path for GPU software and DCGM Exporter.
- [[NVIDIA-NIM-Operator]] - application and model-serving layer relevant to observability.
- [[NVIDIA-NetQ]] - network telemetry and fabric validation source.
- [[NVIDIA-Base-Command-Manager]] - BCM metrics and cluster management integration.
- [[NVIDIA-Mission-Control]] - integrated operations plane for large DGX/NVL72 environments.
- [[NVIDIA-Run-ai]] - workload orchestration layer whose workloads need monitoring.

## Source Excerpts
- NVIDIA's Enterprise RA hub describes the Observability Guide as a standardized and production-ready reference for implementing observability in enterprise AI or HPC environments.
- The PDF states that the current guide focuses on advanced custom dashboard and alerting solutions for AI factories, using tools such as DCGM, NIM Operator, Prometheus Node Exporter, and other telemetry sources.

## Resources
- [NVIDIA Enterprise Reference Architectures](https://docs.nvidia.com/enterprise-reference-architectures/index.html)
- [Observability Guide PDF](https://docs.nvidia.com/enterprise-reference-architectures/observability-guide.pdf)
