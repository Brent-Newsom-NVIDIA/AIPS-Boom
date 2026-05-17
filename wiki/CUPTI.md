# CUPTI (CUDA Profiling Tools Interface)

**Type:** Tool
**Tags:** CUDA, NVIDIA, profiling, performance, tracing, hardware counters, tools API, instrumentation
**Related:** [[Nsight-Compute]], [[Nsight-Systems]], [[NVTX]], [[ComputeEval]], [[NVIDIA-DCGM]], [[NVCC]], [[CUDA-Streams]], [[NVBit]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
CUPTI (CUDA Profiling Tools Interface) is a C API library that provides NVIDIA GPU performance measurement capabilities to profiling tools and custom instrumentation code. It enables fine-grained collection of hardware performance counters, kernel execution traces, memory traffic data, NVLink bandwidth measurements, and CUDA API traces. CUPTI is the foundational layer beneath Nsight Compute, Nsight Systems, NVIDIA DCGM (profiling groups), and third-party profilers (Intel VTune GPU support, AMD ROCProfiler-equivalent tools). Developers rarely use CUPTI directly; most access its capabilities through higher-level tools.

## Detail

### Purpose
GPU performance analysis requires access to hardware performance counters (SM pipe utilization, L1/L2 cache hit rates, memory bandwidth, Tensor Core throughput) and execution traces (which kernels ran, when, on which SMs, with what occupancy). The GPU driver doesn't expose these by default. CUPTI provides a stable, versioned API that enables profiling tools to:
1. Subscribe to CUDA runtime and driver API call callbacks
2. Configure hardware performance counter groups on specific GPUs
3. Collect counter values correlated with kernel executions
4. Record kernel launch metadata (thread dimensions, register count, shared memory)

This powers everything from Nsight Compute's roofline analysis to DCGM's Tensor Core utilization metrics.

### Key Features
- **Activity API:** Asynchronously records GPU activities — kernel launches, memory copies, memset operations, CUDA API calls — into a circular buffer; very low overhead (<1% for most workloads)
- **Callback API:** Synchronous callbacks on CUDA runtime/driver API entry and exit points; enables injection-based instrumentation (e.g., automatic timing of all `cudaMalloc` calls)
- **PC Sampling API:** Periodic warp instruction pointer sampling — reveals where GPU warps are spending time at the PTX/SASS instruction level; statistical profiling without full instruction tracing overhead
- **Hardware Performance Counters:** Collect Streaming Multiprocessor (SM) hardware counters per-kernel: arithmetic throughput, cache hit rates, memory bandwidth utilization, stall reasons, Tensor Core pipe active cycles
- **NVLink Counters:** Measure NVLink link-level bandwidth, protocol overhead, and traffic distribution between GPUs
- **SASS-Level Metrics:** Source-level correlation of hardware counters to SASS (assembly) and CUDA C++ source lines (requires debug info)
- **Multi-GPU Support:** Profile multiple GPUs simultaneously; correlate activities across GPUs for multi-GPU workload analysis
- **CUDA Graph Profiling:** CUPTI Activity API supports profiling CUDA Graph executions, attributing metrics to graph node types
- **OpenCL and DirectCompute:** CUPTI has limited support for OpenCL profiling on NVIDIA hardware

### Use Cases
- **Tool Building:** Building custom GPU performance analysis tools, profiling agents for ML frameworks, or cost-attribution systems for cloud GPU billing
- **ML Framework Integration:** PyTorch Profiler (`torch.profiler`) uses CUPTI Activity API internally to collect GPU kernel timings and memory activity
- **Autotuning Systems:** CUDA kernel autotuners (e.g., for CUTLASS, Triton) use CUPTI to measure hardware counter values during search
- **DCGM Profiling Groups:** DCGM's advanced profiling feature uses CUPTI for Tensor Core utilization and NVLink bandwidth in production clusters
- **CI/CD Performance Regression Testing:** Custom scripts using CUPTI to automatically check that GPU kernel performance doesn't regress between commits

### Hardware Requirements / Compatibility
- **GPU:** All NVIDIA CUDA-capable GPUs (Kepler sm_35+); some newer features (PC Sampling, advanced counters) require Volta (sm_70+)
- **Driver:** Must match the CUDA toolkit version's CUPTI library; CUPTI ships with CUDA Toolkit
- **OS:** Linux (full support); Windows (Activity API supported; callback and PC sampling support varies)
- **Concurrency Limitation:** Hardware performance counters can only be collected by one profiling tool at a time; profiling runs are mutually exclusive with other CUPTI users

### Language Bindings / APIs
- **C API:** `libcupti.so` / `cupti.lib`; included in CUDA Toolkit at `$CUDA_HOME/extras/CUPTI/`
  - `cuptiActivityEnable(CUPTI_ACTIVITY_KIND_KERNEL)` — enable kernel activity recording
  - `cuptiActivityRegisterCallbacks(bufferRequested, bufferCompleted)` — register callbacks for async buffer delivery
  - `cuptiEnableCallback(1, subscriber, CUPTI_CB_DOMAIN_RUNTIME_API, CUPTI_RUNTIME_TRACE_CBID_cudaMalloc_v3020)` — subscribe to specific API callbacks
- **No Python Bindings:** CUPTI is a C API; Python profilers (PyTorch Profiler, CuPy profiler) wrap CUPTI internally

## Connections
- [[Nsight-Compute]] — Nsight Compute is built on CUPTI; uses CUPTI's hardware counter collection for roofline analysis and kernel metrics
- [[Nsight-Systems]] — Nsight Systems uses CUPTI Activity API for GPU timeline and API trace collection
- [[NVTX]] - CUPTI supports recording traces of NVTX annotation calls.
- [[ComputeEval]] - can use CUPTI profiling mode to measure kernel timing, memory transfers, and NVTX ranges for generated CUDA solutions.
- [[NVIDIA-DCGM]] — DCGM profiling groups use CUPTI for Tensor Core and NVLink hardware counter collection in production
- [[NVBit]] — NVBit complements CUPTI with binary instrumentation — CUPTI collects hardware metrics, NVBit injects custom instrumentation code into kernels
- [[NVCC]] — NVCC compiles code with debug information that CUPTI uses for source-level counter correlation
- [[CUDA-Streams]] — CUPTI Activity API records per-stream kernel timing and correlation IDs linking CPU-side API calls to GPU executions

## Resources
- [CUPTI Documentation](https://docs.nvidia.com/cuda/cupti/index.html)
- [CUPTI API Reference](https://docs.nvidia.com/cuda/cupti/modules.html)
- [CUPTI Samples](https://github.com/NVIDIA/cuda-samples/tree/master/Samples/0_Introduction/cupti_samples)
- [PyTorch Profiler (uses CUPTI)](https://pytorch.org/tutorials/recipes/recipes/profiler_recipe.html)
