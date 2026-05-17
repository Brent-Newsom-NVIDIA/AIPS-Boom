# Nemotron Training Recipes

**Type:** Workflow
**Tags:** NVIDIA, Nemotron, training recipes, LLM training, post-training, SFT, RL, Megatron Bridge, NeMo RL, NeMo Run, nemo_runspec
**Related:** [[Nemotron]], [[Nemotron-3-Nano]], [[Nemotron-3-Super]], [[NVIDIA-NeMo]], [[NeMo-Megatron-Bridge]], [[NeMo-RL]], [[NeMo-Gym]], [[NeMo-Run]], [[NeMo-AutoModel]], [[NeMo-Data-Designer]], [[NeMo-Evaluator]], [[NVIDIA-Resiliency-Extension]], [[Megatron-Core]], [[Megatron-LM]], [[Transformer-Engine]], [[TensorRT-LLM]], [[vLLM]], [[NVIDIA-NIM]]
**Sources:** https://docs.nvidia.com/nemotron/latest/index.html, https://docs.nvidia.com/nemotron/latest/nemotron/nano3/README.html, https://docs.nvidia.com/nemotron/latest/nemotron/super3/README.html, https://docs.nvidia.com/nemotron/latest/nemotron/nano3/pretrain.html, https://docs.nvidia.com/nemotron/latest/nemotron/super3/pretrain.html, https://docs.nvidia.com/nemotron/latest/nemotron/nano3/sft.html, https://docs.nvidia.com/nemotron/latest/nemotron/super3/sft.html, https://docs.nvidia.com/nemotron/latest/nemotron/nano3/rl.html, https://docs.nvidia.com/nemotron/latest/nemotron/super3/rl/index.html, https://docs.nvidia.com/nemotron/latest/nemotron/kit.html, https://docs.nvidia.com/nemotron/latest/nemotron/nvidia-stack.html, https://docs.nvidia.com/nemotron/latest/nemo_runspec/package-readme.html, https://docs.nvidia.com/nemotron/latest/nemo_runspec/nemo-run.html, https://docs.nvidia.com/nemotron/latest/runspec/v1/spec.html, https://docs.nvidia.com/nemotron/latest/architecture/README.html, https://docs.nvidia.com/nemotron/latest/architecture/cli-architecture.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/index.html, https://docs.nvidia.com/deeplearning/transformer-engine/index.html
**Last Updated:** 2026-04-29

## Summary
Nemotron Training Recipes are NVIDIA's current public reference implementations for training and post-training [[Nemotron-3-Nano]] and [[Nemotron-3-Super]]. The docs frame Nemotron as a fork-and-customize cookbook rather than a standalone framework: recipe code handles training/data processing, while `nemotron.kit`, `nemo_runspec`, [[NeMo-Run]], [[NeMo-Megatron-Bridge]], and [[NeMo-RL]] provide artifact tracking, configuration, execution, distributed training, and alignment.

## Detail

### Purpose
Use this page for the durable training-recipe layer behind Nemotron models. Do not split individual recipe stages, runspec internals, W&B helpers, CLI files, or cookbook snippets into separate wiki pages unless NVIDIA publishes a distinct durable product or model topic around them.

### Recipe architecture
- Nemotron docs describe the project as a cookbook/reference implementation that teams fork and customize for LLM training at scale.
- Runtime training and data-processing code lives in recipes such as Nano3 and Super3 pretraining, SFT, RL, evaluation, import, and quantization paths.
- The execution layer lives in CLI command files plus `nemo_runspec`; it keeps job-launch behavior visible instead of hiding it behind opaque wrappers.
- `nemotron.kit` owns artifact type definitions, lineage trackers, and W&B integration for data and model artifacts.
- `nemo_runspec` owns `[tool.runspec]` parsing, config loading, `env.toml` profile handling, artifact registry/resolution, OmegaConf resolvers, packaging, execution helpers, and NeMo-Run integration.
- Runspec metadata is embedded in recipe scripts using PEP 723-style inline TOML; it records identity, container image, launch style, config layout, and default resources.
- [[NeMo-Run]] supplies executor, packager, and launcher concepts; current Nemotron docs emphasize Slurm-tested execution with `--run`, `--batch`, and `--dry-run` profiles.

### NVIDIA AI stack
Nemotron recipes rely on the [[NVIDIA-NeMo]] stack rather than implementing large-scale training primitives directly:

- [[Megatron-Core]] and [[Megatron-LM]] provide tensor, pipeline, data, context, expert, and sequence parallelism concepts.
- [[NeMo-Megatron-Bridge]] provides model definitions, pretraining and fine-tuning entry points, Hugging Face/Megatron checkpoint conversion, and high-scale training loops.
- [[NeMo-RL]] provides post-training and reinforcement-learning alignment, with Ray coordination and vLLM or Megatron generation paths in the current recipe docs; [[NeMo-Gym]] supplies the environment and rollout-collection layer.
- [[NeMo-Run]] provides repeatable experiment execution across cluster profiles.
- [[NeMo-Data-Designer]] and [[NeMo-Evaluator]] are adjacent lifecycle tools for synthetic data and measurement around Nemotron workflows, even when the low-level recipe docs are the source of truth for reproducible training.

### Nemotron 3 Nano recipe
The current [[Nemotron-3-Nano]] recipe describes a reproducible pipeline with pretraining, SFT, RL, evaluation, and import paths. Public docs identify the model as a 31.6B-total, about 3.6B-active hybrid Mamba-Transformer sparse MoE model with up to 1M context.

Key recipe points:

