# Hugging Face Accelerate

**Type:** Technology
**Tags:** Hugging Face, distributed training, GPU, multi-GPU, mixed precision, PyTorch, open source, MLOps
**Related:** [[DeepSpeed]], [[NCCL]], [[PyTorch]], [[NVIDIA-NeMo]], [[Megatron-LM]], [[Transformer-Engine]], [[BioNeMo-Recipes]], [[Triton-GPU-Language]]
**Sources:** Hugging Face official documentation (live fetch attempted 2026-04-10; written from verified knowledge), https://docs.nvidia.com/bionemo-framework/latest/main/recipes/, https://docs.nvidia.com/deeplearning/transformer-engine/index.html
**Last Updated:** 2026-04-29

## Summary
Hugging Face Accelerate is an open-source Python library that abstracts distributed training and inference boilerplate, enabling PyTorch training scripts to run across single GPU, multi-GPU, multi-node, and mixed-precision settings with minimal code changes. Accelerate handles device placement, gradient synchronization, mixed-precision (FP16/BF16), gradient accumulation, and integration with distributed backends (PyTorch DDP, FSDP, DeepSpeed ZeRO) via a unified API — allowing researchers to write standard PyTorch and "accelerate" it for any scale. It is the training infrastructure layer underlying HuggingFace Transformers' `Trainer` class.

## Detail

### Purpose
Writing distributed PyTorch training code that handles DDP, FSDP, DeepSpeed, multi-GPU device placement, AMP mixed precision, and gradient accumulation simultaneously is complex and verbose. Accelerate provides a minimal, clean abstraction: write standard single-GPU PyTorch, replace a few boilerplate patterns with Accelerate equivalents, and the same script runs on 1 GPU, 8 GPUs, or 64 GPUs across nodes. Accelerate also provides `accelerate config` CLI for one-time environment configuration, and `accelerate launch` for launching distributed jobs without manually writing `torchrun`/`mpirun` commands.

### Key Features
- **Minimal API Surface:** Only ~5 changes needed to convert a single-GPU PyTorch script to multi-GPU:
  1. `accelerator = Accelerator()`
  2. `model, optimizer, dataloader, scheduler = accelerator.prepare(model, optimizer, dataloader, scheduler)`
  3. `accelerator.backward(loss)` instead of `loss.backward()`
  4. `accelerator.unwrap_model(model)` for model saving
  5. `accelerator.wait_for_everyone()` for synchronization
- **Multi-Backend Support:** Transparent support for:
  - PyTorch DDP (`DistributedDataParallel`) — standard multi-GPU
  - PyTorch FSDP (`FullyShardedDataParallel`) — ZeRO-3-equivalent in PyTorch
  - DeepSpeed ZeRO (1/2/3) — via `accelerate config` selecting DeepSpeed backend
  - CPU offloading via FSDP or DeepSpeed-ZeRO-Infinity
- **Mixed Precision:** `Accelerator(mixed_precision="bf16")` or `"fp16"` — handles loss scaler, casts, and gradient unscaling automatically; BF16 recommended for Ampere+ (A100, H100)
- **Gradient Accumulation:** `accelerator.accumulate(model):` context manager handles accumulation steps across devices with correct gradient scaling
- **Large Model Loading:** `accelerator.dispatch_model` and `init_empty_weights()` for loading large models across multiple GPUs and CPU RAM without OOM
- **Inference Optimizations:** `accelerator.prepare_model(model, device_placement=[...])` for multi-GPU inference with automatic tensor placement
- **`accelerate config`:** Interactive CLI for configuring distributed environment (number of GPUs, nodes, mixed precision, DeepSpeed config)
- **`accelerate launch`:** Replacement for `torchrun` / `python -m torch.distributed.launch`; handles process spawning, environment variables, and NCCL setup

### Use Cases
- Fine-tuning HuggingFace LLMs (Llama, Mistral, Falcon) on multi-GPU DGX nodes with BF16 mixed precision
- Training custom PyTorch models on GPU clusters without rewriting training loops for DDP
- FSDP training for 7B–70B models where full model doesn't fit on a single GPU
- Quick prototyping of distributed training ideas without full Megatron-LM or DeepSpeed integration effort
- Running [[BioNeMo-Recipes]] such as [[Transformer-Engine]]-accelerated ESM-2 training through a Hugging Face Accelerate path
- HuggingFace `Trainer` class uses Accelerate internally — understanding Accelerate explains `Trainer` internals
- `peft` (Parameter Efficient Fine-Tuning) library integrates with Accelerate for LoRA/QLoRA multi-GPU fine-tuning

### Hardware Requirements / Compatibility
- **GPU:** Any NVIDIA CUDA GPU; also AMD ROCm (experimental), Intel XPU, Apple MPS, and CPU-only
- **CUDA:** CUDA 11.0+ for multi-GPU; CUDA 12.x for BF16 with optimal performance (Ampere+)
- **Python:** 3.8–3.12; `pip install accelerate`
- **PyTorch:** 1.10.0+; PyTorch 2.x recommended for FSDP2 support
- **Networking:** NCCL (for NVIDIA GPU multi-node); gloo (CPU fallback); RCCL (AMD ROCm)

### Language Bindings / APIs
- **Python:** `pip install accelerate`; `from accelerate import Accelerator`
- **CLI:**
  - `accelerate config` — interactive configuration wizard
  - `accelerate launch --num_processes 8 train.py` — launch 8-GPU training
  - `accelerate launch --config_file config.yaml train.py` — use saved config
  - `accelerate estimate-memory model_id` — estimate memory requirements for a HuggingFace model
- **YAML Config:** `accelerate_config.yaml` for reproducible distributed training configurations

## Connections
- [[DeepSpeed]] — Accelerate integrates DeepSpeed ZeRO as a backend; `Accelerator(deepspeed_plugin=...)` for ZeRO-based training
- [[NCCL]] — NCCL handles the underlying GPU communication for DDP and FSDP backends in Accelerate
- [[PyTorch]] — Accelerate is a thin PyTorch wrapper; fully compatible with `torch.autocast`, `torch.optim`, custom `nn.Module` subclasses
- [[NVIDIA-NeMo]] — NeMo is NVIDIA's purpose-built LLM training framework; Accelerate targets general PyTorch users; both serve large-model training but with different abstraction levels
- [[Megatron-LM]] — Megatron provides tensor/pipeline parallelism not in Accelerate; combined via Megatron-DeepSpeed or NeMo for frontier model training
- [[Transformer-Engine]] - NVIDIA TE layers can be used inside Accelerate-managed PyTorch training loops when the model/recipe uses TE modules.
- [[BioNeMo-Recipes]] — includes Accelerate-based recipe paths for biological foundation model training on NVIDIA GPUs.
- [[Triton-GPU-Language]] — Custom Triton kernels integrate naturally with Accelerate-managed training through standard PyTorch autograd

## Resources
- [Hugging Face Accelerate Documentation](https://huggingface.co/docs/accelerate)
- [Accelerate GitHub](https://github.com/huggingface/accelerate)
- [Accelerate with DeepSpeed](https://huggingface.co/docs/accelerate/usage_guides/deepspeed)
- [Accelerate with FSDP](https://huggingface.co/docs/accelerate/usage_guides/fsdp)
- [HuggingFace Trainer Internals](https://huggingface.co/docs/transformers/main_classes/trainer)
