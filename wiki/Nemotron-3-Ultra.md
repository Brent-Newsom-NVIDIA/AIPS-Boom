# Nemotron 3 Ultra

**Type:** NVIDIA model
**Tags:** NVIDIA, Nemotron, LLM, open model, base model, reasoning, MoE, Mamba, Transformer, NVFP4, Blackwell
**Related:** [[Nemotron]], [[Nemotron-3-Nano]], [[Nemotron-3-Super]], [[Nemotron-3-Nano-Omni]], [[Nemotron-Training-Recipes]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Megatron-Bridge]], [[NVIDIA-NIM]], [[TensorRT-LLM]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-GB200-NVL72]]
**Sources:** https://docs.nvidia.com/nemotron/nightly/usage-cookbook/Nemotron-3-Ultra-Base/README.html, https://nvidianews.nvidia.com/news/nvidia-debuts-nemotron-3-family-of-open-models, https://nvidianews.nvidia.com/news/nvidia-expands-open-model-families-to-power-the-next-wave-of-agentic-physical-and-healthcare-ai, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/ai-factory-overview.html
**Last Updated:** 2026-04-29

## Summary
Nemotron 3 Ultra is NVIDIA's largest Nemotron 3 open model direction. Current NVIDIA Nemotron docs describe Ultra Base as a 550B-total-parameter, 55B-active-per-token hybrid Mamba-Transformer MoE pretraining base checkpoint with 1M-token context, NVFP4 pretraining, LatentMoE, and Multi-Token Prediction. NVIDIA also positions Ultra as the large reasoning engine in the Nano/Super/Ultra Nemotron 3 family.

## Detail

### Current status
The current NVIDIA Nemotron Ultra page is in nightly docs and describes Ultra as a base checkpoint, not a post-trained assistant. NVIDIA explicitly frames it as a starting point for customization, fine-tuning, reinforcement-learning post-training, and instruction-tuning pipelines. The same page says weights are expected with the full Nemotron 3 Ultra release in 1H 2026.

### Purpose
Nemotron 3 Ultra targets the high-accuracy end of NVIDIA's open agentic-model stack. While [[Nemotron-3-Nano]] targets high-throughput agent steps and [[Nemotron-3-Super]] targets higher-capability reasoning, Ultra is positioned for complex planning, deep research, coding, search, and workflow automation where maximum reasoning quality matters more than smallest model footprint.

### Model characteristics
- 550B total parameters in the current Ultra Base documentation.
- Up to 55B active parameters per token through a hybrid Mamba-Transformer MoE architecture.
- 1M-token context length using Mamba-2 layers for long-context efficiency.
- NVFP4 pretraining, aligned with Blackwell-era low-precision training/inference direction.
- LatentMoE token compression before expert routing, enabling more expert specialists for similar inference cost.
- Multi-Token Prediction for coherent reasoning and speculative-decoding-style execution.
- Measured by NVIDIA on [[NVIDIA-GB200-NVL72]] systems in the current nightly page.

### Important distinction
Do not treat Nemotron 3 Ultra Base as a drop-in chatbot. Use this page for the Ultra model identity, architecture, status, and future customization direction. Use [[Nemotron-3-Super]], [[Nemotron-3-Nano]], [[Nemotron-3-Nano-Omni]], or hosted [[NVIDIA-NIM]] endpoints for currently deployable Nemotron workflows.

## Connections
- [[Nemotron]] - family page for NVIDIA Nemotron open models, datasets, and deployment paths.
- [[Nemotron-3-Nano]] - efficient smaller Nemotron 3 reasoning model.
- [[Nemotron-3-Super]] - high-capability reasoning model below Ultra in the current Nemotron 3 size ladder.
- [[Nemotron-3-Nano-Omni]] - omnimodal Nemotron model for text/image/video/audio/document/GUI understanding.
- [[Nemotron-Training-Recipes]] - training and customization recipe context for Nemotron 3 models.
- [[NeMo-AutoModel]], [[NeMo-RL]], and [[NeMo-Megatron-Bridge]] - training, post-training, and conversion tooling likely adjacent to future Ultra customization workflows.
- [[NVIDIA-NIM]] and [[TensorRT-LLM]] - deployment and inference optimization context once post-trained or deployable Ultra variants are available.
- [[NVIDIA-Blackwell-Architecture]] - NVFP4 and Blackwell-era training/inference context.
- [[NVIDIA-GB200-NVL72]] - NVIDIA's current Ultra Base benchmark page references GB200 NVL72 measurement.

## Source Excerpts
- NVIDIA describes Nemotron 3 Ultra Base as a 550B-parameter, 55B-active-per-token hybrid Mamba-Transformer MoE base model.
- NVIDIA's current materials position Ultra as the large reasoning model in the Nemotron 3 Nano/Super/Ultra family.

## Resources
- [Nemotron 3 Ultra Base nightly docs](https://docs.nvidia.com/nemotron/nightly/usage-cookbook/Nemotron-3-Ultra-Base/README.html)
- [NVIDIA Nemotron 3 family announcement](https://nvidianews.nvidia.com/news/nvidia-debuts-nemotron-3-family-of-open-models)
- [NVIDIA open model families announcement](https://nvidianews.nvidia.com/news/nvidia-expands-open-model-families-to-power-the-next-wave-of-agentic-physical-and-healthcare-ai)
