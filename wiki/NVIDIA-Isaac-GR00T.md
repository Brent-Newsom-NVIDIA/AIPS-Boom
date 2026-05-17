# NVIDIA Isaac GR00T

**Type:** Platform
**Tags:** NVIDIA, Isaac, GR00T, humanoid robotics, robot foundation models, VLA, physical AI, Cosmos, Jetson Thor
**Related:** [[NVIDIA-Isaac]], [[NVIDIA-Isaac-Lab]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-Cosmos]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-Jetson-Thor]], [[NVIDIA-DGX-Cloud]]
**Sources:** https://developer.nvidia.com/isaac/gr00t, https://developer.nvidia.com/isaac/, https://huggingface.co/nvidia/GR00T-N1.6-3B
**Last Updated:** 2026-04-29

## Summary
NVIDIA Isaac GR00T is NVIDIA's humanoid robotics research initiative and development platform for general-purpose robot foundation models and data pipelines. It includes GR00T N vision-language-action model families, synthetic-data workflows such as GR00T-Mimic and GR00T-Dreams, robot learning through [[NVIDIA-Isaac-Lab]], simulation and validation through [[NVIDIA-Isaac-Sim]], and deployment targets such as Jetson AGX Thor. The current public model signal includes NVIDIA's GR00T-N1.6-3B model card for generalized humanoid manipulation skills.

## Detail

### Purpose
Humanoid robots need policies that can understand language and perception, reason about tasks, and generate continuous motor actions across different embodiments. Isaac GR00T organizes NVIDIA's humanoid robotics stack around model training, synthetic data generation, simulation, policy evaluation, and robot deployment.

### Key capabilities
- GR00T N robot foundation models for humanoid reasoning and manipulation.
- Vision-language-action policy structure that accepts visual observations, language instructions, and robot state/proprioception.
- Synthetic and real data workflows that use GR00T-Mimic, GR00T-Dreams, Cosmos, and simulation pipelines to expand robot training data.
- GR00T-Teleop, Mimic, Gen, Dexterity, Mobility, and Control workflows folded into a single humanoid development platform.
- Isaac Lab training and post-training path for robot policies.
- Isaac Sim validation path before deploying trained policies to real robots.
- NVIDIA compute stack across DGX for training, OVX/Omniverse/Cosmos for simulation, and Jetson AGX Thor for robot-side deployment.

### Current model signal
- NVIDIA's GR00T-N1.6-3B Hugging Face model card identifies it as an open VLA model for generalized humanoid robot skills.
- The model card lists multimodal inputs, including image frames, language instruction, and robot proprioception, and outputs continuous action vectors.
- The card describes a 3B-parameter BF16 model using PyTorch and NVIDIA GPU-accelerated systems, with compatibility spanning Ampere, Hopper, Lovelace, Blackwell, and Jetson.
- Treat GR00T-N1.6 as the current public model variant inside this canonical GR00T page, not as a separate wiki page.

### NVIDIA context
GR00T is a physical AI model platform rather than a single robot. It links [[NVIDIA-Cosmos]] world foundation models and synthetic data, [[NVIDIA-Isaac-Lab]] policy training, [[NVIDIA-Isaac-Sim]] validation, [[NVIDIA-Jetson-Platform]] deployment hardware, and [[NVIDIA-DGX-Cloud]] / DGX-style training infrastructure.

## Connections
- [[NVIDIA-Isaac]] - parent robotics platform and entry point for GR00T developer workflows.
- [[NVIDIA-Isaac-Lab]] - trains and post-trains robot policies used in GR00T workflows.
- [[NVIDIA-Isaac-Sim]] - validates trained policies in physically based simulation before deployment.
- [[NVIDIA-Cosmos]] - provides world foundation model and synthetic-data capabilities used in physical AI pipelines.
- [[NVIDIA-Jetson-Platform]] - deployment family for robot-side NVIDIA compute, including Jetson AGX Thor references.
- [[NVIDIA-Jetson-Thor]] - Blackwell-generation Jetson platform for humanoid robot deployment.
- [[NVIDIA-DGX-Cloud]] - cloud training infrastructure path for large robotics foundation models.

## Source Excerpts
- NVIDIA developer pages describe Isaac GR00T as a development platform for general-purpose robot foundation models and humanoid robotics data pipelines.
- NVIDIA's GR00T-N1.6-3B model card describes an open VLA model that takes images, language, and robot state to produce robot actions.
- The GR00T developer page ties the workflow to Omniverse, Cosmos, Isaac Lab, Isaac Sim, DGX, and Jetson AGX Thor.

## Resources
- [NVIDIA Isaac GR00T](https://developer.nvidia.com/isaac/gr00t)
- [NVIDIA Isaac Developer Page](https://developer.nvidia.com/isaac/)
- [GR00T-N1.6-3B Model Card](https://huggingface.co/nvidia/GR00T-N1.6-3B)
