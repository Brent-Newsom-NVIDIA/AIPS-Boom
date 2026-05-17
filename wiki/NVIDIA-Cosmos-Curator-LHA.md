# NVIDIA Cosmos Curator

**Type:** Platform
**Tags:** NVIDIA, Cosmos Curator, physical AI, video curation, DGX Cloud, dataset curation, world foundation models
**Related:** [[NVIDIA-Cosmos]], [[NIM-for-Cosmos-Embed1]], [[NIM-for-Cosmos-WFM]], [[NVIDIA-DGX-Cloud]], [[NeMo-Curator]], [[NVIDIA-NIM]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-Omniverse]], [[NVIDIA-Isaac]]
**Sources:** https://docs.nvidia.com/cosmos-curator-lha/current, https://docs.nvidia.com/cosmos-curator-lha/current/introduction.html, https://docs.nvidia.com/cosmos/index.html, https://docs.nvidia.com/nim/cosmos-embed1/latest/introduction.html, https://docs.nvidia.com/nim/cosmos/latest/introduction.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Cosmos Curator is a cloud-based, GPU-accelerated service for curating video datasets for physical AI workflows. It segments videos into semantically consistent clips, generates embeddings, creates previews, and can generate text prompts or captions for video data.

## Detail
Cosmos Curator accepts datasets through linked AWS S3 buckets or ZIP uploads and can be used through a UI or API. The curation pipeline reads and writes video data and metadata through DGX Cloud or S3 storage, scales with Ray across multi-node, multi-GPU resources, and uses NVIDIA-accelerated libraries for throughput.

The service is part of the broader [[NVIDIA-Cosmos]] platform for world foundation models, video data processing, video evaluation, and post-training. [[NIM-for-Cosmos-Embed1]] is the adjacent embedding NIM for video-text search and deduplication, while [[NIM-for-Cosmos-WFM]] is the deployable generation NIM for Cosmos Predict and Transfer models.

## Connections
- [[NVIDIA-Cosmos]] - parent physical AI and world foundation model platform.
- [[NIM-for-Cosmos-Embed1]] - joint video-text embedding NIM for searchable physical AI video datasets.
- [[NIM-for-Cosmos-WFM]] - Cosmos world model generation NIM that can consume curated datasets.
- [[NVIDIA-DGX-Cloud]] - curated datasets can be stored and processed through DGX Cloud workflows.
- [[NeMo-Curator]] - related NVIDIA data curation stack for AI training datasets.
- [[NVIDIA-NIM]] - Cosmos model endpoints and NIMs sit alongside Cosmos Curator.
- [[NVIDIA-AI-Data-Platform]] - enterprise retrieval and video-search layer adjacent to Cosmos dataset curation.
- [[NVIDIA-Isaac]] - robotics and physical AI data consumers.

## Source Excerpts
- NVIDIA describes Cosmos Curator as a cloud-based GPU-accelerated solution for curating video datasets.
- The service can segment videos, generate embeddings, create prompts/captions, and support S3 or ZIP dataset inputs.
