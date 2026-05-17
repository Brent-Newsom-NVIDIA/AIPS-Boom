# NVIDIA TensorRT Model Optimizer

**Type:** Tool
**Tags:** NVIDIA, TensorRT, Model Optimization, Quantization, Pruning, Distillation, LLM, Inference
**Related:** [[TensorRT]], [[TensorRT-for-RTX]], [[TensorRT-LLM]], [[NVIDIA-NIM]], [[cuDNN]], [[NVIDIA-Blackwell-Architecture]]
**Sources:** NVIDIA official documentation, https://nvidia.github.io/TensorRT-Model-Optimizer/, https://docs.nvidia.com/deeplearning/tensorrt-rtx/latest/architecture/architecture-overview.html
**Last Updated:** 2026-04-10

## Summary
NVIDIA TensorRT Model Optimizer (TensorRT-MO, formerly ModelOpt) is a library for applying advanced neural network compression techniques — including quantization, pruning, distillation, and sparsity — to AI models before TensorRT or TensorRT-LLM deployment. It provides unified PTQ (post-training quantization) and QAT (quantization-aware training) workflows for FP8, INT8, INT4, and FP4 (Blackwell) precision targets, enabling developers to maximize inference throughput and minimize latency on NVIDIA GPUs without sacrificing accuracy. It is tightly integrated with PyTorch, TensorRT, and TensorRT-LLM.

## Detail

### Purpose
Deploying production AI models requires balancing accuracy, latency, throughput, and hardware cost. TensorRT Model Optimizer provides the quantization and compression workflows needed to optimally convert full-precision models (FP32/BF16) to lower-precision formats (FP8, INT8, INT4, FP4) that fully exploit NVIDIA Tensor Core hardware, delivering 2–4x inference speedup and 50–75% memory reduction while staying within target accuracy budgets.

### Key Features
- Post-Training Quantization (PTQ): calibrate and quantize pre-trained models with a small calibration dataset
- Quantization-Aware Training (QAT): fine-tune with simulated quantization for maximum accuracy recovery
- FP8 quantization: targets H100 and B100/B200 hardware FP8 Tensor Cores (highest throughput)
- INT4 weight-only quantization: for LLM KV cache memory reduction and throughput improvement
- FP4 quantization: Blackwell (B200) hardware FP4 Tensor Cores for peak performance
- Structured pruning: reduce model width and depth while retraining
- Neural Architecture Search (NAS) integration: AutoNAS for finding optimal sub-architectures
- Speculative decoding support: draft model distillation and optimization
- LLM support: all major architectures (LLaMA, Mistral, Nemotron, GPT-NeoX, Falcon, etc.)
- Vision model support: ViT, CLIP, SAM, DiT, StableDiffusion
- TensorRT-LLM export: direct export to TRT-LLM optimized checkpoints
- Supports PyTorch and ONNX model inputs

### Use Cases
- Quantizing LLMs for production TensorRT-LLM deployment (FP8, INT4 AWQ)
- Compressing vision models (CLIP, ViT, DINO) for edge or inference optimization
- QAT to recover accuracy after aggressive INT4 quantization
- Pruning oversized models to meet latency SLAs
- Preparing models for Blackwell FP4 inference
- Optimizing diffusion models for faster image generation

### Hardware Requirements / Compatibility
- PTQ/QAT: any CUDA GPU (A100/H100 recommended for training)
- FP8 inference: H100, H200, B100, B200 (hardware FP8 Tensor Cores required)
- INT8 inference: all NVIDIA GPUs with Tensor Cores (T4, A100, H100)
- FP4 inference: Blackwell (B100/B200) only
- Python 3.8+, PyTorch 2.0+, CUDA 11.8+

### Language Bindings / APIs
- Python (primary: `import modelopt`)
- PyTorch integration: modelopt.torch.quantization, modelopt.torch.prune
- ONNX export for TensorRT engine building
- TensorRT-LLM checkpoint export
- Hugging Face model compatibility

## Connections
- [[TensorRT]] — TensorRT is the deployment backend; Model Optimizer prepares models for TensorRT
- [[TensorRT-for-RTX]] - TensorRT-RTX can consume quantized ONNX models exported by Model Optimizer.
- [[TensorRT-LLM]] — Model Optimizer exports directly to TRT-LLM optimized LLM checkpoints
- [[NVIDIA-NIM]] — NIM containers use Model Optimizer-quantized models for maximum inference throughput
- [[cuDNN]] — quantized operations execute via cuDNN INT8/FP8 Tensor Core paths
- [[NVIDIA-Blackwell-Architecture]] — Blackwell FP4 Tensor Cores are a primary target for Model Optimizer

## Resources
- [TensorRT Model Optimizer](https://developer.nvidia.com/tensorrt-model-optimizer)
- [ModelOpt GitHub](https://github.com/NVIDIA/TensorRT-Model-Optimizer)
- [ModelOpt Documentation](https://nvidia.github.io/TensorRT-Model-Optimizer/)
- [FP8 Quantization Blog](https://developer.nvidia.com/blog/nvidia-tensorrt-model-optimizer-fp8-quantization/)
