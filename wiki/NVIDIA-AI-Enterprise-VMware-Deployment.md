# NVIDIA AI Enterprise VMware Deployment

**Type:** Deployment Guide
**Tags:** NVIDIA, AI Enterprise, VMware, vSphere, vGPU, ESXi, vCenter, virtualized AI
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Lifecycle-Policy]], [[NVIDIA-Enterprise-Licensing-Guide]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-vGPU]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-NIM]], [[NGC]], [[NVIDIA-Certified-Systems]], [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-Cloud-Deployment]], [[Optimizing-VM-Configuration-for-AI-Inference]]
**Sources:** https://docs.nvidia.com/ai-enterprise/deployment/vmware/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Enterprise VMware Deployment is the current NVIDIA guide for deploying AI Enterprise on VMware vSphere. It covers VMware ESXi, vCenter, NVIDIA AI Enterprise host software, NVIDIA licensing, vGPU configuration, creating AI Enterprise VMs, Docker/NVIDIA container runtime setup, AI framework installation, validation, Kubernetes, and a CPU-only appendix path.

## Detail

### Purpose
VMware deployment is the AI Enterprise virtualization path for organizations that need vSphere operations, VM lifecycle management, vGPU partitioning, and enterprise virtualization controls around AI workloads.

### Deployment scope
- VMware vSphere ESXi and vCenter installation/configuration flow.
- NVIDIA AI Enterprise host software installation.
- NVIDIA License System setup for vGPU/AI Enterprise entitlement.
- Advanced GPU configuration, including partitioning and scheduling concepts.
- Creation of the first NVIDIA AI Enterprise VM.
- Docker and NVIDIA container runtime setup inside the VM.
- AI/data science application and framework installation.
- Validation and optional Kubernetes appendix.
- CPU-only appendix for non-GPU infrastructure cases.

### NVIDIA context
Use this page for AI Enterprise on VMware. Use [[NVIDIA-vGPU]] for vGPU concepts and product behavior, [[Optimizing-VM-Configuration-for-AI-Inference]] for topology-aware VM performance tuning on HGX/KVM-style systems, and [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]] when no hypervisor is involved.

## Connections
- [[NVIDIA-AI-Enterprise]] - software suite deployed on vSphere.
- [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] - branch and compatibility planning before installing/upgrading.
- [[NVIDIA-Enterprise-Licensing-Guide]] - licensing companion for vGPU for Compute, NLS, support, and per-GPU entitlement.
- [[NVIDIA-vGPU]] - GPU virtualization technology used in VMware AI Enterprise deployments.
- [[NVIDIA-Data-Center-GPU-Drivers]] - driver and host software layer.
- [[NVIDIA-Container-Toolkit]] - GPU container runtime inside AI Enterprise VMs.
- [[NVIDIA-NIM]], [[NGC]], and [[NVIDIA-NGC-Catalog]] - application software and containers deployed after VM setup.
- [[NVIDIA-Certified-Systems]] - validated hardware target for enterprise virtualized deployments.
- [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]] and [[NVIDIA-AI-Enterprise-Cloud-Deployment]] - alternative deployment guides.
- [[Optimizing-VM-Configuration-for-AI-Inference]] - performance-oriented VM topology paper for virtualized AI workloads.

## Source Excerpts
- The VMware guide covers ESXi, vCenter, NVIDIA AI Enterprise host software, licensing, VM creation, Docker setup, frameworks, and validation.
- The guide points to vGPU configuration items such as GPU partitioning and scheduling.

## Resources
- [NVIDIA AI Enterprise VMware Deployment Guide](https://docs.nvidia.com/ai-enterprise/deployment/vmware/latest/overview.html)
