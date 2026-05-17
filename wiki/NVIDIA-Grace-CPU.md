# NVIDIA Grace CPU

**Type:** Architecture
**Tags:** NVIDIA, CPU, ARM, Grace, NVLink-C2C, HPC, server, Grace Hopper, Grace Blackwell, Neoverse
**Related:** [[NVIDIA-Hopper-Architecture]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Vera-CPU]], [[NVIDIA-Vera-Rubin]], [[NVIDIA-Data-Center-CPUs]], [[NVIDIA-DGX-Spark]], [[NVIDIA-DGX-Station]], [[NVLink]], [[NVIDIA-DGX]], [[NVIDIA-Base-Command]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; updated from https://www.nvidia.com/en-us/data-center/technologies/rubin/)
**Last Updated:** 2026-04-29

## Summary
NVIDIA Grace is NVIDIA's first proprietary data center CPU, based on the ARM Neoverse V2 architecture, introduced in 2023. Designed specifically to complement NVIDIA GPUs in HPC, AI, and data analytics workloads, Grace CPUs are deployed in two configurations: standalone Grace servers (Grace CPU Superchip — two Grace dies connected by NVLink-C2C) and the Grace Hopper (GH200) and Grace Blackwell (GB200) superchips, where a Grace CPU is connected to an H100/H200 or B200 GPU via NVLink-C2C at 900 GB/s with coherent, unified memory addressing. Grace enables CPU-side preprocessing, orchestration, and cache management at GPU-scale bandwidth.

## Detail

### Purpose
Traditional server CPUs (Intel Xeon, AMD EPYC) connected to GPUs via PCIe Gen4/5 have a bandwidth bottleneck (64–128 GB/s) that limits workflows where CPU and GPU must closely cooperate — large-model inference, HPC preprocessing, database/AI hybrid workloads. NVLink-C2C provides 900 GB/s coherent CPU-GPU interconnect within the superchip, enabling unified virtual memory addressing across CPU DRAM and GPU HBM. This eliminates explicit data transfers for many workloads, enabling programming models where the entire superchip (CPU DRAM + GPU HBM) appears as one contiguous memory space.

### Key Features

**Grace CPU Architecture:**
- **Core Architecture:** ARM Neoverse V2; 72 cores per Grace die; 2× Grace dies in Grace CPU Superchip (144 cores total via NVLink-C2C at 1 TB/s)
- **Memory:** LPDDR5X; 480 GB per Grace die in superchip configurations; ~546 GB/s memory bandwidth per die
- **Cache:** 256 MB L3 cache (shared across 72 cores)
- **Process Node:** TSMC 4nm
- **Power Efficiency:** ~500 GB/s/W memory bandwidth efficiency — 2× the memory bandwidth-per-watt of x86 server CPUs

**NVLink-C2C (Chip-to-Chip):**
- **Bandwidth:** 900 GB/s bidirectional between CPU and GPU in GH200/GB200 superchip
- **Coherency:** Hardware cache-coherent; CPU and GPU share a single virtual address space; no explicit cudaMemcpy needed for data accessible to both
- **NUMA-Aware:** GPU sees CPU memory as a NUMA node with high bandwidth; CPU sees GPU HBM as a NUMA node

**Deployment Configurations:**
- **Grace CPU Superchip:** 2× Grace CPUs for high-core-count HPC; 144 ARM cores; 480 GB LPDDR5X; targets Linpack, molecular dynamics, computational fluid dynamics
- **GH200 Grace Hopper Superchip:** 1× Grace CPU + 1× H100 or H200 GPU; 96 GB HBM3e GPU + 480 GB LPDDR5X CPU; total coherent memory pool of ~576 GB; primary AI+HPC platform
- **GB200 Grace Blackwell Superchip:** 1× Grace CPU + 2× B200 GPUs; 384 GB HBM3e GPU + 480 GB LPDDR5X; used in GB200 NVL72 rack
- **Data center CPU docs:** [[NVIDIA-Data-Center-CPUs]] tracks NVIDIA's public documentation hub for Grace CPU, Grace Hopper, and Grace Blackwell software guidance.

**Superchip Advantages for AI:**
- Eliminates PCIe GPU memory capacity constraint — 576 GB unified pool for GH200 enables serving 405B-parameter Llama models on a single module
- In-place data processing: ETL pipelines, tokenization, and embedding computation run on Grace CPU and outputs flow directly to H100 GPU HBM without PCIe transfers
- Reduced power: LPDDR5X is more energy-efficient than DDR5/DDR4 for memory-bandwidth-bound HPC workloads

### Use Cases
- Large-scale LLM inference: GH200 cluster enables serving 405B-parameter models with model sharding across CPU+GPU unified memory
- HPC simulations requiring high CPU core count AND GPU acceleration (climate modeling, molecular dynamics, genomics)
- Accelerated database and analytics: GPU SQL + CPU data management on unified memory without transfer overhead
- AI-supercomputer nodes: NVIDIA Eos (internal; 576× GH200 nodes), Alps (Swiss National Supercomputer), Jupiter (Jülich, Germany)
- Mixed CPU+GPU workloads in bioinformatics: Clara Parabricks running on Grace Hopper for genomics pipeline acceleration

### Hardware Requirements / Compatibility
- **Form Factor:** GH200 and GB200 use custom SXM5-based carrier/module; sold in DGX GH200 and DGX B200/NVL72 systems
- **Grace CPU Superchip:** Standalone ARM server; available from Supermicro, Wiwynn, and other NVIDIA partners
- **OS:** Ubuntu 22.04/24.04 aarch64; RHEL 9 aarch64; CentOS Stream 9 aarch64
- **CUDA:** CUDA 12.2+ for Grace Hopper; full aarch64 support (same CUDA toolchain as x86)

### Language Bindings / APIs
- **CUDA:** Full CUDA programming on Grace Hopper; `cudaMallocManaged` leverages NVLink-C2C coherency automatically
- **HIP/OpenCL:** Not applicable (NVIDIA-only ecosystem)
- **Python:** PyTorch (aarch64 wheels), CuPy, JAX all run natively on GH200
- **MPI:** OpenMPI and MVAPICH2 with UCX support for Grace Hopper HPC clusters
- **ARM NEON/SVE2:** Native SIMD support for CPU-side computation (vector math, string processing)

## Connections
- [[NVIDIA-Hopper-Architecture]] — Grace pairs with H100/H200 in the GH200 superchip; NVLink-C2C bridges the two
- [[NVIDIA-Blackwell-Architecture]] — Grace pairs with B200 GPUs in GB200 superchip and GB200 NVL72 rack
- [[NVIDIA-Vera-CPU]] — Vera is NVIDIA's next custom Arm CPU direction after Grace.
- [[NVIDIA-Vera-Rubin]] — next-generation platform that pairs Vera CPU with Rubin GPUs.
- [[NVIDIA-Data-Center-CPUs]] — central docs hub for Grace CPU, Grace Hopper, and Grace Blackwell deployment guidance
- [[NVIDIA-DGX-Spark]] - GB10 Grace Blackwell desktop system.
- [[NVIDIA-DGX-Station]] - GB300 Grace Blackwell Ultra Desktop Superchip pairs Grace CPU and Blackwell Ultra GPU.
- [[NVLink]] — NVLink-C2C is the CPU-to-GPU coherent interconnect; separate from GPU-to-GPU NVLink 5
- [[NVIDIA-DGX]] — DGX GH200 and GB200 NVL72 systems are built around Grace CPU superchips
- [[NVIDIA-Base-Command]] — Base Command manages GH200/GB200 clusters; Grace Hopper nodes appear as standard BCP compute nodes

## Resources
- [NVIDIA Grace CPU](https://www.nvidia.com/en-us/data-center/grace-cpu/)
- [GH200 Grace Hopper Superchip](https://www.nvidia.com/en-us/data-center/grace-hopper-superchip/)
- [Grace CPU Architecture Whitepaper](https://resources.nvidia.com/en-us-grace-cpu)
- [CUDA on ARM64 (aarch64)](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#arm64-sbsa)
