# cuSPARSE

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Sparse Matrix, Linear Algebra, Math, HPC, AI
**Related:** [[cuBLAS]], [[cuSOLVER]], [[cuSPARSELt]], [[AmgX]], [[Incomplete-LU-Cholesky]], [[cuML]], [[CUTLASS]], [[NVIDIA-CUDA]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-29

## Summary
cuSPARSE is NVIDIA's GPU-accelerated library providing linear algebra routines optimized for sparse matrices, delivering 30–150x speedups over CPU-only alternatives for SpMM operations. It supports multiple sparse formats (COO, CSR, CSC, Blocked CSR) and covers sparse vector, matrix-vector, and matrix-matrix operations. The companion cuSPARSELt library extends this with 2:4 structured sparsity acceleration via Sparse Tensor Cores on Ampere and later GPUs.

## Detail

### Purpose
Many real-world problems in machine learning, physics simulation, and graph analytics produce matrices that are mostly zero (sparse). cuSPARSE enables efficient GPU computation on these matrices using compressed storage formats, avoiding wasted computation on zero entries and delivering massive speedups over dense approaches.

### Key Features
- Sparse matrix formats: dense, COO, CSR, CSC, Blocked CSR
- Sparse vector–dense vector multiplication (SpVV)
- Sparse matrix–dense vector multiplication (SpMV)
- Sparse matrix–dense matrix multiplication (SpMM) — 30–150x faster than CPU
- Sparse matrix addition and multiplication
- ILU0 and IC0 preconditioner support
- [[Incomplete-LU-Cholesky]] guidance for GPU-accelerated preconditioned iterative methods
- Generic high-performance APIs for flexible data types
- **cuSPARSELt**: 2:4 structured sparsity via Sparse Tensor Cores (Ampere+), including pruning, compression, and activation function integration

### Use Cases
- Machine learning with sparse weight matrices
- Computational fluid dynamics (CFD) with sparse system matrices
- Seismic exploration and geophysical simulation
- Graph analytics and network analysis
- Iterative linear system solvers (as preconditioner)
- Finite element and finite difference methods

### Hardware Requirements
- NVIDIA GPU with CUDA support
- cuSPARSELt requires Ampere (A100) or later (Sparse Tensor Core support)
- SpMM acceleration benefits from high-bandwidth memory (HBM) GPUs
- Included in NVIDIA HPC SDK and CUDA Toolkit

### Language Bindings
- C and C++ (primary API)
- Python (via CuPy, scipy.sparse GPU backends)

## Connections
- [[cuBLAS]] — dense counterpart; cuSPARSE for sparse, cuBLAS for dense
- [[cuSOLVER]] — cuSOLVER's sparse module (cusolverSP) builds on cuSPARSE
- [[cuSPARSELt]] — structured sparse matrix-matrix multiplication library for supported sparsity patterns
- [[Incomplete-LU-Cholesky]] — guide for using cuSPARSE and cuBLAS in preconditioned iterative solvers
- [[AmgX]] — AmgX uses cuSPARSE internally for sparse matrix operations
- [[cuML]] — sparse ML kernels in cuML leverage cuSPARSE
- [[CUTLASS]] — CUTLASS provides structured sparsity GEMM kernels complementing cuSPARSELt

## Resources
- [Official Page](https://developer.nvidia.com/cusparse)
- [cuSPARSE Documentation](https://docs.nvidia.com/cuda/cusparse/)
