# NeMo Retriever Embedding NIM

**Type:** Microservice
**Tags:** NVIDIA, NIM, NeMo Retriever, embeddings, vector search, RAG, semantic search, Triton, TensorRT, CUDA
**Related:** [[NeMo-Retriever]], [[NVIDIA-NIM]], [[Llama-Nemotron-Embed-1B-v2]], [[Llama-Nemotron-Embed-VL-1B-v2]], [[NIM-for-NV-CLIP]], [[NeMo-Retriever-Reranking-NIM]], [[Llama-Nemotron-Rerank-1B-v2]], [[Llama-Nemotron-Rerank-VL-1B-v2]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[cuVS]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-NIM-Operator]], [[Triton-Inference-Server]], [[TensorRT]]
**Sources:** https://docs.nvidia.com/nim/nemo-retriever/text-embedding/latest/overview.html; https://docs.nvidia.com/nim/nvclip/latest/introduction.html; https://docs.nvidia.com/nim/nemo-retriever/text-embedding/latest/getting-started.html; https://docs.nvidia.com/nim/nemo-retriever/text-embedding/latest/deploy-kubernetes.html
**Last Updated:** 2026-04-29

## Summary
NeMo Retriever Embedding NIM is NVIDIA's NIM microservice for text and image embeddings in enterprise semantic search and RAG workflows. It packages embedding models into GPU-accelerated Docker containers, exposes OpenAI-compatible and gRPC APIs, and is built on CUDA, TensorRT, and Triton Inference Server.

## Detail
The current docs describe the Embedding NIM as a foundational building block for semantic search applications that need accurate, scalable retrieval. It turns text, images, PDFs, HTML, and other extracted content into dense vectors that can be stored in a vector database and searched at query time.

Embedding NIMs sit at the front of retrieval pipelines. Offline, the service encodes chunks of a knowledge base into embeddings. Online, it encodes the user's query so the retrieval system can find the most relevant chunks, which are then passed to an LLM for answer generation. The same embeddings can support classification, clustering, topic discovery, recommender systems, and custom applications.

[[Llama-Nemotron-Embed-1B-v2]] is the model-specific NeMo Retriever embedding page for multilingual and cross-lingual text QA retrieval. [[NIM-for-NV-CLIP]] is the adjacent current NIM surface when the retrieval target includes both text and images in a shared embedding space, while [[Llama-Nemotron-Embed-VL-1B-v2]] is the visual-document embedding counterpart for text, image, and image+text inputs. These should be linked from text/image embedding questions rather than buried under VLM reasoning pages.

In the wiki graph, this page connects [[NeMo-Retriever]] to lower-level GPU vector search through [[cuVS]], to deployment through [[NVIDIA-NIM-Operator]], and to application workflows such as [[NVIDIA-AI-Q-Blueprint]] and [[NVIDIA-AI-Data-Platform]].

## Connections
- [[NeMo-Retriever]] - Embedding NIM is a core Retriever microservice.
- [[NVIDIA-NIM]] - delivered as an NVIDIA NIM microservice.
- [[Llama-Nemotron-Embed-1B-v2]] - specific NVIDIA text embedding model for multilingual long-document QA retrieval.
- [[Llama-Nemotron-Embed-VL-1B-v2]] - specific NVIDIA multimodal embedding model for visual document retrieval and RAG.
- [[NIM-for-NV-CLIP]] - multimodal text/image embedding NIM for semantic image search and multimodal RAG.
- [[NeMo-Retriever-Reranking-NIM]], [[Llama-Nemotron-Rerank-1B-v2]], and [[Llama-Nemotron-Rerank-VL-1B-v2]] - reranking refines retrieved candidate passages or pages after embedding search.
- [[NIM-for-Image-OCR]] - OCR extracts text that can be embedded for retrieval.
- [[NIM-for-Object-Detection]] - document-layout detection produces multimodal regions for extraction and embedding.
- [[cuVS]] - vector search/indexing layer for embedding-based retrieval.
- [[NVIDIA-AI-Data-Platform]] - enterprise retrieval and semantic search depend on embedding services.
- [[NVIDIA-AI-Q-Blueprint]] - research-agent workflows need embeddings for enterprise data retrieval.
- [[NVIDIA-NIM-Operator]] - Kubernetes deployment path for NIM microservices.
- [[Triton-Inference-Server]] and [[TensorRT]] - inference acceleration stack named in the current docs.

## Source Excerpts
- "text and image embedding models"
- "OpenAI's API standard"
- "out-of-the-box GPU acceleration"
