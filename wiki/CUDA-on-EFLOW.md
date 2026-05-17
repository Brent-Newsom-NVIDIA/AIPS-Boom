# CUDA on EFLOW

**Type:** Technology
**Tags:** NVIDIA, CUDA, EFLOW, Azure IoT Edge, Windows, edge AI, containers
**Related:** [[NVIDIA-CUDA]], [[CUDA-on-WSL]], [[CUDA-for-Tegra]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-DeepStream]]
**Sources:** https://docs.nvidia.com/cuda/eflow-users-guide/index.html
**Last Updated:** 2026-04-29

## Summary
CUDA on EFLOW documents how CUDA and NVIDIA GPU-accelerated cloud-native applications can be deployed on EFLOW-enabled Windows devices. EFLOW is Azure IoT Edge for Linux on Windows, a Microsoft technology for Linux AI containers on Windows edge systems.

## Detail
The EFLOW guide describes a Windows host with virtualization enabled and a Linux virtual machine used to run edge AI containers. NVIDIA's guidance focuses on deploying CUDA and GPU-accelerated containerized applications in that environment.

This is distinct from [[CUDA-on-WSL]], which targets developer Linux environments inside Windows. EFLOW is more about Azure IoT Edge and edge deployment patterns.

## Connections
- [[CUDA-on-WSL]] - related Windows/Linux CUDA path for development workflows.
- [[NVIDIA-Container-Toolkit]] - containerized GPU application support.
- [[NVIDIA-DeepStream]] - common edge video analytics workload.
- [[NVIDIA-Jetson-Platform]] - another edge AI deployment family.
- [[CUDA-for-Tegra]] - CUDA guidance for embedded NVIDIA SoCs.

## Source Excerpts
- NVIDIA's EFLOW guide describes deploying CUDA and NVIDIA GPU-accelerated cloud-native applications on EFLOW-enabled Windows devices.
