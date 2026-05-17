# CUTLASS

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, GEMM, Linear Algebra, C++ Templates, Open Source, Deep Learning, HPC
**Related:** [[cuBLAS]], [[cuDNN]], [[cuTENSOR]], [[TensorRT]], [[CUB]]
**Sources:** NVIDIA official documentation, GitHub
**Last Updated:** 2026-04-09

## Summary
CUTLASS (CUDA Templates for Linear Algebra Subroutines) is NVIDIA's open-source, header-only C++ template library providing reusable abstractions for high-performance GEMM (General Matrix Multiply) and related linear algebra operations on NVIDIA GPUs. It supports all major NVIDIA architectures from Volta through Blackwell, all modern floating-point and integer data types, and achieves 70%+ of theoretical peak throughput. It also includes CuTe, a Python-native DSL for writing custom GPU kernels.

## Detail

### Purpose
cuBLAS and cuDNN provide optimized implementations of standard operations, but researchers and library authors sometimes need to implement custom GEMM variants (e.g., fused operations, non-standard data types, or novel tiling strategies). CUTLASS exposes the hierarchical building blocks of high-performance GEMM — thread blocks, warps, and thread-level tiles — as composable C++ templates, enabling expert GPU programmers to build custom kernels with near-library performance.

### Key Features
- Header-only C++ template library — no separate compilation required
- Hierarchical decomposition of GEMM into thread-block, warp, and thread tile levels
- Data type support: FP64, FP32, TF32, FP16, BF16, FP8 (e5m2, e4m3), block-scaled formats (NVFP4, MXFP4, MXFP6, MXFP8), INT8, INT4
- Tensor Core support across Volta, Turing, Ampere, Hopper, and Blackwell architectures
- Implicit GEMM convolution operations
- Mixed-precision GEMM with configurable accumulator types
- Custom epilogue operations (e.g., ReLU, bias addition fused after GEMM)
- CuTe DSL: Python-native interface for kernel writing without performance compromise
- Achieves 70%+ of theoretical peak GPU throughput
- Requires CUDA 11.4+ (CUDA 12.8 recommended)

### Use Cases
- Custom deep learning layer implementations
- Research into novel matrix multiplication algorithms
- Building framework-level GPU kernels (used internally by TensorRT, cuDNN)
- Structured sparsity and quantized GEMM for inference
- HPC applications requiring custom linear algebra kernels
- Teaching/learning GPU programming architecture

### Hardware Requirements
- NVIDIA GPU: Volta (compute capability 7.0) or newer
- Compiler: C++17 compatible host compiler
- CUDA Toolkit 11.4 minimum; 12.8 recommended
- Blackwell (B100/B200) supported with latest releases

### Language Bindings
- C++ (primary — template-based API)
- Python (CuTe DSL for Python-native kernel writing)

## Connections
- [[cuBLAS]] — CUTLASS provides the open-source building blocks that cuBLAS builds on internally
- [[cuDNN]] — TensorRT and cuDNN use CUTLASS-derived kernels for GEMM operations
- [[cuTENSOR]] — cuTENSOR extends CUTLASS-style abstractions to N-dimensional tensor contractions
- [[TensorRT]] — TensorRT uses CUTLASS for custom kernel generation
- [[CUB]] — CUB provides thread/warp/block-level primitives that complement CUTLASS's GEMM abstractions

## Resources
- [GitHub (Open Source)](https://github.com/NVIDIA/cutlass)
- [CUTLASS Documentation](https://github.com/NVIDIA/cutlass/blob/main/README.md)
