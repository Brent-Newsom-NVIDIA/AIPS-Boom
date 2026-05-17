# NVIDIA Warp

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Python, Physics Simulation, Differentiable Programming, Open Source, Robotics
**Related:** [[NVIDIA-Newton]], [[NVIDIA-Isaac]], [[NVIDIA-Isaac-Lab]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-Omniverse]], [[cuBLAS]], [[cuSPARSE]], [[cuDNN]], [[CUTLASS]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-05-15

## Summary
NVIDIA Warp is an open-source Python framework for GPU-accelerated computational physics, AI simulation, and optimization workflows. It JIT-compiles Python functions to CUDA kernels, supports differentiable (reverse-mode) simulation for gradient-based optimization, and provides native geometry primitives (meshes, sparse volumes, BVH). Warp delivers simulation performance on par with native CUDA code while maintaining Python developer productivity, and integrates with PyTorch, JAX, PhysicsNeMo, and NVIDIA Omniverse.

## Detail

### Purpose
Physics simulation, robotics, and CAE workloads require GPU-accelerated computation but have traditionally required C++/CUDA expertise. Warp enables Python developers to write GPU-accelerated physics kernels with automatic differentiation support, enabling gradient-based learning and optimization directly through physical simulations.

### Key Features
- Just-in-time compilation of Python functions to CUDA kernels and x86 code
- Implicit kernel fusion for fine-grained thread control
- Differentiable programming: reverse-mode (adjoint) kernels for gradient propagation to ML frameworks
- Tile-based programming: block model leveraging Tensor Cores for matrix operations
- Native geometry primitives: triangle meshes, NanoVDB sparse volumes, hash grids, BVH
- Sparse linear algebra: BSR and CSR matrix formats with CG and GMRES solvers
- Finite Element Method (FEM) toolkit for differential equations
- Integration with PyTorch, JAX, NVIDIA PhysicsNeMo, NVIDIA Omniverse, and Isaac Lab/Newton-oriented robotics workflows
- Open source on GitHub

### Use Cases
- Computational fluid dynamics (CFD) simulation
- Robotics simulation and motion planning
- Geometry processing and mesh operations
- CAE (Computer-Aided Engineering) tool development
- ML-based physics training (Physics-Informed Neural Networks)
- Differentiable rendering and 3D reconstruction
- Design optimization through differentiable simulation

### Hardware Requirements
- NVIDIA GPU with CUDA support
- CPU execution also supported (JIT-compiled to x86)
- Compatible with Linux and Windows
- Python 3.9+

### Language Bindings
- Python (primary — this is a Python framework)
- CUDA (generated output from JIT compilation)

## Connections
- [[NVIDIA-Newton]] - Newton is built on Warp for GPU-accelerated robotics physics and differentiable simulation.
- [[NVIDIA-Isaac]] - Isaac Lab and Isaac Sim connect Warp-powered simulation components into robot learning workflows.
- [[NVIDIA-Isaac-Lab]] - Isaac Lab development docs describe Newton/Warp-oriented backend and renderer paths for robot learning.
- [[NVIDIA-Isaac-Sim]] - adjacent high-fidelity simulation environment in the Isaac robotics stack.
- [[NVIDIA-Omniverse]] - Warp integrates with Omniverse simulation and physical AI workflows.
- [[cuBLAS]] — Warp tile-based programming uses cuBLAS-level GEMM capabilities via Tensor Cores
- [[cuSPARSE]] — Warp's sparse linear algebra (BSR, CSR) complements cuSPARSE operations
- [[cuDNN]] — Warp's PyTorch/JAX integration enables cuDNN-powered neural networks to interface with Warp simulations
- [[CUTLASS]] — Warp's Tensor Core tile operations draw on CUTLASS-style abstractions

## Resources
- [Official Page](https://developer.nvidia.com/warp-python)
- [Warp GitHub](https://github.com/NVIDIA/warp)
- [Warp Documentation](https://nvidia.github.io/warp/)
