# CUB

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Parallel Primitives, C++, Templates, Low-Level, HPC
**Related:** [[Thrust]], [[CUTLASS]], [[cuBLAS]], [[cuDF]]
**Sources:** NVIDIA official documentation, GitHub
**Last Updated:** 2026-04-09

## Summary
CUB is NVIDIA's C++ template library providing reusable, optimized cooperative primitives for CUDA programming across all levels of the GPU hierarchy — thread, warp, block, and device-wide. It is now maintained as part of the unified NVIDIA CCCL (C++ Core Compute Libraries) repository alongside Thrust and libcu++. CUB is included in the CUDA Toolkit and NVIDIA HPC SDK, and serves as the foundation upon which Thrust and many other GPU libraries are built.

## Detail

### Purpose
Efficient GPU programming requires careful management of data across threads, warps, and thread blocks. CUB provides reusable, architecture-aware implementations of common parallel patterns (sort, scan, reduce, histogram) at each level of the GPU hierarchy, so developers don't need to re-implement these primitives from scratch. It is the "assembly language" of parallel GPU algorithms — Thrust sits above CUB, and CUB sits above raw CUDA kernels.

### Key Features
- **Device-wide primitives**: sort, prefix scan, reduction, histograms (compatible with CUDA dynamic parallelism)
- **Block-level collective operations**: data loading/storing, sorting, scanning, reducing across thread blocks
- **Warp-level primitives**: prefix scans and reductions at warp granularity
- **Utility components**: PTX intrinsics, device introspection, memory allocators, texture-caching iterators
- Architecture-aware and safe implementations (optimized per GPU generation)
- Now part of NVIDIA CCCL (unified with Thrust and libcu++)
- Included in CUDA Toolkit 12.0+ (CUB 2.0.1)
- Compiler support: NVCC 11.0+, GCC 5+, Clang 7+, MSVC 2019+

### Use Cases
- Building custom GPU library kernels requiring efficient parallel reductions/scans
- Performance-critical CUDA kernel development
- Implementing histogram and sort operations at scale
- Foundation for higher-level libraries (Thrust, cuDF, cuML)
- Research into novel GPU parallel algorithms

### Hardware Requirements
- NVIDIA GPU with CUDA support
- CUDA Toolkit 11.0+; CUDA 12.0 recommended
- All modern NVIDIA GPU architectures (Volta through Blackwell)

### Language Bindings
- C++ (template library — primary interface)

## Connections
- [[Thrust]] — Thrust is built on CUB; CUB provides the underlying block/device primitives Thrust uses
- [[CUTLASS]] — CUTLASS and CUB are complementary low-level GPU libraries in the CCCL ecosystem
- [[cuDF]] — RAPIDS cuDF uses CUB device-wide primitives for sort, scan, and reduction operations
- [[cuBLAS]] — cuBLAS uses CUB-like primitives internally for GPU memory management

## Resources
- [NVIDIA CCCL GitHub](https://github.com/NVIDIA/cccl)
- [Legacy CUB GitHub](https://github.com/NVIDIA/cub)
- [CUB Documentation](https://nvlabs.github.io/cub/)
