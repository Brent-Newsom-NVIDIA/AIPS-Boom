# NVIDIA AI Enterprise Security

**Type:** White Paper
**Tags:** NVIDIA, AI Enterprise, security, containers, OSS, CVE, SDLC, NIM, supply chain
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Software-for-Regulated-Environments]], [[NVIDIA-AI-Factory-for-Government]], [[NVIDIA-AI-Enterprise-Lifecycle-Policy]], [[NVIDIA-NIM]], [[NVIDIA-NIM-Operator]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[NVIDIA-Run-ai]], [[NVIDIA-Base-Command-Manager]], [[NGC]], [[NVIDIA-NGC-Catalog]], [[NVIDIA-Attestation]]
**Sources:** https://docs.nvidia.com/ai-enterprise/planning-resource/ai-enterprise-security-white-paper/latest/introduction.html, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-enterprise-security-white-paper/latest/security-lifecycle.html, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-enterprise-security-white-paper/latest/nim-microservices.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Enterprise Security is NVIDIA's white paper on securing, maintaining, and delivering the AI Enterprise software stack. It focuses on open-source software curation, AI Enterprise application and infrastructure branches, container image security, security development lifecycle practices, NIM microservices, vulnerability patching, and government-ready software connections.

## Detail

### Purpose
AI Enterprise packages a large and fast-moving AI software stack. The security paper explains how NVIDIA manages open-source and proprietary components so enterprises can deploy supported AI services without individually owning every security and maintenance detail in the stack.

### Security themes
- Application software includes NIM microservices, AI/data science frameworks, libraries, SDKs, and containers for agentic AI, physical AI, and accelerated computing workloads.
- Infrastructure software includes drivers, Kubernetes operators, Run:ai, and Base Command Manager.
- Feature Branch, Production Branch, and Long-Term Support Branch models provide different balances of freshness, stability, and support.
- NVIDIA actively patches vulnerabilities and publishes updates through the AI Enterprise branch model.
- Container image security covers the development and delivery process, not only the packages inside a container.
- Government-ready software is tied to regulated and FedRAMP High-equivalent requirements.

### NVIDIA context
Use this page when a question asks how NVIDIA secures AI Enterprise software, containers, or NIM microservices. Use [[NVIDIA-AI-Software-for-Regulated-Environments]] for government-ready details and [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] for branch timing and support policy.

## Connections
- [[NVIDIA-AI-Enterprise]] - product stack being secured.
- [[NVIDIA-AI-Software-for-Regulated-Environments]] - regulated-environment companion white paper.
- [[NVIDIA-AI-Factory-for-Government]] - reference design that consumes government-ready AI Enterprise software.
- [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] - branch and support model referenced by the security paper.
- [[NVIDIA-NIM]] and [[NVIDIA-NIM-Operator]] - NIM microservices and lifecycle management are part of the security surface.
- [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[NVIDIA-Run-ai]], and [[NVIDIA-Base-Command-Manager]] - infrastructure software included in the security scope.
- [[NGC]] and [[NVIDIA-NGC-Catalog]] - software distribution path for containers and artifacts.
- [[NVIDIA-Attestation]] - adjacent trust and integrity layer for confidential AI infrastructure.

## Source Excerpts
- The security paper says NVIDIA AI Enterprise is built on open-source software curated, optimized, and supported by NVIDIA.
- It connects branch strategy, vulnerability patching, container security, NIM microservices, and government-ready software.

## Resources
- [NVIDIA AI Enterprise Security White Paper](https://docs.nvidia.com/ai-enterprise/planning-resource/ai-enterprise-security-white-paper/latest/introduction.html)
