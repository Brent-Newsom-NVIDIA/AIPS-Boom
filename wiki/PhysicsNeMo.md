# PhysicsNeMo

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Physics AI, Scientific Computing, Geoscience, Neural Operators, Simulation, PyG, GNN
**Related:** [[NVIDIA-Modulus]], [[Earth-2]], [[NIM-for-Earth-2-CorrDiff]], [[NIM-for-Earth-2-FourCastNet]], [[NIM-for-DoMINO-Automotive-Aero]], [[PyTorch]], [[PyG]], [[NVIDIA-DGL]], [[NVIDIA-Warp]], [[cuDNN]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/physicsnemo, https://docs.nvidia.com/physicsnemo/latest/physicsnemo/examples/dgl_to_pyg_migration.html, https://docs.nvidia.com/nim/earth-2/corrdiff/latest/overview.html, https://docs.nvidia.com/nim/earth-2/fourcastnet/latest/overview.html, https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/overview.html
**Last Updated:** 2026-04-30

## Summary
PhysicsNeMo (formerly part of Modulus) is NVIDIA's open-source framework specifically designed for large-scale physics AI model training for geoscience, subsurface modeling, and industrial physics applications. It extends the NVIDIA Modulus physics-ML ecosystem with specialized architectures, datasets, and training workflows for Earth science domains including seismic imaging, weather modeling, reservoir simulation, and ocean dynamics. PhysicsNeMo is the framework powering NVIDIA's Earth-2 climate AI initiative's large-scale model training.

## Detail

### Purpose
PhysicsNeMo addresses the need for scalable, production-grade training of very large physics-AI models (billions of parameters) for geoscience and climate applications, where the models must learn from massive observational and simulation datasets while respecting physical constraints. It provides domain-specific model architectures, data loaders, and multi-node distributed training infrastructure for Earth and physics sciences.

### Key Features
- Specialized physics-ML architectures: Spherical Fourier Neural Operator (SFNO), Earth-2 FourCastNet, GraphCast-compatible GNN
- Distributed training across thousands of GPUs for continental/global-scale models
- Support for structured (latitude-longitude grids) and unstructured (mesh) geophysical data
- Data loaders for ERA5, CMIP6, and seismic datasets
- Physics-constrained loss functions for atmospheric, oceanic, and subsurface domains
- Built on PyTorch with Megatron-LM-style distribution for large model training
- [[PyG]] / PyTorch Geometric backend support for current and new GNN-based models, with migration guidance from DGL graph objects
- Integration with NVIDIA Earth-2 inference and visualization platform
- Deployment adjacency with [[NIM-for-Earth-2-CorrDiff]] and [[NIM-for-Earth-2-FourCastNet]] for named Earth-2 inference microservices
- Deployment adjacency with [[NIM-for-DoMINO-Automotive-Aero]] for automotive external-aerodynamics surrogate inference.
- Multi-modal training support (combining observational + simulation data)
- Checkpoint compatibility with Modulus training pipelines

### Use Cases
- Global weather and climate AI model training (NWP surrogate models)
- Seismic full waveform inversion (FWI) neural surrogates
- Subsurface reservoir simulation with neural operators
- Ocean current and sea surface temperature forecasting
- Climate downscaling (coarse-to-fine resolution enhancement)
- Automotive external-aerodynamics surrogate simulation through [[NIM-for-DoMINO-Automotive-Aero]]
- Carbon capture and storage (CCS) subsurface modeling
- Tsunami and flood early warning systems

### Hardware Requirements
- NVIDIA A100 or H100 GPUs strongly recommended
- Multi-node clusters required for global-scale model training (1000+ GPUs typical)
- NVLink for intra-node; InfiniBand NDR for inter-node
- CUDA 11.8 or higher
- DGX SuperPOD or equivalent HPC cluster

### Language Bindings
- Python (primary)
- YAML/Hydra for experiment configuration

## Connections
- [[NVIDIA-Modulus]] — PhysicsNeMo is the geoscience-focused evolution of the Modulus framework
- [[Earth-2]] — Earth-2 climate AI platform uses PhysicsNeMo for training its weather/climate models
- [[NIM-for-Earth-2-CorrDiff]] - deployable CorrDiff NIM for high-resolution weather downscaling.
- [[NIM-for-Earth-2-FourCastNet]] - deployable FourCastNet NIM for global medium-range forecasting.
- [[NIM-for-DoMINO-Automotive-Aero]] - deployable PhysicsNeMo NIM for automotive aerodynamic surrogate prediction.
- [[NVIDIA-Warp]] — Warp differentiable simulation can be used for adjoint-based data assimilation within PhysicsNeMo
- [[PyTorch]] — PhysicsNeMo is built on PyTorch with distributed training extensions
- [[PyG]] — PhysicsNeMo documentation recommends PyG for GNN backends and documents migration from DGL to PyG graph objects
- [[NVIDIA-DGL]] — legacy DGL context for users migrating existing PhysicsNeMo GNN examples and models toward PyG
- [[NCCL]] — multi-node collective communications for distributed physics-ML training

## Resources
- [NVIDIA PhysicsNeMo Developer Page](https://developer.nvidia.com/physicsnemo)
- [GitHub](https://github.com/NVIDIA/physicsnemo)
- [Documentation](https://docs.nvidia.com/physicsnemo/)
- [Switching from DGL to PyTorch Geometric](https://docs.nvidia.com/physicsnemo/latest/physicsnemo/examples/dgl_to_pyg_migration.html)
- [NVIDIA Earth-2](https://www.nvidia.com/en-us/high-performance-computing/earth-2/)
