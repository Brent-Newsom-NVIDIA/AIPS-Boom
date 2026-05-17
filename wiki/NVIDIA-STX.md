# NVIDIA STX

**Type:** Architecture
**Tags:** NVIDIA, STX, AI storage, BlueField-4, Spectrum-X, AI Data Platform, context memory, AI factory
**Related:** [[NVIDIA-AI-Data-Platform]], [[NVIDIA-CMX]], [[NVIDIA-Vera-Rubin-POD]], [[NVIDIA-Groq-3-LPX]], [[NVIDIA-Spectrum-6-SPX]], [[NVIDIA-Certified-Storage]], [[DOCA-SNAP]], [[GPU-Direct-Storage]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-BlueField-4]], [[NVIDIA-ConnectX-9]], [[NVIDIA-Spectrum-X]], [[NVIDIA-DOCA]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://www.nvidia.com/en-us/data-center/ai-storage/stx/, https://nvidianews.nvidia.com/news/nvidia-launches-bluefield-4-stx-storage-architecture-with-broad-industry-adoption, https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/
**Last Updated:** 2026-05-09

## Summary
NVIDIA STX is a modular reference architecture for AI-native storage and data platforms. NVIDIA positions STX as the storage and data infrastructure layer that bridges large-scale AI compute with enterprise data, using BlueField-4, Spectrum-X Ethernet, accelerated computing, and AI software to support training, analytics, retrieval, and real-time agentic inference.

## Detail

### Purpose
Traditional storage infrastructure can become a bottleneck for long-context agents, retrieval-heavy workloads, and AI factories that need data close to large GPU clusters. STX gives storage partners a modular NVIDIA reference architecture for building AI-native data platforms with acceleration at every layer.

### Core ideas
- Bring compute and acceleration closer to the data layer.
- Use BlueField-4-class DPUs for storage, security, NVMe, integrity, encryption, and context-memory services.
- Use [[NVIDIA-Spectrum-X]] Ethernet for high-throughput, low-latency AI data movement.
- Integrate with [[NVIDIA-CMX]] for context memory and key-value cache workflows.
- Connect to [[NVIDIA-AI-Data-Platform]] reference designs for enterprise retrieval and AI data access.
- Support AI factory workloads across training, analytics, RAG, and agentic inference.
- In [[NVIDIA-Vera-Rubin-POD]], the BlueField-4 STX rack hosts [[NVIDIA-CMX]] context memory storage so LPX/Rubin inference can reuse long-context KV-cache state.

### Ecosystem
NVIDIA says STX is co-designed with leading storage partners. The public STX page lists partners including AIC, Cloudian, DDN, Dell, Everpure, Hitachi Vantara, HPE, IBM, MinIO, NetApp, Nutanix, QCT, Supermicro, VAST Data, and WEKA. The press release also names early AI/cloud adopters for context-memory storage.

### NVIDIA context
STX should be linked whenever the wiki discusses next-generation AI factory storage, context memory, [[NVIDIA-AI-Data-Platform]], [[NVIDIA-CMX]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-Spectrum-X]], [[NVIDIA-DOCA]], or [[NVIDIA-Certified-Storage]].

## Connections
- [[NVIDIA-AI-Data-Platform]] - STX is a foundation for AI-native data platform reference designs.
- [[NVIDIA-CMX]] - CMX is the context-memory storage platform connected to STX.
- [[NVIDIA-Vera-Rubin-POD]] - BlueField-4 STX rack is one of the POD-scale systems.
- [[NVIDIA-Groq-3-LPX]] - LPX inference accelerator benefits from STX/CMX context memory for long-context serving.
- [[NVIDIA-Spectrum-6-SPX]] - network rack connecting STX storage with compute and inference racks.
- [[NVIDIA-Certified-Storage]] - storage partners and certified storage are adjacent to STX deployment paths.
- [[DOCA-SNAP]] - SNAP is the DOCA storage virtualization service family below STX-style storage systems.
- [[GPU-Direct-Storage]] - direct GPU storage paths complement STX's goal of AI-native data movement.
- [[NVIDIA-BlueField-DPU]] - BlueField is the DPU foundation for STX acceleration and offload.
- [[NVIDIA-BlueField-4]] - current BlueField generation named in STX/CMX public material.
- [[NVIDIA-ConnectX-9]] - next-generation adapter direction for high-bandwidth AI data fabrics.
- [[NVIDIA-Spectrum-X]] - Ethernet AI networking layer for STX storage and data movement.
- [[NVIDIA-DOCA]] - software layer for BlueField-based infrastructure acceleration.
- [[NVIDIA-Enterprise-AI-Factory]] - STX addresses the storage and data bottlenecks of agentic AI factories.

## Source Excerpts
- NVIDIA's STX page describes STX as a modular reference architecture for AI-native storage and data platforms.
- NVIDIA's newsroom announcement says STX is intended for long-context agentic AI infrastructure and is co-designed with storage and manufacturing partners.

## Resources
- [NVIDIA STX](https://www.nvidia.com/en-us/data-center/ai-storage/stx/)
- [STX Newsroom Announcement](https://nvidianews.nvidia.com/news/nvidia-launches-bluefield-4-stx-storage-architecture-with-broad-industry-adoption)
