# NVIDIA GET3D

**Type:** Research
**Tags:** NVIDIA, GET3D, 3D Generation, Generative AI, 3D Shapes, Neural Rendering, NVlabs
**Related:** [[NVIDIA-NeRF]], [[NVIDIA-Instant-NGP]], [[NVIDIA-GauGAN]], [[NVIDIA-Omniverse]], [[NVIDIA-Research]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-10

## Summary
GET3D is a generative model from NVIDIA Research Toronto (NVlabs) that learns to synthesize high-quality 3D textured shapes directly from 2D image collections, without requiring 3D supervision. Published at NeurIPS 2022, GET3D uses a GAN-based architecture combined with differentiable rendering to generate diverse 3D meshes with detailed textures, trained on images rendered from 3D datasets. It generates watertight triangle meshes with UV-mapped textures compatible with standard 3D workflows and game engines.

## Detail

### Purpose
Creating 3D assets is time-consuming and requires specialized skills. GET3D automates 3D content creation by learning a generative model of shapes and textures from 2D supervision only, making it possible to synthesize virtually unlimited novel 3D objects for use in games, VR/AR, e-commerce, and simulation.

### Key Features
- GAN-based 3D generative model trained from 2D image collections
- Outputs: watertight triangle meshes with UV-mapped albedo textures
- No 3D supervision required: trained on multi-view rendered images
- Disentangled geometry and texture: independently sample shape and appearance
- High-diversity generation: generates varied, non-repetitive 3D assets
- Fast synthesis: single GPU inference in under 1 second
- Compatible with standard 3D pipelines: .obj / .glb export
- Trained on ShapeNet categories: cars, chairs, motorbikes, humans, animals
- Open-source code on GitHub (NVlabs/GET3D)

### Use Cases
- Game asset generation: synthesize props, vehicles, and furniture
- VR/AR content creation: procedurally generated 3D environments
- E-commerce: generate 3D product previews for virtual try-on
- Simulation: populate synthetic training environments with diverse objects
- Film: rapid concept art and prop prototyping
- Research: 3D generative model baseline for papers

### Hardware Requirements / Compatibility
- Training: 4–8x A100 80GB (ShapeNet-scale)
- Inference: single RTX 3090 / A100
- CUDA 11.3+
- PyTorch 1.11+
- Requires nvdiffrast differentiable renderer

### Language Bindings / APIs
- Python (PyTorch)
- nvdiffrast for differentiable mesh rendering
- Export to .obj, .glb for Unity/Unreal/Omniverse
- Open-source on GitHub (NVlabs/GET3D)

## Connections
- [[NVIDIA-NeRF]] — GET3D uses neural rendering like NeRF but generates explicit meshes
- [[NVIDIA-Instant-NGP]] — both are NVlabs neural graphics research projects
- [[NVIDIA-GauGAN]] — GauGAN generates 2D images; GET3D generates 3D geometry
- [[NVIDIA-Omniverse]] — GET3D meshes importable into Omniverse for USD-based workflows
- [[NVIDIA-Research]] — GET3D is from NVIDIA Research Toronto lab (NVlabs)

## Resources
- [GET3D Project Page](https://nv-tlabs.github.io/GET3D/)
- [GET3D GitHub](https://github.com/nv-tlabs/GET3D)
- [NeurIPS 2022 Paper](https://nv-tlabs.github.io/GET3D/assets/paper.pdf)
