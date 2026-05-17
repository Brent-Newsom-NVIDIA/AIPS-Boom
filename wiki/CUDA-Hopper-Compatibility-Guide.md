# CUDA Hopper Compatibility Guide

**Type:** Guide
**Tags:** NVIDIA, CUDA, Hopper, compatibility, PTX, cubin, NVCC, compute capability
**Related:** [[CUDA-Compatibility]], [[CUDA-Hopper-Tuning-Guide]], [[NVIDIA-Hopper-Architecture]], [[CUDA-Programming-Guide]], [[NVCC]], [[PTX-ISA]]
**Sources:** https://docs.nvidia.com/cuda/hopper-compatibility-guide/index.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Hopper Compatibility Guide is NVIDIA's application note for ensuring CUDA applications run on Hopper GPUs. It covers cubin and PTX compatibility, testing with PTX JIT, and building applications for Hopper architecture support.

## Detail

### Purpose
Hopper introduced compute capability 9.x and features that required applications and libraries to be built with appropriate architecture targets. The compatibility guide helps developers determine whether existing binaries include PTX or Hopper-native cubins and how to rebuild if needed.

### Key guidance
- Include PTX in CUDA binaries when forward compatibility matters.
- Use `CUDA_FORCE_PTX_JIT=1` to verify that an application can JIT from embedded PTX.
- Build with Hopper native targets where possible to reduce JIT overhead and expose architecture-specific performance.
- Be aware of independent thread scheduling assumptions inherited from Volta and later GPU architectures.

### NVIDIA context
Hopper remains widely deployed in H100/H200 and GH200 systems. This guide is the migration companion for CUDA applications moving from Ampere or older systems into Hopper infrastructure.

## Connections
- [[CUDA-Compatibility]] - separates architecture compatibility from driver/toolkit compatibility.
- [[CUDA-Hopper-Tuning-Guide]] - performance guide for Hopper once compatibility is handled.
- [[NVIDIA-Hopper-Architecture]] - architecture-level context for H100/H200/GH200.
- [[CUDA-Programming-Guide]] - compilation and architecture target details.
- [[NVCC]] - compiler driver used for Hopper `-gencode` targets.
- [[PTX-ISA]] - forward-compatible PTX behavior is central to the guide.

## Source Excerpts
- NVIDIA's Hopper compatibility guide describes PTX/cubin behavior and PTX JIT testing for Hopper migration.

## Resources
- [CUDA Hopper Compatibility Guide](https://docs.nvidia.com/cuda/hopper-compatibility-guide/index.html)
