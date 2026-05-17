# NVIDIA HPC SDK

**Type:** Platform
**Tags:** NVIDIA, HPC SDK, compilers, CUDA, Fortran, OpenACC, OpenMP, stdpar, math libraries, HPC
**Related:** [[NVIDIA-HPC-Compilers]], [[CUDA-Fortran]], [[NVIDIA-Fortran-CUDA-Interfaces]], [[NVIDIA-OpenACC]], [[NVIDIA-Stdpar]], [[NVIDIA-CUDA]], [[NVCC]], [[NVPL]], [[cuFFTMp]], [[cuTENSORMg]], [[cuTENSORMp]], [[NVIDIA-HPC-X]], [[NCCL]], [[NVSHMEM]], [[NVTX]], [[CUDA-GDB]], [[Nsight-Compute]], [[Nsight-Systems]], [[Compute-Sanitizer]], [[NGC]]
**Sources:** https://docs.nvidia.com/hpc-sdk/index.html, https://docs.nvidia.com/hpc-sdk/compilers/hpc-compilers-user-guide/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA HPC SDK is NVIDIA's current software development kit for accelerated HPC applications. The 26.3 documentation hub organizes HPC compilers, programming models, math libraries, communication libraries, debugging/profiling tools, container guidance, and CUDA documentation into one SDK surface for scientists and engineers building on NVIDIA GPUs and Arm/x86 server CPUs.

## Detail

### Purpose
HPC codes often combine Fortran, C, C++, MPI, OpenACC/OpenMP directives, CUDA, math libraries, profiling tools, and deployment scripts. NVIDIA HPC SDK packages those pieces into one supported developer stack so teams can port, optimize, profile, and deploy CPU/GPU HPC applications without assembling separate compiler and library ecosystems manually.

### Current scope
- [[NVIDIA-HPC-Compilers]]: `nvc`, `nvc++`, `nvfortran`, and [[NVCC]] documentation.
- Programming models: C++ parallel algorithms/stdpar, CUDA C++, [[CUDA-Fortran]], [[NVIDIA-Fortran-CUDA-Interfaces]], [[NVIDIA-OpenACC]], and OpenMP.
- Math libraries: [[cuBLAS]], [[cuBLASMp]], [[cuTENSOR]], [[cuTENSORMg]], [[cuTENSORMp]], [[cuSPARSE]], [[cuSOLVER]], [[cuSOLVERMp]], [[cuFFT]], [[cuFFTMp]], [[cuRAND]], and [[NVPL]].
- Communication libraries: [[NCCL]], [[NVSHMEM]], and [[NVIDIA-HPC-X]] MPI.
- Tools: [[CUDA-GDB]], [[Nsight-Compute]], [[Nsight-Systems]], [[Compute-Sanitizer]], and [[NVTX]].
- Containerization through the HPC SDK container guide and [[NGC]].

### NVIDIA context
HPC SDK is the bridge between low-level CUDA and large scientific/HPC application development. It keeps CUDA and CUDA-X libraries close to NVIDIA compilers, directive programming, Fortran support, MPI/communication stacks, and profiler/debugger tooling.

## Connections
- [[NVIDIA-HPC-Compilers]] - compiler family inside the SDK.
- [[CUDA-Fortran]] - explicit CUDA programming model for Fortran developers in the SDK.
- [[NVIDIA-Fortran-CUDA-Interfaces]] - Fortran modules and interfaces for CUDA libraries.
- [[NVIDIA-OpenACC]] - NVIDIA HPC compiler implementation of OpenACC GPU offload.
- [[NVIDIA-Stdpar]] - standard-language parallelism path in `nvc++` and `nvfortran`.
- [[NVIDIA-CUDA]] - core GPU computing platform underneath the SDK.
- [[NVCC]] - CUDA C/C++ compiler driver also listed from the HPC SDK docs.
- [[NVPL]] - CPU math library collection included in the current SDK documentation hub.
- [[cuFFTMp]] - distributed multi-process FFT library distributed through HPC SDK.
- [[cuTENSORMg]] and [[cuTENSORMp]] - cuTENSOR multi-GPU and distributed tensor contraction paths.
- [[NCCL]], [[NVSHMEM]], and [[NVIDIA-HPC-X]] - communication stack for multi-GPU and multi-node HPC jobs.
- [[CUDA-GDB]], [[Nsight-Compute]], [[Nsight-Systems]], and [[Compute-Sanitizer]] - development and profiling tools exposed through the SDK.
- [[NGC]] - container distribution context for SDK and HPC software.

## Resources
- [NVIDIA HPC SDK Documentation](https://docs.nvidia.com/hpc-sdk/index.html)
- [NVIDIA HPC Compilers User's Guide](https://docs.nvidia.com/hpc-sdk/compilers/hpc-compilers-user-guide/index.html)
