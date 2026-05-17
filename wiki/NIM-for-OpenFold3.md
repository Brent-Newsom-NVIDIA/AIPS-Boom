# NIM for OpenFold3

**Type:** Microservice
**Tags:** NVIDIA, NIM, BioNeMo, OpenFold3, AlphaFold3, protein structure, biomolecular complexes, ligands, TensorRT, cuEquivariance
**Related:** [[NVIDIA-BioNeMo]], [[NVIDIA-NIM]], [[NIM-for-MSA-Search]], [[NIM-for-OpenFold2]], [[NIM-for-AlphaFold2]], [[NIM-for-Boltz2]], [[NIM-for-Evo-2]], [[NIM-for-ProteinMPNN]], [[NIM-for-DiffDock]], [[cuEquivariance]], [[TensorRT]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/bionemo/openfold3/latest/overview.html; https://docs.nvidia.com/nim/bionemo/openfold3/latest/index.html; https://docs.nvidia.com/nim/bionemo/openfold3/latest/support-matrix.html
**Last Updated:** 2026-04-29

## Summary
NIM for OpenFold3 is NVIDIA's NIM microservice for all-atom biomolecular complex structure prediction with OpenFold3. It models complexes composed of proteins, DNA, RNA, and ligands, can generate multiple 3D predictions with confidence scores, accepts MSA inputs, and supports structural templates in CIF format.

## Detail
The current docs describe OpenFold3 as a PyTorch implementation of the JAX-based AlphaFold3 direction, extending protein structure prediction to complete biomolecular complexes. NVIDIA's OpenFold3 NIM adds production-oriented tooling: fast GPU inference with optimized CUDA kernels, memory-efficient attention, support for long sequences and large complexes, TensorRT optimization, cuEquivariance kernels, and NIM Telemetry.

OpenFold3 belongs near [[NIM-for-Boltz2]] because both target biomolecular complexes rather than only single-chain protein structure. It belongs near [[cuEquivariance]] because the current docs call out cuEquivariance-accelerated kernels, and near [[TensorRT]] because the NIM includes a TensorRT backend for production inference.

## Connections
- [[NVIDIA-BioNeMo]] - BioNeMo includes OpenFold3 in its biomolecular NIM ecosystem.
- [[NVIDIA-NIM]] - delivered as an NVIDIA NIM microservice.
- [[NIM-for-MSA-Search]] - MSA and template search can provide sequence/template context for structure workflows.
- [[NIM-for-OpenFold2]] - earlier OpenFold NIM for monomer protein structure prediction.
- [[NIM-for-AlphaFold2]] - related AlphaFold2 NIM for single-chain protein structures.
- [[NIM-for-Boltz2]] - biomolecular structure and binding-affinity NIM for similar drug-discovery workflows.
- [[NIM-for-Evo-2]] - DNA foundation model NIM adjacent to sequence design and interpretation.
- [[NIM-for-ProteinMPNN]] - protein sequence design NIM adjacent to generated or predicted structures.
- [[NIM-for-DiffDock]] - molecular docking NIM adjacent to protein-ligand structure workflows.
- [[cuEquivariance]] - OpenFold3 docs call out cuEquivariance kernels in the optimized backend.
- [[TensorRT]] - production inference optimization backend named in the current docs.
- [[NVIDIA-Clara]] - healthcare/life-sciences umbrella platform.
- [[NVIDIA-AI-Enterprise]] - enterprise support and production deployment context.
- [[NGC]] - distribution path for NIM containers and model assets.

## Source Excerpts
- "all-atom 3D structure"
- "proteins, DNA, RNA, and ligands"
- "TensorRT optimization"
