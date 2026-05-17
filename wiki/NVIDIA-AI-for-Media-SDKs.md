# NVIDIA AI for Media SDKs

**Type:** Platform
**Tags:** NVIDIA, AI for Media, Maxine, AFX, AR, VFX, media SDKs, video conferencing, telepresence
**Related:** [[NVIDIA-Maxine]], [[NVIDIA-Audio-Effects-SDK]], [[NIM-for-Maxine-Studio-Voice]], [[NVIDIA-Background-Noise-Removal-NIM]], [[NVIDIA-Augmented-Reality-SDK]], [[NIM-for-Maxine-Audio2Face-2D]], [[NIM-for-Maxine-Eye-Contact]], [[NIM-for-Maxine-Active-Speaker-Detection]], [[NIM-for-Audio2Face-3D]], [[NVIDIA-Video-Effects-SDK]], [[NVIDIA-Triton-AR-VFX-SDKs]], [[Triton-Inference-Server]], [[NVIDIA-RTX]]
**Sources:** https://docs.nvidia.com/maxine/index.html, https://docs.nvidia.com/nim/maxine/studio-voice/latest/overview.html, https://docs.nvidia.com/nim/maxine/audio2face-2d/latest/overview.html, https://docs.nvidia.com/nim/maxine/eye-contact/latest/overview.html, https://docs.nvidia.com/nim/maxine/active-speaker-detection/latest/overview.html, https://docs.nvidia.com/nim/digital-human/a2f-3d/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI for Media SDKs is the current docs hub for NVIDIA's GPU-accelerated audio, video, and augmented-reality SDKs used in video conferencing, telepresence, and real-time media enhancement. It is the docs-facing successor/umbrella surface for Maxine-style SDKs such as AFX, AR, VFX, and Triton-enabled AR/VFX deployment.

## Detail

### Purpose
Media applications need low-latency AI effects for audio cleanup, video enhancement, face/body tracking, and cloud-side serving. NVIDIA AI for Media SDKs groups the SDKs that expose those features to developers through C/C++ APIs, sample applications, containers, and Triton deployment paths.

### Current components
- [[NVIDIA-Audio-Effects-SDK]] for acoustic echo cancellation, audio super-resolution, denoising, dereverb, speaker focus, studio voice, and voice font effects.
- [[NVIDIA-Augmented-Reality-SDK]] for face/body tracking, landmarks, eye contact, expressions, lip sync, and active speaker detection.
- [[NVIDIA-Video-Effects-SDK]] for AI green screen, background blur, upscale, webcam denoise, video relighting, and video super resolution.
- [[NVIDIA-Triton-AR-VFX-SDKs]] for serving AR/VFX SDK features through Triton for scalable server-side processing.
- [[NVIDIA-Background-Noise-Removal-NIM]], [[NIM-for-Maxine-Studio-Voice]], [[NIM-for-Maxine-Audio2Face-2D]], [[NIM-for-Maxine-Eye-Contact]], and [[NIM-for-Maxine-Active-Speaker-Detection]] for API/container-style Maxine media capabilities surfaced under NVIDIA NIM docs.

### NVIDIA context
This page should connect current docs nomenclature back to [[NVIDIA-Maxine]] so queries for either Maxine or AI for Media land in the same conceptual area.

## Connections
- [[NVIDIA-Maxine]] - historical/product umbrella for NVIDIA AI media effects.
- [[NVIDIA-Audio-Effects-SDK]] - audio effects component.
- [[NVIDIA-Background-Noise-Removal-NIM]] and [[NIM-for-Maxine-Studio-Voice]] - deployable audio enhancement NIMs.
- [[NVIDIA-Augmented-Reality-SDK]] - AR and human tracking component.
- [[NIM-for-Maxine-Audio2Face-2D]], [[NIM-for-Maxine-Eye-Contact]], and [[NIM-for-Maxine-Active-Speaker-Detection]] - Maxine NIMs for portrait animation, gaze correction, and meeting/video understanding.
- [[NIM-for-Audio2Face-3D]] - digital-human animation NIM adjacent to ACE and Maxine avatar workflows.
- [[NVIDIA-Video-Effects-SDK]] - video effects component.
- [[NVIDIA-Triton-AR-VFX-SDKs]] - cloud/server deployment guide for AR and VFX features.
- [[Triton-Inference-Server]] - serving platform used by Triton-enabled AR/VFX SDKs.
- [[NVIDIA-RTX]] - RTX GPUs provide local/media acceleration context.

## Source Excerpts
- NVIDIA's AI for Media SDK docs hub lists Audio Effects, Augmented Reality, Video Effects, and Triton Inference Server guides for AR/VFX SDKs.

## Resources
- [NVIDIA AI for Media SDKs](https://docs.nvidia.com/maxine/index.html)
- [NVIDIA NIM Documentation](https://docs.nvidia.com/nim/index.html)
