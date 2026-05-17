# NVIDIA AI-Q Blueprint

**Type:** Platform
**Tags:** NVIDIA, AI-Q, AI Blueprint, agents, deep research, NeMo Agent Toolkit, Nemotron, RAG
**Related:** [[NVIDIA-AI-Blueprints]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NeMo-Platform]], [[NeMo-Evaluator]], [[NeMo-Data-Designer]], [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], [[NIM-for-NV-CLIP]], [[NeMo-Retriever-Reranking-NIM]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[Nemotron-Parse]], [[NIM-for-Vision-Language-Models]], [[Nemotron-3-Nano]], [[Nemotron-3-Super]], [[Nemotron-3-Nano-Omni]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[NVIDIA-NIM-Operator]], [[Nemotron]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-RTX-PRO-AI-Factory]]
**Sources:** https://docs.nvidia.com/aiq-blueprint/latest/index.html, https://docs.nvidia.com/aiq-blueprint/latest/architecture/overview.html, https://docs.nvidia.com/aiq-blueprint/latest/deployment/kubernetes.html, https://docs.nvidia.com/rag/latest/, https://docs.nvidia.com/nim/nvclip/latest/introduction.html, https://docs.nvidia.com/nemo/microservices/latest/evaluator/index.html, https://docs.nvidia.com/nemo/microservices/latest/data-designer/index.html, https://build.nvidia.com/nvidia/aiq/blueprintcard, https://docs.nvidia.com/enterprise-reference-architectures/ai-q-research-agent-blueprint.pdf, https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-parse/api.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html, https://build.nvidia.com/nvidia/nemotron-3-nano-30b-a3b/modelcard, https://build.nvidia.com/nvidia/nemotron-3-super-120b-a12b/modelcard
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI-Q Blueprint is an NVIDIA AI Blueprint for enterprise research agents that retrieve, reason, and produce citation-backed answers over enterprise data. Current NVIDIA docs describe AI-Q as a multi-agent deep research system built on the NeMo Agent Toolkit, while the build.nvidia.com card positions it as a customizable agent blueprint that can use NIM, Nemotron, retrieval, and evaluation components.

## Detail

### Purpose
AI-Q addresses a common enterprise agent problem: simple questions should stay fast, while complex research should trigger deeper planning, retrieval, citation verification, and evaluation. The blueprint gives developers a reference architecture for building agents that can connect to private data, perform shallow or deep research, and expose results through application interfaces.

### Architecture
- A routing layer classifies user intent and chooses direct/meta, shallow research, or deep research behavior.
- A shallow researcher handles fast tool-augmented lookups.
- A clarifier can add human-in-the-loop planning before deeper research.
- A deep researcher runs multi-phase investigation with planning, retrieval, and citation handling.
- The system is implemented as a graph-style workflow and documented as compatible with NeMo Agent Toolkit concepts.
- [[NIM-for-NV-CLIP]] is relevant when AI-Q-style research workflows need multimodal text/image retrieval rather than text-only embedding.

### Deployment and customization
AI-Q includes quick-start, installation, architecture, customization, extension, REST API, evaluation, observability, Docker, and Kubernetes documentation. The Kubernetes docs describe Helm-based deployment, NGC image pull secrets, service access, and optional integration with a [[NVIDIA-RAG-Blueprint]] service.
[[NeMo-Evaluator]] is the natural measurement layer for AI-Q-style research agents, while [[NeMo-Data-Designer]] can help create task-specific examples for evaluation or agent improvement. [[Nemotron-3-Nano]] and [[Nemotron-3-Super]] are adjacent text-reasoning model choices for fast versus deep research paths; [[Nemotron-Parse]] and [[Nemotron-3-Nano-Omni]] are adjacent VLM/Nemotron options when research corpora include page images, charts, videos, audio, or UI screenshots.

The Enterprise RA AI-Q paper adds a deployment and sizing view for AI-Q on NVIDIA Enterprise infrastructure. It shows AI-Q as an enterprise research assistant pattern that composes a reasoning LLM, a Nemotron model, retrieval services, document ingestion services, vector storage, Redis, tracing/profiling, and evaluation configuration. The example values keep ingestion, embedding, reranking, and RAG services explicit rather than hiding AI-Q behind a single opaque app container.

