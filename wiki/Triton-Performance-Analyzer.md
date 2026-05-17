# Triton Performance Analyzer

**Type:** Tool
**Tags:** NVIDIA, Triton, Performance Analyzer, benchmarking, inference, latency, throughput, model serving
**Related:** [[Triton-Inference-Server]], [[Triton-Model-Analyzer]], [[NVIDIA-AIPerf]], [[NVIDIA-GenAI-Perf]], [[TensorRT]], [[TensorRT-LLM]], [[NVIDIA-NIM]], [[NIM-for-LLM-Benchmarking-Guide]]
**Sources:** https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_analyzer/README.html, https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_benchmark/perf_analyzer.html
**Last Updated:** 2026-04-29

## Summary
Triton Performance Analyzer is NVIDIA's Triton CLI for measuring and optimizing inference performance of models served through [[Triton-Inference-Server]]. It helps teams test how latency and throughput change as they vary batching, request load, model configuration, and deployment strategies.

## Detail

### Purpose
Triton users need a repeatable way to measure serving behavior while tuning model configuration, batching, and request shape. Performance Analyzer applies load to an inference server, measures response behavior, and helps identify the throughput-latency tradeoffs for a given model and hardware target.

### Current scope
- Concurrency mode, request-rate mode, and custom-interval mode for load generation.
- Time-window and count-window measurement modes for stabilization.
- Support for standard models plus sequence, ensemble, and decoupled models.
- Auto-generated or file-specified input data and optional output verification.
- Triton HTTP/gRPC endpoint benchmarking.
- Installation and execution through Triton SDK containers or built tooling.

### NVIDIA context
Performance Analyzer is the Triton-native performance tool for general model serving. For generative AI endpoints and OpenAI-compatible LLM services, use [[NVIDIA-AIPerf]] as the current forward path; [[NVIDIA-GenAI-Perf]] remains a legacy/phased-out companion tool.

## Connections
- [[Triton-Inference-Server]] - primary server measured by Performance Analyzer.
- [[Triton-Model-Analyzer]] - builds on performance measurements to search Triton model configurations and generate reports.
- [[NVIDIA-AIPerf]] - current generative AI benchmark tool for OpenAI-compatible endpoints.
- [[NVIDIA-GenAI-Perf]] - older generative AI benchmarking tool in the Triton performance family.
- [[TensorRT]] - optimized TensorRT models served through Triton can be benchmarked with Performance Analyzer.
- [[TensorRT-LLM]] - LLM serving may use AIPerf/GenAI-Perf for generative metrics and Triton tooling for server-side tuning.
- [[NVIDIA-NIM]] and [[NIM-for-LLM-Benchmarking-Guide]] - NIM services use related benchmark concepts for latency and throughput measurement.

## Source Excerpts
- NVIDIA docs describe Performance Analyzer as a CLI that helps optimize Triton model inference performance.
- Current docs list concurrency, request-rate, and custom-interval load modes.

## Resources
- [Triton Performance Analyzer](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_analyzer/README.html)
- [Performance Analyzer Section](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_benchmark/perf_analyzer.html)
