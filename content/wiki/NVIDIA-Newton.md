# NVIDIA Newton

**Type:** Technology
**Tags:** NVIDIA, robotics, physics simulation, physical AI, OpenUSD, Warp, Isaac Lab, Isaac Sim, MuJoCo, differentiable physics, Linux Foundation
**Related:** [[NVIDIA-Warp]], [[NVIDIA-Isaac]], [[NVIDIA-Isaac-Lab]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-Omniverse]], [[NVIDIA-DGX]], [[NVIDIA-RTX]]
**Sources:** https://developer.nvidia.com/newton-physics; https://developer.nvidia.com/blog/announcing-newton-an-open-source-physics-engine-for-robotics-simulation; https://developer.nvidia.com/blog/newton-adds-contact-rich-manipulation-and-locomotion-capabilities-for-industrial-robotics/
**Last Updated:** 2026-05-15

## Summary
NVIDIA Newton is an open-source, extensible, GPU-accelerated physics engine for robotics simulation and robot learning. It is built on NVIDIA Warp and OpenUSD, developed with Google DeepMind and Disney Research, and managed as a Linux Foundation project. For NVIDIA, Newton extends the physical AI stack by giving Isaac Lab, Isaac Sim, and robotics developers a modular simulation backend for contact-rich manipulation, locomotion, differentiable physics, and large-scale policy training.

## Detail

### Purpose
Newton addresses the sim-to-real problem in robotics: physical robots must learn and validate contact-rich behavior before deployment, but conventional simulators often force tradeoffs between fidelity, speed, and extensibility. Newton is designed to let robotics teams model rigid bodies, deformables, contacts, sensors, controls, and solver backends in one modular framework while keeping GPU-scale acceleration.

### Architecture
- Built on [[NVIDIA-Warp]], using Warp's Python-accessible GPU kernel model for simulation, AI, robotics, and machine learning workloads.
- Uses OpenUSD as a data layer for robot and environment descriptions, allowing simulation workflows to connect assets, scenes, and robot descriptions more cleanly.
- Integrates with [[NVIDIA-Isaac-Lab]] and [[NVIDIA-Isaac-Sim]], so reinforcement learning and imitation learning tasks can use Newton as a physics backend without rewriting the rest of the task.
- Supports MuJoCo Warp as a key solver path, bringing GPU-scale throughput to MuJoCo-style robot learning environments.
- Designed around pluggable solvers, so rigid-body, deformable, contact, collision, sensor, and custom solver components can be mixed in a consistent simulation stack.

### Key Capabilities
- GPU-accelerated simulation for parallel robot learning workloads.
- Extensible multiphysics through custom solvers, integrators, collision models, and numerical methods.
- Differentiable physics for training, system identification, design optimization, and gradient-based robot learning.
- Open-source development model intended to encourage broad robotics community adoption.
- Support for contact-rich manipulation and locomotion workflows where collision fidelity and solver stability matter.
- OpenUSD and Isaac integration for moving from robot description to trained policy and simulation evaluation.

### Newton 1.0 Capabilities
NVIDIA's March 2026 Newton 1.0 GA blog describes Newton as an accelerated, production-ready foundation for dexterous manipulation and locomotion tasks. The release highlights a stable API, multiple rigid-body solvers, deformable simulation, flexible collision detection, signed-distance-field collision, hydroelastic contact modeling, native integration with Isaac Sim and Isaac Lab early access releases, and a Warp-based tiled camera sensor for high-throughput perceptive reinforcement learning.

### Industrial Robotics Context
Newton is especially relevant to industrial physical AI because it targets tasks where simple point contacts or convex approximations are not enough. NVIDIA's examples include GPU rack assembly automation, connector insertion, board placement, fastening, and cable manipulation workflows. In those cases, signed distance fields, hydroelastic contact patches, deformable solvers, and Isaac Lab integration help train policies with richer physical feedback before deployment.

## Connections
- [[NVIDIA-Warp]] - Newton uses Warp as its GPU-accelerated foundation for simulation kernels and differentiable physics.
- [[NVIDIA-Isaac]] - Newton fits under Isaac as part of the broader robotics simulation and robot-learning stack.
- [[NVIDIA-Isaac-Lab]] - Newton integrates with Isaac Lab as a backend for reinforcement learning and imitation learning workflows.
- [[NVIDIA-Isaac-Sim]] - Newton connects to Isaac Sim for simulation and sensor workflows.
- [[NVIDIA-Omniverse]] - Newton uses OpenUSD concepts that align with Omniverse and Isaac Sim scene composition workflows.
- [[NVIDIA-DGX]] - Newton's GPU-parallel simulation and perceptive RL workloads can scale toward DGX-class training environments.
- [[NVIDIA-RTX]] - Newton's tiled camera sensor path uses ray-tracing-oriented rendering concepts for high-throughput visual observations.

## Source Excerpts
- developer.nvidia.com/newton-physics: "open-source, extensible physics engine built on NVIDIA Warp and OpenUSD"
- developer.nvidia.com/blog/announcing-newton-an-open-source-physics-engine-for-robotics-simulation: "being developed by NVIDIA, Google DeepMind, and Disney Research"
- developer.nvidia.com/blog/newton-adds-contact-rich-manipulation-and-locomotion-capabilities-for-industrial-robotics: "Newton 1.0 GA, announced at NVIDIA GTC 2026"
