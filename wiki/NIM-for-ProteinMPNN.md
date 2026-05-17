# NIM for ProteinMPNN

**Type:** Microservice
**Tags:** NVIDIA, NIM, BioNeMo, ProteinMPNN, protein sequence design, protein engineering, graph neural network, drug discovery
**Related:** [[NVIDIA-BioNeMo]], [[NVIDIA-NIM]], [[NIM-for-RFdiffusion]], [[NIM-for-MSA-Search]], [[NIM-for-AlphaFold2]], [[NIM-for-OpenFold3]], [[NIM-for-Boltz2]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[TensorRT]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/bionemo/proteinmpnn/latest/overview.html, https://docs.nvidia.com/nim/bionemo/proteinmpnn/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NIM for ProteinMPNN is NVIDIA's BioNeMo NIM for predicting amino-acid sequences that fit a given protein backbone. Current NVIDIA docs describe ProteinMPNN as a graph neural network that takes a protein 3D structure in PDB format and outputs amino-acid sequences in Multi-FASTA format.

## Detail

### Purpose
ProteinMPNN supports protein engineering and drug-discovery workflows where researchers have a desired backbone or generated structure and need plausible sequences that are likely to fold into that structure.

### Current scope
- Uses evolutionary, functional, and structural information to generate candidate amino-acid sequences.
- Accepts a protein backbone structure in PDB format.
- Outputs designed amino-acid sequences in Multi-FASTA format.
- Can be chained after [[NIM-for-RFdiffusion]], where RFdiffusion generates a 3D protein structure and ProteinMPNN designs sequences for that structure.
- Current docs expose quickstart, endpoints, benchmarking, support matrix, and advanced logging/telemetry controls.

### NVIDIA context
ProteinMPNN is a protein sequence design NIM in the BioNeMo graph. It is especially important as a companion to [[NIM-for-RFdiffusion]] and to structure-prediction validation workflows using [[NIM-for-AlphaFold2]], [[NIM-for-OpenFold3]], or [[NIM-for-Boltz2]].

## Connections
- [[NIM-for-RFdiffusion]] - upstream generative protein structure NIM that ProteinMPNN can follow for sequence design.
- [[NIM-for-MSA-Search]] - sequence search/MSA context for protein structure workflows.
- [[NIM-for-AlphaFold2]], [[NIM-for-OpenFold3]], and [[NIM-for-Boltz2]] - structure prediction/validation NIMs adjacent to sequence design.
- [[NVIDIA-BioNeMo]] and [[NVIDIA-Clara]] - life-sciences platform context.
- [[NVIDIA-AI-Enterprise]], [[TensorRT]], and [[NGC]] - production deployment, inference optimization, and distribution context.

## Source Excerpts
- NVIDIA docs describe ProteinMPNN as predicting amino-acid sequences for given protein backbones.
- The current docs state that ProteinMPNN can be used after RFdiffusion to determine possible amino-acid sequences for generated structures.

## Resources
- [NVIDIA NIM for ProteinMPNN Overview](https://docs.nvidia.com/nim/bionemo/proteinmpnn/latest/overview.html)
- [NVIDIA NIM for ProteinMPNN Documentation](https://docs.nvidia.com/nim/bionemo/proteinmpnn/latest/index.html)
