# NVIDIA Quantum InfiniBand

**Type:** Technology
**Tags:** NVIDIA, InfiniBand, Networking, HPC, AI Networking, Quantum-2, Quantum-X800, NDR, XDR, HDR, Collective Offload
**Related:** [[NVIDIA-Quantum-X800-InfiniBand]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-ConnectX-9]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Spectrum-6-SPX]], [[NVIDIA-Silicon-Photonics]], [[NVIDIA-UFM]], [[NVIDIA-HPC-X]], [[NVIDIA-DOCA]], [[NCCL]], [[NVSHMEM]], [[NVIDIA-DGX]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]], [[NVIDIA-Quantum]], [[NVIDIA-Accelerated-Quantum-Center]]
**Sources:** NVIDIA official documentation, https://www.nvidia.com/en-us/networking/products/infiniband/quantum-x800/, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/index.html, https://www.nvidia.com/en-us/networking/products/ethernet-adapters/connectx-9-supernic/, https://www.nvidia.com/en-us/networking/silicon-photonics/
**Last Updated:** 2026-05-09

## Summary
NVIDIA Quantum InfiniBand is NVIDIA's line of high-performance InfiniBand switch silicon and switch systems designed for AI and HPC cluster interconnects. The Quantum-2 generation supports NDR (Next Data Rate) 400Gb/s per port InfiniBand with SHARP (Scalable Hierarchical Aggregation and Reduction Protocol) in-network computing for lossless all-reduce collective operations without host CPU involvement. NVIDIA InfiniBand is the dominant interconnect fabric in AI supercomputers, used in DGX SuperPODs and top HPC clusters worldwide.
This is a networking product family, not the [[NVIDIA-Quantum]] quantum-computing platform. The name overlap is important for search and disambiguation.
For 800 Gb/s XDR designs, use [[NVIDIA-Quantum-X800-InfiniBand]].

## Detail

### Purpose
At hyperscale AI training, the interconnect between GPUs becomes the performance bottleneck — tens of thousands of GPUs performing all-reduce gradient synchronization require microsecond latency and terabit-per-second bandwidth. NVIDIA Quantum InfiniBand provides the lowest-latency, highest-bandwidth, and most feature-rich interconnect fabric available for this purpose, with SHARP offloading collective operations into the switch to reduce host CPU load and improve effective all-reduce bandwidth.

### Key Features
- Quantum-2 NDR: 400Gb/s per port (up to 64 ports per switch, total 25.6Tb/s switch bandwidth)
- SHARP (Scalable Hierarchical Aggregation and Reduction Protocol): in-network all-reduce and all-gather offload
- SHARP v3: supports FP32 and BF16 SHARP operations for LLM training
- RoCE support: InfiniBand switch can also support RoCEv2 for Ethernet-connected endpoints
- Sub-600ns port-to-port latency
- Adaptive routing for congestion avoidance in fat-tree topologies
- Co-design with ConnectX-7/8 NICs for end-to-end acceleration
- Future AI factory networking connects Quantum/InfiniBand concepts to [[NVIDIA-ConnectX-9]] and optical networking directions such as [[NVIDIA-Silicon-Photonics]]
- [[NVIDIA-Quantum-X800-InfiniBand]] is the 800 Gb/s generation used by current DGX B300 Quantum-X800 SuperPOD designs.
- UFM (Unified Fabric Manager) integration for fabric management
- Used in NVIDIA DGX SuperPOD, Selene, Eos AI supercomputers

### Use Cases
- Large-scale LLM training (GPT-4, LLaMA, Nemotron scale)
- HPC simulation: molecular dynamics, CFD, weather modeling
- Distributed inference with tensor parallelism across nodes
- AI factory networking backbone
- Scientific computing at national labs and universities

### Hardware Requirements / Compatibility
- Quantum-2 QM9700 Switch: 400Gb/s NDR, 64 ports
- Quantum QM8700 Switch: 200Gb/s HDR, 40 ports (previous gen)
- ConnectX-7 (400Gb/s NDR) or ConnectX-6 (200Gb/s HDR) NICs required
- Compatible with DGX H100, DGX B200, and third-party GPU servers
- UFM management software for fabric topology and health monitoring

### Language Bindings / APIs
- NCCL with InfiniBand SHARP plugin (nccl-ib-sharp) for offloaded collectives
- [[NVIDIA-HPC-X]] with MPI, SHMEM, UCX, UCC, HCOLL, and NCCL-RDMA-SHARP plugin support
- UCX (Unified Communication X) layer
- MPI (OpenMPI, MPICH) over InfiniBand
- OpenSHMEM via NVSHMEM

## Connections
- [[NVIDIA-Quantum-X800-InfiniBand]] — 800 Gb/s InfiniBand generation for current B300/XDR and Vera Rubin SPX fabric discussions.
- [[NVIDIA-ConnectX-InfiniBand]] — ConnectX NICs are the endpoint adapters that connect to Quantum switches
- [[NVIDIA-ConnectX-9]] — next-generation SuperNIC for 1.6 Tb/s-class InfiniBand/Ethernet networking.
- [[NVIDIA-Spectrum-X]] — Spectrum-X is NVIDIA's Ethernet counterpart for AI networking
- [[NVIDIA-Spectrum-6-SPX]] — SPX can be configured with Quantum-X800 InfiniBand in Vera Rubin POD designs.
- [[NVIDIA-Silicon-Photonics]] — optical networking direction for scaling AI factory fabrics.
- [[NVIDIA-UFM]] — UFM manages and monitors the InfiniBand fabric
- [[NVIDIA-HPC-X]] — HPC-X packages MPI/SHMEM/UCX/UCC and SHARP-aware communication libraries for NVIDIA fabrics
- [[NVIDIA-DOCA]] — DOCA/DOCA-OFED supplies the modern host and adapter software substrate for NVIDIA networking
- [[NCCL]] — NCCL uses InfiniBand SHARP for accelerated collective communication
- [[NVIDIA-DGX]] — DGX SuperPOD uses Quantum InfiniBand as the backbone interconnect
- [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], and [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]] - DGX SuperPOD reference architectures using Quantum/NDR/XDR InfiniBand fabrics.
- [[NVIDIA-Quantum]] - separate quantum-computing platform; linked here for disambiguation.
- [[NVIDIA-Accelerated-Quantum-Center]] - NVAQC pairs quantum research with NVIDIA AI/HPC networking and GB200 infrastructure.

## Resources
- [Quantum InfiniBand](https://www.nvidia.com/en-us/networking/quantum2/)
- [Quantum-X800 InfiniBand Platform](https://www.nvidia.com/en-us/networking/products/infiniband/quantum-x800/)
- [NVIDIA Networking](https://www.nvidia.com/en-us/networking/)
- [SHARP In-Network Computing](https://developer.nvidia.com/networking/sharp)
