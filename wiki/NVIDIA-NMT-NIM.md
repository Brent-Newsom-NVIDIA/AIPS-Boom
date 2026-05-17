# NVIDIA NMT NIM

**Type:** Microservice
**Tags:** NVIDIA, NIM, NMT, neural machine translation, translation, Riva Translate, speech AI, multilingual
**Related:** [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-NIM]], [[NVIDIA-Riva]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], [[Nemotron]], [[NVIDIA-NeMo]], [[NVIDIA-AI-Enterprise]], [[TensorRT]], [[Triton-Inference-Server]]
**Sources:** https://docs.nvidia.com/nim/speech/latest/nmt/index.html, https://docs.nvidia.com/nim/speech/latest/about/how-it-works.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NMT NIM is the Speech NIM microservice for neural machine translation. Current NVIDIA docs describe it as packaging the Riva Translate 1.6B Transformer encoder-decoder model into a self-contained container that handles model download, optimization, and serving.

## Detail

### Purpose
NMT NIM provides a deployable translation endpoint for multilingual customer support, content localization, cross-language assistants, and real-time speech translation pipelines. It can sit between [[NVIDIA-ASR-NIM]] and [[NVIDIA-TTS-NIM]] to translate spoken input and synthesize translated speech output.

### Current scope
- Any-to-any translation across 36 languages in the current docs.
- Riva Translate 1.6B Transformer model with 24 encoder and 24 decoder layers.
- Translation exclusion with `<dnt>` tags for brand, product, and technical terms.
- Custom dictionaries to force translations or leave terms untranslated.
- Batch inference for higher-throughput text translation.
- Controls for morphologically complex target languages that can produce longer output.

### NVIDIA context
NMT NIM is the translation leg of the current Speech NIM collection. It replaces older per-Riva NMT docs as the current maintained docs surface and connects speech translation to [[NVIDIA-NIM]], [[NVIDIA-Riva]], [[NVIDIA-NeMo]], and [[NVIDIA-AI-Enterprise]].

## Connections
- [[NVIDIA-Speech-NIM-Microservices]] - parent docs surface for Speech NIMs.
- [[NVIDIA-ASR-NIM]] - upstream transcription service in speech-to-speech translation.
- [[NVIDIA-TTS-NIM]] - downstream speech synthesis service in translated voice workflows.
- [[NVIDIA-Riva]] - broader NVIDIA speech AI platform and historical NMT runtime context.
- [[Nemotron]] - current Speech NIM docs group NMT under the Nemotron speech model-family framing.
- [[NVIDIA-NeMo]] - training/customization framework for NVIDIA speech and translation models.
- [[NVIDIA-AI-Enterprise]] - enterprise support/licensing context for self-hosted NIMs.
- [[TensorRT]] and [[Triton-Inference-Server]] - acceleration and serving layers packaged inside the NIM.

## Source Excerpts
- NVIDIA docs say NMT NIM translates text between languages and packages Riva Translate 1.6B into a self-contained container.
- The docs list translation exclusion, custom dictionaries, batch inference, and 36-language support.

## Resources
- [About NVIDIA NMT NIM](https://docs.nvidia.com/nim/speech/latest/nmt/index.html)
- [How Speech NIM Microservices Work](https://docs.nvidia.com/nim/speech/latest/about/how-it-works.html)
