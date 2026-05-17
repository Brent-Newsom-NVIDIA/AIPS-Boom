# NVIDIA Enterprise Reference Architectures

**Type:** Reference Architecture Program
**Tags:** NVIDIA, Enterprise Reference Architecture, AI factory, certified systems, Spectrum-X, AI Enterprise, Kubernetes
**Related:** [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-Enterprise-RA-Partner-Endorsed-Designs]], [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], [[NVIDIA-NVL72-AI-Factory]], [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]], [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[NVIDIA-AI-Factory-for-Government]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Certified-Systems]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Spectrum-X-Validated-Solution-Stack]], [[NVIDIA-Quantum-X800-InfiniBand]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Run-ai]], [[NVIDIA-NetQ]]
**Sources:** https://docs.nvidia.com/enterprise-reference-architectures/index.html, https://docs.nvidia.com/enterprise-reference-architectures/white-paper/latest/index.html, https://docs.nvidia.com/enterprise-reference-architectures/white-paper/latest/introduction.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/index.html, https://docs.nvidia.com/dgx-basepod/reference-architecture-infrastructure-foundation-enterprise-ai/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/index.html
**Last Updated:** 2026-05-17

## Summary
NVIDIA Enterprise Reference Architectures are NVIDIA-authored design patterns for building enterprise AI factories from validated compute, networking, storage, software, and operations components. The current docs hub groups the program into overview, hardware, software, observability, and deployment guides, and includes partner endorsed OEM designs that map Cisco, Dell, HPE, Lenovo, and Supermicro systems to Enterprise RA patterns.

## Detail

### Purpose
Enterprise RAs are meant to reduce the risk of building AI infrastructure from scratch. They give partners and enterprise customers prescriptive patterns for GPU node configurations, scalable units, network fabrics, storage expectations, Kubernetes-oriented software, and operational tooling.

### Current RA family
- [[NVIDIA-Enterprise-RA-Partner-Endorsed-Designs]] captures the current partner endorsed design matrix, endorsement criteria, OEM solution links, and recommendation logic for matching customer workloads to partner AI factory designs.
- [[NVIDIA-RTX-PRO-AI-Factory]] for RTX PRO 6000 Blackwell Server Edition systems using a 2-8-5-200 pattern.
- [[NVIDIA-HGX-AI-Factory]] for HGX B300 systems using a 2-8-9-800 pattern.
- [[NVIDIA-NVL72-AI-Factory]] for GB300 NVL72 rack-scale systems with NVLink domains and Spectrum-X networking.
- DGX infrastructure RAs are represented as separate canonical pages: [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]], and [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]].
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] for the common AI Enterprise software stack that runs across supported hardware.
- [[NVIDIA-Enterprise-RA-Observability-Guide]] for dashboarding, alerting, and telemetry across the RA stack.
- [[NVIDIA-AI-Factory-for-Government]] for government/high-assurance AI factory deployment architecture.
- [[Red-Hat-AI-Factory-with-NVIDIA]] as the OpenShift-specific AI Enterprise deployment track adjacent to the RA family.
- Application-level Enterprise RA papers are folded into their canonical topic pages, such as [[NVIDIA-Run-ai]], [[NIM-for-Large-Language-Models]], [[NIM-for-LLM-Benchmarking-Guide]], and [[NVIDIA-AI-Q-Blueprint]], rather than creating duplicate paper pages.

### NVIDIA context
This page is the canonical program-level page. It should not absorb every deployment recipe, partner-endorsed design, PDF appendix, or build.nvidia example. Use the specific RA pages for durable NVIDIA-authored architecture documents, and use [[NVIDIA-Enterprise-AI-Factory]] for the broader strategy and planning concept.

## Connections
- [[NVIDIA-Enterprise-AI-Factory]] - strategic umbrella for single-tenant enterprise AI infrastructure.
- [[NVIDIA-Enterprise-RA-Partner-Endorsed-Designs]] - OEM partner design matrix and solution catalog for Enterprise RA deployment choices.
- [[NVIDIA-RTX-PRO-AI-Factory]] - air-cooled RTX PRO AI factory architecture.
- [[NVIDIA-HGX-AI-Factory]] - HGX B300 AI factory architecture for training, inference, and HPC.
- [[NVIDIA-NVL72-AI-Factory]] - GB300 NVL72 rack-scale AI factory architecture.
- [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]] - BasePOD RA for two-to-eight-node DGX B200/H200/H100 enterprise infrastructure.
- [[NVIDIA-DGX-SuperPOD-B200-RA]] - B200 SuperPOD RA for 32-system scalable units.
- [[NVIDIA-DGX-SuperPOD-GB200-RA]] - GB200 rack-scale SuperPOD RA.
- [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]] and [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]] - Blackwell Ultra DGX B300 SuperPOD RA variants.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - consistent software stack for production AI workloads.
- [[NVIDIA-Enterprise-RA-Observability-Guide]] - monitoring and alerting guide for RA environments.
- [[NVIDIA-AI-Factory-for-Government]] - government AI factory reference design adjacent to Enterprise RA planning.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide for AI Enterprise and NIM on Red Hat infrastructure.
- [[NVIDIA-AI-Enterprise]] - supported software suite that anchors the RA stack.
- [[NVIDIA-Certified-Systems]] - validated servers are the compute foundation for Enterprise RAs.
- [[NVIDIA-Certified-Storage]] - validated storage is part of the production AI factory design.
- [[NVIDIA-Spectrum-X]] - Ethernet fabric family used across current Enterprise RA designs.
- [[NVIDIA-Spectrum-X-Validated-Solution-Stack]] - validated stack table for Spectrum-X AI factory fabrics.
- [[NVIDIA-Quantum-X800-InfiniBand]] - 800 Gb/s InfiniBand fabric option in SuperPOD-scale AI factories.
- [[NVIDIA-BlueField-DPU]] - infrastructure acceleration, security, and north-south network role in RA designs.
- [[NVIDIA-Base-Command-Manager]] - cluster provisioning and management component used in deployment guidance.
- [[NVIDIA-Run-ai]] - workload orchestration path in current AI Enterprise and RA materials.
- [[NVIDIA-NetQ]] - network visibility and validation component used in RA software and observability guidance.
- [[NVIDIA-AI-Q-Blueprint]] - application-level Enterprise RA paper for an enterprise research-agent deployment.
- [[NIM-for-Large-Language-Models]] and [[NVIDIA-Run-ai]] - NIM LLM with Run:ai sizing paper is represented on the canonical NIM and orchestration pages.

## Source Excerpts
- NVIDIA's docs hub says Enterprise RAs are for building AI factories that scale and groups the content into overview, hardware, software, observability, and deployment areas.
- The Enterprise RA overview positions the program as a way to simplify deployment, reduce complexity, and accelerate time to value for enterprise-class AI factory deployments.
- The partner endorsed design table maps OEM solutions to servers, GPUs, RA patterns, size ranges, and endorsement levels.

## Resources
- [NVIDIA Enterprise Reference Architectures](https://docs.nvidia.com/enterprise-reference-architectures/index.html)
- [Enterprise RA Partner Endorsed Designs](https://docs.nvidia.com/enterprise-reference-architectures/index.html)
- [Enterprise Reference Architecture Overview](https://docs.nvidia.com/enterprise-reference-architectures/white-paper/latest/index.html)
- [Introducing NVIDIA Enterprise Reference Architectures](https://docs.nvidia.com/enterprise-reference-architectures/white-paper/latest/introduction.html)
- [Red Hat AI Factory with NVIDIA Deployment Guide](https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/index.html)
