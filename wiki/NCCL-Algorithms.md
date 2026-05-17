# NCCL Algorithms (Ring/Tree Allreduce)

**Type:** Concept
**Tags:** NVIDIA, NCCL, Ring Allreduce, Tree Allreduce, Collective Communications, Distributed Training, HPC
**Related:** [[NCCL]], [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-Spectrum-X]], [[NVLink]], [[Megatron-LM]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-10

## Summary
NCCL implements multiple collective communication algorithms — primarily ring allreduce and tree (double binary tree) allreduce — selecting the optimal algorithm based on detected system topology, message size, and number of participating GPUs. Ring allreduce delivers bandwidth-optimal performance for large messages by circulating data chunks around a logical ring of GPUs, while tree allreduce provides latency-optimal performance for small messages and large GPU counts. NCCL's algorithm selection is automatic and topology-aware, but can be overridden via environment variables.

## Detail

### Purpose
Different collective communication scenarios (large gradient tensors vs. small scalars, 8 GPUs vs. thousands) favor different algorithmic approaches. Understanding and controlling NCCL's algorithm selection allows ML engineers and HPC practitioners to optimize distributed training communication performance and diagnose performance regressions.

### Ring Allreduce
- Data divided into N chunks (N = number of GPUs)
- Reduce-scatter phase: each GPU sends its chunk to the next, accumulating partial sums over N-1 steps
- All-gather phase: each GPU broadcasts its final chunk to all others over N-1 steps
- Total data per GPU: 2 * (N-1)/N * message_size → approaches 2x bandwidth for large messages
- Optimal for large messages (gradient tensors in LLM training)
- Latency scales linearly with number of GPUs (more GPUs = more ring hops)

### Double Binary Tree Allreduce
- Overlay two complementary binary trees over the GPUs
- Reduce phase: tree leaves send data up toward root, accumulating partial reductions
- Broadcast phase: root broadcasts result down to all leaves
- Latency: O(log N) — much better than ring for large GPU counts and small messages
- Used by NCCL when ring latency would dominate
- Bandwidth utilization lower than ring for large messages

### SHARP (In-Network Computing)
- Offloads allreduce computation into InfiniBand switches (NVIDIA Quantum-2)
- Switch accumulates partial sums as data flows through fabric
- Effectively eliminates the bandwidth cost of allreduce on SHARP-capable networks
- NCCL uses SHARP automatically when InfiniBand fabric and SHARP version support it

### Algorithm Selection Logic
- Message size: ring preferred for large tensors; tree for small messages
- GPU count: tree scales better for very large clusters (>256 GPUs)
- Topology: NVLink-connected GPUs use intra-node ring; inter-node uses IB/RoCE
- Override: `NCCL_ALGO=Ring` or `NCCL_ALGO=Tree` environment variables

### Key Features
- Automatic topology-aware algorithm selection
- NVLink for intra-node: ring runs over NVLink at 900GB/s (H100) or 1.8TB/s (B200)
- InfiniBand for inter-node: NCCL multi-rail IB for bandwidth aggregation
- NCCL Graphs: CUDA Graph integration for captured communication for inference use
- NCCL Profiling: built-in timing hooks for communication performance analysis

### Use Cases
- Gradient all-reduce in data-parallel training (PyTorch DDP, Megatron-LM)
- All-gather for Tensor Parallel weight gathering in LLM training
- Reduce-scatter for ZeRO optimizer gradient sharding
- Broadcast for model weight initialization across GPUs

### Hardware Requirements / Compatibility
- NVLink (intra-node): V100, A100, H100, B100/B200
- InfiniBand (inter-node): ConnectX-6/7 + Quantum HDR/NDR switches
- RoCE (inter-node alternative): ConnectX-6/7 + Spectrum-4
- SHARP: Quantum-2 NDR switches with SHARP v3 support

### Language Bindings / APIs
- C API (ncclAllReduce, ncclReduceScatter, ncclAllGather)
- PyTorch dist.all_reduce() (wraps NCCL)
- MPI collective mapping to NCCL via NCCL-aware MPI

## Connections
- [[NCCL]] — NCCL is the library that implements these algorithms
- [[NVIDIA-Quantum-InfiniBand]] — SHARP in-network computing offloads NCCL allreduce into switches
- [[NVIDIA-Spectrum-X]] — Spectrum-X provides lossless Ethernet transport for NCCL RoCEv2 collectives
- [[NVLink]] — NVLink provides the intra-node bandwidth that makes ring allreduce efficient within DGX nodes
- [[Megatron-LM]] — Megatron-LM uses NCCL all-reduce, all-gather, and reduce-scatter for 3D parallelism

## Resources
- [NCCL GitHub](https://github.com/NVIDIA/nccl)
- [NCCL Documentation](https://docs.nvidia.com/deeplearning/nccl/)
- [NCCL Algorithms Deep Dive](https://developer.nvidia.com/blog/massively-scale-deep-learning-training-nccl-2-4/)
- [SHARP In-Network Computing](https://developer.nvidia.com/networking/sharp)
