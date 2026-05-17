# NVIDIA HPC Compilers

**Type:** Tool
**Tags:** NVIDIA, HPC SDK, compiler, nvc, nvc++, nvfortran, CUDA, OpenACC, OpenMP, stdpar, Fortran, C, C++
**Related:** [[NVIDIA-HPC-SDK]], [[CUDA-Fortran]], [[NVIDIA-Fortran-CUDA-Interfaces]], [[NVIDIA-OpenACC]], [[NVIDIA-Stdpar]], [[NVIDIA-CUDA]], [[NVCC]], [[libNVVM]], [[NVVM-IR]], [[PTX-ISA]], [[CUDA-Unified-Memory]], [[Nsight-Compute]], [[Nsight-Systems]]
**Sources:** https://docs.nvidia.com/hpc-sdk/compilers/hpc-compilers-user-guide/index.html, https://docs.nvidia.com/hpc-sdk/compilers/hpc-compilers-ref-guide/index.html, https://docs.nvidia.com/hpc-sdk/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA HPC Compilers are the Fortran, C++, and C compiler family inside [[NVIDIA-HPC-SDK]]. The current docs identify NVFORTRAN (`nvfortran`), NVC++ (`nvc++`), and NVC (`nvc`) as compilers for NVIDIA GPUs and x86-64/Arm server CPUs, with support for CUDA-oriented programming, OpenACC, OpenMP, standard parallelism, optimization flags, MPI workflows, and deployment guidance.

## Detail

### Purpose
Large HPC applications rarely move to GPUs through CUDA C++ alone. The NVIDIA HPC compilers let scientific codes keep Fortran, C, and C++ source structure while using GPU offload through [[CUDA-Fortran]], [[NVIDIA-OpenACC]], OpenMP target directives, or [[NVIDIA-Stdpar]]. They also provide the command-line optimization, linking, runtime, and deployment controls needed for production HPC builds.

### Current compiler commands
- `nvfortran`: NVIDIA Fortran compiler for NVIDIA GPUs and AMD, Intel, and Arm CPUs; supports ISO Fortran 2003, many Fortran 2008 features, CUDA Fortran, OpenACC, OpenMP, and Fortran standard parallel language features.
- `nvc++`: NVIDIA C++17 compiler for NVIDIA GPUs and AMD, Intel, and Arm CPUs; supports C++17 parallel algorithms, OpenACC, and OpenMP.
- `nvc`: NVIDIA C11 compiler for NVIDIA GPUs and AMD, Intel, and Arm CPUs; supports OpenACC GPU programming and multicore CPU programming through OpenACC/OpenMP.
- [[NVCC]]: CUDA C/C++ compiler driver listed alongside the HPC compiler family in the current HPC SDK docs.

### Current scope
- Command-line options, filename conventions, data types, platform considerations, site/user rc files, and common build tasks.
- GPU execution model, memory models, compute capability targeting, CUDA toolkit selection, and PTX JIT compilation.
- OpenACC, OpenMP, stdpar C++/Fortran, MPI, library creation/linking, environment variables, and redistribution.
- Reference details for compiler options, language extensions, runtime environment, C++ dialect support, intrinsics, and messages.

## Connections
- [[NVIDIA-HPC-SDK]] - parent SDK documentation surface.
- [[CUDA-Fortran]] - explicit Fortran CUDA programming model compiled by `nvfortran`.
- [[NVIDIA-Fortran-CUDA-Interfaces]] - Fortran modules and interfaces for CUDA library calls.
- [[NVIDIA-OpenACC]] - directive-based GPU offload path supported by `nvc`, `nvc++`, and `nvfortran`.
- [[NVIDIA-Stdpar]] - C++ and Fortran standard parallelism path in NVIDIA compilers.
- [[NVCC]] - CUDA C/C++ compiler driver adjacent to the HPC compiler family.
- [[libNVVM]], [[NVVM-IR]], and [[PTX-ISA]] - compiler backend and virtual ISA context for GPU code generation.
- [[CUDA-Unified-Memory]] - memory mode used by OpenACC/OpenMP/stdpar guidance.
- [[Nsight-Compute]] and [[Nsight-Systems]] - profiler/debugger context for compiler-generated GPU code.

## Resources
- [HPC Compilers User's Guide](https://docs.nvidia.com/hpc-sdk/compilers/hpc-compilers-user-guide/index.html)
- [HPC Compilers Reference Guide](https://docs.nvidia.com/hpc-sdk/compilers/hpc-compilers-ref-guide/index.html)
- [NVIDIA HPC SDK Documentation](https://docs.nvidia.com/hpc-sdk/index.html)
