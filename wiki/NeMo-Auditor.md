# NeMo Auditor

**Type:** Microservice
**Tags:** NVIDIA, NeMo Platform, model safety, auditing, vulnerability probing, LLM safety, early access
**Related:** [[NeMo-Platform]], [[NVIDIA-NeMo]], [[NeMo-Guardrails]], [[NVIDIA-NemoGuard-NIMs]], [[NeMo-Evaluator]], [[NeMo-Customizer]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[NVIDIA-NemoGuard-JailbreakDetect-NIM]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nemo/microservices/latest/audit/index.html
**Last Updated:** 2026-04-29

## Summary
NeMo Auditor is the NeMo Platform early-access service for auditing LLMs by running prompt-based audit jobs that probe models for safety vulnerabilities. Current NVIDIA docs describe audit targets, audit configurations, audit jobs, job logs, results review, and comparisons between base and fine-tuned models.

## Detail

### Purpose
Before deploying or updating a model, teams need a repeatable way to probe for unsafe or vulnerable behavior. NeMo Auditor provides a managed audit workflow so a base model or fine-tuned model can be tested with configured probes, tracked as jobs, and compared over time.

### Current scope
- Early-access availability with limited support and possible API changes.
- Audit targets for base models, NVIDIA-hosted NIM endpoints, OpenAI-compatible endpoints, or fine-tuned variants.
- Audit configurations that define probes and plugins.
- Audit jobs with status, logs, and result review.
- Comparison-oriented workflow: audit a base model, fine-tune or adjust it, then audit the new target and compare results.

### NVIDIA context
Auditor complements [[NeMo-Guardrails]] and [[NVIDIA-NemoGuard-NIMs]]. Auditor probes models to identify safety issues, while guardrails and NemoGuard NIMs help enforce real-time checks and policies around deployed applications.

## Connections
- [[NeMo-Platform]] - parent platform for Auditor targets, configs, jobs, and results.
- [[NVIDIA-NeMo]] - broader model and agent lifecycle suite.
- [[NeMo-Guardrails]] - real-time policy and protection layer adjacent to audit findings.
- [[NVIDIA-NemoGuard-NIMs]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], and [[NVIDIA-NemoGuard-JailbreakDetect-NIM]] - guardrail NIMs that can mitigate safety issues found during auditing.
- [[NeMo-Evaluator]] - quality and benchmark evaluation complements safety auditing.
- [[NeMo-Customizer]] - fine-tuned models can be audited before deployment.
- [[NVIDIA-NIM]] and [[NIM-for-Large-Language-Models]] - model endpoints and LLM NIMs can be audit targets.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment/support context for NeMo Platform services.

## Source Excerpts
- NVIDIA docs state that NeMo Auditor is early access and used to probe LLMs for vulnerabilities.
- Current docs describe a workflow that creates targets, creates configurations, runs audit jobs, and reviews results.

## Resources
- [NeMo Auditor About Auditing Models](https://docs.nvidia.com/nemo/microservices/latest/audit/index.html)
