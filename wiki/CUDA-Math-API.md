# CUDA Math API

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Math, Device Functions, Intrinsics, Development Tools, CUDA-X
**Related:** [[NVCC]], [[NVRTC]], [[Floating-Point-and-IEEE-754]], [[cuBLAS]], [[Thrust]], [[CUB]]
**Sources:** NVIDIA official documentation, docs.nvidia.com/cuda/cuda-math-api
**Last Updated:** 2026-04-29

## Summary
The CUDA Math API is a collection of GPU device-side mathematical functions available to CUDA C/C++ kernel code, providing hardware-accelerated implementations of standard single- and double-precision floating-point math functions (sin, cos, exp, log, sqrt, etc.), half-precision (FP16) and brain float (BF16) math, as well as intrinsic functions that trade accuracy for speed. These functions are compiled directly into GPU device code and execute at hardware-native speeds using NVIDIA's Special Function Units (SFUs) and FPUs, forming the mathematical foundation for all CUDA kernel programming.

## Detail

### Purpose
The CUDA Math API provides the fundamental mathematical building blocks that all GPU kernels rely on for numerical computation. Without device-side math functions, writing physics simulations, signal processing algorithms, neural network activations, and scientific computing kernels would require manual GPU-specific implementations of basic math operations. The CUDA Math API provides IEEE-compliant and faster approximate variants of all standard math functions.

### Key Features
- Standard math functions: `sin`, `cos`, `tan`, `exp`, `log`, `pow`, `sqrt`, `cbrt`, `fabs`, `ceil`, `floor`, `round`, `fma`
- Single precision (`float`): full IEEE 754 compliant and `__` intrinsic fast variants
- Double precision (`double`): full IEEE 754 compliant implementations
- Half precision (`__half`, `__half2`): FP16 math functions for inference-optimized kernels
- Brain float (`__nv_bfloat16`, `__nv_bfloat162`): BF16 math functions for training kernels
- Intrinsic functions: `__sinf`, `__cosf`, `__expf`, `__logf` — faster, slightly less accurate
- Transcendental functions: `erfc`, `erf`, `lgamma`, `tgamma`, `j0`, `j1`, `jn`
- Integer math: `__clz`, `__popc`, `__ffs`, `__brev`, `__byte_perm` (bit manipulation)
- Warp-level math: `__shfl_sync`, `__any_sync`, `__all_sync`, `__ballot_sync`
- Type conversion intrinsics between FP32/FP16/BF16/INT
- FMA (fused multiply-add): `fma`, `fmaf` for maximum precision and speed

### Use Cases
- Scientific simulation kernels (fluid dynamics, molecular dynamics, finite element)
- Neural network activation functions (sigmoid, tanh, GELU, ReLU) in custom kernels
- Signal processing kernels (FFT butterfly operations, filter coefficients)
- Statistical sampling and Monte Carlo simulation
- Computer graphics shaders and ray tracing kernels
- Any CUDA kernel requiring mathematical computations

### Hardware Requirements
- Available on all NVIDIA CUDA-capable GPUs (Compute Capability 1.0+)
- FP16 (`__half`) requires Compute Capability 5.3+ (Maxwell)
- BF16 (`__nv_bfloat16`) requires Compute Capability 8.0+ (Ampere)
- Special Function Units (SFUs) on all CUDA GPUs accelerate transcendental functions

### Language Bindings
- CUDA C/C++ (device-side only, available in `__device__` and `__global__` functions)
- Available automatically when compiling with NVCC
- Header: `<math.h>` or `<cmath>` in CUDA device code

## Connections
- [[NVCC]] — CUDA Math API functions are compiled into device code by NVCC
- [[NVRTC]] — runtime-compiled CUDA kernels access CUDA Math API via NVRTC compilation
- [[Floating-Point-and-IEEE-754]] — numerical behavior guide for CUDA floating-point functions and FMA
- [[cuBLAS]] — cuBLAS kernels internally use CUDA Math API for numerical operations
- [[Thrust]] — Thrust device-side transforms and reductions use CUDA Math API functions
- [[CUB]] — CUB cooperative primitives employ CUDA Math API for warp/block-level computations

## Resources
- [CUDA Math API Documentation](https://docs.nvidia.com/cuda/cuda-math-api/index.html)
- [CUDA C Programming Guide — Math Functions](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#mathematical-functions)
- [CUDA Toolkit Documentation](https://docs.nvidia.com/cuda/)
