# cuDLA

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, DLA, Deep Learning Accelerator, Embedded, Automotive, Jetson, CUDA-X
**Related:** [[cuDNN]], [[TensorRT]], [[NVCC]], [[NVIDIA-Isaac]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-JetPack-SDK]], [[NVIDIA-Jetson-Linux]], [[NVIDIA-DriveOS]], [[NVIDIA-DRIVE-AGX-Thor]]
**Sources:** NVIDIA official documentation, docs.nvidia.com/cuda/cuda-for-tegra-appnote
**Last Updated:** 2026-04-09

## Summary
cuDLA is NVIDIA's programming interface that enables CUDA applications to submit inference workloads to the Deep Learning Accelerator (DLA) hardware engine present on NVIDIA Tegra SoCs (Jetson AGX Xavier, Jetson AGX Orin, DRIVE AGX). The DLA is a fixed-function neural network inference engine that delivers power-efficient deep learning inference alongside the GPU. cuDLA allows developers to leverage DLA from within CUDA streams, enabling fine-grained scheduling of inference workloads between GPU and DLA for optimal power and performance efficiency.

## Detail

### Purpose
cuDLA solves the integration challenge of using DLA alongside CUDA GPU compute. On safety-critical automotive and robotics platforms, running inference on DLA frees GPU resources for other tasks while consuming significantly less power. cuDLA provides a CUDA-native API for DLA task submission, eliminating the overhead of the traditional TensorRT-managed DLA path and giving developers direct, low-latency control over DLA execution.

### Key Features
- CUDA-integrated DLA task submission via `cudlaCreateDevice` / `cudlaSubmitTask`
- Hybrid inference: split network layers between DLA and GPU within a single pipeline
- Zero-copy tensor sharing between CUDA and DLA via CUDA memory addresses
- DLA standalone mode and CUDA-integrated (hybrid) mode
- Compile-time DLA loadable generation via TensorRT DLA backend
- DLA-CUDA synchronization via CUDA events and streams
- Supports DLA engines compiled from TensorRT with `--useDLACore` flag
- Per-layer profiling of DLA execution
- Available on: Jetson AGX Xavier (2x DLA), Jetson AGX Orin (2x DLA), DRIVE AGX Orin
- Power consumption: DLA typically 10-15x more power-efficient than GPU for supported layers

### Use Cases
- Automotive ADAS: running detection/segmentation on DLA while GPU handles planning/rendering
- Robotics: power-constrained mobile robot inference
- Industrial IoT: always-on inference on Jetson edge devices
- Multi-tenant inference: reserving GPU for latency-sensitive tasks while DLA handles background inference
- Safety-critical systems requiring hardware redundancy (GPU + DLA running same network)
- Drone and UAV perception systems

### Hardware Requirements
- NVIDIA Tegra SoC with DLA engine: Jetson AGX Xavier, Jetson AGX Orin, DRIVE AGX Orin
- CUDA 10.2 or higher (Jetson Linux)
- TensorRT 7.x or higher for DLA loadable compilation
- JetPack 4.x / 5.x / 6.x for Jetson; DRIVE OS for automotive

### Language Bindings
- C (primary cuDLA API)
- C++ (typical usage pattern)

## Connections
- [[cuDNN]] — DLA implements a subset of cuDNN-equivalent operations in fixed-function hardware
- [[TensorRT]] — TensorRT compiles DLA loadables (`.nv_dla_loadable`) consumed by cuDLA
- [[NVCC]] — cuDLA API calls compiled as part of CUDA applications via NVCC
- [[NVIDIA-Isaac]] — Isaac ROS inference pipelines on Jetson Orin can route appropriate layers to DLA via cuDLA
- [[NVIDIA-Jetson-Platform]] - Jetson platforms expose DLA hardware on supported SoCs.
- [[NVIDIA-JetPack-SDK]] - bundles the Jetson software stack used with DLA-capable devices.
- [[NVIDIA-Jetson-Linux]] - OS/BSP foundation for DLA device support and driver integration.
- [[NVIDIA-DriveOS]] - automotive software stack for DRIVE AGX inference and accelerator development.
- [[NVIDIA-DRIVE-AGX-Thor]] - current DRIVE platform adjacent to DLA/accelerator planning, with Orin-era DLA concepts still relevant.

## Resources
- [cuDLA Documentation](https://docs.nvidia.com/cuda/cuda-for-tegra-appnote/index.html)
- [cuDLA API Reference](https://docs.nvidia.com/cuda/cudla-api/index.html)
- [JetPack Documentation](https://developer.nvidia.com/embedded/jetpack)
- [TensorRT DLA Guide](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/#dla-layers)
