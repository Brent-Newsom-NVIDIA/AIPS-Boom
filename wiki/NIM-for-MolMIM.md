# NIM for MolMIM

**Type:** Microservice
**Tags:** NVIDIA, NIM, BioNeMo, MolMIM, controlled small molecule generation, drug discovery, SMILES, molecular generation
**Related:** [[NVIDIA-BioNeMo]], [[NVIDIA-NIM]], [[NIM-for-GenMol]], [[NIM-for-DiffDock]], [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[TensorRT]], [[Triton-Inference-Server]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/bionemo/molmim/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NIM for MolMIM is NVIDIA's BioNeMo NIM for controlled small molecule generation. Current NVIDIA docs describe MolMIM as a probabilistic autoencoder trained with Mutual Information Machine learning that represents variable-length SMILES strings in a fixed-length latent space and samples valid molecules from that space.

## Detail

### Purpose
MolMIM supports small-molecule drug discovery workflows where researchers need to embed, manipulate, decode, sample, or optimize molecules while preserving valid SMILES outputs and useful latent-space structure.

### Current scope
- Learns an informative, clustered latent representation for molecules.
- Accepts SMILES-style molecular inputs and can return embeddings or hidden-state latent codes.
- Decodes hidden-state representations back into SMILES sequences.
- Samples valid molecules around a seed molecule within a scaled latent-space radius.
- Supports guided generation and molecular optimization with CMA-ES-style sampling against target properties or constraints.
- Can be chained with other BioNeMo NIMs for in silico drug discovery pipelines.

### NVIDIA context
MolMIM is the controlled small-molecule generation NIM in the current NVIDIA NIM index. It sits near [[NIM-for-GenMol]] for fragment-based generation and [[NIM-for-DiffDock]] for docking/pose prediction after candidate molecules are generated.

## Connections
- [[NVIDIA-BioNeMo]] - BioNeMo platform context for molecular generation and drug discovery.
- [[NIM-for-GenMol]] - fragment-based molecular generation NIM using SAFE representations.
- [[NIM-for-DiffDock]] - docking NIM for protein-ligand pose prediction after candidate generation.
- [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]] - simulation NIM for downstream molecular dynamics workflows.
- [[NVIDIA-Clara]] - broader healthcare and life-sciences umbrella.
- [[NVIDIA-AI-Enterprise]] - enterprise support and deployment context.
- [[TensorRT]], [[Triton-Inference-Server]], and [[NGC]] - optimization, serving, and distribution context.

## Source Excerpts
- NVIDIA docs describe MolMIM as learning a clustered latent space for small molecule drug development.
- The current docs list embedding, hidden-state retrieval, decode, sample, and generate capabilities.

## Resources
- [NVIDIA NIM for MolMIM Overview](https://docs.nvidia.com/nim/bionemo/molmim/latest/overview.html)
