# NVIDIA Agent Intelligence Toolkit

**Type:** Platform
**Tags:** NVIDIA, NeMo Agent Toolkit, AIQ, agents, workflows, observability, MCP, A2A
**Related:** [[NVIDIA-NeMo]], [[NVIDIA-NIM]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-AI-Blueprints]], [[NVIDIA-Data-Flywheel-Blueprint]], [[NeMo-Retriever]], [[NeMo-Guardrails]], [[NVIDIA-OpenShell]], [[Nemotron]], [[Nemotron-3-Nano]], [[Nemotron-3-Super]], [[Nemotron-3-Nano-Omni]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-Enterprise-Reference-Architectures]], [[Red-Hat-AI-Factory-with-NVIDIA]]
**Sources:** https://docs.nvidia.com/aiqtoolkit/latest/index.html, https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html, https://docs.nvidia.com/aiq-blueprint/latest/index.html, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/agentic-ai-in-the-factory.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Agent Intelligence Toolkit now redirects to NVIDIA NeMo Agent Toolkit documentation. It is a framework-agnostic toolkit for connecting agents to tools and data sources, evaluating and profiling agentic workflows, and serving workflows through APIs and agent protocols.

## Detail

### Purpose
Enterprise agent systems rarely live in one framework or one model endpoint. NeMo Agent Toolkit gives teams a reusable workflow layer for connecting tools, LLMs, embedders, retrievers, memory, object stores, and existing agents while adding evaluation and observability.

### Key capabilities
- Framework-agnostic agent workflow construction.
- Integrations with LangChain, LlamaIndex, CrewAI, Semantic Kernel, Google ADK, local Python agents, and enterprise frameworks.
- Profiling, token/timing telemetry, evaluation, and workflow optimization.
- Model Context Protocol (MCP) client/server support.
- Agent-to-Agent (A2A) protocol support.
- API server, UI, and command-line execution paths through the `nat` CLI/package.

### NVIDIA context
The toolkit connects [[NVIDIA-NIM]] model endpoints, [[NeMo-Retriever]] data access, [[NeMo-Guardrails]] controls, and [[Nemotron]] reasoning models into composable agent workflows. Current Nemotron model choices include [[Nemotron-3-Nano]] for efficient agent steps, [[Nemotron-3-Super]] for deeper planning/reasoning, and [[Nemotron-3-Nano-Omni]] for multimodal perception. [[NVIDIA-AI-Q-Blueprint]] is the clearest current blueprint example: it uses toolkit-style orchestration, shallow/deep research routing, evaluation, citations, deployment assets, and Enterprise RA sizing/profiling patterns as a long-running enterprise agent pattern. [[Red-Hat-AI-Factory-with-NVIDIA]] calls out NeMo Agent Toolkit as part of the OpenShift AI agentic workflow stack.

## Connections
- [[NVIDIA-NeMo]] - NeMo is the parent suite for agent lifecycle management.
- [[NVIDIA-NIM]] - NIMs provide model endpoints used by toolkit workflows.
- [[NVIDIA-AI-Q-Blueprint]] - durable blueprint for enterprise research agents built around NeMo Agent Toolkit concepts.
- [[NVIDIA-Enterprise-Reference-Architectures]] - AI-Q Enterprise RA paper shows how toolkit-style agent workflows become sized infrastructure deployments.
- [[NVIDIA-AI-Blueprints]] - blueprint catalog where toolkit-based agent examples are surfaced.
- [[NVIDIA-Data-Flywheel-Blueprint]] - evaluation and customization loop for continuously optimizing agent behavior and model choices.
- [[NeMo-Retriever]] - retrieval services connect agents to enterprise data.
- [[NeMo-Guardrails]] - safety and policy controls for agent behavior.
- [[NVIDIA-OpenShell]] - sandboxed runtime direction for agent tool execution.
- [[Nemotron-3-Nano]], [[Nemotron-3-Super]], and [[Nemotron-3-Nano-Omni]] - current Nemotron model choices for efficient steps, deeper reasoning, and multimodal perception.
- [[NVIDIA-Enterprise-AI-Factory]] - AI factory guidance treats agent workflows as production services needing observability and governance.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide that includes NeMo Agent Toolkit in streamlined agentic AI workflows.

## Source Excerpts
- NVIDIA's NeMo Agent Toolkit docs describe a flexible library for connecting enterprise agents to tools and data sources.
