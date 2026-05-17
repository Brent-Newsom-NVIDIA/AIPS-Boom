# nvComp

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Compression, Data Processing, HPC, AI, Storage
**Related:** [[GPU-Direct-Storage]], [[cuDF]], [[Thrust]], [[NVIDIA-DALI]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
nvComp is NVIDIA's GPU-accelerated data compression and decompression library, optimized for high-speed data handling in AI training, HPC, data science, and analytics workloads. Starting with version 4.2, it leverages the dedicated Decompression Engine on Blackwell GPUs for up to 600 GB/s throughput. It supports standard formats (LZ4, Snappy, ZSTD, Deflate) as well as GPU-native formats (Bitcomp, GDeflate, gANS, Cascaded).

## Detail

### Purpose
Modern data-intensive workloads (AI training, HPC simulations, data analytics) require moving and processing enormous volumes of data. nvComp accelerates compression and decompression directly on the GPU, reducing storage footprint, improving I/O bandwidth utilization, and enabling in-kernel compression via nvCOMPDX — eliminating CPU-GPU transfer overhead.

### Key Features
- GPU-accelerated compression and decompression
- Standard algorithm support: LZ4, Snappy, ZSTD, Deflate
- GPU-optimized formats: Bitcomp, GDeflate, gANS, Cascaded
- Blackwell Decompression Engine support (v4.2+): up to 600 GB/s throughput
- Fused copy-decompress operations for reduced latency
- nvCOMPDX: device-side (in-kernel) compression extensions for C/C++
- Python APIs for integration with PyTorch and TensorFlow
- Optimized memory bandwidth utilization and reduced storage overhead

### Use Cases
- AI training data pipeline acceleration (decompress directly to GPU)
- HPC checkpoint compression and decompression
- Data analytics over compressed columnar data (Parquet, ORC)
- GPU communication compression for distributed training
- Storage-efficient model checkpointing
- Real-time database query acceleration

### Hardware Requirements
- NVIDIA GPU with CUDA support
- Blackwell (B100/B200) for dedicated Decompression Engine (v4.2+)
- Earlier GPUs (Ampere, Hopper) supported with software-based compression
- Python APIs compatible with major ML frameworks

### Language Bindings
- Python (primary user-facing API)
- C/C++ (nvCOMPDX for in-kernel compression)

## Connections
- [[GPU-Direct-Storage]] — nvComp and GDS together enable compressed data to flow directly from storage to GPU without CPU involvement
- [[cuDF]] — cuDF uses nvComp for reading and writing compressed Parquet/ORC files
- [[Thrust]] — nvComp leverages Thrust for parallel data processing primitives
- [[NVIDIA-DALI]] — DALI data pipelines can use nvComp for compressed image/video loading

## Resources
- [Official Page](https://developer.nvidia.com/nvcomp)
- [nvComp GitHub](https://github.com/NVIDIA/nvcomp)
- [nvComp Documentation](https://docs.nvidia.com/cuda/nvcomp/)
