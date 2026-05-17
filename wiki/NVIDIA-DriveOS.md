# NVIDIA DriveOS

**Type:** Platform
**Tags:** NVIDIA, DriveOS, DRIVE, automotive, autonomous vehicles, safety, QNX, Linux, DriveWorks, TensorRT
**Related:** [[NVIDIA-Drive-Platform]], [[NVIDIA-DRIVE-AGX-Thor]], [[NVIDIA-DriveWorks]], [[TensorRT]], [[cuDLA]], [[CUDA-for-Tegra]], [[Nsight-Systems]], [[Nsight-Graphics]]
**Sources:** https://developer.nvidia.com/driveworks, https://developer.nvidia.com/drive/documentation, https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-sdk/introduction/introduction.html, https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-installation/requirements.html, https://developer.nvidia.com/nsight-graphics/get-started
**Last Updated:** 2026-04-29

## Summary
NVIDIA DriveOS is NVIDIA's automotive operating system and SDK foundation for DRIVE AGX platforms. Current public NVIDIA docs list DriveOS 7.0.3 Linux SDK material for DRIVE AGX Thor, with a stack covering bootloaders, virtualization/hypervisor support, guest OS environments, diagnostics, CUDA, TensorRT, cuDNN, NvMedia, NvStreams, DriveWorks, and developer tools. DriveOS is gated by the NVIDIA DRIVE AGX SDK Developer Program for full downloads, but several current public docs and product pages are available.

## Detail

### Purpose
DriveOS provides the safety- and security-oriented base software for developing autonomous driving and in-vehicle AI applications on DRIVE AGX. It is the automotive counterpart to Jetson's JetPack/Jetson Linux relationship, but with stricter automotive development, virtualization, safety, and sensor integration requirements.

### Key capabilities
- Linux or QNX application operating system support through the DRIVE software stack.
- DriveOS foundation components including bootloaders, a Type 1 hypervisor, virtualization, and platform diagnostics.
- SDK APIs and components for image processing, sensor integration, AI acceleration, low-overhead interprocess communication, debugging, and profiling.
- DriveOS 7.0.3 public docs for DRIVE AGX Thor, including installation, release notes, migration, developer guide, API reference, CUDA Toolkit 12.8, TensorRT 10.10.10, and cuDNN 9.7 references.
- Developer tools including Nsight Systems and Nsight Graphics.
- Integration point for [[NVIDIA-DriveWorks]], [[TensorRT]], CUDA, cuDNN, NvMedia, and NvStreams.

### Access note
NVIDIA public pages state that DriveOS downloads require DRIVE AGX SDK Developer Program membership. The wiki should keep DriveOS details to public NVIDIA pages and docs, not assume restricted release content beyond what is publicly visible.

## Connections
- [[NVIDIA-Drive-Platform]] - DriveOS is the software foundation of NVIDIA DRIVE AGX deployments.
- [[NVIDIA-DRIVE-AGX-Thor]] - current DRIVE AGX Thor dev kits are powered by DriveOS 7.x.
- [[NVIDIA-DriveWorks]] - DriveWorks is integrated into the DriveOS/DRIVE SDK development stack.
- [[TensorRT]] - DriveOS 7.0.3 public docs include TensorRT 10.10.10 for DRIVE OS.
- [[cuDLA]] - automotive SoCs use GPU/DLA style acceleration for perception and inference paths.
- [[CUDA-for-Tegra]] - DRIVE AGX is a Tegra-class integrated GPU platform with embedded CUDA considerations.
- [[Nsight-Systems]] - developer tool used for profiling and debugging DRIVE software workloads.
- [[Nsight-Graphics]] - current Nsight Graphics docs say it is bundled as part of DRIVE OS for DRIVE AGX development and deployment.

## Source Excerpts
- NVIDIA DriveOS developer pages describe DriveOS as an automotive OS and SDK for AI inference, computer vision, graphics, safety, and security use cases.
- Public DriveOS 7.0.3 docs state that the Linux SDK enables platform development with Thor SoC for automotive.
- NVIDIA DRIVE documentation lists DriveOS 7.0.3 Linux SDK docs, CUDA Toolkit 12.8, TensorRT 10.10.10, and cuDNN 9.7 for DRIVE AGX Thor.

## Resources
- [NVIDIA DriveOS SDK](https://developer.nvidia.com/driveworks)
- [NVIDIA DRIVE Documentation](https://developer.nvidia.com/drive/documentation)
- [DriveOS 7.0.3 Linux SDK Introduction](https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-sdk/introduction/introduction.html)
- [DriveOS 7.0.3 Installation Requirements](https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-installation/requirements.html)
