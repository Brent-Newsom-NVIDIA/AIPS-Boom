# Isaac ROS Visual SLAM

**Type:** Library / ROS Package
**Tags:** NVIDIA, Isaac ROS, cuVSLAM, Visual SLAM, visual odometry, VIO, stereo cameras, IMU, robotics, Jetson
**Related:** [[NVIDIA-Isaac-ROS]], [[NVIDIA-Isaac-for-Mobility]], [[Isaac-ROS-Visual-Global-Localization]], [[Isaac-ROS-nvblox]], [[Isaac-ROS-NITROS]], [[Isaac-ROS-FoundationStereo]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-Jetson-Platform]]
**Sources:** https://nvidia-isaac-ros.github.io/concepts/visual_slam/cuvslam/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_visual_slam/index.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
Isaac ROS Visual SLAM is NVIDIA's ROS 2 package for GPU-accelerated visual simultaneous localization and mapping using cuVSLAM. It uses one or more stereo cameras, optionally with IMU input, to estimate visual odometry and SLAM state for robot navigation where GPS is unavailable or unreliable.

## Detail

### Purpose
Mobile robots and drones need reliable odometry and localization in indoor, urban, and GPS-denied environments. Isaac ROS Visual SLAM uses cuVSLAM to track stereo visual features, maintain landmarks and a pose graph, perform loop closure, and provide low-latency odometry for navigation pipelines.

### Key capabilities
- GPU-accelerated stereo visual-inertial SLAM and odometry through cuVSLAM.
- Support for one or more stereo cameras, with cuVSLAM docs noting support for up to 16 stereo pairs.
- Optional IMU integration for visual-inertial odometry when image features are weak or unavailable.
- Loop closure through landmark recognition and pose-graph optimization.
- ROS 2 package for real-time robot navigation inputs.
- Isaac Sim, RealSense, RGB-D, multi-camera, and segmentation-mask tutorial paths in current docs.
- Integration with [[Isaac-ROS-Visual-Global-Localization]] for global pose bootstrapping and relocalization workflows.

### NVIDIA context
Isaac ROS Visual SLAM is a core mobility primitive in Isaac ROS. It provides motion and pose information that can drive [[Isaac-ROS-nvblox]] mapping, [[NVIDIA-Isaac-for-Mobility]] navigation, and robot validation in [[NVIDIA-Isaac-Sim]].

## Connections
- [[NVIDIA-Isaac-ROS]] - parent ROS 2 package ecosystem.
- [[NVIDIA-Isaac-for-Mobility]] - mobility workflow area that depends on localization, mapping, and pose estimation.
- [[Isaac-ROS-Visual-Global-Localization]] - global localization component that can bootstrap cuVSLAM localization.
- [[Isaac-ROS-nvblox]] - reconstruction and costmap component that can consume pose from visual SLAM.
- [[Isaac-ROS-NITROS]] - accelerated transport layer for high-throughput ROS 2 graphs.
- [[Isaac-ROS-FoundationStereo]] - stereo depth model adjacent to stereo camera perception workflows.
- [[NVIDIA-Isaac-Sim]] - simulation environment for Visual SLAM tutorials.
- [[NVIDIA-Jetson-Platform]] - edge deployment target for visual SLAM robot workloads.

## Source Excerpts
- NVIDIA docs describe cuVSLAM as a GPU-accelerated library for stereo visual-inertial SLAM and odometry.
- Isaac ROS Visual SLAM docs describe the package as a high-performance ROS 2 VSLAM package using one or more stereo cameras and optional IMU input.
- The docs describe loop closure and pose-graph optimization as part of the SLAM workflow.

## Resources
- [cuVSLAM Concept](https://nvidia-isaac-ros.github.io/concepts/visual_slam/cuvslam/index.html)
- [Isaac ROS Visual SLAM](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_visual_slam/index.html)
