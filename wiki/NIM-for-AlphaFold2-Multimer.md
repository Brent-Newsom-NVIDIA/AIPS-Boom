# NIM for AlphaFold2-Multimer

**Type:** Microservice
**Tags:** NVIDIA, NIM, BioNeMo, AlphaFold2-Multimer, protein complexes, MSA, drug discovery, computational biology
**Related:** [[NVIDIA-BioNeMo]], [[NVIDIA-NIM]], [[NIM-for-MSA-Search]], [[NIM-for-AlphaFold2]], [[NIM-for-OpenFold2]], [[NIM-for-OpenFold3]], [[NIM-for-Boltz2]], [[NIM-for-ProteinMPNN]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/bionemo/alphafold2-multimer/latest/overview.html; https://docs.nvidia.com/nim/bionemo/alphafold2-multimer/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NIM for AlphaFold2-Multimer is NVIDIA's NIM microservice for predicting protein structures from multiple protein sequences. It is the multimer/complex counterpart to [[NIM-for-AlphaFold2]], with endpoints and deployment guidance for sequence-to-structure, sequence-to-MSA, and MSA-to-structure workflows over multiple sequences.

## Detail
The current docs describe AlphaFold2-Multimer as a fast, accurate model behind a consistent NIM API for predicting protein structure in CADD workflows. The NIM can predict protein structures from multiple protein sequences, predict MSAs for multiple sequences, or predict a structure from pre-computed MSAs.

This page is useful when the query is about protein-protein complexes or multimeric AlphaFold2 workflows. It stays separate from [[NIM-for-AlphaFold2]] because the input and use case are different: multiple interacting sequences rather than a single protein chain.

## Connections
- [[NVIDIA-BioNeMo]] - BioNeMo is the NVIDIA life-sciences platform that includes AlphaFold2-Multimer NIM.
- [[NVIDIA-NIM]] - delivered as an NVIDIA NIM microservice.
- [[NIM-for-MSA-Search]] - paired MSA search supports multimer and protein-complex structure prediction workflows.
- [[NIM-for-AlphaFold2]] - single-chain AlphaFold2 NIM.
- [[NIM-for-OpenFold2]] - open AlphaFold2-style protein structure prediction NIM.
- [[NIM-for-OpenFold3]] - all-atom biomolecular complex prediction NIM.
- [[NIM-for-Boltz2]] - biomolecular complex and binding-affinity prediction NIM.
- [[NIM-for-ProteinMPNN]] - sequence-design NIM adjacent to generated or predicted protein structures.
- [[NVIDIA-Clara]] - healthcare/life-sciences umbrella platform.
- [[NVIDIA-AI-Enterprise]] - enterprise support and production deployment context.
- [[NGC]] - distribution path for NIM containers and model assets.

## Source Excerpts
- "multiple protein sequences"
- "computer-aided drug discovery"
- "pre-computed MSA"
