# NVIDIA MONAI Toolkit

**Type:** Platform
**Tags:** NVIDIA, MONAI, Clara, medical imaging, healthcare AI, AI Enterprise, federated learning
**Related:** [[NVIDIA-Clara]], [[NVIDIA-Clara-Viz]], [[NVIDIA-FLARE]], [[NIM-for-MAISI]], [[NIM-for-VISTA-3D]], [[NVIDIA-Holoscan]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-NIM]], [[NGC]], [[PyTorch]]
**Sources:** https://docs.nvidia.com/clara/index.html, https://docs.nvidia.com/clara/monai/overview.html, https://docs.nvidia.com/nim/medical/maisi/latest/overview.html, https://docs.nvidia.com/nim/medical/vista3d/latest/overview.html
**Last Updated:** 2026-04-30

## Summary
NVIDIA MONAI Toolkit is NVIDIA's enterprise-supported MONAI development sandbox for medical imaging AI. Current Clara docs position it as an NVIDIA AI Enterprise-supported distribution of MONAI with MONAI Core, MONAI Label, [[NVIDIA-FLARE]] integration, NGC availability, and curated pretrained models for CT, MR, pathology, and endoscopy.

## Detail
MONAI itself is an open-source medical AI framework co-founded by NVIDIA and academic medical centers. The NVIDIA MONAI Toolkit page in this wiki tracks NVIDIA's supported distribution and tooling around MONAI, not the entire open-source MONAI ecosystem.

The toolkit supports medical image labeling, training, federated learning, Auto3D segmentation, model-zoo onboarding, Jupyter workflows, and Base Command Platform usage. It is strongly connected to [[NVIDIA-AI-Enterprise]] because enterprise support, security, and deployment options are part of NVIDIA's MONAI offering.

Current medical NIM pages include [[NIM-for-MAISI]] for synthetic 3D CT image generation and [[NIM-for-VISTA-3D]] for 3D medical image segmentation and annotation.

## Connections
- [[NVIDIA-Clara]] - parent healthcare AI platform.
- [[NVIDIA-Clara-Viz]] - visualization companion for medical imaging data.
- [[NVIDIA-FLARE]] - federated learning runtime used for privacy-preserving multi-site medical AI workflows.
- [[NIM-for-MAISI]] - medical imaging NIM for synthetic CT image and segmentation-mask generation.
- [[NIM-for-VISTA-3D]] - medical imaging NIM for interactive 3D segmentation and annotation.
- [[NVIDIA-Holoscan]] - real-time medical device deployment path for AI applications.
- [[NVIDIA-AI-Enterprise]] - enterprise-supported distribution and licensing context.
- [[NVIDIA-NIM]] - deployment layer for current medical imaging NIMs.
- [[NGC]] - distribution path for containers and model assets.
- [[PyTorch]] - MONAI Core is PyTorch-driven for medical imaging model development.

## Source Excerpts
- NVIDIA Clara docs describe MONAI Toolkit as a comprehensive development sandbox offered as part of NVIDIA MONAI.
- NVIDIA MONAI docs describe MONAI Enterprise as an NVIDIA AI Enterprise-supported distribution with enterprise-grade support and deployment options.
