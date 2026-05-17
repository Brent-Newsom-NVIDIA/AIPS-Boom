# CUDA Best Practices Guide

**Type:** Guide
**Tags:** NVIDIA, CUDA, performance, optimization, profiling, memory, deployment
**Related:** [[NVIDIA-CUDA]], [[CUDA-Programming-Guide]], [[CUDA-Blackwell-Tuning-Guide]], [[CUDA-Hopper-Tuning-Guide]], [[CUDA-Ada-Tuning-Guide]], [[CUDA-Ampere-Tuning-Guide]], [[CUDA-Turing-Tuning-Guide]], [[Nsight-Compute]], [[Nsight-Systems]], [[Compute-Sanitizer]], [[Floating-Point-and-IEEE-754]], [[CUDA-Compatibility]]
**Sources:** https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html, https://docs.nvidia.com/cuda/blackwell-tuning-guide/index.html, https://docs.nvidia.com/cuda/hopper-tuning-guide/index.html, https://docs.nvidia.com/cuda/ada-tuning-guide/index.html, https://docs.nvidia.com/cuda/ampere-tuning-guide/index.html, https://docs.nvidia.com/cuda/turing-tuning-guide/index.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Best Practices Guide is NVIDIA's practical guide for writing high-performance CUDA applications. It covers profiling, APOD optimization workflow, correctness, numerical precision, memory optimization, execution configuration, instruction optimization, deployment, and compatibility.

## Detail
The guide is the performance companion to [[CUDA-Programming-Guide]]. It emphasizes an assess, parallelize, optimize, deploy cycle and links CUDA optimization decisions to profiling tools such as [[Nsight-Systems]] and [[Nsight-Compute]].

It is also a good canonical page for deployment-oriented questions that cross between performance, compatibility, testing, and CUDA library redistribution.
Architecture-specific tuning pages such as [[CUDA-Blackwell-Tuning-Guide]], [[CUDA-Hopper-Tuning-Guide]], [[CUDA-Ada-Tuning-Guide]], [[CUDA-Ampere-Tuning-Guide]], and [[CUDA-Turing-Tuning-Guide]] should be used when the performance question depends on a GPU generation.

## Connections
- [[CUDA-Programming-Guide]] - conceptual companion for CUDA programming model details.
- [[CUDA-Blackwell-Tuning-Guide]] - Blackwell-specific tuning guidance.
- [[CUDA-Hopper-Tuning-Guide]] - Hopper-specific tuning guidance.
- [[CUDA-Ada-Tuning-Guide]] - Ada-specific tuning guidance.
- [[CUDA-Ampere-Tuning-Guide]] - Ampere-specific tuning guidance.
- [[CUDA-Turing-Tuning-Guide]] - Turing-specific tuning guidance.
- [[Nsight-Compute]] - kernel-level profiler used to act on best-practice recommendations.
- [[Nsight-Systems]] - system-level profiler used during the assess/profiling stage.
- [[Compute-Sanitizer]] - correctness tool that complements performance optimization.
- [[Floating-Point-and-IEEE-754]] - numerical accuracy companion for precision-related guidance.

## Source Excerpts
- NVIDIA frames the guide around practical techniques for obtaining the best performance from CUDA-capable GPUs.
- The guide covers profiling, memory optimization, execution configuration, numerical accuracy, and deployment preparation.
