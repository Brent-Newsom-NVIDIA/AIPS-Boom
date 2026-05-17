# NVIDIA DOCA

**Type:** Framework
**Tags:** NVIDIA, DOCA, BlueField, ConnectX, SuperNIC, DPU, networking, storage, security, SDK, DOCA-Host, DOCA-OFED
**Related:** [[NVIDIA-DOCA-OFED]], [[DOCA-GPUNetIO]], [[DOCA-Flow]], [[DOCA-RDMA]], [[DOCA-DPA]], [[DOCA-PCC]], [[DOCA-Telemetry-Service]], [[DOCA-App-Shield]], [[DOCA-Device-Emulation]], [[DOCA-SNAP]], [[OVS-DOCA]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-BlueField-4]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-ConnectX-9]], [[NVIDIA-Network-Operator]], [[NVIDIA-DOCA-Platform-Framework]], [[NVIDIA-Spectrum-X]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-STX]], [[NVIDIA-CMX]], [[NVIDIA-AI-Data-Platform]], [[GPUDirect-RDMA]], [[NVIDIA-HPC-X]], [[NVIDIA-Rivermax]], [[NVIDIA-Firmware-Tools]], [[NVIDIA-MLNX-OFED]], [[NVIDIA-MLNX-EN]]
**Sources:** https://docs.nvidia.com/doca/sdk/index.html; https://developer.nvidia.com/networking/doca; https://developer.nvidia.com/networking/doca/getting-started; https://docs.nvidia.com/doca/sdk/mlnx_ofed-to-doca-ofed-transition-guide/index.html; https://docs.nvidia.com/doca/sdk/general-support/index.html; https://docs.nvidia.com/doca/sdk/doca-telemetry-service-guide/index.html; https://docs.nvidia.com/doca/sdk/doca-app-shield/index.html; https://docs.nvidia.com/doca/sdk/doca-device-emulation/index.html; https://docs.nvidia.com/doca/sdk/doca-snap-services/index.html; https://docs.nvidia.com/doca/sdk/openvswitch-acceleration---ovs-in-doca/index.html; https://www.nvidia.com/en-us/data-center/ai-storage/cmx/
**Last Updated:** 2026-04-29

## Summary
NVIDIA DOCA is the software framework for developing, deploying, and operating accelerated infrastructure services on NVIDIA BlueField DPUs, BlueField SuperNICs, and ConnectX adapters. It plays a CUDA-like role for the networking and infrastructure side of NVIDIA systems: a consistent SDK, runtime, drivers, libraries, tools, services, and documentation surface for offloading data center networking, storage, security, telemetry, and management workloads. In AI factories, DOCA is the connective layer between [[NVIDIA-BlueField-DPU]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-Spectrum-X]], [[GPUDirect-RDMA]], [[NVIDIA-DOCA-OFED]], and Kubernetes-facing tools such as [[NVIDIA-Network-Operator]].

## Detail
The current public DOCA docs surface is DOCA Documentation v3.3.0, last updated March 2026. NVIDIA notes that DOCA 3.3.0 is tested as part of Spectrum-X reference architecture 2.1, making it a current networking software baseline for modern Ethernet AI clusters.

DOCA consists of both an SDK and runtime environment. The BlueField software bundle includes the bootloader, OS kernel, NIC firmware, NVIDIA drivers, sample filesystem, and toolchain for the BlueField side of the platform. DOCA-Host is the host-side package for BlueField and ConnectX devices; current docs position [[NVIDIA-DOCA-OFED]] as the host driver stack used by newer NVIDIA networking deployments.

The current transition guide makes DOCA-Host the packaging surface for Linux host drivers. [[NVIDIA-DOCA-OFED]] is the `doca-ofed` profile for users who want MLNX_OFED-equivalent drivers and tools, while legacy [[NVIDIA-MLNX-OFED]] and [[NVIDIA-MLNX-EN]] remain relevant as standalone LTS lines and search terms.

The SDK spans several infrastructure domains: RDMA and UCX/UCC communications, GPUDirect integration, ASAP2 switching, emulated VirtIO, P4, DPA access to NIC engines, inline crypto, App Shield runtime security, storage emulation and virtualization, compression, management, deployment, and provisioning. Current first-class programming library pages now include [[DOCA-GPUNetIO]], [[DOCA-Flow]], [[DOCA-RDMA]], [[DOCA-DPA]], and [[DOCA-PCC]]. Current service and offload pages now include [[DOCA-Telemetry-Service]], [[DOCA-App-Shield]], [[DOCA-Device-Emulation]], [[DOCA-SNAP]], and [[OVS-DOCA]].

