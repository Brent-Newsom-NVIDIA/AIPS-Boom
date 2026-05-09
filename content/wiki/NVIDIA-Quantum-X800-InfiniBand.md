# NVIDIA Quantum-X800 InfiniBand

**Type:** Technology
**Tags:** NVIDIA, Quantum-X800, InfiniBand, XDR, 800Gb/s, SHARP v4, UFM, ConnectX-8, ConnectX-9, LinkX, silicon photonics, AI networking
**Related:** [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-B300]], [[NVIDIA-ConnectX-9]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-UFM]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Spectrum-6-SPX]], [[NVIDIA-Silicon-Photonics]], [[NVIDIA-HPC-X]], [[NCCL]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://www.nvidia.com/en-us/networking/products/infiniband/quantum-x800/, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/index.html
**Last Updated:** 2026-05-09

## Summary
NVIDIA Quantum-X800 InfiniBand is NVIDIA's 800 Gb/s end-to-end InfiniBand platform for massive-scale AI and HPC fabrics. It is the next generation of [[NVIDIA-Quantum-InfiniBand]], built around Quantum-X800 switches, ConnectX-8 and [[NVIDIA-ConnectX-9]] SuperNICs, LinkX cables/transceivers, SHARP v4 in-network computing, adaptive routing, telemetry-based congestion control, and UFM fabric management.

## Detail

### Purpose
Quantum-X800 targets trillion-parameter-scale AI models and large AI factories that need very low latency, high bisection bandwidth, in-network collectives, strong fabric management, and predictable performance at massive scale. In current DGX SuperPOD materials, Quantum-X800/XDR InfiniBand is the high-performance compute fabric path for [[NVIDIA-DGX-B300]] SuperPOD designs.

### Platform notes
- End-to-end 800 Gb/s InfiniBand networking.
- Platform components include Quantum-X800 InfiniBand switches, ConnectX-8 SuperNICs, ConnectX-9 SuperNICs, and LinkX cables/transceivers.
- Quantum-X800 switches provide 144 ports of 800 Gb/s connectivity per port.
- Hardware in-network computing uses SHARP v4.
- The platform includes adaptive routing, telemetry-based congestion control, performance isolation, and a dedicated port for [[NVIDIA-UFM]].
- NVIDIA positions Quantum-X silicon photonics switches as a way to reduce power and latency by shortening the optics-to-electronics path.

### NVIDIA context
Use this page when a question refers specifically to Quantum-X800, XDR 800 Gb/s InfiniBand, or the B300 SuperPOD InfiniBand reference architecture. Use [[NVIDIA-Quantum-InfiniBand]] for the broader Quantum/InfiniBand family, including Quantum-2/NDR and generic SHARP concepts.

## Connections
- [[NVIDIA-Quantum-InfiniBand]] - parent InfiniBand family page.
- [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]] - DGX B300 SuperPOD reference architecture using Quantum-X800.
- [[NVIDIA-DGX-SuperPOD]] - SuperPOD is a primary deployment context.
- [[NVIDIA-DGX-B300]] - Blackwell Ultra DGX system used in current Quantum-X800 SuperPOD designs.
- [[NVIDIA-ConnectX-9]] - next-generation SuperNIC included in the Quantum-X800 platform.
- [[NVIDIA-ConnectX-InfiniBand]] - endpoint adapter family for InfiniBand networking.
- [[NVIDIA-UFM]] - fabric management and telemetry.
- [[NVIDIA-Spectrum-X]] - Ethernet counterpart for AI factory networking.
- [[NVIDIA-Spectrum-6-SPX]] - Vera Rubin POD networking rack can be configured with Quantum-X800 InfiniBand.
- [[NVIDIA-Silicon-Photonics]] - co-packaged optics direction tied to future high-scale networks.
- [[NVIDIA-HPC-X]] and [[NCCL]] - communication software that benefits from NVIDIA InfiniBand and in-network collectives.
- [[NVIDIA-Enterprise-AI-Factory]] - Quantum-X800 is part of the hardware fabric choice for very large AI factories.

## Source Excerpts
- NVIDIA describes Quantum-X800 as end-to-end 800 Gb/s networking designed for massive-scale AI.
- The product page lists Quantum-X800 switches, ConnectX-8, ConnectX-9, LinkX, SHARP v4, adaptive routing, and telemetry-based congestion control.

## Resources
- [NVIDIA Quantum-X800 InfiniBand Platform](https://www.nvidia.com/en-us/networking/products/infiniband/quantum-x800/)
