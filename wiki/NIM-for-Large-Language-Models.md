# NIM for Large Language Models

**Type:** Platform
**Tags:** NVIDIA, NIM, LLM, generative AI, inference, vLLM, OpenAI-compatible API, Anthropic-compatible API, Kubernetes, LoRA, model serving
**Related:** [[NVIDIA-NIM]], [[NIM-for-LLM-Benchmarking-Guide]], [[NVIDIA-NIM-Operator]], [[NVIDIA-NIM-on-GKE]], [[NVIDIA-NIM-on-WSL2]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[NVIDIA-Run-ai]], [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-NemoGuard-NIMs]], [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]], [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]], [[NVIDIA-NemoGuard-JailbreakDetect-NIM]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[NVIDIA-Dynamo]], [[NVIDIA-CMX]], [[NIXL]], [[Nemotron]], [[NVIDIA-AI-Enterprise]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/overview.html; https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/nim-offerings.html; https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/release-notes.html; https://docs.nvidia.com/nim/large-language-models/latest/deployment/model-profiles-and-selection.html; https://docs.nvidia.com/nim/large-language-models/latest/day-0/index.html; https://docs.nvidia.com/nim/large-language-models/latest/day-0/support-matrix-day-0.html; https://docs.nvidia.com/nim/large-language-models/latest/day-0/get-started-nemotron-content-safety-reasoning-4b.html; https://docs.nvidia.com/nim/large-language-models/latest/advanced-use-cases/tool-calling-and-mcp.html; https://docs.nvidia.com/nim/large-language-models/latest/advanced-use-cases/custom-logits.html; https://docs.nvidia.com/nim/large-language-models/latest/advanced-use-cases/prompt-embeds.html; https://docs.nvidia.com/nim/large-language-models/latest/deployment/kubernetes-deployment/nim-operator-deployment.html; https://docs.nvidia.com/nim/benchmarking/llm/latest/overview.html; https://docs.nvidia.com/nim/llama-3-1-nemotron-safety-guard-8b/latest/index.html; https://docs.nvidia.com/enterprise-reference-architectures/nim-llm-with-run-ai-and-vanilla-kubernetes.pdf; https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/deploy-ai-workloads-nim-operator.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM for Large Language Models (NIM LLM) is the NIM product family for production LLM serving. Current 2.0.3 docs describe it as a production-ready way to run large language models with NVIDIA inference microservices, validated containers, curated weights, enterprise lifecycle guarantees, OpenAI-compatible and Anthropic-compatible APIs, Kubernetes deployment paths, LoRA support, tool calling/MCP integration, custom logits processing, prompt embeddings, observability, and model-free or model-specific serving options.

## Detail
NIM LLM is the first page to use when a question asks how NVIDIA packages LLMs for production inference. It is more specific than the umbrella [[NVIDIA-NIM]] page and more deployment-focused than [[TensorRT-LLM]]. Current docs describe three offerings: NIM Day 0 for fast access to newly released models, NIM Turbo for validated high-performance serving of top models, and NIM Certified for long-lived enterprise production packaging with CVE patching, OSRB compliance, security updates, FedRAMP-ready branches, and AI Enterprise support.

The current architecture uses a NIM orchestration layer, a profile/model-management layer, and an inference engine. The docs identify vLLM as the core engine for current NIM LLM 2.x and explain that version 2.0 shifted toward a one-container, one-backend philosophy for predictable behavior and closer upstream alignment. Release 2.0.3 updates the backend to vLLM 0.19.0, adds `/v1/messages` Anthropic Messages API support, improves AWS SageMaker compatibility, supports arbitrary UID with group ID 0 for container users, and improves GPU memory estimation. NIM LLM still belongs near [[TensorRT-LLM]] and [[Triton-Inference-Server]] because these are the adjacent NVIDIA inference optimization and serving layers across the broader stack.

Deployment coverage includes local Docker, Helm/Kubernetes, KServe, OpenShift, Run:ai, cloud providers, air-gapped environments, multi-node deployments, vGPU deployments, and [[NVIDIA-NIM-Operator]]. The Enterprise RA Run:ai sizing paper adds a concrete vanilla Kubernetes pattern for LLM NIMs on NVIDIA AI Enterprise software: GPU Operator, Network Operator, NIM Operator, Run:ai projects, NGC credentials, persistent model cache storage, and inference workloads that can use full or fractional GPUs. [[Red-Hat-AI-Factory-with-NVIDIA]] adds the OpenShift-specific path: LLM NIM with Helm, NIM Operator `NIMCache`/`NIMService`, KServe, OpenShift AI labels, and Gen AI Studio/Playground validation. Advanced features include LoRA, tool calling and MCP integration, custom logits processing, prompt embeddings, model signature verification, logging/observability, model-free NIM, model-specific NIMs, and support matrices for certified and Day 0 NIMs.

Model profile selection is now a central query point: model-specific containers ship manifests, model-free containers generate manifests at runtime, and profile names follow the `vllm-<precision>-tp<N>-pp1[-lora]` pattern across BF16, FP8, MXFP4, and NVFP4-style deployment profiles. NIM classifies profiles as compatible, low memory, or incompatible based on available GPU memory, estimated weights, KV cache, activations, and overhead.

For production readiness and capacity planning, the companion [[NIM-for-LLM-Benchmarking-Guide]] documents how to measure queuing, prefill, generation, time to first token, inter-token latency, requests per second, tokens per second, concurrency, request rate, and LoRA/multi-LoRA benchmark scenarios against OpenAI-compatible LLM NIM services.

Safety-oriented LLM NIMs, including [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]], and [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]], build on the NIM for LLMs serving surface but are used as guardrail classifiers rather than general chat models.

