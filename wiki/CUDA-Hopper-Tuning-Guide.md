# CUDA Hopper Tuning Guide

**Type:** Guide
**Tags:** NVIDIA, CUDA, Hopper, performance, tuning, TMA, thread block clusters, DPX, NVLink
**Related:** [[CUDA-Hopper-Compatibility-Guide]], [[NVIDIA-Hopper-Architecture]], [[CUDA-Best-Practices-Guide]], [[CUDA-Programming-Guide]], [[Nsight-Compute]], [[NVLink]], [[CUDA-Graphs]]
**Sources:** https://docs.nvidia.com/cuda/hopper-tuning-guide/index.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Hopper Tuning Guide is NVIDIA's architecture-specific guide for optimizing CUDA applications on Hopper GPUs. It covers Hopper features such as Tensor Memory Accelerator, thread block clusters, distributed shared memory, DPX instructions, inline compression, and fourth-generation NVLink.

## Detail

### Purpose
Hopper introduced new performance features beyond Ampere while preserving the CUDA programming model. This tuning guide explains where developers should look after applying general CUDA best practices.

### Key tuning areas
- Tensor Memory Accelerator for asynchronous data movement.
- Thread block clusters and distributed shared memory.
- Improved FP32 throughput and Tensor Core behavior.
- DPX instructions for dynamic programming workloads.
- HBM3/HBM3e memory, larger L2, inline compression, and unified shared memory/L1/texture cache behavior.
- Fourth-generation [[NVLink]] for multi-GPU bandwidth.

### NVIDIA context
This page should be linked from Hopper, CUDA performance, Nsight, and LLM/HPC optimization discussions. Hopper is still a major deployed base for H100, H200, GH200, DGX H100/H200, and many AI Enterprise environments.

## Connections
- [[CUDA-Hopper-Compatibility-Guide]] - compatibility check before Hopper-specific performance tuning.
- [[NVIDIA-Hopper-Architecture]] - architecture-level page for Hopper.
- [[CUDA-Best-Practices-Guide]] - general performance recommendations.
- [[CUDA-Programming-Guide]] - deeper reference for clusters, memory hierarchy, and synchronization.
- [[Nsight-Compute]] - kernel profiler for tuning Hopper kernels.
- [[NVLink]] - Hopper tuning includes fourth-generation NVLink behavior.

## Source Excerpts
- NVIDIA's Hopper tuning guide highlights TMA, thread block clusters, distributed shared memory, DPX instructions, inline compression, and NVLink 4.

## Resources
- [CUDA Hopper Tuning Guide](https://docs.nvidia.com/cuda/hopper-tuning-guide/index.html)
