# NVIDIA Jetson Platform

**Type:** Platform
**Tags:** NVIDIA, edge AI, embedded, IoT, robotics, autonomous machines, Jetson, JetPack, Jetson Linux, Blackwell, ARM, SoC
**Related:** [[NVIDIA-Jetson-Thor]], [[NVIDIA-JetPack-SDK]], [[NVIDIA-Jetson-Linux]], [[NVIDIA-VPI]], [[NVIDIA-Jetson-Platform-Services]], [[NVIDIA-DeepStream]], [[NVIDIA-TAO]], [[NVIDIA-Metropolis]], [[NVIDIA-Retail-ISV-Ecosystem]], [[Caper-by-Instacart]], [[Caper-Jetson-Smart-Cart-Retail-Deployments]], [[NVIDIA-Isaac]], [[NVIDIA-Isaac-ROS]], [[NVIDIA-Isaac-for-Manipulation]], [[NVIDIA-Isaac-for-Mobility]], [[Isaac-ROS-NITROS]], [[Isaac-ROS-Visual-SLAM]], [[Isaac-ROS-Visual-Global-Localization]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-Image-Segmentation]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-AprilTag]], [[Isaac-ROS-Image-Pipeline]], [[Isaac-ROS-Compression]], [[Isaac-ROS-SIPL-Camera]], [[Isaac-ROS-nvblox]], [[Isaac-ROS-FoundationStereo]], [[NVIDIA-Isaac-GR00T]], [[cuDLA]], [[NVIDIA-Drive-Platform]], [[TensorRT]]
**Sources:** https://docs.nvidia.com/jetson/, https://developer.nvidia.com/embedded/develop/hardware, https://developer.nvidia.com/embedded/faq, https://docs.nvidia.com/jetson/archives/r38.4/DeveloperGuide/, https://docs.nvidia.com/jetson/archives/r38.4/DeveloperGuide/AR/JetsonSoftwareArchitecture.html, https://www.instacart.com/company/updates/transforming-in-store-shopping-caper-carts-ai-magic-powered-by-nvidia-jetson/
**Last Updated:** 2026-05-17

## Summary
NVIDIA Jetson is the embedded AI computing platform for robots, autonomous machines, intelligent cameras, industrial systems, and physical AI devices. It combines NVIDIA GPUs, Arm CPUs, accelerators, video/camera hardware, high-speed I/O, [[NVIDIA-JetPack-SDK]], and [[NVIDIA-Jetson-Linux]] into production modules and developer kits. Current NVIDIA public material positions [[NVIDIA-Jetson-Thor]] as the Blackwell-generation physical AI platform while Jetson Orin remains the broad production family for many JetPack 6 deployments.

## Detail

### Purpose
AI inference workloads are increasingly needed at the edge — in robots, cameras, drones, industrial machines, and embedded devices — where cloud connectivity is unreliable, latency is critical, or data privacy prevents cloud offload. Jetson provides the compute density to run complex neural networks locally, from compact Orin deployments to Thor-class physical AI systems, with the same CUDA/TensorRT programming model used in data centers.

### Key Features

**Current and major Jetson families:**
- **[[NVIDIA-Jetson-Thor]] / Jetson T5000 and T4000:** Blackwell-generation physical AI modules for humanoid robotics, high-end edge AI, and real-time multimodal workloads.
- **Jetson Orin Nano (4/8 GB):** 20–40 TOPS AI performance; 5–10W; lowest-cost Orin for volume edge deployments
- **Jetson Orin NX (8/16 GB):** 70–100 TOPS; 10–20W; mid-range performance for smart cameras and compact robots
- **Jetson AGX Orin (32/64 GB):** 200–275 TOPS; 15–60W; top-tier Orin for autonomous machines and industrial robots
- **Jetson AGX Orin Industrial:** Industrial temperature range (-40°C to 85°C), extended lifetime supply for mission-critical deployments

**Previous Generation (still deployed):**
- **Jetson Xavier NX / AGX Xavier:** 15–32 TOPS; previous-gen for existing robot fleets
- **Jetson Nano / TX2:** Legacy; suitable for lightweight inference tasks

