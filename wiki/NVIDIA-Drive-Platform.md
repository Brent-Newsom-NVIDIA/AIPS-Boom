# NVIDIA DRIVE Platform

**Type:** Platform
**Tags:** NVIDIA, autonomous vehicles, AV, automotive, ADAS, self-driving, robotics, DRIVE AGX, DriveOS, DriveWorks, DRIVE Sim, DRIVE Thor
**Related:** [[NVIDIA-DRIVE-AGX-Thor]], [[NVIDIA-DriveOS]], [[NVIDIA-DriveWorks]], [[NVIDIA-DRIVE-Sim]], [[NVIDIA-Cosmos]], [[NVIDIA-Omniverse]], [[NIM-for-DoMINO-Automotive-Aero]], [[TensorRT]], [[cuDLA]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Jetson-Platform]]
**Sources:** https://developer.nvidia.com/drive, https://developer.nvidia.com/drive/agx, https://developer.nvidia.com/drive/documentation, https://developer.nvidia.com/driveworks, https://developer.nvidia.com/drive/drive-sim, https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA DRIVE is NVIDIA's end-to-end autonomous vehicle and automotive AI platform spanning in-vehicle compute, operating system, middleware, sensor processing, AI acceleration, simulation, data generation, and developer programs. Current public material centers the stack around [[NVIDIA-DRIVE-AGX-Thor]] hardware, [[NVIDIA-DriveOS]] 7.x software, [[NVIDIA-DriveWorks]] AV middleware, and [[NVIDIA-DRIVE-Sim]] workflows using [[NVIDIA-Cosmos]], NuRec, Omniverse, and synthetic data generation. The DRIVE platform should be treated as a family hub, not as a dumping ground for each SDK document or hardware SKU.

## Detail

### Purpose
Building autonomous vehicles requires solving perception, prediction, planning, and control — all in real time, with safety-grade reliability, on constrained automotive-grade hardware. Developing this at scale requires a consistent hardware compute platform, a software architecture that separates functional domains, massive simulation for validation (testing in the real world alone is infeasible), and deep learning tools for training perception models. NVIDIA DRIVE provides all of these as an integrated platform, enabling automotive OEMs to focus on their differentiated driving software rather than building GPU SoCs and simulation infrastructure from scratch.

### Key Features

**DRIVE hardware and development platforms:**
- **[[NVIDIA-DRIVE-AGX-Thor]]:** current DRIVE AGX developer platform for bench and in-vehicle AV development, with Thor SoC, Blackwell-class GPU, automotive I/O, DriveOS 7.x, DriveWorks, CUDA, TensorRT, NvMedia, and NvStreams.
- **DRIVE AGX Orin:** prior/continuing automotive development platform for ADAS and AV workloads.
- **DRIVE AGX SDK Developer Program:** gated software-release access path for full DRIVE SDK downloads and tools.

**DRIVE Software Stack:**
- **[[NVIDIA-DriveOS]]:** automotive operating system and SDK layer for DRIVE AGX platforms, including Linux/QNX application OS support, virtualization, bootloaders, diagnostics, CUDA, TensorRT, cuDNN, NvMedia, NvStreams, and tools.
- **[[NVIDIA-DriveWorks]]:** AV middleware and algorithm SDK for sensor abstraction, image processing, point-cloud processing, calibration, egomotion, samples, and tools.
- **CUDA / TensorRT / cuDNN / NvMedia / NvStreams:** core acceleration, media, and communication components in the DRIVE stack.

**DRIVE Development Tools:**
- **[[NVIDIA-DRIVE-Sim]]:** AV simulation and synthetic-data workflows using Cosmos world foundation models, NuRec neural reconstruction, Cosmos Transfer/Predict, physical AI datasets, and Omniverse-style simulation.
- **[[NIM-for-DoMINO-Automotive-Aero]]:** adjacent PhysicsNeMo NIM for automotive external-aerodynamics surrogate simulation during vehicle design optimization.
- **NVIDIA DRIVE documentation:** public and gated docs for DRIVE AGX hardware, DriveOS releases, DriveWorks, TensorRT, cuDNN, and developer tools.
- **Nsight developer tools:** profiling and graphics/debugging tools exposed through DRIVE documentation.

### Use Cases
- Level 2+ ADAS: adaptive cruise control, lane centering, automatic emergency braking using DRIVE Orin
- Level 4 robotaxi and autonomous fleet development using DRIVE AGX Orin or DRIVE AGX Thor
- Automotive OEM development: BMW, Mercedes-Benz, Volvo, and others using DRIVE for next-gen autonomous features
- Truck platooning and logistics automation (Torc Robotics, Plus.ai)
- Training perception models on synthetic data from [[NVIDIA-DRIVE-Sim]], then validating on DRIVE AGX hardware
- Accelerating automotive external-aerodynamics studies with [[NIM-for-DoMINO-Automotive-Aero]] as a design-time surrogate model
- Driver monitoring systems (DMS) for regulatory-required attention monitoring

### Hardware Requirements / Compatibility
- **DRIVE AGX Thor:** current public developer platform with bench and in-vehicle development SKUs.
- **DriveOS 7.0.3:** current public DriveOS 7.x documentation branch surfaced for DRIVE AGX Thor.
- **CUDA/TensorRT:** public DRIVE docs list CUDA Toolkit 12.8 and TensorRT 10.10.10 for DriveOS 7.0.3.
- **Development access:** full SDK download access requires DRIVE AGX SDK Developer Program membership.

### Language Bindings / APIs
- **DriveWorks C++ APIs:** primary AV middleware and algorithm interface.
- **DriveOS APIs:** platform APIs for OS, virtualization, sensor/media, diagnostics, and development workflows.
- **CUDA/TensorRT/cuDNN:** GPU and inference acceleration APIs.
- **NvMedia and NvStreams:** media and data-movement components used in DRIVE platform software.

## Connections
- [[NVIDIA-DRIVE-AGX-Thor]] - current DRIVE AGX developer platform for AV and cockpit AI development.
- [[NVIDIA-DriveOS]] - automotive OS and SDK foundation for DRIVE AGX.
- [[NVIDIA-DriveWorks]] - sensor, calibration, image, point-cloud, and egomotion SDK layer.
- [[NVIDIA-DRIVE-Sim]] - AV simulation and synthetic-data generation workflow.
- [[NVIDIA-Cosmos]] - world foundation model platform used by current DRIVE Sim workflows.
- [[NVIDIA-Omniverse]] - simulation substrate and NuRec/scene reconstruction context for AV workflows.
- [[NIM-for-DoMINO-Automotive-Aero]] - design-time automotive aerodynamics NIM adjacent to vehicle engineering and simulation.
- [[TensorRT]] - inference optimization layer used in DriveOS and DRIVE AGX.
- [[cuDLA]] - DLA/accelerator programming concept relevant to DRIVE SoC inference planning.
- [[NVIDIA-Jetson-Platform]] - adjacent embedded platform family for non-automotive robotics and edge AI.

## Resources
- [NVIDIA DRIVE Platform](https://developer.nvidia.com/drive)
- [DRIVE AGX Developer Kits](https://developer.nvidia.com/drive/agx)
- [NVIDIA DRIVE Documentation](https://developer.nvidia.com/drive/documentation)
- [NVIDIA DriveOS SDK](https://developer.nvidia.com/driveworks)
- [NVIDIA DRIVE Sim](https://developer.nvidia.com/drive/drive-sim)
