# NVIDIA vGPU Software

**Type:** Technology
**Tags:** NVIDIA, vGPU, virtualization, CUDA, virtual desktop, data center
**Related:** [[NVIDIA-CUDA]], [[CUDA-Compatibility]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-vGPU-for-Compute]], [[NVIDIA-Enterprise-Licensing-Guide]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], [[Optimizing-VM-Configuration-for-AI-Inference]], [[NVIDIA-RTX]], [[NVIDIA-MIG]]
**Sources:** https://docs.nvidia.com/cuda/vGPU/index.html, https://docs.nvidia.com/vgpu/index.html, https://docs.nvidia.com/ai-enterprise/deployment/vmware/latest/overview.html, https://docs.nvidia.com/ai-enterprise/planning-resource/optimizing-vm-configuration-ai-inference/latest/introduction.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA vGPU Software virtualizes NVIDIA GPU resources for virtual machines and remote workloads. The CUDA vGPU documentation identifies which vGPU releases support CUDA, while the broader vGPU docs cover the virtualization software stack.

## Detail

### Purpose
Organizations use vGPU to deliver GPU acceleration through virtualized infrastructure for AI development, visualization, virtual workstations, and shared compute environments. CUDA support on vGPU matters when those virtual machines need GPU compute rather than only graphics acceleration.

### Key capabilities
- Virtualized NVIDIA GPU access for supported hypervisors and guest environments.
- Release-specific CUDA support matrix.
- Integration with NVIDIA driver branches and licensing.
- Useful for virtual workstations, managed enterprise environments, and shared infrastructure.

### NVIDIA context
vGPU sits near [[NVIDIA-AI-Enterprise]], [[NVIDIA-RTX]], and enterprise data center drivers. It is distinct from [[NVIDIA-MIG]]: vGPU virtualizes GPUs through hypervisor infrastructure, while MIG partitions supported physical GPUs into hardware-isolated instances.
For AI Enterprise, use [[NVIDIA-vGPU-for-Compute]] for vGPU for Compute modes/features/licensing, [[NVIDIA-AI-Enterprise-VMware-Deployment]] for the VMware/vSphere deployment flow, [[NVIDIA-Enterprise-Licensing-Guide]] for NLS licensing behavior, and [[Optimizing-VM-Configuration-for-AI-Inference]] for topology-aware VM performance guidance.

## Connections
- [[CUDA-Compatibility]] - CUDA applications under vGPU still depend on supported driver/toolkit combinations.
- [[NVIDIA-Data-Center-GPU-Drivers]] - driver release branches determine supported CUDA and vGPU behavior.
- [[NVIDIA-AI-Enterprise]] - enterprise GPU software stack can include virtualized GPU environments.
- [[NVIDIA-vGPU-for-Compute]] - AI Enterprise-specific vGPU virtualization stack for compute VMs.
- [[NVIDIA-Enterprise-Licensing-Guide]] - NLS is required only for vGPU for Compute drivers included with AI Enterprise.
- [[NVIDIA-AI-Enterprise-VMware-Deployment]] - official AI Enterprise deployment guide for vSphere.
- [[Optimizing-VM-Configuration-for-AI-Inference]] - performance paper for topology-aware virtualized AI workloads.
- [[NVIDIA-RTX]] - virtual workstations often target RTX graphics and visualization workloads.
- [[NVIDIA-MIG]] - related but different GPU sharing/isolation technology.

## Source Excerpts
- NVIDIA's CUDA vGPU page documents CUDA support for NVIDIA virtual GPU software releases.
