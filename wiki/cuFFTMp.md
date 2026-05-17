# cuFFTMp

**Type:** Library
**Tags:** NVIDIA, CUDA, cuFFT, cuFFTMp, FFT, multi-GPU, multi-node, NVSHMEM, MPI, HPC
**Related:** [[cuFFT]], [[cuFFTDx]], [[NVSHMEM]], [[NVIDIA-HPC-SDK]], [[NVIDIA-HPC-Compilers]], [[NCCL]], [[NVIDIA-HPC-X]], [[GPUDirect-RDMA]], [[nvmath-python]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/cuda/cufftmp/index.html, https://docs.nvidia.com/hpc-sdk/index.html
**Last Updated:** 2026-04-29

## Summary
cuFFTMp is the cuFFT multi-process library for distributed FFTs across multiple GPUs and multiple nodes. It supports 2D and 3D multi-GPU, multi-node FFTs, slab and pencil decompositions, arbitrary block sizes, an MPI-compatible interface, and a low-latency implementation based on [[NVSHMEM]]. NVIDIA distributes cuFFTMp through [[NVIDIA-HPC-SDK]] and NVIDIA Developer Zone.

## Detail

### Purpose
Large FFT workloads in weather, seismic, molecular dynamics, computational physics, and other HPC domains can exceed a single GPU or single node. cuFFTMp extends the [[cuFFT]] family into distributed-memory systems so applications can execute 2D/3D FFTs with data decomposed across processes and GPUs.

### Current scope
- 2D and 3D multi-GPU, multi-node FFTs.
- Slab (1D) and pencil (2D) data decomposition with arbitrary block sizes.
- MPI-compatible interface for integration into HPC applications.
- NVSHMEM-based low-latency communication optimized for single-node and multi-node FFTs.
- x86_64 and aarch64 support.
- Documentation for quick start, usage requirements, API usage, versioning, performance considerations, memory requirements, bootstrapping, NVSHMEM integration, and API references.

### NVIDIA context
cuFFTMp is distinct from [[cuFFT]] and [[cuFFTDx]]: cuFFT is the main host-side FFT library, cuFFTDx is the device-side FFT library for in-kernel fusion, and cuFFTMp is the distributed multi-process FFT path for HPC systems.

## Connections
- [[cuFFT]] - parent FFT library family.
- [[cuFFTDx]] - device-side FFT sibling for fused kernels.
- [[NVSHMEM]] - low-latency communication layer used by cuFFTMp.
- [[NVIDIA-HPC-SDK]] - distribution and documentation hub.
- [[NVIDIA-HPC-Compilers]] - compiler context for HPC applications that link distributed FFT code.
- [[NCCL]], [[NVIDIA-HPC-X]], and [[GPUDirect-RDMA]] - adjacent communication/fabric stack for multi-GPU and multi-node HPC.
- [[nvmath-python]] - Python math library that documents cuFFTMp as part of FFT support.
- [[NVIDIA-CUDA]] - core CUDA platform underneath the FFT library stack.

## Resources
- [cuFFTMp Documentation](https://docs.nvidia.com/cuda/cufftmp/index.html)
- [NVIDIA HPC SDK Documentation](https://docs.nvidia.com/hpc-sdk/index.html)
