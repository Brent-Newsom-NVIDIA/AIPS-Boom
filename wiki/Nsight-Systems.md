# Nsight Systems

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Profiling, System Analysis, Development Tools, CUDA Toolkit
**Related:** [[Nsight-Developer-Tools]], [[Nsight-Cloud]], [[Nsight-Compute]], [[Nsight-JupyterLab-Extension]], [[Nsight-Python]], [[Nsight-Deep-Learning-Designer]], [[Nsight-Graphics]], [[Nsight-Integration]], [[Nsight-Visual-Studio-Code-Edition]], [[Nsight-Visual-Studio-Edition]], [[Nsight-Eclipse-Plugins]], [[NVTX]], [[NVCC]], [[CUDA-GDB]], [[Compute-Sanitizer]]
**Sources:** NVIDIA official documentation (docs.nvidia.com/cuda), https://docs.nvidia.com/nsight-python/index.html, https://developer.nvidia.com/nsight-dl-designer, https://developer.nvidia.com/nsight-graphics/get-started, https://docs.nvidia.com/nsight-vs-integration/getting-started/index.html, https://developer.nvidia.com/nsight-cloud, https://docs.nvidia.com/nsight-systems/UserGuide/#profiling-services-in-the-cloud, https://docs.nvidia.com/nsight-systems/UserGuide/#profiling-within-jupyterlab
**Last Updated:** 2026-04-29

## Summary
Nsight Systems is NVIDIA's system-wide performance profiler for GPU-accelerated applications, providing a unified timeline view of CPU, GPU, and memory activity across the entire application. It traces CUDA API calls, kernel launches, memory transfers, OS events, and framework-level operations (PyTorch, TensorFlow) to identify where time is spent at the application level — the starting point before diving into kernel-level optimization with Nsight Compute.

## Detail

### Purpose
Before optimizing individual GPU kernels, developers need to understand the big picture: where is the application spending time? Is it GPU-bound, CPU-bound, or communication-bound? Is data transfer or kernel launch overhead the bottleneck? Nsight Systems provides this application-level view, enabling developers to identify the right kernels and operations to optimize before using Nsight Compute for deep dives.

### Key Features
- System-wide timeline: CPU threads, GPU kernels, memory transfers, CUDA API calls in one view
- Framework-level tracing: PyTorch, TensorFlow, JAX, TensorRT, DALI, cuDNN annotations
- Multi-GPU support: trace multiple GPUs simultaneously
- Network and communication profiling: NVLink, InfiniBand, NCCL collective operations
- OS-level event tracing: thread scheduling, I/O operations
- Timeline visualization with zoom and filter capabilities
- Report export for sharing and offline analysis
- Command-line interface (nsys) for headless/CI usage
- CPU sampling for identifying hot functions on host
- Supports CUDA, OpenGL, Vulkan, Direct3D APIs
- Cloud and Kubernetes profiling workflows through [[Nsight-Cloud]], including sidecar injection and browser-accessible report viewing.

### Use Cases
- Identifying CPU-GPU synchronization bottlenecks
- Finding idle GPU time due to data starvation
- Profiling NCCL communication overhead in distributed training
- Understanding PyTorch/TensorFlow operator execution timelines
- CI/CD performance regression testing
- End-to-end pipeline optimization (data loading, preprocessing, inference)

### Hardware Requirements
- NVIDIA GPU with CUDA support
- All modern NVIDIA GPU architectures supported
- Available on Linux, Windows, and macOS
- CUDA Toolkit or standalone Nsight Systems installation

### Language Bindings
- Command-line tool (nsys) — works on any application
- Python API for automated report analysis
- GUI application (cross-platform)
- [[NVTX]] (NVIDIA Tools Extension) API for custom annotations from user code (C, C++, Python, Fortran)

## Connections
- [[Nsight-Compute]] — Nsight Systems provides the high-level view; Nsight Compute provides per-kernel deep analysis
- [[Nsight-Cloud]] - cloud-native deployment path for Nsight Systems profiling in Kubernetes and remote cluster environments.
- [[Nsight-JupyterLab-Extension]] - notebook-cell workflow for launching Nsight Systems profiling from JupyterLab.
- [[Nsight-Python]] — Python automation layer for Nsight-driven kernel profiling workflows.
- [[NVTX]] - annotation API whose markers and ranges appear in Nsight Systems timelines.
- [[Nsight-Deep-Learning-Designer]] - adjacent Nsight IDE for model-graph editing and TensorRT/ONNX Runtime inference profiling.
- [[Nsight-Graphics]] - graphics profiling/debugging companion for ray tracing, GPU Trace, and frame-level analysis.
- [[Nsight-Integration]] - Visual Studio extension can launch Nsight Systems activities from the Visual Studio Nsight menu.
- [[Nsight-Visual-Studio-Code-Edition]] - VS Code CUDA debugging workflow adjacent to Nsight profiling workflows.
- [[Nsight-Visual-Studio-Edition]] — Windows IDE integration for adjacent Nsight workflows
- [[Nsight-Eclipse-Plugins]] — Eclipse plugin path for CUDA IDE integration on Linux
- [[NVCC]] — NVCC-compiled CUDA code is profiled by Nsight Systems
- [[NCCL]] — NCCL communication operations appear in the Nsight Systems timeline for distributed training analysis
- [[CUDA-GDB]] — CUDA-GDB provides interactive debugging; Nsight Systems provides performance profiling

## Resources
- [Nsight Systems Documentation](https://docs.nvidia.com/nsight-systems/)
- [Nsight Systems Download](https://developer.nvidia.com/nsight-systems)
