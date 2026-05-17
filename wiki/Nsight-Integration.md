# Nsight Integration

**Type:** Visual Studio extension / Nsight launcher
**Tags:** NVIDIA, Nsight, Visual Studio, Nsight Integration, Nsight Compute, Nsight Graphics, Nsight Systems, developer tools, profiling, debugging
**Related:** [[Nsight-Developer-Tools]], [[Nsight-Visual-Studio-Edition]], [[Nsight-Compute]], [[Nsight-Graphics]], [[Nsight-Systems]], [[Nsight-Visual-Studio-Code-Edition]], [[NVIDIA-CUDA]], [[NVIDIA-Developer-Program]]
**Sources:** https://docs.nvidia.com/nsight-vs-integration/index.html, https://docs.nvidia.com/nsight-vs-integration/getting-started/index.html, https://docs.nvidia.com/nsight-vs-integration/release-notes/index.html, https://docs.nvidia.com/nsight-developer-tools/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Nsight Integration is the Visual Studio extension that exposes standalone Nsight tools from inside Microsoft Visual Studio. It lets installed Nsight Compute, Nsight Graphics, and Nsight Systems activities appear under the Visual Studio Nsight menu while preserving those tools as standalone applications.

## Detail
Nsight Integration is separate from [[Nsight-Visual-Studio-Edition]]. [[Nsight-Visual-Studio-Edition]] provides Visual Studio CUDA build/debug/correctness capabilities, while Nsight Integration discovers installed standalone Nsight tools and adds Visual Studio menu entries for launching them against the current project.

The current participating tools are [[Nsight-Compute]] for CUDA kernel profiling, [[Nsight-Graphics]] for graphics frame debugging/profiling, and [[Nsight-Systems]] for system-wide performance analysis. NVIDIA's docs describe this as part of the migration from older Visual Studio-integrated profiling and graphics workflows toward standalone tools that can still be launched from Visual Studio.

When a standalone tool is launched from Visual Studio through Nsight Integration, the launched Nsight activity can be preconfigured with the Visual Studio project executable path, arguments, working directory, and environment. The extension also supports installed-tool visibility control, key bindings, update notifications, and standard Visual Studio extension enable/disable behavior.

Current release notes list Nsight Integration 2026.1.0 with support for Visual Studio 2026, dropped support for Visual Studio 2019, and compatibility updates aligned with [[Nsight-Visual-Studio-Edition]] dropping Legacy Debugger support.

## Connections
- [[Nsight-Visual-Studio-Edition]] - companion Visual Studio extension for CUDA build/debug/correctness workflows.
- [[Nsight-Compute]] - participating standalone CUDA kernel profiler exposed through the Nsight menu.
- [[Nsight-Graphics]] - participating standalone graphics debugger/profiler exposed through the Nsight menu.
- [[Nsight-Systems]] - participating standalone system-wide profiler exposed through the Nsight menu.
- [[Nsight-Visual-Studio-Code-Edition]] - separate VS Code path; do not confuse it with Visual Studio Nsight Integration.
- [[NVIDIA-Developer-Program]] - developer tools downloads, docs, forums, and release context.

## Resources
- [Nsight Integration documentation](https://docs.nvidia.com/nsight-vs-integration/index.html)
- [Getting started with Nsight Integration](https://docs.nvidia.com/nsight-vs-integration/getting-started/index.html)
- [Nsight Integration release notes](https://docs.nvidia.com/nsight-vs-integration/release-notes/index.html)
- [Nsight Developer Tools hub](https://docs.nvidia.com/nsight-developer-tools/index.html)
