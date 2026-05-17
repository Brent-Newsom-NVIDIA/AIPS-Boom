# NVIDIA Deep Learning Performance

**Type:** Guide
**Tags:** NVIDIA, deep learning performance, training, inference, optimization, Tensor Cores
**Related:** [[cuDNN]], [[TensorRT]], [[TensorRT-LLM]], [[NVIDIA-DGX]], [[NVIDIA-Hopper-Architecture]], [[NVIDIA-Blackwell-Architecture]]
**Sources:** https://docs.nvidia.com/deeplearning/performance/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Deep Learning Performance documentation collects NVIDIA guidance for training, recommendation systems, optimization, and performance background. Although some pages are older, the hub remains useful for explaining core performance concepts behind GPU deep learning.

## Detail
The docs include optimization guidance and background material such as math-limited regimes, Tensor Core utilization, training performance, and recommendation-system performance. It should be treated as a conceptual and tuning guide rather than a product runtime.

This page links deep learning frameworks and inference tools back to NVIDIA's broader performance model: keep math units busy, use hardware-friendly tensor dimensions and precision modes, and profile bottlenecks with the right tools.

## Connections
- [[cuDNN]] - deep learning primitive library central to performance.
- [[TensorRT]] - inference optimization stack.
- [[TensorRT-LLM]] - LLM-specific inference performance.
- [[NVIDIA-DGX]] - target platform for high-throughput training and inference.
- [[NVIDIA-Hopper-Architecture]] and [[NVIDIA-Blackwell-Architecture]] - Tensor Core generations that shape performance guidance.

## Source Excerpts
- NVIDIA's Deep Learning Performance hub covers training, recommendation systems, optimization, and performance background.
