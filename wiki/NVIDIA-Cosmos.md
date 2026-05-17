# NVIDIA Cosmos

**Type:** Platform
**Tags:** NVIDIA, World Foundation Model, WFM, Generative AI, Physical AI, Robotics, Autonomous Vehicles, Video Generation
**Related:** [[NIM-for-Cosmos-WFM]], [[NIM-for-Cosmos-Reason]], [[NIM-for-Cosmos-Embed1]], [[NIM-for-Vision-Language-Models]], [[NVIDIA-Video-Search-and-Summarization-Blueprint]], [[NIM-for-Visual-Generative-AI]], [[NVIDIA-Omniverse]], [[NVIDIA-Omniverse-Reference-Architectures]], [[NVIDIA-Cosmos-Curator-LHA]], [[NVIDIA-Isaac]], [[NVIDIA-Isaac-Sim]], [[NVIDIA-Isaac-Lab]], [[NVIDIA-Isaac-GR00T]], [[NVIDIA-Drive-Platform]], [[NVIDIA-DRIVE-Sim]], [[NVIDIA-NeMo]], [[NVIDIA-NIM]], [[Red-Hat-AI-Factory-with-NVIDIA]]
**Sources:** NVIDIA official documentation; https://docs.nvidia.com/cosmos/curator/latest/lha/index.html, https://docs.nvidia.com/cosmos/latest/cosmos_nim.html, https://docs.nvidia.com/vss/latest/, https://docs.nvidia.com/nim/cosmos/latest/introduction.html, https://docs.nvidia.com/nim/cosmos-embed1/latest/introduction.html, https://docs.nvidia.com/nim/vision-language-models/latest/introduction.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/overview.html, https://docs.omniverse.nvidia.com/arch-diagrams/latest/ref-arch-diagrams/factory-dt-diagram.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Cosmos is a world foundation model (WFM) platform designed to accelerate the development of physical AI systems such as robots and autonomous vehicles. It provides a suite of pre-trained generative world models capable of synthesizing photorealistic, physically plausible video from text, images, or sensor inputs, enabling developers to generate massive amounts of synthetic training data and test AI systems in virtual worlds. Cosmos was announced at CES 2025 and is available under an open model license.

## Detail

### Purpose
Training physical AI systems (robots, self-driving cars, drones) requires vast amounts of real-world data — which is expensive, dangerous, or impossible to collect at scale. Cosmos solves this by generating synthetic, physically consistent video data that can augment or replace real-world data collection. It also enables simulation-to-reality transfer by creating realistic virtual environments for policy training and evaluation.

### Key Features
- World foundation models: Cosmos-1.0 family including video-to-world and text-to-world diffusion and autoregressive transformer models
- Cosmos Tokenizer: high-compression discrete and continuous video/image tokenizers for efficient video generation
- Cosmos Transfer: conditioned video generation from input signals (optical flow, depth, segmentation masks) for simulation-to-real transfer
- Cosmos Curator/LHA: [[NVIDIA-Cosmos-Curator-LHA]] documentation covers video understanding and curation workflows for large-scale physical AI datasets.
- Cosmos WFM NIM: [[NIM-for-Cosmos-WFM]] deploys Cosmos-Predict1 and Cosmos-Transfer2.5 world foundation models through NIM containers and APIs.
- Cosmos Embed1 NIM: [[NIM-for-Cosmos-Embed1]] generates joint video-text embeddings for dataset search, semantic deduplication, and physical AI retrieval.
- Cosmos Reason NIMs: [[NIM-for-Cosmos-Reason]] covers Cosmos Reason1/Reason2 VLM reasoning, with current serving details hosted under [[NIM-for-Vision-Language-Models]].
- VSS blueprint adjacency: [[NVIDIA-Video-Search-and-Summarization-Blueprint]] uses Cosmos VLM and video embedding concepts for video understanding, search, and reports.
- Cosmos Predict: video prediction models for generating future frames from current observations
- Physical realism: models trained to respect physics, object permanence, and scene continuity
- Open model weights available under NVIDIA Open Model License
- Integration with NVIDIA Omniverse and [[NVIDIA-Isaac-Sim]] for synthetic data and physical AI simulation pipelines
- High-resolution video generation (up to 1080p)

