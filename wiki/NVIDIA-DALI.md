# NVIDIA DALI

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Data Loading, Image Processing, Deep Learning, Open Source, Training
**Related:** [[cuDNN]], [[TensorRT]], [[nvComp]], [[Megatron-Energon]], [[CV-CUDA]], [[nvImageCodec]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
NVIDIA DALI (Data Loading Library) is an open-source, portable library for GPU-accelerated decoding and augmentation of images, videos, and audio, designed to eliminate the data preprocessing bottleneck in deep learning training pipelines. As a drop-in replacement for built-in data loaders in PyTorch, TensorFlow, and MXNet, DALI overlaps data preprocessing with model training to maximize GPU utilization.

## Detail

### Purpose
Deep learning training pipelines often stall waiting for preprocessed batches from CPU-bound data loaders (decode, crop, resize, normalize). DALI moves these preprocessing operations to the GPU, overlapping data preparation with model computation so the GPU never sits idle waiting for data.

### Key Features
- GPU-accelerated image, video, 3D volume, and audio preprocessing
- Drop-in replacement for PyTorch DataLoader, TensorFlow data pipeline, and MXNet data iterator
- Python APIs for rapid pipeline construction with transparent multi-GPU scaling
- Flexible graph-based pipeline architecture supporting custom operators
- Extensive format support: JPEG, PNG, TIFF, JPEG2K, BMP, WebP, LMDB, TFRecord, COCO, WAV, FLAC, OGG, H.264, HEVC
- Optical flow computation via NVIDIA Optical Flow SDK integration
- Super-resolution and video-specific operations
- Compatible with TensorRT, Triton Inference Server, TAO Toolkit, NVDEC

### Use Cases
- Accelerating image classification, detection, and segmentation training
- Video model training (action recognition, object tracking)
- Audio model training (speech recognition, sound classification)
- Medical imaging data pipelines (DICOM, TIFF volumes)
- Multi-modal training pipelines combining image, video, and text

### Hardware Requirements
- NVIDIA GPU with CUDA support
- NVDEC-capable GPU for hardware video decode (Volta+ preferred)
- Optical flow requires Turing, Ampere, or Ada architecture
- Available on Linux (primary) and Windows

### Language Bindings
- Python (primary API)
- C++ (underlying pipeline implementation)

## Connections
- [[CV-CUDA]] — CV-CUDA handles post-processing for inference; DALI handles pre-processing for training
- [[nvComp]] — DALI can decompress compressed image/video data via nvComp integration
- [[Megatron-Energon]] - complementary multimodal data loader for Megatron-scale WebDataset/JSONL data pipelines.
- [[nvImageCodec]] — nvImageCodec provides codec plugins that DALI uses for image decode
- [[TensorRT]] — DALI preprocessed data feeds into TensorRT inference pipelines
- [[cuDNN]] — cuDNN consumes DALI-preprocessed tensors for model execution

## Resources
- [Official Page](https://developer.nvidia.com/dali)
- [DALI GitHub](https://github.com/NVIDIA/DALI)
- [DALI Documentation](https://docs.nvidia.com/deeplearning/dali/)
