# NVIDIA AI Enterprise Quick Start Guide

**Type:** Getting Started Guide
**Tags:** NVIDIA, AI Enterprise, quick start, onboarding, NGC, enterprise account, deployment, verification
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Software]], [[NVIDIA-AI-Enterprise-Infrastructure-Support-Matrix]], [[NVIDIA-Enterprise-Licensing-Guide]], [[NVIDIA-Enterprise-Support-and-Services]], [[NGC]], [[NVIDIA-NGC-Catalog]], [[NVIDIA-Certified-Systems]], [[NVIDIA-DGX]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-vGPU]], [[NVIDIA-MIG]], [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], [[NVIDIA-AI-Enterprise-Cloud-Deployment]], [[NVIDIA-Omniverse]], [[NVIDIA-Run-ai]], [[NVIDIA-Run-ai-Support-and-Lifecycle]]
**Sources:** https://docs.nvidia.com/ai-enterprise/release-7/7.4/getting-started/quick-start-guide.html, https://docs.nvidia.com/ai-enterprise/release-7/7.4/index.html, https://docs.nvidia.com/ai-enterprise/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Enterprise Quick Start Guide is the current NVIDIA onboarding path for getting AI Enterprise running in roughly 30-60 minutes. It covers enterprise account activation, entitlement certificates, NGC access, AI Enterprise software and infrastructure collections, Omniverse and Run:ai access, container image pulls, deployment-type selection, basic bare-metal driver/container-toolkit validation, VMware/vGPU licensing pointers, public-cloud VMI activation, and where to go next.

## Detail

### Purpose
Use this page when a question asks how to begin with AI Enterprise, activate accounts, find NGC software, choose the first deployment path, or verify that GPU-accelerated containers work. Use the deployment-specific pages for complete installation details after the quick-start path has identified the target environment.

### Onboarding flow
- Confirm hardware/software prerequisites, including NVIDIA-Certified Systems where required and supported NVIDIA GPUs.
- Activate an NVIDIA Enterprise Account from the entitlement certificate or link an evaluation account to purchased licenses.
- Use the NVIDIA Application Hub to access NGC, the Enterprise Support Portal, and the NVIDIA Licensing Portal.
- Access AI Enterprise application software in the NGC AI Enterprise Software Suite.
- Access AI Enterprise infrastructure software in the current AI Enterprise Infra collection.
- Access Omniverse through NGC; AI Enterprise includes Omniverse in the application layer.
- Access Run:ai self-hosted through its own NGC collection; Run:ai SaaS is separate from the AI Enterprise license.
- Pull container images with NGC credentials and generate/use an NGC API key when needed.
- Select bare-metal, virtualized, or public-cloud deployment guidance.

### First deployment checkpoints
- Bare metal: install the NVIDIA data center driver, verify `nvidia-smi`, install/configure the NVIDIA Container Toolkit, and verify GPU access from a CUDA container.
- Bare metal cluster operations: obtain [[NVIDIA-Base-Command-Manager]] through the entitlement-driven process when needed.
- VMware: use vGPU for Compute host/guest software and NVIDIA License System setup, then follow the VMware deployment guide.
- Public cloud: use an AI Enterprise VMI path, activate the subscription/token with NGC, generate an API key, and pull/run AI Enterprise containers.

### NVIDIA context
This page is the first-run entry point. It connects account/licensing setup, NGC access, and minimal validation before sending users to [[NVIDIA-AI-Enterprise-Software]], [[NVIDIA-AI-Enterprise-Lifecycle-Policy]], and the deployment guides.

## Connections
- [[NVIDIA-AI-Enterprise]] - parent product being onboarded.
- [[NVIDIA-AI-Enterprise-Software]] - software catalog to browse after account activation.
- [[NVIDIA-AI-Enterprise-Infrastructure-Support-Matrix]] - compatibility check for supported GPUs, platforms, operating systems, hypervisors, orchestration, and clouds.
- [[NVIDIA-Enterprise-Licensing-Guide]] - entitlement, license activation, NLS, and license-server context.
- [[NVIDIA-Enterprise-Support-and-Services]] - support portal and case path exposed through the enterprise account.
- [[NGC]] and [[NVIDIA-NGC-Catalog]] - software catalog, container registry, NGC API key, and artifact access path.
- [[NVIDIA-Certified-Systems]] - certified system requirement for many supported AI Enterprise deployments.
- [[NVIDIA-DGX]] - DGX systems use DGX-specific documentation rather than this general quick-start flow.
- [[NVIDIA-Data-Center-GPU-Drivers]] and [[NVIDIA-Container-Toolkit]] - first bare-metal validation layers.
- [[NVIDIA-Base-Command-Manager]] - cluster management software obtained through enterprise entitlement for bare-metal deployments.
- [[NVIDIA-vGPU]] - VMware/vGPU path that requires vGPU for Compute and NLS setup.
- [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], and [[NVIDIA-AI-Enterprise-Cloud-Deployment]] - detailed installation guides after quick start.
- [[NVIDIA-Omniverse]] - included AI Enterprise application-layer component accessed through NGC.
- [[NVIDIA-Run-ai]] and [[NVIDIA-Run-ai-Support-and-Lifecycle]] - self-hosted Run:ai access and support/lifecycle context.

## Source Excerpts
- The quick-start guide says it gets AI Enterprise running in about 30-60 minutes.
- The guide routes users through enterprise account activation, NGC catalog access, software installation, and GPU container verification.
- The guide distinguishes Run:ai self-hosted as included with AI Enterprise while Run:ai SaaS remains separate.

## Resources
- [NVIDIA AI Enterprise Quick Start Guide](https://docs.nvidia.com/ai-enterprise/release-7/7.4/getting-started/quick-start-guide.html)
- [NVIDIA AI Enterprise release 7.4 docs](https://docs.nvidia.com/ai-enterprise/release-7/7.4/index.html)
- [NVIDIA AI Enterprise Docs Hub](https://docs.nvidia.com/ai-enterprise/index.html)
