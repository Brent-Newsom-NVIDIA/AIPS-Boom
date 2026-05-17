# NIM for Maxine Audio2Face-2D

**Type:** Microservice
**Tags:** NVIDIA, NIM, Maxine, Audio2Face-2D, A2F-2D, facial animation, portrait animation, digital human, CUDA, TensorRT, Triton
**Related:** [[NVIDIA-NIM]], [[NVIDIA-Maxine]], [[NVIDIA-AI-for-Media-SDKs]], [[NVIDIA-ACE]], [[NIM-for-Audio2Face-3D]], [[NVIDIA-Augmented-Reality-SDK]], [[NVIDIA-Omniverse]], [[NVIDIA-AI-Enterprise]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-CUDA]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/maxine/audio2face-2d/latest/overview.html, https://docs.nvidia.com/nim/maxine/audio2face-2d/latest/support-matrix.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Audio2Face-2D NIM is a Maxine NIM microservice for animating a portrait photo from driving speech audio. Current NVIDIA docs describe it as estimating mouth-motion landmarks from audio, encoding those movements into latent representations, and generating a synchronized facial animation with CUDA, TensorRT, and Triton acceleration.

## Detail

### Purpose
Audio2Face-2D NIM gives applications a deployable portrait-animation service for digital humans, media experiences, video messaging, and avatar workflows where the output is a 2D animated image rather than a full 3D character rig.

### Current scope
- Uses input audio plus a portrait image to generate mouth-synchronized facial animation.
- Extracts MFCC audio features and runs LSTM-based landmark estimation for mouth articulation.
- Supports additional facial motion controls such as blinking, gaze, mouth movement, and head pose as part of the animation pipeline.
- Uses an encoder-decoder architecture with recurrent, convolutional, and generative model components.
- Model ID in the current support matrix is `maxine-audio2face-2d`.
- Current optimized configurations list FP16 profiles for V100, T4, A2, A10, A16, A40, L4, L40, and RTX 50-series GPUs.
- Requires GPUs with Tensor Cores and NVENC/NVDEC support; current docs explicitly exclude A100/H100-class products for this NIM because they lack required media encode/decode hardware.

### NVIDIA context
This page is the 2D portrait-animation NIM counterpart to [[NIM-for-Audio2Face-3D]]. It belongs in the [[NVIDIA-Maxine]] and [[NVIDIA-AI-for-Media-SDKs]] graph for media enhancement, and in the [[NVIDIA-ACE]] graph when a digital-human workflow can use a generated 2D avatar surface.

## Connections
- [[NVIDIA-Maxine]] - product and media-AI context for Maxine NIM microservices.
- [[NIM-for-Audio2Face-3D]] - 3D digital-human animation NIM that outputs blendshape animation rather than a 2D portrait video.
- [[NVIDIA-ACE]] - digital-human applications can combine speech, LLMs, and facial animation.
- [[NVIDIA-Augmented-Reality-SDK]] - adjacent face tracking, landmark, eye-contact, and active-speaker technology.
- [[NVIDIA-Omniverse]] - 3D avatar and rendering workflows sit near Audio2Face animation pipelines.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment context for supported NIM microservices.
- [[TensorRT]] and [[Triton-Inference-Server]] - acceleration and serving layers named by the current docs.
- [[NVIDIA-CUDA]] and [[NGC]] - GPU software and container/model distribution context.

## Source Excerpts
- NVIDIA docs describe Audio2Face-2D NIM as creating facial animation from a portrait photo and speech audio.
- The support matrix lists `maxine-audio2face-2d` as an NVIDIA-published model with CUDA, TensorRT, Triton, and DeepStream components.

## Resources
- [NVIDIA Audio2Face-2D NIM Overview](https://docs.nvidia.com/nim/maxine/audio2face-2d/latest/overview.html)
- [NVIDIA Audio2Face-2D NIM Support Matrix](https://docs.nvidia.com/nim/maxine/audio2face-2d/latest/support-matrix.html)
