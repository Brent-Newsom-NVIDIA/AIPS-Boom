# CUDA Tile IR

**Type:** Technology
**Tags:** NVIDIA, CUDA, Tile IR, Compiler, Bytecode, Tensor Cores, GPU Programming, PTX
**Related:** [[CUDA-Tile]], [[cuTile]], [[PTX-ISA]], [[PTX-Interoperability]], [[NVVM-IR]], [[libNVVM]], [[NVIDIA-CUDA]], [[Triton-GPU-Language]]
**Sources:** https://docs.nvidia.com/cuda/tile-ir/latest/index.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/prog_model.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/syntax.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/semantics.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/memory_model.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/stability.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/release_notes.html
**Last Updated:** 2026-04-29

## Summary
CUDA Tile IR is NVIDIA's low-level tile virtual machine, instruction set, and bytecode specification for the [[CUDA-Tile]] programming model. It gives compiler and toolchain authors a stable, explicit target for tile-based GPU programs while abstracting generation-specific hardware details.

## Detail

### Purpose
Tile IR exists because Tensor Core-heavy workloads need a programming target that exposes tile-level parallelism without forcing users or compiler authors to manually describe every SIMT thread/data mapping. NVIDIA positions Tile IR as a target for systems that generate bytecode, debug bytecode, or build libraries and compiler backends for tile programs.

### Programming model
Tile IR extends the CUDA/PTX SIMT model with tile blocks and tile grids. Kernels operate over one-, two-, or three-dimensional grids of tile blocks, query their tile-block coordinates, and manipulate tensors, pointers, views, and tile values. The specification shows examples that build vector-add and GEMM kernels by constructing pointer tiles, loading input tiles, applying operations such as add or MMA, and storing output tiles.

### Language and binary structure
The current docs cover:
- Programming model, syntax, type system, semantics, memory model, operations, debug info, stability, and release notes.
- MLIR-oriented construction and bytecode storage, with an unstable textual form intended for human comprehension rather than authoring.
- Modules containing kernel definitions and global variables, with operation bodies represented in SSA form.
- Tile values as immutable N-dimensional arrays whose physical representation is chosen by the compiler for the target architecture.

### Memory and interoperability
Tile IR's memory model is derived from the [[PTX-ISA]] memory model. It defines scopes such as tile-block, device, and system; memory orderings such as weak, relaxed, release, acquire, and acquire-release; token-ordered memory operations; and data-race behavior. NVIDIA states that Tile IR release/acquire patterns are intended to match PTX communication patterns for interoperability with PTX threads.

### Current release context
The Tile IR 13.2 release added support for Ampere and Ada targets in addition to Blackwell support from 13.1. The current stability docs list supported targets including Ampere `sm_80`, `sm_86`, `sm_87`, `sm_88`; Ada `sm_89`; and Blackwell `sm_100` and `sm_120`, while noting that Hopper `sm_90` is not supported in the 13.2 release.

## Connections
- [[CUDA-Tile]] - programming model that Tile IR specifies at the bytecode/virtual-machine level.
- [[cuTile]] - Python DSL that can JIT or AOT export kernels through TileIR bytecode.
- [[PTX-ISA]] - Tile IR memory semantics and interoperability are defined relative to PTX concepts.
- [[PTX-Interoperability]] - relevant when tile-generated code must coexist with SIMT/PTX code.
- [[NVVM-IR]] - another NVIDIA compiler IR in the CUDA stack, useful for comparing front-end/compiler targets.
- [[libNVVM]] - NVVM compiler component used in CUDA compiler workflows adjacent to Tile IR tooling.
- [[NVIDIA-CUDA]] - Tile IR is part of the current CUDA documentation family.
- [[Triton-GPU-Language]] - NVIDIA lists a Triton-to-CUDA-Tile-IR backend as an ecosystem bridge.

## Source Excerpts
- NVIDIA describes Tile IR as a portable, low-level tile virtual machine and instruction set that models the GPU as a tile-based processor.
- The programming-model docs explain that Tile IR was built to help high-performance algorithms use underlying hardware while reducing programming complexity.
- The stability docs list current architecture support and note that Hopper `sm_90` is not supported in Tile IR 13.2.
