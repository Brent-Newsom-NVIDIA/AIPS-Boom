# cuDensityMat

**Type:** Technology
**Tags:** NVIDIA, CUDA, cuQuantum, quantum dynamics, density matrix, MPS, scientific computing
**Related:** [[cuQuantum]], [[cuTensorNet]], [[cuStateVec]], [[cuPauliProp]], [[cuStabilizer]], [[cuQuantum-Appliance]], [[CUDA-Q]], [[CUDA-QX]], [[NVIDIA-Quantum]], [[cuTENSOR]], [[NCCL]]
**Sources:** https://docs.nvidia.com/cuda/cuquantum/latest/cudensitymat/index.html, https://docs.nvidia.com/cuda/cuquantum/latest/
**Last Updated:** 2026-04-29

## Summary
cuDensityMat is the [[cuQuantum]] library for accelerating analog quantum dynamics solvers. It provides APIs for defining pure or mixed quantum states in tensor-product spaces, defining many-body operators and superoperators, computing operator actions, propagating quantum states in time, computing expectation values, and evaluating operator eigenspectra on NVIDIA GPUs.

## Detail

### Purpose
Analog quantum dynamics workloads need to represent quantum states, operators, and master equations beyond simple gate-by-gate circuit simulation. cuDensityMat gives quantum researchers a GPU-accelerated library for operator actions, time propagation, gradients, expectation values, eigenspectrum workflows, and distributed execution in quantum many-body dynamics.

### Current scope
- Pure and mixed quantum states in arbitrary tensor-product spaces, including MPS-factorized states.
- Many-body operators and superoperators represented as sums of elementary tensor operators, full matrix operators, matrix product operators, and coefficient terms.
- Operator and superoperator action on quantum states.
- Vector-jacobian products and gradients for parameterized operator/superoperator actions.
- Master-equation right-hand-side construction and coupled ODE system workflows.
- Expectation values, state/operator properties, time propagation, and extreme eigenspectrum computation.
- Linux support on x86_64 and ARM64 CPUs with Turing, Ampere, Ada, Hopper, and Blackwell GPUs.

### NVIDIA context
cuDensityMat is part of the current five-library cuQuantum SDK alongside [[cuStateVec]], [[cuTensorNet]], [[cuPauliProp]], and [[cuStabilizer]]. It depends on cuTensorNet and [[cuTENSOR]] in current NVIDIA docs, so it belongs in the same graph as tensor-network simulation and CUDA-Q quantum application workflows.

## Connections
- [[cuQuantum]] - parent SDK and documentation family.
- [[cuTensorNet]] - dependency and adjacent tensor-network simulation component.
- [[cuStateVec]] - circuit state-vector simulation component.
- [[cuPauliProp]] and [[cuStabilizer]] - adjacent current cuQuantum libraries.
- [[cuQuantum-Appliance]] - containerized distribution including cuDensityMat.
- [[CUDA-Q]] and [[CUDA-QX]] - higher-level programming and application-library layers for quantum-classical workflows.
- [[NVIDIA-Quantum]] - platform context for accelerated quantum computing.
- [[cuTENSOR]] - tensor algebra dependency listed in current cuDensityMat prerequisites.
- [[NCCL]] - distributed GPU communication layer relevant to multi-GPU/multi-node execution.

## Resources
- [cuDensityMat Documentation](https://docs.nvidia.com/cuda/cuquantum/latest/cudensitymat/index.html)
- [cuQuantum Documentation](https://docs.nvidia.com/cuda/cuquantum/latest/)
