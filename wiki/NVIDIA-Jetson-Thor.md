# NVIDIA Jetson Thor

**Type:** Platform
**Tags:** NVIDIA, Jetson Thor, Jetson AGX Thor, Jetson T5000, Jetson T4000, Blackwell, physical AI, robotics, edge AI, JetPack
**Related:** [[NVIDIA-Jetson-Platform]], [[NVIDIA-JetPack-SDK]], [[NVIDIA-Jetson-Linux]], [[NVIDIA-Isaac-GR00T]], [[NVIDIA-Isaac-ROS]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-MIG]], [[NVIDIA-DRIVE-AGX-Thor]]
**Sources:** https://developer.nvidia.com/embedded/develop/hardware, https://developer.nvidia.com/embedded/buy-jetson, https://developer.nvidia.com/blog/?p=104879, https://docs.nvidia.com/jetson/archives/r38.4/DeveloperGuide/
**Last Updated:** 2026-04-29

## Summary
NVIDIA Jetson Thor is the Blackwell-generation Jetson platform for physical AI, humanoid robotics, advanced medical systems, and autonomous machines. Public NVIDIA material describes Jetson AGX Thor / T5000-class hardware with up to 2070 FP4 TFLOPS, 128 GB memory, a 14-core Arm Neoverse-V3AE CPU, Blackwell Tensor Cores, MIG support, PVA v3, high-speed camera/network I/O, and a JetPack 7 software stack. This page consolidates Jetson Thor/T5000/T4000 information into one canonical topic rather than separate pages for each SKU.

## Detail

### Purpose
Jetson Thor brings data-center-generation AI capabilities into a power-constrained embedded module for real-time physical AI. It targets robots and autonomous machines that need local multimodal reasoning, perception, planning, control, and sensor processing without round-tripping to the cloud.

### Key capabilities
- Blackwell-generation integrated GPU and Tensor Core stack for FP4/FP8 generative AI and VLA-style workloads.
- Up to 2070 FP4 TFLOPS and 128 GB memory on the top Thor/T5000-class configuration.
- Jetson T4000 tier with lower memory/performance/power targets for scaled physical AI deployments.
- MIG support for isolating workloads on a single embedded GPU, useful for mixed-criticality robot workloads.
- PVA v3, optical-flow acceleration, video encode/decode blocks, and high-speed camera connectivity for perception pipelines.
- QSFP, Ethernet, USB, PCIe, CAN, and other I/O on the developer kit for sensor fusion and robot prototyping.
- [[NVIDIA-JetPack-SDK]] 7.x and [[NVIDIA-Jetson-Linux]] 38.x software stack with Ubuntu 24.04/kernel 6.8-era platform direction.

### NVIDIA context
Jetson Thor is the deployment endpoint for NVIDIA's current physical AI stack. It connects [[NVIDIA-Isaac-GR00T]] humanoid foundation models, [[NVIDIA-Isaac-ROS]] deployment packages, [[NVIDIA-JetPack-SDK]] edge software, [[NVIDIA-Blackwell-Architecture]] compute capabilities, and [[NVIDIA-MIG]] workload partitioning in an embedded form factor.

## Connections
- [[NVIDIA-Jetson-Platform]] - parent Jetson family page covering Thor, Orin, and earlier Jetson generations.
- [[NVIDIA-JetPack-SDK]] - software stack for Thor-class Jetson devices.
- [[NVIDIA-Jetson-Linux]] - Jetson Linux 38.x is the current Thor-focused BSP/software branch.
- [[NVIDIA-Isaac-GR00T]] - humanoid robotics workflows reference Jetson AGX Thor as robot-side compute.
- [[NVIDIA-Isaac-ROS]] - ROS 2 acceleration stack for Jetson robot deployment.
- [[NVIDIA-Blackwell-Architecture]] - Thor uses Blackwell-generation GPU technology.
- [[NVIDIA-MIG]] - Thor brings Multi-Instance GPU style isolation into the Jetson physical AI platform.
- [[NVIDIA-DRIVE-AGX-Thor]] - automotive Thor counterpart for DRIVE AGX development.

## Source Excerpts
- NVIDIA developer pages position Jetson Thor modules as physical AI and robotics platforms with up to 2070 FP4 TFLOPS and 128 GB memory.
- NVIDIA's Jetson Thor blog highlights Blackwell GPU architecture, MIG, PVA v3, and extensive I/O for humanoid robotics and sensor fusion.
- Jetson Linux 38.4 documentation lists Jetson Thor/T5000/T4000 support as part of the current Jetson Linux branch.

## Resources
- [Jetson Modules](https://developer.nvidia.com/embedded/develop/hardware)
- [Buy Jetson Products](https://developer.nvidia.com/embedded/buy-jetson)
- [Introducing Jetson Thor](https://developer.nvidia.com/blog/?p=104879)
- [Jetson Linux 38.4 Developer Guide](https://docs.nvidia.com/jetson/archives/r38.4/DeveloperGuide/)
