# cuDF

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, DataFrame, Data Processing, RAPIDS, Python, Open Source
**Related:** [[NVIDIA-RAPIDS]], [[RAPIDS-Accelerator-for-Apache-Spark]], [[cuML]], [[cuGraph]], [[cuVS]], [[cuCIM]], [[Dask]], [[Thrust]]
**Sources:** NVIDIA official documentation (RAPIDS), https://docs.nvidia.com/rapids/index.html, https://developer.nvidia.com/topics/ai/data-science/cuda-x-data-science-libraries, https://docs.rapids.ai/api/cudf/
**Last Updated:** 2026-04-30

## Summary
cuDF is a GPU-accelerated DataFrame library that provides a drop-in replacement for pandas, delivering up to 50x faster data processing on NVIDIA GPUs. Part of [[NVIDIA-RAPIDS]], it offers zero-code-change accelerators for pandas, Polars, and Apache Spark DataFrames, enabling data scientists to accelerate ETL, feature engineering, and data analysis pipelines without rewriting code.

## Detail

### Purpose
Pandas DataFrames are the standard tool for tabular data manipulation in Python, but they run on CPU and become bottlenecks at scale. cuDF moves DataFrame operations (joins, groupby, sort, filter, string ops) to the GPU, enabling the same pandas-style code to run dramatically faster on large datasets without code changes.

### Key Features
- GPU-accelerated DataFrame operations (50x faster than pandas)
- Drop-in accelerator for pandas — zero code change required
- Drop-in accelerator for Polars and Apache Spark DataFrames
- cuDF.pandas mode: transparently accelerates existing pandas code
- Full support for standard DataFrame operations: merge, groupby, sort, filter, aggregation
- String and datetime column support
- Integration with Arrow columnar format for zero-copy data exchange
- Dask-cuDF for distributed multi-GPU DataFrame processing
- Python and C++ APIs

### Use Cases
- Large-scale ETL (Extract, Transform, Load) pipelines
- Feature engineering for machine learning
- Log analysis and analytics at scale
- Data cleaning and preparation for AI pipelines
- Financial data processing
- Accelerating Apache Spark workloads on GPU clusters

### Hardware Requirements
- NVIDIA GPU, Pascal (GP100) or newer (Volta+ recommended)
- CUDA 11.x or 12.x
- Linux (primary supported OS)
- Part of RAPIDS ecosystem

### Language Bindings
- Python (primary API, pandas-compatible)
- C++ (libcudf — underlying library)

## Connections
- [[NVIDIA-RAPIDS]] — cuDF is the central DataFrame library in NVIDIA's CUDA-X data science stack
- [[RAPIDS-Accelerator-for-Apache-Spark]] — Spark RAPIDS uses cuDF as the GPU execution engine for supported Spark SQL/DataFrame operations
- [[cuML]] — cuML uses cuDF DataFrames as its input/output format
- [[cuGraph]] — cuGraph operates on cuDF edge and node DataFrames
- [[cuVS]] — cuVS integrates with cuDF for vector search pipelines
- [[Dask]] — dask-cuDF scales cuDF DataFrames across multi-GPU and multi-node workers
- [[Thrust]] — cuDF internals use Thrust for parallel primitives
- [[cuCIM]] — cuCIM and cuDF both part of RAPIDS for GPU-accelerated data science

## Resources
- [Official RAPIDS Page](https://developer.nvidia.com/rapids)
- [cuDF GitHub](https://github.com/rapidsai/cudf)
- [RAPIDS Documentation](https://docs.rapids.ai/api/cudf/)
