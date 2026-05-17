# CUDA Unified Memory

**Type:** Concept
**Tags:** CUDA, NVIDIA, GPU, memory, unified memory, virtual addressing, page migration, HPC, managed memory
**Related:** [[CUDA-Streams]], [[CUDA-Graphs]], [[NVIDIA-Grace-CPU]], [[NVIDIA-Hopper-Architecture]], [[CuPy]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
CUDA Unified Memory is a programming model that creates a single virtual address space accessible by both CPU and GPU code, where the CUDA runtime automatically migrates data pages between CPU RAM and GPU VRAM on demand — eliminating the need for explicit `cudaMemcpy` calls. Unified Memory simplifies GPU programming significantly, at the cost of potential page-fault overhead for non-optimized access patterns. On modern hardware (Pascal+ via PCIe, Hopper/Blackwell with NVLink-C2C), hardware page migration and prefetching mitigate this overhead, making Unified Memory a viable and productively simpler programming model for many workloads.

## Detail

### Purpose
Traditional CUDA programming requires the developer to manually manage two separate memory spaces: CPU (host) memory allocated with `malloc` and GPU (device) memory allocated with `cudaMalloc`, with explicit `cudaMemcpy` calls to transfer data between them. This is error-prone, verbose, and requires knowing in advance which data needs to be on the GPU. Unified Memory hides this complexity: allocate with `cudaMallocManaged`, and the CUDA runtime handles migration. For complex data structures (trees, graphs, pointer-based objects) that are difficult to marshal for explicit transfer, Unified Memory is often the only practical option.

### Key Features
- **`cudaMallocManaged`:** Allocates Unified Memory that is accessible from both host and device code; returns a single pointer valid on both CPU and GPU
- **On-Demand Page Migration:** When GPU accesses a page currently on CPU (or vice versa), the GPU page fault mechanism triggers migration of the 64 KB page to the accessing processor's memory
- **Prefetching API:** `cudaMemPrefetchAsync(ptr, size, deviceId, stream)` — asynchronously migrates pages to specified device before they are needed, avoiding page fault stalls
- **Advise API:** `cudaMemAdvise(ptr, size, advice, deviceId)` — hints to the CUDA runtime about access patterns:
  - `cudaMemAdviseSetReadMostly`: creates read-only replicas on both CPU and GPU
  - `cudaMemAdviseSetPreferredLocation`: sets preferred location to reduce unnecessary migration
  - `cudaMemAdviseSetAccessedBy`: ensures direct mapping without migration for peer access
- **Pascal+ Page Fault Hardware:** Beginning with Pascal (GP100), GPU hardware page fault engine handles Unified Memory page faults efficiently; pre-Pascal required all data to be in GPU memory before kernel launch
- **NVLink-C2C Coherent Memory (GH200/GB200):** On Grace Hopper/Blackwell superchips, CPU LPDDR5X and GPU HBM3e share a coherent virtual address space via NVLink-C2C; page migration is largely eliminated — both processors can directly access the full 576 GB+ memory pool at full bandwidth
- **ATS (Address Translation Services) on PCIe:** Pascal+ GPUs with PCIe ATS-capable systems can access CPU memory directly over PCIe without migration (IOMMU-based); lower bandwidth but no migration overhead
- **Multi-GPU Unified Memory:** Unified memory pages can migrate between multiple GPUs in a system; `cudaMemAdvise` helps pin pages to the most-used GPU

### Use Cases
- **Large model loading:** Loading model weights exceeding single GPU VRAM onto Grace Hopper unified address space; weights reside in CPU LPDDR5X, accessed by GPU via NVLink-C2C
- **Graph analytics and sparse data structures:** cuGraph with large sparse graphs that don't fit in GPU VRAM; managed memory transparently handles overflow to CPU RAM
- **Exploratory data science:** Simpler code without explicit transfers; prototype rapidly and optimize later
- **Scientific computing:** Molecular dynamics simulations with irregular memory access patterns; managed memory handles variable-access hot/cold regions
- **Pointer-rich data structures:** Trees, linked lists, recursive data structures that are hard to marshal for explicit GPU transfer

### Hardware Requirements / Compatibility
- **Basic Unified Memory:** CUDA 6.0+; all CUDA-capable GPUs; requires Kepler (cc 3.0+) for full feature support
- **Hardware Page Faults:** Pascal (cc 6.0) and later; essential for practical performance; pre-Pascal requires all data resident on GPU before kernel launch
- **NVLink-C2C Coherent:** GH200 (Grace Hopper) and GB200 (Grace Blackwell) superchips only; provides coherent CPU-GPU access without page migration
- **PCIe ATS/PASID:** Requires ATS-capable motherboard/IOMMU; available on some server platforms with Pascal+

### Language Bindings / APIs
- **CUDA C/C++:** `cudaMallocManaged`, `cudaMemPrefetchAsync`, `cudaMemAdvise`, `cudaMemRangeGetAttribute`
- **Python (CuPy):** `cupy.cuda.UnifiedMemory` pool; `cupy.cuda.set_allocator(cupy.cuda.MemoryPool(cupy.cuda.malloc_managed).malloc)`
- **Python (PyTorch):** Managed memory via `torch.zeros(..., device='cuda', memory_format=torch.contiguous_format)` — limited; most PyTorch code uses explicit device memory
- **Numba:** `numba.cuda.managed_array` for Numba CUDA kernels with Unified Memory
- **PyCUDA:** `pycuda.driver.managed_empty` for Unified Memory allocation

## Connections
- [[CUDA-Streams]] — Unified Memory prefetch calls (`cudaMemPrefetchAsync`) are stream-ordered; migration happens asynchronously on the specified stream
- [[CUDA-Graphs]] — Managed memory allocations can be captured in CUDA Graphs; prefetch nodes available
- [[NVIDIA-Grace-CPU]] — GH200/GB200 NVLink-C2C makes Unified Memory coherent and high-bandwidth; transforms the programming model from migration-based to cache-coherent
- [[NVIDIA-Hopper-Architecture]] — Hopper hardware page fault engine is significantly faster than Pascal; confidential computing with managed memory is supported
- [[CuPy]] — CuPy supports Unified Memory allocation pools for NumPy-compatible GPU array programming

## Resources
- [Unified Memory Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#unified-memory-programming)
- [Unified Memory Performance Tuning](https://developer.nvidia.com/blog/unified-memory-cuda-beginners/)
- [GH200 Unified Memory](https://developer.nvidia.com/blog/nvidia-grace-hopper-superchip-architecture-in-depth/)
