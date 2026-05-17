# NVIDIA AI Data Platform

**Type:** Platform
**Tags:** NVIDIA, AI Data Platform, enterprise storage, RAG, retrieval, AI factory, BlueField, Spectrum-X, NIM, NeMo Retriever
**Related:** [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-STX]], [[NVIDIA-CMX]], [[NVIDIA-Certified-Storage]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-Video-Search-and-Summarization-Blueprint]], [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], [[NIM-for-NV-CLIP]], [[NeMo-Retriever-Reranking-NIM]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[Nemotron-Parse]], [[NIM-for-Cosmos-Embed1]], [[NIM-for-Vision-Language-Models]], [[Nemotron-3-Nano-Omni]], [[NIM-for-Visual-Generative-AI]], [[NVIDIA-NIM]], [[cuVS]], [[DOCA-SNAP]], [[DOCA-Device-Emulation]], [[GPU-Direct-Storage]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-BlueField-4]], [[NVIDIA-ConnectX-9]], [[NVIDIA-Spectrum-X]]
**Sources:** https://www.nvidia.com/en-us/data-center/ai-data-platform/, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/ecosystem-architecture.html, https://docs.nvidia.com/rag/latest/, https://docs.nvidia.com/vss/latest/, https://docs.nvidia.com/nim/nvclip/latest/introduction.html, https://docs.nvidia.com/nim/cosmos-embed1/latest/introduction.html, https://docs.nvidia.com/nim/vision-language-models/latest/introduction.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-parse/api.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html, https://docs.nvidia.com/nim/visual-genai/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Data Platform is a reference design for bringing NVIDIA accelerated computing, networking, and AI software into enterprise storage and data systems. It is positioned as the AI factory data layer for ingestion, extraction, embedding, indexing, retrieval, RAG, video search, deep research agents, and context-aware distributed inference.

## Detail

### Purpose
Agentic AI depends on fresh, private, multimodal enterprise data. NVIDIA AI Data Platform is designed to help companies turn existing storage and data platforms into AI-ready systems that can feed agents and retrieval pipelines without moving every dataset into a separate AI silo.

### Reference workflows
- Multimodal agentic RAG over PDFs, graphics, audio, and text.
- Reference RAG deployment patterns through [[NVIDIA-RAG-Blueprint]].
- Video search and summarization workflows through [[NVIDIA-Video-Search-and-Summarization-Blueprint]].
- Text/image embedding and semantic image retrieval through [[NIM-for-NV-CLIP]].
- Video search, summarization, and Q&A over live or archived media.
- Physical AI video search and curation using embeddings from [[NIM-for-Cosmos-Embed1]].
- Multimodal reasoning and visual generation over enterprise data using [[NIM-for-Vision-Language-Models]], [[Nemotron-3-Nano-Omni]], [[Nemotron-Parse]], and [[NIM-for-Visual-Generative-AI]].
- Deep research agents over private enterprise data.
- Centralized cache for distributed inference with [[NVIDIA-Dynamo]].
- Semantic search across large video datasets, including physical AI and autonomous-vehicle post-training data.

### Product layer
NVIDIA describes the platform as a combination of enterprise storage, accelerated infrastructure, and enterprise AI software. The product stack includes Blackwell GPUs, [[NVIDIA-BlueField-DPU]], [[NVIDIA-Spectrum-X]], [[NVIDIA-NIM]], [[NeMo-Retriever]], and [[cuVS]]. It also connects to [[NVIDIA-STX]] and [[NVIDIA-CMX]] for newer AI-native storage and context-memory designs.

### NVIDIA context
The AI Data Platform is the data-side counterpart to [[NVIDIA-Enterprise-AI-Factory]]. It links the physical data layer to [[NeMo-Retriever]], [[NVIDIA-NIM]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-Dynamo]], and [[NVIDIA-Certified-Storage]] so agents can retrieve, reason, and reuse context at production scale.

## Connections
- [[NVIDIA-Enterprise-AI-Factory]] - AI Data Platform is an optional but important data layer in enterprise AI factory guidance.
- [[NVIDIA-STX]] - STX is a modular AI-native storage reference architecture tied to AI Data Platform designs.
- [[NVIDIA-CMX]] - CMX provides context memory storage for long-context, multi-turn inference.
- [[NVIDIA-Certified-Storage]] - certification validates storage for AI factory and AI Data Platform workloads.
- [[NVIDIA-RAG-Blueprint]] - deployable RAG reference workflow for enterprise retrieval over private data.
- [[NVIDIA-Video-Search-and-Summarization-Blueprint]] - video search/summarization blueprint over live and archived media.
- [[NeMo-Retriever]] - retrieval microservices connect enterprise data to RAG and agents.
- [[NeMo-Retriever-Embedding-NIM]] - embedding microservice for semantic search over enterprise data.
- [[NIM-for-NV-CLIP]] - multimodal embedding NIM for image/text retrieval and semantic image search.
- [[NeMo-Retriever-Reranking-NIM]] - reranking microservice for improving retrieved context quality.
- [[NIM-for-Image-OCR]] - extracts text from visual document content for retrieval.
- [[NIM-for-Object-Detection]] - detects tables, charts, infographics, and document elements for extraction.
- [[Nemotron-Parse]] - parses document page images into text, tables, semantic classes, and bounding boxes.
- [[NIM-for-Cosmos-Embed1]] - creates video-text embeddings for semantic video search and physical AI dataset curation.
- [[NIM-for-Vision-Language-Models]] - multimodal reasoning layer for image, chart, document, and video-understanding workflows.
- [[Nemotron-3-Nano-Omni]] - omnimodal Nemotron model for text, image, video, audio, documents, and GUI understanding.
- [[NIM-for-Visual-Generative-AI]] - visual generation/editing NIM family that can compose with retrieval and agent workflows.
- [[NVIDIA-NIM]] - NIM provides inference microservices used by agents and retrieval workflows.
- [[cuVS]] - GPU-accelerated vector search and indexing are part of the platform's retrieval story.
- [[DOCA-SNAP]] - BlueField storage virtualization is a lower-level building block for accelerated data paths.
- [[DOCA-Device-Emulation]] - emulated host-facing storage devices connect BlueField services to existing OS and hypervisor drivers.
- [[GPU-Direct-Storage]] - direct GPU storage access complements AI Data Platform throughput and retrieval goals.
- [[NVIDIA-BlueField-DPU]] - BlueField accelerates data access, storage paths, and secure scaling.
- [[NVIDIA-BlueField-4]] - BlueField-4 is the current DPU generation tied to STX/CMX data platform designs.
- [[NVIDIA-ConnectX-9]] - next-generation SuperNIC for high-bandwidth AI data movement.
- [[NVIDIA-Spectrum-X]] - Spectrum-X provides the Ethernet fabric for high-throughput AI data movement.

## Source Excerpts
- NVIDIA's AI Data Platform page describes a reference design that combines enterprise storage, accelerated infrastructure, and NVIDIA enterprise software to speed extraction and retrieval.
- The Enterprise AI Factory design guide positions AI Data Platform as a high-performance, secure retrieval design for modern AI workloads.

## Resources
- [NVIDIA AI Data Platform](https://www.nvidia.com/en-us/data-center/ai-data-platform/)
