# cuTENSOR

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Tensor, Linear Algebra, Deep Learning, HPC, Math
**Related:** [[cuBLAS]], [[cuDNN]], [[CUTLASS]], [[cuSOLVER]], [[nvmath-python]], [[cuTENSORMg]], [[cuTENSORMp]], [[cuQuantum]], [[cuTensorNet]], [[cuDensityMat]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
cuTENSOR is NVIDIA's GPU-accelerated tensor linear algebra library, providing high-performance tensor contraction, reduction, and elementwise operations. It leverages NVIDIA Tensor Cores (including TF32, 3xTF32, and DMMA modes) and supports arbitrary tensor dimensionality, block-sparse contractions, single-process multi-GPU execution through [[cuTENSORMg]], and multi-process distributed scaling through [[cuTENSORMp]]. It is used in deep learning, quantum chemistry, and computational physics.

## Detail

### Purpose
Tensor contractions are the generalization of matrix multiplication to higher-dimensional arrays — a core operation in deep learning, quantum chemistry, and physics simulation. cuTENSOR provides a highly optimized, hardware-native implementation of these operations that outperforms ad-hoc approaches and fully utilizes Tensor Core hardware on modern NVIDIA GPUs.

### Key Features
- Just-in-time (JIT) compiled kernels for tensor contraction
- Plan-based multi-stage API for contraction, reduction, and elementwise ops
- Support for arbitrarily dimensional tensor descriptors
- TF32, 3xTF32, and DMMA compute type support for Tensor Cores
- Block-sparse tensor contractions for sparsity exploitation
- Expressive API enabling elementwise operation fusion
- Mixed precision with int64 extents for large tensor dimensions
- [[cuTENSORMg]]: single-process multi-GPU tensor operations.
- [[cuTENSORMp]]: multi-process distributed tensor contractions.

### Use Cases
- Deep learning training and inference (tensor operations in transformers)
- Computer vision model acceleration
- Quantum chemistry simulations (e.g., CCSD, MP2)
- Computational physics (e.g., tensor network methods)
- Scientific computing with multi-dimensional arrays

### Hardware Requirements
- NVIDIA GPU with CUDA support
- Tensor Core acceleration on Volta (V100) and later
- 3xTF32 and DMMA modes on Ampere (A100) and later
- [[cuTENSORMg]] and [[cuTENSORMp]] require multi-GPU and/or multi-node interconnect context.

### Language Bindings
- C and C++ (primary API)
- Python (via nvmath-python and CuPy wrappers)

## Connections
- [[cuBLAS]] — cuBLAS handles 2D matrix operations; cuTENSOR extends to N-D tensors
- [[cuDNN]] — cuDNN uses tensor operations internally; cuTENSOR provides the low-level primitive
- [[CUTLASS]] — CUTLASS provides GEMM templates; cuTENSOR provides higher-level tensor contraction
- [[nvmath-python]] — Python-accessible interface for cuTENSOR operations
- [[cuTENSORMg]] - single-process multi-GPU cuTENSOR support.
- [[cuTENSORMp]] - multi-process distributed cuTENSOR support.
- [[cuTensorNet]] - current cuQuantum tensor-network component built on cuTENSOR.
- [[cuDensityMat]] - current cuQuantum analog-dynamics component that lists cuTENSOR as a prerequisite.

## Resources
- [Official Page](https://developer.nvidia.com/cutensor)
- [cuTENSOR Documentation](https://docs.nvidia.com/cuda/cutensor/)
