# OVS-DOCA

**Type:** Integration
**Tags:** NVIDIA, DOCA, OVS, Open vSwitch, BlueField, DPU, ASAP2, switchdev, VXLAN, Geneve, SR-IOV, vDPA
**Related:** [[NVIDIA-DOCA]], [[DOCA-Flow]], [[NVIDIA-BlueField-DPU]], [[DOCA-Device-Emulation]], [[NVIDIA-DOCA-OFED]], [[NVIDIA-Network-Operator]], [[NVIDIA-Spectrum-X]], [[DOCA-Telemetry-Service]], [[NVIDIA-NetQ]]
**Sources:** https://docs.nvidia.com/doca/sdk/openvswitch-acceleration---ovs-in-doca/index.html; https://docs.nvidia.com/doca/sdk/ovs-doca-hardware-acceleration/index.html; https://docs.nvidia.com/doca/sdk/ovs-dpdk-hardware-acceleration/index.html
**Last Updated:** 2026-04-29

## Summary
OVS-DOCA is NVIDIA's DOCA-backed Open vSwitch datapath implementation for hardware-accelerated switching on BlueField DPUs and NVIDIA NICs. NVIDIA's current docs distinguish OVS as the Open vSwitch distribution inside DOCA and OVS-DOCA as the datapath offload layer that uses [[DOCA-Flow]]. It is the current preferred OVS offload path for NVIDIA DPUs/NICs; the current docs say OVS-DPDK and OVS-Kernel DPIFs are retained mainly for backward compatibility.

## Detail
Open vSwitch is commonly deployed in hypervisors for virtual machine networking. Without hardware acceleration, software switching can consume CPU cycles and limit network performance. NVIDIA's accelerated switching model offloads OVS data-plane work to NIC or DPU hardware while keeping the OVS control plane and familiar interfaces intact.

The current "OpenvSwitch Acceleration - OVS in DOCA" page explains that OVS-DOCA uses the DOCA Flow library for offload tasks and is the recommended DPIF for efficiency, performance, scalability, and feature support. The OVS-DOCA hardware acceleration guide covers switchdev setup, DOCA datapath bridges and interfaces, representors, default datapath configuration, eswitch dependencies, VXLAN/Geneve/GRE offloads, connection tracking, SR-IOV VF LAG, multiport eSwitch mode, slow-path rate limiting, hairpin, meters, DP-HASH, sFlow, mirroring, guaranteed packet rate, pre-miss rules, debugging, megaflow scaling, and packet capture.

OVS-DOCA belongs near [[DOCA-Flow]] because Flow is the offload programming layer, near [[NVIDIA-BlueField-DPU]] because BlueField hosts the DPU data path, and near [[NVIDIA-Network-Operator]] because Kubernetes network deployments may need the same SR-IOV, representor, RDMA, and accelerated networking foundation.

## Connections
- [[NVIDIA-DOCA]] - OVS-DOCA ships in the DOCA software environment.
- [[DOCA-Flow]] - OVS-DOCA uses DOCA Flow as the offload layer.
- [[NVIDIA-BlueField-DPU]] - BlueField DPUs accelerate the OVS data path.
- [[DOCA-Device-Emulation]] - virtualized device paths such as vDPA and virtio sit near BlueField emulation.
- [[NVIDIA-DOCA-OFED]] - current Linux host networking stack for NVIDIA NIC/DPU deployments.
- [[NVIDIA-Network-Operator]] - Kubernetes networking automation can expose the same accelerated NIC/DPU resources.
- [[NVIDIA-Spectrum-X]] - OVS-DOCA is relevant to Ethernet AI networking and virtualized cloud data planes.
- [[DOCA-Telemetry-Service]] - OVS-DOCA operational health can feed DOCA/network telemetry workflows.
- [[NVIDIA-NetQ]] - NetQ is the broader network operations and validation layer.

## Source Excerpts
- "OVS-DOCA DPIF"
- "utilizes the DOCA Flow library"
- "hardware offload"

