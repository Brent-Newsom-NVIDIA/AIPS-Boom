# Dynamo KV Block Manager

**Type:** Technology
**Tags:** NVIDIA, Dynamo, KVBM, KV cache, memory management, offloading, NIXL, vLLM, TensorRT-LLM, long-context inference
**Related:** [[NVIDIA-Dynamo]], [[Dynamo-KV-Cache-Aware-Routing]], [[Dynamo-Disaggregated-Serving]], [[Dynamo-Planner]], [[Dynamo-Profiler]], [[NIXL]], [[NVIDIA-CMX]], [[TensorRT-LLM]], [[vLLM]], [[GPU-Direct-Storage]], [[GPUDirect-RDMA]]
**Sources:** https://docs.nvidia.com/dynamo/latest/components/kvbm, https://docs.nvidia.com/dynamo/backends/v-llm/kv-cache-offloading, https://docs.nvidia.com/dynamo/latest/getting-started/introduction
**Last Updated:** 2026-04-29

## Summary
Dynamo KV Block Manager (KVBM) is NVIDIA Dynamo's unified memory layer for allocating, managing, sharing, offloading, and reusing LLM KV cache blocks across heterogeneous memory tiers. Current Dynamo docs describe KVBM as a scalable runtime component that spans GPU memory, host memory, RDMA-accessible memory, SSDs, file/object storage, and NIXL-backed transfer.

## Detail

### Purpose
Long-context and multi-turn inference can exceed GPU HBM or force costly recomputation of prompt KV cache. KVBM gives Dynamo a block-oriented KV cache management layer so inference runtimes can offload inactive cache, reuse repeated content, and share cache across workers or storage tiers.

### Current scope
- Unified memory API across GPU memory, pinned host memory, remote RDMA memory, local/distributed SSDs, and remote file/object/cloud storage.
- Block lifecycle support for allocation, registration, matching, state transitions, reuse, and eviction.
- Three-layer architecture: LLM inference runtime layer, KVBM logic layer, and NIXL transfer/storage layer.
- Runtime integrations for vLLM and TensorRT-LLM in the current docs.
- Works with aggregated and disaggregated serving.
- KVBM offloading extends effective KV cache capacity beyond GPU memory with CPU and disk tiers.
- Integrates with [[Dynamo-KV-Cache-Aware-Routing]] so routing can consider cache location and reuse.

### NVIDIA context
KVBM is the memory-management foundation in the Dynamo stack. It complements [[NIXL]] for data movement, [[Dynamo-Disaggregated-Serving]] for prefill/decode split, [[NVIDIA-CMX]] for pod-scale context memory, and [[Dynamo-Planner]] for SLA-aware capacity management.

## Connections
- [[NVIDIA-Dynamo]] - umbrella framework that includes KVBM as its KV cache memory layer.
- [[Dynamo-KV-Cache-Aware-Routing]] - routing can exploit cache state managed by KVBM.
- [[Dynamo-Disaggregated-Serving]] - prefill/decode split depends on moving and reusing KV cache.
- [[Dynamo-Planner]] and [[Dynamo-Profiler]] - autoscaling and profiling need realistic KV cache behavior.
- [[NIXL]] - transfer and storage layer underneath KVBM.
- [[NVIDIA-CMX]] - larger context memory platform aligned with KVBM-style KV cache sharing.
- [[TensorRT-LLM]] and [[vLLM]] - LLM runtimes that can integrate with KVBM.
- [[GPU-Direct-Storage]] and [[GPUDirect-RDMA]] - storage and network paths relevant to remote or tiered KV cache movement.

## Source Excerpts
- NVIDIA docs describe KVBM as a runtime component for memory allocation, management, and remote sharing of KV blocks.
- Current docs list GPU, host, RDMA, SSD, and object/cloud storage as memory/storage tiers.

## Resources
- [Dynamo KVBM](https://docs.nvidia.com/dynamo/latest/components/kvbm)
- [Dynamo KV Cache Offloading](https://docs.nvidia.com/dynamo/backends/v-llm/kv-cache-offloading)
