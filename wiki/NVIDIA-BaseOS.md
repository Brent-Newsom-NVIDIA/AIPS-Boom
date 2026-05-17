# NVIDIA BaseOS

**Type:** Platform
**Tags:** NVIDIA, BaseOS, DGX OS, operating system, AI factory, Linux
**Related:** [[NVIDIA-DGX]], [[NVIDIA-DGX-Spark]], [[NVIDIA-DGX-Station]], [[NVIDIA-DGX-BasePOD]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-DCGM]], [[CUDA-Compatibility]]
**Sources:** https://docs.nvidia.com/baseos/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA BaseOS defines production-ready operating system environments optimized for AI, machine learning, and data analytics workloads. It includes BaseOS software, DGX OS for Ubuntu-based DGX systems, and DGX EL for Red Hat Enterprise Linux environments.
Current DGX product/docs coverage extends the OS context down to [[NVIDIA-DGX-Spark]] and [[NVIDIA-DGX-Station]], where DGX OS or Ubuntu with NVIDIA AI Developer Tools provides the local AI development base.

## Detail

### Purpose
NVIDIA AI systems need validated operating-system layers with the right drivers, diagnostics, monitoring, and system configuration. BaseOS provides that foundation for DGX and AI factory deployments.

### Key capabilities
- Optimized system configurations for AI workloads.
- Enhanced NVIDIA drivers, diagnostics, and monitoring tools.
- Support for Ubuntu, Red Hat Enterprise Linux, and Rocky Linux contexts.
- DGX OS as a customized Ubuntu distribution for DGX systems.
- DGX EL path for Red Hat Enterprise Linux environments.
- Ecosystem integration guides, including Red Hat OpenShift.

### NVIDIA context
BaseOS sits under [[NVIDIA-DGX]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-Base-Command-Manager]], and [[NVIDIA-AI-Enterprise]]. It is a practical source of truth for the validated OS layer in NVIDIA AI infrastructure.

## Connections
- [[NVIDIA-DGX]] - DGX systems rely on validated OS images and release notes.
- [[NVIDIA-DGX-Spark]] - compact DGX OS-based desktop system.
- [[NVIDIA-DGX-Station]] - Ubuntu with NVIDIA AI Developer Tools and DGX-style validated software.
- [[NVIDIA-DGX-BasePOD]] - BasePOD deployment guides use validated DGX OS/BaseOS and management stacks.
- [[NVIDIA-DGX-SuperPOD]] - cluster deployments need consistent OS foundations.
- [[NVIDIA-Data-Center-GPU-Drivers]] - driver packages are a core BaseOS concern.
- [[NVIDIA-DCGM]] - diagnostics and monitoring are part of system operations.
- [[CUDA-Compatibility]] - OS/driver/toolkit compatibility affects workload deployment.

## Source Excerpts
- NVIDIA BaseOS docs describe production-ready operating system environments optimized for AI and data analytics workloads.
