# Nsight Copilot

**Type:** Developer tool
**Tags:** NVIDIA, Nsight, CUDA, AI assistant, code generation, code transformation, Nsight Compute, Visual Studio Code, NIM, CUDA optimization
**Related:** [[Nsight-Developer-Tools]], [[Nsight-Compute]], [[Nsight-Visual-Studio-Code-Edition]], [[ComputeEval]], [[NVIDIA-NIM]], [[NVIDIA-CUDA]], [[PyTorch]], [[CUTLASS]], [[CUDA-Python]], [[TensorRT-LLM]], [[NVIDIA-Developer-Program]]
**Sources:** https://developer.nvidia.com/nsight-copilot, https://developer.nvidia.com/tools-overview/nsight-compute/get-started
**Last Updated:** 2026-04-29

## Summary
NVIDIA Nsight Copilot is NVIDIA's AI-powered accelerated-computing assistant for CUDA development. NVIDIA positions it as a CUDA-aware assistant available through a Visual Studio Code extension and as a preview integration in the Nsight Compute kernel profiler.

## Detail
Nsight Copilot is part of the [[Nsight-Developer-Tools]] family and focuses on helping developers write, transform, and optimize CUDA code. The public NVIDIA developer page describes expert CUDA-aware chat, CUDA code generation, real-time completions through an NVIDIA CUDA autocomplete model, and in-editor CUDA code transformation.

The Visual Studio Code path is aimed at CUDA development inside the editor. NVIDIA's example workflow shows transforming a [[PyTorch]] operation into an optimized CUDA kernel. Use [[Nsight-Visual-Studio-Code-Edition]] for the broader CUDA debugging and VS Code extension context around Nsight tooling.

The Nsight Compute path brings Copilot into kernel profiling. NVIDIA's example workflow describes interactive guidance around an uncoalesced memory-access issue, which makes Copilot adjacent to the normal [[Nsight-Compute]] loop of collecting metrics, inspecting source/SASS correlation, and resolving CUDA performance bottlenecks.

NVIDIA says Nsight Copilot is powered by [[NVIDIA-NIM]] microservices and benchmarked with [[ComputeEval]] for CUDA task proficiency. That makes it a bridge between NVIDIA's CUDA developer tools and NVIDIA's model-serving stack, rather than a standalone model catalog page.

## Current Status
- Public NVIDIA developer page is available.
- Visual Studio Code extension path is public.
- Nsight Compute 2026.1 lists Nsight Copilot as a preview feature in the standalone Nsight Compute download.
- NVIDIA notes that the CUDA Toolkit-bundled version of Nsight Compute does not include the Nsight Copilot preview.
- Beta signup and NVIDIA Developer Forums are the current feedback paths.

## Use Cases
- Asking CUDA architecture, memory, and optimization questions in a CUDA-aware assistant.
- Generating CUDA kernels or snippets from natural-language descriptions.
- Transforming existing CUDA code in an editor to improve efficiency or compatibility.
- Moving CPU, [[PyTorch]], or prototype code toward custom CUDA kernels.
- Getting profiler-context guidance inside [[Nsight-Compute]] after collecting kernel metrics.

## Connections
- [[Nsight-Developer-Tools]] - suite-level home for NVIDIA debugging, profiling, correctness, IDE, cloud, and SDK tools.
- [[Nsight-Visual-Studio-Code-Edition]] - VS Code development path where Nsight Copilot appears as a CUDA coding assistant.
- [[Nsight-Compute]] - kernel profiler path where Nsight Copilot preview adds interactive performance guidance.
- [[NVIDIA-NIM]] - NVIDIA says Nsight Copilot is powered by NIM microservices.
- [[ComputeEval]] - NVIDIA benchmark framework used to measure CUDA task proficiency for AI coding systems.
- [[NVIDIA-CUDA]] - primary programming target for Nsight Copilot assistance.
- [[PyTorch]] - NVIDIA's public example shows converting a PyTorch operation into an optimized CUDA kernel.
- [[CUTLASS]], [[CUDA-Python]], and [[TensorRT-LLM]] - common CUDA-heavy optimization contexts where CUDA-aware assistance can be useful, even though Nsight Copilot is not a replacement for profiling or correctness validation.

## Resources
- [NVIDIA Nsight Copilot](https://developer.nvidia.com/nsight-copilot)
- [Nsight Compute get started](https://developer.nvidia.com/tools-overview/nsight-compute/get-started)
