# JAX (GPU)

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Machine Learning, Automatic Differentiation, JIT, Python, Scientific Computing
**Related:** [[NVIDIA-Optimized-Frameworks]], [[cuDNN]], [[cuBLAS]], [[cuBLASLt]], [[NCCL]], [[CuPy]], [[PyTorch]], [[Transformer-Engine]], [[TensorFlow-GPU]]
**Sources:** jax.readthedocs.io official documentation, https://docs.nvidia.com/deeplearning/frameworks/index.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/getting_started/index.html
**Last Updated:** 2026-04-29

## Summary
JAX is an open-source Python library developed by Google DeepMind for high-performance numerical computing and machine learning, with GPU acceleration via CUDA. It provides composable function transformations — `jit` (XLA compilation), `grad` (automatic differentiation), `vmap` (vectorization), and `pmap`/`shard_map` (parallelization) — that transform pure Python/NumPy functions into highly optimized GPU code via the XLA (Accelerated Linear Algebra) compiler. JAX is increasingly popular for ML research due to its functional programming model and efficient GPU/TPU execution.

## Detail

### Purpose
JAX solves the problem of writing high-performance numerical code that is simultaneously differentiable, parallelizable, and hardware-accelerated, without requiring low-level GPU programming. Its composable transformation system enables researchers to write simple NumPy-like code and automatically get JIT-compiled, differentiable, vectorized GPU implementations.

### Key Features
- `jax.jit`: JIT compilation of Python functions via XLA for GPU/TPU
- `jax.grad` / `jax.jacobian` / `jax.hessian`: automatic differentiation (forward and reverse mode)
- `jax.vmap`: automatic vectorization (batching) of functions over array axes
- `jax.pmap`: SPMD parallelization across multiple devices (GPUs/TPUs)
- `jax.sharding` / `shard_map`: explicit device mesh sharding for multi-GPU/multi-host training
- NumPy-compatible API (`jax.numpy`) running on GPU
- XLA-optimized CUDA kernel generation with operator fusion
- Uses cuDNN, cuBLAS via XLA backends on NVIDIA GPUs
- NCCL-based collective communications for multi-GPU training
- Pytree support for arbitrary nested data structure transformations
- `jax.random` with explicit PRNG key system for reproducibility
- DLPack / CUDA Array Interface for interoperability with PyTorch, CuPy
- Flax, Haiku, Equinox neural network libraries built on JAX

### Use Cases
- ML research requiring custom loss functions and gradient computations
- Physics simulation with automatic differentiation through simulation steps
- Bayesian ML and probabilistic programming (Pyro, NumPyro on JAX)
- Scientific computing: PDE solvers, molecular dynamics, quantum chemistry
- Reinforcement learning environments requiring differentiable dynamics
- Multi-host distributed training with explicit sharding control
- Reproducible GPU environments through [[NVIDIA-Optimized-Frameworks]] containers and support-matrix versioning
- Neural ODE and continuous-time model training
- Transformer model training with NVIDIA [[Transformer-Engine]] JAX/Flax modules, including FP8, MXFP8, and NVFP4 recipe paths on supported NVIDIA GPUs

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 5.2+ (Maxwell minimum)
- CUDA 11.8 or higher (CUDA 12.x for JAX 0.4.x+)
- cuDNN 8.6+ required for full XLA GPU backend
- Multi-GPU: NCCL for collective operations; NVLink recommended for bandwidth
- H100/A100 recommended for large-scale model training

### Language Bindings
- Python (exclusively)
- XLA HLO (intermediate representation, typically not user-facing)

## Connections
- [[NVIDIA-Optimized-Frameworks]] - NVIDIA optimized framework containers provide a versioned path for JAX GPU environments where available.
- [[cuDNN]] — XLA uses cuDNN for convolution and attention operations on NVIDIA GPUs
- [[cuBLAS]] and [[cuBLASLt]] — XLA delegates GEMM operations to cuBLAS-family libraries
- [[NCCL]] — JAX's `pmap`/`shard_map` multi-device collectives use NCCL
- [[CuPy]] — CuPy and JAX arrays interoperable via CUDA Array Interface for zero-copy exchange
- [[PyTorch]] — JAX and PyTorch coexist in many research workflows; DLPack enables tensor sharing
- [[Transformer-Engine]] — NVIDIA TE supports JAX alongside PyTorch, exposing Flax modules and recipe-aware low-precision autocast.
- [[TensorFlow-GPU]] — TensorFlow and JAX both use XLA as a compilation backend on GPU

## Resources
- [JAX Documentation](https://jax.readthedocs.io)
- [GitHub](https://github.com/google/jax)
- [JAX GPU Installation](https://jax.readthedocs.io/en/latest/installation.html)
- [XLA Compiler](https://openxla.org/xla)
