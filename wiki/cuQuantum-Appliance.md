# cuQuantum Appliance

**Type:** Platform
**Tags:** NVIDIA, cuQuantum, NGC, container, Qiskit, Cirq, qsim, quantum simulation, multi-GPU
**Related:** [[cuQuantum]], [[cuStateVec]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], [[cuStabilizer]], [[CUDA-Q]], [[NVIDIA-Quantum]], [[NGC]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-GPU-Operator]], [[NCCL]]
**Sources:** https://docs.nvidia.com/cuda/cuquantum/latest/appliance/overview.html, https://docs.nvidia.com/cuda/cuquantum/latest/
**Last Updated:** 2026-04-29

## Summary
The NVIDIA cuQuantum Appliance is a containerized multi-GPU, multi-node quantum circuit simulation solution. It packages the current [[cuQuantum]] libraries, provides optimized frontends for Qiskit Aer through cusvaer and Google Cirq through qsim, and distributes examples and runtime dependencies through an NGC container image.

## Detail

### Purpose
Quantum researchers often want GPU-accelerated simulation without assembling every CUDA, Python, MPI, framework, and quantum-library dependency by hand. cuQuantum Appliance gives them a supported container path for running Qiskit and Cirq workflows on NVIDIA GPUs while using cuQuantum libraries underneath.

### Current scope
- Containerized access to [[cuStateVec]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], and [[cuStabilizer]].
- Distributed state-vector backend for IBM Qiskit Aer through cusvaer.
- Optimized multi-GPU Google Cirq frontend through qsim.
- NGC container image flow with Docker, NVIDIA GPU drivers, and [[NVIDIA-Container-Toolkit]] as host prerequisites.
- Example workloads such as GHZ, hidden-shift, and Simon examples inside the container.
- x86_64 and arm64 image variants documented through the `${march}` tag pattern.

### NVIDIA context
cuQuantum Appliance is the deployment/distribution surface for cuQuantum simulation workflows. It belongs near [[NGC]], [[NVIDIA-Container-Toolkit]], and [[NVIDIA-GPU-Operator]] for operational context, while the component libraries remain separate pages because they have distinct APIs and workloads.

## Connections
- [[cuQuantum]] - parent SDK included inside the appliance.
- [[cuStateVec]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], and [[cuStabilizer]] - component libraries packaged by the appliance.
- [[CUDA-Q]] - higher-level quantum programming platform adjacent to cuQuantum simulation.
- [[NVIDIA-Quantum]] - platform context for accelerated quantum computing.
- [[NGC]] - NVIDIA container distribution surface for GPU software.
- [[NVIDIA-Container-Toolkit]] - host prerequisite for GPU-enabled Docker containers.
- [[NVIDIA-GPU-Operator]] - Kubernetes operator context for GPU software stacks.
- [[NCCL]] - multi-GPU/multi-node communication layer relevant to distributed simulation.

## Resources
- [cuQuantum Appliance Overview](https://docs.nvidia.com/cuda/cuquantum/latest/appliance/overview.html)
- [cuQuantum Documentation](https://docs.nvidia.com/cuda/cuquantum/latest/)
