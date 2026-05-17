# cuTENSORMg

**Type:** Library
**Tags:** NVIDIA, CUDA, cuTENSOR, tensor contractions, multi-GPU, CUDA Graphs, HPC, quantum chemistry
**Related:** [[cuTENSOR]], [[cuTENSORMp]], [[cuTensorNet]], [[cuQuantum]], [[NVIDIA-HPC-SDK]], [[NVIDIA-CUDA]], [[NVIDIA-HPC-Compilers]], [[NVSHMEM]], [[NCCL]], [[GPUDirect-RDMA]]
**Sources:** https://docs.nvidia.com/cuda/cutensor/latest/user_guide_cutensorMg.html, https://docs.nvidia.com/cuda/cutensor/latest/index.html
**Last Updated:** 2026-04-29

## Summary
cuTENSORMg is the multi-GPU support layer in [[cuTENSOR]] for tensor operations across multiple GPUs in a single process. Current NVIDIA docs describe cuTENSORMg performance guidelines, accuracy behavior, scalar-type rules, CUDA Graph capture support, and logging controls for multi-GPU tensor contractions.

## Detail

### Purpose
Tensor contraction workloads in machine learning, quantum chemistry, and physics can outgrow a single GPU. cuTENSORMg extends cuTENSOR-style tensor contractions to multiple GPUs while keeping the programming model close to the base cuTENSOR API.

### Current scope
- Multi-GPU tensor contraction support for cuTENSOR workloads.
- Performance guidance for distributing tensors across GPUs, choosing block sizes, preserving stride-1 locality, and distributing across many modes.
- Accuracy guidance aligned with cuTENSOR, with half-precision caveats.
- Scalar type rules inherited from cuTENSOR.
- CUDA Graph capture support when operations do not involve host operands.
- Logging through `CUTENSORMG_LOG_LEVEL`, `CUTENSORMG_LOG_MASK`, and `CUTENSORMG_LOG_FILE`.

### NVIDIA context
cuTENSORMg is the single-process, multi-GPU tensor path. [[cuTENSORMp]] is the multi-process distributed tensor path. Both sit under [[cuTENSOR]] and are adjacent to [[cuTensorNet]] and [[cuQuantum]] workloads that rely on efficient tensor contractions.

## Connections
- [[cuTENSOR]] - parent CUDA tensor primitive library.
- [[cuTENSORMp]] - multi-process distributed tensor contraction sibling.
- [[cuTensorNet]] - quantum tensor-network library that depends on cuTENSOR-style tensor contractions.
- [[cuQuantum]] - quantum simulation SDK where tensor contractions matter.
- [[NVIDIA-HPC-SDK]] and [[NVIDIA-HPC-Compilers]] - HPC development context for large tensor applications.
- [[NVIDIA-CUDA]] - core CUDA platform underneath cuTENSOR.
- [[NCCL]], [[NVSHMEM]], and [[GPUDirect-RDMA]] - adjacent multi-GPU communication/fabric context.

## Resources
- [cuTENSORMg User Guide](https://docs.nvidia.com/cuda/cutensor/latest/user_guide_cutensorMg.html)
- [cuTENSOR Documentation](https://docs.nvidia.com/cuda/cutensor/latest/index.html)
