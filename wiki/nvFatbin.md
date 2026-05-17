# nvFatbin

**Type:** Technology
**Tags:** NVIDIA, CUDA, fatbin, runtime compilation, module loading, compiler SDK
**Related:** [[NVIDIA-CUDA]], [[CUDA-Driver-API]], [[PTX-ISA]], [[NVRTC]], [[nvJitLink]], [[NVCC]]
**Sources:** https://docs.nvidia.com/cuda/nvfatbin/index.html
**Last Updated:** 2026-04-29

## Summary
nvFatbin is a CUDA library for creating CUDA fat binaries at runtime. It lets applications package multiple device-code variants, such as cubin, PTX, or LTO-IR inputs, into a fatbin that can later be loaded through the [[CUDA-Driver-API]].

## Detail

### Purpose
CUDA applications sometimes need to generate or assemble GPU code dynamically while still preserving architecture-specific variants. nvFatbin provides API-level control over building those fatbins without relying only on offline toolchain steps.

### Key capabilities
- Runtime creation of CUDA fat binaries.
- Inputs can include device cubins, [[PTX-ISA]], or LTO-IR.
- Output can be loaded with Driver API module-loading routines.
- Useful for applications that want architecture-specific optimized variants for Hopper, Blackwell, or other GPUs.

### NVIDIA context
nvFatbin complements [[NVRTC]], [[nvJitLink]], and [[PTX-Compiler-APIs]] in dynamic GPU-code generation systems. It is especially relevant to frameworks, DSLs, inference runtimes, and plugin systems that compile or specialize GPU kernels at runtime.

## Connections
- [[CUDA-Driver-API]] - loads fatbins created by nvFatbin.
- [[NVRTC]] - can generate PTX inputs for runtime packaging.
- [[nvJitLink]] - handles runtime device-code linking before or alongside packaging flows.
- [[PTX-ISA]] - PTX can be one of the input forms.
- [[NVCC]] - offline compilation still produces related CUDA binary artifacts.

## Source Excerpts
- NVIDIA's nvFatbin guide describes runtime fatbin creation for multiple CUDA source variants.

