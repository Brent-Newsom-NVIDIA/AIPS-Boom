# NIM for Cosmos Reason

**Type:** Microservice
**Tags:** NVIDIA, NIM, Cosmos, Cosmos Reason, VLM, vision-language model, physical AI, video understanding, image reasoning
**Related:** [[NVIDIA-Cosmos]], [[NIM-for-Vision-Language-Models]], [[NIM-for-Cosmos-WFM]], [[NIM-for-Cosmos-Embed1]], [[NVIDIA-Video-Search-and-Summarization-Blueprint]], [[NVIDIA-NIM]], [[NVIDIA-AI-Enterprise]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[NVIDIA-AI-Data-Platform]]
**Sources:** https://docs.nvidia.com/cosmos/latest/cosmos_nim.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/cosmos-reason2/api.html, https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html, https://docs.nvidia.com/nim/vision-language-models/latest/fine-tune-model.html, https://docs.nvidia.com/nim/vision-language-models/latest/getting-started.html
**Last Updated:** 2026-04-29

## Summary
NIM for Cosmos Reason is the NVIDIA NIM for VLMs surface for Cosmos Reason vision-language models. Current NVIDIA Cosmos docs identify Cosmos Reason1 and Cosmos Reason2 as VLM NIMs, distinct from [[NIM-for-Cosmos-WFM]] world-generation NIMs and [[NIM-for-Cosmos-Embed1]] video-text embedding NIMs.

## Detail

### Purpose
Cosmos Reason models give physical AI and video-intelligence workflows a VLM path for reasoning over images, videos, and text. They sit between Cosmos data-generation/embedding workflows and application layers such as video search, long-video summarization, alert verification, multimodal RAG, and visual assistants.

### Current scope
- Current [[NIM-for-Vision-Language-Models]] docs list Cosmos Reason2 as an active supported model family with 2B and 8B sizes.
- The Cosmos docs state that NVIDIA NIM for VLMs provides access to Cosmos Reason2 and Cosmos Reason1 NIMs for VLM reasoning.
- Cosmos Reason2 supports OpenAI-style chat completion requests that combine text with image or video URL content.
- Current support matrix lists Cosmos Reason2 release 1.7.0 as latest, with 1.6.0 also listed.
- Cosmos Reason2 supports single-GPU deployment only in the current support matrix; multi-GPU tensor parallelism is not available for the listed profiles.
- Current support matrix documents EAGLE speculative decoding profiles for some Cosmos Reason2 configurations; these profiles are not selected by default.
- Current fine-tuning docs list Cosmos Reason2, Cosmos Reason1 7B, and Llama Nemotron Nano VL as the VLM custom-weight/fine-tune deployment set.

### NVIDIA context
Cosmos Reason should be queried as a Cosmos VLM NIM, not as a Cosmos WFM generation model. The page complements [[NIM-for-Cosmos-WFM]] for world generation, [[NIM-for-Cosmos-Embed1]] for retrieval embeddings, and [[NVIDIA-Cosmos-Curator-LHA]] for video data curation.

## Connections
- [[NVIDIA-Cosmos]] - parent Cosmos platform and model family.
- [[NIM-for-Vision-Language-Models]] - current docs surface for Cosmos Reason deployment, APIs, support matrix, fine-tuning, observability, and configuration.
- [[NIM-for-Cosmos-WFM]] - sibling Cosmos NIM for Predict and Transfer world foundation models.
- [[NIM-for-Cosmos-Embed1]] - sibling Cosmos NIM for joint video-text embeddings.
- [[NVIDIA-Video-Search-and-Summarization-Blueprint]] - video intelligence blueprint that uses Cosmos-style VLM reasoning and embeddings.
- [[NVIDIA-AI-Data-Platform]] - multimodal data and retrieval context for VLM reasoning over enterprise video/image assets.
- [[NVIDIA-NIM]] - umbrella inference microservices layer for self-hosted and API-served model endpoints.
- [[NVIDIA-AI-Enterprise]] - licensing and support context for self-hosted NIM for VLMs.
- [[TensorRT-LLM]] and [[Triton-Inference-Server]] - adjacent inference and serving stack used across NVIDIA model-serving paths.

## Source Excerpts
- NVIDIA Cosmos docs list NIM for VLMs as the access path for Cosmos Reason2 and Cosmos Reason1 NIMs.
- Current VLM support docs list Cosmos Reason2 2B and 8B, single-GPU deployment constraints, and optional EAGLE speculative decoding profiles.
- Current VLM fine-tuning docs list Cosmos Reason2 and Cosmos Reason1 7B among custom VLM model deployment targets.

## Resources
- [NVIDIA NIMs for Cosmos](https://docs.nvidia.com/cosmos/latest/cosmos_nim.html)
- [Query the Cosmos Reason2 API](https://docs.nvidia.com/nim/vision-language-models/latest/examples/cosmos-reason2/api.html)
- [NIM for VLMs Support Matrix](https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html)
- [Fine-Tune a VLM Model](https://docs.nvidia.com/nim/vision-language-models/latest/fine-tune-model.html)
