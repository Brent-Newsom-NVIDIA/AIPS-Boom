# NVIDIA RTX PRO AI Factory

**Type:** Reference Architecture
**Tags:** NVIDIA, RTX PRO AI Factory, Enterprise Reference Architecture, RTX PRO 6000 Blackwell, Spectrum-X, BlueField-3, AI Enterprise
**Related:** [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-Enterprise-RA-Partner-Endorsed-Designs]], [[NVIDIA-Enterprise-AI-Factory]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[NVIDIA-RTX-PRO-Server]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[NVIDIA-Spectrum-X]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-Certified-Systems]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Run-ai]], [[NVIDIA-vGPU]], [[NVIDIA-Omniverse]], [[NVIDIA-Omniverse-Reference-Architectures]], [[NVIDIA-NetQ]]
**Sources:** https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/index.html, https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/overview.html, https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/components.html, https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/software.html, https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/nvidia-certified-storage.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/prerequisites.html
**Last Updated:** 2026-05-17

## Summary
NVIDIA RTX PRO AI Factory is a current NVIDIA Enterprise Reference Architecture for building modular AI factories with NVIDIA RTX PRO Servers. It is based on a 2-8-5-200 infrastructure configuration with two CPUs, eight GPUs, and five 200 Gb/s-class network interfaces, using RTX PRO 6000 Blackwell Server Edition GPUs, BlueField-3 networking, Spectrum-X Ethernet, and NVIDIA AI Enterprise software.

## Detail

### Purpose
The RTX PRO AI Factory pattern targets enterprises that need an air-cooled, power-efficient, NVIDIA-certified platform for agentic AI inference, industrial and physical AI, visual computing, data analytics, scientific simulation, rendering, and video workflows.

### Architecture notes
- Each NVIDIA-Certified RTX PRO Server in the reference design carries eight RTX PRO 6000 Blackwell Server Edition GPUs.
- Scalable Units are four servers, with documented 16-node/128-GPU and 32-node/256-GPU design points.
- The architecture separates compute east-west traffic from north-south customer and storage traffic.
- BlueField-3 SuperNICs and DPUs are used for compute fabric and converged infrastructure roles.
- NVIDIA-Certified Storage guidance allocates storage bandwidth linearly, with about 12.5 Gb/s per GPU as a guideline.
- Current partner endorsed 2-8-5-200 implementations include Dell PowerEdge XE7740/XE7745, Dell Federal XE7740/XE7745, HPE ProLiant DL380a Gen12, and Supermicro SYS-522GA-NRT/SYS-422GL-NR/AS-5126GS-TNRT2 designs tracked in [[NVIDIA-Enterprise-RA-Partner-Endorsed-Designs]].

### Software stack
The RA points to NVIDIA Enterprise AI Factory Validated Design software, including [[NVIDIA-AI-Enterprise]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Omniverse]], [[NVIDIA-Run-ai]], [[NVIDIA-vGPU]], and [[NVIDIA-NetQ]]. Use [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] for the shared software stack across RA hardware choices.

### NVIDIA context
This page is the durable RTX PRO Enterprise RA page. Use [[NVIDIA-RTX-PRO-Server]] for the broader platform/product identity and [[NVIDIA-Enterprise-AI-Factory]] for the strategy-level AI factory concept. The [[Red-Hat-AI-Factory-with-NVIDIA]] prerequisites point readers to this RA as an example certified hardware pattern.

## Connections
- [[NVIDIA-Enterprise-Reference-Architectures]] - program-level Enterprise RA hub.
- [[NVIDIA-Enterprise-RA-Partner-Endorsed-Designs]] - partner-endorsed OEM implementations of the 2-8-5-200 design.
- [[NVIDIA-Enterprise-AI-Factory]] - strategic AI factory planning context.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide that cites RTX PRO AI Factory as example certified hardware.
- [[NVIDIA-RTX-PRO-Server]] - platform page for RTX PRO server systems.
- [[NVIDIA-Blackwell-Architecture]] - RTX PRO 6000 Blackwell Server Edition is the GPU generation in this RA.
- [[NVIDIA-AI-Enterprise]] - supported software suite for production AI workloads.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - common software stack for RA deployments.
- [[NVIDIA-Enterprise-RA-Observability-Guide]] - observability pattern for Enterprise RA deployments.
- [[NVIDIA-Spectrum-X]] - Ethernet networking platform used in the AI factory fabric.
- [[NVIDIA-BlueField-DPU]] - north-south infrastructure and security offload role.
- [[NVIDIA-Certified-Systems]] - certification baseline for partner server configurations.
- [[NVIDIA-Certified-Storage]] - storage validation path for end-to-end AI factories.
- [[NVIDIA-Run-ai]] - workload orchestration path in the RA software design.
- [[NVIDIA-vGPU]] - virtualization path that matters for RTX PRO workloads.
- [[NVIDIA-Omniverse]] - industrial and physical AI workload target for RTX PRO AI factories.
- [[NVIDIA-Omniverse-Reference-Architectures]] - Omniverse industrial facility digital twin architecture that highlights RTX PRO hardware.
- [[NVIDIA-NetQ]] - network visibility and troubleshooting tool in the RA software stack.

## Source Excerpts
- The current docs describe the RTX PRO AI Factory as a practical Enterprise RA based on the 2-8-5-200 pattern with RTX PRO Servers, BlueField-3, and Spectrum-X networking.
- NVIDIA lists agentic AI inference, industrial and physical AI, visual computing, and data analytics/scientific simulation as primary use cases.

## Resources
- [NVIDIA RTX PRO AI Factory](https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/index.html)
- [RTX PRO AI Factory Overview](https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/overview.html)
- [RTX PRO AI Factory Software](https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/software.html)
