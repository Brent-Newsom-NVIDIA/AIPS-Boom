# NVIDIA Isaac for Mobility

**Type:** Reference Architecture
**Tags:** NVIDIA, Isaac, Isaac ROS, robotics, mobility, AMR, Jetson Thor, navigation, mapping, localization, Perceptor
**Related:** [[NVIDIA-Isaac]], [[NVIDIA-Isaac-ROS]], [[Isaac-ROS-Visual-SLAM]], [[Isaac-ROS-Visual-Global-Localization]], [[Isaac-ROS-nvblox]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-FoundationStereo]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-Image-Segmentation]], [[Isaac-ROS-Image-Pipeline]], [[Isaac-ROS-AprilTag]], [[Isaac-ROS-SIPL-Camera]], [[Isaac-ROS-NITROS]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-Jetson-Thor]], [[NVIDIA-Isaac-Sim]], [[TensorRT]], [[NVIDIA-VPI]]
**Sources:** https://nvidia-isaac-ros.github.io/reference_workflows/isaac_for_mobility/index.html, https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/index.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Isaac for Mobility is the current Isaac ROS reference-workflow area for autonomous mobile robot mobility, continuing the work previously branded as Isaac Perceptor. The latest Isaac ROS documentation marks the page as a current Thor-optimization direction and points legacy Perceptor details to older docs, so this wiki page keeps the current name canonical while preserving Perceptor as a search alias.

## Detail

### Purpose
Isaac for Mobility is the current landing point for NVIDIA's AMR mobility workflow in Isaac ROS. It connects accelerated perception, stereo depth, mapping, localization, pose estimation, navigation costmaps, and Jetson deployment into a mobility stack for robots that must understand and move through physical spaces.

### Current documentation status
- The current Isaac ROS docs state that Isaac for Mobility continues the Isaac Perceptor work.
- NVIDIA notes that the current optimization focus is Jetson Thor; older Isaac Perceptor docs remain the historical reference for some workflow details.
- Because the current page is a durable docs surface but still sparse, related implementation details should be linked through [[NVIDIA-Isaac-ROS]], [[Isaac-ROS-nvblox]], visual SLAM, mapping/localization, and stereo-depth pages instead of creating many thin subpages.

### Key capabilities
- Mobility workflow identity for AMR perception, mapping, localization, and navigation.
- Integration point for [[Isaac-ROS-Visual-SLAM]], [[Isaac-ROS-Visual-Global-Localization]], [[Isaac-ROS-nvblox]] 3D reconstruction, and 2D costmaps for path planning.
- Stereo-depth and perception components, including [[Isaac-ROS-DNN-Stereo-Depth]] and [[Isaac-ROS-FoundationStereo]] where deep stereo disparity is useful.
- DNN perception components such as [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Object-Detection]], and [[Isaac-ROS-Image-Segmentation]] for robot scene understanding.
- Camera ingest and preprocessing through [[Isaac-ROS-SIPL-Camera]] and [[Isaac-ROS-Image-Pipeline]].
- [[Isaac-ROS-NITROS]] as the accelerated transport layer under high-throughput perception graphs.
- Jetson-focused deployment path, especially current [[NVIDIA-Jetson-Thor]] and Jetson/JetPack compatibility signals in Isaac ROS release notes.
- Simulation and validation path through [[NVIDIA-Isaac-Sim]] and ROS 2 integration.

### NVIDIA context
Isaac for Mobility is the mobile-robot counterpart to [[NVIDIA-Isaac-for-Manipulation]]. Together, they organize current Isaac ROS reference workflows around two physical AI deployment patterns: robots that manipulate objects and robots that navigate spaces.

## Connections
- [[NVIDIA-Isaac]] - parent robotics and physical AI platform.
- [[NVIDIA-Isaac-ROS]] - hosts Isaac for Mobility and the supporting ROS 2 package ecosystem.
- [[Isaac-ROS-Visual-SLAM]] - cuVSLAM odometry and SLAM for mobile robot pose tracking.
- [[Isaac-ROS-Visual-Global-Localization]] - cuVGL relocalization/global localization for known environments.
- [[Isaac-ROS-nvblox]] - maps depth/LiDAR observations into 3D reconstruction and navigation costmaps.
- [[Isaac-ROS-DNN-Stereo-Depth]] - deep stereo disparity and depth package family for navigation depth.
- [[Isaac-ROS-FoundationStereo]] - deep stereo disparity model for deriving depth from RGB stereo cameras.
- [[Isaac-ROS-DNN-Inference]] - DNN inference infrastructure for robot perception.
- [[Isaac-ROS-Object-Detection]] - object detection package family for AMR scene understanding.
- [[Isaac-ROS-Image-Segmentation]] - semantic segmentation package family for AMR scene understanding.
- [[Isaac-ROS-Image-Pipeline]] - accelerated camera preprocessing layer.
- [[Isaac-ROS-AprilTag]] - fiducial detection package useful for calibration/localization workflows.
- [[Isaac-ROS-SIPL-Camera]] - current SIPL/CoE camera ingest package for Jetson Thor-era systems.
- [[Isaac-ROS-NITROS]] - accelerated message transport for Isaac ROS perception graphs.
- [[NVIDIA-Jetson-Platform]] - primary robot-edge deployment family for Isaac ROS mobility workloads.
- [[NVIDIA-Jetson-Thor]] - current Thor-focused optimization target referenced by the latest docs.
- [[NVIDIA-Isaac-Sim]] - simulation environment for ROS-connected robot testing and validation.
- [[TensorRT]] - inference optimization layer for perception models used in mobility stacks.
- [[NVIDIA-VPI]] - adjacent Jetson vision acceleration library for stereo, optical flow, and image-processing workloads.

## Source Excerpts
- Current Isaac ROS docs describe Isaac for Mobility as the continuation of Isaac Perceptor.
- The current docs note that Isaac for Mobility is being optimized for Thor.
- Isaac ROS release notes surface recent mobility-related signals including JetPack 7.1, Thor T4000, nvblox updates, FoundationStereo v2, and visual mapping/localization updates.

## Resources
- [Isaac for Mobility](https://nvidia-isaac-ros.github.io/reference_workflows/isaac_for_mobility/index.html)
- [Isaac ROS Nvblox Concept](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/index.html)
- [Isaac ROS Release Notes](https://nvidia-isaac-ros.github.io/releases/index.html)
