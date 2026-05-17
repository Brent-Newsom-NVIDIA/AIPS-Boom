# NVIDIA RTX (Ray Tracing)

**Type:** Technology
**Tags:** NVIDIA, RTX, Ray Tracing, Real-Time Rendering, Tensor Cores, DXR, Vulkan, Gaming
**Related:** [[NVIDIA-OptiX]], [[NVIDIA-DLSS]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-RTX-PRO-Server]], [[NVIDIA-Ada-Lovelace-Architecture]], [[NVIDIA-Turing-Architecture]], [[NVIDIA-CloudXR]], [[NVIDIA-Capture-SDK]], [[NVIDIA-AI-for-Media-SDKs]], [[NVIDIA-Omniverse]], [[TensorRT]], [[TensorRT-for-RTX]], [[Nsight-Graphics]], [[Nsight-Aftermath-SDK]], [[Nsight-Perf-SDK]]
**Sources:** NVIDIA official documentation, https://www.nvidia.com/en-us/data-center/products/rtx-pro-server/, https://docs.nvidia.com/maxine/index.html, https://docs.nvidia.com/deeplearning/tensorrt-rtx/latest/index.html, https://developer.nvidia.com/nsight-graphics/get-started, https://developer.nvidia.com/nvidia-aftermath, https://developer.nvidia.com/nsight-perf-sdk, https://developer.nvidia.com/rtx/ray-tracing/optix
**Last Updated:** 2026-05-15

## Summary
NVIDIA RTX is a platform encompassing hardware ray tracing, AI-accelerated rendering, and programmable shading on NVIDIA Turing and later GPU architectures. RTX introduces dedicated RT Cores for hardware-accelerated ray/triangle and ray/bounding-box intersection, Tensor Cores for AI tasks (DLSS, denoising, neural shaders), and Shader Execution Reordering (SER) for coherent ray traversal. The RTX brand covers both consumer GeForce RTX GPUs and professional RTX Ada Generation workstation GPUs, and is the foundation for NVIDIA's AI-on-RTX PC computing initiative.

## Detail

### Purpose
Physically accurate lighting simulation (ray tracing) produces dramatically more realistic images than rasterization-based approximations, but is computationally expensive. NVIDIA RTX provides dedicated hardware acceleration for ray tracing operations and AI inference, making real-time ray tracing practical for games, design, and visualization workloads that previously required offline rendering.

### Key Features
- RT Cores: hardware BVH traversal and ray-box/ray-triangle intersection (Turing+)
- Tensor Cores: matrix multiply accelerators for DLSS, AI denoising, neural rendering
- Shader Execution Reordering (SER): Ada Lovelace feature for 2x ray tracing coherence improvement
- Opacity Micromap (OMM): hardware acceleration for alpha-tested geometry
- Displaced Micro-Mesh (DMM): Blackwell hardware tessellation for fine geometric detail
- RTX IO: GPU decompression for fast asset streaming from NVMe (DirectStorage integration)
- RTX Neural Shaders: Blackwell capability to run small neural networks inside HLSL shaders
- Support for DirectX Raytracing (DXR), Vulkan Ray Tracing, and NVIDIA's NvRTX path
- NVIDIA RTX Remix: modding platform to add ray tracing to classic DirectX 8/9 games

### Use Cases
- Real-time ray-traced games (reflections, shadows, global illumination, ambient occlusion)
- Architectural visualization and product design rendering
- Visual effects (VFX) previsualization with real-time path tracing
- Digital content creation (DCC): Blender, Maya, 3ds Max GPU rendering
- Scientific visualization with physically accurate light transport
- Autonomous vehicle sensor simulation
- XR and remote visualization via [[NVIDIA-CloudXR]]
- Capture, encode, and stream workflows adjacent to [[NVIDIA-Capture-SDK]]

### Hardware Requirements / Compatibility
- RT Cores available on: RTX 20, 30, 40, 50 (GeForce) and RTX A-series (Quadro)
- Tensor Cores (for DLSS): same generations
- Shader Execution Reordering: Ada Lovelace (RTX 40) and later
- APIs: DirectX 12 Ultimate / DXR, Vulkan 1.2+ ray tracing extension, NVIDIA OptiX

### Language Bindings / APIs
- HLSL (DirectX Raytracing / DXR)
- GLSL / SPIR-V (Vulkan Ray Tracing)
- NVIDIA OptiX (C++/CUDA for offline, scientific, visualization, and simulation ray tracing)
- NVIDIA RTXGI (Global Illumination SDK), RTXDI (Direct Illumination SDK)
- Unreal Engine 5 Lumen/Path Tracing / Unity HDRP

## Connections
- [[NVIDIA-OptiX]] - OptiX is NVIDIA's CUDA-oriented ray tracing SDK and application framework for RTX-class GPUs.
- [[NVIDIA-DLSS]] — DLSS is the primary AI rendering technology in the RTX platform
- [[NVIDIA-Blackwell-Architecture]] — Blackwell adds Neural Shaders, DMM, and DLSS 4 to RTX
- [[NVIDIA-RTX-PRO-Server]] — enterprise server platform for RTX PRO Blackwell AI, rendering, simulation, and visualization workloads.
- [[NVIDIA-Ada-Lovelace-Architecture]] — Ada introduced SER and major RTX rendering improvements
- [[NVIDIA-Turing-Architecture]] — Turing introduced the original RTX hardware ray tracing generation
- [[NVIDIA-CloudXR]] — CloudXR streams RTX-rendered XR workloads from GPU servers to clients
- [[NVIDIA-Capture-SDK]] — capture SDKs are adjacent to RTX remote visualization and media streaming workflows
- [[NVIDIA-AI-for-Media-SDKs]] — RTX GPUs accelerate AI media effects for audio, video, and AR workflows.
- [[NVIDIA-Omniverse]] — Omniverse uses RTX-accelerated path tracing for photorealistic USD rendering
- [[TensorRT]] — Tensor Cores serve both TensorRT inference and RTX DLSS AI workloads
- [[TensorRT-for-RTX]] - RTX-focused TensorRT runtime for local AI inference across RTX desktops, laptops, and workstations.
- [[Nsight-Graphics]] - debugging/profiling tool for RTX graphics, ray tracing, GPU Trace, shaders, and frame capture.
- [[Nsight-Aftermath-SDK]] - crash-dump SDK for diagnosing GPU exceptions and TDRs in D3D12/Vulkan RTX applications.
- [[Nsight-Perf-SDK]] - in-application GPU performance metric SDK for DirectX, Vulkan, and OpenGL graphics workloads.

## Resources
- [RTX Developer Page](https://developer.nvidia.com/rtx)
- [RTX Technology Overview](https://developer.nvidia.com/rtx/ray-tracing)
- [NVIDIA OptiX](https://developer.nvidia.com/optix)
- [DLSS SDK](https://developer.nvidia.com/rtx/dlss)
