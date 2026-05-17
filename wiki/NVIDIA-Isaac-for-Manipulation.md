# NVIDIA Isaac for Manipulation

**Type:** Reference Architecture
**Tags:** NVIDIA, Isaac, Isaac ROS, robotics, manipulation, robot arms, motion planning, CUDA, cuMotion, Jetson
**Related:** [[NVIDIA-Isaac]], [[NVIDIA-Isaac-ROS]], [[Isaac-ROS-cuMotion]], [[Isaac-ROS-nvblox]], [[Isaac-ROS-FoundationPose]], [[Isaac-ROS-FoundationStereo]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-Image-Segmentation]], [[Isaac-ROS-Image-Pipeline]], [[Isaac-ROS-AprilTag]], [[Isaac-ROS-NITROS]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-Isaac-Lab]], [[NVIDIA-Jetson-Platform]], [[TensorRT]]
**Sources:** https://nvidia-isaac-ros.github.io/reference_workflows/isaac_for_manipulation/reference_architecture.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_cumotion/index.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Isaac for Manipulation is the current Isaac ROS reference architecture for perception-driven robot-arm manipulation. It brings together GPU-accelerated perception, depth processing, 3D reconstruction, object pose estimation, robot configuration, and [[Isaac-ROS-cuMotion]] planning so a robotic arm can perform collision-aware manipulation tasks. Current Isaac ROS release notes identify this workflow family as the current name for the workflows formerly known as Isaac Manipulator.

## Detail

### Purpose
Isaac for Manipulation gives robotics teams a validated starting architecture for building accelerated pick-and-place, inspection, object-following, and contact-rich manipulation systems. The workflow is designed to run with real cameras and robots, with simulated robots in [[NVIDIA-Isaac-Sim]], and with deployment targets such as Jetson Orin or Ampere-and-newer NVIDIA GPU systems.

### Key capabilities
- Reference architecture for robotic arms using NVIDIA-accelerated Isaac ROS components.
- Visual input from live or simulated RGB/depth cameras, including stereo-depth paths such as [[Isaac-ROS-FoundationStereo]] or ESS.
- Environment and obstacle perception through [[Isaac-ROS-nvblox]] scene reconstruction.
- Object and goal-state estimation with pose-estimation components such as [[Isaac-ROS-FoundationPose]].
- DNN inference, object detection, segmentation, and stereo depth through [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-Image-Segmentation]], and [[Isaac-ROS-DNN-Stereo-Depth]] when workflows need object candidates or model-backed perception.
- Robot configuration through URDF plus XRDF-style collision and configuration-space metadata.
- Collision-free, time-optimized motion planning through [[Isaac-ROS-cuMotion]] and MoveIt 2 integration.
- Accelerated ROS graph transport through [[Isaac-ROS-NITROS]].
- Sim-to-real tutorials that connect [[NVIDIA-Isaac-Lab]], [[NVIDIA-Isaac-Sim]], Isaac ROS, and physical robot execution.

### Current naming
- Isaac ROS 4.x documentation uses **Isaac for Manipulation** for this current reference-workflow area.
- Earlier public material may use **Isaac Manipulator**; keep that as an alias in search context, but keep this page as the canonical wiki page.
- Individual tutorials, bringup packages, orchestration packages, and robot-specific examples should be folded into this page or into the relevant durable component page instead of becoming separate wiki pages.

### NVIDIA context
Isaac for Manipulation is where NVIDIA's robotics deployment stack becomes an integrated manipulation workflow. It combines [[NVIDIA-Isaac-ROS]] packages, [[TensorRT]]-optimized perception models, [[NVIDIA-Isaac-Sim]] simulation, [[NVIDIA-Isaac-Lab]] policy workflows, and [[NVIDIA-Jetson-Platform]] deployment hardware into one robot-arm architecture.

## Connections
- [[NVIDIA-Isaac]] - parent robotics and physical AI platform for Isaac for Manipulation.
- [[NVIDIA-Isaac-ROS]] - ROS 2 package family that hosts the reference workflow and core components.
- [[Isaac-ROS-cuMotion]] - GPU-accelerated motion planning and robot segmentation component.
- [[Isaac-ROS-nvblox]] - 3D reconstruction and obstacle representation for collision-aware planning.
- [[Isaac-ROS-FoundationPose]] - pose-estimation model family for object/goal-state estimation.
- [[Isaac-ROS-FoundationStereo]] - stereo-depth foundation model useful when RGB stereo cameras provide depth.
- [[Isaac-ROS-DNN-Stereo-Depth]] - parent deep stereo-depth package family for ESS and FoundationStereo.
- [[Isaac-ROS-DNN-Inference]] - inference infrastructure for model-backed manipulation perception.
- [[Isaac-ROS-Object-Detection]] - detection package family for locating objects before pose estimation or manipulation.
- [[Isaac-ROS-Image-Segmentation]] - semantic segmentation package family for pixel-level object or obstacle understanding.
- [[Isaac-ROS-Image-Pipeline]] - camera preprocessing layer for manipulation perception.
- [[Isaac-ROS-AprilTag]] - fiducial detection package useful for calibration and workspace setup.
- [[Isaac-ROS-NITROS]] - accelerated transport layer for Isaac ROS manipulation graphs.
- [[NVIDIA-Isaac-Sim]] - simulation environment for manipulation tutorials, sensor simulation, and validation.
- [[NVIDIA-Isaac-Lab]] - robot-learning framework used in sim-to-real manipulation workflows.
- [[NVIDIA-Jetson-Platform]] - edge deployment family for robot-side Isaac ROS workloads.
- [[TensorRT]] - inference optimization path for perception components in the workflow.

## Source Excerpts
- Current Isaac ROS docs describe Isaac for Manipulation as GPU-accelerated libraries and packages for perception-driven manipulation with robotic arms.
- The reference architecture lists visual input, environment perception, robot configuration, goal-state estimation, motion planning, and hardware platform blocks.
- Isaac ROS release notes identify Isaac for Manipulation as the current name for workflows formerly known as Isaac Manipulator.

## Resources
- [Isaac for Manipulation Reference Architecture](https://nvidia-isaac-ros.github.io/reference_workflows/isaac_for_manipulation/reference_architecture.html)
- [Isaac ROS cuMotion](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_cumotion/index.html)
- [Isaac ROS Release Notes](https://nvidia-isaac-ros.github.io/releases/index.html)
