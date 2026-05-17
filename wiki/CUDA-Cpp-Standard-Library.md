# CUDA C++ Standard Library

**Type:** Technology
**Tags:** NVIDIA, CUDA, C++, standard library, libcu++, CCCL
**Related:** [[NVIDIA-CUDA]], [[Thrust]], [[CUB]], [[cuda-compute]], [[cuda-coop]], [[NVCC]], [[CUDA-Runtime-API]]
**Sources:** https://nvidia.github.io/cccl/libcudacxx/, https://nvidia.github.io/cccl/python/compute, https://nvidia.github.io/cccl/python/coop.html
**Last Updated:** 2026-04-29

## Summary
The CUDA C++ Standard Library, often referred to as libcu++, provides CUDA-capable C++ standard library facilities for host and device code. It is part of NVIDIA's broader CUDA Core Compute Libraries (CCCL) stack alongside [[Thrust]], [[CUB]], and Python-facing components such as [[cuda-compute]] and [[cuda-coop]].

## Detail

### Purpose
CUDA C++ developers need standard C++ abstractions that work correctly in device code as well as host code. libcu++ fills that role by providing supported headers, types, utilities, atomics, memory-model pieces, and other C++ facilities adapted for CUDA compilation and GPU execution.

### Key capabilities
- Device-compatible C++ library facilities for CUDA kernels.
- Integration with [[NVCC]] and the CUDA compilation model.
- Support for generic CUDA C++ code that can share abstractions across host and device boundaries.
- Alignment with CCCL components used by [[Thrust]], [[CUB]], [[cuda-compute]], and [[cuda-coop]].

### NVIDIA context
libcu++ is part of the modernization path for CUDA C++: stronger generic programming, richer type utilities, and cleaner integration between low-level CUDA kernels and high-level C++ application code.

## Connections
- [[Thrust]] - high-level parallel algorithms in the CCCL family.
- [[CUB]] - device/block/warp primitives in the CCCL family.
- [[cuda-compute]] - Python-facing host-callable CCCL algorithms.
- [[cuda-coop]] - Python-facing cooperative block/warp algorithms for Numba CUDA kernels.
- [[NVCC]] - compiles CUDA C++ using supported library headers and device annotations.
- [[NVIDIA-CUDA]] - libcu++ extends the CUDA developer environment.

## Source Excerpts
- NVIDIA publishes libcu++ documentation under the CUDA C++ Core Libraries documentation site.
