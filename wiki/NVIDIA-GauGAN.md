# NVIDIA GauGAN / Canvas

**Type:** Research
**Tags:** NVIDIA, GauGAN, Canvas, Semantic Image Synthesis, Generative AI, SPADE, GAN
**Related:** [[NVIDIA-GET3D]], [[NVIDIA-NeRF]], [[NVIDIA-Omniverse]], [[NVIDIA-Research]], [[NVIDIA-Maxine]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-10

## Summary
GauGAN (named after painter Paul Gauguin) is a NVIDIA Research semantic image synthesis system that converts semantic segmentation maps into photorealistic images using a spatially-adaptive normalization technique called SPADE. Originally published at CVPR 2019, GauGAN2 (2021) extended the capability to support text + sketch input for flexible landscape generation. The technology powers NVIDIA Canvas, a free creative application that turns rough brush strokes into photorealistic landscapes in real time, and has influenced a generation of conditional image generation research.

## Detail

### Purpose
Artists and designers need rapid concept visualization tools that can translate rough spatial compositions into realistic imagery without requiring photorealistic rendering skill. GauGAN solves this by learning the mapping from semantic labels (sky, water, mountain, tree) to photorealistic pixels, enabling anyone to paint with semantic brushes and see an instant photorealistic result.

### Key Features
- SPADE (Spatially-Adaptive Denormalization): learns to synthesize textures conditioned on semantic layout
- Real-time synthesis: photorealistic 512x512 output in <100ms on RTX GPU
- GauGAN2 multimodal inputs: combine text description + semantic sketch for more flexible control
- High-resolution output: 1-megapixel landscapes
- NVIDIA Canvas app: free Windows GUI with RTX real-time preview
- Landscape domains: sky, water, sea, snow, rock, grass, plants, clouds, fog, mountain
- Trained on Flickr landscape photos
- Successor influence: GauGAN concepts influenced ControlNet and other conditioning approaches

### Use Cases
- Concept art and matte painting for film and games
- Environmental design for VR/AR/games
- Interior design visualization from floor plan sketches
- Education: teaching students about semantic segmentation and scene composition
- Rapid scene mockups for camera placement and lighting design
- Creative AI tools for non-artists to visualize ideas

### Hardware Requirements / Compatibility
- NVIDIA Canvas: requires RTX GPU (RTX 20-series or newer)
- GauGAN research code: single A100 / V100 for training
- Inference: RTX 2080 or newer for real-time Canvas experience
- OS: Windows 10/11 (for Canvas app)

### Language Bindings / APIs
- NVIDIA Canvas: free GUI app (no code required)
- Python research code on GitHub (NVlabs/SPADE)
- PyTorch-based training and inference
- REST API available for research use

## Connections
- [[NVIDIA-GET3D]] — GET3D extends semantic generation from 2D (GauGAN) to 3D geometry
- [[NVIDIA-NeRF]] — both are NVIDIA Research neural rendering / generation projects
- [[NVIDIA-Omniverse]] — GauGAN-generated scenes can be used as texture references in Omniverse
- [[NVIDIA-Research]] — GauGAN/SPADE is a landmark NVIDIA Research publication (CVPR 2019)
- [[NVIDIA-Maxine]] — both are NVIDIA AI creative tools; Maxine for video, GauGAN for image synthesis

## Resources
- [GauGAN2 Project Page](https://research.nvidia.com/labs/dir/gaugan2/)
- [NVIDIA Canvas](https://www.nvidia.com/en-us/studio/canvas/)
- [SPADE GitHub](https://github.com/NVlabs/SPADE)
- [GauGAN2 Blog](https://developer.nvidia.com/blog/gaugan2-revolutionizing-ai-landscape-generation/)
