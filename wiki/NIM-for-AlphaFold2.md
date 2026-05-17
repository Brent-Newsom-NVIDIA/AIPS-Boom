# NIM for AlphaFold2

**Type:** Microservice
**Tags:** NVIDIA, NIM, BioNeMo, AlphaFold2, protein structure prediction, MSA, drug discovery, computational biology
**Related:** [[NVIDIA-BioNeMo]], [[NVIDIA-NIM]], [[NIM-for-MSA-Search]], [[NIM-for-AlphaFold2-Multimer]], [[NIM-for-OpenFold2]], [[NIM-for-OpenFold3]], [[NIM-for-Boltz2]], [[NIM-for-ProteinMPNN]], [[NIM-for-Evo-2]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/bionemo/alphafold2/latest/overview.html; https://docs.nvidia.com/nim/bionemo/alphafold2/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NIM for AlphaFold2 is NVIDIA's NIM microservice for AlphaFold2 protein structure prediction. It predicts protein structure from an amino-acid sequence, can generate a multiple sequence alignment (MSA), and can predict structure from a pre-computed MSA. In the wiki, this is the single-chain AlphaFold2 BioNeMo NIM page.

## Detail
The current NVIDIA docs describe AlphaFold2 as a Google DeepMind protein structure prediction model with state-of-the-art CASP performance. NVIDIA's AlphaFold2 NIM packages this capability behind a consistent NIM API and includes GPU-accelerated MMSeqs2 for multiple sequence alignment.

This page should be used when a question asks for NVIDIA's AlphaFold2 deployment, API, quickstart, performance, or runtime configuration. Use [[NIM-for-AlphaFold2-Multimer]] for multiple interacting protein sequences, [[NIM-for-OpenFold2]] for the OpenFold PyTorch reimplementation, and [[NIM-for-OpenFold3]] or [[NIM-for-Boltz2]] for more general biomolecular complex prediction.

## Connections
- [[NVIDIA-BioNeMo]] - BioNeMo is the NVIDIA life-sciences platform that includes AlphaFold2 NIM.
- [[NVIDIA-NIM]] - AlphaFold2 is delivered as a NIM microservice.
- [[NIM-for-MSA-Search]] - GPU-accelerated MSA and template search can feed AlphaFold2-style structure prediction workflows.
- [[NIM-for-AlphaFold2-Multimer]] - multimer variant for multiple protein sequences and complexes.
- [[NIM-for-OpenFold2]] - OpenFold2 is an open PyTorch reimplementation of AlphaFold2 concepts.
- [[NIM-for-OpenFold3]] - extends structure prediction toward all-atom biomolecular complexes.
- [[NIM-for-Boltz2]] - newer biomolecular structure and binding-affinity NIM.
- [[NIM-for-Evo-2]] - DNA foundation model NIM in the BioNeMo ecosystem.
- [[NIM-for-ProteinMPNN]] - protein sequence design NIM adjacent to structure prediction/validation workflows.
- [[NVIDIA-Clara]] - Clara is the broader healthcare/life-sciences platform.
- [[NVIDIA-AI-Enterprise]] - enterprise support and security context for production NIM deployments.
- [[NGC]] - distribution path for NIM containers and model assets.

## Source Excerpts
- "Predict protein structure"
- "GPU-accelerated MMSeqs2"
- "consistent API"
