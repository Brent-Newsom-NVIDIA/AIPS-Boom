# Megatron Core

**Type:** Library
**Tags:** NVIDIA, Megatron Core, MCore, Megatron-LM, LLM training, distributed training, tensor parallelism, pipeline parallelism, expert parallelism, context parallelism, FP8, MoE
**Related:** [[Megatron-LM]], [[Megatron-Energon]], [[NeMo-Megatron-Bridge]], [[NVIDIA-Resiliency-Extension]], [[NVIDIA-NeMo]], [[NeMo-AutoModel]], [[NeMo-RL]], [[Nemotron-Training-Recipes]], [[Transformer-Engine]], [[NVIDIA-Optimized-Frameworks]], [[PyTorch]], [[NCCL]], [[TensorRT-LLM]], [[TensorRT-Model-Optimizer]], [[DeepSpeed]]
**Sources:** https://docs.nvidia.com/megatron-core/developer-guide/latest/index.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/get-started/overview.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/get-started/install.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/user-guide/parallelism-guide.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/user-guide/features/megatron_energon.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/models/index.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/user-guide/features/moe.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/user-guide/features/custom_fsdp.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/api-guide/index.html, https://developer.nvidia.com/megatron-core, https://nvidia.github.io/nvidia-resiliency-ext/
**Last Updated:** 2026-04-29

## Summary
Megatron Core is NVIDIA's composable GPU-optimized library for training large language, MoE, multimodal, speech, and hybrid models at scale. Current docs distinguish it from [[Megatron-LM]]: Megatron Core provides modular parallelism, transformer, distributed optimizer, checkpointing, dataset, inference, and API building blocks; Megatron-LM is the reference implementation that demonstrates how to assemble those pieces into end-to-end training runs.

## Detail

### Current positioning
NVIDIA docs describe Megatron Core, Megatron-LM, and [[NeMo-Megatron-Bridge]] as adjacent but different layers:
- **Megatron Core:** reusable library for framework developers and research teams building custom training systems.
- **[[Megatron-LM]]:** reference implementation and lightweight training framework that includes Megatron Core plus scripts/examples for large-scale training.
- **[[NeMo-Megatron-Bridge]]:** conversion and training bridge for Hugging Face and Megatron checkpoints.

This wiki keeps Megatron Core separate because current NVIDIA docs give it its own developer guide, installation path, API reference, supported-models surface, and advanced features.

### Core capabilities
- Composable transformer building blocks such as attention, MLP, transformer layers, and model APIs.
- Parallelism strategies across tensor parallelism, pipeline parallelism, data parallelism, expert parallelism, context parallelism, and sequence parallelism.
- Megatron FSDP and distributed optimizer features for sharding optimizer states, gradients, and parameters.
- Mixed precision support, including FP16, BF16, and FP8 paths with [[Transformer-Engine]] integration.
- MoE features including expert parallelism, routing work, and support for architectures such as Mixtral, DeepSeek, and Qwen MoE-style models.
- Multimodal and hybrid-model support, including vision/multimodal models and state-space or Mamba-style components in the API tree.
- Distributed checkpointing, datasets, high-performance dataloaders, inference components, quantization hooks, tokenizers, and API-level model building blocks.
- Multimodal data-loading adjacency through [[Megatron-Energon]], which current Megatron Core docs expose as a feature page.
- Resiliency ecosystem adjacency through [[NVIDIA-Resiliency-Extension]] for fault tolerance, restart, checkpointing, and straggler detection around long-running training jobs.

### Installation and runtime
Current docs support Docker and pip installation. NVIDIA recommends using the previous release of the NVIDIA PyTorch container for Megatron Core compatibility because Megatron Core releases are based on the previous month's NGC container. The docs list all NVIDIA Tensor Core GPUs as compatible, with FP8 support on Hopper, Ada, and Blackwell GPUs.

Megatron Core is usually consumed through:
- [[NVIDIA-Optimized-Frameworks]] PyTorch containers from [[NGC]].
- The Megatron-LM repository as a reference application.
- [[NeMo-Megatron-Bridge]] and [[NeMo-RL]] for NeMo ecosystem training, conversion, and post-training workflows.

### What not to split
Do not create separate wiki pages for every Megatron Core API package, routing design doc, feature guide, or supported model class unless NVIDIA publishes a durable standalone product/topic around it. The API guide is broad and belongs inside this canonical page.

## Connections
- [[Megatron-LM]] - reference implementation and training framework built around Megatron Core.
- [[NeMo-Megatron-Bridge]] - bridge/conversion/training layer that connects Megatron Core models and Hugging Face-style workflows.
- [[NVIDIA-NeMo]], [[NeMo-AutoModel]], and [[NeMo-RL]] - NeMo training and post-training libraries that sit around Megatron Core for model lifecycle work.
- [[Nemotron-Training-Recipes]] - public Nemotron recipe stack that uses Megatron Bridge and Megatron Core concepts for pretraining and SFT.
- [[Transformer-Engine]] - low-precision transformer acceleration library integrated with Megatron Core.
- [[NVIDIA-Resiliency-Extension]] - job-level resiliency package adjacent to Megatron-scale distributed training.
- [[Megatron-Energon]] - multimodal dataloader for large-scale Megatron training data pipelines.
- [[NVIDIA-Optimized-Frameworks]] - container distribution path recommended by current Megatron Core installation docs.
- [[PyTorch]] and [[NCCL]] - core framework and communication layers underneath Megatron Core.
- [[TensorRT-LLM]] and [[TensorRT-Model-Optimizer]] - downstream optimization and serving paths for models trained with Megatron-family stacks.
- [[DeepSpeed]] - adjacent large-model training ecosystem; NVIDIA docs list DeepSpeed as compatible ecosystem tooling.

## Source Excerpts
- NVIDIA docs describe Megatron Core as a GPU-optimized library for training large language models at scale.
- Current overview docs distinguish Megatron Core from Megatron-LM and Megatron Bridge.
- Current parallelism docs describe combining tensor, pipeline, data, expert, context, and sequence parallelism for models from billions to trillions of parameters.

## Resources
- [Megatron Core Developer Guide](https://docs.nvidia.com/megatron-core/developer-guide/latest/index.html)
- [Megatron Core Overview](https://docs.nvidia.com/megatron-core/developer-guide/latest/get-started/overview.html)
- [Megatron Core Installation](https://docs.nvidia.com/megatron-core/developer-guide/latest/get-started/install.html)
- [Parallelism Strategies Guide](https://docs.nvidia.com/megatron-core/developer-guide/latest/user-guide/parallelism-guide.html)
- [Megatron Core API Guide](https://docs.nvidia.com/megatron-core/developer-guide/latest/api-guide/index.html)
- [NVIDIA Megatron Core Developer Page](https://developer.nvidia.com/megatron-core)
