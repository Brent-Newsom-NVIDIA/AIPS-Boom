# NVIDIA AIPerf

**Type:** Tool
**Tags:** NVIDIA, AIPerf, benchmarking, LLM inference, performance, latency, throughput, OpenAI-compatible, telemetry
**Related:** [[NVIDIA-GenAI-Perf]], [[NIM-for-LLM-Benchmarking-Guide]], [[NVIDIA-NIM]], [[NVIDIA-Dynamo]], [[Dynamo-Profiler]], [[Dynamo-Planner]], [[Dynamo-Disaggregated-Serving]], [[Triton-Inference-Server]], [[TensorRT-LLM]], [[vLLM]], [[NIXL]], [[NVIDIA-DCGM]], [[Triton-Performance-Analyzer]]
**Sources:** https://docs.nvidia.com/aiperf/welcome-to-ai-perf-documentation, https://docs.nvidia.com/aiperf/getting-started/profiling-with-ai-perf, https://docs.nvidia.com/aiperf/getting-started/migrating-from-gen-ai-perf, https://docs.nvidia.com/aiperf/architecture-internals/architecture-of-ai-perf, https://docs.nvidia.com/nim/benchmarking/llm/latest/step-by-step.html, https://docs.nvidia.com/dynamo/latest/user-guides/benchmarking, https://docs.nvidia.com/dynamo/latest/components/profiler
**Last Updated:** 2026-04-29

## Summary
NVIDIA AIPerf is NVIDIA's current client-side and distributed benchmarking tool for measuring AI inference performance. Current docs position it as the forward path for new generative AI benchmarking, including migration from [[NVIDIA-GenAI-Perf]]. It generates load against inference endpoints, measures latency and throughput, exports benchmark artifacts, and can collect GPU and server metrics while testing OpenAI-compatible LLM services.

## Detail

### Purpose
Production LLM and multimodal inference systems need repeatable measurements for latency budgets, throughput limits, concurrency, request-rate behavior, reasoning-token behavior, and resource utilization. AIPerf gives NVIDIA users a benchmark tool that can drive realistic traffic against NIM, vLLM, Dynamo, Triton-adjacent, or custom HTTP inference endpoints and then summarize the results.

### Current scope
- OpenAI-compatible LLM benchmarking for chat/completions-style endpoints.
- Metrics such as time to first token (TTFT), time to first output token (TTFO), inter-token latency (ITL), request latency, output token throughput, tokens per second, and requests per second.
- More complete handling of reasoning-capable models than GenAI-Perf, including reasoning token metrics and TTFO for comparisons with older GenAI-Perf TTFT results.
- Distributed architecture with control, data, and analytic planes.
- Worker-based request execution with credit-controlled load scheduling.
- Dataset handling for JSONL, CSV, synthetic data, trace replay, and conversation-style workloads.
- Result export to structured artifacts that can be analyzed or plotted after a sweep.
- Optional GPU telemetry through DCGM Exporter or PyNVML and server/application metrics from Prometheus-compatible endpoints.

### NVIDIA context
AIPerf sits in the measurement layer of the NVIDIA inference stack. It is the current benchmarking companion for [[NIM-for-LLM-Benchmarking-Guide]], [[NVIDIA-NIM]], [[NVIDIA-Dynamo]], [[TensorRT-LLM]], [[vLLM]], [[NIXL]], and [[Triton-Inference-Server]] deployments. For new work, prefer AIPerf over [[NVIDIA-GenAI-Perf]] unless a workflow is pinned to legacy GenAI-Perf commands.

## Connections
- [[NVIDIA-GenAI-Perf]] - older generative AI benchmark tool; current docs describe AIPerf migration paths.
- [[NIM-for-LLM-Benchmarking-Guide]] - NIM docs now use AIPerf for LLM benchmarking walkthroughs.
- [[NVIDIA-NIM]] - OpenAI-compatible NIM services are common AIPerf benchmark targets.
- [[NVIDIA-Dynamo]] - scale-out inference systems need AIPerf-style load generation and telemetry.
- [[Dynamo-Profiler]] - uses online AIPerf profiling for high-accuracy deployment measurements.
- [[Dynamo-Planner]] - Planner behavior can be validated with AIPerf latency and throughput results.
- [[Dynamo-Disaggregated-Serving]] - AIPerf measures whether prefill/decode split improves user-visible service metrics.
- [[Triton-Inference-Server]] - AIPerf complements Triton benchmarking tools for generative AI services.
- [[TensorRT-LLM]] - optimized LLM runtime whose served endpoints can be benchmarked with AIPerf.
- [[vLLM]] - current AIPerf examples include vLLM-style OpenAI-compatible serving.
- [[NIXL]] - disaggregated serving and KV-cache transfer raise latency/throughput questions AIPerf can measure.
- [[NVIDIA-DCGM]] - DCGM Exporter is one GPU telemetry source for AIPerf benchmark runs.
- [[Triton-Performance-Analyzer]] - lower-level Triton performance CLI for non-generative and Triton-native model tests.

## Source Excerpts
- NVIDIA AIPerf docs describe it as a package for AI model performance testing.
- The architecture docs describe a distributed benchmark tool that generates load, collects metrics, and analyzes throughput, latency, and resource utilization.
- The NIM benchmarking docs identify AIPerf as a client-side generative AI benchmarking tool for OpenAI-compatible LLM services.

## Resources
- [AIPerf Documentation](https://docs.nvidia.com/aiperf/welcome-to-ai-perf-documentation)
- [Profiling with AIPerf](https://docs.nvidia.com/aiperf/getting-started/profiling-with-ai-perf)
- [Migrating from GenAI-Perf](https://docs.nvidia.com/aiperf/getting-started/migrating-from-gen-ai-perf)
- [NIM LLM AIPerf Benchmark Walkthrough](https://docs.nvidia.com/nim/benchmarking/llm/latest/step-by-step.html)
