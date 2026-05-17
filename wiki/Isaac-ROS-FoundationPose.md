# Isaac ROS FoundationPose

**Type:** Model / ROS Package
**Tags:** NVIDIA, Isaac ROS, FoundationPose, pose estimation, 6DoF, robotics, manipulation, CUDA, TensorRT, Jetson
**Related:** [[NVIDIA-Isaac-ROS]], [[NVIDIA-Isaac-for-Manipulation]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-NITROS]], [[Isaac-ROS-cuMotion]], [[Isaac-ROS-nvblox]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-Jetson-Platform]], [[TensorRT]], [[Triton-Inference-Server]]
**Sources:** https://nvidia-isaac-ros.github.io/concepts/pose_estimation/foundationpose/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_pose_estimation/isaac_ros_foundationpose/index.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
Isaac ROS FoundationPose is NVIDIA's Isaac ROS support for FoundationPose, a pre-trained model for six-degree-of-freedom object pose estimation and tracking. It estimates the pose of 3D objects from visual inputs and a CAD model without retraining for each novel object, making it important for manipulation workflows that need object or goal-state pose.

## Detail

### Purpose
Manipulation systems need to know where target objects are in 3D before they can plan a grasp, insertion, or object-following motion. FoundationPose provides a model-based 6DoF pose estimation path that can generalize to novel objects when supplied with the required object representation and visual inputs.

### Key capabilities
- 6DoF object pose estimation for 3D objects.
- Uses image/depth inputs, detection context, and a 3D CAD model rather than requiring per-object retraining.
- Tracking path for maintaining pose over time after initialization.
- Isaac ROS package and tutorials for running FoundationPose in ROS 2 pipelines.
- High GPU memory requirements for FP32 pipelines; deployment should be checked against target GPU and release notes.
- Role in [[NVIDIA-Isaac-for-Manipulation]] as a goal-state or object pose-estimation component.

### NVIDIA context
FoundationPose links NVIDIA foundation-model research to practical robot manipulation. In Isaac ROS it sits between perception and planning: models estimate object state, [[Isaac-ROS-nvblox]] and sensors represent the environment, and [[Isaac-ROS-cuMotion]] plans the arm trajectory.

## Connections
- [[NVIDIA-Isaac-ROS]] - parent ROS 2 package ecosystem for FoundationPose.
- [[NVIDIA-Isaac-for-Manipulation]] - reference workflow that uses pose estimation for goal-state estimation.
- [[Isaac-ROS-DNN-Inference]] - inference infrastructure adjacent to pose-estimation model execution.
- [[Isaac-ROS-Object-Detection]] - detection context can identify candidate objects before 6DoF pose estimation.
- [[Isaac-ROS-NITROS]] - accelerated image/tensor/detection transport layer for Isaac ROS perception graphs.
- [[Isaac-ROS-cuMotion]] - motion planner that can consume object or goal poses from perception.
- [[Isaac-ROS-nvblox]] - obstacle/environment representation used alongside pose estimation.
- [[NVIDIA-Isaac-Sim]] - simulation environment for generating assets, scenes, and pose-estimation tutorials.
- [[NVIDIA-Jetson-Platform]] - edge deployment target; release notes and docs should be checked for memory and performance.
- [[TensorRT]] - common optimization path for deep learning inference in Isaac ROS perception pipelines.
- [[Triton-Inference-Server]] - optional model-serving layer for complex robot perception deployments.

## Source Excerpts
- NVIDIA docs describe FoundationPose as a pre-trained model for estimating 6DoF pose of 3D objects.
- The current Isaac ROS docs state that FoundationPose can handle different and novel objects without retraining.
- Isaac ROS package docs include quickstart assets and note a roughly 7 GB peak GPU memory requirement for the FP32 pipeline.

## Resources
- [FoundationPose Concept](https://nvidia-isaac-ros.github.io/concepts/pose_estimation/foundationpose/index.html)
- [isaac_ros_foundationpose](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_pose_estimation/isaac_ros_foundationpose/index.html)
