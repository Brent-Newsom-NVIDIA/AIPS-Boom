# NVIDIA DGX Quantum

**Type:** Platform
**Tags:** NVIDIA, DGX Quantum, quantum computing, Grace Hopper, GB200, CUDA-Q, NVQLink, QEC
**Related:** [[NVIDIA-Quantum]], [[NVIDIA-NVQLink]], [[NVIDIA-Accelerated-Quantum-Center]], [[CUDA-Q]], [[CUDA-QX]], [[CUDA-Q-Realtime]], [[NVIDIA-DGX]], [[NVIDIA-GB200-NVL72]], [[NVIDIA-Grace-CPU]]
**Sources:** https://www.nvidia.com/en-us/data-center/dgx-quantum/, https://www.nvidia.com/en-us/solutions/quantum-computing/, https://www.nvidia.com/en-us/solutions/quantum-computing/accelerated-quantum-center/
**Last Updated:** 2026-04-29

## Summary
NVIDIA DGX Quantum is NVIDIA's DGX-branded quantum-classical system/reference-architecture identity. Current en-US navigation for `nvidia.com/en-us/data-center/dgx-quantum/` redirects to [[NVIDIA-NVQLink]], which means NVQLink is the current canonical direction for GPU-QPU coupling. This page exists so the DGX Quantum term remains queryable while pointing readers to the current NVQLink and NVAQC architecture pages.

## Detail

### Current status
DGX Quantum should not be treated as the main current product page in the wiki. NVIDIA's current en-US DGX Quantum URL redirects to the NVQLink page, and current NVIDIA Quantum materials position NVQLink as the open realtime architecture for integrating quantum processors with accelerated computing.

### Platform role
- Earlier DGX Quantum materials described an integrated quantum-classical system/reference architecture for accelerated quantum computing.
- Current NVAQC materials still reference DGX Quantum architecture as the integration pattern between partner quantum hardware and NVIDIA AI supercomputing.
- The current software path is [[CUDA-Q]], [[CUDA-QX]], and [[CUDA-Q-Realtime]].
- The current hardware/integration path is [[NVIDIA-NVQLink]] plus NVIDIA GPU systems and networking.

### NVIDIA context
Use this page when a source or query says "DGX Quantum." For current implementation details, go to [[NVIDIA-NVQLink]] and [[CUDA-Q-Realtime]]. For the research facility applying the architecture, use [[NVIDIA-Accelerated-Quantum-Center]].

## Connections
- [[NVIDIA-Quantum]] - overall quantum platform page.
- [[NVIDIA-NVQLink]] - current canonical GPU-QPU integration architecture.
- [[NVIDIA-Accelerated-Quantum-Center]] - NVAQC materials reference DGX Quantum architecture.
- [[CUDA-Q]] - programming model for hybrid quantum-classical workflows.
- [[CUDA-QX]] - QEC and solver library layer.
- [[CUDA-Q-Realtime]] - realtime NVQLink API layer.
- [[NVIDIA-DGX]] - DGX product family context.
- [[NVIDIA-GB200-NVL72]] - GB200 NVL72 appears in current NVAQC system context.

## Source Excerpts
- NVIDIA's current en-US DGX Quantum URL redirects to the NVQLink page, so the wiki treats NVQLink as the current implementation center.
- NVIDIA's NVAQC page describes using DGX Quantum architecture to integrate partner quantum hardware with NVIDIA GB200 NVL72 Grace Blackwell systems.

## Resources
- [DGX Quantum URL](https://www.nvidia.com/en-us/data-center/dgx-quantum/)
- [NVIDIA NVQLink](https://www.nvidia.com/en-us/solutions/quantum-computing/nvqlink/)
- [NVIDIA Accelerated Quantum Center](https://www.nvidia.com/en-us/solutions/quantum-computing/accelerated-quantum-center/)
