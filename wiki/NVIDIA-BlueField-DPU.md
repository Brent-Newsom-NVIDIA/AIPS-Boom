# NVIDIA BlueField DPU

**Type:** Technology
**Tags:** NVIDIA, DPU, data processing unit, networking, offload, security, SmartNIC, BlueField, infrastructure
**Related:** [[NVIDIA-DOCA]], [[NVIDIA-DOCA-OFED]], [[DOCA-DPA]], [[DOCA-Flow]], [[DOCA-RDMA]], [[DOCA-GPUNetIO]], [[DOCA-PCC]], [[DOCA-Telemetry-Service]], [[DOCA-App-Shield]], [[DOCA-Device-Emulation]], [[DOCA-SNAP]], [[OVS-DOCA]], [[NVIDIA-Firmware-Tools]], [[NVIDIA-BlueField-4]], [[NVIDIA-DOCA-Platform-Framework]], [[NVIDIA-NCX-Infra-Controller]], [[NVIDIA-STX]], [[NVIDIA-CMX]], [[NVIDIA-Vera-Rubin-POD]], [[NVIDIA-Spectrum-6-SPX]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], [[NVIDIA-NVL72-AI-Factory]], [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-ConnectX-9]], [[GPUDirect-RDMA]], [[NVIDIA-Network-Operator]], [[NVIDIA-Rivermax]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-DCGM]], [[NVIDIA-GPU-Operator]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; updated from https://docs.nvidia.com/doca/sdk/index.html, https://developer.nvidia.com/networking/doca, https://docs.nvidia.com/networking/display/bluefieldbsp4140/troubleshooting-and-how-tos, https://docs.nvidia.com/networking/display/kubernetes2610/index.html, https://www.nvidia.com/en-us/data-center/ai-storage/stx/, https://www.nvidia.com/en-us/data-center/ai-storage/cmx/, https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/, https://www.nvidia.com/en-us/networking/products/data-processing-unit/)
**Last Updated:** 2026-05-09

## Summary
NVIDIA BlueField is a Data Processing Unit (DPU) — a programmable network adapter that combines a high-speed ConnectX NIC with an embedded ARM multicore CPU, memory, and hardware accelerators for networking, security, and storage tasks. BlueField offloads infrastructure services (firewall, load balancer, storage compression/encryption, RDMA routing, telemetry) from server CPUs to the DPU, freeing server CPUs entirely for application workloads while providing stronger security isolation. In AI data centers, BlueField-3 offloads NCCL networking, storage virtualization, and tenant isolation, enabling GPU servers to run more AI compute per server by reclaiming infrastructure CPU cycles.

## Detail

### Purpose
Modern data center servers spend 20–30% of server CPU cycles on infrastructure functions: network packet processing (firewall, routing, QoS), storage virtualization (encryption, compression, deduplication), and security monitoring. This "infrastructure tax" reduces the CPUs available for the revenue-generating application (AI training, database queries, web serving). BlueField DPU moves these functions off the server CPU onto the DPU's embedded ARM cores — which are purpose-built for network packet processing — returning those CPU cycles to applications. For GPU AI servers, the benefit is even greater: every freed CPU cycle can be used for data preprocessing or orchestration that accelerates GPU utilization.

### Key Features

**BlueField Generations:**
| DPU | ConnectX NIC | Embedded CPU | Speed | Key Features |
|---|---|---|---|---|
| BlueField-1 | ConnectX-5 | 16× ARM A72 | 100 Gb/s | Initial DPU; storage/networking offload |
| BlueField-2 | ConnectX-6 Dx | 8× ARM A72 | 200 Gb/s | Full data center offload; OVS-DPDK; RegEx engine |
| BlueField-3 | ConnectX-7 | 16× ARM A78 | 400 Gb/s | AI-optimized DPU; DOCA Telemetry; NCCL offload; PCIe Gen5 |
| BlueField-4 | Next-gen NVIDIA networking | Public STX/CMX material | AI data/storage class | [[NVIDIA-STX]], [[NVIDIA-CMX]], context memory, AI-native storage |

**Core Capabilities:**
- **Networking Offloads:** Open vSwitch through [[OVS-DOCA]], VXLAN/Geneve tunneling, BGP routing, firewall (conntrack, ACL), rate limiting, and hardware packet steering through [[DOCA-Flow]]
- **Storage Offloads:** NVMe-oF target (GPU-Direct Storage integration), RAID, compression (LZ4, zstd hardware engine on BF-3), encryption (AES-256 hardware engine)
- **Security:** Hardware-enforced tenant isolation; cryptographic attestation of DPU and host; secure boot chain independent of server OS; DPU-side host introspection through [[DOCA-App-Shield]]
- **Telemetry Engine (BF-3):** BlueField-3 includes a telemetry accelerator for packet analysis and metrics collection; [[DOCA-Telemetry-Service]] exposes BlueField/host/network metrics to observability stacks
- **SNAP (Software-Defined NVMe/VirtIO):** [[DOCA-SNAP]] emulates NVMe, virtio-blk, and virtio-fs devices to hosts and VMs; enables storage virtualization with a DPU-managed backend
- **Device Emulation:** [[DOCA-Device-Emulation]] provides lower-level APIs for emulating host-facing PCIe devices from BlueField software
- **DOCA SDK:** [[NVIDIA-DOCA]] is the software framework for programming BlueField and SuperNIC infrastructure services; current DOCA docs include SDK, runtime, DOCA-Host, DOCA-OFED, reference applications, tools, services, driver documentation, and libraries/services such as [[DOCA-DPA]], [[DOCA-Flow]], [[DOCA-RDMA]], [[DOCA-GPUNetIO]], [[DOCA-PCC]], [[DOCA-Telemetry-Service]], [[DOCA-App-Shield]], [[DOCA-Device-Emulation]], [[DOCA-SNAP]], and [[OVS-DOCA]]
- **Arm Neoverse N2 Cores (BF-3):** 16× ARM Neoverse N2 @ 2 GHz; 16+ GB LPDDR5 on-DPU memory; runs a full Ubuntu or Wind River Linux OS independently of server host
- **NCCL Offload (BF-3):** BlueField-3 + DOCA-NCCL enables in-network AllReduce and collective offloading for AI training; reduces server CPU burden for communication coordination
- **AI-native storage direction:** current NVIDIA STX and CMX pages position BlueField-4-class DPUs as storage/context processors for [[NVIDIA-STX]], [[NVIDIA-CMX]], and [[NVIDIA-AI-Data-Platform]] designs.
- **Vera Rubin POD direction:** current Vera Rubin POD material places BlueField-4 STX racks and CMX context memory storage beside Rubin compute, LPX inference, and SPX networking.

### Use Cases
- **AI Training Infrastructure:** Offload networking and storage from CPU in DGX nodes; BlueField-3 handles NCCL network communication processing, freeing CPUs for data preprocessing
- **Secure Multi-Tenant Cloud:** Hyperscale clouds use BlueField to implement network isolation between tenants in hardware — firewall, QoS, VPC routing all run on DPU, not server CPU
- **Storage Virtualization (Disaggregated Storage):** BlueField presents NVMe-oF targets to servers; enables software-defined storage with hardware-grade performance
- **Zero-Trust Security:** BlueField's independent OS enables a "guardian" that monitors server behavior from outside the main OS; detects and responds to host compromise
- **5G and Telecom:** BlueField-based SmartNIC for vRAN (virtual Radio Access Network) packet processing and timing
- **NVIDIA SuperPOD:** BlueField-3 in DGX H100 nodes handles storage (NVMe-oF to VAST/WekaFS) and provides tenant isolation

### Hardware Requirements / Compatibility
- **Host Interface:** PCIe Gen4 x16 (BF-2); PCIe Gen5 x16 (BF-3)
- **OS (DPU):** Ubuntu 22.04 aarch64 on embedded ARM; Wind River Linux (real-time option); DOCA runs on DPU OS
- **OS (Host):** Linux (Ubuntu/RHEL) for full DOCA integration; Windows Server (limited)
- **Power:** 25–75W TDP (model-dependent)
- **Driver:** [[NVIDIA-DOCA-OFED]] / DOCA-Host on current Linux hosts; legacy [[NVIDIA-MLNX-OFED]] for older supported deployments; DOCA runtime on the DPU OS

### Language Bindings / APIs
- **NVIDIA DOCA SDK:** [[NVIDIA-DOCA]] provides APIs, libraries, tools, services, drivers, and examples for packet processing, RDMA, DPA, storage, crypto, telemetry, management, and reference applications
- **Host driver stack:** [[NVIDIA-DOCA-OFED]] is the current Linux host-driver profile for NVIDIA networking; BlueField-3 platforms must use DOCA-Host.
- **DPDK:** BlueField supports DPDK for high-performance user-space networking
- **Kubernetes:** [[NVIDIA-Network-Operator]] manages NVIDIA networking components in Kubernetes clusters, including DOCA-OFED driver containers and RDMA/GPUDirect networking resources
- **CLI:** [[NVIDIA-Firmware-Tools]] commands such as `mlxconfig` and `mst` for device management; `bfb-install` for DPU firmware and OS flashing

## Connections
- [[NVIDIA-DOCA]] — DOCA is the primary SDK, runtime, driver, and services framework for BlueField infrastructure offload.
- [[NVIDIA-DOCA-OFED]] — current DOCA-Host Linux driver profile for BlueField/ConnectX host systems.
- [[DOCA-DPA]] — DPA programs communication-centric offloads on BlueField hardware.
- [[DOCA-Flow]] — Flow builds hardware-accelerated packet-processing pipes on BlueField.
- [[DOCA-RDMA]] — RDMA API for memory access over InfiniBand/RoCE on BlueField/ConnectX.
- [[DOCA-GPUNetIO]] — GPU-centric packet processing that can use BlueField DMA and GPUDirect paths.
- [[DOCA-PCC]] — programmable congestion-control API accelerated by BlueField-3.
- [[DOCA-Telemetry-Service]] — DOCA service for collecting and exporting BlueField, host, network, RDMA, and DCGM-adjacent metrics.
- [[DOCA-App-Shield]] — DPU-side host and VM introspection API for runtime security and forensics.
- [[DOCA-Device-Emulation]] — PCIe device emulation framework for host-facing BlueField services.
- [[DOCA-SNAP]] — BlueField storage virtualization services for NVMe, virtio-blk, and virtio-fs.
- [[OVS-DOCA]] — DOCA-backed Open vSwitch datapath offload for virtualized networking.
- [[NVIDIA-Firmware-Tools]] — MFT provides low-level firmware and device configuration tools such as `mst` and `mlxconfig`.
- [[NVIDIA-BlueField-4]] — generation-specific page for current STX/CMX and AI data platform DPU direction.
- [[NVIDIA-DOCA-Platform-Framework]] — DPF provisions and orchestrates BlueField DPUs and DPU services in cloud environments.
- [[NVIDIA-NCX-Infra-Controller]] — NCX Infra Controller uses DPU-enforced isolation for secure bare-metal lifecycle management.
- [[NVIDIA-STX]] — STX uses BlueField-4-class acceleration for AI-native storage and data platform designs.
- [[NVIDIA-CMX]] — CMX uses BlueField-4 for context memory storage, NVMe services, KV-cache integrity, and encryption.
- [[NVIDIA-Vera-Rubin-POD]] — BlueField-4 STX racks host context memory storage in the POD-scale architecture.
- [[NVIDIA-Spectrum-6-SPX]] — networking rack carrying traffic between compute, inference, and BlueField-4 STX storage racks.
- [[NVIDIA-AI-Data-Platform]] — AI Data Platform uses BlueField to accelerate data access across enterprise storage paths.
- [[NVIDIA-Enterprise-Reference-Architectures]] — current Enterprise RAs use BlueField DPUs and SuperNIC roles for AI factory fabrics.
- [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], and [[NVIDIA-NVL72-AI-Factory]] — hardware RAs that include BlueField in compute, converged, or infrastructure roles.
- [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]], [[NVIDIA-DGX-SuperPOD-B200-RA]], and [[NVIDIA-DGX-SuperPOD-GB200-RA]] — DGX RAs where BlueField supports storage, management, or front-end networking roles.
- [[NVIDIA-ConnectX-InfiniBand]] — BlueField is a ConnectX HCA with an embedded ARM processor; shares ASIC design; BF-3 uses ConnectX-7 NIC silicon
- [[NVIDIA-ConnectX-9]] — adjacent next-generation SuperNIC direction for 1.6 Tb/s-class AI networking.
- [[GPUDirect-RDMA]] — BlueField supports GPUDirect RDMA; BF-3 NCCL offload enables GPU communication coordinated by DPU
- [[NVIDIA-Network-Operator]] — Kubernetes operator that deploys DOCA-OFED and RDMA networking resources for BlueField/ConnectX environments.
- [[NVIDIA-Rivermax]] — Rivermax supports BlueField DPUs for timing-sensitive streaming and DOCA Rivermax workflows.
- [[NVIDIA-AI-Enterprise]] — BlueField DPUs are part of NVIDIA's AI infrastructure stack; supported under AI Enterprise for security and networking offload in AI data centers
- [[NVIDIA-DCGM]] — BlueField's telemetry engine and DOCA can feed network metrics to DCGM-based monitoring for holistic AI cluster observability
- [[NVIDIA-GPU-Operator]] — GPU Operator works with Network Operator in Kubernetes clusters that need both GPUs and accelerated networking

## Resources
- [NVIDIA BlueField DPU](https://www.nvidia.com/en-us/networking/products/data-processing-unit/)
- [NVIDIA DOCA SDK](https://developer.nvidia.com/networking/doca)
- [BlueField-3 Datasheet](https://www.nvidia.com/content/dam/en-zz/Solutions/networking/infiniband-switching/bluefield-3-dpu-datasheet.pdf)
- [DOCA Documentation](https://docs.nvidia.com/doca/sdk/index.html)
- [NVIDIA Network Operator](https://docs.nvidia.com/networking/display/kubernetes2610/index.html)
