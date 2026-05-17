# cuBLASDx

**Type:** Technology
**Tags:** NVIDIA, CUDA, cuBLAS, BLAS, device library, linear algebra, CUDA-X
**Related:** [[cuBLAS]], [[NVIDIA-CUDA]], [[CUTLASS]], [[cuFFTDx]], [[CUDA-Cpp-Standard-Library]], [[nvmath-python]]
**Sources:** https://docs.nvidia.com/cuda/cublasdx/
**Last Updated:** 2026-04-29

## Summary
cuBLASDx is NVIDIA's device-side BLAS-style library for integrating dense linear algebra operations into CUDA kernels. It complements [[cuBLAS]], which provides host-launched BLAS APIs for GPU-accelerated dense linear algebra.

## Detail

### Purpose
Applications sometimes need BLAS-like operations fused with custom CUDA computation to avoid extra launches or memory round trips. cuBLASDx provides device-callable building blocks for those expert CUDA workflows.

### Key capabilities
- Device-side dense linear algebra operations for CUDA C++ kernels.
- Documentation includes getting started material, API reference, Python information, examples, and references.
- Useful when developers want library-grade math blocks inside custom kernels.
- Adjacent to [[CUTLASS]] for custom GEMM construction and [[cuBLAS]] for full library APIs.

### NVIDIA context
cuBLASDx reflects NVIDIA's move toward composable device libraries for high-performance fused kernels, especially relevant to AI, HPC, and simulation workloads that mix standard math operations with custom code.

## Connections
- [[cuBLAS]] - host-level BLAS library complemented by cuBLASDx.
- [[CUTLASS]] - template library for building custom matrix-multiply kernels.
- [[cuFFTDx]] - sibling device-side math library for FFT operations.
- [[nvmath-python]] - Python-facing NVIDIA math package can expose CUDA-X math capabilities at a higher level.
- [[NVIDIA-CUDA]] - cuBLASDx appears in CUDA math-library documentation.

## Source Excerpts
- NVIDIA's cuBLASDx docs provide getting started, API reference, Python, examples, and references sections.

