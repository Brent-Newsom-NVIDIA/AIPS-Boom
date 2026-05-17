# NIM for MAISI

**Type:** Microservice
**Tags:** NVIDIA, NIM, MAISI, MONAI, medical imaging, synthetic CT, latent diffusion, healthcare AI
**Related:** [[NVIDIA-NIM]], [[NVIDIA-MONAI-Toolkit]], [[NVIDIA-Clara]], [[NVIDIA-Clara-Viz]], [[NIM-for-VISTA-3D]], [[NVIDIA-AI-Enterprise]], [[NGC]], [[TensorRT]], [[Triton-Inference-Server]], [[PyTorch]]
**Sources:** https://docs.nvidia.com/nim/medical/maisi/latest/overview.html, https://docs.nvidia.com/nim/medical/maisi/latest/index.html, https://docs.nvidia.com/nim/medical/maisi/latest/getting-started.html, https://docs.nvidia.com/nim/medical/maisi/latest/advanced-usage.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM for MAISI packages NVIDIA MAISI (Medical AI for Synthetic Imaging) as a deployable NIM microservice. Current NVIDIA docs describe MAISI as a 3D latent diffusion model for generating high-quality synthetic CT images with or without anatomical annotations for research use.

## Detail

### Purpose
MAISI NIM helps researchers generate realistic medical imaging data when real datasets are limited by privacy, rarity, or annotation cost. The NIM packaging standardizes deployment so teams can call the model through a containerized service rather than assembling the diffusion workflow from scratch.

### Current scope
- Generates high-resolution 3D CT images.
- Can generate paired segmentation masks and annotate up to 127 anatomical classes.
- Supports variable voxel sizes and controllable anatomy size for selected classes.
- Release 1.0.1 uses Rectified Flow instead of the earlier DDPM noise scheduler for faster inference.
- Supports multi-GPU configurations for processing multiple generated samples in parallel.
- Documentation emphasizes research use, not clinical usage.

### NVIDIA context
MAISI NIM belongs in the Clara/MONAI medical imaging graph. It complements [[NIM-for-VISTA-3D]] because MAISI can generate synthetic medical images and labels, while VISTA-3D segments and annotates medical images.

## Connections
- [[NVIDIA-MONAI-Toolkit]] - medical imaging AI framework and enterprise-supported MONAI distribution.
- [[NVIDIA-Clara]] - parent healthcare AI platform.
- [[NVIDIA-Clara-Viz]] - visualization path for generated images and segmentations.
- [[NIM-for-VISTA-3D]] - companion medical imaging NIM for interactive segmentation and annotation.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment/support context for healthcare AI software.
- [[NGC]] - container and model artifact distribution path.
- [[TensorRT]] and [[Triton-Inference-Server]] - inference and serving layers adjacent to NIM deployment.

## Source Excerpts
- NVIDIA docs describe MAISI as a 3D latent diffusion model for generating synthetic CT images with or without anatomical annotations.
- The docs state that MAISI is intended for research purposes and not clinical usage.

## Resources
- [NVIDIA NIM for MAISI Overview](https://docs.nvidia.com/nim/medical/maisi/latest/overview.html)
- [NVIDIA NIM for MAISI Index](https://docs.nvidia.com/nim/medical/maisi/latest/index.html)
