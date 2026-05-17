# cuPauliProp

**Type:** Technology
**Tags:** NVIDIA, CUDA, cuQuantum, Pauli propagation, quantum simulation, gradients
**Related:** [[cuQuantum]], [[cuTensorNet]], [[cuDensityMat]], [[cuStateVec]], [[cuStabilizer]], [[cuQuantum-Appliance]], [[CUDA-Q]], [[CUDA-QX]], [[NVIDIA-Quantum]]
**Sources:** https://docs.nvidia.com/cuda/cuquantum/latest/cupauliprop/index.html, https://docs.nvidia.com/cuda/cuquantum/latest/
**Last Updated:** 2026-04-29

## Summary
cuPauliProp is the [[cuQuantum]] library for Pauli propagation quantum simulators. It provides GPU-accelerated primitives for propagating Pauli expansions through quantum circuits, with APIs for Pauli terms, truncation, sorting/deduplication, traces, gate operators, noise-channel operators, and backward differentiation.

## Detail

### Purpose
Some quantum simulation and analysis workloads can be expressed in a Pauli basis rather than as full state-vector evolution. cuPauliProp focuses on the Pauli-propagation path: representing Pauli expansions, applying quantum operations, controlling growth through truncation and deduplication, and computing trace/gradient quantities efficiently on NVIDIA GPUs.

### Current scope
- Pauli propagation through quantum circuits.
- Pauli-basis data structures for terms and expansions.
- Clifford gate, Pauli rotation, Pauli noise-channel, and amplitude-damping operator APIs.
- Truncation strategies, sorting, deduplication, and packed Pauli storage.
- Trace computations and backward differentiation for gradient workflows.
- Linux support on x86_64 and ARM64 CPUs with Turing, Ampere, Ada, Hopper, and Blackwell GPUs.

### NVIDIA context
cuPauliProp is one of the current cuQuantum component libraries, not a separate application framework. It complements [[cuStateVec]] for explicit state vectors, [[cuTensorNet]] for tensor-network contractions, [[cuDensityMat]] for analog dynamics, and [[cuStabilizer]] for stabilizer simulation and QEC-adjacent workflows.

## Connections
- [[cuQuantum]] - parent SDK and documentation family.
- [[cuTensorNet]], [[cuDensityMat]], [[cuStateVec]], and [[cuStabilizer]] - sibling cuQuantum component libraries.
- [[cuQuantum-Appliance]] - containerized workflow that includes cuPauliProp.
- [[CUDA-Q]] - higher-level quantum programming stack that can use cuQuantum simulation capabilities.
- [[CUDA-QX]] - QEC and solver libraries adjacent to Pauli/stabilizer simulation research.
- [[NVIDIA-Quantum]] - NVIDIA accelerated quantum computing solution area.

## Resources
- [cuPauliProp Documentation](https://docs.nvidia.com/cuda/cuquantum/latest/cupauliprop/index.html)
- [cuQuantum Documentation](https://docs.nvidia.com/cuda/cuquantum/latest/)
