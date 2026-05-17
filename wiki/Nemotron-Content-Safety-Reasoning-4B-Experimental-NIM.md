# Nemotron Content Safety Reasoning 4B Experimental NIM

**Type:** Microservice
**Tags:** NVIDIA, NIM, Day 0 NIM, Nemotron, content safety, dialogue moderation, reasoning traces, guardrails
**Related:** [[NVIDIA-NemoGuard-NIMs]], [[NeMo-Guardrails]], [[NeMo-Platform]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]], [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]], [[NVIDIA-NemoGuard-JailbreakDetect-NIM]], [[Nemotron]], [[NVIDIA-AI-Enterprise]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/large-language-models/latest/day-0/get-started-nemotron-content-safety-reasoning-4b.html, https://docs.nvidia.com/nim/large-language-models/latest/day-0/support-matrix-day-0.html, https://docs.nvidia.com/nim/large-language-models/latest/day-0/index.html, https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/nim-offerings.html, https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/release-notes.html
**Last Updated:** 2026-04-29

## Summary
Nemotron Content Safety Reasoning 4B Experimental NIM is a current NVIDIA NIM LLM Day 0 microservice for content safety and dialogue moderation. NVIDIA docs describe it as a Gemma-3-4B-it-based classifier that supports custom safety policy enforcement with optional reasoning traces.

## Detail

### Purpose
The service gives developers an early-access NIM path for evaluating a smaller reasoning-capable safety classifier before deciding whether to promote it into a production guardrail stack. It is especially relevant for teams comparing current [[NVIDIA-NemoGuard-NIMs]] choices across multilingual moderation, content safety, topic control, jailbreak detection, and policy-specific safety checks.

### Current scope
- Published under the [[NIM-for-Large-Language-Models]] Day 0 offering, which prioritizes fast access to new models and is distinct from NIM Certified enterprise lifecycle packaging.
- Targets content safety and dialogue moderation classification with custom safety policy support.
- Supports optional reasoning traces for safety classification workflows.
- Current Day 0 support matrix lists NIM LLM 2.0.3 support with BF16 profiles on B200, GB200, H100, and H200 GPUs.
- Current setup guidance calls for Ubuntu 22.04 LTS or later, NVIDIA Container Toolkit 1.14.0 or later, CUDA SDK 12.9 or later, GPU driver 580 or later, and Docker 24.0 or later.

### NVIDIA context
This page belongs under both [[Nemotron]] and [[NVIDIA-NemoGuard-NIMs]] because it is a current Nemotron-branded safety classifier delivered through the NIM LLM Day 0 path. It complements the more established [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] and [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] pages rather than replacing them.

## Connections
- [[NIM-for-Large-Language-Models]] - parent Day 0, Turbo, Certified, and model-profile serving surface.
- [[NVIDIA-NemoGuard-NIMs]] - family page for guardrail NIMs used by content safety, topic control, and jailbreak detection.
- [[NeMo-Guardrails]] - runtime rail layer that can compose with safety classifiers.
- [[NeMo-Platform]] - deployment and inference gateway context for self-hosted NIM guardrails.
- [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] - established multilingual Nemotron safety NIM.
- [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] - earlier content-safety NIM lineage.
- [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]] - topic-control companion for guardrail flows.
- [[NVIDIA-NemoGuard-JailbreakDetect-NIM]] - jailbreak and prompt-injection detection companion.
- [[Nemotron]] - NVIDIA model family connection for current safety and moderation models.
- [[NGC]] - catalog and registry path for NIM containers and model artifacts.

## Source Excerpts
- Current NIM LLM Day 0 docs list Nemotron-Content-Safety-Reasoning-4B-Experimental as the current Day 0 model-specific get-started path.
- The Day 0 support matrix lists BF16 support for B200, GB200, H100, and H200 hardware under NIM LLM 2.0.3.
- NVIDIA's NIM offerings docs describe Day 0 as rapid access to newly released models, separate from the NIM Certified enterprise-support path.

## Resources
- [Get Started with Nemotron Content Safety Reasoning 4B Experimental](https://docs.nvidia.com/nim/large-language-models/latest/day-0/get-started-nemotron-content-safety-reasoning-4b.html)
- [Support Matrix for Day 0 NIMs](https://docs.nvidia.com/nim/large-language-models/latest/day-0/support-matrix-day-0.html)
- [About Day 0 NIMs](https://docs.nvidia.com/nim/large-language-models/latest/day-0/index.html)
