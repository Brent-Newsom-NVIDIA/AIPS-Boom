# Incomplete LU and Cholesky Preconditioned Iterative Methods

**Type:** Guide
**Tags:** NVIDIA, CUDA, cuSPARSE, cuBLAS, iterative solvers, preconditioning, HPC
**Related:** [[cuSPARSE]], [[cuBLAS]], [[cuSOLVER]], [[AmgX]], [[NVIDIA-CUDA]], [[NVIDIA-Deep-Learning-Performance]]
**Sources:** https://docs.nvidia.com/cuda/incomplete-lu-cholesky/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA's Incomplete-LU and Cholesky Preconditioned Iterative Methods whitepaper explains how to use [[cuSPARSE]] and [[cuBLAS]] for GPU-accelerated preconditioned iterative solvers. It focuses on sparse linear systems and Krylov methods such as BiCGStab and Conjugate Gradient.

## Detail
The whitepaper addresses large sparse linear systems from computational mechanics, atmospheric modeling, geophysics, biology, circuit simulation, and other scientific computing domains. It describes using sparse matrix-vector multiplication and sparse triangular solve in cuSPARSE, with dense/vector operations in cuBLAS, to accelerate iterative methods.

This is a guide page rather than a library page: the canonical library pages remain [[cuSPARSE]], [[cuBLAS]], [[cuSOLVER]], and [[AmgX]].

## Connections
- [[cuSPARSE]] - sparse matrix-vector multiplication and triangular solve primitives.
- [[cuBLAS]] - vector and dense operations used inside iterative methods.
- [[cuSOLVER]] - broader solver library for dense and sparse systems.
- [[AmgX]] - GPU-accelerated algebraic multigrid and Krylov solver library.
- [[NVIDIA-CUDA]] - CUDA parallel programming model underlying the implementation.

## Source Excerpts
- NVIDIA's whitepaper focuses on incomplete-LU and Cholesky preconditioning for iterative methods using cuSPARSE and cuBLAS.
