# libdevice

**Type:** Technology
**Tags:** NVIDIA, CUDA, libdevice, device math, compiler SDK, LLVM bitcode
**Related:** [[NVIDIA-CUDA]], [[CUDA-Math-API]], [[libNVVM]], [[NVVM-IR]], [[NVCC]], [[PTX-ISA]]
**Sources:** https://docs.nvidia.com/cuda/libdevice-users-guide/index.html
**Last Updated:** 2026-04-29

## Summary
libdevice is NVIDIA's device-side bitcode library used by CUDA compiler paths to implement common mathematical and utility functions for GPU kernels. It sits in the CUDA compiler SDK layer alongside [[libNVVM]] and [[NVVM-IR]].

## Detail

### Purpose
CUDA device code often calls math functions and helper operations that are not directly written into every kernel source file. libdevice provides compiler-consumable implementations so front ends can lower those operations consistently into GPU code.

### Key capabilities
- Supplies device-function implementations in LLVM bitcode form.
- Supports CUDA math and utility functions used by GPU kernels.
- Integrates with [[libNVVM]] and NVVM IR compilation flows.
- Helps custom GPU language front ends target NVIDIA GPUs without reimplementing core device math support.

### NVIDIA context
For most CUDA developers, libdevice is invisible. For compiler engineers and advanced CUDA library authors, it is part of the supported path from high-level code to PTX and GPU execution.

## Connections
- [[CUDA-Math-API]] - many device-side math functions relate to libdevice-provided implementations.
- [[libNVVM]] - compiler library that works with NVVM IR and device bitcode.
- [[NVVM-IR]] - compiler IR layer used with libdevice.
- [[PTX-ISA]] - final virtual ISA target after NVVM/libdevice lowering.
- [[NVCC]] - standard CUDA compiler flow uses these components internally.

## Source Excerpts
- NVIDIA documents libdevice as a user guide under the CUDA compiler SDK documentation set.

