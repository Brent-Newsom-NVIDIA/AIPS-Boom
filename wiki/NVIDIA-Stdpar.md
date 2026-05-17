# NVIDIA Stdpar

**Type:** Programming Model
**Tags:** NVIDIA, stdpar, C++ parallel algorithms, Fortran DO CONCURRENT, HPC SDK, GPU offload, nvc++, nvfortran
**Related:** [[NVIDIA-HPC-SDK]], [[NVIDIA-HPC-Compilers]], [[NVIDIA-OpenACC]], [[CUDA-Fortran]], [[NVIDIA-CUDA]], [[CUDA-Unified-Memory]], [[Thrust]], [[NVPL]], [[Nsight-Systems]], [[Nsight-Compute]]
**Sources:** https://docs.nvidia.com/hpc-sdk/compilers/hpc-compilers-user-guide/index.html, https://docs.nvidia.com/hpc-sdk/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Stdpar is the standard-language parallelism path in [[NVIDIA-HPC-SDK]] for GPU acceleration through `nvc++` and `nvfortran`. It covers C++17 parallel algorithms with execution policies and Fortran standard parallel constructs such as `DO CONCURRENT`, letting developers express parallelism in standard language syntax while the NVIDIA compilers generate CPU or NVIDIA GPU code.

## Detail

### Purpose
Stdpar is useful when teams want GPU acceleration without adding CUDA kernels or directive regions. The NVIDIA compiler analyzes standard C++/Fortran parallel constructs and generates GPU code, with memory-mode rules and limitations documented in the HPC Compilers User's Guide.

### Current scope
- `nvc++ -stdpar` support for C++17 parallel algorithms using execution policies.
- GPU and multicore CPU compilation modes, including GPU/multicore fallback behavior.
- OpenACC-backed implementation path for selected C++ parallel algorithms through `-stdpar=gpu:acc`.
- Fortran standard parallelism through `nvfortran`, including `DO CONCURRENT` GPU execution and interoperability with OpenACC and CUDA Fortran.
- Managed Memory and Unified Memory guidance for data accessed inside parallel algorithms.
- Device-function inference for functions called from parallel algorithm regions, with external function/device annotation caveats.

### NVIDIA context
NVIDIA Stdpar is distinct from [[CUDA-Fortran]] and [[NVIDIA-OpenACC]]. CUDA Fortran is explicit CUDA programming for Fortran, OpenACC is directive-based offload, and stdpar tries to keep the source closer to standard C++/Fortran while still generating NVIDIA GPU code.

## Connections
- [[NVIDIA-HPC-SDK]] - distribution and documentation hub.
- [[NVIDIA-HPC-Compilers]] - `nvc++` and `nvfortran` implement the stdpar path.
- [[NVIDIA-OpenACC]] - selected C++ parallel algorithms can use an OpenACC implementation path, and stdpar can interoperate with OpenACC data directives.
- [[CUDA-Fortran]] - Fortran stdpar guidance sits beside CUDA Fortran and interoperability examples.
- [[CUDA-Unified-Memory]] - central memory-mode concept for stdpar GPU execution.
- [[Thrust]] - C++ parallel algorithms and GPU execution are conceptually adjacent to Thrust-style parallel primitives.
- [[NVPL]] - CPU-side performance libraries can complement mixed CPU/GPU standard parallel workflows.
- [[Nsight-Systems]] and [[Nsight-Compute]] - profiler context for generated GPU kernels.

## Resources
- [HPC Compilers User's Guide](https://docs.nvidia.com/hpc-sdk/compilers/hpc-compilers-user-guide/index.html)
- [NVIDIA HPC SDK Documentation](https://docs.nvidia.com/hpc-sdk/index.html)
