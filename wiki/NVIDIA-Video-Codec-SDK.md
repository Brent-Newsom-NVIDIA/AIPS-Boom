# NVIDIA Video Codec SDK

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Video, Encoding, Decoding, NVENC, NVDEC, Media
**Related:** [[NVIDIA-DALI]], [[CV-CUDA]], [[NPP]], [[NVIDIA-Optical-Flow-SDK]], [[nvImageCodec]], [[NVIDIA-Video-Effects-SDK]], [[NVIDIA-AI-for-Media-SDKs]]
**Sources:** NVIDIA official documentation, https://docs.nvidia.com/maxine/vfx/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Video Codec SDK is a comprehensive set of APIs providing hardware-accelerated video encode (NVENC) and decode (NVDEC) on NVIDIA GPUs for Windows and Linux. It supports H.264, HEVC (H.265), and AV1 encoding, and decoding for MPEG-2, VC-1, H.264, H.265, VP8, VP9, and AV1. On Blackwell GPUs it achieves up to 8K240 FPS with multiple hardware encoding engines, enabling faster-than-real-time video processing at all scales.

## Detail

### Purpose
Software video codecs consume substantial CPU resources and cannot achieve real-time performance at high resolutions or frame rates at scale. NVIDIA Video Codec SDK exposes dedicated NVENC and NVDEC hardware engines on the GPU, enabling faster-than-real-time video encode/decode that frees CPU for other tasks and dramatically reduces power consumption per encoded frame.

### Key Features
- NVENC: hardware H.264, HEVC, and AV1 video encoding
- NVDEC: hardware decoding for MPEG-2, VC-1, H.264, H.265, VP8, VP9, AV1
- Up to 8K240 FPS on NVIDIA Blackwell GPUs with multiple encode engines
- Ultra-high quality (UHQ) AV1 mode approaching software codec quality at superior throughput
- 422 progressive and interlaced encode/decode for professional media workflows
- C-style APIs with C++ wrapper classes
- PyNvVideoCodec: Python bindings for easy integration
- DirectX and Vulkan Video API support
- Compatible with DALI, CV-CUDA, and deep learning frameworks

### Use Cases
- Video transcoding for streaming platforms
- Deep learning training data preparation from video datasets
- Game broadcasting and cloud gaming (NVIDIA GeForce NOW)
- Virtual desktops and remote visualization (NVIDIA RTX Virtual Workstation)
- AI-powered video analytics
- Live video streaming and conferencing
- Secure video playback with DRM

### Hardware Requirements
- NVIDIA GPU with NVENC/NVDEC hardware engines (Turing or newer recommended for AV1)
- Windows and Linux supported
- Blackwell GPUs for maximum performance (8K240 FPS)

### Language Bindings
- C (primary C-style API)
- C++ (wrapper classes)
- Python (PyNvVideoCodec)
- DirectX 12 and Vulkan Video interfaces

## Connections
- [[NVIDIA-DALI]] — DALI uses NVDEC hardware decode for GPU-accelerated video loading in training
- [[CV-CUDA]] — CV-CUDA preprocesses frames decoded by NVDEC for computer vision pipelines
- [[NPP]] — NPP processes raw decoded frames from NVDEC for further signal processing
- [[NVIDIA-Optical-Flow-SDK]] — Optical Flow SDK builds on decoded frames from Video Codec SDK
- [[nvImageCodec]] — nvImageCodec handles image codecs; Video Codec SDK handles video codecs
- [[NVIDIA-Video-Effects-SDK]] — video effects can sit between decode/capture and encode in media pipelines.
- [[NVIDIA-AI-for-Media-SDKs]] — AI media SDK hub for adjacent video enhancement workflows.

## Resources
- [Official Page](https://developer.nvidia.com/nvidia-video-codec-sdk)
- [Video Codec SDK Documentation](https://docs.nvidia.com/video-technologies/video-codec-sdk/)
