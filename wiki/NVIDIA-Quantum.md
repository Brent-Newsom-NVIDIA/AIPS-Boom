# NVIDIA Quantum

**Type:** Platform
**Tags:** NVIDIA, quantum computing, accelerated quantum supercomputing, QPU, CUDA-Q, NVQLink, CUDA-QX
**Related:** [[CUDA-Q]], [[CUDA-QX]], [[CUDA-Q-Realtime]], [[NVIDIA-NVQLink]], [[cuQuantum]], [[cuStateVec]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], [[cuStabilizer]], [[cuQuantum-Appliance]], [[cuPQC]], [[NVIDIA-Ising]], [[Ising-Calibration-1-35B-A3B]], [[Ising-Decoding]], [[NVIDIA-DGX-Quantum]], [[NVIDIA-Quantum-Cloud]], [[NVIDIA-Accelerated-Quantum-Center]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-GB200-NVL72]], [[NVIDIA-Quantum-InfiniBand]]
**Sources:** https://www.nvidia.com/en-us/solutions/quantum-computing/, https://docs.nvidia.com/cuda/cupqc/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Quantum is NVIDIA's accelerated quantum computing platform area. It frames useful quantum computing as a hybrid system problem: quantum processing units need to be integrated with AI supercomputers, GPU acceleration, realtime control, simulation, and programming tools. The current NVIDIA Quantum page centers [[NVIDIA-NVQLink]], [[CUDA-Q]], [[CUDA-QX]], [[cuQuantum]], [[cuPQC]], [[NVIDIA-Quantum-Cloud]], and the [[NVIDIA-Accelerated-Quantum-Center]] as the main current solution surfaces.

## Detail

### Purpose
NVIDIA Quantum exists because practical quantum computing is not only a QPU problem. Useful quantum systems require classical supercomputing for simulation, calibration, quantum error correction, hybrid algorithms, and realtime feedback loops. NVIDIA's position is that QPUs should be coupled to GPU-accelerated AI/HPC systems through CUDA-Q software, NVQLink realtime integration, and quantum-specific libraries.

### Current solution map
- [[NVIDIA-NVQLink]] - open platform architecture for tightly integrating quantum processors with GPU-accelerated systems.
- [[CUDA-Q]] - programming model and toolchain for hybrid CPU, GPU, and QPU workflows.
- [[CUDA-QX]] - CUDA-Q library collection for QEC and quantum-classical solvers.
- [[CUDA-Q-Realtime]] - realtime CUDA-Q networking/runtime API layer used with NVQLink.
- [[cuQuantum]] - low-level GPU-accelerated quantum circuit simulation libraries and appliance, including [[cuStateVec]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], [[cuStabilizer]], and [[cuQuantum-Appliance]].
- [[cuPQC]] - CUDA cryptography SDK for post-quantum public-key algorithms and GPU-side hash/Merkle operations.
- [[NVIDIA-Ising]] - open AI model family for quantum processor calibration and QEC pre-decoding.
- [[Ising-Calibration-1-35B-A3B]] - NVIDIA quantum calibration VLM for analyzing quantum calibration experiment plots.
- [[Ising-Decoding]] - NVIDIA Ising predecoder models and training framework for quantum error correction.
- [[NVIDIA-Quantum-Cloud]] - API/cloud access path for running CUDA-Q projects on NVIDIA GPU systems.
- [[NVIDIA-Accelerated-Quantum-Center]] - NVAQC facility for integrating partner QPUs with GB200 NVL72-class AI supercomputing.

### Naming note
Do not confuse this quantum-computing platform page with [[NVIDIA-Quantum-InfiniBand]], which is NVIDIA's InfiniBand switch/system line for AI and HPC networking.

## Connections
- [[CUDA-Q]] - primary programming platform for quantum-classical GPU workflows.
- [[CUDA-QX]] - current CUDA-Q library collection for QEC and solver workflows.
- [[CUDA-Q-Realtime]] - realtime API path introduced for NVQLink workflows.
- [[NVIDIA-NVQLink]] - current architecture for quantum-to-GPU realtime integration.
- [[cuQuantum]] - simulation library family within the NVIDIA Quantum solution area.
- [[cuStateVec]], [[cuTensorNet]], [[cuDensityMat]], [[cuPauliProp]], and [[cuStabilizer]] - current cuQuantum component libraries.
- [[cuQuantum-Appliance]] - containerized cuQuantum simulation workflow for Qiskit and Cirq.
- [[cuPQC]] - quantum-safe cryptography SDK surfaced from the same NVIDIA Quantum page, with current SDK docs covering cuPQC-PK and cuPQC-Hash.
- [[NVIDIA-Ising]] - family-level page for NVIDIA's open quantum AI models.
- [[Ising-Calibration-1-35B-A3B]] - NVIDIA Ising-family model endpoint for quantum calibration plot understanding.
- [[Ising-Decoding]] - NVIDIA Ising-family model/training framework for QEC pre-decoding.
- [[NVIDIA-DGX-Quantum]] - earlier/reference DGX Quantum identity now redirected toward NVQLink in current en-US navigation.
- [[NVIDIA-Quantum-Cloud]] - cloud/API access path for CUDA-Q projects.
- [[NVIDIA-Accelerated-Quantum-Center]] - research facility built around accelerated quantum supercomputing.
- [[NVIDIA-GB200-NVL72]] - GB200 NVL72 systems are used in NVAQC-style quantum acceleration contexts.

## Source Excerpts
- NVIDIA's Quantum page frames accelerated quantum supercomputing as integrating QPUs with state-of-the-art AI supercomputers and presents NVQLink, CUDA-QX, CUDA-Q, cuQuantum, cuPQC, and Quantum Cloud as solution components.

## Resources
- [NVIDIA Quantum](https://www.nvidia.com/en-us/solutions/quantum-computing/)
