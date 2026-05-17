# Isaac ROS DNN Stereo Depth

**Type:** Model / ROS Package
**Tags:** NVIDIA, Isaac ROS, stereo depth, disparity, ESS, FoundationStereo, SGM, robotics, CUDA, TensorRT, NITROS
**Related:** [[NVIDIA-Isaac-ROS]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-FoundationStereo]], [[Isaac-ROS-nvblox]], [[Isaac-ROS-Image-Pipeline]], [[Isaac-ROS-NITROS]], [[NVIDIA-Isaac-for-Manipulation]], [[NVIDIA-Isaac-for-Mobility]], [[NVIDIA-Jetson-Platform]], [[TensorRT]]
**Sources:** https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_dnn_stereo_depth/index.html, https://nvidia-isaac-ros.github.io/concepts/stereo_depth/ess/index.html, https://nvidia-isaac-ros.github.io/concepts/stereo_depth/foundationstereo/index.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
Isaac ROS DNN Stereo Depth is NVIDIA's Isaac ROS package family for deep stereo disparity and depth estimation. It covers model paths such as ESS and [[Isaac-ROS-FoundationStereo]], comparing them against classical SGM-style stereo, and produces disparity maps that can be converted into depth and point clouds for robots.

## Detail

### Purpose
Robots need dense depth for obstacle avoidance, mapping, target tracking, and manipulation. DNN stereo methods learn matching costs and context from data, making them more robust in difficult regions such as textureless surfaces, reflections, occlusions, repetitive patterns, or minor calibration errors.

### Key capabilities
- Deep stereo disparity estimation from left/right stereo camera images.
- ESS support for Efficient Semi-Supervised stereo disparity, optimized for real-time or compute-constrained uses.
- [[Isaac-ROS-FoundationStereo]] support for higher-quality foundation-model stereo depth where real-time constraints are looser.
- SGM comparison context for classical stereo disparity.
- Use in [[NVIDIA-Isaac-for-Manipulation]] depth perception, including cuMotion-related workflows.
- Depth input for [[Isaac-ROS-nvblox]] reconstruction and [[NVIDIA-Isaac-for-Mobility]] navigation.
- NITROS acceleration for optimized disparity/image/tensor transport.

### NVIDIA context
DNN Stereo Depth is the depth-perception layer between cameras and robot geometry. It feeds [[Isaac-ROS-nvblox]] maps, [[Isaac-ROS-cuMotion]] manipulation planning, [[Isaac-ROS-Visual-SLAM]]/mobility workflows, and Jetson-based perception pipelines.

## Connections
- [[NVIDIA-Isaac-ROS]] - parent ROS 2 package ecosystem.
- [[Isaac-ROS-DNN-Inference]] - DNN inference infrastructure for deep stereo models.
- [[Isaac-ROS-FoundationStereo]] - foundation-model stereo depth path inside this family.
- [[Isaac-ROS-nvblox]] - reconstruction component that can consume stereo-derived depth.
- [[Isaac-ROS-Image-Pipeline]] - image preprocessing and stereo image processing layer.
- [[Isaac-ROS-NITROS]] - accelerated transport layer for disparity and image data.
- [[NVIDIA-Isaac-for-Manipulation]] - uses depth maps for obstacle perception and motion planning.
- [[NVIDIA-Isaac-for-Mobility]] - uses depth perception for navigation and obstacle avoidance.
- [[NVIDIA-Jetson-Platform]] - edge deployment target for stereo-depth workloads.
- [[TensorRT]] - optimized inference runtime for deep stereo models.

## Source Excerpts
- NVIDIA docs describe DNN-based stereo depth as overcoming limitations of classical geometry-based stereo in difficult scenes.
- The docs compare SGM, ESS, and FoundationStereo, with ESS and FoundationStereo providing smoother and more accurate disparity in NVIDIA examples.
- ESS docs describe disparity prediction from stereo image pairs and converting disparity to depth or point clouds.

## Resources
- [Isaac ROS DNN Stereo Depth](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_dnn_stereo_depth/index.html)
- [ESS Concept](https://nvidia-isaac-ros.github.io/concepts/stereo_depth/ess/index.html)
- [FoundationStereo Concept](https://nvidia-isaac-ros.github.io/concepts/stereo_depth/foundationstereo/index.html)
