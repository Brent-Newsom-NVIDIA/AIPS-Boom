# NVIDIA ChatRTX

**Type:** Tool
**Tags:** NVIDIA, RTX, On-Device AI, RAG, LLM, Windows, Consumer GPU
**Related:** [[TensorRT-LLM]], [[NVIDIA-NIM]], [[Nemotron]], [[NVIDIA-AI-Workbench]], [[TensorRT]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-10

## Summary
NVIDIA ChatRTX is a free Windows application that enables users to run local large language models directly on their NVIDIA RTX GPU, with a built-in retrieval-augmented generation (RAG) engine that can answer questions grounded in the user's own documents and files. It runs entirely on-device with no data sent to the cloud, providing privacy-preserving AI chat with support for multiple open-source models including Mistral, Llama, and Gemma. ChatRTX is accelerated by TensorRT-LLM and requires an RTX 30-series GPU or newer.

## Detail

### Purpose
Consumer and prosumer users want private, low-latency AI assistants that can search and reason over their personal files (PDFs, Word documents, emails, notes) without sending data to cloud APIs. ChatRTX provides an easy-to-install, consumer-friendly RAG application that leverages the RTX GPU's Tensor Cores for fast local inference.

### Key Features
- Local-first: all processing on-device; no internet required after model download
- RAG over personal files: indexes PDFs, Word docs, text files, and websites
- Multiple model support: Mistral 7B, Llama 3, Gemma, Code Llama, and others
- TensorRT-LLM backend: INT4/INT8 quantized models for fast RTX inference
- CLIP-based multimodal search: find images by natural language description
- Voice input support via Whisper ASR
- Windows 11 native app with simple GUI
- Model updates delivered via NVIDIA App catalog

### Use Cases
- Private document Q&A (no data leaves the PC)
- Summarizing research papers, meeting notes, and reports
- Code assistance with local code files as context
- Image search and organization using natural language
- On-device customer demos for NVIDIA RTX AI capabilities
- Developer prototyping of RAG applications on local hardware

### Hardware Requirements / Compatibility
- Minimum: NVIDIA GeForce RTX 3080 (10GB VRAM) or RTX A3000
- Recommended: RTX 4080 / 4090 / 5090 (16GB+ VRAM) for larger models
- OS: Windows 11 only
- RAM: 16GB minimum, 32GB recommended
- Storage: 50–100GB for model files (varies by model)

### Language Bindings / APIs
- GUI application (no coding required)
- Built on TensorRT-LLM and llama.cpp backends
- Developer-accessible Python API for customization via NVIDIA AI Workbench

## Connections
- [[TensorRT-LLM]] — ChatRTX inference engine uses TensorRT-LLM for quantized model execution
- [[NVIDIA-NIM]] — ChatRTX is the consumer counterpart to NIM's enterprise microservices
- [[Nemotron]] — Nemotron models available as ChatRTX backends
- [[NVIDIA-AI-Workbench]] — AI Workbench provides the developer extension path from ChatRTX to production

## Resources
- [ChatRTX Official Page](https://www.nvidia.com/en-us/ai-on-rtx/chatrtx/)
- [ChatRTX Download](https://www.nvidia.com/en-us/ai-on-rtx/chatrtx/)
- [TensorRT-LLM](https://developer.nvidia.com/tensorrt-llm)
