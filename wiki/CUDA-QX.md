# CUDA-QX

**Type:** Technology
**Tags:** NVIDIA, CUDA-QX, CUDA-Q, quantum computing, QEC, quantum solvers, GPU acceleration
**Related:** [[CUDA-Q]], [[CUDA-Q-Realtime]], [[NVIDIA-NVQLink]], [[NVIDIA-Quantum]], [[Ising-Decoding]], [[cuQuantum]], [[cuStateVec]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], [[cuStabilizer]], [[cuQuantum-Appliance]], [[NVIDIA-Accelerated-Quantum-Center]]
**Sources:** https://nvidia.github.io/cudaqx/, https://nvidia.github.io/cuda-quantum/latest/using/cudaqx/cudaqx.html, https://www.nvidia.com/en-us/solutions/quantum-computing/
**Last Updated:** 2026-04-29

## Summary
CUDA-QX is NVIDIA's collection of CUDA-Q libraries for hybrid quantum-classical application development. It builds on [[CUDA-Q]] and provides C++ libraries and Python packages for quantum error correction research, realtime decoding, and quantum-classical solver workflows.

## Detail

### Purpose
CUDA-Q provides the programming model, while CUDA-QX packages domain libraries that researchers can use directly. It helps quantum researchers avoid rebuilding standard QEC and solver infrastructure and lets them use GPUs for the classical compute inside hybrid quantum workflows.

### Library components
- `cudaq-qec` - quantum error correction library with QEC code abstractions, decoder abstractions, GPU-accelerated decoder implementations, realtime decoding, and numerical experiment APIs.
- `cudaq-solvers` - high-level quantum-classical solver workflows including VQE, ADAPT-VQE, QAOA, and related chemistry/optimization utilities.

### NVIDIA context
NVIDIA's current Quantum page describes CUDA-QX as the optimized library layer on top of CUDA-Q for accelerating research toward useful accelerated quantum supercomputing. It connects directly to [[NVIDIA-NVQLink]] because QEC workflows need realtime GPU decoding and control loops.

## Connections
- [[CUDA-Q]] - CUDA-QX is built on the CUDA-Q programming model.
- [[CUDA-Q-Realtime]] - realtime examples and QEC workflows can use CUDA-Q Realtime.
- [[NVIDIA-NVQLink]] - NVQLink enables realtime QEC hardware loops for CUDA-QX QEC.
- [[Ising-Decoding]] - NVIDIA predecoder models and training workflows target CUDA-Q QEC realtime decoding paths.
- [[cuQuantum]] - simulation libraries complement CUDA-QX application libraries.
- [[cuStateVec]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], and [[cuStabilizer]] - current cuQuantum component libraries adjacent to QEC and solver workflows.
- [[cuQuantum-Appliance]] - containerized cuQuantum workflow for Qiskit and Cirq frontends.
- [[NVIDIA-Quantum]] - CUDA-QX is a first-class solution on the NVIDIA Quantum page.
- [[NVIDIA-Accelerated-Quantum-Center]] - NVAQC uses CUDA-Q to orchestrate quantum-classical systems; CUDA-QX provides higher-level QEC/solver libraries.

## Source Excerpts
- NVIDIA CUDA-QX docs define CUDA-QX as libraries built on CUDA-Q for hybrid quantum-classical application code, quantum error correction, and solver workflows.
- The docs identify `cudaq-qec` and `cudaq-solvers` as the two current CUDA-QX library families.

## Resources
- [CUDA-QX Documentation](https://nvidia.github.io/cudaqx/)
- [CUDA-QX in CUDA-Q Docs](https://nvidia.github.io/cuda-quantum/latest/using/cudaqx/cudaqx.html)
