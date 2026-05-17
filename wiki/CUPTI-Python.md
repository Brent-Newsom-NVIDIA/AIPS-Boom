# CUPTI Python

**Type:** Technology
**Tags:** NVIDIA, CUPTI, Python, profiling, CUDA, observability
**Related:** [[CUDA-Python]], [[CUPTI]], [[Nsight-Python]], [[Nsight-Systems]], [[Nsight-Compute]], [[NVIDIA-CUDA]], [[PyTorch]], [[TensorRT]]
**Sources:** https://docs.nvidia.com/cupti-python/, https://nvidia.github.io/cuda-python/latest/, https://docs.nvidia.com/nsight-python/index.html
**Last Updated:** 2026-04-29

## Summary
CUPTI Python provides Python-facing documentation and bindings around the CUDA Profiling Tools Interface. It is listed from the current [[CUDA-Python]] hub and brings [[CUPTI]] profiling and tracing capabilities closer to Python-based AI, HPC, and data-processing workflows.

## Detail

### Purpose
Much of the modern NVIDIA software ecosystem is driven from Python, including [[PyTorch]], [[TensorRT]] tooling, RAPIDS, and custom orchestration. CUPTI Python helps expose CUDA profiling capabilities in that environment instead of requiring every workflow to be built directly in C/C++.

### Key capabilities
- Python documentation for CUDA profiling interface usage.
- Access to CUPTI concepts used by profiling tools targeting CUDA applications.
- Useful for custom telemetry, tracing, and performance instrumentation around Python GPU workloads.

### NVIDIA context
CUPTI Python complements user-facing profilers like [[Nsight-Systems]] and [[Nsight-Compute]] by enabling programmable profiling workflows. It is especially relevant when teams want to collect CUDA activity from Python applications and frameworks.

## Connections
- [[CUPTI]] - underlying CUDA Profiling Tools Interface.
- [[CUDA-Python]] - umbrella for NVIDIA Python CUDA components.
- [[Nsight-Python]] - higher-level Python profiling automation in the CUDA Python ecosystem.
- [[Nsight-Systems]] - system profiler built around CUDA activity visibility.
- [[Nsight-Compute]] - kernel profiler that uses lower-level profiling concepts.
- [[PyTorch]] - Python GPU framework where custom profiling can be valuable.
- [[TensorRT]] - inference workflows often need profiling and trace integration.

## Source Excerpts
- NVIDIA's CUPTI Python docs introduce Python documentation for CUPTI, the profiling interface for CUDA applications.
