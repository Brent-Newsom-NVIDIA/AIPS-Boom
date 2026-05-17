# Dynamo KV Cache-Aware Routing

**Type:** Technology
**Tags:** NVIDIA, Dynamo, KV routing, LLM inference, KV cache, router, prefill, decode, latency, throughput
**Related:** [[NVIDIA-Dynamo]], [[Dynamo-Disaggregated-Serving]], [[Dynamo-KV-Block-Manager]], [[Dynamo-Planner]], [[Dynamo-Profiler]], [[NIXL]], [[NVIDIA-CMX]], [[TensorRT-LLM]], [[vLLM]], [[NVIDIA-AIPerf]]
**Sources:** https://docs.nvidia.com/dynamo/latest/user-guides/kv-cache-aware-routing, https://docs.nvidia.com/dynamo/latest/getting-started/introduction
**Last Updated:** 2026-04-29

## Summary
Dynamo KV Cache-Aware Routing is the Dynamo router mode that routes LLM requests by considering worker load and overlap with existing KV cache. It reduces redundant prefill work, improves time to first token, and supports both aggregated worker pools and disaggregated prefill/decode topologies.

## Detail

### Purpose
Repeated prompts, system instructions, RAG templates, long conversations, and agent loops create reusable KV cache. A router that ignores cache locality can send related requests to workers that must recompute cache from scratch. Dynamo's KV router makes routing decisions with cache overlap and active load in mind so it can reuse precomputed state when that is cheaper than recomputation.

### Current scope
- Router modes include round-robin, random, KV, least-loaded, device-aware weighted, direct, and standalone router operation.
- KV mode evaluates cache overlap and decode load per worker.
- Routing can work in aggregated deployments or with separate prefill and decode workers.
- KV event transport options include local NATS Core, ZMQ, approximate/no-event mode, and other modes documented by Dynamo.
- Device-aware weighted routing supports heterogeneous fleets such as CPU and GPU embedding workers.
- Kubernetes deployments can enable KV routing through Dynamo environment variables.
- AIC prefill load modeling can estimate prompt-side work for routing decisions.

### NVIDIA context
KV routing is one of the three main Dynamo performance techniques alongside [[Dynamo-Disaggregated-Serving]] and [[Dynamo-KV-Block-Manager]] offloading. It is central to [[NVIDIA-Dynamo]], [[NVIDIA-CMX]], [[NIXL]], and large-scale long-context inference systems where cache reuse reduces TTFT and infrastructure cost.

## Connections
- [[NVIDIA-Dynamo]] - framework and runtime family that includes the KV router.
- [[Dynamo-Disaggregated-Serving]] - KV routing chooses prefill/decode paths in disaggregated deployments.
- [[Dynamo-KV-Block-Manager]] - stores and shares KV blocks across memory tiers for routing and reuse.
- [[Dynamo-Planner]] - autoscaling decisions can pair with KV routing to keep SLAs under changing traffic.
- [[Dynamo-Profiler]] - profiling data informs deployment and scaling choices around routing.
- [[NIXL]] - transfer layer used when routing and serving require KV movement across workers or tiers.
- [[NVIDIA-CMX]] - context memory platform that benefits from cache-aware request placement.
- [[TensorRT-LLM]] and [[vLLM]] - supported engine context for Dynamo routing.
- [[NVIDIA-AIPerf]] - benchmark tool for measuring routing effects on TTFT, ITL, throughput, and Pareto curves.

## Source Excerpts
- NVIDIA docs describe the Dynamo KV Router as evaluating computational costs across workers.
- Current docs list KV cache overlap and worker load as routing inputs.

## Resources
- [Dynamo Router Guide](https://docs.nvidia.com/dynamo/latest/user-guides/kv-cache-aware-routing)
- [Dynamo Introduction](https://docs.nvidia.com/dynamo/latest/getting-started/introduction)
