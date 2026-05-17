# CUDA Debugger API

**Type:** Technology
**Tags:** NVIDIA, CUDA, debugger API, GPU debugging, tools
**Related:** [[NVIDIA-CUDA]], [[CUDA-GDB]], [[Compute-Sanitizer]], [[CUDA-Driver-API]], [[Nsight-Compute]]
**Sources:** https://docs.nvidia.com/cuda/debugger-api/index.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Debugger API is NVIDIA's low-level API surface for debugger integrations that inspect and control CUDA applications. It underpins debugger behavior around devices, contexts, events, loaded GPU code, and suspended GPU execution state.

## Detail

### Purpose
Most developers use [[CUDA-GDB]], Nsight tools, or IDE integrations directly. The Debugger API is the lower-level interface for tools that need to observe CUDA execution and coordinate debugging actions against GPU code.

### Key capabilities
- Represent debugger events such as context creation, context destruction, function loading, and device suspension.
- Support debugger integrations around CUDA contexts and loaded ELF/GPU images.
- Provide a formal API boundary for tool vendors and advanced internal tooling.

### NVIDIA context
The Debugger API complements [[CUDA-GDB]] and [[Compute-Sanitizer]]: CUDA-GDB exposes interactive debugging, Compute Sanitizer catches correctness classes, and the Debugger API provides lower-level debugger plumbing.

## Connections
- [[CUDA-GDB]] - user-facing GNU GDB based CUDA debugger.
- [[Compute-Sanitizer]] - adjacent correctness/debugging tool.
- [[CUDA-Driver-API]] - context and module concepts overlap with debugger-observed state.
- [[Nsight-Compute]] - profiler/debugger workflows often share GPU execution context concepts.
- [[NVIDIA-CUDA]] - debugger API is part of CUDA tooling documentation.

## Source Excerpts
- NVIDIA's Debugger API reference documents CUDA debugger event structures and low-level debugger integration APIs.

