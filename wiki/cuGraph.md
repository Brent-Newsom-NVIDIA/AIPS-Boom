# cuGraph

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Graph Analytics, RAPIDS, Python, Open Source, NetworkX, PyG, GNN
**Related:** [[NVIDIA-RAPIDS]], [[cuDF]], [[cuML]], [[cuVS]], [[PyG]], [[NVIDIA-DGL]], [[NVIDIA-Merlin]], [[Thrust]], [[NCCL]]
**Sources:** NVIDIA official documentation (RAPIDS), https://docs.rapids.ai/api/cugraph/legacy/graph_support/pyg_support/
**Last Updated:** 2026-04-30

## Summary
cuGraph is a GPU-accelerated graph analytics library providing drop-in replacements for NetworkX, delivering up to 48x speedups on NVIDIA GPUs. Part of [[NVIDIA-RAPIDS]], it enables processing of graphs with millions of nodes on a single GPU without specialized software, and supports distributed multi-GPU graph analytics for billion-edge graphs.

## Detail

### Purpose
Graph algorithms (PageRank, community detection, shortest paths, betweenness centrality) are computationally intensive and slow on CPUs at large scale. cuGraph accelerates these algorithms on the GPU by exploiting massive parallelism, enabling real-time graph analytics on large networks that would otherwise require large CPU clusters.

### Key Features
- 48x faster NetworkX with drop-in accelerator mode (nx-cugraph)
- GPU-accelerated graph algorithms: PageRank, BFS, SSSP, Louvain, spectral clustering, betweenness centrality, triangle counting, and more
- Processes millions of nodes on a single GPU
- cuGraph.nx: zero-code-change NetworkX acceleration
- Multi-GPU and distributed graph analytics via Dask-cuGraph
- cuDF integration — operates natively on GPU DataFrames for edge/node tables
- Graph Neural Network (GNN) support via cuGraph-DGL and `cugraph_pyg`
- `cugraph_pyg` exposes cuGraph graph storage and sampling through [[PyG]] GraphStore, FeatureStore, and Sampler interfaces
- Python and C++ APIs

### Use Cases
- Social network analysis and community detection
- Fraud detection via graph-based anomaly detection
- Recommendation systems using graph algorithms
- Cybersecurity threat analysis (lateral movement detection)
- Supply chain network optimization
- Knowledge graph analytics
- Graph Neural Network training and inference

### Hardware Requirements
- NVIDIA GPU, Pascal or newer (Volta+ recommended)
- CUDA 11.x or 12.x
- Linux (primary supported OS)
- Part of RAPIDS ecosystem

### Language Bindings
- Python (primary API, NetworkX compatible)
- C++ (underlying libcugraph)

## Connections
- [[NVIDIA-RAPIDS]] — cuGraph is the graph analytics library in NVIDIA's CUDA-X data science stack
- [[cuDF]] — cuGraph operates on cuDF DataFrames for edge and node data
- [[cuML]] — cuML and cuGraph share graph-based clustering algorithms (Louvain, spectral)
- [[cuVS]] — cuVS and cuGraph are both used in recommendation and search pipelines
- [[PyG]] — `cugraph_pyg` connects cuGraph graph storage and sampling to PyTorch Geometric workflows
- [[NVIDIA-DGL]] — legacy NVIDIA DGL containers bundled RAPIDS/WholeGraph components and now point users toward PyG
- [[NVIDIA-Merlin]] — recommender-system workflows can combine graph analytics, vector search, and Merlin ranking/retrieval models
- [[Thrust]] — cuGraph uses Thrust for parallel primitives internally
- [[NCCL]] — distributed multi-GPU cuGraph uses NCCL for inter-GPU communication

## Resources
- [Official RAPIDS Page](https://developer.nvidia.com/rapids)
- [cuGraph GitHub](https://github.com/rapidsai/cugraph)
- [RAPIDS Documentation](https://docs.rapids.ai/api/cugraph/)
- [cuGraph PyG Support](https://docs.rapids.ai/api/cugraph/legacy/graph_support/pyg_support/)
