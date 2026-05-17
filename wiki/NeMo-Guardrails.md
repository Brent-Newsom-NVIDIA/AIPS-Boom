# NeMo Guardrails

**Type:** Library / microservice
**Tags:** NVIDIA, NeMo, Guardrails, NemoGuard, LLM safety, AI safety, agent security, Colang, LangChain, LangGraph, NIM, OpenTelemetry
**Related:** [[NVIDIA-NeMo]], [[NeMo-Platform]], [[NeMo-Auditor]], [[NeMo-Evaluator]], [[NVIDIA-NemoGuard-NIMs]], [[Nemotron-3-Content-Safety]], [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]], [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]], [[NVIDIA-NemoGuard-JailbreakDetect-NIM]], [[NIM-for-Multimodal-Safety]], [[Nemotron]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NVIDIA-AI-Blueprints]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[TensorRT-LLM]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nemo/guardrails/latest/index.html, https://docs.nvidia.com/nemo/guardrails/latest/about/overview.html, https://docs.nvidia.com/nemo/guardrails/latest/about/supported-llms.html, https://docs.nvidia.com/nemo/guardrails/latest/configure-rails/guardrail-catalog/index.html, https://docs.nvidia.com/nemo/guardrails/latest/integration/langchain/agent-middleware.html, https://docs.nvidia.com/nemo/guardrails/latest/configure-rails/caching/kv-cache-reuse.html, https://docs.nvidia.com/nemo/guardrails/latest/user-guides/tracing/index.html, https://docs.nvidia.com/nemo/microservices/26.3.0/guardrails/tutorials/deploy-nemoguard-nims.html
**Last Updated:** 2026-04-29

## Summary
NeMo Guardrails is NVIDIA's open-source Python library for adding programmable guardrails to LLM and agent applications. Current NVIDIA docs position it inside the [[NVIDIA-NeMo]] software stack, with a local library path for development and a production [[NeMo-Platform]] microservice path that uses the same YAML and Colang configuration model.

## Detail

### Purpose
NeMo Guardrails gives developers a controllability layer around an application LLM without fine-tuning the model. It can intercept inputs, retrieved context, dialog steps, tool calls, and model outputs, then block, modify, route, or verify content based on configured rails.

Use this page as the canonical wiki target for the NeMo Guardrails library and microservice. Do not split the guardrail catalog, LangChain integration, API server, Colang guides, tracing, KV cache reuse, or individual tutorial pages into separate wiki pages unless NVIDIA turns one of them into a distinct durable product/topic.

### Current capabilities
- **Library and microservice:** local Python package for development plus NeMo Platform microservice deployment for Kubernetes/Helm production environments.
- **Configuration model:** portable YAML plus Colang configuration shared between library and microservice deployments.
- **Rail types:** input, output, dialog, retrieval, and execution/tool rails for LLM and agent workflows.
- **Guardrail catalog:** current docs include prebuilt flows for content safety, jailbreak protection, topic control, PII detection/masking, agentic security, hallucination/fact-checking, LLM self-checks, and third-party APIs.
- **NVIDIA safety models:** integrates with [[NVIDIA-NemoGuard-NIMs]] such as Safety Guard, Topic Control, ContentSafety, JailbreakDetect, and multimodal safety models including [[Nemotron-3-Content-Safety]].
- **Agent integrations:** LangChain and LangGraph integration includes GuardrailsMiddleware that can run input/output checks before and after each agent model call, including intermediate tool-calling steps.
- **Providers:** supports cloud and self-hosted model providers including NVIDIA NIM, OpenAI/Azure OpenAI, Anthropic, Cohere, Google Vertex AI, Hugging Face, vLLM, generic endpoints, and LangChain providers.
- **Observability:** logging, tracing, generation logs, and OpenTelemetry-oriented span formats help debug which rails fired, where latency appears, and how model/tool calls behaved.
- **NIM performance:** KV cache reuse can reduce repeated prompt prefill cost for LLM-based NemoGuard NIM checks.

### NVIDIA context
NeMo Guardrails belongs next to [[NVIDIA-NemoGuard-NIMs]], [[NeMo-Auditor]], and [[NeMo-Evaluator]] in the production safety graph. Auditor probes models and applications for vulnerabilities, Evaluator measures quality and behavior, and Guardrails enforces runtime policy around LLM or agent traffic.

In agentic stacks, Guardrails is especially important near [[NVIDIA-Agent-Intelligence-Toolkit]], [[Nemotron]], [[NIM-for-Large-Language-Models]], and [[NVIDIA-AI-Blueprints]] because tool-calling agents need checks around intermediate tool calls, retrieved context, policy boundaries, PII, and jailbreak attempts, not only final responses.

## Connections
- [[NVIDIA-NeMo]] - parent NeMo stack for model training, customization, retrieval, evaluation, guardrails, and deployment.
- [[NeMo-Platform]] - production microservice deployment path for Guardrails and self-hosted NemoGuard NIMs.
- [[NeMo-Auditor]] - safety audit service that can find vulnerabilities before guardrails are deployed or tuned.
- [[NeMo-Evaluator]] - evaluation service for measuring quality, safety, RAG behavior, and guardrail-adjacent outcomes.
- [[NVIDIA-NemoGuard-NIMs]] - specialized NIM family for guardrail checks.
- [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]], [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]], and [[NVIDIA-NemoGuard-JailbreakDetect-NIM]] - representative guardrail NIMs called from Guardrails flows.
- [[Nemotron-3-Content-Safety]] - multimodal content-safety model for text, image, and response moderation.
- [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]] - Day 0 reasoning safety classifier adjacent to current content-safety guardrail workflows.
- [[NIM-for-Multimodal-Safety]] - visual/multimodal moderation companion to text-oriented Guardrails and NemoGuard NIMs.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - agent workflow layer where guardrails protect tool-calling loops and policy boundaries.
- [[Nemotron]] - NVIDIA model family often paired with Guardrails and NemoGuard NIMs in enterprise assistants.
- [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], and [[TensorRT-LLM]] - serving and optimized inference surfaces for application LLMs and guardrail-specific models.
- [[NVIDIA-AI-Enterprise]] - enterprise-supported software context for production AI safety and governance.

## Source Excerpts
- Current overview says NeMo Guardrails is part of the NeMo stack and supports both library and microservice paths.
- The current catalog groups guardrails across content safety, jailbreak protection, topic control, PII, agentic security, hallucination/fact-checking, self-checks, and third-party APIs.
- Current provider docs include NVIDIA NIM plus major hosted and self-hosted LLM providers.
- Current agent middleware docs describe checks before and after each model call in tool-calling agents.

## Resources
- [NeMo Guardrails Library Developer Guide](https://docs.nvidia.com/nemo/guardrails/latest/index.html)
- [Overview of NeMo Guardrails](https://docs.nvidia.com/nemo/guardrails/latest/about/overview.html)
- [Guardrail Catalog](https://docs.nvidia.com/nemo/guardrails/latest/configure-rails/guardrail-catalog/index.html)
- [Agent Middleware](https://docs.nvidia.com/nemo/guardrails/latest/integration/langchain/agent-middleware.html)
- [KV Cache Reuse for NemoGuard NIM](https://docs.nvidia.com/nemo/guardrails/latest/configure-rails/caching/kv-cache-reuse.html)
- [Deploy NemoGuard NIMs](https://docs.nvidia.com/nemo/microservices/26.3.0/guardrails/tutorials/deploy-nemoguard-nims.html)
- [NeMo Guardrails GitHub](https://github.com/NVIDIA/NeMo-Guardrails)
