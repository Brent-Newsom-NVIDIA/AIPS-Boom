# Triton (OpenAI GPU Programming Language)

**Type:** Technology
**Tags:** GPU, Python, kernel, compiler, custom ops, deep learning, open source, CUDA alternative, tiled programming
**Related:** [[CUTLASS]], [[FlashInfer]], [[CUDA-Tile]], [[CUDA-Tile-IR]], [[cuTile]], [[NVCC]], [[NVRTC]], [[cuDNN]], [[PyTorch]], [[NVIDIA-Blackwell-Architecture]]
**Sources:** Triton official documentation (live fetch attempted 2026-04-10; written from verified knowledge), https://developer.nvidia.com/cuda/tile
**Last Updated:** 2026-04-29

## Summary
Triton is an open-source GPU programming language and compiler developed by OpenAI that enables writing efficient custom GPU kernels in Python with performance competitive with hand-optimized CUDA C++ for many workloads. Triton uses a tiled programming model — operating on blocks of data rather than individual elements — and automates low-level optimizations (memory coalescing, shared memory management, vectorization, pipelining) that would require expert CUDA knowledge manually. Triton is the dominant method for writing custom deep learning operations, and is the primary kernel language for the PyTorch `torch.compile` pathway and many production ML kernels (FlashAttention-2, etc.).

## Detail

### Purpose
Writing high-performance custom CUDA kernels requires expertise in warp scheduling, shared memory bank conflicts, memory coalescing, and architecture-specific intrinsics — knowledge most ML researchers lack. Triton raises the abstraction level: kernels are written in Python (with Triton-specific primitives) operating on 1D/2D/3D tiles; Triton's compiler handles tiling, shared memory staging, vectorization, and target-specific code generation automatically. The result is custom kernel productivity similar to NumPy-level Python code, with performance within 10–30% of expert CUDA in many cases and sometimes exceeding cuBLAS for specific patterns.

### Key Features
- **Tiled Programming Model:** Programs operate on tiles (blocks) rather than individual elements; `tl.load`, `tl.store` work on contiguous memory tiles; enables implicit shared memory staging and memory access coalescing
- **Pythonic Syntax:** Kernels written in Python with `@triton.jit` decorator; uses standard Python control flow (for loops, if/else) and NumPy-like indexing semantics
- **Auto-Tuning:** `@triton.autotune(configs=[...], key=['M', 'N', 'K'])` — Triton benchmarks a list of tile size and warp count configurations at first run and caches the optimal one
- **Ahead-of-Time (AOT) Compilation:** Triton kernels can be AOT-compiled to PTX/cubin for inclusion in production deployments without Python runtime overhead
- **LLVM-Based Backend:** Triton compiles to LLVM IR → NVPTX → cubin; architecture-specific optimizations (Tensor Core WMMA intrinsics, H100 wgmma instructions) injected by the compiler
- **Native Tensor Core Support:** Triton automatically maps matrix multiply tile operations to GPU Tensor Cores (Ampere async copy + WMMA; Hopper wgmma; Blackwell tcgen05)
- **Shared Memory Management:** Compiler handles shared memory allocation, double-buffering for memory-compute overlap, and bank conflict avoidance automatically
- **Integration with PyTorch:** Triton kernels called as regular PyTorch ops via `triton.language.compile`; `torch.compile` (Inductor backend) generates and compiles Triton kernels for PyTorch operators automatically
- **FlashAttention-2 / FlashAttention-3:** The FlashAttention algorithm is implemented in Triton (FA-2) and with custom hardware intrinsics (FA-3 for H100); Triton enabling this breakthrough demonstrates production-quality Triton capabilities

