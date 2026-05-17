# NVIDIA RAG Blueprint

**Type:** Platform
**Tags:** NVIDIA, AI Blueprint, RAG, retrieval augmented generation, NeMo Retriever, NIM, multimodal RAG, enterprise search
**Related:** [[NVIDIA-AI-Blueprints]], [[NVIDIA-NIM]], [[NVIDIA-NIM-Operator]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-AI-Data-Platform]], [[NeMo-Retriever]], [[NeMo-Evaluator]], [[NeMo-Retriever-Embedding-NIM]], [[Llama-Nemotron-Embed-1B-v2]], [[Llama-Nemotron-Embed-VL-1B-v2]], [[NIM-for-NV-CLIP]], [[NeMo-Retriever-Reranking-NIM]], [[Llama-Nemotron-Rerank-1B-v2]], [[Llama-Nemotron-Rerank-VL-1B-v2]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[Nemotron-Parse]], [[NIM-for-Vision-Language-Models]], [[Nemotron-3-Nano-Omni]], [[NVIDIA-NemoGuard-NIMs]], [[Nemotron]], [[cuVS]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Enterprise-Reference-Architectures]]
**Sources:** https://docs.nvidia.com/rag/latest/, https://docs.nvidia.com/rag/latest/vlm-embed.html, https://docs.nvidia.com/rag/latest/multimodal-query.html, https://docs.nvidia.com/nemo/microservices/latest/evaluator/index.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-parse/api.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA RAG Blueprint is NVIDIA's current reference workflow for building retrieval augmented generation applications with NVIDIA NIM, NeMo Retriever, vector search, document ingestion, multimodal retrieval, evaluation, guardrails, and observability. The latest docs cover Docker, Kubernetes/Helm, NIM Operator, retrieval-only mode, Python package usage, multimodal embedding, VLM-based generation, and NVIDIA-hosted or self-hosted model endpoints.

## Detail

### Purpose
Enterprise RAG systems need more than a vector database and an LLM. NVIDIA RAG Blueprint provides an end-to-end NVIDIA-authored architecture for ingesting enterprise documents, extracting text and visual structure, embedding and indexing content, retrieving relevant context, generating answers, and evaluating or governing the pipeline.

### Current scope
- Deployment with Docker, Kubernetes/Helm, NIM Operator, hosted NIM endpoints, self-hosted NIMs, and retrieval-only mode.
- Ingestion paths for text-only content, enhanced PDF extraction, audio ingestion, custom metadata, object storage, data catalog workflows, and MCP server usage.
- Retrieval features including hybrid search, multi-collection retrieval, query decomposition, Milvus and Elasticsearch configuration, [[Llama-Nemotron-Embed-1B-v2]]/[[Llama-Nemotron-Rerank-1B-v2]] text retrieval, and GPU vector-search adjacency through [[cuVS]].
- Multimodal features including [[NIM-for-NV-CLIP]]-style text/image embedding patterns, [[Llama-Nemotron-Embed-VL-1B-v2]] visual-document embeddings, [[Llama-Nemotron-Rerank-VL-1B-v2]] visual-document reranking, [[NIM-for-Vision-Language-Models]] generation, image captioning, document parsing with [[Nemotron-Parse]], and multimodal query support.
- Governance and operations features including [[NVIDIA-NemoGuard-NIMs]], [[NeMo-Evaluator]], RAG accuracy benchmarks, observability, and query-to-answer tracing.

### NVIDIA context
This page is the canonical wiki target for the durable RAG blueprint, not for every subpage under the RAG docs tree. It belongs between [[NeMo-Retriever]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-AI-Data-Platform]], and [[NVIDIA-AI-Blueprints]] because those pages describe the services, agents, data architecture, and blueprint catalog around enterprise retrieval.

## Connections
- [[NVIDIA-AI-Blueprints]] - RAG Blueprint is one of the durable NVIDIA-authored blueprint topics.
- [[NVIDIA-NIM]] and [[NVIDIA-NIM-Operator]] - blueprint deployments can use hosted or self-hosted NIM services and NIM Operator-managed Kubernetes deployment.
- [[NVIDIA-AI-Q-Blueprint]] - AI-Q can use RAG Blueprint-style retrieval services as an enterprise knowledge source.
- [[NVIDIA-Enterprise-Reference-Architectures]] - AI-Q Enterprise RA paper shows RAG services as part of a sized research-agent deployment.
- [[NVIDIA-AI-Data-Platform]] - data-layer reference design for RAG, vector search, and enterprise agent data access.
- [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], [[Llama-Nemotron-Embed-1B-v2]], [[Llama-Nemotron-Embed-VL-1B-v2]], [[NIM-for-NV-CLIP]], [[NeMo-Retriever-Reranking-NIM]], [[Llama-Nemotron-Rerank-1B-v2]], [[Llama-Nemotron-Rerank-VL-1B-v2]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], and [[Nemotron-Parse]] - retrieval, embedding, reranking, parsing, and extraction services used by RAG workflows.
- [[NeMo-Evaluator]] - evaluation service for RAG, retriever, and grounded-generation metrics.
- [[NIM-for-Vision-Language-Models]] - VLM generation layer for multimodal RAG over visual content.
- [[Nemotron-3-Nano-Omni]] - omnimodal Nemotron model relevant to document, chart, image, video, and audio reasoning in agentic RAG.
- [[NVIDIA-NemoGuard-NIMs]] - guardrail layer for governing RAG inputs and outputs.
- [[Nemotron]] - current RAG docs reference Nemotron model choices for reasoning and multimodal query workflows.
- [[cuVS]] - GPU vector search layer adjacent to embedding indexes.
- [[NVIDIA-AI-Enterprise]] - supported enterprise deployment context.

## Source Excerpts
- NVIDIA docs describe RAG Blueprint as documentation for getting started, customizing, and troubleshooting the RAG workflow.
- Current multimodal query docs describe querying a knowledge base with both text and images.

## Resources
- [NVIDIA RAG Blueprint Documentation](https://docs.nvidia.com/rag/latest/)
- [Multimodal Embedding Support](https://docs.nvidia.com/rag/latest/vlm-embed.html)
- [Multimodal Query Support](https://docs.nvidia.com/rag/latest/multimodal-query.html)
