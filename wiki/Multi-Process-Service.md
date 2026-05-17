# Multi-Process Service (MPS)

**Type:** Concept
**Tags:** CUDA, NVIDIA, MPS, GPU sharing, multi-tenant, inference, concurrency, utilization, context sharing
**Related:** [[CUDA-Streams]], [[CUDA-Graphs]], [[NVIDIA-Hopper-Architecture]], [[Triton-Inference-Server]], [[NVIDIA-DCGM]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
CUDA Multi-Process Service (MPS) is a client-server architecture that enables multiple CUDA processes to share a single GPU context, allowing their kernels and memory copies to execute concurrently on the GPU's hardware. Without MPS, each CUDA process gets an exclusive GPU context, and kernels from different processes serialize on the GPU even if they use only a fraction of available SMs. MPS removes this serialization for cooperative workloads, improving GPU utilization and throughput for multi-process inference servers, batch job environments, and Kubernetes GPU sharing.

## Detail

### Purpose
A single CUDA process rarely saturates all SMs on a modern H100 or A100. In inference serving, many small models or requests leave significant SM capacity idle. Traditional multi-process CUDA (time-multiplexing) serializes at the context level: process A's kernel must complete before process B's kernel begins, even if both are tiny. MPS solves this by funneling all MPS clients through a single GPU context (the MPS server process) — their kernels are dispatched to the GPU together and can run on different SM partitions simultaneously, improving overall GPU utilization for multi-tenant workloads.

### Key Features
- **Single Shared Context:** The MPS control daemon and server process maintain one GPU context; all MPS client processes submit work through it via IPC
- **Concurrent Kernel Execution:** Kernels from different MPS clients can execute simultaneously on different SM partitions within the same GPU — no context-switch serialization
- **Reduced Context Switch Overhead:** Traditional multi-process GPU switching requires full context save/restore (100s of µs); MPS eliminates this — client switches are sub-microsecond IPC transitions
- **Memory Isolation:** Each MPS client has isolated virtual address space; a fault in one client does not corrupt another's memory (GPU page-level isolation)
- **Active Thread Percentage:** MPS allows limiting each client's active thread (SM) utilization: `CUDA_MPS_ACTIVE_THREAD_PERCENTAGE=50` limits a client to 50% of SMs — enables fair multi-tenant resource division
- **Hopper Confidential MPS:** On H100, MPS clients can be hardware-isolated with Confidential Computing — each MIG instance or MPS client gets hardware memory encryption, preventing cross-client data leakage

**MPS vs MIG:**
- MPS is software-context-sharing; memory is not hardware-partitioned (clients share GPU memory space)
- MIG (Multi-Instance GPU) provides hard hardware partitioning with dedicated SM/HBM/L2 per instance; stronger isolation but fixed allocation
- MPS gives more flexible, finer-grained sharing but weaker fault isolation than MIG

### Use Cases
- **Multi-model Inference Serving:** Running 4–8 smaller models simultaneously on a single GPU to maximize utilization; each model runs as an MPS client; their inference kernels execute concurrently
- **Batch Job Environments (HPC):** Multiple MPI ranks sharing one GPU in HPC clusters where GPU-per-rank allocation wastes resources on memory-bound problems
- **Kubernetes GPU Sharing:** NVIDIA GPU Operator with MPS support enables multiple pods to share a single GPU via CUDA MPS, with configurable resource limits per pod
- **CI/CD and Testing:** Running many small GPU test processes simultaneously for faster test suite execution
- **Triton Inference Server:** Multi-model Triton deployments can use MPS to improve concurrent throughput for small models

### Hardware Requirements / Compatibility
- **Compute Capability:** sm_35 (Kepler) and newer for basic MPS; sm_70 (Volta) and newer for improved error isolation and async compute features
- **H100 Confidential MPS:** Requires H100 (sm_90) and CUDA 12.0+ for hardware memory encryption per MPS client
- **OS:** Linux only (no Windows support); requires CUDA driver mode set to exclusive process (`nvidia-smi -c EXCLUSIVE_PROCESS` for legacy; or compute mode managed by MPS daemon)
- **CUDA:** 5.0+ for basic MPS; CUDA 11.x+ recommended

### Language Bindings / APIs
- **Setup (CLI):** 
  - `nvidia-cuda-mps-control -d` — start MPS daemon
  - `echo start | nvidia-cuda-mps-control` — start MPS server
  - `CUDA_MPS_ACTIVE_THREAD_PERCENTAGE=50` env variable — limit client SM usage
  - `nvidia-smi -c EXCLUSIVE_PROCESS` — set GPU compute mode (required for some configs)
- **CUDA Application Code:** Standard CUDA code — no changes required; MPS is transparent to client applications
- **NVML API:** Query MPS status with `nvmlDeviceGetComputeRunningProcesses`; control via MPS daemon
- **Kubernetes:** NVIDIA GPU Operator MPS mode via device plugin configuration

## Connections
- [[CUDA-Streams]] — Each MPS client uses standard CUDA streams; MPS routes all client stream operations through the shared GPU context
- [[CUDA-Graphs]] — CUDA Graphs from different MPS clients can execute concurrently on the GPU when dispatched from separate streams
- [[NVIDIA-Hopper-Architecture]] — H100 adds hardware memory encryption for MPS clients (Confidential MPS); MIG + MPS can be combined on H100
- [[Triton-Inference-Server]] — Triton uses MPS to improve concurrent throughput when serving multiple small models on a single GPU
- [[NVIDIA-DCGM]] — DCGM monitors MPS-enabled GPU environments; provides per-process GPU utilization metrics

## Resources
- [CUDA MPS Documentation](https://docs.nvidia.com/deploy/mps/index.html)
- [MPS Best Practices](https://docs.nvidia.com/deploy/mps/index.html#topic_5_1_2)
- [Multi-Instance GPU (MIG) User Guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/index.html)
- [GPU Operator MPS Support](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/gpu-sharing.html)
