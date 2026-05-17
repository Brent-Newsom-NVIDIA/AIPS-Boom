# nvJPEG2000

**Type:** Technology
**Tags:** NVIDIA, CUDA, JPEG2000, image codec, media, computer vision
**Related:** [[nvJPEG]], [[nvImageCodec]], [[NVIDIA-DALI]], [[CV-CUDA]], [[NPP]], [[NVIDIA-Clara]]
**Sources:** https://docs.nvidia.com/cuda/nvjpeg2000/index.html
**Last Updated:** 2026-04-29

## Summary
nvJPEG2000 is NVIDIA's GPU-accelerated JPEG2000 encode/decode library built on CUDA. It supports accelerated JPEG2000 image workflows on Pascal and newer NVIDIA GPU architectures.

## Detail

### Purpose
JPEG2000 appears in domains such as medical imaging, digital cinema, remote sensing, and archival image workflows. nvJPEG2000 moves decode/encode work onto NVIDIA GPUs so image pipelines can avoid CPU bottlenecks and feed GPU processing stages more directly.

### Key capabilities
- GPU-accelerated JPEG2000 decoding and encoding.
- CUDA-based implementation for Pascal and newer GPUs.
- Useful for batched, high-throughput image processing pipelines.
- Complements [[nvJPEG]] for JPEG and [[nvImageCodec]] for unified codec workflows.

### NVIDIA context
nvJPEG2000 is relevant to GPU imaging stacks such as [[NVIDIA-DALI]], [[CV-CUDA]], [[NPP]], digital pathology workflows, and medical imaging platforms such as [[NVIDIA-Clara]].

## Connections
- [[nvJPEG]] - GPU JPEG codec library for baseline JPEG workflows.
- [[nvImageCodec]] - unified image-codec framework that can sit above multiple codecs.
- [[NVIDIA-DALI]] - GPU data-loading pipelines often depend on accelerated image decode.
- [[CV-CUDA]] - pre/post-processing can consume decoded image tensors.
- [[NVIDIA-Clara]] - medical imaging often uses specialized formats and high-throughput imaging pipelines.

## Source Excerpts
- NVIDIA's nvJPEG2000 docs identify it as a CUDA-based GPU library for JPEG2000 decoding and encoding.

