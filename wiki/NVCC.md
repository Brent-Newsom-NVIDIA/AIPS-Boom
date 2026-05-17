# NVCC (CUDA Compiler)

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Compiler, Development Tools, Build System, CUDA Toolkit
**Related:** [[NVIDIA-CUDA]], [[CUDA-Programming-Guide]], [[CUDA-Best-Practices-Guide]], [[CUDA-Blackwell-Compatibility-Guide]], [[CUDA-Hopper-Compatibility-Guide]], [[CUDA-Ada-Compatibility-Guide]], [[CUDA-Ampere-Compatibility-Guide]], [[CUDA-Turing-Compatibility-Guide]], [[CUDA-Features-Archive]], [[NVIDIA-HPC-SDK]], [[NVIDIA-HPC-Compilers]], [[CUDA-Fortran]], [[NVRTC]], [[PTX-ISA]], [[Inline-PTX-Assembly]], [[PTX-Interoperability]], [[NVVM-IR]], [[libdevice]], [[nvFatbin]], [[CUDA-Binary-Utilities]], [[CUDA-Compile-Time-Advisor]], [[Floating-Point-and-IEEE-754]], [[CUDA-GDB]], [[Compute-Sanitizer]], [[Nsight-Compute]], [[CUTLASS]]
**Sources:** NVIDIA official documentation (docs.nvidia.com/cuda), https://docs.nvidia.com/cuda/blackwell-compatibility-guide/index.html, https://docs.nvidia.com/cuda/hopper-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ada-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ampere-compatibility-guide/index.html, https://docs.nvidia.com/cuda/turing-compatibility-guide/index.html
**Last Updated:** 2026-04-29

## Summary
NVCC (NVIDIA CUDA Compiler Driver) is the primary compiler for CUDA applications, bundled with the CUDA Toolkit. It accepts CUDA C/C++ source files containing both host (CPU) and device (GPU) code, separates them, and coordinates compilation using the host C++ compiler for CPU code and NVIDIA's PTX assembler/optimizer for GPU code. NVCC is the entry point for building any application that uses CUDA.

## Detail

### Purpose
CUDA programs contain mixed host and device code in the same source file — a syntax extension that standard C++ compilers cannot handle. NVCC splits this mixed code, compiles device code to PTX (an intermediate GPU assembly language) or directly to GPU binary (CUBIN), and links everything together, producing a single executable that runs on both CPU and GPU.

### Key Features
- Compiles CUDA C/C++ source files (.cu) containing both CPU and GPU code
- Generates PTX (Parallel Thread eXecution) intermediate representation
- Compiles PTX to GPU binary (CUBIN) for target GPU architecture
- Support for macro definitions, include/library path configuration
- Compilation steering: device code optimization flags, target architecture specification (-arch, -code)
- Separate compilation mode for large codebases
- Cross-compilation support for embedded targets (Jetson)
- Bundled with the CUDA Toolkit

### Use Cases
- Building any CUDA C/C++ application
- Compiling CUDA libraries and frameworks
- Cross-compiling CUDA code for embedded GPU targets (Jetson)
- Building mixed CPU-GPU HPC applications
- Generating PTX for JIT compilation workflows

### Hardware Requirements
- Host: Linux, Windows, or macOS (host system)
- Target: any NVIDIA GPU (specify via -arch flag)
- Part of CUDA Toolkit (no separate installation)

### Language Bindings
- C and C++ (CUDA dialects)
- Fortran GPU programming is handled by [[CUDA-Fortran]] through the [[NVIDIA-HPC-Compilers]] `nvfortran` compiler rather than NVCC.

## Connections
- [[NVRTC]] — NVRTC provides runtime (JIT) CUDA compilation; NVCC provides ahead-of-time compilation
- [[NVIDIA-HPC-SDK]] - current HPC SDK docs list NVCC beside the `nvc`, `nvc++`, and `nvfortran` compiler family.
- [[NVIDIA-HPC-Compilers]] - adjacent NVIDIA compiler family for C, C++, Fortran, OpenACC, OpenMP, and stdpar workflows.
- [[CUDA-Fortran]] - explicit Fortran CUDA programming model compiled through `nvfortran`.
- [[CUDA-Programming-Guide]] — programming guide covers CUDA compilation workflow and compatibility concepts
- [[CUDA-Best-Practices-Guide]] — best-practices guide documents compiler switches and optimization considerations
- [[CUDA-Blackwell-Compatibility-Guide]], [[CUDA-Hopper-Compatibility-Guide]], [[CUDA-Ada-Compatibility-Guide]], [[CUDA-Ampere-Compatibility-Guide]], and [[CUDA-Turing-Compatibility-Guide]] — architecture guides show how NVCC `-gencode` targets control cubin/PTX compatibility.
- [[CUDA-Features-Archive]] — toolkit feature availability can affect compiler and architecture target planning.
- [[PTX-ISA]] — NVCC can generate PTX as the virtual GPU ISA output
- [[Inline-PTX-Assembly]] — CUDA C++ can include inline PTX assembly accepted by NVCC
- [[PTX-Interoperability]] — PTX generated for linking with other CUDA code must follow ABI expectations
- [[NVVM-IR]] — NVVM IR and compiler SDK components sit underneath CUDA compilation paths
- [[libdevice]] — device-side bitcode library used by CUDA compiler flows
- [[nvFatbin]] — runtime fatbin creation complements offline compiler-produced CUDA binaries
- [[CUDA-Binary-Utilities]] — inspect and manipulate CUDA binary artifacts produced by compiler workflows
- [[CUDA-Compile-Time-Advisor]] — analyzes CUDA C++ compilation-time costs
- [[Floating-Point-and-IEEE-754]] — compiler flags and FMA behavior affect CUDA floating-point results
- [[CUDA-GDB]] — NVCC compiles debug builds that CUDA-GDB then debugs
- [[Compute-Sanitizer]] — Compute Sanitizer instruments NVCC-compiled binaries for error detection
- [[Nsight-Compute]] — Nsight Compute profiles NVCC-compiled CUDA kernels
- [[CUTLASS]] — CUTLASS is a header-only library compiled via NVCC

## Resources
- [NVCC Documentation](https://docs.nvidia.com/cuda/cuda-compiler-driver-nvcc/)
- [CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit)
