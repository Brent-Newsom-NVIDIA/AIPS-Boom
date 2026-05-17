# AmgX

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Linear Solver, Multigrid, HPC, CFD, Open Source
**Related:** [[cuSPARSE]], [[cuSOLVER]], [[cuDSS]], [[Incomplete-LU-Cholesky]], [[NCCL]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-29

## Summary
AmgX is NVIDIA's open-source GPU-accelerated linear solver library offering algebraic multigrid (AMG) methods, Krylov solvers, and various smoothers and preconditioners. It can accelerate the linear solver portion of HPC simulations by up to 10x, making it especially valuable for implicit unstructured methods in CFD, energy, physics, and nuclear safety applications.

## Detail

### Purpose
Large-scale numerical simulations (CFD, reservoir simulation, plasma physics) spend a significant fraction of runtime solving large sparse linear systems. AmgX provides a flexible, composable solver framework that dramatically accelerates this phase by running on GPUs, with a simple C API that integrates easily into existing simulation codes.

### Key Features
- Algebraic multigrid (AMG): Ruge-Steuben and un-smoothed aggregation variants
- Krylov solvers: PCG, GMRES, BiCGStab, and flexible/preconditioned variants
- Smoothers: Block-Jacobi, Gauss-Seidel, incomplete LU, polynomial, dense LU
- Solver composition system for building nested solvers and preconditioners
- Support for scalar and coupled block systems
- MPI and OpenMP compatibility for distributed and shared-memory parallelism
- Simple C API for integration into existing simulation codes
- Up to 10x acceleration for linear solver phase of simulations

### Use Cases
- Computational Fluid Dynamics (CFD): aerospace, automotive, industrial design
- Energy sector: reservoir simulation, carbon sequestration, thermal analysis
- Physics simulations: fusion, plasma, astrophysics
- Nuclear safety: stockpile stewardship simulations
- Any implicit unstructured method requiring iterative linear solvers

### Hardware Requirements
- NVIDIA GPU with CUDA support
- Multi-GPU support via MPI
- Available as open-source; no specific minimum GPU architecture stated

### Language Bindings
- C (primary API)
- C++ (underlying implementation)
- Compatible with Fortran and Python via C interop

## Connections
- [[cuSPARSE]] — AmgX uses cuSPARSE internally for sparse matrix operations
- [[cuSOLVER]] — cuSOLVER provides direct solvers; AmgX provides iterative/multigrid alternatives
- [[cuDSS]] — cuDSS is the direct sparse solver complement to AmgX's iterative approach
- [[Incomplete-LU-Cholesky]] — CUDA iterative-method guide covering preconditioning concepts adjacent to AmgX
- [[NCCL]] — multi-GPU AmgX deployments use GPU communication libraries like NCCL

## Resources
- [Official Page](https://developer.nvidia.com/amgx)
- [GitHub (Open Source)](https://github.com/NVIDIA/AMGX)