### Use Cases
- Synthetic training data generation for robotics and AV perception models
- Simulation-to-real (sim2real) transfer for robot policy learning
- Autonomous vehicle sensor simulation (cameras, lidar projections)
- Scenario generation for edge-case testing in AV development
- World model-based reinforcement learning for robot manipulation
- Digital twin video synthesis for industrial AI

### Hardware Requirements / Compatibility
- H100 / B200 GPUs recommended for training and fine-tuning
- A100 80GB minimum for inference on largest models
- Available as NIM containers for optimized inference
- Integrates with NVIDIA DGX SuperPOD for large-scale synthetic data generation

### Language Bindings / APIs
- Python (Cosmos SDK, Hugging Face Transformers)
- NVIDIA NIM REST API
- Omniverse Replicator integration for synthetic data pipelines
- Available on Hugging Face Hub (nvidia/Cosmos-*)

## Connections
- [[NVIDIA-Omniverse]] — Cosmos integrates with Omniverse Replicator for synthetic data pipelines
- [[NVIDIA-Omniverse-Reference-Architectures]] - industrial facility digital twin architecture uses Omniverse and Cosmos for synthetic data variations.
- [[NIM-for-Cosmos-WFM]] - deployable NIM surface for Cosmos Predict and Transfer world models.
- [[NIM-for-Cosmos-Reason]] - Cosmos VLM NIM family for image/video/text reasoning.
- [[NIM-for-Cosmos-Embed1]] - video-text embedding NIM for Cosmos video search and dataset curation.
- [[NIM-for-Vision-Language-Models]] - current docs surface for Cosmos Reason VLM NIMs.
- [[NVIDIA-Video-Search-and-Summarization-Blueprint]] - video search/summarization blueprint that uses Cosmos models for video understanding and embeddings.
- [[NIM-for-Visual-Generative-AI]] - adjacent visual generation NIM family, distinct from physical AI world models.
- [[NVIDIA-Cosmos-Curator-LHA]] — Curator/LHA provides large-scale video analysis and curation workflows adjacent to Cosmos world models
- [[NVIDIA-Isaac]] — umbrella robotics platform that consumes Cosmos-generated physical AI data
- [[NVIDIA-Isaac-Sim]] — simulation environment that can combine 3D scenes with Cosmos-driven synthetic data workflows
- [[NVIDIA-Isaac-Lab]] — robot-learning framework that can train policies using synthetic and simulated data
- [[NVIDIA-Isaac-GR00T]] — humanoid robotics platform that uses Cosmos and GR00T data-generation workflows
- [[NVIDIA-Drive-Platform]] — Cosmos used for autonomous vehicle scenario generation and sensor simulation
- [[NVIDIA-DRIVE-Sim]] - current DRIVE Sim material centers Cosmos world models, Cosmos Transfer/Predict, and AV synthetic data.
- [[NVIDIA-NeMo]] — Cosmos models trained and fine-tuned within NeMo ecosystem
- [[NVIDIA-NIM]] — Cosmos deployed via NIM microservices for enterprise access
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide that calls out Cosmos as a physical AI model family.

## Resources
- [Cosmos Developer Page](https://developer.nvidia.com/cosmos)
- [Cosmos Blog Announcement](https://blogs.nvidia.com/blog/cosmos-world-foundation-models/)
- [Cosmos GitHub](https://github.com/NVIDIA/Cosmos)
- [Hugging Face Models](https://huggingface.co/nvidia/Cosmos-1.0-Diffusion-7B-Text2World)
