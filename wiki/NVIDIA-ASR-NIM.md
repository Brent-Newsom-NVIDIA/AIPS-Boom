# NVIDIA ASR NIM

**Type:** Microservice
**Tags:** NVIDIA, NIM, ASR, automatic speech recognition, speech-to-text, Parakeet, Canary, Whisper, Nemotron, Riva
**Related:** [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-NIM]], [[NVIDIA-Riva]], [[Nemotron-ASR-Streaming]], [[Nemotron-3-VoiceChat]], [[Parakeet-ASR]], [[NVIDIA-Canary]], [[Nemotron]], [[NVIDIA-NeMo]], [[NVIDIA-TTS-NIM]], [[NVIDIA-NMT-NIM]], [[NVIDIA-Background-Noise-Removal-NIM]], [[TensorRT]], [[Triton-Inference-Server]]
**Sources:** https://docs.nvidia.com/nim/speech/latest/asr/index.html, https://docs.nvidia.com/nim/speech/latest/about/how-it-works.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA ASR NIM is the Speech NIM microservice for automatic speech recognition. Current NVIDIA docs describe it as converting spoken audio into text, packaging pre-trained NeMo models with TensorRT and Triton in self-contained containers that handle model download, optimization, and serving.

## Detail

### Purpose
ASR NIM gives developers a deployable speech-to-text endpoint for voice assistants, live captions, contact center transcription, media indexing, and multilingual speech pipelines without directly serving each ASR model.

### Current scope
- Streaming mode returns partial transcripts as audio arrives.
- Offline mode processes complete audio and returns a full transcript.
- Current docs list Parakeet CTC, Parakeet TDT, Parakeet RNNT Multilingual, [[Nemotron-ASR-Streaming]], Conformer CTC, Whisper Large v3, and Canary 1B options.
- Model selection guidance covers language coverage, inference mode, timestamps, streaming latency, and translation behavior.
- Customization docs cover word boosting, custom vocabularies, fine-tuned NeMo checkpoints, and pipeline configuration.

### NVIDIA context
ASR NIM is where [[Parakeet-ASR]], [[NVIDIA-Canary]], and Nemotron ASR deployment meet [[NVIDIA-NIM]]. It is also the first stage in common speech pipelines that chain ASR, [[NVIDIA-NMT-NIM]], and [[NVIDIA-TTS-NIM]] services.

## Connections
- [[NVIDIA-Speech-NIM-Microservices]] - parent docs surface for Speech NIMs.
- [[NVIDIA-Riva]] - broader NVIDIA speech AI platform and historical ASR runtime context.
- [[Nemotron-ASR-Streaming]] - model-specific page for NVIDIA's 600M-parameter English streaming ASR model.
- [[Parakeet-ASR]] - current ASR NIM docs list multiple Parakeet model families.
- [[NVIDIA-Canary]] - current ASR NIM docs list Canary 1B for transcription and bidirectional translation.
- [[Nemotron]] - broader model-family context for Nemotron speech models.
- [[NVIDIA-Background-Noise-Removal-NIM]] - audio cleanup can improve speech intelligibility and ASR accuracy in noisy environments.
- [[NVIDIA-TTS-NIM]] and [[NVIDIA-NMT-NIM]] - downstream services for voice response and translation pipelines.
- [[Nemotron-3-VoiceChat]] - unified full-duplex speech-to-speech model that avoids a separate ASR-to-LLM-to-TTS cascade for some voice-agent workflows.
- [[TensorRT]] and [[Triton-Inference-Server]] - acceleration and serving layers packaged inside the NIM.

## Source Excerpts
- NVIDIA docs say ASR NIM converts spoken audio into text and packages pre-trained NeMo models with TensorRT and Triton.
- The docs list both streaming and offline inference modes and multiple ASR model families.

## Resources
- [About NVIDIA ASR NIM](https://docs.nvidia.com/nim/speech/latest/asr/index.html)
- [How Speech NIM Microservices Work](https://docs.nvidia.com/nim/speech/latest/about/how-it-works.html)
