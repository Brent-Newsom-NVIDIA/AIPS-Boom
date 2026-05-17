# Isaac ROS FoundationStereo

**Type:** Model / ROS Package
**Tags:** NVIDIA, Isaac ROS, FoundationStereo, stereo depth, disparity, robotics, perception, CUDA, TensorRT, Jetson
**Related:** [[NVIDIA-Isaac-ROS]], [[NVIDIA-Isaac-for-Mobility]], [[NVIDIA-Isaac-for-Manipulation]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-NITROS]], [[Isaac-ROS-Visual-SLAM]], [[Isaac-ROS-nvblox]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-Jetson-Thor]], [[TensorRT]], [[NVIDIA-VPI]]
**Sources:** https://nvidia-isaac-ros.github.io/concepts/stereo_depth/foundationstereo/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_dnn_stereo_depth/isaac_ros_foundationstereo/index.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
Isaac ROS FoundationStereo is NVIDIA's Isaac ROS support for FoundationStereo, a foundation model for stereo depth estimation. It predicts disparity from stereo RGB image pairs and is useful when a robot needs depth from stereo cameras for mapping, reconstruction, perception, or manipulation.

## Detail

### Purpose
Stereo depth is a core input for mobile robots and manipulation systems. FoundationStereo provides a deep learning approach to disparity estimation that can generalize across scenes, camera types, lighting variation, occlusions, and non-standard camera parameters better than many classical stereo methods.

### Key capabilities
- Stereo disparity prediction from RGB stereo image pairs.
- Transformer-based deep stereo approach trained for broad generalization.
- FoundationStereo v2 support surfaced in current Isaac ROS release notes.
- Isaac ROS package and tutorials for running the model in ROS 2 pipelines.
- Best suited to applications where high-quality depth matters more than strict real-time performance.
- Depth output can feed [[Isaac-ROS-nvblox]] reconstruction, [[NVIDIA-Isaac-for-Mobility]] navigation, and [[NVIDIA-Isaac-for-Manipulation]] obstacle perception.

### NVIDIA context
FoundationStereo sits at the camera-perception edge of Isaac ROS. Its stereo-derived depth can become robot-world geometry through [[Isaac-ROS-nvblox]], which then supports mobile navigation or manipulation planning on [[NVIDIA-Jetson-Platform]] and other NVIDIA GPU systems.

## Connections
- [[NVIDIA-Isaac-ROS]] - parent ROS 2 package ecosystem for FoundationStereo.
- [[NVIDIA-Isaac-for-Mobility]] - AMR workflow where stereo depth can support mapping and navigation.
- [[NVIDIA-Isaac-for-Manipulation]] - manipulation workflow where stereo depth can feed obstacle perception.
- [[Isaac-ROS-DNN-Stereo-Depth]] - parent Isaac ROS stereo-depth package family that includes FoundationStereo.
- [[Isaac-ROS-DNN-Inference]] - DNN infrastructure for deep stereo disparity model execution.
- [[Isaac-ROS-NITROS]] - accelerated transport layer for disparity image and tensor data.
- [[Isaac-ROS-Visual-SLAM]] - adjacent stereo-camera mobility component.
- [[Isaac-ROS-nvblox]] - reconstruction layer that can consume depth generated from stereo cameras.
- [[NVIDIA-Jetson-Platform]] - robot-edge deployment family for Isaac ROS perception.
- [[NVIDIA-Jetson-Thor]] - current-generation Jetson platform surfaced in recent Isaac ROS release notes.
- [[TensorRT]] - inference optimization path for deep learning models in Isaac ROS.
- [[NVIDIA-VPI]] - adjacent accelerated vision library for stereo and image processing on Jetson.

## Source Excerpts
- NVIDIA docs describe FoundationStereo as a foundation model for stereo depth estimation.
- The model predicts per-pixel disparity from stereo camera image pairs.
- Isaac ROS release notes include FoundationStereo and FoundationStereo v2 support in current 4.x releases.

## Resources
- [FoundationStereo Concept](https://nvidia-isaac-ros.github.io/concepts/stereo_depth/foundationstereo/index.html)
- [isaac_ros_foundationstereo](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_dnn_stereo_depth/isaac_ros_foundationstereo/index.html)
