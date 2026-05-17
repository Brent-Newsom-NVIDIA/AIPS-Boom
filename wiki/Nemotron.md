# Nemotron

**Type:** Model
**Tags:** NVIDIA, Nemotron, LLM, multimodal, speech, OCR, content safety, agentic AI, NIM, training recipes
**Related:** [[NVIDIA-NeMo]], [[Nemotron-Training-Recipes]], [[NeMo-AutoModel]], [[NeMo-RL]], [[NeMo-Megatron-Bridge]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[NIM-for-Vision-Language-Models]], [[Nemotron-3-Nano]], [[Nemotron-3-Super]], [[Nemotron-3-Ultra]], [[Nemotron-3-Nano-Omni]], [[Nemotron-Parse]], [[NeMo-Retriever-Embedding-NIM]], [[Llama-Nemotron-Embed-1B-v2]], [[Llama-Nemotron-Rerank-1B-v2]], [[Llama-Nemotron-Embed-VL-1B-v2]], [[Llama-Nemotron-Rerank-VL-1B-v2]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[Nemotron-ASR-Streaming]], [[Nemotron-3-VoiceChat]], [[NVIDIA-TTS-NIM]], [[NVIDIA-NMT-NIM]], [[NVIDIA-NemoGuard-NIMs]], [[Nemotron-3-Content-Safety]], [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]], [[NVIDIA-AI-Blueprints]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-Data-Flywheel-Blueprint]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NeMo-Retriever]], [[NeMo-Guardrails]], [[TensorRT-LLM]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-NemoClaw]], [[NVIDIA-Enterprise-Reference-Architectures]], [[Red-Hat-AI-Factory-with-NVIDIA]]
**Sources:** https://build.nvidia.com/models, https://build.nvidia.com/blueprints, https://build.nvidia.com/nvidia/nemotron-3-super-120b-a12b/modelcard, https://build.nvidia.com/nvidia/nemotron-3-nano-30b-a3b/modelcard, https://build.nvidia.com/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning, https://build.nvidia.com/nvidia/nemotron-3-content-safety/modelcard, https://build.nvidia.com/nvidia/nemotron-asr-streaming/modelcard, https://build.nvidia.com/nvidia/nemotron-voicechat/modelcard, https://docs.nvidia.com/nemotron/nightly/usage-cookbook/Nemotron-3-Ultra-Base/README.html, https://developer.nvidia.com/nemotron, https://developer.nvidia.com/blog/introducing-nemotron-3-super-an-open-hybrid-mamba-transformer-moe-for-agentic-reasoning/, https://blogs.nvidia.com/blog/nemotron-3-nano-omni-multimodal-ai-agents/, https://developer.nvidia.com/blog/nvidia-nemotron-3-nano-omni-powers-multimodal-agent-reasoning-in-a-single-efficient-open-model, https://developer.nvidia.com/blog/building-nvidia-nemotron-3-agents-for-reasoning-multimodal-rag-voice-and-safety/, https://nvidianews.nvidia.com/news/nvidia-debuts-nemotron-3-family-of-open-models, https://docs.nvidia.com/nemotron/latest/index.html, https://docs.nvidia.com/nemotron/latest/nemotron/nano3/README.html, https://docs.nvidia.com/nemotron/latest/nemotron/super3/README.html, https://docs.nvidia.com/nemotron/latest/usage-cookbook/Nemotron-3-Super/OpenScaffoldingResources/README.html, https://docs.nvidia.com/nemotron/latest/use-case-examples/Simple%20Nemotron-3-Nano%20Usage%20Example/README.html, https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3.html, https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3-super.html, https://docs.nvidia.com/nemo/microservices/latest/customizer/models/index.html, https://docs.nvidia.com/nemo/microservices/latest/fine-tune/models/llama-nemotron.html, https://docs.nvidia.com/nemo/microservices/latest/customizer/models/embedding.html, https://docs.nvidia.com/nemo/automodel/latest/model-coverage/llm.html, https://docs.nvidia.com/nemo/automodel/latest/model-coverage/llm/nvidia/nemotron.html, https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html, https://docs.nvidia.com/nim/vision-language-models/latest/release-notes.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-parse/api.html, https://huggingface.co/nvidia/NVIDIA-Nemotron-Parse-v1.2, https://docs.nvidia.com/nim/large-language-models/latest/day-0/get-started-nemotron-content-safety-reasoning-4b.html, https://docs.nvidia.com/nim/speech/latest/index.html, https://docs.nvidia.com/nim/llama-3-1-nemotron-safety-guard-8b/latest/index.html, https://docs.nvidia.com/nemo/automodel/latest/index.html, https://docs.nvidia.com/nemo/rl/latest/about/model-support.html, https://docs.nvidia.com/nemo/megatron-bridge/latest/index.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
Nemotron is NVIDIA's family of open and hosted AI models for agentic reasoning, instruction following, safety, retrieval, speech, OCR, and multimodal workflows. Current NVIDIA docs place Nemotron across [[NeMo-Customizer]] tested model catalogs, [[NeMo-AutoModel]] model coverage, [[NVIDIA-NIM]] serving surfaces, speech NIMs, VLM NIMs, and build.nvidia.com model cards.

