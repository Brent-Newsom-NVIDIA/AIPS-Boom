# NVTX

**Type:** Annotation API / developer tools library
**Tags:** NVIDIA, NVTX, NVIDIA Tools Extension, profiling, tracing, annotations, markers, ranges, resource naming, Nsight Systems, Nsight Compute, Nsight Graphics, CUPTI, CUDA
**Related:** [[Nsight-Developer-Tools]], [[Nsight-Systems]], [[Nsight-Compute]], [[Nsight-Graphics]], [[CUPTI]], [[ComputeEval]], [[NVIDIA-CUDA]], [[CUDA-Python]], [[Nsight-Python]], [[Nsight-JupyterLab-Extension]]
**Sources:** https://nvidia.github.io/NVTX/, https://nvidia.github.io/NVTX/doxygen-c/html/index.html, https://nvidia.github.io/NVTX/python/
**Last Updated:** 2026-04-29

## Summary
NVTX (NVIDIA Tools Extension Library) is NVIDIA's cross-platform annotation API for adding contextual information to source code so developer tools can correlate application intent with profiling and tracing data. It provides markers, ranges, resource naming, and resource tracking for tools such as [[Nsight-Systems]], [[Nsight-Compute]], [[Nsight-Graphics]], and [[CUPTI]].

## Detail
NVTX calls normally do not perform visible work by themselves. When an application is launched from a developer tool, that tool can redirect NVTX calls into tool-specific behavior such as timeline ranges, statistical profiles, scoped collection, console messages, or forwarded logging events.

The core annotation types are markers, ranges, and resource names. Markers represent points in execution. Ranges represent intervals and can be nested push/pop ranges or start/end ranges that may overlap and cross threads. Resource naming gives tools more meaningful labels for CPU threads and other objects in timelines and analysis views.

For C and C++, NVTX v3 is header-only and dependency-free. NVIDIA recommends including headers under the `nvtx3` directory, such as `#include <nvtx3/nvToolsExt.h>` for C or `#include <nvtx3/nvtx3.hpp>` for C++. NVTX v3 does not require linking against an NVTX binary library, though POSIX platforms require `-ldl`. NVTX is also available for Python through the `nvtx` package.

NVTX is especially useful when profiling complex CUDA, Python, framework, and graphics applications because it gives [[Nsight-Systems]] timeline ranges meaningful application names, lets [[Nsight-Compute]] focus deep kernel analysis using NVTX ranges, lets [[Nsight-Graphics]] bound range profiling in frame-debugger workflows, and can be recorded through [[CUPTI]].

NVTX supports Windows, Linux/POSIX-like platforms, and Android for CPU-side code. It is not supported in CUDA `__device__` functions; for GPU-side low-overhead instrumentation, NVIDIA points to PTX `pmevent`.

## Connections
- [[Nsight-Systems]] - logs NVTX calls and shows them on a timeline with driver, OS, and hardware events.
- [[Nsight-Compute]] - can use NVTX ranges to focus deep-dive GPU performance analysis.
- [[Nsight-Graphics]] - can use NVTX ranges to bound range profiling in graphics workflows.
- [[CUPTI]] - supports recording traces of NVTX calls for custom tooling.
- [[ComputeEval]] - uses NVTX region timing for benchmark sections around generated CUDA workloads.
- [[Nsight-Python]] and [[Nsight-JupyterLab-Extension]] - Python and notebook workflows can benefit from NVTX-style range annotation.
- [[NVIDIA-CUDA]] - CUDA Toolkit includes NVTX v3 and profiling tools that consume NVTX annotations.

## Resources
- [NVTX documentation](https://nvidia.github.io/NVTX/)
- [NVTX C API reference](https://nvidia.github.io/NVTX/doxygen-c/html/index.html)
- [NVTX Python documentation](https://nvidia.github.io/NVTX/python/)
