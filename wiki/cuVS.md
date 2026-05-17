# cuVS

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Vector Search, Approximate Nearest Neighbor, RAPIDS, AI, Open Source
**Related:** [[NVIDIA-RAPIDS]], [[cuDF]], [[cuML]], [[cuGraph]], [[NVIDIA-Merlin]], [[TensorRT]], [[cuBLAS]], [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], [[NeMo-Retriever-Reranking-NIM]], [[NVIDIA-AI-Data-Platform]]
**Sources:** NVIDIA official documentation (RAPIDS), https://www.nvidia.com/en-us/data-center/ai-data-platform/
**Last Updated:** 2026-04-30

## Summary
cuVS is NVIDIA's GPU-accelerated vector search library providing world-class performance for approximate nearest neighbor (ANN) search via its CAGRA algorithm. Part of [[NVIDIA-RAPIDS]], it accelerates vector search operations critical to retrieval-augmented generation (RAG), recommendation systems, and semantic search at scale. It supports Python, C++, C, and Rust APIs.

## Detail

### Purpose
Vector search (finding the most similar vectors in a large database) is foundational to modern AI applications — RAG pipelines, recommendation systems, semantic search, and image retrieval all depend on fast ANN search. cuVS accelerates this on GPU, enabling orders-of-magnitude faster indexing and querying compared to CPU-based ANN libraries like FAISS or HNSW.

### Key Features
- World-class ANN performance via the CAGRA graph-based algorithm
- GPU-accelerated index build and query phases
- Multiple index types: CAGRA (graph-based), IVF-Flat, IVF-PQ, brute-force
- Multi-GPU support for large-scale vector databases
- Integration with popular ANN benchmarks (ANN-Benchmarks)
- Python, C++, C, and Rust APIs for broad ecosystem compatibility
- cuDF integration for DataFrame-native vector search pipelines
- Used as the backend for several vector database products
- Referenced in current [[NVIDIA-AI-Data-Platform]] material as the GPU-accelerated vector search and data clustering layer for semantic search workloads

### Use Cases
- Retrieval-Augmented Generation (RAG) for LLMs
- Semantic search over embedding databases
- Recommendation systems (item-to-item, user-to-item similarity)
- Image and video similarity search
- Drug discovery (molecular similarity search)
- Genomics (sequence similarity)
- Fraud detection via behavioral embedding similarity

### Hardware Requirements
- NVIDIA GPU, Volta or newer (Ampere/Hopper recommended for peak performance)
- CUDA 11.x or 12.x
- Linux (primary supported OS)
- Part of RAPIDS ecosystem

### Language Bindings
- Python (primary)
- C++ 
- C
- Rust

## Connections
- [[NVIDIA-RAPIDS]] — cuVS is the vector search library in NVIDIA's CUDA-X data science stack
- [[cuDF]] — cuVS integrates with cuDF for end-to-end GPU vector search pipelines
- [[cuML]] — cuML uses cuVS for K-nearest neighbors (KNN) operations
- [[cuGraph]] — cuVS and cuGraph are both used in recommendation and retrieval pipelines
- [[NVIDIA-Merlin]] — recommender systems often pair vector retrieval/search with ranking and feature pipelines
- [[TensorRT]] — TensorRT generates embeddings that cuVS then indexes and searches
- [[cuBLAS]] — cuVS uses BLAS routines internally for distance computation
- [[NeMo-Retriever]] — retrieval stacks use vector search and indexing to connect enterprise data to agents
- [[NeMo-Retriever-Embedding-NIM]] — produces embeddings that vector search systems index and query.
- [[NeMo-Retriever-Reranking-NIM]] — reranks candidates returned from vector or hybrid retrieval.
- [[NVIDIA-AI-Data-Platform]] — AI Data Platform uses cuVS in its accelerated data retrieval and semantic search story

## Resources
- [Official RAPIDS Page](https://developer.nvidia.com/rapids)
- [cuVS GitHub](https://github.com/rapidsai/cuvs)
- [RAPIDS Documentation](https://docs.rapids.ai/api/cuvs/)
