# CUDA for Tegra

**Type:** Technology
**Tags:** NVIDIA, CUDA, Tegra, Jetson, DRIVE, embedded, edge AI
**Related:** [[NVIDIA-CUDA]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-JetPack-SDK]], [[NVIDIA-Jetson-Linux]], [[NVIDIA-Jetson-Thor]], [[NVIDIA-Drive-Platform]], [[NVIDIA-DriveOS]], [[NVIDIA-DRIVE-AGX-Thor]], [[cuDLA]], [[CUDA-Unified-Memory]], [[NVIDIA-DeepStream]]
**Sources:** https://docs.nvidia.com/cuda/cuda-for-tegra-appnote/index.html
**Last Updated:** 2026-04-29

## Summary
CUDA for Tegra is NVIDIA's application note for using CUDA on Tegra integrated GPU platforms such as Jetson and DRIVE. It focuses on memory architecture, synchronization, feature support, and interoperability considerations that differ from discrete GPU systems.

## Detail

### Purpose
Tegra systems combine CPU, GPU, memory, display, camera, and accelerators in embedded SoCs. CUDA applications on these platforms need to account for integrated memory behavior, allocation limits, pinned memory guidance, EGL interoperability, and features that may differ from data center GPUs.

### Key capabilities
- Guidance for porting CUDA code between discrete GPU and Tegra integrated GPU environments.
- Memory architecture notes for integrated GPUs.
- Unified memory and pinned-memory considerations.
- EGL interoperability flows for producer/consumer pipelines.
- Notes on CUDA feature support limitations on Tegra.

### NVIDIA context
CUDA for Tegra connects the core CUDA platform to [[NVIDIA-Jetson-Platform]] edge AI and [[NVIDIA-Drive-Platform]] autonomous-vehicle workloads, where camera/video pipelines, DLA, and GPU compute often run together.

## Connections
- [[NVIDIA-Jetson-Platform]] - primary developer platform for embedded CUDA on Tegra.
- [[NVIDIA-JetPack-SDK]] - bundles CUDA and CUDA-X components for Jetson deployments.
- [[NVIDIA-Jetson-Linux]] - OS/BSP layer where CUDA on Tegra applications run.
- [[NVIDIA-Jetson-Thor]] - current Blackwell-generation Jetson platform for physical AI workloads.
- [[NVIDIA-Drive-Platform]] - DRIVE SoCs use related embedded GPU concepts.
- [[NVIDIA-DriveOS]] - DriveOS is the automotive software stack where DRIVE AGX CUDA workloads run.
- [[NVIDIA-DRIVE-AGX-Thor]] - current automotive Thor platform with embedded GPU behavior.
- [[cuDLA]] - DLA and CUDA often coexist in Jetson/DRIVE inference pipelines.
- [[CUDA-Unified-Memory]] - memory behavior differs between integrated and discrete GPUs.
- [[NVIDIA-DeepStream]] - streaming analytics pipelines on Jetson use CUDA and multimedia interoperability.

## Source Excerpts
- NVIDIA's CUDA for Tegra note covers memory architecture, unified memory, synchronization, EGL interoperability, and unsupported-feature considerations.
