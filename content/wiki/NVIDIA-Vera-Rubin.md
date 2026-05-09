# NVIDIA Vera Rubin

**Type:** Architecture
**Tags:** NVIDIA, Vera Rubin, Rubin GPU, Vera CPU, NVLink 6, Vera Rubin NVL144, data center, AI factory
**Related:** [[NVIDIA-Vera-Rubin-POD]], [[NVIDIA-Vera-CPU]], [[NVIDIA-Groq-3-LPX]], [[NVIDIA-Spectrum-6-SPX]], [[NVIDIA-HGX]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Grace-CPU]], [[NVLink]], [[NVIDIA-ConnectX-9]], [[NVIDIA-BlueField-4]], [[NVIDIA-STX]], [[NVIDIA-CMX]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Quantum-X800-InfiniBand]], [[NVIDIA-Silicon-Photonics]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://www.nvidia.com/en-us/data-center/technologies/rubin/, https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform, https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/, https://developer.nvidia.com/blog/inside-the-nvidia-rubin-platform-six-new-chips-one-ai-supercomputer/
**Last Updated:** 2026-05-09

## Summary
NVIDIA Vera Rubin is NVIDIA's next-generation AI platform after Blackwell, combining Rubin GPUs, the Vera CPU, NVLink 6, ConnectX-9, BlueField-4, Spectrum-6, and rack-scale systems such as Vera Rubin NVL72/NVL144. NVIDIA positions the platform for AI factory workloads that require larger memory pools, higher NVLink bandwidth, lower-latency inference, and POD-scale integration across compute, networking, and storage.

## Detail

### Platform components
- Rubin GPU with next-generation Tensor Core acceleration and HBM4/HBM4e-class memory direction.
- [[NVIDIA-Vera-CPU]] with 88 custom Arm cores and NVLink-C2C connectivity to Rubin GPUs.
- Vera Rubin NVL144 rack-scale configuration with 144 Rubin GPUs and 72 Vera CPUs.
- HGX Rubin NVL8 baseboards for OEM/ODM server designs.
- NVLink 6, ConnectX-9, BlueField-4, Spectrum-X Ethernet, Quantum-X InfiniBand, and silicon photonics around the rack-scale platform.
- [[NVIDIA-Vera-Rubin-POD]] brings together Vera Rubin NVL72 compute racks, [[NVIDIA-Groq-3-LPX]] inference accelerator racks, [[NVIDIA-Vera-CPU]] racks, [[NVIDIA-BlueField-4]] STX/context-memory racks, and [[NVIDIA-Spectrum-6-SPX]] networking racks.

### NVIDIA context
Vera Rubin extends the AI factory direction beyond [[NVIDIA-Blackwell-Architecture]]. It should be linked from pages about [[NVIDIA-HGX]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-Enterprise-AI-Factory]], [[NVLink]], and next-generation networking/storage such as [[NVIDIA-BlueField-4]], [[NVIDIA-ConnectX-9]], [[NVIDIA-CMX]], [[NVIDIA-Spectrum-6-SPX]], [[NVIDIA-Quantum-X800-InfiniBand]], and [[NVIDIA-Silicon-Photonics]].

## Connections
- [[NVIDIA-Vera-Rubin-POD]] - POD-scale architecture that packages Vera Rubin into five rack-scale systems.
- [[NVIDIA-Vera-CPU]] - Vera CPU is the CPU component of the Vera Rubin platform.
- [[NVIDIA-Groq-3-LPX]] - low-latency inference accelerator rack co-designed with Vera Rubin.
- [[NVIDIA-Spectrum-6-SPX]] - networking rack used in the Vera Rubin POD.
- [[NVIDIA-HGX]] - HGX Rubin NVL8 is the OEM baseboard form of Rubin.
- [[NVIDIA-DGX-SuperPOD]] - Vera Rubin NVL144 extends the rack-scale AI supercomputer pattern beyond Blackwell.
- [[NVIDIA-DGX-SuperPOD-GB200-RA]] - GB200 SuperPOD is the prior rack-scale DGX pattern leading into Vera Rubin.
- [[NVIDIA-Blackwell-Architecture]] - Blackwell is the predecessor platform; Blackwell Ultra/GB300 bridges toward Vera Rubin.
- [[NVIDIA-Grace-CPU]] - Vera follows Grace as NVIDIA's data center CPU for GPU-coherent systems.
- [[NVLink]] - NVLink 6 is central to Vera Rubin rack-scale memory and GPU interconnect.
- [[NVIDIA-ConnectX-9]] and [[NVIDIA-BlueField-4]] - next-generation networking and DPU components in Vera Rubin systems.
- [[NVIDIA-STX]] and [[NVIDIA-CMX]] - storage and context-memory direction used by Vera Rubin POD STX racks.
- [[NVIDIA-Spectrum-X]] and [[NVIDIA-Quantum-X800-InfiniBand]] - Ethernet and InfiniBand fabric options around Vera Rubin POD networking.
- [[NVIDIA-Silicon-Photonics]] - NVIDIA silicon photonics is part of the Vera Rubin networking direction.

## Source Excerpts
- NVIDIA's Vera Rubin page describes the platform as a next-generation AI factory architecture with Rubin GPUs, Vera CPUs, NVLink 6, and rack-scale NVL systems.
- NVIDIA's newsroom announcement positions Vera Rubin as the successor platform to Blackwell for future AI factories.

## Resources
- [NVIDIA Vera Rubin](https://www.nvidia.com/en-us/data-center/technologies/rubin/)
- [Vera Rubin Newsroom Announcement](https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform)
