# NVIDIA HGX AI Factory

**Type:** Reference Architecture
**Tags:** NVIDIA, HGX AI Factory, Enterprise Reference Architecture, HGX B300, Blackwell Ultra, Spectrum-X, ConnectX-8, BlueField-3
**Related:** [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-Enterprise-RA-Partner-Endorsed-Designs]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-HGX]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[NVIDIA-Spectrum-X]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-Certified-Systems]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Run-ai]], [[NVIDIA-NetQ]], [[NVLink]], [[GPUDirect-RDMA]], [[GPU-Direct-Storage]]
**Sources:** https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/index.html, https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/abstract.html, https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/overview.html, https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/components.html, https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/software.html, https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/nvidia-certified-storage.html
**Last Updated:** 2026-05-17

## Summary
NVIDIA HGX AI Factory is a current NVIDIA Enterprise Reference Architecture for building scalable AI factories with NVIDIA HGX B300 systems and Spectrum-X networking. It uses a 2-8-9-800 pattern with two CPUs, eight Blackwell Ultra GPUs, and nine network adapters at 800 Gb/s bandwidth per GPU class, with design points up to 128 nodes and 1024 B300 SXM GPUs.

## Detail

### Purpose
The HGX AI Factory pattern targets enterprise AI inference, AI training and fine-tuning, large-scale data analytics, and HPC workloads that need HGX-class bandwidth and multi-node scale in partner-built systems.

### Architecture notes
- The RA is based on NVIDIA-Certified HGX B300 systems, each with eight B300 SXM GPUs.
- HGX B300 baseboards use fifth-generation NVLink and NVSwitch with 14.4 TB/s total aggregate interconnect bandwidth and 1.8 TB/s GPU-to-GPU bandwidth.
- The documented pattern uses four-node scalable units and can scale to 32 SUs.
- ConnectX-8 SuperNICs support east-west GPU compute networking; BlueField-3 DPUs support north-south/customer and storage traffic.
- The design keeps Kubernetes central and treats software support as an [[NVIDIA-AI-Enterprise]] and [[NVIDIA-Run-ai]] subscription path.
- Current partner endorsed HGX implementations include Cisco UCS C885A/C885A M8, Dell PowerEdge XE9680, Lenovo ThinkSystem SR680a V3, and Supermicro SYS-A22GA-NBRT-G1/SYS-822GS-NB3RT designs tracked in [[NVIDIA-Enterprise-RA-Partner-Endorsed-Designs]].

### Software stack
The HGX AI Factory software page points to [[NVIDIA-AI-Enterprise]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Run-ai]], and [[NVIDIA-NetQ]]. The broader software pattern belongs in [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], while monitoring belongs in [[NVIDIA-Enterprise-RA-Observability-Guide]].

### NVIDIA context
This page is the canonical wiki target for the HGX B300 Enterprise RA. Use [[NVIDIA-HGX]] for the platform/baseboard identity and [[NVIDIA-Enterprise-AI-Factory]] for the higher-level AI factory strategy.

## Connections
- [[NVIDIA-Enterprise-Reference-Architectures]] - program-level RA hub.
- [[NVIDIA-Enterprise-RA-Partner-Endorsed-Designs]] - partner-endorsed OEM implementations for HGX H200/B200/B300 RA patterns.
- [[NVIDIA-Enterprise-AI-Factory]] - strategy-level AI factory page.
- [[NVIDIA-HGX]] - canonical platform page for HGX baseboards.
- [[NVIDIA-Blackwell-Architecture]] - B300 is the Blackwell Ultra generation.
- [[NVIDIA-AI-Enterprise]] - supported software and subscription layer.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - shared software stack across RA hardware.
- [[NVIDIA-Enterprise-RA-Observability-Guide]] - monitoring and alerting design for RA environments.
- [[NVIDIA-Spectrum-X]] - Ethernet fabric used in the RA.
- [[NVIDIA-BlueField-DPU]] - converged infrastructure, security, and storage/network offload role.
- [[NVIDIA-Certified-Systems]] - partner server validation baseline.
- [[NVIDIA-Certified-Storage]] - validated storage integration for GPU-intensive workloads.
- [[NVIDIA-Run-ai]] - GPU workload orchestration layer in the software stack.
- [[NVIDIA-NetQ]] - network operations and fabric validation.
- [[NVLink]] - local HGX GPU interconnect.
- [[GPUDirect-RDMA]] - low-latency network path for GPU-to-GPU scale-out.
- [[GPU-Direct-Storage]] - storage-to-GPU path used in data-heavy AI workloads.

## Source Excerpts
- NVIDIA describes the HGX AI Factory RA as a 2-8-9-800 design with HGX B300 servers, ConnectX-8 SuperNICs, BlueField-3 DPUs, and Spectrum-X Ethernet.
- The current overview says the design scales from four-node SUs up to 128 certified HGX B300 systems for 1024 B300 SXM GPUs.

## Resources
- [NVIDIA HGX AI Factory](https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/index.html)
- [HGX AI Factory Overview](https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/overview.html)
- [HGX AI Factory Software](https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/software.html)
