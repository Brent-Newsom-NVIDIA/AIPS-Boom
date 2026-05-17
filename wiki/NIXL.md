# NIXL (NVIDIA Inference Xfer Library)

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Inference, Data Transfer, Networking, LLM, KV Cache, CUDA-X
**Related:** [[NVIDIA-Dynamo]], [[Dynamo-Disaggregated-Serving]], [[Dynamo-KV-Block-Manager]], [[Dynamo-KV-Cache-Aware-Routing]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[GPU-Direct-Storage]], [[GPUDirect-RDMA]], [[DOCA-GPUNetIO]], [[DOCA-RDMA]], [[NCCL]], [[NVSHMEM]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/nixl, https://docs.nvidia.com/dynamo/design-docs/disaggregated-serving, https://docs.nvidia.com/dynamo/latest/components/kvbm, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/network-operator.html
**Last Updated:** 2026-04-29

## Summary
NIXL (NVIDIA Inference Xfer Library) is a high-performance data transfer library purpose-built for GPU inference workloads, particularly large language model (LLM) serving. It provides a unified API for efficient data movement between GPUs, CPUs, storage, and network endpoints, optimized for the KV cache transfer patterns required in disaggregated LLM inference architectures (prefill-decode disaggregation). NIXL abstracts multiple transport backends (UCX, NVLink, InfiniBand, NVMe) behind a single interface to maximize inference throughput.

## Detail

### Purpose
NIXL addresses the data movement bottleneck in modern LLM serving, where prefill computation and decode computation can be disaggregated across different GPU pools for efficiency. Moving large KV (key-value) caches between prefill servers and decode servers — or between GPU memory and high-capacity CPU/NVMe storage — requires high-bandwidth, low-latency transfers that existing general-purpose libraries do not optimize for specifically.

### Key Features
- Unified transfer API supporting multiple backends: UCX (RDMA/InfiniBand), NVLink, PCIe, NVMe-oF
- GPU Direct RDMA: NIC-to-GPU transfers bypassing CPU for minimum latency
- KV cache-optimized transfer patterns for disaggregated LLM inference
- GPU-initiated transfers: allows GPU kernels to trigger data movement without CPU involvement
- Current DOCA GPUNetIO docs list NIXL as a GPUNetIO-using application for inference transfer paths.
- Memory registration and buffer management for pooled transfer efficiency
- Asynchronous, stream-ordered operations for overlapping compute and communication
- Integration with TensorRT-LLM for KV cache disaggregation
- Integration with [[NVIDIA-Dynamo]] for disaggregated serving, [[Dynamo-KV-Block-Manager]] tiered KV cache memory, and KV cache movement between prefill/decode workers.
- NVIDIA's [[Red-Hat-AI-Factory-with-NVIDIA]] guide references NIXL as the transfer library used by llm-d and Dynamo-oriented distributed inference paths.
- Support for CPU offload (GPU-to-DRAM) for extended KV cache capacity
- Support for NVMe offload via GPU Direct Storage for very large KV cache pools
- Multi-GPU and multi-node topologies

### Use Cases
- Disaggregated LLM inference: separate prefill and decode GPU pools
- KV cache offload to CPU/NVMe for extended context length support
- High-throughput LLM serving with large batch sizes
- Multi-model serving with shared KV cache across model replicas
- GPU-to-GPU data streaming for inference pipeline stages

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 7.0+ (Volta minimum)
- H100/A100 with NVLink or InfiniBand for full bandwidth utilization
- RDMA-capable NICs (ConnectX series) for GPU Direct RDMA
- NVMe SSDs with GPU Direct Storage for NVMe offload
- CUDA 11.8 or higher

### Language Bindings
- C++ (primary library API)
- Python bindings for integration testing and application use

## Connections
- [[NVIDIA-Dynamo]] - Dynamo uses NIXL as a data transfer foundation for disaggregated serving and KV cache movement.
- [[Dynamo-Disaggregated-Serving]] - NIXL moves KV cache between prefill and decode workers.
- [[Dynamo-KV-Block-Manager]] - KVBM uses NIXL as the transfer/storage layer for KV cache tiers.
- [[Dynamo-KV-Cache-Aware-Routing]] - routing and cache locality rely on fast transfer and reuse paths.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide that names NIXL in the distributed inference networking context.
- [[TensorRT-LLM]] — NIXL is the primary data transfer layer for TRT-LLM disaggregated inference
- [[Triton-Inference-Server]] — Triton LLM serving uses NIXL for KV cache transfers in disaggregated deployments
- [[GPU-Direct-Storage]] — NIXL leverages GDS for NVMe-to-GPU KV cache offload
- [[GPUDirect-RDMA]] — NIXL uses GPU-aware network transfer paths for inter-node inference data movement.
- [[DOCA-GPUNetIO]] — NVIDIA's GPUNetIO docs list NIXL as an application using GPU networking functions.
- [[DOCA-RDMA]] — RDMA application primitives are adjacent to NIXL's UCX/RDMA backend story.
- [[NCCL]] — NIXL complements NCCL; while NCCL handles collective training comms, NIXL handles point-to-point inference data movement
- [[NVSHMEM]] — NVSHMEM handles symmetric memory for HPC; NIXL targets inference-specific transfer patterns

## Resources
- [NVIDIA NIXL Developer Page](https://developer.nvidia.com/nixl)
- [NVIDIA Blog: Disaggregated LLM Inference](https://developer.nvidia.com/blog/nvidia-tensorrt-llm-disaggregated-serving/)
- [GitHub](https://github.com/ai-dynamo/nixl)
