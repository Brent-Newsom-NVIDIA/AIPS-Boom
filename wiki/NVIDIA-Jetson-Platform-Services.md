# NVIDIA Jetson Platform Services

**Type:** Platform
**Tags:** NVIDIA, Jetson Platform Services, JPS, edge AI, microservices, Jetson, video analytics, VLM, DeepStream, Metropolis
**Related:** [[NVIDIA-Jetson-Platform]], [[NVIDIA-JetPack-SDK]], [[NVIDIA-DeepStream]], [[NVIDIA-Metropolis]], [[NVIDIA-Jetson-Linux]], [[NVIDIA-Jetson-Thor]], [[NVIDIA-NIM]]
**Sources:** https://docs.nvidia.com/jetson/jps/, https://docs.nvidia.com/jetson/jps/moj-overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Jetson Platform Services (JPS) is a Jetson edge AI services layer for developing, deploying, and managing modular applications on Jetson. It packages AI services, foundation services, APIs, reference workflows, and deployment patterns around video analytics, video understanding, VLMs, zero-shot detection, DeepStream perception, storage, message buses, gateways, monitoring, and alerts. This page consolidates the JPS service family into one canonical topic rather than separate pages for each microservice.

## Detail

### Purpose
JPS helps developers productize Jetson edge AI systems by turning complex camera, video, AI, and system-management functions into modular services with APIs. It is designed for applications that need more than a single model: video ingestion, storage, analytics, alerts, promptable VLM services, object detection, metadata, mobile clients, and cloud/mobile reference integration.

### Key capabilities
- AI services for DeepStream perception, VLM inference, zero-shot detection, Grounding DINO, video summarization, and analytics.
- Foundation services such as Video Storage Toolkit, Redis/message bus, ingress/API gateway, monitoring, and deployment support.
- Containerized service architecture with REST APIs for service configuration and data access.
- Reference AI workflows showing how end-to-end applications can be assembled from Jetson services.
- Integration with [[NVIDIA-DeepStream]], Metropolis-style video analytics, Jetson Orin, and modern JetPack releases.

### Current support note
The JPS overview page describes the documented stack as based on JetPack 6.1 GA and supported on Jetson Orin variants. For Jetson Thor and JetPack 7.x deployments, verify the current JPS compatibility notes and release artifacts before assuming parity.

## Connections
- [[NVIDIA-Jetson-Platform]] - JPS is a service layer for Jetson edge AI applications.
- [[NVIDIA-JetPack-SDK]] - JPS depends on supported JetPack/Jetson software releases.
- [[NVIDIA-DeepStream]] - DeepStream perception services are a core JPS AI-service path.
- [[NVIDIA-Metropolis]] - JPS overlaps with Metropolis-style intelligent video analytics at the edge.
- [[NVIDIA-Jetson-Linux]] - underlying OS/BSP layer for Jetson service deployments.
- [[NVIDIA-Jetson-Thor]] - next-generation Jetson platform that should be checked for JPS compatibility as JetPack 7 evolves.
- [[NVIDIA-NIM]] - adjacent NVIDIA microservice packaging concept for model-serving workloads.

## Source Excerpts
- NVIDIA JPS docs describe a modular, extensible architecture for edge AI services on Jetson.
- The overview lists AI services for video analytics, VLMs, zero-shot detection, Grounding DINO, video summarization, and spatio-temporal analytics.
- The same docs list foundation services such as video storage, Redis, ingress/API gateway, monitoring, alerts, and deployment support.

## Resources
- [Jetson Platform Services Documentation](https://docs.nvidia.com/jetson/jps/)
- [JPS Overview](https://docs.nvidia.com/jetson/jps/moj-overview.html)
