# NVIDIA DGX B200

**Type:** Platform
**Tags:** NVIDIA, DGX B200, Blackwell, DGX, AI factory, NVLink, BlueField-3, ConnectX-7, AI Enterprise, Mission Control
**Related:** [[NVIDIA-DGX]], [[NVIDIA-DGX-B300]], [[NVIDIA-DGX-BasePOD]], [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-GB200-NVL72]], [[NVIDIA-Mission-Control]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-Spectrum-X]], [[NVLink]], [[NVIDIA-MIG]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://www.nvidia.com/en-us/data-center/dgx-b200/, https://docs.nvidia.com/dgx/dgxb200-user-guide/, https://docs.nvidia.com/dgx-basepod/reference-architecture-infrastructure-foundation-enterprise-ai/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/index.html
**Last Updated:** 2026-05-09

## Summary
NVIDIA DGX B200 is NVIDIA's Blackwell-generation DGX system for enterprise AI factories. It combines eight NVIDIA Blackwell GPUs, fifth-generation NVLink/NVSwitch, NVIDIA networking, DGX software, [[NVIDIA-Mission-Control]], and [[NVIDIA-AI-Enterprise]] into a unified develop-to-deploy platform for training, fine-tuning, inference, recommender systems, and chatbots.

## Detail

### Purpose
DGX B200 is the DGX system layer between Hopper-generation DGX H100/H200 and Blackwell Ultra systems such as [[NVIDIA-DGX-B300]]. Use this page for the DGX B200 product/system identity, while [[NVIDIA-Blackwell-Architecture]] covers the GPU architecture and [[NVIDIA-GB200-NVL72]] covers the rack-scale Grace Blackwell NVL72 system.

### Key specifications
- Eight NVIDIA Blackwell GPUs with 1,440 GB total HBM3e memory and 64 TB/s HBM3e bandwidth.
- FP4 Tensor Core performance listed as 144 PFLOPS sparse / 72 PFLOPS dense.
- FP8 Tensor Core performance listed as 72 PFLOPS sparse.
- Two NVIDIA NVSwitch devices with 14.4 TB/s aggregate NVLink bandwidth.
- Two Intel Xeon Platinum 8570 processors, 112 total CPU cores, and 2 TB system memory configurable to 4 TB.
- Four OSFP ports serving eight single-port [[NVIDIA-ConnectX-InfiniBand]] ConnectX-7 VPI adapters for up to 400 Gb/s InfiniBand/Ethernet.
- Two dual-port QSFP112 [[NVIDIA-BlueField-DPU]] BlueField-3 DPUs for storage and management networking.
- DGX OS / Ubuntu operating system, [[NVIDIA-AI-Enterprise]] optimized AI software, and [[NVIDIA-Mission-Control]] operations/orchestration with Run:ai technology.

### NVIDIA context
DGX B200 is the foundation of Blackwell-era DGX deployments and connects directly to [[NVIDIA-DGX-BasePOD]] and [[NVIDIA-DGX-SuperPOD]] as enterprise AI factory reference patterns. It should be discussed together with [[NVIDIA-DGX-B300]] when comparing Blackwell versus Blackwell Ultra system choices, and with [[NVIDIA-GB200-NVL72]] when a customer needs rack-scale Grace Blackwell NVLink domains.

### Reference architecture placement
- [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]] uses DGX B200 as a two-to-eight-node enterprise AI infrastructure option with NDR400 InfiniBand.
- [[NVIDIA-DGX-SuperPOD-B200-RA]] uses 32 DGX B200 systems per scalable unit for Blackwell-generation SuperPOD deployments.
- [[NVIDIA-DGX-SuperPOD-GB200-RA]] is the adjacent rack-scale Grace Blackwell path when the customer needs NVLink 5 across 72 GPUs per rack.

## Connections
- [[NVIDIA-DGX]] - parent DGX systems family.
- [[NVIDIA-DGX-B300]] - Blackwell Ultra successor system with B300 GPUs.
- [[NVIDIA-DGX-BasePOD]] - prescriptive DGX reference architecture for enterprise AI infrastructure.
- [[NVIDIA-DGX-SuperPOD]] - scale-out DGX AI supercomputing architecture.
- [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]] - current BasePOD RA including DGX B200.
- [[NVIDIA-DGX-SuperPOD-B200-RA]] - current B200 SuperPOD RA.
- [[NVIDIA-DGX-SuperPOD-GB200-RA]] - rack-scale Grace Blackwell SuperPOD RA.
- [[NVIDIA-Blackwell-Architecture]] - GPU architecture foundation for DGX B200.
- [[NVIDIA-GB200-NVL72]] - rack-scale Grace Blackwell system generation adjacent to DGX B200.
- [[NVIDIA-Mission-Control]] - AI factory operations stack bundled into the DGX B200 software story.
- [[NVIDIA-AI-Enterprise]] - production AI software and enterprise support layer.
- [[NVIDIA-BlueField-DPU]] - storage and management network DPU role in DGX B200.
- [[NVIDIA-ConnectX-InfiniBand]] - ConnectX-7 VPI networking used for cluster connectivity.
- [[NVIDIA-Quantum-InfiniBand]] and [[NVIDIA-Spectrum-X]] - InfiniBand and Ethernet fabric choices around B200 BasePOD/SuperPOD designs.
- [[NVLink]] - in-node GPU interconnect and NVSwitch fabric.
- [[NVIDIA-MIG]] - GPU partitioning technology relevant to Blackwell system utilization.
- [[NVIDIA-Enterprise-AI-Factory]] - DGX B200 is a Blackwell system building block for enterprise AI factories.

## Source Excerpts
- NVIDIA describes DGX B200 as the foundation for an AI factory and a unified AI platform for develop-to-deploy pipelines.
- The product page lists eight Blackwell GPUs, 1,440 GB total GPU memory, 14.4 TB/s aggregate NVLink bandwidth, ConnectX-7 VPI networking, BlueField-3 DPUs, AI Enterprise, Mission Control, and DGX OS.

## Resources
- [NVIDIA DGX B200](https://www.nvidia.com/en-us/data-center/dgx-b200/)
