# Isaac ROS nvblox

**Type:** Library / ROS Package
**Tags:** NVIDIA, Isaac ROS, nvblox, CUDA, robotics, scene reconstruction, mapping, ESDF, TSDF, Nav2, Jetson
**Related:** [[NVIDIA-Isaac-ROS]], [[NVIDIA-Isaac-for-Mobility]], [[NVIDIA-Isaac-for-Manipulation]], [[Isaac-ROS-Visual-SLAM]], [[Isaac-ROS-Visual-Global-Localization]], [[Isaac-ROS-cuMotion]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-Image-Segmentation]], [[Isaac-ROS-Image-Pipeline]], [[Isaac-ROS-FoundationStereo]], [[Isaac-ROS-NITROS]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-VPI]]
**Sources:** https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_nvblox/index.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
Isaac ROS nvblox is NVIDIA's ROS 2 integration for GPU-accelerated 3D scene reconstruction, mapping, and navigation costmap generation. It uses depth images and/or 3D LiDAR data to build voxel-based maps, generate meshes, compute distance fields, and output 2D costmaps for robot navigation and planning.

## Detail

### Purpose
Robots need a current model of free space, obstacles, and nearby geometry. Isaac ROS nvblox turns camera or LiDAR observations plus pose estimates into GPU-computed reconstructions that can feed navigation, obstacle avoidance, and manipulation planners.

### Key capabilities
- Real-time local 3D reconstruction from depth cameras, RGB-D cameras, stereo-derived depth, and/or 3D LiDAR.
- TSDF-based voxel mapping for surface reconstruction.
- ESDF distance-field computation for collision checking and path planning.
- 2D costmap output for Nav2-style navigation.
- Mesh visualization and RViz integration for inspecting reconstructions.
- GPU acceleration through the nvblox C++ library, with deployment focus on discrete NVIDIA GPUs and Jetson devices.
- Use in both [[NVIDIA-Isaac-for-Mobility]] navigation and [[NVIDIA-Isaac-for-Manipulation]] obstacle perception.

### NVIDIA context
nvblox is a durable bridge between NVIDIA perception and robot motion. In mobile robots it supports mapping and navigation, while in manipulation it provides obstacle geometry for [[Isaac-ROS-cuMotion]] planning. It is therefore one of the central Isaac ROS pages to query for scene reconstruction.

## Connections
- [[NVIDIA-Isaac-ROS]] - parent ROS 2 package ecosystem for nvblox.
- [[NVIDIA-Isaac-for-Mobility]] - uses nvblox-style mapping and costmaps in AMR workflows.
- [[NVIDIA-Isaac-for-Manipulation]] - uses nvblox for environment and obstacle perception.
- [[Isaac-ROS-Visual-SLAM]] - pose/odometry source that can feed nvblox reconstruction.
- [[Isaac-ROS-Visual-Global-Localization]] - global pose/relocalization path adjacent to mapping and costmaps.
- [[Isaac-ROS-cuMotion]] - can consume reconstructed obstacle representations for collision-aware motion planning.
- [[Isaac-ROS-DNN-Stereo-Depth]] - stereo depth source for reconstruction and obstacle maps.
- [[Isaac-ROS-Image-Segmentation]] - segmentation masks can be fused with depth/reconstruction workflows.
- [[Isaac-ROS-Image-Pipeline]] - camera preprocessing layer that can feed depth and reconstruction.
- [[Isaac-ROS-FoundationStereo]] - stereo-depth source that can feed reconstruction.
- [[Isaac-ROS-NITROS]] - accelerated transport layer for depth, pose, point-cloud, and occupancy-grid data.
- [[NVIDIA-Jetson-Platform]] - edge deployment target for GPU-accelerated robot mapping.
- [[NVIDIA-Isaac-Sim]] - simulation source for depth, pose, and reconstruction tutorials.
- [[NVIDIA-VPI]] - adjacent Jetson vision acceleration layer for camera and stereo processing.

## Source Excerpts
- NVIDIA docs describe nvblox as a reconstruction and mapping library targeted at robotics.
- Isaac ROS Nvblox processes depth and pose to reconstruct a 3D scene in real time and outputs a 2D costmap for navigation.
- NVIDIA docs note that nvblox is optimized for discrete NVIDIA GPUs and Jetson devices.

## Resources
- [Nvblox Concept](https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/index.html)
- [Isaac ROS Nvblox](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_nvblox/index.html)
