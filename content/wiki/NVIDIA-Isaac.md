# NVIDIA Isaac

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Robotics, Simulation, ROS, Perception, Edge AI, Physical AI
**Related:** [[NVIDIA-Newton]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-Isaac-Lab]], [[NVIDIA-Isaac-ROS]], [[NVIDIA-Isaac-for-Manipulation]], [[NVIDIA-Isaac-for-Mobility]], [[NVIDIA-Isaac-GR00T]], [[Isaac-ROS-NITROS]], [[Isaac-ROS-Visual-SLAM]], [[Isaac-ROS-Visual-Global-Localization]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-cuMotion]], [[Isaac-ROS-nvblox]], [[Isaac-ROS-FoundationPose]], [[Isaac-ROS-FoundationStereo]], [[NVIDIA-Cosmos]], [[NIM-for-Cosmos-WFM]], [[NIM-for-Cosmos-Embed1]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-Warp]], [[NVIDIA-Omniverse]], [[TensorRT]]
**Sources:** https://developer.nvidia.com/isaac/, https://docs.isaacsim.omniverse.nvidia.com/latest/index.html, https://isaac-sim.github.io/IsaacLab/develop/index.html, https://nvidia-isaac-ros.github.io/, https://nvidia-isaac-ros.github.io/reference_workflows/isaac_for_manipulation/reference_architecture.html, https://nvidia-isaac-ros.github.io/reference_workflows/isaac_for_mobility/index.html, https://developer.nvidia.com/isaac/gr00t, https://docs.nvidia.com/nim/cosmos/latest/introduction.html, https://docs.nvidia.com/nim/cosmos-embed1/latest/introduction.html
**Last Updated:** 2026-05-15

## Summary
NVIDIA Isaac is the umbrella robotics and physical AI platform spanning simulation, robot learning, ROS 2 acceleration, perception, manipulation, humanoid foundation models, and edge deployment. Its durable subtopics now include [[NVIDIA-Isaac-Sim]] for Omniverse-based robot simulation, [[NVIDIA-Isaac-Lab]] for robot learning, [[NVIDIA-Isaac-ROS]] for CUDA-accelerated ROS 2 packages, [[NVIDIA-Isaac-for-Manipulation]] for current robot-arm reference workflows, [[NVIDIA-Isaac-for-Mobility]] for current AMR mobility workflows, and [[NVIDIA-Isaac-GR00T]] for humanoid robot foundation models and data pipelines. Together, Isaac connects synthetic data, training, simulation validation, and deployment on [[NVIDIA-Jetson-Platform]] and other NVIDIA accelerated systems.

## Detail

### Purpose
Isaac addresses the sim-to-real gap in robotics by combining photorealistic GPU simulation, scalable robot learning, accelerated ROS 2 deployment packages, and NVIDIA edge AI hardware. It gives developers a connected path from synthetic data and policy training to validation in simulation and real-world deployment.

### Key Features
- [[NVIDIA-Isaac-Sim]]: Omniverse-based robot simulation with OpenUSD, RTX sensors, GPU PhysX, Replicator, and ROS 2 bridges
- [[NVIDIA-Isaac-Lab]]: modular robot-learning framework for reinforcement learning, imitation learning, motion planning, and foundation-model workflows
- [[NVIDIA-Isaac-ROS]]: CUDA-accelerated ROS 2 packages, AI models, and reference workflows for deployed robots
- [[NVIDIA-Isaac-for-Manipulation]]: current Isaac ROS reference architecture for perception-driven robotic arm manipulation; formerly surfaced as Isaac Manipulator
- [[NVIDIA-Isaac-for-Mobility]]: current Isaac ROS mobility reference area continuing the Isaac Perceptor work for AMR perception, mapping, and navigation
- [[NVIDIA-Isaac-GR00T]]: humanoid robot foundation model platform and data pipelines for general-purpose robot skills
- [[Isaac-ROS-NITROS]], [[Isaac-ROS-Visual-SLAM]], [[Isaac-ROS-Visual-Global-Localization]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-cuMotion]], [[Isaac-ROS-nvblox]], [[Isaac-ROS-FoundationPose]], and [[Isaac-ROS-FoundationStereo]] as current durable Isaac ROS component pages for manipulation and mobility workflows
- Synthetic data generation with Isaac Sim, Replicator, Cosmos, [[NIM-for-Cosmos-WFM]], [[NIM-for-Cosmos-Embed1]], and domain randomization
- RTX ray tracing for photorealistic rendering of simulated environments
- Import support for URDF, MJCF, USD robot descriptions
- OpenUSD-based scene composition and asset management
- Mobility and AMR integration through current Isaac for Mobility / Isaac ROS workflows
- Jetson-optimized deployment packages

