# NVIDIA EAGLE

**Type:** Model
**Tags:** NVIDIA, VLM, Vision-Language, Multimodal, EAGLE2, Synthetic Data, Computer Vision
**Related:** [[NVLM]], [[NVIDIA-NeMo]], [[TensorRT-LLM]], [[NVIDIA-NIM]], [[Nemotron]], [[Llama-Nemotron-Embed-VL-1B-v2]], [[Llama-Nemotron-Rerank-VL-1B-v2]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-10

## Summary
NVIDIA EAGLE (and its successor EAGLE2) is a family of competitive, efficient multimodal large language models (MLLMs) developed by NVIDIA researchers, focused on high visual understanding performance with efficient architecture design. EAGLE2 achieves results competitive with much larger models by leveraging a carefully constructed synthetic data pipeline, context-aware image tiling, and a mixture-of-resolution training strategy. It is designed to be a strong open-source VLM that scales efficiently from 7B to 70B+ parameter LLM backbones.

## Detail

### Purpose
Building a frontier-class VLM typically requires enormous compute budgets and proprietary data. EAGLE2 demonstrates that thoughtful synthetic data generation and training methodology can produce competitive multimodal models without requiring the largest budgets, making frontier-level VLM capabilities accessible to more organizations and researchers.

### Key Features
- Context-aware image tiling: dynamically selects the optimal resolution and tile configuration for each image
- Mixture-of-resolution training (MoR): trains on both low-res (efficiency) and high-res (quality) image representations
- Synthetic data pipeline: uses existing strong VLMs to generate high-quality VQA and reasoning training data
- Modular architecture: works with multiple LLM backbones (LLaMA, Qwen, Nemotron)
- EAGLE2 model sizes: EAGLE2-9B, EAGLE2-40B-family variants
- Top-tier benchmark results: OpenCompass, MMBench, ScienceQA, MMStar, MathVista
- Open-weight release on Hugging Face
- Supports interleaved image-text inputs for multi-image reasoning

### Use Cases
- Visual question answering over images and documents
- Chart and scientific figure understanding
- Multi-image reasoning and comparison tasks
- Academic research on efficient VLM architectures
- Enterprise document intelligence with visual content
- Grounding and spatial reasoning in images

### Hardware Requirements / Compatibility
- EAGLE2-9B: single A100 80GB / H100 80GB
- EAGLE2-40B+: multi-GPU setup with tensor parallelism
- TensorRT-LLM optimization for production deployment
- Available via NIM microservices

### Language Bindings / APIs
- Python (Hugging Face Transformers)
- NVIDIA NeMo framework
- NVIDIA NIM REST API
- vLLM backend support
- Available on Hugging Face (nvidia/EAGLE2-*)

## Connections
- [[NVLM]] — NVLM is NVIDIA's frontier-scale VLM; EAGLE2 is more efficiency-focused
- [[NVIDIA-NeMo]] — NeMo used for EAGLE training and fine-tuning pipeline
- [[TensorRT-LLM]] — EAGLE models optimized via TensorRT-LLM for fast inference
- [[NVIDIA-NIM]] — EAGLE available as NIM containers
- [[Nemotron]] — EAGLE2 variants use Nemotron LLM backbones
- [[Llama-Nemotron-Embed-VL-1B-v2]] and [[Llama-Nemotron-Rerank-VL-1B-v2]] - current NVIDIA retrieval model cards cite Eagle/Eagle 2 VLM architecture ideas for visual document understanding.

## Resources
- [EAGLE2 Blog Post](https://developer.nvidia.com/blog/eagle2-building-competitive-multimodal-llms-with-synthetic-data/)
- [EAGLE2 on Hugging Face](https://huggingface.co/nvidia/EAGLE2-9B)
- [EAGLE2 GitHub](https://github.com/NVlabs/EAGLE)
