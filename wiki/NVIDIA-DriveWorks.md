# NVIDIA DriveWorks

**Type:** Technology
**Tags:** NVIDIA, DriveWorks, DRIVE, autonomous vehicles, sensors, calibration, image processing, point cloud, CUDA
**Related:** [[NVIDIA-Drive-Platform]], [[NVIDIA-DriveOS]], [[NVIDIA-DRIVE-AGX-Thor]], [[TensorRT]], [[CUDA-for-Tegra]], [[NVIDIA-VPI]]
**Sources:** https://developer.nvidia.com/drive/driveworks, https://developer.nvidia.com/drive/documentation, https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-sdk/embedded-software-components/DRIVE_AGX_SoC/DriveWorks/DriveWorks_SDK/migration/index.html, https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-sdk/embedded-software-components/DRIVE_AGX_SoC/DriveWorks/DriveWorks_SDK/modules/sensors/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA DriveWorks is the autonomous-vehicle SDK inside the NVIDIA DRIVE software stack. It provides accelerated modules, tools, samples, and middleware for sensor abstraction, data capture/replay, image processing, point cloud processing, calibration, egomotion, and AV application development on DRIVE AGX SoCs. Current DriveOS 7.0.3 docs show DriveWorks integrated into the DriveOS developer guide, with DriveWorks 7.x following the DriveOS versioning scheme.

## Detail

### Purpose
Autonomous vehicles require synchronized sensor ingestion, calibration, perception preprocessing, replay, and compute graph orchestration before customer AV logic can run reliably. DriveWorks provides reusable, optimized building blocks so DRIVE developers do not need to implement every sensor and low-level processing stage from scratch.

### Key capabilities
- Sensor Abstraction Layer for camera, radar, lidar, IMU, GPS, CAN, and virtual/replay-style sources where supported.
- Raw sensor serialization and virtual sensor replay workflows for repeatable AV development.
- Image processing algorithms including rectification, color correction, filtering, feature extraction, tracking, stereo, and disparity.
- Point cloud processing for lidar data, including accumulation, stitching, range image generation, ground-plane extraction, and filtering.
- Dynamic calibration for camera, radar, lidar, and IMU sensor parameters during operation.
- Egomotion modules for vehicle pose estimation from odometry, IMU, and sensor inputs.
- Samples and tools used as starting points for DRIVE AGX development and optimization.

### Current release note
NVIDIA public DriveOS 7.0.3 documentation states that DriveWorks now follows the DriveOS versioning scheme. Older public DriveWorks docs remain useful for historical concepts, but the wiki should treat DriveOS 7.x documentation as the current integration point.

## Connections
- [[NVIDIA-Drive-Platform]] - DriveWorks is one of the core DRIVE software SDKs.
- [[NVIDIA-DriveOS]] - DriveWorks is integrated under the DriveOS 7.x documentation and release scheme.
- [[NVIDIA-DRIVE-AGX-Thor]] - DriveWorks targets DRIVE AGX compute platforms including Thor.
- [[TensorRT]] - AV inference outputs often feed DriveWorks/DriveOS perception and planning pipelines.
- [[CUDA-for-Tegra]] - DriveWorks runs on Tegra-class DRIVE SoCs with embedded CUDA constraints.
- [[NVIDIA-VPI]] - adjacent NVIDIA vision API for Jetson/embedded vision workloads.

## Source Excerpts
- NVIDIA DriveWorks developer pages describe it as an SDK with accelerated algorithms and tools for autonomous vehicle software development.
- DriveWorks public docs list Sensor Abstraction Layer, image processing, point cloud processing, calibration, and egomotion modules.
- DriveOS 7.0.3 migration docs state that DriveWorks 7.x follows DriveOS versioning.

## Resources
- [NVIDIA DriveWorks SDK](https://developer.nvidia.com/drive/driveworks)
- [NVIDIA DRIVE Documentation](https://developer.nvidia.com/drive/documentation)
- [DriveWorks Migration in DriveOS 7.0.3](https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-sdk/embedded-software-components/DRIVE_AGX_SoC/DriveWorks/DriveWorks_SDK/migration/index.html)
- [DriveWorks Sensors](https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-sdk/embedded-software-components/DRIVE_AGX_SoC/DriveWorks/DriveWorks_SDK/modules/sensors/index.html)
