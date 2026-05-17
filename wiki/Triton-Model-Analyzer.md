# Triton Model Analyzer

**Type:** Tool
**Tags:** NVIDIA, Triton, Model Analyzer, benchmarking, profiling, configuration search, inference, reports
**Related:** [[Triton-Inference-Server]], [[Triton-Performance-Analyzer]], [[Triton-Model-Navigator]], [[TensorRT]], [[TensorRT-LLM]], [[NVIDIA-AIPerf]], [[NVIDIA-NIM]], [[NIM-for-LLM-Benchmarking-Guide]]
**Sources:** https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/model_analyzer/README.html, https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_benchmark/model_analyzer.html
**Last Updated:** 2026-04-29

## Summary
Triton Model Analyzer is NVIDIA's CLI tool for finding better [[Triton-Inference-Server]] model configurations on a given hardware target. It profiles models, explores configuration spaces, and generates reports that show performance, compute, and memory tradeoffs.

## Detail

### Purpose
Serving performance often depends on Triton model configuration, batching settings, instance groups, GPU memory limits, and whether models share the same GPU. Model Analyzer helps users search these options instead of tuning them manually.

### Current scope
- Profiles single models, multi-model scenarios, ensemble models, Business Logic Scripting (BLS) models, and LLM-style deployments.
- Search modes include quick search, Optuna search, automatic brute search, and manual brute search.
- Explores max batch size, dynamic batching, instance groups, and other model configuration settings.
- Generates detailed and summary reports for latency, throughput, GPU utilization, and memory tradeoffs.
- Supports quality-of-service constraints such as latency budgets.
- Supports checkpointing and Kubernetes deployment workflows in the current docs.

### NVIDIA context
Model Analyzer belongs to the Triton tuning layer. It sits above [[Triton-Performance-Analyzer]] measurements and below production serving choices such as [[NVIDIA-NIM]], [[TensorRT-LLM]], and [[NVIDIA-Dynamo]]. It should be used when the question is "which Triton model configuration should I deploy?" rather than "how fast is this OpenAI-compatible LLM endpoint under traffic?", which is closer to [[NVIDIA-AIPerf]].

## Connections
- [[Triton-Inference-Server]] - server whose model configurations Model Analyzer searches.
- [[Triton-Performance-Analyzer]] - lower-level benchmark tool used in the Triton performance workflow.
- [[Triton-Model-Navigator]] - adjacent tool for export, conversion, correctness testing, profiling, and deployment preparation.
- [[TensorRT]] - TensorRT engines served by Triton are common Model Analyzer targets.
- [[TensorRT-LLM]] - LLM serving configurations can be profiled in the broader Triton tooling stack.
- [[NVIDIA-AIPerf]] - current tool for client-side generative AI benchmarking.
- [[NVIDIA-NIM]] - production microservices benefit from the same latency-throughput and resource-efficiency analysis.
- [[NIM-for-LLM-Benchmarking-Guide]] - NIM guide covering LLM latency and throughput measurement.

## Source Excerpts
- NVIDIA docs describe Model Analyzer as a CLI for finding more optimal Triton configurations on a given hardware target.
- Current docs list single, ensemble, BLS, multi-model, and LLM model types.

## Resources
- [Triton Model Analyzer](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/model_analyzer/README.html)
- [Model Analyzer Section](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_benchmark/model_analyzer.html)
