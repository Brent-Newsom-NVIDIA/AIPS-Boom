# NVLM (Vision-Language Model)

**Type:** Model
**Tags:** NVIDIA, VLM, Vision-Language, Multimodal, LLM, Computer Vision
**Related:** [[NVIDIA-NeMo]], [[Nemotron]], [[TensorRT-LLM]], [[NIM-for-Vision-Language-Models]], [[NIM-for-NV-CLIP]], [[NVIDIA-NIM]], [[NVIDIA-EAGLE]]
**Sources:** NVIDIA official documentation, https://docs.nvidia.com/nim/vision-language-models/latest/introduction.html, https://docs.nvidia.com/nim/nvclip/latest/introduction.html
**Last Updated:** 2026-04-29

## Summary
NVLM 1.0 is NVIDIA's family of open-source frontier-class multimodal large language models (MLLMs) that achieve performance competitive with GPT-4V and Claude 3.5 Sonnet on vision-language benchmarks. NVLM introduces a novel dual-path architecture (NVLM-D) combining decoder-only cross-attention and an NVLM-H hybrid design, allowing the model to excel at both image understanding and text-only tasks without the regression typical in multimodal fine-tuning. Released in September 2024, NVLM-D 72B is available on Hugging Face.

## Detail

### Purpose
Most multimodal LLMs suffer from a trade-off: adding vision capability degrades text-only performance. NVLM addresses this by designing an architecture that preserves LLM text capabilities while adding high-quality visual understanding, enabling a single model to replace both a specialist LLM and a separate vision model in enterprise pipelines.

### Key Features
- NVLM-D (decoder-only): cross-attention between visual tokens and text decoder; strong OCR, document understanding
- NVLM-H (hybrid): combines cross-attention and interleaved visual tokens; best of both architectures
- NVLM-X (cross-attention only): efficient variant for deployment
- Model sizes: NVLM-D 72B (primary), additional sizes planned
- Dynamic high-resolution image tiling: handles arbitrary aspect ratios and resolutions
- Strong benchmark performance: top results on MMBench, OCRBench, MathVista, DocVQA, AI2D
- Text-only performance preserved: scores competitive with Qwen-72B on pure NLP tasks
- Open weights under NVIDIA Open Model License

### Use Cases
- Document understanding and OCR (invoices, contracts, forms, PDFs)
- Visual question answering for enterprise data
- Chart and table interpretation
- Scientific paper and figure analysis
- Image-grounded customer support and AI assistants
- Multimodal RAG (retrieval-augmented generation) systems

### Hardware Requirements / Compatibility
- NVLM-D 72B: multi-GPU (4x or 8x H100/A100 80GB) with tensor parallelism
- Smaller variants: single A100 80GB
- TensorRT-LLM optimization for optimized inference
- Available through NIM-style production deployment paths; see [[NIM-for-Vision-Language-Models]] for the current NVIDIA VLM serving docs surface

### Language Bindings / APIs
- Python (Hugging Face Transformers, NeMo framework)
- NVIDIA NIM REST API
- vLLM backend support
- Available on Hugging Face (nvidia/NVLM-D-72B)

## Connections
- [[NVIDIA-NeMo]] — NeMo framework used for NVLM training and fine-tuning
- [[Nemotron]] — shares LLM backbone lineage with Nemotron model family
- [[TensorRT-LLM]] — NVLM inference optimized via TensorRT-LLM
- [[NVIDIA-EAGLE]] — EAGLE is another NVIDIA VLM; NVLM focuses on frontier scale
- [[NIM-for-Vision-Language-Models]] - current NVIDIA NIM docs surface for VLM deployment, OpenAI-compatible APIs, observability, and model support.
- [[NIM-for-NV-CLIP]] - multimodal embedding NIM for image/text retrieval workflows that complement VLM reasoning.
- [[NVIDIA-NIM]] — umbrella inference microservices layer for deploying VLMs

## Resources
- [NVLM Blog Post](https://developer.nvidia.com/blog/nvlm-1-0-open-source-frontier-class-multimodal-llms/)
- [NVLM on Hugging Face](https://huggingface.co/nvidia/NVLM-D-72B)
- [NVLM Technical Report (arXiv)](https://arxiv.org/abs/2409.11402)
