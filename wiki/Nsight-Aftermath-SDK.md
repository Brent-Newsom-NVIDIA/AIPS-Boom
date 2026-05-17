# Nsight Aftermath SDK

**Type:** SDK / crash analysis tool
**Tags:** NVIDIA, Nsight, Aftermath, GPU crash dump, mini-dump, D3D12, DirectX Raytracing, Vulkan, Vulkan Raytracing, TDR, graphics debugging
**Related:** [[Nsight-Developer-Tools]], [[Nsight-Graphics]], [[Nsight-Systems]], [[NVIDIA-RTX]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Turing-Architecture]], [[NVIDIA-Developer-Program]]
**Sources:** https://developer.nvidia.com/nvidia-aftermath, https://developer.nvidia.com/nsight-aftermath/getting-started, https://docs.nvidia.com/nsight-aftermath/SDK/index.html, https://docs.nvidia.com/nsight-aftermath/ReleaseNotes/index.html
**Last Updated:** 2026-04-29

## Summary
Nsight Aftermath SDK is NVIDIA's SDK for integrating GPU crash dump generation and analysis into Direct3D and Vulkan graphics applications. Current NVIDIA material describes it as a C/C++ API that can create GPU mini-dumps when an exception or TDR occurs, expose pipeline information, and integrate with existing crash-reporting workflows.

## Detail

### Purpose
GPU crashes in real-time graphics applications are hard to diagnose because the actionable failure may occur deep inside GPU execution rather than at the CPU call site. Nsight Aftermath SDK lets developers collect lightweight GPU crash dumps from live applications, then inspect shader, marker, resource, and pipeline context to understand and trend crashes.

### Current capabilities
- GPU crash dump creation from live applications.
- GPU crash dump analysis and inspection workflows.
- Application instrumentation with lightweight GPU event markers.
- Integration with existing crash reporters so shipping applications can collect GPU mini-dumps in the field.
- Support for DirectX 12, DirectX Raytracing, Vulkan, and Vulkan Raytracing in current getting-started docs.
- Nsight Graphics 2023.1 or newer is listed as the viewer requirement in current getting-started docs.
- Current release notes call out limitations: Aftermath covers only GPU crashes, not CPU crashes in the graphics driver, D3D runtime, Vulkan loader, or application.

### Scope notes
Current release notes say Nsight Aftermath is only fully supported on Turing or later GPUs. They also note full D3D support is for D3D12 devices, with only basic reduced-feature D3D11 support. Tools that use D3D API interception layers, including [[Nsight-Graphics]] and Microsoft PIX, can conflict with markers and resource tracking.

## Connections
- [[Nsight-Graphics]] - viewer and adjacent graphics debugging/profiling environment for inspecting Aftermath crash dumps.
- [[Nsight-Systems]] - system-level performance context that can complement crash investigations.
- [[NVIDIA-RTX]] - target graphics/ray tracing application context where GPU crash dumps are common.
- [[NVIDIA-Blackwell-Architecture]] and [[NVIDIA-Turing-Architecture]] - current docs emphasize modern GPU support, with full Aftermath support on Turing or later.
- [[NVIDIA-Developer-Program]] - access, downloads, forums, and support context for Nsight developer tools.

## Source Excerpts
- NVIDIA describes Nsight Aftermath as integrating into a D3D12 or Vulkan crash reporter to generate GPU mini-dumps.
- Current SDK docs list three major use cases: crash dump creation, crash dump analysis, and lightweight GPU event markers.
- Current release notes say Aftermath covers only GPU crashes.

## Resources
- [Nsight Aftermath SDK Developer Page](https://developer.nvidia.com/nvidia-aftermath)
- [Nsight Aftermath SDK Getting Started](https://developer.nvidia.com/nsight-aftermath/getting-started)
- [Nsight Aftermath SDK Guide](https://docs.nvidia.com/nsight-aftermath/SDK/index.html)
- [Nsight Aftermath Release Notes](https://docs.nvidia.com/nsight-aftermath/ReleaseNotes/index.html)
