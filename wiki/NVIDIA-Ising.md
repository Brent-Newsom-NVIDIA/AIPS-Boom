# NVIDIA Ising

**Type:** Model family
**Tags:** NVIDIA, Ising, quantum computing, open models, quantum calibration, quantum error correction, QEC, CUDA-Q, NVQLink, AI for quantum
**Related:** [[NVIDIA-Quantum]], [[Ising-Calibration-1-35B-A3B]], [[Ising-Decoding]], [[CUDA-Q]], [[CUDA-QX]], [[CUDA-Q-Realtime]], [[NVIDIA-NVQLink]], [[cuQuantum]], [[NVIDIA-NIM]], [[NVIDIA-Accelerated-Quantum-Center]], [[NVIDIA-DGX-Quantum]]
**Sources:** https://www.nvidia.com/en-us/solutions/quantum-computing/ising/, https://developer.nvidia.com/blog/nvidia-ising-introduces-ai-powered-workflows-to-build-fault-tolerant-quantum-systems/, https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Launches-Ising-the-Worlds-First-Open-AI-Models-to-Accelerate-the-Path-to-Useful-Quantum-Computers/default.aspx
**Last Updated:** 2026-04-29

## Summary
NVIDIA Ising is NVIDIA's open AI model family for accelerating quantum processor development. NVIDIA positions it as a purpose-built AI layer for quantum calibration and quantum error correction, complementing the [[CUDA-Q]] software platform and [[NVIDIA-NVQLink]] GPU-QPU integration.

## Detail
The NVIDIA Ising family launches with two main model domains: [[Ising-Calibration-1-35B-A3B]] for quantum processor calibration and [[Ising-Decoding]] for quantum error correction pre-decoding. The family targets the two practical bottlenecks NVIDIA highlights for useful quantum computers: keeping QPUs calibrated and decoding errors fast enough for realtime operation.

NVIDIA describes Ising as open models, training frameworks, data, benchmarks, and recipes that QPU builders can customize for their own hardware and noise characteristics. The public resources span the NVIDIA Ising page, NVIDIA technical blog, Hugging Face model cards, GitHub training/cookbook repositories, and Build NVIDIA for the calibration endpoint.

The family sits inside the broader [[NVIDIA-Quantum]] stack. [[CUDA-QX]] and CUDA-Q QEC provide quantum error correction software paths, [[CUDA-Q-Realtime]] and [[NVIDIA-NVQLink]] provide realtime GPU-to-controller integration, and [[cuQuantum]] supports simulation/data-generation workflows used by quantum model training.

## Model Domains
- [[Ising-Calibration-1-35B-A3B]] - 35B-parameter vision-language model for interpreting quantum calibration plots and supporting agentic QPU calibration workflows.
- [[Ising-Decoding]] - Fast and Accurate 3D CNN predecoder variants plus training framework for surface-code quantum error correction.

## Use Cases
- Automating QPU calibration analysis from experimental plots.
- Reducing manual calibration loops from human-in-the-loop processes toward agentic workflows.
- Improving logical error rate and latency for quantum error correction decoding.
- Training or fine-tuning decoder models for specific hardware noise profiles.
- Integrating AI-assisted quantum workflows with CUDA-Q, CUDA-QX, NVQLink, and NVIDIA AI supercomputing infrastructure.

## Connections
- [[NVIDIA-Quantum]] - overall platform context for NVIDIA accelerated quantum computing.
- [[Ising-Calibration-1-35B-A3B]] - calibration model domain in the Ising family.
- [[Ising-Decoding]] - QEC predecoder model/training domain in the Ising family.
- [[CUDA-Q]], [[CUDA-QX]], and [[CUDA-Q-Realtime]] - software stack for hybrid quantum workflows, QEC, and realtime operation.
- [[NVIDIA-NVQLink]] - GPU-QPU integration path for realtime calibration and QEC loops.
- [[cuQuantum]] - simulation and data-generation layer used around quantum algorithm and QEC workflows.
- [[NVIDIA-NIM]] - Build NVIDIA exposes Ising Calibration as a hosted endpoint/NIM-style path.
- [[NVIDIA-Accelerated-Quantum-Center]] - research/system context for accelerated quantum computing with NVIDIA AI supercomputing.

## Resources
- [NVIDIA Ising](https://www.nvidia.com/en-us/solutions/quantum-computing/ising/)
- [NVIDIA Ising technical blog](https://developer.nvidia.com/blog/nvidia-ising-introduces-ai-powered-workflows-to-build-fault-tolerant-quantum-systems/)
- [NVIDIA Ising newsroom announcement](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Launches-Ising-the-Worlds-First-Open-AI-Models-to-Accelerate-the-Path-to-Useful-Quantum-Computers/default.aspx)
