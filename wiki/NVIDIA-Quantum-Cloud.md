# NVIDIA Quantum Cloud

**Type:** Platform
**Tags:** NVIDIA, Quantum Cloud, CUDA-Q, quantum computing, cloud, DGX Cloud, APIs
**Related:** [[NVIDIA-Quantum]], [[CUDA-Q]], [[CUDA-QX]], [[cuQuantum]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Quantum-InfiniBand]]
**Sources:** https://www.nvidia.com/en-us/solutions/quantum-computing/, https://www.nvidia.com/en-us/solutions/quantum-computing/cloud/
**Last Updated:** 2026-04-29

## Summary
NVIDIA Quantum Cloud is NVIDIA's cloud/API access path for CUDA-Q quantum computing projects on NVIDIA GPU systems. The current NVIDIA Quantum page positions it as a way to access NVIDIA's quantum computing platform through Quantum Cloud APIs, with CUDA-Q projects running across NVIDIA GPU systems.

## Detail

### Purpose
Quantum researchers often need GPU simulation, hybrid quantum-classical programming, and access to QPU/GPU-backed resources without building local infrastructure. NVIDIA Quantum Cloud provides a cloud-facing path for CUDA-Q workloads, experiments, and quantum simulation workflows.

### Platform role
- Runs [[CUDA-Q]] projects through Quantum Cloud APIs.
- Fits the same solution family as [[CUDA-QX]], [[cuQuantum]], and [[NVIDIA-NVQLink]].
- Adjacent to [[NVIDIA-DGX-Cloud]] where dedicated GPU capacity and enterprise support are needed.
- Current public material positions access as early-access/application oriented.

### NVIDIA context
Use this page for cloud access to the NVIDIA Quantum stack. Use [[NVIDIA-Quantum]] for the overall quantum platform, [[CUDA-Q]] for programming, and [[cuQuantum]] for local or cloud GPU simulation libraries.

## Connections
- [[NVIDIA-Quantum]] - Quantum Cloud is a cloud access path in the NVIDIA Quantum solution area.
- [[CUDA-Q]] - CUDA-Q projects are the primary workload unit.
- [[CUDA-QX]] - higher-level QEC/solver workloads can run as CUDA-Q projects.
- [[cuQuantum]] - quantum simulation workloads can use cuQuantum acceleration.
- [[NVIDIA-DGX-Cloud]] - cloud-hosted NVIDIA GPU capacity for AI/HPC and quantum workloads.
- [[NVIDIA-AI-Enterprise]] - enterprise software and support context adjacent to cloud-delivered workloads.

## Source Excerpts
- NVIDIA's current Quantum page describes Quantum Cloud as API access for running CUDA-Q projects on NVIDIA GPU systems.

## Resources
- [NVIDIA Quantum](https://www.nvidia.com/en-us/solutions/quantum-computing/)
- [NVIDIA Quantum Cloud URL](https://www.nvidia.com/en-us/solutions/quantum-computing/cloud/)
