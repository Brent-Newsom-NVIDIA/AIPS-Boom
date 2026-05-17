# NVIDIA Hopper Architecture

**Type:** Architecture
**Tags:** NVIDIA, GPU architecture, Hopper, H100, H200, NVLink 4, HBM3, FP8, Transformer Engine, confidential computing, MIG
**Related:** [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-DGX]], [[CUDA-Hopper-Compatibility-Guide]], [[CUDA-Hopper-Tuning-Guide]], [[NVLink]], [[NVIDIA-Grace-CPU]], [[Transformer-Engine]], [[TensorRT]], [[cuDNN]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; updated from https://docs.nvidia.com/cuda/hopper-compatibility-guide/index.html, https://docs.nvidia.com/cuda/hopper-tuning-guide/index.html, https://docs.nvidia.com/deeplearning/transformer-engine/index.html)
**Last Updated:** 2026-04-29

## Summary
NVIDIA Hopper is the GPU architecture launched in 2022 (H100) and extended in 2023 (H200), succeeding Ampere and preceding Blackwell. Named after computer science pioneer Grace Hopper, the architecture introduced the Transformer Engine with FP8 training support, 4th-generation NVLink at 900 GB/s, HBM3 memory, second-generation MIG (Multi-Instance GPU), and NVIDIA Confidential Computing with hardware TEE isolation. Hopper H100 became the dominant GPU for LLM training and inference globally in the 2023–2024 AI wave, with the H200 adding HBM3e for increased memory capacity and bandwidth.

## Detail

### Purpose
The Transformer architecture's rapid scaling (from BERT 340M to GPT-3 175B to GPT-4 class models in three years) exposed Ampere's limitations: A100 lacked dedicated hardware for FP8 operations, had limited NVLink bandwidth for multi-GPU tensor parallelism, and could not isolate compute jobs for security-sensitive enterprise use cases. Hopper addressed all three: the Transformer Engine dynamically manages FP8/FP16 precision for up to 6× A100 throughput on AI compute; NVLink 4.0 provides 900 GB/s per GPU for tight coupling of 8 H100s in a DGX; and hardware TEEs enable confidential AI for regulated industries.

### Key Features

**H100 GPU Specs:**
- **Transistors:** 80 billion (SXM5 variant); 4nm TSMC process (custom 4N)
- **CUDA Cores:** 16,896 FP32 CUDA cores (SXM)
- **Tensor Cores:** 4th-generation supporting FP8, FP16, BF16, TF32, INT8, FP64
- **Memory (H100 SXM):** 80 GB HBM3; 3.35 TB/s memory bandwidth
- **Memory (H200 SXM):** 141 GB HBM3e; 4.8 TB/s memory bandwidth
- **NVLink:** 4th-generation; 900 GB/s bidirectional per GPU; 18× NVLink ports
- **PCIe:** H100 PCIe variant with 80 GB HBM2e and PCIe Gen5 x16 interface
- **TDP:** 700W (H100 SXM5); 700W (H200 SXM)

**Key Architectural Features:**
- **Transformer Engine:** First NVIDIA GPU feature designed specifically for transformers; dynamically switches between FP8 and FP16/BF16 per tensor operation using scaling metadata; current software support lives in [[Transformer-Engine]].
- **FP8 Precision:** Hardware FP8 (E4M3 and E5M2 formats) in 4th-gen Tensor Cores; ~2× throughput of FP16 for training and inference
- **GH200 Grace Hopper Superchip:** H100/H200 GPU + Grace CPU connected via NVLink-C2C at 900 GB/s; 96 GB HBM3e GPU + 480 GB LPDDR5X CPU; enables unified memory model for large models exceeding GPU VRAM
- **Second-Gen MIG (Multi-Instance GPU):** Hardware partitioning of H100 into up to 7 isolated GPU instances, each with dedicated HBM, L2 cache, and SM slice; supports Confidential Computing isolation per MIG instance
- **Confidential Computing:** Hardware TEE (Trusted Execution Environment) isolating GPU memory from hypervisor and other VMs; enables attestation of GPU workloads for regulated industries
- **NVSwitch 3.0:** Third-generation NVSwitch in DGX H100; enables all-to-all 900 GB/s bandwidth for all 8 GPUs in a DGX node; 7.2 TB/s aggregate bisection bandwidth
- **Thread Block Clusters:** New CUDA thread hierarchy level — multiple thread blocks cooperate via distributed shared memory (DSMEM), enabling fine-grained producer-consumer pipelines

### Use Cases
- LLM training: H100 became the standard training GPU for GPT-4, Llama 2/3, Mistral, and other frontier models
- LLM inference serving: H200's 141 GB HBM3e enables serving larger models (70B+ in FP16) on fewer GPUs
- Scientific computing: FP64 CUDA cores at 34 TFLOPS for molecular dynamics, climate modeling, HPC
- Confidential AI inference: regulated industries (finance, healthcare) using H100 Confidential Computing for data privacy
- Large-batch training with Tensor Parallelism: 8× H100 NVLink fabric supports 4-way and 8-way tensor parallel LLM training
- Database acceleration: Grace Hopper GH200 enables GPU-accelerated in-memory database with terabyte-scale unified memory

### Hardware Requirements / Compatibility
- **H100 SXM:** Requires NVIDIA SXM5 baseboard; sold in DGX H100 and HGX H100 8-GPU systems
- **H100 PCIe:** Standard PCIe Gen5 server slot; single GPU at 350W; lower NVLink bandwidth
- **H200 SXM:** Drop-in replacement for H100 SXM in DGX H100 systems (same power/thermal envelope)
- **CUDA:** sm_90 compute capability; CUDA 12.0+ recommended; CUDA 11.8 minimum
- **OS:** Linux (Ubuntu 20.04/22.04, RHEL 8/9); Windows 11 (H100 PCIe)
- **Driver:** NVIDIA driver R525+ for H100; R535+ for H200 and GH200

### Language Bindings / APIs
- Full backward compatibility with all Ampere (sm_80) CUDA code
- **New APIs:** `cudaClusterDim` for thread block clusters; FP8 GEMM in cuBLAS; [[Transformer-Engine]] Python/C++ API
- **[[Transformer-Engine]]:** current docs support PyTorch and JAX integrations for FP8 and related low-precision recipes.
- **MIG Management:** `nvidia-smi mig` CLI; NVML API for programmatic MIG configuration
- **Confidential Computing:** NVIDIA CC Manager; attestation via NVIDIA OCSP service

## Connections
- [[NVIDIA-Blackwell-Architecture]] — Hopper is the predecessor; B200 succeeds H100 as NVIDIA's flagship data center GPU
- [[NVIDIA-DGX]] — DGX H100 and DGX H200 are the flagship Hopper-generation DGX systems
- [[CUDA-Hopper-Compatibility-Guide]] — CUDA application binary compatibility guidance for Hopper.
- [[CUDA-Hopper-Tuning-Guide]] — Hopper-specific CUDA performance tuning guidance.
- [[NVLink]] — 4th-generation NVLink (900 GB/s) is a defining Hopper feature; NVSwitch 3.0 enables DGX H100 all-to-all bandwidth
- [[NVIDIA-Grace-CPU]] — Grace CPU pairs with H100/H200 in GH200 superchip via NVLink-C2C
- [[Transformer-Engine]] — software library that exposes FP8 transformer acceleration on Hopper-class GPUs.
- [[TensorRT]] — TensorRT 9.x+ exploits H100 FP8 Tensor Cores and Transformer Engine for LLM inference
- [[cuDNN]] — cuDNN 8.7+ implements Transformer Engine operations for H100 hardware

## Resources
- [Hopper Architecture Overview](https://www.nvidia.com/en-us/data-center/technologies/hopper-architecture/)
- [H100 Datasheet](https://resources.nvidia.com/en-us-tensor-core/nvidia-tensor-core-gpu-datasheet)
- [H200 GPU Product Page](https://www.nvidia.com/en-us/data-center/h200/)
- [GH200 Grace Hopper Superchip](https://www.nvidia.com/en-us/data-center/grace-hopper-superchip/)
- [Hopper Architecture Whitepaper](https://resources.nvidia.com/en-us-hopper-architecture)
- [Transformer Engine Documentation](https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/index.html)
