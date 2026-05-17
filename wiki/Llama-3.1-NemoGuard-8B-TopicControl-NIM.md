# Llama 3.1 NemoGuard 8B TopicControl NIM

**Type:** Microservice
**Tags:** NVIDIA, NIM, NemoGuard, topic control, dialog moderation, guardrails, Llama 3.1, AI safety
**Related:** [[NVIDIA-NemoGuard-NIMs]], [[NeMo-Guardrails]], [[NeMo-Platform]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[NVIDIA-NemoGuard-JailbreakDetect-NIM]], [[Nemotron]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nim/llama-3-1-nemoguard-8b-topiccontrol/latest/index.html, https://docs.nvidia.com/nim/llama-3-1-nemoguard-8b-topiccontrol/latest/getting-started.html, https://docs.nvidia.com/nemo/guardrails/latest/configure-rails/guardrail-catalog/topic-control.html
**Last Updated:** 2026-04-29

## Summary
Llama 3.1 NemoGuard 8B TopicControl NIM is a GPU-accelerated NIM for conversational dialog moderation. Current NVIDIA docs describe it as keeping conversations on-topic by checking whether user interactions follow developer-defined boundaries and guidelines.

## Detail

### Purpose
TopicControl NIM complements content safety models by enforcing application-specific conversation boundaries. Instead of relying only on a fixed harm taxonomy, developers provide topic rules and allowed/disallowed subjects, and the NIM classifies user messages as on-topic or off-topic.

### Current scope
- Dialog moderation for staying within developer-defined topics.
- Trained by NVIDIA from a Llama 3.1 8B Instruct base model.
- Uses the CantTalkAboutThis dataset lineage for topic-control behavior.
- Exposes an OpenAI-compatible chat completions endpoint.
- Integrates with [[NeMo-Guardrails]] through the topic-control rail flow.
- Can be deployed through Docker/NGC or through NeMo Platform inference deployments.

### NVIDIA context
TopicControl NIM is one of the durable [[NVIDIA-NemoGuard-NIMs]]. It is best linked from pages about guardrails, enterprise assistants, and agent workflows that need to limit conversations to approved domains.

## Connections
- [[NVIDIA-NemoGuard-NIMs]] - parent NemoGuard NIM family page.
- [[NeMo-Guardrails]] - topic-control rail flow can call this NIM.
- [[NeMo-Platform]] - deployment path for self-hosted TopicControl NIMs.
- [[NIM-for-Large-Language-Models]] - LLM NIM serving surface used by this microservice.
- [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] and [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] - related content-safety NIMs.
- [[NVIDIA-NemoGuard-JailbreakDetect-NIM]] - complementary jailbreak detection guardrail.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment/support context.

## Source Excerpts
- NVIDIA docs describe TopicControl NIM as a GPU-accelerated LLM model for conversational dialog moderation.
- The docs state that developers can specify their own boundaries around allowed and disallowed subjects.

## Resources
- [Llama 3.1 NemoGuard 8B TopicControl NIM](https://docs.nvidia.com/nim/llama-3-1-nemoguard-8b-topiccontrol/latest/index.html)
- [Topic Control Guardrail Catalog](https://docs.nvidia.com/nemo/guardrails/latest/configure-rails/guardrail-catalog/topic-control.html)
