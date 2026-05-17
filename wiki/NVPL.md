# NVPL (NVIDIA Performance Libraries)

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, CPU, HPC, Math Libraries, Arm, Grace, CUDA-X
**Related:** [[NVIDIA-HPC-SDK]], [[NVIDIA-HPC-Compilers]], [[cuBLAS]], [[cuFFT]], [[cuSOLVER]], [[cuSPARSE]], [[nvmath-python]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/nvpl
**Last Updated:** 2026-04-09

## Summary
NVPL (NVIDIA Performance Libraries) is a collection of high-performance CPU math libraries optimized specifically for the NVIDIA Grace CPU (Arm Neoverse V2 architecture) and Grace Hopper / Grace Blackwell Superchips. NVPL provides CPU-side counterparts to CUDA-X GPU libraries — including NVPL BLAS, NVPL LAPACK, NVPL FFT, NVPL RAND, NVPL ScaLAPACK, and NVPL Sparse — enabling applications on Grace-based systems to achieve maximum CPU performance while interoperating seamlessly with GPU-accelerated CUDA-X counterparts.

## Detail

### Purpose
NVPL addresses the need for CPU math libraries specifically tuned for NVIDIA's Arm-based Grace CPU, which powers the Grace Hopper and Grace Blackwell Superchips. Existing x86-optimized libraries (Intel MKL) do not run on Grace; NVPL provides equivalent functionality with performance optimized for the Arm Neoverse V2 microarchitecture, SVE (Scalable Vector Extension) SIMD, and the NVLink-C2C CPU-GPU interconnect unique to Grace Hopper.

### Key Features
- NVPL BLAS: CPU BLAS (Level 1, 2, 3) for Grace — SGEMM, DGEMM, ZGEMM with Neoverse V2 + SVE optimization
- NVPL LAPACK: CPU dense linear algebra (eigensolvers, SVD, LU, QR, Cholesky) for Grace
- NVPL FFT: CPU FFT library matching cuFFT API patterns, optimized for Grace cache hierarchy
- NVPL RAND: CPU random number generation matching cuRAND host API
- NVPL ScaLAPACK: distributed CPU dense linear algebra via MPI for Grace-based clusters
- NVPL Sparse: CPU sparse linear algebra matching cuSPARSE patterns
- OpenBLAS and LAPACK compatible interfaces for drop-in compatibility
- Optimized for SVE2 vector instructions and Neoverse V2 microarchitecture
- Thread-parallel: OpenMP-backed multithreaded implementations
- Interoperable with CUDA-X counterparts via unified memory on Grace Hopper NVLink-C2C

### Use Cases
- HPC applications on NVIDIA Grace Hopper Superchip CPU partition
- CPU fallback implementations that mirror GPU CUDA-X behavior
- Mixed CPU-GPU workflows on Grace Hopper where some steps are CPU-resident
- Porting Intel MKL-dependent HPC codes to NVIDIA Grace platforms
- Climate and weather models that have CPU-resident compute phases
- Linear algebra heavy scientific codes (quantum chemistry, FEM)

### Hardware Requirements
- Primarily designed for NVIDIA Grace CPU (Arm Neoverse V2)
- Grace Hopper Superchip (GH200): Grace + H100 connected via NVLink-C2C
- Grace Blackwell Superchip (GB200): Grace + B200 connected via NVLink-C2C
- Can run on other Arm Neoverse systems with reduced optimization
- CUDA not required (CPU-only library, but works alongside CUDA on Grace Hopper)

### Language Bindings
- Fortran (BLAS/LAPACK standard Fortran interfaces)
- C (CBLAS and LAPACKE C interfaces)
- C++ (via C interfaces)
- Python (via SciPy/NumPy configured with NVPL as BLAS/LAPACK backend)

## Connections
- [[cuBLAS]] — NVPL BLAS is the CPU-side companion to cuBLAS on Grace Hopper systems
- [[NVIDIA-HPC-SDK]] - current HPC SDK documentation hub lists NVPL alongside CUDA math libraries.
- [[NVIDIA-HPC-Compilers]] - compiler stack that links CPU/GPU math workflows in HPC applications.
- [[cuFFT]] — NVPL FFT mirrors the cuFFT API for CPU-side transforms on Grace
- [[cuSOLVER]] — NVPL LAPACK provides the CPU equivalents of cuSOLVER dense solvers
- [[cuSPARSE]] — NVPL Sparse provides CPU sparse linear algebra complementing cuSPARSE
- [[nvmath-python]] — nvmath-python's Python abstraction covers both CUDA-X GPU and can be paired with NVPL CPU backends

## Resources
- [NVIDIA NVPL Developer Page](https://developer.nvidia.com/nvpl)
- [NVPL Documentation](https://docs.nvidia.com/nvpl/)
- [Grace Hopper Superchip Architecture](https://www.nvidia.com/en-us/data-center/grace-hopper-superchip/)
