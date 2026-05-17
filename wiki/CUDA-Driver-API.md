# CUDA Driver API

**Type:** Technology
**Tags:** NVIDIA, CUDA, driver API, GPU programming, modules, contexts
**Related:** [[NVIDIA-CUDA]], [[CUDA-Runtime-API]], [[CUDA-Python]], [[cuda-bindings]], [[cuda-core]], [[PTX-ISA]], [[NVRTC]], [[nvJitLink]], [[PTX-Compiler-APIs]], [[nvFatbin]]
**Sources:** https://docs.nvidia.com/cuda/cuda-driver-api/index.html, https://nvidia.github.io/cuda-python/cuda-bindings/latest/overview.html, https://nvidia.github.io/cuda-python/cuda-core/latest/getting-started.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Driver API is CUDA's lower-level programming interface for explicit control over devices, contexts, modules, memory, streams, events, and kernel launches. It is the API layer used when applications, frameworks, or runtime systems need direct module loading, JIT compilation integration, or fine-grained CUDA object management.

## Detail

### Purpose
Where the [[CUDA-Runtime-API]] optimizes for developer convenience, the Driver API exposes lower-level CUDA primitives. It is important for language runtimes, plugin systems, inference engines, custom compilers, and applications that load PTX, cubins, fatbins, or linked device code dynamically.

### Key capabilities
- Explicit device and context management.
- Module loading from cubin, PTX, JIT-linked code, or runtime-created fatbins.
- Memory, stream, event, graph, and external-resource operations.
- JIT option control and integration with [[PTX-Compiler-APIs]], [[NVRTC]], [[nvJitLink]], and [[nvFatbin]].
- Interoperability with runtime API usage when applications follow documented mixing rules.

### NVIDIA context
High-level NVIDIA software often relies on Driver API mechanisms even when end users never call them directly. It is especially relevant to [[TensorRT]], [[TensorRT-LLM]], [[Triton-Inference-Server]], custom CUDA language front ends, and dynamic kernel systems.
In Python, [[cuda-bindings]] exposes driver-style APIs directly, while [[cuda-core]] wraps related concepts in higher-level Python objects.

## Connections
- [[CUDA-Runtime-API]] - higher-level API that can interoperate with the driver API.
- [[CUDA-Python]] - Python umbrella for NVIDIA CUDA access.
- [[cuda-bindings]] - low-level Python API parity for CUDA host APIs.
- [[cuda-core]] - higher-level Python objects for devices, contexts, modules, memory, and launches.
- [[PTX-ISA]] - Driver API module loading can consume PTX for JIT compilation.
- [[NVRTC]] - runtime-compiled CUDA code is commonly loaded through Driver API modules.
- [[nvJitLink]] - linked device code can be loaded through Driver API flows.
- [[nvFatbin]] - runtime-created fatbins are loaded through Driver API module APIs.

## Source Excerpts
- NVIDIA's Driver API reference includes context, module, memory, stream, event, graph, execution-control, and interoperability sections.
