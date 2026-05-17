# NIM for Maxine Eye Contact

**Type:** Microservice
**Tags:** NVIDIA, NIM, Maxine, eye contact, gaze correction, video conferencing, AR, digital engagement, CUDA, TensorRT, Triton
**Related:** [[NVIDIA-NIM]], [[NVIDIA-Maxine]], [[NVIDIA-AI-for-Media-SDKs]], [[NVIDIA-Augmented-Reality-SDK]], [[NIM-for-Maxine-Active-Speaker-Detection]], [[NVIDIA-Video-Effects-SDK]], [[NVIDIA-AI-Enterprise]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-CUDA]], [[NVIDIA-Video-Codec-SDK]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/maxine/eye-contact/latest/overview.html, https://docs.nvidia.com/nim/maxine/eye-contact/latest/support-matrix.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Eye Contact NIM is a Maxine NIM microservice that redirects a user's gaze toward the camera to simulate natural eye contact in video. Current NVIDIA docs describe it as a CUDA, TensorRT, and Triton accelerated service for remote engagement, video conferencing, and video processing workflows.

## Detail

### Purpose
Eye Contact NIM solves a common remote-presence problem: users often look at screens, notes, or participants rather than the camera. The service modifies the eye region in video frames so the face appears to look forward while preserving the surrounding frame.

### Current scope
- Extracts an eye-region patch from each video frame using NVIDIA face tracking.
- Uses 2D facial landmarks and 6DOF head pose as inputs to the eye-contact network.
- Applies a disentangled encoder-decoder network to estimate gaze and redirect the eye patch.
- Blends the corrected eye region back into the original frame with an inverse transform.
- Supports transactional mode for complete video-file processing and streaming mode for streamable MP4 inputs.
- Model ID in the current support matrix is `maxine-eye-contact`.
- Current optimized configurations list FP16 profiles for T4, A2, A10, A16, A40, L4, L40, NVIDIA RTX PRO 6000 Blackwell Server Edition, RTX 4090, RTX 5090, and RTX 5080.
- Requires GPUs with Tensor Cores plus NVENC/NVDEC media support; current docs call out A100, H100, and B100 as unsupported for this NIM.

### NVIDIA context
Eye Contact NIM turns an [[NVIDIA-Augmented-Reality-SDK]]-style gaze feature into a self-hostable [[NVIDIA-NIM]] service. It sits alongside [[NIM-for-Maxine-Active-Speaker-Detection]] for real-time meeting/video intelligence and alongside [[NVIDIA-Video-Effects-SDK]] for video enhancement.

## Connections
- [[NVIDIA-Maxine]] - broader platform for real-time audio/video/AR enhancement.
- [[NVIDIA-AI-for-Media-SDKs]] - current docs hub for Maxine-style media AI SDKs.
- [[NVIDIA-Augmented-Reality-SDK]] - SDK surface for face tracking, landmarks, eye contact, lip sync, and active speaker detection.
- [[NIM-for-Maxine-Active-Speaker-Detection]] - companion Maxine NIM for video and meeting understanding.
- [[NVIDIA-Video-Codec-SDK]] - NVENC/NVDEC media hardware is a compatibility consideration in the current docs.
- [[NVIDIA-AI-Enterprise]] - enterprise software and support context for NIM deployments.
- [[TensorRT]] and [[Triton-Inference-Server]] - acceleration and serving stack named by NVIDIA docs.

## Source Excerpts
- NVIDIA docs describe Eye Contact NIM as dynamically redirecting eye position toward the camera.
- The current docs list transactional and streaming input modes and identify NVENC/NVDEC support as a requirement.

## Resources
- [NVIDIA Eye Contact NIM Overview](https://docs.nvidia.com/nim/maxine/eye-contact/latest/overview.html)
- [NVIDIA Eye Contact NIM Support Matrix](https://docs.nvidia.com/nim/maxine/eye-contact/latest/support-matrix.html)
