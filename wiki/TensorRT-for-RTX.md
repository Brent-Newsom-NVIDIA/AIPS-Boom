# TensorRT for RTX

**Type:** SDK / inference runtime
**Tags:** NVIDIA, TensorRT, TensorRT-RTX, RTX AI, inference, JIT, AOT, ONNX, Windows ML, PyPI, CUDA Graphs, Blackwell, Turing
**Related:** [[TensorRT]], [[TensorRT-Model-Optimizer]], [[NVIDIA-RTX]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Ada-Lovelace-Architecture]], [[NVIDIA-Turing-Architecture]], [[CUDA-Graphs]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[NVIDIA-ChatRTX]], [[NVIDIA-AI-for-Media-SDKs]]
**Sources:** https://docs.nvidia.com/deeplearning/tensorrt-rtx/latest/index.html, https://docs.nvidia.com/deeplearning/tensorrt-rtx/latest/architecture/architecture-overview.html, https://developer.nvidia.com/tensorrt-rtx
**Last Updated:** 2026-04-29

## Summary
TensorRT for RTX, also called TensorRT-RTX, is NVIDIA's RTX-focused specialization of [[TensorRT]] for deploying AI models on NVIDIA RTX desktops, laptops, and workstations. Current NVIDIA docs describe it as a compact runtime with a two-phase ahead-of-time plus just-in-time compilation pipeline: build a portable engine first, then JIT-compile an optimized inference plan on the end user's RTX GPU.

## Detail

### Purpose
TensorRT for RTX targets client and workstation AI applications that need high-performance local inference across a large installed base of heterogeneous RTX GPUs. Instead of prebuilding separate engines for every GPU/OS combination, developers can ship portable TensorRT-RTX engines and let the runtime compile the final GPU-specific plan at first inference.

### Current architecture
- **RTX scope:** designed for NVIDIA RTX GPUs across desktops, laptops, and workstations, from Turing compute capability 7.5 through Blackwell compute capability 10.0 in the current docs.
- **Two-phase compilation:** an AOT optimizer produces a portable TensorRT-RTX engine, then the runtime JIT compiles the executable inference plan for the user's specific GPU.
- **Fast local build path:** current docs describe typical AOT plus JIT completion under 30 seconds total, with JIT usually under 5 seconds for most models.
- **Small deployment footprint:** current docs describe TensorRT-RTX as an under-200 MB drop-in replacement for RTX-targeted TensorRT inference.
- **Model specification:** models can be defined through C++/Python APIs or imported from ONNX; ONNX conversion is all-or-nothing, so unsupported operators must be handled before deployment.
- **Runtime features:** current docs cover dynamic shapes, runtime cache, CUDA Graphs, RTX CUDA Graphs, compute-in-graphics, CPU-only AOT engine generation, API capture/replay, and C++/Python APIs.
- **Release 1.4 signals:** current docs list CUDA 13.2 support, PyPI availability with `pip install tensorrt-rtx`, API capture/replay, GPU latency optimizations, parallel CUDA Graph capture, and compute-in-graphics fixes/improvements.

### NVIDIA context
TensorRT for RTX is part of NVIDIA's local RTX AI story, distinct from data-center and embedded TensorRT deployment. The current architecture docs state that it does not target data center, edge, or embedded GPUs, and that native [[TensorRT-LLM]], [[Triton-Inference-Server]], Torch-TensorRT, and TensorFlow-TensorRT integrations are not currently available.

It still connects to [[TensorRT-Model-Optimizer]] because the current architecture docs say TensorRT-RTX can consume quantized ONNX models exported by TensorRT Model Optimizer or other quantization tools. Use [[TensorRT]] for the broader server/edge/embedded inference SDK, [[TensorRT-LLM]] for native LLM serving optimization, and this page for RTX PC/workstation application deployment.

## Connections
- [[TensorRT]] - parent inference optimization ecosystem; TensorRT-RTX is the RTX-focused specialization.
- [[TensorRT-Model-Optimizer]] - can export quantized ONNX models that TensorRT-RTX consumes.
- [[NVIDIA-RTX]] - target GPU platform and local RTX AI application context.
- [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Ada-Lovelace-Architecture]], and [[NVIDIA-Turing-Architecture]] - current RTX GPU generations in or adjacent to the TensorRT-RTX support story.
- [[CUDA-Graphs]] - runtime docs include CUDA Graph and parallel CUDA Graph capture support.
- [[TensorRT-LLM]] and [[Triton-Inference-Server]] - adjacent TensorRT ecosystem tools; current TensorRT-RTX docs explicitly say native integrations are not currently available.
- [[NVIDIA-ChatRTX]] and [[NVIDIA-AI-for-Media-SDKs]] - local RTX AI workloads where RTX-optimized inference matters, though they may use other TensorRT-family paths.

## Source Excerpts
- Current docs describe TensorRT-RTX as a TensorRT specialization for the RTX product line.
- Current docs say the runtime JIT-compiles an inference plan for the specific RTX GPU.
- Current release notes list CUDA 13.2, PyPI availability, API capture/replay, latency optimizations, CUDA Graph capture, and compute-in-graphics improvements.

## Resources
- [TensorRT for RTX Documentation](https://docs.nvidia.com/deeplearning/tensorrt-rtx/latest/index.html)
- [TensorRT for RTX Architecture Overview](https://docs.nvidia.com/deeplearning/tensorrt-rtx/latest/architecture/architecture-overview.html)
- [TensorRT for RTX Download Page](https://developer.nvidia.com/tensorrt-rtx)
