# CUDA Blackwell Tuning Guide

**Type:** Guide
**Tags:** NVIDIA, CUDA, Blackwell, performance, tuning, NVLink, occupancy, memory
**Related:** [[CUDA-Blackwell-Compatibility-Guide]], [[NVIDIA-Blackwell-Architecture]], [[CUDA-Best-Practices-Guide]], [[CUDA-Programming-Guide]], [[Nsight-Compute]], [[NVLink]], [[CUDA-Graphs]]
**Sources:** https://docs.nvidia.com/cuda/blackwell-tuning-guide/index.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Blackwell Tuning Guide is NVIDIA's architecture-specific performance guide for CUDA applications on Blackwell GPUs. It summarizes the Blackwell tuning points that go beyond general CUDA best practices, including occupancy, thread block clusters, memory hierarchy, and fifth-generation NVLink.

## Detail

### Purpose
General CUDA best practices apply across all CUDA-capable GPUs, but each architecture exposes different performance limits and opportunities. The Blackwell tuning guide tells developers where Blackwell differs from Hopper and Ampere, and where application-level tuning can unlock more speed.

### Key tuning areas
- Streaming multiprocessor occupancy for Blackwell compute capabilities.
- Thread block clusters and `cudaOccupancyMaxActiveClusters` guidance.
- High-bandwidth HBM3-class memory subsystem and larger cache/memory hierarchy behavior.
- Unified shared memory/L1/texture cache behavior.
- Fifth-generation [[NVLink]] for multi-GPU scaling and peer access.

### NVIDIA context
Use this page for CUDA kernel optimization on Blackwell. Use [[CUDA-Blackwell-Compatibility-Guide]] when the question is whether an application will run on Blackwell at all.

## Connections
- [[CUDA-Blackwell-Compatibility-Guide]] - compatibility check before performance tuning.
- [[NVIDIA-Blackwell-Architecture]] - architecture-level hardware context.
- [[CUDA-Best-Practices-Guide]] - general performance recommendations still apply.
- [[CUDA-Programming-Guide]] - deeper explanation of clusters, memory, and peer access.
- [[Nsight-Compute]] - kernel profiler used to measure tuning opportunities.
- [[NVLink]] - Blackwell tuning guide includes fifth-generation NVLink considerations.

## Source Excerpts
- NVIDIA's Blackwell tuning guide says CUDA best practices still apply, then focuses on Blackwell-specific SM, memory, and NVLink behavior.

## Resources
- [CUDA Blackwell Tuning Guide](https://docs.nvidia.com/cuda/blackwell-tuning-guide/index.html)
