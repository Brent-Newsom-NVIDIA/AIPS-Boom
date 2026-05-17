# NVIDIA NeMo

**Type:** Platform
**Tags:** NVIDIA, NeMo, generative AI, AI agents, LLM, speech, multimodal, training, microservices
**Related:** [[NeMo-Platform]], [[NeMo-Data-Designer]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[NeMo-Safe-Synthesizer]], [[NeMo-Auditor]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Gym]], [[NeMo-Run]], [[NeMo-Megatron-Bridge]], [[NeMo-Export-Deploy]], [[NeMo-Curator]], [[NeMo-Retriever]], [[NeMo-Guardrails]], [[NVIDIA-NemoGuard-NIMs]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NVIDIA-NIM]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], [[NVIDIA-NMT-NIM]], [[NVIDIA-Resiliency-Extension]], [[Megatron-Core]], [[Megatron-Energon]], [[Megatron-LM]], [[TensorRT-LLM]], [[Nemotron]], [[Nemotron-Training-Recipes]]
**Sources:** https://docs.nvidia.com/nemo/index.html, https://docs.nvidia.com/nemo-framework/index.html, https://docs.nvidia.com/nemo/microservices/latest/index.html, https://docs.nvidia.com/nemo/microservices/latest/data-designer/index.html, https://docs.nvidia.com/nemo/microservices/latest/customizer/index.html, https://docs.nvidia.com/nemo/microservices/latest/evaluator/index.html, https://docs.nvidia.com/nemo/microservices/latest/safe-synthesizer/about/index.html, https://docs.nvidia.com/nemo/microservices/latest/audit/index.html, https://docs.nvidia.com/nemo/automodel/latest/index.html, https://docs.nvidia.com/nemo/rl/latest/about/overview.html, https://docs.nvidia.com/nemo/run/latest/index.html, https://docs.nvidia.com/nemo/megatron-bridge/latest/index.html, https://docs.nvidia.com/nemo/export-deploy/latest/index.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/get-started/overview.html, https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html, https://docs.nvidia.com/nemotron/latest/index.html, https://docs.nvidia.com/nim/speech/latest/index.html, https://docs.nvidia.com/nemo/microservices/26.3.0/guardrails/tutorials/deploy-nemoguard-nims.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NeMo is now best understood as a modular software suite for managing the AI agent lifecycle, not only as a training framework. Current NVIDIA docs organize NeMo across microservices, framework libraries, agent tooling, retrieval, guardrails, data curation, evaluation, customization, deployment, and blueprints.

## Detail

### Purpose
NeMo gives developers and enterprises a connected path for building, customizing, evaluating, protecting, deploying, and optimizing generative AI and agentic systems. It spans open-source training components, production microservices, and workflow tooling.

### Current architecture
- **[[NeMo-Platform]]:** Microservices for synthetic data, customization, evaluation, guardrails, inference, RBAC, and observability.
- **[[NeMo-Data-Designer]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[NeMo-Safe-Synthesizer]], and [[NeMo-Auditor]]:** first-class NeMo Platform services for synthetic datasets, model adaptation, model/RAG/agent evaluation, private tabular synthesis, and safety audits.
- **NeMo Framework:** Open-source framework for large-scale pretraining, post-training, reinforcement learning, multimodal models, and speech AI.
- **[[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Gym]], [[NeMo-Run]], [[NeMo-Megatron-Bridge]], and [[NeMo-Export-Deploy]]:** current framework tooling for Hugging Face-compatible training, RL/post-training, rollout environments, experiment launch, Megatron conversion/training, and deployment handoff.
- **[[Nemotron-Training-Recipes]]:** current public Nemotron cookbook layer that combines NeMo Run, Megatron Bridge, NeMo RL, `nemo_runspec`, and artifact lineage for Nano3 and Super3 training/post-training.
- **[[NVIDIA-Agent-Intelligence-Toolkit]]:** Framework-agnostic workflow layer for agent development, profiling, evaluation, MCP, and A2A.
- **[[NeMo-Retriever]]:** Multimodal extraction, embedding, indexing, retrieval, and reranking for enterprise RAG.
- **[[NeMo-Guardrails]]:** Programmable safety, policy, and topical controls for LLMs and agents.
- **[[NVIDIA-NemoGuard-NIMs]]:** Deployable guardrail NIMs for content safety, topic control, and jailbreak detection.
- **[[NeMo-Curator]]:** GPU-accelerated data cleaning, filtering, and multimodal curation.
- **Export/deploy:** Production deployment through [[TensorRT]], [[TensorRT-LLM]], [[vLLM]], [[Triton-Inference-Server]], and [[NVIDIA-NIM]].
- **Speech NIM deployment:** current [[NVIDIA-Speech-NIM-Microservices]] docs package NeMo speech models into ASR, TTS, and NMT NIM containers.

