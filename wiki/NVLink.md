# NVLink

**Type:** Technology
**Tags:** NVIDIA, interconnect, multi-GPU, bandwidth, NVSwitch, data center, GPU communication, scale-up
**Related:** [[NVIDIA-Hopper-Architecture]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Vera-Rubin]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-DGX]], [[NVIDIA-Grace-CPU]], [[NVIDIA-Vera-CPU]], [[NCCL]], [[GPUDirect-RDMA]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; updated from https://www.nvidia.com/en-us/data-center/gb300-nvl72/, https://www.nvidia.com/en-us/data-center/technologies/rubin/)
**Last Updated:** 2026-04-29

## Summary
NVLink is NVIDIA's proprietary high-speed, point-to-point GPU interconnect technology that provides dramatically higher bandwidth for GPU-to-GPU and GPU-to-CPU communication than PCIe. NVLink enables multi-GPU systems to function as a single high-bandwidth memory pool — critical for tensor parallelism in LLM training, all-reduce operations in distributed training, and large-model inference. Paired with NVSwitch (a fully non-blocking crossbar switch chip), NVLink scales to connect all GPUs in a DGX node with all-to-all bandwidth, making the entire GPU cluster's memory appear as a unified fast memory space.

## Detail

### Purpose
PCIe Gen5 x16 provides ~64 GB/s bidirectional bandwidth for CPU-GPU communication — insufficient for large-scale multi-GPU AI workloads that require tight coupling. A Transformer model tensor-parallel across 8 GPUs requires all-reduce operations where each GPU exchanges gigabytes of activations with every other GPU after each layer. Over PCIe, this is the bottleneck; over NVLink, it is not. NVLink solves the GPU-to-GPU bandwidth problem at the node level; InfiniBand solves it at the cluster level. Together, they enable scaling from 1 GPU to thousands.

### Key Features

**NVLink Generations:**
| Generation | Year | Per-Link BW | Total GPU BW | Used In |
|---|---|---|---|---|
| NVLink 1 | 2016 | 40 GB/s | 160 GB/s | P100 |
| NVLink 2 | 2017 | 50 GB/s | 300 GB/s | V100 |
| NVLink 3 | 2020 | 50 GB/s | 600 GB/s | A100 |
| NVLink 4 | 2022 | 50 GB/s | 900 GB/s | H100 |
| NVLink 5 | 2024 | 100 GB/s | 1800 GB/s | B200 |
| NVLink 6 | Vera Rubin generation | Public NVIDIA Vera Rubin material | Platform-level | Vera Rubin NVL144 / Rubin platform |

- **NVLink-C2C (Chip-to-Chip):** Variant used between Grace CPU and Hopper/Blackwell GPU in superchips (GH200, GB200); provides cache-coherent unified memory addressing; 900 GB/s

**NVSwitch:**
- Hardware crossbar switch chip connecting all GPUs in a DGX node in a fully non-blocking all-to-all topology
- NVSwitch 1 (Volta, 2018): 900 GB/s switching; 6 NVSwitches in DGX-2
- NVSwitch 2 (Ampere, 2020): 600 GB/s per GPU; 12 NVSwitches in DGX A100
- NVSwitch 3 (Hopper, 2022): 900 GB/s per GPU; 72 NVSwitches in DGX H100 provide 7.2 TB/s bisection bandwidth
- NVSwitch 4 (Blackwell, 2024): 1.8 TB/s per GPU in GB200 NVL72; aggregate 130+ TB/s bisection bandwidth

**Key Properties:**
- **Cache Coherency:** With NVLink-C2C (Grace Hopper/Blackwell), CPU and GPU share a coherent cache hierarchy; GPUs can peer-access each other's HBM coherently
- **Peer-to-Peer Memory Access:** GPUs connected via NVLink can read/write each other's memory directly without CPU involvement (`cudaMemcpyPeerAsync`)
- **Transparent NCCL Integration:** NCCL auto-detects NVLink topology and uses direct NVLink paths for all-reduce, all-gather, and reduce-scatter operations
- **Atomic Operations:** NVLink supports GPU-to-GPU atomic memory operations for fine-grained synchronization

### Use Cases
- **Tensor Parallelism (LLM Training/Inference):** Split attention heads or MLP weight matrices across GPUs; each GPU exchanges activations over NVLink after every layer — requires all-to-all bandwidth
- **Pipeline Parallelism:** Layers distributed across GPUs; activations flow from GPU 0 → 1 → 2 → 3 → ... → N in sequence; NVLink provides the low-latency inter-GPU pipe
- **Large-Model Inference:** H200 with 141 GB × 8 GPUs in NVLink fabric = 1.1 TB unified pool for serving 405B-parameter models with tensor parallelism
- **NCCL Collectives:** AllReduce for data-parallel gradient synchronization; Ring-AllReduce and Tree-AllReduce both leverage NVLink
- **GPU Peer Memory Access:** Direct GPU-to-GPU memory reads for producer-consumer patterns without routing through CPU

### Hardware Requirements / Compatibility
- **NVLink 5:** B200/B100 SXM; GB200 NVL72 rack; Blackwell DGX systems
- **NVLink 4:** H100/H200 SXM; DGX H100/H200; HGX H100 8-GPU baseboard
- **NVLink 3:** A100 SXM; DGX A100; HGX A100
- **NVLink 2:** V100 SXM; DGX-1 V100, DGX-2
- **PCIe variants:** H100/A100 PCIe cards do NOT have NVLink to other GPUs (NVLink only on SXM form factor)

### Language Bindings / APIs
- **CUDA Peer APIs:** `cudaDeviceEnablePeerAccess`, `cudaMemcpyPeerAsync` for explicit peer memory operations
- **NCCL:** Transparently uses NVLink; `ncclAllReduce`, `ncclAllGather` — no code changes needed from application side
- **NVML:** `nvmlDeviceGetNvLinkState`, `nvmlDeviceGetNvLinkCapability` for querying NVLink link status and bandwidth
- **`nvidia-smi nvlink`:** Command-line tool for NVLink status and throughput counters

## Connections
- [[NVIDIA-Hopper-Architecture]] — NVLink 4 is integral to H100; NVSwitch 3 enables DGX H100 all-to-all fabric
- [[NVIDIA-Blackwell-Architecture]] — NVLink 5 and NVSwitch 4 define the GB200 NVL72 rack-scale interconnect
- [[NVIDIA-Vera-Rubin]] — Vera Rubin introduces NVLink 6 platform direction.
- [[NVIDIA-GB300-NVL72]] — Blackwell Ultra NVL72 system continues rack-scale NVLink designs.
- [[NVIDIA-DGX]] — All DGX systems since DGX-1 use NVLink + NVSwitch for GPU fabric
- [[NVIDIA-Grace-CPU]] — NVLink-C2C connects Grace CPU to Hopper/Blackwell GPU with coherent bandwidth
- [[NVIDIA-Vera-CPU]] — Vera CPU uses NVLink-C2C connectivity in Vera Rubin systems.
- [[NCCL]] — NCCL is the primary CUDA communication library that exploits NVLink for GPU collectives
- [[GPUDirect-RDMA]] — GPUDirect RDMA handles inter-node (InfiniBand) transfers; NVLink handles intra-node; both used together in multi-node distributed training

## Resources
- [NVLink Product Page](https://www.nvidia.com/en-us/data-center/nvlink/)
- [NVLink and NVSwitch Whitepaper](https://www.nvidia.com/en-us/data-center/nvlink-and-nvswitch/)
- [CUDA Peer-to-Peer Memory Access](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#peer-to-peer-memory-access)
- [NCCL Documentation](https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/index.html)
