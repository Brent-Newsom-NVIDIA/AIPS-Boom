# NVIDIA DLSS

**Type:** Technology
**Tags:** NVIDIA, DLSS, Deep Learning Super Sampling, RTX, Gaming, Upscaling, AI Rendering, Frame Generation
**Related:** [[NVIDIA-RTX]], [[TensorRT]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Hopper-Architecture]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-10

## Summary
NVIDIA DLSS (Deep Learning Super Sampling) is a suite of AI-powered rendering technologies that use Tensor Core-accelerated neural networks to boost game frame rates and image quality. DLSS uses a temporal super-resolution model to upscale lower-resolution rendered frames to native resolution, allowing games to render at a fraction of the pixel cost while maintaining or exceeding native image quality. DLSS 3 added Frame Generation (synthesizing entirely new intermediate frames) and DLSS 3.5 added Ray Reconstruction for improved ray-traced image quality.

## Detail

### Purpose
Real-time 3D rendering at high resolutions (4K) and high frame rates (144fps+) with ray tracing is computationally prohibitive on current hardware. DLSS solves this by offloading upscaling and frame generation to dedicated AI hardware (Tensor Cores), freeing rasterization and ray tracing budget for more effects while delivering higher frame rates and better image quality than native resolution rendering.

### Key Features
- DLSS Super Resolution (DLSS 2+): temporal upscaling via CNN/transformer model; Quality/Balanced/Performance/Ultra Performance modes
- DLSS Frame Generation (DLSS 3, Ada Lovelace+): Optical Flow Accelerator generates new frames between rendered frames; 2x+ fps boost
- DLSS Ray Reconstruction (DLSS 3.5): AI denoiser replacing traditional ray tracing denoisers; better lighting, reflections, shadows
- DLSS 4 (Blackwell): Multi Frame Generation (4 AI frames per rendered frame); transformer-based Super Resolution model
- NVIDIA Reflex integration: low-latency system latency measurement and optimization
- NVIDIA Image Scaling (NIS): open-source spatial upscaler fallback for non-RTX GPUs
- SDK integration: Unity, Unreal Engine 5, and custom engine plugins
- 300+ games and applications supporting DLSS

### Use Cases
- PC gaming at 4K/1440p/1080p with higher frame rates
- VR rendering: higher fidelity at VR-required 90fps+
- Creative applications: Blender Cycles, OctaneRender, real-time viewport
- Video conferencing: Maxine uses DLSS techniques for video enhancement
- RTX showcases for NVIDIA partner marketing

### Hardware Requirements / Compatibility
- DLSS Super Resolution (DLSS 2): RTX 20, 30, 40, 50 series
- DLSS Frame Generation: RTX 40 series (Ada Lovelace) or newer only
- DLSS 4 Multi Frame Generation: RTX 50 series (Blackwell) recommended
- DLSS Ray Reconstruction: RTX 40 series+ recommended

### Language Bindings / APIs
- DLSS SDK (C++/C): NGX API for engine integration
- Unreal Engine 5 DLSS Plugin (Streamline)
- Unity DLSS Package
- Vulkan and DirectX 12 integration

## Connections
- [[NVIDIA-RTX]] — DLSS is part of the RTX platform; Tensor Cores and Optical Flow Accelerator are required
- [[TensorRT]] — DLSS neural networks compiled and optimized similarly to TensorRT inference
- [[NVIDIA-Blackwell-Architecture]] — Blackwell's DLSS 4 with Multi Frame Generation is a key consumer feature
- [[NVIDIA-Hopper-Architecture]] — Hopper Tensor Cores power server-side DLSS equivalents

## Resources
- [DLSS Official Page](https://developer.nvidia.com/rtx/dlss)
- [DLSS SDK](https://developer.nvidia.com/rtx/dlss/get-started)
- [DLSS 4 Announcement](https://developer.nvidia.com/blog/dlss-4-with-multi-frame-generation/)
