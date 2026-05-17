# NVRTC

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Runtime Compilation, JIT, Development Tools, CUDA Toolkit
**Related:** [[NVCC]], [[CUDA-Python]], [[cuda-core]], [[cuda-bindings]], [[cuda-compute]], [[CUTLASS]], [[Thrust]], [[cuBLAS]]
**Sources:** NVIDIA official documentation (docs.nvidia.com/cuda), https://nvidia.github.io/cuda-python/cuda-core/latest/getting-started.html, https://nvidia.github.io/cuda-python/cuda-bindings/latest/overview.html, https://nvidia.github.io/cccl/python/compute
**Last Updated:** 2026-04-29

## Summary
NVRTC (NVIDIA Runtime Compilation) is a CUDA library for just-in-time (JIT) compilation of CUDA C++ source code at application runtime. It accepts CUDA C++ source code as a character string and produces PTX (Parallel Thread eXecution) output that can be loaded and executed via the CUDA Driver API. NVRTC enables dynamic kernel specialization, plugin architectures, and scenarios where GPU kernels must be generated or customized at runtime.

## Detail

### Purpose
NVCC compiles CUDA kernels ahead of time, but some applications need to generate GPU kernels dynamically — for example, to specialize kernels to specific data sizes, fuse operations based on runtime conditions, or support user-defined extensions. NVRTC enables this by embedding a CUDA C++ compiler in the application, allowing GPU kernels to be compiled and launched from string representations at runtime.

### Key Features
- Runtime compilation of CUDA C++ source code strings
- Generates PTX intermediate representation for target GPU
- Integrates with CUDA Driver API for PTX loading and execution
- Enables kernel specialization based on runtime parameters
- Supports CUDA C++ language features in runtime-compiled code
- Lightweight compiler interface via simple C API
- Used by cuFFT, cuDNN, and other NVIDIA libraries for specialized kernel generation

### Use Cases
- Dynamic kernel generation based on problem size or data type
- Plugin architectures requiring user-defined GPU operations
- JIT-compiled DSLs (domain-specific languages) targeting GPU
- Auto-tuning frameworks that generate and benchmark kernel variants
- Interactive GPU computing environments (Jupyter notebooks with custom CUDA)
- Fused operation generation for performance optimization

### Hardware Requirements
- NVIDIA GPU with CUDA support
- CUDA Toolkit (NVRTC is bundled with it)
- Host system: Linux, Windows, or macOS

### Language Bindings
- C (NVRTC API)
- C++ (CUDA C++ dialect for compiled code)
- Python (via CuPy and other Python wrappers)
- CUDA Python components such as [[cuda-core]] and [[cuda-bindings]]

## Connections
- [[NVCC]] — NVCC performs ahead-of-time compilation; NVRTC performs runtime (JIT) compilation of the same CUDA C++ language
- [[CUDA-Python]] — Python CUDA workflows often need runtime compilation and module loading.
- [[cuda-core]] and [[cuda-bindings]] — Python components that expose higher-level and lower-level runtime compilation workflows.
- [[cuda-compute]] — CCCL Python algorithms may compile user-defined operations for device execution.
- [[CUTLASS]] — CuTe DSL and CUTLASS use NVRTC for JIT kernel compilation
- [[cuFFT]] — cuFFT uses NVRTC internally to generate specialized FFT kernels at runtime
- [[cuDNN]] — cuDNN uses NVRTC for runtime kernel generation for optimal layer fusion

## Resources
- [NVRTC Documentation](https://docs.nvidia.com/cuda/nvrtc/)
- [CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit)
