# DOCA DPA

**Type:** Library
**Tags:** NVIDIA, DOCA, DPA, BlueField, data path accelerator, DPACC, offload, RDMA, communication
**Related:** [[NVIDIA-DOCA]], [[NVIDIA-BlueField-DPU]], [[DOCA-PCC]], [[DOCA-RDMA]], [[DOCA-GPUNetIO]], [[DOCA-Flow]], [[NVIDIA-DOCA-OFED]], [[NVIDIA-ConnectX-InfiniBand]]
**Sources:** https://docs.nvidia.com/doca/sdk/doca-dpa/index.html; https://docs.nvidia.com/doca/sdk/index.html; https://docs.nvidia.com/doca/sdk/changes-and-new-features/index.html
**Last Updated:** 2026-04-29

## Summary
DOCA DPA is the DOCA programming interface for offloading communication-centric code to the Data Path Accelerator processor on [[NVIDIA-BlueField-DPU]] platforms. It gives developers a C API, DPA threads, completion contexts, memory services, remote communication primitives, sync/notification primitives, RPC-style host calls, and debugging APIs for running custom offload code near the NIC.

## Detail
The current DOCA DPA docs describe DPA as a programming model for NVIDIA BlueField-3 networking platforms. Developers write DPA device code or kernels with DPA-specific function annotations, compile and link them with DPACC, then build a host executable that loads and controls the embedded DPA program through the DOCA DPA host library.

DPA objects include the DPA context, DPA threads, DPA completion contexts, DPA memory, sync events, RDMA abstractions, DPA hash tables, and device-side logger/tracer utilities. The host can trigger DPA work through notifications, completion contexts, and RPC-like one-time calls. DPA samples can run from either the host or the DPU; when using RDMA utilities from the DPU, the docs distinguish the PF device, an extended DPA context on an SF device, and a DOCA RDMA context on that SF device.

DOCA DPA is important because it gives BlueField a programmable execution target for networking control/data-plane work that is not simply CUDA on a GPU and not a CPU thread on the host. It is closely connected to [[DOCA-PCC]] for programmable congestion control and to [[DOCA-RDMA]] for RDMA operations from DPA-aware samples.

## Connections
- [[NVIDIA-DOCA]] - DOCA DPA is a core DOCA SDK library/subsystem.
- [[NVIDIA-BlueField-DPU]] - DPA is a BlueField-side execution resource for communication-centric offloads.
- [[DOCA-PCC]] - PCC uses DPACC/DPA-style device code for programmable congestion control.
- [[DOCA-RDMA]] - DPA samples can attach DPA completion contexts to DOCA RDMA operations.
- [[DOCA-GPUNetIO]] - GPUNetIO is the GPU-centric networking complement to DPA's NIC-side execution model.
- [[DOCA-Flow]] - packet-processing flows can be paired with DPA-based offload logic.
- [[NVIDIA-DOCA-OFED]] - DOCA-Host profiles provide the host driver substrate for DPA-capable NVIDIA networking systems.
- [[NVIDIA-ConnectX-InfiniBand]] - DPA-capable BlueField and SuperNIC systems sit in the broader ConnectX networking family.

## Source Excerpts
- "The DOCA DPA libraries offer a programming model for offloading communication-centric user code."
- "DPACC is used to compile and link kernels."

