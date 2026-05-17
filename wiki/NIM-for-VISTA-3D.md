# NIM for VISTA-3D

**Type:** Microservice
**Tags:** NVIDIA, NIM, VISTA-3D, MONAI, medical imaging, segmentation, annotation, healthcare AI
**Related:** [[NVIDIA-NIM]], [[NVIDIA-MONAI-Toolkit]], [[NVIDIA-Clara]], [[NVIDIA-Clara-Viz]], [[NIM-for-MAISI]], [[NVIDIA-AI-Enterprise]], [[NGC]], [[TensorRT]], [[Triton-Inference-Server]], [[PyTorch]]
**Sources:** https://docs.nvidia.com/nim/medical/vista3d/latest/overview.html, https://docs.nvidia.com/nim/medical/vista3d/latest/index.html, https://docs.nvidia.com/nim/medical/vista3d/latest/getting-started.html, https://docs.nvidia.com/nim/medical/vista3d/latest/advanced-usage.html, https://docs.nvidia.com/nim/medical/vista3d/latest/api-reference.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM for VISTA-3D packages VISTA-3D as a deployable NIM microservice for 3D medical imaging segmentation and annotation. Current NVIDIA docs describe VISTA-3D as an interactive foundation model for 3D medical imaging that supports segment-everything, class-based segmentation, and point-prompt workflows.

## Detail

### Purpose
VISTA-3D NIM gives researchers and medical imaging developers a containerized API for segmenting and annotating 3D medical images. It can accelerate anatomy exploration, organ/tumor mapping, and annotation workflows used to create ground-truth data.

### Current scope
- Segment-everything workflow for whole-body exploration.
- Class-based segmentation for specific anatomy or disease analysis.
- Point-prompt segmentation for interactive annotation.
- API endpoints for health checks, model info, and `/v1/vista3d/inference`.
- Input medical images are handled through NIfTI or NRRD-style workflows in current docs.
- Multi-GPU load balancing through Triton Inference Server for high-volume workloads.
- Documentation emphasizes research use, not clinical usage.

### NVIDIA context
VISTA-3D NIM is the segmentation/annotation counterpart to [[NIM-for-MAISI]] in the medical imaging NIM graph. It connects [[NVIDIA-MONAI-Toolkit]], [[NVIDIA-Clara]], [[NVIDIA-Clara-Viz]], and NIM deployment for medical imaging AI.

## Connections
- [[NVIDIA-MONAI-Toolkit]] - medical imaging AI framework and enterprise-supported MONAI distribution.
- [[NVIDIA-Clara]] - parent healthcare AI platform.
- [[NVIDIA-Clara-Viz]] - visualization path for segmentation results.
- [[NIM-for-MAISI]] - companion medical imaging NIM for synthetic CT generation and annotation masks.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment/support context for healthcare AI software.
- [[NGC]] - container and model artifact distribution path.
- [[TensorRT]] and [[Triton-Inference-Server]] - inference and serving layers adjacent to NIM deployment.

## Source Excerpts
- NVIDIA docs describe VISTA-3D as an interactive foundation model for 3D medical imaging.
- The docs list segment-everything, class-based segmentation, and point-prompt segmentation as core workflows.

## Resources
- [NVIDIA NIM for VISTA-3D Overview](https://docs.nvidia.com/nim/medical/vista3d/latest/overview.html)
- [NVIDIA NIM for VISTA-3D Index](https://docs.nvidia.com/nim/medical/vista3d/latest/index.html)
