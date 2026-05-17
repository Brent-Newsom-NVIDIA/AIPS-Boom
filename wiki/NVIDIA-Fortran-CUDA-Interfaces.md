# NVIDIA Fortran CUDA Interfaces

**Type:** Library
**Tags:** NVIDIA, Fortran, CUDA libraries, HPC SDK, CUDA Fortran, OpenACC, OpenMP, cuBLAS, cuFFT, cuRAND, cuSPARSE
**Related:** [[CUDA-Fortran]], [[NVIDIA-HPC-SDK]], [[NVIDIA-HPC-Compilers]], [[NVIDIA-OpenACC]], [[NVIDIA-Stdpar]], [[NVIDIA-CUDA]], [[cuBLAS]], [[cuFFT]], [[cuRAND]], [[cuSPARSE]], [[cuSOLVER]], [[cuTENSOR]], [[NCCL]], [[NVSHMEM]], [[NVTX]]
**Sources:** https://docs.nvidia.com/hpc-sdk/compilers/fortran-cuda-interfaces/frontmatter.html, https://docs.nvidia.com/hpc-sdk/compilers/fortran-cuda-interfaces/iface-introduction.html, https://docs.nvidia.com/hpc-sdk/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Fortran CUDA Interfaces document the NVIDIA-provided Fortran modules and interfaces for calling CUDA libraries from Fortran code. The current docs cover pre-built interface modules for cuBLAS, cuFFT, cuRAND, cuSPARSE, cuSOLVER, cuTENSOR, NCCL, NVSHMEM, NVTX, and related CUDA library calls from [[CUDA-Fortran]], [[NVIDIA-OpenACC]], or OpenMP host code.

## Detail

### Purpose
Fortran HPC applications often need CUDA library performance without rewriting call sites in C or C++. These interfaces let NVIDIA Fortran code call CUDA library functions directly, with module definitions, derived types, enumerations, wrappers, and examples that bridge Fortran language rules to CUDA C library APIs.

### Current scope
- Fortran module and interface reference for CUDA library functions.
- BLAS interfaces for [[cuBLAS]].
- FFT interfaces for [[cuFFT]].
- Random-number interfaces for [[cuRAND]].
- Sparse-matrix interfaces for [[cuSPARSE]].
- Solver interfaces for [[cuSOLVER]].
- Tensor primitive interfaces for [[cuTENSOR]].
- Communication/profiling interfaces for [[NCCL]], [[NVSHMEM]], and [[NVTX]].
- Usage from OpenACC/OpenMP host code and from [[CUDA-Fortran]] host/device contexts.
- Guidance for writing custom CUDA interfaces using `iso_c_binding`, explicit interfaces, and wrapper patterns.

### NVIDIA context
This page complements [[CUDA-Fortran]]. CUDA Fortran explains the programming model, while NVIDIA Fortran CUDA Interfaces explain how Fortran applications call the CUDA library ecosystem once code and data are on the GPU.

## Connections
- [[CUDA-Fortran]] - programming model that uses these library interfaces.
- [[NVIDIA-HPC-SDK]] - documentation and distribution context.
- [[NVIDIA-HPC-Compilers]] - `nvfortran` compiler and module context.
- [[NVIDIA-OpenACC]] - host-data and CUDA stream interoperability path for OpenACC code calling CUDA libraries.
- [[NVIDIA-Stdpar]] - adjacent Fortran/C++ standard parallelism path in the HPC compilers.
- [[cuBLAS]], [[cuFFT]], [[cuRAND]], [[cuSPARSE]], [[cuSOLVER]], and [[cuTENSOR]] - CUDA libraries with Fortran interface coverage.
- [[NCCL]], [[NVSHMEM]], and [[NVTX]] - communication/profiling APIs with Fortran interface coverage.

## Resources
- [Fortran CUDA Interfaces Preface](https://docs.nvidia.com/hpc-sdk/compilers/fortran-cuda-interfaces/frontmatter.html)
- [Fortran CUDA Interfaces Introduction](https://docs.nvidia.com/hpc-sdk/compilers/fortran-cuda-interfaces/iface-introduction.html)
