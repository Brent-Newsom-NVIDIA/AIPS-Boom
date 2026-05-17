# CUDA Installation Guide for Linux

**Type:** Guide
**Tags:** NVIDIA, CUDA, Linux, installation, drivers, package manager, runfile, WSL
**Related:** [[NVIDIA-CUDA]], [[CUDA-Quick-Start-Guide]], [[CUDA-Installation-Guide-Windows]], [[CUDA-on-WSL]], [[CUDA-Compatibility]], [[NVIDIA-Data-Center-GPU-Drivers]]
**Sources:** https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Installation Guide for Linux is NVIDIA's detailed setup guide for installing CUDA Toolkit on Linux systems. It covers prerequisites, distro-specific package-manager flows, runfile installation, Conda, pip wheels, WSL, driver installation, and post-install validation.

## Detail
The Linux guide is the canonical source for CUDA package installation on RHEL-family distributions, Fedora, SUSE, OpenSUSE, Ubuntu, Debian, Amazon Linux, Azure Linux, and WSL. It also covers avoiding conflicts between installation methods and managing CUDA packages over time.

This page is separate from [[CUDA-Quick-Start-Guide]] because the quick start gives minimal setup instructions, while the Linux installation guide is the full operational reference for supported Linux hosts.

## Connections
- [[CUDA-Quick-Start-Guide]] - shorter first-run path before detailed Linux installation.
- [[CUDA-on-WSL]] - WSL-specific CUDA Linux environment path.
- [[CUDA-Compatibility]] - driver and toolkit compatibility rules affect installation decisions.
- [[NVIDIA-Data-Center-GPU-Drivers]] - driver deployment is part of production Linux CUDA setup.
- [[NVIDIA-Container-Toolkit]] - containerized CUDA workloads depend on the host driver/runtime setup.

## Source Excerpts
- NVIDIA's Linux installation guide covers package-manager installation, runfile installation, Conda, pip wheels, and WSL-related setup.
