# Dynamo Planner

**Type:** Tool
**Tags:** NVIDIA, Dynamo, Planner, autoscaling, LLM inference, SLA, TTFT, ITL, Kubernetes, disaggregated serving
**Related:** [[NVIDIA-Dynamo]], [[Dynamo-Profiler]], [[Dynamo-Disaggregated-Serving]], [[Dynamo-KV-Cache-Aware-Routing]], [[Dynamo-KV-Block-Manager]], [[NVIDIA-Grove]], [[KAI-Scheduler]], [[NVIDIA-AIPerf]], [[TensorRT-LLM]], [[vLLM]], [[NVIDIA-NIM]]
**Sources:** https://docs.nvidia.com/dynamo/latest/components/planner, https://docs.nvidia.com/dynamo/latest/getting-started/introduction
**Last Updated:** 2026-04-29

## Summary
Dynamo Planner is NVIDIA Dynamo's autoscaling component for LLM inference deployments. It is built around LLM-specific signals such as time to first token (TTFT), inter-token latency (ITL), input/output sequence lengths, prefill/decode behavior, queue depth, KV cache pressure, and profiling data rather than only generic CPU or request-rate metrics.

## Detail

### Purpose
Traditional Kubernetes autoscaling does not understand LLM serving. A request with a long prompt can be far more expensive than a short one, prefill and decode scale differently, and GPU workers take meaningful time to start. Planner handles this by using Dynamo-specific performance data and traffic signals to scale prefill and decode workers toward throughput, latency, or SLA goals.

### Current scope
- Optimization targets include throughput, latency, and SLA-based scaling.
- Throughput-based scaling uses pre-deployment engine performance data and traffic prediction.
- Load-based scaling uses runtime ForwardPassMetrics and online regression for fast reaction to bursts.
- Supports disaggregated and aggregated serving modes.
- Supports vLLM, SGLang, and TensorRT-LLM in the current docs.
- Uses SLA targets such as TTFT and ITL when configured.
- Connects to Kubernetes deployment workflows and monitoring through Prometheus/Grafana-style metrics.

### NVIDIA context
Planner is the online control loop for [[NVIDIA-Dynamo]] deployments. It depends on [[Dynamo-Profiler]] data, works with [[Dynamo-Disaggregated-Serving]] and [[Dynamo-KV-Cache-Aware-Routing]], and uses [[NVIDIA-Grove]]/[[KAI-Scheduler]] style placement when workers need to scale across topology-sensitive GPU clusters.

## Connections
- [[NVIDIA-Dynamo]] - Planner is the autoscaling component in the Dynamo serving stack.
- [[Dynamo-Profiler]] - produces optimal configuration and interpolation data consumed by Planner.
- [[Dynamo-Disaggregated-Serving]] - Planner scales prefill and decode workers independently.
- [[Dynamo-KV-Cache-Aware-Routing]] - Planner complements routing by changing available worker capacity.
- [[Dynamo-KV-Block-Manager]] - KV cache pressure and offloading affect scaling needs.
- [[NVIDIA-Grove]] and [[KAI-Scheduler]] - placement and topology-aware scheduling layers for scaled workers.
- [[NVIDIA-AIPerf]] - benchmark tool for validating Planner behavior against latency/throughput targets.
- [[TensorRT-LLM]] and [[vLLM]] - supported inference-engine contexts.
- [[NVIDIA-NIM]] - production inference microservices can sit above Dynamo-style autoscaled serving.

## Source Excerpts
- NVIDIA docs state that Planner targets LLM-specific metrics such as TTFT and ITL.
- Current docs describe throughput, latency, and SLA optimization targets.

## Resources
- [Dynamo Planner](https://docs.nvidia.com/dynamo/latest/components/planner)
- [Dynamo Introduction](https://docs.nvidia.com/dynamo/latest/getting-started/introduction)
