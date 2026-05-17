# NVIDIA NVQLink

**Type:** Technology
**Tags:** NVIDIA, NVQLink, quantum computing, QPU, GPU-QPU, realtime, CUDA-Q, QEC, RDMA
**Related:** [[NVIDIA-Quantum]], [[CUDA-Q]], [[CUDA-QX]], [[CUDA-Q-Realtime]], [[Ising-Decoding]], [[NVIDIA-DGX-Quantum]], [[NVIDIA-Accelerated-Quantum-Center]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-BlueField-DPU]], [[DOCA-GPUNetIO]], [[NVIDIA-Holoscan]]
**Sources:** https://www.nvidia.com/en-us/solutions/quantum-computing/nvqlink/, https://developer.nvidia.com/blog/nvidia-nvqlink-architecture-integrates-accelerated-computing-with-quantum-processors/, https://nvidianews.nvidia.com/news/nvidia-nvqlink-quantum-gpu-computing
**Last Updated:** 2026-04-29

## Summary
NVIDIA NVQLink is NVIDIA's open platform architecture for tightly integrating quantum processors with GPU-accelerated AI/HPC systems. It provides the realtime classical compute path that QPU operators need for calibration, quantum error correction, and hybrid quantum applications. Current NVIDIA Quantum pages position NVQLink as the successor direction for DGX Quantum-style GPU-QPU coupling and as the current bridge between CUDA-Q software and quantum hardware.

## Detail

### Purpose
Large-scale quantum systems need fast classical processing during operation, especially for quantum error correction and calibration. NVQLink addresses this by coupling quantum system controllers to GPU-accelerated realtime hosts so syndromes, control signals, and corrections can move through a low-latency data path.

### Platform architecture
- Uses realtime APIs in [[CUDA-Q]] and [[CUDA-Q-Realtime]] for GPU-QPU feedback loops.
- Targets low-latency, high-throughput links between quantum controllers and GPU systems.
- NVIDIA's current product page highlights up to 400 Gb/s GPU-QPU throughput and sub-4-microsecond FPGA-to-GPU-to-FPGA latency in the reference architecture.
- Defines a realtime host, a quantum system controller, and a realtime interconnect.
- Uses NVIDIA networking components such as ConnectX or BlueField in the realtime host path.
- Current DOCA GPUNetIO docs list NVQLink as a GPU RoCE transceiver / Holoscan sensor bridge operator use case.

### Workloads
- QPU calibration and control.
- Quantum error correction decoding.
- Logical QPU orchestration.
- Hybrid quantum-classical applications that need CPU/GPU/QPU resources in one workflow.

### NVIDIA context
NVQLink should be treated as the current canonical page for GPU-QPU coupling. The older `nvidia.com/en-us/data-center/dgx-quantum/` URL now redirects to the NVQLink page, so [[NVIDIA-DGX-Quantum]] remains useful as a queryable historical/reference-architecture page but should point readers here for the current architecture.

## Connections
- [[NVIDIA-Quantum]] - NVQLink is a core current NVIDIA Quantum solution.
- [[CUDA-Q]] - NVQLink is exposed through CUDA-Q realtime software paths.
- [[CUDA-Q-Realtime]] - provides the low-latency networking/runtime API layer for NVQLink.
- [[CUDA-QX]] - CUDA-Q QEC uses NVQLink for realtime decoder workflows.
- [[Ising-Decoding]] - QEC predecoder models are an NVIDIA Ising workload for realtime GPU-QPU decoding.
- [[NVIDIA-DGX-Quantum]] - earlier DGX Quantum identity has been superseded/redirected toward NVQLink.
- [[NVIDIA-Accelerated-Quantum-Center]] - NVAQC uses GPU-QPU integration patterns in accelerated quantum research.
- [[NVIDIA-ConnectX-InfiniBand]] and [[NVIDIA-BlueField-DPU]] - NVIDIA networking components fit the realtime host path.
- [[DOCA-GPUNetIO]] - GPU network I/O layer listed by NVIDIA in connection with NVQLink-related operator work.

## Source Excerpts
- NVIDIA's NVQLink page describes an open platform architecture for integrating QPUs with accelerated computing using realtime CUDA-Q APIs, with calibration and QEC as core control workloads.
- NVIDIA's technical blog describes NVQLink as an open architecture coupling supercomputing hosts with quantum system controllers for realtime workloads.

## Resources
- [NVIDIA NVQLink](https://www.nvidia.com/en-us/solutions/quantum-computing/nvqlink/)
- [NVQLink Architecture Technical Blog](https://developer.nvidia.com/blog/nvidia-nvqlink-architecture-integrates-accelerated-computing-with-quantum-processors/)
- [NVQLink Newsroom Announcement](https://nvidianews.nvidia.com/news/nvidia-nvqlink-quantum-gpu-computing)
