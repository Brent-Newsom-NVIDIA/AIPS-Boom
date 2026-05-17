# RAPIDS Accelerator for Apache Spark

**Type:** Technology
**Tags:** NVIDIA, RAPIDS, Apache Spark, cuDF, GPU acceleration, SQL, DataFrame, data engineering, AI Enterprise
**Related:** [[NVIDIA-RAPIDS]], [[cuDF]], [[Dask]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Certified-for-Cloudera]], [[NVIDIA-CUDA]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Container-Toolkit]]
**Sources:** https://docs.nvidia.com/spark-rapids/index.html, https://docs.nvidia.com/spark-rapids/user-guide/latest/index.html, https://developer.nvidia.com/topics/ai/data-science/cuda-x-data-science-libraries
**Last Updated:** 2026-04-30

## Summary
RAPIDS Accelerator for Apache Spark is NVIDIA's GPU acceleration plugin for Spark SQL and DataFrame workloads. It combines [[cuDF]] with Spark's distributed execution model so existing Spark applications can accelerate supported operations on NVIDIA GPUs with a plugin jar and configuration changes instead of an application rewrite.

## Detail

### NVIDIA context
Spark is a common enterprise data engineering layer upstream of AI training, feature engineering, fraud analytics, recommender systems, and ETL. NVIDIA's Spark RAPIDS documentation positions this accelerator as the bridge between Spark's scale-out data processing model and RAPIDS GPU execution.

This page is intentionally one canonical wiki page for the Spark accelerator. Deployment guides for Databricks, Amazon EMR, Google Dataproc, Kubernetes, YARN, Azure Synapse, OCI, and Cloudera-style platforms should connect here rather than becoming separate wiki pages unless the user asks for a specific deployment topic.

### How it works
Apache Spark 3 can load a plugin that replaces supported SQL and DataFrame physical operations with GPU implementations. The RAPIDS Accelerator uses [[cuDF]] as the GPU DataFrame engine. Unsupported operations fall back to CPU Spark execution, so adoption is often incremental.

The current user guide organizes the accelerator around:
- Workload qualification to estimate whether a Spark job is a good GPU candidate.
- Getting-started deployment guides for on-prem clusters, cloud Spark services, Kubernetes, and local mode.
- Tuning and AutoTuner guidance for memory, scheduling, shuffle, and concurrency behavior.
- Profiling tools for understanding accelerated and fallback portions of workloads.
- Additional features such as Spark ML library integration, RAPIDS Shuffle Manager, Apache Iceberg, Delta Lake, and file cache support.

### Fit with AI Enterprise and data platforms
The accelerator is a practical companion to [[NVIDIA-AI-Enterprise]], [[NVIDIA-Certified-for-Cloudera]], and cloud GPU platforms because it lets existing Spark estates participate in GPU-accelerated data-to-AI pipelines. It also sits next to [[Dask]] rather than replacing it: Dask is the Python-native distributed path, while Spark RAPIDS targets established Spark clusters and Spark SQL/DataFrame jobs.

## Connections
- [[NVIDIA-RAPIDS]] - parent CUDA-X data science stack for GPU data processing and ML.
- [[cuDF]] - GPU DataFrame engine used by the Spark accelerator for supported operations.
- [[Dask]] - adjacent RAPIDS distributed execution path for Python data science workloads.
- [[NVIDIA-AI-Enterprise]] - enterprise software/support context for production Spark acceleration.
- [[NVIDIA-Certified-for-Cloudera]] - existing wiki page that already references Spark and RAPIDS in Cloudera platform guidance.
- [[NVIDIA-GPU-Operator]] and [[NVIDIA-Container-Toolkit]] - common GPU platform plumbing for Kubernetes and containerized deployments.

## Source Excerpts
- NVIDIA's Spark RAPIDS docs describe the accelerator as a GPU plugin combining RAPIDS cuDF with Apache Spark.
- The current user guide includes qualification, getting-started, tuning, profiling, Spark ML integration, shuffle, Iceberg, Delta Lake, and file-cache sections.
- The CUDA-X Data Science page lists accelerated Spark as a data analytics starter-kit path.

## Resources
- [RAPIDS Accelerator for Apache Spark](https://docs.nvidia.com/spark-rapids/index.html)
- [Spark RAPIDS User Guide](https://docs.nvidia.com/spark-rapids/user-guide/latest/index.html)
- [CUDA-X Data Science Libraries](https://developer.nvidia.com/topics/ai/data-science/cuda-x-data-science-libraries)
