# CUDA-Q

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Quantum Computing, Hybrid Quantum-Classical, Simulation, CUDA-X
**Related:** [[NVIDIA-Quantum]], [[NVIDIA-NVQLink]], [[CUDA-QX]], [[CUDA-Q-Realtime]], [[cuQuantum]], [[cuStateVec]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], [[cuStabilizer]], [[cuQuantum-Appliance]], [[NVIDIA-DGX-Quantum]], [[NVIDIA-Quantum-Cloud]], [[NVCC]], [[PyTorch]], [[cuBLAS]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/cuda-q, https://nvidia.github.io/cuda-quantum/latest/index.html, https://www.nvidia.com/en-us/solutions/quantum-computing/
**Last Updated:** 2026-04-29

## Summary
CUDA-Q (formerly CUDA Quantum) is NVIDIA's open-source platform for hybrid quantum-classical computing, providing a unified programming model that allows quantum circuits and classical GPU code to be written together in C++ or Python. It enables simulation of quantum algorithms on NVIDIA GPUs (using cuQuantum as the simulation backend) and supports execution on real quantum hardware through a hardware-agnostic backend system. CUDA-Q is designed for the era of accelerated quantum supercomputing where quantum processing units (QPUs) work alongside classical CPU/GPU compute, [[NVIDIA-NVQLink]] realtime integration, and [[CUDA-QX]] libraries.

## Detail

### Purpose
CUDA-Q solves the fragmented landscape of quantum programming by providing a single programming model that works for both GPU-based quantum simulation and real QPU execution. It enables researchers and developers to develop, test, and optimize quantum algorithms on NVIDIA GPUs before deploying to real quantum hardware, while also enabling genuine hybrid algorithms where quantum and classical computations interleave.

### Key Features
- Unified C++ and Python programming model for hybrid quantum-classical algorithms
- `cudaq::kernel` / `@cudaq.kernel` decorator for quantum kernel definition
- Variational quantum eigensolver (VQE) and QAOA primitives
- Quantum circuit simulation via [[cuQuantum]] backends, including [[cuStateVec]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], and [[cuStabilizer]] component libraries.
- Multi-QPU simulation: distribute quantum circuit shots across multiple GPUs
- Hardware backends: IBM Quantum, IonQ, Quantinuum, OQC, and others via standard interface
- Noise modeling for realistic quantum simulation
- `cudaq.observe()` for expectation value computation
- `cudaq.sample()` for measurement-based sampling
- MLIR-based compiler (NVQIR) for quantum circuit optimization
- Kernel-level automatic differentiation for quantum machine learning (parameter-shift rule)
- Integration with classical ML frameworks for hybrid QML workflows
- CUDA-QX libraries for QEC and quantum-classical solver workflows
- CUDA-Q Realtime for NVQLink-style low-latency GPU-to-quantum-controller feedback

### Use Cases
- Variational quantum algorithms (VQE for quantum chemistry, QAOA for optimization)
- Quantum machine learning (QML) research
- Quantum error correction simulation
- Drug discovery and materials science quantum simulation
- Quantum finance (portfolio optimization, risk analysis)
- Cryptography research (Shor's algorithm simulation)
- Benchmarking and validating quantum hardware

### Hardware Requirements
- GPU simulation: NVIDIA GPU with CUDA Compute Capability 7.0+ (Volta minimum)
- A100/H100 strongly recommended for large qubit count simulation
- Multi-GPU for >30 qubit state-vector simulation
- CUDA 11.8 or higher
- Real QPU execution: requires QPU provider account (cloud-based)

### Language Bindings
- C++ (primary kernel language)
- Python (`cudaq` module, full-featured)
- MLIR intermediate representation

## Connections
- [[cuQuantum]] — CUDA-Q uses cuQuantum as its GPU simulation backend family.
- [[cuStateVec]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], and [[cuStabilizer]] - current cuQuantum simulation components.
- [[cuQuantum-Appliance]] - containerized cuQuantum deployment path adjacent to CUDA-Q simulation workflows.
- [[NVIDIA-Quantum]] - overall NVIDIA accelerated quantum computing platform.
- [[NVIDIA-NVQLink]] - realtime GPU-QPU integration architecture exposed through CUDA-Q realtime APIs.
- [[CUDA-QX]] - CUDA-Q library collection for quantum error correction and solver workflows.
- [[CUDA-Q-Realtime]] - low-latency API layer for NVQLink feedback loops.
- [[NVIDIA-DGX-Quantum]] - DGX Quantum term now points toward the current NVQLink/CUDA-Q direction.
- [[NVIDIA-Quantum-Cloud]] - cloud/API access path for CUDA-Q projects.
- [[NVCC]] — CUDA-Q quantum kernels compiled with NVCC or NVQ++ compiler
- [[PyTorch]] — hybrid QML workflows combine CUDA-Q quantum layers with PyTorch classical layers
- [[cuBLAS]] — state vector quantum simulation involves dense linear algebra operations using cuBLAS

## Resources
- [NVIDIA CUDA-Q Developer Page](https://developer.nvidia.com/cuda-q)
- [Documentation](https://nvidia.github.io/cuda-quantum/)
- [GitHub](https://github.com/NVIDIA/cuda-quantum)
- [NVIDIA NGC Container](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/cuda-quantum)
