# NVIDIA Warp (Physics) — Advanced

**Type:** Technology
**Tags:** NVIDIA, Warp, Physics Simulation, Differentiable Simulation, Robotics, JAX, Python, GPU
**Related:** [[NVIDIA-Warp]], [[NVIDIA-Isaac]], [[NVIDIA-Omniverse]], [[NVIDIA-Modulus]], [[PhysicsNeMo]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-10

## Summary
NVIDIA Warp is an open-source Python framework for GPU-accelerated physics simulation and spatial computing, featuring a JIT-compiled kernel language embedded in Python and full first- and higher-order automatic differentiation (autodiff). Beyond the basics, Warp's advanced capabilities include a finite element method (FEM) module for solid mechanics and fluid simulation, a sparse volume module (VDB/NanoVDB integration), cloth and rigid body simulation, differentiable rendering via Tiny Differentiable Renderer, and deep integration with NVIDIA Isaac Lab for robot learning. Warp kernels can be used as differentiable simulation backends in neural network training loops.

## Detail

### Purpose
Robot learning via simulation requires both fast simulation (for collecting millions of rollouts) and differentiable simulation (for gradient-based policy optimization through the simulator). Warp provides both in a single Python-native library, enabling researchers to write physics simulation kernels that are automatically differentiable without leaving Python or writing CUDA C++.

### Advanced Key Features
- Automatic differentiation: full reverse-mode autodiff through all Warp kernel operations
- FEM module: GPU-accelerated finite element methods for deformable bodies, fluids, heat transfer
- Sparse volumes: NanoVDB integration for volumetric simulation (smoke, fire, fluids)
- Cloth simulation: position-based dynamics (PBD) for high-quality real-time cloth
- Rigid body dynamics: articulated body simulation with contact and joint constraints
- Differentiable rendering: Tiny Differentiable Renderer (TDR) built into Warp for sim-to-real
- Isaac Lab integration: Warp is the simulation backend for NVIDIA Isaac Lab robot learning
- JAX interop: Warp arrays and custom JVP rules compatible with JAX transformation pipeline
- Multi-GPU: Warp kernels schedulable across multiple devices
- CUDA Graph integration: Warp simulations capturable as CUDA Graphs for low-overhead replay
- Omniverse integration: Warp runs inside Omniverse as a simulation extension

### Use Cases
- Robot policy training via differentiable simulation (trajectory optimization, model-based RL)
- Soft-body and deformable object manipulation training in Isaac Lab
- Physics-informed neural networks (PINNs) with GPU-accelerated PDE solvers
- Fluid simulation for visual effects and scientific visualization
- Inverse design of mechanical systems via gradient-based optimization
- Sim-to-real transfer with differentiable rendering for domain randomization

### Hardware Requirements / Compatibility
- CUDA-capable GPU: Volta (V100) or newer recommended; Maxwell+ supported
- Python 3.8+, CUDA 11.5+
- Windows 10/11 and Linux
- Omniverse compatibility: Warp included in Omniverse Kit extensions
- Isaac Lab: Warp is a core dependency

### Language Bindings / APIs
- Python (primary: @wp.kernel, @wp.struct decorators)
- JIT compilation via NVRTC (no separate compile step)
- C API for embedding Warp in C++ applications
- JAX custom VJP/JVP bindings
- USD integration via Omniverse

## Connections
- [[NVIDIA-Warp]] — this page is an advanced extension of the core NVIDIA-Warp page
- [[NVIDIA-Isaac]] — Warp is the differentiable simulation backend for Isaac Lab robot learning
- [[NVIDIA-Omniverse]] — Warp simulation extensions run inside the Omniverse Kit runtime
- [[NVIDIA-Modulus]] — Modulus uses Warp for GPU-accelerated PDE-based physics solvers
- [[PhysicsNeMo]] — PhysicsNeMo uses Warp for geoscience physics simulation at scale

## Resources
- [Warp GitHub](https://github.com/NVIDIA/warp)
- [Warp Documentation](https://nvidia.github.io/warp/)
- [Warp FEM Module](https://nvidia.github.io/warp/modules/fem.html)
- [Isaac Lab + Warp](https://isaac-sim.github.io/IsaacLab/)
