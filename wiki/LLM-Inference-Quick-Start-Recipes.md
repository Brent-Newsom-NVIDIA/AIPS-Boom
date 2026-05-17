# LLM Inference Quick Start Recipes

**Type:** Guide
**Tags:** NVIDIA, LLM inference, recipes, deployment, TensorRT-LLM, NIM, GPUs
**Related:** [[NVIDIA-NIM]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[NVIDIA-Dynamo]], [[NVIDIA-DGX]], [[NVIDIA-API-Documentation]]
**Sources:** https://docs.nvidia.com/llm-inference-quick-start-recipes/index.html
**Last Updated:** 2026-04-29

## Summary
LLM Inference Quick Start Recipes are NVIDIA deployment guides for running popular open source LLMs on NVIDIA hardware. They sit between model selection and production inference, giving users practical starting points for optimized LLM serving.

## Detail
The recipes are useful when a team has selected a model and needs a working NVIDIA-optimized deployment path. They complement [[NVIDIA-NIM]] for packaged inference microservices and [[TensorRT-LLM]] for lower-level LLM runtime optimization.

In the wiki, this page should link model-serving topics to concrete deployment guidance: hardware, containers, runtime choices, and serving frameworks. It also belongs near [[NVIDIA-Dynamo]] because current NVIDIA inference serving is moving toward multi-node and disaggregated runtime patterns.

## Connections
- [[NVIDIA-NIM]] - packaged model endpoint path for LLM inference.
- [[TensorRT-LLM]] - optimized runtime frequently used for LLM serving.
- [[Triton-Inference-Server]] - production server for multi-framework inference.
- [[NVIDIA-Dynamo]] - distributed inference-serving platform for data center scale.
- [[NVIDIA-DGX]] - target NVIDIA hardware platform for high-throughput inference.

## Source Excerpts
- NVIDIA describes these recipes as optimized deployment guides for NVIDIA hardware for popular open source LLMs.
