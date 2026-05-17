# cuQuantum

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Quantum Computing, Simulation, Tensor Networks, Scientific Computing
**Related:** [[NVIDIA-Quantum]], [[CUDA-Q]], [[CUDA-QX]], [[cuStateVec]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], [[cuStabilizer]], [[cuQuantum-Appliance]], [[cuTENSOR]], [[cuBLAS]], [[NCCL]], [[NVIDIA-Warp]]
**Sources:** https://docs.nvidia.com/cuda/cuquantum/latest/, https://developer.nvidia.com/cuquantum-sdk, https://www.nvidia.com/en-us/solutions/quantum-computing/
**Last Updated:** 2026-04-29

## Summary
NVIDIA cuQuantum is a GPU-accelerated SDK for quantum computing simulation, providing libraries and tools for state vector, tensor network, analog quantum dynamics, Pauli propagation, and stabilizer circuit simulation. It delivers orders-of-magnitude speedups on key quantum problems and integrates with major quantum frameworks such as Qiskit, Cirq, PennyLane, and Qibo. It scales from single GPU to supercomputer-scale multi-node deployments.
In the current [[NVIDIA-Quantum]] solution map, cuQuantum is the low-level simulation library family that complements [[CUDA-Q]] programming and [[CUDA-QX]] QEC/solver libraries.

## Detail

### Purpose
Quantum computers are not yet large enough to solve practical problems without classical simulation for validation, research, and algorithm development. Quantum circuit simulation on CPU is exponentially expensive — simulating even 40+ qubit circuits takes days. cuQuantum runs these simulations on GPU clusters, enabling researchers to test quantum algorithms, validate hardware, and explore error correction without a physical quantum computer.

### Key Features
- **[[cuStateVec]]**: State vector simulation with optimized memory management and gate kernels.
- **[[cuTensorNet]]**: Tensor network simulation with contraction order optimization, slicing, MPS workflows, decompositions, and distributed execution.
- **[[cuDensityMat]]**: Analog quantum dynamics solvers for states, operators/superoperators, master equations, time propagation, gradients, and eigenspectrum workflows.
- **[[cuPauliProp]]**: Pauli propagation primitives for Pauli-basis simulation, traces, truncation, deduplication, and backward differentiation.
- **[[cuStabilizer]]**: Stabilizer simulation for Pauli-frame noisy Clifford circuits, detector error model sampling, and GF(2) building blocks.
- **[[cuQuantum-Appliance]]**: NGC container workflow that packages the cuQuantum libraries with optimized Qiskit/Cirq frontends.
- Orders-of-magnitude speedups on random quantum circuits, Shor's algorithm, VQE
- Single-GPU to multi-node cluster scaling via high-level Python APIs
- Zero-code-change acceleration for Qiskit, Cirq, PennyLane, Qibo, QuEST, and others
- C++ APIs for single-GPU/multi-GPU
- CUDA-Q: full quantum framework powered by cuQuantum
- Compatible with H200, Blackwell B200, GB200 NVL72 systems

### Use Cases
- Quantum algorithm development and validation
- Quantum hardware noise modeling and calibration
- Quantum error correction research
- Variational quantum algorithms (VQE, QAOA)
- Quantum chemistry simulations (molecular energy levels)
- Quantum machine learning research
- Quantum communication protocol simulation

### Hardware Requirements
- NVIDIA GPU (H100, H200, B200, GB200 NVL72 recommended for large-scale)
- Multi-GPU and multi-node cluster support
- CUDA 11.x or 12.x

### Language Bindings
- Python (primary high-level API)
- C++ (low-level single/multi-GPU API)

## Connections
- [[NVIDIA-Quantum]] - cuQuantum is part of the current NVIDIA Quantum solution map.
- [[CUDA-Q]] - CUDA-Q uses cuQuantum as a GPU simulation backend.
- [[CUDA-QX]] - CUDA-QX application libraries sit above CUDA-Q while cuQuantum provides simulation acceleration.
- [[cuStateVec]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], and [[cuStabilizer]] - current cuQuantum component libraries.
- [[cuQuantum-Appliance]] - containerized multi-GPU/multi-node workflow for Qiskit and Cirq frontends.
- [[cuTENSOR]] — cuTensorNet builds on cuTENSOR for GPU-accelerated tensor network contractions
- [[cuBLAS]] — cuQuantum uses cuBLAS for dense matrix operations in gate simulation
- [[NVIDIA-Warp]] — both target scientific simulation; Warp for classical physics, cuQuantum for quantum simulation
- [[NCCL]] — multi-node cuQuantum simulations use NCCL for distributed communication

## Resources
- [Official Page](https://developer.nvidia.com/cuquantum-sdk)
- [cuQuantum Documentation](https://docs.nvidia.com/cuda/cuquantum/)
- [cuQuantum GitHub](https://github.com/NVIDIA/cuQuantum)
