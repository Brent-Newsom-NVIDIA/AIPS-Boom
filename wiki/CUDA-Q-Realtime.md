# CUDA-Q Realtime

**Type:** Technology
**Tags:** NVIDIA, CUDA-Q, cudaq-realtime, NVQLink, realtime, quantum control, QEC, GPU-QPU
**Related:** [[CUDA-Q]], [[CUDA-QX]], [[NVIDIA-NVQLink]], [[NVIDIA-Quantum]], [[Ising-Decoding]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-Holoscan]]
**Sources:** https://nvidia.github.io/cuda-quantum/latest/using/realtime.html, https://nvidia.github.io/cuda-quantum/blogs/blog/2026/03/16/launching-cudaq-realtime/, https://www.nvidia.com/en-us/solutions/quantum-computing/nvqlink/
**Last Updated:** 2026-04-29

## Summary
CUDA-Q Realtime, also referenced as `cudaq-realtime`, is the CUDA-Q library for tightly coupling GPU-accelerated compute to a quantum processor control system through a low-latency networking layer. It is the software layer that makes [[NVIDIA-NVQLink]] programmable for microsecond-class GPU-to-quantum-controller feedback loops.

## Detail

### Purpose
Fault-tolerant quantum computing requires realtime classical processing while the QPU is operating. CUDA-Q Realtime gives developers and system integrators an API and networking layer for callbacks between GPUs and quantum controllers, enabling QEC decoding, calibration, and other realtime control workflows.

### Platform role
- Requires a host system with an NVIDIA GPU and ConnectX-7 or BlueField NIC, plus an FPGA connected to the NIC.
- Provides realtime co-processing between FPGA and CPU-GPU systems.
- Provides the low-latency networking layer of the NVQLink architecture.
- Uses an Ethernet/RoCE data path and references Holoscan Sensor Bridge for high-bandwidth transfer.
- Became publicly available through CUDA-Q around the GTC 2026 NVQLink release window.

### NVIDIA context
Use this page for the software/API layer. Use [[NVIDIA-NVQLink]] for the architecture and hardware integration story, [[CUDA-QX]] for QEC and solver libraries, and [[CUDA-Q]] for the broader programming model.

## Connections
- [[CUDA-Q]] - CUDA-Q Realtime is part of the CUDA-Q platform.
- [[NVIDIA-NVQLink]] - realtime library provides the programmable low-latency NVQLink path.
- [[CUDA-QX]] - CUDA-Q QEC uses realtime decoding paths for active error correction.
- [[Ising-Decoding]] - NVIDIA predecoder models are used in realtime QEC examples and latency-sensitive decoding workflows.
- [[NVIDIA-BlueField-DPU]] and [[NVIDIA-ConnectX-InfiniBand]] - NVIDIA networking components used in realtime host designs.
- [[NVIDIA-Holoscan]] - Holoscan Sensor Bridge is referenced as part of the high-bandwidth data-transfer layer.

## Source Excerpts
- NVIDIA CUDA-Q docs describe CUDA-Q Realtime as a library for coupling GPU-accelerated compute to a quantum processor control system through networking, providing the low-latency networking layer of NVQLink.
- NVIDIA's CUDA-Q Realtime launch blog positions the library as the API for microsecond-latency callbacks between GPUs and quantum controllers.

## Resources
- [CUDA-Q Realtime Docs](https://nvidia.github.io/cuda-quantum/latest/using/realtime.html)
- [Introducing cudaq-realtime](https://nvidia.github.io/cuda-quantum/blogs/blog/2026/03/16/launching-cudaq-realtime/)
