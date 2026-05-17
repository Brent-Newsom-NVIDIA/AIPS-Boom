# cuda.pathfinder

**Type:** Technology
**Tags:** NVIDIA, CUDA, Python, Packaging, Libraries, Headers, Tool Discovery
**Related:** [[CUDA-Python]], [[cuda-bindings]], [[cuda-core]], [[NVCC]], [[libNVVM]], [[libdevice]], [[CUDA-Binary-Utilities]], [[NVIDIA-CUDA]]
**Sources:** https://nvidia.github.io/cuda-python/cuda-pathfinder/latest/, https://nvidia.github.io/cuda-python/latest/
**Last Updated:** 2026-04-29

## Summary
`cuda.pathfinder` is a CUDA Python utility package for locating CUDA components installed in a user's Python environment or CUDA Toolkit environment. It helps Python packages discover NVIDIA dynamic libraries, headers, binary utilities, bitcode libraries, and static libraries without hardcoding local install paths.

## Detail

### Purpose
CUDA Python packages often need to load native NVIDIA libraries or find headers/tools supplied by pip, Conda, or a system CUDA Toolkit installation. `cuda.pathfinder` provides a shared discovery layer so packages can locate CUDA resources consistently.

### Key capabilities
- Locate CUDA paths from Python environments and CUDA home locations.
- Load supported NVIDIA dynamic libraries.
- Find CUDA Toolkit headers.
- Locate binary utilities such as compiler or binary-inspection tools.
- Find bitcode libraries and static libraries used by compiler workflows.
- Surface structured errors when required CUDA components are missing or unavailable.

### NVIDIA context
`cuda.pathfinder` is not a user-facing GPU programming model like [[cuda-core]] or [[cuTile]]. Its strategic value is packaging and deployment: it makes Python CUDA packages more robust when CUDA libraries come from a mix of Python wheels, Conda packages, and system installations.

## Connections
- [[CUDA-Python]] - umbrella that lists `cuda.pathfinder` as a current component.
- [[cuda-bindings]] and [[cuda-core]] - Python CUDA packages that may need consistent CUDA component discovery.
- [[NVCC]] and [[CUDA-Binary-Utilities]] - examples of tools that Python workflows may need to locate.
- [[libNVVM]] and [[libdevice]] - compiler components/bitcode libraries that can be discovered by package tooling.
- [[NVIDIA-CUDA]] - parent platform whose installed components are being discovered.

## Source Excerpts
- NVIDIA describes `cuda.pathfinder` as utilities for locating CUDA components.
- The API reference lists helpers for dynamic libraries, headers, binary utilities, bitcode libraries, and static libraries.
