# Isaac ROS cuMotion

**Type:** Library / ROS Package
**Tags:** NVIDIA, Isaac ROS, cuMotion, CUDA, robotics, manipulation, MoveIt, motion planning, robot segmentation
**Related:** [[NVIDIA-Isaac-ROS]], [[NVIDIA-Isaac-for-Manipulation]], [[Isaac-ROS-nvblox]], [[Isaac-ROS-FoundationPose]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-Isaac-Lab]], [[NVIDIA-Jetson-Platform]], [[CUDA-Cpp-Standard-Library]]
**Sources:** https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_cumotion/index.html, https://nvidia-isaac-ros.github.io/reference_workflows/isaac_for_manipulation/reference_architecture.html, https://nvidia-isaac-ros.github.io/releases/index.html
**Last Updated:** 2026-04-29

## Summary
Isaac ROS cuMotion is NVIDIA's ROS 2 integration for CUDA-accelerated robot-arm motion planning and manipulation support. It exposes cuMotion planning through MoveIt 2, supports robot segmentation from depth streams, and is a core component of [[NVIDIA-Isaac-for-Manipulation]].

## Detail

### Purpose
Robot arms need fast collision-aware motion plans that fit into ROS 2 and MoveIt workflows. Isaac ROS cuMotion brings NVIDIA GPU acceleration to planning, trajectory generation, and robot self-filtering so manipulation stacks can react to obstacles and produce smooth arm trajectories.

### Key capabilities
- MoveIt 2 integration that exposes cuMotion as an external planner.
- CUDA-accelerated motion generation for serial robot arms.
- Collision-aware trajectory planning against world and robot geometry.
- Robot segmentation from depth streams so reconstruction pipelines can avoid treating the robot arm as an obstacle.
- Optional integration with [[Isaac-ROS-nvblox]] for signed-distance-field obstacle representation.
- Example modes for standalone MoveIt, simulated robots in [[NVIDIA-Isaac-Sim]], and physical robot deployment.
- Object attachment and goal-setter interfaces that support manipulation workflows.

### NVIDIA context
Isaac ROS cuMotion is one of the clearest examples of NVIDIA CUDA acceleration inside ROS 2 robotics. It connects [[NVIDIA-Isaac-ROS]], [[NVIDIA-Isaac-for-Manipulation]], MoveIt 2, [[NVIDIA-Isaac-Sim]], and [[NVIDIA-Jetson-Platform]] into a deployable manipulation stack.

## Connections
- [[NVIDIA-Isaac-ROS]] - parent ROS 2 package ecosystem.
- [[NVIDIA-Isaac-for-Manipulation]] - reference workflow that uses cuMotion for collision-free motion generation.
- [[Isaac-ROS-nvblox]] - environment reconstruction and distance fields used for obstacle-aware planning.
- [[Isaac-ROS-FoundationPose]] - pose-estimation component that can provide goal/object state for manipulation.
- [[NVIDIA-Isaac-Sim]] - simulation target for cuMotion planning tutorials.
- [[NVIDIA-Isaac-Lab]] - robot-learning workflows can feed policies and sim-to-real manipulation paths around cuMotion.
- [[NVIDIA-Jetson-Platform]] - deployment hardware family for Isaac ROS robot stacks.

## Source Excerpts
- NVIDIA docs describe Isaac ROS cuMotion as CUDA-accelerated manipulation capabilities for ROS 2.
- The package provides motion generation through MoveIt 2 integration and robot segmentation from depth streams.
- Isaac for Manipulation uses cuMotion as its motion-planning component.

## Resources
- [Isaac ROS cuMotion](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_cumotion/index.html)
- [Isaac for Manipulation Reference Architecture](https://nvidia-isaac-ros.github.io/reference_workflows/isaac_for_manipulation/reference_architecture.html)
