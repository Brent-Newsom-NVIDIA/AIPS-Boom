# NVIDIA Base Command Manager

**Type:** Platform
**Tags:** NVIDIA, Base Command Manager, cluster management, AI factory, DGX, Bright Cluster Manager
**Related:** [[NVIDIA-Base-Command]], [[NVIDIA-Bright-Cluster-Manager]], [[NVIDIA-DGX]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-BaseOS]], [[NVIDIA-Mission-Control]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[NVIDIA-DCGM]]
**Sources:** https://docs.nvidia.com/base-command-manager/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Base Command Manager is NVIDIA's cluster management documentation surface for provisioning, operating, and monitoring AI data center infrastructure. It is distinct from [[NVIDIA-Base-Command]] Platform, which is focused on AI development workflows.

## Detail

### Purpose
AI factories need infrastructure lifecycle management: provisioning nodes, managing software images, monitoring cluster health, and operating large GPU systems. Base Command Manager provides the cluster-management layer historically connected to [[NVIDIA-Bright-Cluster-Manager]] capabilities.

### Key capabilities
- Documentation for Base Command Manager 10 and 11.
- Bright Cluster Manager documentation surfaced alongside the product docs.
- Cluster provisioning and management orientation for AI data centers.
- Operational relevance to DGX, SuperPOD, and BaseOS environments.

### NVIDIA context
Base Command Manager should be tracked separately from [[NVIDIA-Base-Command]] Platform because one is infrastructure cluster management and the other is a data-science/AI development platform.

## Connections
- [[NVIDIA-Base-Command]] - related name, but different workflow focus.
- [[NVIDIA-Bright-Cluster-Manager]] - Bright documentation and cluster-management concepts sit adjacent to Base Command Manager.
- [[NVIDIA-DGX-SuperPOD]] - large clusters need cluster management.
- [[NVIDIA-BaseOS]] - operating-system layer for managed NVIDIA systems.
- [[NVIDIA-Mission-Control]] - AI factory management platform that overlaps operational concerns.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - software RA lists Base Command Manager as deployment and lifecycle software.
- [[NVIDIA-Enterprise-RA-Observability-Guide]] - observability guide uses BCM metrics as one telemetry source.
- [[NVIDIA-DCGM]] - GPU telemetry and diagnostics feed infrastructure operations.

## Source Excerpts
- NVIDIA's Base Command Manager docs surface current Base Command Manager and Bright Cluster Manager documentation.
