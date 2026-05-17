# cuPyNumeric

**Type:** Technology
**Tags:** NVIDIA, cuPyNumeric, NumPy, Legate, distributed computing, Python, data science
**Related:** [[NVIDIA-Legate-Core]], [[CuPy]], [[Dask]], [[NVIDIA-RAPIDS]], [[cuDF]], [[cuML]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/cupynumeric/latest/, https://developer.nvidia.com/legate, https://docs.nvidia.com/legate/latest/manual/index.html
**Last Updated:** 2026-04-30

## Summary
cuPyNumeric implements the NumPy API on top of [[NVIDIA-Legate-Core]], enabling Python NumPy-style programs to scale from CPUs to GPUs and multi-node, multi-GPU systems. It is NVIDIA-authored documentation for a Python data-science path distinct from [[CuPy]] and [[NVIDIA-RAPIDS]].

## Detail

### Purpose
NumPy is widely used, but single-node CPU execution limits many scientific and data-processing workloads. cuPyNumeric aims to preserve NumPy-style code while scaling execution onto accelerated and distributed NVIDIA systems.

### Key capabilities
- NumPy API implementation backed by the [[NVIDIA-Legate-Core]] runtime.
- Can run on CPU, single GPU, and multi-node multi-GPU configurations.
- Targets transparent acceleration and scaling of Python numerical programs.
- Complements RAPIDS and CuPy rather than replacing every use case.

### NVIDIA context
cuPyNumeric sits in NVIDIA's Python accelerated-computing portfolio alongside [[NVIDIA-Legate-Core]], [[CuPy]], [[Dask]], [[NVIDIA-RAPIDS]], [[cuDF]], and [[cuML]]. It is particularly relevant to scientific Python workloads where users want NumPy compatibility with large-scale GPU infrastructure.

## Connections
- [[NVIDIA-Legate-Core]] - runtime and framework foundation that cuPyNumeric is built on.
- [[CuPy]] - NumPy/SciPy-compatible GPU array library with a different execution model.
- [[Dask]] - distributed Python execution used in RAPIDS and data workflows.
- [[NVIDIA-RAPIDS]] - adjacent CUDA-X data science stack for DataFrames, ML, graph analytics, and vector search.
- [[cuDF]] - GPU DataFrame library for tabular data.
- [[NVIDIA-DGX-SuperPOD]] - scale-out target class for multi-node GPU Python workloads.
- [[NVIDIA-CUDA]] - underlying GPU acceleration platform.

## Source Excerpts
- NVIDIA's cuPyNumeric docs describe a NumPy API implementation built on Legate for CPU, GPU, and multi-node scaling.
