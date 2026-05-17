# CUDA Binary Utilities

**Type:** Technology
**Tags:** NVIDIA, CUDA, binary utilities, cuobjdump, nvdisasm, nvprune, compiler tools
**Related:** [[NVIDIA-CUDA]], [[NVCC]], [[PTX-ISA]], [[CUDA-Driver-API]], [[Nsight-Compute]], [[Compute-Sanitizer]]
**Sources:** https://docs.nvidia.com/cuda/cuda-binary-utilities/index.html
**Last Updated:** 2026-04-29

## Summary
CUDA Binary Utilities are NVIDIA tools for inspecting and manipulating compiled CUDA binary artifacts. The documentation covers tools such as cuobjdump, nvdisasm, cu++filt, and nvprune.

## Detail

### Purpose
CUDA performance and compiler investigations often require looking below source code at embedded cubins, PTX, symbols, and GPU assembly. CUDA Binary Utilities support that workflow by exposing what [[NVCC]] produced and what is packaged in CUDA binaries.

### Key capabilities
- Inspect CUDA fat binaries and object files.
- Disassemble GPU machine code for architecture-specific analysis.
- Demangle CUDA/C++ symbols for readability.
- Prune unused code from CUDA binary artifacts.
- Compare compiler output when tuning for Hopper, Blackwell, or other GPU generations.

### NVIDIA context
These tools complement [[Nsight-Compute]] and [[Compute-Sanitizer]]: Nsight explains performance behavior at runtime, while binary utilities reveal what the compiler emitted before runtime execution.

## Connections
- [[NVCC]] - primary producer of CUDA binary artifacts.
- [[PTX-ISA]] - binary utilities help inspect PTX and lowered instruction paths.
- [[Nsight-Compute]] - profiling findings can be tied back to generated instructions.
- [[CUDA-Compile-Time-Advisor]] - compile-time and binary-level analysis are adjacent optimization tasks.
- [[NVIDIA-Blackwell-Architecture]] - architecture-specific tuning often needs binary inspection.

## Source Excerpts
- NVIDIA's CUDA Binary Utilities docs cover cuobjdump, nvdisasm, cu++filt, and nvprune.

