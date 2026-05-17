# NVIDIA Omniverse Reference Architectures

**Type:** Reference Architecture
**Tags:** NVIDIA, Omniverse, reference architecture, industrial digital twin, RTX PRO, OpenUSD, physical AI, simulation
**Related:** [[NVIDIA-Omniverse]], [[NVIDIA-RTX-PRO-Server]], [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-Certified-Systems]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-CloudXR]], [[NVIDIA-Cosmos]], [[NIM-for-Cosmos-WFM]], [[NVIDIA-Isaac]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-Warp]], [[PhysicsNeMo]], [[cuOpt]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Cloud-Deployment]]
**Sources:** https://docs.omniverse.nvidia.com/arch-diagrams/latest/index.html, https://docs.omniverse.nvidia.com/arch-diagrams/latest/ref-arch-diagrams/factory-dt-diagram.html, https://docs.omniverse.nvidia.com/arch-diagrams/latest/common/technical-requirements.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Omniverse Reference Architectures are NVIDIA-authored visual guides for implementing Omniverse workflows across industry contexts. The current docs expose an RTX PRO for Industrial Facility Digital Twins architecture, plus shared Omniverse technical requirements for drivers, RTX renderer feature support, Kit, streaming clients, workstations, RTX PRO servers, and Arm/aarch64 systems.

## Detail

### Purpose
The reference architecture docs are the query point for turning Omniverse platform capabilities into deployable workflow designs. They show how Omniverse, OpenUSD, RTX rendering, simulation, synthetic data, physical AI, operations data, and delivery infrastructure fit together.

### Current architecture coverage
- RTX PRO for Industrial Facility Digital Twins is the active architecture diagram in the current docs.
- The workflow uses geometry data, simulation/synthetic data, real-time operations data, and RTX PRO hardware.
- Omniverse and Cosmos generate synthetic variations for physical AI and autonomous robot training.
- Isaac Sim runs simulations for physical AI and autonomous robotics training.
- RTX PRO 6000 Blackwell GPUs are the highlighted hardware foundation, through scalable data center deployments or NVIDIA-Certified Workstations.
- Technical requirements include current driver branches for Blackwell, Ada, Ampere, and Turing; Omniverse RTX Renderer feature support; minimum/recommended Kit and streaming-client requirements; and recommended RTX PRO workstation/server configurations.

### NVIDIA context
Use this page for current Omniverse architecture diagrams and deployment-shape questions. Use [[NVIDIA-Omniverse]] for the platform itself, [[NVIDIA-RTX-PRO-AI-Factory]] for the Enterprise RA around RTX PRO servers, and [[NVIDIA-Cosmos]] or [[NVIDIA-Isaac-Sim]] for physical AI simulation/model details.

## Connections
- [[NVIDIA-Omniverse]] - platform used to build and operate digital twin applications.
- [[NVIDIA-RTX-PRO-Server]] and [[NVIDIA-RTX-PRO-AI-Factory]] - RTX PRO infrastructure path for industrial digital twins and simulation.
- [[NVIDIA-Certified-Systems]] - validated workstation/server infrastructure for Omniverse workflows.
- [[NVIDIA-DGX-Cloud]] - cloud delivery path adjacent to Omniverse on DGX Cloud references.
- [[NVIDIA-CloudXR]] - XR streaming path for immersive digital twin delivery.
- [[NVIDIA-Cosmos]] and [[NIM-for-Cosmos-WFM]] - physical AI world model and synthetic-data companion.
- [[NVIDIA-Isaac]] and [[NVIDIA-Isaac-Sim]] - robotics simulation layer referenced by the architecture.
- [[NVIDIA-Warp]], [[PhysicsNeMo]], and [[cuOpt]] - simulation, physics-ML, and optimization components that can appear in Omniverse digital twin workflows.
- [[NVIDIA-Data-Center-GPU-Drivers]] - current driver requirements are part of the Omniverse technical requirements.
- [[NVIDIA-AI-Enterprise]] and [[NVIDIA-AI-Enterprise-Cloud-Deployment]] - enterprise and cloud deployment context for Omniverse workloads.

## Source Excerpts
- NVIDIA describes Omniverse reference architectures as visual guides for integrating Omniverse capabilities into scalable collaborative workflows.
- The current RTX PRO architecture covers geometry data, synthetic data, real-time operations data, and hardware for industrial facility digital twins.

## Resources
- [Omniverse Reference Architectures](https://docs.omniverse.nvidia.com/arch-diagrams/latest/index.html)
- [RTX PRO for Industrial Facility Digital Twins](https://docs.omniverse.nvidia.com/arch-diagrams/latest/ref-arch-diagrams/factory-dt-diagram.html)
- [Omniverse Technical Requirements](https://docs.omniverse.nvidia.com/arch-diagrams/latest/common/technical-requirements.html)
