# NVIDIA Cloud Accelerator (NCX)

**Type:** Platform
**Tags:** NVIDIA, NCX, cloud accelerator, AI cloud, cloud partners, infrastructure, AI factory
**Related:** [[NVIDIA-DGX-Cloud]], [[NVIDIA-Cloud-Functions]], [[NVIDIA-Dynamo]], [[KAI-Scheduler]], [[NVIDIA-Grove]], [[NVIDIA-Fleet-Intelligence]], [[NVIDIA-NCX-Infra-Controller]], [[NVIDIA-AI-Cluster-Runtime]], [[NVIDIA-NVSentinel]], [[NVIDIA-DOCA-Platform-Framework]], [[NVIDIA-Project-GPUd]], [[NVIDIA-Mission-Control]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Cloud-Native-Technologies]]
**Sources:** https://docs.nvidia.com/ncx/index.html, https://docs.nvidia.com/ncx/ncp-software-reference-guide/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Cloud Accelerator (NCX) is a portfolio of open, modular infrastructure software components for cloud partners building NVIDIA-powered AI clouds. It packages NVIDIA AI factory learnings into composable infrastructure and platform components for cloud operators.

## Detail
NCX spans hardware lifecycle management, health monitoring, operational automation, infrastructure-as-a-service, container-as-a-service, AI platform services, telemetry, observability, workload isolation, and cloud partner reference architectures.

Representative components include [[NVIDIA-Cloud-Functions]], [[KAI-Scheduler]], [[NVIDIA-Grove]], [[NVIDIA-Dynamo]], [[NVIDIA-Fleet-Intelligence]], [[NVIDIA-NCX-Infra-Controller]], [[NVIDIA-AI-Cluster-Runtime]], [[NVIDIA-NVSentinel]], [[NVIDIA-DOCA-Platform-Framework]], and [[NVIDIA-Project-GPUd]]. The docs target NVIDIA Cloud Partners, cloud service providers, and ISVs building AI cloud services on NVIDIA hardware.

## Connections
- [[NVIDIA-DGX-Cloud]] - NCX supports the partner/operator side of NVIDIA AI cloud infrastructure.
- [[NVIDIA-Cloud-Functions]] - unified API layer for scaling inference and simulation workloads.
- [[NVIDIA-Dynamo]] - distributed inference-serving framework listed among NCX components.
- [[KAI-Scheduler]] - scalable Kubernetes scheduler for GPU resource allocation.
- [[NVIDIA-Grove]] - Kubernetes API for defining and scaling multi-component inference workloads.
- [[NVIDIA-Fleet-Intelligence]] - managed GPU fleet health monitoring and predictive failure signals.
- [[NVIDIA-NCX-Infra-Controller]] - bare-metal lifecycle management and secure infrastructure provisioning.
- [[NVIDIA-AI-Cluster-Runtime]] - validated NVIDIA-accelerated Kubernetes runtime recipes.
- [[NVIDIA-NVSentinel]] - Kubernetes-native GPU monitoring and fault remediation.
- [[NVIDIA-DOCA-Platform-Framework]] - DPU service orchestration for BlueField-accelerated infrastructure.
- [[NVIDIA-Project-GPUd]] - lightweight GPU telemetry agent listed in NCX.
- [[NVIDIA-Mission-Control]] - AI factory operations and management adjacency.
- [[NVIDIA-BlueField-DPU]] - DPU-accelerated infrastructure and DOCA Platform Framework relevance.
- [[NVIDIA-Spectrum-X]] - AI networking layer for cloud AI data centers.

## Source Excerpts
- NVIDIA describes NCX as open, modular infrastructure software components for building and operating NVIDIA-powered AI clouds.
- The NCX reference guide covers infrastructure, Kubernetes/container services, AI platform services, observability, isolation, and cloud partner operations.
