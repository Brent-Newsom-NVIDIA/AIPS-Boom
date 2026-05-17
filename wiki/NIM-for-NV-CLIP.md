# NIM for NV-CLIP

**Type:** Microservice
**Tags:** NVIDIA, NIM, NV-CLIP, CLIP, multimodal embeddings, text embeddings, image embeddings, RAG, retrieval, semantic search
**Related:** [[NVIDIA-NIM]], [[NIM-for-Vision-Language-Models]], [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[NVLM]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-AI-Q-Blueprint]], [[cuVS]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-AI-Enterprise]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/nvclip/latest/introduction.html, https://docs.nvidia.com/nim/nvclip/latest/index.html, https://docs.nvidia.com/nim/nvclip/latest/getting-started.html
**Last Updated:** 2026-04-29

## Summary
NIM for NV-CLIP is NVIDIA's NIM microservice for text and image embedding models. Current NVIDIA docs position NV-CLIP NIM as an enterprise-ready multimodal embedding service for semantic search, retrieval augmented generation (RAG), image retrieval, zero-shot image classification, text classification, clustering, and custom multimodal applications.

## Detail

### Purpose
Multimodal applications often need a shared embedding space for text and images. NV-CLIP NIM provides a deployable embedding endpoint so documents, images, and user queries can be encoded for vector search and retrieval workflows.

### Current scope
- Provides text and image embeddings for RAG and semantic retrieval.
- Supports multimodal RAG where both knowledge-base chunks and images are embedded and stored in a vector database.
- Supports zero-shot image classification and semantic image search using natural-language descriptions.
- Supports text classification, clustering, topic discovery, and recommender-style workflows.
- Provides OpenAI-compatible programming patterns plus NVIDIA extensions.
- Current docs mention model-family containers such as `nvidia/nvclip-vit-h-14`.
- Uses CUDA, TensorRT or ONNX execution paths, Triton Inference Server, and NGC container distribution.
- Getting-started docs note NVIDIA AI Enterprise licensing for self-hosting.

### NVIDIA context
NV-CLIP sits between [[NeMo-Retriever]] extraction/retrieval workflows and [[NIM-for-Vision-Language-Models]] reasoning workflows. It is an embedding service, not a chat VLM, so queries about image/text vector retrieval should land here rather than only on [[NVLM]].

## Connections
- [[NeMo-Retriever]] and [[NeMo-Retriever-Embedding-NIM]] - Retriever workflows use embedding NIMs for semantic search and RAG.
- [[NIM-for-Vision-Language-Models]] and [[NVLM]] - VLM reasoning complements NV-CLIP embedding and retrieval.
- [[NIM-for-Image-OCR]] and [[NIM-for-Object-Detection]] - extraction NIMs can feed multimodal retrieval pipelines.
- [[NVIDIA-AI-Data-Platform]] and [[NVIDIA-AI-Q-Blueprint]] - enterprise data and agent workflows use retrieval and embeddings.
- [[cuVS]] - GPU vector search layer for embedding indexes.
- [[TensorRT]] and [[Triton-Inference-Server]] - acceleration and serving stack named in the docs.
- [[NVIDIA-AI-Enterprise]] and [[NGC]] - self-hosting license and container distribution context.

## Source Excerpts
- NVIDIA docs describe NV-CLIP NIM as providing text and image embeddings for semantic search, RAG, and multimodal applications.
- The current docs say the service is built with CUDA, TensorRT, and Triton for GPU acceleration.

## Resources
- [NVIDIA NIM for NV-CLIP Introduction](https://docs.nvidia.com/nim/nvclip/latest/introduction.html)
- [NVIDIA NIM for NV-CLIP Documentation](https://docs.nvidia.com/nim/nvclip/latest/index.html)
