# DOCA Device Emulation

**Type:** Framework
**Tags:** NVIDIA, DOCA, device emulation, PCIe, BlueField, DPU, virtio, NVMe, storage, virtualization
**Related:** [[NVIDIA-DOCA]], [[NVIDIA-BlueField-DPU]], [[DOCA-SNAP]], [[OVS-DOCA]], [[DOCA-RDMA]], [[DOCA-DPA]], [[GPU-Direct-Storage]], [[NVIDIA-DOCA-Platform-Framework]], [[NVIDIA-Firmware-Tools]]
**Sources:** https://docs.nvidia.com/doca/sdk/doca-device-emulation/index.html
**Last Updated:** 2026-04-29

## Summary
DOCA Device Emulation is NVIDIA's DOCA subsystem for emulating PCIe devices from a BlueField DPU or SuperNIC. It gives developers low-level APIs for discovery, configuration, hot plug and unplug, management, and I/O handling so a host can interact with an emulated PCIe function while the logic is implemented in software on BlueField.

## Detail
The current DOCA 3.3.0 guide explains the core model: a conventional host-to-PCIe-device path is replaced by a BlueField plus a DOCA Device Emulation application. The host still sees a PCIe function through its standard software interface, but host interactions are routed to software running on the BlueField instead of to a fixed hardware device.

This matters because many higher-level DOCA services depend on controlled host-facing device emulation. [[DOCA-SNAP]] uses BlueField storage emulation to present NVMe, virtio-blk, and virtio-fs style devices. Virtualized networking paths such as [[OVS-DOCA]] also sit near the same BlueField virtualization and representor concepts. DOCA Device Emulation is therefore the lowest-level wiki page for "BlueField presents a device to the host" workflows.

The docs also show why this page belongs with storage and network offload topics. Applications can combine device emulation with other DOCA libraries for host-memory DMA, RDMA or Ethernet traffic, encryption, compression, and additional acceleration. For AI systems, that connects emulated devices to direct storage paths, GPU-aware networking, and infrastructure services that free CPUs for GPU work.

## Connections
- [[NVIDIA-DOCA]] - Device Emulation is a DOCA subsystem.
- [[NVIDIA-BlueField-DPU]] - BlueField implements the host-facing emulated PCIe device logic.
- [[DOCA-SNAP]] - SNAP storage virtualization is built around BlueField device emulation.
- [[OVS-DOCA]] - OVS acceleration shares BlueField virtualization and hardware offload concepts.
- [[DOCA-RDMA]] - emulated-device applications can redirect data over RDMA-capable fabrics.
- [[DOCA-DPA]] - DPA is an adjacent BlueField execution target for communication-centric offload code.
- [[GPU-Direct-Storage]] - storage emulation and direct GPU data paths intersect in AI storage designs.
- [[NVIDIA-DOCA-Platform-Framework]] - DPF can orchestrate BlueField services that rely on emulation.
- [[NVIDIA-Firmware-Tools]] - emulation enablement often requires device configuration and firmware-level controls.

## Source Excerpts
- "emulate a PCIe device"
- "hot plugging/unplugging"
- "host is not aware that the PCIe function is emulated"

