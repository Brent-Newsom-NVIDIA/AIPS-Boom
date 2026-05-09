# NVIDIA Enterprise AI Factory

**Type:** Strategy
**Tags:** NVIDIA, enterprise AI factory, AI Enterprise, agentic AI, Blackwell, BlueField, Spectrum-X, certified systems, certified storage
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[NVIDIA-AI-Factory-for-Government]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], [[NVIDIA-NVL72-AI-Factory]], [[NVIDIA-Mission-Control]], [[NVIDIA-DGX-BasePOD]], [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]], [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]], [[NVIDIA-DGX-Enterprise-Support]], [[NVIDIA-DGX-B200]], [[NVIDIA-DGX-B300]], [[NVIDIA-GB200-NVL72]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-Vera-Rubin]], [[NVIDIA-Vera-Rubin-POD]], [[NVIDIA-Groq-3-LPX]], [[NVIDIA-Spectrum-6-SPX]], [[NVIDIA-RTX-PRO-Server]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-STX]], [[NVIDIA-CMX]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Certified-Systems]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Spectrum-X-Validated-Solution-Stack]], [[NVIDIA-Quantum-X800-InfiniBand]], [[NVIDIA-ConnectX-9]], [[NVIDIA-BlueField-4]], [[NVIDIA-Silicon-Photonics]]
**Sources:** https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/introduction.html, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/ai-factory-overview.html, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/agentic-ai-in-the-factory.html, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/ecosystem-architecture.html, https://docs.nvidia.com/enterprise-reference-architectures/index.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/overview.html, https://docs.nvidia.com/dgx-basepod/reference-architecture-infrastructure-foundation-enterprise-ai/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/index.html, https://www.nvidia.com/en-us/data-center/gb300-nvl72/, https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/, https://www.nvidia.com/en-us/data-center/technologies/rubin/
**Last Updated:** 2026-05-09

## Summary
NVIDIA Enterprise AI Factory is NVIDIA's reference-design concept for building single-tenant, enterprise-ready AI infrastructure with NVIDIA hardware, networking, storage, Kubernetes, and AI Enterprise software. The current design guide frames the AI factory as a co-designed environment for agentic AI, long-running agents, RAG, inference, customization, observability, security, and day-2 operations.

## Detail

### Purpose
An enterprise AI factory industrializes AI deployment inside a company's own infrastructure and partner ecosystem. It combines accelerator capacity, high-speed networking, scalable storage, cloud-native operations, security, and model/application lifecycle software so enterprise teams can run AI as a production capability rather than a collection of prototypes.

### Architecture themes
- NVIDIA accelerated computing with Blackwell-class GPUs, CPUs, DPUs, and high-speed fabrics.
- [[NVIDIA-Enterprise-Reference-Architectures]] translate the strategy into concrete hardware, software, observability, and deployment patterns such as [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], and [[NVIDIA-NVL72-AI-Factory]].
- [[NVIDIA-AI-Factory-for-Government]] extends the AI factory concept into government, sovereign, FedRAMP High-equivalent, and high-assurance environments.
- [[Red-Hat-AI-Factory-with-NVIDIA]] is the OpenShift AI deployment track for a co-engineered Red Hat/NVIDIA AI factory stack.
- Current and next-generation platform pages extend that map to [[NVIDIA-DGX-BasePOD]], [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-DGX-B200]], [[NVIDIA-DGX-B300]], [[NVIDIA-GB200-NVL72]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-Vera-Rubin]], [[NVIDIA-Vera-Rubin-POD]], [[NVIDIA-RTX-PRO-Server]], [[NVIDIA-ConnectX-9]], [[NVIDIA-BlueField-4]], and [[NVIDIA-Silicon-Photonics]].
- [[NVIDIA-BlueField-DPU]] for infrastructure acceleration, zero-trust style isolation, storage, networking, and security offload.
- [[NVIDIA-Spectrum-X]] networking and [[NVIDIA-Spectrum-X-Validated-Solution-Stack]] version alignment for Ethernet AI factory fabrics and inference latency control.
- [[NVIDIA-Quantum-X800-InfiniBand]] for 800 Gb/s InfiniBand scale-out fabric choices in the largest B300 and Vera Rubin-era designs.
- [[NVIDIA-STX]] and [[NVIDIA-CMX]] for AI-native storage and context memory as agentic AI pushes KV-cache and long-context data movement into the infrastructure layer.
- [[NVIDIA-Certified-Systems]] and [[NVIDIA-Certified-Storage]] for validated server and storage infrastructure.
- [[NVIDIA-AI-Enterprise]] software, including NIM, NeMo, Dynamo-Triton, GPU Operator, Network Operator, DOCA, DPF, Run:ai, and observability components.
- Kubernetes as the cloud-native control plane for agentic applications, model serving, scheduling, and lifecycle automation.

### Agentic AI factory
The design guide treats agentic AI as a shift from static model serving to long-running, stateful workflows. AI-Q-style agents use routing, persistent context, retrieval, evaluation, tracing, and tool execution. The AI factory becomes the control plane for deploying, monitoring, governing, and improving those agents over time.

