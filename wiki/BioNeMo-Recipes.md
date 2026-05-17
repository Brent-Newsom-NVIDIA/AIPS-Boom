# BioNeMo Recipes

**Type:** Reference implementation
**Tags:** NVIDIA, BioNeMo, biological foundation models, drug discovery, training recipes, Transformer Engine, PyTorch, FSDP, FP8, life sciences
**Related:** [[NVIDIA-BioNeMo]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[NGC]], [[Transformer-Engine]], [[PyTorch]], [[Hugging-Face-Accelerate]], [[Megatron-LM]], [[NVIDIA-NeMo]], [[NIM-for-Evo-2]], [[NIM-for-ProteinMPNN]], [[NIM-for-RFdiffusion]], [[NIM-for-DiffDock]]
**Sources:** https://docs.nvidia.com/bionemo-framework/latest/main/recipes/, https://docs.nvidia.com/bionemo-framework/latest/main/recipes/recipes/, https://docs.nvidia.com/bionemo-framework/latest/models/index.html, https://docs.nvidia.com/bionemo-framework/latest/models/amplify/, https://docs.nvidia.com/bionemo-framework/latest/models/ESM-2/, https://docs.nvidia.com/bionemo-framework/latest/models/ESM-2/pre-training/, https://docs.nvidia.com/bionemo-framework/latest/models/evo2/, https://docs.nvidia.com/bionemo-framework/latest/models/geneformer/, https://docs.nvidia.com/bionemo-framework/latest/main/recipes/models/amplify/amplify/, https://docs.nvidia.com/bionemo-framework/latest/main/recipes/models/esm2/esm2/, https://docs.nvidia.com/bionemo-framework/latest/main/recipes/models/geneformer/geneformer/
**Last Updated:** 2026-04-29

## Summary
BioNeMo Recipes is NVIDIA's public reference-implementation layer for scaling biological foundation model training on NVIDIA GPUs. Current docs position it beside the BioNeMo Framework: instead of being a broad batteries-included training framework, the recipes provide optimized model checkpoints, [[Transformer-Engine]]-based model implementations, and self-contained PyTorch training examples that researchers can adapt for biological AI workloads.

## Detail

### Current positioning
The latest BioNeMo docs note that the documentation is being refactored while NVIDIA consolidates earlier 5D parallelism training material with `bionemo-recipes`. For wiki purposes, this page is the canonical place for the durable recipe layer rather than separate pages for every recipe folder, model variant, notebook, or helper script.

[[NVIDIA-BioNeMo]] remains the platform page for the broader life-sciences ecosystem, including BioNeMo Framework and BioNeMo NIMs. This page focuses on the training and reference-code layer.

### What the recipes provide
- Hugging Face-compatible `PreTrainedModel` classes that use NVIDIA [[Transformer-Engine]] layers internally.
- Self-contained Docker recipe directories with training scripts, pinned dependencies, test contracts, and example multi-node launch material.
- Recipe coverage for PyTorch-native training loops, [[Hugging-Face-Accelerate]], PyTorch Lightning, FSDP2, and megatron-FSDP style scaling.
- Training-feature examples around BF16, FP8, MXFP8, sequence packing/THD input format, context parallelism, checkpoint conversion, and Hugging Face checkpoint import/export.
- Performance-oriented examples and benchmarking expectations across NVIDIA data center GPUs such as A100, H100, H200, B100, and B200.

### Current model and recipe scope
Current BioNeMo Framework model docs list AMPLIFY, ESM-2, Evo2, and Geneformer. The recipe docs additionally call out optimized AMPLIFY, ESM-2, Geneformer, CodonFM, and vision-transformer examples.

Important boundary: several biological models surfaced here come from third-party research communities and are not NVIDIA-owned model families. The wiki keeps those model facts folded into this BioNeMo recipe page unless NVIDIA's docs make a durable NVIDIA service, NIM, or product page for that topic. For example, [[NIM-for-Evo-2]], [[NIM-for-ProteinMPNN]], [[NIM-for-RFdiffusion]], and [[NIM-for-DiffDock]] remain separate because NVIDIA publishes them as NIM services.

### Developer workflow
BioNeMo Recipes separates reusable models from runnable recipes:
- `models/` packages are intended to be loadable through standard Hugging Face model APIs after conversion or publication.
- `recipes/` folders are educational and self-contained, with Dockerfiles, Hydra-style configuration, training entrypoints, small validation data where appropriate, tests, and optional SLURM examples.
- CI/CD expectations are intentionally simple: build the component container and run its pytest suite.
- The docs emphasize readable, adaptable code over a highly abstracted shared framework, so researchers can modify the full training loop for their own biological datasets.

## Connections
- [[NVIDIA-BioNeMo]] - broader platform page for BioNeMo Framework, BioNeMo NIMs, and life-sciences AI workflows.
- [[NVIDIA-Clara]] - healthcare and life-sciences umbrella that includes BioNeMo, Parabricks, MONAI, and medical imaging AI.
- [[NVIDIA-AI-Enterprise]] - enterprise support and production software context for BioNeMo and NIM deployment.
- [[NGC]] - distribution channel for NVIDIA containers, model assets, and private-registry workflows used around BioNeMo.
- [[Transformer-Engine]] - NVIDIA library providing TE layers, FP8/MXFP8/NVFP4 recipes, and optimized transformer building blocks used by BioNeMo Recipes.
- [[PyTorch]] - primary deep learning framework underneath the recipe training loops.
- [[Hugging-Face-Accelerate]] - one of the recipe execution paths for distributed PyTorch training.
- [[Megatron-LM]] - adjacent NVIDIA scaling lineage for large transformer training and megatron-FSDP style patterns.
- [[NVIDIA-NeMo]] - related NVIDIA training and model-lifecycle ecosystem; BioNeMo adopts similar large-scale training concepts for biological models.
- [[NIM-for-Evo-2]], [[NIM-for-ProteinMPNN]], [[NIM-for-RFdiffusion]], and [[NIM-for-DiffDock]] - inference-service pages for durable BioNeMo/NIM topics that are separate from recipe code.

## Source Excerpts
- NVIDIA docs describe BioNeMo Recipes as reference implementations for scaling biological foundation model training with Transformer Engine and FSDP.
- Current BioNeMo Framework model docs list AMPLIFY, ESM-2, Evo2, and Geneformer as available models.
- Recipe docs distinguish model packages from self-contained training recipes and document Docker/test/benchmark expectations.

## Resources
- [BioNeMo Recipes](https://docs.nvidia.com/bionemo-framework/latest/main/recipes/)
- [BioNeMo Recipes Directory](https://docs.nvidia.com/bionemo-framework/latest/main/recipes/recipes/)
- [BioNeMo Framework Models](https://docs.nvidia.com/bionemo-framework/latest/models/index.html)
