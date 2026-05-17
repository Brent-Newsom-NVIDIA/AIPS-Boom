# Nemotron 3 Nano Omni

**Type:** Model / NIM microservice
**Tags:** NVIDIA, Nemotron, omnimodal, multimodal, VLM, audio, video, image, document intelligence, agentic AI, NIM
**Related:** [[Nemotron]], [[NIM-for-Vision-Language-Models]], [[NVIDIA-NIM]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NVIDIA-NemoClaw]], [[NVIDIA-OpenShell]], [[NVIDIA-NeMo]], [[NeMo-Data-Designer]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Megatron-Bridge]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[NIM-for-Cosmos-Reason]], [[NVIDIA-AI-Blueprints]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-Video-Search-and-Summarization-Blueprint]], [[TensorRT-LLM]], [[vLLM]], [[NVIDIA-Dynamo]], [[NVIDIA-DGX-Spark]], [[NVIDIA-DGX-Station]]
**Sources:** https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html; https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html; https://docs.nvidia.com/nim/vision-language-models/latest/release-notes.html; https://build.nvidia.com/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning; https://blogs.nvidia.com/blog/nemotron-3-nano-omni-multimodal-ai-agents/; https://developer.nvidia.com/blog/nvidia-nemotron-3-nano-omni-powers-multimodal-agent-reasoning-in-a-single-efficient-open-model
**Last Updated:** 2026-04-29

## Summary
Nemotron 3 Nano Omni is NVIDIA's current open omnimodal reasoning model for agentic workflows that need a single perception model across text, images, video, audio, documents, charts, and graphical interfaces. The latest [[NIM-for-Vision-Language-Models]] docs introduce it in the 1.7.0 release stream and provide a self-hosted NIM container for the `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` model.

## Detail

### Purpose
Agentic systems often need to reason over screens, PDFs, audio, video, images, and text in the same task. Nemotron 3 Nano Omni is positioned as the perception and context sub-agent for those workflows, reducing the need to chain separate vision, speech, and language models before handing context to planners or execution agents.

### Current NIM surface
- Current VLM NIM release notes list Nemotron 3 Nano Omni as an initial release in NIM for VLMs 1.7.0.
- The NIM API page launches repository `nemotron-3-nano-omni-30b-a3b-reasoning` with release tag `1.7.0-variant`.
- The NIM uses a specialized base container; current docs point readers to the NIM container-variant notes for that path.
- The API follows the OpenAI Chat Completions pattern and accepts image, video, and audio content in user messages.
- Media can be passed by public URL or base64 data. Current examples show image, video, audio, and audio-in-video request patterns.
- The model supports reasoning with text and vision inputs. Thinking is enabled by default and the response separates `reasoning` from final `content`.
- Request controls include `chat_template_kwargs.enable_thinking=false`, `thinking_token_budget`, `media_io_kwargs` for video frame sampling, and `NIM_VIDEO_PRUNING_RATE` for Efficient Video Sampling.

### Hardware and deployment
- Current support matrix lists NIM for VLM release 1.7.0 for this model.
- Generic NIM support requires CUDA compute capability >= 9.0 and sufficient memory.
- BF16 profiles require 80 GB total GPU memory and run on 1 or 2 GPUs, with listed support including B300, B200 SXM, GB300, GB200 SXM, GH200 SXM, H200, H100, RTX PRO 6000 Blackwell Server Edition, and L40S with 2 GPUs.
- Current supported video codecs/formats include H264, H265, VP8, VP9, and FLV codecs with MP4, FLV, and 3GP containers. The API examples list GIF/JPG/JPEG/PNG images, MP4 video, and WAV/MP3/FLAC audio payloads.
- Release notes call out a current limitation where requests with videos larger than 1 GB may fail with a `NanoNemotronVLProcessor` error.

### Model context
NVIDIA's launch and technical blogs describe Nemotron 3 Nano Omni as a 30B-A3B hybrid mixture-of-experts model with Conv3D video processing, Efficient Video Sampling, and a long-context omnimodal design. The model is part of the broader [[Nemotron]] 3 family and is intended to work with other Nemotron reasoning models, proprietary planners, [[NVIDIA-Agent-Intelligence-Toolkit]], [[NVIDIA-NemoClaw]], and [[NVIDIA-OpenShell]] agent runtimes.

Use this page for NVIDIA Nemotron 3 Nano Omni itself. Use [[NIM-for-Vision-Language-Models]] for the broader VLM NIM family, [[Nemotron]] for the whole Nemotron model family, [[Nemotron-Parse]] for the document-parsing VLM, and [[NIM-for-Image-OCR]] or [[NIM-for-Object-Detection]] for the NeMo Retriever extraction microservices.

## Connections
- [[Nemotron]] - parent NVIDIA model family for agentic, safety, retrieval, speech, and multimodal models.
- [[NIM-for-Vision-Language-Models]] - current self-hosted NIM documentation surface for this model.
- [[NVIDIA-NIM]] - production inference microservice layer for deploying the model.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - agent workflow toolkit adjacent to Nemotron-powered systems.
- [[NVIDIA-NemoClaw]] and [[NVIDIA-OpenShell]] - local/sandboxed agent runtime context referenced by current NVIDIA agent material.
- [[NVIDIA-NeMo]], [[NeMo-Data-Designer]], [[NeMo-AutoModel]], [[NeMo-RL]], and [[NeMo-Megatron-Bridge]] - training, data, fine-tuning, and post-training ecosystem around Nemotron models.
- [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], and [[Nemotron-Parse]] - adjacent document-understanding and visual-extraction capabilities.
- [[NIM-for-Cosmos-Reason]] - adjacent VLM NIM family for image/video/text reasoning.
- [[NVIDIA-AI-Blueprints]], [[NVIDIA-AI-Q-Blueprint]], and [[NVIDIA-Video-Search-and-Summarization-Blueprint]] - application workflows that can use multimodal model endpoints.
- [[TensorRT-LLM]], [[vLLM]], and [[NVIDIA-Dynamo]] - inference engines and serving infrastructure connected to current Nemotron deployment material.
- [[NVIDIA-DGX-Spark]] and [[NVIDIA-DGX-Station]] - local NVIDIA systems positioned for model and agent development.

## Source Excerpts
- "initial release of NVIDIA Nemotron 3 Nano Omni"
- "accepts images, videos, and audio as input"
- "30B-A3B hybrid MoE"

## Resources
- [Nemotron 3 Nano Omni NIM API](https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html)
- [NIM for VLMs Support Matrix](https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html)
- [NIM for VLMs Release Notes](https://docs.nvidia.com/nim/vision-language-models/latest/release-notes.html)
- [Nemotron 3 Nano Omni on build.nvidia.com](https://build.nvidia.com/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning)
- [NVIDIA launch blog](https://blogs.nvidia.com/blog/nemotron-3-nano-omni-multimodal-ai-agents/)
- [NVIDIA technical blog](https://developer.nvidia.com/blog/nvidia-nemotron-3-nano-omni-powers-multimodal-agent-reasoning-in-a-single-efficient-open-model)
