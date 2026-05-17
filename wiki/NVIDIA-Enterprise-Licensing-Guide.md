# NVIDIA Enterprise Licensing Guide

**Type:** Licensing Guide
**Tags:** NVIDIA, AI Enterprise, licensing, NLS, subscription, cloud marketplace, BYOL, support
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-Enterprise-Support-and-Services]], [[NVIDIA-AI-Enterprise-Lifecycle-Policy]], [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], [[NVIDIA-AI-Enterprise-Cloud-Deployment]], [[NVIDIA-vGPU]], [[NVIDIA-vGPU-for-Compute]], [[NVIDIA-DGX]], [[NVIDIA-DGX-Enterprise-Support]], [[NVIDIA-Certified-Systems]], [[NVIDIA-NGC-Catalog]], [[NGC]]
**Sources:** https://docs.nvidia.com/ai-enterprise/planning-resource/licensing-guide/latest/index.html, https://docs.nvidia.com/ai-enterprise/planning-resource/licensing-guide/latest/overview.html, https://docs.nvidia.com/ai-enterprise/planning-resource/licensing-guide/latest/licensing.html, https://docs.nvidia.com/ai-enterprise/planning-resource/licensing-guide/latest/license-system.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Enterprise Licensing Guide is the current NVIDIA guide for AI Enterprise entitlement, packaging, pricing, licensing, and NVIDIA License System behavior. It explains per-GPU licensing, subscription and perpetual options, cloud marketplace consumption, BYOL cloud deployment, selected GPU entitlement inclusions, DGX software bundle treatment, support-services alignment, education/Inception/Connect pricing programs, and NLS service-instance options.

## Detail

### Purpose
AI Enterprise licensing determines whether a deployment is correctly entitled before software is installed or scaled. The guide is the licensing companion to the AI Enterprise deployment guides and lifecycle policy, not a technical installation guide.

### Licensing model
- AI Enterprise is generally licensed per GPU for servers or workstations that host AI Enterprise software.
- Component cards with more than one GPU require a license for each individual GPU.
- Subscription and cloud consumption licenses include Business Standard support, with Business Critical available as an upgrade.
- Perpetual enterprise licenses allow indefinite use and include five years of Business Standard Support services.
- Compute environments or instances without NVIDIA GPUs require one AI Enterprise subscription or license per server/instance.
- Selected NVIDIA GPUs include an AI Enterprise subscription entitlement, with software activation required and entitlement tied to the GPU/card context.
- NVIDIA AI Enterprise is included in the DGX software bundle for Hopper-architecture DGX systems; Blackwell DGX systems require AI Enterprise licenses separately.
- Cloud marketplace deployment supports on-demand/pay-as-you-go, private offers, and BYOL patterns across AWS, Google Cloud, Azure, and OCI.

### NVIDIA License System
The NVIDIA License System (NLS) is required only when using NVIDIA vGPU for Compute drivers included with AI Enterprise. NLS provides license usage monitoring and reporting through Cloud License Service (CLS) instances hosted on the NVIDIA Licensing Portal or Delegated License Service (DLS) instances hosted on-premises.

### NVIDIA context
Use this page for licensing, entitlement, NLS, cloud marketplace, BYOL, and support-included-in-license questions. Use [[NVIDIA-Enterprise-Support-and-Services]] for support portal, cases, RMA, support levels, and professional services; use [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] for support windows and branch policy.

## Connections
- [[NVIDIA-AI-Enterprise]] - product being licensed and entitled.
- [[NVIDIA-Enterprise-Support-and-Services]] - support entitlement, support levels, support case, RMA, portal, and professional services companion.
- [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] - support windows and branch maintenance referenced by licensing support terms.
- [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], and [[NVIDIA-AI-Enterprise-Cloud-Deployment]] - deployment paths that require entitlement planning.
- [[NVIDIA-vGPU]] and [[NVIDIA-vGPU-for-Compute]] - NLS is required only for vGPU for Compute drivers included with AI Enterprise.
- [[NVIDIA-DGX]] and [[NVIDIA-DGX-Enterprise-Support]] - DGX software bundle and enterprise support context.
- [[NVIDIA-Certified-Systems]] - AI Enterprise support expects deployment on certified systems.
- [[NVIDIA-NGC-Catalog]] and [[NGC]] - licensed software artifacts and catalog access path.

## Source Excerpts
- The licensing guide states AI Enterprise is licensed on a per-GPU basis.
- The NLS section says NLS is required only for vGPU for Compute drivers included with AI Enterprise.
- The cloud licensing section covers marketplace, private offer, and BYOL deployment patterns.

## Resources
- [NVIDIA Enterprise Licensing Guide](https://docs.nvidia.com/ai-enterprise/planning-resource/licensing-guide/latest/index.html)
- [NVIDIA AI Enterprise Licensing](https://docs.nvidia.com/ai-enterprise/planning-resource/licensing-guide/latest/licensing.html)
- [NVIDIA License System](https://docs.nvidia.com/ai-enterprise/planning-resource/licensing-guide/latest/license-system.html)
- [NVIDIA Enterprise Support and Services](https://docs.nvidia.com/enterprise-services/index.html)
