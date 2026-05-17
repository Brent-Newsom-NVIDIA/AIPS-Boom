# Isaac ROS Visual Global Localization

**Type:** Library / ROS Package
**Tags:** NVIDIA, Isaac ROS, cuVGL, visual global localization, robotics, mapping, localization, stereo cameras, Jetson
**Related:** [[NVIDIA-Isaac-ROS]], [[NVIDIA-Isaac-for-Mobility]], [[Isaac-ROS-Visual-SLAM]], [[Isaac-ROS-nvblox]], [[Isaac-ROS-FoundationStereo]], [[Isaac-ROS-NITROS]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-Isaac-Sim]]
**Sources:** https://nvidia-isaac-ros.github.io/concepts/visual_global_localization/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_mapping_and_localization/isaac_ros_visual_global_localization/index.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
Isaac ROS Visual Global Localization is NVIDIA's ROS 2 support for cuVGL, CUDA-accelerated Visual Global Localization. It determines a robot or camera rig's global pose when the initial pose is unknown by using stereo images, a keyframe database, image retrieval, and relative pose estimation.

## Detail

### Purpose
Local visual odometry can estimate movement from a known start, but robots also need to recover or initialize their location in a mapped environment. cuVGL provides a GPU-accelerated global localization path that can bootstrap or support [[Isaac-ROS-Visual-SLAM]] in environments where GPS is unavailable.

### Key capabilities
- Global localization when the starting pose is unknown.
- Map creation from stereo camera images and external poses, such as poses from a SLAM system.
- Keyframe database, bag-of-words vocabulary, and image retrieval index for matching current views to mapped locations.
- Relative pose estimation from stereo images and absolute pose calculation against stored map poses.
- Single or multiple stereo image input support in the ROS package.
- cuVGL hinted localization workflow that can provide an initial global pose to cuVSLAM.
- Role in [[NVIDIA-Isaac-for-Mobility]] mapping, localization, and AMR navigation workflows.

### NVIDIA context
Visual Global Localization fills the gap between local odometry and map-frame robot localization. In the Isaac ROS graph it sits near [[Isaac-ROS-Visual-SLAM]], [[Isaac-ROS-nvblox]], and [[NVIDIA-Isaac-for-Mobility]] as part of the mobile-robot perception and navigation stack.

## Connections
- [[NVIDIA-Isaac-ROS]] - parent ROS 2 package ecosystem.
- [[NVIDIA-Isaac-for-Mobility]] - mobility workflow area where global localization is a core navigation capability.
- [[Isaac-ROS-Visual-SLAM]] - cuVGL can bootstrap cuVSLAM localization using an external initial global pose.
- [[Isaac-ROS-nvblox]] - mapping and navigation costmaps often rely on accurate pose/localization.
- [[Isaac-ROS-FoundationStereo]] - stereo image pairs can feed visual global localization workflows.
- [[Isaac-ROS-NITROS]] - accelerated transport layer for image and pose data in ROS graphs.
- [[NVIDIA-Jetson-Platform]] - edge deployment target for AMR localization workloads.
- [[NVIDIA-Isaac-Sim]] - simulation environment for generating and validating localization workflows.

## Source Excerpts
- NVIDIA docs describe cuVGL as CUDA-accelerated Visual Global Localization.
- The current docs describe map creation from stereo images and external poses, then localization through image retrieval and relative pose estimation.
- The ROS package takes a global localization map and raw or rectified stereo images as inputs and outputs a global pose.

## Resources
- [Visual Global Localization Concept](https://nvidia-isaac-ros.github.io/concepts/visual_global_localization/index.html)
- [isaac_ros_visual_global_localization](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_mapping_and_localization/isaac_ros_visual_global_localization/index.html)
