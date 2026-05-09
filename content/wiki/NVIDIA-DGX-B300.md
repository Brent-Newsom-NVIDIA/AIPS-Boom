# NVIDIA DGX B300

**Type:** Platform
**Tags:** NVIDIA, DGX B300, Blackwell Ultra, DGX, GB300, AI factory, enterprise AI
**Related:** [[NVIDIA-DGX]], [[NVIDIA-DGX-B200]], [[NVIDIA-DGX-BasePOD]], [[NVIDIA-DGX-Enterprise-Support]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]], [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]], [[NVIDIA-DGX-Station]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Mission-Control]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Spectrum-X-Validated-Solution-Stack]], [[NVIDIA-Quantum-X800-InfiniBand]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://www.nvidia.com/en-us/data-center/dgx-b300/, https://docs.nvidia.com/dgx/dgxb300-user-guide/introduction-to-dgxb300.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/index.html, https://www.nvidia.com/en-us/data-center/gb300-nvl72/, https://www.nvidia.com/en-us/data-center/dgx-superpod/, https://www.nvidia.com/en-us/data-center/dgx-basepod/, https://www.nvidia.com/en-us/data-center/dgx-support/
**Last Updated:** 2026-05-09

## Summary
NVIDIA DGX B300 is NVIDIA's DGX system generation built around Blackwell Ultra/GB300 infrastructure. It extends [[NVIDIA-DGX-B200]] and GB200 NVL72 into a newer AI factory platform for large training, inference, and enterprise AI deployments, and it is now the basis for current DGX SuperPOD B300 reference architectures.

## Detail

### Purpose
DGX B300 gives organizations a supported NVIDIA system path for Blackwell Ultra AI factories. It combines dense GPU compute with NVLink, NVIDIA networking, storage partnerships, system software, and operations tools.

### Platform role
- DGX-branded system path for Blackwell Ultra.
- Related to [[NVIDIA-GB300-NVL72]] for rack-scale NVLink deployment.
- Deployable within [[NVIDIA-DGX-BasePOD]] and [[NVIDIA-DGX-SuperPOD]]-style enterprise AI factory patterns, including [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]] and [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]].
- Deployment target for [[NVIDIA-AI-Enterprise]], NIM, NeMo, Dynamo, and enterprise AI applications.
- Operated in large deployments with [[NVIDIA-Mission-Control]], BaseOS, Base Command Manager, DCGM, and fabric/storage tools.

### Hardware notes
- DGX B300 systems use eight NVIDIA B300 Blackwell Ultra GPUs.
- The DGX B300 user guide lists 8 x 288 GB GPU memory for 2.3 TB total GPU memory.
- Feature summary includes 72 PFLOPS FP8 training and 144 PFLOPS FP4 inference.
- Networking includes eight OSFP ports connected to eight ConnectX-8 cards for cluster networking at up to 800 Gb/s InfiniBand/Ethernet, plus two dual-port [[NVIDIA-BlueField-DPU]] BlueField-3 DPUs for storage and management networks at up to 400 Gb/s.
- The docs list DGX OS 7 based on Ubuntu 24.04 LTS, with additional Ubuntu and Red Hat Enterprise Linux support.

### NVIDIA context
Use this page for the DGX product/system identity. Use [[NVIDIA-GB300-NVL72]] for rack-scale NVL72 architecture and [[NVIDIA-Blackwell-Architecture]] for GPU architecture context.

## Connections
- [[NVIDIA-DGX]] - DGX B300 is part of the DGX systems family.
- [[NVIDIA-DGX-B200]] - DGX B200 is the previous Blackwell DGX system generation.
- [[NVIDIA-DGX-BasePOD]] - enterprise reference architecture path for DGX deployments.
- [[NVIDIA-DGX-Enterprise-Support]] - support and services layer for DGX B300 operations.
- [[NVIDIA-GB300-NVL72]] - rack-scale Blackwell Ultra system adjacent to DGX B300 deployments.
- [[NVIDIA-DGX-SuperPOD]] - SuperPOD provides the scale-out AI factory pattern.
- [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]] - Spectrum-4/DC-busbar SuperPOD design for DGX B300.
- [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]] - Quantum-X800/AC-power SuperPOD design for DGX B300.
- [[NVIDIA-DGX-Station]] - local GB300 deskside development counterpart.
- [[NVIDIA-Blackwell-Architecture]] - Blackwell Ultra extends the Blackwell architecture family.
- [[NVIDIA-Mission-Control]] - operations platform for current DGX/NVL72 environments.
- [[NVIDIA-AI-Enterprise]] - production AI software stack for DGX systems.
- [[NVIDIA-Spectrum-X]] and [[NVIDIA-Spectrum-X-Validated-Solution-Stack]] - Ethernet AI factory fabric and validated stack for B300 deployments.
- [[NVIDIA-Quantum-X800-InfiniBand]] - 800 Gb/s InfiniBand option in B300 SuperPOD designs.
- [[NVIDIA-BlueField-DPU]] - DPU path for storage and management networking.
- [[NVIDIA-Enterprise-AI-Factory]] - DGX B300 is an AI factory infrastructure building block.

## Source Excerpts
- NVIDIA's DGX B300 page positions the system as a Blackwell Ultra DGX platform for AI factory-scale workloads.
- The DGX B300 user guide lists eight B300 GPUs, 2.3 TB total GPU memory, ConnectX-8 cluster networking, BlueField-3 storage/management networking, and DGX OS 7 based on Ubuntu 24.04 LTS.

## Resources
- [NVIDIA DGX B300](https://www.nvidia.com/en-us/data-center/dgx-b300/)
