# DeepSpeed

**Type:** Technology
**Tags:** Microsoft, deep learning, optimization, LLM, training, inference, ZeRO, GPU, distributed, open source
**Related:** [[Megatron-LM]], [[NCCL]], [[NVIDIA-NeMo]], [[PyTorch]], [[TensorRT-LLM]], [[vLLM]], [[Hugging-Face-Accelerate]]
**Sources:** DeepSpeed official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
DeepSpeed is an open-source deep learning optimization library from Microsoft that makes distributed LLM training and inference faster and more memory-efficient. Its flagship contribution is the ZeRO (Zero Redundancy Optimizer) memory optimization framework, which shards optimizer states, gradients, and model parameters across data-parallel workers to dramatically reduce per-GPU memory requirements — enabling training of 100B+ parameter models that would otherwise not fit in GPU memory. DeepSpeed is widely used in LLM training pipelines and integrates with HuggingFace Transformers, PyTorch, and NeMo.

## Detail

### Purpose
Training large language models requires fitting model weights, gradients, and optimizer states (e.g., Adam's first and second moments) in GPU memory simultaneously. A 7B-parameter model in FP32 with Adam requires ~84 GB just for optimizer state — exceeding even H100's 80 GB HBM. Naive data-parallel training replicates all of this on every GPU. ZeRO eliminates this redundancy by sharding these three components across data-parallel GPUs: each GPU holds only 1/N of the optimizer state, gradient, and/or parameter data. Combined with communication scheduling that ensures each GPU can still perform its forward/backward pass, ZeRO achieves near-linear memory scaling with the number of GPUs.

### Key Features
- **ZeRO (Zero Redundancy Optimizer):**
  - **ZeRO-1:** Partition optimizer states across data-parallel ranks; ~4× memory reduction vs DDP
  - **ZeRO-2:** Partition optimizer states + gradients; ~8× reduction
  - **ZeRO-3:** Partition optimizer states + gradients + model parameters; ~N× reduction (where N = number of GPUs); enables training models that don't fit on any single GPU
  - **ZeRO-Infinity:** Extends ZeRO-3 to use NVMe SSD or CPU RAM as parameter offload storage; enables trillion-parameter model training with limited GPU memory
- **ZeRO-Offload:** Offloads optimizer computation and state to CPU; reduces GPU memory at cost of CPU-GPU PCIe bandwidth
- **DeepSpeed-MoE:** Optimized training and inference for Mixture-of-Experts (MoE) models with expert parallelism and load balancing
- **Pipeline Parallelism:** `PipelineModule` for 1F1B (one-forward-one-backward) pipeline parallel training integrated with ZeRO
- **Sparse Attention:** DeepSpeed Sparse Attention kernels for long-sequence (up to 64K tokens) efficient attention computation
- **DeepSpeed Inference:** Optimized inference engine with Int8 quantization, tensor parallelism, and kernel fusion for multi-GPU deployment
- **BF16/FP16 Training:** Mixed-precision training with dynamic loss scaling; BF16 support (Ampere+)
- **Communication Optimization:** Overlap compute and AllReduce communication; adaptive gradient communication algorithms
- **JSON Configuration:** DeepSpeed configured via JSON config files; easy to switch ZeRO stages without code changes

### Use Cases
- Training 7B–100B+ parameter LLMs on NVIDIA DGX clusters where per-GPU memory is the constraint
- Multi-node LLM pre-training in combination with Megatron-style tensor parallelism (Megatron-DeepSpeed)
- Fine-tuning large LLMs with LoRA + ZeRO-2 on a single DGX A100 node
- HuggingFace Trainer integration: `TrainingArguments(deepspeed="ds_config.json")` for transparent ZeRO use
- NeMo integration: DeepSpeed ZeRO available as an alternative to Megatron-LM in NeMo training pipelines
- MoE model training and serving with DeepSpeed-MoE for efficient expert routing

### Hardware Requirements / Compatibility
- **GPU:** NVIDIA V100, A100, H100, H200, and other CUDA-capable GPUs; AMD ROCm GPUs also supported (DeepSpeed is multi-vendor)
- **CUDA:** CUDA 11.x+ for A100; CUDA 12.x for H100
- **Python:** 3.6–3.12; requires PyTorch 1.8+
- **Networking:** NCCL for GPU collectives; InfiniBand recommended for large multi-node runs; gloo for CPU fallback
- **OS:** Linux (primary); limited Windows support

### Language Bindings / APIs
- **Python:** `pip install deepspeed`; `import deepspeed`; `deepspeed.initialize(model, optimizer, ...)` wraps model and optimizer
- **HuggingFace Trainer:** `TrainingArguments(deepspeed="ds_config.json")` — zero-code-change ZeRO for HF training
- **JSON Config:** ZeRO stage, learning rate scheduler, bf16/fp16, gradient accumulation all configured in `ds_config.json`
- **CLI:** `deepspeed --num_gpus 8 train_script.py --deepspeed ds_config.json`

## Connections
- [[Megatron-LM]] — Megatron-DeepSpeed combines Megatron tensor/pipeline parallelism with DeepSpeed ZeRO for state-of-the-art LLM training scaling
- [[NCCL]] — DeepSpeed uses NCCL for AllReduce gradient synchronization across data-parallel ranks
- [[NVIDIA-NeMo]] — NeMo supports DeepSpeed as an alternative distributed training backend alongside its native Megatron-LM integration
- [[PyTorch]] — DeepSpeed wraps PyTorch models and optimizers; fully compatible with PyTorch DDP and FSDP
- [[Hugging-Face-Accelerate]] — HuggingFace Accelerate integrates DeepSpeed as one of its distributed training backends alongside FSDP
- [[vLLM]] — vLLM is a competing inference engine; DeepSpeed Inference is DeepSpeed's own inference offering

## Resources
- [DeepSpeed Website](https://www.deepspeed.ai)
- [DeepSpeed GitHub](https://github.com/microsoft/DeepSpeed)
- [ZeRO Paper](https://arxiv.org/abs/1910.02054)
- [DeepSpeed Documentation](https://deepspeed.readthedocs.io/en/latest/)
- [Megatron-DeepSpeed](https://github.com/microsoft/Megatron-DeepSpeed)
