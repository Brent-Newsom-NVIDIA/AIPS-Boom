# NIM for DoMINO Automotive Aero

**Type:** Microservice
**Tags:** NVIDIA, NIM, DoMINO, automotive aerodynamics, PhysicsNeMo, CFD, surrogate model, simulation, vehicle design
**Related:** [[NVIDIA-NIM]], [[PhysicsNeMo]], [[NVIDIA-Modulus]], [[NIM-for-Earth-2-CorrDiff]], [[NIM-for-Earth-2-FourCastNet]], [[NVIDIA-Drive-Platform]], [[NVIDIA-DRIVE-AGX-Thor]], [[NVIDIA-AI-Enterprise]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-CUDA]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/overview.html, https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/index.html, https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/prerequisites.html
**Last Updated:** 2026-04-29

## Summary
NIM for DoMINO Automotive Aero is NVIDIA's PhysicsNeMo NIM for automotive external aerodynamics prediction. Current NVIDIA docs describe DoMINO as a Decomposable Multi-Scale-Iterative Neural Operator surrogate model that predicts aerodynamic solution fields from point-cloud geometry, reducing simulation time for CFD and vehicle design workflows.

## Detail

### Purpose
Automotive aerodynamic analysis is expensive when every design iteration requires high-fidelity CFD. DoMINO Automotive Aero NIM provides a fast API-backed surrogate model for engineers evaluating external vehicle aerodynamics during design optimization.

### Current scope
- Learns local geometry encodings from point-cloud representations.
- Predicts PDE solution fields on discrete points using dynamically constructed local computational stencils.
- Captures short- and long-range geometric features for vehicle surface and surrounding flow-domain predictions.
- Provides surface and volume field evaluation, velocity inlet configuration, stencil-size controls, confidence intervals, and custom volume point-cloud workflows in current docs.
- Supports multi-GPU and flexible batched inference in current advanced docs.
- Current prerequisites note CUDA compute capability 7.5+ hardware and NVIDIA driver/container runtime requirements.

### NVIDIA context
DoMINO Automotive Aero is the simulation/physics NIM counterpart to Earth-2 weather NIMs. It belongs with [[PhysicsNeMo]] and [[NVIDIA-Modulus]] for physics-ML training, and with [[NVIDIA-Drive-Platform]] for vehicle design and automotive engineering context.

## Connections
- [[PhysicsNeMo]] - framework context for DoMINO and other physics-ML models.
- [[NVIDIA-Modulus]] - broader NVIDIA physics-ML lineage.
- [[NIM-for-Earth-2-CorrDiff]] and [[NIM-for-Earth-2-FourCastNet]] - other physics/science NIMs in the wiki graph.
- [[NVIDIA-Drive-Platform]] and [[NVIDIA-DRIVE-AGX-Thor]] - automotive AI and vehicle development context.
- [[NVIDIA-AI-Enterprise]] - production support and deployment context.
- [[TensorRT]] and [[Triton-Inference-Server]] - optimized inference and serving context for NIM deployments.
- [[NVIDIA-CUDA]] and [[NGC]] - GPU software and container distribution context.

## Source Excerpts
- NVIDIA docs describe DoMINO as a robust, accurate, scalable surrogate model for automotive aerodynamics.
- The current docs state that DoMINO learns from point-cloud geometry and predicts solution fields on vehicle surfaces and in the surrounding flow domain.

## Resources
- [NVIDIA DoMINO Automotive Aero NIM Overview](https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/overview.html)
- [NVIDIA DoMINO Automotive Aero NIM Documentation](https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/index.html)
