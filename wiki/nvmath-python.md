# nvmath-python

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Python, Math, Linear Algebra, FFT, Random Numbers, Open Source
**Related:** [[CUDA-Python]], [[cuda-core]], [[cuda-bindings]], [[cuBLAS]], [[cuFFT]], [[cuFFTMp]], [[cuRAND]], [[cuDSS]], [[cuTENSOR]]
**Sources:** NVIDIA official documentation, https://nvidia.github.io/cuda-python/latest/, https://docs.nvidia.com/cuda/nvmath-python/
**Last Updated:** 2026-04-29

## Summary
nvmath-python is an open-source Python library that bridges the Python scientific ecosystem to NVIDIA's CUDA-X math libraries (cuBLAS, cuFFT, cuRAND, cuDSS, and more) through intuitive, Pythonic APIs. It supports host and device API modes, multi-GPU/multi-node scaling, and deep interoperability with NumPy, CuPy, PyTorch, RAPIDS, SciPy, and scikit-learn — delivering native CUDA-X performance without leaving Python.

## Detail

### Purpose
The Python scientific community relies on libraries like NumPy and SciPy, but these don't expose the full performance of NVIDIA's CUDA-X math libraries. nvmath-python closes this gap by providing first-class Python interfaces to GPU-native math primitives, enabling scientists and ML practitioners to scale workflows with minimal code changes and no C++ required.
The current [[CUDA-Python]] hub lists nvmath-python as the Pythonic access layer for NVIDIA CPU and GPU math libraries.

### Key Features
- Intuitive Pythonic APIs with customization options for advanced users
- Host APIs (generic and specialized) for standard GPU-offloaded computation
- Device APIs for embedding math operations inside custom CUDA kernels
- Callback support for fusing custom Python code with library operations
- Stateful class-form APIs with distinct specification, planning, autotuning, and execution phases
- Python logging integration for observability
- Multi-GPU and multi-node scaling without extensive recoding
- Interoperability: works alongside NumPy, CuPy, PyTorch, RAPIDS, SciPy, scikit-learn
- CPU fallback: NVIDIA Performance Libraries (NVPL) for Grace CPU; MKL for x86 hosts

### Supported Operations
- **Dense Linear Algebra (GEMM)**: wraps cuBLAS and cuBLASDx
- **Fast Fourier Transforms**: wraps [[cuFFT]], [[cuFFTDx]], [[cuFFTMp]] (C2C, C2R, R2C)
- **Random Number Generation**: wraps cuRAND (pseudo and quasi-random + distributions)
- **Sparse Linear Algebra**: wraps cuDSS for direct sparse linear system solving

### Use Cases
- Scientific computing in Python requiring GPU acceleration
- ML research requiring custom math operations beyond framework capabilities
- Library development on top of CUDA-X primitives
- Multi-GPU and multi-node numerical workflows from Python

### Hardware Requirements
- NVIDIA GPU with CUDA support for GPU execution
- NVIDIA Grace CPU for NVPL CPU fallback
- x86 CPU with MKL for CPU fallback
- Numba-CUDA for custom kernel integration

### Language Bindings
- Python (primary — this is a Python library)
- Integrates with Numba-CUDA for device kernel embedding

## Connections
- [[cuBLAS]] — nvmath-python wraps cuBLAS GEMM operations
- [[CUDA-Python]] — umbrella that lists nvmath-python as a Python CUDA component.
- [[cuda-core]] and [[cuda-bindings]] — adjacent CUDA Python layers for runtime/core access and low-level bindings.
- [[cuFFT]] — nvmath-python wraps cuFFT transform operations
- [[cuFFTMp]] - distributed FFT support documented as part of nvmath-python FFT coverage.
- [[cuRAND]] — nvmath-python wraps cuRAND random number generation
- [[cuDSS]] — nvmath-python wraps cuDSS sparse direct solver
- [[cuTENSOR]] — tensor operations available via nvmath-python interfaces

## Resources
- [Official Page](https://developer.nvidia.com/nvmath-python)
- [GitHub](https://github.com/NVIDIA/nvmath-python)
- [Documentation](https://docs.nvidia.com/cuda/nvmath-python/)
