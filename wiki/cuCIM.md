# cuCIM

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Image Processing, Computer Vision, RAPIDS, scikit-image, Open Source
**Related:** [[NVIDIA-RAPIDS]], [[cuDF]], [[cuML]], [[NVIDIA-DALI]], [[CV-CUDA]], [[NPP]]
**Sources:** NVIDIA official documentation (RAPIDS), https://docs.nvidia.com/rapids/index.html, https://developer.nvidia.com/topics/ai/data-science/cuda-x-data-science-libraries, https://docs.rapids.ai/api/cucim/
**Last Updated:** 2026-04-30

## Summary
cuCIM (CUDA Clara IMage) is a GPU-accelerated image processing library that mirrors scikit-image's API for GPU execution, and incorporates OpenSlide for whole-slide image loading. Part of [[NVIDIA-RAPIDS]], it accelerates image manipulation and computer vision operations for scientific, medical, and industrial imaging workflows where scikit-image is too slow for large image volumes.

## Detail

### Purpose
Scientific and medical imaging workflows often process thousands of high-resolution images using scikit-image operations (filtering, morphology, feature extraction). cuCIM provides GPU-accelerated equivalents with a compatible API, enabling existing scikit-image workflows to run dramatically faster without major code changes.

### Key Features
- GPU-accelerated scikit-image compatible API for image processing
- OpenSlide integration for loading whole-slide images (WSI) used in digital pathology
- Image manipulation: filters, morphological operations, feature extraction, transforms
- Support for multi-dimensional image arrays (2D, 3D, N-D)
- Integration with RAPIDS cuDF and cuML for end-to-end GPU pipelines
- Part of the RAPIDS ecosystem — compatible with other RAPIDS libraries
- Python API

### Use Cases
- Digital pathology: whole-slide image analysis and classification
- Medical imaging: MRI/CT slice preprocessing and feature extraction
- Scientific microscopy image processing
- Satellite and aerial imagery analysis
- Industrial quality control image processing
- Training data augmentation for computer vision models

### Hardware Requirements
- NVIDIA GPU, Pascal or newer (Volta+ recommended)
- CUDA 11.x or 12.x
- Linux (primary supported OS)
- Part of RAPIDS ecosystem

### Language Bindings
- Python (primary API, scikit-image compatible)

## Connections
- [[NVIDIA-RAPIDS]] — cuCIM is the scientific image-processing library in the RAPIDS/CUDA-X data science family
- [[cuDF]] — cuCIM integrates with cuDF for metadata and tabular data associated with images
- [[cuML]] — cuML models consume features extracted by cuCIM for classification/detection
- [[NVIDIA-DALI]] — DALI handles training data loading; cuCIM handles scientific image processing
- [[CV-CUDA]] — CV-CUDA focuses on inference preprocessing; cuCIM mirrors scikit-image for scientific use
- [[NPP]] — NPP provides lower-level image primitives; cuCIM provides higher-level scikit-image API

## Resources
- [Official RAPIDS Page](https://developer.nvidia.com/rapids)
- [cuCIM GitHub](https://github.com/rapidsai/cucim)
- [RAPIDS Documentation](https://docs.rapids.ai/api/cucim/)
