# NIM for MSA Search

**Type:** Microservice
**Tags:** NVIDIA, NIM, BioNeMo, MSA, multiple sequence alignment, MMSeqs2, protein structure prediction, AlphaFold, OpenFold, Boltz
**Related:** [[NVIDIA-BioNeMo]], [[NVIDIA-NIM]], [[NIM-for-AlphaFold2]], [[NIM-for-AlphaFold2-Multimer]], [[NIM-for-OpenFold2]], [[NIM-for-OpenFold3]], [[NIM-for-Boltz2]], [[NIM-for-ProteinMPNN]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-CUDA]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/bionemo/msa-search/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NIM for MSA Search is NVIDIA's BioNeMo NIM for GPU-accelerated multiple sequence alignment of query amino-acid sequences against protein sequence databases. Current NVIDIA docs describe it as using GPU-accelerated MMSeqs2 and providing inputs for structure prediction models such as AlphaFold2, OpenFold, Boltz, and multimer workflows.

## Detail

### Purpose
Multiple sequence alignment helps structure prediction models use evolutionary and homologous-sequence information. MSA Search NIM makes that search/align step deployable as a GPU-accelerated microservice rather than a separate CPU-heavy preprocessing pipeline.

### Current scope
- Searches protein sequence databases for similar sequences and aligns related sequences.
- Supports AlphaFold2-style monomer search with a single-pass search per database.
- Supports a ColabFold-style cascaded search process for higher sensitivity and throughput.
- Supports paired MSA search for protein complexes by pairing homologous chain sequences by species.
- Supports structural template search against structural databases such as PDB70 and returns template hits plus MSA alignments.
- Uses GPU-accelerated MMSeqs2 for improved latency and throughput.

### NVIDIA context
MSA Search is infrastructure for the BioNeMo structure prediction stack. It connects directly to [[NIM-for-AlphaFold2]], [[NIM-for-AlphaFold2-Multimer]], [[NIM-for-OpenFold2]], [[NIM-for-OpenFold3]], and [[NIM-for-Boltz2]] rather than being a standalone molecular design model.

## Connections
- [[NIM-for-AlphaFold2]] and [[NIM-for-AlphaFold2-Multimer]] - MSA inputs improve structure prediction and multimer modeling.
- [[NIM-for-OpenFold2]] and [[NIM-for-OpenFold3]] - OpenFold-style NIMs can use MSA/template context.
- [[NIM-for-Boltz2]] - complex prediction can use homologous sequence and template context.
- [[NIM-for-ProteinMPNN]] - protein design workflows can combine structure generation/design with sequence context.
- [[NVIDIA-BioNeMo]] and [[NVIDIA-Clara]] - life-sciences platform context.
- [[NVIDIA-AI-Enterprise]], [[NVIDIA-CUDA]], and [[NGC]] - deployment, acceleration, and distribution context.

## Source Excerpts
- NVIDIA docs describe MSA Search NIM as supporting GPU-accelerated MSA against protein sequence databases.
- The current docs list AlphaFold2 search, ColabFold search, paired MSA search, structural template search, and GPU-accelerated MMSeqs2.

## Resources
- [NVIDIA NIM for MSA Search Overview](https://docs.nvidia.com/nim/bionemo/msa-search/latest/overview.html)
