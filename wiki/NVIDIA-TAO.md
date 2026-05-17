# NVIDIA TAO

**Type:** Platform / Toolkit
**Tags:** NVIDIA, TAO, transfer learning, fine-tuning, computer vision, VLM, embeddings, TensorRT, DeepStream, NGC, Metropolis
**Related:** [[NVIDIA-Metropolis]], [[NVIDIA-DeepStream]], [[NGC]], [[NVIDIA-NGC-Catalog]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Jetson-Platform]], [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-Image-Segmentation]], [[Isaac-ROS-DNN-Stereo-Depth]], [[NIM-for-Cosmos-Embed1]], [[NIM-for-NV-CLIP]]
**Sources:** https://docs.nvidia.com/tao/index.html, https://docs.nvidia.com/tao/tao-toolkit/latest/index.html, https://docs.nvidia.com/tao/tao-toolkit/latest/text/overview.html, https://docs.nvidia.com/tao/tao-toolkit/latest/text/model_zoo/overview.html, https://docs.nvidia.com/tao/tao-toolkit/latest/text/data_services/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA TAO is NVIDIA's Train, Adapt, and Optimize platform for fine-tuning pretrained AI models and preparing them for NVIDIA deployment stacks. Current TAO Toolkit docs cover computer vision, visual embedding, and vision-language model fine-tuning; dataset annotation and data services; model optimization; TAO Deploy; TensorRT profiling; and integration with [[NVIDIA-DeepStream]], [[Triton-Inference-Server]], [[TensorRT]], and [[NGC]] model artifacts.

## Detail

### Purpose
Building production vision models from scratch is expensive and data hungry. TAO shortens that path by starting from NVIDIA pretrained models, adapting them to a user's dataset, optimizing them for inference, and exporting deployment artifacts for edge, data center, and video analytics systems.

### Current capabilities
- Multiple run modes: Fine-Tuning Micro-Services, Launcher CLI, containers, Python wheels, and source-based workflows.
- Model zoo and foundation model surfaces for computer vision, embeddings, VLM fine-tuning, classification, detection, segmentation, depth, pose, re-identification, action recognition, and visual change detection.
- Data annotation formats and TAO Data Services for ingestion, annotation, augmentation, auto-labeling, and analytics.
- Optimization features including knowledge distillation, automatic mixed precision, pruning, quantization-aware training, post-training quantization, and TAO Quant.
- MLOps integration with Weights & Biases, ClearML, and TensorBoard.
- Deployment paths for Triton, TensorRT `trtexec`, DeepStream integration, and TAO Deploy model-specific flows.
- Current release notes signal TAO 6.26.3, with newer fine-tuning support such as NVPanoptix3D, CLIP-style embedding workflows, Cosmos Embed1/C-RADIO model signals, expanded QDQ ONNX quantization, FP8/INT8 TensorRT engine generation, and Cosmos Reason 2.0 VLM fine-tuning.

### NVIDIA context
TAO sits between NVIDIA's model catalog and production deployment stack. It is especially important for [[NVIDIA-Metropolis]] and [[NVIDIA-DeepStream]] because custom video analytics models often begin as TAO-pretrained models on [[NGC]], get adapted with customer data, and then deploy through [[TensorRT]], [[Triton-Inference-Server]], DeepStream, Jetson, or Isaac ROS perception graphs.

## Connections
- [[NVIDIA-Metropolis]] - TAO is the customization path for Metropolis vision models.
- [[NVIDIA-DeepStream]] - TAO models are commonly deployed into DeepStream video analytics pipelines.
- [[NGC]] and [[NVIDIA-NGC-Catalog]] - TAO containers, pretrained models, and model artifacts are distributed through NVIDIA catalogs.
- [[TensorRT]] - TAO deployment flows generate or profile TensorRT engines for optimized inference.
- [[Triton-Inference-Server]] - TAO docs include Triton integration for CV model serving.
- [[NVIDIA-AI-Enterprise]] - enterprise production context for TAO-adjacent NVIDIA AI software.
- [[NVIDIA-Jetson-Platform]] - common edge deployment target for TAO-trained vision models through DeepStream or Isaac ROS.
- [[Isaac-ROS-DNN-Inference]], [[Isaac-ROS-Object-Detection]], [[Isaac-ROS-Image-Segmentation]], and [[Isaac-ROS-DNN-Stereo-Depth]] - robotics perception packages that can consume model families similar to TAO-trained/exported CV models.
- [[NIM-for-Cosmos-Embed1]] and [[NIM-for-NV-CLIP]] - adjacent NVIDIA embedding/model surfaces connected to current TAO embedding and CLIP-style fine-tuning signals.

## Source Excerpts
- Current NVIDIA TAO docs present TAO as the latest-release docs surface for TAO Toolkit.
- TAO Data Services manages dataset ingestion, annotation, augmentation, and conversion for TAO training.
- TAO 6.26.3 release notes list expanded model architectures, pretrained models, quantization, TensorRT engine generation, and VLM fine-tuning updates.

## Resources
- [NVIDIA TAO Documentation Hub](https://docs.nvidia.com/tao/index.html)
- [TAO Toolkit Latest Documentation](https://docs.nvidia.com/tao/tao-toolkit/latest/index.html)
- [TAO Toolkit Overview](https://docs.nvidia.com/tao/tao-toolkit/latest/text/overview.html)
- [TAO Model Zoo Overview](https://docs.nvidia.com/tao/tao-toolkit/latest/text/model_zoo/overview.html)
- [TAO Data Services](https://docs.nvidia.com/tao/tao-toolkit/latest/text/data_services/index.html)
