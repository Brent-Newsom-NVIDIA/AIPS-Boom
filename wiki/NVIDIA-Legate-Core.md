# NVIDIA Legate Core

**Type:** Technology
**Tags:** NVIDIA, Legate, Legate Core, cuPyNumeric, distributed computing, Python, C++, GPU, multi-node, CUDA
**Related:** [[cuPyNumeric]], [[CuPy]], [[Dask]], [[NVIDIA-RAPIDS]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-CUDA]], [[GPUDirect-RDMA]], [[GPU-Direct-Storage]], [[NVIDIA-HPC-X]]
**Sources:** https://developer.nvidia.com/legate, https://docs.nvidia.com/legate/latest/manual/index.html, https://docs.nvidia.com/legate/latest/manual/usage/running.html, https://docs.nvidia.com/cupynumeric/latest/
**Last Updated:** 2026-04-30

## Summary
NVIDIA Legate Core is the runtime and framework foundation behind Legate libraries such as [[cuPyNumeric]]. It is designed to let Python and C++ library authors build composable accelerated libraries that scale from CPUs to GPUs and multi-node GPU systems while preserving familiar sequential programming interfaces for end users.

## Detail

### NVIDIA context
Legate is NVIDIA's answer to a hard gap in the Python/scientific stack: many users can write NumPy, SciPy, HDF5, RAPIDS, or JAX-style code, but do not want to manually manage parallelism, distributed memory, GPU placement, synchronization, and communication. Legate provides a runtime and common data abstraction so libraries can expose familiar APIs while the runtime handles partitioning, mapping, movement, synchronization, and execution.

[[cuPyNumeric]] is the most visible public Legate library in this wiki. It implements the NumPy API on top of Legate so NumPy-style programs can run from a laptop to multi-node multi-GPU systems with minimal code change.

### Key ideas
- Implicit parallelism: simple sequential-looking programs can be decomposed into parallel tasks.
- Unified data abstraction: Legate libraries can share partitioned/distributed data without unnecessary copies.
- Composable libraries: Legate aims to make libraries cooperate on the same distributed data representation rather than just interoperate through conversions.
- Python and C++ APIs: developers can build new Legate libraries in either language.
- Multi-platform execution: Legate targets CPUs and GPUs across workstations, public cloud, and supercomputers.
- Communication-aware runtime: NVIDIA describes support for GPU Direct, NVLink, InfiniBand, Slingshot, and EFA-style datapaths.

### Running model
Current Legate docs say Python programs using Legate directly or through Legate-based libraries can run with the standard Python interpreter, while the `legate` driver gives easier runtime configuration and distributed launch. The runtime can reserve CPU cores, GPUs, system memory, GPU memory, and multi-node launch settings through driver flags or `LEGATE_CONFIG`.

### Fit with RAPIDS and Dask
Legate is not a replacement for [[NVIDIA-RAPIDS]] or [[Dask]]. RAPIDS provides domain libraries such as DataFrames, ML, graph analytics, and vector search. Dask is a distributed Python scheduler commonly used with RAPIDS. Legate is a runtime/framework for building composable accelerated libraries such as [[cuPyNumeric]], with a goal of implicit scaling and coherent shared data abstractions.

## Connections
- [[cuPyNumeric]] - primary public Legate-based NumPy API implementation in the wiki.
- [[CuPy]] - adjacent GPU array library with a different execution model.
- [[Dask]] - distributed Python execution path often used with RAPIDS.
- [[NVIDIA-RAPIDS]] - adjacent CUDA-X data science ecosystem; NVIDIA's Legate developer page explicitly mentions RAPIDS compatibility/composability goals.
- [[NVIDIA-DGX-SuperPOD]] - target class for very large multi-node GPU scaling.
- [[NVIDIA-CUDA]] - underlying GPU programming and library foundation.
- [[GPUDirect-RDMA]], [[GPU-Direct-Storage]], and [[NVIDIA-HPC-X]] - communication and I/O stack relevant to scale-out accelerated workloads.

## Source Excerpts
- NVIDIA Developer describes Legate as a framework and runtime for scaling applications without users managing parallel and distributed computing complexity.
- Current Legate docs expose Python and C++ APIs, runtime/resource configuration, distributed launch, and HDF5 GPU-Direct Storage I/O topics.
- NVIDIA cuPyNumeric docs describe cuPyNumeric as a NumPy API implementation built on Legate for CPU, GPU, and multi-node GPU scaling.

## Resources
- [Legate Developer Page](https://developer.nvidia.com/legate)
- [Legate User Manual](https://docs.nvidia.com/legate/latest/manual/index.html)
- [Running Legate Programs](https://docs.nvidia.com/legate/latest/manual/usage/running.html)
- [NVIDIA cuPyNumeric](https://docs.nvidia.com/cupynumeric/latest/)
