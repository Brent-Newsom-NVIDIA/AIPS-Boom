# TensorRT

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Deep Learning, Inference, Optimization, LLM, AI
**Related:** [[cuDNN]], [[cuBLAS]], [[CUTLASS]], [[NCCL]], [[TensorRT-for-RTX]], [[Nsight-Deep-Learning-Designer]], [[NIM-for-Large-Language-Models]], [[NIM-for-LLM-Benchmarking-Guide]], [[NVIDIA-AIPerf]], [[Triton-Model-Navigator]], [[Triton-Model-Analyzer]], [[Triton-Performance-Analyzer]], [[NeMo-Retriever-Embedding-NIM]], [[NIM-for-NV-CLIP]], [[NeMo-Retriever-Reranking-NIM]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[NIM-for-Cosmos-WFM]], [[NIM-for-Cosmos-Embed1]], [[NIM-for-Vision-Language-Models]], [[NIM-for-Visual-Generative-AI]], [[NIM-for-Multimodal-Safety]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], [[NVIDIA-NMT-NIM]], [[NVIDIA-Background-Noise-Removal-NIM]], [[NIM-for-Maxine-Studio-Voice]], [[NIM-for-Maxine-Audio2Face-2D]], [[NIM-for-Maxine-Eye-Contact]], [[NIM-for-Maxine-Active-Speaker-Detection]], [[NIM-for-Audio2Face-3D]], [[NVIDIA-NemoGuard-NIMs]], [[NIM-for-MAISI]], [[NIM-for-VISTA-3D]], [[NIM-for-OpenFold3]], [[NIM-for-Boltz2]], [[NIM-for-RFdiffusion]], [[NIM-for-DiffDock]], [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]], [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]], [[NIM-for-DoMINO-Automotive-Aero]], [[NVIDIA-TAO]], [[NVIDIA-Isaac-ROS]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-Image-Segmentation]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-FoundationPose]], [[Isaac-ROS-FoundationStereo]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-DriveOS]], [[NVIDIA-DRIVE-AGX-Thor]]
**Sources:** NVIDIA official documentation, https://docs.nvidia.com/deeplearning/tensorrt-rtx/latest/index.html, https://developer.nvidia.com/nsight-dl-designer, https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/model_navigator/README.html, https://docs.nvidia.com/nim/benchmarking/llm/latest/overview.html, https://docs.nvidia.com/nim/nvclip/latest/introduction.html, https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
TensorRT is NVIDIA's ecosystem of inference compilers, runtimes, and model optimization tools that deliver low latency and high throughput for production deep learning inference. It can accelerate inference by up to 36x over CPU-only platforms through quantization, layer/tensor fusion, and kernel tuning. TensorRT-LLM extends this specifically to large language model serving, delivering up to 8x speedups for models like GPT-J.

## Detail

### Purpose
Moving deep learning models from training to production requires inference-time optimization — reducing model size, fusing operations, and selecting the fastest kernels for target hardware. TensorRT automates this optimization pipeline, enabling developers to deploy high-accuracy models at production scale without manual kernel engineering.

### Key Features
- Inference compilers and runtimes targeting NVIDIA GPUs from edge to data center
- Quantization support: FP8, FP4, INT8, INT4, AWQ, post-training quantization, quantization-aware training
- Layer and tensor fusion for reduced memory bandwidth and latency
- Automatic kernel selection and tuning per problem size and target hardware
- ONNX model import for framework-agnostic deployment
- PyTorch integration via Torch-TensorRT (6x faster inference)
- Hugging Face integration
- **TensorRT-LLM**: open-source library for LLM inference with simplified Python API (up to 8x speedup)
- **TensorRT Model Optimizer**: compression and quantization toolkit
- **Triton Model Navigator**: export, conversion, correctness, profiling, and deployment-preparation workflow for TensorRT/Triton targets
- **TensorRT Cloud**: automated engine generation for LLMs (limited access)
- **[[TensorRT-for-RTX]]**: optimized for RTX desktops, laptops, and workstations with AOT/JIT portable engines and fast local runtime compilation
- Tripy: Pythonic frontend for TensorRT
- Deployment via NVIDIA Triton Inference Server

### Use Cases
- Large language model (LLM) inference in data center
- Computer vision model deployment (object detection, segmentation, classification)
- Edge and embedded AI (Jetson, IGX)
- Robotics perception and manipulation inference through [[NVIDIA-Isaac-ROS]] and [[NVIDIA-Jetson-Platform]]
- Automotive safety-critical systems (NVIDIA DRIVE AGX)
- Conversational AI and speech recognition
- Recommendation systems

### Hardware Requirements
- Data center GPUs: GB100, H100, A100 (and older)
- Workstations: NVIDIA RTX / RTX Pro
- Edge: Jetson Orin, AGX Xavier, IGX
- Automotive: DRIVE AGX
- Consumer: GeForce RTX
- Supports CUDA 11.x and 12.x toolchains

### Language Bindings
- Python (primary for TensorRT-LLM and Model Optimizer)
- C++ (core TensorRT runtime API)
- ONNX (model interchange format)

