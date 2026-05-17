# NIM for DiffDock

**Type:** Microservice
**Tags:** NVIDIA, NIM, BioNeMo, DiffDock, scalable molecular docking, protein-ligand docking, pose prediction, drug discovery, diffusion model
**Related:** [[NVIDIA-BioNeMo]], [[NVIDIA-NIM]], [[NIM-for-MolMIM]], [[NIM-for-GenMol]], [[NIM-for-Boltz2]], [[NIM-for-OpenFold3]], [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]], [[cuEquivariance]], [[TensorRT]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/bionemo/diffdock/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NIM for DiffDock is NVIDIA's BioNeMo NIM for scalable molecular docking and protein-ligand pose prediction. Current NVIDIA docs describe DiffDock as a generative model that predicts the three-dimensional structure of a protein-ligand complex and ranks sampled poses with confidence estimates.

## Detail

### Purpose
DiffDock supports drug-discovery workflows that need to predict how a small molecule ligand binds to a protein target. It can sit downstream of molecular generation and upstream of ranking, refinement, or simulation.

### Current scope
- Takes protein and molecule 3D structures as input.
- Does not require prior binding-pocket information.
- Uses an equivariant geometric/diffusion approach where ligand position, orientation, and torsion angles can change during denoising.
- Outputs multiple sampled protein-ligand poses with confidence estimates.
- Current docs describe training data from PLINDER and SAIR-derived protein-ligand structure/activity sources.
- Current docs position DiffDock for accurate, computationally efficient docking in AI drug discovery pipelines.

### NVIDIA context
DiffDock is the current Scalable Molecular Docking NIM in the NVIDIA NIM index. It connects molecular generation NIMs such as [[NIM-for-MolMIM]] and [[NIM-for-GenMol]] to structure/affinity workflows such as [[NIM-for-Boltz2]] and atomistic refinement with ALCHEMI NIMs.

## Connections
- [[NIM-for-MolMIM]] and [[NIM-for-GenMol]] - candidate molecule generation NIMs that can feed docking workflows.
- [[NIM-for-Boltz2]] and [[NIM-for-OpenFold3]] - biomolecular complex prediction NIMs adjacent to protein-ligand modeling.
- [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]] - atomistic relaxation NIM for candidate structures.
- [[cuEquivariance]] - acceleration context for equivariant/geometric models in molecular docking.
- [[NVIDIA-BioNeMo]] and [[NVIDIA-Clara]] - life-sciences and drug-discovery platform context.
- [[NVIDIA-AI-Enterprise]], [[TensorRT]], and [[NGC]] - production deployment, optimization, and distribution context.

## Source Excerpts
- NVIDIA docs describe DiffDock as predicting protein-ligand complex structures for molecular docking or pose prediction.
- The current docs state that DiffDock samples poses and ranks them through a confidence model.

## Resources
- [NVIDIA NIM for DiffDock Overview](https://docs.nvidia.com/nim/bionemo/diffdock/latest/overview.html)
