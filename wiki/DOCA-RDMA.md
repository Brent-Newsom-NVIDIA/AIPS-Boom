# DOCA RDMA

**Type:** Library
**Tags:** NVIDIA, DOCA, RDMA, InfiniBand, RoCE, BlueField, ConnectX, GPUDirect RDMA, memory access
**Related:** [[NVIDIA-DOCA]], [[NVIDIA-DOCA-OFED]], [[NVIDIA-MLNX-OFED]], [[DOCA-GPUNetIO]], [[DOCA-DPA]], [[DOCA-Flow]], [[DOCA-SNAP]], [[DOCA-Device-Emulation]], [[GPUDirect-RDMA]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-HPC-X]], [[NCCL]], [[NVSHMEM]]
**Sources:** https://docs.nvidia.com/doca/sdk/doca-rdma/index.html; https://docs.nvidia.com/doca/sdk/index.html; https://docs.nvidia.com/doca/sdk/general-support/index.html
**Last Updated:** 2026-04-29

## Summary
DOCA RDMA is the DOCA library for remote direct memory access. It exposes asynchronous RDMA operations through the DOCA Core context model so applications can access remote memory over InfiniBand or RoCE with low latency, high bandwidth, and reduced CPU/OS involvement. It is the DOCA page for direct memory movement, RDMA tasks, remote sync events, DPA/GPU datapath options, and BlueField/ConnectX RDMA programming.

## Detail
The current DOCA RDMA guide describes RDMA as direct access to remote machine memory without involving the remote CPU or operating system. The library exposes receive, send, send-with-immediate, write, write-with-immediate, read, atomic compare-and-swap, atomic fetch-and-add, and remote DOCA Sync Event tasks.

DOCA RDMA applications can run on a host machine or on the NVIDIA BlueField networking platform. Architecturally, a DOCA RDMA instance has two connected sides. Applications create DOCA devices, memory maps, buffer inventories, and buffers; grant the needed memory permissions; establish connections directly or with RDMA CM; submit asynchronous tasks; and handle task events. The connection can be InfiniBand or Ethernet using RoCE.

This page complements [[GPUDirect-RDMA]] rather than replacing it. GPUDirect RDMA is the GPU-to-NIC technology and driver capability; DOCA RDMA is a DOCA API for building applications that issue RDMA operations on NVIDIA networking devices. It is also adjacent to [[DOCA-DPA]] because DPA samples can use an RDMA DOCA device and to [[DOCA-GPUNetIO]] because GPUNetIO exposes GPU-centric networking paths.

## Connections
- [[NVIDIA-DOCA]] - DOCA RDMA is a DOCA SDK library.
- [[NVIDIA-DOCA-OFED]] - current Linux host driver stack for RDMA-capable NVIDIA networking.
- [[NVIDIA-MLNX-OFED]] - legacy standalone OFED stack for older RDMA deployments.
- [[DOCA-GPUNetIO]] - GPU-centric packet processing uses RDMA and GPU networking building blocks.
- [[DOCA-DPA]] - DPA samples and DPA datapaths can attach to DOCA RDMA contexts.
- [[DOCA-Flow]] - packet steering and flow actions complement RDMA application data paths.
- [[DOCA-SNAP]] - SNAP storage virtualization can use RDMA-capable fabrics for storage transport.
- [[DOCA-Device-Emulation]] - emulated PCIe devices can redirect I/O through RDMA/Ethernet data paths.
- [[GPUDirect-RDMA]] - DOCA RDMA can participate in the same direct GPU-to-network memory ecosystem.
- [[NVIDIA-ConnectX-InfiniBand]] - ConnectX devices supply the RDMA hardware.
- [[NVIDIA-BlueField-DPU]] - DOCA RDMA can run on BlueField networking platforms.
- [[NVIDIA-HPC-X]] - MPI/UCX/UCC stacks depend on related RDMA transport capabilities.
- [[NCCL]] - NCCL uses RDMA/verbs paths for inter-node collectives.
- [[NVSHMEM]] - NVSHMEM builds a GPU PGAS programming model on RDMA-style transport.

## Source Excerpts
- "DOCA RDMA ... enables applications to directly access the memory of remote machines."
- "The connection ... can either be based on InfiniBand ... or RoCE."
