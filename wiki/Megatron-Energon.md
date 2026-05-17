# Megatron Energon

**Type:** Library
**Tags:** NVIDIA, Megatron Energon, data loading, multimodal data, WebDataset, JSONL, distributed training, PyTorch, Megatron Core, Megatron-LM
**Related:** [[Megatron-Core]], [[Megatron-LM]], [[NVIDIA-NeMo]], [[NeMo-Megatron-Bridge]], [[Nemotron-Training-Recipes]], [[PyTorch]], [[NVIDIA-DALI]], [[NeMo-Curator]], [[NVIDIA-Optimized-Frameworks]], [[NVIDIA-Resiliency-Extension]]
**Sources:** https://docs.nvidia.com/megatron-core/developer-guide/latest/user-guide/features/megatron_energon.html, https://nvidia.github.io/Megatron-Energon/, https://nvidia.github.io/Megatron-Energon/basic/quickstart.html, https://nvidia.github.io/Megatron-Energon/basic/data_prep.html, https://github.com/NVIDIA/Megatron-Energon
**Last Updated:** 2026-04-29

## Summary
Megatron Energon is NVIDIA's multimodal data-loading library for Megatron-scale training. Current NVIDIA docs describe it as an advanced dataloader for efficient loading of text, image, video, and audio data at scale, with distributed loading, dataset blending, WebDataset/JSONL-oriented formats, resumability, packing, grouping, joining, object-storage streaming, and command-line data-preparation tools.

## Detail

### Purpose
Large multimodal training jobs are often bottlenecked by data movement, decoding, shuffling, blending, and resumability. Megatron Energon addresses that data-input layer for [[Megatron-Core]] and [[Megatron-LM]] workflows, while remaining usable outside Megatron when a project needs large-scale multimodal dataset loading.

This page is the canonical wiki target for Megatron Energon. Do not split the quickstart, data-preparation tutorials, WebDataset layout, remote dataset guide, packing/grouping/joining features, CLI commands, or API module pages into separate wiki pages unless NVIDIA publishes a distinct durable product/topic around them.

### Current capabilities
- Multimodal sample loading for text, images, video, and audio.
- Distributed loading across workers, processes, and multi-node clusters.
- Dataset blending with configurable weights and metadataset support.
- WebDataset-oriented storage with Energon metadata, plus JSONL support for simpler cases.
- Save/restore of data-loading state so training can resume reproducibly.
- Packing, grouping, joining, subsets, epochized blending, custom sample loaders, and reproducible scaling features.
- Remote dataset access, including S3-compatible object storage patterns in current docs.
- CLI utilities such as `energon prepare`, `energon info`, `energon lint`, `energon mount`, and `energon preview`.

### NVIDIA stack context
Megatron Energon complements, rather than replaces, other NVIDIA data tools:
- [[NeMo-Curator]] prepares and filters large training datasets before training.
- [[NVIDIA-DALI]] accelerates decode/augmentation pipelines, especially image/video/audio preprocessing.
- Megatron Energon focuses on dataset format, multimodal sample loading, distributed sharding, blending, and resumable iteration for large training jobs.

## Connections
- [[Megatron-Core]] - current Megatron Core docs surface Megatron Energon as a feature for large-scale multimodal training data loading.
- [[Megatron-LM]] - reference implementation that can use Megatron Energon in multimodal training flows.
- [[NVIDIA-NeMo]] and [[NeMo-Megatron-Bridge]] - adjacent training stack where Megatron data-loading and checkpointing workflows matter.
- [[Nemotron-Training-Recipes]] - long-running recipe jobs need reproducible data iteration and resume behavior.
- [[PyTorch]] - Megatron Energon is a Python package used in PyTorch-style training loops.
- [[NVIDIA-DALI]] and [[NeMo-Curator]] - complementary data loading/preprocessing and data curation layers.
- [[NVIDIA-Optimized-Frameworks]] - container context for running Megatron/Energon training environments.
- [[NVIDIA-Resiliency-Extension]] - related resiliency package for restart/checkpoint behavior around long-running jobs.

## Source Excerpts
- NVIDIA docs describe Megatron Energon as an advanced multimodal dataloader for text, image, video, and audio at scale.
- Current docs list WebDataset with extra metadata and JSONL support as dataset formats.
- The GitHub README describes Energon as the multi-modal data loader of Megatron that can also be used independently.

## Resources
- [Megatron Energon in Megatron Core Docs](https://docs.nvidia.com/megatron-core/developer-guide/latest/user-guide/features/megatron_energon.html)
- [Megatron-Energon Documentation](https://nvidia.github.io/Megatron-Energon/)
- [Megatron-Energon Quickstart](https://nvidia.github.io/Megatron-Energon/basic/quickstart.html)
- [Megatron-Energon GitHub](https://github.com/NVIDIA/Megatron-Energon)
