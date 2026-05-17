# libNVVM

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Compiler, IR, LLVM, Development Tools, CUDA-X
**Related:** [[NVVM-IR]], [[PTX-ISA]], [[NVRTC]], [[NVCC]], [[NVIDIA-HPC-SDK]], [[NVIDIA-HPC-Compilers]], [[CUDA-Fortran]], [[NVIDIA-OpenACC]], [[NVIDIA-Stdpar]], [[nvJitLink]], [[CUDA-Tile-IR]], [[cuTile]], [[CUDA-GDB]]
**Sources:** NVIDIA official documentation, docs.nvidia.com/cuda/libnvvm-samples, https://docs.nvidia.com/cuda/cutile-python/quickstart.html, https://docs.nvidia.com/cuda/tile-ir/latest/index.html
**Last Updated:** 2026-04-09

## Summary
libNVVM is an NVIDIA compiler library that accepts NVVM IR (an LLVM-based intermediate representation) as input and compiles it to PTX (Parallel Thread Execution) assembly for NVIDIA GPUs. It is the compiler backend context used by NVIDIA and other compiler stacks to target NVIDIA GPUs from languages and programming models beyond CUDA C/C++, including [[CUDA-Fortran]], [[NVIDIA-OpenACC]], and [[NVIDIA-Stdpar]] workflows in [[NVIDIA-HPC-SDK]]. libNVVM enables language compilers to generate optimized NVIDIA GPU code without reimplementing GPU-specific optimizations.

## Detail

### Purpose
libNVVM provides compiler and language tool developers with a stable API to the NVIDIA GPU compiler backend. Rather than implementing GPU code generation from scratch, a language compiler can lower its IR to NVVM IR (a subset of LLVM IR with CUDA-specific intrinsics) and hand off to libNVVM for PTX generation. This is how CUDA Fortran and related [[NVIDIA-HPC-Compilers]] GPU-offload paths, Julia's GPU compiler, and various research language compilers target NVIDIA GPUs.

### Key Features
- Accepts NVVM IR (LLVM-based IR with NVIDIA extensions) as input bitcode
- Outputs PTX (Parallel Thread Execution) assembly targeting specified `sm_XX` architecture
- Architecture targeting: supports all CUDA compute capabilities
- Optimization: performs GPU-specific optimizations during PTX generation
- Debug info support: generates PTX with debug information for CUDA-GDB
- Intrinsic support: CUDA-specific intrinsics (warp shuffles, memory fences, special registers)
- `nvvmCreateProgram`, `nvvmAddModuleToProgram`, `nvvmCompileProgram` API
- Error and info log retrieval for diagnostics
- Link-time optimization at the NVVM IR level
- Used internally by NVCC's device compilation pipeline

### Use Cases
- Building GPU-targeting compilers for new or existing programming languages
- Implementing OpenACC/OpenMP/stdpar GPU offload in [[NVIDIA-HPC-Compilers]]
- Julia GPU compiler backend (CUDA.jl uses LLVM's NVPTX backend + libNVVM)
- Python JIT compilers targeting NVIDIA GPUs (Numba's CUDA JIT)
- Research language compilers and DSLs for GPU computing
- Implementing GPU backends for functional languages

### Hardware Requirements
- No GPU hardware required for compilation itself (compilation is CPU-side)
- Generated PTX executes on NVIDIA GPU with appropriate Compute Capability
- Typically bundled with CUDA Toolkit installation

### Language Bindings
- C (primary API)
- C++ (common usage)
- Available to any language with C FFI capability (Python via ctypes, Julia, Rust, etc.)

## Connections
- [[NVRTC]] — NVRTC provides a higher-level runtime compilation API that internally uses libNVVM for code generation
- [[NVCC]] — NVCC's device-side compilation pipeline uses libNVVM as a core compilation step
- [[NVIDIA-HPC-SDK]] and [[NVIDIA-HPC-Compilers]] - compiler stack where CUDA Fortran, OpenACC, OpenMP, and stdpar paths generate NVIDIA GPU code.
- [[CUDA-Fortran]], [[NVIDIA-OpenACC]], and [[NVIDIA-Stdpar]] - programming model pages tied to HPC compiler GPU code generation.
- [[nvJitLink]] — nvJitLink links the PTX/cubin output produced by libNVVM for runtime linking
- [[CUDA-Tile-IR]] — tile-oriented compiler tooling sits adjacent to the NVVM/PTX compiler stack
- [[cuTile]] — cuTile Python with TileIR tooling depends on CUDA compiler/NVVM packages
- [[CUDA-GDB]] — debugging code compiled via libNVVM uses CUDA-GDB with PTX-level debugging

## Resources
- [libNVVM Samples Documentation](https://docs.nvidia.com/cuda/libnvvm-samples/index.html)
- [libNVVM API Reference](https://docs.nvidia.com/cuda/libnvvm-api/index.html)
- [NVVM IR Specification](https://docs.nvidia.com/cuda/nvvm-ir-spec/index.html)
- [CUDA Toolkit Download](https://developer.nvidia.com/cuda-downloads)
