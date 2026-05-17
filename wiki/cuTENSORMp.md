# cuTENSORMp

**Type:** Library
**Tags:** NVIDIA, CUDA, cuTENSOR, tensor contractions, multi-process, distributed tensor, NCCL, CUDA Graphs, HPC
**Related:** [[cuTENSOR]], [[cuTENSORMg]], [[cuTensorNet]], [[cuQuantum]], [[NVIDIA-HPC-SDK]], [[NVIDIA-CUDA]], [[NVIDIA-HPC-Compilers]], [[NCCL]], [[NVSHMEM]], [[GPUDirect-RDMA]]
**Sources:** https://docs.nvidia.com/cuda/cutensor/latest/user_guide_cutensorMp.html, https://docs.nvidia.com/cuda/cutensor/latest/index.html, https://developer.nvidia.com/cutensor
**Last Updated:** 2026-04-29

## Summary
cuTENSORMp is the multi-process extension of [[cuTENSOR]] for distributed tensor contractions. Current NVIDIA docs describe it as coordinating tensor computations across multiple processes while reusing cuTENSOR single-process kernels for local work. It targets large tensor contractions that need multi-GPU and multi-node scale.

## Detail

### Purpose
When tensor contractions exceed the memory capacity or practical runtime of a single GPU or single process, applications need distributed tensor execution. cuTENSORMp extends the cuTENSOR programming model to distributed tensors, distributed operation descriptors, workspace-budgeted execution plans, and distributed contraction launches.

### Current scope
- Multi-process distributed tensor contractions.
- Programming model that follows cuTENSOR: create a handle, create distributed tensors and operation descriptors, optimize execution plans using workspace budgets, then launch distributed contractions.
- Current operation focus: Einstein-notation contraction of two input tensors into an output tensor.
- Current limitations include no accumulation into an existing output (`beta` must be zero), divisibility requirements for distributed extents, canonical ordering requirements for equation modes, and fully replicated or fully distributed tensor layouts.
- CUDA Graph guidance noting that host-side communication and collective behavior limit end-to-end graph capture.

### NVIDIA context
cuTENSORMp is marked beta in the current cuTENSOR docs. It is the distributed, multi-process sibling of [[cuTENSORMg]] and the scale-out path for tensor math researchers working in quantum chemistry, quantum computing, and other large tensor-contraction domains.

## Connections
- [[cuTENSOR]] - parent tensor primitive library.
- [[cuTENSORMg]] - single-process multi-GPU sibling.
- [[cuTensorNet]] - tensor-network workloads can sit near cuTENSOR scale-out paths.
- [[cuQuantum]] - quantum simulation SDK that relies heavily on tensor contractions.
- [[NVIDIA-HPC-SDK]] and [[NVIDIA-HPC-Compilers]] - HPC development context.
- [[NVIDIA-CUDA]] - core CUDA platform underneath distributed tensor execution.
- [[NCCL]], [[NVSHMEM]], and [[GPUDirect-RDMA]] - communication/fabric context for distributed GPU workloads.

## Resources
- [cuTENSORMp User Guide](https://docs.nvidia.com/cuda/cutensor/latest/user_guide_cutensorMp.html)
- [cuTENSOR Documentation](https://docs.nvidia.com/cuda/cutensor/latest/index.html)
