# NVIDIA DGX Station

**Type:** Platform
**Tags:** NVIDIA, DGX Station, GB300, Grace Blackwell Ultra, deskside AI supercomputer, NVLink-C2C, ConnectX-8, MIG
**Related:** [[NVIDIA-DGX]], [[NVIDIA-DGX-Spark]], [[NVIDIA-DGX-B300]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Grace-CPU]], [[NVLink]], [[NVIDIA-MIG]], [[NVIDIA-RTX-PRO-Server]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-NemoClaw]], [[NVIDIA-OpenShell]], [[NVIDIA-AI-Workbench]]
**Sources:** https://www.nvidia.com/en-us/products/workstations/dgx-station/
**Last Updated:** 2026-04-29

## Summary
NVIDIA DGX Station is NVIDIA's deskside AI supercomputer for local development and execution of large AI workloads. The current DGX Station generation is powered by the NVIDIA GB300 Grace Blackwell Ultra Desktop Superchip, combines a Blackwell Ultra GPU with a Grace CPU over NVLink-C2C, provides 748 GB of coherent memory, and is positioned for local training, fine-tuning, inference, and long-running agent workloads that can later scale to the data center or cloud.

## Detail

### Purpose
DGX Station fills the gap between a compact desktop AI system and full data center DGX infrastructure. It gives developers, researchers, and data scientists a local platform for large models, multi-user development, and AI software validation without requiring immediate access to rack-scale infrastructure.

### Platform role
- Uses a GB300 Grace Blackwell Ultra Desktop Superchip with a Blackwell Ultra GPU connected to a Grace CPU through [[NVLink]]-C2C.
- Provides 748 GB coherent memory across GPU and CPU memory pools for large models and data science workloads.
- Delivers up to 20 PFLOPS of FP4 AI compute performance according to NVIDIA's current product page.
- Includes an optimized Ubuntu environment with NVIDIA AI Developer Tools and CUDA-X libraries.
- Uses NVIDIA ConnectX-8 SuperNIC networking with up to 800 Gb/s connectivity and support for linking two DGX Stations.
- Supports [[NVIDIA-MIG]] partitioning into as many as seven isolated instances for local multi-user development.
- Can be configured with an additional NVIDIA RTX PRO Blackwell Generation GPU for visualization, simulation, and ray-traced workflows.

### NVIDIA software context
DGX Station is a local AI factory development platform. It sits near [[NVIDIA-DGX-Spark]] for personal AI development, [[NVIDIA-DGX-B300]] and [[NVIDIA-GB300-NVL72]] for production AI factory infrastructure, and [[NVIDIA-AI-Enterprise]] for supported enterprise software. NVIDIA also positions DGX Station with [[NVIDIA-NemoClaw]] and [[NVIDIA-OpenShell]] for safer local autonomous agents.

### Current docs notes
The current public DGX Station product page emphasizes the new Grace Blackwell Ultra deskside system. Older DGX Station A100/V100 user guides still exist, but this page tracks the latest current DGX Station generation rather than legacy workstation generations.

## Connections
- [[NVIDIA-DGX]] - DGX Station is the deskside DGX family member.
- [[NVIDIA-DGX-Spark]] - DGX Spark is the smaller GB10 personal AI system.
- [[NVIDIA-DGX-B300]] - DGX B300 is the data center DGX Blackwell Ultra system.
- [[NVIDIA-GB300-NVL72]] - DGX Station uses GB300-class Grace Blackwell Ultra technology in a local system shape.
- [[NVIDIA-Blackwell-Architecture]] - Blackwell Ultra tensor cores and NVFP4 are key DGX Station capabilities.
- [[NVIDIA-Grace-CPU]] - Grace CPU plus Blackwell Ultra GPU coherent memory is central to DGX Station.
- [[NVLink]] - NVLink-C2C connects the GPU and CPU in the Grace Blackwell Ultra superchip.
- [[NVIDIA-MIG]] - MIG enables local multi-user partitioning.
- [[NVIDIA-RTX-PRO-Server]] - optional RTX PRO GPUs connect DGX Station to RTX visualization and simulation workflows.
- [[NVIDIA-AI-Enterprise]] - enterprise AI software stack for supported development and deployment.
- [[NVIDIA-NemoClaw]] and [[NVIDIA-OpenShell]] - local secure agent development path.

## Source Excerpts
- NVIDIA's DGX Station page describes a GB300 Grace Blackwell Ultra deskside AI supercomputer with 748 GB coherent memory, up to 20 PFLOPS FP4 AI compute, ConnectX-8 networking, MIG support, and preconfigured NVIDIA AI software.

## Resources
- [NVIDIA DGX Station](https://www.nvidia.com/en-us/products/workstations/dgx-station/)
