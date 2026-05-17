# NVIDIA Audio Effects SDK

**Type:** SDK
**Tags:** NVIDIA, AFX, audio effects, denoise, dereverb, echo cancellation, studio voice, voice font, Maxine
**Related:** [[NVIDIA-AI-for-Media-SDKs]], [[NVIDIA-Maxine]], [[NVIDIA-Background-Noise-Removal-NIM]], [[NIM-for-Maxine-Studio-Voice]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-Riva]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], [[NVIDIA-Video-Effects-SDK]], [[Triton-Inference-Server]], [[NVIDIA-RTX]]
**Sources:** https://docs.nvidia.com/maxine/afx/latest/index.html, https://docs.nvidia.com/nim/maxine/bnr/latest/overview.html, https://docs.nvidia.com/nim/maxine/studio-voice/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Audio Effects SDK (AFX SDK) provides GPU-accelerated, real-time audio effects for broadcast, conferencing, telepresence, and media applications. Current docs list acoustic echo cancellation, audio super-resolution, denoising, dereverb, speaker focus, studio voice, and voice font effects. Current Maxine NIM docs expose background noise removal and studio voice as deployable microservices.

## Detail

### Purpose
Live audio often contains noise, room echo, low-bandwidth speech, and competing speakers. AFX gives developers packaged AI effects that can be integrated into client or server applications without building each speech-enhancement model from scratch.

### Current effects
- Acoustic echo cancellation.
- Audio super-resolution for higher-frequency speech reconstruction.
- Background noise suppression/denoising.
- Room echo removal/dereverb.
- Combined denoise plus dereverb.
- Speaker focus.
- Studio Voice.
- Voice Font.

### Deployment notes
NVIDIA's docs distinguish Windows SDK use for client-side integration and Linux SDK use for server-side, data center, or cloud deployments. The SDK includes sample applications, container guidance, effect parameter APIs, and multi-GPU support.

[[NVIDIA-Background-Noise-Removal-NIM]] is the deployable NIM counterpart for background noise removal, with streaming and transactional modes for applications that want an API-backed audio cleanup service. [[NIM-for-Maxine-Studio-Voice]] is the deployable NIM counterpart for improving low-quality, noisy, or reverberant speech toward studio-recorded quality.

## Connections
- [[NVIDIA-AI-for-Media-SDKs]] - docs umbrella for current media SDKs.
- [[NVIDIA-Maxine]] - product/platform context for media AI effects.
- [[NVIDIA-Background-Noise-Removal-NIM]] - NIM microservice for background noise removal and ASR preprocessing.
- [[NIM-for-Maxine-Studio-Voice]] - NIM microservice for studio-quality speech enhancement.
- [[NVIDIA-Speech-NIM-Microservices]] - speech NIMs can consume enhanced audio or feed media workflows.
- [[NVIDIA-Riva]] - speech AI pipelines can benefit from audio cleanup before ASR/TTS workflows.
- [[NVIDIA-ASR-NIM]] - downstream speech recognition service that can benefit from cleaner audio.
- [[NVIDIA-TTS-NIM]] - speech synthesis pairs with enhanced media and digital-human audio pipelines.
- [[NVIDIA-Video-Effects-SDK]] - companion video effects SDK.
- [[Triton-Inference-Server]] - server-side deployment model adjacent to AI media SDK serving.
- [[NVIDIA-RTX]] - RTX and data center GPUs provide acceleration targets.

## Source Excerpts
- NVIDIA's AFX SDK docs list real-time audio effects including echo cancellation, audio super-resolution, denoising, dereverb, speaker focus, studio voice, and voice font.

## Resources
- [NVIDIA Audio Effects SDK](https://docs.nvidia.com/maxine/afx/latest/index.html)
- [NVIDIA Studio Voice NIM](https://docs.nvidia.com/nim/maxine/studio-voice/latest/overview.html)
