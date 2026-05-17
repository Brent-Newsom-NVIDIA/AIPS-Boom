# NVIDIA BlueField-4

**Type:** Technology
**Tags:** NVIDIA, BlueField-4, DPU, DOCA, STX, CMX, AI storage, AI factory, security
**Related:** [[NVIDIA-BlueField-DPU]], [[NVIDIA-DOCA]], [[NVIDIA-STX]], [[NVIDIA-CMX]], [[NVIDIA-Vera-Rubin-POD]], [[NVIDIA-Spectrum-6-SPX]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-ConnectX-9]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://www.nvidia.com/en-us/networking/products/data-processing-unit/, https://www.nvidia.com/en-us/data-center/ai-storage/stx/, https://www.nvidia.com/en-us/data-center/ai-storage/cmx/, https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/
**Last Updated:** 2026-05-09

## Summary
NVIDIA BlueField-4 is the next-generation DPU in NVIDIA's BlueField family, positioned for AI factory infrastructure, AI-native storage, context memory, security, networking, and offload. Current public NVIDIA pages connect BlueField-4 directly to [[NVIDIA-STX]] and [[NVIDIA-CMX]] designs for storage/context processing.

## Detail

### Purpose
BlueField-4 extends the BlueField DPU role from host networking and infrastructure offload into AI-native data infrastructure. In NVIDIA's latest public material it appears as a storage/context processor that can manage NVMe, integrity, encryption, key-value cache, and low-latency access paths for agentic AI workloads.

### Current public positioning
- DPU generation following BlueField-3.
- Used in [[NVIDIA-STX]] AI-native storage reference architecture.
- Used in [[NVIDIA-CMX]] context memory storage platform.
- Used in the [[NVIDIA-Vera-Rubin-POD]] BlueField-4 STX rack, which hosts CMX context memory storage for POD-scale agentic inference.
- Works with [[NVIDIA-DOCA]] software and DOCA Memos for context/KV-cache workflows.
- Fits [[NVIDIA-AI-Data-Platform]] and [[NVIDIA-Enterprise-AI-Factory]] designs where storage, security, networking, and compute are co-designed.

### NVIDIA context
Use [[NVIDIA-BlueField-DPU]] as the family-level page. Use this page when the current generation matters: STX, CMX, BlueField-4-powered storage, context memory, AI data platforms, and future rack-scale AI factory networking.

## Connections
- [[NVIDIA-BlueField-DPU]] - family page covering BlueField generations and DPU concepts.
- [[NVIDIA-DOCA]] - software framework for BlueField programming and infrastructure services.
- [[NVIDIA-STX]] - STX uses BlueField-4 for AI-native storage acceleration.
- [[NVIDIA-CMX]] - CMX uses BlueField-4 for context memory and KV-cache storage.
- [[NVIDIA-Vera-Rubin-POD]] - BlueField-4 STX rack is one of the POD's five rack-scale systems.
- [[NVIDIA-Spectrum-6-SPX]] - networking rack adjacent to BlueField-4 STX in Vera Rubin POD.
- [[NVIDIA-AI-Data-Platform]] - BlueField-4 supports accelerated enterprise storage and retrieval designs.
- [[NVIDIA-ConnectX-9]] - adjacent next-generation network adapter in NVIDIA data center networking.
- [[NVIDIA-Spectrum-X]] - Ethernet AI fabric connected to BlueField-4 data paths.

## Source Excerpts
- NVIDIA's STX and CMX pages identify BlueField-4 as the storage/context processor in AI-native data platform designs.

## Resources
- [NVIDIA BlueField DPU](https://www.nvidia.com/en-us/networking/products/data-processing-unit/)
- [NVIDIA STX](https://www.nvidia.com/en-us/data-center/ai-storage/stx/)
- [NVIDIA CMX](https://www.nvidia.com/en-us/data-center/ai-storage/cmx/)
