# TensorRT-LLM

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, LLM, Inference, Optimization, Transformer, Generative AI, CUDA-X
**Related:** [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-AIPerf]], [[NVIDIA-GenAI-Perf]], [[Triton-Performance-Analyzer]], [[Triton-Model-Analyzer]], [[Triton-Model-Navigator]], [[NeMo-Export-Deploy]], [[NeMo-Megatron-Bridge]], [[NeMo-AutoModel]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[FlashInfer]], [[NVIDIA-NeMo]], [[Megatron-LM]], [[cuDNN]], [[CUTLASS]], [[NIXL]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/tensorrt-llm, https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_analyzer/genai-perf/README.html, https://docs.nvidia.com/aiperf/getting-started/profiling-with-ai-perf, https://docs.nvidia.com/nemo/export-deploy/latest/index.html, https://docs.nvidia.com/nemo/export-deploy/latest/apidocs/nemo_export/nemo_export.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
TensorRT-LLM is NVIDIA's open-source library for optimizing and deploying large language model (LLM) inference at maximum throughput and minimum latency on NVIDIA GPUs. It provides a Python API for defining and compiling LLM inference engines, incorporating state-of-the-art optimizations including in-flight batching (continuous batching), paged KV cache, custom attention kernels (Flash Attention), tensor parallelism, pipeline parallelism, quantization (INT4, INT8, FP8), and speculative decoding. TensorRT-LLM is the backend for NVIDIA Triton's LLM serving and the primary path to production LLM deployment on NVIDIA hardware.

## Detail

### Purpose
TensorRT-LLM solves the performance gap between raw LLM inference and hardware-optimal execution. Naive LLM deployment achieves 10-30% of theoretical GPU throughput; TensorRT-LLM closes this gap through aggressive kernel fusion, custom attention implementations, quantization, and dynamic batching strategies, delivering 2-8x throughput improvements over baseline PyTorch inference for production LLM serving.

### Key Features
- In-flight batching (continuous batching): dynamically combines requests of different lengths for maximum GPU utilization
- Paged KV cache: manages KV cache memory as virtual pages to support arbitrary context lengths
- Flash Attention and Multi-Head Latent Attention (MLA) custom CUDA kernels
- Tensor Parallelism (TP) and Pipeline Parallelism (PP) for multi-GPU inference
- Weight-only INT4 and INT8 quantization (AWQ, GPTQ, SmoothQuant)
- FP8 quantization and execution on Hopper/Blackwell GPUs
- Speculative decoding: draft model + target model for reduced decode latency
- Medusa, EAGLE speculative decoding variants
- LoRA adapter support for serving multiple fine-tuned variants from one base model
- Chunked prefill for long-context generation
- KV cache disaggregation via NIXL for prefill-decode separation
- Supports: GPT, Llama, Mistral, Mixtral, Falcon, Nemotron, Gemma, Phi, Qwen, BLOOM, and more
- Python Model Definition API for building custom LLM engines
- Triton Inference Server backend for production serving
- NeMo Export-Deploy path for exporting NeMo, AutoModel, Megatron Bridge, and Hugging Face checkpoints into TensorRT-LLM deployment flows.
- [[Red-Hat-AI-Factory-with-NVIDIA]] lists TensorRT-LLM as one of the engines that can power NIM inference microservices in the OpenShift AI stack.

### Use Cases
- Production LLM API serving (ChatGPT-style applications)
- RAG (Retrieval-Augmented Generation) system backends
- Code generation and completion services
- Multimodal LLM inference (vision-language models)
- Multi-LoRA serving: one base model serving many fine-tuned adapters simultaneously
- Long-context document processing (128K+ token contexts)
- Batch offline LLM inference for data processing pipelines

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 7.0+ (Volta minimum for FP16)
- A100 (Ampere): INT8, FP16 quantization; strong multi-GPU TP support
- H100 (Hopper): FP8 quantization and execution, NVLink 4.0 for TP
- H200/B100/B200 (Blackwell): next-generation FP8 and FP4 support
- NVLink required for tensor parallelism (TP>1) on same node
- InfiniBand for multi-node pipeline parallelism
- CUDA 12.x required for full feature set

### Language Bindings
- Python (Model Definition API, `tensorrt_llm` package)
- C++ (runtime and backend code)
- REST/gRPC via Triton Inference Server integration

## Connections
- [[TensorRT]] — TensorRT-LLM is built on TensorRT's compilation and runtime infrastructure
- [[Triton-Inference-Server]] — Triton's `tensorrtllm` backend wraps TRT-LLM for production serving
- [[NVIDIA-AIPerf]] - current NVIDIA benchmarking tool for OpenAI-compatible LLM services backed by TensorRT-LLM or adjacent engines.
- [[NVIDIA-GenAI-Perf]] - older Triton generative AI benchmark examples include TensorRT-LLM-backed serving.
- [[Triton-Performance-Analyzer]], [[Triton-Model-Analyzer]], and [[Triton-Model-Navigator]] - Triton toolchain for measuring, tuning, and preparing served TensorRT/Triton models.
- [[NeMo-Export-Deploy]] - current NeMo library that exports and deploys LLM/MM checkpoints through TensorRT-LLM, Triton, and related runtimes.
- [[NeMo-Megatron-Bridge]] and [[NeMo-AutoModel]] - upstream NeMo training/checkpoint sources that can feed TensorRT-LLM deployment paths.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide where NIM may be powered by TensorRT-LLM.
- [[FlashInfer]] — FlashInfer attention kernels integrated as an optional attention backend
- [[CUTLASS]] — custom GEMM and attention kernels in TRT-LLM use CUTLASS templates
- [[NVIDIA-NeMo]] — NeMo-trained LLMs are exported and deployed via TRT-LLM
- [[Megatron-LM]] — Megatron checkpoint format supported for direct TRT-LLM conversion
- [[NIXL]] — NIXL provides KV cache transfer for disaggregated prefill-decode serving
- [[cuDNN]] — cuDNN fused attention used as an alternative attention backend in TRT-LLM

## Resources
- [NVIDIA TensorRT-LLM Developer Page](https://developer.nvidia.com/tensorrt-llm)
- [Documentation](https://nvidia.github.io/TensorRT-LLM/)
- [GitHub](https://github.com/NVIDIA/TensorRT-LLM)
- [NVIDIA NGC Container](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/tensorrt-llm)
