# CUDA Programming Guide

**Type:** Guide
**Tags:** NVIDIA, CUDA, programming model, kernels, memory, streams, graphs, SIMT
**Related:** [[NVIDIA-CUDA]], [[CUDA-Runtime-API]], [[CUDA-Driver-API]], [[CUDA-Streams]], [[CUDA-Graphs]], [[CUDA-Unified-Memory]], [[CUDA-Tile]], [[cuTile]], [[CUDA-Tile-IR]], [[CUDA-Best-Practices-Guide]], [[CUDA-Blackwell-Compatibility-Guide]], [[CUDA-Hopper-Compatibility-Guide]], [[CUDA-Ada-Compatibility-Guide]], [[CUDA-Ampere-Compatibility-Guide]], [[CUDA-Turing-Compatibility-Guide]], [[CUDA-Features-Archive]], [[NVCC]]
**Sources:** https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html, https://developer.nvidia.com/cuda/tile, https://docs.nvidia.com/cuda/cutile-python/index.html, https://docs.nvidia.com/cuda/tile-ir/latest/index.html, https://docs.nvidia.com/cuda/blackwell-compatibility-guide/index.html, https://docs.nvidia.com/cuda/hopper-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ada-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ampere-compatibility-guide/index.html, https://docs.nvidia.com/cuda/turing-compatibility-guide/index.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Programming Guide is NVIDIA's core CUDA programming model reference. It explains how CUDA maps host and device code onto NVIDIA GPUs, including kernels, grids, thread blocks, memory spaces, streams, graphs, compilation, compatibility, and runtime behavior.

## Detail
This guide is the natural entry point for understanding CUDA C++ beyond installation. It sits above lower-level API references such as [[CUDA-Runtime-API]] and [[CUDA-Driver-API]], because it explains the programming concepts those APIs expose.

The guide also connects many topic pages already in the wiki: [[CUDA-Streams]], [[CUDA-Graphs]], [[CUDA-Unified-Memory]], [[NVCC]], [[PTX-ISA]], memory hierarchy, synchronization, and architecture-specific behavior. Newer CUDA tile programming surfaces such as [[CUDA-Tile]], [[cuTile]], and [[CUDA-Tile-IR]] complement this classic SIMT CUDA C++ guide rather than replacing it.
Architecture-specific compatibility and tuning pages link back here for the canonical explanations of compilation, memory hierarchy, synchronization, clusters, and PTX/cubin behavior.

## Connections
- [[NVIDIA-CUDA]] - CUDA's top-level platform page.
- [[CUDA-Runtime-API]] - API surface used by most CUDA programs.
- [[CUDA-Driver-API]] - lower-level module, context, and memory control layer.
- [[CUDA-Best-Practices-Guide]] - optimization companion to the programming guide.
- [[CUDA-Blackwell-Compatibility-Guide]], [[CUDA-Hopper-Compatibility-Guide]], [[CUDA-Ada-Compatibility-Guide]], [[CUDA-Ampere-Compatibility-Guide]], and [[CUDA-Turing-Compatibility-Guide]] - architecture-specific build compatibility notes.
- [[CUDA-Features-Archive]] - feature availability reference that points back to programming-guide concepts.
- [[NVCC]] - compiler path described in the programming guide.
- [[CUDA-Tile]] - tiled GPU programming model for Tensor Core-oriented kernels.
- [[cuTile]] - Python DSL that implements CUDA Tile.
- [[CUDA-Tile-IR]] - lower-level tile bytecode/specification underneath CUDA Tile tooling.

## Source Excerpts
- NVIDIA's programming guide covers the CUDA programming model, programming interface, compilation workflow, runtime behavior, streams, graphs, and memory concepts.
