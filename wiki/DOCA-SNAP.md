# DOCA SNAP

**Type:** Service
**Tags:** NVIDIA, DOCA, SNAP, BlueField, storage virtualization, NVMe, virtio-blk, virtio-fs, NVMe-oF, SPDK
**Related:** [[NVIDIA-DOCA]], [[NVIDIA-BlueField-DPU]], [[DOCA-Device-Emulation]], [[GPU-Direct-Storage]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-STX]], [[NVIDIA-CMX]], [[DOCA-RDMA]], [[DOCA-Telemetry-Service]], [[NVIDIA-Certified-Storage]]
**Sources:** https://docs.nvidia.com/doca/sdk/doca-snap-services/index.html; https://docs.nvidia.com/doca/sdk/doca-snap-4-service-guide/index.html; https://docs.nvidia.com/doca/sdk/doca-snap-virtio-fs-service-guide/index.html
**Last Updated:** 2026-04-29

## Summary
DOCA SNAP is NVIDIA's BlueField storage virtualization service family. SNAP presents networked or software-defined storage as local block or file-system devices to a host, while the emulation and storage logic run on the BlueField DPU. In the wiki, SNAP is the DOCA page for hardware-accelerated NVMe, virtio-blk, and virtio-fs storage virtualization.

## Detail
The current DOCA SNAP services page describes a family of services that provide hardware-accelerated virtualization of local storage on BlueField products. SNAP presents remote or local storage as local devices on the PCIe bus, so the host OS or hypervisor can use standard storage drivers while SNAP redirects requests through a protocol-specific framework.

The current SNAP service family includes SNAP Virtio-fs for file-system emulation on BlueField-3, SNAP-4 for NVMe and virtio-blk block-device emulation on BlueField-3, and SNAP-3 for NVMe and virtio-blk on BlueField-2. The SNAP-4 guide describes an asynchronous request-handling pipeline across BlueField Arm cores, with flexibility across fabric, transport, and protocol choices such as NVMe-oF, RDMA, TCP, Ethernet, and InfiniBand.

SNAP sits between [[DOCA-Device-Emulation]] and AI storage architecture pages. Device Emulation provides the lower-level PCIe emulation concept; SNAP turns it into storage services. [[NVIDIA-AI-Data-Platform]], [[NVIDIA-STX]], and [[NVIDIA-CMX]] are higher-level AI data and storage designs where BlueField-accelerated storage paths matter for retrieval, context memory, KV cache, and keeping GPUs fed.

## Connections
- [[NVIDIA-DOCA]] - SNAP is a DOCA service family.
- [[NVIDIA-BlueField-DPU]] - SNAP runs on BlueField and uses DPU storage/networking acceleration.
- [[DOCA-Device-Emulation]] - SNAP relies on host-facing PCIe device emulation.
- [[GPU-Direct-Storage]] - SNAP-style storage virtualization is adjacent to direct GPU data paths.
- [[NVIDIA-AI-Data-Platform]] - AI Data Platform depends on accelerated storage and retrieval infrastructure.
- [[NVIDIA-STX]] - STX is the broader NVIDIA AI-native storage architecture direction.
- [[NVIDIA-CMX]] - CMX uses BlueField-class storage processors for context memory and KV-cache services.
- [[DOCA-RDMA]] - SNAP deployments can use RDMA-capable fabrics for storage transports.
- [[DOCA-Telemetry-Service]] - current SNAP service docs include telemetry-adjacent operational concerns.
- [[NVIDIA-Certified-Storage]] - certified storage and partner platforms sit above the storage service layer.

## Source Excerpts
- "Storage-Defined Network Accelerated Processing"
- "hardware-accelerated storage virtualization"
- "NVMe and virtio-block"

