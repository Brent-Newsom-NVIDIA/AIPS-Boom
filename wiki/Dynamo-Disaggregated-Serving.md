# Dynamo Disaggregated Serving

**Type:** Concept
**Tags:** NVIDIA, Dynamo, disaggregated serving, LLM inference, prefill, decode, KV cache, NIXL, vLLM, TensorRT-LLM
**Related:** [[NVIDIA-Dynamo]], [[Dynamo-KV-Cache-Aware-Routing]], [[Dynamo-KV-Block-Manager]], [[Dynamo-Planner]], [[Dynamo-Profiler]], [[NIXL]], [[TensorRT-LLM]], [[vLLM]], [[NVIDIA-Grove]], [[KAI-Scheduler]], [[NVIDIA-CMX]], [[NVIDIA-AIPerf]]
**Sources:** https://docs.nvidia.com/dynamo/design-docs/disaggregated-serving, https://docs.nvidia.com/dynamo/latest/getting-started/introduction
**Last Updated:** 2026-04-29

## Summary
Dynamo Disaggregated Serving is NVIDIA Dynamo's architecture pattern for separating LLM prefill and decode work onto specialized worker pools. It lets systems scale compute-heavy prefill and memory-bound decode independently, transfer KV cache between workers with [[NIXL]], and combine the pattern with [[Dynamo-KV-Cache-Aware-Routing]] and [[Dynamo-KV-Block-Manager]] for higher throughput and lower time to first token.

## Detail

### Purpose
LLM requests have two very different phases. Prefill processes the prompt and creates KV cache, while decode generates output tokens while repeatedly reading KV cache. A single worker pool can underutilize hardware because prefill and decode stress different resources. Disaggregation lets operators assign separate prefill and decode capacity and schedule each phase around its bottleneck.

### Current scope
- Separate prefill and decode workers for LLM serving.
- Prefill workers generate KV cache; decode workers continue token generation.
- KV transfer between prefill and decode workers through [[NIXL]] and backend-specific transfer metadata.
- Router orchestration through Dynamo prefill/decode routing flows.
- Support for vLLM, SGLang, and TensorRT-LLM style backends in current Dynamo docs.
- Runtime-reconfigurable prefill/decode worker counts so workers can be added or drained as traffic changes.
- Works with KV routing, KV offloading, Planner autoscaling, and Grove topology-aware placement.

### NVIDIA context
Disaggregated serving is one of the three system-level performance techniques NVIDIA highlights for Dynamo alongside KV cache-aware routing and KV cache offloading. It connects [[NVIDIA-Dynamo]] to [[NIXL]], [[Dynamo-KV-Block-Manager]], [[NVIDIA-Grove]], [[KAI-Scheduler]], [[TensorRT-LLM]], and [[NVIDIA-CMX]].

## Connections
- [[NVIDIA-Dynamo]] - umbrella inference framework that implements disaggregated serving.
- [[Dynamo-KV-Cache-Aware-Routing]] - routes requests based on cache overlap and worker load across aggregated or disaggregated topologies.
- [[Dynamo-KV-Block-Manager]] - memory-management layer for KV cache offload and reuse.
- [[Dynamo-Planner]] - autoscaler that understands prefill/decode scaling constraints.
- [[Dynamo-Profiler]] - produces performance data used to choose disaggregated serving configurations.
- [[NIXL]] - data transfer layer for moving KV cache between workers and memory tiers.
- [[NVIDIA-Grove]] and [[KAI-Scheduler]] - Kubernetes orchestration and placement for multi-component prefill/decode deployments.
- [[TensorRT-LLM]] and [[vLLM]] - inference engines that can sit underneath Dynamo disaggregation.
- [[NVIDIA-CMX]] - context memory platform aligned with KV-cache reuse and long-context inference.
- [[NVIDIA-AIPerf]] - benchmark tool for validating latency/throughput improvements from disaggregated deployments.

## Source Excerpts
- NVIDIA Dynamo docs describe prefill and decode as phases with different compute and memory characteristics.
- Current docs state that high-performance disaggregation depends on efficient KV transfer.

## Resources
- [Dynamo Disaggregated Serving Design Doc](https://docs.nvidia.com/dynamo/design-docs/disaggregated-serving)
- [Dynamo Introduction](https://docs.nvidia.com/dynamo/latest/getting-started/introduction)
