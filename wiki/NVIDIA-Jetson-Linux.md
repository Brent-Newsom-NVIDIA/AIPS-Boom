# NVIDIA Jetson Linux

**Type:** Platform
**Tags:** NVIDIA, Jetson Linux, L4T, Jetson, BSP, kernel, bootloader, Ubuntu, embedded Linux, edge AI
**Related:** [[NVIDIA-Jetson-Platform]], [[NVIDIA-JetPack-SDK]], [[NVIDIA-Jetson-Thor]], [[CUDA-for-Tegra]], [[cuDLA]], [[NVIDIA-Container-Toolkit]]
**Sources:** https://docs.nvidia.com/jetson/, https://docs.nvidia.com/jetson/archives/r38.4/DeveloperGuide/, https://docs.nvidia.com/jetson/archives/r38.4/DeveloperGuide/AR/JetsonSoftwareArchitecture.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Jetson Linux is the operating system and board support package layer for Jetson devices. It provides the Linux kernel, bootloader, NVIDIA drivers, firmware, flashing utilities, sample root filesystem, toolchain, hardware interfaces, and platform documentation used by [[NVIDIA-JetPack-SDK]]. Current Jetson Linux documentation includes release 38.4 for Jetson Thor-class platforms and separate 36.x documentation for Jetson Orin support.

## Detail

### Purpose
Jetson Linux is where Jetson hardware enablement lives. It covers device flashing, boot flow, UEFI, kernel customization, driver integration, multimedia, camera stacks, security, power management, peripheral bring-up, and module adaptation for moving from developer kits to production carrier boards.

### Current release positioning
- The Jetson software docs hub lists Jetson Linux Release 38.4 as the latest developer guide branch.
- The 38.4 guide notes that release 38.4 does not support the Jetson Orin family and points Orin users to the 36.4.4 GA release.
- The 38.4 software architecture docs describe a redesigned stack based on Linux kernel 6.8 and an Ubuntu 24.04 LTS-derived root filesystem for the next-generation Jetson Thor platform.
- Jetson Linux 36.x remains relevant for Jetson Orin production deployments.

### Key capabilities
- Kernel, bootloader, root filesystem, firmware, toolchain, and NVIDIA driver stack.
- Flashing, SDK Manager, APT repositories, package update mechanisms, and production module bring-up flows.
- Boot architecture, partitioning, UEFI adaptation, security, power management, display, camera, multimedia, and networking docs.
- Hardware interface documentation for Jetson Thor and Orin module families.
- Foundation for CUDA, TensorRT, multimedia, VPI, DeepStream, Isaac ROS, and containerized edge workloads.

## Connections
- [[NVIDIA-Jetson-Platform]] - Jetson Linux is the core OS/BSP layer for Jetson modules and developer kits.
- [[NVIDIA-JetPack-SDK]] - JetPack bundles Jetson Linux with CUDA-X, tools, samples, and higher-level SDKs.
- [[NVIDIA-Jetson-Thor]] - Jetson Linux 38.x is the current Thor-focused software branch.
- [[CUDA-for-Tegra]] - CUDA-on-Tegra guidance applies to Jetson Linux integrated-GPU deployments.
- [[cuDLA]] - DLA hardware programming depends on Jetson Linux, TensorRT, and device support.
- [[NVIDIA-Container-Toolkit]] - container runtime integration is a common Jetson Linux deployment path.

## Source Excerpts
- NVIDIA Jetson Linux docs describe the layer as the kernel, bootloader, drivers, flashing utilities, sample filesystem, and more for Jetson.
- The 38.4 guide explicitly separates Jetson Thor support from Jetson Orin support, which remains on 36.4.4.
- The software architecture docs describe Jetson software as optimized for physical AI, generative models, and real-time edge intelligence.

## Resources
- [Jetson Software Documentation](https://docs.nvidia.com/jetson/)
- [Jetson Linux 38.4 Developer Guide](https://docs.nvidia.com/jetson/archives/r38.4/DeveloperGuide/)
- [Jetson Software Architecture](https://docs.nvidia.com/jetson/archives/r38.4/DeveloperGuide/AR/JetsonSoftwareArchitecture.html)
