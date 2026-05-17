# CUDA Turing Compatibility Guide

**Type:** Guide
**Tags:** NVIDIA, CUDA, Turing, compatibility, PTX, cubin, NVCC, compute capability
**Related:** [[CUDA-Compatibility]], [[CUDA-Turing-Tuning-Guide]], [[NVIDIA-Turing-Architecture]], [[CUDA-Programming-Guide]], [[NVCC]], [[PTX-ISA]]
**Sources:** https://docs.nvidia.com/cuda/turing-compatibility-guide/index.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Turing Compatibility Guide is NVIDIA's application note for ensuring CUDA applications run on Turing GPUs. It covers PTX/cubin compatibility, forced PTX JIT testing, and build targets for Turing support.

## Detail

### Purpose
Turing introduced compute capability 7.5 and is still relevant for RTX-era workstation/client and some inference deployments. The compatibility guide helps developers understand whether older binaries include PTX or Turing-native cubins.

### Key guidance
- Include PTX in CUDA binaries to preserve forward compatibility.
- Use `CUDA_FORCE_PTX_JIT=1` to test whether existing applications have usable PTX.
- Rebuild with Turing-native cubins where startup overhead or architecture-specific behavior matters.
- Check independent thread scheduling assumptions when porting code from older warp-synchronous assumptions.

### NVIDIA context
Turing is not the leading data center generation, but it remains part of the current CUDA docs and is relevant for long-lived applications that support multiple GPU generations.

## Connections
- [[CUDA-Compatibility]] - broader driver/toolkit compatibility.
- [[CUDA-Turing-Tuning-Guide]] - Turing-specific performance guide.
- [[NVIDIA-Turing-Architecture]] - architecture-level Turing page.
- [[CUDA-Programming-Guide]] - CUDA compilation and programming model.
- [[NVCC]] - compiler driver for architecture targets.
- [[PTX-ISA]] - forward-compatible PTX form discussed by the guide.

## Source Excerpts
- NVIDIA's Turing compatibility guide documents PTX/cubin compatibility and PTX JIT testing for Turing GPUs.

## Resources
- [CUDA Turing Compatibility Guide](https://docs.nvidia.com/cuda/turing-compatibility-guide/index.html)
