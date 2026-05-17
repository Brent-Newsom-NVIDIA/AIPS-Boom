# NeMo Curator

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Data Curation, LLM, AI, NeMo, Open Source, Multimodal
**Related:** [[NVIDIA-NeMo]], [[NeMo-Platform]], [[NeMo-Data-Designer]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[NeMo-Safe-Synthesizer]], [[Megatron-Energon]], [[cuDF]], [[Morpheus]], [[TensorRT]], [[NVIDIA-DALI]], [[NVIDIA-AI-Enterprise]]
**Sources:** NVIDIA official documentation (NeMo), https://docs.nvidia.com/nemo/microservices/latest/data-designer/index.html, https://docs.nvidia.com/nemo/microservices/latest/safe-synthesizer/about/index.html, https://docs.nvidia.com/nemo/microservices/latest/customizer/index.html
**Last Updated:** 2026-04-29

## Summary
NeMo Curator is a component of NVIDIA's NeMo framework that provides GPU-accelerated, pre-built pipelines for processing and curating multimodal training data at scale. It is designed to improve the performance of LLMs and agentic AI systems by enabling high-quality, large-scale data preparation — including deduplication, filtering, classification, and PII removal — using GPU acceleration for throughput that would be infeasible on CPU alone.

## Detail

### Purpose
High-quality training data is one of the most important factors in LLM and AI model performance. Curating that data from raw internet-scale sources requires processing billions of documents with complex filtering, deduplication, and quality scoring pipelines. NeMo Curator accelerates this process using GPU computing, making it practical to curate trillion-token datasets within reasonable time and cost budgets.

### Key Features
- Pre-built, GPU-accelerated data processing pipelines for multimodal data
- Scalable deduplication (exact and fuzzy/MinHash-based)
- Text quality filtering and classifier-based quality scoring
- PII (Personally Identifiable Information) detection and redaction
- Language identification and filtering
- Multimodal data support (text, image-text pairs, and more)
- Integration with the NeMo ecosystem, including [[NeMo-Data-Designer]], [[NeMo-Customizer]], [[NeMo-Evaluator]], and [[NeMo-Safe-Synthesizer]]
- Designed for agentic AI system development pipelines
- Open-source with NVIDIA NGC container support

### Use Cases
- Pre-training data curation for large language models
- Fine-tuning and instruction-tuning dataset preparation
- Multimodal training data preparation (text + image)
- Dataset deduplication at internet scale
- Data quality scoring and filtering for AI pipelines
- PII scrubbing for compliance in training data

### Hardware Requirements
- NVIDIA GPU with CUDA support (multi-GPU recommended for large scale)
- Optimized for data center GPUs (A100, H100)
- Linux-based deployment via Docker/NGC containers

### Language Bindings
- Python (primary)
- Available via NVIDIA NGC containers

## Connections
- [[NVIDIA-NeMo]] - parent suite for data curation, model customization, evaluation, and deployment workflows
- [[NeMo-Platform]] - microservices platform adjacent to Curator data preparation workflows
- [[NeMo-Data-Designer]] - synthetic data generation service that complements curation of existing data
- [[NeMo-Customizer]] - curated datasets can become customization inputs
- [[NeMo-Evaluator]] - curated and generated datasets can become benchmark or regression-test inputs
- [[NeMo-Safe-Synthesizer]] - private synthetic tabular data service for sensitive source data
- [[Megatron-Energon]] - downstream multimodal data loader for WebDataset/JSONL-style training data after curation.
- [[cuDF]] — NeMo Curator uses cuDF for GPU-accelerated DataFrame operations in data processing pipelines
- [[Morpheus]] — Morpheus handles security/streaming data; NeMo Curator handles training data curation
- [[TensorRT]] — models trained on NeMo Curator-curated data are often deployed via TensorRT
- [[NVIDIA-DALI]] — DALI handles multimodal data loading; NeMo Curator handles curation

## Resources
- [Official NeMo Page](https://developer.nvidia.com/nemo)
- [NeMo Curator GitHub](https://github.com/NVIDIA/NeMo-Curator)
- [NeMo Documentation](https://docs.nvidia.com/nemo-framework/)
