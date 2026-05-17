# NVIDIA NemoGuard JailbreakDetect NIM

**Type:** Microservice
**Tags:** NVIDIA, NIM, NemoGuard, jailbreak detection, prompt injection, AI security, guardrails
**Related:** [[NVIDIA-NemoGuard-NIMs]], [[NeMo-Guardrails]], [[NeMo-Platform]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]], [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]], [[Nemotron]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nim/nemoguard-jailbreakdetect/latest/index.html, https://docs.nvidia.com/nim/nemoguard-jailbreakdetect/latest/reference.html, https://docs.nvidia.com/nemo/guardrails/latest/getting-started/tutorials/nemoguard-jailbreakdetect-deployment.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NemoGuard JailbreakDetect NIM is a NIM microservice that classifies jailbreak attempts from user-supplied prompts. Current NVIDIA docs describe it as using the Ardennes model, a random forest trained by NVIDIA on Snowflake Arctic Embed M Long embeddings.

## Detail

### Purpose
JailbreakDetect NIM helps applications block adversarial prompts, prompt injection, and jailbreak attempts before they reach the main model. It is designed to plug into [[NeMo-Guardrails]] jailbreak-detection rail configuration.

### Current scope
- Classifies jailbreak attempts from a user prompt.
- Uses the Ardennes model trained on Snowflake Arctic Embed M Long.
- Exposes a `/v1/classify` endpoint rather than an OpenAI-compatible chat completions endpoint.
- NeMo Platform deployment docs note that this NIM does not register a Model Entity; guardrail configs reference its inference gateway URL through `rails.config.jailbreak_detection.nim_base_url`.
- Can be used locally or through build.nvidia.com-hosted NIM patterns in NeMo Guardrails tutorials.

### NVIDIA context
JailbreakDetect NIM is the security-specific companion to content-safety and topic-control NemoGuard NIMs. It should be linked from agent, guardrail, and enterprise AI pages that need prompt-injection resistance.

## Connections
- [[NVIDIA-NemoGuard-NIMs]] - parent NemoGuard NIM family page.
- [[NeMo-Guardrails]] - jailbreak detection rail flow can call this NIM.
- [[NeMo-Platform]] - deployment and inference gateway path.
- [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] and [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] - content-safety companions.
- [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]] - topic-control companion.
- [[NIM-for-Large-Language-Models]] - adjacent NIM LLM serving surface for guarded applications.
- [[NVIDIA-AI-Enterprise]] - production deployment and support context.

## Source Excerpts
- NVIDIA docs say JailbreakDetect NIM classifies jailbreak attempts from user prompts.
- NeMo Platform docs note that JailbreakDetect uses `/v1/classify` and is referenced by its NIM base URL in guardrail configuration.

## Resources
- [NVIDIA NemoGuard JailbreakDetect NIM](https://docs.nvidia.com/nim/nemoguard-jailbreakdetect/latest/index.html)
- [JailbreakDetect with NeMo Guardrails](https://docs.nvidia.com/nemo/guardrails/latest/getting-started/tutorials/nemoguard-jailbreakdetect-deployment.html)
