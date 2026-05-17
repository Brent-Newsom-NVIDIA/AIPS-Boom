# cuda.coop

**Type:** Technology
**Tags:** NVIDIA, CUDA, Python, CCCL, Cooperative Algorithms, CUB, Numba CUDA, GPU Programming
**Related:** [[CUDA-Python]], [[cuda-compute]], [[CUDA-Cpp-Standard-Library]], [[CUB]], [[Thrust]], [[NVIDIA-CUDA]]
**Sources:** https://nvidia.github.io/cccl/python/coop.html, https://nvidia.github.io/cuda-python/latest/
**Last Updated:** 2026-04-29

## Summary
`cuda.coop` is NVIDIA's CCCL Python module for reusable cooperative algorithms that operate at block and warp scope inside Numba CUDA kernels. It exposes CUB-like cooperative primitives to Python kernel authors.

## Detail

### Purpose
Many efficient CUDA kernels need block-wide or warp-wide cooperation for reductions, scans, and related patterns. `cuda.coop` packages these reusable primitives for Numba CUDA kernels so Python GPU developers can use proven cooperative algorithms rather than rewriting them by hand.

### Key capabilities
- Block-level and warp-level cooperative algorithms.
- Designed for use inside Numba CUDA kernels.
- Generates linkable files that can be passed into `cuda.jit(link=...)` workflows.
- Includes example patterns such as block-level custom reductions.
- Complements host-callable [[cuda-compute]] algorithms.

### NVIDIA context
`cuda.coop` connects the Python CUDA ecosystem to [[CUB]]'s cooperative primitive heritage. In the wiki graph, treat it as the device-side cooperative companion to [[cuda-compute]], not as a replacement for [[CUDA-Programming-Guide]] or low-level [[CUDA-Runtime-API]] synchronization APIs.

## Connections
- [[CUDA-Python]] - current CUDA Python hub lists `cuda.coop`.
- [[cuda-compute]] - host-callable CCCL Python algorithms; `cuda.coop` is the in-kernel cooperative side.
- [[CUDA-Cpp-Standard-Library]] - CCCL family context.
- [[CUB]] - underlying cooperative primitive lineage.
- [[Thrust]] - higher-level C++ algorithms in the same CCCL ecosystem.
- [[NVIDIA-CUDA]] - parent GPU programming platform.

## Source Excerpts
- NVIDIA describes `cuda.coop` as cooperative algorithms operating at block and warp level.
- The docs show `cuda.coop` being used for block-level reduction inside a Numba CUDA kernel.
