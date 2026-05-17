# cuBLASMp

**Type:** Technology
**Tags:** NVIDIA, CUDA, cuBLAS, distributed linear algebra, dense matrices, multi-process, HPC
**Related:** [[cuBLAS]], [[NCCL]], [[NVSHMEM]], [[NVPL]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/cuda/cublasmp/index.html
**Last Updated:** 2026-04-29

## Summary
cuBLASMp is NVIDIA's multi-process, GPU-accelerated library for distributed dense linear algebra. It provides PBLAS-like C APIs and supports 2D block-cyclic data layouts used in distributed-memory numerical computing.

## Detail

### Purpose
Single-GPU and single-process BLAS are not enough for very large dense problems or tensor-parallel workloads. cuBLASMp extends NVIDIA dense linear algebra into distributed, multi-process settings for HPC and large-scale AI systems.

### Key capabilities
- Distributed dense linear algebra over multiple processes and GPUs.
- 2D block-cyclic data layout compatibility.
- PBLAS-like C API surface for distributed BLAS-style operations.
- Availability through NVIDIA Developer Zone, NVIDIA HPC SDK, PyPI, and conda-forge.
- Documented use for tensor parallelism in distributed machine learning.

### NVIDIA context
cuBLASMp connects CUDA-X math libraries with scale-out systems such as [[NVIDIA-DGX-SuperPOD]], InfiniBand-backed clusters, and model-parallel AI training/inference workflows.

## Connections
- [[cuBLAS]] - single-process dense BLAS foundation that cuBLASMp extends to distributed settings.
- [[cuSOLVERMp]] - companion distributed dense solver/eigensolver library.
- [[NCCL]] - collective communication often appears in the same distributed GPU systems.
- [[NVSHMEM]] - another GPU-cluster programming model for distributed memory systems.
- [[NVIDIA-DGX-SuperPOD]] - target class of scale-out NVIDIA GPU infrastructure.

## Source Excerpts
- NVIDIA describes cuBLASMp as a high-performance multi-process GPU library for distributed dense linear algebra.

