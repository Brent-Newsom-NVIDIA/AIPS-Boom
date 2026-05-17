# cuDNN

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Deep Learning, Neural Networks, AI, Inference, Training
**Related:** [[TensorRT]], [[CUTLASS]], [[cuBLAS]], [[NCCL]], [[cuTENSOR]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
cuDNN (CUDA Deep Neural Network library) is NVIDIA's GPU-accelerated library of primitives for deep neural networks, providing optimized implementations of convolution, attention, matrix multiplication, pooling, and normalization layers. It powers all major deep learning frameworks including PyTorch, TensorFlow, JAX, and MXNet, and supports both training and inference on GPUs from embedded devices to cloud data centers.

## Detail

### Purpose
Training and inference for deep neural networks require billions of floating-point operations across standard primitive types (convolutions, attention, activations). cuDNN delivers highly tuned, Tensor Core-optimized implementations of these primitives so that ML frameworks can achieve peak GPU performance without each framework having to implement low-level GPU kernels independently.

### Key Features
- Tensor Core-accelerated convolution, attention, matrix multiplication, pooling, and normalization
- Operation fusion: combines compute-bound and memory-bound operations via runtime kernel generation and pre-written specialized kernels
- Graph API: define computations as operation graphs on tensors (C API or open-source C++ frontend)
- Automatic heuristics for optimal kernel selection per problem size
- Runtime kernel generation for maximum flexibility
- Support for training and inference workloads
- Available via conda, pip, Docker, or direct download
- cuDNN Frontend API: open-source C++ abstraction layer for the graph API

### Use Cases
- Training large language models and transformers
- CNN-based computer vision model training and inference
- Conversational AI and speech recognition
- Recommendation system training
- Autonomous vehicle perception pipelines
- Embedded device inference (via TensorRT + cuDNN)

### Hardware Requirements
- NVIDIA GPU with CUDA support
- Tensor Core acceleration on Volta (V100) and later
- Supports embedded (Jetson), workstation, and data center GPUs
- Hopper (H100) for latest FP8 and flash attention optimizations

### Language Bindings
- C (primary API)
- C++ (cuDNN Frontend open-source library)
- Python (via framework integrations: PyTorch, TensorFlow, JAX, etc.)

## Connections
- [[TensorRT]] — TensorRT uses cuDNN for layer-level inference primitives
- [[CUTLASS]] — CUTLASS provides GEMM templates that complement cuDNN's conv operations
- [[cuBLAS]] — cuDNN uses cuBLAS internally for GEMM-based operations
- [[NCCL]] — NCCL handles multi-GPU communication during cuDNN-powered training
- [[cuTENSOR]] — cuDNN's tensor operations align with cuTENSOR's contraction capabilities

## Resources
- [Official Page](https://developer.nvidia.com/cudnn)
- [cuDNN Documentation](https://docs.nvidia.com/deeplearning/cudnn/)
- [cuDNN Frontend (GitHub)](https://github.com/NVIDIA/cudnn-frontend)
