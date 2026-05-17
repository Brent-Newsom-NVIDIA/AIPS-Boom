# NVIDIA VPI

**Type:** Technology
**Tags:** NVIDIA, VPI, Vision Programming Interface, computer vision, image processing, Jetson, CUDA, PVA, VIC, OFA
**Related:** [[NVIDIA-Jetson-Platform]], [[NVIDIA-Jetson-Thor]], [[NVIDIA-JetPack-SDK]], [[Isaac-ROS-Image-Pipeline]], [[Isaac-ROS-AprilTag]], [[Isaac-ROS-DNN-Stereo-Depth]], [[CUDA-for-Tegra]], [[OpenCV-CUDA]], [[CV-CUDA]]
**Sources:** https://docs.nvidia.com/vpi/4.0/index.html, https://docs.nvidia.com/vpi/4.0/architecture.html, https://docs.nvidia.com/vpi/release_notes.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA VPI (Vision Programming Interface) is a computer vision and image processing library for NVIDIA embedded and discrete devices. It provides a uniform C/C++ and Python-accessible API over multiple hardware backends, including CPU, CUDA GPU, PVA, VIC, and OFA where supported. Current VPI 4.0 documentation adds Jetson AGX Thor/T5000/T4000 and Blackwell-era support signals, making VPI a key piece of the Jetson physical AI vision stack.

## Detail

### Purpose
Vision pipelines on Jetson often need to combine GPU inference with dedicated vision, video, and optical-flow hardware. VPI abstracts these hardware backends behind a single API so developers can route image processing and CV algorithms to the best engine without rewriting each stage against separate low-level APIs.

### Key capabilities
- Algorithms for stereo disparity, KLT feature tracking, perspective warp, Harris corners, remap, pyramidal LK optical flow, lens distortion correction, dense optical flow, and background subtraction.
- Backend execution on CPU, CUDA GPU, PVA, VIC, and OFA depending on platform and algorithm.
- Streams, events, images, arrays, pyramids, warp maps, contexts, and payloads for asynchronous vision pipelines.
- Zero-copy memory mapping and interop with OpenCV and CUDA-based projects.
- VPI 4.0 release notes call out Jetson AGX Thor DevKit, Jetson T5000/T4000, IGX Thor, CUDA 12/13 dGPU support, and Ubuntu 24.04 testing.

### NVIDIA context
VPI complements [[OpenCV-CUDA]] and [[CV-CUDA]] but is especially important on [[NVIDIA-Jetson-Platform]] because it can use dedicated embedded hardware such as PVA, VIC, and OFA. On [[NVIDIA-Jetson-Thor]], VPI connects Blackwell GPU compute, PVA v3, camera pipelines, and real-time robotics perception.

## Connections
- [[NVIDIA-Jetson-Platform]] - VPI is a core Jetson vision and image-processing library.
- [[NVIDIA-Jetson-Thor]] - VPI 4.0 adds current-generation Jetson Thor support.
- [[NVIDIA-JetPack-SDK]] - VPI ships as part of the JetPack edge AI software stack.
- [[Isaac-ROS-Image-Pipeline]] - Isaac ROS camera preprocessing package adjacent to VPI-style image processing and hardware acceleration.
- [[Isaac-ROS-AprilTag]] - accelerated fiducial detection package with Jetson PVA backend support.
- [[Isaac-ROS-DNN-Stereo-Depth]] - stereo-depth workflows that can sit near VPI/Jetson camera processing.
- [[CUDA-for-Tegra]] - VPI often runs alongside CUDA on Tegra/Jetson integrated GPU platforms.
- [[OpenCV-CUDA]] - VPI interoperates with OpenCV-style projects while exposing NVIDIA-specific backends.
- [[CV-CUDA]] - adjacent NVIDIA computer vision acceleration library for AI pre/post-processing.

## Source Excerpts
- NVIDIA VPI docs describe it as a CV/IP library spanning embedded and discrete NVIDIA devices.
- VPI 4.0 docs list CPU, CUDA, PVA, VIC, and OFA as backend directions depending on platform support.
- Current VPI release notes list Jetson AGX Thor, Jetson T5000/T4000, and CUDA 13/Blackwell support signals.

## Resources
- [VPI 4.0 Documentation](https://docs.nvidia.com/vpi/4.0/index.html)
- [VPI Architecture](https://docs.nvidia.com/vpi/4.0/architecture.html)
- [VPI Release Notes](https://docs.nvidia.com/vpi/release_notes.html)
