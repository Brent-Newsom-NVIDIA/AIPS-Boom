# CUDA Demo Suite

**Type:** Tool
**Tags:** NVIDIA, CUDA, demo suite, samples, deviceQuery, bandwidthTest
**Related:** [[NVIDIA-CUDA]], [[CUDA-Runtime-API]], [[CUDA-Driver-API]], [[NVCC]], [[CUDA-Compatibility]], [[NVIDIA-Data-Center-GPU-Drivers]]
**Sources:** https://docs.nvidia.com/cuda/demo-suite/index.html
**Last Updated:** 2026-04-29

## Summary
CUDA Demo Suite contains pre-built CUDA applications that demonstrate NVIDIA GPU capabilities and system details. It is useful for sanity checks, device enumeration, and basic CUDA installation validation.

## Detail
The demo suite includes applications such as `deviceQuery`, which enumerates CUDA device properties in human-readable form. These demos are not production libraries, but they are valuable when validating that a driver/toolkit/GPU setup is functioning as expected.

In the wiki, CUDA Demo Suite belongs near install, compatibility, and driver pages because it is often used immediately after setting up CUDA.

## Connections
- [[NVIDIA-CUDA]] - CUDA Toolkit includes sample and demo validation workflows.
- [[CUDA-Runtime-API]] - demos exercise runtime-facing CUDA concepts.
- [[NVCC]] - developers may compile or compare sample CUDA applications.
- [[CUDA-Compatibility]] - demos help validate driver/toolkit compatibility in practice.
- [[NVIDIA-Data-Center-GPU-Drivers]] - driver state affects whether demos detect GPUs correctly.

## Source Excerpts
- NVIDIA describes CUDA Demo Suite as pre-built applications that demonstrate NVIDIA GPU capabilities and details.
- `deviceQuery` enumerates CUDA device properties in a human-readable format.
