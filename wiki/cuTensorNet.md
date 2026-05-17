# cuTensorNet

**Type:** Technology
**Tags:** NVIDIA, CUDA, cuQuantum, quantum simulation, tensor networks, cuTENSOR, HPC
**Related:** [[cuQuantum]], [[cuStateVec]], [[cuDensityMat]], [[cuPauliProp]], [[cuStabilizer]], [[cuQuantum-Appliance]], [[CUDA-Q]], [[CUDA-QX]], [[NVIDIA-Quantum]], [[cuTENSOR]], [[cuTENSORMg]], [[cuTENSORMp]], [[NCCL]]
**Sources:** https://docs.nvidia.com/cuda/cuquantum/latest/cutensornet/index.html, https://docs.nvidia.com/cuda/cuquantum/latest/
**Last Updated:** 2026-04-29

## Summary
cuTensorNet is the tensor-network computation component of [[cuQuantum]]. It accelerates tensor network contraction, contraction-path search, slicing, tensor circuit state construction, matrix product state workflows, QR/SVD decompositions, and automatic distributed execution on NVIDIA GPUs. It sits between low-level tensor algebra such as [[cuTENSOR]] and higher-level quantum simulation paths in [[CUDA-Q]] and [[cuQuantum-Appliance]].

## Detail

### Purpose
State-vector simulation grows exponentially with qubit count, while tensor-network approaches can exploit circuit structure, low entanglement, or sliced contractions. cuTensorNet provides the NVIDIA-optimized tensor network runtime needed to search contraction paths, plan memory-aware execution, and run contractions efficiently on single-GPU, multi-GPU, and distributed systems.

### Current scope
- Tensor and tensor-network descriptor APIs.
- Cost-aware contraction path finding and slicing under memory constraints.
- Contraction plan generation, autotuning, and execution.
- Tensor circuit state construction for amplitudes, expectation values, marginal distributions, sampling, projections, and MPS compression.
- Backward differentiation for tensor network contractions.
- QR/SVD tensor decomposition and gate-splitting operations.
- Automatic distributed parallelization and custom memory-management hooks.

### NVIDIA context
cuTensorNet is the cuQuantum component for tensor-network simulation, while [[cuStateVec]] handles explicit state vectors, [[cuDensityMat]] handles analog quantum dynamics, [[cuPauliProp]] handles Pauli propagation, and [[cuStabilizer]] handles stabilizer-style simulation. The [[cuQuantum-Appliance]] packages these libraries into a container workflow for Qiskit and Cirq frontends.

## Connections
- [[cuQuantum]] - parent SDK for GPU-accelerated quantum simulation libraries.
- [[cuStateVec]] - complementary explicit state-vector simulator component.
- [[cuDensityMat]] - analog quantum dynamics component that depends on cuTensorNet in current docs.
- [[cuPauliProp]] and [[cuStabilizer]] - adjacent cuQuantum libraries for Pauli propagation and stabilizer simulation.
- [[cuQuantum-Appliance]] - containerized workflow that includes cuTensorNet.
- [[CUDA-Q]] - higher-level quantum programming stack that can use cuQuantum simulation backends.
- [[NVIDIA-Quantum]] - solution area where cuQuantum fits beside CUDA-Q, CUDA-QX, NVQLink, and Quantum Cloud.
- [[cuTENSOR]] - tensor algebra foundation used by cuTensorNet.
- [[cuTENSORMg]] and [[cuTENSORMp]] - adjacent multi-GPU and distributed tensor contraction support in the cuTENSOR family.
- [[NCCL]] - distributed GPU communication layer relevant for multi-GPU/multi-node simulation.

## Resources
- [cuTensorNet Documentation](https://docs.nvidia.com/cuda/cuquantum/latest/cutensornet/index.html)
- [cuQuantum Documentation](https://docs.nvidia.com/cuda/cuquantum/latest/)
