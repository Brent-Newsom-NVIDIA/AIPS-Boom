# Nemotron 3 Super

**Type:** Model / NIM microservice
**Tags:** NVIDIA, Nemotron, LLM, reasoning, agentic AI, coding, long context, MoE, Mamba, NVFP4, NIM, NeMo, training recipes
**Related:** [[Nemotron]], [[Nemotron-Training-Recipes]], [[Nemotron-3-Nano]], [[Nemotron-3-Nano-Omni]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[NVIDIA-NeMo]], [[NeMo-Megatron-Bridge]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Gym]], [[NeMo-Run]], [[NeMo-Data-Designer]], [[NeMo-Evaluator]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NVIDIA-NemoClaw]], [[NVIDIA-OpenShell]], [[TensorRT-LLM]], [[vLLM]], [[Megatron-LM]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-Data-Flywheel-Blueprint]]
**Sources:** https://build.nvidia.com/nvidia/nemotron-3-super-120b-a12b/modelcard; https://developer.nvidia.com/blog/introducing-nemotron-3-super-an-open-hybrid-mamba-transformer-moe-for-agentic-reasoning/; https://docs.nvidia.com/nemotron/latest/nemotron/super3/README.html; https://docs.nvidia.com/nemotron/latest/nemotron/super3/pretrain.html; https://docs.nvidia.com/nemotron/latest/nemotron/super3/sft.html; https://docs.nvidia.com/nemotron/latest/nemotron/super3/rl/index.html; https://docs.nvidia.com/nemo/gym/latest/index.html; https://docs.nvidia.com/nemotron/latest/usage-cookbook/Nemotron-3-Super/OpenScaffoldingResources/README.html; https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3-super.html; https://developer.nvidia.com/nemotron
**Last Updated:** 2026-04-29

## Summary
Nemotron 3 Super is NVIDIA's open 120B-total, 12B-active reasoning LLM for complex agentic workloads, long-context reasoning, coding, planning, tool use, and collaborative multi-agent systems. NVIDIA positions it as the higher-capacity member of the Nemotron 3 family, complementary to [[Nemotron-3-Nano]] for targeted execution and [[Nemotron-3-Nano-Omni]] for omnimodal perception.

## Detail

### Purpose
Nemotron 3 Super targets the high-capacity side of agentic AI: tasks where the model must sustain long context, reason over code or retrieved documents, plan across tool calls, and avoid goal drift over multi-step workflows. NVIDIA's launch material frames Super as a way to reduce the "thinking tax" in multi-agent systems by using an efficient MoE architecture rather than sending every task to a dense frontier-scale model.

### Model profile
- Total parameters: 120B.
- Active parameters: 12B.
- Context window: up to 1M tokens in NVIDIA's public model material and Nemotron usage docs.
- Architecture: hybrid Mamba-Transformer / latent mixture-of-experts design with Mamba-2 layers, MoE layers, selective attention layers, and Multi-Token Prediction.
- NVIDIA reports open weights, datasets, training recipes, deployment cookbooks, fine-tuning cookbooks, and evaluation recipes around the model.
- The model is distributed through build.nvidia.com and Hugging Face, and NVIDIA describes it as packaged as [[NVIDIA-NIM]].

### Training and tooling
NVIDIA's technical blog says Super was pretrained on 25T tokens, underwent supervised fine-tuning over a larger post-training corpus, and was post-trained with multi-environment reinforcement learning using [[NeMo-RL]] and [[NeMo-Gym]]. The same material points to [[NeMo-Data-Designer]], [[NeMo-Evaluator]], and open recipes for reproducibility.

[[NeMo-Megatron-Bridge]] has a current Nemotron 3 Super page for Hugging Face/Megatron conversion, pretraining examples, full-parameter fine-tuning, LoRA, PTQ/QAT quantization, and exporting quantized checkpoints back to Hugging Face. Current Bridge docs call out B200/NVFP4-oriented training paths and expert-parallel MoE settings for large-scale work.

[[Nemotron-Training-Recipes]] adds the public cookbook layer: Stage 0 pretraining with diversity, quality, and long-context phases; Stage 1 SFT with a two-stage output-loss procedure and continued MTP training; Stage 2 RL with multi-environment RLVR, SWE-RL, and RLHF; plus evaluation and FP8/NVFP4 quantization surfaces.

### Agent and coding workflows
The Nemotron usage cookbook includes a current "Nemotron 3 Super with Agentic Coding Tools" page. It shows Super with agentic coding tools such as OpenCode, OpenClaw, Kilo Code CLI, and OpenHands through OpenRouter/build.nvidia.com-style access. The page uses model references such as `nvidia/nemotron-3-super` and `nvidia/nemotron-3-super-120b-a12b`, with a 1M context and large output-token limits in examples.

Use this page for the Super reasoning model. Use [[Nemotron-3-Nano]] for the smaller text-only Nemotron 3 reasoning model, [[Nemotron-3-Nano-Omni]] for the omnimodal VLM/audio/video model, [[Nemotron]] for the full family, and [[NIM-for-Large-Language-Models]] for the generic LLM NIM serving surface.

## Connections
- [[Nemotron]] - parent NVIDIA model family.
- [[Nemotron-Training-Recipes]] - public Super3 recipe stack for pretraining, SFT, RL, evaluation, and quantization.
- [[Nemotron-3-Nano]] - complementary smaller Nemotron 3 reasoning model for targeted agent steps.
- [[Nemotron-3-Nano-Omni]] - omnimodal Nemotron model for multimodal perception before or beside Super planning.
- [[NVIDIA-NIM]] and [[NIM-for-Large-Language-Models]] - deployment and serving context for LLM NIMs.
- [[NVIDIA-NeMo]], [[NeMo-Megatron-Bridge]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Gym]], [[NeMo-Data-Designer]], and [[NeMo-Evaluator]] - training, post-training, rollout collection, synthetic-data, conversion, and evaluation stack around the model.
- [[NVIDIA-Agent-Intelligence-Toolkit]], [[NVIDIA-NemoClaw]], and [[NVIDIA-OpenShell]] - agent runtime/tooling context for Nemotron-powered workflows.
- [[TensorRT-LLM]], [[vLLM]], and [[Megatron-LM]] - inference and large-model training ecosystem around Super.
- [[NVIDIA-AI-Q-Blueprint]] - enterprise research-agent pattern where high-capacity reasoning models are important scaling levers.
- [[NVIDIA-Data-Flywheel-Blueprint]] - workflow for evaluating and improving model choices such as Nemotron variants.

## Source Excerpts
- "120B total, 12B active-parameter model"
- "native 1M-token context window"
- "Nemotron 3 Super with Agentic Coding Tools"

## Resources
- [Nemotron 3 Super model card](https://build.nvidia.com/nvidia/nemotron-3-super-120b-a12b/modelcard)
- [Introducing Nemotron 3 Super](https://developer.nvidia.com/blog/introducing-nemotron-3-super-an-open-hybrid-mamba-transformer-moe-for-agentic-reasoning/)
- [Nemotron 3 Super Training Recipe](https://docs.nvidia.com/nemotron/latest/nemotron/super3/README.html)
- [Nemotron 3 Super with Agentic Coding Tools](https://docs.nvidia.com/nemotron/latest/usage-cookbook/Nemotron-3-Super/OpenScaffoldingResources/README.html)
- [Nemotron 3 Super in Megatron Bridge](https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3-super.html)
- [Nemotron Developer Page](https://developer.nvidia.com/nemotron)
