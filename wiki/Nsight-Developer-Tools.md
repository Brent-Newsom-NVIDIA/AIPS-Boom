# Nsight Developer Tools

**Type:** Developer tools suite
**Tags:** NVIDIA, Nsight, developer tools, CUDA, profiling, debugging, correctness, graphics, cloud, IDE, SDK
**Related:** [[NVIDIA-CUDA]], [[Nsight-Systems]], [[Nsight-Compute]], [[Nsight-Copilot]], [[Nsight-Graphics]], [[Nsight-Cloud]], [[Nsight-Visual-Studio-Edition]], [[Nsight-Visual-Studio-Code-Edition]], [[Nsight-Integration]], [[Nsight-JupyterLab-Extension]], [[Nsight-Python]], [[Nsight-Deep-Learning-Designer]], [[Nsight-Aftermath-SDK]], [[Nsight-Perf-SDK]], [[Nsight-Eclipse-Plugins]], [[CUDA-GDB]], [[Compute-Sanitizer]], [[CUPTI]], [[NVTX]], [[CUDA-Debugger-API]], [[NVIDIA-Developer-Program]]
**Sources:** https://docs.nvidia.com/nsight-developer-tools/index.html, https://developer.nvidia.com/tools-overview, https://developer.nvidia.com/tools-tutorials
**Last Updated:** 2026-04-29

## Summary
NVIDIA Nsight Developer Tools is the suite-level umbrella for NVIDIA tools used to build, debug, profile, and analyze GPU-accelerated software across desktop, mobile, embedded, cloud, cluster, and HPC environments. It is a hub page; use the linked tool pages for implementation details and current requirements.

## Detail
NVIDIA's current docs describe Nsight Developer Tools as a comprehensive tool suite spanning desktop and mobile targets. The developer tools overview organizes the suite around code development, debugging/correctness, profiling, tracing, APIs, platform analysis, kernel analysis, graphics analysis, cloud profiling, and SDK integration.

For profiling, start with [[Nsight-Systems]] for system-wide timeline analysis and then use [[Nsight-Compute]] for CUDA kernel-level metrics or [[Nsight-Graphics]] for graphics frame, shader, and GPU Trace workflows. [[Nsight-Copilot]] adds CUDA-aware AI assistance around VS Code development and preview Nsight Compute kernel-profiling guidance. For cloud and Kubernetes environments, [[Nsight-Cloud]] provides Operator, Injector, Coordinator, and Streamer components that make Nsight workflows usable in containerized clusters.

For development and debugging, use [[Nsight-Visual-Studio-Edition]] for Microsoft Visual Studio, [[Nsight-Visual-Studio-Code-Edition]] for VS Code, [[Nsight-Eclipse-Plugins]] for Eclipse-based CUDA workflows, [[CUDA-GDB]] for command-line CUDA debugging, and [[Compute-Sanitizer]] for functional correctness checking. [[Nsight-Integration]] links standalone Nsight tools back into the Visual Studio menu.

For notebook and Python workflows, use [[Nsight-JupyterLab-Extension]] to profile notebook cells with Nsight Systems or Nsight Compute, and [[Nsight-Python]] for Python-first profiling automation.

For APIs and SDKs, related pages include [[CUPTI]] for profiler/tracer construction, [[NVTX]] for application ranges and annotations, [[CUDA-Debugger-API]] for debugger integration, [[Nsight-Aftermath-SDK]] for graphics crash dump collection, and [[Nsight-Perf-SDK]] for in-application graphics performance metrics.

The current NVIDIA overview also lists legacy tools. Compute Sanitizer API coverage belongs in [[Compute-Sanitizer]] while NVIDIA keeps the API reference inside the current Compute Sanitizer documentation set.

## Connections
- [[Nsight-Systems]] - high-level system profiler and recommended first stop for profiling.
- [[Nsight-Compute]] - CUDA kernel profiler for hardware counters and guided kernel analysis.
- [[Nsight-Copilot]] - CUDA-aware AI assistant for VS Code development and preview Nsight Compute guidance.
- [[Nsight-Graphics]] - graphics debugger/profiler for frame capture, GPU Trace, shaders, and ray tracing.
- [[Nsight-Cloud]] - cloud-native Nsight profiling path for Kubernetes and containerized environments.
- [[Nsight-Visual-Studio-Edition]], [[Nsight-Visual-Studio-Code-Edition]], and [[Nsight-Eclipse-Plugins]] - IDE-oriented CUDA development/debugging paths.
- [[Nsight-Integration]] - Visual Studio bridge to standalone Nsight tools.
- [[Nsight-JupyterLab-Extension]] - notebook-cell profiling workflow for Nsight Systems and Nsight Compute.
- [[CUDA-GDB]], [[Compute-Sanitizer]], [[CUPTI]], [[NVTX]], and [[CUDA-Debugger-API]] - lower-level CUDA debugger, correctness, annotation, tracing, and integration APIs.
- [[NVIDIA-Developer-Program]] - support, tutorials, forums, downloads, and developer access for Nsight tools.

## Resources
- [Nsight Developer Tools docs hub](https://docs.nvidia.com/nsight-developer-tools/index.html)
- [Nsight Developer Tools overview](https://developer.nvidia.com/tools-overview)
- [Nsight Developer Tools tutorials](https://developer.nvidia.com/tools-tutorials)
