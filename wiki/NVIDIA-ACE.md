# NVIDIA Avatar Cloud Engine (ACE)

**Type:** Platform
**Tags:** NVIDIA, ACE, NPC, Avatar, Digital Human, Speech AI, Animation, Gaming, Simulation
**Related:** [[NVIDIA-Tokkio-Digital-Human-Blueprint]], [[NVIDIA-Riva]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], [[NIM-for-Audio2Face-3D]], [[NIM-for-Maxine-Audio2Face-2D]], [[NVIDIA-Maxine]], [[NVIDIA-Omniverse]], [[NVIDIA-NIM]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-NeMo]]
**Sources:** NVIDIA official documentation, https://docs.nvidia.com/ace/tokkio/latest/overview/overview.html, https://docs.nvidia.com/ace/tokkio/latest/overview/architecture.html, https://docs.nvidia.com/nim/speech/latest/index.html, https://docs.nvidia.com/nim/digital-human/a2f-3d/latest/index.html, https://docs.nvidia.com/ace/audio2face-3d-microservice/latest/text/getting-started/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Avatar Cloud Engine (ACE) is a suite of AI microservices that enable developers to create interactive, intelligent, and lifelike digital humans and non-player characters (NPCs) for games, simulations, and enterprise applications. ACE combines speech AI (ASR and TTS via Riva), large language models for conversational intelligence, facial animation via Audio2Face, and RAG-powered knowledge bases to create NPCs that can hold natural conversations, express emotions, and respond intelligently to player or user input. ACE powers NVIDIA's "digital human" demos and is integrated with Unreal Engine and Unity.

## Detail

### Purpose
Traditional game NPCs use scripted dialog trees that feel rigid and limited. ACE enables truly conversational, emotionally expressive NPCs powered by real AI — characters that understand natural speech, maintain context across a conversation, retrieve knowledge from game lore, and animate believably in real time. This applies equally to enterprise digital humans (virtual agents, customer service avatars, training simulations).

### Key Features
- ASR microservice: real-time speech-to-text via Riva Parakeet models
- TTS microservice: expressive neural text-to-speech via Riva
- [[NVIDIA-Tokkio-Digital-Human-Blueprint]] is the current NVIDIA-authored digital-human reference workflow that assembles ACE Controller, RAG/LLM knowledge sources, speech, animation, and rendering services.
- Current [[NVIDIA-Speech-NIM-Microservices]] docs split ASR, TTS, and NMT into deployable NIM containers that can feed ACE-style digital human pipelines
- LLM microservice: NIM-hosted LLM for conversational intelligence and intent understanding
- Audio2Face: real-time facial animation driven by audio/phoneme input, including [[NIM-for-Audio2Face-3D]] for ARKit blendshape output and [[NIM-for-Maxine-Audio2Face-2D]] for portrait animation.
- RAG pipeline: retrieval from lore/knowledge databases to keep NPCs factually grounded
- Emotion and personality control via SteerLM-style conditioning
- Low-latency pipeline: designed for real-time interactive use (<200ms end-to-end)
- Plugin integrations for Unreal Engine 5 and Unity
- Cloud-hosted microservices and on-device deployment options

### Use Cases
- AI-powered NPCs in AAA games and interactive experiences
- Virtual customer service agents and digital front-desk assistants
- Healthcare patient education avatars
- Training simulations with interactive instructor characters
- Virtual try-on and retail assistant avatars
- Theme park and entertainment interactive characters

### Hardware Requirements / Compatibility
- Cloud: NVIDIA A100/H100 GPU-backed microservices (NIM)
- On-device: RTX 4080/4090 for local deployment (RTX AI PC)
- Game engine: Unreal Engine 5.1+ and Unity 2022+
- Supported OS: Windows 11, Linux (for cloud services)

### Language Bindings / APIs
- NVIDIA NIM REST API (OpenAI-compatible for LLM component)
- Riva gRPC API (ASR/TTS)
- Unreal Engine ACE Plugin
- Unity ACE Plugin
- Python SDK for pipeline orchestration

## Connections
- [[NVIDIA-Tokkio-Digital-Human-Blueprint]] - current Digital Human blueprint built from ACE-style services.
- [[NVIDIA-Riva]] — ACE uses Riva for ASR and TTS in the speech pipeline
- [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], and [[NVIDIA-TTS-NIM]] - current speech NIM docs for deployable ASR/TTS services.
- [[NIM-for-Audio2Face-3D]] - current Digital Human NIM for speech-to-facial animation and emotion-driven expressions.
- [[NIM-for-Maxine-Audio2Face-2D]] - Maxine NIM for 2D portrait animation from speech audio.
- [[NVIDIA-Maxine]] — Maxine handles video/audio enhancement; ACE uses Maxine for avatar video quality
- [[NVIDIA-Omniverse]] — ACE avatars rendered in Omniverse for USD-based digital human pipelines
- [[NVIDIA-NIM]] — all ACE microservices deploy as NIM containers
- [[NVIDIA-RAG-Blueprint]] - RAG workflow that can provide grounded knowledge for digital human responses.
- [[NVIDIA-NeMo]] — NeMo models (LLM + Riva) underpin ACE conversational AI

## Resources
- [ACE Developer Page](https://developer.nvidia.com/ace)
- [ACE Documentation](https://docs.nvidia.com/ace/)
- [ACE Blog](https://developer.nvidia.com/blog/creating-interactive-ai-npcs-with-nvidia-ace/)
