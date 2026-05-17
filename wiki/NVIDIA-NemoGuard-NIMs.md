# NVIDIA NemoGuard NIMs

**Type:** Platform
**Tags:** NVIDIA, NIM, NemoGuard, NeMo Guardrails, content safety, topic control, jailbreak detection, AI safety
**Related:** [[NeMo-Guardrails]], [[NeMo-Platform]], [[NeMo-Auditor]], [[NeMo-Evaluator]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[Nemotron-3-Content-Safety]], [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]], [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]], [[NVIDIA-NemoGuard-JailbreakDetect-NIM]], [[NIM-for-Multimodal-Safety]], [[Nemotron]], [[NVIDIA-AI-Enterprise]], [[TensorRT]], [[Triton-Inference-Server]]
**Sources:** https://docs.nvidia.com/nemo/microservices/26.3.0/guardrails/tutorials/deploy-nemoguard-nims.html, https://docs.nvidia.com/nemo/guardrails/latest/configure-rails/guardrail-catalog/index.html, https://docs.nvidia.com/nemo/microservices/latest/audit/index.html, https://docs.nvidia.com/nemo/microservices/latest/evaluator/index.html, https://docs.nvidia.com/nim/large-language-models/latest/day-0/get-started-nemotron-content-safety-reasoning-4b.html, https://docs.nvidia.com/nim/large-language-models/latest/day-0/support-matrix-day-0.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NemoGuard NIMs are specialized NIM microservices for guardrail use cases in [[NeMo-Guardrails]] and [[NeMo-Platform]]. Current NVIDIA docs call out content safety, topic control, and jailbreak detection NIMs that can be deployed through the NeMo Platform inference gateway and applied to guardrail configurations.

## Detail

### Purpose
NemoGuard NIMs give teams deployable safety models for LLM and agent applications. Instead of relying only on prompt rules, applications can call dedicated NIMs to classify unsafe content, enforce allowed topics, or detect jailbreak and prompt-injection attempts.

### Current scope
- [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] for multilingual content safety across 23 categories.
- [[Nemotron-3-Content-Safety]] for multimodal, multilingual moderation of prompts, optional images, and optional responses.
- [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]] for Day 0 content-safety and dialogue-moderation evaluation with optional reasoning traces.
- [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]] for restricting conversations to developer-defined topics.
- [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] for content moderation using the Nemotron Content Safety Dataset V2 lineage.
- [[NVIDIA-NemoGuard-JailbreakDetect-NIM]] for jailbreak and prompt-injection detection through a classify endpoint.
- NeMo Platform deployment examples using one GPU per NIM deployment, deployment configs, inference deployments, and model entity registration.

### NVIDIA context
NemoGuard NIMs sit at the intersection of [[NVIDIA-NIM]], [[NeMo-Guardrails]], [[NeMo-Platform]], and [[Nemotron]]. They are not general-purpose chat models; they are deployment units for application safety and policy enforcement.

## Connections
- [[NeMo-Guardrails]] - runtime library and guardrail catalog that uses these models in input/output rail flows.
- [[NeMo-Platform]] - deployment and inference gateway path for self-hosted NemoGuard NIMs.
- [[NeMo-Auditor]] - safety audit service that can identify issues mitigated by NemoGuard NIMs and guardrails.
- [[NeMo-Evaluator]] - evaluation service adjacent to safety scoring and regression checks.
- [[NIM-for-Large-Language-Models]] - LLM-based guard NIMs use the NIM LLM serving surface.
- [[Nemotron-3-Content-Safety]] - current multimodal, multilingual content-safety model for prompt/image/response moderation.
- [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]] - current Day 0 safety classifier.
- [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] - multilingual content safety NIM.
- [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]] - topic-control NIM for allowed/disallowed subjects.
- [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] - content-safety NIM based on the earlier NemoGuard 8B content-safety model lineage.
- [[NVIDIA-NemoGuard-JailbreakDetect-NIM]] - classify-endpoint NIM for jailbreak detection.
- [[NIM-for-Multimodal-Safety]] - adjacent NIM family for multimodal moderation.

## Source Excerpts
- NVIDIA NeMo Platform docs describe NemoGuard NIMs as specialized models for Guardrails service use cases.
- The docs list content safety, topic control, and jailbreak detection as deployable NemoGuard NIM use cases.
- Current NIM LLM Day 0 docs add a Nemotron content-safety reasoning classifier to the safety-model query surface.

## Resources
- [Deploy NemoGuard NIMs](https://docs.nvidia.com/nemo/microservices/26.3.0/guardrails/tutorials/deploy-nemoguard-nims.html)
- [NeMo Guardrails Guardrail Catalog](https://docs.nvidia.com/nemo/guardrails/latest/configure-rails/guardrail-catalog/index.html)
- [Nemotron Content Safety Reasoning 4B Experimental](https://docs.nvidia.com/nim/large-language-models/latest/day-0/get-started-nemotron-content-safety-reasoning-4b.html)
