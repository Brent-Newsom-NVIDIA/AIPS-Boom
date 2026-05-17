# Dynamo Profiler

**Type:** Tool
**Tags:** NVIDIA, Dynamo, Profiler, AI Configurator, AIPerf, LLM inference, TensorRT-LLM, vLLM, SGLang, SLA
**Related:** [[NVIDIA-Dynamo]], [[Dynamo-Planner]], [[Dynamo-Disaggregated-Serving]], [[Dynamo-KV-Cache-Aware-Routing]], [[Dynamo-KV-Block-Manager]], [[NVIDIA-AIPerf]], [[TensorRT-LLM]], [[vLLM]], [[NVIDIA-Grove]]
**Sources:** https://docs.nvidia.com/dynamo/latest/components/profiler, https://docs.nvidia.com/dynamo/latest/user-guides/benchmarking, https://docs.nvidia.com/dynamo/latest/getting-started/introduction
**Last Updated:** 2026-04-29

## Summary
Dynamo Profiler is NVIDIA Dynamo's automated performance analysis component for measuring model inference characteristics and producing deployment recommendations. It determines prefill/decode tensor-parallel settings, generates performance data for [[Dynamo-Planner]], and supports both online profiling with [[NVIDIA-AIPerf]] and faster offline estimation through AI Configurator.

## Detail

### Purpose
Disaggregated and autoscaled LLM deployments need configuration data before they can reliably meet latency and throughput goals. Dynamo Profiler analyzes model, workload, backend, hardware, and SLA assumptions so the stack can choose prefill/decode parallelism and generate deployment manifests instead of relying on manual sweeps.

### Current scope
- Dense model profiling across SGLang, TensorRT-LLM, and vLLM.
- MoE model profiling support as documented by current feature matrices.
- AI Configurator offline profiling for fast estimated configurations.
- Online profiling through AIPerf for higher-accuracy measurements.
- Interactive WebUI support in current docs.
- Generates recommended tensor-parallel settings for prefill and decode engines.
- Produces performance interpolation data for Planner and generated DynamoGraphDeployment manifests.

### NVIDIA context
Profiler is the measurement and configuration-discovery layer inside [[NVIDIA-Dynamo]]. It feeds [[Dynamo-Planner]], informs [[Dynamo-Disaggregated-Serving]] layouts, pairs with [[NVIDIA-AIPerf]] for online benchmarking, and supports backend choices such as [[TensorRT-LLM]] and [[vLLM]].

## Connections
- [[NVIDIA-Dynamo]] - umbrella serving framework containing Profiler.
- [[Dynamo-Planner]] - consumes profiling data for SLA-aware autoscaling.
- [[Dynamo-Disaggregated-Serving]] - profiling recommends prefill/decode deployment settings.
- [[Dynamo-KV-Cache-Aware-Routing]] and [[Dynamo-KV-Block-Manager]] - routing and KV-cache behavior affect measured serving performance.
- [[NVIDIA-AIPerf]] - online profiling and benchmarking tool used in the Dynamo profiling flow.
- [[TensorRT-LLM]] and [[vLLM]] - supported backend families for profiling.
- [[NVIDIA-Grove]] - Kubernetes deployment layer that can apply generated multi-component configurations.

## Source Excerpts
- NVIDIA docs describe Dynamo Profiler as an automated performance analysis tool for optimizing deployment configurations.
- Current docs list online AIPerf profiling and offline AI Configurator profiling methods.

## Resources
- [Dynamo Profiler](https://docs.nvidia.com/dynamo/latest/components/profiler)
- [Dynamo Benchmarking](https://docs.nvidia.com/dynamo/latest/user-guides/benchmarking)
