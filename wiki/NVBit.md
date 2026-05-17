# NVBit (NVIDIA Binary Instrumentation Tool)

**Type:** Tool
**Tags:** NVIDIA, binary instrumentation, GPU, profiling, analysis, research, CUDA, dynamic instrumentation
**Related:** [[CUPTI]], [[Nsight-Compute]], [[Compute-Sanitizer]], [[NVCC]], [[CUDA-Streams]]
**Sources:** NVIDIA official documentation / NVlabs GitHub (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
NVBit (NVIDIA Binary Instrumentation Tool) is a research-oriented GPU binary instrumentation framework that allows users to dynamically inject custom analysis code into CUDA binaries without access to source code or recompilation. Developed by NVIDIA Research (NVlabs), NVBit enables the construction of custom GPU profiling tools, dynamic analyses, and execution tracing systems by inserting "inspection functions" before or after any GPU instruction at the PTX or SASS level. It is the GPU analogue of Intel PIN or Valgrind — a flexible, source-free dynamic binary instrumentation framework.

## Detail

### Purpose
CUPTI and Nsight provide fixed sets of hardware metrics, but research use cases often require custom metrics that hardware counters don't expose: instruction-mix analysis, memory access pattern studies, branch divergence profiling, custom memory checkers, or execution frequency heat maps at the instruction level. NVBit enables building these tools without modifying source code — it injects instrumentation at binary load time, so any compiled CUDA application can be analyzed with custom NVBit tools.

### Key Features
- **Binary-Level Injection:** NVBit instruments SASS (native GPU assembly) or PTX code at runtime — no source code access needed; works on closed-source CUDA binaries
- **Inspection Functions:** User-written CUDA device functions that NVBit injects before/after targeted instructions; these functions receive information about the instruction (PC, predicate, source/dest registers, memory addresses)
- **Warp-Level Granularity:** NVBit instruments at the warp instruction level — each warp's execution of an instrumented instruction invokes the inspection function, passing per-thread data
- **Low Overhead vs Simulation:** NVBit runs on real GPU hardware, enabling analysis at GPU speeds — much faster than instruction-level simulation; overhead depends on instrumentation complexity (typically 1–100× slowdown for counting tools)
- **Conditional Instrumentation:** Disable/enable instrumentation at runtime using NVBit API; implement sampling to reduce overhead
- **PTX and SASS Support:** Can instrument at PTX level (architecture-independent) or SASS level (architecture-specific assembly) for fine-grained control
- **Tool API:** C++ API: `nvbit_at_init`, `nvbit_at_ctx_init`, `nvbit_at_function_first_load` callbacks; `nvbit_insert_call` to inject instrumentation
- **Examples Provided:** NVlabs GitHub includes example tools: instruction counter, memory access tracer, opcode histogram, branch divergence analyzer

### Use Cases
- **Instruction Mix Analysis:** Count per-warp instructions by type (FP32, FP64, INT, memory, Tensor Core) to understand compute bottlenecks
- **Memory Access Pattern Analysis:** Record every global memory access address; identify irregular access patterns causing L2 cache misses
- **Custom Memory Checkers:** Detect out-of-bounds accesses, uninitialized reads, or race conditions that Compute Sanitizer doesn't cover
- **Tensor Core Utilization Profiling:** Count actual Tensor Core instruction executions per warp (complements CUPTI hardware counters)
- **Research Prototyping:** Academic GPU architecture research requiring custom metrics before hardware counter support exists in CUPTI/Nsight
- **Code Coverage:** GPU test coverage analysis — which kernel code paths are exercised by a test suite

### Hardware Requirements / Compatibility
- **GPU:** NVIDIA Volta (sm_70) and newer; limited support on Kepler/Pascal (some features restricted on older architectures)
- **OS:** Linux only; NVBit is a shared library injected via `LD_PRELOAD`
- **CUDA:** CUDA 10.0+ (NVBit ships as pre-compiled library for specific CUDA versions)
- **Execution:** NVBit tools are shared libraries; run as: `LD_PRELOAD=./my_nvbit_tool.so ./my_cuda_application`
- **Limitations:** Cooperative groups with CUDA Graph capturing may have restrictions; very small kernels (<1 warp) may not be instrumented; driver updates can require NVBit version updates

### Language Bindings / APIs
- **C++:** NVBit tool code is C++; uses NVBit C++ API headers
  - `nvbit_insert_call(instr, "my_inspection_fn", IPOINT_BEFORE, "reg_val", OPERAND_REG, 0, ...)` — inject call before instruction
  - `nvbit_enable_instrumented(ctx, func, true)` — enable instrumentation for a function
- **CUDA Device Functions:** Inspection functions are standard `__device__` CUDA functions compiled into the tool
- **No Python API:** NVBit is a C++/CUDA framework; no Python wrapper exists

## Connections
- [[CUPTI]] — CUPTI provides hardware counter metrics; NVBit provides dynamic binary instrumentation; they are complementary — CUPTI cannot count custom instruction patterns, NVBit can
- [[Nsight-Compute]] — Nsight Compute uses CUPTI; NVBit targets use cases where Nsight's fixed metric set is insufficient
- [[Compute-Sanitizer]] — Compute Sanitizer (memcheck, racecheck, initcheck) is implemented using NVBit-like binary instrumentation internally; NVBit enables building custom sanitizers
- [[NVCC]] — NVCC compiles CUDA binaries that NVBit instruments; NVBit works on both debug and release builds
- [[CUDA-Streams]] — NVBit instruments kernel executions that occur on CUDA streams; can distinguish per-stream kernel sequences

## Resources
- [NVBit GitHub (NVlabs)](https://github.com/NVlabs/NVBit)
- [NVBit Paper (MICRO 2019)](https://research.nvidia.com/publication/2019-10_nvbit-dynamic-binary-instrumentation-framework-nvidia-gpus)
- [NVBit Examples](https://github.com/NVlabs/NVBit/tree/main/tools)
