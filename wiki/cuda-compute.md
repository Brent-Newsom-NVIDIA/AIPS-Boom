# cuda.compute

**Type:** Technology
**Tags:** NVIDIA, CUDA, Python, CCCL, Parallel Algorithms, CUB, Thrust, GPU Programming
**Related:** [[CUDA-Python]], [[CUDA-Cpp-Standard-Library]], [[Thrust]], [[CUB]], [[cuda-coop]], [[NVRTC]], [[nvJitLink]], [[CuPy]], [[PyTorch]]
**Sources:** https://nvidia.github.io/cccl/python/compute, https://nvidia.github.io/cuda-python/latest/
**Last Updated:** 2026-04-29

## Summary
`cuda.compute` is NVIDIA's current CUDA Python / CCCL module for host-callable GPU parallel algorithms such as reductions, scans, sorts, transforms, and related composable primitives. It supersedes the older `cuda.parallel` naming used in earlier CCCL Python material while keeping the same broad goal: expose high-performance CUB/Thrust-style algorithms to Python users without requiring them to write CUDA C++ kernels directly.

## Detail

### Purpose
`cuda.compute` gives Python applications access to CUDA Core Compute Libraries algorithms over device arrays and iterators. It is useful when a workflow needs GPU reductions, scans, sorting, transforms, or operation fusion from Python but does not need a custom handwritten kernel for every operation.

### Key capabilities
- Host-callable parallel algorithms over arrays and iterators.
- Reductions, scans, sorts, transforms, and other building blocks derived from CCCL/CUB algorithm families.
- User-defined operations compiled into device code with Numba CUDA semantics.
- Interop-oriented naming conventions where `d_` arguments indicate device memory and `h_` arguments indicate host memory.
- Device array interoperability with Python GPU ecosystems such as [[CuPy]] and [[PyTorch]] when compatible buffers are supplied.

### NVIDIA context
`cuda.compute` belongs with [[Thrust]], [[CUB]], and [[CUDA-Cpp-Standard-Library]] because it is the Python-facing path into CCCL algorithmic building blocks. It is distinct from [[cuda-coop]], which provides block-wide and warp-wide cooperative primitives for use inside Numba CUDA kernels.

## Connections
- [[CUDA-Python]] - CUDA Python umbrella that lists `cuda.compute` as a current component.
- [[CUDA-Cpp-Standard-Library]] - CCCL family context for CUDA C++ and Python library components.
- [[Thrust]] - C++ parallel algorithms that share the CCCL family.
- [[CUB]] - lower-level CUB primitives behind many CCCL algorithm patterns.
- [[cuda-coop]] - complementary CCCL Python module for device-side cooperative algorithms inside kernels.
- [[NVRTC]] and [[nvJitLink]] - relevant to runtime generation/linking patterns in Python CUDA algorithm stacks.
- [[CuPy]] and [[PyTorch]] - common Python GPU array ecosystems that can supply device memory.

## Source Excerpts
- NVIDIA describes `cuda.compute` as a library of composable GPU parallel primitives that can build reductions, scans, sorts, transforms, and more.
- The current CUDA Python hub lists `cuda.compute` as the Python module for CCCL's customizable parallel algorithms callable on the host.
