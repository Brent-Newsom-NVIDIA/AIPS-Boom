# CUDA-GDB

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Debugger, Development Tools, CUDA Toolkit
**Related:** [[NVCC]], [[Compute-Sanitizer]], [[Nsight-Compute]], [[Nsight-Systems]], [[Nsight-Visual-Studio-Code-Edition]], [[Nsight-Visual-Studio-Edition]], [[Nsight-Eclipse-Plugins]]
**Sources:** NVIDIA official documentation (docs.nvidia.com/cuda)
**Last Updated:** 2026-04-29

## Summary
CUDA-GDB is NVIDIA's GPU debugger for CUDA applications, extending the GNU GDB debugger with CUDA-specific capabilities to debug both CPU and GPU code in the same session. It enables developers to set breakpoints inside CUDA kernels, inspect GPU thread state, examine device memory, and step through kernel execution on real hardware — running on Linux and QNX platforms.

## Detail

### Purpose
Debugging CUDA kernels requires inspecting state across thousands of parallel GPU threads simultaneously. Standard CPU debuggers cannot access GPU memory or thread state. CUDA-GDB bridges this gap by extending GDB with CUDA-aware commands that allow developers to inspect kernel execution, switch between GPU threads, examine device memory, and identify race conditions and memory errors on actual GPU hardware.

### Key Features
- Extension of the GNU GDB debugger for CUDA applications
- Debug both host (CPU) and device (GPU) code in a single debugging session
- Set breakpoints inside CUDA kernel code
- Inspect and modify GPU thread/warp/block state
- Examine GPU device memory and shared memory
- Step through CUDA kernel execution instruction by instruction
- Switch focus between different CUDA threads, warps, and blocks
- Supports x86-64 Linux and QNX targets
- Integrated into the CUDA Toolkit

### Use Cases
- Debugging incorrect kernel output (wrong results, NaN propagation)
- Identifying synchronization errors in GPU code
- Inspecting GPU memory layout during development
- Tracking down illegal memory accesses (complement to Compute Sanitizer)
- Developing and verifying new CUDA kernels

### Hardware Requirements
- NVIDIA GPU on Linux (x86-64) or QNX
- CUDA Toolkit installed
- Debug builds compiled with NVCC (-G flag for device debugging)
- Does not support Windows natively (use Nsight Visual Studio Edition for Visual Studio workflows or Nsight Visual Studio Code Edition with supported remote/host setups)

### Language Bindings
- C and C++ (CUDA source code)
- Command-line interface (GDB-compatible)

## Connections
- [[NVCC]] — NVCC compiles debug builds (-G flag) that CUDA-GDB then debugs
- [[Compute-Sanitizer]] — Compute Sanitizer detects memory/race errors automatically; CUDA-GDB provides interactive debugging
- [[Nsight-Compute]] — Nsight Compute profiles kernels; CUDA-GDB debugs kernel correctness
- [[Nsight-Systems]] — Nsight Systems provides system-level profiling; CUDA-GDB provides low-level kernel debugging
- [[Nsight-Visual-Studio-Code-Edition]] — VS Code CUDA debugging workflow that uses CUDA debugger components such as cuda-gdbserver for remote targets
- [[Nsight-Visual-Studio-Edition]] — Windows IDE debugging/profiling path for CUDA developers
- [[Nsight-Eclipse-Plugins]] — Eclipse-based IDE workflow for CUDA Linux development

## Resources
- [CUDA-GDB Documentation](https://docs.nvidia.com/cuda/cuda-gdb/)
- [CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit)
