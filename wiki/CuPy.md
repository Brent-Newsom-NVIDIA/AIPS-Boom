# CuPy

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Python, NumPy, Scientific Computing, Array Computing
**Related:** [[CUDA-Python]], [[cuda-core]], [[cuda-bindings]], [[cuda-compute]], [[NVSHMEM4Py]], [[cuBLAS]], [[cuFFT]], [[cuRAND]], [[cuSPARSE]], [[nvmath-python]], [[Thrust]], [[JAX]]
**Sources:** cupy.dev official documentation
**Last Updated:** 2026-04-09

## Summary
CuPy is an open-source GPU-accelerated array computing library for Python that implements the NumPy and SciPy APIs on NVIDIA CUDA GPUs. It enables drop-in GPU acceleration of NumPy/SciPy code by replacing `import numpy as np` with `import cupy as cp`, with arrays residing in GPU memory and operations executing as CUDA kernels. CuPy is widely used in the scientific Python ecosystem as the GPU backend for RAPIDS libraries and as a tensor interchange format for nvmath-python.

## Detail

### Purpose
CuPy eliminates the effort of rewriting NumPy-based scientific code for GPU execution. By implementing the NumPy array API and SciPy submodules (signal, linalg, sparse, fft, ndimage) on CUDA, it provides immediate GPU speedups for numerical computing workloads without requiring CUDA C++ expertise.

### Key Features
- Drop-in NumPy/SciPy compatibility: `cupy.ndarray` mirrors `numpy.ndarray` interface
- Wraps NVIDIA CUDA-X libraries: cuBLAS (linalg), cuFFT (fft), cuRAND (random), cuSPARSE (sparse), cuSolver (linalg.solve)
- Custom CUDA kernel authoring via `cupy.RawKernel` and `cupy.ElementwiseKernel`
- `cupy.fuse` decorator for kernel fusion of elementwise operations
- Sparse matrix support (`cupyx.scipy.sparse`) backed by cuSPARSE
- DLPack and CUDA Array Interface support for zero-copy interoperability with PyTorch, JAX, TensorFlow
- Multi-GPU support via explicit device context management
- `cupy.prof` profiling utilities
- JIT compilation and caching of CUDA kernels at first call
- `cupy.testing` module for NumPy/CuPy result parity verification
- Support for CUDA streams and pinned memory management
- Compatible with CUDA 10.2 through CUDA 12.x

### Use Cases
- Scientific computing and numerical simulation on GPU
- Signal processing (FFT, filtering) with SciPy-compatible API
- Sparse linear algebra for graph and scientific applications
- Medical image processing with GPU-accelerated ndimage
- Custom GPU kernel prototyping in Python
- Backend array library for RAPIDS (cuDF, cuML use CuPy arrays)
- Interchange format between Python GPU libraries via DLPack

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 3.0+ (Kepler minimum)
- CUDA 10.2 or higher
- CUDA 11.x/12.x recommended for current CuPy releases (v13+)

### Language Bindings
- Python (exclusively)
- CUDA C++ for custom RawKernel definitions within Python strings

## Connections
- [[cuBLAS]] — CuPy's `cupy.linalg` functions delegate to cuBLAS for matrix operations
- [[cuFFT]] — CuPy's `cupy.fft` module is a Python wrapper around cuFFT
- [[cuRAND]] — CuPy's `cupy.random` module uses cuRAND for random number generation
- [[cuSPARSE]] — CuPy's `cupyx.scipy.sparse` matrix operations use cuSPARSE
- [[nvmath-python]] — nvmath-python provides a higher-level Python interface to the same CUDA-X libraries
- [[CUDA-Python]], [[cuda-core]], and [[cuda-bindings]] — NVIDIA-maintained Python CUDA layers that help standardize low-level CUDA access and interoperability.
- [[cuda-compute]] — CCCL Python algorithms can operate on compatible Python GPU arrays.
- [[NVSHMEM4Py]] — can create CuPy arrays backed by NVSHMEM symmetric memory.
- [[Thrust]] — CuPy's sort and reduction primitives leverage Thrust-style algorithms internally
- [[JAX]] — JAX uses a similar GPU array model; CuPy arrays interoperable via CUDA Array Interface

## Resources
- [Official Site](https://cupy.dev)
- [Documentation](https://docs.cupy.dev/en/stable/)
- [GitHub](https://github.com/cupy/cupy)
- [CuPy API Reference](https://docs.cupy.dev/en/stable/reference/)
