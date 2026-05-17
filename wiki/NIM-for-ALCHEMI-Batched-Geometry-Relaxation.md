# NIM for ALCHEMI Batched Geometry Relaxation

**Type:** Microservice
**Tags:** NVIDIA, NIM, ALCHEMI, batched geometry relaxation, BGR, molecular simulation, materials science, MLIP, MACE, AIMNet2, TensorNet
**Related:** [[NVIDIA-NIM]], [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]], [[NVIDIA-BioNeMo]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[cuEquivariance]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-CUDA]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/alchemi/alchemi-bgr/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM for ALCHEMI Batched Geometry Relaxation (BGR) is a NIM microservice for high-throughput atomistic structure relaxation in computational chemistry and materials science. Current NVIDIA docs describe it as using machine learning interatomic potentials (MLIPs) such as MACE, AIMNet2, and TensorNet models optimized for NVIDIA GPUs.

## Detail

### Purpose
Batched geometry relaxation optimizes atom positions and, optionally, unit-cell parameters so candidate molecular or materials structures can be evaluated before downstream simulation, screening, or discovery workflows.

### Current scope
- Supports periodic materials and isolated molecules.
- Provides optional cell optimization and DFT-D3(BJ) dispersion corrections.
- Uses dynamic batching to estimate and adjust batch size based on available GPU memory and structure size.
- Implements the FIRE2 optimizer on GPU for accelerated relaxation.
- Allows per-request force and pressure convergence criteria.
- Supports MLIP model types selected through `ALCHEMI_NIM_MODEL_TYPE`, including MACE, TensorNet, and AIMNet2.
- Includes MACE-MPA-0 as a bundled/default model path when the container runs with an NGC API key.

### NVIDIA context
BGR is the relaxation step in NVIDIA's ALCHEMI atomistic-modeling NIM pair. It naturally connects with [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]] for simulation after relaxation and with [[cuEquivariance]] because MACE-style MLIP models use geometry-aware neural network operations.

## Connections
- [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]] - companion ALCHEMI NIM for running molecular dynamics after or alongside structure relaxation.
- [[NVIDIA-BioNeMo]] and [[NVIDIA-Clara]] - life-sciences and drug-discovery context for atomistic modeling and molecular workflows.
- [[NVIDIA-AI-Enterprise]] - enterprise software/support context for NIM deployment.
- [[cuEquivariance]] - acceleration context for geometry-aware MLIP models such as MACE.
- [[TensorRT]] and [[Triton-Inference-Server]] - inference optimization and serving context for NIM deployments.
- [[NVIDIA-CUDA]] and [[NGC]] - GPU software and container distribution context.

## Source Excerpts
- NVIDIA docs describe BGR as a high-performance engine for batched geometry relaxation across periodic materials and isolated molecules.
- The current docs list MACE, AIMNet2, and TensorNet as supported MLIP model families.

## Resources
- [NVIDIA NIM for ALCHEMI Batched Geometry Relaxation Overview](https://docs.nvidia.com/nim/alchemi/alchemi-bgr/latest/overview.html)