**Key hardware/software features:**
- **NVIDIA GPU cores:** Ampere-class GPU on Orin and Blackwell-generation GPU on Jetson Thor for CUDA, TensorRT, graphics, and generative AI workloads.
- **DLA / accelerators:** DLA on supported Orin/Xavier platforms and newer Thor-era accelerators for power-efficient perception and AI pipelines.
- **PVA (Programmable Vision Accelerator):** signal processing and computer vision operations; VPI 4.0 highlights PVA as part of Thor/Orin vision acceleration.
- **NVDEC/NVENC:** Hardware video decode (H.264/H.265/VP9/AV1) and encode for camera pipelines
- **MIG on Thor:** Multi-Instance GPU style partitioning for isolated mixed-criticality robot workloads.
- **JetPack SDK:** [[NVIDIA-JetPack-SDK]] bundles Jetson Linux, CUDA-X, TensorRT, cuDNN, VPI, DeepStream, samples, tools, and documentation.
- **Jetson Linux:** [[NVIDIA-Jetson-Linux]] provides the kernel, bootloader, drivers, firmware, flashing, root filesystem, and BSP layer.
- **VPI:** [[NVIDIA-VPI]] exposes CPU, CUDA, PVA, VIC, and OFA-backed computer vision/image processing algorithms where supported.
- **JPS:** [[NVIDIA-Jetson-Platform-Services]] provides modular edge AI services for video analytics, VLM, detection, storage, and APIs.

### Use Cases
- Mobile robots and AMRs (Autonomous Mobile Robots): real-time navigation, obstacle avoidance, and manipulation planning
- Intelligent cameras (IPC): local AI inference for retail analytics, security, and smart city without cloud dependency
- Smart carts and in-store retail devices: [[Caper-Jetson-Smart-Cart-Retail-Deployments]] provides named-retailer evidence for Caper Carts powered by NVIDIA Jetson.
- Industrial inspection: real-time defect detection on assembly lines at camera-side
- Drones: onboard perception for autonomous flight, mapping, and inspection
- Medical devices: bedside AI diagnostics and real-time imaging analysis
- Agricultural robotics: crop counting, disease detection, precision spraying with onboard AI
- Smart NVRs and edge video analytics with DeepStream for multi-camera processing

### Hardware Requirements / Compatibility
- **Carrier boards:** NVIDIA developer kits use reference carriers; production modules require customer or partner carrier-board integration.
- **JetPack 7 / Jetson Linux 38.x:** current Thor-focused stack using Ubuntu 24.04/kernel 6.8-era direction in NVIDIA public docs.
- **JetPack 6 / Jetson Linux 36.x:** production Jetson Orin stack; Jetson Linux 38.4 docs explicitly direct Orin users to 36.4.4.
- **JetPack 5:** sustaining mode for Jetson Orin/Xavier families.
- **Power:** ranges from low-power Orin Nano/NX deployments through Thor-class 40-130W physical AI systems.

### Language Bindings / APIs
- **CUDA C/C++:** Full CUDA programming support with hardware-matched toolkit in [[NVIDIA-JetPack-SDK]]
- **Python:** CuPy, PyTorch (NVIDIA-built Jetson wheel), TensorRT Python API, DeepStream Python bindings
- **TensorRT:** Primary inference optimization tool; generates DLA-compatible engine files for hardware accelerator
- **ROS 2 / Isaac ROS:** NVIDIA-accelerated ROS 2 nodes and reference workflows through [[NVIDIA-Isaac-ROS]], including [[Isaac-ROS-NITROS]], [[Isaac-ROS-Visual-SLAM]], [[Isaac-ROS-Visual-Global-Localization]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-Image-Segmentation]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-Image-Pipeline]], [[Isaac-ROS-Compression]], [[Isaac-ROS-SIPL-Camera]], [[NVIDIA-Isaac-for-Manipulation]], [[NVIDIA-Isaac-for-Mobility]], [[Isaac-ROS-nvblox]], and [[Isaac-ROS-FoundationStereo]]
- **Triton:** Triton Inference Server runs on Jetson for local multi-model serving
- **GStreamer:** DeepStream pipelines run natively on Jetson with NVDEC/NVENC hardware acceleration

