# Llama Nemotron Rerank VL 1B v2

**Type:** NVIDIA model
**Tags:** NVIDIA, Llama Nemotron, NeMo Retriever, reranking, multimodal retrieval, VLM, RAG, document retrieval, TensorRT, Build NVIDIA
**Related:** [[NeMo-Retriever]], [[NeMo-Retriever-Reranking-NIM]], [[NeMo-Retriever-Embedding-NIM]], [[Llama-Nemotron-Embed-1B-v2]], [[Llama-Nemotron-Rerank-1B-v2]], [[Llama-Nemotron-Embed-VL-1B-v2]], [[NVIDIA-NIM]], [[NIM-for-Vision-Language-Models]], [[NIM-for-NV-CLIP]], [[NVIDIA-EAGLE]], [[Nemotron]], [[Nemotron-Parse]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-AI-Data-Platform]], [[TensorRT]], [[Triton-Inference-Server]]
**Sources:** https://build.nvidia.com/nvidia/llama-nemotron-rerank-vl-1b-v2/modelcard, https://build.nvidia.com/nvidia/llama-nemotron-rerank-vl-1b-v2, https://huggingface.co/nvidia/llama-nemotron-rerank-vl-1b-v2
**Last Updated:** 2026-04-29

## Summary
Llama Nemotron Rerank VL 1B v2 is an NVIDIA multimodal reranking model for question-answer retrieval over document pages, slides, images, text, and image+text inputs. It scores query/document pairs with raw logits so retrieval pipelines can reorder candidate pages before generation.

## Detail
The Build NVIDIA model card describes the model as a multimodal question-answering retrieval reranker. It is designed for vision RAG and document retrieval pipelines where an embedding model first returns candidate pages and the reranker then performs deeper query/document interaction to produce a final ranking.

The model can process document pages as images, text, or image+text combinations. NVIDIA calls out screenshots of document pages or slides as expected image inputs, including pages with text, tables, charts, and infographics. This makes it adjacent to [[Nemotron-Parse]], [[NIM-for-Image-OCR]], and document-ingestion workflows that convert enterprise PDFs and slides into retrievable visual/text context.

Architecturally, the model card describes a transformer cross-encoder with about 1.7B parameters. It uses an Eagle VLM architecture with a SigLIP 2 400M vision encoder and the [[Llama-Nemotron-Rerank-1B-v2]] language model. The model card also notes NVIDIA Eagle 2 tiling ideas and Nemoretriever-Parse as related innovations.

## Inputs and Outputs
- **Inputs:** image and text, including image-only, text-only, or image+text candidate documents paired with a text query.
- **Image expectations:** RGB document/page/slide screenshots, including visual documents with tables, charts, and infographics.
- **Context behavior:** fine-tuned with `max_input_tiles=4` and 2048-token context; evaluated with `max_input_tiles=6` and up to 10240-token context for image+text.
- **Outputs:** list of float logits, one per query/document pair; callers may convert logits into probabilities with sigmoid if desired.

## Deployment and Evaluation
The model card lists TensorRT as the runtime engine, Linux as the supported OS, and NVIDIA Ampere, Hopper, Lovelace, and Blackwell as supported hardware microarchitectures. It is also usable from Hugging Face Transformers with `transformers>=4.56.0` and optional FlashAttention.

NVIDIA reports evaluation on ViDoRe V1, V2, V3 and internal visual retrieval datasets, plus text retrieval benchmarks such as BEIR, MIRACL, MLQA, and MLDR. The model card evaluates it in an embedding-plus-reranking pipeline with the companion [[Llama-Nemotron-Embed-VL-1B-v2]] embedding model.

## Connections
- [[NeMo-Retriever]] - model belongs in NVIDIA's retrieval/RAG stack.
- [[NeMo-Retriever-Reranking-NIM]] - service-level reranking NIM page; this page covers the specific multimodal reranker model.
- [[NeMo-Retriever-Embedding-NIM]], [[Llama-Nemotron-Embed-VL-1B-v2]], and [[NIM-for-NV-CLIP]] - embedding stages that can produce candidates before reranking.
- [[Llama-Nemotron-Embed-1B-v2]] and [[Llama-Nemotron-Rerank-1B-v2]] - text-only counterparts for multilingual passage retrieval and reranking.
- [[NIM-for-Vision-Language-Models]] and [[NVIDIA-EAGLE]] - VLM architecture and model-family context.
- [[Nemotron]] and [[Nemotron-Parse]] - Nemotron family and document-parsing context around multimodal retrieval.
- [[NVIDIA-RAG-Blueprint]], [[NVIDIA-AI-Q-Blueprint]], and [[NVIDIA-AI-Data-Platform]] - application contexts where multimodal retrieval/reranking improves grounded answers.
- [[TensorRT]] and [[Triton-Inference-Server]] - NVIDIA inference stack adjacent to model deployment.

## Resources
- [Build NVIDIA model card](https://build.nvidia.com/nvidia/llama-nemotron-rerank-vl-1b-v2/modelcard)
- [Build NVIDIA endpoint page](https://build.nvidia.com/nvidia/llama-nemotron-rerank-vl-1b-v2)
- [Hugging Face model page](https://huggingface.co/nvidia/llama-nemotron-rerank-vl-1b-v2)
