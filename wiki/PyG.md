# PyG

**Type:** Technology
**Tags:** NVIDIA, PyG, PyTorch Geometric, PyTorch, graph neural networks, GNN, cuGraph, RAPIDS, NGC, CUDA, deep learning
**Related:** [[PyTorch]], [[cuGraph]], [[NVIDIA-DGL]], [[NVIDIA-Optimized-Frameworks]], [[NGC]], [[PhysicsNeMo]], [[cuDNN]], [[NCCL]], [[NVIDIA-DALI]], [[TensorRT]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/index.html, https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/overview.html, https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/rel-26-04.html, https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/running.html, https://docs.rapids.ai/api/cugraph/legacy/graph_support/pyg_support/, https://docs.nvidia.com/physicsnemo/latest/physicsnemo/examples/dgl_to_pyg_migration.html
**Last Updated:** 2026-04-30

## Summary
PyG is PyTorch Geometric, a graph neural network library built on [[PyTorch]] for learning on graph-structured and other irregular data. NVIDIA publishes optimized PyG containers through the [[NVIDIA-Optimized-Frameworks]] documentation and [[NGC]], and connects PyG to GPU graph workflows through [[cuGraph]] storage/sampling support and [[PhysicsNeMo]] GNN backend migration guidance.

## Detail

### NVIDIA context
NVIDIA's PyG release notes treat PyG as a first-class optimized-framework container family, adjacent to the NVIDIA PyTorch, TensorFlow, JAX, TensorRT, DGL, and CUDA Deep Learning container releases. The current docs describe NVIDIA PyG containers as built on top of the optimized PyTorch NGC container with stable PyG open source, CUDA libraries, profiling tools, and other NVIDIA acceleration components already packaged.

The current PyG 26.04 release page was last updated on 2026-04-29. It describes a container built on [[PyTorch]] 26.03 with Ubuntu 24.04, Python 3.12, CUDA 13.2.1, cuBLAS 13.4.0.1, cuDNN 9.21.0.82, NCCL 2.29.7, RAPIDS 26.04, [[TensorRT]] 10.16.1.11, [[NVIDIA-DALI]] 2.0.0, [[Nsight-Compute]], [[Nsight-Systems]], and [[Transformer-Engine]]. The same release page lists current GNN+LLM features and continued GNN+LLM optimization/stability work as key enhancements.

### What PyG does
PyG provides abstractions and operators for graph neural networks and geometric deep learning. NVIDIA's overview emphasizes mini-batch loaders for many small graphs and single large graphs, multi-GPU support, DataPipe support, benchmark datasets, GraphGym experiment management, transforms, and workflows for graphs, 3D meshes, and point clouds.

In NVIDIA software, PyG matters because it is no longer just an upstream Python package:
- It has a dedicated NVIDIA optimized container family.
- It is a target backend for [[PhysicsNeMo]] GNN models and examples.
- It connects to [[cuGraph]] through `cugraph_pyg` for graph storage and sampling.
- It sits on the same CUDA, [[cuDNN]], [[NCCL]], [[NVIDIA-DALI]], [[TensorRT]], and [[PyTorch]] runtime stack used by other NVIDIA deep learning workflows.

### cuGraph integration
The RAPIDS `cugraph_pyg` package enables PyG users to use cuGraph graph storage and sampling through PyG's GraphStore, FeatureStore, and Sampler interfaces. That makes [[cuGraph]] the NVIDIA GPU graph backend connection point for PyG workflows, especially when graph sampling and feature storage become bottlenecks for large GNN training.

### PhysicsNeMo backend direction
Current [[PhysicsNeMo]] documentation says PyG was added as a GNN backend in the 25.08 release and is recommended for existing and new GNN-based models. The migration guide says PhysicsNeMo uses DGL for `dgl.DGLGraph` inputs and PyG for `torch_geometric.data.Data` inputs, and that examples/models switch toward PyG by default starting with the 25.11 release.

Current [[NVIDIA-DGL]] release notes reinforce that direction: the DGL container line is deprecated after 25.08, and the 25.10 release notes state that no DGL container exists for that release.

### Container workflow
The NVIDIA docs place PyG containers in the `nvcr.io/nvidia` repository. Current running guidance uses the image pattern `nvcr.io/nvidia/pyg:<xx.xx>-py3` and Docker GPU runtime commands such as `docker run --gpus all ...`. For data-loader-heavy workloads, NVIDIA notes that shared memory may need to be increased with `--ipc=host` or `--shm-size`.

### Version note
The PyG 26.04 release page's container-content list includes `torch-geometric` 2.8.0 and `pyg-lib` 0.6.0, while its container-version table lists PyG 2.7.0 for the 26.04 image. Treat the live release page, NGC image metadata, and framework support matrix as the source of truth when exact package versions matter.

## Connections
- [[PyTorch]] - PyG is built on PyTorch and uses PyTorch tensors, modules, autograd, and CUDA execution.
- [[cuGraph]] - `cugraph_pyg` exposes cuGraph graph storage and sampling through PyG interfaces.
- [[NVIDIA-DGL]] - legacy NVIDIA GNN container line now redirected toward PyG for forward-looking accelerated GNN workflows.
- [[NVIDIA-Optimized-Frameworks]] - PyG is one of the NVIDIA optimized framework container families documented with release notes and support-matrix context.
- [[NGC]] - NVIDIA PyG containers are distributed through the NGC `nvcr.io/nvidia` container registry path.
- [[PhysicsNeMo]] - current PhysicsNeMo GNN guidance recommends PyG and documents migration from DGL-style graph objects.
- [[cuDNN]], [[NCCL]], [[NVIDIA-DALI]], and [[TensorRT]] - NVIDIA PyG containers bundle or sit near these acceleration libraries in the optimized framework stack.
- [[NVIDIA-CUDA]] - CUDA is the GPU runtime foundation underneath PyG container execution and NVIDIA-accelerated PyTorch operations.

## Source Excerpts
- NVIDIA's PyG overview describes PyG as a PyTorch-based library for writing and training graph neural networks on structured data.
- NVIDIA's PyG release notes state that NVIDIA PyG containers are built on optimized PyTorch NGC containers with stable PyG open source.
- The cuGraph docs describe `cugraph_pyg` as the bridge that gives PyG users cuGraph storage and sampling through PyG interfaces.
- The PhysicsNeMo migration guide says PyG is the recommended backend for current and new GNN-based models.

## Resources
- [PyG Release Notes](https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/index.html)
- [PyG Overview](https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/overview.html)
- [PyG Release 26.04](https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/rel-26-04.html)
- [Running PyG](https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/running.html)
- [cuGraph PyG Support](https://docs.rapids.ai/api/cugraph/legacy/graph_support/pyg_support/)
- [PhysicsNeMo DGL to PyG Migration](https://docs.nvidia.com/physicsnemo/latest/physicsnemo/examples/dgl_to_pyg_migration.html)
