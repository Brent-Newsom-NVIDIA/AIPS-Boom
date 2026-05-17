# Nsight Perf SDK

**Type:** SDK / graphics profiling toolbox
**Tags:** NVIDIA, Nsight, Perf SDK, graphics profiling, DirectX, Vulkan, OpenGL, GPU metrics, HUD, timeline, HTML report, CI/CD, Ampere, Blackwell
**Related:** [[Nsight-Developer-Tools]], [[Nsight-Graphics]], [[Nsight-Systems]], [[Nsight-Aftermath-SDK]], [[NVIDIA-RTX]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Ampere-Architecture]], [[NVIDIA-Developer-Program]]
**Sources:** https://developer.nvidia.com/nsight-perf-sdk, https://developer.nvidia.com/nsight-perfsdk/getting-started/release-note-v2025.5, https://developer.nvidia.com/perfworks, https://docs.nvidia.com/nsight-developer-tools/index.html
**Last Updated:** 2026-04-29

## Summary
Nsight Perf SDK is NVIDIA's graphics profiling toolbox for collecting GPU performance metrics directly from DirectX, Vulkan, and OpenGL applications. Current NVIDIA pages position it as the replacement for PerfWorks, with an updated C++ API and support for NVIDIA GPU architectures from Ampere onward.

## Detail

### Purpose
Nsight Perf SDK is for teams that want performance telemetry inside their own application, engine, graphics tool, automated tests, or CI/CD gates rather than only inside an external profiler UI. It exposes NVIDIA GPU performance counters and utilities so developers can trigger profiling, capture metrics, and generate reports under programmatic control.

### Current capabilities
- **Realtime perf triage:** high-level realtime GPU metric collection and visualization.
- **GPU Periodic Sampler:** device-level metrics at high sampling rates with low overhead.
- **Realtime performance HUD:** built-in HUD renderer for SM, L2 cache, ROP, VRAM, and other GPU subsystem signals.
- **Timeline Viewer:** one-shot sampling mode for snapshots of unit throughput, warp occupancy, draw calls, and related activity.
- **HTML profiler reports:** report generator that collects hundreds of GPU metrics, navigates to top limiters, and summarizes workload type, pipeline activity, utilization, shader latency reasons, and 3D data flow.
- **In-application profiling:** custom triggers, custom metric lists, region annotations with PushRange/PopRange, and application-controlled output.
- **CI/CD use:** performance-regression checks driven by GPU metric values.

### Current release notes
Current 2025.5 notes add GB206 and GB207 GPU support and improved unsupported-SKU reporting through `skuSupportLevel` in `NVPA_*_IsGpuSupported` APIs. They also list constraints such as no SLI support, one profiling session per GPU at a time, driver-limited metric availability, no 32-bit x86, and API-specific limitations for D3D12, Vulkan, and D3D11 profilers.

### NVIDIA context
Nsight Perf SDK is a lower-level instrumentation toolbox adjacent to [[Nsight-Graphics]]. Use Nsight Graphics when a developer wants NVIDIA's standalone UI for capture/debug/trace. Use Nsight Perf SDK when an engine, app, or internal tool needs to collect NVIDIA GPU metrics programmatically, show a realtime HUD, or generate automated reports.

## Connections
- [[Nsight-Graphics]] - standalone graphics profiler/debugger; Perf SDK provides in-application metric collection.
- [[Nsight-Systems]] - system-level profiling companion for broader CPU/GPU/timeline analysis.
- [[Nsight-Aftermath-SDK]] - sibling Nsight SDK for graphics GPU crash dumps rather than performance metrics.
- [[NVIDIA-RTX]] - graphics and neural-rendering workloads that benefit from in-app GPU metric telemetry.
- [[NVIDIA-Ampere-Architecture]] and [[NVIDIA-Blackwell-Architecture]] - PerfWorks page says Nsight Perf SDK supports Ampere onward; current release notes add GB206/GB207 support.
- [[NVIDIA-Developer-Program]] - download, forum, and Nsight tool access context.

## Source Excerpts
- NVIDIA describes Nsight Perf SDK as a graphics profiling toolbox for DirectX, Vulkan, and OpenGL.
- Current release notes add GB206 and GB207 support.
- The PerfWorks page says PerfWorks has been replaced by Nsight Perf SDK.

## Resources
- [Nsight Perf SDK Developer Page](https://developer.nvidia.com/nsight-perf-sdk)
- [Nsight Perf SDK 2025.5 Release Notes](https://developer.nvidia.com/nsight-perfsdk/getting-started/release-note-v2025.5)
- [PerfWorks Replacement Notice](https://developer.nvidia.com/perfworks)
- [Nsight Developer Tools](https://docs.nvidia.com/nsight-developer-tools/index.html)
