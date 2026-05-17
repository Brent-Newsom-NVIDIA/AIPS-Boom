# Llama 3.1 NemoGuard 8B ContentSafety NIM

**Type:** Microservice
**Tags:** NVIDIA, NIM, NemoGuard, content safety, moderation, guardrails, Llama 3.1, AI safety
**Related:** [[NVIDIA-NemoGuard-NIMs]], [[NeMo-Guardrails]], [[NeMo-Platform]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]], [[NVIDIA-NemoGuard-JailbreakDetect-NIM]], [[Nemotron]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nim/llama-3-1-nemoguard-8b-contentsafety/latest/index.html, https://docs.nvidia.com/nim/llama-3-1-nemoguard-8b-contentsafety/latest/integrate-guardrails.html, https://docs.nvidia.com/nemo/guardrails/latest/configure-rails/guardrail-catalog/content-safety.html
**Last Updated:** 2026-04-29

## Summary
Llama 3.1 NemoGuard 8B ContentSafety NIM is a GPU-accelerated content-moderation NIM for trustworthy LLM applications. Current NVIDIA docs describe it as detecting harmful content in user messages or bot responses.

## Detail

### Purpose
ContentSafety NIM gives applications a deployable safety classifier for input and output moderation. It can be called directly through NIM endpoints or integrated into [[NeMo-Guardrails]] content-safety rail flows.

### Current scope
- Detects harmful content in user messages and bot responses.
- Trained by NVIDIA from a Llama 3.1 8B Instruct base model.
- Uses the Nemotron Content Safety Dataset V2 lineage, formerly Aegis AI Content Safety Dataset 2.0.
- Exposes standard NIM LLM endpoints such as completions and chat completions.
- NeMo Guardrails integrates through LangChain ChatNVIDIA and a `content_safety` model configuration.

### NVIDIA context
ContentSafety NIM is the earlier NemoGuard content-safety NIM lineage. The newer [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] covers multilingual Safety Guard V3; both remain useful query targets for NVIDIA content moderation.

## Connections
- [[NVIDIA-NemoGuard-NIMs]] - parent NemoGuard NIM family page.
- [[NeMo-Guardrails]] - content-safety rails can call this NIM.
- [[NeMo-Platform]] - deployment path for self-hosted content-safety NIMs.
- [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] - newer multilingual content-safety NIM.
- [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]] - related topic-control guardrail NIM.
- [[NVIDIA-NemoGuard-JailbreakDetect-NIM]] - complementary jailbreak detection NIM.
- [[NIM-for-Large-Language-Models]] - LLM NIM serving surface used by this microservice.

## Source Excerpts
- NVIDIA docs describe ContentSafety NIM as a GPU-accelerated LLM model that performs content moderation.
- The docs state that the model detects harmful content in user messages or bot responses.

## Resources
- [Llama 3.1 NemoGuard 8B ContentSafety NIM](https://docs.nvidia.com/nim/llama-3-1-nemoguard-8b-contentsafety/latest/index.html)
- [Integrating ContentSafety with NeMo Guardrails](https://docs.nvidia.com/nim/llama-3-1-nemoguard-8b-contentsafety/latest/integrate-guardrails.html)
