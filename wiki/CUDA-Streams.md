# CUDA Streams

**Type:** Concept
**Tags:** CUDA, NVIDIA, GPU, concurrency, asynchronous, streams, kernel, overlap, programming model
**Related:** [[CUDA-Graphs]], [[CUDA-Unified-Memory]], [[Multi-Process-Service]], [[NVCC]], [[CuPy]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
CUDA Streams are ordered sequences of GPU operations (kernel launches, memory copies, events) that execute in issue order on the GPU, with independent streams able to overlap execution concurrently. Streams are the fundamental mechanism for GPU concurrency in CUDA: by distributing independent work across multiple streams, developers can overlap compute with data transfer, execute multiple kernels simultaneously, and pipeline workloads to maximize GPU utilization. Almost every asynchronous CUDA operation is tied to a stream.

## Detail

### Purpose
A single CUDA stream is fully serial — operations execute in the order they were issued. Without streams, all GPU operations would serialize, leaving the copy engines and compute engines idle while waiting for unrelated work to complete. Multiple streams allow the CUDA runtime and GPU hardware to overlap operations that have no data dependency: while one stream is running a kernel, another stream can be DMA-copying data to/from host memory, and a third stream can be running a different kernel on a different SM partition — all simultaneously. This is essential for hiding PCIe transfer latency and maximizing GPU occupancy.

### Key Features
- **Default (Null) Stream:** All CUDA operations that don't specify a stream use the default (null) stream; the null stream provides synchronization barriers with all other streams — null stream operations wait for all non-null stream operations to complete and block subsequent non-null operations
- **Non-Blocking Streams:** Explicit user streams created with `cudaStreamCreate` or `cudaStreamCreateWithFlags(cudaStreamNonBlocking)` — these do not synchronize with the null stream; purely independent
- **Priority Streams:** `cudaStreamCreateWithPriority` — create streams with higher (negative integer) or lower priority; GPU scheduler prefers higher-priority work when resources are available
- **Concurrent Kernel Execution:** Modern NVIDIA GPUs (Fermi+) can execute kernels from different streams simultaneously if SM resources permit; depends on kernel resource usage (shared memory, registers, warp count)
- **Async Memory Operations:** All async host-device copies require a stream: `cudaMemcpyAsync(dst, src, size, kind, stream)`; copy engine (DMA) and compute engine overlap when on separate streams
- **CUDA Events:** `cudaEventRecord(event, stream)` captures a point in stream execution; `cudaStreamWaitEvent(stream, event)` makes one stream wait for an event recorded in another — enables fine-grained inter-stream dependency management
- **Synchronization:** `cudaStreamSynchronize(stream)` blocks CPU until all operations in stream complete; `cudaDeviceSynchronize()` waits for all streams
- **Stream Capture:** `cudaStreamBeginCapture`/`cudaStreamEndCapture` — record stream operations into a CUDA Graph for repeated low-overhead replay
- **Copy Engine Overlap:** NVIDIA GPUs have 1–3 dedicated DMA copy engines (separate from the compute engines); async copies on one stream overlap with kernels on another, hiding PCIe latency

### Use Cases
- **Double-buffering data pipelines:** Stream 1 computes on batch N while Stream 2 copies batch N+1 to GPU, eliminating idle time between batches
- **Multi-stage inference pipelines:** Pre-processing, inference, and post-processing on separate streams to maximize overlap
- **Multi-model serving:** Triton Inference Server uses streams to run independent model instances concurrently on different SM partitions
- **Distributed training:** NCCL collective operations (allreduce, allgather) are stream-ordered; training code overlaps compute with communication on separate streams
- **Graph execution:** CUDA Graphs launch onto a specified stream; multiple graph instances run concurrently on different streams
- **HPC libraries:** cuBLAS, cuFFT, cuDNN all accept stream arguments for asynchronous operation within application-managed pipelines

### Hardware Requirements / Compatibility
- **Concurrent Kernel Execution:** Maxwell+ GPUs for robust concurrent kernel support; Volta+ with MPS for isolated concurrent processes
- **Multiple Copy Engines:** H100 has dedicated bidirectional copy engines (PCIe H2D and D2H simultaneously); Blackwell expands this further
- **Hyper-Q (Kepler+):** Hardware work queues that allow many independent CPU threads to simultaneously submit work to a single GPU without serialization
- **Priority Streams:** Kepler+ (CUDA 5.5+)
- **Stream Capture (CUDA Graphs):** CUDA 10.0+

### Language Bindings / APIs
- **CUDA C/C++:** `cudaStream_t`, `cudaStreamCreate`, `cudaMemcpyAsync`, `cudaStreamSynchronize`, `cudaEventRecord`, `cudaStreamWaitEvent`
- **Python (CuPy):** `cupy.cuda.Stream()`; all CuPy operations accept stream argument; `with cupy.cuda.Stream() as s:` context manager
- **Python (PyTorch):** `torch.cuda.Stream()`; `with torch.cuda.stream(s):` context manager; `torch.cuda.current_stream()`, `torch.cuda.synchronize()`
- **CUDA Fortran:** `cudafor` module provides stream types and async operations
- **cuBLAS/cuFFT/cuDNN:** All accept `cublasSetStream`, `cufftSetStream`, `cudnnSetStream` for stream-ordered execution

## Connections
- [[CUDA-Graphs]] — CUDA Graphs are captured from streams and launched onto streams; streams are the underlying execution context for graph nodes
- [[CUDA-Unified-Memory]] — `cudaMemPrefetchAsync` is a stream-ordered Unified Memory operation; migration timing is controlled via streams
- [[Multi-Process-Service]] — MPS provides GPU context sharing; each client process has its own stream namespace but shares GPU hardware
- [[NVCC]] — NVCC compiles CUDA C++ code including stream-based asynchronous patterns
- [[CuPy]] — CuPy's Stream API closely mirrors the CUDA C++ stream API for Python GPU programming

## Resources
- [CUDA Streams Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#streams)
- [CUDA Asynchronous Operations](https://docs.nvidia.com/cuda/cuda-runtime-api/group__CUDART__STREAM.html)
- [CUDA C++ Best Practices: Streams](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html#asynchronous-transfers-and-overlapping-transfers-with-computation)
- [PyTorch CUDA Streams](https://pytorch.org/docs/stable/generated/torch.cuda.Stream.html)
