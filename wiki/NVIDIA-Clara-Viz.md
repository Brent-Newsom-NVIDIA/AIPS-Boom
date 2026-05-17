# NVIDIA Clara Viz

**Type:** Technology
**Tags:** NVIDIA, Clara, Clara Viz, medical imaging, visualization, CUDA, ray tracing, pathology
**Related:** [[NVIDIA-Clara]], [[NVIDIA-Holoscan]], [[NVIDIA-MONAI-Toolkit]], [[NIM-for-MAISI]], [[NIM-for-VISTA-3D]], [[NVIDIA-RTX]], [[CUDA-Programming-Guide]], [[TensorRT]]
**Sources:** https://docs.nvidia.com/clara/index.html, https://docs.nvidia.com/clara-viz/index.html, https://docs.nvidia.com/nim/medical/maisi/latest/overview.html, https://docs.nvidia.com/nim/medical/vista3d/latest/getting-started.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Clara Viz is a platform for visualizing 2D and 3D medical imaging data. The docs describe CUDA-based volumetric visualization, multi-resolution digital pathology image viewing, Python wrappers, and JupyterLab widgets for interactive medical image visualization.

## Detail
Clara Viz sits inside the broader [[NVIDIA-Clara]] healthcare portfolio as the visualization component. It is relevant to medical imaging applications that need volume rendering, original-slice rendering, pathology image rendering, segmentation masks, multiple views, and export targets such as video streams or image outputs.

[[NIM-for-MAISI]] and [[NIM-for-VISTA-3D]] can produce synthetic CT volumes, segmentation masks, and annotation results that are natural inputs for medical visualization workflows.

This page should not replace [[NVIDIA-Holoscan]]: Holoscan is the real-time sensor/streaming application SDK, while Clara Viz is the visualization toolkit for medical imaging data.

## Connections
- [[NVIDIA-Clara]] - parent healthcare platform.
- [[NVIDIA-Holoscan]] - adjacent real-time medical AI and sensor processing SDK.
- [[NVIDIA-MONAI-Toolkit]] - medical imaging AI development toolkit that can feed visualization workflows.
- [[NIM-for-MAISI]] - synthetic CT and segmentation-mask generation can feed visualization workflows.
- [[NIM-for-VISTA-3D]] - VISTA-3D segmentation outputs can be visualized in medical viewers such as 3D Slicer.
- [[NVIDIA-RTX]] - RTX/CUDA rendering concepts are relevant to volumetric visualization.
- [[TensorRT]] - optimized inference can feed medical visualization and analysis applications.

## Source Excerpts
- NVIDIA Clara Viz docs describe a platform for 2D/3D medical imaging visualization using CUDA-based ray tracing.
- The docs list Python wrappers and JupyterLab visual widgets for interactive medical image visualization.
