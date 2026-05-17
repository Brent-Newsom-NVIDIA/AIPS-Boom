# Parakeet ASR

**Type:** Model
**Tags:** NVIDIA, ASR, Speech Recognition, NeMo, CTC, RNN-T, Audio AI
**Related:** [[NVIDIA-NeMo]], [[NVIDIA-Riva]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-Canary]], [[TensorRT]], [[NVIDIA-NIM]]
**Sources:** NVIDIA official documentation, https://docs.nvidia.com/nim/speech/latest/asr/index.html
**Last Updated:** 2026-04-29

## Summary
Parakeet is NVIDIA's family of state-of-the-art automatic speech recognition (ASR) models developed in collaboration with Apple, built on the NeMo framework. The Parakeet models achieve top-tier word error rates (WER) on standard English ASR benchmarks and are optimized for real-time and batch transcription workloads. They use CTC and RNN-T decoding architectures built on the FastConformer encoder, and are available as open-weight models on Hugging Face.

## Detail

### Purpose
High-accuracy, low-latency automatic speech recognition is a critical building block for voice assistants, meeting transcription, call center analytics, medical dictation, and accessibility tools. Parakeet addresses the need for a production-quality open-weight English ASR model that outperforms prior state-of-the-art systems while remaining efficient enough for real-time deployment.

### Key Features
- FastConformer-based encoder: efficient hybrid CNN-Transformer architecture for long-context audio
- Multiple decoding modes: CTC (Parakeet-CTC), RNN-T (Parakeet-RNNT), and TDT (Token-and-Duration Transducer)
- Model sizes: 0.6B (Parakeet-CTC-0.6B), 1.1B (Parakeet-TDT-1.1B), and Parakeet-RNNT-1.1B
- Word-level timestamps: accurate start/end times for each recognized word
- Best-in-class WER on LibriSpeech, MLS, VoxPopuli, Earnings21, and CHIME-6 benchmarks
- Trained on 64,000+ hours of English speech data
- Support for long-form audio transcription (hours-long audio with chunking)
- Open-weight release on Hugging Face (nvidia/parakeet-*)

### Use Cases
- Real-time meeting transcription and captioning
- Call center and contact center analytics
- Voice assistant backend for English-language commands
- Medical dictation and clinical documentation
- Subtitle and caption generation for video content
- Accessibility tools for the hearing-impaired
- Podcast and audio search indexing

### Hardware Requirements / Compatibility
- Parakeet-CTC-0.6B: single GPU (T4, A10, A100) or CPU for small batches
- Parakeet-1.1B: single A10G / A100 / H100 recommended for real-time workloads
- TensorRT-optimized via NVIDIA Riva for production deployment
- Runs on NVIDIA Jetson AGX Orin for edge deployment

### Language Bindings / APIs
- Python (NVIDIA NeMo: nemo.collections.asr)
- NVIDIA Riva SDK (gRPC streaming API)
- Hugging Face Transformers (AutoModelForCTC, pipeline)
- [[NVIDIA-ASR-NIM]] microservices for containerized deployment through the current Speech NIM docs

## Connections
- [[NVIDIA-NeMo]] — Parakeet is trained, fine-tuned, and served via the NeMo ASR collection
- [[NVIDIA-Riva]] — Riva provides production streaming ASR deployment for Parakeet models
- [[NVIDIA-Speech-NIM-Microservices]] and [[NVIDIA-ASR-NIM]] - current docs surface listing Parakeet CTC, TDT, and RNNT ASR NIM options.
- [[NVIDIA-Canary]] — Canary is NVIDIA's multilingual complement to Parakeet's English-focused ASR
- [[TensorRT]] — Parakeet ASR NIM deployment uses TensorRT/Triton inference acceleration.
- [[NVIDIA-NIM]] — Available as NIM containers for one-click ASR deployment

## Resources
- [Parakeet on Hugging Face](https://huggingface.co/nvidia/parakeet-tdt-1.1b)
- [NeMo ASR Documentation](https://docs.nvidia.com/nemo-framework/user-guide/latest/nemotoolkit/asr/)
- [Parakeet Blog Post](https://developer.nvidia.com/blog/parakeet-best-in-class-speech-recognition-model/)
- [NVIDIA Riva](https://developer.nvidia.com/riva)
