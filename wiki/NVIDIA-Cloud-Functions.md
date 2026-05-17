# NVIDIA Cloud Functions

**Type:** Platform
**Tags:** NVIDIA, Cloud Functions, serverless, inference, APIs, AI services
**Related:** [[NVIDIA-NIM]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-NGC-Catalog]], [[NVIDIA-Developer-Program]], [[NGC]]
**Sources:** https://docs.nvidia.com/cloud-functions/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Cloud Functions is NVIDIA's documentation surface for cloud-hosted function/API style AI services. It belongs near the hosted inference and API portion of the stack, especially [[NVIDIA-NIM]], build.nvidia.com APIs, and cloud-accessible NVIDIA services.

## Detail

### Purpose
Some NVIDIA AI services are consumed as hosted APIs rather than self-hosted containers. Cloud Functions provides documentation for that cloud/API delivery pattern and should be tracked separately from on-prem NIM deployment.

### Key capabilities
- Cloud API orientation for NVIDIA-hosted functions.
- Complements build.nvidia.com model and API experiences.
- Useful for application teams that want NVIDIA-hosted AI capabilities before self-hosting.
- Connects to broader hosted AI infrastructure such as [[NVIDIA-DGX-Cloud]].

### NVIDIA context
Cloud Functions should be treated as a deployment/consumption model in the wiki: the same NVIDIA model or AI capability may be available as a hosted API, a NIM microservice, or an NGC artifact.

## Connections
- [[NVIDIA-NIM]] - self-hosted and hosted inference paths sit next to Cloud Functions.
- [[NVIDIA-DGX-Cloud]] - cloud infrastructure option for NVIDIA AI workloads.
- [[NVIDIA-NGC-Catalog]] - source for containers, models, and artifacts.
- [[NVIDIA-AI-Enterprise]] - enterprise stack may use hosted and self-hosted deployment models.
- [[NVIDIA-Developer-Program]] - developers discover and consume NVIDIA APIs through developer portals.

## Source Excerpts
- NVIDIA Cloud Functions docs provide a public documentation entry point for NVIDIA cloud function/API services.
