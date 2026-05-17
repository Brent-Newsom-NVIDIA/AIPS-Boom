# NeMo Retriever

**Type:** Platform
**Tags:** NVIDIA, NeMo Retriever, RAG, retrieval, embedding, reranking, multimodal data extraction
**Related:** [[NVIDIA-NeMo]], [[NeMo-Platform]], [[NVIDIA-NIM]], [[NVIDIA-NIM-Operator]], [[NVIDIA-RAG-Blueprint]], [[NeMo-Retriever-Embedding-NIM]], [[Llama-Nemotron-Embed-1B-v2]], [[Llama-Nemotron-Embed-VL-1B-v2]], [[NIM-for-NV-CLIP]], [[NeMo-Retriever-Reranking-NIM]], [[Llama-Nemotron-Rerank-1B-v2]], [[Llama-Nemotron-Rerank-VL-1B-v2]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[Nemotron-Parse]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-AI-Blueprints]], [[cuVS]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[Nemotron]]
**Sources:** https://docs.nvidia.com/nemo/retriever/latest/index.html, https://docs.nvidia.com/rag/latest/, https://docs.nvidia.com/nim/nemo-retriever/text-embedding/latest/overview.html, https://docs.nvidia.com/nim/nvclip/latest/introduction.html, https://docs.nvidia.com/nim/nemo-retriever/text-reranking/latest/overview.html, https://docs.nvidia.com/nim/ingestion/image-ocr/latest/overview.html, https://docs.nvidia.com/nim/ingestion/object-detection/latest/overview.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-parse/api.html, https://www.nvidia.com/en-us/data-center/ai-data-platform/, https://docs.nvidia.com/aiq-blueprint/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NeMo Retriever is NVIDIA's collection of microservices for building and scaling retrieval pipelines with multimodal data extraction, embeddings, indexing, retrieval, and reranking. It is built with [[NVIDIA-NIM]] and is part of the NeMo software suite for AI agent lifecycle management.

## Detail

### Purpose
Enterprise RAG and agent systems need to connect models to proprietary data with privacy, accuracy, and scale. NeMo Retriever provides document extraction, embedding, indexing, semantic/hybrid search, and reranking services optimized for NVIDIA infrastructure.

### Key capabilities
- Multimodal data extraction for documents with text, tables, charts, and infographics, including [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], and adjacent VLM-style parsing with [[Nemotron-Parse]].
- Embedding and indexing flows using vector databases such as LanceDB or Milvus, including [[NeMo-Retriever-Embedding-NIM]].
- Multimodal text/image embedding and semantic image retrieval through [[NIM-for-NV-CLIP]].
- GPU-accelerated vector search and indexing through [[cuVS]].
- Semantic and hybrid retrieval with embedding and reranking NIM microservices such as [[NeMo-Retriever-Embedding-NIM]] and [[NeMo-Retriever-Reranking-NIM]].
- Model-specific text retrieval using [[Llama-Nemotron-Embed-1B-v2]] for candidate generation and [[Llama-Nemotron-Rerank-1B-v2]] for passage reranking.
- Model-specific multimodal document retrieval using [[Llama-Nemotron-Embed-VL-1B-v2]] for candidate generation and [[Llama-Nemotron-Rerank-VL-1B-v2]] for visual-document reranking.
- Multimodal visual-document reranking with model-specific endpoints such as [[Llama-Nemotron-Rerank-VL-1B-v2]].
- Enterprise privacy and deployment model consistent with self-hosted NVIDIA AI stacks.

### NVIDIA context
NeMo Retriever is a central bridge between enterprise data and NVIDIA agent systems. It connects [[NVIDIA-NIM]] model endpoints, [[NVIDIA-Agent-Intelligence-Toolkit]] workflows, [[Nemotron]] reasoning models, [[NVIDIA-AI-Data-Platform]] reference workflows, [[NVIDIA-RAG-Blueprint]] deployments, and vector-search acceleration.

## Connections
- [[NVIDIA-NeMo]] - Retriever is part of the NeMo suite.
- [[NeMo-Platform]] - platform-level deployment and lifecycle management for NeMo services.
- [[NVIDIA-NIM]] - Retriever components are delivered as NIM-style microservices.
- [[NVIDIA-NIM-Operator]] - Kubernetes deployment and lifecycle management path for NIM/NeMo microservices.
- [[NVIDIA-RAG-Blueprint]] - reference RAG workflow that composes Retriever-style extraction, embedding, retrieval, and generation.
- [[NeMo-Retriever-Embedding-NIM]] - embedding microservice for semantic search and RAG.
- [[Llama-Nemotron-Embed-1B-v2]] - NVIDIA text embedding model for multilingual long-document QA retrieval.
- [[Llama-Nemotron-Embed-VL-1B-v2]] - NVIDIA multimodal embedding model for visual document/page retrieval.
- [[NIM-for-NV-CLIP]] - multimodal text/image embedding NIM for semantic image search and multimodal RAG.
- [[NeMo-Retriever-Reranking-NIM]] - reranking microservice for improving candidate context relevance.
- [[Llama-Nemotron-Rerank-1B-v2]] - NVIDIA text reranker model for improving retrieved passage order.
- [[Llama-Nemotron-Rerank-VL-1B-v2]] - NVIDIA multimodal reranker model for pages, slides, text, and image+text documents.
- [[NIM-for-Image-OCR]] - OCR extraction microservice for images and visual document regions.
- [[NIM-for-Object-Detection]] - document object-detection microservices for page, table, and graphic elements.
- [[Nemotron-Parse]] - VLM document parser for text/table extraction, semantic classes, and bounding boxes.
- [[NVIDIA-AI-Data-Platform]] - AI Data Platform uses retrieval, indexing, and vector search to connect agents to enterprise data.
- [[NVIDIA-AI-Q-Blueprint]] - AI-Q uses retrieval and knowledge sources as part of its enterprise research workflow.
- [[NVIDIA-AI-Blueprints]] - RAG, deep research, and data search blueprints are discovery surfaces for Retriever-related patterns.
- [[cuVS]] - GPU vector search acceleration used in indexing/retrieval stacks.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - agent workflows use retrievers to access enterprise data.

## Source Excerpts
- NVIDIA NeMo Retriever docs describe multimodal extraction, embedding/indexing, retrieval, and reranking microservices.
