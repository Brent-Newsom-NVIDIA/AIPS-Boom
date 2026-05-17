# DOCA GPUNetIO

**Type:** Library
**Tags:** NVIDIA, DOCA, GPUNetIO, GPU networking, GPUDirect RDMA, GPUDirect Async, BlueField, ConnectX, CUDA, packet processing
**Related:** [[NVIDIA-DOCA]], [[DOCA-RDMA]], [[DOCA-Flow]], [[DOCA-DPA]], [[GPUDirect-RDMA]], [[NCCL]], [[NIXL]], [[NVIDIA-AI-Aerial]], [[NVIDIA-Holoscan]], [[NVIDIA-NVQLink]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-ConnectX-InfiniBand]]
**Sources:** https://docs.nvidia.com/doca/sdk/doca-gpunetio/index.html; https://docs.nvidia.com/doca/sdk/index.html; https://docs.nvidia.com/doca/sdk/changes-and-new-features/index.html
**Last Updated:** 2026-04-29

## Summary
DOCA GPUNetIO is the DOCA library for GPU-centric network packet processing. It combines [[GPUDirect-RDMA]], GPU kernel-initiated networking, GDRCopy-style CPU access to GPU memory, and NVIDIA BlueField DMA capabilities so packets can be received, processed, and transmitted with less CPU involvement. It is the DOCA page to use for GPU packet processing, GPU-controlled Ethernet/RDMA operations, and low-latency network pipelines that connect CUDA kernels directly to NVIDIA networking.

## Detail
The current DOCA 3.3.0 docs frame GPUNetIO as a way to remove the CPU from the critical path for network packet processing. Traditional GPUDirect RDMA designs can still rely on the CPU to coordinate NIC receive operations and notify CUDA kernels. GPUNetIO moves more of that control path into the GPU, including GPU-controlled Ethernet communication, GPU-controlled RDMA communication over InfiniBand or RoCE, GPU-triggered BlueField DMA copies, low-latency semaphores, aligned GPU memory allocation, and timestamp-controlled packet transmission.

NVIDIA lists several application domains and downstream users for the library: signal processing, network security, information gathering, input reconstruction, [[NVIDIA-AI-Aerial]], [[NIXL]], [[NVIDIA-Holoscan]], [[NVIDIA-NVQLink]], UCX GDAKI support, and [[NCCL]] GIN transport. That makes GPUNetIO a high-value bridge between CUDA packet processing and infrastructure software such as [[NVIDIA-DOCA]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-ConnectX-InfiniBand]], and [[DOCA-RDMA]].

In DOCA 3.3.0, NVIDIA notes added DGX Spark content for GPUNetIO documentation, ConnectX-8 reliable doorbell support for GPUNetIO/Verbs integrations, UDP receive-bandwidth measurement in the GPU packet processing application, and expanded packet-generator instructions. This wiki page should stay focused on GPUNetIO itself, not every demo or build that references it.

## Connections
- [[NVIDIA-DOCA]] - GPUNetIO is a DOCA SDK library for GPU-network data paths.
- [[DOCA-RDMA]] - GPUNetIO integrates with RDMA over InfiniBand/RoCE and GPU datapath patterns.
- [[DOCA-Flow]] - GPU packet-processing apps can combine GPUNetIO with DOCA Flow and DOCA Ethernet.
- [[DOCA-DPA]] - DPA is the adjacent BlueField execution engine for communication-centric offload.
- [[GPUDirect-RDMA]] - GPUNetIO builds on direct NIC-to-GPU memory access.
- [[NCCL]] - current docs mention NCCL GIN transport enabled through GPUNetIO GPU communications.
- [[NIXL]] - NVIDIA lists NIXL as a GPUNetIO-using application for inference transfer paths.
- [[NVIDIA-AI-Aerial]] - AI-RAN packet and signal-processing workloads are a stated GPUNetIO application domain.
- [[NVIDIA-Holoscan]] - real-time sensor and network packet processing can use GPUNetIO-style GPU networking.
- [[NVIDIA-NVQLink]] - NVIDIA docs list NVQLink as a GPUNetIO-related application.
- [[NVIDIA-BlueField-DPU]] - BlueField DMA and networking capabilities are part of the GPUNetIO execution model.
- [[NVIDIA-ConnectX-InfiniBand]] - ConnectX NICs provide the host/network hardware behind GPUNetIO data paths.

## Source Excerpts
- "DOCA GPUNetIO enables real-time GPU processing for network packets."
- "CPU intervention is unnecessary in the application critical path."

