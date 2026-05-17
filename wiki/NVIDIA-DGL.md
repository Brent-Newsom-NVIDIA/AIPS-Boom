# NVIDIA DGL

**Type:** Technology
**Tags:** NVIDIA, DGL, graph neural networks, GNN, PyTorch, PyG, RAPIDS, WholeGraph, NVSHMEM, optimized frameworks, NGC
**Related:** [[PyG]], [[PyTorch]], [[cuGraph]], [[NVIDIA-RAPIDS]], [[NVIDIA-Optimized-Frameworks]], [[NGC]], [[PhysicsNeMo]], [[NVSHMEM]], [[NCCL]]
**Sources:** https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/index.html, https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/overview.html, https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/rel-25-08.html, https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/rel-25-10.html, https://docs.nvidia.com/physicsnemo/latest/physicsnemo/examples/dgl_to_pyg_migration.html
**Last Updated:** 2026-04-30

## Summary
NVIDIA DGL is NVIDIA's optimized container/release-notes surface for the Deep Graph Library in GPU graph neural network workflows. It is now primarily important as a legacy and migration topic: NVIDIA's current DGL release notes say there is no DGL container in release 25.10, and the 25.08 notes warn that DGL containers will no longer be supported after 25.08, with NVIDIA recommending migration to [[PyG]].

## Detail

### NVIDIA context
NVIDIA DGL containers were built on top of optimized deep learning framework containers and packaged DGL, [[PyTorch]], CUDA libraries, RAPIDS components, profiling tools, and related GNN acceleration pieces. NVIDIA's overview describes DGL as a framework-agnostic Python package for deep learning on graphs and positions the container as an integrated GPU environment for large and heterogeneous graph neural network work.

### Current status
The key current-state detail is deprecation. NVIDIA's 25.08 DGL release page states that DGL containers stop being supported after the 25.08 release and points users to the NVIDIA [[PyG]] container for continued accelerated GNN workloads. The 25.10 DGL page says no DGL container exists for that release.

This page should therefore answer old DGL questions without making DGL look like the forward path. For new GNN work in NVIDIA's current stack, route readers toward [[PyG]], [[cuGraph]], [[PyTorch]], and the [[PhysicsNeMo]] DGL-to-PyG migration guidance.

### What the latest supported DGL container contained
The 25.08 DGL page describes a container containing DGL 2.4, RAPIDS 25.06, and WholeGraph 24.08 with NVSHMEM support. It also highlights NVSHMEM support for distributed feature scatter and a synthetic graph generation tool for arbitrary-size graphs with node and edge tabular features.

Earlier DGL release notes show the role this container family played: integrated CUDA, cuDNN, NCCL, TensorRT, DALI, HPC-X, OpenMPI, GDRCopy, and related tooling for accelerated graph neural network development. Those historical details are useful for compatibility lookup, but new wiki coverage should not expand DGL into multiple version pages.

## Connections
- [[PyG]] - NVIDIA's recommended forward path for accelerated graph neural network workloads.
- [[PyTorch]] - DGL containers were built on optimized PyTorch containers, and PyG uses PyTorch directly.
- [[cuGraph]] - RAPIDS graph backend and PyG storage/sampling integration point.
- [[NVIDIA-RAPIDS]] - DGL 25.08 bundled RAPIDS and WholeGraph-related graph acceleration pieces.
- [[NVIDIA-Optimized-Frameworks]] - parent documentation surface for NVIDIA framework containers and release notes.
- [[NGC]] - container distribution path for NVIDIA optimized framework images.
- [[PhysicsNeMo]] - current PhysicsNeMo docs document migration from DGL graph objects to PyG graph objects.
- [[NVSHMEM]] and [[NCCL]] - multi-GPU communication libraries relevant to distributed graph workloads.

## Source Excerpts
- NVIDIA DGL overview describes DGL as a Python package for deep learning on graphs and the container as a GPU-accelerated integrated environment.
- DGL 25.08 notes mark the DGL container line as ending after 25.08 and recommend the NVIDIA PyG container for continued GNN workloads.
- DGL 25.10 notes state that no DGL container is available for that DLFW release.

## Resources
- [DGL Release Notes](https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/index.html)
- [DGL Overview](https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/overview.html)
- [DGL Release 25.08](https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/rel-25-08.html)
- [DGL Release 25.10](https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/rel-25-10.html)
- [PhysicsNeMo DGL to PyG Migration](https://docs.nvidia.com/physicsnemo/latest/physicsnemo/examples/dgl_to_pyg_migration.html)