- Stage 0 pretraining uses [[NeMo-Megatron-Bridge]] on a 25T-token curriculum with open-source public recipe data; the docs distinguish this open subset from the full data behind released benchmarks.
- Nano pretraining uses a two-phase curriculum, then a long-context extension that reaches 1M tokens using context and pipeline parallelism.
- Stage 1 SFT uses Megatron Bridge fine-tuning, role-based loss masking, chat-template conversion, tokenization, sequence packing, and SFT data from NVIDIA's open Nemotron post-training dataset collection.
- Stage 2 RL uses [[NeMo-RL]] for GRPO alignment, Ray-based actor coordination, vLLM rollout generation, reward computation, and a workflow that includes RLVR, GenRM-style RLHF, and DPO for reducing tool hallucination.
- Documented containers include a Nano training container and a Nano RL container; exact tags should be checked in the live docs before running jobs.

### Nemotron 3 Super recipe
The current [[Nemotron-3-Super]] recipe describes a higher-capacity pipeline for the 120B-total, about 12B-active hybrid Mamba-Transformer MoE model with LatentMoE and multi-token prediction.

Key recipe points:

- Stage 0 pretraining uses [[NeMo-Megatron-Bridge]] and a four-phase flow: a 20T-token diversity phase, a 5T-token quality phase, a 34B-token 1M-context phase, and a mixed long-context phase.
- Super's architecture adds LatentMoE, a larger expert pool, MTP, and GB200/B200-oriented long-context and quantization paths.
- Stage 1 SFT uses a two-stage loss procedure: token-level output loss first, then sample-level normalization so long outputs do not dominate the batch.
- Super continues MTP during SFT with a scaled auxiliary loss to preserve speculative-decoding and multi-step prediction benefits.
- Stage 2 RL uses [[NeMo-RL]] across a larger alignment plan: multi-environment RLVR, SWE-RL for software-engineering tasks, and RLHF with a generative reward model.
- The recipe surface also includes evaluation and quantization, including FP8 and NVFP4 paths adjacent to [[Transformer-Engine]] in current NVIDIA low-precision training docs.

### Operational reading
For NVIDIA users, this page is the queryable bridge between model identity and how NVIDIA says to reproduce or adapt the models. The model pages answer "what is Nano/Super?"; this page answers "what public NVIDIA recipe stack trains, post-trains, evaluates, and runs those models?"

## Connections
- [[Nemotron]] - family hub that should point users from model identity to training-recipe implementation details.
- [[Nemotron-3-Nano]] - current efficient text reasoning model covered by Nano3 recipes.
- [[Nemotron-3-Super]] - current high-capacity text reasoning model covered by Super3 recipes.
- [[NVIDIA-NeMo]] - parent lifecycle suite behind the recipe stack.
- [[NeMo-Megatron-Bridge]] - training and checkpoint bridge used for pretraining and SFT stages.
- [[NeMo-RL]] - reinforcement-learning/post-training library used for RL stages.
- [[NeMo-Gym]] - rollout collection and verifier/environment layer adjacent to RL stages.
- [[NeMo-Run]] - experiment execution layer used by recipe CLI profiles.
- [[NVIDIA-Resiliency-Extension]] - resilient training layer relevant to long-running distributed recipe jobs.
- [[NeMo-AutoModel]] - adjacent Nemotron fine-tuning path in the broader NeMo/Nemotron docs.
- [[NeMo-Data-Designer]] - synthetic-data service adjacent to recipe-driven fine-tuning and evaluation loops.
- [[NeMo-Evaluator]] - benchmark and regression layer for models produced by recipes.
- [[Megatron-Core]] - composable library behind Megatron-family training APIs and scaling concepts.
- [[Megatron-LM]] - reference implementation and distributed training lineage adjacent to Bridge.
- [[Transformer-Engine]] - NVIDIA low-precision transformer library that explains the FP8/MXFP8/NVFP4 precision layer behind current training stacks.
- [[TensorRT-LLM]], [[vLLM]], and [[NVIDIA-NIM]] - downstream serving paths for trained or post-trained models.

## Source Excerpts
- Current Nemotron docs describe the project as a cookbook/reference implementation for training LLMs at scale.
- Current Kit docs separate artifact and lineage ownership in `nemotron.kit` from CLI, config, execution, and registry ownership in `nemo_runspec`.
- Current runspec docs define `[tool.runspec]` metadata as the recipe script's single source for identity, launch, config, and resources.
- Current Nano3 docs describe pretraining, SFT, RL, evaluation, artifact lineage, and open-source data limitations.
- Current Super3 docs describe pretraining, two-stage SFT loss, multi-stage RL, evaluation, and quantization coverage.

## Resources
- [Nemotron Training Recipes](https://docs.nvidia.com/nemotron/latest/index.html)
- [Nemotron 3 Nano Training Recipe](https://docs.nvidia.com/nemotron/latest/nemotron/nano3/README.html)
- [Nemotron 3 Super Training Recipe](https://docs.nvidia.com/nemotron/latest/nemotron/super3/README.html)
- [Nemotron Kit](https://docs.nvidia.com/nemotron/latest/nemotron/kit.html)
- [NVIDIA AI Stack for Nemotron](https://docs.nvidia.com/nemotron/latest/nemotron/nvidia-stack.html)
- [nemo_runspec Package](https://docs.nvidia.com/nemotron/latest/nemo_runspec/package-readme.html)
- [Execution through NeMo-Run](https://docs.nvidia.com/nemotron/latest/nemo_runspec/nemo-run.html)
- [Runspec Specification](https://docs.nvidia.com/nemotron/latest/runspec/v1/spec.html)
- [Nemotron Architecture](https://docs.nvidia.com/nemotron/latest/architecture/README.html)
