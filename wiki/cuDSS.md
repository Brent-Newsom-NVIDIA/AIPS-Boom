# cuDSS

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Sparse Solver, Direct Solver, Math, HPC, Autonomous Driving
**Related:** [[cuSPARSE]], [[cuSOLVER]], [[cuBLAS]], [[AmgX]], [[nvmath-python]], [[NCCL]], [[CUDA-Graphs]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/cuda/cudss/index.html, https://docs.nvidia.com/cuda/cudss/release_notes.html
**Last Updated:** 2026-04-29

## Summary
cuDSS is NVIDIA's preview CUDA library for GPU-accelerated direct sparse solvers. It solves linear systems of the form `AX = B` where `A` is sparse and `B`/`X` may be vectors or matrices, with flexible matrix properties, solver configuration, CUDA stream execution, and single-GPU, multi-GPU, and multi-node modes.

## Detail

### Purpose
Direct sparse solvers are important when simulation, engineering, robotics, circuit, and control workloads require robust sparse linear solves rather than iterative convergence behavior. cuDSS brings this direct-solver workflow into the CUDA math stack with analysis, factorization, solve, refactorization, batching, and distributed execution paths.

### Key capabilities
- Sparse matrix types include real/complex, general, symmetric, positive-definite, and complex symmetric cases.
- Analysis, numerical factorization, solve, optional refactorization, solve sub-phases, permutations, and iterative refinement.
- Non-uniform batching for different systems and uniform batching for systems with the same sparsity pattern.
- Single and multiple right-hand sides with single/double precision values and `int`/`int64_t` indices.
- Multiple reordering and factorization algorithms, numerical pivoting controls, and memory estimates after analysis.
- User-defined device memory handlers, memory pools, threading layers, and distributed communication layers.
- Schur complement mode, hybrid host/device memory mode, and hybrid host/device execution mode.
- Multi-GPU multi-node (MGMN), single-node multi-GPU (MG), and multi-threaded (MT) modes.
- CUDA Graphs support and partially asynchronous APIs where host memory/execution modes are not enabled.
- Optional deterministic computation for bit-wise reproducibility on the same hardware/software/input stack.

### Current release signals
- cuDSS v0.7.1 enabled user-provided elimination tree reuse in combination with user permutation data.
- cuDSS v0.7.0 enabled single-node multi-GPU mode, `int64_t` sparse indices, solve sub-phases, Schur complement mode, deterministic mode, and CUDA 13 / newer Blackwell architecture support.
- NVIDIA still marks cuDSS as preview, so API compatibility can change in later releases.

### Use Cases
- Autonomous driving simulation and sensor fusion
- Industrial process simulation and control
- Structural analysis and finite element methods
- Circuit simulation
- Real-time control systems requiring robust linear algebra

### Hardware Requirements
- NVIDIA GPU with supported SM architecture starting with Pascal, according to the matching CUDA Toolkit support matrix.
- Linux and Windows support.
- x86_64, Arm SBSA, and Arm aarch64/Jetson support for Orin and Thor devices.
- MGMN communication backends include prebuilt OpenMPI 4.x and NCCL 2.x layers plus user-defined GPU-aware stream-aware backends.
- MT threading backends include GNU OpenMP on Linux, VCOMP on Windows, and user-defined threading layers.

### Language Bindings
- C and C++ (primary API)
- Python (via nvmath-python)
- Sample code available via NVIDIA CUDALibrarySamples repository

## Connections
- [[cuSPARSE]] - sparse matrix context for GPU sparse linear algebra.
- [[cuSOLVER]] - cuDSS docs include a comparison point to cuSolverSp and cuSolverRf.
- [[cuBLAS]] - cuDSS has documented runtime dependency on cuBLAS in current release history.
- [[AmgX]] - iterative algebraic multigrid alternative to cuDSS direct sparse solves.
- [[nvmath-python]] - Python-facing sparse direct solver access.
- [[NCCL]] - one documented MGMN communication backend for distributed cuDSS operation.
- [[CUDA-Graphs]] - cuDSS documents CUDA Graphs support for solver workflows.
- [[NVIDIA-CUDA]] - CUDA platform and toolkit context for cuDSS.

## Source Excerpts
- NVIDIA describes cuDSS as a preview GPU-accelerated direct sparse solver library for `AX = B` systems.
- Current docs list single-GPU, single-node multi-GPU, and multi-GPU multi-node execution configurations.

## Resources
- [cuDSS Documentation](https://docs.nvidia.com/cuda/cudss/)
- [cuDSS Release Notes](https://docs.nvidia.com/cuda/cudss/release_notes.html)
