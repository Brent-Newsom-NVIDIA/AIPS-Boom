# NVIDIA NIM on WSL2

**Type:** Deployment Guide
**Tags:** NVIDIA, NIM, WSL2, Windows, RTX, Podman, Container Toolkit, AI Workbench, local inference
**Related:** [[NVIDIA-NIM]], [[CUDA-on-WSL]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-AI-Workbench]], [[NVIDIA-RTX]], [[NGC]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/nim/wsl2/latest/index.html, https://docs.nvidia.com/nim/wsl2/latest/getting-started.html, https://docs.nvidia.com/nim/wsl2/latest/setting-up-port-forwarding.html, https://docs.nvidia.com/nim/wsl2/latest/benchmarking.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM on WSL2 is NVIDIA's deployment guide for running certain downloadable NIM microservices on RTX Windows systems through Windows Subsystem for Linux 2. It covers supported hardware/software, the NVIDIA NIM WSL2 installer, manual setup with Podman and NVIDIA Container Toolkit, verification, port forwarding, benchmarking, and deleting NIMs.

## Detail

### Purpose
NIM on WSL2 gives Windows workstation users a local path to test and develop with downloadable [[NVIDIA-NIM]] containers without moving immediately to a Linux server or cloud GPU cluster. It is especially relevant for RTX developers who want Linux container workflows from a Windows machine.

### Current scope
- Certain downloadable NIMs can run on RTX Windows systems through WSL2.
- Supported GPU class in the current getting-started guide is RTX 40-series and 50-series GeForce GPUs, subject to model-specific requirements.
- Windows 11 build 23H2 or later and at least 12 GB of RAM are listed.
- NVIDIA Windows driver minimum version is 570.
- The recommended path uses the NVIDIA NIM WSL2 installer, which includes NVIDIA AI Workbench.
- Manual setup covers Ubuntu 24.04 or later in WSL2, Podman, NVIDIA Container Toolkit, and CDI generation with `nvidia-ctk`.
- Verification uses `nvidia-smi`, CUDA sample containers, and `nvidia-ctk --version`.
- Operational docs cover WSL2 port forwarding, benchmarking, and deleting NIMs.

### NVIDIA context
NIM on WSL2 sits between developer-workstation experimentation and production NIM deployment. Use it for local RTX/Windows development. Use [[NVIDIA-NIM-on-GKE]], [[NVIDIA-NIM-Operator]], [[NVIDIA-GPU-Operator]], or [[NVIDIA-AI-Enterprise-Cloud-Deployment]] for cloud or Kubernetes operations.

## Connections
- [[NVIDIA-NIM]] - NIM on WSL2 is a local deployment path for downloadable NIM containers.
- [[CUDA-on-WSL]] - underlying NVIDIA CUDA-on-WSL support for GPU compute from Linux tooling on Windows.
- [[NVIDIA-Container-Toolkit]] - manual setup uses NVIDIA Container Toolkit and CDI generation for GPU access from containers.
- [[NVIDIA-AI-Workbench]] - included in the recommended NVIDIA NIM WSL2 installer path.
- [[NVIDIA-RTX]] - target workstation/GPU context for local RTX development.
- [[NGC]] - NIM container and model assets are pulled through NVIDIA catalog/registry workflows.
- [[NVIDIA-CUDA]] - platform beneath CUDA sample verification and GPU container execution.

## Source Excerpts
- NVIDIA says certain downloadable NIMs can be used on RTX Windows systems with WSL2.
- The getting-started guide lists RTX 40/50 GeForce GPUs, Windows 11 23H2+, 12 GB RAM, and NVIDIA driver 570+ as key requirements.

## Resources
- [About NVIDIA NIM on WSL2](https://docs.nvidia.com/nim/wsl2/latest/index.html)
- [NIM on WSL2 Getting Started](https://docs.nvidia.com/nim/wsl2/latest/getting-started.html)
- [NIM on WSL2 Port Forwarding](https://docs.nvidia.com/nim/wsl2/latest/setting-up-port-forwarding.html)
- [NIM on WSL2 Benchmarking](https://docs.nvidia.com/nim/wsl2/latest/benchmarking.html)