## Detail

### Purpose
Nemotron gives NVIDIA a model family that can be trained and customized through [[NVIDIA-NeMo]], deployed through [[NVIDIA-NIM]], optimized on NVIDIA GPUs, and used as the reasoning/model layer for enterprise agents and AI applications.

### Current model directions
- **Agentic LLMs:** [[Nemotron-3-Nano]] 30B-A3B, [[Nemotron-3-Super]] 120B-A12B, [[Nemotron-3-Ultra]] base/forthcoming release, Llama 3.3 Nemotron Super 49B v1/v1.5, and Llama 3.1 Nemotron Nano 8B v1 are current NVIDIA/Nemotron variants surfaced across model cards, NeMo docs, and NeMo Customizer docs.
- **Customizer catalog:** current [[NeMo-Customizer]] docs list tested support for Llama 3.1 Nemotron Nano 8B v1, NVIDIA Nemotron Nano 9B v2, NVIDIA Nemotron 3 Nano 30B-A3B BF16, NVIDIA Nemotron 3 Super 120B-A12B BF16, and Llama Nemotron Embedding 1B v2.
- **Training/post-training support:** current [[NeMo-AutoModel]], [[NeMo-RL]], and [[NeMo-Megatron-Bridge]] docs list Nemotron/Minitron, Llama-Nemotron, Nemotron Nano, Nemotron H, and Nemotron 3 model support in NVIDIA training and post-training paths.
- **Training recipes:** [[Nemotron-Training-Recipes]] covers NVIDIA's public recipe/cookbook layer for Nano3 and Super3 pretraining, SFT, RL, evaluation, artifact lineage, `nemo_runspec`, and [[NeMo-Run]] execution.
- **Omnimodal reasoning:** [[Nemotron-3-Nano-Omni]] is the current Nemotron 3 VLM/NIM model for text, image, video, audio, document, chart, and GUI understanding in agentic workflows.
- **Embedding and retrieval:** [[Llama-Nemotron-Embed-1B-v2]] is a current NeMo Customizer embedding model with NIM deployment, long-document support, configurable embedding dimensions, and [[NeMo-Retriever]] relevance; [[Llama-Nemotron-Rerank-1B-v2]] is the companion text reranker.
- **Content safety:** [[Nemotron-3-Content-Safety]] is a multilingual, multimodal safety model for classifying unsafe prompts/images and responses, tied to [[NeMo-Guardrails]] use cases.
- **NemoGuard safety NIMs:** [[Nemotron-3-Content-Safety]], [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], and [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] connect Nemotron safety datasets and models to deployable NIM guardrails.
- **Speech and voice:** current [[NVIDIA-Speech-NIM-Microservices]] docs frame ASR, TTS, and NMT NIMs around Nemotron speech model families, including [[Nemotron-ASR-Streaming]], while [[Nemotron-3-VoiceChat]] is NVIDIA's full-duplex speech-to-speech model for realtime voice agents.
- **Document AI:** [[Nemotron-Parse]] is the current Nemotron document parser for extracting text, tables, layout classes, and bounding boxes from page images; adjacent [[NIM-for-Image-OCR]] and [[NIM-for-Object-Detection]] pages cover NeMo Retriever extraction microservices.
- **Retrieval:** Llama Nemotron reranking and embedding models, including [[Llama-Nemotron-Embed-1B-v2]], [[Llama-Nemotron-Rerank-1B-v2]], [[Llama-Nemotron-Embed-VL-1B-v2]], and [[Llama-Nemotron-Rerank-VL-1B-v2]], connect Nemotron to [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], and enterprise RAG workflows.
- **Blueprint usage:** current [[NVIDIA-AI-Blueprints]] use Nemotron-related models in agent, voice, retrieval, and data-flywheel workflows, including [[NVIDIA-AI-Q-Blueprint]] and [[NVIDIA-Data-Flywheel-Blueprint]].
- **Retail and embodied-agent proof points:** [[PUMA-LiveX-AI-Store-Concierge]] names Nemotron as part of PUMA's LiveX AI in-store concierge, while [[LiveX-AI-GTC-Toy-Jensen-Holographic-Agent]] names Nemotron as part of LiveX.ai's Toy Jensen holographic assistant at NVIDIA GTC.
- **Enterprise RA sizing:** the AI-Q Enterprise RA paper uses a Nemotron reasoning model, specifically Llama 3.3 Nemotron Super 49B v1.5, as a key scaling lever for research-agent latency.
- **Red Hat AI Factory:** [[Red-Hat-AI-Factory-with-NVIDIA]] lists Nemotron as a domain-specific NVIDIA model family for agentic AI workloads on the OpenShift AI factory stack.

