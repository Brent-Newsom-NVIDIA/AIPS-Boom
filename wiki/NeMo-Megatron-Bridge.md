# NeMo Megatron Bridge

**Type:** Library
**Tags:** NVIDIA, NeMo, Megatron, Megatron Core, Hugging Face, LLM, VLM, checkpoint conversion, distributed training
**Related:** [[NVIDIA-NeMo]], [[Megatron-Core]], [[Megatron-LM]], [[NVIDIA-Resiliency-Extension]], [[Transformer-Engine]], [[Nemotron-Training-Recipes]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Run]], [[NeMo-Export-Deploy]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[TensorRT-LLM]], [[vLLM]], [[Nemotron]], [[Nemotron-3-Nano]], [[Nemotron-3-Super]], [[Nemotron-3-Nano-Omni]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nemo/megatron-bridge/latest/index.html, https://docs.nvidia.com/nemo/megatron-bridge/latest/training/resiliency.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/get-started/overview.html, https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3.html, https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3-super.html, https://docs.nvidia.com/nemo/rl/latest/about/model-support.html, https://docs.nvidia.com/nemo/rl/latest/about/backends.html, https://docs.nvidia.com/nemotron/latest/nemotron/nvidia-stack.html, https://docs.nvidia.com/nemotron/latest/nemotron/nano3/pretrain.html, https://docs.nvidia.com/nemotron/latest/nemotron/super3/pretrain.html, https://docs.nvidia.com/deeplearning/transformer-engine/index.html
**Last Updated:** 2026-04-29

## Summary
NeMo Megatron Bridge is NVIDIA's PyTorch-native library within NeMo Framework for training, fine-tuning, and converting LLM/VLM checkpoints between Hugging Face and Megatron Core formats. Current NVIDIA docs frame it as both a bidirectional bridge/conversion layer and a performant training loop for pretraining, SFT, LoRA/PEFT, mixed precision, and large-scale parallel training.

## Detail

### Purpose
Large-model teams often need the usability and ecosystem reach of Hugging Face checkpoints plus the training throughput and parallelism of [[Megatron-Core]]. NeMo Megatron Bridge provides conversion, verification, recipes, and training infrastructure so models can move between formats without losing correctness or deployment options.

### Current scope
- Bidirectional Hugging Face to Megatron conversion with verification and checkpoint integrity checks.
- Training and customization paths for pretraining, SFT, LoRA, DoRA, PEFT, packed sequences, distillation, and mixed precision.
- Parallelism-aware conversion and training for tensor, pipeline, virtual pipeline, context, expert, and data-parallel styles.
- Supported model docs that include Llama, Qwen, DeepSeek, Mistral, Gemma, GPT-OSS, [[Nemotron-3-Nano]], [[Nemotron-3-Super]], Nemotron H/Nano variants, and multiple VLM families.
- Dedicated Nemotron 3 Nano and Nemotron 3 Super pages cover Hugging Face/Megatron conversion, pretraining, fine-tuning, LoRA, and quantization workflows for the current Nemotron 3 text reasoning models.
- Current [[Nemotron-Training-Recipes]] docs use Megatron Bridge as the pretraining and SFT implementation layer for Nano3 and Super3 recipes.
- Current resiliency docs incorporate [[NVIDIA-Resiliency-Extension]] features for fault tolerance, straggler detection, preemption, async checkpoint save, local checkpointing, and restart workflows.
- Integration with [[NeMo-RL]] as a high-scale training backend and with [[NeMo-Export-Deploy]] for downstream inference export.

### NVIDIA context
Megatron Bridge is the current NVIDIA-authored bridge between open model checkpoints and the large-scale Megatron training stack. It should be treated as separate from [[Megatron-LM]] because it has its own current docs surface, conversion workflow, model-support matrix, and NeMo Framework role.

## Connections
- [[NVIDIA-NeMo]] - parent framework family for training, customization, evaluation, and deployment.
- [[Megatron-Core]] - composable library Bridge targets for Megatron model definitions, parallelism, and training APIs.
- [[Megatron-LM]] - reference implementation and Megatron ecosystem adjacency.
- [[Transformer-Engine]] - low-precision transformer acceleration library adjacent to Bridge's mixed-precision and high-scale training paths.
- [[NVIDIA-Resiliency-Extension]] - resilient training layer incorporated by current Bridge docs.
- [[Nemotron-Training-Recipes]] - public recipe surface that uses Bridge for Nemotron pretraining and supervised fine-tuning.
- [[NeMo-AutoModel]] - Hugging Face-compatible PyTorch training path; Megatron Bridge covers higher-scale Megatron Core conversion and recipes.
- [[NeMo-RL]] - current RL docs use Megatron Bridge for optimal acceleration on top model families.
- [[NeMo-Run]] - cluster execution layer for large-model jobs.
- [[NeMo-Export-Deploy]] - downstream export/deployment path for Megatron Bridge checkpoints.
- [[NeMo-Customizer]] and [[NeMo-Evaluator]] - managed customization and evaluation services adjacent to code-level training.
- [[TensorRT-LLM]], [[vLLM]], and [[Triton-Inference-Server]] - downstream serving/export targets.
- [[Nemotron]] - current docs list Nemotron/Nemotron Nano variants among supported NVIDIA model families.
- [[Nemotron-3-Nano]] - current Megatron Bridge page for the 30B-A3B text reasoning model.
- [[Nemotron-3-Super]] - current Megatron Bridge page for the 120B-A12B text reasoning model.
- [[Nemotron-3-Nano-Omni]] - adjacent Nemotron 3 model, distinct from the text-only Nano/Super Bridge pages.
- [[NVIDIA-AI-Enterprise]] - enterprise software context for NeMo training and deployment.

## Source Excerpts
- NVIDIA docs describe Megatron Bridge as a NeMo Framework library for pretraining, SFT, LoRA, and Hugging Face/Megatron conversion.
- Current docs list Nemotron 3 Nano, Nemotron 3 Super, and Llama-Nemotron model families in model support and RL acceleration context.

## Resources
- [Megatron Bridge Documentation](https://docs.nvidia.com/nemo/megatron-bridge/latest/index.html)
- [Nemotron 3 Nano in Megatron Bridge](https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3.html)
- [Nemotron 3 Super in Megatron Bridge](https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3-super.html)
- [NeMo RL Model Support](https://docs.nvidia.com/nemo/rl/latest/about/model-support.html)
