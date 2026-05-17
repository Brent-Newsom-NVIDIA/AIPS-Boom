# NVIDIA Capture SDK

**Type:** Technology
**Tags:** NVIDIA, Capture SDK, remote desktop, display capture, video encoding, streaming
**Related:** [[NVIDIA-Video-Codec-SDK]], [[NVIDIA-RTX]], [[NVIDIA-vGPU]], [[NVIDIA-Maxine]], [[NVIDIA-AI-for-Media-SDKs]], [[NVIDIA-Video-Effects-SDK]], [[NVIDIA-CloudXR]], [[NVIDIA-Developer-Program]]
**Sources:** https://developer.nvidia.com/capture-sdk
**Last Updated:** 2026-04-29

## Summary
NVIDIA Capture SDK, formerly GRID SDK, enables developers to capture and optionally encode display content on NVIDIA hardware. It is used for remote desktop, streaming, and display-buffer capture workflows on local, remote, or cloud GPUs.

## Detail
The SDK captures a desktop buffer as images or an image stream that can be compressed into a video bitstream for remote clients or local storage. It is adjacent to hardware video encode/decode through [[NVIDIA-Video-Codec-SDK]] and virtual workstation or remote GPU workflows through [[NVIDIA-vGPU]].

The docs note that NVFBC has been deprecated on Windows 10 and later, and point developers toward native Windows capture APIs as alternatives in those cases.

## Connections
- [[NVIDIA-Video-Codec-SDK]] - encode/decode layer commonly paired with captured frames.
- [[NVIDIA-vGPU]] - virtualized GPU and remote workstation environments.
- [[NVIDIA-RTX]] - RTX workstation/graphics workloads can require capture and streaming.
- [[NVIDIA-Maxine]] - media and video AI features can sit downstream of captured video.
- [[NVIDIA-AI-for-Media-SDKs]] and [[NVIDIA-Video-Effects-SDK]] - AI media effects can process captured video before encode, stream, or display.
- [[NVIDIA-Developer-Program]] - access channel for SDK downloads and updates.

## Source Excerpts
- NVIDIA describes Capture SDK as enabling developers to capture and optionally encode display content.
- The SDK supports remote desktop displays on NVIDIA hardware across local, remote, or cloud contexts.