### Sizing and operations
The Enterprise RA paper frames AI-Q sizing differently from simple chat because deep research sessions can generate long reports and use large token budgets. It highlights scaling the reasoning model, Nemotron 49B, as a major lever for lowering latency, and it includes a profiler-agent configuration that queries tracing data and reports bottleneck/performance information.

### NVIDIA context
AI-Q is a canonical bridge between [[NVIDIA-AI-Blueprints]] and the enterprise agent stack. It links [[NVIDIA-Agent-Intelligence-Toolkit]] workflow orchestration, [[NeMo-Retriever]] enterprise data access, [[NVIDIA-NIM]] model endpoints, [[Nemotron]] reasoning models, and [[NVIDIA-AI-Enterprise]] deployment patterns. In the [[NVIDIA-Enterprise-AI-Factory]] design guide, AI-Q-style agents are treated as long-running, inspectable, governable enterprise services.

## Connections
- [[NVIDIA-AI-Blueprints]] - AI-Q is a durable NVIDIA-authored blueprint with a stable docs surface.
- [[NVIDIA-RAG-Blueprint]] - optional retrieval service pattern for enterprise knowledge access.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - NeMo Agent Toolkit is the workflow layer referenced by the AI-Q docs.
- [[NeMo-Platform]] - microservices platform adjacent to AI-Q lifecycle workflows.
- [[NeMo-Evaluator]] - evaluation service for agentic, RAG, retriever, and answer-quality metrics.
- [[NeMo-Data-Designer]] - synthetic data service for task-specific agent examples and test sets.
- [[NeMo-Retriever]] - enterprise retrieval and RAG services can provide AI-Q data access.
- [[NeMo-Retriever-Embedding-NIM]] - embedding NIM for indexing and querying enterprise knowledge.
- [[NIM-for-NV-CLIP]] - multimodal text/image embedding NIM for research corpora with visual assets.
- [[NeMo-Retriever-Reranking-NIM]] - reranking NIM for improving citation and context relevance.
- [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], and [[Nemotron-Parse]] - multimodal document extraction and parsing services for enterprise research corpora.
- [[NIM-for-Vision-Language-Models]] and [[Nemotron-3-Nano-Omni]] - VLM/omnimodal reasoning layer for research workflows with visual, audio, video, document, or UI data.
- [[NVIDIA-NIM]] - AI-Q uses NVIDIA-hosted or self-hosted model endpoints for inference.
- [[NIM-for-Large-Language-Models]] - LLM NIMs provide self-hosted model serving for agent workflows.
- [[NVIDIA-NIM-Operator]] - Kubernetes lifecycle path for AI-Q deployments that use NIM/NeMo microservices.
- [[Nemotron]], [[Nemotron-3-Nano]], and [[Nemotron-3-Super]] - Nemotron models are listed in AI-Q's current build.nvidia.com card and related model catalog.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment and support paths surround AI-Q production usage.
- [[NVIDIA-Enterprise-AI-Factory]] - AI-Q is called out as a long-running agent pattern for enterprise AI factories.
- [[NVIDIA-Enterprise-Reference-Architectures]] - Enterprise RA paper provides deployment, sizing, and operations context for AI-Q.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - software stack underneath AI-Q Enterprise RA deployment.
- [[NVIDIA-RTX-PRO-AI-Factory]] - RTX PRO 6000 class infrastructure appears in the AI-Q Enterprise RA sizing context.

## Source Excerpts
- NVIDIA AI-Q docs describe a two-tier research architecture that keeps simple queries fast and reserves deep research for complex topics.
- The build.nvidia.com card describes AI-Q as an NVIDIA Blueprint for agents that connect, retrieve, reason, and operate over enterprise data.
- The Enterprise RA AI-Q paper adds deployment, sizing, profiler, and evaluation context for AI-Q research-agent workloads.

## Resources
- [AI-Q Blueprint Docs](https://docs.nvidia.com/aiq-blueprint/latest/index.html)
- [AI-Q Architecture Overview](https://docs.nvidia.com/aiq-blueprint/latest/architecture/overview.html)
- [AI-Q Blueprint Card](https://build.nvidia.com/nvidia/aiq/blueprintcard)
- [AI-Q Research Agent Blueprint Enterprise RA PDF](https://docs.nvidia.com/enterprise-reference-architectures/ai-q-research-agent-blueprint.pdf)
