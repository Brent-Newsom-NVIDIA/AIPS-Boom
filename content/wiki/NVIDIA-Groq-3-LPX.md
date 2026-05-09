# NVIDIA Groq 3 LPX

**Type:** Platform
**Tags:** NVIDIA, Groq 3 LPX, LPX, LPU, inference accelerator, Vera Rubin, agentic AI, low latency, SRAM, Dynamo, AI factory
**Related:** [[NVIDIA-Vera-Rubin-POD]], [[NVIDIA-Vera-Rubin]], [[NVIDIA-Vera-CPU]], [[NVIDIA-Dynamo]], [[Dynamo-Disaggregated-Serving]], [[Dynamo-KV-Cache-Aware-Routing]], [[NVIDIA-CMX]], [[NVIDIA-STX]], [[NVIDIA-BlueField-4]], [[NVIDIA-Spectrum-6-SPX]], [[NVIDIA-Enterprise-AI-Factory]], [[TensorRT-LLM]]
**Sources:** https://www.nvidia.com/en-us/data-center/lpx/, https://developer.nvidia.com/blog/inside-nvidia-groq-3-lpx-the-low-latency-inference-accelerator-for-the-nvidia-vera-rubin-platform, https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/, https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform
**Last Updated:** 2026-05-09

## Summary
NVIDIA Groq 3 LPX is the low-latency inference accelerator rack for the NVIDIA Vera Rubin platform. NVIDIA positions LPX as a deterministic, SRAM-heavy token-generation accelerator that complements Rubin GPUs for real-time, long-context, agentic inference workloads inside the [[NVIDIA-Vera-Rubin-POD]] AI factory architecture.

## Detail

### Purpose
LPX exists to remove the tradeoff between interactivity and throughput for large-context agentic AI. Rubin GPUs remain the flexible high-throughput training and inference engine, while LPX accelerates latency-sensitive decode work where predictable per-token latency matters.

### Rack-scale architecture
- Each LPX rack features 256 interconnected NVIDIA Groq 3 LPU accelerators.
- The product page lists 128 GB SRAM per rack, 40 PB/s SRAM bandwidth per rack, 12 TB DDR5 memory per rack, and 640 TB/s direct chip-to-chip scale-up bandwidth across the rack.
- NVIDIA's technical blog lists 315 PFLOPS AI inference compute at rack scale.
- LPX uses 32 liquid-cooled 1U compute trays, each with eight LPU accelerators.
- Each LPU accelerator delivers 500 MB SRAM, 150 TB/s SRAM bandwidth, and 2.5 TB/s scale-up bandwidth.
- The system is built around deterministic, compiler-orchestrated execution and explicit data movement to reduce jitter and make token latency more predictable.

### Serving model
NVIDIA describes LPX as part of a heterogeneous decode path coordinated by [[NVIDIA-Dynamo]]. During serving, Rubin GPUs handle prefill and decode attention over long context, while LPX accelerates latency-sensitive FFN/MoE execution in the decode loop. This attention-FFN disaggregation pattern is relevant to [[Dynamo-Disaggregated-Serving]], [[Dynamo-KV-Cache-Aware-Routing]], and context-memory infrastructure such as [[NVIDIA-CMX]].

### NVIDIA context
Use this page for "Groq" searches in the wiki. It refers to NVIDIA Groq 3 LPX, the NVIDIA Vera Rubin inference accelerator rack and LPU architecture described in NVIDIA-authored materials. It should not be confused with generic third-party Groq API/provider references unless the question explicitly asks about those.

## Connections
- [[NVIDIA-Vera-Rubin-POD]] - LPX is one of the five rack-scale systems in the POD.
- [[NVIDIA-Vera-Rubin]] - LPX is co-designed with the Vera Rubin platform.
- [[NVIDIA-Vera-CPU]] - Vera CPU racks provide the CPU/sandboxing complement in the POD.
- [[NVIDIA-Dynamo]] - serving orchestration layer for GPU/LPU heterogeneous inference.
- [[Dynamo-Disaggregated-Serving]] - decode/prefill and multi-engine serving pattern adjacent to LPX.
- [[Dynamo-KV-Cache-Aware-Routing]] - LPX deployments still depend on context and KV placement.
- [[NVIDIA-CMX]] and [[NVIDIA-STX]] - context memory and AI-native storage tiers for long-context inference.
- [[NVIDIA-BlueField-4]] - adjacent storage/context processor in the Vera Rubin POD.
- [[NVIDIA-Spectrum-6-SPX]] - networking rack that connects LPX with the rest of the POD.
- [[NVIDIA-Enterprise-AI-Factory]] - LPX is a future AI factory inference building block.
- [[TensorRT-LLM]] - LLM inference optimization context adjacent to Dynamo and AI factory serving.

## Source Excerpts
- NVIDIA describes Groq 3 LPX as the inference accelerator for NVIDIA Vera Rubin.
- NVIDIA says each LPX rack features 256 interconnected LPU accelerators.
- NVIDIA's technical blog explains that Dynamo routes prefill to GPUs and orchestrates a heterogeneous decode loop with LPUs for FFN/MoE execution.

## Resources
- [NVIDIA Groq 3 LPX](https://www.nvidia.com/en-us/data-center/lpx/)
- [Inside NVIDIA Groq 3 LPX](https://developer.nvidia.com/blog/inside-nvidia-groq-3-lpx-the-low-latency-inference-accelerator-for-the-nvidia-vera-rubin-platform)
