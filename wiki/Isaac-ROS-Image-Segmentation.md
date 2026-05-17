# Isaac ROS Image Segmentation

**Type:** Model / ROS Package
**Tags:** NVIDIA, Isaac ROS, image segmentation, semantic segmentation, U-Net, SegFormer, Segment Anything, robotics, TensorRT, NITROS
**Related:** [[NVIDIA-Isaac-ROS]], [[NVIDIA-TAO]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-NITROS]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-nvblox]], [[NVIDIA-Isaac-for-Manipulation]], [[NVIDIA-Isaac-for-Mobility]], [[TensorRT]], [[NVIDIA-Jetson-Platform]], [[NGC]]
**Sources:** https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_image_segmentation/index.html, https://nvidia-isaac-ros.github.io/concepts/dnn_inference/index.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
Isaac ROS Image Segmentation is NVIDIA's ROS 2 package family for GPU-accelerated semantic image segmentation in robot perception graphs. It classifies image pixels into defined classes and can combine segmentation masks with depth to support 3D scene understanding for mobility, manipulation, and inspection.

## Detail

### Purpose
Object detection answers where an object is in a bounding box; segmentation answers which pixels belong to each class. Isaac ROS Image Segmentation provides model wrappers, encoders, decoders, and ROS graph pieces for pixel-level scene understanding in robot applications.

### Key capabilities
- Semantic segmentation of input images at pixel level through GPU-accelerated DNN inference.
- Package coverage for U-Net, SegFormer, Segment Anything, and Segment Anything 2 workflows.
- NGC model paths for pre-trained segmentation models such as PeopleSemSegNet and PeopleSemSegFormer.
- Integration with [[Isaac-ROS-DNN-Inference]] image-to-tensor processing and TensorRT-style optimized inference.
- NITROS acceleration for optimized image, tensor, and mask transport.
- Ability to fuse segmentation results with depth from stereo or RGB-D sources to reason about class locations in 3D.

### NVIDIA context
Image segmentation is a richer perception primitive than bounding-box detection. In Isaac ROS it connects [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-NITROS]], [[Isaac-ROS-nvblox]], [[NVIDIA-Jetson-Platform]], and higher-level workflows such as [[NVIDIA-Isaac-for-Mobility]] and [[NVIDIA-Isaac-for-Manipulation]].

## Connections
- [[NVIDIA-Isaac-ROS]] - parent ROS 2 package ecosystem.
- [[NVIDIA-TAO]] - fine-tuning and optimization surface for segmentation models such as SegFormer, U-Net, Mask2Former, and related model families.
- [[Isaac-ROS-DNN-Inference]] - encoder/inference/decoder infrastructure for segmentation models.
- [[Isaac-ROS-NITROS]] - accelerated transport layer used by segmentation graphs.
- [[Isaac-ROS-Object-Detection]] - adjacent bounding-box perception package family.
- [[Isaac-ROS-nvblox]] - segmentation masks can be fused with depth/reconstruction workflows.
- [[NVIDIA-Isaac-for-Manipulation]] - segmentation can help isolate objects and obstacles for manipulation.
- [[NVIDIA-Isaac-for-Mobility]] - segmentation can support scene understanding for AMRs.
- [[TensorRT]] - optimized inference runtime used by robotics perception models.
- [[NVIDIA-Jetson-Platform]] - edge deployment target for segmentation perception workloads.

## Source Excerpts
- NVIDIA docs describe Isaac ROS Image Segmentation as ROS packages for semantic image segmentation.
- The docs list U-Net, SegFormer, Segment Anything, and Segment Anything 2 package families.
- The package docs state that image segmentation is powered by NITROS acceleration.

## Resources
- [Isaac ROS Image Segmentation](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_image_segmentation/index.html)
