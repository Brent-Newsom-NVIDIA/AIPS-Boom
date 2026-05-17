# Nsight Graphics

**Type:** Developer tool / graphics profiler
**Tags:** NVIDIA, Nsight, graphics debugging, GPU Trace, Graphics Capture, shader profiler, shader debugger, Direct3D, Vulkan, OpenGL, DirectX Raytracing, Vulkan Raytracing, RTX, DRIVE, Jetson
**Related:** [[Nsight-Developer-Tools]], [[Nsight-Aftermath-SDK]], [[Nsight-Perf-SDK]], [[Nsight-Systems]], [[Nsight-Compute]], [[Nsight-Integration]], [[Nsight-Visual-Studio-Edition]], [[NVTX]], [[NVIDIA-RTX]], [[NVIDIA-DLSS]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Turing-Architecture]], [[NVIDIA-DriveOS]], [[NVIDIA-JetPack-SDK]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-Developer-Program]], [[NVIDIA-CloudXR]]
**Sources:** https://developer.nvidia.com/nsight-graphics/get-started, https://docs.nvidia.com/nsight-graphics/ReleaseNotes/index.html, https://docs.nvidia.com/nsight-developer-tools/index.html, https://developer.nvidia.com/nsight-aftermath/getting-started, https://developer.nvidia.com/nsight-perf-sdk, https://docs.nvidia.com/nsight-vs-integration/getting-started/index.html
**Last Updated:** 2026-04-29

## Summary
Nsight Graphics is NVIDIA's standalone developer tool for debugging, profiling, and exporting frames from graphics applications. Current NVIDIA docs list Direct3D 11/12, DirectX Raytracing, Vulkan 1.4, Vulkan Raytracing, OpenGL 4.2-4.6, and OpenVR support, with Windows, Linux, DRIVE OS, and Jetson distribution paths.

## Detail

### Purpose
Nsight Graphics gives graphics and real-time rendering developers frame capture, replay, shader debugging, shader profiling, GPU Trace, crash dump inspection, and API/resource inspection tools. It is the graphics-side Nsight companion to [[Nsight-Systems]] timeline profiling and [[Nsight-Compute]] CUDA kernel profiling.

### Current capabilities
- **Graphics Capture / Graphics Debugger:** captures graphics workloads for frame analysis, replay, object/resource inspection, ray tracing acceleration structure inspection, and offline analysis.
- **GPU Trace:** frame-level profiler for graphics workloads, including RTX workflows, shader performance, hardware events, and frame-time bottleneck analysis.
- **Shader tools:** shader debugger, shader profiler, shader editing, and current cooperative-vector/layer-fusion analysis for neural-rendering-related workflows.
- **Crash analysis:** GPU crash dump inspection through [[Nsight-Aftermath-SDK]] dump viewing in the graphics workflow.
- **Developer interfaces:** current docs include an Nsight Graphics SDK, in beta in 2026.1, for programmatic control of Graphics Capture and GPU Trace activities.
- **Platform/API coverage:** current get-started docs list Windows and Linux downloads; DRIVE OS and JetPack bundle paths; RTX 20/30/40/50-series GeForce GPUs; RTX-series or better Quadro GPUs; D3D11/D3D12/DXR, Vulkan/Vulkan ray tracing, OpenGL, and OpenVR.
- **2026.1 release signals:** current release notes mention leaving captured applications open while debugging, live GPU Trace from Graphics Capture replay, shader profiler support for layer-fusion breakage, and the beta Nsight Graphics SDK.

### NVIDIA context
Nsight Graphics is the primary NVIDIA graphics debugger/profiler for [[NVIDIA-RTX]] rendering and ray tracing applications. It is especially relevant to developers working on DXR/Vulkan ray tracing, RTX Mega Geometry-style workflows, shader performance, neural rendering, and graphics application stability.

NVIDIA also distributes it in automotive and edge stacks: current get-started docs say Nsight Graphics is bundled as part of [[NVIDIA-DriveOS]] for DRIVE AGX development and deployment, and as part of the Jetson development suite in [[NVIDIA-JetPack-SDK]].

## Connections
- [[Nsight-Aftermath-SDK]] - SDK for collecting GPU crash mini-dumps that can be inspected in the graphics debugging workflow.
- [[Nsight-Perf-SDK]] - in-application graphics performance metric collection SDK adjacent to GPU Trace workflows.
- [[Nsight-Systems]] - system-level profiler often paired with Nsight Graphics for end-to-end graphics and ray tracing performance analysis.
- [[Nsight-Compute]] - CUDA kernel profiler for compute-heavy graphics, neural rendering, and GPU workloads adjacent to Graphics.
- [[NVTX]] - annotation API whose ranges can bound graphics range profiling workflows.
- [[Nsight-Integration]] - Visual Studio extension can launch Nsight Graphics activities from the Visual Studio Nsight menu.
- [[Nsight-Visual-Studio-Edition]] - Visual Studio Nsight integration path on Windows.
- [[NVIDIA-RTX]], [[NVIDIA-DLSS]], [[NVIDIA-Blackwell-Architecture]], and [[NVIDIA-Turing-Architecture]] - graphics/ray tracing hardware and feature context.
- [[NVIDIA-DriveOS]] - current docs say Nsight Graphics is bundled as part of DRIVE OS.
- [[NVIDIA-JetPack-SDK]] and [[NVIDIA-Jetson-Platform]] - current docs say Nsight Graphics is bundled in the Jetson development suite.
- [[NVIDIA-Developer-Program]] - registered developer access, forums, release notes, and bug-reporting context.
- [[NVIDIA-CloudXR]] - adjacent RTX graphics application/streaming workflow where frame/debug/profiling tools matter.

## Source Excerpts
- Current developer docs say Nsight Graphics 2026.1 is available now.
- Current get-started docs list Direct3D, DirectX Raytracing, Vulkan, Vulkan Raytracing, OpenGL, and OpenVR support.
- Current Nsight Developer Tools docs describe Nsight Graphics as a standalone tool for debugging, profiling, and exporting graphics frames.

## Resources
- [Nsight Graphics Get Started](https://developer.nvidia.com/nsight-graphics/get-started)
- [Nsight Graphics Release Notes](https://docs.nvidia.com/nsight-graphics/ReleaseNotes/index.html)
- [Nsight Developer Tools](https://docs.nvidia.com/nsight-developer-tools/index.html)
