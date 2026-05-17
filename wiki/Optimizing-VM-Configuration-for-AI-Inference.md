# Optimizing VM Configuration for AI Inference

**Type:** White Paper
**Tags:** NVIDIA, virtual machines, AI inference, HGX, H200, KVM, topology, passthrough, NUMA, NCCL
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], [[NVIDIA-vGPU]], [[NVIDIA-HGX]], [[NVIDIA-Certified-Systems]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-NIM]], [[TensorRT-LLM]], [[NCCL]], [[GPUDirect-RDMA]], [[NVLink]], [[PyTorch]], [[TensorFlow-GPU]]
**Sources:** https://docs.nvidia.com/ai-enterprise/planning-resource/optimizing-vm-configuration-ai-inference/latest/introduction.html
**Last Updated:** 2026-04-29

## Summary
Optimizing VM Configuration for AI Inference is NVIDIA's white paper for topology-aware VM configuration when AI/ML workloads run on virtualized HGX systems. It explains how GPU, NIC, PCIe, NVLink, and NUMA topology visibility affects distributed training and inference performance, using an 8-GPU H200 HGX system with full GPU/NIC passthrough on a Red Hat Enterprise Linux KVM hypervisor as the reference environment.

## Detail

### Purpose
Virtualization can hide or distort the physical relationship between GPUs, NICs, PCIe switches, NVLink, and NUMA nodes. AI frameworks and communication libraries need accurate topology information to choose efficient data paths. The white paper provides configuration guidance so virtualized workloads can approach bare-metal performance.

### Scope
- System setup and installation for virtualized AI workloads.
- VM configuration for GPU and NIC passthrough.
- Preserving topological awareness inside the guest VM.
- Day-2 operations for maintaining the virtualized AI stack.
- Known limitations and appendices.
- Target workloads include AI inference, ML training, NVIDIA NIMs, TensorFlow, PyTorch, and custom AI applications.

### NVIDIA context
Use this page for performance-sensitive virtualized AI systems, especially HGX/H200-class nodes with GPU and NIC passthrough. Use [[NVIDIA-AI-Enterprise-VMware-Deployment]] for VMware deployment steps and [[NVIDIA-vGPU]] for vGPU partitioning/product concepts.

## Connections
- [[NVIDIA-AI-Enterprise]] - software stack used for virtualized AI workloads.
- [[NVIDIA-AI-Enterprise-VMware-Deployment]] - adjacent AI Enterprise virtualization guide.
- [[NVIDIA-vGPU]] - GPU virtualization context, distinct from full passthrough tuning.
- [[NVIDIA-HGX]] - HGX/H200-class system context for the paper.
- [[NVIDIA-Certified-Systems]] - target infrastructure for enterprise virtualized AI deployments.
- [[NVIDIA-Data-Center-GPU-Drivers]] - host and guest driver layer.
- [[NVIDIA-NIM]] and [[TensorRT-LLM]] - representative inference workloads that need topology-aware performance.
- [[NCCL]], [[GPUDirect-RDMA]], and [[NVLink]] - communication and topology elements affected by VM mapping.
- [[PyTorch]] and [[TensorFlow-GPU]] - frameworks named as examples of workloads that consume topology information.

## Source Excerpts
- The paper targets near bare-metal performance for distributed ML training and AI inference in virtualized AI/ML workloads.
- It uses an 8-GPU H200 HGX system with full GPU and NIC passthrough on a RHEL KVM hypervisor as the reference setup.

## Resources
- [Optimizing VM Configuration for Performant AI Inference](https://docs.nvidia.com/ai-enterprise/planning-resource/optimizing-vm-configuration-ai-inference/latest/introduction.html)
