# NVIDIA HGX

**Type:** Platform
**Tags:** NVIDIA, GPU, Hardware, HGX, Blackwell, Rubin, Data Center, SXM, Multi-GPU
**Related:** [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Vera-Rubin]], [[NVIDIA-Vera-Rubin-POD]], [[NVIDIA-Vera-CPU]], [[NVLink]], [[NVIDIA-GB200-NVL72]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-HGX-AI-Factory]], [[NVIDIA-DGX]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Spectrum-X-Validated-Solution-Stack]], [[NVIDIA-Quantum-X800-InfiniBand]], [[NCCL]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-ConnectX-9]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-BlueField-4]]
**Sources:** NVIDIA official product page (live fetch 2026-04-10; updated from https://www.nvidia.com/en-us/data-center/hgx/, https://www.nvidia.com/en-us/data-center/technologies/rubin/, https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/index.html, https://docs.nvidia.com/networking/software/spectrumx-solution-stack/index.html, https://www.nvidia.com/en-us/networking/products/infiniband/quantum-x800/)
**Last Updated:** 2026-05-09

## Summary
NVIDIA HGX is a high-performance multi-GPU baseboard platform designed for AI training, inference, and HPC in data center servers. It connects 8 GPUs via NVLink in an SXM form factor, enabling OEM and ODM server builders to create NVIDIA-validated AI compute nodes. The platform spans multiple GPU generations including Blackwell (B200, B300) and Rubin.

## Detail

### Purpose
Provides a standardized, NVIDIA-validated multi-GPU baseboard that OEMs and ODMs use to build GPU-accelerated servers. Unlike DGX (NVIDIA's complete turnkey system), HGX is the GPU board that goes into third-party server designs.

### Current Configurations

| System | GPU Gen | NVLink Gen | GPU-to-GPU BW | Total NVLink BW | Total Memory |
|---|---|---|---|---|---|
| HGX Rubin NVL8 | Rubin | 6th Gen | 3.6 TB/s | 28.8 TB/s | 2.3 TB |
| HGX B300 | Blackwell Ultra | 5th Gen | 1.8 TB/s | 14.4 TB/s | 2.1 TB |
| HGX B200 | Blackwell | 5th Gen | 1.8 TB/s | 14.4 TB/s | 1.4 TB |

### Key Features
- 8x SXM GPU form factor per baseboard
- Fifth/sixth-generation NVLink for all-to-all GPU communication
- Optional NVIDIA Vera CPU or x86-based CPU baseboard pairing
- Advanced networking: up to 800 Gb/s (Quantum-X800 InfiniBand or Spectrum-X Ethernet)
- NVIDIA BlueField-3 DPU integration for networking and security services
- Validated reference designs for major server OEMs (Dell, HPE, Lenovo, Supermicro, etc.)

### Performance (HGX Rubin NVL8 vs HGX B200)
- **5.5x** more NVFP4 inference performance
- **3.5x** higher inference performance vs. prior generation
- **2.6x** higher LLM training performance
- **2x** attention (transformer) performance improvement
- Current public materials connect HGX B300 and HGX Rubin NVL8 to Blackwell Ultra and Vera Rubin platform roadmaps rather than requiring separate wiki pages for every HGX baseboard variant.
- The current [[NVIDIA-HGX-AI-Factory]] Enterprise RA turns HGX B300 into a 2-8-9-800 AI factory pattern with Spectrum-X, ConnectX-8, BlueField-3, AI Enterprise, Run:ai, and NetQ.
- [[NVIDIA-Spectrum-X-Validated-Solution-Stack]] includes B300/HGX-adjacent Spectrum-X stack validation signals, while [[NVIDIA-Quantum-X800-InfiniBand]] is the InfiniBand counterpart for 800 Gb/s AI networking.

### Use Cases
- Large language model training (up to multi-node scale)
- Generative AI inference
- High-performance computing and simulation
- Enterprise AI at scale

### Target Customers
OEM server builders (Dell, HPE, Lenovo, Supermicro, etc.) and their data center customers who want NVIDIA-validated GPU compute in their own server chassis and management ecosystem.

### Relationship to DGX
HGX is the GPU baseboard; DGX is NVIDIA's complete turnkey system built around the same GPU technology. HGX gives OEMs flexibility on chassis, cooling, and management software.

## Connections
- [[NVIDIA-Blackwell-Architecture]] — current GPU generation powering HGX B200/B300
- [[NVIDIA-Vera-Rubin]] — next-generation Rubin platform includes HGX Rubin NVL8.
- [[NVIDIA-Vera-CPU]] — Vera CPU is the CPU component listed in Vera Rubin/HGX direction.
- [[NVLink]] — 5th/6th-gen NVLink connects the 8 GPUs on each baseboard
- [[NVIDIA-GB200-NVL72]] — rack-scale alternative using Grace Blackwell Superchips
- [[NVIDIA-GB300-NVL72]] — Blackwell Ultra rack-scale counterpart to HGX B300.
- [[NVIDIA-HGX-AI-Factory]] — Enterprise RA that uses HGX B300 systems as scalable AI factory nodes.
- [[NVIDIA-Spectrum-X]] and [[NVIDIA-Spectrum-X-Validated-Solution-Stack]] — Ethernet AI factory fabric and validated stack path for HGX/B300 deployments.
- [[NVIDIA-Quantum-X800-InfiniBand]] — 800 Gb/s InfiniBand fabric counterpart for large-scale systems.
- [[NVIDIA-DGX]] — NVIDIA's complete turnkey system using same GPU tech
- [[NCCL]] — multi-GPU communications across HGX nodes
- [[NVIDIA-ConnectX-InfiniBand]] — Quantum-X800 for inter-node networking
- [[NVIDIA-ConnectX-9]] — next-generation SuperNIC for 1.6 Tb/s-class AI networking.
- [[NVIDIA-BlueField-DPU]] — integrated DPU for networking offload
- [[NVIDIA-BlueField-4]] — next-generation DPU relevant to future HGX/Rubin storage and networking designs.

## Resources
- [Official HGX Page](https://www.nvidia.com/en-us/data-center/hgx/)
- [Blackwell Architecture](https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/)
- [NVIDIA HGX AI Factory](https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/index.html)
