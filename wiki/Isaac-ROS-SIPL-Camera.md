# Isaac ROS SIPL Camera

**Type:** Library / ROS Package
**Tags:** NVIDIA, Isaac ROS, SIPL, Camera-over-Ethernet, CoE, Holoscan Sensor Bridge, Jetson Thor, camera driver, NITROS
**Related:** [[NVIDIA-Isaac-ROS]], [[Isaac-ROS-NITROS]], [[Isaac-ROS-Image-Pipeline]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-Visual-SLAM]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-Jetson-Thor]], [[NVIDIA-JetPack-SDK]], [[NVIDIA-Holoscan]]
**Sources:** https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_sipl_camera/index.html, https://nvidia-isaac-ros.github.io/releases/index.html, https://docs.nvidia.com/jetson/archives/r38.4/DeveloperGuide/
**Last Updated:** 2026-04-29

## Summary
Isaac ROS SIPL Camera is NVIDIA's ROS 2 camera-driver package for SIPL cameras with zero-copy GPU-accelerated image publishing through NITROS. Current docs position it around Jetson Thor, JetPack 7.1, Camera-over-Ethernet, Holoscan Sensor Bridge, and SIPL as NVIDIA's modular camera framework.

## Detail

### Purpose
Modern physical AI systems need high-bandwidth camera input with low CPU overhead. Isaac ROS SIPL Camera brings NVIDIA SIPL camera sources into ROS 2 graphs with zero-copy image publishing, calibration metadata, and integration with downstream Isaac ROS perception components.

### Key capabilities
- ROS 2 camera driver nodes for NVIDIA SIPL cameras.
- Zero-copy CoE image data path from Ethernet through hardware DMA and ISP into CUDA-mapped buffers for ROS publishing.
- Mono and stereo camera nodes with independent capture threads.
- NITROS publisher/subscriber messaging for accelerated ROS graph integration.
- Calibration file import to publish ROS `camera_info` for rectification and downstream perception.
- REP-103 static TF publication for camera and optical frames.
- Current docs identify the package as an initial/early-development release with limitations around calibration import, stereo synchronization, and ISP output formats.

### NVIDIA context
SIPL Camera is the newest camera-ingest piece in the Isaac ROS graph. It connects Jetson Thor camera hardware, CoE transport, [[NVIDIA-Holoscan]] Sensor Bridge context, [[Isaac-ROS-NITROS]], [[Isaac-ROS-Image-Pipeline]], [[Isaac-ROS-DNN-Stereo-Depth]], and [[Isaac-ROS-Visual-SLAM]] workflows.

## Connections
- [[NVIDIA-Isaac-ROS]] - parent ROS 2 package ecosystem.
- [[Isaac-ROS-NITROS]] - zero-copy-oriented transport layer used for image publishing.
- [[Isaac-ROS-Image-Pipeline]] - downstream rectification, resize, color conversion, and stereo processing.
- [[Isaac-ROS-DNN-Stereo-Depth]] - downstream stereo depth model family.
- [[Isaac-ROS-Visual-SLAM]] - downstream stereo/IMU localization workflow.
- [[NVIDIA-Jetson-Platform]] - robot-edge platform family for SIPL camera deployment.
- [[NVIDIA-Jetson-Thor]] - current Jetson target identified by package support docs.
- [[NVIDIA-JetPack-SDK]] - JetPack compatibility matters for SIPL/CoE camera support.
- [[NVIDIA-Holoscan]] - adjacent NVIDIA sensor-processing platform and Holoscan Sensor Bridge context.

## Source Excerpts
- NVIDIA docs describe Isaac ROS SIPL Camera as ROS 2 camera driver nodes for SIPL cameras.
- The package docs state that it provides zero-copy GPU-accelerated image publishing through NITROS.
- Current docs identify initial release status and known limitations for SIPL support.

## Resources
- [Isaac ROS SIPL Camera](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_sipl_camera/index.html)
