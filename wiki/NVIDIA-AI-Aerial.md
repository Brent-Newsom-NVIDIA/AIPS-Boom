# NVIDIA AI Aerial

**Type:** Platform
**Tags:** NVIDIA, AI Aerial, AI-RAN, 5G, 6G, telecom, CUDA
**Related:** [[NVIDIA-Omniverse]], [[NVIDIA-DGX]], [[NVIDIA-CUDA]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Spectrum-X]], [[NVIDIA-BlueField-DPU]], [[DOCA-GPUNetIO]], [[GPUDirect-RDMA]]
**Sources:** https://docs.nvidia.com/aerial/index.html, https://developer.nvidia.com/aerial
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Aerial is a suite of accelerated computing platforms, software libraries, and tools for building, training, simulating, and deploying AI-native wireless networks. It targets AI-RAN research and commercial development for 5G and 6G.

## Detail

### Purpose
Telecom networks increasingly need AI-native signal processing, simulation, optimization, and deployment pipelines. AI Aerial provides NVIDIA's software and platform direction for accelerated radio access network development.

### Key capabilities
- CUDA-accelerated 5G/6G pipeline generation from Python or MATLAB.
- Aerial RAN Computer platform family for AI-RAN deployments.
- 6G Developer Program access to software-defined RAN, AI/ML frameworks, and network digital twins.
- Omniverse-based simulation components for photorealistic scenes and deterministic ray-tracing channel models.
- Current DOCA GPUNetIO docs list Aerial 5G SDK as an application domain for ultra-low latency GPU network operations.

### NVIDIA context
AI Aerial connects [[NVIDIA-CUDA]], [[NVIDIA-Omniverse]], accelerated networking, and AI infrastructure into the telecom domain. It belongs in the wiki as a domain platform rather than a generic CUDA library.

## Connections
- [[NVIDIA-Omniverse]] - used for simulation and digital-twin pieces in 6G research workflows.
- [[NVIDIA-CUDA]] - CUDA acceleration underpins generated RAN pipelines.
- [[NVIDIA-Spectrum-X]] - networking platform adjacent to AI data center and telecom infrastructure.
- [[NVIDIA-BlueField-DPU]] - infrastructure offload and networking relevance for telco deployments.
- [[DOCA-GPUNetIO]] - GPU packet processing library listed by NVIDIA as relevant to Aerial 5G SDK.
- [[GPUDirect-RDMA]] - direct GPU-network transfer path for low-latency AI-RAN data movement.
- [[NVIDIA-DGX]] - AI training/simulation infrastructure for large models and digital twins.

## Source Excerpts
- NVIDIA AI Aerial docs describe accelerated platforms and software for AI-native 5G/6G wireless networks.
