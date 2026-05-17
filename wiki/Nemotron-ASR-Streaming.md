# Nemotron ASR Streaming

**Type:** NVIDIA model
**Tags:** NVIDIA, Nemotron, ASR, automatic speech recognition, speech-to-text, streaming ASR, FastConformer, RNNT, Riva, Speech NIM, Triton, Build NVIDIA
**Related:** [[Nemotron]], [[NVIDIA-ASR-NIM]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-Riva]], [[Parakeet-ASR]], [[NVIDIA-Canary]], [[NVIDIA-NIM]], [[NVIDIA-NeMo]], [[NVIDIA-Tokkio-Digital-Human-Blueprint]], [[NVIDIA-ACE]], [[NIM-for-Maxine-Studio-Voice]], [[NVIDIA-Background-Noise-Removal-NIM]], [[Triton-Inference-Server]], [[TensorRT]]
**Sources:** https://build.nvidia.com/nvidia/nemotron-asr-streaming/modelcard, https://build.nvidia.com/nvidia/nemotron-asr-streaming, https://huggingface.co/nvidia/nemotron-speech-streaming-en-0.6b
**Last Updated:** 2026-04-29

## Summary
Nemotron ASR Streaming is an NVIDIA English streaming automatic speech recognition model for low-latency and high-throughput transcription. It uses a cache-aware FastConformer-RNNT architecture, has about 600M parameters, and is surfaced through Build NVIDIA, Speech NIM, Riva, and NeMo workflows.

## Detail
The Build NVIDIA model card identifies Nemotron 3 ASR, also called Nemotron-ASR-Streaming, as a streaming ASR model for English speech-to-text. It transcribes English alphabetic text with spaces and apostrophes and supports punctuation and capitalization in output.

Architecturally, the model is based on Cache-Aware FastConformer with 24 encoder layers and an RNNT decoder. The cache-aware streaming design reuses encoder self-attention and convolution-layer state across audio chunks, avoiding redundant overlap computation in traditional buffered streaming. NVIDIA's Hugging Face card also describes configurable chunk sizes, including 80 ms, 160 ms, 560 ms, and 1120 ms operating points.

The current Build card states that the model was developed from `nvidia/nemotron-speech-streaming-en-0.6b`, trained on ASRSet with roughly 250,000 hours of US English speech. The Hugging Face card notes a March 2026 updated checkpoint trained on larger corpora and points older January 2026 users to a separate branch rather than making that older checkpoint the canonical topic.

## Inputs and Outputs
- **Input:** mono-channel `.wav` audio.
- **Mode:** streaming ASR with cache-aware chunk processing, plus high-throughput batch-style workloads through the NIM/Riva path.
- **Output:** English text transcript with punctuation and capitalization support.
- **Operational fit:** voice assistants, live captions, conversational AI, call-center transcription, digital-human speech front ends, and media transcription.

## Deployment and Evaluation
The Build NVIDIA model card lists Riva 2.25.0 or higher as the runtime engine, Triton as the inference acceleration engine, and Linux/Linux for Tegra as supported operating systems. It lists NVIDIA Ampere, Blackwell, Jetson, Hopper, Lovelace, Turing, and Volta compatibility, with test hardware including Blackwell, A10, A100, A30, H100, L4, and L40.

NVIDIA reports training with human and synthetic labels and evaluation on dynamic public, internal, and customer datasets normalized to spoken forms with punctuation and capitalization. The Hugging Face card includes WER tables across OpenASR-style datasets such as AMI, Earnings22, GigaSpeech, LibriSpeech, SPGI Speech, TEDLIUM, and VoxPopuli, with multiple chunk-size settings.

## Connections
- [[NVIDIA-ASR-NIM]] - service-level ASR NIM page; this page covers the specific Nemotron streaming ASR model.
- [[NVIDIA-Speech-NIM-Microservices]] - parent Speech NIM surface for ASR, TTS, and NMT deployment.
- [[NVIDIA-Riva]] - Riva runtime and speech AI platform context for the model.
- [[Nemotron]] - broader NVIDIA model family context for speech, safety, retrieval, and reasoning models.
- [[Parakeet-ASR]] and [[NVIDIA-Canary]] - adjacent NVIDIA ASR/speech model families surfaced through ASR NIM.
- [[NVIDIA-NeMo]] - framework path for training, fine-tuning, and inference with ASR checkpoints.
- [[NVIDIA-Tokkio-Digital-Human-Blueprint]] and [[NVIDIA-ACE]] - real-time voice and digital-human workflows that need low-latency ASR.
- [[NIM-for-Maxine-Studio-Voice]] and [[NVIDIA-Background-Noise-Removal-NIM]] - audio enhancement services that can improve ASR input quality.
- [[Triton-Inference-Server]] and [[TensorRT]] - serving and acceleration stack adjacent to Speech NIM deployments.

## Resources
- [Build NVIDIA model card](https://build.nvidia.com/nvidia/nemotron-asr-streaming/modelcard)
- [Build NVIDIA endpoint page](https://build.nvidia.com/nvidia/nemotron-asr-streaming)
- [Hugging Face model page](https://huggingface.co/nvidia/nemotron-speech-streaming-en-0.6b)
