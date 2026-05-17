# Llama 3.1 Nemotron Safety Guard 8B NIM

**Type:** Microservice
**Tags:** NVIDIA, NIM, Nemotron, Safety Guard, content safety, multilingual moderation, guardrails, Llama 3.1
**Related:** [[NVIDIA-NemoGuard-NIMs]], [[NeMo-Guardrails]], [[NeMo-Platform]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]], [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]], [[NVIDIA-NemoGuard-JailbreakDetect-NIM]], [[Nemotron]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nim/llama-3-1-nemotron-safety-guard-8b/latest/index.html, https://docs.nvidia.com/nim/llama-3-1-nemotron-safety-guard-8b/latest/getting-started.html, https://docs.nvidia.com/nemo/microservices/26.3.1/guardrails/tutorials/content-safety.html
**Last Updated:** 2026-04-29

## Summary
Llama 3.1 Nemotron Safety Guard 8B NIM is a multilingual content-moderation NIM for trustworthy LLM applications. Current NVIDIA docs describe it as detecting harmful content in user messages or bot responses across Arabic, Chinese, English, French, German, Hindi, Japanese, Spanish, and Thai.

## Detail

### Purpose
Nemotron Safety Guard NIM provides a deployable multilingual safety classifier for input and output moderation. It is aimed at developers who want direct OpenAI-style NIM integration and teams that want to connect a content-safety container into [[NeMo-Guardrails]].

### Current scope
- Multilingual content safety for user messages and bot responses.
- Trained from the Nemotron Safety Guard Dataset V3 and cultural adaptation techniques.
- Supports integration with NeMo Guardrails prompt templates and rail flows.
- Based on the NIM for LLMs serving surface, with chat/completions-style API behavior documented in its reference pages.
- NeMo Platform content-safety tutorial uses this NIM as the content-safety check.

### NVIDIA context
This is the newer Nemotron-branded multilingual Safety Guard NIM in the NemoGuard graph. It should be the first safety page to use for current multilingual content moderation, while [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] remains useful for the earlier content-safety lineage.

## Connections
- [[NVIDIA-NemoGuard-NIMs]] - parent NemoGuard NIM family page.
- [[NeMo-Guardrails]] - runtime rail flow integration for input/output safety checks.
- [[NeMo-Platform]] - deployment and tutorial surface for applying this NIM in guardrail configurations.
- [[Nemotron]] - NVIDIA model family and safety dataset lineage.
- [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] - earlier content-safety NIM lineage.
- [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]] - topic-control companion.
- [[NVIDIA-NemoGuard-JailbreakDetect-NIM]] - jailbreak detection companion.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment and support context.

## Source Excerpts
- NVIDIA docs describe Nemotron Safety Guard NIM as a GPU-accelerated LLM model for multilingual content moderation.
- The docs list nine supported languages and identify Nemotron Safety Guard Dataset V3 as the training dataset lineage.

## Resources
- [Llama 3.1 Nemotron Safety Guard 8B NIM](https://docs.nvidia.com/nim/llama-3-1-nemotron-safety-guard-8b/latest/index.html)
- [Improving Content Safety with NemoGuard NIMs](https://docs.nvidia.com/nemo/microservices/26.3.1/guardrails/tutorials/content-safety.html)
