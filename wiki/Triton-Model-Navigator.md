# Triton Model Navigator

**Type:** Tool
**Tags:** NVIDIA, Triton, Model Navigator, TensorRT, PyTorch, TensorFlow, ONNX, optimization, deployment, profiling
**Related:** [[Triton-Inference-Server]], [[Triton-Model-Analyzer]], [[Triton-Performance-Analyzer]], [[TensorRT]], [[TensorRT-LLM]], [[PyTorch]], [[NVIDIA-DALI]], [[NVIDIA-NIM]], [[NVIDIA-TAO]]
**Sources:** https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/model_navigator/README.html
**Last Updated:** 2026-04-29

## Summary
Triton Model Navigator is NVIDIA's inference toolkit for optimizing and deploying deep learning models and Python pipelines on NVIDIA GPUs. It automates export, conversion, correctness testing, profiling, and deployment preparation for models from PyTorch, TensorFlow, ONNX, and Python callable workflows, with a focus on [[TensorRT]] and [[Triton-Inference-Server]] deployment.

## Detail

### Purpose
Moving a trained model into a fast production serving format can require exporting the model, trying several conversion paths, validating numerical correctness, profiling alternatives, and preparing a model repository. Triton Model Navigator provides a single Python-facing workflow for searching those deployment options.

### Current scope
- Model and pipeline optimization for PyTorch, TensorFlow, ONNX, and Python callables.
- Export and conversion paths focused on TensorRT and Torch-TensorRT-style deployment targets.
- Correctness testing against the original model or callable.
- Performance profiling to select the best format for a target NVIDIA GPU.
- Deployment preparation for Triton Inference Server and PyTriton-style serving flows.
- In-place optimization for Python pipelines such as Stable Diffusion and Whisper-style workloads.
- Generation of Triton model stores for deployment.

### NVIDIA context
Model Navigator bridges training-framework code and Triton production serving. It belongs near [[TensorRT]], [[Triton-Inference-Server]], [[Triton-Model-Analyzer]], [[Triton-Performance-Analyzer]], [[PyTorch]], and [[NVIDIA-TAO]] because it answers the conversion/deployment-preparation question before a model is benchmarked or operationalized.

## Connections
- [[Triton-Inference-Server]] - target serving system for optimized model stores.
- [[Triton-Model-Analyzer]] - adjacent Triton tool for profiling deployed model configurations.
- [[Triton-Performance-Analyzer]] - benchmark tool for measuring served model behavior.
- [[TensorRT]] - primary NVIDIA optimization target for many Model Navigator flows.
- [[TensorRT-LLM]] - related inference stack for LLM deployment, though Model Navigator is broader than LLM serving.
- [[PyTorch]] - common source framework for Model Navigator optimization.
- [[NVIDIA-DALI]] - adjacent data/preprocessing acceleration used in model-serving pipelines.
- [[NVIDIA-NIM]] - production microservice layer downstream of optimized model artifacts.
- [[NVIDIA-TAO]] - TAO exports and deployment recipes overlap with TensorRT/Triton deployment preparation.

## Source Excerpts
- NVIDIA docs describe Model Navigator as an inference toolkit for optimizing and deploying deep learning models with NVIDIA GPUs.
- Current docs list export, conversion, correctness testing, profiling, and deployment as core automated steps.

## Resources
- [Triton Model Navigator](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/model_navigator/README.html)
