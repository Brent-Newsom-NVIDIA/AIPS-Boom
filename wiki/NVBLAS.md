# NVBLAS

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, BLAS, Linear Algebra, Drop-in, Interoperability, CUDA-X
**Related:** [[cuBLAS]], [[nvmath-python]], [[cuSOLVER]], [[Thrust]]
**Sources:** NVIDIA official documentation, docs.nvidia.com/cuda/nvblas
**Last Updated:** 2026-04-09

## Summary
NVBLAS is a GPU-accelerated drop-in replacement for CPU BLAS (Basic Linear Algebra Subprograms) libraries that transparently intercepts Level 3 BLAS calls (SGEMM, DGEMM, CGEMM, ZGEMM, SSYMM, STRMM, etc.) from existing CPU-based applications and redirects them to cuBLAS for GPU execution. It requires zero code changes — existing applications linked against a CPU BLAS library (OpenBLAS, MKL, ATLAS) can be GPU-accelerated simply by pre-loading the NVBLAS shared library, making it the lowest-friction path to GPU acceleration for legacy scientific and engineering software.

## Detail

### Purpose
NVBLAS solves the problem of GPU-enabling legacy Fortran and C applications that use standard BLAS interfaces without any code modifications. By acting as a BLAS shim that intercepts Level 3 BLAS calls and dispatches them to cuBLAS, it provides immediate GPU acceleration for applications like MATLAB, R, NumPy (when using BLAS backends), and scientific simulation codes that were written before GPU computing existed.

### Key Features
- Transparent GPU acceleration via `LD_PRELOAD` (Linux) or DLL replacement (Windows)
- Intercepts all Level 3 BLAS routines: SGEMM, DGEMM, CGEMM, ZGEMM, SSYMM, DSYMM, STRMM, DTRMM, STRSM, DTRSM, etc.
- Configurable via `nvblas.conf` text file (no code changes needed)
- CPU fallback: non-Level-3 BLAS operations delegated to the underlying CPU BLAS
- Multi-GPU support via cuBLAS multi-GPU routines
- Matrix size threshold: can configure minimum matrix size before GPU offload (avoids overhead for small matrices)
- Logging capability for debugging which calls are intercepted
- Works with any standard Fortran or C BLAS-calling application

### Use Cases
- Accelerating MATLAB without MEX code modifications
- GPU-enabling R with GPU BLAS backend
- Accelerating legacy Fortran simulation codes (climate models, FEM solvers)
- Transparent GPU acceleration of Python SciPy linalg (when BLAS-backed)
- Evaluating GPU speedup potential before committing to code refactoring
- Drop-in acceleration of commercial simulation software

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 3.0+ (Kepler minimum)
- CUDA 5.0 or higher
- Requires a CPU BLAS fallback library (OpenBLAS, MKL, ATLAS, Netlib BLAS)

### Language Bindings
- No programming required — operates via library preloading
- Configuration via `nvblas.conf` plain text configuration file
- Transparent to Fortran, C, C++ applications

## Connections
- [[cuBLAS]] — NVBLAS is a thin shim on top of cuBLAS; all GPU execution is performed by cuBLAS
- [[cuSOLVER]] — cuSOLVER uses cuBLAS internally; NVBLAS complements it for applications that call BLAS directly
- [[nvmath-python]] — nvmath-python is the modern Python equivalent for direct cuBLAS access
- [[Thrust]] — Thrust parallel algorithms provide alternative GPU primitives for non-BLAS GPU tasks

## Resources
- [NVBLAS Documentation](https://docs.nvidia.com/cuda/nvblas/index.html)
- [cuBLAS Documentation](https://docs.nvidia.com/cuda/cublas/index.html)
- [NVBLAS User Guide](https://docs.nvidia.com/cuda/nvblas/index.html#usage)
