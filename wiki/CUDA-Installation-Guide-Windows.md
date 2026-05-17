# CUDA Installation Guide for Microsoft Windows

**Type:** Guide
**Tags:** NVIDIA, CUDA, Windows, installation, Visual Studio, drivers, setup
**Related:** [[NVIDIA-CUDA]], [[CUDA-Quick-Start-Guide]], [[CUDA-Installation-Guide-Linux]], [[Nsight-Visual-Studio-Edition]], [[CUDA-on-WSL]], [[CUDA-Compatibility]]
**Sources:** https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/index.html
**Last Updated:** 2026-04-29

## Summary
The CUDA Installation Guide for Microsoft Windows is NVIDIA's setup guide for installing CUDA Toolkit and validating CUDA development tools on Windows. It covers system requirements, supported Windows and Visual Studio versions, toolkit installation, and verification with sample projects.

## Detail
The guide is especially relevant for developers building CUDA C++ applications in Visual Studio or validating Windows workstation setup before moving to Linux, WSL, DGX, or cloud GPU environments. It also connects directly to [[Nsight-Visual-Studio-Edition]], which is part of the Windows CUDA developer workflow.

Windows CUDA setup should be tracked separately from [[CUDA-on-WSL]] because native Windows CUDA development and Linux-in-WSL CUDA development have different toolchains and operational assumptions.

## Connections
- [[CUDA-Quick-Start-Guide]] - minimal setup path for first CUDA verification.
- [[Nsight-Visual-Studio-Edition]] - Visual Studio IDE integration for CUDA development on Windows.
- [[CUDA-on-WSL]] - alternate Windows-hosted Linux development path.
- [[CUDA-Compatibility]] - driver/toolkit compatibility still applies to Windows hosts.
- [[NVCC]] - compiler driver used after Windows CUDA setup is complete.

## Source Excerpts
- NVIDIA's Windows installation guide explains CUDA Toolkit setup, Windows requirements, Visual Studio support, and installation verification.
