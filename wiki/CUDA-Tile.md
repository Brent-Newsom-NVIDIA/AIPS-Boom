# CUDA Tile

**Type:** Technology
**Tags:** NVIDIA, CUDA, CUDA Tile, GPU Programming, Tensor Cores, Tiled Kernels
**Related:** [[cuTile]], [[CUDA-Tile-IR]], [[NVIDIA-CUDA]], [[CUDA-Programming-Guide]], [[PTX-ISA]], [[Triton-GPU-Language]], [[NVIDIA-Blackwell-Architecture]]
**Sources:** https://developer.nvidia.com/cuda/tile, https://docs.nvidia.com/cuda/cutile-python/index.html, https://docs.nvidia.com/cuda/tile-ir/latest/index.html
**Last Updated:** 2026-04-29

## Summary
CUDA Tile is NVIDIA's tile-based GPU programming model for expressing high-performance kernels around multi-dimensional data tiles rather than individual SIMT threads. The current NVIDIA CUDA Tile surface ties together the low-level [[CUDA-Tile-IR]] specification and user-facing language support such as [[cuTile]] Python.

## Detail

### Purpose
CUDA Tile targets portability and performance for Tensor Core-oriented workloads. It gives developers and compiler authors a tiled abstraction for kernels such as GEMM, attention, reductions, and other tensor-heavy operations where manually mapping individual threads to data can become complex across GPU generations.

### Current NVIDIA surface
NVIDIA's CUDA Tile landing page presents two primary technical pieces:
- [[CUDA-Tile-IR]] - the virtual instruction set and bytecode specification for tile programming.
- [[cuTile]] - the Python-native DSL for writing tiled kernels against the CUDA Tile model.

The same NVIDIA page also points to learning resources and ecosystem projects, including the CUDA Tile IR MLIR dialect, TileGym examples, and a Triton-to-CUDA-Tile-IR bridge. Those are useful related surfaces, but the durable wiki concepts are the programming model, the IR, and the Python DSL.

### NVIDIA context
CUDA Tile is important because it formalizes a path between high-level kernel DSLs and modern NVIDIA GPU hardware features such as Tensor Cores and Tensor Memory Accelerators. It belongs alongside [[CUDA-Programming-Guide]], [[PTX-ISA]], and [[NVVM-IR]] as a CUDA programming and compiler abstraction, while remaining distinct from classic SIMT CUDA C++.

## Connections
- [[cuTile]] - current Python implementation of the CUDA Tile programming model.
- [[CUDA-Tile-IR]] - low-level specification and bytecode target underneath CUDA Tile tooling.
- [[NVIDIA-CUDA]] - CUDA Tile is part of the broader CUDA platform and documentation set.
- [[CUDA-Programming-Guide]] - classic CUDA C++ guide for SIMT programming concepts that CUDA Tile complements.
- [[PTX-ISA]] - PTX remains the classic CUDA virtual ISA; CUDA Tile IR is a newer tile-oriented compiler target.
- [[Triton-GPU-Language]] - NVIDIA lists a Triton-to-CUDA-Tile-IR backend as an ecosystem bridge.
- [[NVIDIA-Blackwell-Architecture]] - CUDA Tile is positioned around modern Tensor Core workloads and latest NVIDIA GPU features.

## Source Excerpts
- NVIDIA describes CUDA Tile as a tile-based GPU programming model targeting portability for NVIDIA Tensor Cores.
- NVIDIA describes cuTile Python as the Python implementation of the CUDA Tile programming model.
- NVIDIA presents CUDA Tile IR as the virtual instruction set for tile programming.
