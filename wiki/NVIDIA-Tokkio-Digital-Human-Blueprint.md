# NVIDIA Tokkio Digital Human Blueprint

**Type:** Platform
**Tags:** NVIDIA, AI Blueprint, Tokkio, digital human, ACE, avatar, speech AI, RAG, Audio2Face, WebRTC
**Related:** [[NVIDIA-AI-Blueprints]], [[NVIDIA-ACE]], [[NIM-for-Audio2Face-3D]], [[NIM-for-Maxine-Audio2Face-2D]], [[NVIDIA-Riva]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-Omniverse]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/ace/tokkio/latest/overview/overview.html, https://docs.nvidia.com/ace/tokkio/latest/overview/architecture.html, https://github.com/NVIDIA-AI-Blueprints/digital-human
**Last Updated:** 2026-04-29

## Summary
NVIDIA Tokkio Digital Human Blueprint is NVIDIA's current reference implementation for interactive avatar experiences and customer-service-style digital humans. The latest Tokkio docs describe a distributed, event-driven architecture that connects live audio/video streaming, ACE Controller orchestration, RAG or LLM knowledge sources, speech recognition, speech synthesis, Audio2Face-3D animation, animation graph services, and Unreal rendering.

## Detail

### Purpose
Digital human applications need natural speech input, grounded responses, low-latency speech output, expressive animation, and real-time rendering. Tokkio provides a production-oriented NVIDIA blueprint for assembling those pieces into an interactive avatar workflow for customer service, healthcare agents, hospitality guides, and similar enterprise-facing experiences.

### Current scope
- Tokkio web UI with WebRTC media streaming and WebSocket signaling.
- Video Storage Toolkit (VST), Stream Distribution and Routing (SDR), and stream lifecycle routing across GPUs.
- ACE Controller pipeline for live audio processing, external knowledge-base access, response generation, TTS, and multimodal UI output.
- Speech AI adjacency through [[NVIDIA-Riva]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], and [[NVIDIA-Speech-NIM-Microservices]].
- Animation pipeline with [[NIM-for-Audio2Face-3D]], Animation Graph, Unreal Renderer, gesture triggers, facial expressions, and synchronized avatar output.
- Integration with [[NVIDIA-RAG-Blueprint]]-style knowledge sources, [[NIM-for-Large-Language-Models]], and hosted/self-hosted [[NVIDIA-NIM]] endpoints.
- Deployment documentation for bare metal and cloud targets including AWS, Azure, and GCP.

### NVIDIA context
Tokkio is the canonical wiki page for the durable Digital Human blueprint. It should not be split into separate wiki pages for every Tokkio deployment mode, UI component, or release note; those details belong under this page and related ACE/NIM pages.

## Connections
- [[NVIDIA-AI-Blueprints]] - Tokkio is the digital-human blueprint in the NVIDIA blueprint catalog.
- [[NVIDIA-ACE]] - ACE is the digital-human microservice and workflow platform that Tokkio assembles.
- [[NIM-for-Audio2Face-3D]] - Audio2Face-3D generates avatar facial animation from speech audio and emotion controls.
- [[NIM-for-Maxine-Audio2Face-2D]] - adjacent 2D portrait animation NIM.
- [[NVIDIA-Riva]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], and [[NVIDIA-TTS-NIM]] - speech input/output services in digital-human pipelines.
- [[NVIDIA-NIM]] and [[NIM-for-Large-Language-Models]] - LLM endpoint layer for conversation and response generation.
- [[NVIDIA-RAG-Blueprint]] - RAG knowledge source pattern for grounded digital-human responses.
- [[NVIDIA-Omniverse]] - broader real-time 3D and digital-human rendering context.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment and support context.

## Source Excerpts
- NVIDIA docs describe Tokkio as a reference implementation for interactive avatar experiences.
- Current architecture docs describe a distributed, event-driven pipeline with ACE Controller, Audio2Face-3D, Animation Graph, and Unreal Renderer services.

## Resources
- [Tokkio Overview](https://docs.nvidia.com/ace/tokkio/latest/overview/overview.html)
- [Tokkio Architecture](https://docs.nvidia.com/ace/tokkio/latest/overview/architecture.html)
- [NVIDIA-AI-Blueprints Digital Human GitHub](https://github.com/NVIDIA-AI-Blueprints/digital-human)
