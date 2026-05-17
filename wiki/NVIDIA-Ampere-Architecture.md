# NVIDIA Ampere Architecture

**Type:** Architecture
**Tags:** NVIDIA, Ampere, GPU architecture, A100, CUDA, Tensor Cores, asynchronous copy
**Related:** [[NVIDIA-Hopper-Architecture]], [[NVIDIA-Ada-Lovelace-Architecture]], [[NVIDIA-Turing-Architecture]], [[NVIDIA-CUDA]], [[CUDA-Ampere-Compatibility-Guide]], [[CUDA-Ampere-Tuning-Guide]], [[CUDA-Compatibility]], [[CUDA-Streams]], [[cuBLAS]]
**Sources:** https://docs.nvidia.com/cuda/ampere-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ampere-tuning-guide/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Ampere Architecture is the CUDA GPU generation represented by data center GPUs such as A100 and by Ampere-family client/workstation GPUs. NVIDIA's current CUDA docs include Ampere compatibility and tuning guides for building and optimizing CUDA applications on Ampere GPUs.

## Detail
The compatibility guide focuses on building CUDA applications that run on Ampere GPUs, including applications built with older CUDA toolkits and independent thread scheduling considerations. The tuning guide highlights performance features such as asynchronous global-to-shared memory copy, split arrive/wait barriers, warp-level reductions, larger memory capacity, higher HBM bandwidth, and L2 capacity/residency controls.

Ampere is a key middle generation in the wiki because it introduced widely deployed A100 infrastructure and set the baseline for many CUDA 11+ and AI training deployments before Hopper and Blackwell.

## Connections
- [[NVIDIA-Hopper-Architecture]] - Hopper succeeds Ampere for data center AI workloads.
- [[NVIDIA-Ada-Lovelace-Architecture]] - Ada is a related later architecture for graphics/workstation/client GPUs.
- [[CUDA-Ampere-Compatibility-Guide]] - architecture-specific CUDA binary compatibility guidance for Ampere.
- [[CUDA-Ampere-Tuning-Guide]] - Ampere-specific CUDA performance tuning guidance.
- [[CUDA-Compatibility]] - Ampere docs cover compatibility for older CUDA applications.
- [[CUDA-Streams]] - asynchronous copy and overlap patterns matter for tuning.
- [[cuBLAS]] - Tensor Core dense math libraries are central to Ampere AI performance.

## Source Excerpts
- NVIDIA Ampere compatibility docs guide developers building CUDA applications for Ampere GPUs.
- NVIDIA Ampere tuning docs discuss asynchronous copy, barriers, reductions, memory capacity, HBM bandwidth, and L2 controls.