### NVIDIA context
Nemotron is central to NVIDIA's agentic AI stack: [[NVIDIA-NIM]] exposes model endpoints, [[NVIDIA-Agent-Intelligence-Toolkit]] orchestrates workflows, [[NeMo-Retriever]] connects proprietary data, [[NeMo-Guardrails]] applies policy/safety, and [[NVIDIA-DGX-Cloud]] or self-hosted GPUs provide deployment infrastructure.

## Connections
- [[NVIDIA-NeMo]] - lifecycle suite for training, customizing, evaluating, and deploying Nemotron-related systems.
- [[Nemotron-Training-Recipes]] - public NVIDIA recipe stack for reproducible Nano3 and Super3 training, post-training, and execution.
- [[NeMo-AutoModel]], [[NeMo-RL]], and [[NeMo-Megatron-Bridge]] - current NeMo framework tooling for Nemotron-compatible training, post-training, and Megatron/Hugging Face conversion paths.
- [[NeMo-Customizer]] and [[NeMo-Evaluator]] - managed adaptation and measurement services for Nemotron-related systems.
- [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], and [[NIM-for-Vision-Language-Models]] - hosted and self-hosted endpoint paths for Nemotron text and multimodal models.
- [[Nemotron-3-Nano]], [[Nemotron-3-Super]], and [[Nemotron-3-Ultra]] - text reasoning model sizes in the current Nemotron 3 family.
- [[Nemotron-3-Nano-Omni]] - current omnimodal Nemotron model/NIM for text, image, video, audio, document, chart, and GUI reasoning.
- [[Nemotron-Parse]] - current document-parsing Nemotron VLM/NIM for text/table extraction and spatial grounding.
- [[NeMo-Retriever-Embedding-NIM]] - deployment surface adjacent to Llama Nemotron embedding models.
- [[NVIDIA-Speech-NIM-Microservices]] - current docs surface for Nemotron ASR, TTS, and NMT model-family microservices.
- [[NVIDIA-ASR-NIM]], [[Nemotron-ASR-Streaming]], [[NVIDIA-TTS-NIM]], and [[NVIDIA-NMT-NIM]] - deployable speech NIMs and model-specific speech pages connected to Nemotron speech model families.
- [[Nemotron-3-VoiceChat]] - full-duplex speech-to-speech Nemotron model that unifies speech understanding and speech generation.
- [[NVIDIA-AI-Blueprints]] - build.nvidia.com surfaces Nemotron-backed application blueprints without requiring one wiki page per build listing.
- [[PUMA-LiveX-AI-Store-Concierge]] and [[LiveX-AI-GTC-Toy-Jensen-Holographic-Agent]] - retail and event deployment proof points where LiveX AI uses Nemotron with NVIDIA NIM/NeMo.
- [[NVIDIA-AI-Q-Blueprint]] - AI-Q's current blueprint card lists Nemotron model options for enterprise research agents.
- [[NVIDIA-Enterprise-Reference-Architectures]] - AI-Q Enterprise RA paper shows Nemotron as part of a sized enterprise research-agent deployment.
- [[NVIDIA-Data-Flywheel-Blueprint]] - data flywheel workflows use open/NIM model choices in the Nemotron ecosystem for optimization experiments.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - workflow layer for building agents on top of Nemotron and other models.
- [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], [[Llama-Nemotron-Embed-1B-v2]], [[Llama-Nemotron-Rerank-1B-v2]], [[Llama-Nemotron-Embed-VL-1B-v2]], and [[Llama-Nemotron-Rerank-VL-1B-v2]] - retrieval layer and model-specific embedding/reranking pages related to Nemotron.
- [[NeMo-Guardrails]] - safety and policy workflows can use Nemotron content-safety models.
- [[NVIDIA-NemoGuard-NIMs]] - guardrail NIM family for safety, topic control, and jailbreak detection.
- [[Nemotron-3-Content-Safety]] - multimodal, multilingual safety model for prompts, images, and responses.
- [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]] - Day 0 Nemotron safety classifier with optional reasoning traces.
- [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] and [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] - deployable content-safety NIMs in the Nemotron/NemoGuard lineage.
- [[TensorRT-LLM]] - optimized inference backend for large language models on NVIDIA GPUs.
- [[NVIDIA-NemoClaw]] and [[NVIDIA-OpenShell]] - assistant and sandbox stack that can use open NVIDIA models such as Nemotron, including current Nano Omni agent examples.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide that calls out Nemotron for agentic AI use cases.

