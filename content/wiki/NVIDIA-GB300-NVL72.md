# NVIDIA GB300 NVL72

**Type:** Platform
**Tags:** NVIDIA, GB300 NVL72, Blackwell Ultra, rack-scale AI, NVLink, DGX, AI factory
**Related:** [[NVIDIA-DGX-B300]], [[NVIDIA-DGX]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]], [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-GB200-NVL72]], [[NVIDIA-NVL72-AI-Factory]], [[NVIDIA-Mission-Control]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Spectrum-X-Validated-Solution-Stack]], [[NVIDIA-Quantum-X800-InfiniBand]], [[NVLink]], [[NVIDIA-Enterprise-AI-Factory]]
**Sources:** https://www.nvidia.com/en-us/data-center/gb300-nvl72/, https://www.nvidia.com/en-us/data-center/dgx-b300/, https://www.nvidia.com/en-us/data-center/hgx/, https://docs.nvidia.com/enterprise-reference-architectures/nvl72-ai-factory-with-gb300-nvl72-dual-plane-networking-architecture.pdf, https://docs.nvidia.com/networking/software/spectrumx-solution-stack/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/index.html
**Last Updated:** 2026-05-09

## Summary
NVIDIA GB300 NVL72 is NVIDIA's Blackwell Ultra rack-scale AI system configuration with 72 Blackwell Ultra GPUs connected as a single high-bandwidth NVLink domain. It follows the [[NVIDIA-GB200-NVL72]] pattern while increasing memory and performance for large-model training and inference.

## Detail

### Purpose
GB300 NVL72 targets AI factories that need rack-scale GPU memory, GPU-to-GPU bandwidth, and dense inference throughput. It is the Blackwell Ultra step between the original GB200/B200 generation and the later [[NVIDIA-Vera-Rubin]] platform.

### Public positioning
- Rack-scale NVL72 system form factor built for large-scale AI.
- Uses GB300 Blackwell Ultra generation GPUs and Grace CPU pairing.
- Fits DGX B300, DGX SuperPOD, HGX B300, and OEM/ODM rack-scale system directions.
- The [[NVIDIA-NVL72-AI-Factory]] Enterprise RA treats GB300 NVL72 as the rack-scale building block for 72-GPU scalable units and multi-rack Spectrum-X designs.
- Requires an operations and software stack around [[NVIDIA-Mission-Control]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-DGX-SuperPOD]], and AI factory networking/storage.
- [[NVIDIA-Spectrum-X-Validated-Solution-Stack]] tracks the current GB300 Spectrum-X software/firmware compatibility signal.
- SuperPOD-scale Blackwell Ultra choices are represented by [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]] and [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]] for DGX B300, and by [[NVIDIA-NVL72-AI-Factory]] for GB300 NVL72 Enterprise RA.

### NVIDIA context
Treat GB300 NVL72 as the canonical Blackwell Ultra rack-scale system page. Use [[NVIDIA-Blackwell-Architecture]] for architecture-level details and [[NVIDIA-DGX-B300]] for the DGX-branded system page.

## Connections
- [[NVIDIA-DGX-B300]] - DGX B300 is NVIDIA's DGX system path around Blackwell Ultra.
- [[NVIDIA-DGX]] - DGX systems are the broader product family.
- [[NVIDIA-DGX-SuperPOD]] - GB300 NVL72 fits SuperPOD-scale AI factory designs.
- [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]] and [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]] - adjacent B300 SuperPOD architecture choices.
- [[NVIDIA-Blackwell-Architecture]] - GB300 is Blackwell Ultra, extending the Blackwell family.
- [[NVIDIA-GB200-NVL72]] - predecessor rack-scale Blackwell NVL72 system.
- [[NVIDIA-NVL72-AI-Factory]] - Enterprise RA for GB300 NVL72 rack-scale AI factory deployments.
- [[NVIDIA-Mission-Control]] - operations layer for modern DGX/NVL72 environments.
- [[NVIDIA-Spectrum-X]] and [[NVIDIA-Spectrum-X-Validated-Solution-Stack]] - Ethernet AI factory fabric and validated GB300 stack path.
- [[NVIDIA-Quantum-X800-InfiniBand]] - InfiniBand option for large B300/Blackwell Ultra SuperPOD fabrics.
- [[NVLink]] - rack-scale NVLink is the defining interconnect.
- [[NVIDIA-Enterprise-AI-Factory]] - enterprise AI factory guidance includes this class of validated infrastructure.

## Source Excerpts
- NVIDIA's GB300 NVL72 and DGX B300 pages position GB300 as a Blackwell Ultra rack-scale AI system for large AI training and inference.

## Resources
- [NVIDIA GB300 NVL72](https://www.nvidia.com/en-us/data-center/gb300-nvl72/)
- [NVIDIA DGX B300](https://www.nvidia.com/en-us/data-center/dgx-b300/)
- [NVIDIA NVL72 AI Factory PDF](https://docs.nvidia.com/enterprise-reference-architectures/nvl72-ai-factory-with-gb300-nvl72-dual-plane-networking-architecture.pdf)
