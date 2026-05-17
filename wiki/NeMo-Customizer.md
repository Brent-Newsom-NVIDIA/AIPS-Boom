# NeMo Customizer

**Type:** Microservice
**Tags:** NVIDIA, NeMo Platform, fine-tuning, customization, LoRA, SFT, DPO, embedding models, NIM
**Related:** [[NeMo-Platform]], [[NVIDIA-NeMo]], [[NeMo-Data-Designer]], [[NeMo-Evaluator]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Megatron-Bridge]], [[NeMo-Export-Deploy]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[Nemotron]], [[NeMo-Retriever-Embedding-NIM]], [[Llama-Nemotron-Embed-1B-v2]], [[NVIDIA-Data-Flywheel-Blueprint]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nemo/microservices/latest/customizer/index.html, https://docs.nvidia.com/nemo/microservices/latest/customizer/models/index.html, https://docs.nvidia.com/nemo/microservices/latest/fine-tune/models/llama-nemotron.html, https://docs.nvidia.com/nemo/microservices/latest/customizer/models/embedding.html, https://docs.nvidia.com/nemo/automodel/latest/index.html, https://docs.nvidia.com/nemo/rl/latest/about/overview.html, https://docs.nvidia.com/nemo/megatron-bridge/latest/index.html, https://docs.nvidia.com/nemo/export-deploy/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NeMo Customizer is the NeMo Platform service for fine-tuning and customizing models through API-driven jobs. Current NVIDIA docs describe workflows for creating model entities, formatting datasets, running customization jobs, producing LoRA adapters or full fine-tuned model entities, deploying customized outputs through NVIDIA NIMs, and evaluating the result.

## Detail

### Purpose
Production AI systems often need task-specific behavior, domain terminology, tool-calling patterns, or retrieval-specific embeddings. NeMo Customizer turns model adaptation into managed jobs with model entities, filesets, datasets, training configurations, job tracking, and downstream deployment/evaluation hooks.

### Current scope
- LoRA customization jobs that attach adapters to base model entities.
- Full SFT customization jobs that create new model entities with customized weights.
- DPO customization and embedding model customization workflows in current docs.
- Model catalog support for Llama, Llama Nemotron, Phi, Qwen, Mistral, GPT-OSS, and embedding models.
- Current tested [[Nemotron]] coverage includes Llama 3.1 Nemotron Nano 8B v1, NVIDIA Nemotron Nano 9B v2, NVIDIA Nemotron 3 Nano 30B-A3B BF16, NVIDIA Nemotron 3 Super 120B-A12B BF16, and [[Llama-Nemotron-Embed-1B-v2]].
- Llama Nemotron model specifications include default names, NGC or Hugging Face URIs, NIM deployment references, token limits, training options, and GPU recommendations for LoRA or all-weights fine-tuning.
- Training dataset formatting, model entity management, job management, metrics checks, and throughput optimization guidance.
- Deployment handoff through NeMo Platform model deployment services and [[NVIDIA-NIM]].

### NVIDIA context
Customizer is the adaptation layer between synthetic/curated data and production inference. It connects [[NeMo-Data-Designer]] and [[NeMo-Curator]] data workflows to [[NVIDIA-NIM]] deployment, [[NeMo-Evaluator]] regression checks, and [[NVIDIA-Data-Flywheel-Blueprint]] continuous optimization loops.
For code-level training and post-training, [[NeMo-AutoModel]], [[NeMo-RL]], and [[NeMo-Megatron-Bridge]] are adjacent NeMo Framework tools; [[NeMo-Export-Deploy]] covers deployment handoff from framework checkpoints.

## Connections
- [[NeMo-Platform]] - parent platform for customization jobs, model entities, filesets, and deployment handoff.
- [[NVIDIA-NeMo]] - broader model development and agent lifecycle suite.
- [[NeMo-Data-Designer]] - synthetic datasets can become fine-tuning inputs.
- [[NeMo-Evaluator]] - customized models should be evaluated before deployment.
- [[NeMo-AutoModel]], [[NeMo-RL]], and [[NeMo-Megatron-Bridge]] - code-level training and post-training tools adjacent to managed customization.
- [[NeMo-Export-Deploy]] - framework checkpoint export/deploy path downstream of customization.
- [[NVIDIA-NIM]] and [[NIM-for-Large-Language-Models]] - deployment target for customized LLM outputs.
- [[Nemotron]] - NVIDIA model family listed in current customization catalogs.
- [[NeMo-Retriever-Embedding-NIM]] and [[Llama-Nemotron-Embed-1B-v2]] - embedding model customization connects to retrieval quality and RAG workflows.
- [[NVIDIA-Data-Flywheel-Blueprint]] - blueprint loop that uses customization to improve candidate models.
- [[NVIDIA-AI-Enterprise]] - enterprise support context for NeMo Platform services.

## Source Excerpts
- NVIDIA docs describe NeMo Customizer as the API path for fine-tuning models and deploying fine-tuned models through NVIDIA NIMs.
- Current docs list LoRA, full SFT, DPO, and embedding model customization workflows.
- Current model catalog docs identify NVIDIA-tested model families and distinguish tested models from the broader set of LLM NIM microservices that can work with Customizer.
- Llama Nemotron embedding customization supports both full SFT and merged LoRA, with deployment through an embedding-capable NIM.

## Resources
- [NeMo Customizer About Fine-Tuning](https://docs.nvidia.com/nemo/microservices/latest/customizer/index.html)
- [NeMo Customizer Model Catalog](https://docs.nvidia.com/nemo/microservices/latest/customizer/models/index.html)
- [NeMo Customizer Llama Nemotron Models](https://docs.nvidia.com/nemo/microservices/latest/fine-tune/models/llama-nemotron.html)
- [NeMo Customizer Embedding Models](https://docs.nvidia.com/nemo/microservices/latest/customizer/models/embedding.html)
