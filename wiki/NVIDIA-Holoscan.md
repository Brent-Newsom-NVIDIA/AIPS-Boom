# NVIDIA Holoscan

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Medical Imaging, Edge AI, Real-time, Sensor Processing, Healthcare
**Related:** [[NVIDIA-Clara]], [[NVIDIA-Clara-Viz]], [[NVIDIA-MONAI-Toolkit]], [[NVIDIA-Rivermax]], [[DOCA-GPUNetIO]], [[GPUDirect-RDMA]], [[NVIDIA-DALI]], [[TensorRT]], [[Triton-Inference-Server]], [[PyTorch]], [[CV-CUDA]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/holoscan-sdk, https://docs.nvidia.com/holoscan/index.html, https://docs.nvidia.com/holoscan/sdk-user-guide/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Holoscan is an AI sensor processing platform and SDK designed for building real-time, high-performance AI applications in medical devices, robotics, and industrial edge computing. It provides a streaming dataflow execution framework that pipelines sensor data acquisition, GPU-accelerated processing, AI inference, and visualization with deterministic, low-latency performance. Holoscan is the software foundation for NVIDIA's Clara Holoscan medical devices platform, enabling FDA-cleared AI-enabled medical instruments.

## Detail

### Purpose
Holoscan solves the challenge of building real-time AI pipelines that process high-bandwidth sensor data (medical imaging, video, RF signals) with the ultra-low latency required for clinical and industrial applications. It provides a GXF (Graph Execution Framework) based dataflow model that minimizes data copies and maximizes GPU utilization for streaming sensor workloads.

Current NVIDIA docs list Holoscan SDK v4.1.0 as the current Holoscan version and position Holoscan as an AI sensor processing platform spanning embedded, edge, and cloud deployments.

### Key Features
- GXF (Graph Execution Framework): directed acyclic graph (DAG) model for composable sensor processing pipelines
- Native support for high-speed medical imaging interfaces: AJA Video capture, Emergent Vision, HDMI/SDI
- GPU Direct integration for zero-copy data paths from capture cards and network interfaces to GPU
- Current DOCA GPUNetIO docs list the Holoscan Advanced Network Operator as a GPUNetIO user for real-time edge AI data processing.
- Built-in operators for video decoding, image processing, and AI inference
- TensorRT and ONNX Runtime inference operator for low-latency model execution
- Python and C++ operator APIs for custom algorithm development
- Multi-fragment (distributed) application support across multiple GPUs and nodes
- Holohub community repository of reference operators and applications
- Support for NVIDIA IGX Orin (industrial edge) and Clara AGX (medical) platforms
- Real-time rendering and visualization with Holoviz operator (OpenGL/Vulkan)
- Latency measurement and performance profiling tools
- ROS2 bridge for robotics integration

### Use Cases
- Endoscopy AI: real-time instrument detection and tissue segmentation during surgery
- Medical imaging AI: CT/MRI/ultrasound processing with sub-frame latency
- Smart NICs and network packet processing for telecom/defense
- Industrial machine vision and quality inspection
- Robotics perception pipelines
- Ultrasound beamforming and AI-enhanced imaging
- Digital pathology slide scanning and AI analysis

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 7.0+ (Volta minimum)
- NVIDIA IGX Orin (industrial edge AI platform) — primary target hardware
- NVIDIA Clara AGX Developer Kit (medical AI)
- Desktop/server: A4000, A5000, A6000, A100 for development and deployment
- CUDA 11.6 or higher

### Language Bindings
- C++ (primary SDK)
- Python (Holoscan Python SDK — full-featured)
- YAML for application graph configuration

## Connections
- [[NVIDIA-Clara]] — Holoscan sits in Clara's medical-device and healthcare AI portfolio.
- [[NVIDIA-Clara-Viz]] — visualization component adjacent to medical imaging applications built with Holoscan.
- [[NVIDIA-MONAI-Toolkit]] — medical imaging models can feed Holoscan real-time applications.
- [[NVIDIA-Rivermax]] — Rivermax provides accelerated media/data streaming paths for ST 2110 and high-throughput sensor ingest.
- [[DOCA-GPUNetIO]] — GPU-centric packet processing and network ingest path listed in current NVIDIA docs for Holoscan-adjacent workloads.
- [[GPUDirect-RDMA]] — direct NIC-to-GPU memory movement for real-time sensor/network ingest.
- [[TensorRT]] — Holoscan's inference operator uses TensorRT for optimized model execution
- [[CV-CUDA]] — GPU image processing operators used within Holoscan preprocessing pipelines
- [[NVIDIA-DALI]] — DALI can be used as a data augmentation backend within Holoscan pipelines
- [[Triton-Inference-Server]] — Triton backend supported as an alternative inference operator
- [[PyTorch]] — PyTorch models converted to TensorRT or ONNX for deployment in Holoscan

## Resources
- [NVIDIA Holoscan Developer Page](https://developer.nvidia.com/holoscan-sdk)
- [Documentation](https://docs.nvidia.com/holoscan/sdk-user-guide/)
- [GitHub](https://github.com/nvidia-holoscan/holoscan-sdk)
- [Holohub Community](https://github.com/nvidia-holoscan/holohub)
- [NVIDIA NGC Container](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/holoscan)
