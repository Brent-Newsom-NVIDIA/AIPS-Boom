# Nsight Deep Learning Designer

**Type:** Developer tool / IDE
**Tags:** NVIDIA, Nsight, deep learning, ONNX, TensorRT, ONNX Runtime, profiling, model design, inference, TAO, PyTorch, Jetson Thor, DriveOS
**Related:** [[Nsight-Developer-Tools]], [[Nsight-Compute]], [[Nsight-Systems]], [[TensorRT]], [[TensorRT-Model-Optimizer]], [[TensorRT-for-RTX]], [[NVIDIA-TAO]], [[PyTorch]], [[NVIDIA-RTX]], [[NVIDIA-DriveOS]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-Developer-Program]]
**Sources:** https://developer.nvidia.com/nsight-dl-designer, https://developer.nvidia.com/nsight-dl-designer/getting-started, https://docs.nvidia.com/nsight-dl-designer/index.html, https://docs.nvidia.com/nsight-dl-designer/UserGuide/index.html
**Last Updated:** 2026-04-29

## Summary
Nsight Deep Learning Designer is NVIDIA's integrated development environment for designing, editing, profiling, and exporting deep neural networks for high-performance inference. Current NVIDIA docs position it around ONNX model editing, built-in ONNX Runtime and [[TensorRT]] profiling, GPU metric correlation back to ONNX operators, and deployment export to ONNX or TensorRT engines.

## Detail

### Purpose
Nsight Deep Learning Designer helps inference developers change model architecture and immediately see performance impact without round-tripping through hand-written graph-editing scripts. It is most useful when a team is willing to modify model structure to meet latency, throughput, or target-hardware goals.

### Current capabilities
- **ONNX model design:** opens existing ONNX models or creates new ones from scratch in a visual graph editor.
- **Graph editing:** supports drag-and-drop ONNX operators, node/initializer editing, subgraph extraction, layout controls, and model visualization.
- **Model transformation:** integrates with ONNX tools such as GraphSurgeon and Polygraphy for whole-model changes like graph sanitization, FP16 conversion, and initializer type conversion.
- **Profiling:** ships with built-in ONNX Runtime and TensorRT profilers so users can compare inference behavior while editing.
- **GPU metrics:** profiling views include GPU metrics such as SM utilization, Tensor Core utilization, and occupancy, correlated back to original ONNX operators.
- **TensorRT export:** exports edited/created models as ONNX or as TensorRT engines, using the same tactics/optimization parameters used during profiling by default.
- **TAO adjacency:** current user guide discusses launching [[NVIDIA-TAO]] activities with external experiment specification files and TAO Model Zoo/TAO export paths.
- **PyTorch roadmap:** current developer pages describe early-access 2026.1 support for importing PyTorch models as XDL models and exporting back to PyTorch for retraining.

### Platforms and requirements
Current getting-started docs list Nsight Deep Learning Designer 2025.5 downloads for Windows, Linux desktop, Linux for Tegra, Linux SBSA, and macOS aarch64 host-only. The same page lists Windows 10/11, Ubuntu 20.04 or newer, NVIDIA Drive Linux systems running DriveOS 7.0.x or newer, GeForce RTX 2000 series or newer, A100/H100/L40/GB100 data center GPUs, Jetson Thor, and recent R581/R580 drivers.

The docs also describe a host/target architecture: the host provides the GUI for model editing and launching profiling activities, while the target runs profilers. A GPU is not required for pure model editing, but profiling requires a GPU target.

### NVIDIA context
Nsight Deep Learning Designer sits beside [[Nsight-Compute]] and [[Nsight-Systems]] but focuses on model-graph design and inference profiling rather than CUDA kernel or system timeline profiling. It connects directly to [[TensorRT]] because it can load ONNX models, profile with TensorRT, and export TensorRT engines. It is adjacent to [[TensorRT-Model-Optimizer]] and [[TensorRT-for-RTX]] because all three live around the model optimization and local inference deployment path, but DL Designer is the visual IDE for model editing/profiling.

## Connections
- [[Nsight-Compute]] and [[Nsight-Systems]] - adjacent Nsight profilers for kernel-level and system-level performance analysis.
- [[TensorRT]] - built-in profiler and deployment engine path.
- [[TensorRT-Model-Optimizer]] - adjacent quantization/model-optimization library in the TensorRT ecosystem.
- [[TensorRT-for-RTX]] - adjacent RTX-targeted TensorRT runtime for local AI inference deployment.
- [[NVIDIA-TAO]] - user guide discusses TAO activities, TAO Model Zoo, experiment specs, and export paths.
- [[PyTorch]] - 2026.1 preview roadmap adds PyTorch import/export through XDL models.
- [[NVIDIA-RTX]] - supported GeForce RTX GPUs and local AI inference workstation context.
- [[NVIDIA-DriveOS]] and [[NVIDIA-Jetson-Platform]] - current system requirements include DriveOS 7.0.x systems and Jetson Thor.
- [[NVIDIA-Developer-Program]] - developer tool access and Nsight ecosystem context.

## Source Excerpts
- Current developer docs describe Nsight DL Designer as an IDE for designing and optimizing DNNs for high-performance inference.
- Current getting-started docs list 2025.5 downloads and 2026.1 early-access PyTorch import/export support.
- Current user guide says profiling uses TensorRT and ONNX Runtime as companion inference frameworks.

## Resources
- [Nsight Deep Learning Designer Developer Page](https://developer.nvidia.com/nsight-dl-designer)
- [Nsight Deep Learning Designer Getting Started](https://developer.nvidia.com/nsight-dl-designer/getting-started)
- [Nsight Deep Learning Designer Documentation](https://docs.nvidia.com/nsight-dl-designer/index.html)
- [Nsight Deep Learning Designer User Guide](https://docs.nvidia.com/nsight-dl-designer/UserGuide/index.html)