## Connections
- [[cuDNN]] — TensorRT uses cuDNN for layer-level inference kernels
- [[cuBLAS]] — TensorRT uses cuBLAS for GEMM operations
- [[CUTLASS]] — TensorRT uses CUTLASS-derived kernels for optimized GEMM
- [[NCCL]] — multi-GPU TensorRT inference uses NCCL for tensor parallelism communication
- [[TensorRT-for-RTX]] - RTX-focused TensorRT specialization for local PC/workstation AI inference with portable AOT/JIT engines.
- [[Nsight-Deep-Learning-Designer]] - GUI model-design and profiling environment that ships with TensorRT profiling/export workflows.
- [[NIM-for-Large-Language-Models]] — NIM LLM is the production LLM microservice layer adjacent to TensorRT/TensorRT-LLM.
- [[NIM-for-LLM-Benchmarking-Guide]] — performance guide for measuring LLM services that often rely on NVIDIA optimized inference stacks.
- [[NVIDIA-AIPerf]] - current benchmark tool for measuring OpenAI-compatible generative AI services that may use TensorRT/TensorRT-LLM.
- [[Triton-Model-Navigator]] - automates export, conversion, correctness testing, profiling, and deployment preparation for TensorRT/Triton.
- [[Triton-Model-Analyzer]] and [[Triton-Performance-Analyzer]] - Triton-side configuration search and benchmark tools for TensorRT-served models.
- [[NeMo-Retriever-Embedding-NIM]], [[NIM-for-NV-CLIP]], and [[NeMo-Retriever-Reranking-NIM]] — current docs name TensorRT as part of the retrieval and NV-CLIP NIM acceleration stack.
- [[NIM-for-Image-OCR]] and [[NIM-for-Object-Detection]] — extraction NIMs use TensorRT-backed NVIDIA inference acceleration.
- [[NIM-for-Cosmos-WFM]] and [[NIM-for-Cosmos-Embed1]] — Cosmos NIM docs connect physical AI generation and embedding services to the NVIDIA inference stack.
- [[NIM-for-Vision-Language-Models]] and [[NIM-for-Visual-Generative-AI]] — multimodal and visual generation NIMs use TensorRT/TensorRT-LLM where model profiles are available.
- [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], and [[NVIDIA-NMT-NIM]] — current Speech NIM docs package TensorRT/CUDA execution inside ASR, TTS, and NMT containers.
- [[NVIDIA-Background-Noise-Removal-NIM]] — BNR docs name TensorRT as part of the audio cleanup NIM acceleration stack.
- [[NIM-for-Maxine-Studio-Voice]], [[NIM-for-Maxine-Audio2Face-2D]], [[NIM-for-Maxine-Eye-Contact]], and [[NIM-for-Maxine-Active-Speaker-Detection]] — current Maxine NIM docs name TensorRT as part of the media AI inference stack.
- [[NIM-for-Audio2Face-3D]] — Audio2Face-3D support docs include TensorRT requirements for digital-human animation deployment.
- [[NVIDIA-NemoGuard-NIMs]] and [[NIM-for-Multimodal-Safety]] — safety NIMs use NIM LLM or Triton/TensorRT-backed deployment surfaces.
- [[NIM-for-MAISI]] and [[NIM-for-VISTA-3D]] - medical imaging NIMs sit on the same NVIDIA optimized inference deployment stack.
- [[NIM-for-OpenFold3]] and [[NIM-for-Boltz2]] — BioNeMo NIMs whose docs reference TensorRT-backed production inference optimization.
- [[NIM-for-RFdiffusion]] and [[NIM-for-DiffDock]] — BioNeMo design/docking NIMs adjacent to TensorRT-optimized scientific AI inference.
- [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]] and [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]] — ALCHEMI NIMs package MLIP inference into atomistic modeling services.
- [[NIM-for-DoMINO-Automotive-Aero]] - PhysicsNeMo automotive aerodynamics NIM adjacent to optimized inference deployment.
- [[FlashInfer]] — FlashInfer provides complementary attention kernels used alongside TensorRT-LLM
- [[NVIDIA-TAO]] - TAO deployment and profiling workflows generate, calibrate, or optimize TensorRT engines for CV models.
- [[NVIDIA-Isaac-ROS]] - robot perception packages can use TensorRT-optimized models on NVIDIA edge hardware.
- [[Isaac-ROS-DNN-Inference]] - Isaac ROS package family with a TensorRT node for high-performance robot perception inference.
- [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-Image-Segmentation]], [[Isaac-ROS-DNN-Stereo-Depth]], [[Isaac-ROS-FoundationPose]], and [[Isaac-ROS-FoundationStereo]] - robotics perception model families that can rely on TensorRT-optimized inference paths.
- [[NVIDIA-Jetson-Platform]] - common deployment target for TensorRT inference in embedded robotics.
- [[NVIDIA-DriveOS]] - current DriveOS 7.0.3 public docs list TensorRT 10.10.10 for DRIVE OS.
- [[NVIDIA-DRIVE-AGX-Thor]] - DRIVE AGX Thor uses TensorRT for automotive AI inference pipelines.

## Resources
- [Official Page](https://developer.nvidia.com/tensorrt)
- [TensorRT Documentation](https://docs.nvidia.com/deeplearning/tensorrt/)
- [TensorRT-LLM GitHub](https://github.com/NVIDIA/TensorRT-LLM)
