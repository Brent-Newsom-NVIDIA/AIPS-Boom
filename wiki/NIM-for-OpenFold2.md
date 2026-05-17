# NIM for OpenFold2

**Type:** Microservice
**Tags:** NVIDIA, NIM, BioNeMo, OpenFold2, AlphaFold2, protein structure prediction, PyTorch, templates
**Related:** [[NVIDIA-BioNeMo]], [[NVIDIA-NIM]], [[NIM-for-MSA-Search]], [[NIM-for-AlphaFold2]], [[NIM-for-AlphaFold2-Multimer]], [[NIM-for-OpenFold3]], [[NIM-for-Boltz2]], [[NIM-for-ProteinMPNN]], [[cuEquivariance]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/bionemo/openfold2/latest/overview.html; https://docs.nvidia.com/nim/bionemo/openfold2/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NIM for OpenFold2 is NVIDIA's NIM microservice for OpenFold2 protein structure prediction. OpenFold2 is a PyTorch reimplementation of AlphaFold2 from the OpenFold Consortium and the AlQuraishi Laboratory, with support for training and inference and parity-style accuracy with AlphaFold2.

## Detail
The current docs describe NVIDIA OpenFold2 NIM as a monomer OpenFold2 implementation that predicts protein structure from an input sequence and can accept optional multiple sequence alignments and templates. It uses parameter sets trained with Google DeepMind's original JAX implementation of AlphaFold2.

This page is distinct from [[NIM-for-AlphaFold2]] because OpenFold2 is the open PyTorch implementation path. It is distinct from [[NIM-for-OpenFold3]] because OpenFold3 moves beyond single-chain protein structure to all-atom biomolecular complex modeling with proteins, DNA, RNA, and ligands.

## Connections
- [[NVIDIA-BioNeMo]] - BioNeMo includes OpenFold2 in its biomolecular NIM ecosystem.
- [[NVIDIA-NIM]] - delivered as an NVIDIA NIM microservice.
- [[NIM-for-MSA-Search]] - MSA and template search are preprocessing inputs for OpenFold-style structure prediction.
- [[NIM-for-AlphaFold2]] - related AlphaFold2 NIM for single-chain protein structure prediction.
- [[NIM-for-AlphaFold2-Multimer]] - multimer AlphaFold2 NIM for multiple protein sequences.
- [[NIM-for-OpenFold3]] - next-generation all-atom complex prediction page.
- [[NIM-for-Boltz2]] - biomolecular complex and binding-affinity prediction NIM.
- [[NIM-for-ProteinMPNN]] - sequence-design NIM adjacent to structure generation and validation workflows.
- [[cuEquivariance]] - related CUDA-X library for structure-aware/equivariant model kernels.
- [[NVIDIA-Clara]] - healthcare/life-sciences umbrella platform.
- [[NVIDIA-AI-Enterprise]] - enterprise support and production deployment context.
- [[NGC]] - distribution path for NIM containers and model assets.

## Source Excerpts
- "PyTorch re-implementation"
- "monomer"
- "optional inputs"
