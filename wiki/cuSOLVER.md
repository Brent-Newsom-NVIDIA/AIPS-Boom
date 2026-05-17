# cuSOLVER

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Linear Solvers, Eigensolvers, Math, HPC, Sparse
**Related:** [[cuBLAS]], [[cuSPARSE]], [[cuSOLVERMp]], [[Incomplete-LU-Cholesky]], [[cuFFT]], [[AmgX]], [[nvmath-python]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-29

## Summary
cuSOLVER is NVIDIA's GPU-accelerated library providing dense and sparse direct linear solvers, eigensolvers, and matrix factorizations for HPC and scientific computing. It includes three sub-libraries — cusolverDN (dense), cusolverSP (sparse), and cusolverRF (sparse refactorization) — and a distributed variant, cuSOLVERMp, for multi-GPU and multi-node workloads.

## Detail

### Purpose
Many engineering and scientific applications require solving large systems of linear equations or computing eigenvalues, tasks that are computationally intensive on CPUs. cuSOLVER accelerates these operations on the GPU, delivering 3–6x speedups over CPU alternatives like Intel MKL, and automatically exploiting Tensor Cores on modern architectures.

### Key Features
- **cusolverDN** (Dense): Cholesky, LU, SVD, and QR decompositions; 3–6x faster than MKL
- **cusolverSP** (Sparse): Direct sparse solvers, symmetric and generalized eigensolvers
- **cusolverRF** (Refactorization): Efficient sparse refactorization for repeated solves with changing values
- **cuSOLVERMp**: Distributed-memory dense linear systems and eigenvalue problems across multiple GPUs and nodes
- Automatic Tensor Core utilization on A100 and later GPUs (cuSOLVER 11+)
- Over 2x performance improvement on A100 vs. previous generations
- Integration with cuBLAS and cuSPARSE internally

### Use Cases
- Computer Vision (pose estimation, structure-from-motion)
- Computational Fluid Dynamics (CFD) simulations
- Computational Chemistry and Chemical Kinetics
- Newton's method and nonlinear optimization
- Circuit simulation (SPICE-like solvers)
- Ordinary Differential Equations (ODEs)
- Linear optimization and operations research

### Hardware Requirements
- NVIDIA GPU with CUDA support
- Tensor Core acceleration on Volta (V100) and later (A100 recommended)
- cuSOLVERMp requires multi-GPU / multi-node environment
- Included in NVIDIA HPC SDK and CUDA Toolkit

### Language Bindings
- C and C++ (primary API)
- Fortran (via HPC SDK)
- Python (via CuPy and nvmath-python)

## Connections
- [[cuBLAS]] — cuSOLVER uses cuBLAS internally for dense BLAS operations
- [[cuSPARSE]] — cusolverSP leverages cuSPARSE for sparse matrix operations
- [[cuSOLVERMp]] — distributed dense linear solver and eigensolver companion library
- [[Incomplete-LU-Cholesky]] — preconditioned iterative solver guide adjacent to cuSOLVER sparse workflows
- [[AmgX]] — AmgX provides iterative solvers that complement cuSOLVER's direct solvers
- [[nvmath-python]] — Python interface to cuSOLVER and related math libraries

## Resources
- [Official Page](https://developer.nvidia.com/cusolver)
- [cuSOLVER Documentation](https://docs.nvidia.com/cuda/cusolver/)
