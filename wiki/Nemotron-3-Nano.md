# Nemotron 3 Nano

**Type:** Model / NIM microservice
**Tags:** NVIDIA, Nemotron, LLM, reasoning, agentic AI, MoE, Mamba, NIM, NeMo, Megatron Bridge, training recipes
**Related:** [[Nemotron]], [[Nemotron-Training-Recipes]], [[Nemotron-3-Super]], [[Nemotron-3-Nano-Omni]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[NVIDIA-NeMo]], [[NeMo-Megatron-Bridge]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Gym]], [[NeMo-Run]], [[NeMo-Data-Designer]], [[NeMo-Evaluator]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[TensorRT-LLM]], [[vLLM]], [[Megatron-LM]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-Data-Flywheel-Blueprint]]
**Sources:** https://build.nvidia.com/nvidia/nemotron-3-nano-30b-a3b/modelcard; https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3.html; https://docs.nvidia.com/nemotron/latest/nemotron/nano3/README.html; https://docs.nvidia.com/nemotron/latest/nemotron/nano3/pretrain.html; https://docs.nvidia.com/nemotron/latest/nemotron/nano3/sft.html; https://docs.nvidia.com/nemotron/latest/nemotron/nano3/rl.html; https://docs.nvidia.com/nemo/gym/latest/index.html; https://docs.nvidia.com/nemotron/latest/use-case-examples/Simple%20Nemotron-3-Nano%20Usage%20Example/README.html; https://developer.nvidia.com/blog/introducing-nemotron-3-super-an-open-hybrid-mamba-transformer-moe-for-agentic-reasoning/; https://developer.nvidia.com/nemotron
**Last Updated:** 2026-04-29

## Summary
Nemotron 3 Nano is NVIDIA's 30B-total, 3.5B-active text LLM in the Nemotron 3 family. Current [[NeMo-Megatron-Bridge]] docs describe it as a unified model for reasoning and non-reasoning tasks, with pretraining, full-parameter fine-tuning, LoRA, and Hugging Face/Megatron checkpoint conversion support.

## Detail

### Purpose
Nemotron 3 Nano is the efficient text-reasoning model in the Nemotron 3 family. NVIDIA positions it for targeted, high-frequency steps inside agentic workflows, while [[Nemotron-3-Super]] handles more complex planning/reasoning and [[Nemotron-3-Nano-Omni]] handles multimodal perception across image, video, audio, documents, and UI screens.

### Model profile
- Total parameters: 30B.
- Active parameters: 3.5B.
- Architecture: hybrid mixture-of-experts model with Mamba-2/MoE layers and attention layers.
- Current Megatron Bridge docs describe 23 Mamba-2 and MoE layers, 6 attention layers, 128 experts plus 1 shared expert per MoE layer, and 5 experts activated per token.
- Current Nemotron usage docs identify the model as `nvidia/nemotron-3-nano-30b-a3b` in OpenRouter examples.
- The build.nvidia.com model page lists the model as an NVIDIA NIM model entry, while the Megatron Bridge page uses `nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16` for Hugging Face/Megatron workflows.

### Training and customization
Current [[NeMo-Megatron-Bridge]] docs support Hugging Face to Megatron import/export, pretraining, full-parameter fine-tuning, and LoRA fine-tuning for Nemotron 3 Nano. The docs specify the custom container `nvcr.io/nvidia/nemo:25.11.nemotron_3_nano` and advise running from `/opt/Megatron-Bridge`.

The same docs provide training-scale guidance: pretraining examples use TP=4, EP=8, PP=1, CP=1 and recommend 4 H100 nodes for the shown pretraining configuration; full-parameter fine-tuning examples default to TP=1, EP=8, PP=1, CP=1 and require at least 2 H100 nodes in the documented recipe.

[[Nemotron-Training-Recipes]] adds the public cookbook view of the same model: Stage 0 pretraining on a 25T-token curriculum and long-context extension, Stage 1 SFT with role-based loss masking and packed chat data, Stage 2 RL with [[NeMo-RL]] GRPO/Ray/vLLM workflows, and evaluation/import paths. The recipe docs explicitly distinguish the open-source public recipe data from the full data used for released model benchmarks.

### Agent workflows
The current Nemotron simple usage guide covers basic inference, reasoning mode toggles, LangChain/LangGraph memory, web-search agents, and a multi-agent coordinator pattern using Nemotron 3 Nano. This makes Nano important for users asking about efficient Nemotron agent construction rather than just model architecture.

Use this page for the text-only Nemotron 3 Nano reasoning model. Use [[Nemotron-3-Nano-Omni]] for the newer omnimodal Nano Omni model, [[Nemotron-3-Super]] for high-capacity agentic planning, and [[Nemotron]] for the family-level page.

## Connections
- [[Nemotron]] - parent NVIDIA model family.
- [[Nemotron-Training-Recipes]] - public Nano3 recipe stack for pretraining, SFT, RL, evaluation, artifact lineage, and execution.
- [[Nemotron-3-Super]] - larger complementary reasoning model for complex multi-step planning.
- [[Nemotron-3-Nano-Omni]] - separate omnimodal model for image/video/audio/document/UI understanding.
- [[NVIDIA-NIM]] and [[NIM-for-Large-Language-Models]] - model serving and deployment context for LLM NIMs.
- [[NVIDIA-NeMo]], [[NeMo-Megatron-Bridge]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Gym]], [[NeMo-Data-Designer]], and [[NeMo-Evaluator]] - training, conversion, post-training, rollout collection, data, and evaluation stack around Nemotron models.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - agent workflow layer that can use Nemotron model endpoints.
- [[TensorRT-LLM]], [[vLLM]], and [[Megatron-LM]] - inference and training ecosystem adjacent to Nemotron 3 Nano.
- [[NVIDIA-AI-Q-Blueprint]] and [[NVIDIA-Data-Flywheel-Blueprint]] - enterprise agent and model-optimization workflows where efficient Nemotron models are relevant.

## Source Excerpts
- "3.5B active parameters and 30B parameters in total"
- "unified model for both reasoning and non-reasoning tasks"
- "Reasoning Modes - Toggle chain-of-thought thinking ON/OFF"

## Resources
- [Nemotron 3 Nano model card](https://build.nvidia.com/nvidia/nemotron-3-nano-30b-a3b/modelcard)
- [Nemotron 3 Nano in Megatron Bridge](https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3.html)
- [Nemotron 3 Nano Training Recipe](https://docs.nvidia.com/nemotron/latest/nemotron/nano3/README.html)
- [NVIDIA Nemotron 3 Nano Simple Usage Guide](https://docs.nvidia.com/nemotron/latest/use-case-examples/Simple%20Nemotron-3-Nano%20Usage%20Example/README.html)
- [Nemotron 3 Super launch blog](https://developer.nvidia.com/blog/introducing-nemotron-3-super-an-open-hybrid-mamba-transformer-moe-for-agentic-reasoning/)
- [Nemotron Developer Page](https://developer.nvidia.com/nemotron)
