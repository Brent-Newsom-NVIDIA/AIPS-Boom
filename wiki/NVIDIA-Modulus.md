# NVIDIA Modulus

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Physics, Scientific Computing, Neural PDE, PINN, Simulation
**Related:** [[NVIDIA-Warp]], [[PhysicsNeMo]], [[NIM-for-DoMINO-Automotive-Aero]], [[PyTorch]], [[cuDNN]], [[Earth-2]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/modulus, https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/overview.html
**Last Updated:** 2026-04-09

## Summary
NVIDIA Modulus is an open-source deep learning framework for building, training, and deploying physics-informed machine learning (physics-ML) models that solve partial differential equations (PDEs) and physics simulation problems. It enables scientists and engineers to train Physics-Informed Neural Networks (PINNs), Neural Operators (Fourier Neural Operator, DeepONet), and hybrid physics-ML models on NVIDIA GPUs, dramatically accelerating computational fluid dynamics (CFD), structural analysis, and weather/climate simulation workflows.

## Detail

### Purpose
Modulus addresses the computational bottleneck in traditional numerical simulation (CFD, FEA, weather modeling) by enabling neural surrogate models that learn to solve PDEs orders of magnitude faster than classical solvers. It provides a unified framework for physics-constrained training, where physical laws are embedded directly into the loss function or model architecture.

### Key Features
- Physics-Informed Neural Networks (PINNs): automatic PDE residual loss computation
- Fourier Neural Operator (FNO) and variants (AFNO, SFNO) for learning PDE solution operators
- Deep Operator Networks (DeepONet) for operator learning
- Graph Neural Network (GNN) based physics models for mesh-based simulation
- Sym module: symbolic PDE specification with automatic differentiation for residual computation
- Data-driven and physics-hybrid training modes
- Built-in geometry handling via CSG (Constructive Solid Geometry) and STL mesh import
- Multi-GPU distributed training via PyTorch DDP/FSDP
- Integration with NVIDIA Earth-2 for climate and weather modeling
- PhysicsNeMo integration for large-scale geophysical AI
- Automotive aerodynamics deployment adjacency through [[NIM-for-DoMINO-Automotive-Aero]]
- Checkpointing, experiment tracking, and Hydra-based configuration
- ONNX export and TensorRT deployment pathway

### Use Cases
- Computational fluid dynamics (CFD) surrogate modeling for aerodynamics
- Automotive external-aerodynamics surrogate inference through [[NIM-for-DoMINO-Automotive-Aero]]
- Heat transfer and thermal management simulation
- Structural mechanics and finite element analysis surrogates
- Weather and climate forecasting with neural operators
- Seismic wave simulation for oil and gas exploration
- Electromagnetics simulation (antenna design, photonics)
- Cardiovascular blood flow simulation for medical applications
- Industrial digital twin acceleration

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 6.0+ (Pascal minimum)
- A100 or H100 recommended for large-scale neural operator training
- Multi-GPU support via NVLink and InfiniBand for distributed training
- CUDA 11.8 or higher

### Language Bindings
- Python (primary)
- YAML/Hydra for experiment configuration

## Connections
- [[NVIDIA-Warp]] — Warp provides GPU-accelerated differentiable simulation kernels that complement Modulus workflows
- [[PhysicsNeMo]] — PhysicsNeMo extends Modulus for large-scale geoscience and industrial physics AI
- [[NIM-for-DoMINO-Automotive-Aero]] - PhysicsNeMo NIM for deployable automotive aerodynamic surrogate simulation.
- [[Earth-2]] — Earth-2 platform uses Modulus-based models for AI weather/climate prediction
- [[PyTorch]] — Modulus is built on PyTorch with custom physics-aware training loops
- [[cuDNN]] — underpins convolution and attention operations within neural operator architectures

## Resources
- [NVIDIA Modulus Developer Page](https://developer.nvidia.com/modulus)
- [Documentation](https://docs.nvidia.com/modulus/index.html)
- [GitHub](https://github.com/NVIDIA/modulus)
- [NVIDIA NGC Container](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/modulus)
