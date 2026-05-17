# nvImageCodec

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Image Codec, JPEG, JPEG2000, TIFF, Encoding, Decoding
**Related:** [[NVIDIA-DALI]], [[CV-CUDA]], [[NPP]], [[nvComp]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
nvImageCodec is NVIDIA's GPU-accelerated unified image codec library providing a framework with a single API for both encoding and decoding across JPEG, JPEG 2000, TIFF, BMP, PNG, PNM, and WebP formats. It combines GPU-native codecs (nvJPEG, nvJPEG2000, nvTIFF) with CPU fallback for unsupported formats, and supports variable-shape batch processing with zero-copy interfaces to CV-CUDA, PyTorch, and CuPy.

## Detail

### Purpose
Image-heavy deep learning pipelines — training data loading, inference preprocessing, medical imaging, satellite imagery — need fast batch decode of large image datasets. nvImageCodec provides a unified, extensible interface to GPU-accelerated image codecs, eliminating the need for separate codec library integrations and enabling seamless GPU pipeline construction.

### Key Features
- Unified API for encode and decode operations across multiple formats
- Variable-shape batch processing: heterogeneous image sizes in a single batch
- GPU-native codecs: nvJPEG, nvJPEG2000, nvTIFF (hardware/software GPU paths)
- CPU fallback for unsupported formats (automatic codec prioritization)
- Built-in format parsers: JPEG, JPEG 2000, TIFF, BMP, PNG, PNM, WebP
- Zero-copy tensor interfaces with CV-CUDA, PyTorch, and CuPy
- Python bindings
- Extension module framework for adding custom codec plugins
- Sample applications for image transcoding workflows

### Use Cases
- Deep learning training data image batch decode
- Medical imaging (DICOM, TIFF, JPEG 2000 decode for diagnostics)
- Satellite and aerial imagery processing
- Industrial inspection image batch processing
- Real-time image transcoding pipelines
- Scientific imaging and microscopy data pipelines

### Hardware Requirements
- NVIDIA GPU with CUDA support
- Hardware JPEG decode available on Ampere and later (A100, H100)
- CPU fallback ensures compatibility on all platforms

### Language Bindings
- Python (primary user-facing API)
- C/C++ (underlying library API)

## Connections
- [[NVIDIA-DALI]] — DALI uses nvImageCodec as its image decode backend for GPU-accelerated data loading
- [[CV-CUDA]] — CV-CUDA zero-copy interop means decoded images flow directly into CV-CUDA operators
- [[NPP]] — NPP handles pixel-level processing after nvImageCodec decode
- [[nvComp]] — nvComp handles general data compression; nvImageCodec handles image-specific codecs

## Resources
- [Official Page](https://developer.nvidia.com/nvimagecodec)
- [nvImageCodec GitHub](https://github.com/NVIDIA/nvImageCodec)
- [Documentation](https://docs.nvidia.com/cuda/nvimagecodec/)