### NVIDIA context
NeMo is the lifecycle layer around NVIDIA's model, inference, and AI software portfolio. [[Nemotron]] models can be trained/customized with [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Megatron-Bridge]], and [[NeMo-Customizer]], served through [[NVIDIA-NIM]], connected to data via [[NeMo-Retriever]], measured with [[NeMo-Evaluator]], protected by [[NeMo-Guardrails]], audited with [[NeMo-Auditor]], and orchestrated through [[NVIDIA-Agent-Intelligence-Toolkit]].

## Connections
- [[NeMo-Platform]] - microservices platform for production agent lifecycle workflows.
- [[NeMo-Data-Designer]] - synthetic dataset generation service for task and agent data.
- [[NeMo-Customizer]] - model adaptation service for LoRA, SFT, DPO, and embedding customization.
- [[NeMo-Evaluator]] - evaluation service for LLMs, RAG pipelines, retrievers, and agents.
- [[NeMo-Safe-Synthesizer]] - private synthetic tabular data generation service.
- [[NeMo-Auditor]] - early-access model safety audit service.
- [[NeMo-AutoModel]] - Hugging Face-compatible PyTorch training and fine-tuning library.
- [[NeMo-RL]] - reinforcement learning and post-training library for LLMs and VLMs.
- [[NeMo-Gym]] - RL environment and rollout-collection infrastructure for verifiable agent training.
- [[NeMo-Run]] - configuration, execution, and experiment management layer for NeMo jobs.
- [[NeMo-Megatron-Bridge]] - Hugging Face to Megatron conversion, training, and checkpoint bridge.
- [[NeMo-Export-Deploy]] - export and deployment library for NeMo and Hugging Face checkpoints.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - workflow and evaluation toolkit inside the NeMo family.
- [[NeMo-Retriever]] - retrieval layer for enterprise RAG and multimodal data extraction.
- [[NeMo-Guardrails]] - safety and policy controls for model and agent responses.
- [[NVIDIA-NemoGuard-NIMs]] - specialized NIMs for NeMo Guardrails safety and policy checks.
- [[NVIDIA-NIM]] - deployment and inference endpoint layer for NeMo-related models.
- [[NVIDIA-Speech-NIM-Microservices]] - current docs collection for NeMo-backed ASR, TTS, and NMT NIMs.
- [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], and [[NVIDIA-NMT-NIM]] - deployable speech model microservices.
- [[Megatron-Core]] - composable Megatron library used across high-scale model training stacks.
- [[Megatron-Energon]] - multimodal data-loading layer adjacent to Megatron/NeMo training workflows.
- [[Megatron-LM]] - Megatron reference implementation for large-model training and parallelism.
- [[NVIDIA-Resiliency-Extension]] - fault-tolerance and checkpointing layer incorporated by current Megatron Bridge resiliency docs.
- [[TensorRT-LLM]] - production inference optimization path for NeMo-trained LLMs.
- [[Nemotron]] - NVIDIA model family closely tied to NeMo development and deployment workflows.
- [[Nemotron-Training-Recipes]] - recipe-level view of how NeMo components train and post-train current Nemotron models.

## Source Excerpts
- NVIDIA NeMo docs describe NeMo as a modular suite for managing the AI agent lifecycle.
- Current NeMo docs list microservices, framework, agent toolkit, Retriever, Guardrails, Curator, RL, AutoModel, and deployment components.

## Resources
- [NVIDIA NeMo Documentation](https://docs.nvidia.com/nemo/index.html)
- [NeMo Framework Documentation](https://docs.nvidia.com/nemo-framework/index.html)
- [NeMo Platform Documentation](https://docs.nvidia.com/nemo/microservices/latest/index.html)
- [NeMo AutoModel](https://docs.nvidia.com/nemo/automodel/latest/index.html)
- [NeMo RL](https://docs.nvidia.com/nemo/rl/latest/about/overview.html)
- [NeMo-Run](https://docs.nvidia.com/nemo/run/latest/index.html)
- [NeMo Agent Toolkit](https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html)
