# NVIDIA ConnectX / InfiniBand

**Type:** Technology
**Tags:** NVIDIA, networking, InfiniBand, RDMA, HPC, data center, high performance networking, ConnectX, Ethernet, DOCA-OFED
**Related:** [[NVIDIA-DOCA]], [[NVIDIA-DOCA-OFED]], [[NVIDIA-MLNX-OFED]], [[NVIDIA-MLNX-EN]], [[NVIDIA-WinOF-2]], [[NVIDIA-Firmware-Tools]], [[NVIDIA-ConnectX-9]], [[GPUDirect-RDMA]], [[NVLink]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-BlueField-4]], [[NVIDIA-Silicon-Photonics]], [[NVIDIA-Network-Operator]], [[NVIDIA-HPC-X]], [[NVIDIA-Rivermax]], [[NCCL]], [[NVSHMEM]], [[NVIDIA-DGX]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; updated from https://developer.nvidia.com/networking, https://developer.nvidia.com/networking/doca, https://docs.nvidia.com/doca/sdk/index.html, https://docs.nvidia.com/doca/sdk/mlnx_ofed-to-doca-ofed-transition-guide/index.html, https://docs.nvidia.com/networking/software/adapter-software/index.html, https://docs.nvidia.com/networking/display/hpcxv226, https://www.nvidia.com/en-us/networking/products/ethernet-adapters/connectx-9-supernic/, https://docs.nvidia.com/networking/display/connectx9supernic/introduction)
**Last Updated:** 2026-04-29

## Summary
NVIDIA ConnectX is a family of high-performance network adapters (HCAs — Host Channel Adapters) that provide InfiniBand and high-speed Ethernet connectivity for data centers, HPC clusters, and AI training infrastructure. ConnectX adapters are the dominant InfiniBand HCAs globally and are the standard networking choice for NVIDIA DGX SuperPOD and AI data center deployments, enabling the low-latency, high-bandwidth inter-node communication that large-scale distributed AI training requires. NVIDIA acquired Mellanox in 2020, making ConnectX, Quantum InfiniBand switches, and Spectrum Ethernet switches part of the NVIDIA networking portfolio.

## Detail

### Purpose
Distributed AI training across multiple servers requires extremely low-latency, high-bandwidth inter-node networking for NCCL AllReduce operations. A 512-GPU LLM training run performing AllReduce on gradient tensors needs to move hundreds of gigabytes per iteration across the cluster network. Standard 10/25/100 GbE Ethernet with TCP/IP has too much latency (10s of µs for TCP overhead) and too little bandwidth per port. ConnectX InfiniBand provides sub-microsecond latency (~1 µs) and 200–400 Gb/s per port, while the RDMA transport layer enables GPUDirect RDMA to bypass CPU and system memory entirely.

### Key Features

**ConnectX Generations and Speeds:**
| Adapter | Interface | Speed | Key Features |
|---|---|---|---|
| ConnectX-5 | InfiniBand EDR / 100GbE | 100 Gb/s | GPUDirect RDMA, RDMA over Converged Ethernet (RoCE) |
| ConnectX-6 | InfiniBand HDR / 200GbE | 200 Gb/s | GPUDirect Async, hardware tag matching |
| ConnectX-6 Dx | Ethernet only | 100/200 GbE | Smart offloads, VXLAN, hardware crypto |
| ConnectX-7 | InfiniBand NDR / 400GbE | 400 Gb/s | PCIe Gen5, hardware packet pacing, NVIDIA DOCA |
| ConnectX-8 | InfiniBand XDR / 800GbE | 800 Gb/s | Blackwell-generation; scheduled 2025 |
| ConnectX-9 | InfiniBand / Ethernet SuperNIC | 1.6 Tb/s or dual 800 Gb/s | PCIe Gen6, CXL-ready, GPUDirect, storage/offload, current SuperNIC docs |

**Key Capabilities:**
- **RDMA (Remote Direct Memory Access):** Kernel-bypass DMA; NIC reads/writes host or GPU memory without CPU involvement; InfiniBand RC (Reliable Connected) QP; RoCE (RDMA over Converged Ethernet) for Ethernet networks
- **GPUDirect RDMA:** ConnectX HCAs directly DMA to/from NVIDIA GPU frame buffer; NCCL uses this for inter-node GPU collectives
- **GPUDirect Async:** ConnectX-6+ feature allowing GPU kernels to directly trigger RDMA operations by writing to doorbell registers; true GPU-driven networking without CPU
- **Quantum InfiniBand Switches:** NVIDIA's InfiniBand switch family; Quantum-2 (400 Gb/s NDR) with 64 ports per switch; fat-tree topologies for DGX SuperPOD; switch-based collectives (InfiniBand Sharp) for hardware-offloaded AllReduce
- **InfiniBand Sharp (Scalable Hierarchical Aggregation Protocol):** In-network computing — AllReduce operations offloaded to the Quantum switch fabric; reduces network traffic for gradient synchronization by ~2× vs endpoint-based AllReduce
- **NVIDIA DOCA SDK:** [[NVIDIA-DOCA]] and DOCA-Host provide the current host-side software stack for ConnectX and BlueField networking features, including [[NVIDIA-DOCA-OFED]]
- **OpenFabrics Alliance (OFA) / MLNX_OFED:** [[NVIDIA-MLNX-OFED]] is the legacy standalone Linux OFED driver stack for InfiniBand; `mlx5` kernel driver; `ibverbs`, `rdmacm` user-space libraries
- **Firmware and OS drivers:** [[NVIDIA-Firmware-Tools]] manages device firmware/configuration, [[NVIDIA-MLNX-EN]] covers legacy Ethernet-only Linux stacks, and [[NVIDIA-WinOF-2]] covers Windows hosts.

### Use Cases
- Multi-node LLM training (hundreds to thousands of GPUs) on DGX SuperPOD with InfiniBand NDR fabric
- HPC MPI workloads (molecular dynamics, climate modeling, financial simulation) using RDMA-based MPI collective operations
- Distributed GPU databases and analytics (Dask-CUDA, cuDF) with UCX over RDMA
- AI inference disaggregation: prefill/decode worker communication via InfiniBand for KV cache transfer (NIXL)
- Storage networking: NVMe-oF (NVMe over Fabrics) over RDMA for GPU-direct storage access
- Container networking: Kubernetes with RDMA device plugin for NCCL over InfiniBand in K8s GPU pods

### Hardware Requirements / Compatibility
- **Host Interface:** PCIe Gen3/4/5 x16 (model-dependent); ConnectX-7 uses PCIe Gen5
- **OS:** Linux (MLNX_OFED driver for full InfiniBand; native `mlx5` kernel driver in Linux 5.x+); Windows Server (limited)
- **Software Stack:** [[NVIDIA-DOCA-OFED]], legacy [[NVIDIA-MLNX-OFED]] or [[NVIDIA-MLNX-EN]] when applicable, OpenMPI or MVAPICH2 with InfiniBand support, [[NVIDIA-HPC-X]], NCCL with `NCCL_IB_DISABLE=0`, [[NVIDIA-Firmware-Tools]], and Kubernetes networking via [[NVIDIA-Network-Operator]]
- **InfiniBand Subnet Manager:** OpenSM or NVIDIA UFM (Unified Fabric Manager) for managing InfiniBand subnets

### Language Bindings / APIs
- **NCCL:** Primary consumer; `NCCL_IB_HCA=mlx5_0:1` env variable selects specific ConnectX port; auto-configured in most cases
- **libibverbs / rdmacm:** Low-level RDMA programming (InfiniBand verbs C API)
- **UCX (Unified Communication X):** High-level RDMA transport library used by OpenMPI, Dask, and NIXL
- **NVIDIA DOCA:** modern SDK, runtime, drivers, tools, and services for programming advanced ConnectX/BlueField features

## Connections
- [[NVIDIA-DOCA]] — DOCA-Host and DOCA-OFED are the current NVIDIA host software stack for ConnectX and BlueField networking.
- [[NVIDIA-DOCA-OFED]] — current Linux host-driver stack for ConnectX InfiniBand, Ethernet, RoCE, and RDMA.
- [[NVIDIA-MLNX-OFED]] — legacy standalone Linux OFED stack for ConnectX VPI deployments.
- [[NVIDIA-MLNX-EN]] — legacy standalone Linux Ethernet/RoCE package for ConnectX EN deployments.
- [[NVIDIA-WinOF-2]] — Windows host-driver package for ConnectX-4 Lx and newer adapters.
- [[NVIDIA-Firmware-Tools]] — firmware, link, port, and low-level diagnostics for ConnectX adapters.
- [[NVIDIA-ConnectX-9]] — generation-specific page for the current 1.6 Tb/s-class SuperNIC.
- [[GPUDirect-RDMA]] — ConnectX HCAs implement GPUDirect RDMA by directly DMAing to/from NVIDIA GPU memory over PCIe
- [[NVLink]] — NVLink handles intra-node GPU communication; ConnectX InfiniBand handles inter-node; both used in DGX SuperPOD
- [[NVIDIA-BlueField-DPU]] — BlueField DPU is a ConnectX adapter with an embedded ARM CPU for network function offloading; shares ASIC with ConnectX-7
- [[NVIDIA-BlueField-4]] — next-generation DPU direction adjacent to ConnectX-9 and AI data platform networking.
- [[NVIDIA-Silicon-Photonics]] — optical networking direction for next-generation AI factory fabrics.
- [[NVIDIA-Network-Operator]] — exposes ConnectX RDMA, SR-IOV, and secondary-network capabilities to Kubernetes workloads.
- [[NVIDIA-HPC-X]] — MPI/SHMEM/UCX/UCC toolkit optimized for ConnectX and NVIDIA fabrics.
- [[NVIDIA-Rivermax]] — streaming SDK that supports ConnectX NICs for kernel-bypass media and data streaming.
- [[NCCL]] — NCCL uses ConnectX InfiniBand (via `libnccl-net-ib`) for inter-node AllReduce in distributed training
- [[NVIDIA-DGX]] — DGX H100 includes 8× ConnectX-7 (400 Gb/s NDR InfiniBand) NICs for multi-node cluster connectivity

## Resources
- [NVIDIA Networking](https://www.nvidia.com/en-us/networking/)
- [ConnectX Adapter Cards](https://www.nvidia.com/en-us/networking/ethernet-adapters/)
- [InfiniBand Technology Overview](https://www.nvidia.com/en-us/networking/infiniband/)
- [NVIDIA DOCA SDK](https://developer.nvidia.com/networking/doca)
- [MLNX_OFED Documentation](https://docs.nvidia.com/networking/display/mlnxofedv23101180lts)
