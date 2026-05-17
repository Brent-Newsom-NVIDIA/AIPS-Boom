# CUDA Ampere Tuning Guide

**Type:** Guide
**Tags:** NVIDIA, CUDA, Ampere, performance, tuning, async copy, barriers, Tensor Cores, NVLink
**Related:** [[CUDA-Ampere-Compatibility-Guide]], [[NVIDIA-Ampere-Architecture]], [[CUDA-Best-Practices-Guide]], [[CUDA-Programming-Guide]], [[Nsight-Compute]], [[NVLink]], [[CUDA-Streams]]
**Sources:** https://docs.nvidia.com/cuda/ampere-tuning-guide/index.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Ampere Tuning Guide is NVIDIA's architecture-specific performance guide for CUDA applications on Ampere GPUs. It covers Ampere tuning topics such as asynchronous global-to-shared memory copy, split arrive/wait barriers, warp-level reductions, Tensor Core improvements, memory hierarchy, and third-generation NVLink.

## Detail

### Purpose
Ampere retained the CUDA programming model while adding features that changed how high-performance kernels should be written. The tuning guide helps developers move beyond generic CUDA best practices and take advantage of Ampere-specific features.

### Key tuning areas
- Asynchronous copy from global memory to shared memory.
- Hardware acceleration for split arrive/wait barriers.
- Warp-level reduction operation support.
- Improved Tensor Core and FP32 throughput.
- Larger memory capacity, HBM bandwidth, L2 capacity, and L2 residency controls.
- Unified shared memory/L1/texture cache behavior.
- Third-generation [[NVLink]].

### NVIDIA context
Ampere remains an important installed base for A100-class AI infrastructure. The guide is useful for understanding the performance baseline that Hopper and Blackwell evolved from.

## Connections
- [[CUDA-Ampere-Compatibility-Guide]] - compatibility guide for Ampere migration.
- [[NVIDIA-Ampere-Architecture]] - architecture-level page.
- [[CUDA-Best-Practices-Guide]] - general CUDA performance guidance.
- [[CUDA-Programming-Guide]] - programming concepts behind async copy, barriers, and memory hierarchy.
- [[Nsight-Compute]] - kernel profiler for validating Ampere tuning.
- [[NVLink]] - Ampere tuning includes third-generation NVLink behavior.

## Source Excerpts
- NVIDIA's Ampere tuning guide highlights asynchronous copy, split barriers, warp-level reductions, Tensor Core improvements, memory hierarchy changes, and NVLink 3.

## Resources
- [CUDA Ampere Tuning Guide](https://docs.nvidia.com/cuda/ampere-tuning-guide/index.html)
