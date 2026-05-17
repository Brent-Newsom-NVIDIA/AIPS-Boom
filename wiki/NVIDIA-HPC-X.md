# NVIDIA HPC-X

**Type:** Library
**Tags:** NVIDIA, HPC-X, MPI, SHMEM, PGAS, UCX, UCC, HCOLL, SHARP, InfiniBand, Spectrum-X, NCCL
**Related:** [[NVIDIA-HPC-SDK]], [[NVIDIA-HPC-Compilers]], [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-Spectrum-X]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-DOCA]], [[NVIDIA-DOCA-OFED]], [[NVIDIA-MLNX-OFED]], [[NCCL]], [[NVSHMEM]], [[GPUDirect-RDMA]]
**Sources:** https://docs.nvidia.com/networking/display/hpcxv226; https://developer.nvidia.com/networking/hpc-x
**Last Updated:** 2026-04-29

## Summary
NVIDIA HPC-X is NVIDIA's communications toolkit for high-performance MPI, SHMEM, and PGAS applications on NVIDIA networking. The current docs line is HPC-X Rev 2.26, tested as part of Spectrum-X reference architecture 2.1, and includes MPI, OpenSHMEM, UCX, UCC, HCOLL, ClusterKit, NCCL-RDMA-SHARP plugins, multi-GPU support, and Spectrum-X NCCL plugin guidance. It is the main NVIDIA networking software bridge between traditional HPC communication models and GPU-heavy AI/HPC clusters.

## Detail
HPC-X packages and optimizes the communications libraries that many HPC and AI applications rely on. NVIDIA describes it as a comprehensive software package including MPI and SHMEM communications libraries plus acceleration packages that improve performance and scalability.

The toolkit includes HPC-X MPI, an optimized Open MPI implementation; HPC-X OpenSHMEM for one-sided communication; Unified Communication X (UCX) for low-overhead point-to-point communication; Unified Collective Communication (UCC) for collectives; HCOLL for collective acceleration; ClusterKit for cluster health and performance assessment; and NCCL-RDMA-SHARP plugins that integrate NVIDIA collective communication with RDMA and SHARP.

HPC-X is adjacent to, but distinct from, [[NCCL]] and [[NVSHMEM]]. NCCL is the deep-learning collective library, NVSHMEM is a GPU-cluster PGAS programming model, and HPC-X provides the broader MPI/SHMEM/UCX/UCC toolkit used by HPC applications and cluster validation. All three depend on the same NVIDIA fabric strengths: [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-ConnectX-InfiniBand]], [[GPUDirect-RDMA]], SHARP, and increasingly [[NVIDIA-Spectrum-X]] for Ethernet AI networking. On hosts, the relevant NVIDIA driver substrate is now [[NVIDIA-DOCA-OFED]], with [[NVIDIA-MLNX-OFED]] remaining important for legacy LTS deployments.

## Connections
- [[NVIDIA-Quantum-InfiniBand]] - HPC-X is optimized for Quantum InfiniBand networking and SHARP in-network computing.
- [[NVIDIA-HPC-SDK]] - current HPC SDK docs list HPC-X MPI as the SDK's MPI communication library surface.
- [[NVIDIA-HPC-Compilers]] - compilers and MPI wrappers often meet in HPC-X-style HPC build environments.
- [[NVIDIA-Spectrum-X]] - HPC-X 2.26 is tested with Spectrum-X reference architecture 2.1 and includes Spectrum-X NCCL plugin documentation.
- [[NVIDIA-ConnectX-InfiniBand]] - ConnectX adapters provide the RDMA transport hardware used by HPC-X libraries.
- [[NVIDIA-DOCA]] - DOCA and DOCA-OFED provide the host/networking software substrate for newer NVIDIA network deployments.
- [[NVIDIA-DOCA-OFED]] - current Linux host-driver stack for NVIDIA RDMA/RoCE networking.
- [[NVIDIA-MLNX-OFED]] - legacy standalone Linux OFED stack used by older HPC-X deployments and runbooks.
- [[NCCL]] - HPC-X includes NCCL-RDMA-SHARP plugin coverage and complements NCCL collective communication.
- [[NVSHMEM]] - HPC-X includes SHMEM/PGAS communications that sit near NVSHMEM's GPU-focused PGAS model.
- [[GPUDirect-RDMA]] - HPC-X uses GPU-aware RDMA paths for CUDA-enabled communication workloads.

## Source Excerpts
- "HPC-X v2.26 is tested as part of Spectrum-X reference architecture release version 2.1."
- "HPC-X also includes various acceleration packages."
