# NVIDIA Vera Rubin POD

**Type:** Platform Architecture
**Tags:** NVIDIA, Vera Rubin POD, Rubin, Vera CPU, Groq 3 LPX, BlueField-4 STX, Spectrum-6 SPX, MGX, DSX, AI factory
**Related:** [[NVIDIA-Vera-Rubin]], [[NVIDIA-Vera-CPU]], [[NVIDIA-Groq-3-LPX]], [[NVIDIA-Spectrum-6-SPX]], [[NVIDIA-BlueField-4]], [[NVIDIA-STX]], [[NVIDIA-CMX]], [[NVIDIA-ConnectX-9]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Quantum-X800-InfiniBand]], [[NVIDIA-Silicon-Photonics]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-Dynamo]]
**Sources:** https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/, https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform
**Last Updated:** 2026-05-09

## Summary
NVIDIA Vera Rubin POD is NVIDIA's POD-scale AI factory architecture for the agentic AI era. It unifies five purpose-built rack-scale systems on the third-generation NVIDIA MGX rack architecture: Vera Rubin NVL72 compute racks, [[NVIDIA-Groq-3-LPX]] inference accelerator racks, [[NVIDIA-Vera-CPU]] racks, [[NVIDIA-BlueField-4]] STX storage/context-memory racks, and [[NVIDIA-Spectrum-6-SPX]] networking racks.

## Detail

### Purpose
Vera Rubin POD moves AI factory infrastructure from separate server and rack-scale systems into a co-designed POD-scale supercomputer. It is meant for agentic workloads that need large context windows, low-latency inference, dense CPU sandboxing, shared context memory, resilient scale-out networking, and high token throughput per watt.

### Architecture notes
- NVIDIA describes the POD as 40 racks with 1,152 Rubin GPUs, 60 exaflops, and 10 PB/s total scale-up bandwidth.
- The architecture uses extreme co-design across compute, networking, and storage chips.
- Vera Rubin NVL72 is the core rack-scale compute engine, integrating 72 Rubin GPUs and 36 Vera CPUs with NVLink.
- [[NVIDIA-Groq-3-LPX]] adds a low-latency inference accelerator path with 256 LPUs per rack.
- [[NVIDIA-Vera-CPU]] racks provide dense CPU capacity for reinforcement learning, sandboxing, and agent execution environments.
- [[NVIDIA-BlueField-4]] STX racks host [[NVIDIA-CMX]] context memory storage for AI-native KV-cache sharing.
- [[NVIDIA-Spectrum-6-SPX]] racks connect the POD with Spectrum-X Ethernet or [[NVIDIA-Quantum-X800-InfiniBand]] switching.
- NVIDIA Vera Rubin DSX provides a broader AI factory reference-design platform that ties chips, systems, software libraries, APIs, partners, power, cooling, and facility controls into one deployment framework.

### NVIDIA context
Use this page when the question is about all of the hardware that composes a next-generation NVIDIA AI factory rather than a single server, GPU, or networking component. It should bridge [[NVIDIA-Vera-Rubin]], [[NVIDIA-Groq-3-LPX]], [[NVIDIA-CMX]], [[NVIDIA-Spectrum-6-SPX]], [[NVIDIA-STX]], [[NVIDIA-Dynamo]], and [[NVIDIA-Enterprise-AI-Factory]].

## Connections
- [[NVIDIA-Vera-Rubin]] - platform family and compute architecture foundation.
- [[NVIDIA-Vera-CPU]] - CPU rack and superchip component.
- [[NVIDIA-Groq-3-LPX]] - low-latency inference accelerator rack in the POD.
- [[NVIDIA-Spectrum-6-SPX]] - networking rack connecting the POD.
- [[NVIDIA-BlueField-4]] - storage/context processor used by STX and CMX.
- [[NVIDIA-STX]] - AI-native storage reference architecture used by the BlueField-4 STX rack.
- [[NVIDIA-CMX]] - context memory storage layer hosted in the STX rack.
- [[NVIDIA-ConnectX-9]] - SuperNIC component in next-generation AI factory networking.
- [[NVIDIA-Spectrum-X]] - Ethernet fabric option for MGX ETL and SPX networking.
- [[NVIDIA-Quantum-X800-InfiniBand]] - InfiniBand fabric option for SPX networking.
- [[NVIDIA-Silicon-Photonics]] - CPO/optical direction used in Spectrum-6 SPX.
- [[NVIDIA-Enterprise-AI-Factory]] - strategic enterprise AI factory context.
- [[NVIDIA-DGX-SuperPOD]] - predecessor/current scale-out AI factory pattern.
- [[NVIDIA-Dynamo]] - serving framework that makes heterogeneous GPU/LPU/context-memory inference practical.

## Source Excerpts
- NVIDIA's technical blog describes Vera Rubin POD as five purpose-built rack-scale systems that work together as one AI supercomputer.
- NVIDIA lists key rack systems as NVL72, Groq 3 LPX, Vera CPU, BlueField-4 STX, and Spectrum-6 SPX.

## Resources
- [NVIDIA Vera Rubin POD Technical Blog](https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/)
- [NVIDIA Vera Rubin Newsroom Announcement](https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform)
