# NVIDIA Network Operator

**Type:** Tool
**Tags:** NVIDIA, Kubernetes, networking, RDMA, GPUDirect RDMA, DOCA-OFED, SR-IOV, CNI, IPAM, Spectrum-X
**Related:** [[NVIDIA-DOCA]], [[NVIDIA-DOCA-OFED]], [[OVS-DOCA]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Cloud-Native-Technologies]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-Spectrum-X]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Enterprise-Reference-Architectures]], [[GPUDirect-RDMA]], [[NVIDIA-Dynamo]], [[NIXL]]
**Sources:** https://docs.nvidia.com/networking/software/cloud-orchestration/index.html; https://docs.nvidia.com/networking/display/kubernetes2610/index.html; https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/network-operator.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Network Operator is the Kubernetes operator for provisioning and managing NVIDIA networking resources in GPU and AI clusters. It installs the host networking software needed for RDMA, GPUDirect RDMA, SR-IOV, secondary networks, CNI plugins, IPAM, and [[NVIDIA-DOCA-OFED]] driver management. It works alongside [[NVIDIA-GPU-Operator]] so scale-out GPU workloads can receive both accelerated compute resources and accelerated network resources through Kubernetes-native control.

## Detail
The current NVIDIA docs hub lists Network Operator v26.1.0 as the latest public documentation line. NVIDIA describes the operator as a Helm-deployed Kubernetes component that brings together the networking driver, device plugin, CNI plugins, IPAM plugin, and other components needed for high-speed network connectivity on NVIDIA-enabled nodes.

Network Operator is not a replacement for GPU Operator. It is the networking-side companion: GPU Operator manages GPU drivers, device plugins, DCGM, MIG, and container runtime integration, while Network Operator manages NIC/DPU-facing software for RDMA, SR-IOV, host device networks, MacVLAN networks, IP over InfiniBand, and other secondary-network patterns. Together they provide the cluster substrate for distributed training, inference, storage, and data processing workloads.

The current docs call out four major feature areas: RDMA support across InfiniBand and RoCE, SR-IOV virtualization for hardware-isolated virtual functions, secondary networks for specialized workloads, and automated NVIDIA DOCA-OFED driver deployment with version control and updates. The v26.1.0 documentation also includes NIC Configuration Operator content, Spectrum-X-specific NIC configuration, and tech-preview Kubernetes Launch Kit assistance for generating cluster deployment files.

For NVIDIA AI infrastructure, Network Operator matters because [[NCCL]], [[NVSHMEM]], [[NVIDIA-HPC-X]], MPI, and storage applications depend on predictable, low-latency network access. Kubernetes clusters running multi-node GPU jobs need a declarative way to expose that hardware without one-off node setup.

The [[Red-Hat-AI-Factory-with-NVIDIA]] guide treats Network Operator as optional when a cluster does not have NVIDIA networking devices or does not require multi-node high-speed networking. For larger distributed inference paths, including llm-d or [[NVIDIA-Dynamo]] with [[NIXL]], the guide notes that GPUDirect with RDMA can be highly beneficial even when it is not a hard requirement.

## Connections
- [[NVIDIA-DOCA]] - Network Operator manages DOCA-OFED driver containers and related host networking software.
- [[NVIDIA-DOCA-OFED]] - Network Operator's managed NVIDIA host-driver surface for RDMA, RoCE, and GPUDirect networking.
- [[OVS-DOCA]] - accelerated Open vSwitch deployments use the same BlueField/NIC and representor foundation that Kubernetes networking must manage.
- [[NVIDIA-GPU-Operator]] - complementary Kubernetes operator for GPU lifecycle and GPU resource exposure.
- [[NVIDIA-Cloud-Native-Technologies]] - cloud-native hub page for Kubernetes GPU and networking deployment patterns.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide that uses Network Operator for high-speed NVIDIA networking.
- [[NVIDIA-BlueField-DPU]] - BlueField DPUs can be managed as part of accelerated Kubernetes networking environments.
- [[NVIDIA-ConnectX-InfiniBand]] - ConnectX adapters provide the RDMA and RoCE hardware exposed by Network Operator.
- [[NVIDIA-Spectrum-X]] - current docs include Spectrum-X NIC configuration paths for RA2.1-style clusters.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - software RA lists Network Operator as core infrastructure software.
- [[NVIDIA-Enterprise-Reference-Architectures]] - current Enterprise RAs depend on Kubernetes networking for GPU scale-out fabrics.
- [[GPUDirect-RDMA]] - Network Operator enables the RDMA plumbing used by GPUDirect workloads.
- [[NVIDIA-Dynamo]] and [[NIXL]] - distributed inference paths benefit from the high-speed networking configured by Network Operator.

## Source Excerpts
- "The NVIDIA Network Operator simplifies the provisioning and management of NVIDIA networking resources in a Kubernetes cluster."
- "The NVIDIA Network Operator works in conjunction with the NVIDIA GPU Operator."
- NVIDIA's Red Hat AI Factory guide says GPUDirect with RDMA can benefit large llm-d or Dynamo/NIXL inference workloads.
