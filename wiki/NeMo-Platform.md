# NeMo Platform

**Type:** Platform
**Tags:** NVIDIA, NeMo Platform, microservices, AI agents, synthetic data, fine-tuning, evaluation
**Related:** [[NVIDIA-NeMo]], [[NVIDIA-NIM]], [[NeMo-Data-Designer]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[NeMo-Safe-Synthesizer]], [[NeMo-Auditor]], [[NeMo-Retriever]], [[NeMo-Guardrails]], [[NVIDIA-NemoGuard-NIMs]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]], [[NVIDIA-NemoGuard-JailbreakDetect-NIM]], [[NeMo-Curator]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-Data-Flywheel-Blueprint]], [[NVIDIA-AI-Blueprints]]
**Sources:** https://docs.nvidia.com/nemo/microservices/latest/index.html, https://docs.nvidia.com/nemo/microservices/latest/data-designer/index.html, https://docs.nvidia.com/nemo/microservices/latest/customizer/index.html, https://docs.nvidia.com/nemo/microservices/latest/evaluator/index.html, https://docs.nvidia.com/nemo/microservices/latest/safe-synthesizer/about/index.html, https://docs.nvidia.com/nemo/microservices/latest/audit/index.html, https://docs.nvidia.com/nemo/microservices/26.3.0/guardrails/tutorials/deploy-nemoguard-nims.html, https://build.nvidia.com/nvidia/build-an-enterprise-data-flywheel/modelcard, https://docs.nvidia.com/aiq-blueprint/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NeMo Platform is NVIDIA's microservices platform for building and deploying specialized AI agents with open models. It brings together synthetic data generation, model fine-tuning, evaluation, guardrails, inference, RBAC, and observability.

## Detail

### Purpose
Agentic AI systems need more than a model endpoint: they need data creation, customization, evaluation, guardrails, deployment, and governance. NeMo Platform provides an integrated microservices layer for those lifecycle steps.

### Key capabilities
- Synthetic training data generation through [[NeMo-Data-Designer]].
- Model fine-tuning and customization through [[NeMo-Customizer]].
- Model, RAG, retriever, and agent evaluation through [[NeMo-Evaluator]].
- Private tabular data synthesis through [[NeMo-Safe-Synthesizer]].
- Security testing with [[NeMo-Auditor]] and real-time protection with guardrails.
- Self-hosted [[NVIDIA-NemoGuard-NIMs]] deployment through the inference gateway for content safety, topic control, and jailbreak detection.
- Unified inference gateway and NIM integration.
- Workspaces, projects, entities, RBAC, and observability for platform operations.
- Local quickstart and Kubernetes deployment paths.

### NVIDIA context
NeMo Platform is the operational/microservices side of [[NVIDIA-NeMo]], whereas NeMo Framework is the open-source training/development framework. It should be linked from pages about NIM, Retriever, Guardrails, agent workflows, AI blueprints, and data flywheel optimization.

## Connections
- [[NVIDIA-NeMo]] - parent suite for agent lifecycle management.
- [[NVIDIA-NIM]] - inference microservices and hosted NIM targets.
- [[NeMo-Data-Designer]] - synthetic data generation service in NeMo Platform.
- [[NeMo-Customizer]] - fine-tuning and customization service.
- [[NeMo-Evaluator]] - metrics, benchmarks, RAG, retriever, and agent evaluation service.
- [[NeMo-Safe-Synthesizer]] - private synthetic tabular data generation service.
- [[NeMo-Auditor]] - early-access model safety audit service.
- [[NeMo-Retriever]] - retrieval services for enterprise RAG and multimodal extraction.
- [[NeMo-Guardrails]] - real-time protection and policy enforcement.
- [[NVIDIA-NemoGuard-NIMs]] - specialized NIMs deployed through NeMo Platform for guardrail use cases.
- [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]], and [[NVIDIA-NemoGuard-JailbreakDetect-NIM]] - representative guardrail NIM deployments.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - workflow layer for building and optimizing agents.
- [[NVIDIA-AI-Q-Blueprint]] - blueprint that uses NeMo Agent Toolkit concepts with retrieval, evaluation, and deployment.
- [[NVIDIA-Data-Flywheel-Blueprint]] - blueprint that uses NeMo Customizer, Evaluator, Datastore, Deployment Manager, Entity Store, and NIM Proxy.
- [[NVIDIA-AI-Blueprints]] - catalog where NeMo microservices appear in current NVIDIA-authored application workflows.

## Source Excerpts
- NVIDIA NeMo Platform docs describe microservices for synthetic data, customization, evaluation, guardrails, and inference.
