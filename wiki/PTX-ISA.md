# PTX ISA

**Type:** Technology
**Tags:** NVIDIA, CUDA, PTX, ISA, compiler, virtual architecture
**Related:** [[NVIDIA-CUDA]], [[NVCC]], [[NVRTC]], [[PTX-Compiler-APIs]], [[Inline-PTX-Assembly]], [[PTX-Interoperability]], [[CUDA-Tile-IR]], [[CUDA-Tile]], [[cuTile]], [[CUDA-Blackwell-Compatibility-Guide]], [[CUDA-Hopper-Compatibility-Guide]], [[CUDA-Ada-Compatibility-Guide]], [[CUDA-Ampere-Compatibility-Guide]], [[CUDA-Turing-Compatibility-Guide]], [[CUDA-Driver-API]], [[NVVM-IR]], [[libNVVM]]
**Sources:** https://docs.nvidia.com/cuda/parallel-thread-execution/index.html, https://docs.nvidia.com/cuda/tile-ir/latest/index.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/memory_model.html, https://docs.nvidia.com/cuda/blackwell-compatibility-guide/index.html, https://docs.nvidia.com/cuda/hopper-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ada-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ampere-compatibility-guide/index.html, https://docs.nvidia.com/cuda/turing-compatibility-guide/index.html
**Last Updated:** 2026-04-29

## Summary
PTX is NVIDIA's parallel thread execution virtual instruction set architecture for CUDA GPUs. CUDA compiler paths generate PTX as an intermediate, portable GPU program representation that can be assembled or JIT-compiled to GPU-specific machine code.

## Detail

### Purpose
PTX separates CUDA language front ends from specific GPU machine-code targets. A compiler can emit PTX for a virtual architecture, then NVIDIA tooling or the driver can lower it to code for a concrete GPU architecture such as Hopper or Blackwell.

### Key concepts
- Data-parallel execution model aligned with CUDA threads, warps, blocks, and grids.
- State spaces for registers, shared memory, local memory, global memory, constants, and parameters.
- Type, instruction, predicate, control-flow, and memory-ordering rules.
- Special registers and instructions used to expose GPU execution state.
- Interoperability rules for PTX that must link or call into other CUDA code.
- Inline assembly and ABI rules for advanced CUDA developers and compiler authors.

### NVIDIA context
PTX is central to custom compilers, runtime code generation, [[NVRTC]], [[PTX-Compiler-APIs]], and [[CUDA-Driver-API]] module loading. It is also an important debugging and performance-inspection layer for advanced CUDA developers.

## Connections
- [[NVCC]] - can emit PTX during CUDA compilation.
- [[NVRTC]] - creates PTX at runtime from CUDA C++ strings.
- [[PTX-Compiler-APIs]] - compile PTX strings into GPU assembly code.
- [[Inline-PTX-Assembly]] - guide for inserting PTX statements directly into CUDA C++.
- [[PTX-Interoperability]] - ABI rules for PTX that links with other CUDA code.
- [[CUDA-Blackwell-Compatibility-Guide]], [[CUDA-Hopper-Compatibility-Guide]], [[CUDA-Ada-Compatibility-Guide]], [[CUDA-Ampere-Compatibility-Guide]], and [[CUDA-Turing-Compatibility-Guide]] - architecture compatibility guides explain why PTX is important for forward compatibility.
- [[CUDA-Tile-IR]] - Tile IR is a newer tile-oriented CUDA compiler target with memory semantics designed to interoperate with PTX concepts.
- [[CUDA-Tile]] and [[cuTile]] - user-facing tile programming surfaces that sit above CUDA Tile IR.
- [[NVVM-IR]] - lower-level compiler IR can be translated into PTX through [[libNVVM]].
- [[CUDA-Binary-Utilities]] - tools such as cuobjdump and nvdisasm help inspect compiled CUDA code around the PTX/SASS boundary.

## Source Excerpts
- NVIDIA's PTX ISA docs define PTX as the virtual GPU ISA used by CUDA compiler and JIT workflows.
