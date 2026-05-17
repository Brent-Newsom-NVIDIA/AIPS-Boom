# Isaac ROS AprilTag

**Type:** Library / ROS Package
**Tags:** NVIDIA, Isaac ROS, AprilTag, fiducial markers, CUDA, PVA, robotics, localization, calibration, NITROS
**Related:** [[NVIDIA-Isaac-ROS]], [[Isaac-ROS-Image-Pipeline]], [[Isaac-ROS-NITROS]], [[NVIDIA-Isaac-for-Mobility]], [[NVIDIA-Isaac-for-Manipulation]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-Jetson-Thor]], [[NVIDIA-VPI]]
**Sources:** https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_apriltag/index.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
Isaac ROS AprilTag is NVIDIA's accelerated ROS 2 package for detecting AprilTag fiducial markers. It provides a high-performance drop-in replacement for CPU AprilTag detection and can use CUDA, CPU, or PVA backends depending on the Jetson/GPU platform and tag family.

## Detail

### Purpose
AprilTags provide visual reference markers for calibration, localization, measurement, validation, and robot setup workflows. Isaac ROS AprilTag accelerates detection so camera streams can be processed with lower CPU load and better throughput inside robot perception graphs.

### Key capabilities
- Accelerated AprilTag detection in ROS 2 camera pipelines.
- Common graph path from camera input through rectification, resize, and tag detection.
- Detection outputs include tag ID, image corners, image center, and pose.
- Backend support across CUDA, CPU, and PVA depending on tag family and platform.
- NITROS acceleration for graph communication.
- Current docs list supported tag families by backend and JetPack 7.1 / Jetson Thor support signals.

### NVIDIA context
Isaac ROS AprilTag is a small but practical robotics tool for calibration and localization. It connects camera preprocessing through [[Isaac-ROS-Image-Pipeline]], accelerated transport through [[Isaac-ROS-NITROS]], and Jetson-specific CUDA/PVA execution through [[NVIDIA-Jetson-Platform]].

## Connections
- [[NVIDIA-Isaac-ROS]] - parent ROS 2 package ecosystem.
- [[Isaac-ROS-Image-Pipeline]] - rectification and resizing nodes commonly precede tag detection.
- [[Isaac-ROS-NITROS]] - accelerated transport layer used by the package.
- [[NVIDIA-Isaac-for-Mobility]] - fiducials can support robot setup, calibration, and localization workflows.
- [[NVIDIA-Isaac-for-Manipulation]] - fiducials can support calibration and workspace setup around robot arms.
- [[NVIDIA-Jetson-Platform]] - edge deployment target with GPU/PVA acceleration paths.
- [[NVIDIA-Jetson-Thor]] - current Jetson generation surfaced in package support tables.
- [[NVIDIA-VPI]] - adjacent Jetson vision acceleration layer for CUDA/PVA-backed image processing.

## Source Excerpts
- NVIDIA docs describe Isaac ROS AprilTag as a ROS 2 package for detecting AprilTags.
- The docs state that detections are NVIDIA-accelerated for high performance.
- The package docs list CUDA, CPU, and PVA backend support by tag family.

## Resources
- [Isaac ROS AprilTag](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_apriltag/index.html)
