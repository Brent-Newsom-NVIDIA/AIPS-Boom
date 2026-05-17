# CUDA Blackwell Compatibility Guide

**Type:** Guide
**Tags:** NVIDIA, CUDA, Blackwell, compatibility, PTX, cubin, NVCC, compute capability
**Related:** [[CUDA-Compatibility]], [[CUDA-Blackwell-Tuning-Guide]], [[NVIDIA-Blackwell-Architecture]], [[CUDA-Programming-Guide]], [[CUDA-Best-Practices-Guide]], [[NVCC]], [[PTX-ISA]]
**Sources:** https://docs.nvidia.com/cuda/blackwell-compatibility-guide/index.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Blackwell Compatibility Guide is NVIDIA's application note for making CUDA applications run correctly on Blackwell GPUs. It focuses on how cubin and PTX targets behave across compute capabilities, how to verify forward compatibility with PTX JIT, and how to build applications with native Blackwell support.

## Detail

### Purpose
CUDA applications can carry native cubin code and/or forward-compatible PTX. The Blackwell guide explains when an existing application can run unchanged on Blackwell and when it must be rebuilt to include compatible native cubins or PTX. It is especially relevant for application owners moving pre-Blackwell binaries onto B100/B200/GB200/GB300 systems.

### Key guidance
- Include PTX in application binaries to preserve forward compatibility across newer architectures.
- Use `CUDA_FORCE_PTX_JIT=1` to test whether an application can JIT from PTX on Blackwell.
- Native Blackwell cubins avoid startup JIT overhead and may expose architecture-specific performance.
- Architecture-conditional targets such as `sm_100a` / `compute_100a` are special-purpose and are not broadly forward/backward compatible.
- Build configurations should use explicit `-gencode` targets when multiple GPU generations must be supported.

### NVIDIA context
This guide complements [[CUDA-Compatibility]], which covers driver/toolkit compatibility, and [[CUDA-Blackwell-Tuning-Guide]], which covers performance tuning once an application runs correctly on Blackwell.

## Connections
- [[CUDA-Compatibility]] - driver/toolkit compatibility is separate from architecture binary compatibility.
- [[CUDA-Blackwell-Tuning-Guide]] - tuning guide assumes the application has been built to run on Blackwell.
- [[NVIDIA-Blackwell-Architecture]] - architecture page for Blackwell platform context.
- [[CUDA-Programming-Guide]] - detailed compilation and programming model reference.
- [[NVCC]] - compiler driver used for `-gencode` and architecture targets.
- [[PTX-ISA]] - PTX is the forward-compatible intermediate form discussed by the guide.

## Source Excerpts
- NVIDIA's guide explains cubin/PTX compatibility and recommends including PTX for forward compatibility on Blackwell.
- It documents `CUDA_FORCE_PTX_JIT=1` as a verification method and describes native Blackwell build targets.

## Resources
- [CUDA Blackwell Compatibility Guide](https://docs.nvidia.com/cuda/blackwell-compatibility-guide/index.html)
