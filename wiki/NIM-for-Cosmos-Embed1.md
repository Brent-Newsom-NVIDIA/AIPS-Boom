# NIM for Cosmos Embed1

**Type:** Microservice
**Tags:** NVIDIA, NIM, Cosmos Embed1, embeddings, video retrieval, physical AI, multimodal search, RAG, dataset curation
**Related:** [[NVIDIA-Cosmos]], [[NIM-for-Cosmos-WFM]], [[NIM-for-Cosmos-Reason]], [[NIM-for-Vision-Language-Models]], [[NVIDIA-Video-Search-and-Summarization-Blueprint]], [[NVIDIA-Cosmos-Curator-LHA]], [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-Cloud-Functions]], [[cuVS]], [[CV-CUDA]], [[NVIDIA-Video-Codec-SDK]], [[TensorRT]], [[Triton-Inference-Server]]
**Sources:** https://docs.nvidia.com/nim/cosmos-embed1/latest/introduction.html, https://docs.nvidia.com/vss/latest/, https://docs.nvidia.com/vss/latest/adding-workflows.html, https://docs.nvidia.com/nim/cosmos-embed1/latest/index.html, https://docs.nvidia.com/nim/cosmos-embed1/latest/configuration.html, https://docs.nvidia.com/nim/cosmos-embed1/latest/performance.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM for Cosmos Embed1 is a NIM microservice that generates joint video-text embeddings for short-form videos. It maps video and text into a shared vector space for text-to-video retrieval, semantic deduplication, zero-shot classification, k-nearest-neighbor search, and physical AI dataset curation.

## Detail

### Purpose
Physical AI workflows need searchable video data before they can curate, train, post-train, or evaluate world models. Cosmos Embed1 provides an OpenAI Embeddings-compatible HTTP API for creating video and text vectors that can feed retrieval, semantic search, and curation workflows.

### Current scope
- Shared video-text embedding generation for short-form video and text inputs.
- Downloadable NIM container deployment or managed NVIDIA Cloud Functions deployment.
- Query mode for low-latency interactive requests.
- Bulk mode for high-throughput offline indexing and analytics.
- GPU-accelerated video decoding and preprocessing using NVIDIA video and CV acceleration paths.
- Current release notes identify the 224p Cosmos-Embed1 variant with 256-dimensional output vectors.

### NVIDIA context
Cosmos Embed1 complements [[NIM-for-Cosmos-WFM]] by making physical-world video datasets searchable and complements [[NIM-for-Cosmos-Reason]] by feeding retrieved video/image context into VLM reasoning workflows. It also connects Cosmos video search to [[NeMo-Retriever]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-Video-Search-and-Summarization-Blueprint]], and [[cuVS]] where embeddings become retrieval indexes for RAG, data curation, and agentic video understanding.

## Connections
- [[NVIDIA-Cosmos]] - parent physical AI and world model platform.
- [[NIM-for-Cosmos-WFM]] - generation NIM for Cosmos Predict and Transfer models.
- [[NIM-for-Cosmos-Reason]] - VLM reasoning NIM family that can consume retrieved visual context.
- [[NVIDIA-Video-Search-and-Summarization-Blueprint]] - VSS uses video embeddings for natural-language video search workflows.
- [[NVIDIA-Cosmos-Curator-LHA]] - curation workflow that can use embeddings for video understanding.
- [[NeMo-Retriever]] and [[NeMo-Retriever-Embedding-NIM]] - adjacent NVIDIA retrieval microservice stack.
- [[NVIDIA-AI-Data-Platform]] - enterprise data platform for retrieval, video search, and RAG.
- [[cuVS]] - vector search library for embedding indexes.
- [[NVIDIA-Cloud-Functions]] - managed deployment option for the same service surface.
- [[CV-CUDA]] and [[NVIDIA-Video-Codec-SDK]] - NVIDIA accelerated preprocessing and video decode technologies adjacent to the NIM.
- [[TensorRT]] and [[Triton-Inference-Server]] - production inference stack used across NIM microservices.

## Source Excerpts
- NVIDIA docs describe Cosmos Embed1 as a NIM that generates joint video-text embeddings for short-form videos.
- The docs list text-to-video retrieval, semantic deduplication, zero-shot classification, and nearest-neighbor search as target tasks.

## Resources
- [NVIDIA NIM Cosmos Embed1 Overview](https://docs.nvidia.com/nim/cosmos-embed1/latest/introduction.html)
- [NVIDIA NIM Cosmos Embed1 Index](https://docs.nvidia.com/nim/cosmos-embed1/latest/index.html)
- [Cosmos Embed1 Configuration](https://docs.nvidia.com/nim/cosmos-embed1/latest/configuration.html)
