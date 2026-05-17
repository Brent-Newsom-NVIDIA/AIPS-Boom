# NVIDIA DRIVE AGX Thor

**Type:** Platform
**Tags:** NVIDIA, DRIVE AGX Thor, DRIVE, automotive, Blackwell, DriveOS, autonomous vehicles, ADAS, edge AI
**Related:** [[NVIDIA-Drive-Platform]], [[NVIDIA-DriveOS]], [[NVIDIA-DriveWorks]], [[NVIDIA-Blackwell-Architecture]], [[NIM-for-DoMINO-Automotive-Aero]], [[TensorRT]], [[CUDA-for-Tegra]], [[cuDLA]]
**Sources:** https://developer.nvidia.com/drive/agx, https://developer.nvidia.com/drive/documentation, https://developer.nvidia.com/blog/?p=105444, https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-sdk/introduction/introduction.html, https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA DRIVE AGX Thor is NVIDIA's current DRIVE AGX development platform for production-level autonomous vehicle and AI cockpit development. Public NVIDIA pages describe DRIVE AGX Thor Developer Kit SKUs for bench and in-vehicle development, powered by a Thor SoC with Blackwell-class GPU, Arm Neoverse V3AE CPU, automotive I/O, DriveOS 7.x, DriveWorks, CUDA, TensorRT, NvMedia, and NvStreams. This page consolidates DRIVE AGX Thor hardware/developer-kit information rather than creating separate pages for bench, in-vehicle, or SKU-specific documents.

## Detail

### Purpose
DRIVE AGX Thor gives automotive developers a reference compute platform for testing and building production-oriented AV and in-vehicle AI software. It supports development across perception, sensor fusion, planning, cockpit AI, generative AI, and vehicle integration workflows.

### Key capabilities
- Up to 2,000 FP4 TFLOPS / 1,000 INT8 TOPS class AI performance signal for multiple concurrent AI inference pipelines.
- Production auto-grade silicon orientation with safety and security architecture.
- Automotive I/O including GMSL camera support, Ethernet, CAN, DisplayPort, and vehicle harness/accessory paths.
- DriveOS 7.x software stack with DriveWorks, CUDA, TensorRT, NvMedia, NvStreams, cuDNN, and developer tools.
- Public documentation references DriveOS 7.0.3 Linux SDK docs, release notes, migration guide, API references, TensorRT 10.10.10, and cuDNN 9.7 for DRIVE OS.
- DriveOS LLM SDK and TensorRT 10 integration are public blog signals for low-latency in-vehicle and AV AI development.

### NVIDIA context
DRIVE AGX Thor is the automotive counterpart to [[NVIDIA-Jetson-Thor]]: both bring Thor/Blackwell-era edge AI into physical systems, but DRIVE targets automotive safety, software, sensors, and development-program workflows. [[NIM-for-DoMINO-Automotive-Aero]] is adjacent as a design-time automotive aerodynamics surrogate NIM rather than an on-vehicle DRIVE runtime component.

## Connections
- [[NVIDIA-Drive-Platform]] - parent autonomous vehicle platform.
- [[NVIDIA-DriveOS]] - current operating system and SDK foundation for DRIVE AGX Thor.
- [[NVIDIA-DriveWorks]] - AV middleware and algorithm SDK used on DRIVE AGX platforms.
- [[NVIDIA-Blackwell-Architecture]] - Thor uses Blackwell-class GPU capabilities.
- [[NIM-for-DoMINO-Automotive-Aero]] - automotive design/simulation NIM adjacent to DRIVE vehicle-development workflows.
- [[TensorRT]] - inference optimization layer in DriveOS and DRIVE AGX Thor AI pipelines.
- [[CUDA-for-Tegra]] - DRIVE AGX Thor is a Tegra-class embedded platform with integrated GPU behavior.
- [[cuDLA]] - DLA/accelerator concepts are part of DRIVE automotive inference planning, especially for Orin-era platforms.

## Source Excerpts
- NVIDIA DRIVE AGX pages describe Thor developer kits for bench and in-vehicle development.
- The DRIVE AGX Thor page lists DriveOS with DriveWorks, CUDA, cuDNN, TensorRT, NvMedia, and NvStreams as SDK support.
- NVIDIA's DRIVE AGX Thor blog states that DriveOS 7 powers the developer kit and integrates TensorRT 10.

## Resources
- [DRIVE AGX Developer Kits](https://developer.nvidia.com/drive/agx)
- [NVIDIA DRIVE Documentation](https://developer.nvidia.com/drive/documentation)
- [DRIVE AGX Thor Developer Kit Blog](https://developer.nvidia.com/blog/?p=105444)
- [DriveOS 7.0.3 Linux SDK Introduction](https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-sdk/introduction/introduction.html)
