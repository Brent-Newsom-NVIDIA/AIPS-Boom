# cuda.core

**Type:** Technology
**Tags:** NVIDIA, CUDA, Python, Runtime, Streams, CUDA Graphs, Memory, JIT
**Related:** [[CUDA-Python]], [[cuda-bindings]], [[CUDA-Runtime-API]], [[CUDA-Driver-API]], [[CUDA-Streams]], [[CUDA-Graphs]], [[NVRTC]], [[nvJitLink]], [[CuPy]], [[PyTorch]]
**Sources:** https://nvidia.github.io/cuda-python/cuda-core/latest/, https://nvidia.github.io/cuda-python/cuda-core/latest/getting-started.html, https://nvidia.github.io/cuda-python/cuda-core/latest/installation.html, https://nvidia.github.io/cuda-python/cuda-core/latest/interoperability.html
**Last Updated:** 2026-04-29

## Summary
`cuda.core` is NVIDIA's Pythonic CUDA interface for core runtime-style functionality. It provides high-level Python constructs for devices, streams, events, memory resources, CUDA graphs, kernel compilation/launch, linking, Tensor Memory Accelerator descriptors, and CUDA/NVML system inspection.

## Detail

### Purpose
`cuda.core` is for Python developers who need direct CUDA control but do not want one-to-one CUDA C API bindings for every call. It sits above [[cuda-bindings]] by offering higher-level classes and workflows while still connecting to core CUDA concepts such as [[CUDA-Streams]], [[CUDA-Graphs]], memory management, and runtime code generation.

### Key capabilities
- Compile and launch CUDA kernels from Python.
- Coordinate asynchronous execution with streams and events.
- Allocate, transfer, and manage device, pinned, managed, graph, and virtual memory resources.
- Build and execute CUDA graphs with `GraphBuilder` and graph-related classes.
- Runtime-link device code with link-time optimization flows.
- Inspect CUDA system state through driver/NVML-oriented APIs.
- Interoperate with other Python GPU libraries through current device/context sharing, a proposed `__cuda_stream__` protocol, and memory-view utilities.

### NVIDIA context
`cuda.core` is one of the most important current CUDA Python components because it offers a Python-native control surface for the same runtime concepts documented in [[CUDA-Runtime-API]] and [[CUDA-Driver-API]]. It is especially useful for Python packages that need CUDA streams, CUDA graphs, compiled kernels, or portable stream/memory exchange with [[CuPy]], [[PyTorch]], and other GPU array libraries.

## Connections
- [[CUDA-Python]] - umbrella documentation that includes `cuda.core`.
- [[cuda-bindings]] - lower-level binding layer for one-to-one CUDA C APIs.
- [[CUDA-Runtime-API]] and [[CUDA-Driver-API]] - native CUDA API layers that `cuda.core` abstracts in Pythonic form.
- [[CUDA-Streams]] and [[CUDA-Graphs]] - core execution concepts surfaced by `cuda.core`.
- [[NVRTC]] and [[nvJitLink]] - related runtime compilation and linking concepts.
- [[CuPy]] and [[PyTorch]] - Python GPU libraries that can interoperate through streams, contexts, and memory views.

## Source Excerpts
- NVIDIA describes `cuda.core` as Pythonic access to the CUDA runtime and other core functionality.
- NVIDIA's `cuda.core` overview lists devices, memory resources, programs, graph builders, streams, and events as high-level constructs.
