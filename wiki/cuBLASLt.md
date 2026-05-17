# cuBLASLt

**Type:** Technology
**Tags:** NVIDIA, CUDA, cuBLAS, GEMM, Tensor Cores, linear algebra, CUDA-X
**Related:** [[cuBLAS]], [[cuBLASMp]], [[cuBLASXt]], [[cuBLASDx]], [[CUTLASS]], [[TensorRT]], [[TensorRT-LLM]], [[Transformer-Engine]], [[PyTorch]], [[JAX]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/cuda/cublas/index.html#using-the-cublaslt-api
**Last Updated:** 2026-04-29

## Summary
cuBLASLt is NVIDIA's lightweight cuBLAS API dedicated to programmable GEMM operations. It extends the core [[cuBLAS]] dense linear algebra stack with descriptor-driven matrix multiplication, flexible data layouts, mixed and narrow precision support, epilogues, algorithm selection, and heuristic search for Tensor Core-oriented workloads.

## Detail

### Purpose
Standard BLAS calls are intentionally compact, but modern AI and HPC GEMM workloads often need more control over layouts, data types, scaling, epilogues, and algorithm choices. cuBLASLt gives developers a more configurable GEMM interface while keeping execution inside NVIDIA's optimized cuBLAS library path.

### Key capabilities
- Descriptor-based GEMM through matmul, matrix-layout, transform, preference, and algorithm descriptors.
- Heuristic selection APIs for finding suitable GEMM algorithms under workspace, layout, precision, and performance constraints.
- Support for mixed-precision and narrow-precision GEMM, including FP8 and FP4-oriented scaling modes in current CUDA documentation.
- Epilogue options that can fuse common post-GEMM operations such as bias-related transformer patterns.
- Reusable operation descriptions, similar in spirit to planning once and executing repeatedly for matching input shapes.
- Logging and heuristics-cache controls for observability and tuning.

### NVIDIA context
cuBLASLt is one of the central low-level CUDA-X paths behind high-performance transformer and inference stacks. It sits below frameworks and compilers such as [[PyTorch]], [[JAX]], [[TensorRT]], [[TensorRT-LLM]], and [[Transformer-Engine]], while [[CUTLASS]] provides a lower-level template route for custom kernels when library APIs are not enough.

## Connections
- [[cuBLAS]] - cuBLASLt is documented as part of the cuBLAS library and complements the standard cuBLAS API.
- [[cuBLASXt]] - sibling cuBLAS API for single-node multi-GPU BLAS3 execution.
- [[cuBLASMp]] - distributed dense linear algebra path for multi-process systems.
- [[cuBLASDx]] - device-side BLAS path for fusing dense operations into CUDA kernels.
- [[CUTLASS]] - template library for custom GEMM kernels when application-specific tiling or fusion is needed.
- [[TensorRT]] and [[TensorRT-LLM]] - production inference stacks that depend on optimized GEMM and low-precision CUDA math.
- [[Transformer-Engine]] - transformer precision layer adjacent to cuBLASLt FP8/FP4-era GEMM capabilities.
- [[PyTorch]] and [[JAX]] - GPU frameworks whose NVIDIA paths commonly rely on cuBLAS/cuBLASLt through backend libraries and compilers.

## Source Excerpts
- NVIDIA describes cuBLASLt as a lightweight GEMM library with flexible layouts, input and compute types, algorithm selection, and heuristic programmability.
- The current cuBLAS 13.2 documentation lists cuBLASLt alongside the standard cuBLAS API, cuBLASXt, and cuBLASDx.
