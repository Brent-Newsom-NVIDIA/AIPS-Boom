# CUDA Ampere Compatibility Guide

**Type:** Guide
**Tags:** NVIDIA, CUDA, Ampere, compatibility, PTX, cubin, NVCC, compute capability
**Related:** [[CUDA-Compatibility]], [[CUDA-Ampere-Tuning-Guide]], [[NVIDIA-Ampere-Architecture]], [[CUDA-Programming-Guide]], [[NVCC]], [[PTX-ISA]]
**Sources:** https://docs.nvidia.com/cuda/ampere-compatibility-guide/index.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Ampere Compatibility Guide is NVIDIA's application note for making CUDA applications run on Ampere GPUs. It explains PTX and cubin compatibility, forward compatibility, and build targets for the Ampere generation.

## Detail

### Purpose
Ampere introduced compute capability 8.x and became the foundation for A100-era data center AI. The compatibility guide helps developers understand when applications built for Volta/Turing or earlier can run on Ampere and when they need to be rebuilt.

### Key guidance
- PTX provides forward compatibility across newer GPU compute capabilities.
- Native cubins reduce JIT time and can unlock architecture-specific performance.
- `CUDA_FORCE_PTX_JIT=1` can be used to test whether an application includes usable PTX.
- Explicit `-gencode` settings are important when supporting multiple GPU generations.

### NVIDIA context
This guide remains relevant because many enterprise CUDA applications and CUDA libraries still need to run across Ampere, Hopper, and Blackwell systems.

## Connections
- [[CUDA-Compatibility]] - deployment-level driver/toolkit compatibility.
- [[CUDA-Ampere-Tuning-Guide]] - performance guide once application compatibility is addressed.
- [[NVIDIA-Ampere-Architecture]] - architecture-level Ampere page.
- [[CUDA-Programming-Guide]] - CUDA compilation and runtime model reference.
- [[NVCC]] - compiler driver used for architecture targets.
- [[PTX-ISA]] - PTX is the forward-compatible code form discussed by the guide.

## Source Excerpts
- NVIDIA's Ampere compatibility guide explains PTX/cubin behavior and how to test existing applications with forced PTX JIT.

## Resources
- [CUDA Ampere Compatibility Guide](https://docs.nvidia.com/cuda/ampere-compatibility-guide/index.html)