## Source Excerpts
- build.nvidia.com lists recent NVIDIA-published Nemotron models across reasoning, safety, speech, OCR, retrieval, and multimodal categories.
- Current NeMo Customizer docs list multiple Nemotron and Llama Nemotron models in the tested model catalog, including reasoning LLMs and a Llama Nemotron embedding model.
- Current Nemotron and Megatron Bridge docs provide dedicated coverage for Nemotron 3 Nano and Nemotron 3 Super.
- Current NVIDIA Nemotron nightly docs describe Nemotron 3 Ultra Base as a 550B-total-parameter, 55B-active-per-token base checkpoint expected to receive a full release in 1H 2026.
- Current NeMo AutoModel docs list Nemotron/Minitron and Nemotron H model coverage for Hugging Face-compatible training and fine-tuning.
- Current VLM NIM release notes introduce NVIDIA Nemotron 3 Nano Omni in release 1.7.0.
- Current VLM NIM release notes list Nemotron-Parse-v1.2 as the updated Nemotron Parse release with a changed API.
- NVIDIA's Nemotron 3 Content Safety model card identifies a multilingual multimodal safety model for prompts, images, and responses.
- NVIDIA's Nemotron ASR Streaming card describes a 600M-parameter English streaming ASR model.
- NVIDIA's Nemotron 3 VoiceChat model card describes a 12B full-duplex speech-to-speech model for realtime conversational AI.

## Resources
- [Build NVIDIA Models](https://build.nvidia.com/models)
- [Nemotron Developer Page](https://developer.nvidia.com/nemotron)
- [Nemotron Training Recipes](https://docs.nvidia.com/nemotron/latest/index.html)
- [Nemotron 3 Super Model Card](https://build.nvidia.com/nvidia/nemotron-3-super-120b-a12b/modelcard)
- [Nemotron 3 Nano Model Card](https://build.nvidia.com/nvidia/nemotron-3-nano-30b-a3b/modelcard)
- [Nemotron 3 Ultra Base Docs](https://docs.nvidia.com/nemotron/nightly/usage-cookbook/Nemotron-3-Ultra-Base/README.html)
- [Nemotron 3 Super in Megatron Bridge](https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3-super.html)
- [Nemotron 3 Nano in Megatron Bridge](https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3.html)
- [NeMo Customizer Model Catalog](https://docs.nvidia.com/nemo/microservices/latest/customizer/models/index.html)
- [NeMo Customizer Llama Nemotron Models](https://docs.nvidia.com/nemo/microservices/latest/fine-tune/models/llama-nemotron.html)
- [NeMo Customizer Llama Nemotron Embedding](https://docs.nvidia.com/nemo/microservices/latest/customizer/models/embedding.html)
- [NeMo AutoModel LLM Coverage](https://docs.nvidia.com/nemo/automodel/latest/model-coverage/llm.html)
- [NIM for VLMs Support Matrix](https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html)
- [NIM for VLMs Release Notes](https://docs.nvidia.com/nim/vision-language-models/latest/release-notes.html)
- [Nemotron 3 Nano Omni NIM API](https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html)
- [Nemotron Parse NIM API](https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-parse/api.html)
- [NVIDIA Nemotron Parse v1.2 model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-Parse-v1.2)
- [Nemotron Content Safety Reasoning 4B Experimental](https://docs.nvidia.com/nim/large-language-models/latest/day-0/get-started-nemotron-content-safety-reasoning-4b.html)
- [Nemotron 3 Content Safety](https://build.nvidia.com/nvidia/nemotron-3-content-safety/modelcard)
- [Nemotron ASR Streaming](https://build.nvidia.com/nvidia/nemotron-asr-streaming/modelcard)
- [Nemotron 3 VoiceChat](https://build.nvidia.com/nvidia/nemotron-voicechat/modelcard)
