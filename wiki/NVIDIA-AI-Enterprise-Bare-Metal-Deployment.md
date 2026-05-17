# NVIDIA AI Enterprise Bare Metal Deployment

**Type:** Deployment Guide
**Tags:** NVIDIA, AI Enterprise, bare metal, deployment, drivers, Docker, Kubernetes, GPUDirect Storage
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Lifecycle-Policy]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Certified-Systems]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-GPU-Operator]], [[NVIDIA-NIM]], [[NGC]], [[NVIDIA-NGC-Catalog]], [[NVIDIA-Cloud-Native-Technologies]], [[GPU-Direct-Storage]], [[cuFile-API]], [[NVIDIA-AI-Enterprise-Cloud-Deployment]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], [[Red-Hat-AI-Factory-with-NVIDIA]]
**Sources:** https://docs.nvidia.com/ai-enterprise/deployment/bare-metal/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Enterprise Bare Metal Deployment is the current NVIDIA guide for installing AI Enterprise directly on bare metal servers. It covers prerequisites, AI Enterprise software access, NVIDIA licensing, driver/software installation, Docker and NVIDIA Container Toolkit setup, AI/data science application deployment, validation, optional GPU configuration, Kubernetes, and GPUDirect Storage.

## Detail

### Purpose
Bare-metal deployments are the direct path for AI Enterprise on physical servers when the customer wants full access to the host GPU topology and does not need a hypervisor layer. The guide is a step-by-step installation resource rather than a reference architecture.

### Deployment scope
- AI Enterprise account and entitlement prerequisites.
- NVIDIA software and licensing setup.
- NVIDIA driver and GPU software installation.
- Docker and NVIDIA Container Toolkit setup for GPU containers.
- NGC access and AI/data science framework containers.
- Validation of GPU-accelerated workloads.
- Optional advanced GPU configuration and scheduling topics.
- Kubernetes appendix for running with Kubernetes.
- GPUDirect Storage appendix for direct GPU/storage I/O paths.

### NVIDIA context
Use this page for bare-metal AI Enterprise installation questions. Use [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] for the higher-level software stack, [[NVIDIA-Certified-Systems]] for validated hardware, and [[Red-Hat-AI-Factory-with-NVIDIA]] when the bare-metal target is Red Hat OpenShift AI.

## Connections
- [[NVIDIA-AI-Enterprise]] - software suite being deployed.
- [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] - branch and compatibility planning before install.
- [[NVIDIA-Certified-Systems]] - likely target hardware for production bare-metal deployments.
- [[NVIDIA-Data-Center-GPU-Drivers]] - driver layer installed in the deployment flow.
- [[NVIDIA-Container-Toolkit]] - container runtime integration used for GPU workloads.
- [[NVIDIA-GPU-Operator]] and [[NVIDIA-Cloud-Native-Technologies]] - Kubernetes path for GPU enablement.
- [[NVIDIA-NIM]], [[NGC]], and [[NVIDIA-NGC-Catalog]] - application containers and model services consumed after setup.
- [[GPU-Direct-Storage]] and [[cuFile-API]] - optional direct storage-to-GPU path included in the guide appendix.
- [[NVIDIA-AI-Enterprise-Cloud-Deployment]] and [[NVIDIA-AI-Enterprise-VMware-Deployment]] - alternative deployment environments.

## Source Excerpts
- The bare-metal guide describes prerequisites, installation, configuration, and validation for AI Enterprise on bare metal servers.
- The guide includes appendices for Kubernetes and GPUDirect Storage.

## Resources
- [NVIDIA AI Enterprise Bare Metal Deployment Guide](https://docs.nvidia.com/ai-enterprise/deployment/bare-metal/latest/overview.html)
