# NVIDIA JetPack SDK

**Type:** Platform
**Tags:** NVIDIA, JetPack, Jetson, edge AI, robotics, CUDA, TensorRT, Jetson Linux, developer tools
**Related:** [[NVIDIA-Jetson-Platform]], [[NVIDIA-Jetson-Linux]], [[NVIDIA-Jetson-Thor]], [[NVIDIA-Jetson-Platform-Services]], [[NVIDIA-Isaac-ROS]], [[NVIDIA-Isaac-for-Mobility]], [[Isaac-ROS-NITROS]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Visual-SLAM]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-Image-Pipeline]], [[Isaac-ROS-Compression]], [[Isaac-ROS-SIPL-Camera]], [[Isaac-ROS-FoundationStereo]], [[NVIDIA-DeepStream]], [[TensorRT]], [[Nsight-Graphics]]
**Sources:** https://docs.nvidia.com/jetson/, https://docs.nvidia.com/jetson/archives/index.html, https://developer.nvidia.com/embedded/faq, https://developer.nvidia.com/blog/accelerate-ai-inference-for-edge-and-robotics-with-nvidia-jetson-t4000-and-nvidia-jetpack-7-1/, https://developer.nvidia.com/nsight-graphics/get-started
**Last Updated:** 2026-04-29

## Summary
NVIDIA JetPack SDK is the software stack for [[NVIDIA-Jetson-Platform]] devices. It bundles [[NVIDIA-Jetson-Linux]], CUDA-X libraries, AI frameworks, developer tools, samples, documentation, and higher-level SDK integration for edge AI and robotics. Current public NVIDIA material positions JetPack 7 as the next-generation stack for [[NVIDIA-Jetson-Thor]], with JetPack 6 in sustaining mode for Jetson Orin production deployments.

## Detail

### Purpose
JetPack turns Jetson modules and developer kits into usable edge AI development platforms. It provides the OS image, drivers, toolchain, CUDA/TensorRT/cuDNN software, computer vision and multimedia libraries, samples, and host/device development tools required to build, deploy, and optimize AI applications on Jetson.

### Current release positioning
- The Jetson documentation hub lists JetPack and Jetson Linux as separate documentation centers, with the archive listing JetPack 7.0 as the latest JetPack documentation branch.
- NVIDIA Jetson FAQ states that JetPack 7 supports Jetson Thor with Linux 24.04 LTS, Linux kernel 6.8, and the latest compute stack and libraries.
- NVIDIA developer blog material references JetPack 7.1 for Jetson T4000/Thor software features, including TensorRT Edge-LLM and Video Codec SDK support on Jetson Thor.
- JetPack 6 remains important for production Jetson Orin deployments and Jetson Platform Services support; exact selection should match the target module and release notes.

### Key components
- [[NVIDIA-Jetson-Linux]] board support package, kernel, bootloader, root filesystem, firmware, drivers, flashing tools, and APT update mechanisms.
- CUDA, cuDNN, [[TensorRT]], VPI, OpenCV, multimedia APIs, and NVIDIA video acceleration components.
- Developer tools including Nsight-family profiling/debugging tools, SDK Manager, samples, and host-side utilities.
- Higher-level integration with [[NVIDIA-Isaac-ROS]], [[NVIDIA-DeepStream]], [[NVIDIA-Riva]], [[NVIDIA-Jetson-Platform-Services]], and robotics/edge AI frameworks.
- Generative AI and physical AI support on Jetson Thor-class devices, including LLM, VLM, and VLA deployment paths.

## Connections
- [[NVIDIA-Jetson-Platform]] - JetPack is the canonical software stack for Jetson modules and developer kits.
- [[NVIDIA-Jetson-Linux]] - JetPack includes Jetson Linux as its operating system and BSP layer.
- [[NVIDIA-Jetson-Thor]] - JetPack 7/7.1 is the current-generation software stack for Jetson Thor.
- [[NVIDIA-Jetson-Platform-Services]] - JPS is a Jetson service layer supported by modern JetPack releases.
- [[NVIDIA-Isaac-ROS]] - robotics deployment stack that depends on JetPack/Jetson compatibility.
- [[NVIDIA-Isaac-for-Mobility]] - current Isaac ROS mobility workflow area that tracks Thor and JetPack compatibility signals.
- [[Isaac-ROS-NITROS]] - transport layer for accelerated Isaac ROS graphs on Jetson.
- [[Isaac-ROS-DNN-Inference]] - TensorRT/Triton-backed robot perception stack that tracks JetPack and Jetson support.
- [[Isaac-ROS-Visual-SLAM]] - cuVSLAM package commonly deployed on Jetson mobility robots.
- [[Isaac-ROS-DNN-Stereo-Depth]] - deep stereo depth package family tracking JetPack/Jetson support.
- [[Isaac-ROS-Image-Pipeline]] - accelerated camera preprocessing package family for Jetson/GPU systems.
- [[Isaac-ROS-Compression]] - hardware H.264 camera compression/decompression package family.
- [[Isaac-ROS-SIPL-Camera]] - current SIPL/CoE camera package tied to Jetson Thor and JetPack 7.1 support.
- [[Isaac-ROS-FoundationStereo]] - Isaac ROS model support surfaced alongside JetPack 7.1 and Thor T4000 support in recent release notes.
- [[NVIDIA-DeepStream]] - video AI SDK commonly deployed through JetPack on Jetson devices.
- [[TensorRT]] - primary inference optimization runtime included in Jetson AI deployments.
- [[Nsight-Graphics]] - current Nsight Graphics docs say it is bundled as part of the Jetson development suite in JetPack SDK.

## Source Excerpts
- NVIDIA Jetson docs describe JetPack as the installer/software bundle for OS images, tools, libraries, APIs, samples, and documentation.
- NVIDIA FAQ positions JetPack 7 for Jetson Thor and JetPack 6 for Orin sustaining production deployments.
- NVIDIA developer blog material describes JetPack 7.1 additions for Jetson T4000/Thor, including TensorRT Edge-LLM and Video Codec SDK support.

## Resources
- [Jetson Software Documentation](https://docs.nvidia.com/jetson/)
- [Jetson Archived Documentation](https://docs.nvidia.com/jetson/archives/index.html)
- [Jetson FAQ](https://developer.nvidia.com/embedded/faq)
