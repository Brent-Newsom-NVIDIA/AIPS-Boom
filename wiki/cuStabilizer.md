# cuStabilizer

**Type:** Technology
**Tags:** NVIDIA, CUDA, cuQuantum, stabilizer simulation, Pauli frame, quantum error correction, DEM sampling
**Related:** [[cuQuantum]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], [[cuStateVec]], [[cuQuantum-Appliance]], [[CUDA-Q]], [[CUDA-QX]], [[CUDA-Q-Realtime]], [[Ising-Decoding]], [[NVIDIA-Quantum]], [[NVIDIA-NVQLink]]
**Sources:** https://docs.nvidia.com/cuda/cuquantum/latest/custabilizer/index.html, https://docs.nvidia.com/cuda/cuquantum/latest/
**Last Updated:** 2026-04-29

## Summary
cuStabilizer is the [[cuQuantum]] library for high-performance stabilizer quantum simulators. It provides Python and C/C++ APIs for Pauli-frame simulation of noisy Clifford circuits, GPU-accelerated detector error model sampling, GF(2) sparse sampling and matrix multiplication building blocks, and direct access to GPU data structures for advanced integration.

## Detail

### Purpose
Quantum error correction and stabilizer-circuit research often need to simulate large Clifford/noise workloads without full state-vector simulation. cuStabilizer targets that regime with GPU-accelerated Pauli-frame and detector-error-model primitives, making it relevant to QEC experiments, decoding research, and realtime quantum-control workflows.

### Current scope
- Pauli-frame simulation of noisy Clifford quantum circuits.
- Detector Error Model sampling for generating detection events without full circuit simulation.
- GF(2) sparse Bernoulli sampling and sparse/dense matrix multiplication primitives.
- Python API focused on ease of use and C/C++ API focused on performance.
- Circuit description utilities that can integrate with existing simulators.
- Linux support on x86_64 and ARM64 CPUs with Ampere, Ada, Hopper, and Blackwell GPUs.

### NVIDIA context
cuStabilizer is especially adjacent to [[CUDA-QX]], [[CUDA-Q-Realtime]], [[Ising-Decoding]], and [[NVIDIA-NVQLink]] because QEC workflows need fast stabilizer simulation, detector-event generation, decoding, and low-latency feedback loops. It remains a cuQuantum component rather than a replacement for CUDA-Q or CUDA-QX.

## Connections
- [[cuQuantum]] - parent SDK and documentation family.
- [[cuPauliProp]] - adjacent Pauli-oriented cuQuantum component.
- [[cuStateVec]], [[cuTensorNet]], and [[cuDensityMat]] - sibling cuQuantum simulation libraries.
- [[cuQuantum-Appliance]] - containerized workflow that includes cuStabilizer.
- [[CUDA-QX]] - QEC library layer above CUDA-Q where stabilizer simulation can be relevant.
- [[CUDA-Q-Realtime]] and [[NVIDIA-NVQLink]] - realtime QEC/control context.
- [[Ising-Decoding]] - NVIDIA Ising predecoder workflows for QEC decoding.
- [[NVIDIA-Quantum]] - solution area for accelerated quantum computing.

## Resources
- [cuStabilizer Documentation](https://docs.nvidia.com/cuda/cuquantum/latest/custabilizer/index.html)
- [cuQuantum Documentation](https://docs.nvidia.com/cuda/cuquantum/latest/)
