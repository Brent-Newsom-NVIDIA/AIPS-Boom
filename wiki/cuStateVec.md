# cuStateVec

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Quantum Computing, Simulation, State Vector, cuQuantum
**Related:** [[cuQuantum]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], [[cuStabilizer]], [[cuQuantum-Appliance]], [[CUDA-Q]], [[CUDA-QX]], [[NVIDIA-Quantum]], [[cuBLAS]], [[NCCL]]
**Sources:** https://docs.nvidia.com/cuda/cuquantum/latest/custatevec/index.html, https://docs.nvidia.com/cuda/cuquantum/latest/
**Last Updated:** 2026-04-29

## Summary
cuStateVec is the state-vector simulation component of [[cuQuantum]]. It provides GPU-accelerated primitives for simulating quantum circuits via explicit representation of the 2^N-dimensional complex amplitude array, with optimized memory management, gate application kernels, measurement, sampling, and expectation-value evaluation. It integrates into major quantum frameworks such as Qiskit, Cirq, and PennyLane to provide GPU acceleration, and it is packaged with the other current cuQuantum libraries inside [[cuQuantum-Appliance]].

## Detail

### Purpose
State-vector simulation is the canonical approach to classical simulation of quantum circuits: maintain the full 2^N complex amplitude array and apply gates as unitary transformations. Memory grows exponentially with qubit count — a single H100 80GB GPU can hold the full state for roughly 33 qubits in double precision; multi-GPU configurations push that to ~40 qubits. cuStateVec optimizes the inner loop of this simulation for NVIDIA GPUs, delivering the largest wins over CPU for dense and moderately-deep circuits.

### Key Features
- Optimized single-GPU and multi-GPU state-vector manipulation
- Gate application kernels for one-, two-, and multi-qubit gates (dense, diagonal, permutation, Pauli)
- Measurement and sampling (Z-basis, expectation values, observable evaluation)
- Controlled-gate abstractions and batched gate application
- Accessor API for scatter/gather of state amplitudes
- Distributed state-vector support across multiple GPUs via [[NCCL]]
- C++ and Python APIs

### Use Cases
- Executing NISQ-era quantum circuits on classical hardware for research and validation
- Quantum hardware emulation and noise modeling
- Variational quantum algorithms (VQE, QAOA) on up to ~40 qubits
- Teaching and algorithm prototyping
- Qiskit-Aer GPU backend, Cirq and PennyLane state-vector backends

### Hardware Requirements
- NVIDIA GPU (H100, H200, B200, GB200 NVL72 recommended for large-scale simulations)
- Multi-GPU and multi-node clusters for >33 qubits
- CUDA 11.x or 12.x

### Language Bindings
- Python (via the cuQuantum Python package)
- C++ (low-level single/multi-GPU API)

## Connections
- [[cuQuantum]] — cuStateVec is the state-vector component of the cuQuantum SDK
- [[cuTensorNet]] - sibling tensor-network simulation component for contractions, slicing, MPS workflows, and distributed tensor-network execution.
- [[cuDensityMat]], [[cuPauliProp]], and [[cuStabilizer]] - sibling current cuQuantum libraries for analog dynamics, Pauli propagation, and stabilizer simulation.
- [[cuQuantum-Appliance]] - containerized workflow that includes cuStateVec.
- [[CUDA-Q]] - higher-level quantum programming platform that can use cuQuantum simulation backends.
- [[NVIDIA-Quantum]] - platform context for accelerated quantum computing.
- [[cuBLAS]] — cuStateVec uses cuBLAS for dense matrix operations in gate simulation
- [[NCCL]] — multi-GPU cuStateVec uses NCCL for distributed state-vector operations

## Resources
- [cuStateVec Documentation](https://docs.nvidia.com/cuda/cuquantum/latest/custatevec/index.html)
- [cuQuantum GitHub](https://github.com/NVIDIA/cuQuantum)
