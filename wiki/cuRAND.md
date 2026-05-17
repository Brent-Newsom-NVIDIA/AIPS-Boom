# cuRAND

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Random Number Generation, Monte Carlo, Math, HPC
**Related:** [[cuBLAS]], [[cuFFT]], [[cuSOLVER]], [[Thrust]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
cuRAND is NVIDIA's CUDA Random Number Generation library, delivering GPU-accelerated generation of high-quality random numbers up to 8x faster than CPU alternatives by exploiting the massive parallelism of NVIDIA GPUs. It supports multiple pseudo-random and quasi-random algorithms as well as a variety of statistical distributions, with both host-side bulk generation and inline device-side APIs.

## Detail

### Purpose
Many computational workloads — Monte Carlo simulations, stochastic optimization, Bayesian inference, financial modeling — require enormous quantities of high-quality random numbers. cuRAND offloads this generation to the GPU, enabling tight integration with other GPU kernels and eliminating CPU-GPU transfer bottlenecks.

### Key Features
- Multiple RNG algorithms: MRG32k3a, MTGP Mersenne Twister, XORWOW pseudo-random
- Quasi-random Sobol' generators (standard, scrambled, and 64-bit variants)
- Statistical distributions: uniform, normal, log-normal, Poisson
- Single and double precision support
- Host API for bulk random number generation on GPU
- Device API for inline use inside CUDA kernels
- Statistically validated against TestU01 battery of tests
- Sample code for Monte Carlo and Pi estimation use cases

### Use Cases
- Monte Carlo simulations (finance, physics, chemistry)
- Stochastic machine learning and Bayesian methods
- Procedural content generation in graphics
- Numerical integration and sampling algorithms
- Drug discovery and molecular modeling

### Hardware Requirements
- NVIDIA GPU with CUDA support
- Included in NVIDIA HPC SDK and CUDA Toolkit
- No specific minimum architecture required for base functionality

### Language Bindings
- C and C++ (primary API)
- Python (via CuPy and other wrappers)

## Connections
- [[cuBLAS]] — commonly used together in Monte Carlo and ML training pipelines
- [[cuSOLVER]] — used alongside cuRAND in stochastic optimization
- [[Thrust]] — Thrust provides parallel algorithms that operate on cuRAND-generated data
- [[cuFFT]] — combined in signal processing and physics simulation pipelines

## Resources
- [Official Page](https://developer.nvidia.com/curand)
- [cuRAND Documentation](https://docs.nvidia.com/cuda/curand/)
