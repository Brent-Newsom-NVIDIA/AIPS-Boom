# TensorFlow GPU

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Deep Learning, Framework, Python, Machine Learning
**Related:** [[NVIDIA-Optimized-Frameworks]], [[cuDNN]], [[cuBLAS]], [[NCCL]], [[TensorRT]], [[JAX]], [[PyTorch]]
**Sources:** tensorflow.org/install/gpu official documentation, https://docs.nvidia.com/deeplearning/frameworks/index.html, https://docs.nvidia.com/deeplearning/frameworks/support-matrix/
**Last Updated:** 2026-04-29

## Summary
TensorFlow is Google's open-source machine learning framework, with GPU acceleration on NVIDIA hardware provided through tight integration with the CUDA toolkit, cuDNN, and cuBLAS. TensorFlow GPU enables training and inference of deep neural networks on NVIDIA GPUs using static computation graphs (tf.function with XLA compilation) and eager execution mode. While PyTorch has largely displaced TensorFlow in research, TensorFlow remains widely deployed in production systems and is the primary framework for TensorFlow Lite (mobile/edge) and TensorFlow Extended (TFX) MLOps pipelines.

## Detail

### Purpose
TensorFlow GPU provides a mature, production-proven deep learning framework with comprehensive tooling for the full ML lifecycle from data preparation through model training, evaluation, and production serving. Its GPU support enables accelerated training across NVIDIA hardware from single workstation GPUs to multi-node clusters.

### Key Features
- `tf.function` with XLA JIT compilation for fused GPU kernel execution
- `tf.GradientTape` for automatic differentiation in eager mode
- `tf.distribute.Strategy` API for multi-GPU training (MirroredStrategy, MultiWorkerMirroredStrategy)
- Keras high-level API for model building (now Keras 3 with multi-backend support)
- cuDNN integration for convolutions, RNNs, and batch normalization
- cuBLAS integration for matrix multiplications
- NCCL for multi-GPU collective communications via `tf.distribute`
- TensorFlow Profiler with GPU timeline tracing (integrates with Nsight Systems)
- TF-TRT (TensorFlow-TensorRT): automatic TensorRT optimization of TensorFlow graphs
- Mixed precision training API (`tf.keras.mixed_precision`)
- `tf.data` input pipeline with GPU prefetching
- SavedModel format for portable model serialization
- TensorFlow Hub for pre-trained model reuse

### Use Cases
- Production ML model training in enterprise environments
- Running TensorFlow in NVIDIA optimized framework containers with support-matrix controlled CUDA/cuDNN/TensorRT versions
- TFX (TensorFlow Extended) MLOps pipelines
- TensorFlow Lite model development (mobile/embedded deployment)
- Recommendation systems and ranking models
- NLP with TensorFlow Hub pre-trained models (BERT, etc.)
- Computer vision training pipelines
- Time series forecasting and signal processing

### Hardware Requirements
- NVIDIA GPU with CUDA Compute Capability 3.5+ (Kepler minimum)
- TensorFlow 2.x requires CUDA 11.2 or higher and cuDNN 8.1+
- CUDA 12.x and cuDNN 8.9+ for TensorFlow 2.13+
- Multi-GPU: NVLink + InfiniBand for large distributed training
- A100/H100 for state-of-the-art training performance

### Language Bindings
- Python (primary)
- C++ (TensorFlow C API and C++ API)
- Java, JavaScript (TensorFlow.js), Swift (limited)

## Connections
- [[NVIDIA-Optimized-Frameworks]] - NVIDIA optimized framework containers provide a versioned TensorFlow GPU environment through NGC.
- [[cuDNN]] — TensorFlow uses cuDNN for all convolution, pooling, and RNN GPU primitives
- [[cuBLAS]] — underlies all `tf.matmul` and dense layer operations on GPU
- [[NCCL]] — powers `tf.distribute` multi-GPU and multi-node collective operations
- [[TensorRT]] — TF-TRT integration optimizes TensorFlow graphs with TensorRT for production inference
- [[JAX]] — JAX and TensorFlow both use XLA as a GPU compilation backend
- [[PyTorch]] — competing framework; Keras 3 supports both TensorFlow and PyTorch backends

## Resources
- [TensorFlow GPU Installation Guide](https://www.tensorflow.org/install/gpu)
- [TensorFlow Documentation](https://www.tensorflow.org/api_docs)
- [GitHub](https://github.com/tensorflow/tensorflow)
- [NVIDIA TF-TRT Guide](https://docs.nvidia.com/deeplearning/frameworks/tf-trt-user-guide/)
