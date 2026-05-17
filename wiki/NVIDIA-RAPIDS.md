# NVIDIA RAPIDS

**Type:** Technology
**Tags:** NVIDIA, RAPIDS, CUDA-X, data science, cuDF, cuML, cuGraph, cuVS, Apache Spark, Dask, Python
**Related:** [[cuDF]], [[cuML]], [[cuGraph]], [[cuVS]], [[cuCIM]], [[Dask]], [[RAPIDS-Accelerator-for-Apache-Spark]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-CUDA]], [[GPU-Direct-Storage]]
**Sources:** https://docs.nvidia.com/rapids/index.html, https://developer.nvidia.com/topics/ai/data-science/cuda-x-data-science-libraries, https://docs.rapids.ai/
**Last Updated:** 2026-04-30

## Summary
NVIDIA RAPIDS is the CUDA-X data science framework for running end-to-end data science and data engineering pipelines on NVIDIA GPUs. It brings GPU acceleration to familiar Python and distributed data workflows through libraries such as [[cuDF]], [[cuML]], [[cuGraph]], [[cuVS]], [[cuCIM]], Dask-RAPIDS, and [[RAPIDS-Accelerator-for-Apache-Spark]].

## Detail

### NVIDIA context
RAPIDS is NVIDIA's main open-source accelerated data science stack. The NVIDIA Docs Hub describes it as a framework of libraries for GPU-native data science pipelines using optimized CUDA primitives and high-bandwidth GPU memory while preserving a Python-style workflow.

The current NVIDIA CUDA-X Data Science page broadens the RAPIDS view into a full data science portfolio: drop-in acceleration for pandas, scikit-learn, NetworkX, Polars, Apache Spark, vector search, interactive visualization, GPUDirect Storage-backed I/O, and distributed computing. Treat this page as the umbrella. Individual library details belong on [[cuDF]], [[cuML]], [[cuGraph]], [[cuVS]], [[cuCIM]], and the Spark accelerator page.

### Core libraries and surfaces
- [[cuDF]] accelerates DataFrame workloads and provides zero-code-change paths for pandas, Polars, and Spark-style data processing.
- [[cuML]] accelerates classical machine learning, including scikit-learn, UMAP, and HDBSCAN-style workflows.
- [[cuGraph]] accelerates graph analytics and connects to graph neural network workflows through [[PyG]] integration.
- [[cuVS]] provides GPU vector search, including CAGRA-based approximate nearest neighbor search for RAG and recommendation workloads.
- [[cuCIM]] brings RAPIDS-style acceleration to image and scientific image processing.
- [[Dask]] and Dask-CUDA scale RAPIDS workloads across multiple GPUs and nodes.
- [[RAPIDS-Accelerator-for-Apache-Spark]] extends the RAPIDS/cuDF stack into Spark SQL and DataFrame operations.

### Deployment and ecosystem
The current NVIDIA developer page lists conda and pip installation paths for the 26.04 RAPIDS family, including CUDA 13 package variants through the NVIDIA PyPI index. It also points to local, platform, and cloud deployment guides spanning Kubernetes, Databricks, Google Colab, AWS, Azure, and GCP.

RAPIDS is especially important in [[NVIDIA-AI-Enterprise]] because it fills the data preparation, feature engineering, analytics, and classical ML layer that often feeds model training, RAG indexing, vector search, and production inference.

## Connections
- [[cuDF]], [[cuML]], [[cuGraph]], [[cuVS]], and [[cuCIM]] - core RAPIDS/CUDA-X data science libraries with their own focused pages.
- [[RAPIDS-Accelerator-for-Apache-Spark]] - Spark-specific RAPIDS plugin and deployment surface.
- [[Dask]] - distributed Python execution path used to scale RAPIDS workloads.
- [[NVIDIA-AI-Enterprise]] - supported enterprise software stack that includes RAPIDS components.
- [[NVIDIA-CUDA]] - RAPIDS is built on CUDA libraries, CUDA memory, and GPU execution primitives.
- [[GPU-Direct-Storage]] - KvikIO and storage-heavy RAPIDS workflows can use NVIDIA's direct storage path.

## Source Excerpts
- NVIDIA Docs describes RAPIDS as a GPU-based framework for end-to-end data science pipelines.
- NVIDIA CUDA-X Data Science docs list cuDF, cuML, cuGraph, Spark acceleration, Dask-RAPIDS, cuCIM, cuVS, RAFT, and KvikIO as data science and processing components.
- The current developer page provides RAPIDS 26.04 installation examples for conda and pip.

## Resources
- [NVIDIA RAPIDS Docs Hub](https://docs.nvidia.com/rapids/index.html)
- [CUDA-X Data Science Libraries](https://developer.nvidia.com/topics/ai/data-science/cuda-x-data-science-libraries)
- [RAPIDS Documentation](https://docs.rapids.ai/)
