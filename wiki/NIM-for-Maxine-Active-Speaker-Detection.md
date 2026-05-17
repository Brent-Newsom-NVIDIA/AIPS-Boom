# NIM for Maxine Active Speaker Detection

**Type:** Microservice
**Tags:** NVIDIA, NIM, Maxine, active speaker detection, video analytics, diarization, AR, CUDA, TensorRT, Triton, DeepStream, NVDEC
**Related:** [[NVIDIA-NIM]], [[NVIDIA-Maxine]], [[NVIDIA-AI-for-Media-SDKs]], [[NVIDIA-Augmented-Reality-SDK]], [[NIM-for-Maxine-Eye-Contact]], [[NVIDIA-DeepStream]], [[NVIDIA-Video-Codec-SDK]], [[NVIDIA-AI-Enterprise]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-CUDA]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/maxine/active-speaker-detection/latest/overview.html, https://docs.nvidia.com/nim/maxine/active-speaker-detection/latest/support-matrix.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Active Speaker Detection NIM is a Maxine NIM microservice for detecting and identifying active speakers in video by combining visual analysis with diarized audio data. Current NVIDIA docs describe per-frame outputs such as bounding boxes, speaker identifiers, active-speaking state, and face-detection confidence scores.

## Detail

### Purpose
Active Speaker Detection NIM helps meeting, media, telepresence, and video-understanding systems determine who is speaking at each point in a video stream. This is useful for speaker-aware editing, analytics, avatar interaction, accessibility, and meeting intelligence.

### Current scope
- Accepts video, audio, and diarization data inputs.
- Uses GPU-accelerated video decoding through GStreamer/NVDEC.
- Extracts frame-accurate audio aligned with decoded video frames.
- Uses diarization timelines to build per-frame speaker masks.
- Runs inference through an NVIDIA AR SDK backend on Triton.
- Returns per-frame bounding boxes, speaker IDs, active-speaker state, and confidence values.
- Supports streaming mode for chunked/streamable inputs and transactional mode for complete file processing.
- Model ID in the current support matrix is `active-speaker-detection`.
- Current optimized configurations list FP16 profiles for T4, A2, A10, A16, A40, L4, L40, L40S, B40, NVIDIA RTX PRO 6000 Blackwell Server Edition, RTX 4090, RTX 5090, and RTX 5080.
- Uses NVDEC hardware acceleration; GPUs without NVDEC support may be unsuitable.

### NVIDIA context
Active Speaker Detection NIM is the NIM deployment surface for a meeting/video intelligence capability that was already present in [[NVIDIA-Augmented-Reality-SDK]]. It connects Maxine media AI with [[NVIDIA-DeepStream]], [[Triton-Inference-Server]], and GPU media decode.

## Connections
- [[NVIDIA-Maxine]] - broader Maxine media AI and conferencing enhancement platform.
- [[NVIDIA-Augmented-Reality-SDK]] - SDK-level AR backend for face detection, landmarks, and active-speaker inference.
- [[NIM-for-Maxine-Eye-Contact]] - companion video NIM for meeting and telepresence enhancement.
- [[NVIDIA-DeepStream]] - GPU video pipeline context; the current support matrix names DeepStream 8.0 in the software stack.
- [[NVIDIA-Video-Codec-SDK]] - NVDEC media hardware is important to compatibility and throughput.
- [[NVIDIA-AI-Enterprise]] - production deployment and support context for NIM microservices.
- [[TensorRT]] and [[Triton-Inference-Server]] - optimization and serving layers used by the NIM.

## Source Excerpts
- NVIDIA docs describe Active Speaker Detection NIM as detecting and identifying active speakers from visual and diarized audio data.
- The architecture section lists CUDA, TensorRT, Triton, and an NVIDIA AR SDK backend for inference.

## Resources
- [NVIDIA Active Speaker Detection NIM Overview](https://docs.nvidia.com/nim/maxine/active-speaker-detection/latest/overview.html)
- [NVIDIA Active Speaker Detection NIM Support Matrix](https://docs.nvidia.com/nim/maxine/active-speaker-detection/latest/support-matrix.html)
