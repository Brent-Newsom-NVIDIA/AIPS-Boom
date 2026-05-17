# Nsight Visual Studio Code Edition

**Type:** Tool
**Tags:** NVIDIA, Nsight, Visual Studio Code, CUDA debugging, GPU development, cuda-gdb, cuda-gdbserver, remote debugging, WSL, containers
**Related:** [[Nsight-Developer-Tools]], [[Nsight-Copilot]], [[Nsight-Visual-Studio-Edition]], [[Nsight-Compute]], [[Nsight-Systems]], [[CUDA-GDB]], [[Compute-Sanitizer]], [[NVCC]], [[NVIDIA-CUDA]], [[CUDA-Installation-Guide-Windows]], [[CUDA-on-WSL]], [[NVIDIA-Developer-Program]]
**Sources:** https://docs.nvidia.com/nsight-visual-studio-code-edition/latest/introduction/index.html, https://docs.nvidia.com/nsight-visual-studio-code-edition/latest/install-setup/index.html, https://docs.nvidia.com/nsight-visual-studio-code-edition/latest/cuda-debugger/index.html, https://docs.nvidia.com/nsight-visual-studio-code-edition/latest/cuda-control-gpu-execution/index.html, https://docs.nvidia.com/nsight-visual-studio-code-edition/latest/cuda-inspect-state/index.html, https://docs.nvidia.com/nsight-developer-tools/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Nsight Visual Studio Code Edition (Nsight VSCE) is the NVIDIA extension path for CUDA development inside Microsoft Visual Studio Code. It adds CUDA language support, CUDA-aware debugger views, and a debugger adapter for GPU debugging workflows built around CUDA Toolkit debugging components.

## Detail
Nsight VSCE is for developers who want a VS Code workflow for CUDA C/C++ development rather than the Microsoft Visual Studio IDE workflow covered by [[Nsight-Visual-Studio-Edition]]. NVIDIA positions it in the Nsight Developer Tools family as an application development environment for heterogeneous platforms that brings CUDA development into VS Code.

The CUDA debugger can debug applications built with the CUDA Runtime API or CUDA Driver API. It supports source breakpoints in CUDA code, stepping, run-to-cursor, function breakpoints, conditional GPU-thread breakpoints, break-on-kernel-launch, and break-on-API-error behavior. Nsight VSCE also exposes CUDA-focused debugging state through VS Code views such as locals and watch expressions while the application is stopped in CUDA source code.

Setup guidance centers on Visual Studio Code, the NVIDIA CUDA Toolkit, a compatible NVIDIA display driver, and supported target platforms. Local debugging targets Linux x86 and Linux Arm SBSA, while Windows and macOS can act as hosts when paired with remote development workflows. Remote debugging uses VS Code Remote-SSH and CUDA debugger components such as `cuda-gdbserver`; the documentation also includes remote target and QNX walkthroughs.

Use [[CUDA-GDB]] for the lower-level command-line debugger context, [[Compute-Sanitizer]] for automated CUDA correctness checking, [[Nsight-Compute]] for kernel performance profiling, and [[Nsight-Systems]] for system-wide timeline analysis.

Use [[Nsight-Copilot]] when the task is CUDA-aware AI assistance inside VS Code rather than debugger control, breakpoints, or state inspection.

## Connections
- [[Nsight-Visual-Studio-Edition]] - sibling IDE integration for Microsoft Visual Studio rather than VS Code.
- [[Nsight-Copilot]] - CUDA-aware AI assistant available through a Visual Studio Code extension.
- [[CUDA-GDB]] - command-line CUDA debugger foundation and remote debugging context.
- [[NVCC]] - compiles CUDA code and debug builds used by Nsight VSCE.
- [[Compute-Sanitizer]] - complementary CUDA correctness tool for memory, race, init, and sync errors.
- [[Nsight-Compute]] - kernel profiler used after correctness issues are understood.
- [[Nsight-Systems]] - system-wide profiler for application timeline analysis.
- [[CUDA-on-WSL]] - related Windows-hosted Linux development path for CUDA workflows.

## Resources
- [Nsight Visual Studio Code Edition introduction](https://docs.nvidia.com/nsight-visual-studio-code-edition/latest/introduction/index.html)
- [Nsight VSCE installation and setup](https://docs.nvidia.com/nsight-visual-studio-code-edition/latest/install-setup/index.html)
- [Nsight VSCE CUDA debugger guide](https://docs.nvidia.com/nsight-visual-studio-code-edition/latest/cuda-debugger/index.html)
- [Nsight Developer Tools hub](https://docs.nvidia.com/nsight-developer-tools/index.html)
