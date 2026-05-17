# NVIDIA vGPU for Compute

**Type:** Infrastructure Software
**Tags:** NVIDIA, vGPU for Compute, AI Enterprise, virtualization, MIG, NLS, VMware, KVM, GPU partitioning
**Related:** [[NVIDIA-vGPU]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Software]], [[NVIDIA-AI-Enterprise-Infrastructure-Support-Matrix]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], [[NVIDIA-Enterprise-Licensing-Guide]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-MIG]], [[GPUDirect-RDMA]], [[GPU-Direct-Storage]], [[NVLink]], [[NVIDIA-DCGM]], [[NVIDIA-Container-Toolkit]]
**Sources:** https://docs.nvidia.com/ai-enterprise/release-8/8.0/infra-software/vgpu.html, https://docs.nvidia.com/ai-enterprise/release-8/8.0/infra-software/vgpu/overview.html, https://docs.nvidia.com/ai-enterprise/release-8/8.0/infra-software/vgpu/features.html, https://docs.nvidia.com/ai-enterprise/release-8/latest/infra-software/vgpu/licensing.html, https://docs.nvidia.com/ai-enterprise/release-8/latest/support/support-matrix-8/8.0.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA vGPU for Compute is the AI Enterprise-licensed virtualization stack for sharing NVIDIA GPUs across virtual machines for AI training, fine-tuning, inference, ML, and HPC workloads. It uses a hypervisor-host NVIDIA Virtual GPU Manager plus guest drivers, supports time-sliced vGPU, MIG-backed vGPU, and time-sliced MIG-backed vGPU modes, and relies on the NVIDIA License System for vGPU VM licensing.

## Detail

### Purpose
Use this page for AI Enterprise vGPU for Compute behavior, modes, features, licensing, and virtualization limitations. Use [[NVIDIA-vGPU]] for the broader vGPU product concept and [[NVIDIA-AI-Enterprise-VMware-Deployment]] for the VMware deployment guide.

### Virtualization modes
- Time-sliced vGPU: multiple compute VMs time-share a physical GPU with memory/fault isolation and scheduled compute access.
- MIG-backed vGPU: MIG-capable GPUs expose GPU instances to VMs for spatial isolation and more predictable performance.
- Time-sliced MIG-backed vGPU: multiple vGPUs time-share within a MIG instance; current docs call out Blackwell RTX PRO server GPUs for this dense multi-tenant mode.

### Feature surface
- MIG-backed vGPU for hardware-level partitioning and isolation.
- Device Groups for topology-aware provisioning of connected devices.
- GPUDirect RDMA and GPUDirect Storage data paths.
- Heterogeneous vGPU profiles on a single GPU.
- Live Migration, Suspend-Resume, and warm operational workflows where supported.
- Multi-vGPU and peer-to-peer communication.
- NVSwitch, NVLink Multicast, and scheduling policies for virtualized GPU clusters.
- Unified Virtual Memory for CUDA programming in guest environments.

### Licensing and limitations
- vGPU for Compute is licensed through NVIDIA AI Enterprise.
- The NVIDIA License System enforces licensing for vGPU for Compute VMs.
- An unlicensed vGPU for Compute VM starts at full capability and then enters a degraded performance state after a short grace period until a valid license is acquired.
- Current licensing guidance says each NVIDIA C-series vGPU on a VM needs its own license from the NVIDIA Licensing System.
- DCGM is not supported on vGPU hypervisor hosts or inside guest VMs for MIG-backed or time-sliced vGPU environments.
- Some large-memory VMs require increased MMIO space for GPUs such as B300 HGX, B200 HGX, H200/H100/H800/H20, L40/L20/L4/L2, RTX Ada, A40/A30/A10/A100, RTX A-series, and V100 families.
- Windows guest VMs support native applications only; containerization-dependent AI Enterprise features are not supported on Windows guest OSes.

### NVIDIA context
The Infra 8.0 support matrix lists NVIDIA vGPU for Compute Virtual GPU Manager and Guest Drivers 20.0 as supported. Check [[NVIDIA-AI-Enterprise-Infrastructure-Support-Matrix]] before planning a deployment because platform, hypervisor, guest OS, GPU architecture, and feature support vary.

## Connections
- [[NVIDIA-vGPU]] - broader virtual GPU software context.
- [[NVIDIA-AI-Enterprise]] - vGPU for Compute is licensed through AI Enterprise.
- [[NVIDIA-AI-Enterprise-Software]] - infrastructure-layer software catalog that includes vGPU for Compute.
- [[NVIDIA-AI-Enterprise-Infrastructure-Support-Matrix]] - release-specific support and compatibility checks.
- [[NVIDIA-AI-Enterprise-VMware-Deployment]] - deployment path that uses vGPU/vSphere guidance.
- [[NVIDIA-Enterprise-Licensing-Guide]] - NLS and AI Enterprise license behavior for vGPU for Compute.
- [[NVIDIA-Data-Center-GPU-Drivers]] - driver branch alignment matters for host and guest drivers.
- [[NVIDIA-MIG]] - hardware partitioning foundation for MIG-backed vGPU modes.
- [[GPUDirect-RDMA]], [[GPU-Direct-Storage]], and [[NVLink]] - data movement and interconnect features exposed where supported, including NVSwitch-backed platforms.
- [[NVIDIA-DCGM]] - relevant because current docs call out DCGM limitations in vGPU environments.
- [[NVIDIA-Container-Toolkit]] - Linux guest/container workflows depend on container runtime support where supported.

## Source Excerpts
- The AI Enterprise vGPU page states vGPU for Compute is licensed only through NVIDIA AI Enterprise.
- The overview describes time-sliced, MIG-backed, and time-sliced MIG-backed vGPU modes.
- The licensing page explains NLS enforcement and degraded behavior when a vGPU for Compute VM is unlicensed.

## Resources
- [NVIDIA AI Enterprise and NVIDIA vGPU for Compute](https://docs.nvidia.com/ai-enterprise/release-8/8.0/infra-software/vgpu.html)
- [NVIDIA vGPU for Compute Overview](https://docs.nvidia.com/ai-enterprise/release-8/8.0/infra-software/vgpu/overview.html)
- [NVIDIA vGPU for Compute Features](https://docs.nvidia.com/ai-enterprise/release-8/8.0/infra-software/vgpu/features.html)
- [NVIDIA vGPU for Compute Licensing](https://docs.nvidia.com/ai-enterprise/release-8/latest/infra-software/vgpu/licensing.html)
- [AI Enterprise Infra 8.0 Support Matrix](https://docs.nvidia.com/ai-enterprise/release-8/latest/support/support-matrix-8/8.0.html)
