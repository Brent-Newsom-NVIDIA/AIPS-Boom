# nvJPEG

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Image Codec, JPEG, Decoding, Encoding, CUDA-X
**Related:** [[nvImageCodec]], [[NVIDIA-DALI]], [[NPP]], [[CV-CUDA]], [[nvComp]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/nvjpeg
**Last Updated:** 2026-04-09

## Summary
nvJPEG is an NVIDIA CUDA-X library providing high-performance GPU-accelerated JPEG encoding and decoding. It enables batch JPEG decoding at throughputs far exceeding CPU-based libjpeg implementations, making it the primary GPU image codec for deep learning data loading pipelines where JPEG decompression is a common preprocessing bottleneck. nvJPEG supports standard JPEG as well as JPEG 2000 (via nvJPEG2000) and is the image decoding backend used by NVIDIA DALI and nvImageCodec.

## Detail

### Purpose
nvJPEG solves the CPU bottleneck in deep learning training pipelines where image datasets are stored as JPEG files. Decoding thousands of JPEG images per second for GPU training batches consumes significant CPU resources; nvJPEG offloads this work to the GPU, enabling higher training throughput and freeing CPU threads for other tasks.

### Key Features
- GPU-accelerated JPEG baseline and progressive decoding
- Batched decode: process hundreds of JPEGs simultaneously in a single API call
- Output to GPU memory directly (eliminates CPU-GPU copy after decode)
- Multiple output formats: RGB, BGR, YUV, grayscale
- Huffman decoding on GPU (fully GPU-resident decode pipeline)
- JPEG encoding: compress GPU image buffers to JPEG on GPU
- nvJPEG2000: separate library for JPEG 2000 lossless/lossy codec
- CUDA stream support for asynchronous operation
- Multiple backends: hardware NVJPEG decode on Turing+ for additional acceleration
- Per-image variable-size batch support
- Integration with NVIDIA DALI and nvImageCodec

### Use Cases
- Deep learning training data pipelines: ImageNet, COCO, medical imaging datasets
- Medical DICOM image decoding (JPEG and JPEG 2000 compressed DICOM)
- Video thumbnail generation at scale
- Web server image transcoding
- Satellite and aerial imagery processing pipelines
- Digital pathology whole-slide image processing

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 3.0+ (Kepler minimum)
- Hardware Huffman decode: Turing (RTX 2000 / T4) and newer for additional speedup
- CUDA 10.0 or higher
- CUDA 11.x / 12.x for current nvJPEG releases

### Language Bindings
- C (primary API: `nvjpegCreate`, `nvjpegDecode`, etc.)
- C++ (common usage)
- Python (via NVIDIA DALI and nvImageCodec Python bindings)

## Connections
- [[nvImageCodec]] — nvImageCodec is a higher-level unified codec library that wraps nvJPEG as its JPEG backend
- [[NVIDIA-DALI]] — DALI uses nvJPEG as its GPU JPEG decoder for training data pipelines
- [[NPP]] — NPP provides additional image processing operations applied after nvJPEG decode
- [[CV-CUDA]] — CV-CUDA preprocessing pipelines typically receive GPU images decoded by nvJPEG
- [[nvComp]] — nvComp handles general data compression; nvJPEG handles image-specific JPEG codec

## Resources
- [NVIDIA nvJPEG Developer Page](https://developer.nvidia.com/nvjpeg)
- [nvJPEG Documentation](https://docs.nvidia.com/cuda/nvjpeg/index.html)
- [nvJPEG2000 Documentation](https://docs.nvidia.com/cuda/nvjpeg2000/index.html)
