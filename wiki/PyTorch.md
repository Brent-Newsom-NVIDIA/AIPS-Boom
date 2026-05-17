# PyTorch (NVIDIA CUDA Builds)

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Deep Learning, Framework, Python, Machine Learning
**Related:** [[NVIDIA-Optimized-Frameworks]], [[PyG]], [[NVIDIA-DGL]], [[cuDNN]], [[CUTLASS]], [[TensorRT]], [[NCCL]], [[NVSHMEM4Py]], [[Nsight-Python]], [[CUDA-Python]], [[cuBLAS]], [[NVIDIA-DALI]], [[TensorRT-LLM]], [[Transformer-Engine]], [[Megatron-LM]], [[BioNeMo-Recipes]], [[NVIDIA-Isaac-Lab]], [[NVIDIA-Isaac-GR00T]]
**Sources:** NVIDIA official documentation, pytorch.org, https://docs.nvidia.com/deeplearning/frameworks/index.html, https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/index.html, https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/index.html, https://docs.nvidia.com/bionemo-framework/latest/main/recipes/, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/getting_started/index.html
**Last Updated:** 2026-04-30

## Summary
PyTorch is an open-source deep learning framework developed by Meta AI and maintained by the PyTorch Foundation, distributed with NVIDIA CUDA support as first-class GPU acceleration. NVIDIA ships and maintains optimized CUDA-enabled PyTorch builds that leverage cuDNN, cuBLAS, NCCL, and other CUDA-X libraries under the hood. It is the dominant research and production framework for training and deploying neural networks, with native support for dynamic computation graphs, automatic differentiation, and distributed training across NVIDIA GPU clusters.

## Detail

### Purpose
PyTorch solves the problem of efficient GPU-accelerated neural network training and inference. Its CUDA builds provide direct tensor operations on NVIDIA GPUs, with deep integration into the NVIDIA software stack including Tensor Core utilization via cuBLAS/cuDNN, multi-GPU training via NCCL, and export pathways to TensorRT for optimized production deployment.

### Key Features
- Dynamic computation graph (eager execution) with `torch.autograd` automatic differentiation
- `torch.cuda` namespace for explicit GPU tensor management and device placement
- Tensor Core acceleration for FP16, BF16, TF32, FP8 mixed-precision training via AMP (Automatic Mixed Precision)
- `torch.distributed` for multi-GPU and multi-node distributed training (DDP, FSDP, RPC)
- `torch.compile` (introduced in 2.0) — JIT compilation via TorchInductor/Triton for kernel fusion and speedup
- `torch.nn` module system for building neural network layers and models
- `torch.utils.data` DataLoader with NVIDIA DALI integration support
- TorchScript for model serialization and C++ deployment
- ONNX export for cross-framework interoperability
- `torch.profiler` integration with Nsight Systems and Nsight Compute
- cuDNN backend for convolutions, attention, and other DNN primitives
- Flash Attention integration via `torch.nn.functional.scaled_dot_product_attention`
- FP8 training support on Hopper (H100) and Blackwell (B100/B200) GPUs

### Use Cases
- Training large language models (LLMs) and vision transformers
- Running NVIDIA-tested PyTorch environments through [[NVIDIA-Optimized-Frameworks]] containers from [[NGC]]
- Computer vision model development (classification, detection, segmentation)
- NLP and speech model research and production
- Reinforcement learning environments
- Robot policy training in [[NVIDIA-Isaac-Lab]] and humanoid foundation model workflows in [[NVIDIA-Isaac-GR00T]]
- Scientific ML and physics-informed neural networks
- Graph neural network training through [[PyG]] / PyTorch Geometric and NVIDIA optimized PyG containers; legacy [[NVIDIA-DGL]] container users should treat PyG as the forward NVIDIA path
- Biological foundation model training through [[BioNeMo-Recipes]], including [[Transformer-Engine]]-backed PyTorch loops and FSDP-style scaling examples
- Production inference via TorchServe or export to TensorRT
- Multi-node distributed training on NVIDIA DGX/HGX clusters

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 3.7 or higher (Kepler+)
- CUDA 11.8 or higher recommended; CUDA 12.x for Hopper/Blackwell features
- Tensor Cores: Volta (V100) and newer for FP16; Ampere (A100) for BF16/TF32; Hopper (H100) for FP8
- NVLink/InfiniBand for multi-GPU distributed training at scale
- H100/H200/B100/B200 recommended for state-of-the-art LLM training

### Language Bindings
- Python (primary, `pip install torch`)
- C++ via LibTorch (`torch::Tensor`, `torch::nn`)
- Java (limited, via TorchScript)
- CUDA C++ for custom kernel extensions via `torch.utils.cpp_extension`

## Connections
- [[NVIDIA-Optimized-Frameworks]] - NVIDIA publishes optimized PyTorch container images with CUDA libraries, tools, and support-matrix versioning.
- [[PyG]] - PyTorch Geometric builds graph neural network workflows on PyTorch, and NVIDIA publishes optimized PyG containers on top of NVIDIA PyTorch container releases.
- [[NVIDIA-DGL]] - legacy NVIDIA DGL containers were PyTorch-adjacent graph neural network environments, now deprecated in favor of PyG.
- [[cuDNN]] — PyTorch uses cuDNN for all convolution, attention, and normalization primitives
- [[cuBLAS]] — underlies all `torch.matmul` / `torch.nn.Linear` operations on GPU
- [[NCCL]] — powers `torch.distributed` for multi-GPU all-reduce and collective operations
- [[NVSHMEM4Py]] — can create PyTorch tensors backed by NVSHMEM symmetric memory for distributed GPU communication workflows.
- [[Nsight-Python]] — profiles Python GPU workloads and examples include PyTorch kernel regions.
- [[CUDA-Python]] — NVIDIA Python CUDA component hub adjacent to PyTorch GPU workflows.
- [[TensorRT]] — primary export target for optimized production inference from PyTorch models
- [[NVIDIA-DALI]] — drop-in replacement for PyTorch DataLoader for GPU-accelerated data pipelines
- [[Transformer-Engine]] - provides optimized PyTorch transformer modules, autocast-style low-precision recipes, and FP8/MXFP8/NVFP4 quantized tensor paths on NVIDIA GPUs.
- [[CUTLASS]] — custom GEMM kernels can be integrated via PyTorch C++ extensions
- [[Megatron-LM]] — built on top of PyTorch for large-scale LLM training
- [[BioNeMo-Recipes]] — uses PyTorch training loops, FSDP-style scaling, and NVIDIA [[Transformer-Engine]] layers for biological foundation model recipes.
- [[TensorRT-LLM]] — uses PyTorch models as source for optimized LLM deployment
- [[NVIDIA-Isaac-Lab]] - robot learning policies are commonly authored and trained in PyTorch.
- [[NVIDIA-Isaac-GR00T]] - GR00T-N model cards list PyTorch as the runtime integration path.

## Resources
- [Official Site](https://pytorch.org)
- [PyTorch Docs](https://pytorch.org/docs/stable/)
- [NVIDIA PyTorch Container](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/pytorch)
- [GitHub](https://github.com/pytorch/pytorch)
- [PyTorch with CUDA Guide](https://pytorch.org/get-started/locally/)
