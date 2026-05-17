# NVIDIA OptiX

**Type:** Technology
**Tags:** NVIDIA, OptiX, RTX, CUDA, ray tracing, rendering, RT Cores, Tensor Cores, denoising, Shader Execution Reordering, visualization
**Related:** [[NVIDIA-RTX]], [[NVIDIA-Omniverse]], [[NVIDIA-DLSS]], [[NVIDIA-Blackwell-Architecture]], [[NVLink]], [[Nsight-Compute]], [[Nsight-Graphics]]
**Sources:** https://developer.nvidia.com/rtx/ray-tracing/optix; https://developer.nvidia.com/designworks/optix/download; https://docs.nvidia.com/gameworks/content/gameworkslibrary/optix/optix_programming_guide.htm; https://developer.nvidia.com/blog/flexible-and-powerful-ray-tracing-with-optix-8/
**Last Updated:** 2026-05-15

## Summary
NVIDIA OptiX is a GPU-accelerated ray tracing application framework and SDK for building renderers, simulation tools, visualization systems, and other ray-scene query applications on NVIDIA GPUs. It provides a programmable ray tracing pipeline that combines a host API with CUDA/C++ shader-style programs for ray generation, intersection, shading, and hit handling. In NVIDIA's platform strategy, OptiX is the CUDA-oriented ray tracing SDK that complements RTX hardware, RT Cores, Tensor Core denoising, and professional visualization workflows.

## Detail

### Purpose
OptiX gives developers a lower-level ray tracing framework rather than a complete renderer. It supplies the acceleration structures, execution model, and programmable hooks needed to implement rendering and non-rendering ray tracing algorithms while letting applications define their own materials, cameras, ray payloads, intersection behavior, and shading logic.

### Programming Model
- A host-side API defines scene and ray tracing data structures.
- CUDA/C++ device programs generate rays, intersect geometry, respond to hits, and spawn additional rays.
- Ray payloads carry application-defined state such as color, recursion depth, importance, or other per-ray data.
- OptiX can support Whitted-style ray tracing, path tracing, collision detection, sound propagation, visibility tests, scientific simulations, and hybrid rendering with APIs such as OpenGL or DirectX.
- Acceleration structures such as BVH-style structures reduce ray-object intersection cost and enable large scenes to be queried efficiently.

### Key Features
- Programmable GPU-accelerated ray tracing pipeline.
- Single-ray shader programming model using C++.
- CUDA integration for access to the broader NVIDIA GPU programming stack.
- RT Core acceleration on NVIDIA RTX-class hardware.
- AI-accelerated rendering and denoising using Tensor Cores.
- Shader Execution Reordering (SER) for improved ray and memory coherence in ray tracing shaders.
- Support for motion blur, nested instancing, curve and sphere primitives, mega-geometry, opacity micromaps, and displacement micromaps.
- Multi-GPU scaling, including the ability to combine GPU memory over [[NVLink]] for large scenes.

### Current SDK Context
The NVIDIA OptiX downloads page lists OptiX SDK 9.1 for Windows, Linux, and Arm, with release highlights in December 2025. The page notes a dependency on Turing-and-newer NVIDIA GeForce, NVIDIA RTX/Quadro, and Data Center/Tesla products, a recent NVIDIA display driver, a C/C++ compiler, and a recent CUDA Toolkit. The 9.1 release notes highlighted cancellable module creation and an application-side compile cache API.

### Use Cases
- Offline and interactive rendering for media and entertainment.
- Product design, visualization, and virtual prototyping.
- Scientific visualization and ray-based simulation.
- Collision detection and visibility queries.
- AI denoising for progressive rendering workflows.
- Renderer and tool development where developers need CUDA-level control over ray tracing behavior.

## Connections
- [[NVIDIA-RTX]] - OptiX is one of the main developer-facing ray tracing SDK paths for RTX hardware.
- [[NVIDIA-Omniverse]] - Omniverse and professional visualization workflows rely on RTX-style path tracing and rendering concepts that align with OptiX.
- [[NVIDIA-DLSS]] - Both OptiX denoising and DLSS sit in NVIDIA's AI-accelerated rendering ecosystem, though they target different workflows.
- [[NVIDIA-Blackwell-Architecture]] - Blackwell-era RTX features such as advanced neural rendering and microgeometry extend the broader rendering platform around OptiX.
- [[Nsight-Compute]] - OptiX applications use NVIDIA developer tooling for GPU profiling and optimization.
- [[Nsight-Graphics]] - RTX graphics tooling is adjacent to OptiX renderer debugging and GPU performance investigation.

## Source Excerpts
- developer.nvidia.com/rtx/ray-tracing/optix: "application framework for achieving optimal ray tracing performance"
- docs.nvidia.com/gameworks/content/gameworkslibrary/optix/optix_programming_guide.htm: "OptiX is not itself a renderer."
- developer.nvidia.com/designworks/optix/download: "Download OptiX SDK 9.1 - (Windows, Linux, Arm)"
- developer.nvidia.com/blog/flexible-and-powerful-ray-tracing-with-optix-8/: "GPU-accelerated, ray-casting API based on the CUDA parallel programming model"
