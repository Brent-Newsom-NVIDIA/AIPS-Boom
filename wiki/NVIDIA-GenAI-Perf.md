# NVIDIA GenAI-Perf

**Type:** Tool
**Tags:** NVIDIA, GenAI-Perf, benchmarking, LLM inference, latency, throughput, Triton, OpenAI-compatible, legacy
**Related:** [[NVIDIA-AIPerf]], [[NIM-for-LLM-Benchmarking-Guide]], [[NVIDIA-NIM]], [[Triton-Inference-Server]], [[Triton-Performance-Analyzer]], [[TensorRT-LLM]], [[vLLM]], [[NVIDIA-Dynamo]]
**Sources:** https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_analyzer/genai-perf/README.html, https://docs.nvidia.com/aiperf/getting-started/migrating-from-gen-ai-perf, https://docs.nvidia.com/nim/benchmarking/llm/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA GenAI-Perf is NVIDIA's earlier command-line tool for measuring generative AI inference latency and throughput. The current Triton docs state that GenAI-Perf is being phased out and point users to [[NVIDIA-AIPerf]] for new benchmarking work. GenAI-Perf remains useful as a queryable legacy/current-docs topic because older NIM, Triton, TensorRT-LLM, and OpenAI-compatible benchmarking workflows still reference it.

## Detail

### Purpose
GenAI-Perf was built to profile generative AI endpoints rather than only fixed-shape tensor models. It sends benchmark traffic to a running inference server and reports LLM-specific metrics so teams can compare model serving configurations.

### Current scope
- Benchmarks large language models, multimodal language models, embedding models, ranking models, and multiple LoRA adapter scenarios.
- Supports synthetic prompts and file-backed datasets.
- Generates concurrent-request and request-rate style load.
- Reports metrics such as time to first token, time to second token, inter-token latency, request latency, output token throughput, and request throughput.
- Exports CSV and JSON artifacts for later analysis.
- Can target Triton/TensorRT-LLM style services and OpenAI-compatible endpoints.
- Current docs warn that it is being phased out; [[NVIDIA-AIPerf]] is the current forward-looking tool.

### Migration note
AIPerf is intended to cover currently supported GenAI-Perf workflows while improving support for reasoning-capable models. AIPerf separates TTFT and TTFO so benchmarkers can compare older GenAI-Perf TTFT results with newer reasoning-token-aware measurements.

## Connections
- [[NVIDIA-AIPerf]] - successor path for new generative AI inference benchmarking.
- [[NIM-for-LLM-Benchmarking-Guide]] - earlier NIM benchmark guidance referenced GenAI-Perf and now includes AIPerf-style workflows.
- [[NVIDIA-NIM]] - NIM LLM endpoints were a major benchmark target for GenAI-Perf.
- [[Triton-Inference-Server]] - GenAI-Perf is documented under the Triton performance benchmarking and tuning section.
- [[Triton-Performance-Analyzer]] - GenAI-Perf shares the broader Triton performance-tooling context.
- [[TensorRT-LLM]] - GenAI-Perf examples include TensorRT-LLM-backed Triton serving.
- [[vLLM]] - OpenAI-compatible serving engines can be benchmarked with GenAI-Perf or AIPerf.
- [[NVIDIA-Dynamo]] - large-scale inference serving still needs the latency/throughput measurements represented by GenAI-Perf-era workflows.

## Source Excerpts
- Current Triton docs state that GenAI-Perf is being phased out and direct new benchmarking users to AIPerf.
- NVIDIA docs describe GenAI-Perf as a command-line tool for generative AI throughput and latency measurement.

## Resources
- [GenAI-Perf Current Triton Docs](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_analyzer/genai-perf/README.html)
- [AIPerf Migration Guide](https://docs.nvidia.com/aiperf/getting-started/migrating-from-gen-ai-perf)
