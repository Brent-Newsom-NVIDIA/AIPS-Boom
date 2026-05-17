# NeMo AutoModel

**Type:** Library
**Tags:** NVIDIA, NeMo, AutoModel, PyTorch, Hugging Face, LLM, VLM, training, fine-tuning, distributed training
**Related:** [[NVIDIA-NeMo]], [[Nemotron-Training-Recipes]], [[NeMo-Run]], [[NeMo-RL]], [[NeMo-Megatron-Bridge]], [[NeMo-Export-Deploy]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[Megatron-LM]], [[Transformer-Engine]], [[TensorRT-LLM]], [[vLLM]], [[Nemotron]], [[Nemotron-3-Nano]], [[Nemotron-3-Super]], [[NVIDIA-NIM]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nemo/automodel/latest/index.html, https://docs.nvidia.com/nemo/automodel/latest/about/index.html, https://docs.nvidia.com/nemo/automodel/latest/about/key-features.html, https://docs.nvidia.com/nemo/automodel/latest/launcher/nemo-run.html, https://docs.nvidia.com/nemo/automodel/latest/model-coverage/llm.html, https://docs.nvidia.com/nemo/automodel/latest/model-coverage/llm/nvidia/nemotron.html, https://docs.nvidia.com/nemotron/latest/usage-cookbook/Nemotron-3-Super/OpenScaffoldingResources/README.html, https://docs.nvidia.com/nemotron/latest/nemotron/nvidia-stack.html, https://docs.nvidia.com/deeplearning/transformer-engine/index.html
**Last Updated:** 2026-04-29

## Summary
NeMo AutoModel is NVIDIA's PyTorch-native training library under the NeMo Framework for accelerated Hugging Face model training and fine-tuning. Current NVIDIA docs position it as a day-0 Hugging Face-compatible path for LLMs, VLMs, diffusion models, and related workflows, with optimized recipes, PyTorch DTensor/SPMD scaling, FSDP2, MegatronFSDP, FP8, QAT, LoRA/QLoRA, distillation, tool calling, and distributed checkpointing.

## Detail

### Purpose
AutoModel lets teams keep Hugging Face-style model loading and checkpoint formats while using NVIDIA-optimized distributed training components. It is useful when a model should remain compatible with the Hugging Face ecosystem but still needs NVIDIA performance work such as fused attention, [[Transformer-Engine]], DeepEP, FlexAttn, FP8, and multi-node scaling.

### Current scope
- SFT, PEFT/LoRA, QLoRA, tool/function calling fine-tuning, sequence classification, QAT, knowledge distillation, and pretraining recipes.
- LLM, VLM, omni-model, diffusion, and retrieval dataset support in the current docs surface.
- Current LLM coverage includes `NemotronForCausalLM` for Nemotron 3, Nemotron 4, and Minitron; `NemotronHForCausalLM` for Nemotron Nano 9B/12B and [[Nemotron-3-Nano]] 30B-A3B; and Nemotron Flash coverage in the broader LLM table.
- Current Nemotron usage docs include a Nemotron 3 Super fine-tuning path with NeMo AutoModel, making [[Nemotron-3-Super]] part of the practical AutoModel/Nemotron workflow surface.
- PyTorch-native parallelism using DTensor, FSDP2, pipeline parallelism, tensor/sequence/pipeline/data parallel strategies, and MegatronFSDP.
- Hugging Face-compatible model loading and checkpoint output so trained checkpoints can stay interoperable.
- Launch paths for local workstations, Slurm clusters, cloud/SkyPilot, and [[NeMo-Run]].

### NVIDIA context
AutoModel sits between open Hugging Face model ecosystems and NVIDIA's training/deployment stack. It complements managed [[NeMo-Customizer]] workflows, can feed [[NeMo-Evaluator]] or [[NeMo-RL]], and can hand trained outputs toward [[NeMo-Export-Deploy]], [[TensorRT-LLM]], [[vLLM]], [[Triton-Inference-Server]], or [[NVIDIA-NIM]].

## Connections
- [[NVIDIA-NeMo]] - parent framework family for model training, post-training, evaluation, and deployment.
- [[Nemotron-Training-Recipes]] - adjacent recipe/cookbook path for Nemotron training that uses Megatron Bridge and NeMo RL rather than AutoModel as its core low-level recipe engine.
- [[NeMo-Run]] - job-launch path for AutoModel workloads across local, Docker, Slurm, and Kubernetes-style environments.
- [[NeMo-RL]] - post-training library that can use AutoModel as a PyTorch training backend for Hugging Face models.
- [[NeMo-Megatron-Bridge]] - higher-scale Megatron Core bridge/training path for large LLM/VLM models and checkpoint conversion.
- [[NeMo-Export-Deploy]] - export/deploy path for AutoModel and Hugging Face checkpoints.
- [[NeMo-Customizer]] - managed NeMo Platform service for API-driven fine-tuning; AutoModel is the code/library-level counterpart.
- [[NeMo-Evaluator]] - trained or fine-tuned models need quality, retrieval, and agent evaluation.
- [[Megatron-LM]] - related NVIDIA distributed training lineage used for scaling large transformer models.
- [[Transformer-Engine]] - optimized transformer layer and low-precision recipe library adjacent to AutoModel's FP8 and fused-attention paths.
- [[TensorRT-LLM]], [[vLLM]], and [[Triton-Inference-Server]] - downstream inference and serving paths.
- [[Nemotron]], [[Nemotron-3-Nano]], and [[Nemotron-3-Super]] - current AutoModel/Nemotron coverage includes Nemotron/Minitron, Nemotron 3 Nano, and Super fine-tuning workflows.
- [[NVIDIA-AI-Enterprise]] - enterprise support and software context around NeMo training and deployment workflows.

## Source Excerpts
- NVIDIA docs describe AutoModel as a PyTorch SPMD training library for LLMs and VLMs with Hugging Face compatibility.
- Current docs list SFT, PEFT, tool calling, VLM fine-tuning, diffusion fine-tuning, QAT, distillation, and pretraining workflows.
- Current model coverage docs list Nemotron/Minitron architecture support and point Minitron users to Hugging Face-compatible fine-tuning recipes.

## Resources
- [NeMo AutoModel Documentation](https://docs.nvidia.com/nemo/automodel/latest/index.html)
- [About NeMo AutoModel](https://docs.nvidia.com/nemo/automodel/latest/about/index.html)
- [NeMo AutoModel Key Features](https://docs.nvidia.com/nemo/automodel/latest/about/key-features.html)
- [NeMo AutoModel LLM Coverage](https://docs.nvidia.com/nemo/automodel/latest/model-coverage/llm.html)
- [NeMo AutoModel Nemotron/Minitron](https://docs.nvidia.com/nemo/automodel/latest/model-coverage/llm/nvidia/nemotron.html)
