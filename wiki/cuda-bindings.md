# cuda.bindings

**Type:** Technology
**Tags:** NVIDIA, CUDA, Python, Bindings, Driver API, Runtime API, NVRTC, NVML
**Related:** [[CUDA-Python]], [[cuda-core]], [[CUDA-Driver-API]], [[CUDA-Runtime-API]], [[NVRTC]], [[PTX-ISA]], [[Nsight-Compute]], [[Nsight-Systems]], [[CuPy]]
**Sources:** https://nvidia.github.io/cuda-python/cuda-bindings/latest/overview.html, https://developer.nvidia.com/cuda/python
**Last Updated:** 2026-04-29

## Summary
`cuda.bindings` provides NVIDIA-maintained low-level Python bindings to CUDA C APIs. It is the API-parity layer of [[CUDA-Python]], intended to give Python projects broad access to CUDA host APIs while improving portability and interoperability across the Python GPU ecosystem.

## Detail

### Purpose
Some Python libraries need direct control over CUDA objects, modules, memory, streams, events, compiled PTX, runtime APIs, or management APIs. `cuda.bindings` serves that need by exposing low-level CUDA APIs from Python rather than hiding them behind higher-level abstractions.

### Key capabilities
- Low-level Python access to CUDA driver/runtime API families and related CUDA host APIs.
- Workflows for compiling device code to PTX, loading modules, extracting functions, preparing kernel arguments, launching kernels, and synchronizing streams.
- Compatibility with profiling workflows using [[Nsight-Systems]] and [[Nsight-Compute]].
- CUDA native object wrappers that expose pointer-style access through `getPtr()` and integer conversion where needed.
- Foundation layer used by higher-level Python CUDA components such as [[cuda-core]].

### NVIDIA context
`cuda.bindings` is the closest Python counterpart to [[CUDA-Driver-API]], [[CUDA-Runtime-API]], and [[NVRTC]] C APIs. Use it in the wiki when a question is about exact CUDA host API access from Python; use [[cuda-core]] when a question is about Pythonic higher-level CUDA objects and workflows.

## Connections
- [[CUDA-Python]] - umbrella that includes `cuda.bindings`.
- [[cuda-core]] - higher-level Pythonic CUDA layer built above low-level bindings.
- [[CUDA-Driver-API]] and [[CUDA-Runtime-API]] - core CUDA C APIs exposed through Python bindings.
- [[NVRTC]] - runtime compilation API commonly used before loading modules and launching kernels.
- [[PTX-ISA]] - compiled PTX may be loaded and launched through driver-style binding workflows.
- [[Nsight-Systems]] and [[Nsight-Compute]] - profiling tools compatible with CUDA Python binding examples.
- [[CuPy]] - example of the wider Python CUDA ecosystem that benefits from unified bindings.

## Source Excerpts
- NVIDIA says `cuda.bindings` aims to unify the Python CUDA ecosystem with a standard set of low-level interfaces and full CUDA host API coverage.
- The documentation shows binding workflows for compiling PTX, loading CUDA modules, launching kernels, and preparing kernel arguments.
