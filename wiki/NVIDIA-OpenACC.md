# NVIDIA OpenACC

**Type:** Programming Model
**Tags:** NVIDIA, OpenACC, HPC SDK, GPU offload, compiler directives, Fortran, C, C++, CUDA
**Related:** [[NVIDIA-HPC-SDK]], [[NVIDIA-HPC-Compilers]], [[CUDA-Fortran]], [[NVIDIA-Fortran-CUDA-Interfaces]], [[NVIDIA-Stdpar]], [[NVIDIA-CUDA]], [[CUDA-Unified-Memory]], [[CUDA-Compatibility]], [[CUDA-Graphs]], [[Nsight-Systems]], [[Nsight-Compute]]
**Sources:** https://docs.nvidia.com/hpc-sdk/compilers/openacc-gs/index.html, https://docs.nvidia.com/hpc-sdk/compilers/hpc-compilers-user-guide/index.html, https://docs.nvidia.com/hpc-sdk/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA OpenACC refers to the OpenACC implementation and guidance in [[NVIDIA-HPC-SDK]]. OpenACC itself is an industry-standard directive API, while NVIDIA's docs show how to build and run OpenACC Fortran, C, and C++ programs with the NVIDIA HPC compilers, targeting NVIDIA GPUs or multicore CPUs.

## Detail

### Purpose
OpenACC helps existing scientific and HPC applications offload loops and code regions to GPUs with compiler directives instead of a full CUDA rewrite. NVIDIA's implementation matters because it lets Fortran, C, and C++ applications use GPU acceleration through `nvfortran`, `nvc++`, and `nvc` while still interoperating with CUDA memory/runtime behavior where needed.

### Current scope
- Enable OpenACC with the `-acc` compiler option.
- Target NVIDIA GPUs by default, or use `-acc=multicore` and `-acc=host` for CPU/host paths.
- Use `-gpu` suboptions to control CUDA version, compute capability targets, memory mode, and code generation.
- NVIDIA HPC SDK 26.3 includes CUDA Toolkit 12.9U1 and CUDA 13.0 components for compiler-selected GPU code generation.
- Current docs cover CUDA version/driver matching, compute capability targeting, PTX JIT compilation, C structs/classes, atomics, declare-data handling, error handling, runtime routines, profiling, and limitations.

### NVIDIA context
This page is intentionally about NVIDIA's OpenACC implementation in the HPC SDK, not the OpenACC standard as a whole. It connects CUDA compatibility, compiler targets, driver/toolkit matching, and profiler visibility to directive-based GPU offload.

## Connections
- [[NVIDIA-HPC-SDK]] - distribution and documentation hub.
- [[NVIDIA-HPC-Compilers]] - compiler family that implements OpenACC.
- [[CUDA-Fortran]] - explicit Fortran CUDA model that can interoperate with OpenACC workflows.
- [[NVIDIA-Fortran-CUDA-Interfaces]] - documents how OpenACC host code can pass device pointers to CUDA library calls.
- [[NVIDIA-Stdpar]] - standard-language parallelism path that can interoperate with OpenACC data directives.
- [[NVIDIA-CUDA]] - GPU runtime and toolkit layer underneath OpenACC offload.
- [[CUDA-Unified-Memory]] - memory mode used by OpenACC guidance.
- [[CUDA-Compatibility]] - driver/toolkit matching matters for OpenACC-generated GPU code.
- [[CUDA-Graphs]] - current HPC compiler docs include OpenACC and CUDA Graphs context.
- [[Nsight-Systems]] and [[Nsight-Compute]] - profiling tools for OpenACC-generated kernels.

## Resources
- [OpenACC Getting Started Guide](https://docs.nvidia.com/hpc-sdk/compilers/openacc-gs/index.html)
- [HPC Compilers User's Guide](https://docs.nvidia.com/hpc-sdk/compilers/hpc-compilers-user-guide/index.html)
