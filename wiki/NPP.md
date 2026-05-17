# NPP (NVIDIA Performance Primitives)

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Image Processing, Signal Processing, Video, Computer Vision
**Related:** [[CV-CUDA]], [[NVIDIA-DALI]], [[nvImageCodec]], [[NVIDIA-Video-Codec-SDK]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
NPP (NVIDIA Performance Primitives) is a GPU-accelerated library of over 5,000 primitives for image and signal processing, delivering up to 30x faster execution than CPU alternatives. It provides ready-to-use functions for color conversion, filtering, thresholding, compression, and image manipulation, supporting multiple RGB and YUV formats. NPP serves as a GPU-based drop-in for Intel IPP and is used across industrial inspection, medical imaging, and robotics.

## Detail

### Purpose
Image and signal processing pipelines (color conversion, filtering, thresholding, morphological operations) are computationally intensive when run on CPU at scale or in real time. NPP provides a GPU-native library of these primitives as ready-made functions requiring minimal setup, enabling rapid integration of GPU acceleration into existing image processing workflows.

### Key Features
- Over 5,000 GPU-accelerated image and signal processing primitives
- Up to 30x faster than CPU-only alternatives
- Color conversion between multiple RGB and YUV formats
- Image compression and decompression primitives
- Filtering: convolution, Gaussian, median, Sobel, and more
- Thresholding, morphological operations (erosion, dilation)
- Image arithmetic and statistical operations
- High-fidelity 10-bit and 12-bit HDR video support
- NPP+: C++ extension with faster execution, simpler code, and multi-GPU support
- Functions as standalone library or component in existing GPU code
- Optimizes across data centers, workstations, and embedded platforms

### Use Cases
- Industrial inspection and quality control (defect detection)
- Medical imaging diagnostics and preprocessing
- Robotics real-time perception and processing
- Video preprocessing for deep learning pipelines
- Scientific imaging and microscopy
- Surveillance and video analytics

### Hardware Requirements
- NVIDIA GPU: T4, V100, A100 confirmed; all modern NVIDIA GPUs supported
- CUDA Toolkit installation required
- Available on Linux and Windows

### Language Bindings
- C (primary API)
- C++ (NPP+ extension)

## Connections
- [[CV-CUDA]] — CV-CUDA is the modern, batching-oriented successor to NPP for AI workloads
- [[NVIDIA-DALI]] — DALI uses NPP-like operators internally for CPU/GPU data augmentation
- [[nvImageCodec]] — nvImageCodec handles codec operations that complement NPP's processing primitives
- [[NVIDIA-Video-Codec-SDK]] — Video Codec SDK decodes video that NPP then processes frame by frame

## Resources
- [Official Page](https://developer.nvidia.com/npp)
- [NPP Documentation](https://docs.nvidia.com/cuda/npp/)
