# CUDA Compatibility

**Type:** Concept
**Tags:** NVIDIA, CUDA, compatibility, drivers, deployment, data center
**Related:** [[NVIDIA-CUDA]], [[CUDA-Blackwell-Compatibility-Guide]], [[CUDA-Hopper-Compatibility-Guide]], [[CUDA-Ada-Compatibility-Guide]], [[CUDA-Ampere-Compatibility-Guide]], [[CUDA-Turing-Compatibility-Guide]], [[CUDA-Features-Archive]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-DGX]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-GPU-Operator]]
**Sources:** https://docs.nvidia.com/deploy/cuda-compatibility/index.html, https://docs.nvidia.com/cuda/blackwell-compatibility-guide/index.html, https://docs.nvidia.com/cuda/hopper-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ada-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ampere-compatibility-guide/index.html, https://docs.nvidia.com/cuda/turing-compatibility-guide/index.html
**Last Updated:** 2026-04-29

## Summary
CUDA Compatibility defines how CUDA applications and toolkit components run across NVIDIA driver versions. It matters most in enterprise, data center, and managed cluster environments where application/toolkit upgrades and driver qualification schedules do not always move at the same pace.

## Detail

### Compatibility modes
- **Minor Version Compatibility:** CUDA 11 and later allow applications within a major CUDA release family to run on sufficiently new drivers, with documented limits.
- **Forward Compatibility:** CUDA compatibility packages allow some newer toolkit-built applications to run on older supported base drivers.
- **Driver/toolkit planning:** Compatibility guidance helps platform owners decide when a driver update is mandatory versus when a toolkit or container update can proceed independently.
- **Architecture binary compatibility:** architecture-specific guides such as [[CUDA-Blackwell-Compatibility-Guide]], [[CUDA-Hopper-Compatibility-Guide]], [[CUDA-Ada-Compatibility-Guide]], [[CUDA-Ampere-Compatibility-Guide]], and [[CUDA-Turing-Compatibility-Guide]] cover PTX/cubin compatibility for GPU generations.

### NVIDIA context
CUDA Compatibility is critical for [[NVIDIA-DGX]], Kubernetes GPU clusters, [[NVIDIA-AI-Enterprise]], and containerized workflows using [[NVIDIA-Container-Toolkit]] or [[NVIDIA-GPU-Operator]]. It reduces operational friction while preserving known constraints around driver features, GPUs, and supported platforms.

## Connections
- [[NVIDIA-Data-Center-GPU-Drivers]] - driver release branches determine which CUDA toolkits are supported.
- [[CUDA-Blackwell-Compatibility-Guide]] - PTX/cubin and build-target guidance for Blackwell GPUs.
- [[CUDA-Hopper-Compatibility-Guide]] - PTX/cubin and build-target guidance for Hopper GPUs.
- [[CUDA-Ada-Compatibility-Guide]] - PTX/cubin and build-target guidance for Ada GPUs.
- [[CUDA-Ampere-Compatibility-Guide]] - PTX/cubin and build-target guidance for Ampere GPUs.
- [[CUDA-Turing-Compatibility-Guide]] - PTX/cubin and build-target guidance for Turing GPUs.
- [[CUDA-Features-Archive]] - feature availability reference across CUDA releases.
- [[NVIDIA-Container-Toolkit]] - containers rely on the host driver, making compatibility planning essential.
- [[NVIDIA-GPU-Operator]] - automates driver stack deployment in Kubernetes environments.
- [[NVIDIA-AI-Enterprise]] - enterprise validated stacks depend on CUDA, driver, and container compatibility.
- [[NVIDIA-DGX]] - DGX OS/BaseOS releases include validated CUDA and driver combinations.

## Source Excerpts
- NVIDIA CUDA Compatibility docs cover minor-version and forward-compatibility behavior for CUDA applications and drivers.
