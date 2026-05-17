# NVIDIA Video Search and Summarization Blueprint

**Type:** Platform
**Tags:** NVIDIA, AI Blueprint, VSS, video search, video summarization, vision agents, video analytics, Metropolis, DeepStream, Cosmos
**Related:** [[NVIDIA-AI-Blueprints]], [[NVIDIA-Metropolis]], [[NVIDIA-DeepStream]], [[Avathon]], [[Avathon-NVIDIA-VSS-Video-Intelligence]], [[NVIDIA-Cosmos]], [[NIM-for-Cosmos-Embed1]], [[NIM-for-Vision-Language-Models]], [[NVIDIA-AI-Data-Platform]], [[NeMo-Retriever]], [[NVIDIA-NIM]], [[Triton-Inference-Server]], [[TensorRT]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/vss/latest/, https://docs.nvidia.com/vss/latest/adding-workflows.html, https://docs.nvidia.com/vss/latest/vss-agent/VSS-Agent-Overview.html, https://avathon.com/press-release/avathon-advances-industrial-video-ai-with-nvidia-vss/
**Last Updated:** 2026-05-17

## Summary
NVIDIA Video Search and Summarization (VSS) Blueprint is NVIDIA's current blueprint for building vision agents and AI-powered video analytics applications. The latest VSS docs describe reference architectures with real-time vision microservices, VLMs, LLMs, video embeddings, downstream analytics, video search, long-video summarization, alert verification, and industry examples for smart city and warehouse operations.

## Detail

### Purpose
Video analytics systems need to process live or archived video, extract searchable visual features, reason over incidents, summarize long recordings, and answer user questions. VSS provides a NVIDIA-authored blueprint that composes real-time video intelligence, analytics microservices, middleware, and an agent layer into deployable workflows.

### Current scope
- Real-time video intelligence with object detection/tracking, real-time VLM captioning/anomaly detection, and real-time video embedding generation.
- Downstream analytics for behavior analytics, alert verification, message brokers, video IO/storage, Elasticsearch-backed incident records, and observability.
- Agent workflows for Q&A and report generation, alert verification, real-time alerts, natural-language video search, and long-video summarization.
- VSS Agent modes for production blueprint deployments through Video Analytics MCP and direct video analysis for developer profiles.
- Model adjacency to Nemotron reasoning/report generation, Cosmos VLMs for video understanding, [[NIM-for-Cosmos-Embed1]] for video-text embeddings, and [[NIM-for-Vision-Language-Models]] for visual reasoning.
- Industry-specific examples for smart city and warehouse operations without creating separate wiki pages for every sub-blueprint.
- ISV integration proof through [[Avathon-NVIDIA-VSS-Video-Intelligence]], where Avathon announced NVIDIA VSS integration for natural-language search, summarization, incident investigation, and safety-critical camera networks.

### NVIDIA context
VSS belongs in the wiki graph as the video/vision-agent blueprint that connects [[NVIDIA-Metropolis]], [[NVIDIA-DeepStream]], [[NVIDIA-Cosmos]], [[NVIDIA-AI-Data-Platform]], and [[NVIDIA-AI-Blueprints]]. It is broader than a single model or NIM because it defines an application architecture across video ingestion, analytics, storage, embeddings, agents, and deployment.

## Connections
- [[NVIDIA-AI-Blueprints]] - VSS is a durable NVIDIA-authored blueprint with a stable docs surface.
- [[NVIDIA-Metropolis]] and [[NVIDIA-DeepStream]] - VSS builds on NVIDIA intelligent video analytics and GPU video pipeline foundations.
- [[NVIDIA-Cosmos]] - current VSS docs use Cosmos VLMs and Cosmos embedding concepts for video understanding and retrieval.
- [[NIM-for-Cosmos-Embed1]] - video-text embeddings are central to semantic video search.
- [[NIM-for-Vision-Language-Models]] - VLM layer for video understanding, report generation, and alert verification.
- [[NVIDIA-AI-Data-Platform]] and [[NeMo-Retriever]] - enterprise data and retrieval context for video search and agentic Q&A.
- [[NVIDIA-NIM]] - VSS composes NVIDIA model endpoints and NIM-style services.
- [[Triton-Inference-Server]] and [[TensorRT]] - production inference serving and optimization layers for video analytics microservices.
- [[NVIDIA-Jetson-Platform]] - edge deployment context for video analytics and Metropolis-style workloads.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment/support context for production video AI stacks.
- [[Avathon]] and [[Avathon-NVIDIA-VSS-Video-Intelligence]] - retail/industrial ISV context for VSS-powered video intelligence.

## Source Excerpts
- NVIDIA docs describe VSS as reference architectures for building vision agents and AI-powered video analytics applications.
- Current VSS docs list video retrieval, VLM-based Q&A, alert verification, natural-language video search, and long-video summarization workflows.
- Avathon announced integration of NVIDIA VSS capabilities into its video intelligence platform for natural-language video search and summarization.

## Resources
- [NVIDIA VSS Documentation](https://docs.nvidia.com/vss/latest/)
- [VSS Agent Workflows](https://docs.nvidia.com/vss/latest/adding-workflows.html)
- [VSS Agent Overview](https://docs.nvidia.com/vss/latest/vss-agent/VSS-Agent-Overview.html)
- [Avathon Advances Industrial Video AI with NVIDIA VSS](https://avathon.com/press-release/avathon-advances-industrial-video-ai-with-nvidia-vss/)
