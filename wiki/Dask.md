# Dask

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Parallel Computing, Distributed Computing, Python, Data Engineering, RAPIDS
**Related:** [[NVIDIA-RAPIDS]], [[cuDF]], [[cuML]], [[cuGraph]], [[RAPIDS-Accelerator-for-Apache-Spark]], [[CuPy]], [[NVIDIA-Legate-Core]], [[NCCL]]
**Sources:** docs.dask.org official documentation, https://developer.nvidia.com/topics/ai/data-science/cuda-x-data-science-libraries, https://docs.rapids.ai/deployment/stable/dask/
**Last Updated:** 2026-04-30

## Summary
Dask is an open-source Python library for parallel and distributed computing that scales NumPy, pandas, and scikit-learn workflows from a single machine to multi-node clusters. With NVIDIA GPU support via [[NVIDIA-RAPIDS]] ([[cuDF]], [[cuML]], [[cuGraph]]) and [[CuPy]], Dask enables out-of-core and distributed GPU computing, allowing datasets larger than a single GPU's memory to be processed across multiple GPUs or nodes. Dask-CUDA and the RAPIDS Memory Manager (RMM) provide optimized multi-GPU scheduling and memory management.

## Detail

### Purpose
Dask solves the scalability problem for Python data science workflows: datasets that exceed single-machine or single-GPU memory can be processed in parallel across many workers using familiar pandas/NumPy/scikit-learn APIs. With GPU workers (via Dask-CUDA), it extends RAPIDS GPU acceleration to cluster-scale datasets.

### Key Features
- Lazy evaluation with computation graphs: operations build a task graph, executed on `.compute()`
- `dask.array`: chunked NumPy-compatible arrays (can use CuPy chunks for GPU)
- `dask.dataframe`: partitioned pandas-compatible DataFrames (can use cuDF partitions for GPU)
- `dask_ml`: distributed scikit-learn / cuML compatible ML
- `dask.distributed`: scheduler and workers for multi-machine clusters
- Dask-CUDA: NVIDIA-optimized worker launcher that assigns one GPU per worker process
- UCX (Unified Communication X) integration for NVLink / InfiniBand data transfers between GPU workers
- RAPIDS Memory Manager (RMM) integration for pooled GPU memory allocation
- `dask_cudf`: distributed GPU DataFrames using cuDF partitions
- Diagnostic dashboard (Bokeh-based) for monitoring task execution and memory
- Integration with Kubernetes (Dask Gateway, Dask-on-k8s)
- Compatible with Jupyter notebooks and standard Python workflows

### Use Cases
- ETL pipelines on TB-scale datasets using distributed GPU workers
- Feature engineering for ML training datasets that exceed single GPU memory
- Distributed GPU machine learning with cuML estimators
- Large-scale graph analytics with dask-cuGraph
- Time series analysis on large sensor datasets
- Genomics and bioinformatics data processing at scale
- Financial data processing and risk analytics

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 6.0+ (for RAPIDS/GPU workers)
- CUDA 11.4 or higher (RAPIDS requirement)
- Multiple GPUs per node or multiple GPU nodes for distributed workloads
- NVLink for intra-node GPU-to-GPU data transfer
- InfiniBand or 100GbE+ networking for inter-node transfer via UCX
- CPU-only operation also supported without RAPIDS

### Language Bindings
- Python (exclusively)
- REST API for distributed scheduler management

## Connections
- [[NVIDIA-RAPIDS]] — RAPIDS uses Dask-CUDA and dask-cuDF/dask-cuML/dask-cuGraph for distributed GPU data science
- [[cuDF]] — dask-cuDF distributes cuDF DataFrames across multiple GPU workers
- [[cuML]] — dask-cuML enables multi-GPU distributed machine learning with cuML estimators
- [[cuGraph]] — dask-cuGraph scales GPU graph analytics across multiple GPUs
- [[RAPIDS-Accelerator-for-Apache-Spark]] — Spark RAPIDS is the Spark-cluster path adjacent to Dask's Python-native distributed path
- [[CuPy]] — `dask.array` can use CuPy arrays as GPU array chunks
- [[NVIDIA-Legate-Core]] — Legate is another NVIDIA distributed Python/runtime path, focused on implicit scaling and composable libraries
- [[NCCL]] — NCCL collectives optionally used for GPU-to-GPU reductions in Dask distributed workflows

## Resources
- [Official Documentation](https://docs.dask.org)
- [GitHub](https://github.com/dask/dask)
- [Dask-CUDA](https://github.com/rapidsai/dask-cuda)
- [RAPIDS + Dask Guide](https://docs.rapids.ai/deployment/stable/dask/)
