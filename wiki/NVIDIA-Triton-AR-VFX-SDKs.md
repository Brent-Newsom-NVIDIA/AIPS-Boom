# NVIDIA Triton for AR and VFX SDKs

**Type:** Guide
**Tags:** NVIDIA, Triton, AR SDK, VFX SDK, Maxine, server-side inference, media AI, gRPC
**Related:** [[Triton-Inference-Server]], [[NVIDIA-Augmented-Reality-SDK]], [[NVIDIA-Video-Effects-SDK]], [[NVIDIA-AI-for-Media-SDKs]], [[NVIDIA-Maxine]], [[NVIDIA-MIG]], [[NVIDIA-RTX]]
**Sources:** https://docs.nvidia.com/maxine/triton/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Triton for AR and VFX SDKs is NVIDIA's guide for deploying AR and Video Effects SDK features through Triton Inference Server. It targets server and microservice deployments where media AI features need batching, concurrent model execution, multi-stream processing, multi-GPU, and MIG support.

## Detail

### Purpose
Local AR/VFX SDK use is useful for client applications, but cloud media services need scalable server-side processing. The Triton-enabled SDK path moves AR/VFX feature execution into a Triton server while the SDK library communicates with the server over gRPC.

### Included feature areas
- Triton-enabled AR SDK features: face detection, facial landmark detection, eye contact, LipSync, and active speaker detection.
- Triton-enabled VFX SDK features: AI Green Screen, Background Blur, and Video Relighting.
- Server-side dynamic batching, concurrent model execution, multistream processing, multi-GPU, and MIG support.

### NVIDIA context
This page links the AI media SDK area back into [[Triton-Inference-Server]] rather than treating Maxine/AR/VFX as purely local SDKs.

## Connections
- [[Triton-Inference-Server]] - model serving platform used for AR/VFX server deployments.
- [[NVIDIA-Augmented-Reality-SDK]] - AR features supported through Triton-enabled paths.
- [[NVIDIA-Video-Effects-SDK]] - VFX features supported through Triton-enabled paths.
- [[NVIDIA-AI-for-Media-SDKs]] - current docs umbrella for the media SDK set.
- [[NVIDIA-Maxine]] - product/platform context for AI media effects.
- [[NVIDIA-MIG]] - Triton-enabled docs mention multi-GPU and MIG deployment support.
- [[NVIDIA-RTX]] - GPU acceleration context for media AI workloads.

## Source Excerpts
- NVIDIA's Triton AR/VFX guide describes dynamic batching, concurrent model execution, multistream processing, multi-GPU, and MIG support for server-side media AI features.

## Resources
- [NVIDIA Triton Inference Server Guide for AR and VFX SDKs](https://docs.nvidia.com/maxine/triton/latest/index.html)
