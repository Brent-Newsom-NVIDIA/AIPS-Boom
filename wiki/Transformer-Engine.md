# Transformer Engine

**Type:** Library
**Tags:** NVIDIA, Transformer Engine, deep learning, transformer models, FP8, MXFP8, NVFP4, PyTorch, JAX, Hopper, Blackwell, low precision training
**Related:** [[PyTorch]], [[JAX]], [[NVIDIA-Optimized-Frameworks]], [[NVIDIA-Hopper-Architecture]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-NeMo]], [[NeMo-AutoModel]], [[NeMo-Megatron-Bridge]], [[Nemotron-Training-Recipes]], [[BioNeMo-Recipes]], [[Megatron-Core]], [[Megatron-LM]], [[TensorRT-LLM]], [[TensorRT]], [[cuDNN]], [[NGC]]
**Sources:** https://docs.nvidia.com/deeplearning/transformer-engine/index.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/getting_started/index.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/installation.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/features/low_precision_training/introduction/introduction.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/examples/fp8_primer.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/features/low_precision_training/mxfp8/mxfp8.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/features/low_precision_training/nvfp4/nvfp4.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/api/pytorch.html, https://docs.nvidia.com/deeplearning/transformer-engine/release-notes/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Transformer Engine is a library for accelerating Transformer models on NVIDIA GPUs with optimized layers, fused attention, low-precision training recipes, quantized tensors, and framework integrations. Current release 2.14 docs support [[PyTorch]] and [[JAX]], with FP8 on Hopper, Ada, and Blackwell GPUs and Blackwell-oriented MXFP8 and NVFP4 paths for lower-precision training.

## Detail

### Purpose
Transformer models spend most of their training and inference time in attention, normalization, MLP, and GEMM-heavy blocks. Transformer Engine provides NVIDIA-optimized building blocks and an autocast-style API so model code can use lower precision where it is numerically appropriate while keeping sensitive operations in higher precision.

The library is separate from the hardware "Transformer Engine" feature in Hopper and Blackwell. Hopper introduced the hardware/software FP8 path, while the current Transformer Engine library exposes the APIs used by frameworks and recipes.

### Current capabilities
- PyTorch and JAX front ends with optimized transformer modules such as `Linear`, `LayerNorm`, `RMSNorm`, `LayerNormLinear`, `LayerNormMLP`, `DotProductAttention`, `MultiheadAttention`, and `TransformerLayer`.
- Autocast-style precision control where TE modules run inside a recipe-aware context and backward execution inherits the forward-pass precision metadata.
- FP8 recipes including delayed scaling, current scaling, and block scaling.
- Blackwell-oriented MXFP8 and NVFP4 block-scaling recipes, including quantized tensors and quantizers for lower-precision storage and compute.
- Fused attention, operation fuser APIs, communication/computation overlap, CPU offloading, CUDA graph-oriented improvements, and precision debug tooling in current docs.
- ONNX/export examples and inference paths that connect TE-created models to [[TensorRT]].
- NGC and PyPI installation paths, with TE preinstalled in NVIDIA PyTorch containers from NGC.

### Precision model
Transformer Engine treats low precision as a recipe rather than a single global switch. FP8 uses formats such as E4M3 and E5M2, while Blackwell-era recipes include MXFP8 and NVFP4 with finer-grained scaling. The practical effect is that tensor values are quantized with scaling metadata so GEMMs and attention paths can use Tensor Cores without making the whole model low precision.

This matters for [[NVIDIA-Hopper-Architecture]] and [[NVIDIA-Blackwell-Architecture]]:
- Hopper and Ada enable FP8 paths for training and inference.
- Blackwell extends the stack with NVFP4 and MXFP8 support for even lower precision.
- Current docs describe MXFP8/NVFP4 examples for both PyTorch and JAX on Blackwell-class devices.

### Installation and integration
Current installation docs list Linux x86_64, CUDA 12.1 or later, a driver that supports CUDA 12.1 or later, and cuDNN 9.3 or later. Blackwell support requires CUDA 12.8 or later. PyTorch and JAX bindings are selected through package extras or build environment settings.

For NVIDIA users, the most common paths are:
- Use the NVIDIA PyTorch container from [[NGC]], where Transformer Engine is preinstalled in supported container releases.
- Install the PyPI package with explicit framework extras such as `transformer_engine[pytorch]`.
- Build from the NVIDIA GitHub repository when a stable or source build is required.

## Connections
- [[PyTorch]] - primary TE front end for training and inference recipes, including `te.autocast`, quantized tensors, and optimized transformer layers.
- [[JAX]] - supported TE front end with Flax modules and JAX-specific autocast behavior.
- [[NVIDIA-Hopper-Architecture]] - Hopper introduced FP8 Tensor Core support and the first-generation hardware/software Transformer Engine story.
- [[NVIDIA-Blackwell-Architecture]] - Blackwell extends the TE precision stack with FP4/NVFP4 and MXFP8-oriented support.
- [[NVIDIA-NeMo]], [[NeMo-AutoModel]], and [[NeMo-Megatron-Bridge]] - NVIDIA model training stack that uses TE-style acceleration for fused attention, FP8, and large-model recipes.
- [[Nemotron-Training-Recipes]] - Nemotron recipe docs include FP8/NVFP4 quantization paths and rely on NeMo/Megatron training components adjacent to TE.
- [[BioNeMo-Recipes]] - biological foundation model recipes use TE layers for accelerated AMPLIFY, ESM-2, Geneformer, and related examples.
- [[Megatron-Core]] and [[Megatron-LM]] - Megatron-family training layers that benefit from TE-style fused and low-precision transformer kernels.
- [[TensorRT-LLM]], [[TensorRT]], and [[cuDNN]] - downstream inference/runtime and primitive libraries that complement TE's model-authoring and low-precision training paths.
- [[NVIDIA-Optimized-Frameworks]] and [[NGC]] - distribution path for NVIDIA framework containers that include Transformer Engine.

## Source Excerpts
- NVIDIA docs describe Transformer Engine as a library for accelerating Transformer models with lower memory use in training and inference.
- Current getting-started docs list PyTorch and JAX as supported frameworks.
- Release 2.14 notes include PyTorch, JAX, and C/C++ improvements across MXFP8, grouped GEMM, fused MoE, CPU overhead, CUDA Graphs, and cuDNN-backed attention.

## Resources
- [NVIDIA Transformer Engine Overview](https://docs.nvidia.com/deeplearning/transformer-engine/index.html)
- [Transformer Engine User Guide](https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/getting_started/index.html)
- [Transformer Engine Installation](https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/installation.html)
- [Using FP8 and FP4 with Transformer Engine](https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/examples/fp8_primer.html)
- [Transformer Engine Release Notes](https://docs.nvidia.com/deeplearning/transformer-engine/release-notes/index.html)
