# PTX Interoperability

**Type:** Guide
**Tags:** NVIDIA, CUDA, PTX, ABI, interoperability, compiler, custom languages
**Related:** [[PTX-ISA]], [[Inline-PTX-Assembly]], [[PTX-Compiler-APIs]], [[CUDA-Tile-IR]], [[cuTile]], [[NVVM-IR]], [[libNVVM]], [[NVCC]], [[CUDA-Driver-API]]
**Sources:** https://docs.nvidia.com/cuda/ptx-writers-guide-to-interoperability/index.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/memory_model.html, https://docs.nvidia.com/cuda/cutile-python/interoperability.html
**Last Updated:** 2026-04-29

## Summary
PTX Interoperability is NVIDIA's guide for PTX writers who need generated PTX code to interoperate with other CUDA code. It defines ABI expectations around data representation, aggregates, function calling, linking, and compatible PTX generation.

## Detail
This page is especially relevant for compiler, DSL, and runtime-code-generation authors. PTX can be produced by multiple tools, but it must follow CUDA ABI rules if it will link with or call into other generated CUDA code.

The guide sits between [[PTX-ISA]] as the instruction/reference layer and [[PTX-Compiler-APIs]], [[NVVM-IR]], and [[libNVVM]] as compiler integration paths. [[CUDA-Tile-IR]] adds another interoperability surface because NVIDIA defines its memory model relative to PTX concepts, and [[cuTile]] currently supports inter-kernel interoperability with SIMT code.

## Connections
- [[PTX-ISA]] - interoperability rules apply to PTX as the virtual GPU ISA.
- [[Inline-PTX-Assembly]] - hand-written PTX in CUDA code should respect ABI assumptions.
- [[PTX-Compiler-APIs]] - compiled PTX must be generated with compatible ABI expectations.
- [[CUDA-Tile-IR]] - Tile IR release/acquire patterns are designed to line up with PTX communication patterns.
- [[cuTile]] - current cuTile docs cover inter-kernel tile/SIMT interoperability.
- [[NVVM-IR]] and [[libNVVM]] - compiler front ends may lower to PTX that must interoperate with CUDA code.
- [[CUDA-Driver-API]] - loads and links modules that may contain PTX-derived code.

## Source Excerpts
- NVIDIA's guide defines the CUDA architecture ABI for generating PTX that can link with other code.
- The guide covers data representation, alignment, function calling, and interoperability considerations.