### NVIDIA context
This page is the strategic umbrella that connects [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-Mission-Control]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-Run-ai]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[NVIDIA-DOCA]], and [[NVIDIA-DCGM]].

## Connections
- [[NVIDIA-AI-Enterprise]] - software foundation for enterprise AI workloads, NIM, NeMo, operators, and support.
- [[NVIDIA-Enterprise-Reference-Architectures]] - concrete NVIDIA-authored AI factory design patterns.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - common AI Enterprise software stack for production AI workloads.
- [[NVIDIA-Enterprise-RA-Observability-Guide]] - cross-cutting telemetry, dashboard, and alerting guidance for Enterprise RAs.
- [[NVIDIA-AI-Factory-for-Government]] - government and regulated-environment AI factory reference design.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI implementation path for enterprise AI factory workloads.
- [[NVIDIA-RTX-PRO-AI-Factory]] - RTX PRO 6000 Blackwell Enterprise RA for air-cooled enterprise workloads.
- [[NVIDIA-HGX-AI-Factory]] - HGX B300 Enterprise RA for training, inference, analytics, and HPC workloads.
- [[NVIDIA-NVL72-AI-Factory]] - GB300 NVL72 Enterprise RA for rack-scale training, fine-tuning, and reasoning workloads.
- [[NVIDIA-Mission-Control]] - AI factory operations plane for large NVIDIA deployments.
- [[NVIDIA-DGX-SuperPOD]] - on-premises AI supercomputing reference architecture that can anchor AI factory infrastructure.
- [[NVIDIA-DGX-BasePOD]] - prescriptive DGX reference architecture for enterprise AI infrastructure.
- [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]], and [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]] - practical DGX RA choices for AI factory sizing and fabric design.
- [[NVIDIA-DGX-Enterprise-Support]] - support, onboarding, and administration services for DGX AI factories.
- [[NVIDIA-DGX-B200]] - Blackwell DGX system building block.
- [[NVIDIA-DGX-B300]] - Blackwell Ultra DGX system path for AI factory deployments.
- [[NVIDIA-GB200-NVL72]] - rack-scale Grace Blackwell system for 72-GPU NVLink domains.
- [[NVIDIA-GB300-NVL72]] - rack-scale Blackwell Ultra system for dense training and inference.
- [[NVIDIA-Vera-Rubin]] and [[NVIDIA-Vera-Rubin-POD]] - next-generation AI factory platform and POD-scale system after Blackwell.
- [[NVIDIA-Groq-3-LPX]] and [[NVIDIA-Spectrum-6-SPX]] - Vera Rubin POD inference accelerator and networking rack components.
- [[NVIDIA-RTX-PRO-Server]] - enterprise RTX server path for simulation, rendering, and inference workloads.
- [[NVIDIA-DGX-Cloud]] - cloud-accessible NVIDIA AI factory path for organizations that need hosted capacity.
- [[NVIDIA-AI-Q-Blueprint]] - example long-running enterprise research agent in the AI factory guidance.
- [[NVIDIA-AI-Data-Platform]] - optional data layer for ingestion, embedding, indexing, retrieval, and agent context.
- [[NVIDIA-STX]] and [[NVIDIA-CMX]] - AI-native storage and context memory infrastructure for long-context and agentic inference.
- [[NVIDIA-Certified-Storage]] - validated storage layer for AI factory data and model workflows.
- [[NVIDIA-Certified-Systems]] - validated compute/system layer for enterprise AI factories.
- [[NVIDIA-ConnectX-9]] - next-generation SuperNIC for AI factory fabrics.
- [[NVIDIA-Spectrum-X]], [[NVIDIA-Spectrum-X-Validated-Solution-Stack]], and [[NVIDIA-Quantum-X800-InfiniBand]] - Ethernet and InfiniBand fabric choices for current AI factories.
- [[NVIDIA-BlueField-4]] - DPU generation tied to STX/CMX AI-native data paths.
- [[NVIDIA-Silicon-Photonics]] - optical networking direction for future AI factory scale.

## Source Excerpts
- NVIDIA's design guide frames AI factories as cost-effective, scalable, high-performing enterprise infrastructure built with NVIDIA-certified systems, certified storage, networking, and AI software.
- The ecosystem architecture chapter describes Blackwell GPUs, BlueField DPUs, Spectrum-X networking, certified storage, AI Data Platform, Kubernetes, Run:ai, operators, DOCA, and Dynamo-Triton as AI factory components.

## Resources
- [Enterprise AI Factory Design Guide](https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/introduction.html)
- [Enterprise AI Factory Overview](https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/ai-factory-overview.html)
- [Agentic AI in the Factory](https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/agentic-ai-in-the-factory.html)
- [NVIDIA Enterprise Reference Architectures](https://docs.nvidia.com/enterprise-reference-architectures/index.html)
- [Red Hat AI Factory with NVIDIA Overview](https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/overview.html)
