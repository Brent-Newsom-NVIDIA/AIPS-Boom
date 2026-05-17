# NeMo Evaluator

**Type:** Microservice
**Tags:** NVIDIA, NeMo Platform, evaluation, benchmarks, metrics, LLM-as-a-judge, RAG evaluation, agent evaluation
**Related:** [[NeMo-Platform]], [[NVIDIA-NeMo]], [[Nemotron-Training-Recipes]], [[NeMo-Customizer]], [[NeMo-Data-Designer]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Megatron-Bridge]], [[NeMo-Export-Deploy]], [[NeMo-Retriever]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-Data-Flywheel-Blueprint]], [[NVIDIA-NIM]], [[Nemotron]], [[NeMo-Auditor]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nemo/microservices/latest/evaluator/index.html, https://docs.nvidia.com/nemo/automodel/latest/index.html, https://docs.nvidia.com/nemo/rl/latest/about/overview.html, https://docs.nvidia.com/nemo/megatron-bridge/latest/index.html, https://docs.nvidia.com/nemo/export-deploy/latest/index.html, https://docs.nvidia.com/nemotron/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NeMo Evaluator is the NeMo Platform service for evaluating LLMs, RAG pipelines, retrievers, and AI agents at enterprise scale. Current NVIDIA docs describe automated workflows for industry benchmarks, LLM-as-a-judge scoring, RAG metrics, retriever metrics, agentic metrics, live evaluation, asynchronous evaluation jobs, offline scoring, and online generation-plus-scoring.

## Detail

### Purpose
AI systems need repeatable measurement before deployment and after each model, prompt, data, or tool change. NeMo Evaluator provides reusable metrics, benchmark definitions, job execution, and result artifacts so teams can compare candidates and run regression tests without depending only on ad hoc manual review.

### Current scope
- Metrics as reusable scoring logic for custom datasets and task criteria.
- Benchmarks as evaluation suites combining datasets and metrics.
- Live synchronous evaluation for fast iteration and asynchronous jobs for production-scale testing.
- Offline evaluation of existing outputs and online evaluation that generates outputs before scoring.
- LLM-as-a-judge, RAG, retriever, agentic, similarity, and custom metric workflows.
- Industry, agentic, and custom benchmark job management.

### NVIDIA context
Evaluator is the measurement layer for [[NeMo-Customizer]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-AI-Q-Blueprint]], and [[NVIDIA-Data-Flywheel-Blueprint]]. It is especially important in the wiki graph because most production AI questions eventually become quality, safety, latency, or regression questions, not just deployment questions.
It is also the natural regression layer for models trained through [[NeMo-AutoModel]], post-trained through [[NeMo-RL]], converted or trained with [[NeMo-Megatron-Bridge]], and exported with [[NeMo-Export-Deploy]].

## Connections
- [[NeMo-Platform]] - parent platform for evaluation APIs, jobs, and results.
- [[NVIDIA-NeMo]] - broader model and agent lifecycle suite.
- [[Nemotron-Training-Recipes]] - recipe-produced Nano3 and Super3 checkpoints need benchmark and regression evaluation before deployment.
- [[NeMo-Customizer]] - fine-tuned models should be evaluated before deployment.
- [[NeMo-Data-Designer]] - generated datasets can become evaluation inputs.
- [[NeMo-AutoModel]], [[NeMo-RL]], and [[NeMo-Megatron-Bridge]] - framework tools whose outputs need benchmark and regression evaluation.
- [[NeMo-Export-Deploy]] - deployment handoff should follow evaluation gates.
- [[NeMo-Retriever]] and [[NVIDIA-RAG-Blueprint]] - RAG and retriever metrics evaluate retrieval and grounded generation.
- [[NVIDIA-AI-Q-Blueprint]] - research-agent workflows need citation, retrieval, and answer-quality evaluation.
- [[NVIDIA-Data-Flywheel-Blueprint]] - continuous optimization loop depends on evaluation to compare model candidates.
- [[NVIDIA-NIM]] and [[Nemotron]] - model endpoints and NVIDIA model families commonly evaluated.
- [[NeMo-Auditor]] - safety auditing complements evaluator quality/benchmark workflows.
- [[NVIDIA-AI-Enterprise]] - enterprise support context for NeMo Platform services.

## Source Excerpts
- NVIDIA docs describe NeMo Evaluator as evaluating LLMs, RAG pipelines, and AI agents at enterprise scale.
- Current docs identify metrics and benchmarks as the two core evaluation primitives.

## Resources
- [NeMo Evaluator About Evaluating](https://docs.nvidia.com/nemo/microservices/latest/evaluator/index.html)
