# NIM for Maxine Studio Voice

**Type:** Microservice
**Tags:** NVIDIA, NIM, Maxine, Studio Voice, audio enhancement, speech enhancement, broadcast, conferencing, CUDA, TensorRT, Triton
**Related:** [[NVIDIA-NIM]], [[NVIDIA-Maxine]], [[NVIDIA-Audio-Effects-SDK]], [[NVIDIA-Background-Noise-Removal-NIM]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], [[NVIDIA-Riva]], [[NVIDIA-AI-Enterprise]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-CUDA]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/maxine/studio-voice/latest/overview.html, https://docs.nvidia.com/nim/maxine/studio-voice/latest/support-matrix.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Studio Voice NIM is a Maxine audio enhancement microservice that improves speech recorded with low-quality microphones in noisy or reverberant environments so it sounds closer to studio-recorded speech. Current NVIDIA docs describe streaming and transactional modes, with CUDA, TensorRT, and Triton providing GPU acceleration.

## Detail

### Purpose
Studio Voice NIM is aimed at live conferencing, broadcasting, content creation, and post-production workflows where speech quality matters but the source audio is noisy, reverberant, or captured on poor microphones.

### Current scope
- Streaming mode is recommended for live peer-to-peer audio processing and continuous data flow.
- Transactional mode processes complete audio files for offline enhancement and post-production.
- Uses a time-domain convolutional encoder-decoder network with sequential modeling over a latent speech representation.
- Conditions enhancement on a studio-quality embedding using multi-head attention blocks before waveform decoding.
- Model ID in the current support matrix is `studio-voice`.
- Current optimized configurations list FP16 + FP32 profiles across T4, A2, A10, A16, A40, A30, A100, L4, L40, H100, B100, B200, B40, RTX PRO 6000 Blackwell Server Edition, RTX 4090, RTX 5090, and RTX 5080.
- Current Linux prerequisites include recent NVIDIA graphics drivers, Docker, and NVIDIA Container Toolkit.

### NVIDIA context
Studio Voice NIM is the deployable service form of a Maxine audio enhancement capability. It complements [[NVIDIA-Background-Noise-Removal-NIM]] for audio cleanup and can improve upstream audio quality before [[NVIDIA-ASR-NIM]] or downstream speech/media workflows.

## Connections
- [[NVIDIA-Maxine]] - media AI product context for Studio Voice.
- [[NVIDIA-Audio-Effects-SDK]] - SDK-level audio effects surface that also includes Studio Voice.
- [[NVIDIA-Background-Noise-Removal-NIM]] - adjacent Maxine audio NIM focused on removing background noise.
- [[NVIDIA-Speech-NIM-Microservices]] and [[NVIDIA-ASR-NIM]] - speech pipelines benefit from higher-quality input audio.
- [[NVIDIA-TTS-NIM]] and [[NVIDIA-Riva]] - neighboring speech synthesis and speech AI platform context.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment and support context for NIM microservices.
- [[TensorRT]] and [[Triton-Inference-Server]] - inference acceleration and serving layers named in the docs.

## Source Excerpts
- NVIDIA docs describe Studio Voice NIM as enhancing low-quality speech from noisy and reverberant environments to studio-recorded quality.
- The current docs list streaming and transactional operation modes and a `studio-voice` NVIDIA-published model ID.

## Resources
- [NVIDIA Studio Voice NIM Overview](https://docs.nvidia.com/nim/maxine/studio-voice/latest/overview.html)
- [NVIDIA Studio Voice NIM Support Matrix](https://docs.nvidia.com/nim/maxine/studio-voice/latest/support-matrix.html)
