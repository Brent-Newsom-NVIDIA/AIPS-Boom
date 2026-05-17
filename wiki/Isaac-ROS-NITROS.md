# Isaac ROS NITROS

**Type:** Technology / ROS Package
**Tags:** NVIDIA, Isaac ROS, NITROS, ROS 2, CUDA, zero-copy, type adaptation, type negotiation, Jetson
**Related:** [[NVIDIA-Isaac-ROS]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Visual-SLAM]], [[Isaac-ROS-nvblox]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-Image-Segmentation]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-Image-Pipeline]], [[Isaac-ROS-Compression]], [[Isaac-ROS-SIPL-Camera]], [[Isaac-ROS-FoundationStereo]], [[Isaac-ROS-FoundationPose]], [[NVIDIA-Jetson-Platform]], [[CUDA-Driver-API]]
**Sources:** https://nvidia-isaac-ros.github.io/concepts/nitros/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_nitros/index.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
Isaac ROS NITROS is NVIDIA Isaac Transport for ROS, NVIDIA's implementation of ROS 2 type adaptation and type negotiation for accelerated ROS graphs. It lets NVIDIA-accelerated Isaac ROS nodes exchange hardware-friendly data representations, reduce CPU/device memory copies, and preserve compatibility with standard ROS message types.

## Detail

### Purpose
High-bandwidth robot perception graphs can spend too much time moving camera, tensor, point-cloud, odometry, and detection data between CPU memory and accelerator memory. NITROS gives Isaac ROS nodes a way to negotiate the best transport type and move data through NVIDIA-accelerated graphs with lower overhead.

### Key capabilities
- ROS 2 type adaptation and type negotiation for NVIDIA-accelerated graph execution.
- Zero-copy-oriented transport between compatible NITROS-accelerated nodes running in the same process.
- NITROS types for images, camera info, tensor lists, disparity images, point clouds, occupancy grids, odometry, detections, poses, twists, and IMU data.
- `isaac_ros_managed_nitros` wrappers for adding NITROS-compatible publishers/subscribers to CUDA-based ROS nodes.
- `isaac_ros_nitros_bridge` for inter-process communication.
- PyNITROS support for Python-facing NITROS development.
- Common acceleration layer under packages such as [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-Image-Segmentation]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-Image-Pipeline]], [[Isaac-ROS-Compression]], [[Isaac-ROS-SIPL-Camera]], [[Isaac-ROS-nvblox]], and [[Isaac-ROS-Visual-SLAM]].

### NVIDIA context
NITROS is one of the foundation layers that makes Isaac ROS a GPU-native robotics stack rather than a collection of isolated inference nodes. It connects ROS 2 graph semantics to CUDA, TensorRT, Triton, and Jetson hardware realities.

## Connections
- [[NVIDIA-Isaac-ROS]] - parent ROS 2 ecosystem for NITROS.
- [[Isaac-ROS-DNN-Inference]] - inference graph package powered by NITROS acceleration.
- [[Isaac-ROS-Object-Detection]] - object detection packages use NITROS for accelerated message transport.
- [[Isaac-ROS-Image-Segmentation]] - segmentation packages use NITROS for accelerated message transport.
- [[Isaac-ROS-DNN-Stereo-Depth]] - stereo depth packages use NITROS for image/disparity transport.
- [[Isaac-ROS-Image-Pipeline]] - camera preprocessing package family powered by NITROS.
- [[Isaac-ROS-Compression]] - H.264 camera compression package family powered by NITROS.
- [[Isaac-ROS-SIPL-Camera]] - SIPL camera package with zero-copy NITROS publishing.
- [[Isaac-ROS-Visual-SLAM]] - visual SLAM package that participates in accelerated ROS graphs.
- [[Isaac-ROS-nvblox]] - mapping and reconstruction component that consumes high-bandwidth image/depth/pose data.
- [[Isaac-ROS-FoundationStereo]] - stereo disparity output can move through NITROS data types.
- [[Isaac-ROS-FoundationPose]] - pose-estimation pipelines use image/tensor/detection transport patterns.
- [[NVIDIA-Jetson-Platform]] - primary edge hardware target for NITROS-accelerated ROS graphs.

## Source Excerpts
- NVIDIA docs describe NITROS as NVIDIA Isaac Transport for ROS.
- NITROS implements ROS 2 type adaptation and type negotiation for accelerated graphs.
- The package docs list core NITROS packages including managed NITROS, NITROS Bridge, NITROS types, and PyNITROS.

## Resources
- [NITROS Concept](https://nvidia-isaac-ros.github.io/concepts/nitros/index.html)
- [Isaac ROS NITROS](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_nitros/index.html)
