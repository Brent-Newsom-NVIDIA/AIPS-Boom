# ComputeEval

**Type:** Benchmark framework
**Tags:** NVIDIA, CUDA, benchmark, LLM evaluation, AI coding, CUDA code generation, CUDA libraries, Nsight Compute, CUPTI, NVTX, NIM
**Related:** [[Nsight-Copilot]], [[NVIDIA-CUDA]], [[Nsight-Compute]], [[CUPTI]], [[NVTX]], [[NVIDIA-NIM]], [[CUDA-Cpp-Standard-Library]], [[cuTile]], [[CUTLASS]], [[cuBLAS]], [[cuDNN]], [[cuSPARSE]], [[cuSOLVER]], [[cuFFT]], [[cuRAND]], [[CUDA-Python]], [[PyTorch]]
**Sources:** https://github.com/NVIDIA/compute-eval, https://developer.nvidia.com/blog/announcing-computeeval-an-open-source-framework-for-evaluating-llms-on-cuda/, https://developer.nvidia.com/blog/benchmarking-llms-on-ai-generated-cuda-code-with-computeeval-2025-2/
**Last Updated:** 2026-04-29

## Summary
ComputeEval is NVIDIA's open-source benchmark framework for evaluating LLM-generated CUDA code on functional correctness and performance. It provides curated CUDA programming tasks, hidden correctness tests, reference solutions, performance-measurement hooks, and profiler integrations so AI coding assistants can be measured against real accelerated-computing requirements instead of generic code benchmarks.

## Detail
NVIDIA introduced ComputeEval as a benchmark for CUDA and high-performance GPU code generation. The initial NVIDIA technical blog described 128 handcrafted CUDA challenges with functional correctness tests, while the later ComputeEval 2025.2 blog described an expansion to 232 CUDA and CUDA Compute Core Libraries (CCCL) problems.

The GitHub repository organizes tasks by domain and keeps the generation-time prompt/context separate from hidden test files and reference solutions. During evaluation, generated code is compiled and run against the held-out tests; problems can also opt into performance benchmarking after correctness passes.

Current repository coverage includes CUDA runtime topics such as launches, memory management, streams, events, CUDA Graphs, cluster launch, and occupancy; CUDA kernel topics such as shared memory, warp intrinsics, reductions, scans, stencils, tensor cores, and cooperative groups; CCCL topics such as Thrust, CUB, and libcu++; and CUDA library domains including [[cuBLAS]], [[cuSPARSE]], [[cuSOLVER]], [[cuFFT]], [[cuRAND]], [[cuDNN]], and [[cuTile]].

For performance measurement, ComputeEval supports custom timings, GPU-kernel timing, [[NVTX]] region timing, and profiler-based modes. The repository documents `cupti` mode for lower-overhead timing through [[CUPTI]] and `ncu` mode for detailed metrics through [[Nsight-Compute]]. It can also generate solutions using NVIDIA-hosted model endpoints through [[NVIDIA-NIM]] / build.nvidia.com API access.

## Use Cases
- Measuring whether an AI coding assistant can generate correct CUDA code.
- Comparing model performance across fixed ComputeEval datapack releases.
- Testing CUDA library and CCCL knowledge beyond simple kernel syntax.
- Measuring generated CUDA performance after functional correctness passes.
- Evaluating NIM-hosted or OpenAI-compatible LLM endpoints on CUDA programming tasks.
- Supporting [[Nsight-Copilot]] quality benchmarking for CUDA task proficiency.

## Operational Notes
- Generated CUDA code execution requires explicit local or Docker mode, and NVIDIA recommends sandboxed execution.
- Performance benchmarking is only meaningful after generated code passes correctness tests.
- Profiler-based timing can use [[CUPTI]] or [[Nsight-Compute]], with [[NVTX]] ranges used for region timing.
- Release datapacks give fixed benchmark snapshots for reproducibility and progress tracking.

## Connections
- [[Nsight-Copilot]] - NVIDIA says Nsight Copilot is benchmarked with ComputeEval for CUDA-related task proficiency.
- [[NVIDIA-CUDA]] - primary programming domain covered by the benchmark.
- [[CUDA-Cpp-Standard-Library]] - CCCL problem group covers Thrust, CUB, and libcu++ style tasks.
- [[cuTile]], [[CUTLASS]], [[cuBLAS]], [[cuDNN]], [[cuSPARSE]], [[cuSOLVER]], [[cuFFT]], and [[cuRAND]] - CUDA-X/library domains covered or targeted by ComputeEval challenge expansion.
- [[Nsight-Compute]] - `ncu` profiling mode collects detailed metrics for generated CUDA solutions.
- [[CUPTI]] - lightweight profiling mode collects kernel timing, memory transfers, and NVTX ranges.
- [[NVTX]] - region timing uses NVTX annotations around benchmarked code.
- [[NVIDIA-NIM]] - hosted NVIDIA model endpoints can be used as ComputeEval generation targets.
- [[PyTorch]] and [[CUDA-Python]] - relevant Python-side contexts for generated CUDA workloads and timing examples.

## Resources
- [NVIDIA ComputeEval GitHub repository](https://github.com/NVIDIA/compute-eval)
- [Announcing ComputeEval](https://developer.nvidia.com/blog/announcing-computeeval-an-open-source-framework-for-evaluating-llms-on-cuda/)
- [ComputeEval 2025.2 benchmark update](https://developer.nvidia.com/blog/benchmarking-llms-on-ai-generated-cuda-code-with-computeeval-2025-2/)
