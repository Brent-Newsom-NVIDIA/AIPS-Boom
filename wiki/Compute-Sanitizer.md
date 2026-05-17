# Compute Sanitizer

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Debugging, Memory Safety, Development Tools, CUDA Toolkit, Compute Sanitizer API, NVTX, memcheck, racecheck, initcheck, synccheck
**Related:** [[CUDA-GDB]], [[NVCC]], [[Nsight-Developer-Tools]], [[Nsight-Compute]], [[Nsight-Systems]], [[Nsight-Visual-Studio-Edition]], [[CUDA-Debugger-API]], [[NVTX]], [[CUPTI]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/compute-sanitizer/, https://docs.nvidia.com/compute-sanitizer/ComputeSanitizer/index.html, https://docs.nvidia.com/compute-sanitizer/SanitizerApiGuide/index.html, https://docs.nvidia.com/compute-sanitizer/SanitizerNvtxGuide/index.html
**Last Updated:** 2026-04-29

## Summary
Compute Sanitizer is NVIDIA's functional correctness suite for CUDA applications, detecting memory access errors, race conditions, initialization errors, synchronization issues, CUDA API failures, leaks, and related GPU correctness problems. The same current NVIDIA documentation set also includes the Compute Sanitizer API for building custom sanitizing or tracing tools around CUDA applications, plus the NVTX Memory API path for giving Compute Sanitizer richer allocation, memory-pool, label, and permission context.

## Detail

### Purpose
GPU programming is prone to subtle errors: out-of-bounds memory accesses, race conditions between threads, use of uninitialized memory, incorrect barrier synchronization, leaked device allocations, and CUDA runtime or driver API calls that return errors but are missed by application code. These bugs may cause silent wrong results or intermittent crashes. Compute Sanitizer instruments CUDA applications at runtime, reports errors with host/device context and stack traces, and can be used in automated test suites through options such as error exit codes and structured output.

The Compute Sanitizer API is not a separate product page in the current NVIDIA docs; it is the developer interface within the Compute Sanitizer documentation. It enables custom tools that sanitize or trace CUDA applications, including memory and race-condition checkers.

### Key Features
- **Memcheck**: Detects out-of-bounds memory accesses, misaligned accesses, device heap memory errors, leaks, and CUDA API errors
- **Racecheck**: Detects shared memory data hazards and race conditions between CUDA threads
- **Initcheck**: Identifies accesses to uninitialized device memory and can work with unused-memory tracking
- **Synccheck**: Detects improper usage of CUDA synchronization primitives and barrier misuse
- **Compute Sanitizer API**: Provides callback, patching, and memory APIs for custom CUDA sanitizing and tracing tools, delivered as a dynamic library on supported platforms
- **NVTX Memory API support**: Lets CUDA programs describe memory pools, labels, and access restrictions to Compute Sanitizer through [[NVTX]]
- Full stack trace for error localization to source line and thread
- Kernel filtering, process filtering, suppressions, saved reports, XML output, and configurable report levels for CI workflows
- CUDA coredump generation for some error paths, with follow-up inspection in [[CUDA-GDB]] on Linux or [[Nsight-Visual-Studio-Edition]] on Windows
- Works on NVCC-compiled binaries without source code modification
- Compatible with CUDA streams and multiple GPU contexts
- Command-line interface bundled with current CUDA tooling

### Use Cases
- Debugging memory corruption in CUDA kernels
- Detecting race conditions in shared memory usage
- Validating correct synchronization in multi-thread CUDA code
- Catching CUDA runtime and driver API errors during test runs
- Building custom CUDA sanitizing or tracing tools with the Compute Sanitizer API
- Labeling or constraining allocation use so Compute Sanitizer can report clearer memory diagnostics
- Regression testing of CUDA library correctness
- Pre-release QA for CUDA applications
- CI/CD pipelines for GPU application testing

### Hardware Requirements
- NVIDIA GPU with CUDA support
- CUDA Toolkit installed
- Compute Sanitizer tools require CUDA 11.0 or newer; the Compute Sanitizer API requires CUDA 10.1 or newer
- Works best with debug builds and line information, but also works on release builds
- Linux and Windows supported

### Language Bindings
- Command-line tool for instrumenting CUDA binaries
- C/C++ developer interface through the Compute Sanitizer API and NVTX Memory API headers/libraries

## Connections
- [[CUDA-GDB]] — CUDA-GDB provides interactive debugging; Compute Sanitizer provides automated error detection
- [[NVCC]] — applications must be compiled with NVCC; Compute Sanitizer instruments the resulting binary
- [[Nsight-Developer-Tools]] — Compute Sanitizer is part of NVIDIA's broader developer tooling suite
- [[Nsight-Compute]] — Nsight Compute profiles performance; Compute Sanitizer checks correctness
- [[Nsight-Systems]] — Nsight Systems profiles system behavior; Compute Sanitizer validates GPU code correctness
- [[Nsight-Visual-Studio-Edition]] — Windows CUDA coredumps from Compute Sanitizer can be inspected in Nsight Visual Studio Edition
- [[CUDA-Debugger-API]] — both are low-level CUDA developer interfaces for debugging and tool integration
- [[NVTX]] — NVTX supports annotations generally and provides the Compute Sanitizer Memory API integration path
- [[CUPTI]] — CUPTI is for profiling/tracing tool construction; Compute Sanitizer API is for correctness-oriented CUDA tool construction
- [[NVIDIA-CUDA]] — Compute Sanitizer is part of the CUDA developer workflow

## Resources
- [Compute Sanitizer documentation hub](https://docs.nvidia.com/compute-sanitizer/)
- [Compute Sanitizer tool documentation](https://docs.nvidia.com/compute-sanitizer/ComputeSanitizer/index.html)
- [Compute Sanitizer API Reference Manual](https://docs.nvidia.com/compute-sanitizer/SanitizerApiGuide/index.html)
- [NVTX API for Compute Sanitizer Reference Manual](https://docs.nvidia.com/compute-sanitizer/SanitizerNvtxGuide/index.html)
- [CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit)