## Connections
- [[NVIDIA-NIM]] - NIM LLM is the LLM-specific NIM documentation surface.
- [[NIM-for-LLM-Benchmarking-Guide]] - benchmarking companion for latency, throughput, load, and LoRA/multi-LoRA measurement.
- [[NVIDIA-NIM-Operator]] - Kubernetes lifecycle management path for NIM LLM deployments.
- [[NVIDIA-NIM-on-GKE]] - Google Kubernetes Engine deployment path for NIM endpoints.
- [[NVIDIA-NIM-on-WSL2]] - local RTX Windows deployment path for certain downloadable NIMs.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide for LLM NIMs with Helm, NIM Operator, KServe, and Gen AI Studio.
- [[NVIDIA-Run-ai]] - Enterprise RA sizing paper uses Run:ai to schedule, scale, and pack NIM LLM workloads on Kubernetes.
- [[NVIDIA-Enterprise-Reference-Architectures]] - NIM LLM with Run:ai is a current Enterprise RA deployment/sizing paper.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - underlying software stack for NIM LLM deployments on vanilla Kubernetes.
- [[NVIDIA-NemoGuard-NIMs]] - safety NIM family built around LLM and classify endpoints for guardrails.
- [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]] - current Day 0 content-safety and dialogue-moderation classifier.
- [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]], and [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] - guardrail classifiers that use NIM LLM serving patterns.
- [[NVIDIA-NemoGuard-JailbreakDetect-NIM]] - jailbreak classifier companion with a classify endpoint.
- [[TensorRT-LLM]] - adjacent LLM optimization backend in the NVIDIA inference stack.
- [[Triton-Inference-Server]] - production serving layer adjacent to NIM and TensorRT-LLM workflows.
- [[NVIDIA-Dynamo]] - large-scale/disaggregated serving platform adjacent to NIM LLM.
- [[NVIDIA-CMX]] - context memory storage is relevant to long-context and multi-turn NIM inference.
- [[NIXL]] - KV-cache and tensor transfer library for disaggregated serving patterns.
- [[Nemotron]] - NVIDIA's LLM family appears in NIM and build.nvidia model paths.
- [[NVIDIA-AI-Enterprise]] - enterprise support and lifecycle guarantees for NIM Certified deployments.
- [[NGC]] - NIM containers and model assets are distributed through NVIDIA catalog/registry workflows.

## Source Excerpts
- "NIM Day 0"
- "NIM Turbo"
- "NIM Certified"
- Current release notes list NIM LLM 2.0.3 with vLLM 0.19.0, Anthropic Messages API support, AWS SageMaker compatibility, improved GPU memory estimation, and updated model-specific NIMs including `llama-3.3-nemotron-super-49b-v1.5`, `nemotron-3-nano`, and `nemotron-3-super-120b-a12b`.
- Current profile docs define the `vllm-<precision>-tp<N>-pp1[-lora]` naming convention and memory-aware profile selection behavior.
- Current Day 0 support docs list [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]] as a Day 0 safety model under NIM LLM 2.0.3.
- NVIDIA's NIM LLM with Run:ai Enterprise RA paper uses Llama 3.1 8B Instruct and DeepSeek R1 Distill Llama 8B examples on H100 NVL infrastructure for deployment and sizing methodology.

## Resources
- [NIM LLM Overview](https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/overview.html)
- [NIM LLM Release Notes](https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/release-notes.html)
- [Model Profiles and Selection](https://docs.nvidia.com/nim/large-language-models/latest/deployment/model-profiles-and-selection.html)
- [Support Matrix for Certified NIMs](https://docs.nvidia.com/nim/large-language-models/latest/reference/support-matrix.html)
- [Support Matrix for Day 0 NIMs](https://docs.nvidia.com/nim/large-language-models/latest/day-0/support-matrix-day-0.html)
