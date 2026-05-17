# cuBLASXt

**Type:** Technology
**Tags:** NVIDIA, CUDA, cuBLAS, multi-GPU, BLAS3, linear algebra, CUDA-X
**Related:** [[cuBLAS]], [[cuBLASLt]], [[cuBLASMp]], [[NCCL]], [[NVSHMEM]], [[GPUDirect-RDMA]], [[NVIDIA-HPC-SDK]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/cuda/cublas/index.html#using-the-cublasxt-api
**Last Updated:** 2026-04-29

## Summary
cuBLASXt is NVIDIA's cuBLAS host interface for single-node, multi-GPU BLAS Level 3 operations. It lets applications provide matrices in host memory or participating device memory, select a set of GPUs, and have the library distribute compute-intensive matrix operations across those GPUs.

## Detail

### Purpose
Large dense matrix operations can exceed the practical capacity or throughput of one GPU, but rewriting applications around explicit multi-GPU tiling is expensive. cuBLASXt provides a higher-level host API that manages multi-GPU allocation, transfers, tiling, scheduling, and result collection for supported BLAS3 routines.

### Key capabilities
- Multi-GPU host interface exposed through `cublasXt.h`.
- Supported for compute-intensive BLAS Level 3 and BLAS-like routines where transfer overhead can be amortized.
- User-selected GPU set through cuBLASXt context and device-selection APIs.
- Tiling strategy with user-controllable block dimension and round-robin assignment across GPUs.
- One CPU thread per selected GPU to coordinate transfers and cuBLAS work for that device.
- Optional hybrid CPU-GPU execution controls for supported routines.
- 64-bit platform support requirement in the current NVIDIA documentation.

### NVIDIA context
cuBLASXt occupies the single-node multi-GPU layer of NVIDIA dense linear algebra. It is adjacent to [[cuBLASLt]] for highly tuned GEMM on a library API, [[cuBLASMp]] for distributed multi-process dense linear algebra, and cluster communication layers such as [[NCCL]] and [[NVSHMEM]] when workloads move beyond one host.

## Connections
- [[cuBLAS]] - cuBLASXt is one of the API families exposed by the cuBLAS library.
- [[cuBLASLt]] - sibling API for programmable GEMM and algorithm heuristics.
- [[cuBLASMp]] - multi-process distributed dense linear algebra path beyond cuBLASXt's single-node model.
- [[NCCL]] - collective communication layer commonly used in adjacent multi-GPU workloads.
- [[NVSHMEM]] - GPU-cluster programming model used in scale-out NVIDIA math libraries.
- [[NVIDIA-HPC-SDK]] - packages CUDA math libraries for HPC development and deployment workflows.

## Source Excerpts
- NVIDIA documents cuBLASXt as a multi-GPU capable cuBLAS host interface that dispatches BLAS3 work across selected GPUs.
- The current cuBLAS docs describe cuBLASXt tiling, device selection, CPU-GPU hybrid controls, and supported BLAS3 math functions.
