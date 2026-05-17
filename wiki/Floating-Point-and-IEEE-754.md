# Floating Point and IEEE 754 on NVIDIA GPUs

**Type:** Concept
**Tags:** NVIDIA, CUDA, floating point, IEEE 754, numerical accuracy, FMA
**Related:** [[NVIDIA-CUDA]], [[CUDA-Math-API]], [[NVCC]], [[cuBLAS]], [[cuFFT]], [[NVIDIA-Deep-Learning-Performance]]
**Sources:** https://docs.nvidia.com/cuda/floating-point/index.html
**Last Updated:** 2026-04-29

## Summary
Floating Point and IEEE 754 Compliance for NVIDIA GPUs is NVIDIA's whitepaper on common floating-point accuracy and compliance questions. It explains how NVIDIA hardware handles floating-point arithmetic and how programming choices affect numerical results.

## Detail
The whitepaper is relevant for CUDA programmers who compare CPU and GPU results, tune compiler flags, use fused multiply-add behavior, or rely on libraries such as [[cuBLAS]] and [[cuFFT]]. It frames numerical accuracy as a performance and correctness concern in heterogeneous computing.

This page should be used as the wiki's canonical link for questions about CUDA floating-point behavior, FMA, precision, and CPU/GPU result differences.

## Connections
- [[CUDA-Math-API]] - device-side math functions and precision behavior.
- [[NVCC]] - compiler options can affect floating-point calculations.
- [[cuBLAS]] - dense linear algebra users often encounter precision and reproducibility questions.
- [[cuFFT]] - FFT numerical behavior and precision are common concerns.
- [[NVIDIA-Deep-Learning-Performance]] - precision choices are central to performance.

## Source Excerpts
- NVIDIA's whitepaper discusses common floating-point accuracy and compliance issues for NVIDIA GPUs.
- It covers FMA behavior, CUDA hardware versions, compiler options, and CPU/GPU result comparisons.
