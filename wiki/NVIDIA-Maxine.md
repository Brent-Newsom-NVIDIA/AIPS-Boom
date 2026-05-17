# NVIDIA Maxine

**Type:** Platform
**Tags:** NVIDIA, video conferencing, audio AI, video AI, real-time, cloud, SDKs, AR, noise cancellation, NIM
**Related:** [[NVIDIA-AI-for-Media-SDKs]], [[NVIDIA-Audio-Effects-SDK]], [[NVIDIA-Background-Noise-Removal-NIM]], [[NIM-for-Maxine-Studio-Voice]], [[NIM-for-Maxine-Audio2Face-2D]], [[NIM-for-Maxine-Eye-Contact]], [[NIM-for-Maxine-Active-Speaker-Detection]], [[NIM-for-Audio2Face-3D]], [[NVIDIA-Augmented-Reality-SDK]], [[NVIDIA-Video-Effects-SDK]], [[NVIDIA-Triton-AR-VFX-SDKs]], [[NVIDIA-Riva]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-Capture-SDK]], [[NVIDIA-CloudXR]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-NeMo]], [[NGC]], [[Triton-Inference-Server]], [[NVIDIA-Holoscan]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; updated from https://docs.nvidia.com/maxine/index.html, https://docs.nvidia.com/maxine/afx/latest/index.html, https://docs.nvidia.com/maxine/ar/latest/index.html, https://docs.nvidia.com/maxine/vfx/latest/index.html, https://docs.nvidia.com/maxine/triton/latest/index.html, https://docs.nvidia.com/nim/maxine/bnr/latest/overview.html, https://docs.nvidia.com/nim/maxine/studio-voice/latest/overview.html, https://docs.nvidia.com/nim/maxine/audio2face-2d/latest/overview.html, https://docs.nvidia.com/nim/maxine/eye-contact/latest/overview.html, https://docs.nvidia.com/nim/maxine/active-speaker-detection/latest/overview.html, https://docs.nvidia.com/nim/digital-human/a2f-3d/latest/index.html)
**Last Updated:** 2026-04-29

## Summary
NVIDIA Maxine is a platform of GPU-accelerated AI SDKs and NIM microservices for enhancing real-time audio, video, and augmented reality (AR) in video conferencing and streaming applications. It provides production-ready AI effects — noise cancellation, background replacement, gaze correction, super-resolution video, face re-lighting, active-speaker detection, eye contact, studio voice, and avatar animation — optimized to run on NVIDIA GPUs with latency low enough for live video calls. Maxine is used by video conferencing ISVs, cloud streaming platforms, and broadcast technology vendors to add AI-powered media enhancement without building models from scratch.

## Detail

### Purpose
Video conferencing quality is degraded by background noise, poor lighting, camera shake, low resolution, and lack of eye contact. Maxine provides a set of neural network-based AI effects that address these problems in real time (under 30 ms latency) using GPU acceleration. Rather than requiring each application vendor to train and optimize their own AI effects, Maxine packages state-of-the-art models as SDK libraries that can be integrated into existing video pipelines in days. Maxine also enables cloud-side AI enhancement for platforms that process video server-side.

### Key Features
- **Current docs surface:** NVIDIA docs now expose Maxine-style functionality under [[NVIDIA-AI-for-Media-SDKs]], with separate pages for [[NVIDIA-Audio-Effects-SDK]], [[NVIDIA-Augmented-Reality-SDK]], [[NVIDIA-Video-Effects-SDK]], and [[NVIDIA-Triton-AR-VFX-SDKs]].
- **Maxine NIMs:** Current NVIDIA NIM docs expose deployable services for [[NVIDIA-Background-Noise-Removal-NIM]], [[NIM-for-Maxine-Studio-Voice]], [[NIM-for-Maxine-Audio2Face-2D]], [[NIM-for-Maxine-Eye-Contact]], and [[NIM-for-Maxine-Active-Speaker-Detection]].
- **Audio Effects:**
  - **Noise Cancellation (RTX Voice):** Deep learning-based noise removal (background noise, keyboard clicks, HVAC) even in challenging acoustic environments
  - **Background Noise Removal NIM:** [[NVIDIA-Background-Noise-Removal-NIM]] provides a deployable NIM for streaming and transactional audio cleanup
  - **Studio Voice NIM:** [[NIM-for-Maxine-Studio-Voice]] provides streaming and transactional speech enhancement toward studio-quality audio.
  - **Acoustic Echo Cancellation (AEC):** Remove speaker echo from microphone input for full-duplex audio
  - **Dereverb:** Remove room reverb for cleaner audio in untreated spaces
  - **Super Resolution (Audio):** Bandwidth extension — enhance narrow-band (8 kHz) audio to full-band (48 kHz) quality
- **Video Effects:**
  - **Background Blur/Replacement:** Real-time portrait matting for virtual background without green screen
  - **Super Resolution (Video):** AI upscaling of low-resolution video streams for sharper display
  - **Gaze Correction:** Redirect eye gaze toward the camera to simulate eye contact even when reading a screen
  - **Face Re-lighting:** Normalize facial lighting in real time for consistent video quality across varying room conditions
  - **Video Noise Reduction:** Temporal and spatial denoising for low-light or compressed video
- **AR & Avatar Features:**
  - **3D Face Tracking:** High-fidelity 68+ landmark face mesh tracking for AR overlay and avatar animation
  - **Expression Transfer:** Drive 3D avatars with facial expression from video input
  - **Body Pose Estimation:** Full-body and hand pose tracking for gesture-driven UI
  - **Audio2Face and meeting intelligence NIMs:** [[NIM-for-Maxine-Audio2Face-2D]], [[NIM-for-Audio2Face-3D]], [[NIM-for-Maxine-Eye-Contact]], and [[NIM-for-Maxine-Active-Speaker-Detection]] cover portrait animation, 3D avatar animation, gaze correction, and active speaker detection.
- **Cloud and On-Device:** Maxine SDKs available for both client-side (Windows SDK for RTX GPUs) and cloud-side (Linux containers for server GPUs) deployments
- **Capture and streaming adjacency:** [[NVIDIA-Capture-SDK]] and [[NVIDIA-CloudXR]] cover neighboring capture, encode, and remote media delivery workflows.
- **Low Latency Design:** All effects optimized for <30 ms end-to-end latency at 1080p30 on RTX and data center GPUs

### Use Cases
- Integrating AI noise cancellation into video conferencing software (Teams, Zoom, WebRTC apps)
- Building cloud-based video enhancement services that process customer video streams server-side
- Virtual production and broadcast: real-time AI lighting correction and background compositing
- Accessibility: AI-enhanced audio clarity for hearing-impaired participants
- Enterprise communications platforms adding premium AI effects as differentiation features
- Gaming and streaming: AI background removal and webcam enhancement without green screen

### Hardware Requirements / Compatibility
- **Client SDK (Windows):** NVIDIA RTX 20-series and later (Turing/Ampere/Ada Lovelace); RTX Voice extends to GTX 10-series with reduced performance
- **Cloud SDK (Linux):** NVIDIA T4, A10, A30, A100, H100 for server-side processing at scale
- **CUDA:** 11.x or later; TensorRT-compiled models
- **OS:** Windows 10/11 (client SDK); Ubuntu 18.04/20.04/22.04 (server SDK)
- **Integration:** Compatible with DirectShow, Media Foundation (Windows); GStreamer, V4L2 (Linux)

### Language Bindings / APIs
- **C/C++ SDK:** Primary API surface for Windows client and Linux server integration; header-based interface
- **Python Bindings:** Available for prototyping and pipeline testing
- **GStreamer Plugin:** Linux-native GStreamer element for pipeline integration (`nvmaxine` plugin)
- **REST API (Cloud):** Cloud-deployed Maxine effects accessible via REST for server-side video processing services

## Connections
- [[NVIDIA-Riva]] — Maxine audio effects (noise cancellation) complement Riva ASR; together they form a complete voice + speech pipeline
- [[NVIDIA-Speech-NIM-Microservices]] - current ASR/TTS/NMT NIM collection that can consume enhanced audio.
- [[NVIDIA-AI-for-Media-SDKs]] — current docs hub for AI media SDKs.
- [[NVIDIA-Audio-Effects-SDK]] — AFX audio effects SDK for echo cancellation, denoising, dereverb, speaker focus, studio voice, and voice font.
- [[NVIDIA-Background-Noise-Removal-NIM]] - deployable Maxine-adjacent audio NIM for noise removal, speech intelligibility, and ASR preprocessing.
- [[NIM-for-Maxine-Studio-Voice]] - Maxine audio NIM for studio-quality speech enhancement.
- [[NIM-for-Maxine-Audio2Face-2D]] - Maxine NIM for animating a 2D portrait from speech audio.
- [[NIM-for-Maxine-Eye-Contact]] - Maxine NIM for gaze correction and simulated camera-facing eye contact.
- [[NIM-for-Maxine-Active-Speaker-Detection]] - Maxine NIM for identifying active speakers in video with diarized audio.
- [[NIM-for-Audio2Face-3D]] - digital-human NIM for 3D avatar facial animation from audio and emotion inputs.
- [[NVIDIA-Augmented-Reality-SDK]] — AR SDK for face/body tracking, eye contact, lip sync, and active speaker detection.
- [[NVIDIA-Video-Effects-SDK]] — VFX SDK for green screen, blur, denoise, relighting, upscaling, and video super resolution.
- [[NVIDIA-Triton-AR-VFX-SDKs]] — server-side Triton deployment path for AR/VFX features.
- [[NVIDIA-Capture-SDK]] — capture SDKs sit near Maxine media processing pipelines
- [[NVIDIA-CloudXR]] — CloudXR uses adjacent streaming and RTX media delivery concepts
- [[NVIDIA-AI-Enterprise]] — Maxine is available under AI Enterprise licensing for commercial ISV deployments
- [[NGC]] — Maxine SDK containers and model files distributed via NGC
- [[Triton-Inference-Server]] — Maxine server-side deployments can use Triton for batching and scaling AI effects
- [[NVIDIA-NeMo]] — NeMo provides model training infrastructure for Maxine's underlying audio and video neural networks

## Resources
- [NVIDIA Maxine Developer Page](https://developer.nvidia.com/maxine)
- [NVIDIA AI for Media SDKs](https://docs.nvidia.com/maxine/index.html)
- [NVIDIA Audio Effects SDK](https://docs.nvidia.com/maxine/afx/latest/index.html)
- [NVIDIA Video Effects SDK](https://docs.nvidia.com/maxine/vfx/latest/index.html)
- [NVIDIA Maxine NIM Docs](https://docs.nvidia.com/nim/index.html)
- [Maxine on NGC](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/maxine)
