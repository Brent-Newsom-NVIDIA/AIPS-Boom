# NVSHMEM4Py

**Type:** Technology
**Tags:** NVIDIA, NVSHMEM, Python, CUDA Python, PGAS, Distributed GPU, HPC, Communication
**Related:** [[NVSHMEM]], [[CUDA-Python]], [[cuda-core]], [[cuda-bindings]], [[cuda-pathfinder]], [[CuPy]], [[PyTorch]], [[NVIDIA-HPC-X]], [[GPUDirect-RDMA]]
**Sources:** https://docs.nvidia.com/nvshmem/api/api/language_bindings/python/index.html, https://docs.nvidia.com/nvshmem/api/api/language_bindings/python/overview.html, https://docs.nvidia.com/nvshmem/api/api/language_bindings/python/interoperability.html, https://docs.nvidia.com/nvshmem/api/api/language_bindings/index.html, https://docs.nvidia.com/nvshmem/release-notes-install-guide/install-guide/nvshmem4py-install-proc.html, https://nvidia.github.io/cuda-python/latest/
**Last Updated:** 2026-04-29

## Summary
NVSHMEM4Py is the official Python language binding for [[NVSHMEM]]. It gives Python applications a Pythonic interface to NVSHMEM's GPU-centric PGAS communication model, including symmetric memory, put/get operations, collectives, synchronization, and interoperability with Python GPU arrays.

## Detail

### Purpose
NVSHMEM enables fine-grained GPU communication across processing elements. NVSHMEM4Py brings that model into Python so distributed GPU applications can initialize NVSHMEM, allocate symmetric memory, communicate across PEs, and interoperate with Python GPU libraries without dropping to C/C++ for every communication path.

### Key capabilities
- Pythonic host-side access to NVSHMEM functionality.
- Symmetric memory allocation and lifecycle management.
- Communication operations such as put/get, collectives, and synchronization primitives.
- MPI-based initialization and CUDA stream usage through [[cuda-core]] objects.
- Interoperability with [[CuPy]] arrays and [[PyTorch]] tensors backed by NVSHMEM symmetric memory through DLPack-compatible CUDA buffers.
- Python device API coverage for Numba CUDA and CuTe DSL workflows in the current NVSHMEM language-bindings docs.

### Compatibility context
Current NVSHMEM4Py host APIs depend on [[cuda-core]], [[cuda-bindings]], [[cuda-pathfinder]], and NumPy. NVIDIA's compatibility table for NVSHMEM 3.6.5 lists NVSHMEM4Py 0.3.0 with `cuda-core >= 0.5.0`, `cuda-bindings` 12.9.x/13.1.x/13.2.x, PyTorch 2.9.0, Numba CUDA 0.28, `cuda-pathfinder >= 1.2.3`, and NVIDIA CUTLASS DSL 4.4.2.

### NVIDIA context
NVSHMEM4Py belongs in the wiki as the Python bridge between [[NVSHMEM]] and the current [[CUDA-Python]] stack. It is especially relevant for Python HPC, distributed AI, and multi-GPU/multi-node applications that need communication patterns beyond framework-managed [[NCCL]] collectives.

## Connections
- [[NVSHMEM]] - core C/C++ GPU PGAS library that NVSHMEM4Py binds.
- [[CUDA-Python]] - umbrella hub that lists nvshmem4py.
- [[cuda-core]], [[cuda-bindings]], and [[cuda-pathfinder]] - current CUDA Python dependencies for NVSHMEM4Py host APIs.
- [[CuPy]] and [[PyTorch]] - Python GPU array/tensor libraries that NVSHMEM4Py can interoperate with through symmetric memory.
- [[NVIDIA-HPC-X]] - adjacent NVIDIA HPC communication stack.
- [[GPUDirect-RDMA]] - inter-node GPU communication path relevant to NVSHMEM deployments.

## Source Excerpts
- NVIDIA describes NVSHMEM4Py as the official Python language binding for NVSHMEM.
- The NVSHMEM docs list Python bindings, memory management, interoperability, collectives, RMA, utility functions, and Python device APIs under the language-bindings section.
- The interoperability docs describe creating PyTorch tensors and CuPy arrays backed by NVSHMEM symmetric memory.
