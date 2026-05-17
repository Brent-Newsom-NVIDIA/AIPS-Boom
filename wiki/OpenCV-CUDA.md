# OpenCV CUDA

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Computer Vision, Image Processing, C++, Python
**Related:** [[NPP]], [[CV-CUDA]], [[NVIDIA-DALI]], [[cuDNN]], [[TensorRT]]
**Sources:** opencv.org official documentation
**Last Updated:** 2026-04-09

## Summary
OpenCV (Open Source Computer Vision Library) is the world's most widely used computer vision library, providing 2500+ optimized algorithms for image and video processing. Its CUDA module (`cv::cuda`) provides GPU-accelerated implementations of core OpenCV operations including image filtering, geometric transforms, feature detection, stereo matching, and video processing, enabling significant speedups over CPU implementations for latency-sensitive vision applications.

## Detail

### Purpose
OpenCV CUDA accelerates classical computer vision pipelines by offloading compute-intensive image processing operations to NVIDIA GPUs via CUDA. It is particularly valuable in production computer vision systems where classical CV preprocessing must run alongside deep learning inference, and in embedded/edge vision applications on NVIDIA Jetson platforms.

### Key Features
- `cv::cuda::GpuMat`: GPU-resident image matrix mirroring the CPU `cv::Mat` interface
- CUDA-accelerated image filters: Gaussian, Sobel, Laplacian, median, bilateral, box filter
- Geometric transforms: resize, warp affine, warp perspective, remap
- Color space conversions: BGR/RGB/YUV/HSV/Lab on GPU
- Feature detection: SURF, ORB, FAST, Harris corner detector on GPU
- Stereo matching: block matching (BM) and semi-global matching (SGBM) on GPU
- Optical flow: Farneback, Lucas-Kanade sparse optical flow on GPU
- Background subtraction: MOG2, GMG on GPU
- Histogram computation and equalization on GPU
- Video codec integration with NVIDIA NVENC/NVDEC via `cv::cudacodec`
- Stream-based asynchronous execution via CUDA streams
- Integration with NVIDIA NPP for additional image processing primitives

### Use Cases
- Real-time video surveillance and analytics
- Autonomous vehicle camera preprocessing pipelines
- Industrial machine vision and inspection systems
- Augmented reality (AR) tracking and rendering
- Medical image preprocessing before DNN inference
- Stereo depth estimation for robotics
- High-speed document scanning and OCR preprocessing

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 3.0+ (Kepler minimum)
- CUDA 10.2 or higher
- Jetson platforms: Jetson Nano, TX2, Xavier, Orin all supported
- Requires OpenCV compiled with CUDA support (not included in standard pip install)

### Language Bindings
- C++ (primary, `cv::cuda` namespace)
- Python (`cv2.cuda` module, requires CUDA-enabled build)
- Java (limited CUDA support)

## Connections
- [[NPP]] — OpenCV CUDA internally uses NPP for certain image processing primitives
- [[CV-CUDA]] — CV-CUDA is a newer NVIDIA library designed as a batch-processing alternative to OpenCV CUDA for DL pipelines
- [[NVIDIA-DALI]] — DALI complements OpenCV CUDA for GPU data loading in training pipelines
- [[TensorRT]] — OpenCV CUDA is commonly used for preprocessing before TensorRT inference
- [[cuDNN]] — for DNN module within OpenCV (`cv::dnn`) on GPU, cuDNN is optionally used

## Resources
- [OpenCV Official Site](https://opencv.org)
- [OpenCV CUDA Documentation](https://docs.opencv.org/4.x/d2/dbc/cuda_intro.html)
- [GitHub](https://github.com/opencv/opencv)
- [OpenCV CUDA Module Reference](https://docs.opencv.org/4.x/d8/d34/group__cudaarithm.html)
