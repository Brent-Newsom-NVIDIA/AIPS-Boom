# NVIDIA Spectrum-6 SPX

**Type:** Platform
**Tags:** NVIDIA, Spectrum-6 SPX, SPX, networking rack, Spectrum-X, Quantum-X800, silicon photonics, co-packaged optics, Vera Rubin, AI factory
**Related:** [[NVIDIA-Vera-Rubin-POD]], [[NVIDIA-Vera-Rubin]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Quantum-X800-InfiniBand]], [[NVIDIA-Silicon-Photonics]], [[NVIDIA-ConnectX-9]], [[NVIDIA-BlueField-4]], [[NVIDIA-STX]], [[NVIDIA-CMX]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-DGX-SuperPOD]]
**Sources:** https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/, https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform
**Last Updated:** 2026-05-09

## Summary
NVIDIA Spectrum-6 SPX is the networking rack in the [[NVIDIA-Vera-Rubin-POD]] architecture. NVIDIA positions SPX as the rack-to-rack networking layer that connects the Vera Rubin POD into a single AI supercomputer, accelerating east-west and north-south traffic across AI factories with either [[NVIDIA-Spectrum-X]] Ethernet or [[NVIDIA-Quantum-X800-InfiniBand]] switching.

## Detail

### Purpose
SPX is the POD-scale networking building block for next-generation NVIDIA AI factories. It exists because agentic AI workloads need low-latency, high-throughput, resilient connectivity among compute, storage, inference accelerator, and CPU racks.

### Architecture notes
- Spectrum-6 SPX networking racks connect the entire Vera Rubin POD.
- The SPX rack can be configured with Spectrum-X Ethernet or Quantum-X800 InfiniBand switches.
- The rack includes the 102.4 Tb/s Spectrum-6 switch.
- The Spectrum-6 switch has 512 lanes and 200 Gb/s co-packaged optics in single-chip and multi-chip switch offerings.
- NVIDIA positions the silicon photonics/CPO integration as replacing pluggable transceivers to improve power efficiency, resiliency, latency, jitter, and effective bandwidth.
- SPX keeps AI workloads synchronized across compute and storage environments, including traffic patterns created by training, inference, KV-cache movement, and data services.

### NVIDIA context
Use this page for "SPX" search and for questions about Vera Rubin-era AI factory networking racks. Use [[NVIDIA-Spectrum-X]] for current Ethernet AI networking and [[NVIDIA-Quantum-X800-InfiniBand]] for the InfiniBand option.

## Connections
- [[NVIDIA-Vera-Rubin-POD]] - SPX is one of the five rack-scale systems in the POD.
- [[NVIDIA-Vera-Rubin]] - next-generation platform context.
- [[NVIDIA-Spectrum-X]] - Ethernet option for SPX configurations.
- [[NVIDIA-Quantum-X800-InfiniBand]] - InfiniBand option for SPX configurations.
- [[NVIDIA-Silicon-Photonics]] - co-packaged optics and optical networking direction.
- [[NVIDIA-ConnectX-9]] - SuperNIC direction adjacent to Spectrum-6 SPX fabrics.
- [[NVIDIA-BlueField-4]] - DPU used by adjacent Vera Rubin POD storage/data racks.
- [[NVIDIA-STX]] and [[NVIDIA-CMX]] - storage and context memory traffic that SPX networking must carry.
- [[NVIDIA-Enterprise-AI-Factory]] - SPX is a future AI factory networking building block.
- [[NVIDIA-DGX-SuperPOD]] - current SuperPOD patterns lead into Vera Rubin POD-scale networking.

## Source Excerpts
- NVIDIA says Spectrum-6 SPX networking racks connect the entire Vera Rubin POD into a single supercomputer.
- NVIDIA describes the rack as configurable with Spectrum-X Ethernet or Quantum-X800 InfiniBand switching.
- NVIDIA says the Spectrum-6 switch includes 102.4 Tb/s bandwidth, 512 lanes, and 200 Gb/s co-packaged optics.

## Resources
- [NVIDIA Vera Rubin POD Technical Blog](https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/)
- [NVIDIA Vera Rubin Newsroom Announcement](https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform)
