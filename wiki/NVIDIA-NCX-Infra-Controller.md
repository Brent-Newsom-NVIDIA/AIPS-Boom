# NVIDIA NCX Infra Controller

**Type:** Tool
**Tags:** NVIDIA, NCX, infrastructure controller, bare metal, lifecycle management, Kubernetes, DPU, zero trust, AI cloud
**Related:** [[NVIDIA-Cloud-Accelerator-NCX]], [[NVIDIA-DOCA-Platform-Framework]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-DOCA]], [[NVIDIA-AI-Cluster-Runtime]], [[NVIDIA-Run-ai]]
**Sources:** https://docs.nvidia.com/ncx/index.html; https://github.com/NVIDIA/ncx-infra-controller-core
**Last Updated:** 2026-04-29

## Summary
NVIDIA NCX Infra Controller, also called NICo in its public repository, is an NCX component for bare-metal provisioning and secure lifecycle management in multi-tenant GPU infrastructure. NCX describes it as bare-metal provisioning and secure lifecycle management, while the public repository describes site-local, zero-trust bare-metal lifecycle management with DPU-enforced isolation. It is part of the operator-facing infrastructure layer for NVIDIA-powered AI clouds.

## Detail
NICo targets the foundational layer below AI workload orchestration: preparing and managing physical systems in a way that cloud partners can automate. The public README describes it as an API-based microservice that automates bare-metal lifecycle complexity to accelerate next-generation AI cloud offerings.

The repository's bare-metal cluster setup describes an NCX stack deployed onto Kubernetes in layers: common services, Carbide Core / NCX Infra Controller, and Carbide REST/API/site-agent services. That makes NCX Infra Controller adjacent to [[NVIDIA-AI-Cluster-Runtime]], [[NVIDIA-DOCA-Platform-Framework]], [[NVIDIA-BlueField-DPU]], and zero-trust DPU-enabled isolation.

## Connections
- [[NVIDIA-Cloud-Accelerator-NCX]] - NCX lists NCX Infra Controller as a core software component.
- [[NVIDIA-DOCA-Platform-Framework]] - both are infrastructure-level NCX components for DPU-accelerated cloud environments.
- [[NVIDIA-BlueField-DPU]] - NICo's zero-trust positioning depends on DPU-enforced isolation.
- [[NVIDIA-DOCA]] - DOCA is the software substrate for DPU-accelerated infrastructure services.
- [[NVIDIA-AI-Cluster-Runtime]] - AICR defines reproducible GPU Kubernetes runtime recipes above the infrastructure lifecycle layer.
- [[NVIDIA-Run-ai]] - Run:ai schedules workloads on the AI cloud substrate that NICo helps provision.

## Source Excerpts
- "Bare-metal provisioning and secure lifecycle management for multi-tenant GPU infrastructure."
- "zero-trust, bare-metal lifecycle management with DPU-enforced isolation"

