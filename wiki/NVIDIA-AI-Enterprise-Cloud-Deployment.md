# NVIDIA AI Enterprise Cloud Deployment

**Type:** Deployment Guide
**Tags:** NVIDIA, AI Enterprise, cloud, AWS, Azure, Google Cloud, OCI, Alibaba Cloud, Tencent Cloud, Kubernetes, VMI
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Lifecycle-Policy]], [[NVIDIA-Enterprise-Licensing-Guide]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-Cloud-Accelerator-NCX]], [[NVIDIA-NIM]], [[NVIDIA-NIM-on-GKE]], [[NVIDIA-NGC-Catalog]], [[NGC]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-GPU-Operator]], [[NVIDIA-vGPU]], [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], [[Red-Hat-AI-Factory-with-NVIDIA]]
**Sources:** https://docs.nvidia.com/ai-enterprise/deployment/cloud/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Enterprise Cloud Deployment is the current NVIDIA guide for running AI Enterprise on supported cloud service providers. It covers AWS, Google Cloud, Microsoft Azure, Oracle Cloud Infrastructure, Alibaba Cloud, Tencent Cloud, ByteDance Volcano Engine Cloud, NVIDIA VMIs, GPU-optimized VMIs, standard instances, managed Kubernetes, Red Hat OpenShift in the cloud, private offers, licensing, and NGC container access.

## Detail

### Purpose
Cloud deployment lets organizations run AI Enterprise with public-cloud GPU capacity while keeping NVIDIA's supported software stack, licensing model, and deployment guidance. The guide is the cloud counterpart to the bare-metal and VMware deployment guides.

### Deployment scope
- Supported CSP sections for AWS, Google Cloud, Azure, OCI, Alibaba Cloud, Tencent Cloud, and ByteDance Volcano Engine Cloud.
- Standard GPU instances with customer-managed setup.
- NVIDIA Private Offer VMIs and NVIDIA AI Enterprise VMIs with license-included paths.
- NVIDIA GPU-Optimized VMIs for preconfigured GPU software without included AI Enterprise licensing.
- Managed Kubernetes paths for AWS, Azure, and Google Cloud.
- Marketplace Red Hat OpenShift in AWS, Azure, and Google Cloud.
- NGC container pull/run guidance.
- BYOL, on-demand/pay-as-you-go, and private-offer licensing notes; the current [[NVIDIA-Enterprise-Licensing-Guide]] also ties BYOL consumption to per-GPU subscription licensing on certified cloud providers.

### NVIDIA context
Use this page for AI Enterprise in public clouds. Use [[NVIDIA-DGX-Cloud]] for NVIDIA-hosted/partner AI supercomputing capacity and [[NVIDIA-Cloud-Accelerator-NCX]] for cloud partner AI infrastructure components.

## Connections
- [[NVIDIA-AI-Enterprise]] - enterprise AI software suite deployed on CSP infrastructure.
- [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] - branch compatibility and support windows for cloud deployments.
- [[NVIDIA-Enterprise-Licensing-Guide]] - cloud marketplace, private offer, BYOL, per-GPU entitlement, and support-included licensing context.
- [[NVIDIA-DGX-Cloud]] - NVIDIA cloud AI supercomputing platform adjacent to CSP deployment.
- [[NVIDIA-Cloud-Accelerator-NCX]] - validated cloud partner infrastructure context.
- [[NVIDIA-NIM]], [[NGC]], and [[NVIDIA-NGC-Catalog]] - AI Enterprise application software and containers used in cloud deployments.
- [[NVIDIA-NIM-on-GKE]] - NIM-specific Google Kubernetes Engine deployment guide.
- [[NVIDIA-Container-Toolkit]] and [[NVIDIA-GPU-Operator]] - container/Kubernetes enablement components.
- [[NVIDIA-vGPU]] - virtualization layer relevant to cloud GPU instances.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide when Red Hat AI Factory is the cloud/Kubernetes target.
- [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]] and [[NVIDIA-AI-Enterprise-VMware-Deployment]] - alternative deployment environments.

## Source Excerpts
- The cloud guide lists AWS, Google Cloud, Microsoft Azure, OCI, Alibaba Cloud, and Tencent Cloud as AI Enterprise cloud targets.
- Deployment methods include NVIDIA VMIs, private offer VMIs, GPU-optimized VMIs, managed Kubernetes, and marketplace Red Hat OpenShift.

## Resources
- [NVIDIA AI Enterprise Cloud Deployment Guide](https://docs.nvidia.com/ai-enterprise/deployment/cloud/latest/overview.html)
