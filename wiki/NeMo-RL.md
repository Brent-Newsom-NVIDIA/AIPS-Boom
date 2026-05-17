# NeMo RL

**Type:** Library
**Tags:** NVIDIA, NeMo, reinforcement learning, post-training, RLHF, GRPO, DPO, SFT, VLM, LLM, Ray
**Related:** [[NVIDIA-NeMo]], [[NeMo-Gym]], [[Nemotron-Training-Recipes]], [[NeMo-AutoModel]], [[NeMo-Megatron-Bridge]], [[NeMo-Run]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[NeMo-Auditor]], [[NVIDIA-Resiliency-Extension]], [[Megatron-Core]], [[Megatron-LM]], [[vLLM]], [[Nemotron]], [[Nemotron-3-Nano]], [[Nemotron-3-Super]], [[NVIDIA-NIM]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nemo/rl/latest/about/overview.html, https://docs.nvidia.com/nemo/rl/latest/about/model-support.html, https://docs.nvidia.com/nemo/rl/latest/about/backends.html, https://docs.nvidia.com/nemo/gym/latest/index.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/get-started/overview.html, https://docs.nvidia.com/nemotron/latest/nemotron/nvidia-stack.html, https://docs.nvidia.com/nemotron/latest/nemotron/nano3/rl.html, https://docs.nvidia.com/nemotron/latest/nemotron/super3/rl/index.html, https://developer.nvidia.com/blog/introducing-nemotron-3-super-an-open-hybrid-mamba-transformer-moe-for-agentic-reasoning/
**Last Updated:** 2026-04-29

## Summary
NeMo RL is NVIDIA's open-source NeMo library for scalable post-training and reinforcement learning workflows for LLMs and VLMs. Current NVIDIA docs describe it as a flexible, reproducible, Ray-based library that can run from small experiments to multi-GPU and multi-node training, with PyTorch/AutoModel and Megatron backends plus vLLM or Megatron generation backends. [[NeMo-Gym]] is the adjacent environment and rollout-collection layer for verifiable agent training data.

## Detail

### Purpose
Post-training is where teams align models for reasoning, preference, safety, tool use, and domain behavior. NeMo RL provides reusable algorithms, training backends, generation backends, data formats, evaluation hooks, checkpointing, and distributed execution patterns so RL and alignment work can scale beyond ad hoc scripts.

### Current scope
- Algorithms and guides for SFT, DPO, reward model training, GRPO, DAPO, on-policy distillation, and related RL workflows.
- Hugging Face model support through [[NeMo-AutoModel]] for LLMs and VLMs under current documented limits.
- High-scale acceleration through [[NeMo-Megatron-Bridge]] and Megatron-style training paths.
- Generation/rollout backends using [[vLLM]] or Megatron-native inference.
- Ray-based resource management and multi-GPU/multi-node execution.
- Model support that includes current NVIDIA/Nemotron entries such as Llama-Nemotron-Super, Nemotron Nano v2, Nemotron Nano v3, and adjacent Nemotron 3 workflows.
- Current [[Nemotron-Training-Recipes]] docs use NeMo-RL for Nano3 GRPO/RLVR/RLHF/DPO alignment and Super3 multi-environment RLVR, SWE-RL, and RLHF stages.
- NVIDIA's Nemotron 3 Super launch material describes multi-environment reinforcement learning using NeMo RL and [[NeMo-Gym]], connecting [[Nemotron-3-Super]] directly to the RL/post-training stack.

### NVIDIA context
NeMo RL extends the NeMo stack beyond supervised customization into reinforcement learning and alignment. It is adjacent to [[NeMo-Customizer]] for managed fine-tuning, [[NeMo-Evaluator]] for measurement, and [[NeMo-Auditor]] for safety probing before deployment.

## Connections
- [[NVIDIA-NeMo]] - parent suite for training, customization, post-training, and deployment.
- [[NeMo-Gym]] - environment, rollout collection, and verifier/reward layer that feeds RL/post-training workflows.
- [[Nemotron-Training-Recipes]] - public recipe surface that uses NeMo-RL for Nemotron RL/post-training stages.
- [[NeMo-AutoModel]] - PyTorch backend path for broad Hugging Face model coverage.
- [[NeMo-Megatron-Bridge]] - Megatron Core bridge/training path for larger models and high-throughput recipes.
- [[NeMo-Run]] - experiment execution layer for repeatable local and cluster runs.
- [[NVIDIA-Resiliency-Extension]] - job-level resiliency package adjacent to long-running RL/post-training workloads.
- [[NeMo-Customizer]] - managed customization service adjacent to code-level RL/post-training.
- [[NeMo-Evaluator]] - evaluation layer for post-training regressions and quality checks.
- [[NeMo-Auditor]] - safety audit layer for probing aligned or fine-tuned models.
- [[Megatron-Core]] - composable library behind the Megatron backend and scaling model.
- [[Megatron-LM]] - reference implementation and distributed training lineage behind large-model backends.
- [[vLLM]] - rollout/generation backend used in current NeMo RL docs.
- [[Nemotron]], [[Nemotron-3-Nano]], and [[Nemotron-3-Super]] - NVIDIA model family and current Nemotron 3 reasoning models represented in NeMo RL/post-training workflows.
- [[NVIDIA-AI-Enterprise]] - enterprise software context for production NeMo workflows.

## Source Excerpts
- NVIDIA docs describe NeMo RL as an open-source post-training library for multimodal models.
- Current backend docs describe PyTorch/AutoModel and Megatron training backends, plus vLLM and Megatron generation backends.

## Resources
- [NeMo RL Overview](https://docs.nvidia.com/nemo/rl/latest/about/overview.html)
- [NeMo RL Model Support](https://docs.nvidia.com/nemo/rl/latest/about/model-support.html)
- [NeMo RL Backends](https://docs.nvidia.com/nemo/rl/latest/about/backends.html)
