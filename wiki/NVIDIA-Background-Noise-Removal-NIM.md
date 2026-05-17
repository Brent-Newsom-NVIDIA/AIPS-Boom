# NVIDIA Background Noise Removal NIM

**Type:** Microservice
**Tags:** NVIDIA, NIM, Maxine, background noise removal, BNR, audio AI, speech enhancement, ASR preprocessing
**Related:** [[NVIDIA-NIM]], [[NVIDIA-Maxine]], [[NIM-for-Maxine-Studio-Voice]], [[NVIDIA-Audio-Effects-SDK]], [[NVIDIA-ASR-NIM]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-Riva]], [[NVIDIA-Cloud-Functions]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/nim/maxine/bnr/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Background Noise Removal (BNR) NIM is an audio enhancement NIM from NVIDIA that removes unwanted noise from speech audio. Current NVIDIA docs position it as improving speech intelligibility and ASR accuracy in noisy environments, with CUDA, TensorRT, and Triton providing GPU acceleration.

## Detail

### Purpose
BNR NIM is a deployable audio cleanup service for conferencing, broadcasting, media post-production, and speech AI pipelines. It can be placed before [[NVIDIA-ASR-NIM]] to improve transcription quality when input audio includes background noise.

### Current scope
- Streaming mode for real-time peer-to-peer audio processing.
- Transactional mode for complete audio files in request-response workflows.
- Raw audio streaming in 10 ms chunks for live use cases.
- Residual convolutional recurrent neural network architecture with sequential modeling over encoded latent representations.
- Try API access through build.nvidia.com using NVIDIA Cloud Functions as the backend.

### NVIDIA context
BNR NIM overlaps the media and speech graphs: [[NVIDIA-Maxine]] and [[NVIDIA-Audio-Effects-SDK]] provide broader audio effects context, [[NIM-for-Maxine-Studio-Voice]] covers a neighboring speech-enhancement NIM, and [[NVIDIA-ASR-NIM]] plus [[NVIDIA-Speech-NIM-Microservices]] consume cleaner audio in speech AI workflows.

## Connections
- [[NVIDIA-Maxine]] - broader media AI platform for real-time audio/video enhancement.
- [[NIM-for-Maxine-Studio-Voice]] - neighboring Maxine audio NIM for improving speech toward studio-recorded quality.
- [[NVIDIA-Audio-Effects-SDK]] - adjacent SDK surface for denoise, dereverb, echo cancellation, speaker focus, and related effects.
- [[NVIDIA-ASR-NIM]] - downstream ASR service that can benefit from noise-reduced audio.
- [[NVIDIA-Speech-NIM-Microservices]] - speech AI container family adjacent to BNR.
- [[NVIDIA-Riva]] - broader speech AI platform where audio cleanup improves ASR inputs.
- [[NVIDIA-Cloud-Functions]] - hosted Try API backend path noted in current docs.
- [[TensorRT]] and [[Triton-Inference-Server]] - acceleration and serving layers named by NVIDIA docs.

## Source Excerpts
- NVIDIA docs describe BNR NIM as removing unwanted noises from audio and improving speech intelligibility and ASR accuracy.
- The docs list streaming and transactional modes and state that CUDA, TensorRT, and Triton provide out-of-the-box GPU acceleration.

## Resources
- [NVIDIA Background Noise Removal NIM Overview](https://docs.nvidia.com/nim/maxine/bnr/latest/overview.html)
