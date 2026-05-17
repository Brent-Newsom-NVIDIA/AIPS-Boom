# NIM for GenMol

**Type:** Microservice
**Tags:** NVIDIA, NIM, BioNeMo, GenMol, fragment-based small molecule generation, SAFE, masked diffusion, drug discovery
**Related:** [[NVIDIA-BioNeMo]], [[NVIDIA-NIM]], [[NIM-for-MolMIM]], [[NIM-for-DiffDock]], [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]], [[NVIDIA-Clara]], [[NVIDIA-AI-Enterprise]], [[TensorRT]], [[Triton-Inference-Server]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/bionemo/genmol/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NIM for GenMol is NVIDIA's BioNeMo NIM for fragment-based small molecule generation. Current NVIDIA docs describe GenMol as a masked diffusion model trained on SAFE representations, allowing users to specify fixed fragments, attachment positions, fragment lengths, and partial or full generation schemas.

## Detail

### Purpose
GenMol supports molecular design workflows where chemists want to generate molecules from fragments rather than only sampling from a broad latent space. It is useful for scaffold decoration, motif extension, linker design, hit generation, and lead optimization.

### Current scope
- Uses SAFE-formatted molecular sequences for flexible fragment-level design.
- Performs masked-token generation with a Transformer/BERT-style network and iterative unmasking process.
- Supports de novo generation of valid molecular sequences at requested lengths.
- Supports conditioned generation, including motif extension, scaffold decoration, superstructure generation, and linker design.
- Supports molecule optimization workflows with oracle methods for hit generation and lead optimization.
- Exposes NIM-style HTTP/OpenAPI request patterns for self-hosted or hosted inference workflows.

### NVIDIA context
GenMol is the current Fragment-Based Small Molecule Generation NIM in the NVIDIA NIM index. It complements [[NIM-for-MolMIM]] for controlled small molecule generation and [[NIM-for-DiffDock]] for downstream protein-ligand pose prediction.

## Connections
- [[NVIDIA-BioNeMo]] - molecular generation and drug-discovery platform context.
- [[NIM-for-MolMIM]] - controlled small molecule generation NIM.
- [[NIM-for-DiffDock]] - docking/pose-prediction NIM for generated molecules.
- [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]] - atomistic relaxation NIM for molecular or materials candidates.
- [[NVIDIA-Clara]] - broader NVIDIA healthcare and life-sciences graph.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment and support context.
- [[TensorRT]], [[Triton-Inference-Server]], and [[NGC]] - optimized inference, serving, and container distribution context.

## Source Excerpts
- NVIDIA docs describe GenMol as a masked diffusion model trained on SAFE representations for fragment-based molecule generation.
- The current docs list de novo generation, conditioned generation, linker design, and oracle-guided optimization use cases.

## Resources
- [NVIDIA NIM for GenMol Overview](https://docs.nvidia.com/nim/bionemo/genmol/latest/overview.html)
