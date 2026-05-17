# cuSOLVERMp

**Type:** Technology
**Tags:** NVIDIA, CUDA, cuSOLVER, distributed linear algebra, dense solvers, eigenvalues, HPC
**Related:** [[cuSOLVER]], [[cuBLASMp]], [[NCCL]], [[NVSHMEM]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/cuda/cusolvermp/index.html
**Last Updated:** 2026-04-29

## Summary
cuSOLVERMp is NVIDIA's distributed-memory, GPU-accelerated dense linear solver and eigensolver library. It provides ScaLAPACK-like C APIs for solving dense linear systems and eigenvalue problems using distributed 2D block-cyclic data layouts.

## Detail

### Purpose
Large dense linear systems can exceed the memory or performance envelope of a single GPU or process. cuSOLVERMp brings NVIDIA GPU acceleration to distributed dense solver workflows common in HPC, engineering simulation, and scientific computing.

### Key capabilities
- Distributed dense linear-system and eigenvalue solvers.
- 2D block-cyclic data layout compatibility.
- ScaLAPACK-like C APIs for easier mapping from traditional HPC workflows.
- Availability through NVIDIA Developer Zone, NVIDIA HPC SDK, PyPI for CUDA 12/13, and conda.
- Designed for multi-process, multi-GPU environments.

### NVIDIA context
cuSOLVERMp complements [[cuBLASMp]] in the distributed dense linear algebra stack and connects CUDA-X math libraries to large NVIDIA GPU clusters.

## Connections
- [[cuSOLVER]] - single-node solver library that cuSOLVERMp extends to distributed-memory settings.
- [[cuBLASMp]] - companion distributed dense BLAS library.
- [[NVIDIA-DGX-SuperPOD]] - representative scale-out platform for distributed solvers.
- [[NCCL]] - common communication layer in multi-GPU systems.
- [[NVPL]] - CPU-side math libraries for Grace can coexist with GPU distributed solvers.

## Source Excerpts
- NVIDIA describes cuSOLVERMp as a distributed-memory GPU library for dense linear systems and eigenvalue problems.

