# NIM for Boltz2

**Type:** Microservice
**Tags:** NVIDIA, NIM, BioNeMo, Boltz-2, protein structure, biomolecular complexes, binding affinity, ligands, drug discovery
**Related:** [[NVIDIA-BioNeMo]], [[NVIDIA-NIM]], [[NIM-for-MSA-Search]], [[NIM-for-OpenFold3]], [[NIM-for-OpenFold2]], [[NIM-for-AlphaFold2]], [[NIM-for-AlphaFold2-Multimer]], [[NIM-for-Evo-2]], [[NIM-for-DiffDock]], [[NIM-for-ProteinMPNN]], [[cuEquivariance]], [[TensorRT]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/bionemo/boltz2/latest/overview.html; https://docs.nvidia.com/nim/bionemo/boltz2/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NIM for Boltz2 is NVIDIA's NIM microservice for Boltz-2 biomolecular structure prediction and binding-affinity prediction. It targets proteins, RNA, DNA, ligands, protein-nucleic-acid complexes, modified residues, ligand binding, and constraint-guided predictions for drug-discovery and structural-biology workflows.

## Detail
The current docs describe Boltz-2 NIM as a biomolecular structure and binding-affinity prediction service for combinations of proteins, RNA, DNA, and other molecules. It supports both single-molecule predictions and complex multi-molecular assemblies, including protein structures, nucleic acid structures, protein-nucleic acid complexes, ligand binding and affinity scores, modified residues, and predictions conditioned on pockets or contacts.

Boltz2 belongs near [[NIM-for-OpenFold3]] because both model biomolecular complexes. Boltz2 is especially important for ranking and assessing molecular interactions because current docs call out binding-affinity prediction as a first-class capability. It also belongs near [[cuEquivariance]] and [[TensorRT]] because NVIDIA positions BioNeMo structure models around optimized GPU kernels and inference engines.

## Connections
- [[NVIDIA-BioNeMo]] - BioNeMo includes Boltz2 in its biomolecular NIM ecosystem.
- [[NVIDIA-NIM]] - delivered as an NVIDIA NIM microservice.
- [[NIM-for-MSA-Search]] - sequence/template search context for structure prediction workflows.
- [[NIM-for-OpenFold3]] - adjacent all-atom biomolecular complex prediction NIM.
- [[NIM-for-OpenFold2]] - earlier OpenFold protein structure prediction NIM.
- [[NIM-for-AlphaFold2]] and [[NIM-for-AlphaFold2-Multimer]] - related protein structure prediction NIMs.
- [[NIM-for-Evo-2]] - sequence-design foundation model adjacent to drug discovery and synthetic biology.
- [[NIM-for-DiffDock]] - docking/pose-prediction NIM adjacent to protein-ligand modeling.
- [[NIM-for-ProteinMPNN]] - sequence-design NIM adjacent to protein engineering workflows.
- [[cuEquivariance]] - structure-aware/equivariant acceleration library relevant to biomolecular models.
- [[TensorRT]] - production inference optimization stack for NVIDIA NIMs.
- [[NVIDIA-Clara]] - healthcare/life-sciences umbrella platform.
- [[NVIDIA-AI-Enterprise]] - enterprise support and production deployment context.
- [[NGC]] - distribution path for NIM containers and model assets.

## Source Excerpts
- "binding affinity prediction"
- "proteins, RNA, DNA"
- "constraint-guided predictions"