## Connections
- [[NVIDIA-Jetson-Thor]] — Blackwell-generation Jetson platform for physical AI and humanoid robotics.
- [[NVIDIA-JetPack-SDK]] — software stack for Jetson modules and developer kits.
- [[NVIDIA-Jetson-Linux]] — OS/BSP layer underlying JetPack and Jetson deployments.
- [[NVIDIA-VPI]] — computer vision/image processing library that targets Jetson GPU and dedicated vision hardware.
- [[NVIDIA-Jetson-Platform-Services]] — edge AI microservice layer for Jetson video/VLM/analytics applications.
- [[NVIDIA-DeepStream]] — DeepStream runs natively on Jetson for multi-stream intelligent video analytics at the edge
- [[NVIDIA-TAO]] — model fine-tuning and optimization path for Jetson-deployed DeepStream and robotics perception models
- [[NVIDIA-Metropolis]] — Metropolis edge deployments run on Jetson modules in smart city and retail use cases
- [[NVIDIA-Retail-ISV-Ecosystem]] - retail partner recommendation hub for Jetson and Metropolis workloads.
- [[Caper-by-Instacart]] - retail ISV for AI-powered smart carts on Jetson.
- [[Caper-Jetson-Smart-Cart-Retail-Deployments]] - named-retailer proof point for Jetson-powered smart carts.
- [[NVIDIA-Isaac]] — Isaac robotics workflows target Jetson as a primary robot compute platform
- [[NVIDIA-Isaac-ROS]] — CUDA-accelerated ROS 2 package family for Jetson robot deployment
- [[NVIDIA-Isaac-for-Manipulation]] — current Isaac ROS manipulation reference architecture for robot-arm deployments on NVIDIA GPU/Jetson systems
- [[NVIDIA-Isaac-for-Mobility]] — current Isaac ROS mobility workflow area optimized around current Jetson/Thor direction
- [[Isaac-ROS-NITROS]] — zero-copy-oriented transport and type negotiation layer for Jetson ROS 2 graphs
- [[Isaac-ROS-Visual-SLAM]] — cuVSLAM odometry and SLAM package for stereo/IMU robot localization
- [[Isaac-ROS-Visual-Global-Localization]] — cuVGL global localization package for known environments
- [[Isaac-ROS-DNN-Inference]] — TensorRT/Triton-backed DNN inference package family for robot perception
- [[Isaac-ROS-Object-Detection]] — object detection package family for camera-based robot perception
- [[Isaac-ROS-Image-Segmentation]] — semantic segmentation package family for pixel-level robot perception
- [[Isaac-ROS-DNN-Stereo-Depth]] — deep stereo depth package family for robot depth perception
- [[Isaac-ROS-AprilTag]] — accelerated fiducial marker detection package with CUDA/PVA/CPU backend support
- [[Isaac-ROS-Image-Pipeline]] — accelerated camera preprocessing and stereo image processing package family
- [[Isaac-ROS-Compression]] — hardware-accelerated H.264 camera compression/decompression package family
- [[Isaac-ROS-SIPL-Camera]] — SIPL/CoE camera driver package for Jetson Thor-era camera ingest
- [[Isaac-ROS-nvblox]] — GPU-accelerated 3D reconstruction and costmap component for Jetson robot navigation
- [[Isaac-ROS-FoundationStereo]] — stereo-depth foundation model surfaced in recent Isaac ROS release notes for robot perception
- [[NVIDIA-Isaac-GR00T]] — humanoid robot foundation model workflows reference Jetson AGX Thor for robot-side deployment
- [[cuDLA]] — cuDLA provides the programming interface to Jetson's on-chip Deep Learning Accelerator hardware
- [[NVIDIA-Drive-Platform]] — DRIVE Orin SoC shares architecture with Jetson Orin; automotive-grade variant
- [[TensorRT]] — TensorRT is the primary inference optimization path on Jetson, including DLA target compilation

## Resources
- [Jetson Developer Page](https://developer.nvidia.com/embedded/jetson-modules)
- [Jetson Software Documentation](https://docs.nvidia.com/jetson/)
- [Jetson Hardware Lineup](https://developer.nvidia.com/embedded/develop/hardware)
- [Jetson Linux 38.4 Developer Guide](https://docs.nvidia.com/jetson/archives/r38.4/DeveloperGuide/)
- [Jetson FAQ](https://developer.nvidia.com/embedded/faq)
- [Transforming In-Store Shopping: Caper Carts' AI Magic Powered by NVIDIA Jetson](https://www.instacart.com/company/updates/transforming-in-store-shopping-caper-carts-ai-magic-powered-by-nvidia-jetson/)
