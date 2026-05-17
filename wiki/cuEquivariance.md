# cuEquivariance

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Equivariant Neural Networks, Geometric Neural Networks, PyTorch, JAX, Scientific AI
**Related:** [[PyTorch]], [[JAX]], [[cuDNN]], [[cuTENSOR]], [[NVIDIA-Warp]], [[cuBLAS]], [[NVIDIA-BioNeMo]], [[NIM-for-OpenFold3]], [[NIM-for-Boltz2]], [[NIM-for-OpenFold2]], [[NIM-for-DiffDock]], [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]], [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/cuda/cuequivariance/, https://docs.nvidia.com/cuda/cuequivariance/changelog.html, https://github.com/NVIDIA/cuEquivariance
**Last Updated:** 2026-04-29

## Summary
cuEquivariance is NVIDIA's Python library for building high-performance geometric/equivariant neural networks with segmented polynomials, segmented tensor products, triangular operations, and optimized CUDA kernels. Current docs expose core non-ML components plus PyTorch and JAX frontends.

## Detail

### Purpose
Equivariant neural networks respect symmetries such as rotations and translations, which is valuable for physical, molecular, structural biology, and materials-science models. cuEquivariance gives model authors a way to describe these operations with group representations and segmented tensor-product/polynomial descriptors, then execute them through optimized CUDA-backed PyTorch or JAX paths.

### Key Features
- Core package for non-ML components such as representations, irreps, layouts, descriptors, segmented tensor products, and segmented polynomials.
- PyTorch package for modules such as segmented polynomial execution, channel-wise and fully connected tensor products, linear layers, spherical harmonics, rotation/inversion utilities, triangle attention, and triangle multiplicative update.
- JAX package for representation arrays, segmented/equivariant polynomial execution, spherical harmonics, indexed linear operations, triangle attention, and triangle multiplicative update.
- Descriptor hierarchy based on `EquivariantPolynomial`, `SegmentedPolynomial`, and `SegmentedTensorProduct`.
- CUDA kernel packages for PyTorch and JAX with CUDA 12 and CUDA 13 variants.
- Open-source frontend under Apache 2.0, with NVIDIA-distributed optimized CUDA operations.

### Use Cases
- Drug discovery: molecular docking and force field computation (DiffDock)
- Materials science: interatomic potential models (MACE, Allegro, NequIP)
- Protein structure prediction (Boltz, Neo-1, OpenFold)
- Quantum chemistry calculations
- Molecular dynamics with machine-learned force fields
- Catalyst design and discovery

### Hardware Requirements
- Linux x86_64 or aarch64 for CUDA operations packages.
- Python 3.10-3.14.
- PyTorch 2.4.0+ for torch packages.
- JAX 0.8.1+ for JAX packages.
- CUDA 12 or CUDA 13 package variants for optimized GPU kernels.

### Language Bindings
- Python via JAX frontend
- Python via PyTorch frontend
- Core Python package for non-ML representation and descriptor components

## Connections
- [[PyTorch]] - cuEquivariance provides PyTorch modules and CUDA operation packages.
- [[JAX]] - cuEquivariance provides JAX execution functions and array wrappers.
- [[cuDNN]] — cuDNN provides general DNN primitives; cuEquivariance provides equivariance-specific ops
- [[cuTENSOR]] — cuTENSOR handles general tensor contractions; cuEquivariance handles irreps-specific contractions
- [[NVIDIA-Warp]] — Warp enables differentiable physics simulation; cuEquivariance enables equivariant ML on molecular data
- [[cuBLAS]] — cuBLAS handles standard GEMM; cuEquivariance handles structured tensor products not expressible as standard GEMM
- [[NVIDIA-BioNeMo]] — BioNeMo structure models use geometry-aware/equivariant neural network acceleration.
- [[NIM-for-OpenFold3]] — current OpenFold3 NIM docs call out cuEquivariance kernels in the optimized backend.
- [[NIM-for-Boltz2]] — Boltz-style biomolecular structure prediction is adjacent to equivariant model acceleration.
- [[NIM-for-OpenFold2]] — OpenFold-style structure prediction is part of the BioNeMo structure-model family.
- [[NIM-for-DiffDock]] — molecular docking NIM based on equivariant/geometric pose prediction.
- [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]] and [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]] — ALCHEMI NIMs use MLIP model families such as MACE, which are adjacent to cuEquivariance acceleration.
- [[NVIDIA-CUDA]] - CUDA platform underneath the optimized kernel packages.

## Source Excerpts
- NVIDIA describes cuEquivariance as a Python library for high-performance geometric neural networks using segmented polynomials, triangular operations, and optimized CUDA kernels.
- Current docs organize cuEquivariance into core, JAX, and PyTorch packages.

## Resources
- [Official Page](https://developer.nvidia.com/cuequivariance)
- [cuEquivariance GitHub](https://github.com/NVIDIA/cuEquivariance)
- [Documentation](https://docs.nvidia.com/cuda/cuequivariance/)
