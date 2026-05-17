# Llama Nemotron Embed 1B v2

**Type:** NVIDIA model
**Tags:** NVIDIA, Llama Nemotron, NeMo Retriever, embedding, text retrieval, multilingual retrieval, cross-lingual retrieval, RAG, Matryoshka embeddings, TensorRT, Build NVIDIA
**Related:** [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], [[Llama-Nemotron-Rerank-1B-v2]], [[Llama-Nemotron-Embed-VL-1B-v2]], [[Llama-Nemotron-Rerank-VL-1B-v2]], [[NVIDIA-NIM]], [[Nemotron]], [[NeMo-Customizer]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-AI-Data-Platform]], [[cuVS]], [[TensorRT]], [[Triton-Inference-Server]]
**Sources:** https://build.nvidia.com/nvidia/llama-nemotron-embed-1b-v2/modelcard, https://build.nvidia.com/nvidia/llama-nemotron-embed-1b-v2, https://huggingface.co/nvidia/llama-nemotron-embed-1b-v2
**Last Updated:** 2026-04-29

## Summary
Llama Nemotron Embed 1B v2 is an NVIDIA text embedding model for multilingual and cross-lingual long-document question-answer retrieval. It produces dense embeddings for indexing and semantic search, supports 8192-token text inputs, and can emit configurable Matryoshka embedding dimensions from 384 through 2048.

## Detail
The Build NVIDIA model card describes llama-nemotron-embed-1b-v2 as optimized for multilingual and cross-lingual text QA retrieval across 26 languages. It is part of the NVIDIA Nemotron retriever family and is intended for large text corpora where dense retrieval must handle long documents, multilingual content, and storage-sensitive vector indexes.

Architecturally, the model is a transformer encoder fine-tuned from a Llama 3.2 1B retriever. It uses a bi-encoder retrieval setup: query text and passage text are encoded independently, then similarity search finds nearby passages in embedding space. The model card lists 2048 as the maximum embedding dimension and supports output dimensions of 384, 512, 768, 1024, or 2048 through Matryoshka embeddings.

In NVIDIA retrieval pipelines, this model is the text-only candidate-generation counterpart to [[Llama-Nemotron-Embed-VL-1B-v2]]. [[Llama-Nemotron-Rerank-1B-v2]] can rescore its text candidates, while [[Llama-Nemotron-Rerank-VL-1B-v2]] serves a similar reranking role for visual document pipelines.

## Inputs and Outputs
- **Inputs:** text strings or lists of text strings.
- **Retrieval role:** encode queries and passages independently for vector search.
- **Context behavior:** supports text up to 8192 tokens; longer content should be chunked or truncated.
- **Outputs:** dense float embedding vectors with configurable dimensions of 384, 512, 768, 1024, or 2048.

## Deployment and Evaluation
The Build NVIDIA model card lists TensorRT as the runtime/acceleration engine and Linux as the supported operating system. NVIDIA lists Ampere, Hopper, Lovelace, and Blackwell hardware compatibility on Build NVIDIA; the Hugging Face model card also references a Llama Nemotron embedding NIM runtime and shows Sentence Transformers, Transformers, and vLLM-oriented usage paths.

NVIDIA reports evaluation against academic question-answer retrieval benchmarks including NQ, HotpotQA, FiQA, TechQA, MIRACL multilingual retrieval, MLQA cross-lingual retrieval, and MLDR long-document retrieval. The Hugging Face model card links the model to the NV-Retriever research lineage on hard-negative mining for text embeddings.

## Connections
- [[NeMo-Retriever]] - model belongs to NVIDIA's retrieval and RAG stack.
- [[NeMo-Retriever-Embedding-NIM]] - service-level embedding NIM page; this page covers the specific text embedding model.
- [[Llama-Nemotron-Rerank-1B-v2]] - companion text reranker for improving candidate passage ordering.
- [[Llama-Nemotron-Embed-VL-1B-v2]] and [[Llama-Nemotron-Rerank-VL-1B-v2]] - multimodal/visual-document retrieval counterparts.
- [[NVIDIA-NIM]] and [[NeMo-Customizer]] - NIM deployment and customization context for NVIDIA retriever models.
- [[Nemotron]] - broader NVIDIA model family context for Llama Nemotron retrieval models.
- [[NVIDIA-RAG-Blueprint]], [[NVIDIA-AI-Q-Blueprint]], and [[NVIDIA-AI-Data-Platform]] - application contexts for enterprise text retrieval and grounded generation.
- [[cuVS]] - GPU vector search layer adjacent to dense retrieval indexes.
- [[TensorRT]] and [[Triton-Inference-Server]] - NVIDIA inference stack adjacent to model deployment.

## Resources
- [Build NVIDIA model card](https://build.nvidia.com/nvidia/llama-nemotron-embed-1b-v2/modelcard)
- [Build NVIDIA endpoint page](https://build.nvidia.com/nvidia/llama-nemotron-embed-1b-v2)
- [Hugging Face model page](https://huggingface.co/nvidia/llama-nemotron-embed-1b-v2)
