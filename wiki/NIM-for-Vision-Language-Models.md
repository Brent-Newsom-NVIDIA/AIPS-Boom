# NIM for Vision Language Models

**Type:** Microservice
**Tags:** NVIDIA, NIM, VLM, vision-language model, multimodal AI, visual question answering, image understanding, video understanding, OpenAI-compatible
**Related:** [[NVIDIA-NIM]], [[NVLM]], [[NIM-for-NV-CLIP]], [[NVIDIA-EAGLE]], [[Nemotron]], [[Nemotron-3-Nano-Omni]], [[Nemotron-Parse]], [[Nemotron-3-Content-Safety]], [[Llama-Nemotron-Embed-VL-1B-v2]], [[Llama-Nemotron-Rerank-VL-1B-v2]], [[NIM-for-Cosmos-Reason]], [[Ising-Calibration-1-35B-A3B]], [[NIM-for-Cosmos-WFM]], [[NIM-for-Cosmos-Embed1]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-Video-Search-and-Summarization-Blueprint]], [[NIM-for-Visual-Generative-AI]], [[NIM-for-Multimodal-Safety]], [[NeMo-Retriever]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[NVIDIA-AI-Data-Platform]], [[TensorRT-LLM]], [[Triton-Inference-Server]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nim/vision-language-models/latest/introduction.html, https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html, https://docs.nvidia.com/nim/vision-language-models/latest/release-notes.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-parse/api.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/cosmos-reason2/api.html, https://docs.nvidia.com/nim/vision-language-models/latest/fine-tune-model.html, https://docs.nvidia.com/rag/latest/multimodal-query.html, https://docs.nvidia.com/vss/latest/, https://docs.nvidia.com/nim/nvclip/latest/introduction.html, https://docs.nvidia.com/nim/vision-language-models/latest/index.html, https://docs.nvidia.com/nim/vision-language-models/latest/getting-started.html, https://docs.nvidia.com/nim/multimodal-safety/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM for Vision Language Models is the NIM documentation surface for self-hosting VLMs in enterprise environments. Current docs describe it as providing natural language plus multimodal understanding for copilots, chatbots, and AI assistants, with OpenAI-compatible programming patterns and model-family container deployment.

## Detail

### Purpose
Vision-language models let applications reason over images, diagrams, documents, video frames, and text together. NIM for VLMs packages those models behind production APIs so teams can deploy visual question answering, image summarization, chart/diagram interpretation, and multimodal assistant workflows on NVIDIA GPUs.

### Current scope
- Current 1.7.0 release docs list NVIDIA Nemotron 3 Nano Omni, Qwen3.6, Kimi-K2.6, Cosmos Reason2, Gemma, Mistral, Qwen3.5, Nemotron-Parse-v1.2, Ministral, and Kimi-K2.5 in the active support matrix.
- [[Nemotron-3-Nano-Omni]] is the current NVIDIA omnimodal model in this VLM stream, with image, video, audio, text, reasoning, audio-in-video, video sampling, and Efficient Video Sampling controls documented in its API page.
- [[Nemotron-Parse]] is the current document-parsing Nemotron VLM, now listed as Nemotron-Parse-v1.2 with a changed API relative to the earlier 1.5.0 Nemotron Parse release.
- [[NIM-for-Cosmos-Reason]] covers Cosmos Reason1/Reason2 as the Cosmos VLM NIM family, including OpenAI-style chat completion examples for image/video plus text inputs.
- OpenAI-compatible integration patterns plus NVIDIA extensions for multimodal requests.
- Optimized TRT engines for supported GPU/model combinations and fallback vLLM paths for other supported NVIDIA GPUs.
- Container distribution through NGC with model download/cache behavior and security scan reports.
- Helm deployment, air-gapped deployment, observability, structured generation, function/tool calling, sampling control, and KV-cache reuse.
- Hardware/software setup in current docs includes NVIDIA AI Enterprise licensing, NVIDIA drivers, Docker, and CUDA 13.0 guidance.

### NVIDIA context
This page bridges NVIDIA model families such as [[NVLM]], [[NVIDIA-EAGLE]], [[Nemotron]], and [[NIM-for-Cosmos-Reason]] into the production [[NVIDIA-NIM]] graph. It is also the current docs home for Cosmos Reason NIMs, while [[NIM-for-Cosmos-WFM]] covers Cosmos Predict/Transfer world generation. For multimodal retrieval, [[NIM-for-NV-CLIP]] and [[Llama-Nemotron-Embed-VL-1B-v2]] are adjacent embedding surfaces; VLM NIMs reason over visual inputs in workflows such as [[NVIDIA-RAG-Blueprint]] and [[NVIDIA-Video-Search-and-Summarization-Blueprint]].

## Connections
- [[NVIDIA-NIM]] - umbrella inference microservices platform.
- [[NVLM]] and [[NVIDIA-EAGLE]] - NVIDIA multimodal model families adjacent to the VLM NIM surface.
- [[NIM-for-NV-CLIP]] - multimodal embedding NIM for text/image retrieval before VLM reasoning.
- [[Nemotron]] - current VLM docs include Nemotron-branded omnimodal and parsing models.
- [[Nemotron-3-Nano-Omni]] - current NVIDIA omnimodal VLM NIM for text, image, video, audio, document, and GUI understanding.
- [[Nemotron-Parse]] - current Nemotron document parser for text/table extraction, layout classes, and bounding boxes.
- [[Llama-Nemotron-Embed-VL-1B-v2]] - multimodal embedding model for visual document retrieval before generation or reranking.
- [[Llama-Nemotron-Rerank-VL-1B-v2]] - VLM-style reranker for multimodal visual document retrieval.
- [[NIM-for-Cosmos-Reason]] - Cosmos Reason1/Reason2 VLM NIM family.
- [[Ising-Calibration-1-35B-A3B]] - domain-specific NVIDIA VLM endpoint for quantum calibration plot understanding.
- [[NIM-for-Cosmos-WFM]] - Cosmos WFM NIM covers Predict and Transfer; VLM docs cover Cosmos Reason.
- [[NIM-for-Cosmos-Embed1]] - embedding NIM for video-text retrieval complements VLM reasoning.
- [[NVIDIA-RAG-Blueprint]] and [[NVIDIA-Video-Search-and-Summarization-Blueprint]] - blueprint workflows that use VLMs for multimodal generation, video understanding, reports, and Q&A.
- [[NIM-for-Visual-Generative-AI]] - adjacent NIM family for image generation and editing models.
- [[NIM-for-Multimodal-Safety]] and [[Nemotron-3-Content-Safety]] - moderation layer for multimodal applications that understand or generate visual content.
- [[NIM-for-Image-OCR]] and [[NIM-for-Object-Detection]] - Retriever extraction NIMs for document/video understanding pipelines.
- [[NVIDIA-AI-Data-Platform]] - VLMs can reason over retrieved multimodal enterprise data.
- [[TensorRT-LLM]] and [[Triton-Inference-Server]] - inference and serving stack for NIM deployments.
- [[NVIDIA-AI-Enterprise]] - enterprise licensing and support context for self-hosted VLM NIMs.

## Source Excerpts
- NVIDIA docs describe NIM for VLMs as bringing state-of-the-art vision-language models to enterprise applications.
- Current docs list image Q&A, image summarization, image description, and chart/diagram understanding as applications.
- Current support docs list NVIDIA Nemotron 3 Nano Omni among supported VLM NIM models and note that VLM NIMs are not supported in NVIDIA vGPU environments.
- Current release notes introduce Nemotron 3 Nano Omni in release 1.7.0 and list Nemotron-Parse-v1.2 as the updated Nemotron Parse release with a changed API.
- Current support docs list Cosmos Reason2 2B and 8B, single-GPU deployment constraints, optional EAGLE speculative decoding profiles, and EVS limitations.

## Resources
- [NVIDIA NIM for VLMs Overview](https://docs.nvidia.com/nim/vision-language-models/latest/introduction.html)
- [NVIDIA NIM for VLMs Index](https://docs.nvidia.com/nim/vision-language-models/latest/index.html)
- [NIM for VLMs Support Matrix](https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html)
- [NIM for VLMs Release Notes](https://docs.nvidia.com/nim/vision-language-models/latest/release-notes.html)
- [Get Started with NIM for VLMs](https://docs.nvidia.com/nim/vision-language-models/latest/getting-started.html)
- [Query the Nemotron 3 Nano Omni API](https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html)
- [Query the Nemotron-Parse-v1.2 API](https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-parse/api.html)
- [Query the Cosmos Reason2 API](https://docs.nvidia.com/nim/vision-language-models/latest/examples/cosmos-reason2/api.html)
