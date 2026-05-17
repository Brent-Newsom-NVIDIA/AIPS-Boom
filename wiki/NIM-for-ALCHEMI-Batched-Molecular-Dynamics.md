# NIM for ALCHEMI Batched Molecular Dynamics

**Type:** Microservice
**Tags:** NVIDIA, NIM, ALCHEMI, batched molecular dynamics, BMD, molecular simulation, materials science, MLIP, MACE, AIMNet2, TensorNet
**Related:** [[NVIDIA-NIM]], [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]], [[NVIDIA-BioNeMo]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[cuEquivariance]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-CUDA]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/alchemi/alchemi-bmd/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM for ALCHEMI Batched Molecular Dynamics (BMD) is a NIM microservice for running batched molecular dynamics simulations using machine learning interatomic potentials. Current NVIDIA docs describe it as enabling near-DFT-accuracy molecular dynamics at a fraction of traditional computational cost with MACE, AIMNet2, and TensorNet models optimized for NVIDIA GPUs.

## Detail

### Purpose
Batched molecular dynamics lets researchers study the time evolution of atomic systems across many molecules or materials candidates. It is relevant to thermodynamic properties, phase transitions, transport, ligand binding, conformational sampling, free-energy workflows, and reaction dynamics.

### Current scope
- Supports NVE, NVT, and NPT simulation ensembles.
- Uses dynamic batching to improve GPU utilization across concurrent MD requests.
- Returns trajectory snapshots, positions, velocities, energies, and optional stress tensors.
- Supports restart from saved states for chunked long-running simulations.
- Supports external electric fields for AIMNet2 models.
- Allows per-request simulation parameters such as temperature, timestep, ensemble, and barostat settings.
- Supports MLIP model types selected through `ALCHEMI_NIM_MODEL_TYPE`, including MACE, TensorNet, and AIMNet2.
- Includes MACE-MPA-0 as a bundled/default model path when the container runs with an NGC API key.

### NVIDIA context
BMD is the simulation counterpart to [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]]. Together they form an ALCHEMI NIM path for atomistic modeling pipelines that need GPU-accelerated relaxation and molecular dynamics in a consistent [[NVIDIA-NIM]] deployment model.

## Connections
- [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]] - companion ALCHEMI NIM for relaxing structures before dynamics or screening.
- [[NVIDIA-BioNeMo]] and [[NVIDIA-Clara]] - life-sciences and drug-discovery context for molecular simulation workflows.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment and support context.
- [[cuEquivariance]] - acceleration context for MACE-style geometry-aware MLIP models.
- [[TensorRT]] and [[Triton-Inference-Server]] - optimized inference and serving context for NIM deployments.
- [[NVIDIA-CUDA]] and [[NGC]] - GPU software and container distribution context.

## Source Excerpts
- NVIDIA docs describe BMD as a high-performance engine for batched molecular dynamics simulations using MLIPs.
- The current docs list NVE, NVT, and NPT ensembles plus trajectory output and restart capability.

## Resources
- [NVIDIA NIM for ALCHEMI Batched Molecular Dynamics Overview](https://docs.nvidia.com/nim/alchemi/alchemi-bmd/latest/overview.html)
