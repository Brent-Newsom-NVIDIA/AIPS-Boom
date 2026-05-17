# Llama Nemotron Rerank 1B v2

**Type:** NVIDIA model
**Tags:** NVIDIA, Llama Nemotron, NeMo Retriever, reranking, text retrieval, multilingual retrieval, cross-lingual retrieval, RAG, TensorRT, Build NVIDIA
**Related:** [[NeMo-Retriever]], [[NeMo-Retriever-Reranking-NIM]], [[Llama-Nemotron-Embed-1B-v2]], [[Llama-Nemotron-Embed-VL-1B-v2]], [[Llama-Nemotron-Rerank-VL-1B-v2]], [[NeMo-Retriever-Embedding-NIM]], [[NVIDIA-NIM]], [[Nemotron]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-AI-Data-Platform]], [[TensorRT]], [[Triton-Inference-Server]]
**Sources:** https://build.nvidia.com/nvidia/llama-nemotron-rerank-1b-v2/modelcard, https://build.nvidia.com/nvidia/llama-nemotron-rerank-1b-v2, https://huggingface.co/nvidia/llama-nemotron-rerank-1b-v2
**Last Updated:** 2026-04-29

## Summary
Llama Nemotron Rerank 1B v2 is an NVIDIA text reranking model for multilingual and cross-lingual question-answer retrieval. It consumes query/passage pairs and returns relevance logits so retrieval pipelines can reorder candidates from dense embeddings, lexical search, or hybrid retrieval before generation.

## Detail
The Build NVIDIA model card describes llama-nemotron-rerank-1b-v2 as optimized to score how relevant a document or passage is to a query. It supports long text up to 8192 tokens and was evaluated across the same 26-language multilingual/cross-lingual retrieval scope as [[Llama-Nemotron-Embed-1B-v2]].

Architecturally, the model card describes a transformer encoder fine-tuned from `meta-llama/Llama-3.2-1B`. Unlike a bi-encoder embedding model, this reranker acts as a cross-encoder over query/passage pairs, letting the model use token-level interaction before producing a score. NVIDIA positions it as a candidate-ordering stage rather than a model to run over an entire corpus.

In an NVIDIA retrieval pipeline, [[Llama-Nemotron-Embed-1B-v2]] or another dense/sparse retriever returns candidate passages first. Llama Nemotron Rerank 1B v2 then rescales and reorders those candidates, improving the context that downstream [[NVIDIA-NIM]] LLMs or agent workflows receive.

## Inputs and Outputs
- **Inputs:** pairs of texts, typically a query and candidate passage.
- **Retrieval role:** rerank candidate passages after embedding, sparse, or hybrid retrieval.
- **Context behavior:** evaluated up to 8192 tokens; longer passages should be chunked or truncated.
- **Outputs:** float logits/scores, one score per passage; callers may apply sigmoid if they need probabilities.

## Deployment and Evaluation
The Build NVIDIA model card lists TensorRT as the runtime/acceleration engine, Linux as the operating system, and Ampere, Hopper, and Lovelace as supported NVIDIA hardware microarchitectures. The Hugging Face model card also shows Transformers and vLLM paths, including a `/rerank` serving pattern with a prompt template that formats query/document pairs.

NVIDIA reports evaluation as part of a pipeline with an embedding retrieval model across NQ, HotpotQA, FiQA, TechQA, MIRACL multilingual retrieval, MLQA cross-lingual retrieval, and MLDR long-document retrieval. The published results compare embedding-only retrieval with embedding-plus-reranking pipelines and show the intended pairing with [[Llama-Nemotron-Embed-1B-v2]].

## Connections
- [[NeMo-Retriever]] - model belongs to NVIDIA's retrieval and RAG stack.
- [[NeMo-Retriever-Reranking-NIM]] - service-level reranking NIM page; this page covers the specific text reranker model.
- [[Llama-Nemotron-Embed-1B-v2]] - companion text embedding model that generates candidates for reranking.
- [[Llama-Nemotron-Embed-VL-1B-v2]] and [[Llama-Nemotron-Rerank-VL-1B-v2]] - multimodal/visual-document retrieval counterparts.
- [[NeMo-Retriever-Embedding-NIM]] - embedding services produce candidate chunks before reranking.
- [[NVIDIA-NIM]] - model is surfaced through Build NVIDIA/NIM-oriented deployment paths.
- [[Nemotron]] - broader NVIDIA model family context for Llama Nemotron retrieval models.
- [[NVIDIA-RAG-Blueprint]], [[NVIDIA-AI-Q-Blueprint]], and [[NVIDIA-AI-Data-Platform]] - application contexts where reranking improves citation and grounding quality.
- [[TensorRT]] and [[Triton-Inference-Server]] - NVIDIA inference stack adjacent to model deployment.

## Resources
- [Build NVIDIA model card](https://build.nvidia.com/nvidia/llama-nemotron-rerank-1b-v2/modelcard)
- [Build NVIDIA endpoint page](https://build.nvidia.com/nvidia/llama-nemotron-rerank-1b-v2)
- [Hugging Face model page](https://huggingface.co/nvidia/llama-nemotron-rerank-1b-v2)
