# NCCL

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Collective Communications, Distributed Training, Multi-GPU, HPC, RDMA
**Related:** [[cuDNN]], [[TensorRT]], [[NVSHMEM]], [[NVIDIA-HPC-X]], [[NVIDIA-DOCA-OFED]], [[DOCA-GPUNetIO]], [[DOCA-RDMA]], [[NVIDIA-MLNX-OFED]], [[GPUDirect-RDMA]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Quantum-InfiniBand]], [[cuBLAS]], [[Thrust]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
NCCL (NVIDIA Collective Communications Library) is NVIDIA's library implementing high-performance multi-GPU and multi-node collective communication primitives (all-reduce, all-gather, broadcast, reduce, reduce-scatter) optimized for NVIDIA GPU interconnects. It automatically detects system topology (PCIe, NVLink, NVSwitch, InfiniBand, RoCE) and selects optimal ring/tree algorithms, making it the standard communication backend for distributed deep learning training in PyTorch, TensorFlow, JAX, and other frameworks.

## Detail

### Purpose
Distributed deep learning requires frequent synchronization of model gradients and activations across GPUs (all-reduce for data parallelism, all-gather for tensor parallelism). Doing this efficiently requires knowledge of the physical interconnect topology. NCCL abstracts this complexity, automatically optimizing communication patterns for any hardware configuration while providing a simple C API.

### Key Features
- Collective operations: all-reduce, all-gather, broadcast, reduce, reduce-scatter
- Point-to-point send/receive capabilities
- Device APIs: communication directly from CUDA kernels for lower latency
- Automatic topology detection: PCIe, NVLink, NVSwitch, InfiniBand, RoCE
- Advanced graph algorithms for optimal ring and tree construction
- Plugin framework for custom network transports
- Integration points with [[NVIDIA-HPC-X]] through NCCL-RDMA-SHARP and Spectrum-X NCCL plugin guidance
- Multi-node networking depends on a working host-driver stack such as current [[NVIDIA-DOCA-OFED]] or legacy [[NVIDIA-MLNX-OFED]], plus [[GPUDirect-RDMA]] when GPU memory is registered directly with the NIC
- Support for multi-threaded, multi-process, and MPI-driven applications
- Built-in profiling: NCCL RAS (Remote Access Service) and NCCL Inspector
- Simple C API following MPI conventions

### Use Cases
- Distributed data-parallel training (all-reduce for gradient synchronization)
- Tensor-parallel LLM training (all-gather for weight gathering)
- Pipeline-parallel training communication
- Distributed inference serving with tensor parallelism
- HPC multi-GPU scientific simulations

### Hardware Requirements
- NVIDIA GPU with CUDA support
- NVLink for intra-node GPU communication (V100, A100, H100, B100)
- NVSwitch for full all-to-all intra-node bandwidth (DGX systems)
- InfiniBand or RoCE for inter-node communication
- Supports all NVIDIA data center GPUs

### Language Bindings
- C (primary API, MPI-convention compatible)
- Python (via PyTorch distributed, Horovod, other frameworks)

## Connections
- [[cuDNN]] — deep learning frameworks use both cuDNN (compute) and NCCL (communication)
- [[TensorRT]] — multi-GPU TensorRT inference uses NCCL for tensor parallelism
- [[NVSHMEM]] — NVSHMEM is NCCL's complement: NCCL for collective ops, NVSHMEM for fine-grained PGAS communication
- [[NVIDIA-HPC-X]] — HPC-X includes NCCL-RDMA-SHARP and Spectrum-X NCCL plugin material for NVIDIA fabrics
- [[NVIDIA-DOCA-OFED]] — current Linux host networking stack for NCCL over InfiniBand or RoCE.
- [[DOCA-GPUNetIO]] — current DOCA docs mention NCCL GIN transport enabled through GPUNetIO GPU communications.
- [[DOCA-RDMA]] — DOCA RDMA is part of the adjacent NVIDIA RDMA application programming surface.
- [[NVIDIA-MLNX-OFED]] — legacy standalone Linux OFED stack for older NCCL/RDMA deployments.
- [[GPUDirect-RDMA]] — direct GPU-to-NIC data path used by NCCL for inter-node collectives.
- [[NVIDIA-Spectrum-X]] — Spectrum-X is NVIDIA's Ethernet AI networking path for NCCL over RoCE environments
- [[NVIDIA-Quantum-InfiniBand]] — Quantum InfiniBand provides SHARP and low-latency fabric support for NCCL collectives
- [[cuBLAS]] — cuBLAS handles per-GPU compute; NCCL handles the synchronization between GPUs

## Resources
- [Official Page](https://developer.nvidia.com/nccl)
- [NCCL Documentation](https://docs.nvidia.com/deeplearning/nccl/)
- [NCCL GitHub](https://github.com/NVIDIA/nccl)
