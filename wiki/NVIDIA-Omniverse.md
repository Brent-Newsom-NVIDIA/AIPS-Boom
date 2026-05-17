# NVIDIA Omniverse

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Simulation, 3D, USD, Digital Twin, Rendering, RTX, Collaboration
**Related:** [[NVIDIA-Newton]], [[NVIDIA-RTX]], [[NVIDIA-Omniverse-Reference-Architectures]], [[NVIDIA-Retail-ISV-Ecosystem]], [[SKAI-Intelligence]], [[NVIDIA-Isaac]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-Isaac-Lab]], [[NVIDIA-Isaac-GR00T]], [[NVIDIA-Cosmos]], [[NIM-for-Cosmos-WFM]], [[NIM-for-Cosmos-Embed1]], [[NIM-for-Audio2Face-3D]], [[NIM-for-Maxine-Audio2Face-2D]], [[NVIDIA-ACE]], [[NVIDIA-DRIVE-Sim]], [[Earth-2]], [[NVIDIA-RTX-PRO-Server]], [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-Warp]], [[NVIDIA-Modulus]], [[TensorRT]], [[PyTorch]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/omniverse, https://www.nvidia.com/en-us/data-center/products/rtx-pro-server/, https://docs.omniverse.nvidia.com/arch-diagrams/latest/index.html, https://docs.omniverse.nvidia.com/arch-diagrams/latest/ref-arch-diagrams/factory-dt-diagram.html, https://docs.nvidia.com/nim/cosmos/latest/introduction.html, https://docs.nvidia.com/nim/digital-human/a2f-3d/latest/index.html
**Last Updated:** 2026-05-17

## Summary
NVIDIA Omniverse is an open platform for building and operating real-time 3D simulation and collaboration applications, built on the OpenUSD (Universal Scene Description) standard. It provides a compute platform for developing industrial digital twins, physically accurate simulations, and robot/autonomous vehicle training environments through a suite of SDKs, renderers, and simulation engines. Omniverse serves as the foundation layer for [[NVIDIA-Isaac-Sim]] and the broader industrial AI simulation ecosystem.

## Detail

### Purpose
Omniverse solves the challenge of collaborative, physically accurate 3D world simulation by providing a shared USD-based composition layer that enables different simulation domains (physics, rendering, AI) to operate simultaneously on the same scene. It enables industrial customers to build digital twins of factories, cities, and infrastructure for AI training, operational planning, and visualization.

### Key Features
- OpenUSD-based scene description: composable, layer-based 3D scene representation
- Omniverse Kit: extensible application framework for building simulation apps
- RTX Renderer: real-time ray tracing and path tracing using NVIDIA RTX technology
- PhysX 5 GPU physics: rigid body, soft body, fluid, cloth, and particle simulation
- Replicator: synthetic data generation (SDG) framework with domain randomization for AI training
- Nucleus: collaborative asset and scene management server
- Omniverse Connectors: live sync plugins for Blender, Maya, 3ds Max, Revit, Unreal Engine
- Audio2Face, Audio2Gesture: AI-driven facial animation and gesture synthesis; current NIM docs expose [[NIM-for-Audio2Face-3D]] for ARKit blendshape avatar animation
- CloudXR: streaming of RTX-rendered content to XR devices
- Python scripting via omni.ext extension system
- Support for MaterialX, MDL (Material Definition Language) physically-based materials
- OmniGraph: visual node graph programming for simulation logic

### Use Cases
- Industrial digital twin: factory simulation for robot workflow optimization
- Autonomous vehicle (AV) synthetic data generation and scenario testing
- Robotics simulation through [[NVIDIA-Isaac-Sim]]
- Virtual production and film/VFX real-time rendering pipelines
- Building/infrastructure digital twin for facility management
- Training AI models on photorealistic synthetic data
- Physical AI video/world generation workflows with [[NVIDIA-Cosmos]] and [[NIM-for-Cosmos-WFM]]
- Industrial facility digital twin workflows captured by [[NVIDIA-Omniverse-Reference-Architectures]], including geometry data, synthetic data, real-time operations data, RTX PRO hardware, and Isaac Sim robotics simulation.
- Retail and CPG digital-twin and 3D asset workflows represented in [[NVIDIA-Retail-ISV-Ecosystem]] through [[SKAI-Intelligence]]. [[SKAI-LVMH-Omniverse-Digital-Twin-Retail-Content]] connects SKAI's LVMH/Hublot retail content workflow to Omniverse, Isaac Sim, RTX rendering, and AI-generated product imagery.
- Collaborative 3D design review across distributed teams

### Hardware Requirements
- NVIDIA RTX GPU required for full RTX rendering (RTX 2000 series minimum; RTX 4090/A6000 recommended)
- CUDA 11.4 or higher
- Ubuntu 20.04/22.04 or Windows 10/11 for Omniverse Kit apps
- 32GB+ system RAM recommended for large scenes
- NVLink or multi-GPU supported for large-scale rendering

### Language Bindings
- Python (primary extension and scripting language)
- C++ (Omniverse Kit SDK for high-performance extensions)
- USD Python API (`pxr` library)

## Connections
- [[NVIDIA-Newton]] - Newton uses OpenUSD concepts that align with Omniverse and Isaac Sim scene composition workflows.
- [[NVIDIA-RTX]] - Omniverse rendering depends on RTX ray tracing and path tracing capabilities.
- [[NVIDIA-Omniverse-Reference-Architectures]] - current Omniverse architecture diagrams and technical requirements for industrial digital twins.
- [[NVIDIA-Isaac]] — umbrella robotics platform that uses Omniverse through Isaac Sim
- [[NVIDIA-Isaac-Sim]] — robotics simulation application built on Omniverse Kit, OpenUSD, RTX, and PhysX
- [[NVIDIA-Isaac-Lab]] — robot-learning workflows use Isaac Sim and Omniverse for simulation and validation
- [[NVIDIA-Isaac-GR00T]] — humanoid robot foundation model workflows use Omniverse/Cosmos simulation infrastructure
- [[NVIDIA-Cosmos]] and [[NIM-for-Cosmos-WFM]] - world foundation models and deployable NIMs for synthetic physical AI video/world generation.
- [[NIM-for-Cosmos-Embed1]] - video-text embedding NIM for searching and curating physical AI datasets.
- [[NIM-for-Audio2Face-3D]] - deployable Audio2Face NIM for speech-to-facial animation in digital-human workflows.
- [[NIM-for-Maxine-Audio2Face-2D]] - adjacent 2D portrait animation NIM.
- [[NVIDIA-ACE]] - digital-human application layer that uses Audio2Face-style animation.
- [[NVIDIA-DRIVE-Sim]] - AV simulation workflows use Omniverse-style reconstruction and synthetic data context.
- [[Earth-2]] - climate digital twin workflows use Omniverse as a visualization and simulation context.
- [[NVIDIA-RTX-PRO-Server]] - enterprise RTX server platform for Omniverse, simulation, and digital twin workloads.
- [[NVIDIA-RTX-PRO-AI-Factory]] - Enterprise RA hardware/software context for RTX PRO AI factory deployments.
- [[SKAI-LVMH-Omniverse-Digital-Twin-Retail-Content]] - named LVMH/Hublot retail proof point for SKAI digital twin and AI content workflows on Omniverse and Isaac Sim.
- [[NVIDIA-Warp]] — Warp GPU simulation kernels are used within Omniverse for physics and differentiable simulation
- [[NVIDIA-Modulus]] — physics-ML models trained with Modulus can be integrated into Omniverse digital twins
- [[TensorRT]] — AI models deployed within Omniverse applications use TensorRT for inference
- [[PyTorch]] — ML models integrated into Omniverse extensions are typically PyTorch-based

## Resources
- [NVIDIA Omniverse Developer Page](https://developer.nvidia.com/omniverse)
- [Omniverse Documentation](https://docs.omniverse.nvidia.com/)
- [Omniverse Kit SDK](https://docs.omniverse.nvidia.com/kit/docs/)
- [OpenUSD](https://openusd.org)
- [GitHub: Omniverse Extensions](https://github.com/NVIDIA-Omniverse)
- [SKAI Intelligence Unveils the Future of Retail Imaging at VivaTech 2025](https://www.prnewswire.com/news-releases/skai-intelligence-unveils-the-future-of-retail-imaging-at-vivatech-2025-302483041.html)
