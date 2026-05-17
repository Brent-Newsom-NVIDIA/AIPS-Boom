# DOCA Flow

**Type:** Library
**Tags:** NVIDIA, DOCA, DOCA Flow, packet processing, BlueField, DPU, flow steering, hardware acceleration, DPDK
**Related:** [[NVIDIA-DOCA]], [[DOCA-GPUNetIO]], [[DOCA-RDMA]], [[DOCA-DPA]], [[DOCA-PCC]], [[OVS-DOCA]], [[DOCA-Telemetry-Service]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-DOCA-OFED]], [[NVIDIA-Spectrum-X]], [[NVIDIA-ConnectX-InfiniBand]]
**Sources:** https://docs.nvidia.com/doca/sdk/doca-flow/index.html; https://docs.nvidia.com/doca/sdk/doca-libraries/index.html; https://docs.nvidia.com/doca/sdk/changes-and-new-features/index.html; https://docs.nvidia.com/doca/sdk/openvswitch-acceleration---ovs-in-doca/index.html
**Last Updated:** 2026-04-29

## Summary
DOCA Flow is the DOCA packet-processing library for building hardware-accelerated flow pipes. NVIDIA describes it as the fundamental API for generic packet-processing pipes in hardware, with match criteria, monitoring, actions, forwarding targets, and pipe chaining. It is the DOCA page to use for gateways, virtual network functions, flow steering, packet modification, hardware counters, tunneling, and BlueField/ConnectX packet-processing applications.

## Detail
DOCA Flow lets developers build packet-processing pipelines where each pipe matches selected packet fields, applies actions, optionally monitors traffic, and forwards packets to software queues, ports, another pipe, or drop. The current guide assumes familiarity with DPDK and targets network-function applications such as gateways.

The current docs list match support for MAC, VLAN, Ethertype, IPv4/IPv6, TCP, UDP, ICMP, GRE, VXLAN, GTP-U, ESP, PSP, and metadata. Actions include packet modification such as MAC/IP/L4 updates, tunnel strip/add, metadata setting, encryption/decryption, counters, policers, pipe chaining, priority, miss handling, LPM, ACL, ordered lists, hash pipes, hairpin configuration, custom headers, debug/trace features, and samples.

DOCA 3.3.0 release notes add DOCA Flow updates such as FlexParser beta support for more complex/user-defined protocols, all IPv4/IPv6 encapsulation combinations, and one-way-delay calculation. In the wiki graph, DOCA Flow belongs between [[NVIDIA-DOCA]] as the platform, [[NVIDIA-BlueField-DPU]] as the offload device, [[DOCA-GPUNetIO]] for GPU packet processing, [[OVS-DOCA]] for Open vSwitch datapath offload, and [[DOCA-PCC]] for programmable congestion-control behavior.

## Connections
- [[NVIDIA-DOCA]] - DOCA Flow is a core DOCA SDK library.
- [[DOCA-GPUNetIO]] - GPU packet processing can pair GPUNetIO with DOCA Flow pipes.
- [[DOCA-RDMA]] - RDMA applications may rely on DOCA networking primitives alongside packet steering.
- [[DOCA-DPA]] - DPA can host communication-centric offload code adjacent to DOCA Flow pipelines.
- [[DOCA-PCC]] - programmable congestion-control logic sits near flow steering and telemetry decisions.
- [[OVS-DOCA]] - current DOCA docs describe OVS-DOCA as using DOCA Flow for datapath offload.
- [[DOCA-Telemetry-Service]] - Flow counters and packet-processing state fit into DPU/network telemetry workflows.
- [[NVIDIA-BlueField-DPU]] - BlueField accelerates packet-processing pipelines built with DOCA Flow.
- [[NVIDIA-DOCA-OFED]] - host drivers and DOCA-Host profiles provide the Linux substrate for DOCA networking.
- [[NVIDIA-Spectrum-X]] - Ethernet AI fabrics depend on programmable packet steering, congestion, and telemetry capabilities.
- [[NVIDIA-ConnectX-InfiniBand]] - ConnectX/BlueField hardware provides the NIC side of DOCA Flow acceleration.

## Source Excerpts
- "DOCA Flow is the most fundamental API for building generic packet processing pipes in hardware."
- "Pipes can be chained."
