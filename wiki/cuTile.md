# cuTile

**Type:** Technology
**Tags:** NVIDIA, cuTile, CUDA Tile, Python, DSL, GPU Programming, Tensor Cores, TMA
**Related:** [[CUDA-Python]], [[CUDA-Tile]], [[CUDA-Tile-IR]], [[NVIDIA-CUDA]], [[PyTorch]], [[CuPy]], [[Nsight-Compute]], [[PTX-ISA]], [[NVVM-IR]]
**Sources:** https://docs.nvidia.com/cuda/cutile-python/index.html, https://docs.nvidia.com/cuda/cutile-python/quickstart.html, https://docs.nvidia.com/cuda/cutile-python/execution.html, https://docs.nvidia.com/cuda/cutile-python/interoperability.html, https://docs.nvidia.com/cuda/cutile-python/performance.html, https://docs.nvidia.com/cuda/cutile-python/compilation.html, https://developer.nvidia.com/cuda/tile, https://nvidia.github.io/cuda-python/latest/
**Last Updated:** 2026-04-29

## Summary
cuTile is NVIDIA's Python implementation of the [[CUDA-Tile]] programming model. It lets developers write tiled GPU kernels in a Python DSL while the toolchain targets advanced NVIDIA GPU hardware capabilities such as Tensor Cores and Tensor Memory Accelerators through [[CUDA-Tile-IR]].

## Detail

### Purpose
cuTile is aimed at developers who need custom GPU kernels but do not want to manage per-thread SIMT details directly. A cuTile kernel is marked with `@ct.kernel` and launched from host code with `ct.launch()` over a logical grid of blocks. Inside the kernel, code loads tiles from global arrays, computes on immutable tile values, and stores output tiles back to global memory.

The cuTile execution model exposes block-level tile parallelism rather than individual CUDA threads. Scalar operations run serially, array/tile operations can be parallelized across the block by the compiler, and explicit synchronization inside a block is not exposed to the cuTile programmer.

### Key capabilities
- Python-native tiled kernel authoring with `cuda.tile` APIs.
- Kernel launch over 1D, 2D, or 3D grids using CUDA streams.
- Tile operations for load/store, reductions, scans, matrix multiply, selection, math, bitwise, comparison, atomic, utility, metaprogramming, and autotuning workflows.
- Interoperation with array objects such as [[PyTorch]] tensors and [[CuPy]] arrays through global array kernel arguments.
- JIT specialization at launch time and ahead-of-time export to cubin or TileIR bytecode.
- Inter-kernel interoperability with SIMT CUDA code in the same source/binary, with intra-kernel tile/SIMT mixing called out by NVIDIA as future support.
- Profiling through [[Nsight-Compute]] similarly to SIMT CUDA kernels, with driver-version requirements for detailed statistics.

### Requirements and packaging
Current cuTile Python documentation lists Linux x86_64, Linux aarch64, and Windows x86_64 support; Python 3.10 through 3.13; NVIDIA driver r580 or later; and GPUs with compute capability 8.x, 10.x, 11.x, or 12.x. Systems can install `cuda-tile[tileiras]` to bring in the TileIR compiler package plus CUDA compiler/NVVM packages, or use `cuda-tile` with a system-wide CUDA Toolkit 13.1 or later.

### NVIDIA context
cuTile is the user-facing Python layer of NVIDIA's larger [[CUDA-Tile]] direction. It belongs next to [[CUDA-Programming-Guide]], [[PTX-ISA]], and [[NVVM-IR]] in the wiki because it is a new way to express GPU work, but it should not be confused with the lower-level [[CUDA-Tile-IR]] specification itself.
The current [[CUDA-Python]] hub also lists `cuda.tile` as the Python DSL for the CUDA Tile programming model.

## Connections
- [[CUDA-Tile]] - umbrella NVIDIA programming model that cuTile implements in Python.
- [[CUDA-Python]] - current NVIDIA hub that lists `cuda.tile` / cuTile among Python CUDA components.
- [[CUDA-Tile-IR]] - lower-level bytecode/spec target used beneath cuTile.
- [[NVIDIA-CUDA]] - cuTile is part of the current CUDA documentation family.
- [[PyTorch]] - PyTorch tensors can be passed as array arguments to cuTile kernels.
- [[CuPy]] - cuTile quickstart examples use CuPy arrays and streams.
- [[Nsight-Compute]] - profiles cuTile kernels using normal CUDA profiling workflows.
- [[PTX-ISA]] - cuTile/Tile IR sits adjacent to PTX and SIMT interoperability concerns.
- [[NVVM-IR]] - CUDA Tile tooling depends on NVVM components in the CUDA compiler stack.

## Source Excerpts
- NVIDIA describes cuTile as a Python DSL and parallel programming model for NVIDIA GPUs that automatically uses advanced hardware capabilities such as Tensor Cores and Tensor Memory Accelerators.
- The cuTile docs distinguish arrays stored in global memory from immutable tile values that exist inside kernel code.
- The compilation docs describe JIT specialization at `ct.launch()` time and ahead-of-time export to cubin or TileIR bytecode.
