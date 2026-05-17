# NVIDIA Blackwell Architecture

**Type:** Architecture
**Tags:** NVIDIA, GPU architecture, Blackwell, B100, B200, GB200, NVLink 5, HBM3e, FP4, Tensor Core, AI superchip
**Related:** [[NVIDIA-Hopper-Architecture]], [[NVIDIA-Vera-Rubin]], [[NVIDIA-DGX]], [[NVIDIA-DGX-Spark]], [[NVIDIA-DGX-Station]], [[NVIDIA-DGX-B300]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-STX]], [[NVIDIA-RTX-PRO-Server]], [[NVIDIA-Accelerated-Quantum-Center]], [[CUDA-Blackwell-Compatibility-Guide]], [[CUDA-Blackwell-Tuning-Guide]], [[CUDA-Tile]], [[CUDA-Tile-IR]], [[cuTile]], [[NVLink]], [[NVIDIA-Grace-CPU]], [[Transformer-Engine]], [[TensorRT]], [[CUDA-Graphs]], [[CUDA-Compatibility]], [[NVIDIA-MIG]], [[NVIDIA-Attestation]], [[NVIDIA-Jetson-Thor]], [[NVIDIA-DRIVE-AGX-Thor]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; updated from https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/ecosystem-architecture.html, https://www.nvidia.com/en-us/data-center/ai-data-platform/, https://www.nvidia.com/en-us/data-center/ai-storage/stx/, https://www.nvidia.com/en-us/data-center/gb300-nvl72/, https://www.nvidia.com/en-us/data-center/products/rtx-pro-server/, https://docs.nvidia.com/cuda/blackwell-compatibility-guide/index.html, https://docs.nvidia.com/cuda/blackwell-tuning-guide/index.html, https://developer.nvidia.com/cuda/tile, https://docs.nvidia.com/cuda/tile-ir/latest/sections/stability.html, https://docs.nvidia.com/deeplearning/transformer-engine/index.html)
**Last Updated:** 2026-04-29

## Summary
NVIDIA Blackwell is the GPU architecture introduced in 2024, succeeding Hopper, and represents NVIDIA's most powerful computing platform to date. Named after statistician David Blackwell, the architecture introduces 5th-generation NVLink, 2nd-generation Transformer Engine with FP4 precision, a new Decompression Engine, a Reliability, Availability, and Serviceability (RAS) Engine, and the GB200 "superchip" combining two B200 GPUs with a Grace CPU via NVLink-C2C. Blackwell delivers up to 5× AI inference throughput versus Hopper H100, targeting the next generation of trillion-parameter LLM training and serving.

## Detail

### Purpose
As LLMs grow beyond 100 billion parameters and inference demands increase, Hopper-class GPUs face memory capacity and bandwidth bottlenecks. Blackwell addresses this with 192 GB HBM3e per GPU (vs 80 GB on H100), FP4 Tensor Core precision (doubling compute density vs FP8), NVLink 5 with 1.8 TB/s bandwidth (vs 900 GB/s on Hopper), and new hardware engines specifically designed for LLM inference acceleration. The GB200 NVL72 (72 B200 GPUs in one rack) effectively creates a 13.8 TB GPU memory pool connected at 130+ TB/s, enabling inference of 1-trillion-parameter models at 30× better energy efficiency than CPU-based alternatives.

### Key Features

**B200 GPU Specs:**
- **Transistors:** 208 billion transistors (2× reticle-limit die, connected via NVLink-C2C)
- **CUDA Cores:** 10,752 FP32 CUDA cores per B200
- **Tensor Cores:** 5th-generation Tensor Cores supporting FP4, FP6, FP8, FP16, BF16, TF32, FP64, INT8
- **Memory:** 192 GB HBM3e; 8 TB/s memory bandwidth
- **NVLink:** 5th-generation NVLink; 1.8 TB/s bidirectional bandwidth per GPU
- **TDP:** ~1000W per B200 GPU; requires liquid cooling in dense deployments
- **Process Node:** TSMC 4NP (custom 4nm node)

**New Architectural Features:**
- **FP4 Tensor Cores:** First NVIDIA architecture with hardware FP4 support; enables 2× the throughput of FP8 for LLM inference with acceptable accuracy via quantization-aware training
- **2nd-Generation Transformer Engine:** Dynamically manages FP8/FP4 precision per layer with micro-tensor scaling; current [[Transformer-Engine]] docs expose MXFP8 and NVFP4 software recipes for Blackwell-class devices.
- **Decompression Engine:** Hardware-accelerated database query decompression for accelerated analytics (LZ4, snappy, deflate); enables GPU-accelerated database workloads without CPU preprocessing
- **RAS Engine:** Dedicated Reliability, Availability, and Serviceability engine for production-grade error detection and correction; enables predictive maintenance and live job migration
- **5th-Generation NVSwitch:** New NVSwitch generation enabling all-to-all bandwidth in GB200 NVL72 at 57.6 TB/s aggregate switching bandwidth
- **Confidential Computing:** Hardware memory encryption and attestation extending Hopper's TEE capabilities

**GB200 "Superchip" and System Configurations:**
- **GB200:** 2× B200 GPUs + 1× Grace CPU on a single module connected via NVLink-C2C at 900 GB/s; 384 GB GPU memory + 480 GB LPDDR5X CPU memory with unified addressing
- **GB200 NVL72:** 36 GB200 modules (72 B200 GPUs + 36 Grace CPUs) in one liquid-cooled rack; 13.8 TB total GPU memory; designed as a single-rack AI supercomputer
- **B100:** Data center GPU for cloud providers; 192 GB HBM3e, NVLink 5; PCIe variant also available

### Use Cases
- Pre-training and serving frontier LLMs (Llama 4, GPT-5 class, 1T+ parameter models)
- Inference serving for large models: GB200 NVL72 delivers 30× lower cost-per-token vs prior generation
- Scientific simulation: climate modeling, molecular dynamics (Anton-class), quantum chemistry
- Accelerated database analytics using Decompression Engine for real-time SQL on GPU
- Autonomous vehicle training: processing PB-scale sensor data for next-generation DRIVE models
- Generative AI at hyperscale: image generation, video generation, multimodal model inference
- Enterprise AI factories, AI data platforms, and AI-native storage designs where Blackwell-class acceleration feeds agentic AI, retrieval, and long-context inference workflows

### Hardware Requirements / Compatibility
- **Cooling:** Liquid cooling required for B200 at full TDP; DLC (Direct Liquid Cooling) from server vendors
- **Power:** ~1 kW per B200; GB200 NVL72 rack draws ~120 kW
- **PCIe:** B100/B200 PCIe Gen5 variant for standard server slots
- **SXM:** B200 SXM for maximum NVLink bandwidth in DGX systems and OAM-based designs
- **CUDA:** CUDA 12.4+ required for Blackwell compute capability (sm_100)
- **OS:** Linux (Ubuntu 22.04/24.04, RHEL 9); Windows via CUDA 12.4+

### Language Bindings / APIs
- Blackwell is fully backward-compatible with all CUDA code targeting sm_80 (Ampere) and sm_90 (Hopper)
- **New APIs:** FP4 GEMM APIs in cuBLAS; micro-tensor scaling APIs in [[Transformer-Engine]]; Decompression Engine APIs
- **TensorRT:** Auto-exploits FP4 and FP6 precision modes on Blackwell via updated calibration
- **PyTorch:** Blackwell support in PyTorch 2.3+; FP4/NVFP4 training support via [[Transformer-Engine]]

## Connections
- [[NVIDIA-Hopper-Architecture]] — Blackwell succeeds Hopper; B200 replaces H100 as NVIDIA's flagship data center GPU
- [[NVIDIA-Vera-Rubin]] — Vera Rubin is the next-generation platform after Blackwell.
- [[NVIDIA-DGX]] — DGX B200 and GB200 NVL72 are the Blackwell-based DGX systems
- [[NVIDIA-DGX-Spark]] — personal GB10 Grace Blackwell AI computer.
- [[NVIDIA-DGX-Station]] — deskside GB300 Grace Blackwell Ultra system.
- [[NVIDIA-DGX-B300]] — Blackwell Ultra DGX system generation.
- [[NVIDIA-GB300-NVL72]] — Blackwell Ultra rack-scale NVL72 system.
- [[NVIDIA-DGX-SuperPOD]] — Blackwell-based DGX clusters are part of the current AI factory scale-out story
- [[NVIDIA-Enterprise-AI-Factory]] — current enterprise AI factory guidance uses Blackwell systems as accelerated compute options.
- [[NVIDIA-AI-Data-Platform]] — AI Data Platform references Blackwell GPUs for accelerating data processing and retrieval pipelines.
- [[NVIDIA-STX]] — STX connects future AI-native storage/data platform designs to NVIDIA accelerated compute.
- [[NVIDIA-RTX-PRO-Server]] — RTX PRO Server brings Blackwell GPUs into enterprise visualization, simulation, and inference servers.
- [[NVIDIA-Accelerated-Quantum-Center]] - GB200 NVL72-class Blackwell systems are part of NVAQC accelerated quantum research context.
- [[CUDA-Blackwell-Compatibility-Guide]] — CUDA application binary compatibility guidance for Blackwell.
- [[CUDA-Blackwell-Tuning-Guide]] — CUDA kernel and multi-GPU tuning guidance for Blackwell.
- [[CUDA-Tile]], [[CUDA-Tile-IR]], and [[cuTile]] — current NVIDIA tile-programming surfaces include Blackwell targets for Tensor Core-oriented kernels.
- [[NVLink]] — NVLink 5 is a defining Blackwell feature; NVSwitch 4 enables GB200 NVL72 rack-scale connectivity
- [[NVIDIA-Grace-CPU]] — Grace CPU pairs with B200 in GB200 superchip via NVLink-C2C
- [[Transformer-Engine]] — current software layer for FP8, MXFP8, and NVFP4 transformer recipes on Hopper/Blackwell-era GPUs.
- [[TensorRT]] — TensorRT exploits Blackwell FP4/FP6 precision and new Tensor Core capabilities for maximum throughput
- [[CUDA-Graphs]] — CUDA Graphs optimizations align with Blackwell's pipelining capabilities for LLM inference
- [[CUDA-Compatibility]] — Blackwell CUDA compatibility and tuning guidance are part of current CUDA documentation
- [[NVIDIA-Attestation]] — confidential computing and platform integrity are part of modern NVIDIA data center deployments
- [[NVIDIA-Jetson-Thor]] - brings Blackwell-generation GPU capabilities into Jetson physical AI systems.
- [[NVIDIA-DRIVE-AGX-Thor]] - brings Blackwell-class compute into NVIDIA's current automotive development platform.

## Resources
- [Blackwell Architecture](https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/)
- [B200 GPU Datasheet](https://www.nvidia.com/content/dam/en-zz/Solutions/gtcs24/nvidia-b200-datasheet.pdf)
- [GB200 NVL72 Overview](https://www.nvidia.com/en-us/data-center/gb200-nvl72/)
- [Blackwell Whitepaper](https://resources.nvidia.com/en-us-blackwell-architecture)
- [NVIDIA GTC 2024 Blackwell Announcement](https://www.nvidia.com/en-us/events/gtc/)
