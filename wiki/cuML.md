# cuML

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Machine Learning, RAPIDS, scikit-learn, Python, Open Source
**Related:** [[NVIDIA-RAPIDS]], [[cuDF]], [[cuGraph]], [[cuVS]], [[Dask]], [[NVIDIA-Merlin]], [[cuDNN]], [[Thrust]]
**Sources:** NVIDIA official documentation (RAPIDS), https://docs.nvidia.com/rapids/index.html, https://developer.nvidia.com/topics/ai/data-science/cuda-x-data-science-libraries, https://docs.rapids.ai/api/cuml/
**Last Updated:** 2026-04-30

## Summary
cuML is a GPU-accelerated machine learning library providing drop-in replacements for scikit-learn, UMAP, and HDBSCAN algorithms, delivering up to 50x speedups on NVIDIA GPUs. Part of [[NVIDIA-RAPIDS]], it enables data scientists to run classical ML algorithms — clustering, regression, dimensionality reduction, and more — on GPU without rewriting their scikit-learn code.

## Detail

### Purpose
Scikit-learn is the standard Python ML library for classical algorithms, but it is CPU-bound and slow on large datasets. cuML accelerates these same algorithms on the GPU, enabling orders-of-magnitude speedups for training and prediction, making it practical to run ML at scale in data pipelines that previously required distributed CPU clusters.

### Key Features
- 50x faster scikit-learn with zero-code-change accelerator
- GPU-accelerated algorithms: regression (linear, ridge, lasso), classification (SVM, random forest, KNN), clustering (K-Means, DBSCAN, HDBSCAN), dimensionality reduction (PCA, UMAP, t-SNE)
- Drop-in replacement for UMAP and HDBSCAN specifically
- cuML.accel: transparent scikit-learn acceleration mode
- cuDF integration — operates natively on GPU DataFrames
- Dask-cuML for multi-GPU and distributed ML
- Python and C++ APIs

### Use Cases
- Large-scale classical ML training (clustering, regression, classification)
- Dimensionality reduction for visualization (UMAP, t-SNE on millions of points)
- Anomaly detection at scale
- Feature engineering and preprocessing in GPU pipelines
- Accelerating AutoML and hyperparameter search
- NLP feature extraction (TF-IDF at GPU speed)

### Hardware Requirements
- NVIDIA GPU, Pascal or newer (Volta+ recommended)
- CUDA 11.x or 12.x
- Linux (primary supported OS)
- Part of RAPIDS ecosystem

### Language Bindings
- Python (primary API, scikit-learn compatible)
- C++ (underlying libml implementation)

## Connections
- [[NVIDIA-RAPIDS]] — cuML is the classical machine learning library in NVIDIA's CUDA-X data science stack
- [[cuDF]] — cuML takes cuDF DataFrames as input/output for seamless GPU pipeline integration
- [[cuGraph]] — cuML and cuGraph share graph-based clustering algorithms
- [[cuVS]] — cuVS provides GPU-accelerated nearest neighbor search used by cuML KNN
- [[Dask]] — dask-cuML scales cuML estimators across distributed GPU workers
- [[NVIDIA-Merlin]] — recommender workflows can pair RAPIDS preprocessing and ML with Merlin-specific recommendation components
- [[cuDNN]] — cuML complements cuDNN (which targets deep learning); cuML handles classical ML
- [[Thrust]] — cuML uses Thrust for underlying parallel primitives

## Resources
- [Official RAPIDS Page](https://developer.nvidia.com/rapids)
- [cuML GitHub](https://github.com/rapidsai/cuml)
- [RAPIDS Documentation](https://docs.rapids.ai/api/cuml/)
