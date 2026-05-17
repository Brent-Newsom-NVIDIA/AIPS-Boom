# Isaac ROS Image Pipeline

**Type:** Library / ROS Package
**Tags:** NVIDIA, Isaac ROS, image pipeline, image processing, stereo, rectification, resize, CUDA, VPI, NITROS, Jetson
**Related:** [[NVIDIA-Isaac-ROS]], [[Isaac-ROS-NITROS]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-AprilTag]], [[Isaac-ROS-FoundationStereo]], [[NVIDIA-VPI]], [[NVIDIA-Jetson-Platform]], [[CV-CUDA]]
**Sources:** https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_image_pipeline/index.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
Isaac ROS Image Pipeline is NVIDIA's accelerated ROS 2 image-processing metapackage for camera preprocessing and stereo image processing. It replaces CPU-heavy ROS image-pipeline stages with GPU and specialized-hardware accelerated nodes for operations such as rectification, resize, crop, mirroring, lens-distortion correction, color conversion, disparity, and point-cloud generation.

## Detail

### Purpose
Camera data often needs preprocessing before perception models, stereo depth, AprilTag detection, or mapping can use it. Isaac ROS Image Pipeline offloads common image-processing work from CPU to NVIDIA GPU and specialized hardware engines so robot CPUs remain available for control and coordination tasks.

### Key capabilities
- Accelerated replacement path for ROS `image_pipeline` workflows on Jetson and NVIDIA GPU systems.
- Image preprocessing including crop, resize, mirroring, lens-distortion correction, and color-space conversion.
- Stereo processing for disparity and point-cloud generation.
- Graph paths where rectified and resized images feed stereo disparity, DNN perception, AprilTag detection, and mapping.
- NITROS acceleration for optimized message formats.
- Current release support for ROS 2 Jazzy, JetPack 7.1, Jetson Thor, x86_64 NVIDIA GPUs, and DGX Spark signals.

### NVIDIA context
Image Pipeline is the camera-preprocessing layer underneath many Isaac ROS perception pages. It feeds [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-AprilTag]], [[Isaac-ROS-FoundationStereo]], and [[Isaac-ROS-nvblox]] with hardware-accelerated image transformations.

## Connections
- [[NVIDIA-Isaac-ROS]] - parent ROS 2 package ecosystem.
- [[Isaac-ROS-NITROS]] - accelerated transport layer used by image pipeline nodes.
- [[Isaac-ROS-DNN-Inference]] - model inference graphs often require image preprocessing.
- [[Isaac-ROS-DNN-Stereo-Depth]] - stereo images need rectification and preprocessing before disparity estimation.
- [[Isaac-ROS-AprilTag]] - common graph uses rectify and resize before tag detection.
- [[Isaac-ROS-FoundationStereo]] - deep stereo model path that consumes stereo images.
- [[NVIDIA-VPI]] - adjacent NVIDIA vision-processing library and Jetson hardware-backend layer.
- [[NVIDIA-Jetson-Platform]] - edge deployment target for accelerated camera processing.
- [[CV-CUDA]] - adjacent NVIDIA GPU image-processing library for AI preprocessing.

## Source Excerpts
- NVIDIA docs describe Isaac ROS Image Pipeline as a metapackage for image processing.
- The docs state that it is accelerated using GPU and specialized hardware engines.
- The package docs position it as a lower-CPU replacement for the standard ROS image_pipeline metapackage.

## Resources
- [Isaac ROS Image Pipeline](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_image_pipeline/index.html)
