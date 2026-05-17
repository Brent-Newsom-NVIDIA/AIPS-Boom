# CV-CUDA

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Computer Vision, Image Processing, Open Source, AI, Preprocessing
**Related:** [[NVIDIA-DALI]], [[nvImageCodec]], [[TensorRT]], [[NPP]], [[cuDNN]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
CV-CUDA is an open-source GPU-accelerated library for computer vision pre- and post-processing, providing 45+ operators for image and batch processing with zero-copy integration to PyTorch and TensorFlow. It achieves up to 49x end-to-end throughput improvement over CPU baselines for tasks like video segmentation pipelines, targeting cloud-scale AI computer vision applications at reduced cost and energy.

## Detail

### Purpose
AI computer vision pipelines spend significant compute time on preprocessing (resize, crop, normalize, color conversion) and postprocessing (NMS, mask decoding) that runs on CPU. CV-CUDA moves these operations to GPU with a clean, batching-friendly API, enabling cloud providers and developers to dramatically increase throughput per GPU while reducing infrastructure costs.

### Key Features
- 45+ GPU-accelerated image and video processing operators
- Variable-shaped batching: processes images of different sizes in a single batch
- Zero-copy tensor interfaces with PyTorch and TensorFlow (no memory copies)
- C, C++, and Python APIs
- End-to-end examples: object detection, segmentation, classification with TensorRT
- NVIDIA Triton Inference Server integration examples
- Compatible with nvJPEG, Video Codec SDK, and Video Processing Framework
- Up to 49x end-to-end throughput improvement (4x NVIDIA L4 GPUs)
- Open source (Apache 2.0)

### Use Cases
- Cloud-scale image understanding pipelines
- Generative AI image pre/post-processing
- Autonomous vehicle HD mapping and perception
- 3D environment rendering and processing
- Object detection and segmentation inference pipelines
- Video analytics preprocessing

### Hardware Requirements
- NVIDIA GPU with CUDA support
- NVIDIA L4, A100, H100 for cloud deployment
- Compatible with all modern NVIDIA GPUs
- Linux (primary) and Windows support

### Language Bindings
- C (C API)
- C++ (primary native API)
- Python (high-level Python bindings)

## Connections
- [[NVIDIA-DALI]] — DALI focuses on training data loading; CV-CUDA focuses on inference preprocessing
- [[nvImageCodec]] — nvImageCodec provides the image decode layer that CV-CUDA operators consume
- [[TensorRT]] — CV-CUDA pre/post-processing operators wrap TensorRT inference in end-to-end pipelines
- [[NPP]] — NPP is NVIDIA's older image processing library; CV-CUDA is the modern batch-oriented successor
- [[cuDNN]] — cuDNN handles neural network compute; CV-CUDA handles surrounding image I/O operations

## Resources
- [Official Page](https://developer.nvidia.com/cv-cuda)
- [CV-CUDA GitHub](https://github.com/CVCUDA/CV-CUDA)
- [Documentation](https://cvcuda.github.io/)
