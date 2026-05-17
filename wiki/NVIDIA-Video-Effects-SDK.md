# NVIDIA Video Effects SDK

**Type:** SDK
**Tags:** NVIDIA, VFX SDK, video effects, AI green screen, background blur, video super resolution, relighting, Maxine
**Related:** [[NVIDIA-AI-for-Media-SDKs]], [[NVIDIA-Maxine]], [[NVIDIA-Augmented-Reality-SDK]], [[NVIDIA-Triton-AR-VFX-SDKs]], [[NVIDIA-RTX]], [[Triton-Inference-Server]], [[NVIDIA-Video-Codec-SDK]]
**Sources:** https://docs.nvidia.com/maxine/vfx/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Video Effects SDK (VFX SDK) provides GPU-accelerated real-time video enhancement and processing features. Current docs list AI green screen, background blur, upscale, webcam denoise, video relighting, and video super resolution.

## Detail

### Purpose
Video applications often need background segmentation, enhancement, relighting, denoising, and upscaling at real-time frame rates. The VFX SDK packages these AI effects for integration into local or server-side video pipelines.

### Current filters
- AI Green Screen for foreground/background segmentation.
- Background Blur using segmentation masks.
- Upscale and sharpening.
- Webcam denoising.
- Video Relighting.
- Video Super Resolution.

### Deployment notes
The current docs include Windows and Linux installation paths, sample applications, performance references, container use, batch processing, multi-GPU support, MIG use, and VFX API references.

## Connections
- [[NVIDIA-AI-for-Media-SDKs]] - docs umbrella for current media SDKs.
- [[NVIDIA-Maxine]] - platform context for video conferencing and media AI.
- [[NVIDIA-Augmented-Reality-SDK]] - companion AR/human tracking SDK.
- [[NVIDIA-Triton-AR-VFX-SDKs]] - server deployment path for VFX features.
- [[NVIDIA-RTX]] - RTX GPUs accelerate real-time video effects.
- [[Triton-Inference-Server]] - serving layer for scalable VFX inference.
- [[NVIDIA-Video-Codec-SDK]] - adjacent encode/decode layer in video pipelines.

## Source Excerpts
- NVIDIA's VFX SDK docs list AI green screen, background blur, upscale, webcam denoise, video relighting, and video super resolution.

## Resources
- [NVIDIA Video Effects SDK](https://docs.nvidia.com/maxine/vfx/latest/index.html)
