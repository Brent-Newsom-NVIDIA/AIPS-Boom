# CUDA Fortran

**Type:** Programming Model
**Tags:** NVIDIA, CUDA, Fortran, HPC SDK, nvfortran, GPU programming, CUDA Runtime API
**Related:** [[NVIDIA-HPC-SDK]], [[NVIDIA-HPC-Compilers]], [[NVIDIA-Fortran-CUDA-Interfaces]], [[NVIDIA-CUDA]], [[NVCC]], [[CUDA-Programming-Guide]], [[CUDA-Runtime-API]], [[CUDA-Unified-Memory]], [[NVIDIA-OpenACC]], [[NVIDIA-Stdpar]], [[libNVVM]], [[cuBLAS]], [[cuFFT]], [[cuRAND]], [[cuSPARSE]]
**Sources:** https://docs.nvidia.com/hpc-sdk/compilers/cuda-fortran-prog-guide/index.html, https://docs.nvidia.com/hpc-sdk/index.html
**Last Updated:** 2026-04-29

## Summary
CUDA Fortran is NVIDIA's Fortran programming model for CUDA GPUs, delivered through `nvfortran` in [[NVIDIA-HPC-SDK]]. It is a small set of Fortran extensions built on the CUDA computing architecture, giving Fortran developers explicit control over GPU device memory, kernels/subroutines, host-to-device transfers, pinned memory, asynchronous transfers, runtime APIs, and CUDA library interfaces documented separately in [[NVIDIA-Fortran-CUDA-Interfaces]].

## Detail

### Purpose
Many production HPC and scientific codes are written in Fortran. CUDA Fortran lets those applications use explicit CUDA-style GPU programming without rewriting the application into CUDA C++. It is lower-level than [[NVIDIA-OpenACC]] directives, but gives expert Fortran programmers direct control over GPU memory, execution, and runtime behavior.

### Current scope
- Declaring variables allocated in GPU device memory.
- Allocating dynamic memory in GPU memory.
- Copying data between host memory and GPU memory.
- Writing Fortran subroutines/functions that execute on the GPU.
- Invoking GPU subroutines from the host.
- Allocating pinned host memory.
- Using asynchronous host/GPU transfers.
- CUDA Runtime API interface coverage, CUDA graph APIs, managed memory examples, WMMA/Tensor Core examples, and OpenACC interoperability examples.
- Linux support through the NVIDIA HPC compilers on x86-64 and Arm server platforms.

### NVIDIA context
CUDA Fortran is part of the HPC SDK compiler stack. It sits beside CUDA C++/[[NVCC]] for explicit GPU programming, [[NVIDIA-OpenACC]] for directive-based offload, and [[NVIDIA-Stdpar]] for standard-language parallelism.

## Connections
- [[NVIDIA-HPC-SDK]] - distribution and documentation hub for CUDA Fortran.
- [[NVIDIA-HPC-Compilers]] - `nvfortran` compiler context.
- [[NVIDIA-Fortran-CUDA-Interfaces]] - CUDA library modules/interfaces used from Fortran code.
- [[NVIDIA-CUDA]] - CUDA computing architecture and runtime underneath CUDA Fortran.
- [[CUDA-Runtime-API]] - CUDA Fortran exposes runtime API interfaces.
- [[CUDA-Unified-Memory]] - managed/unified memory concepts appear in CUDA Fortran and adjacent HPC compiler docs.
- [[NVIDIA-OpenACC]] - directive model that interoperates with CUDA Fortran.
- [[NVIDIA-Stdpar]] - standard Fortran parallelism path adjacent to explicit CUDA Fortran.
- [[libNVVM]] - compiler backend context for GPU code generation.
- [[cuBLAS]], [[cuFFT]], [[cuRAND]], and [[cuSPARSE]] - CUDA library families with Fortran interface documentation in the HPC SDK.

## Resources
- [CUDA Fortran Programming Guide](https://docs.nvidia.com/hpc-sdk/compilers/cuda-fortran-prog-guide/index.html)
- [NVIDIA HPC SDK Documentation](https://docs.nvidia.com/hpc-sdk/index.html)
