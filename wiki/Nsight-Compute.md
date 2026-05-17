# Nsight Compute

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Profiling, Performance Analysis, Development Tools, CUDA Toolkit
**Related:** [[Nsight-Developer-Tools]], [[Nsight-Copilot]], [[ComputeEval]], [[Nsight-JupyterLab-Extension]], [[Nsight-Python]], [[Nsight-Systems]], [[Nsight-Deep-Learning-Designer]], [[Nsight-Graphics]], [[Nsight-Integration]], [[Nsight-Visual-Studio-Code-Edition]], [[Nsight-Visual-Studio-Edition]], [[Nsight-Eclipse-Plugins]], [[NVTX]], [[NVCC]], [[CUDA-Python]], [[cuda-bindings]], [[cuTile]], [[CUDA-GDB]], [[Compute-Sanitizer]]
**Sources:** NVIDIA official documentation (docs.nvidia.com/cuda), https://docs.nvidia.com/cuda/cutile-python/quickstart.html, https://nvidia.github.io/cuda-python/cuda-bindings/latest/overview.html, https://docs.nvidia.com/nsight-python/index.html, https://developer.nvidia.com/nsight-dl-designer, https://docs.nvidia.com/nsight-developer-tools/index.html, https://docs.nvidia.com/nsight-vs-integration/getting-started/index.html, https://developer.nvidia.com/tools-overview/nsight-compute/get-started
**Last Updated:** 2026-04-29

## Summary
Nsight Compute is NVIDIA's next-generation interactive GPU kernel profiler for CUDA applications, providing detailed per-kernel performance metrics, hardware counter data, and guided analysis for identifying and resolving performance bottlenecks. It supports both an interactive GUI and a command-line interface (ncu), and provides roofline analysis, memory throughput breakdowns, and warp execution efficiency metrics to guide kernel optimization.

## Detail

### Purpose
Writing a correct GPU kernel is only half the challenge — writing a fast one requires understanding how the kernel utilizes hardware resources (compute throughput, memory bandwidth, occupancy). Nsight Compute provides the detailed hardware-level data needed to understand why a kernel is slow and what to fix, guiding developers from "it works" to "it runs optimally."

### Key Features
- Interactive kernel profiler with GUI (Nsight Compute IDE) and command-line tool (ncu)
- Nsight Copilot preview in the standalone Nsight Compute 2026.1 download for CUDA-aware profiler guidance
- Detailed hardware performance metrics: compute throughput, memory bandwidth, L1/L2/HBM utilization
- Warp execution efficiency and occupancy analysis
- Roofline performance model visualization
- Source-level attribution: maps performance data back to CUDA source lines and PTX instructions
- Guided analysis with automated bottleneck identification and recommendations
- API debugging: inspect CUDA API calls and their overhead
- Comparison view for before/after optimization analysis
- Multi-GPU and multi-stream profiling
- Supports CUDA 10.0+

### Use Cases
- Identifying memory-bound vs. compute-bound kernel bottlenecks
- Optimizing occupancy and warp efficiency
- Understanding cache hit rates and memory access patterns
- Guided optimization for HPC and deep learning kernels
- Validating performance improvements after code changes
- Performance regression testing

### Hardware Requirements
- NVIDIA GPU with CUDA support (Volta and later for full feature set)
- CUDA Toolkit installed
- Available on Linux, Windows, and macOS (with GUI or CLI)

### Language Bindings
- Command-line tool (ncu) — works on any compiled CUDA binary
- Python API for automated analysis scripting
- GUI application (cross-platform)

## Connections
- [[Nsight-Systems]] — Nsight Systems provides application-level profiling; Nsight Compute provides kernel-level deep dive
- [[Nsight-Copilot]] - preview integration in Nsight Compute for CUDA-aware guidance on profiler findings.
- [[ComputeEval]] - can use `ncu` mode to collect detailed performance metrics for generated CUDA solutions.
- [[Nsight-Python]] — Python automation layer can collect Nsight Compute-style kernel metrics.
- [[Nsight-JupyterLab-Extension]] - JupyterLab workflow for launching Nsight Compute profiling on notebook cells.
- [[NVTX]] - annotation API whose ranges can focus Nsight Compute profiling.
- [[Nsight-Deep-Learning-Designer]] - adjacent Nsight IDE for ONNX model design and inference profiling with TensorRT/ONNX Runtime.
- [[Nsight-Graphics]] - graphics debugger/profiler counterpart for frame capture, GPU Trace, shaders, and ray tracing.
- [[Nsight-Integration]] - Visual Studio extension can launch Nsight Compute activities from the Visual Studio Nsight menu.
- [[Nsight-Visual-Studio-Code-Edition]] - VS Code CUDA debugging workflow that can precede kernel-level performance profiling.
- [[Nsight-Visual-Studio-Edition]] — Windows Visual Studio integration for CUDA debugging/profiling workflows
- [[Nsight-Eclipse-Plugins]] — Eclipse-based IDE plugins for older CUDA Linux development workflows
- [[NVCC]] — NVCC compiles the kernels that Nsight Compute then profiles
- [[CUDA-Python]] and [[cuda-bindings]] — CUDA Python binding examples are documented as compatible with Nsight Compute profiling.
- [[cuTile]] — NVIDIA's cuTile quickstart documents profiling cuTile Python kernels with `ncu`.
- [[CUDA-GDB]] — CUDA-GDB debugs kernel correctness; Nsight Compute optimizes kernel performance
- [[Compute-Sanitizer]] — Compute Sanitizer checks correctness; Nsight Compute analyzes performance

## Resources
- [Nsight Compute Documentation](https://docs.nvidia.com/nsight-compute/)
- [Nsight Compute Download](https://developer.nvidia.com/nsight-compute)
