# Isaac ROS DNN Inference

**Type:** Library / ROS Package
**Tags:** NVIDIA, Isaac ROS, DNN inference, TensorRT, Triton, robotics, perception, CUDA, NITROS, Jetson
**Related:** [[NVIDIA-Isaac-ROS]], [[NVIDIA-TAO]], [[Isaac-ROS-NITROS]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-Image-Segmentation]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-FoundationPose]], [[Isaac-ROS-FoundationStereo]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-Jetson-Platform]], [[NGC]]
**Sources:** https://nvidia-isaac-ros.github.io/concepts/dnn_inference/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_dnn_inference/index.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
Isaac ROS DNN Inference is NVIDIA's ROS 2 package family for running deep neural network inference inside robot perception graphs. It provides image-to-tensor encoding, TensorRT and Triton inference nodes, tensor post-processing, and model-specific decoder paths for object detection, segmentation, stereo depth, and pose estimation.

## Detail

### Purpose
Robot perception graphs usually turn sensor streams into tensors, run an optimized model, then decode tensors into detections, masks, depth, poses, or other semantic outputs. Isaac ROS DNN Inference provides the ROS 2 infrastructure for that encoder/inference/decoder pattern on NVIDIA GPUs.

### Key capabilities
- DNN image encoder utilities for converting image inputs into model-ready tensors.
- TensorRT node for high-performance local inference on Jetson and discrete NVIDIA GPUs.
- Triton node for serving models through [[Triton-Inference-Server]] backends such as TensorRT, ONNX Runtime, TensorFlow, and PyTorch.
- Tensor processing utilities and model-specific decoder integration.
- Robotics perception package support for object detection, image segmentation, stereo depth, and 3D pose estimation.
- NITROS acceleration for optimized message formats and graph communication.
- NGC pre-trained model usage and fine-tuning/deployment paths for robotics perception models.

### NVIDIA context
Isaac ROS DNN Inference is the bridge between NVIDIA inference platforms and ROS 2 robot software. It connects [[TensorRT]], [[Triton-Inference-Server]], [[Isaac-ROS-NITROS]], [[NVIDIA-Jetson-Platform]], and higher-level perception packages such as [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-FoundationPose]], and [[Isaac-ROS-FoundationStereo]].

## Connections
- [[NVIDIA-Isaac-ROS]] - parent ROS 2 package ecosystem.
- [[NVIDIA-TAO]] - fine-tuning and optimization toolkit for CV models that can feed robotics inference paths.
- [[Isaac-ROS-NITROS]] - acceleration layer used by DNN inference packages.
- [[Isaac-ROS-Object-Detection]] - object detection package family built on DNN inference infrastructure.
- [[Isaac-ROS-Image-Segmentation]] - semantic segmentation package family built on DNN inference infrastructure.
- [[Isaac-ROS-DNN-Stereo-Depth]] - deep stereo disparity/depth package family built on DNN inference infrastructure.
- [[Isaac-ROS-FoundationPose]] - 3D pose-estimation model path adjacent to Isaac ROS DNN inference.
- [[Isaac-ROS-FoundationStereo]] - DNN stereo depth model path adjacent to Isaac ROS DNN inference.
- [[TensorRT]] - direct optimized inference node in Isaac ROS DNN Inference.
- [[Triton-Inference-Server]] - model-serving inference node option for models that need broader backend support.
- [[NVIDIA-Jetson-Platform]] - edge deployment target for robot DNN inference.
- [[NGC]] - source of NVIDIA-published pre-trained models and assets used in robotics inference workflows.

## Source Excerpts
- NVIDIA docs describe DNN inference as feeding tensors through a pre-trained model and decoding outputs into useful semantic results.
- Isaac ROS DNN Inference docs describe ROS 2 packages for DNN inference with TensorRT and Triton nodes.
- The docs state that DNN Inference is powered by NITROS acceleration.

## Resources
- [DNN Inference Concept](https://nvidia-isaac-ros.github.io/concepts/dnn_inference/index.html)
- [Isaac ROS DNN Inference](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_dnn_inference/index.html)
