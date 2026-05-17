# NVIDIA Speech NIM Microservices

**Type:** Platform
**Tags:** NVIDIA, NIM, speech AI, ASR, TTS, NMT, Nemotron, Riva, CUDA, TensorRT, Triton
**Related:** [[NVIDIA-NIM]], [[NVIDIA-ASR-NIM]], [[Nemotron-ASR-Streaming]], [[Nemotron-3-VoiceChat]], [[NVIDIA-TTS-NIM]], [[NVIDIA-NMT-NIM]], [[NIM-for-Maxine-Studio-Voice]], [[NIM-for-Audio2Face-3D]], [[NVIDIA-Tokkio-Digital-Human-Blueprint]], [[NVIDIA-Riva]], [[NVIDIA-NeMo]], [[Nemotron]], [[Parakeet-ASR]], [[NVIDIA-Canary]], [[NVIDIA-ACE]], [[NVIDIA-Maxine]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-NIM-Operator]], [[NVIDIA-Container-Toolkit]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/nim/speech/latest/index.html, https://docs.nvidia.com/nim/speech/latest/about/how-it-works.html, https://build.nvidia.com/nvidia/nemotron-voicechat/modelcard, https://docs.nvidia.com/ace/tokkio/latest/overview/architecture.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Speech NIM Microservices are GPU-accelerated Docker containers for building speech AI applications. Current NVIDIA docs position the collection around three independently deployable NIMs: [[NVIDIA-ASR-NIM]] for speech-to-text, [[NVIDIA-TTS-NIM]] for text-to-speech, and [[NVIDIA-NMT-NIM]] for neural machine translation.

## Detail

### Purpose
Speech applications often need transcription, speech synthesis, and translation as separate scaling units. Speech NIM packages each capability as a container with a Nemotron model family, the NVIDIA inference stack, and unified gRPC/HTTP APIs so applications call the NIM service rather than model internals.

### Current scope
- ASR NIM converts streaming or buffered audio into transcripts, including model-specific endpoints such as [[Nemotron-ASR-Streaming]].
- TTS NIM synthesizes speech audio from text.
- NMT NIM translates text between supported languages.
- [[Nemotron-3-VoiceChat]] is adjacent to the Speech NIM stack as a full-duplex speech-to-speech Nemotron model that unifies ASR-style understanding, LLM reasoning, and TTS-style output in one model.
- Each NIM is an independent Docker container, so applications deploy only the microservices they need.
- Digital-human workflows such as [[NVIDIA-Tokkio-Digital-Human-Blueprint]] can combine ASR/TTS speech services with LLM/RAG and avatar animation.
- NIM containers package NVIDIA Triton Inference Server, TensorRT/CUDA execution, batching, streaming, model-profile selection, and gRPC/HTTP endpoints.
- Docker and Helm deployment paths are covered in the current docs, along with NGC access, model caching, observability, support matrices, APIs, and performance references.

### NVIDIA context
This page is the current canonical wiki entry for the post-migration Speech NIM docs. Older Riva ASR/TTS/NMT NIM pages point toward this docs surface, while [[NVIDIA-Riva]] remains the broader speech AI SDK/platform context.

## Connections
- [[NVIDIA-ASR-NIM]] - speech-to-text NIM for Parakeet, Canary, Conformer, Whisper, and Nemotron ASR models.
- [[Nemotron-ASR-Streaming]] - current Nemotron English streaming ASR model surfaced through Build NVIDIA and Speech NIM.
- [[Nemotron-3-VoiceChat]] - full-duplex speech-to-speech Nemotron model for realtime voice agents.
- [[NVIDIA-TTS-NIM]] - text-to-speech NIM for Magpie TTS models and voice workflows.
- [[NVIDIA-NMT-NIM]] - neural machine translation NIM for Riva Translate 1.6B.
- [[NVIDIA-Riva]] - broader NVIDIA speech AI platform and historical docs lineage.
- [[NIM-for-Maxine-Studio-Voice]] - Maxine audio enhancement NIM that can improve speech inputs for ASR and media workflows.
- [[NIM-for-Audio2Face-3D]] - digital-human animation NIM that consumes speech audio in avatar pipelines.
- [[NVIDIA-Tokkio-Digital-Human-Blueprint]] - digital-human blueprint that composes speech, LLM/RAG, animation, and rendering.
- [[NVIDIA-ACE]] and [[NVIDIA-Maxine]] - application layers that combine speech services with media and digital-human animation.
- [[NVIDIA-NeMo]] - training and customization framework for speech models used by Speech NIMs.
- [[Nemotron]] - speech docs describe each Speech NIM as serving a Nemotron model family.
- [[Parakeet-ASR]] and [[NVIDIA-Canary]] - ASR model families surfaced through ASR NIM.
- [[NVIDIA-AI-Enterprise]] - enterprise licensing/support context for self-hosting NIMs.
- [[TensorRT]] and [[Triton-Inference-Server]] - inference execution and serving stack inside each NIM.

## Source Excerpts
- NVIDIA docs describe Speech NIM microservices as GPU-accelerated Docker containers that package speech AI capabilities, Nemotron models, CUDA, TensorRT, Triton, and unified APIs.
- The docs show ASR, TTS, and NMT as independent microservices that can be chained for real-time speech translation pipelines.

## Resources
- [NVIDIA Speech NIM Microservices](https://docs.nvidia.com/nim/speech/latest/index.html)
- [How Speech NIM Microservices Work](https://docs.nvidia.com/nim/speech/latest/about/how-it-works.html)
