# NVSHMEM

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, PGAS, Distributed Computing, Multi-GPU, HPC, OpenSHMEM
**Related:** [[NVSHMEM4Py]], [[NCCL]], [[NVIDIA-HPC-X]], [[GPUDirect-RDMA]], [[CUDA-Python]], [[cuda-core]], [[CuPy]], [[PyTorch]], [[cuFFT]], [[cuFFTMp]], [[cuBLAS]], [[NVIDIA-Fortran-CUDA-Interfaces]], [[AmgX]]
**Sources:** NVIDIA official documentation, https://docs.nvidia.com/nvshmem/, https://docs.nvidia.com/nvshmem/api/api/language_bindings/python/index.html, https://docs.nvidia.com/nvshmem/api/api/language_bindings/python/interoperability.html
**Last Updated:** 2026-04-29

## Summary
NVSHMEM is NVIDIA's implementation of the OpenSHMEM programming model for GPU clusters, providing a Partitioned Global Address Space (PGAS) interface that enables direct GPU-to-GPU communication without CPU orchestration. It supports GPU-initiated one-sided communication (puts/gets), fine-grained asynchronous data transfers, and interoperability with MPI. [[NVSHMEM4Py]] provides the official Python language binding for NVSHMEM.

## Detail

### Purpose
Traditional multi-GPU programming models (MPI, NCCL) require CPU involvement to orchestrate communication. NVSHMEM enables GPUs to directly access memory on remote GPUs using one-sided put/get operations initiated from CUDA kernels, eliminating CPU synchronization bottlenecks and enabling fine-grained, irregular communication patterns that are difficult to express with collective operations.

### Key Features
- PGAS (Partitioned Global Address Space): unified address space across all GPUs in a cluster
- GPU-initiated one-sided communication: put, get, atomic operations from CUDA kernels
- CPU-initiated and CUDA stream-based operation modes
- Low-overhead one-sided primitives (initiating process specifies all transfer details)
- Asynchronous design: overlaps computation and communication
- MPI interoperability for hybrid programming models
- Compatible with OpenSHMEM implementations
- Multi-architecture support: x86 and Arm processors
- [[NVSHMEM4Py]]: official Python language binding with host APIs, Python device APIs, and CuPy/PyTorch interoperability.
- Used by [[cuFFTMp]] for multi-node FFT communication

### Use Cases
- Quantum chromodynamics (QCD) simulations via QUDA library
- Spatial-parallel deep learning convolutions
- Irregular communication patterns in sparse solvers
- HPC applications with fine-grained neighbor communication
- Molecular dynamics with non-collective communication patterns
- Graph analytics with irregular data access

### Hardware Requirements
- NVIDIA GPU with CUDA support
- NVLink for intra-node GPU communication
- InfiniBand or RoCE for inter-node GPU communication
- GPU cluster environment required for multi-node use

### Language Bindings
- C and C++ (primary API)
- Python via [[NVSHMEM4Py]]

## Connections
- [[NCCL]] — NCCL handles collective operations; NVSHMEM handles fine-grained point-to-point PGAS communication
- [[NVSHMEM4Py]] — official Python binding for NVSHMEM, including symmetric memory and Python GPU library interoperability.
- [[CUDA-Python]] and [[cuda-core]] — NVSHMEM4Py participates in the current Python CUDA stack and uses cuda-core concepts for device/stream setup.
- [[NVIDIA-HPC-X]] — HPC-X includes SHMEM/PGAS communication libraries that sit near NVSHMEM's GPU-cluster programming model
- [[GPUDirect-RDMA]] — NVSHMEM relies on GPU-aware RDMA paths for inter-node GPU communication
- [[cuFFT]] and [[cuFFTMp]] — cuFFTMp uses NVSHMEM for multi-node distributed FFT communication
- [[NVIDIA-Fortran-CUDA-Interfaces]] - current Fortran CUDA interfaces include NVSHMEM module/interface coverage.
- [[cuBLAS]] — cuBLASMp multi-node linear algebra uses NVSHMEM for data movement
- [[AmgX]] — AmgX multi-node solvers use NVSHMEM-like communication patterns

## Resources
- [Official Page](https://developer.nvidia.com/nvshmem)
- [NVSHMEM Documentation](https://docs.nvidia.com/nvshmem/)
