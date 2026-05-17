# CUDA Python

**Type:** Technology
**Tags:** NVIDIA, CUDA, Python, GPU Programming, CUDA Toolkit, Developer Tools
**Related:** [[NVIDIA-CUDA]], [[cuda-core]], [[cuda-bindings]], [[cuda-pathfinder]], [[cuda-compute]], [[cuda-coop]], [[cuTile]], [[nvmath-python]], [[NVSHMEM4Py]], [[Nsight-Python]], [[CUPTI-Python]], [[PyTorch]], [[CuPy]]
**Sources:** https://developer.nvidia.com/cuda/python, https://nvidia.github.io/cuda-python/latest/, https://nvidia.github.io/cuda-python/latest/release.html, https://docs.nvidia.com/nvshmem/api/api/language_bindings/python/index.html, https://docs.nvidia.com/nsight-python/index.html
**Last Updated:** 2026-04-29

## Summary
CUDA Python is NVIDIA's umbrella for accessing the CUDA platform from Python. The current documentation splits the ecosystem into components such as [[cuda-core]], [[cuda-bindings]], [[cuda-pathfinder]], [[cuda-compute]], [[cuda-coop]], [[cuTile]], [[nvmath-python]], [[NVSHMEM4Py]], [[Nsight-Python]], and [[CUPTI-Python]].

## Detail

### Purpose
Python is central to AI, HPC, data science, and engineering workflows, but production GPU work still depends on CUDA device management, streams, memory, kernels, profiling, libraries, and interoperability. CUDA Python provides NVIDIA-maintained Python interfaces so those workflows can use CUDA directly or through higher-level Python libraries.

### Current component map
- [[cuda-core]] - Pythonic access to CUDA runtime-style functionality, streams, memory, graphs, devices, compilation, and system inspection.
- [[cuda-bindings]] - low-level Python bindings to CUDA C APIs.
- [[cuda-pathfinder]] - utilities for finding CUDA libraries, headers, binary tools, bitcode libraries, and static libraries in Python environments.
- [[cuda-compute]] - host-callable CCCL parallel algorithms such as reduce, scan, sort, and transform.
- [[cuda-coop]] - cooperative block/warp algorithms for use inside Numba CUDA kernels.
- [[cuTile]] - Python DSL for the [[CUDA-Tile]] programming model.
- [[nvmath-python]] - Pythonic access to NVIDIA math libraries.
- [[NVSHMEM4Py]] - Python binding for [[NVSHMEM]] distributed GPU communication.
- [[Nsight-Python]] - Python automation layer for Nsight kernel profiling workflows.
- [[CUPTI-Python]] - Python-facing profiling interface around CUPTI concepts.

### NVIDIA context
CUDA Python is the connective layer between [[NVIDIA-CUDA]] and Python GPU libraries such as [[PyTorch]], [[CuPy]], RAPIDS, and Jupyter-driven research workflows. It should be treated as an umbrella, not a single API surface: low-level API parity belongs in [[cuda-bindings]], higher-level Pythonic runtime usage belongs in [[cuda-core]], and algorithmic/library surfaces live in their own pages.

## Connections
- [[NVIDIA-CUDA]] - parent CUDA platform.
- [[cuda-core]] - high-level Python CUDA runtime/core functionality.
- [[cuda-bindings]] - low-level CUDA C API access from Python.
- [[cuda-pathfinder]] - CUDA component discovery helper for Python packages.
- [[cuda-compute]] and [[cuda-coop]] - CCCL Python algorithm surfaces.
- [[cuTile]] - tile-programming DSL listed from the CUDA Python hub.
- [[nvmath-python]] - Python access to NVIDIA math libraries.
- [[NVSHMEM4Py]] - Pythonic access to NVSHMEM PGAS communication.
- [[Nsight-Python]] - Python-first Nsight profiling automation.
- [[CUPTI-Python]] - profiling and tracing for Python CUDA applications.

## Source Excerpts
- NVIDIA describes CUDA Python as the home for accessing the CUDA platform from Python.
- The current CUDA Python hub lists `cuda.core`, `cuda.bindings`, `cuda.pathfinder`, `cuda.coop`, `cuda.compute`, `cuda.tile`, `nvmath-python`, and CUPTI Python among its components.
