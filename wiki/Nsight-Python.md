# Nsight Python

**Type:** Technology
**Tags:** NVIDIA, Nsight, Python, Profiling, CUDA, Performance, Kernel Analysis
**Related:** [[Nsight-Developer-Tools]], [[Nsight-JupyterLab-Extension]], [[CUDA-Python]], [[Nsight-Compute]], [[Nsight-Systems]], [[CUPTI-Python]], [[PyTorch]], [[CuPy]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/nsight-python/index.html, https://docs.nvidia.com/nsight-python/overview/quickstart.html, https://developer.nvidia.com/nsight-python, https://nvidia.github.io/cuda-python/latest/
**Last Updated:** 2026-04-29

## Summary
Nsight Python is NVIDIA's Python kernel profiling interface for automating performance analysis across multiple kernel configurations with NVIDIA Nsight tools. It provides Python APIs such as `nsight.analyze` and `nsight.annotate` so Python GPU workloads can collect profiling results without leaving the Python workflow.

## Detail

### Purpose
Python GPU developers often need to compare kernel implementations, matrix sizes, parameters, or library calls repeatedly. Nsight Python wraps Nsight profiling workflows in a Python-first interface so users can decorate benchmark functions, annotate regions, collect metrics, and analyze results programmatically.

### Key capabilities
- Python kernel profiling interface built around NVIDIA Nsight tools.
- `nsight.analyze` APIs for running profiling analysis.
- `nsight.annotate` context/decorator patterns for marking the kernel region to profile.
- Quickstart flow that decorates a Python function and returns results as a pandas DataFrame.
- Documentation sections for core concepts, architecture, installation, API reference, collection, extraction, transformation, visualization, and a Nsight Compute collector.
- Developer page positioning around decorators, context manager APIs, configuration sweeps, report generation, and plotting/visualization.

### NVIDIA context
Nsight Python fills a different niche from [[Nsight-Compute]] and [[Nsight-Systems]]. Those tools are the profilers; Nsight Python is a Python automation layer that makes them easier to drive inside [[CUDA-Python]], [[PyTorch]], [[CuPy]], and custom kernel workflows.

## Connections
- [[CUDA-Python]] - current CUDA Python hub lists Nsight Python.
- [[Nsight-Compute]] - Nsight Python includes a collector for Nsight Compute-style kernel metrics.
- [[Nsight-Systems]] - adjacent Nsight profiler for system-wide timelines.
- [[Nsight-JupyterLab-Extension]] - adjacent notebook workflow for profiling selected JupyterLab cells.
- [[CUPTI-Python]] - lower-level Python profiling/trace interface around CUPTI concepts.
- [[PyTorch]] and [[CuPy]] - common Python GPU workloads that Nsight Python can profile.
- [[NVIDIA-CUDA]] - parent CUDA platform and performance tooling ecosystem.

## Source Excerpts
- NVIDIA describes Nsight Python as a Python kernel profiling interface that automates performance analysis across multiple kernel configurations using NVIDIA Nsight tools.
- The quickstart shows adding an `nsight.analyze.kernel` decorator and using `nsight.annotate()` around the kernel region to profile.
