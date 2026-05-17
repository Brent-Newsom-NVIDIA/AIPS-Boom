# NIM for Audio2Face-3D

**Type:** Microservice
**Tags:** NVIDIA, NIM, Audio2Face-3D, A2F-3D, ACE, digital human, facial animation, ARKit blendshapes, emotion, CUDA, TensorRT
**Related:** [[NVIDIA-NIM]], [[NVIDIA-ACE]], [[NVIDIA-Tokkio-Digital-Human-Blueprint]], [[NIM-for-Maxine-Audio2Face-2D]], [[NVIDIA-Omniverse]], [[NVIDIA-Maxine]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-TTS-NIM]], [[NVIDIA-Riva]], [[NVIDIA-NeMo]], [[NVIDIA-AI-Enterprise]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-CUDA]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/digital-human/a2f-3d/latest/index.html, https://docs.nvidia.com/ace/tokkio/latest/overview/architecture.html, https://docs.nvidia.com/ace/audio2face-3d-microservice/latest/text/getting-started/overview.html, https://docs.nvidia.com/ace/audio2face-3d-microservice/latest/text/support-matrix.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Audio2Face-3D NIM (A2F-3D NIM) is a digital-human microservice for generating 3D facial animation from audio and emotion inputs. Current NVIDIA docs position it as a core [[NVIDIA-ACE]] component that converts speech into ARKit blendshapes for lifelike avatars in games, virtual assistants, education, and enterprise experiences.

## Detail

### Purpose
Audio2Face-3D NIM gives digital-human systems a deployable service for speech-to-facial animation. Instead of only synthesizing voice with [[NVIDIA-TTS-NIM]], an application can turn speech audio and emotion signals into blendshape animation that a rendering engine can apply to a 3D character.

### Current scope
- Converts audio input into facial animation using ARKit blendshape outputs.
- Supports emotion-driven expression, including detected emotion tones and directly specified emotions.
- Supports simultaneous input streams for multi-user or large-scale workflows.
- Outputs blendshape topology suitable for downstream rendering engines.
- Can be deployed as the `nvcr.io/nim/nvidia/audio2face-3d:2.0` container in the current support-matrix examples.
- Current model entries include `claire`, `james`, and `mark` regression models plus a `multi` diffusion model.
- Current optimized configurations include A10G, A30, L4, L40S, RTX 4090, RTX 5080, RTX 5090, RTX 6000 Ada, RTX PRO 6000 Blackwell, and B200 profiles.
- Current software notes call for Ubuntu 24.04, CUDA 12.8+ and below 13.0, R570+ drivers, TensorRT 10.13+, Docker, and NVIDIA Container Toolkit.
- Current docs state that one Audio2Face-3D instance does not provide multi-GPU support; scale-out uses multiple instances and external routing.

### NVIDIA context
Audio2Face-3D is the 3D avatar animation half of the Audio2Face story. It links [[NVIDIA-ACE]] digital humans, [[NVIDIA-Tokkio-Digital-Human-Blueprint]] workflows, [[NVIDIA-Omniverse]] rendering/simulation workflows, speech services such as [[NVIDIA-TTS-NIM]], and [[NVIDIA-NIM]] deployment practices.

## Connections
- [[NVIDIA-ACE]] - Audio2Face-3D is a core digital-human component in ACE workflows.
- [[NVIDIA-Tokkio-Digital-Human-Blueprint]] - Tokkio uses Audio2Face-3D in its animation pipeline.
- [[NIM-for-Maxine-Audio2Face-2D]] - companion portrait-animation NIM for 2D animated output.
- [[NVIDIA-Omniverse]] - 3D avatar and rendering workflows can consume facial animation outputs.
- [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-TTS-NIM]], and [[NVIDIA-Riva]] - speech services provide audio inputs for digital-human animation pipelines.
- [[NVIDIA-Maxine]] - neighboring media AI platform for real-time audio/video/avatar enhancement.
- [[NVIDIA-AI-Enterprise]] - enterprise context for self-hosted NIM and digital-human deployments.
- [[TensorRT]] and [[Triton-Inference-Server]] - inference optimization and serving context for NIM-style deployments.
- [[NVIDIA-CUDA]] and [[NGC]] - GPU software and container distribution context.

## Source Excerpts
- NVIDIA docs describe Audio2Face-3D NIM as providing avatar animation from audio and emotion inputs and as a core ACE component.
- The support matrix lists regression and diffusion model entries and describes optimized profiles across Ada, Blackwell, L4/L40S, and B200-class hardware.

## Resources
- [NVIDIA Audio2Face-3D NIM Documentation](https://docs.nvidia.com/nim/digital-human/a2f-3d/latest/index.html)
- [Audio2Face-3D Overview](https://docs.nvidia.com/ace/audio2face-3d-microservice/latest/text/getting-started/overview.html)
- [Audio2Face-3D Support Matrix](https://docs.nvidia.com/ace/audio2face-3d-microservice/latest/text/support-matrix.html)
