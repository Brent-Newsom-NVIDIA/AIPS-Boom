# GPUDirect RDMA

**Type:** Technology
**Tags:** NVIDIA, RDMA, networking, InfiniBand, GPU, peer-to-peer, MPI, HPC, inter-node, zero-copy
**Related:** [[NVLink]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-ConnectX-9]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-DOCA]], [[NVIDIA-DOCA-OFED]], [[DOCA-GPUNetIO]], [[DOCA-RDMA]], [[NVIDIA-MLNX-OFED]], [[NVIDIA-Network-Operator]], [[NVIDIA-HPC-X]], [[NCCL]], [[NVSHMEM]], [[GPU-Direct-Storage]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; updated from https://www.nvidia.com/en-us/networking/products/ethernet-adapters/connectx-9-supernic/)
**Last Updated:** 2026-04-29

## Summary
GPUDirect RDMA (Remote Direct Memory Access) is an NVIDIA technology that enables network adapters (InfiniBand HCAs or RDMA-capable NICs) to directly read from and write to GPU memory over a network — bypassing the CPU and system DRAM entirely. In distributed GPU computing, this eliminates the double-copy bottleneck (GPU→CPU→NIC for send; NIC→CPU→GPU for receive), enabling inter-node GPU memory transfers at near-theoretical network bandwidth with minimal CPU involvement. GPUDirect RDMA is a foundational technology for large-scale distributed AI training and HPC applications.

## Detail

### Purpose
In traditional GPU cluster programming (without GPUDirect RDMA), sending data from one node's GPU to another's follows a slow path: GPU→cudaMemcpy to CPU pinned memory→NIC DMA→network→remote NIC DMA→cudaMemcpy from CPU→GPU. Each hop adds latency and consumes CPU cycles and memory bandwidth. In large-scale LLM training, inter-node gradient synchronization (NCCL AllReduce) is the primary bottleneck after GPU compute. GPUDirect RDMA collapses this to: GPU memory→NIC DMA→network→remote NIC DMA→GPU memory — halving latency and freeing the CPU for other work.

### Key Features
- **Direct GPU-NIC Memory Access:** The NIC's PCIe master engine can directly DMA data to/from GPU frame buffer memory without CPU staging; uses PCIe peer-to-peer addressing enabled by GPU BAR1 memory window
- **Zero-Copy Design:** Data moves GPU→NIC or NIC→GPU without ever touching CPU DRAM; CPU is not in the data path
- **Sub-Microsecond Latency:** Combined with InfiniBand network, GPU-to-GPU RDMA latency across nodes is 1–2 µs for small messages
- **Bandwidth Efficiency:** Full InfiniBand NDR 400 Gb/s bandwidth utilizable for GPU data without CPU or DRAM bottleneck
- **NCCL Integration:** NCCL 2.x+ automatically uses GPUDirect RDMA when available; no application code changes needed for distributed training
- **MPI Integration:** OpenMPI and MVAPICH2 use CUDA-Aware MPI which internally leverages GPUDirect RDMA for `MPI_Send`/`MPI_Recv` of CUDA buffers
- **GPUDirect Async:** Extension enabling GPU to independently initiate RDMA transfers without CPU involvement; GPU kernel writes to a doorbell register, triggering NIC RDMA directly — true GPU-driven networking
- **NVSHMEM:** NVSHMEM extends GPUDirect RDMA with a PGAS (Partitioned Global Address Space) model — GPU kernels directly call `nvshmem_put`/`nvshmem_get` to address remote GPU memory by virtual address

### Use Cases
- **Large-Scale LLM Training:** 1000+ GPU runs with NCCL AllReduce over InfiniBand NDR/HDR; GPUDirect RDMA is the technology enabling efficient inter-node gradient synchronization
- **HPC MPI Applications:** Molecular dynamics (GROMACS, AMBER), climate modeling (FV3, MPAS) using CUDA-Aware MPI with GPUDirect RDMA for collective operations
- **High-Frequency Inference Disaggregation:** KV cache transfer in prefill/decode disaggregated LLM serving (NIXL uses GPUDirect RDMA for fast token migration)
- **Distributed GPU Database:** Dask-CUDA and cuDF with UCXX for distributed GPU DataFrames across cluster nodes
- **Real-Time HPC:** FPGA-GPU communication for radar signal processing; NIC-GPU for financial analytics

### Hardware Requirements / Compatibility
- **GPU:** NVIDIA Fermi (cc 2.0) and newer with GPUDirect RDMA support; BAR1 memory window must be accessible to PCIe peers
- **NIC/HCA:** NVIDIA ConnectX-4 or newer for InfiniBand; also supported by Mellanox/NVIDIA RoCE (RDMA over Converged Ethernet)
- **PCIe Topology:** NIC and GPU must be on the same PCIe root complex (or connected via PCIe peer-to-peer bridge); some server BIOS settings disable PCIe P2P — must be enabled
- **Linux:** `nvidia-peermem` kernel module (part of NVIDIA driver) enables GPU-to-NIC peer memory mapping
- **CUDA:** CUDA 5.0+ for GPUDirect RDMA; CUDA 11.3+ for GPUDirect Async
- **InfiniBand:** [[NVIDIA-DOCA-OFED]] or legacy [[NVIDIA-MLNX-OFED]] with RDMA support; Kubernetes exposure can be automated through [[NVIDIA-Network-Operator]]

### Language Bindings / APIs
- **NCCL:** Transparent — NCCL uses GPUDirect RDMA automatically; `ncclAllReduce(sendBuf, recvBuf, count, ..., comm, stream)`
- **CUDA-Aware MPI:** `MPI_Send(cuda_ptr, count, ...)` — OpenMPI 1.7+ or MVAPICH2 2.0+ with CUDA support; GPU pointer passed directly
- **NVSHMEM:** `nvshmem_float_put(dest, src, nelems, pe)` — GPU-callable RDMA; symmetric heap on all PEs
- **UCX:** Unified Communication X framework (`ucx_perf`, Python bindings) used by many applications for RDMA transport
- **libibverbs / rdmacm:** Low-level RDMA programming (InfiniBand verbs) with GPU memory registered via `ibv_reg_mr` on CUDA pinned memory

## Connections
- [[NVLink]] — NVLink handles intra-node GPU-to-GPU communication; GPUDirect RDMA handles inter-node (between servers); both used together in large GPU clusters
- [[NVIDIA-ConnectX-InfiniBand]] — ConnectX HCAs are the primary network adapters implementing GPUDirect RDMA in NVIDIA's networking stack
- [[NVIDIA-ConnectX-9]] — current SuperNIC generation that includes GPUDirect and RDMA capabilities in NVIDIA docs.
- [[NVIDIA-BlueField-DPU]] — BlueField DPU offloads RDMA network processing; BlueField-3 supports GPUDirect RDMA with DPU-accelerated NCCL flows
- [[NVIDIA-DOCA]] — DOCA RDMA, DOCA-OFED, and GPUDirect support are part of the current NVIDIA networking software stack.
- [[NVIDIA-DOCA-OFED]] — current Linux host-driver stack for GPU-aware RDMA paths.
- [[DOCA-GPUNetIO]] — DOCA library that makes GPU packet processing and GPU-controlled networking explicit.
- [[DOCA-RDMA]] — DOCA API for building RDMA applications on NVIDIA networking devices.
- [[NVIDIA-MLNX-OFED]] — legacy standalone Linux OFED stack still found in older GPUDirect RDMA setups.
- [[NVIDIA-Network-Operator]] — deploys the Kubernetes networking components required for GPUDirect RDMA workloads.
- [[NVIDIA-HPC-X]] — provides MPI/SHMEM/UCX/UCC communication libraries that use GPU-aware RDMA paths.
- [[NCCL]] — NCCL is the primary user of GPUDirect RDMA for distributed deep learning; provides AllReduce, AllGather over RDMA automatically
- [[NVSHMEM]] — NVSHMEM extends GPUDirect RDMA into a PGAS programming model for GPU-to-GPU remote memory access from within GPU kernels
- [[GPU-Direct-Storage]] — GPUDirect Storage extends the P2P concept to NVMe storage; GPU reads/writes storage without CPU staging

## Resources
- [GPUDirect RDMA Developer Page](https://developer.nvidia.com/gpudirect)
- [GPUDirect RDMA Documentation](https://docs.nvidia.com/cuda/gpudirect-rdma/index.html)
- [NCCL with GPUDirect](https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/usage/p2p.html)
- [NVSHMEM Documentation](https://docs.nvidia.com/nvshmem/api/index.html)
