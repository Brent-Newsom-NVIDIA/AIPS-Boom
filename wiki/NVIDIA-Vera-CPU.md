# NVIDIA Vera CPU

**Type:** Architecture
**Tags:** NVIDIA, Vera CPU, Arm, NVLink-C2C, Vera Rubin, data center CPU, AI factory
**Related:** [[NVIDIA-Vera-Rubin]], [[NVIDIA-Data-Center-CPUs]], [[NVIDIA-Grace-CPU]], [[NVLink]], [[NVIDIA-HGX]], [[NVIDIA-DGX-SuperPOD]]
**Sources:** https://www.nvidia.com/en-us/data-center/technologies/rubin/, https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform
**Last Updated:** 2026-04-29

## Summary
NVIDIA Vera CPU is the custom Arm CPU in the Vera Rubin platform. NVIDIA lists Vera as an 88-core CPU designed to connect to Rubin GPUs with high-bandwidth NVLink-C2C links for AI factory systems such as Vera Rubin NVL144 and HGX Rubin NVL8.

## Detail

### Purpose
Vera continues NVIDIA's CPU strategy after Grace: build CPUs that are co-designed with NVIDIA GPUs, memory systems, and NVLink rather than treating the CPU as a generic host processor. In Vera Rubin systems, the CPU handles orchestration, data movement, and CPU-side work close to a large GPU memory and interconnect domain.

### Current public details
- 88 custom Arm cores in current NVIDIA Vera Rubin materials.
- High-bandwidth CPU-to-GPU connectivity through NVLink-C2C.
- Part of Vera Rubin NVL144 and HGX Rubin NVL8 platform designs.
- Successor direction to [[NVIDIA-Grace-CPU]] in NVIDIA data center CPU systems.

### NVIDIA context
Vera should be tracked in the wiki as part of [[NVIDIA-Data-Center-CPUs]] and [[NVIDIA-Vera-Rubin]], not as a general Arm CPU. It is specifically relevant to AI factory systems where CPUs, GPUs, NVLink, memory, networking, and software are co-designed.

## Connections
- [[NVIDIA-Vera-Rubin]] - Vera CPU is the CPU component of the Vera Rubin platform.
- [[NVIDIA-Data-Center-CPUs]] - umbrella page for NVIDIA data center CPU documentation and product direction.
- [[NVIDIA-Grace-CPU]] - predecessor NVIDIA data center CPU architecture.
- [[NVLink]] - NVLink-C2C is the CPU-to-GPU coherency path.
- [[NVIDIA-HGX]] - HGX Rubin NVL8 uses Vera CPU pairing in NVIDIA's public HGX platform direction.
- [[NVIDIA-DGX-SuperPOD]] - rack-scale AI factory systems depend on CPU/GPU co-design.

## Source Excerpts
- NVIDIA's Vera Rubin materials describe Vera as a custom Arm CPU with 88 cores and NVLink-C2C connectivity for Rubin GPU platforms.

## Resources
- [NVIDIA Vera Rubin](https://www.nvidia.com/en-us/data-center/technologies/rubin/)
