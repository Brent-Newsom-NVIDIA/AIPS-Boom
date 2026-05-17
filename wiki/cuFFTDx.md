# cuFFTDx

**Type:** Technology
**Tags:** NVIDIA, CUDA, cuFFT, FFT, device library, math, CUDA-X
**Related:** [[cuFFT]], [[NVIDIA-CUDA]], [[CUDA-Cpp-Standard-Library]], [[CUTLASS]], [[cuBLASDx]], [[nvmath-python]]
**Sources:** https://docs.nvidia.com/cuda/cufftdx/index.html
**Last Updated:** 2026-04-29

## Summary
cuFFTDx is NVIDIA's device-side FFT library for building FFT operations directly into CUDA kernels. It complements [[cuFFT]], which provides host-launched FFT plans and execution APIs.

## Detail

### Purpose
Some applications need FFTs fused into larger kernels to reduce memory traffic, launch overhead, or intermediate storage. cuFFTDx addresses that use case by exposing FFT building blocks that can execute inside user-written CUDA kernels.

### Key capabilities
- Device-side FFT primitives for CUDA C++ kernels.
- API, examples, Python bindings, and references in NVIDIA's CUDA documentation.
- Enables custom fusion of FFTs with application-specific math, stencil, signal-processing, or simulation kernels.
- Complements host-level [[cuFFT]] and Python-facing math workflows in [[nvmath-python]].

### NVIDIA context
cuFFTDx fits NVIDIA's broader device-library direction: give expert CUDA developers composable blocks that can be fused into custom kernels rather than forcing every operation through separate library launches.

## Connections
- [[cuFFT]] - host-side FFT library that cuFFTDx complements.
- [[cuBLASDx]] - similar device-side approach for BLAS-like operations.
- [[NVIDIA-CUDA]] - cuFFTDx is part of the CUDA math-library documentation set.
- [[nvmath-python]] - higher-level Python math stack can sit above CUDA-X math libraries.
- [[CUDA-Streams]] - fused kernels can reduce multi-launch stream overhead.

## Source Excerpts
- NVIDIA's cuFFTDx docs include getting started, API reference, Python bindings, and examples.