DOCA is especially important because it consolidates infrastructure offload into a single NVIDIA programming and operations surface. Instead of treating DPU firmware, host drivers, RDMA, storage virtualization, packet processing, crypto, telemetry, and Kubernetes networking as unrelated layers, DOCA provides the shared architecture underneath BlueField and ConnectX software features.
Current [[NVIDIA-CMX]] material extends that story into context memory: DOCA Memos is described as the BlueField/CMX SDK surface for sharing KV cache across AI compute and data nodes.

## Connections
- [[NVIDIA-BlueField-DPU]] - DOCA is the primary software framework for programming BlueField DPUs and SuperNICs.
- [[NVIDIA-BlueField-4]] - current STX/CMX direction uses BlueField-4 and DOCA-related software layers.
- [[NVIDIA-DOCA-OFED]] - current DOCA-Host profile for Linux host networking drivers and tools.
- [[DOCA-GPUNetIO]] - GPU-centric packet processing and GPU-initiated networking library.
- [[DOCA-Flow]] - hardware-accelerated packet-processing pipe and flow steering library.
- [[DOCA-RDMA]] - DOCA library for asynchronous RDMA operations over InfiniBand/RoCE.
- [[DOCA-DPA]] - programming interface for BlueField Data Path Accelerator offload.
- [[DOCA-PCC]] - programmable congestion-control API for Ethernet/RoCE fabrics.
- [[DOCA-Telemetry-Service]] - telemetry collection, aggregation, and export service for BlueField/host/network metrics.
- [[DOCA-App-Shield]] - DPU-side host and VM memory introspection API for security and forensics.
- [[DOCA-Device-Emulation]] - low-level framework for emulating host-facing PCIe devices from BlueField software.
- [[DOCA-SNAP]] - storage virtualization services for NVMe, virtio-blk, and virtio-fs on BlueField.
- [[OVS-DOCA]] - DOCA Flow-backed Open vSwitch datapath offload for NVIDIA NICs and DPUs.
- [[NVIDIA-ConnectX-InfiniBand]] - DOCA-Host and DOCA-OFED provide host-side support for current ConnectX adapters.
- [[NVIDIA-ConnectX-9]] - next-generation SuperNIC that fits the same NVIDIA networking software ecosystem.
- [[NVIDIA-Network-Operator]] - Network Operator deploys and manages DOCA-OFED driver containers and related networking components in Kubernetes.
- [[NVIDIA-DOCA-Platform-Framework]] - DPF orchestrates BlueField-accelerated services built on the DOCA software stack.
- [[NVIDIA-Spectrum-X]] - DOCA 3.3.0 is tied to the Spectrum-X reference architecture 2.1 release stack.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - AI Enterprise software RA includes DOCA networking drivers in the infrastructure layer.
- [[NVIDIA-Enterprise-Reference-Architectures]] - Enterprise RA hardware designs rely on DOCA/BlueField/ConnectX networking software.
- [[NVIDIA-STX]] - STX uses BlueField and software-defined infrastructure acceleration where DOCA is the relevant software layer.
- [[NVIDIA-CMX]] - CMX references DOCA Memos for KV-cache sharing and context memory APIs.
- [[NVIDIA-AI-Data-Platform]] - AI Data Platform depends on accelerated data movement and storage services that align with DOCA/BlueField.
- [[GPUDirect-RDMA]] - DOCA RDMA, UCX, and GPUDirect support form part of the GPU-to-network data path.
- [[NVIDIA-HPC-X]] - HPC-X consumes UCX/UCC/SHARP-style networking capabilities that sit close to DOCA networking infrastructure.
- [[NVIDIA-Rivermax]] - DOCA Rivermax exposes Rivermax streaming acceleration through DOCA APIs.
- [[NVIDIA-Firmware-Tools]] - MFT complements DOCA with firmware and device-level management utilities.
- [[NVIDIA-MLNX-OFED]] - legacy standalone OFED package that DOCA-OFED replaces for new features.
- [[NVIDIA-MLNX-EN]] - legacy Ethernet-only package transitioning into DOCA-Host profile choices.

## Source Excerpts
- "DOCA 3.3.0 is tested as part of Spectrum-X reference architecture release version 2.1."
- "Network, storage, and security services are offloaded, accelerated, and isolated on BlueField."
