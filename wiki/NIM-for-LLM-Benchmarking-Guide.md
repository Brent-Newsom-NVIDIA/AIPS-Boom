# NIM for LLM Benchmarking Guide

**Type:** Guide
**Tags:** NVIDIA, NIM, LLM, benchmarking, AIPerf, GenAI-Perf, latency, throughput, TTFT, ITL, TPS, RPS
**Related:** [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[NVIDIA-Run-ai]], [[NVIDIA-AIPerf]], [[NVIDIA-GenAI-Perf]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[Triton-Performance-Analyzer]], [[NVIDIA-Dynamo]], [[NIXL]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Enterprise-Reference-Architectures]], [[LLM-Inference-Quick-Start-Recipes]], [[Nemotron]]
**Sources:** https://docs.nvidia.com/nim/benchmarking/llm/latest/overview.html, https://docs.nvidia.com/nim/benchmarking/llm/latest/, https://docs.nvidia.com/nim/benchmarking/llm/latest/step-by-step.html, https://docs.nvidia.com/aiperf/welcome-to-ai-perf-documentation, https://docs.nvidia.com/aiperf/getting-started/migrating-from-gen-ai-perf, https://docs.nvidia.com/enterprise-reference-architectures/nim-llm-with-run-ai-and-vanilla-kubernetes.pdf
**Last Updated:** 2026-04-29

## Summary
NIM for LLM Benchmarking Guide is NVIDIA's current guide for measuring LLM inference latency and throughput for NIM-style deployments. It explains LLM serving stages, benchmark metrics, load parameters, and [[NVIDIA-AIPerf]] workflows for measuring OpenAI-compatible LLM services while preserving older [[NVIDIA-GenAI-Perf]] context.

## Detail

### Purpose
LLM applications need cost-efficient serving that stays responsive under realistic traffic. The benchmarking guide helps teams measure whether a deployment can meet latency, throughput, and concurrency requirements before production rollout.

### Current scope
- Explains the queuing, prefill, and generation phases of LLM inference.
- Defines core metrics such as Time to First Token (TTFT), end-to-end latency, inter-token latency (ITL), tokens per second (TPS), and requests per second (RPS).
- Discusses load-control parameters such as concurrency, request rate, input sequence length, output sequence length, and streaming behavior.
- Compares general benchmarking tools such as Locust/K6 with LLM-specialized tooling such as NVIDIA AIPerf, GenAI-Perf, and LLMPerf.
- Provides step-by-step guidance for benchmarking an OpenAI-compatible Llama-3 NIM inference service.
- Includes guidance for benchmarking LoRA and multi-LoRA deployments.
- The Enterprise RA Run:ai paper applies the same latency/throughput mindset to sizing concurrent users for NIM LLMs on full GPUs, fractional GPUs, and simultaneous multi-model deployments.

### NVIDIA context
This guide is not a model NIM. It is the performance-measurement companion for [[NIM-for-Large-Language-Models]], [[NVIDIA-AIPerf]], [[TensorRT-LLM]], [[Triton-Inference-Server]], and larger-scale serving layers such as [[NVIDIA-Dynamo]].

## Connections
- [[NIM-for-Large-Language-Models]] - primary LLM NIM deployment surface being benchmarked.
- [[NVIDIA-NIM]] - umbrella microservice platform for model serving.
- [[NVIDIA-Run-ai]] - Enterprise RA sizing paper uses Run:ai to test full-GPU, fractional-GPU, and multi-NIM scale behavior.
- [[NVIDIA-AIPerf]] - current NVIDIA client-side generative AI benchmarking tool used by the step-by-step guide.
- [[NVIDIA-GenAI-Perf]] - older benchmarking tool now represented mainly for migration and legacy workflow lookup.
- [[TensorRT-LLM]] and [[Triton-Inference-Server]] - inference/serving stack measured by AIPerf and Triton benchmarking workflows.
- [[Triton-Performance-Analyzer]] - Triton-native benchmark tool adjacent to NIM LLM measurement concepts.
- [[NVIDIA-Dynamo]] and [[NIXL]] - scale-out/disaggregated serving context where latency-throughput benchmarking becomes critical.
- [[NVIDIA-AI-Enterprise]] - production support context for NIM deployments.
- [[NVIDIA-Enterprise-Reference-Architectures]] - source family for the NIM LLM with Run:ai deployment, scale, and sizing guide.
- [[LLM-Inference-Quick-Start-Recipes]] - hands-on inference recipes adjacent to benchmarking and deployment validation.
- [[Nemotron]] - NVIDIA LLM family often served through NIM and benchmarked in enterprise deployments.

## Source Excerpts
- NVIDIA docs describe the guide as covering important LLM inference latency and throughput metrics.
- The current docs use AIPerf to benchmark OpenAI-compatible LLM inference services and plot latency-throughput curves.
- The NIM LLM with Run:ai Enterprise RA paper sizes H100 NVL examples against concurrent users, throughput, and TTFT targets.

## Resources
- [NIM LLM Benchmarking Guide](https://docs.nvidia.com/nim/benchmarking/llm/latest/overview.html)
- [NIM LLM Benchmarking Index](https://docs.nvidia.com/nim/benchmarking/llm/latest/)
- [Using AIPerf to Benchmark](https://docs.nvidia.com/nim/benchmarking/llm/latest/step-by-step.html)
- [NIM LLM with Run:ai Enterprise RA PDF](https://docs.nvidia.com/enterprise-reference-architectures/nim-llm-with-run-ai-and-vanilla-kubernetes.pdf)
