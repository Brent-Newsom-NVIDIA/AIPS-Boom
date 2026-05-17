# NVIDIA Fugatto

**Type:** Model
**Tags:** NVIDIA, Audio AI, Generative Audio, Text-to-Audio, Sound Generation, Music Generation
**Related:** [[NVIDIA-NeMo]], [[NVIDIA-Riva]], [[NVIDIA-Maxine]], [[NVIDIA-NIM]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-10

## Summary
NVIDIA Fugatto (Foundational Generative Audio Transformer Through Orchestration) is a generative AI model capable of producing novel sounds, music, and speech from text prompts and audio conditioning inputs. Announced in November 2024, Fugatto is unique in its ability to follow compositional instructions — combining multiple audio transformations simultaneously — such as making a trumpet sound like it is being played underwater while adding rain effects. It represents NVIDIA's first major foray into general-purpose generative audio.

## Detail

### Purpose
Existing audio generation models are specialists — they either do text-to-speech, or text-to-music, or audio style transfer — but none handle arbitrary compositional audio instructions. Fugatto addresses this by training a single transformer model on a diverse multimodal audio dataset with carefully designed instruction tuning, enabling a broad range of audio generation and transformation tasks from a single model.

### Key Features
- Compositional instructions: combine multiple audio transformations in a single prompt
- Text-to-audio generation: synthesize sound effects, music, and ambient soundscapes from text
- Voice transformation: change speaker characteristics, emotion, accent, and speaking style
- Text-to-speech with fine-grained control over prosody and emotion
- Audio style transfer: apply musical or environmental characteristics to existing audio
- Audio inpainting: modify specific segments of an audio file
- EmergentAudio: zero-shot generation of audio types not seen during training
- Trained on a novel diverse dataset spanning speech, music, and sound effects

### Use Cases
- Game audio and interactive media sound design
- Film and TV post-production sound effect generation
- Adaptive music and procedural audio for games
- Voice actor augmentation (change emotion, style, age)
- Podcast and audiobook production automation
- Advertising and marketing jingle creation
- Research into compositional generative audio

### Hardware Requirements / Compatibility
- H100 / A100 recommended for inference
- Available for research preview; production deployment details not yet announced
- Expected NIM microservice availability

### Language Bindings / APIs
- Research preview API (limited access as of 2025)
- Expected Python SDK integration via NeMo Audio

## Connections
- [[NVIDIA-NeMo]] — Fugatto is trained and developed within the NeMo framework
- [[NVIDIA-Riva]] — Riva handles production speech AI; Fugatto extends into generative audio
- [[NVIDIA-Maxine]] — Maxine handles audio enhancement; Fugatto handles audio generation
- [[NVIDIA-NIM]] — anticipated NIM deployment for enterprise generative audio

## Resources
- [Fugatto Blog Post](https://blogs.nvidia.com/blog/fugatto-gen-ai-sound-model/)
- [Fugatto Research Page](https://research.nvidia.com/labs/adlr/fugatto/)