### Use Cases
- Autonomous mobile robot (AMR) navigation and fleet management
- Robot arm pick-and-place in warehouse and manufacturing
- Synthetic dataset generation for training perception models
- Sim-to-real transfer for reinforcement learning policies
- Surgical robot perception and manipulation research
- Humanoid robot training and policy development through [[NVIDIA-Isaac-GR00T]]
- Agricultural and inspection robot development

### Hardware Requirements / Compatibility
- Requirements vary by Isaac component and release.
- Simulation workflows typically require an NVIDIA RTX-capable GPU for full Isaac Sim rendering and sensor fidelity.
- Edge deployment targets include NVIDIA Jetson Orin and newer Jetson/Thor-family robot compute platforms.
- CUDA, JetPack, Isaac Sim, Isaac Lab, and Isaac ROS versions should be matched from the relevant release notes before deployment.

### Language Bindings
- Python (Isaac Sim, Isaac Lab, Isaac ROS Python nodes)
- C++ (Isaac ROS packages, cuRobo)
- ROS 2 (primary integration interface)

## Connections
- [[NVIDIA-Newton]] - Newton integrates with Isaac Lab and Isaac Sim as a physics and camera-sensor backend for robot learning.
- [[NVIDIA-Isaac-Sim]] - Omniverse-based simulator for robot development, synthetic data, and validation.
- [[NVIDIA-Isaac-Lab]] - robot-learning layer for RL, imitation learning, and policy training.
- [[NVIDIA-Isaac-ROS]] - deployment-side ROS 2 acceleration package family.
- [[NVIDIA-Isaac-for-Manipulation]] - current robot-arm manipulation reference workflow.
- [[NVIDIA-Isaac-for-Mobility]] - current mobile-robot mobility reference workflow continuing Isaac Perceptor.
- [[Isaac-ROS-NITROS]] - accelerated ROS 2 transport and type negotiation for Isaac ROS graphs.
- [[Isaac-ROS-Visual-SLAM]] - cuVSLAM package for visual odometry and SLAM.
- [[Isaac-ROS-Visual-Global-Localization]] - cuVGL package for global localization and relocalization.
- [[Isaac-ROS-DNN-Inference]] - TensorRT/Triton-backed DNN inference package family.
- [[Isaac-ROS-Object-Detection]] - robotics object-detection package family.
- [[Isaac-ROS-cuMotion]] - GPU-accelerated arm motion planning and robot segmentation component.
- [[Isaac-ROS-nvblox]] - scene reconstruction and costmap component for mobility and manipulation.
- [[Isaac-ROS-FoundationPose]] - 6DoF pose-estimation component for manipulation.
- [[Isaac-ROS-FoundationStereo]] - deep stereo-disparity component for robot depth perception.
- [[NVIDIA-Isaac-GR00T]] - humanoid robotics foundation model and data-pipeline platform.
- [[NVIDIA-Cosmos]] - world foundation models and synthetic data workflows for physical AI.
- [[NIM-for-Cosmos-WFM]] - deployable Cosmos Predict/Transfer models for world/video generation workflows.
- [[NIM-for-Cosmos-Embed1]] - video-text embedding NIM for robotics dataset search, deduplication, and curation.
- [[NVIDIA-Jetson-Platform]] - primary NVIDIA edge compute family for robot deployment.
- [[NVIDIA-Omniverse]] - Isaac Sim is built on Omniverse Kit, RTX, and OpenUSD.
- [[NVIDIA-Warp]] - GPU simulation and differentiable physics technology adjacent to Isaac Lab and Newton workflows.
- [[TensorRT]] - perception and policy models can be optimized for NVIDIA GPU inference.
- [[Triton-Inference-Server]] - optional inference backend for complex multi-model perception pipelines.
- [[PyTorch]] - common policy-training framework for Isaac Lab and robotics AI workloads.

## Resources
- [NVIDIA Isaac Developer Page](https://developer.nvidia.com/isaac/)
- [Isaac Sim Documentation](https://docs.isaacsim.omniverse.nvidia.com/latest/index.html)
- [Isaac Lab Documentation](https://isaac-sim.github.io/IsaacLab/develop/index.html)
- [Isaac ROS Documentation](https://nvidia-isaac-ros.github.io/)
- [Isaac for Manipulation Reference Architecture](https://nvidia-isaac-ros.github.io/reference_workflows/isaac_for_manipulation/reference_architecture.html)
- [Isaac for Mobility](https://nvidia-isaac-ros.github.io/reference_workflows/isaac_for_mobility/index.html)
- [Isaac GR00T](https://developer.nvidia.com/isaac/gr00t)
- [NVIDIA NGC Isaac Containers](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/isaac)
