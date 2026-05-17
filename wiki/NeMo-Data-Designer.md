# NeMo Data Designer

**Type:** Microservice
**Tags:** NVIDIA, NeMo Platform, synthetic data, data generation, LLM, data design, agent data
**Related:** [[NeMo-Platform]], [[NVIDIA-NeMo]], [[Nemotron-Training-Recipes]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[NeMo-Safe-Synthesizer]], [[NeMo-Curator]], [[NVIDIA-NIM]], [[Nemotron]], [[NVIDIA-Data-Flywheel-Blueprint]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nemo/microservices/latest/data-designer/index.html, https://docs.nvidia.com/nemo/microservices/latest/data-designer/quickstart.html, https://docs.nvidia.com/nemotron/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NeMo Data Designer is the NeMo Platform service for generating high-quality synthetic datasets at scale. Current NVIDIA docs describe it as a framework and platform service that orchestrates LLM calls, manages dependencies between generated fields, handles batching and parallelization, validates outputs against specifications, and routes inference through the NeMo Platform inference gateway.

## Detail

### Purpose
Teams building agents and specialized models often need task-specific data before they can fine-tune, evaluate, or test a workflow. NeMo Data Designer provides a structured way to define dataset schemas, columns, constraints, dependencies, seed data, and generation logic so synthetic data creation becomes repeatable and scalable.

### Current scope
- Configuration-first data generation through the open-source NeMo Data Designer library and the NeMo Platform service.
- Column and schema definitions for synthetic datasets, including dependencies and validation rules.
- Preview jobs for fast iteration and production jobs for larger synthetic data generation.
- Inference routed through the NeMo Platform inference gateway and model providers such as NVIDIA-hosted endpoints.
- Artifact storage, job orchestration, monitoring, and generated dataset retrieval through NeMo Platform APIs and SDKs.

### NVIDIA context
Data Designer is a source of task data for downstream [[NeMo-Customizer]] fine-tuning and [[NeMo-Evaluator]] measurement. It also supports blueprint-style workflows such as [[NVIDIA-Data-Flywheel-Blueprint]] and [[NVIDIA-AI-Q-Blueprint]] where synthetic examples can help create tool-calling, evaluation, or domain-specific agent datasets.

## Connections
- [[NeMo-Platform]] - parent microservices platform hosting Data Designer as a synthetic data service.
- [[NVIDIA-NeMo]] - broader NeMo suite for the AI agent lifecycle.
- [[Nemotron-Training-Recipes]] - low-level Nemotron recipe workflows can use curated or synthetic task data before customization and evaluation loops.
- [[NeMo-Customizer]] - synthetic data can feed LoRA, SFT, DPO, and embedding customization jobs.
- [[NeMo-Evaluator]] - generated datasets can be used for model, RAG, and agent evaluation.
- [[NeMo-Safe-Synthesizer]] - complementary synthetic data service for private tabular data derived from sensitive originals.
- [[NeMo-Curator]] - adjacent data preparation and curation layer before training or evaluation.
- [[NVIDIA-NIM]] and [[Nemotron]] - model endpoints used by data-generation workflows.
- [[NVIDIA-Data-Flywheel-Blueprint]] - continuous optimization workflows can use synthetic data generation as part of candidate improvement.
- [[NVIDIA-AI-Q-Blueprint]] - research-agent workflows can use synthetic task data for evaluation and improvement.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment/support context for NeMo Platform services.

## Source Excerpts
- NVIDIA docs describe Data Designer as a framework for orchestrating synthetic data generation workflows.
- Current quickstart docs show the service using the NeMo Platform SDK and routing model calls through the inference gateway.

## Resources
- [NeMo Data Designer Service](https://docs.nvidia.com/nemo/microservices/latest/data-designer/index.html)
- [NeMo Data Designer Quickstart](https://docs.nvidia.com/nemo/microservices/latest/data-designer/quickstart.html)
