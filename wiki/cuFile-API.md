# cuFile API

**Type:** API
**Tags:** NVIDIA, CUDA, cuFile, GPUDirect Storage, GDS, storage, IO, API
**Related:** [[GPU-Direct-Storage]], [[GPUDirect-RDMA]], [[CUDA-Programming-Guide]], [[NVIDIA-Certified-Storage]], [[NVIDIA-AI-Data-Platform]], [[cuDF]], [[NVIDIA-DALI]]
**Sources:** https://docs.nvidia.com/gpudirect-storage/api-reference-guide/index.html, https://docs.nvidia.com/gpudirect-storage/index.html
**Last Updated:** 2026-04-29

## Summary
cuFile is the API surface for NVIDIA GPUDirect Storage. It lets applications register GPU buffers, register file handles, and submit direct storage I/O operations so data can move between storage and GPU memory with less CPU staging.

## Detail

### Purpose
Storage I/O can bottleneck training, analytics, checkpointing, and inference workloads. cuFile exposes the GPUDirect Storage programming interface so applications can integrate direct GPU/storage data paths rather than relying only on POSIX reads into CPU memory.

### API role
- File handle registration and deregistration.
- GPU buffer registration and deregistration.
- Read/write operations between files and GPU memory.
- Configuration and status interfaces for GDS deployments.
- Used by higher-level frameworks and libraries when they add direct GPU storage I/O support.

### NVIDIA context
This page is the API companion to [[GPU-Direct-Storage]]. It should be linked from storage-heavy pages such as [[NVIDIA-Certified-Storage]], [[NVIDIA-AI-Data-Platform]], [[cuDF]], and [[NVIDIA-DALI]].

## Connections
- [[GPU-Direct-Storage]] - cuFile is the GDS API reference surface.
- [[GPUDirect-RDMA]] - related GPUDirect peer-to-peer data path for network adapters.
- [[CUDA-Programming-Guide]] - CUDA memory and runtime behavior around GPU buffers.
- [[NVIDIA-Certified-Storage]] - validated storage platforms may use GDS/cuFile paths.
- [[NVIDIA-AI-Data-Platform]] - AI data platforms need high-throughput storage-to-GPU movement.
- [[cuDF]] and [[NVIDIA-DALI]] - data ingestion libraries that can benefit from GDS-backed I/O.

## Source Excerpts
- NVIDIA's GDS cuFile API Reference documents file/buffer registration, I/O calls, configuration, and status APIs for GPUDirect Storage.

## Resources
- [GDS cuFile API Reference](https://docs.nvidia.com/gpudirect-storage/api-reference-guide/index.html)
- [GPUDirect Storage Documentation](https://docs.nvidia.com/gpudirect-storage/index.html)
