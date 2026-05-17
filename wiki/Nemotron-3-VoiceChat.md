# Nemotron 3 VoiceChat

**Type:** NVIDIA model
**Tags:** NVIDIA, Nemotron, VoiceChat, speech-to-speech, full duplex, conversational AI, speech AI, NIM, Build NVIDIA
**Related:** [[Nemotron]], [[NVIDIA-NIM]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], [[NVIDIA-Riva]], [[NVIDIA-ACE]], [[NVIDIA-Tokkio-Digital-Human-Blueprint]], [[NVIDIA-NeMo]], [[TensorRT]], [[Triton-Inference-Server]]
**Sources:** https://build.nvidia.com/nvidia/nemotron-voicechat/modelcard, https://build.nvidia.com/nvidia/nemotron-voicechat, https://developer.nvidia.com/blog/building-nvidia-nemotron-3-agents-for-reasoning-multimodal-rag-voice-and-safety/, https://developer.nvidia.com/nemotron-voicechat-early-access
**Last Updated:** 2026-04-29

## Summary
Nemotron 3 VoiceChat is NVIDIA's 12B-parameter, end-to-end, full-duplex speech-to-speech model for realtime conversational AI. It combines streaming speech understanding and speech generation in one model rather than chaining separate ASR, LLM, and TTS systems.

## Detail

### Purpose
Traditional voice agents often cascade speech recognition, text reasoning, and speech synthesis. That design can add latency and operational complexity. Nemotron 3 VoiceChat is NVIDIA's current early-access model for a unified voice-agent path: it listens and speaks in a full-duplex interaction loop, supports interruptible conversations, and targets realtime voice assistant and agent workflows on NVIDIA GPUs.

### Model architecture
- 12B total parameters.
- Hybrid Mamba/Transformer architecture.
- Fast Conformer speech encoder derived from Nemotron speech streaming work.
- Nemotron Nano v2 LLM backbone for text-token reasoning.
- NVIDIA TTS decoder and codec for agent speech generation.
- Text role/persona prompting support based on NVIDIA PersonaPlex.
- Input modalities include text prompts and user speech audio.
- Output modalities include agent text, agent speech audio, and user-speech transcription.

### Current availability and terms
- Build NVIDIA exposes the model as `nvidia/nemotron-voicechat`.
- NVIDIA describes the model as early access / evaluation oriented.
- Build NVIDIA lists NGC release on March 16, 2026.
- The model card lists vLLM as the acceleration engine and NVIDIA H100 as test hardware.
- Governing terms include NVIDIA API Trial Service Terms of Use, NVIDIA Software terms for the NIM container, and model evaluation licensing.

### Evaluation signals
NVIDIA's model card and developer blog position VoiceChat around full-duplex voice-agent benchmarks, including VoiceBench and FullDuplexBench 1.0. The key practical signal is not only speech recognition quality, but conversational dynamics such as pause handling, smooth turn-taking, interruption handling, and low-latency spoken response.

### NVIDIA context
Nemotron 3 VoiceChat belongs in the [[Nemotron]] family beside [[Nemotron-ASR-Streaming]], [[NVIDIA-TTS-NIM]], and [[NVIDIA-Speech-NIM-Microservices]], but it is not merely an ASR or TTS component. It is a single-model speech-to-speech path for voice agents and digital-human workflows that would otherwise chain [[NVIDIA-ASR-NIM]], an LLM, and [[NVIDIA-TTS-NIM]].

## Connections
- [[Nemotron]] - family page for NVIDIA Nemotron reasoning, multimodal, speech, retrieval, and safety models.
- [[NVIDIA-NIM]] - Build NVIDIA/NIM context for hosted and self-hosted model endpoints.
- [[NVIDIA-Speech-NIM-Microservices]] - speech microservice context for ASR, TTS, and NMT; VoiceChat is the unified speech-to-speech model adjacent to that stack.
- [[NVIDIA-ASR-NIM]] and [[NVIDIA-TTS-NIM]] - cascaded speech components that VoiceChat aims to unify for full-duplex voice agents.
- [[NVIDIA-Riva]] - broader NVIDIA speech AI platform context.
- [[NVIDIA-ACE]] and [[NVIDIA-Tokkio-Digital-Human-Blueprint]] - digital-human and avatar workflows where realtime full-duplex voice interaction matters.
- [[NVIDIA-NeMo]] - model development, customization, and speech/model training context.
- [[TensorRT]] and [[Triton-Inference-Server]] - NVIDIA inference stack context around optimized serving.

## Source Excerpts
- NVIDIA describes Nemotron 3 VoiceChat as a 12B end-to-end full-duplex speech-to-speech model for realtime conversational AI.
- NVIDIA positions VoiceChat as a unified architecture that avoids separate ASR, LLM, and TTS handoffs for voice-agent interactions.

## Resources
- [Build NVIDIA model card](https://build.nvidia.com/nvidia/nemotron-voicechat/modelcard)
- [Build NVIDIA endpoint](https://build.nvidia.com/nvidia/nemotron-voicechat)
- [Nemotron 3 agents technical blog](https://developer.nvidia.com/blog/building-nvidia-nemotron-3-agents-for-reasoning-multimodal-rag-voice-and-safety/)
- [Nemotron VoiceChat early access](https://developer.nvidia.com/nemotron-voicechat-early-access)
