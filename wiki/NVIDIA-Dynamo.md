# NVIDIA Dynamo

**Type:** Platform
**Tags:** NVIDIA, Dynamo, inference, LLM serving, Kubernetes, NIM, disaggregated serving
**Related:** [[Dynamo-Disaggregated-Serving]], [[Dynamo-KV-Cache-Aware-Routing]], [[Dynamo-KV-Block-Manager]], [[Dynamo-Planner]], [[Dynamo-Profiler]], [[NVIDIA-NIM]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[NVIDIA-CMX]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-Grove]], [[KAI-Scheduler]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[NVIDIA-AIPerf]], [[NVIDIA-GenAI-Perf]], [[NIXL]], [[NVIDIA-NeMo]], [[NVIDIA-DGX]]
**Sources:** https://docs.nvidia.com/dynamo/index.html, https://docs.nvidia.com/dynamo/latest/getting-started/introduction, https://docs.nvidia.com/dynamo/design-docs/disaggregated-serving, https://docs.nvidia.com/dynamo/latest/user-guides/kv-cache-aware-routing, https://docs.nvidia.com/dynamo/latest/components/kvbm, https://docs.nvidia.com/dynamo/latest/components/planner, https://docs.nvidia.com/dynamo/latest/components/profiler, https://docs.nvidia.com/aiperf/architecture-internals/architecture-of-ai-perf, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/overview.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/network-operator.html, https://www.nvidia.com/en-us/data-center/ai-storage/cmx/, https://www.nvidia.com/en-us/data-center/ai-data-platform/
**Last Updated:** 2026-04-29

## Summary
NVIDIA Dynamo is NVIDIA's inference-serving platform documentation for running and deploying high-performance AI inference services locally or on Kubernetes. It is closely connected to the modern NVIDIA inference stack around [[NVIDIA-NIM]], [[TensorRT-LLM]], [[Triton-Inference-Server]], and disaggregated serving components such as [[NIXL]].

## Detail

### Purpose
AI factories need inference services that can scale beyond a single process or single deployment pattern. Dynamo provides a documented path for running inference infrastructure through CLI-based local/VM setup and Kubernetes deployment guides.

### Key capabilities
- Local or VM quickstart through the Dynamo CLI.
- [[Dynamo-Disaggregated-Serving]] for separating prefill and decode workers.
- [[Dynamo-KV-Cache-Aware-Routing]] for cache-overlap and worker-load-aware request placement.
- [[Dynamo-KV-Block-Manager]] for KV cache offload, sharing, and memory tiering.
- [[Dynamo-Planner]] for SLA-aware autoscaling around TTFT, ITL, and traffic changes.
- [[Dynamo-Profiler]] for profiling model/backend/hardware combinations and generating deployment recommendations.
- Container-based install path with dependencies packaged into images.
- Kubernetes installation and quickstart path for cluster deployments.
- Designed to fit NVIDIA inference runtimes and model-serving workflows.
- Relevant to large language model serving, disaggregation, and operational deployment.
- [[Red-Hat-AI-Factory-with-NVIDIA]] references Dynamo with [[NIXL]] as part of distributed inference support for llm-d and large scale-out AI factory workloads.
- AIPerf-style benchmarking is relevant for measuring distributed serving latency, throughput, GPU telemetry, and server metrics around Dynamo-style deployments.
- Kubernetes multinode deployments can use [[NVIDIA-Grove]] and [[KAI-Scheduler]] for topology-aware pod placement, gang scheduling, and coordinated scaling.
- [[NVIDIA-CMX]] positions Dynamo as the serving layer that can route requests with awareness of where reusable KV cache resides in a context-memory tier.

### NVIDIA context
Dynamo is part of NVIDIA's fast-moving inference layer, bridging model-serving systems and AI factory operations. It should be tracked alongside [[NVIDIA-NIM]], [[NIXL]], [[TensorRT-LLM]], and [[Triton-Inference-Server]] for current production inference architecture.

## Connections
- [[Dynamo-Disaggregated-Serving]] - core Dynamo pattern for splitting prefill and decode work.
- [[Dynamo-KV-Cache-Aware-Routing]] - router mode that routes requests based on cache overlap and worker load.
- [[Dynamo-KV-Block-Manager]] - KVBM memory-management layer for KV cache offload and reuse.
- [[Dynamo-Planner]] - autoscaler for LLM-specific latency and throughput goals.
- [[Dynamo-Profiler]] - profiling and configuration-discovery component for Dynamo deployments.
- [[NVIDIA-NIM]] - Dynamo complements NIM-based model deployment and serving.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide that references Dynamo and NIXL for distributed inference.
- [[NVIDIA-CMX]] - context memory storage layer for long-context inference and KV-cache reuse.
- [[NVIDIA-AI-Data-Platform]] - AI Data Platform lists centralized cache for distributed inference with Dynamo as a reference workflow.
- [[NVIDIA-Grove]] - Grove provides declarative Kubernetes orchestration for multi-component Dynamo inference systems.
- [[KAI-Scheduler]] - KAI handles topology-aware and gang-scheduled placement for Grove/Dynamo deployments.
- [[NIXL]] - disaggregated inference uses high-throughput transfer for KV cache and tensor movement.
- [[TensorRT-LLM]] - optimized LLM engine commonly associated with NVIDIA inference serving.
- [[Triton-Inference-Server]] - established NVIDIA inference server used across model modalities.
- [[NVIDIA-AIPerf]] - current NVIDIA benchmark tool for load generation, latency/throughput measurement, GPU telemetry, and server metrics against inference endpoints.
- [[NVIDIA-GenAI-Perf]] - older generative AI benchmark tool useful for legacy workflow lookup.
- [[NVIDIA-DGX]] - representative infrastructure for large inference deployments.

## Source Excerpts
- NVIDIA Dynamo docs describe Dynamo as a high-throughput, low-latency inference framework for distributed generative AI workloads.
- Current docs highlight disaggregated serving, KV cache-aware routing, and KV cache offloading as composable system-level performance techniques.