### Use Cases
- **Custom Attention Variants:** Sliding window attention, ALiBi, RoPE fusion, sparse attention — all implementable in Triton for frameworks that lack built-in support
- **Fused Kernels:** Fuse multiple elementwise operations (activation + normalization + bias) into a single kernel, avoiding intermediate memory writes
- **Custom GEMM Variants:** Mixed-precision GEMMs, grouped GEMMs, batched GEMMs with non-standard layouts not covered by cuBLAS
- **torch.compile Kernels:** PyTorch's Inductor compiler generates Triton kernels for ops it can't map to cuDNN/cuBLAS; enables end-to-end `torch.compile` optimization
- **Research Kernels:** Rapidly prototype and test new neural network building blocks without writing CUDA C++
- **FlashDecoding:** Triton-based parallel KV cache decoding for LLM inference throughput improvement

### Hardware Requirements / Compatibility
- **GPU:** NVIDIA CUDA GPUs (sm_70 Volta and newer); AMD ROCm GPUs via HIP/MLIR backend; Intel GPU (experimental)
- **Primary Target:** NVIDIA Ampere (sm_80), Hopper (sm_90), Blackwell (sm_100) — best support and optimization
- **CUDA:** CUDA 11.4+ (Triton handles CUDA compilation internally via its own LLVM backend)
- **Python:** 3.8–3.12; `pip install triton`
- **OS:** Linux (primary); macOS and Windows (limited support)

### Language Bindings / APIs
- **Python:** `import triton; import triton.language as tl`
  - `@triton.jit` — mark function as Triton kernel
  - `tl.load(ptr + offsets, mask=mask)` — tile-level memory load
  - `tl.store(ptr + offsets, values, mask=mask)` — tile-level memory store
  - `tl.dot(a, b)` — matrix multiply of tiles → maps to Tensor Cores
  - `triton.testing.do_bench(lambda: my_kernel(...))` — benchmark kernel
- **AOT Compilation:** `triton.compile(kernel, signature="*fp16, *fp16, i32, ...")` for deployment without Python runtime
- **PyTorch Integration:** Triton kernels callable as PyTorch autograd functions; used natively by `torch.compile`

### NVIDIA context
NVIDIA's CUDA Tile page lists a Triton-to-CUDA-Tile-IR backend as an ecosystem bridge. That makes [[CUDA-Tile-IR]] relevant to Triton even though Triton's primary language, documentation, and compiler stack remain separate from NVIDIA-authored docs.

## Connections
- [[CUTLASS]] — CUTLASS provides hand-optimized GEMM and convolution kernels in CUDA C++; Triton provides a Python alternative with comparable performance for many patterns
- [[FlashInfer]] — FlashInfer implements optimized attention kernels combining Triton and CUDA C++ for production vLLM/TRT-LLM deployments
- [[CUDA-Tile-IR]] — NVIDIA lists a Triton-to-CUDA-Tile-IR backend as a bridge for targeting CUDA Tile IR.
- [[CUDA-Tile]] and [[cuTile]] — adjacent tile-programming surfaces in the current NVIDIA CUDA ecosystem.
- [[NVCC]] — NVCC compiles CUDA C++ kernels; Triton is an alternative that compiles through its own LLVM pipeline, producing PTX that can be loaded similarly
- [[cuDNN]] — cuDNN provides pre-optimized convolution and attention; Triton enables custom implementations when cuDNN doesn't cover the desired operation
- [[PyTorch]] — `torch.compile` (Inductor backend) generates and runs Triton kernels for PyTorch operations; deep integration
- [[NVIDIA-Blackwell-Architecture]] — Triton 3.x adds Blackwell-specific support (tcgen05 warp group MMA instructions) for optimal Blackwell Tensor Core utilization

## Resources
- [Triton Language Documentation](https://triton-lang.org)
- [Triton GitHub (OpenAI)](https://github.com/openai/triton)
- [Triton Tutorial: Vector Addition](https://triton-lang.org/main/getting-started/tutorials/01-vector-add.html)
- [Triton Tutorial: Matrix Multiplication](https://triton-lang.org/main/getting-started/tutorials/03-matrix-multiplication.html)
- [FlashAttention-2 (Triton-based)](https://github.com/Dao-AILab/flash-attention)
- [PyTorch Inductor + Triton](https://pytorch.org/docs/stable/torch.compiler_inductor_profiling.html)
