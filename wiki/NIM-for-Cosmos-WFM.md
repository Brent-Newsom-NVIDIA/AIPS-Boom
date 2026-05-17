# NIM for Cosmos WFM

**Type:** Microservice
**Tags:** NVIDIA, NIM, Cosmos, world foundation models, physical AI, video generation, synthetic data, robotics, autonomous vehicles
**Related:** [[NVIDIA-Cosmos]], [[NIM-for-Cosmos-Reason]], [[NIM-for-Cosmos-Embed1]], [[NIM-for-Vision-Language-Models]], [[NIM-for-Visual-Generative-AI]], [[NVIDIA-NIM]], [[NVIDIA-Cosmos-Curator-LHA]], [[NVIDIA-Omniverse]], [[NVIDIA-Isaac]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-Isaac-GR00T]], [[NVIDIA-DRIVE-Sim]], [[NVIDIA-NGC-Catalog]], [[TensorRT]], [[TensorRT-LLM]], [[Triton-Inference-Server]]
**Sources:** https://docs.nvidia.com/nim/cosmos/latest/introduction.html, https://docs.nvidia.com/nim/cosmos/latest/index.html, https://docs.nvidia.com/nim/cosmos/latest/support-matrix.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM for Cosmos WFM is the self-hosted inference microservice surface for NVIDIA Cosmos world foundation models. Current NVIDIA docs describe it as covering Cosmos-Predict1 and Cosmos-Transfer2.5, with text-to-world, image/video-to-world, and video-to-video transfer workflows for physical AI data generation.

## Detail

### Purpose
Cosmos WFM NIM gives IT and DevOps teams a production deployment path for Cosmos models while giving developers standard API access to advanced physical AI generation workflows. It sits between the broader [[NVIDIA-Cosmos]] model/platform stack and production NIM operations.

### Current scope
- Cosmos-Predict1-7B Text2World for generating world/video output from text prompts.
- Cosmos-Predict1-7B Video2World for image-to-world and video-to-world generation.
- Cosmos-Transfer2.5-2B for controlled video-to-video transfer with edge, depth, visual/blur, and segmentation guidance.
- Triton-backed model serving, health checks, metadata, observability, and REST/gRPC access.
- NGC container distribution, model download/cache behavior, and container security scan reports.
- Guardrail pipeline components for text, video, and face-blur safety handling.

### NVIDIA context
Cosmos WFM NIM is the deployable microservice counterpart to [[NVIDIA-Cosmos]]. It connects world model generation to [[NVIDIA-Omniverse]], [[NVIDIA-Isaac]], and [[NVIDIA-DRIVE-Sim]] workflows that need synthetic video, scenario generation, post-training data, and physical AI validation.

## Connections
- [[NVIDIA-Cosmos]] - parent world foundation model platform.
- [[NIM-for-Cosmos-Reason]] - companion Cosmos VLM NIM family for image/video/text reasoning.
- [[NIM-for-Cosmos-Embed1]] - companion NIM for joint video-text embeddings and physical-world video retrieval.
- [[NIM-for-Vision-Language-Models]] - current VLM NIM docs host Cosmos Reason NIM documentation.
- [[NIM-for-Visual-Generative-AI]] - adjacent NIM family for image and visual generative AI models.
- [[NVIDIA-Cosmos-Curator-LHA]] - video curation service for preparing physical AI datasets.
- [[NVIDIA-Omniverse]] - simulation and synthetic data environment that can consume Cosmos outputs.
- [[NVIDIA-Isaac]] and [[NVIDIA-Isaac-Sim]] - robotics simulation and training consumers for physical AI data.
- [[NVIDIA-Isaac-GR00T]] - humanoid robotics platform connected to Cosmos data generation.
- [[NVIDIA-DRIVE-Sim]] - AV simulation workflow adjacent to Cosmos world models.
- [[TensorRT]], [[TensorRT-LLM]], and [[Triton-Inference-Server]] - NVIDIA inference stack used by Cosmos WFM NIM.

## Source Excerpts
- Current NVIDIA docs say NIM for Cosmos WFM includes Cosmos-Predict1 and Cosmos-Transfer2.5.
- The docs describe Cosmos WFM NIM as a self-hosting path with standard APIs, NGC containers, Triton serving, and safety guardrails.

## Resources
- [NVIDIA NIM for Cosmos WFM Documentation](https://docs.nvidia.com/nim/cosmos/latest/introduction.html)
- [NVIDIA NIM for Cosmos WFM Index](https://docs.nvidia.com/nim/cosmos/latest/index.html)
- [Cosmos WFM Support Matrix](https://docs.nvidia.com/nim/cosmos/latest/support-matrix.html)
