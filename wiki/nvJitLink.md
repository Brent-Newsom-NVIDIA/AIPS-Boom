# nvJitLink

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Compilation, JIT, Linking, Development Tools, CUDA-X
**Related:** [[NVRTC]], [[NVCC]], [[libNVVM]], [[CUDA-GDB]]
**Sources:** NVIDIA official documentation, docs.nvidia.com/cuda/nvjitlink
**Last Updated:** 2026-04-09

## Summary
nvJitLink is an NVIDIA CUDA library for just-in-time (JIT) linking of device code (PTX and cubin) at runtime, introduced in CUDA 12.0. It enables applications that generate device code at runtime (via NVRTC or other means) to perform full device-side linking without requiring the CUDA driver's legacy linking infrastructure. nvJitLink is particularly important for applications with complex modular GPU code architectures and for frameworks that generate specialized CUDA kernels at runtime.

## Detail

### Purpose
nvJitLink solves the limitation of NVRTC's earlier runtime compilation model, which required all device code to be self-contained within a single compilation unit. Real-world GPU applications often require linking separately compiled device libraries (relocatable device code, RDC) together at runtime. nvJitLink provides a programmatic API for this runtime device code linking, enabling modular, multi-file CUDA programs to be composed and linked at runtime.

### Key Features
- Runtime linking of PTX, LTOIR (LTO intermediate representation), cubin, and fatbin inputs
- Supports relocatable device code (RDC / `-rdc=true` compiled objects)
- Link-time optimization (LTO) via LTOIR inputs for cross-module inlining
- Programmatic API: `nvJitLinkCreate`, `nvJitLinkAddData`, `nvJitLinkComplete`, `nvJitLinkGetLinkedCubin`
- Architecture-specific compilation and linking (sm_XX targeting)
- Error and info log retrieval for debugging link failures
- Works with NVRTC output (PTX/LTOIR) and pre-compiled device libraries
- Replaced the deprecated `cuLinkCreate`/`cuLinkAddData`/`cuLinkComplete` driver API for new applications
- Available as a standalone shared library (`libnvJitLink.so` / `nvJitLink.dll`)
- Thread-safe handle-based API

### Use Cases
- Frameworks generating GPU kernels at runtime (e.g., PyTorch `torch.compile`, JAX XLA)
- Applications that dynamically specialize kernels for runtime-known parameters
- GPU-accelerated JIT compilers and interpreters
- CUDA plugin systems where device libraries are loaded at runtime
- HPC applications with runtime kernel generation
- Database query engines with JIT-compiled GPU operators

### Hardware Requirements
- Requires CUDA 12.0 or higher (library introduced in CUDA 12.0)
- NVIDIA GPU with CUDA Compute Capability 5.0+ (Maxwell minimum)
- No special GPU hardware requirement beyond a CUDA-capable device

### Language Bindings
- C (primary API)
- C++ (common usage)
- Python (via ctypes/cffi wrappers in framework code)

## Connections
- [[NVRTC]] — nvJitLink is the companion linking library for NVRTC-compiled code; NVRTC compiles to PTX/LTOIR, nvJitLink links the result
- [[NVCC]] — NVCC uses a similar offline linking pipeline; nvJitLink provides the runtime equivalent
- [[libNVVM]] — libNVVM compiles NVVM IR to PTX; nvJitLink can then link the resulting device code
- [[CUDA-GDB]] — debugging JIT-linked modules requires CUDA-GDB with PTX source support

## Resources
- [nvJitLink Documentation](https://docs.nvidia.com/cuda/nvjitlink/index.html)
- [nvJitLink API Reference](https://docs.nvidia.com/cuda/nvjitlink/api/index.html)
- [CUDA 12 Release Notes](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/)
