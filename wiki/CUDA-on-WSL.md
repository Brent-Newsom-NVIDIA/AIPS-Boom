# CUDA on WSL

**Type:** Technology
**Tags:** NVIDIA, CUDA, WSL, Windows, Linux, developer workflow
**Related:** [[NVIDIA-CUDA]], [[CUDA-Compatibility]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-NIM-on-WSL2]], [[PyTorch]], [[TensorRT]]
**Sources:** https://docs.nvidia.com/cuda/wsl-user-guide/index.html
**Last Updated:** 2026-04-29

## Summary
CUDA on WSL documents NVIDIA GPU compute support for Linux CUDA applications running inside Windows Subsystem for Linux 2. It enables Windows-based developers to use Linux CUDA tooling and frameworks while relying on supported NVIDIA Windows drivers.

## Detail

### Purpose
Many AI and CUDA development workflows assume Linux packages, shells, and containers, while developers may use Windows workstations. CUDA on WSL bridges that environment gap by enabling supported CUDA compute workflows inside WSL 2.

### Key capabilities
- Guidance for installing NVIDIA GPU support for WSL 2.
- Linux development environment setup on Windows.
- Notes on supported NVIDIA compute software and known limitations.
- Container-runtime guidance for CUDA workloads in WSL environments.

### NVIDIA context
CUDA on WSL is important for workstation developers working with [[PyTorch]], [[TensorRT]], CUDA samples, or containerized AI workflows before deploying to Linux servers, [[NVIDIA-DGX]], or cloud GPU instances.

## Connections
- [[NVIDIA-Data-Center-GPU-Drivers]] - driver support determines what CUDA workloads can run.
- [[NVIDIA-Container-Toolkit]] - enables GPU containers in supported WSL workflows.
- [[NVIDIA-NIM-on-WSL2]] - NIM-specific WSL2 deployment path for RTX Windows systems.
- [[CUDA-Compatibility]] - driver/toolkit compatibility remains relevant under WSL.
- [[PyTorch]] - common CUDA-on-WSL development framework.
- [[TensorRT]] - inference development can start on Windows workstations using Linux tooling.

## Source Excerpts
- NVIDIA's CUDA on WSL guide covers GPU support, Linux setup, known limitations, and container-runtime issues.
