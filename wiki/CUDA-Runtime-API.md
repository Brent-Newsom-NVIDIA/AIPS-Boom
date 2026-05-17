# CUDA Runtime API

**Type:** Technology
**Tags:** NVIDIA, CUDA, runtime API, GPU programming, CUDA Toolkit
**Related:** [[NVIDIA-CUDA]], [[CUDA-Driver-API]], [[CUDA-Python]], [[cuda-core]], [[cuda-bindings]], [[CUDA-Streams]], [[CUDA-Graphs]], [[CUDA-Unified-Memory]], [[NVRTC]], [[NVCC]]
**Sources:** https://docs.nvidia.com/cuda/cuda-runtime-api/index.html, https://nvidia.github.io/cuda-python/cuda-core/latest/getting-started.html, https://nvidia.github.io/cuda-python/cuda-bindings/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Runtime API is the higher-level CUDA programming interface that most CUDA C/C++ applications call directly. It wraps device management, memory allocation, streams, events, graphs, execution control, interoperability, and library-friendly runtime services while interoperating with the lower-level [[CUDA-Driver-API]].

## Detail

### Purpose
The runtime API lets application developers express GPU work without manually managing every driver object. It owns common CUDA application concerns such as device selection, kernel launch, memory movement, stream/event synchronization, graph capture, stream-ordered memory allocation, and external resource interoperability.

### Key capabilities
- Device and context-facing convenience routines for common CUDA applications.
- Memory management APIs, including managed memory and asynchronous allocation flows used with [[CUDA-Streams]].
- Kernel launch and execution-control interfaces used by CUDA C++ code generated through [[NVCC]].
- Graph capture and graph launch integration for [[CUDA-Graphs]].
- Interoperability with graphics APIs and external semaphores/resources.
- Coexistence rules with the [[CUDA-Driver-API]] for applications that mix high-level and low-level CUDA calls.

### NVIDIA context
Frameworks and libraries often abstract the runtime API away, but the runtime remains central for custom CUDA extensions, performance-sensitive application code, and integration layers around [[PyTorch]], [[TensorRT]], [[NVIDIA-DALI]], and CUDA-X libraries.
Python workflows can reach runtime-style functionality through [[cuda-core]] for higher-level objects or [[cuda-bindings]] for lower-level API parity.

## Connections
- [[CUDA-Driver-API]] - provides lower-level control and can interoperate with runtime-created state.
- [[CUDA-Streams]] - runtime stream APIs control ordering and overlap.
- [[CUDA-Graphs]] - runtime graph APIs capture and replay repeated GPU work.
- [[CUDA-Unified-Memory]] - managed memory is surfaced through runtime allocation and migration APIs.
- [[CUDA-Python]] - Python umbrella for CUDA access.
- [[cuda-core]] - Pythonic access to runtime-like CUDA devices, streams, memory, and graphs.
- [[cuda-bindings]] - lower-level Python access to CUDA C APIs.
- [[NVCC]] - compiled CUDA C++ typically uses runtime support for launches and device runtime services.

## Source Excerpts
- NVIDIA's Runtime API reference separates runtime topics such as device management, memory management, streams, events, graphs, and interoperability.
