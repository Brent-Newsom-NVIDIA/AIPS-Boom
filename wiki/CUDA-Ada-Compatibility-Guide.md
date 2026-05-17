# CUDA Ada Compatibility Guide

**Type:** Guide
**Tags:** NVIDIA, CUDA, Ada, compatibility, PTX, cubin, NVCC, compute capability
**Related:** [[CUDA-Compatibility]], [[CUDA-Ada-Tuning-Guide]], [[NVIDIA-Ada-Lovelace-Architecture]], [[NVIDIA-Ampere-Architecture]], [[CUDA-Programming-Guide]], [[NVCC]], [[PTX-ISA]]
**Sources:** https://docs.nvidia.com/cuda/ada-compatibility-guide/index.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Ada Compatibility Guide is NVIDIA's application note for running CUDA applications on Ada-generation GPUs. It covers PTX/cubin compatibility, the relationship between Ampere and Ada binaries, PTX JIT verification, and architecture build targets.

## Detail

### Purpose
Ada is closely related to Ampere for CUDA compute compatibility but adds new instructions and architecture targets. The compatibility guide helps developers decide when existing Ampere-targeted binaries can run on Ada and when they should rebuild with Ada-native cubins.

### Key guidance
- CUDA binaries may contain native cubin code, forward-compatible PTX, or both.
- Ampere binaries can run on Ada in documented cases, but Ada-native binaries do not run backward on Ampere.
- `CUDA_FORCE_PTX_JIT=1` can verify whether an application has usable embedded PTX.
- Explicit `-gencode` targets matter when supporting Volta, Turing, Ampere, Ada, and later GPUs.

### NVIDIA context
Use this page for Ada migration and build compatibility. Use [[CUDA-Ada-Tuning-Guide]] for performance tuning after compatibility is established.

## Connections
- [[CUDA-Compatibility]] - driver/toolkit compatibility is separate from architecture binary compatibility.
- [[CUDA-Ada-Tuning-Guide]] - Ada-specific tuning companion.
- [[NVIDIA-Ada-Lovelace-Architecture]] - architecture-level Ada page.
- [[NVIDIA-Ampere-Architecture]] - Ada compatibility docs discuss Ampere-to-Ada binary behavior.
- [[CUDA-Programming-Guide]] - canonical CUDA compilation and programming model reference.
- [[NVCC]] - compiler driver used for architecture targets.
- [[PTX-ISA]] - PTX is the forward-compatible code form.

## Source Excerpts
- NVIDIA's Ada compatibility guide describes PTX/cubin behavior, Ampere-to-Ada compatibility, and `-gencode` build targets.

## Resources
- [CUDA Ada Compatibility Guide](https://docs.nvidia.com/cuda/ada-compatibility-guide/index.html)
