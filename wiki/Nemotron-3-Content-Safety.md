# Nemotron 3 Content Safety

**Type:** NVIDIA model
**Tags:** NVIDIA, Nemotron, content safety, multimodal safety, multilingual safety, NemoGuard, NeMo Guardrails, VLM safety, NIM, vLLM, Gemma, Build NVIDIA
**Related:** [[Nemotron]], [[NVIDIA-NemoGuard-NIMs]], [[NeMo-Guardrails]], [[NIM-for-Multimodal-Safety]], [[NIM-for-Vision-Language-Models]], [[NVIDIA-NIM]], [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]], [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]], [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]], [[NVIDIA-NemoGuard-JailbreakDetect-NIM]], [[NVIDIA-AI-Enterprise]], [[Triton-Inference-Server]]
**Sources:** https://build.nvidia.com/nvidia/nemotron-3-content-safety/modelcard, https://build.nvidia.com/nvidia/nemotron-3-content-safety, https://huggingface.co/nvidia/Nemotron-3-Content-Safety, https://huggingface.co/blog/nvidia/nemotron-3-content-safety
**Last Updated:** 2026-04-29

## Summary
Nemotron 3 Content Safety is an NVIDIA multimodal, multilingual content-safety model for moderating prompts, optional images, and optional model responses. It extends NVIDIA's text-oriented content-safety lineage into VLM and agent workflows by returning user-safety, response-safety, and optional safety-category judgments.

## Detail
The Build NVIDIA model card describes Nemotron 3 Content Safety as a small language model based on Google's Gemma-3-4B-it and fine-tuned by NVIDIA on multimodal and multilingual safety datasets. It is designed to moderate both inputs and outputs for LLMs and VLMs, including prompt-only, prompt+image, and prompt+image+response cases.

The model uses the safety taxonomy from NVIDIA's Nemotron Content Safety Dataset V2 lineage and can return coarse safe/unsafe judgments or category-rich outputs. NVIDIA positions it as the multimodal counterpart to earlier text-only content-safety models such as [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] and [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]].

Architecturally, the model card identifies Gemma-3-4B-it as the base model, a decoder-only transformer architecture, SigLIP vision encoding for square images, about 4B parameters, and LoRA fine-tuning with merged weights. NVIDIA's Hugging Face model card lists model version V1.1 and describes support for 12 languages, while the Build card lists a 128K context length and named support for English, Spanish, Mandarin, German, French, Hindi, Japanese, Arabic, and Thai.

## Inputs and Outputs
- **Inputs:** text prompts, optional images, and optional assistant responses.
- **Image input:** image URL or base64-encoded image URL.
- **Use cases:** multimodal input moderation, response moderation, VLM safety checks, agent-loop safety, and batch review of text/image content.
- **Outputs:** text labels containing `User Safety`, optional `Response Safety`, and optional `Safety Categories`.
- **Safety categories:** include violence, sexual content, criminal planning, illegal weapons, controlled substances, self-harm, identity hate, privacy/PII, harassment, threats, malware, fraud/deception, political misinformation/conspiracy, and other policy categories.

## Deployment and Evaluation
The Build NVIDIA model card lists vLLM as the runtime engine, Linux as the operating system, and Ada Lovelace, Blackwell, and Hopper hardware compatibility, with L40S test hardware. The Hugging Face model card also shows Transformers and vLLM usage paths and lists H100, A100, and RTX PRO 6000 Blackwell Server Edition test hardware.

NVIDIA reports training, testing, and evaluation on multilingual text and image datasets, including NVIDIA ThreatOps data, Nemotron Safety Guard lineage data, Nemotron VLM Dataset V2, and synthetic generation. Evaluation covers external multimodal and multilingual safety benchmarks such as RTVLM, VLGuard, MM-SafetyBench, XSTEST, FigStep, Aegis 2, WildGuard, PolyGuard, RTP-LX, XSafety, MultiJail, and Aya Redteaming, plus false-positive checks on safe multimodal benchmarks including MMMU, DocVQA, and AI2D.

## Connections
- [[Nemotron]] - current Nemotron family includes safety, guardrail, retrieval, speech, and multimodal models.
- [[NVIDIA-NemoGuard-NIMs]] and [[NeMo-Guardrails]] - runtime guardrail surfaces where content-safety models enforce policy.
- [[NIM-for-Multimodal-Safety]] - multimodal moderation NIM context for visual and generated-content safety checks.
- [[NIM-for-Vision-Language-Models]] - VLM applications can use this model as a safety layer around multimodal prompts and responses.
- [[NVIDIA-NIM]] - Build NVIDIA/API surface for hosted model access and NIM-style deployment.
- [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]] - reasoning-oriented sibling for custom policy and dialogue moderation.
- [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] and [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] - earlier text-focused content-safety guard models.
- [[NVIDIA-NemoGuard-JailbreakDetect-NIM]] - adjacent prompt-injection and jailbreak detection model.
- [[NVIDIA-AI-Enterprise]] - supported deployment and governance context for production safety systems.

## Resources
- [Build NVIDIA model card](https://build.nvidia.com/nvidia/nemotron-3-content-safety/modelcard)
- [Build NVIDIA endpoint page](https://build.nvidia.com/nvidia/nemotron-3-content-safety)
- [Hugging Face model page](https://huggingface.co/nvidia/Nemotron-3-Content-Safety)
- [NVIDIA Hugging Face article](https://huggingface.co/blog/nvidia/nemotron-3-content-safety)
