# NVIDIA Turing Architecture

**Type:** Architecture
**Tags:** NVIDIA, Turing, GPU architecture, CUDA, RTX, Tensor Cores, RT Cores
**Related:** [[NVIDIA-RTX]], [[NVIDIA-Ada-Lovelace-Architecture]], [[NVIDIA-Ampere-Architecture]], [[NVIDIA-CUDA]], [[CUDA-Turing-Compatibility-Guide]], [[CUDA-Turing-Tuning-Guide]], [[CUDA-Compatibility]], [[NVIDIA-DLSS]]
**Sources:** https://docs.nvidia.com/cuda/turing-compatibility-guide/index.html, https://docs.nvidia.com/cuda/turing-tuning-guide/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Turing Architecture is an NVIDIA GPU generation that introduced the RTX era and remains documented in CUDA compatibility and tuning guides. It is relevant for CUDA developers maintaining software that runs across older RTX and data center GPU fleets.

## Detail
The Turing compatibility guide helps developers ensure CUDA applications run on GPUs based on Turing. The tuning guide describes Turing as retaining and extending the CUDA programming model from Pascal and Volta, with applications following best practices generally benefiting without code changes while additional tuning can leverage Turing features.

In the wiki, Turing is the predecessor context for Ada, Ampere, Hopper, and Blackwell compatibility discussions, and a key bridge between CUDA compute and RTX rendering.

## Connections
- [[NVIDIA-RTX]] - Turing introduced the RTX generation for real-time ray tracing.
- [[NVIDIA-Ada-Lovelace-Architecture]] - later RTX architecture.
- [[NVIDIA-Ampere-Architecture]] - successor generation for client and data center GPUs.
- [[CUDA-Turing-Compatibility-Guide]] - CUDA binary compatibility guidance for Turing GPUs.
- [[CUDA-Turing-Tuning-Guide]] - Turing-specific CUDA performance tuning guidance.
- [[CUDA-Compatibility]] - Turing docs focus on application compatibility across CUDA versions.
- [[NVIDIA-DLSS]] - DLSS and Tensor Core graphics features trace back through RTX architectures.

## Source Excerpts
- NVIDIA Turing compatibility docs guide CUDA developers targeting Turing GPUs.
- NVIDIA Turing tuning docs describe CUDA best practices and architecture-specific tuning opportunities.
