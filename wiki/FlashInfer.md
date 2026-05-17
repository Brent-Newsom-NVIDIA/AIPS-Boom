# FlashInfer

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, LLM, Inference, Attention, Transformers, Open Source
**Related:** [[TensorRT]], [[cuDNN]], [[CUTLASS]], [[cuBLAS]]
**Sources:** flashinfer.ai official page
**Last Updated:** 2026-04-09

## Summary
FlashInfer is an open-source GPU kernel toolkit optimized for accelerating large language model (LLM) inference, with a focus on attention mechanisms, batch decoding, and sampling operations. It provides customizable and high-performance CUDA kernels for LLM serving infrastructure, and is used by production LLM serving systems requiring fine-grained control over inference-time compute.

## Detail

### Purpose
Standard deep learning library primitives (cuDNN, cuBLAS) are not always optimally tuned for the specific patterns of LLM inference — particularly variable-length sequences, paged KV-caches, and speculative decoding. FlashInfer addresses this gap with specialized kernels for attention and decoding that minimize memory bandwidth consumption and maximize GPU utilization during token generation.

### Key Features
- Optimized attention kernels for LLM self-attention and cross-attention
- Cascade inference for efficient shared-prefix batch decoding (memory bandwidth optimization)
- Sorting-free GPU kernels for LLM token sampling
- Customizable kernel implementations for inference serving (v0.2+)
- Support for paged KV-cache and variable-length sequence batching
- Published research (arXiv: 2501.01005)
- Active development with regular releases
- Community support via Slack and GitHub

### Use Cases
- High-throughput LLM serving (chatbots, API endpoints)
- Speculative decoding acceleration
- Batch decoding with shared context prefixes
- Research into LLM inference efficiency
- Integration into serving frameworks (vLLM, SGLang, etc.)

### Hardware Requirements
- NVIDIA GPU with CUDA support
- Optimized for data center GPUs (A100, H100)
- Requires modern CUDA toolkit

### Language Bindings
- Python (primary interface)
- CUDA/C++ (underlying kernel implementation)

## Connections
- [[TensorRT]] — TensorRT-LLM and FlashInfer are complementary LLM inference optimization tools
- [[cuDNN]] — cuDNN provides general DNN primitives; FlashInfer provides LLM-specific attention kernels
- [[CUTLASS]] — FlashInfer kernels are built using CUTLASS-style GPU programming abstractions
- [[cuBLAS]] — FlashInfer complements cuBLAS GEMM with attention-specific fused operations

## Resources
- [Official Site](https://flashinfer.ai)
- [GitHub](https://github.com/flashinfer-ai/flashinfer)
- [Documentation](https://docs.flashinfer.ai)
- [Research Paper](https://arxiv.org/abs/2501.01005)
