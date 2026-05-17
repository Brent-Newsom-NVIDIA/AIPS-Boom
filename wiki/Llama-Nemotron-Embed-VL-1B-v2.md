# Llama Nemotron Embed VL 1B v2

**Type:** NVIDIA model
**Tags:** NVIDIA, Llama Nemotron, NeMo Retriever, embedding, multimodal retrieval, VLM, RAG, document retrieval, TensorRT, Triton, Build NVIDIA
**Related:** [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], [[Llama-Nemotron-Embed-1B-v2]], [[Llama-Nemotron-Rerank-1B-v2]], [[Llama-Nemotron-Rerank-VL-1B-v2]], [[NVIDIA-NIM]], [[NIM-for-Vision-Language-Models]], [[NIM-for-NV-CLIP]], [[NVIDIA-EAGLE]], [[Nemotron]], [[Nemotron-Parse]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-AI-Data-Platform]], [[TensorRT]], [[Triton-Inference-Server]]
**Sources:** https://build.nvidia.com/nvidia/llama-nemotron-embed-vl-1b-v2/modelcard, https://build.nvidia.com/nvidia/llama-nemotron-embed-vl-1b-v2, https://huggingface.co/nvidia/llama-nemotron-embed-vl-1b-v2
**Last Updated:** 2026-04-29

## Summary
Llama Nemotron Embed VL 1B v2 is an NVIDIA multimodal embedding model for question-answer retrieval over documents represented as text, images, or combined image+text inputs. It belongs to the NeMo Retriever/NIM retrieval stack and produces dense 2048-dimensional embeddings for visual document search, multimodal RAG, and enterprise knowledge retrieval.

## Detail
The Build NVIDIA model card describes the model as optimized for multimodal question-answering retrieval. It embeds user queries as text and documents as text, images, or image+text, with explicit support for pages containing text, tables, charts, and infographics.

Architecturally, the model card describes a transformer encoder and a fine-tuned multimodal Llama 3.2 1B retriever. It combines a Llama 3.2 1B language backbone with a SigLIP2 400M vision encoder, 16 language-model layers, and 2048-dimensional embeddings. NVIDIA connects the VLM encoder to [[NVIDIA-EAGLE]]/Eagle 2 and [[Nemotron-Parse]]-style tiling ideas for high-resolution visual document understanding.

In a retrieval pipeline, this model is the candidate-generation stage. It vectorizes a document corpus offline, vectorizes a text query online, and lets a vector search layer find nearest document pages or text chunks. [[Llama-Nemotron-Rerank-VL-1B-v2]] can then rescore the retrieved candidates with a cross-encoder reranking pass.

## Inputs and Outputs
- **Query inputs:** text queries.
- **Document inputs:** text, image, or image+text documents.
- **Document examples:** PDF page images, slides, tables, charts, infographics, and OCR-enriched page content.
- **Context and image constraints:** Build NVIDIA lists 8192 tokens as the maximum context length and describes automatic NIM resizing for supported document images under the documented size limit.
- **Outputs:** float embedding vectors with maximum dimension 2048.

## Deployment and Evaluation
The Build NVIDIA page lists NeMo Retriever Embedding NIM as the primary runtime engine and TensorRT as the acceleration engine. The Hugging Face model card also shows vLLM examples for local server and in-process embedding workflows, using `query:` and `passage:` prefixes or chat-template roles to separate query and document embedding behavior.

Supported NVIDIA hardware in the Build card spans Ampere, Hopper, Lovelace, and Blackwell systems, including A100, H100/H200, L40S/L40, RTX 6000 Ada, B100/B200, and GB200-class systems. NVIDIA reports evaluation on ViDoRe V1/V2/V3, DigitalCorpora-style visual document benchmarks, Earnings-style financial-document retrieval, and text retrieval benchmarks such as BEIR, MIRACL, MLQA, and MLDR.

## Connections
- [[NeMo-Retriever]] - model belongs to NVIDIA's retrieval and RAG stack.
- [[NeMo-Retriever-Embedding-NIM]] - service-level embedding NIM page; this page covers the specific multimodal embedding model.
- [[Llama-Nemotron-Rerank-VL-1B-v2]] - companion multimodal reranker for rescoring candidates produced by this embedding model.
- [[Llama-Nemotron-Embed-1B-v2]] and [[Llama-Nemotron-Rerank-1B-v2]] - text-only counterparts for multilingual passage retrieval and reranking.
- [[NVIDIA-NIM]] - model is surfaced through Build NVIDIA/NIM-oriented deployment paths.
- [[NIM-for-NV-CLIP]] - adjacent text/image embedding NIM for shared multimodal embedding spaces.
- [[NIM-for-Vision-Language-Models]], [[NVIDIA-EAGLE]], and [[Nemotron-Parse]] - VLM architecture and visual document understanding context.
- [[Nemotron]] - broader NVIDIA model family context for Llama Nemotron retrieval models.
- [[NVIDIA-RAG-Blueprint]], [[NVIDIA-AI-Q-Blueprint]], and [[NVIDIA-AI-Data-Platform]] - application contexts where multimodal document embeddings support grounded answers and enterprise search.
- [[TensorRT]] and [[Triton-Inference-Server]] - NVIDIA inference stack adjacent to model deployment.

## Resources
- [Build NVIDIA model card](https://build.nvidia.com/nvidia/llama-nemotron-embed-vl-1b-v2/modelcard)
- [Build NVIDIA endpoint page](https://build.nvidia.com/nvidia/llama-nemotron-embed-vl-1b-v2)
- [Hugging Face model page](https://huggingface.co/nvidia/llama-nemotron-embed-vl-1b-v2)
