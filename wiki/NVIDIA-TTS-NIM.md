# NVIDIA TTS NIM

**Type:** Microservice
**Tags:** NVIDIA, NIM, TTS, text-to-speech, speech synthesis, Magpie, voice cloning, SSML, Riva
**Related:** [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-NIM]], [[NVIDIA-Riva]], [[NVIDIA-ASR-NIM]], [[Nemotron-3-VoiceChat]], [[NVIDIA-NMT-NIM]], [[Nemotron]], [[NVIDIA-NeMo]], [[NVIDIA-ACE]], [[NIM-for-Audio2Face-3D]], [[NIM-for-Maxine-Audio2Face-2D]], [[NVIDIA-Maxine]], [[TensorRT]], [[Triton-Inference-Server]]
**Sources:** https://docs.nvidia.com/nim/speech/latest/tts/index.html, https://docs.nvidia.com/nim/speech/latest/about/how-it-works.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA TTS NIM is the Speech NIM microservice for synthesizing natural-sounding speech from text. Current NVIDIA docs describe it as packaging pre-trained NeMo models with the full NVIDIA inference stack into containers that handle model download, optimization, and serving.

## Detail

### Purpose
TTS NIM gives applications a production speech-synthesis endpoint for voice assistants, virtual agents, localized content, accessibility, and digital-human experiences. It can be deployed independently or chained with [[NVIDIA-ASR-NIM]] and [[NVIDIA-NMT-NIM]].

### Current scope
- Offline synthesis returns complete audio in a single response.
- Streaming synthesis returns audio chunks as they are generated.
- Current docs list Magpie TTS Multilingual, Magpie TTS Zeroshot, and Magpie TTS Flow model options.
- Magpie Multilingual supports multiple languages and voices.
- Voice cloning uses short reference audio, with Flow also requiring a transcript.
- Customization covers voices, emotional styles, batch synthesis, SSML subset support, and custom pronunciation dictionaries.

### NVIDIA context
TTS NIM is the current NIM deployment surface for NVIDIA text-to-speech models. It connects [[NVIDIA-Riva]] speech workflows, [[NVIDIA-ACE]] digital humans, [[NIM-for-Audio2Face-3D]] avatar animation, and [[NVIDIA-Maxine]] real-time media workflows to the production [[NVIDIA-NIM]] stack.

## Connections
- [[NVIDIA-Speech-NIM-Microservices]] - parent docs surface for Speech NIMs.
- [[NVIDIA-Riva]] - broader NVIDIA speech AI platform and historical TTS runtime context.
- [[NVIDIA-ASR-NIM]] and [[NVIDIA-NMT-NIM]] - companion speech microservices for voice and translation pipelines.
- [[Nemotron-3-VoiceChat]] - unified full-duplex model that combines speech understanding and speech generation in one voice-agent model.
- [[NVIDIA-ACE]] - digital humans and NPCs use ASR/TTS style speech pipelines.
- [[NIM-for-Audio2Face-3D]] and [[NIM-for-Maxine-Audio2Face-2D]] - speech audio can drive 3D avatar animation or 2D portrait animation.
- [[NVIDIA-Maxine]] - real-time media and avatar workflows can pair with speech synthesis.
- [[NVIDIA-NeMo]] - model training/customization framework behind speech models.
- [[TensorRT]] and [[Triton-Inference-Server]] - acceleration and serving layers packaged inside the NIM.

## Source Excerpts
- NVIDIA docs say TTS NIM synthesizes natural-sounding speech from text and packages pre-trained NeMo models with the NVIDIA inference stack.
- The docs list offline and streaming synthesis modes plus Magpie multilingual, zeroshot, and Flow models.

## Resources
- [About NVIDIA TTS NIM](https://docs.nvidia.com/nim/speech/latest/tts/index.html)
- [How Speech NIM Microservices Work](https://docs.nvidia.com/nim/speech/latest/about/how-it-works.html)
