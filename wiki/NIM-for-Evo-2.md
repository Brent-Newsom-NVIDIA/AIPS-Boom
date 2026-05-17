# NIM for Evo 2

**Type:** Microservice
**Tags:** NVIDIA, NIM, BioNeMo, Evo 2, DNA, genome, biological foundation model, synthetic biology, drug discovery
**Related:** [[NVIDIA-BioNeMo]], [[NVIDIA-NIM]], [[NIM-for-Boltz2]], [[NIM-for-OpenFold3]], [[NIM-for-AlphaFold2]], [[NIM-for-ProteinMPNN]], [[NIM-for-RFdiffusion]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/bionemo/evo2/latest/overview.html; https://docs.nvidia.com/nim/bionemo/evo2/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NIM for Evo 2 is NVIDIA's NIM microservice for the Evo 2 biological foundation model. Evo 2 interprets and generates DNA sequences across biological scales, from individual molecules to entire genomes, with sensitivity to single-nucleotide changes for zero-shot predictions and biological system design.

## Detail
The current docs describe Evo 2 as a biological foundation model trained by Arc Institute. NVIDIA's NIM packaging exposes Evo 2 for DNA sequence generation, model forward-pass outputs, benchmarking, model selection, and custom or fine-tuned model checkpoints.

Evo 2 belongs with BioNeMo NIMs, but its query intent is different from structure-prediction pages. [[NIM-for-AlphaFold2]], [[NIM-for-OpenFold3]], and [[NIM-for-Boltz2]] answer structure and interaction questions; Evo 2 answers DNA sequence interpretation/generation, mutation-effect prediction, CRISPR-style design, and synthetic biology questions.

## Connections
- [[NVIDIA-BioNeMo]] - BioNeMo includes Evo 2 in its biomolecular NIM ecosystem.
- [[NVIDIA-NIM]] - delivered as an NVIDIA NIM microservice.
- [[NIM-for-Boltz2]] - structure/binding-affinity prediction adjacent to drug discovery workflows.
- [[NIM-for-OpenFold3]] - biomolecular complex prediction adjacent to sequence-to-structure pipelines.
- [[NIM-for-AlphaFold2]] - protein structure prediction NIM in the same BioNeMo family.
- [[NIM-for-ProteinMPNN]] and [[NIM-for-RFdiffusion]] - protein design NIMs adjacent to biological sequence and design workflows.
- [[NVIDIA-Clara]] - healthcare/life-sciences umbrella platform.
- [[NVIDIA-AI-Enterprise]] - enterprise support and production deployment context.
- [[NGC]] - distribution path for NIM containers and model assets.

## Source Excerpts
- "interpret and generate DNA sequences"
- "entire genomes"
- "zero-shot predictions"
