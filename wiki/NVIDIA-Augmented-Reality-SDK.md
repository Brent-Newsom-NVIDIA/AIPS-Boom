# NVIDIA Augmented Reality SDK

**Type:** SDK
**Tags:** NVIDIA, AR SDK, augmented reality, face tracking, body pose, eye contact, lip sync, active speaker, Maxine
**Related:** [[NVIDIA-AI-for-Media-SDKs]], [[NVIDIA-Maxine]], [[NIM-for-Maxine-Eye-Contact]], [[NIM-for-Maxine-Active-Speaker-Detection]], [[NIM-for-Maxine-Audio2Face-2D]], [[NIM-for-Audio2Face-3D]], [[NVIDIA-Video-Effects-SDK]], [[NVIDIA-Triton-AR-VFX-SDKs]], [[NVIDIA-RTX]], [[Triton-Inference-Server]]
**Sources:** https://docs.nvidia.com/maxine/ar/latest/index.html, https://docs.nvidia.com/nim/maxine/eye-contact/latest/overview.html, https://docs.nvidia.com/nim/maxine/active-speaker-detection/latest/overview.html, https://docs.nvidia.com/nim/maxine/audio2face-2d/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Augmented Reality SDK (AR SDK) provides AI-powered real-time modeling and tracking of human faces and bodies from video. Current docs list face detection/tracking, facial landmarks, 3D body pose, eye contact, expression estimation, lip sync, and active speaker detection; current Maxine NIM docs expose several adjacent capabilities as deployable services.

## Detail

### Purpose
AR and video applications often need real-time human understanding from camera streams. The AR SDK packages GPU-accelerated models and APIs for face/body tracking, gaze, expressions, and speech-related visual cues.

### Current features
- Face detection and tracking.
- Facial landmark detection and tracking.
- 3D body pose tracking.
- Eye contact estimation and redirection, with [[NIM-for-Maxine-Eye-Contact]] as the NIM deployment surface.
- Facial expression estimation.
- LipSync and Audio2Face-style animation from audio, adjacent to [[NIM-for-Maxine-Audio2Face-2D]] and [[NIM-for-Audio2Face-3D]].
- Active speaker detection, with [[NIM-for-Maxine-Active-Speaker-Detection]] as the NIM deployment surface.

### Deployment notes
The current docs include Windows and Linux installation paths, sample applications, performance references, container use, GPU/CPU buffer handling, multiple GPU support, and API references.

## Connections
- [[NVIDIA-AI-for-Media-SDKs]] - docs umbrella for current media SDKs.
- [[NVIDIA-Maxine]] - platform context for AI-enhanced conferencing and media.
- [[NIM-for-Maxine-Eye-Contact]] - deployable gaze-correction NIM built around AR face/eye processing.
- [[NIM-for-Maxine-Active-Speaker-Detection]] - deployable NIM that uses an AR SDK backend for face and active-speaker inference.
- [[NIM-for-Maxine-Audio2Face-2D]] and [[NIM-for-Audio2Face-3D]] - animation NIMs adjacent to AR face/landmark workflows.
- [[NVIDIA-Video-Effects-SDK]] - companion video effects SDK.
- [[NVIDIA-Triton-AR-VFX-SDKs]] - server deployment path for AR/VFX features.
- [[NVIDIA-RTX]] - RTX GPUs accelerate real-time media AI.
- [[Triton-Inference-Server]] - serving layer for scalable AR/VFX inference.

## Source Excerpts
- NVIDIA's AR SDK docs describe AI-powered face/body modeling and tracking with features such as landmarks, body pose, eye contact, lip sync, and active speaker detection.

## Resources
- [NVIDIA Augmented Reality SDK](https://docs.nvidia.com/maxine/ar/latest/index.html)
