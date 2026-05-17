# NeMo Export-Deploy

**Type:** Library
**Tags:** NVIDIA, NeMo, export, deploy, TensorRT-LLM, vLLM, Triton, Ray Serve, inference, LLM, multimodal
**Related:** [[NVIDIA-NeMo]], [[NeMo-AutoModel]], [[NeMo-Megatron-Bridge]], [[NeMo-Run]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[NVIDIA-NIM]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[vLLM]], [[TensorRT]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nemo/export-deploy/latest/index.html, https://docs.nvidia.com/nemo/export-deploy/latest/apidocs/nemo_export/nemo_export.html, https://docs.nvidia.com/nemo-framework/user-guide/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NeMo Export-Deploy is NVIDIA's NeMo library for exporting and deploying NeMo and Hugging Face models into production inference environments. Current NVIDIA docs describe export paths to TensorRT-LLM, vLLM, TensorRT/ONNX-style targets where applicable, deployment through NVIDIA Triton Inference Server or Ray Serve, quantized model export, multi-GPU and distributed inference, and multi-instance deployment patterns.

## Detail

### Purpose
Training and customization are only useful if the resulting model can be served reliably. NeMo Export-Deploy provides the handoff from NeMo/Hugging Face checkpoints to optimized serving runtimes so teams can move models from training workflows into inference systems.

### Current scope
- Export and deploy LLMs and multimodal models from NeMo, [[NeMo-AutoModel]], [[NeMo-Megatron-Bridge]], Megatron-LM, and Hugging Face formats.
- Export paths for [[TensorRT-LLM]] and [[vLLM]], with deployment examples through [[Triton-Inference-Server]] and Ray Serve.
- Support for quantized model export, including FP8-oriented flows in current docs.
- Multi-GPU, distributed inference, and multi-instance deployment guidance.
- API surfaces under `nemo_export` and `nemo_deploy`.

### NVIDIA context
Export-Deploy sits between [[NVIDIA-NeMo]] training/customization and production inference surfaces such as [[NVIDIA-NIM]], [[TensorRT-LLM]], [[Triton-Inference-Server]], and [[vLLM]]. It is a durable NVIDIA-authored topic because it has a separate docs tree, package identity, and deployment role.

## Connections
- [[NVIDIA-NeMo]] - parent suite for training, customization, and deployment.
- [[NeMo-AutoModel]] - Hugging Face-compatible checkpoints can be exported and deployed.
- [[NeMo-Megatron-Bridge]] - Megatron Bridge checkpoints are a documented export/deploy path.
- [[NeMo-Run]] - experiment execution layer before deployment handoff.
- [[NeMo-Customizer]] and [[NeMo-Evaluator]] - model adaptation and evaluation happen before production deployment.
- [[NVIDIA-NIM]] - higher-level model microservice product layer adjacent to NeMo deployment workflows.
- [[TensorRT-LLM]] - optimized LLM export and inference backend.
- [[Triton-Inference-Server]] - production serving target for exported models.
- [[vLLM]] - supported inference backend for deployable LLM paths.
- [[TensorRT]] - broader NVIDIA inference compiler/runtime family.
- [[NVIDIA-AI-Enterprise]] - enterprise support context for production NeMo deployment.

## Source Excerpts
- NVIDIA docs describe Export-Deploy as tools and APIs for exporting and deploying NeMo and Hugging Face models.
- Current docs list TensorRT-LLM, vLLM, Triton Inference Server, and Ray Serve as deployment paths.

## Resources
- [NeMo Export-Deploy Documentation](https://docs.nvidia.com/nemo/export-deploy/latest/index.html)
- [NeMo Export API Reference](https://docs.nvidia.com/nemo/export-deploy/latest/apidocs/nemo_export/nemo_export.html)
