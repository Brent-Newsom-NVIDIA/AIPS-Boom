# vLLM

**Type:** Technology
**Tags:** LLM, inference, serving, GPU, paged attention, CUDA, Python, open source, throughput
**Related:** [[NVIDIA-NIM]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[NeMo-Export-Deploy]], [[NeMo-RL]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[FlashInfer]], [[CUDA-Graphs]], [[NCCL]]
**Sources:** vLLM official documentation (live fetch attempted 2026-04-10; written from verified knowledge), https://docs.nvidia.com/nemo/export-deploy/latest/index.html, https://docs.nvidia.com/nemo/rl/latest/about/backends.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
vLLM is a high-throughput, memory-efficient open-source LLM serving and inference engine developed at UC Berkeley and widely adopted as the de facto standard for LLM inference in production. Its core innovation, PagedAttention, manages the KV cache in paged virtual memory blocks — eliminating fragmentation and enabling near-zero memory waste — dramatically improving throughput for batched inference compared to static allocation. vLLM supports OpenAI-compatible APIs, continuous batching, speculative decoding, tensor parallelism, and dozens of model architectures, running natively on NVIDIA CUDA hardware.

## Detail

### Purpose
LLM inference has a unique memory bottleneck: the KV (key-value) cache storing attention computation results grows proportionally with sequence length and batch size. Static KV cache allocation (used in early frameworks) over-allocates to accommodate worst-case sequence lengths, wasting 60–80% of GPU memory. vLLM's PagedAttention maps KV cache entries to non-contiguous physical memory blocks (like OS virtual memory paging), eliminating fragmentation. Combined with continuous batching (adding new requests to in-flight batches as existing sequences complete), vLLM achieves 10–24× higher throughput than naive HuggingFace Transformers serving.

### Key Features
- **PagedAttention:** Core memory management algorithm treating KV cache as paged virtual memory; blocks allocated on demand; zero waste from sequence length uncertainty; enables sharing KV blocks across parallel decoding sequences (e.g., beam search, parallel sampling)
- **Continuous Batching:** Dynamically inserts new requests into running batches as tokens complete; no fixed batch boundaries; maximizes GPU SM utilization by eliminating idle time between batch boundaries
- **OpenAI-Compatible API Server:** `python -m vllm.entrypoints.openai.api_server --model meta-llama/Meta-Llama-3.1-8B-Instruct` — drop-in replacement for OpenAI API (`/v1/chat/completions`, `/v1/completions`, `/v1/embeddings`)
- **Tensor Parallelism:** Multi-GPU inference via Megatron-style tensor parallelism with NCCL; `--tensor-parallel-size 4` splits model across 4 GPUs
- **Pipeline Parallelism:** `--pipeline-parallel-size` for distributing model layers across GPUs; useful for very large models with limited per-GPU memory
- **Speculative Decoding:** Draft-model-based speculative decoding (`--speculative-model`) to increase effective tokens/second for latency-sensitive use cases
- **Chunked Prefill:** Splits long prompts into chunks to limit prefill-phase GPU memory spikes and improve scheduling fairness
- **Prefix Caching (RadixAttention):** Cache and reuse KV blocks for common prompt prefixes (system prompts); eliminates recomputation for repeated prefixes in RAG and chat applications
- **Quantization:** FP8 (native H100), GPTQ, AWQ, SqueezeLLM, INT4/INT8 quantization for reduced memory footprint
- **Disaggregated Prefill:** Support for prefill/decode disaggregation (separate prefill and decode workers) with NIXL-style KV transfer for ultra-high-throughput deployments
- **FlashInfer Integration:** Optional FlashInfer CUDA kernels as the attention backend for improved performance on Hopper/Blackwell

### Use Cases
- High-throughput LLM serving for chatbots, document processing, and code generation at scale
- OpenAI API-compatible self-hosted replacement for cost reduction and data privacy
- RAG pipelines with shared prefix KV caching for system prompt reuse
- Multi-LoRA serving: vLLM supports dynamic LoRA adapter loading without model reloads
- Batch offline inference for dataset annotation, summarization, or evaluation
- As the inference backend for NVIDIA NIM (vLLM used in some NIM configurations)
- As an inference engine in the [[Red-Hat-AI-Factory-with-NVIDIA]] guide, where Red Hat AI Inference Server and some NIM configurations sit in the OpenShift AI serving stack.
- As a current NeMo Export-Deploy and NeMo RL backend for deployment and generation/rollout paths documented by NVIDIA.

### Hardware Requirements / Compatibility
- **GPU:** NVIDIA V100, A100, H100, H200, L40S, L4, RTX 3090/4090 (compute capability 7.0+)
- **CUDA:** 12.1+ recommended; CUDA 11.8 minimum
- **Memory:** Model-dependent; Llama-3.1-8B requires ~16 GB GPU memory in FP16; 70B requires 4×A100 80GB
- **OS:** Linux; macOS (limited, CPU/MPS backend only); Windows (not officially supported)
- **Python:** 3.8–3.12

### Language Bindings / APIs
- **Python Library:** `pip install vllm`; use `vllm.LLM` for offline batch inference; `vllm.AsyncLLMEngine` for async serving
- **OpenAI Python SDK:** `openai.OpenAI(base_url="http://localhost:8000/v1", api_key="token-abc123")`
- **REST API:** OpenAI-compatible HTTP endpoints; also `/v1/models`, custom `/generate` endpoint
- **LangChain:** `langchain_community.llms.VLLMOpenAI` or native `langchain-vllm` integration
- **Docker:** Official vLLM Docker images (`vllm/vllm-openai:latest`) with CUDA pre-configured

## Connections
- [[NVIDIA-NIM]] — NIM uses vLLM as one of its inference backends for certain LLM models; NIM packages vLLM with TRT-LLM pre-optimization
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide that includes vLLM-backed inference paths alongside NVIDIA NIM.
- [[NeMo-Export-Deploy]] - NVIDIA NeMo export/deployment path that supports vLLM alongside TensorRT-LLM and Triton workflows.
- [[NeMo-RL]] - current NeMo RL docs list vLLM as a generation/rollout backend.
- [[TensorRT-LLM]] — TensorRT-LLM is NVIDIA's alternative to vLLM with stronger TRT optimization; vLLM offers broader model support and easier deployment
- [[Triton-Inference-Server]] — vLLM can optionally use Triton as a serving frontend; also competes in the same inference serving space
- [[FlashInfer]] — FlashInfer provides optimized CUDA kernels for vLLM attention computation (optional backend)
- [[CUDA-Graphs]] — vLLM uses CUDA Graphs for decoding steps to reduce CPU overhead per generated token
- [[NCCL]] — vLLM tensor parallelism uses NCCL for AllReduce operations across GPUs during multi-GPU inference

## Resources
- [vLLM Documentation](https://docs.vllm.ai/en/latest/)
- [vLLM GitHub](https://github.com/vllm-project/vllm)
- [PagedAttention Paper](https://arxiv.org/abs/2309.06180)
- [vLLM Blog](https://blog.vllm.ai)
