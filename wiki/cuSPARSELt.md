# cuSPARSELt

**Type:** Technology
**Tags:** NVIDIA, CUDA, sparse linear algebra, structured sparsity, matrix multiplication, Tensor Cores
**Related:** [[cuSPARSE]], [[cuBLAS]], [[CUTLASS]], [[TensorRT]], [[NVIDIA-Hopper-Architecture]], [[NVIDIA-Blackwell-Architecture]]
**Sources:** https://docs.nvidia.com/cuda/cusparselt/index.html
**Last Updated:** 2026-04-29

## Summary
cuSPARSELt is NVIDIA's CUDA library for structured sparse matrix-matrix multiplication. It targets operations where at least one operand uses a 50 percent structured sparsity pattern, enabling sparse acceleration paths on supported NVIDIA GPUs.

## Detail

### Purpose
Structured sparsity can reduce compute and memory pressure in matrix multiplication while preserving hardware-friendly layout. cuSPARSELt exposes APIs to configure sparse GEMM operations, data types, layouts, algorithms, and epilogues.

### Key capabilities
- Structured sparse matrix-matrix multiplication.
- API flexibility for operation selection, epilogues, memory layout, alignment, and data types.
- Built for CUDA and Tensor Core oriented acceleration.
- Relevant to AI inference/training optimization when models or weights use supported sparsity.

### NVIDIA context
cuSPARSELt complements [[cuSPARSE]] for sparse operations and [[cuBLAS]]/[[CUTLASS]] for dense GEMM. It is part of the CUDA-X math stack for performance engineers targeting modern NVIDIA GPU architectures.

## Connections
- [[cuSPARSE]] - broader sparse matrix library.
- [[cuBLAS]] - dense GEMM baseline and adjacent math library.
- [[CUTLASS]] - custom GEMM kernels and structured-sparsity experimentation.
- [[TensorRT]] - optimized inference may benefit from structured sparsity in supported paths.
- [[NVIDIA-Hopper-Architecture]] and [[NVIDIA-Blackwell-Architecture]] - current Tensor Core generations are central to sparse-math performance.

## Source Excerpts
- NVIDIA describes cuSPARSELt as a CUDA library for matrix-matrix operations with structured sparse operands.

