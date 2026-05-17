# Inline PTX Assembly

**Type:** Guide
**Tags:** NVIDIA, CUDA, PTX, inline assembly, compiler, low-level programming
**Related:** [[PTX-ISA]], [[PTX-Interoperability]], [[NVCC]], [[CUDA-Programming-Guide]], [[CUDA-Binary-Utilities]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/cuda/inline-ptx-assembly/index.html
**Last Updated:** 2026-04-29

## Summary
Inline PTX Assembly in CUDA is NVIDIA's guide for inserting PTX assembly statements directly into CUDA code. It is an advanced CUDA technique for developers who need access to low-level PTX instructions or behavior not exposed through ordinary CUDA C++.

## Detail
The guide explains the `asm()` statement form, operand constraints, escaping, namespace concerns, memory-space issues, and other pitfalls. It belongs near [[PTX-ISA]], [[NVCC]], and [[CUDA-Binary-Utilities]] because it crosses source-level CUDA C++ and generated PTX/SASS inspection.

Inline PTX should be treated as an expert workflow. It can unlock low-level control, but it also couples code to PTX rules and compiler behavior.

## Connections
- [[PTX-ISA]] - inline assembly uses the PTX instruction set.
- [[PTX-Interoperability]] - ABI and interoperability rules matter for generated PTX.
- [[NVCC]] - compiler path that accepts CUDA C++ with inline PTX.
- [[CUDA-Programming-Guide]] - higher-level CUDA programming model context.
- [[CUDA-Binary-Utilities]] - inspection tools help validate generated code.

## Source Excerpts
- NVIDIA describes Inline PTX Assembly as the reference for inlining PTX assembly statements into CUDA.
- The guide covers assembler statements, parameters, constraints, and common error cases.
