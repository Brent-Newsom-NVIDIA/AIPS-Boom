# NVIDIA CMX

**Type:** Platform
**Tags:** NVIDIA, CMX, context memory storage, KV cache, long-context inference, BlueField-4, DOCA, Spectrum-X, Dynamo
**Related:** [[NVIDIA-STX]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-Vera-Rubin-POD]], [[NVIDIA-Groq-3-LPX]], [[NVIDIA-Spectrum-6-SPX]], [[NVIDIA-Dynamo]], [[Dynamo-KV-Block-Manager]], [[Dynamo-KV-Cache-Aware-Routing]], [[Dynamo-Disaggregated-Serving]], [[NIXL]], [[DOCA-SNAP]], [[GPU-Direct-Storage]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-BlueField-4]], [[NVIDIA-ConnectX-9]], [[NVIDIA-DOCA]], [[NVIDIA-Spectrum-X]], [[NVIDIA-NIM]]
**Sources:** https://www.nvidia.com/en-us/data-center/ai-storage/cmx/, https://www.nvidia.com/en-us/data-center/ai-storage/stx/, https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/, https://docs.nvidia.com/dynamo/latest/components/kvbm, https://docs.nvidia.com/dynamo/latest/user-guides/kv-cache-aware-routing
**Last Updated:** 2026-05-09

## Summary
NVIDIA CMX is NVIDIA's context memory storage platform for long-context, multi-turn, and agentic AI inference. It uses BlueField-4, DOCA, Spectrum-X Ethernet, and Dynamo-oriented serving concepts to add a pod-level context tier for ephemeral key-value cache and context sharing across rack-scale inference systems.

## Detail

### Purpose
Long-context and multi-agent inference can stall GPUs when systems repeatedly recompute or move large key-value cache state through general-purpose storage paths. CMX introduces an AI-native context tier that extends GPU capacity, stores reusable KV cache, and gives inference systems a high-bandwidth path for shared context.

### Core components
- BlueField-4-class storage processors for NVMe management, storage services, data integrity, encryption, and infrastructure offload.
- DOCA Memos, described by NVIDIA as a CMX-optimized SDK for managing and sharing KV cache through simple key-value APIs.
- [[NVIDIA-Spectrum-X]] Ethernet for low-latency, high-bandwidth RDMA access to context memory across the pod.
- [[NVIDIA-Dynamo]] integration so serving can route requests with awareness of where relevant KV cache already resides.
- [[Dynamo-KV-Block-Manager]] and [[Dynamo-KV-Cache-Aware-Routing]] are the Dynamo-side query points for KV block memory and cache-aware placement.

### Benefits
CMX is positioned to reclaim data center power from traditional storage, improve GPU utilization, reduce stalls, enable pod-wide KV-cache sharing, extend context capacity, reduce time to first token, and increase tokens per second for multi-turn agentic inference.

### Vera Rubin POD role
The [[NVIDIA-Vera-Rubin-POD]] material names the BlueField-4 STX rack as the host for CMX context memory storage. In that architecture, CMX works with [[NVIDIA-Groq-3-LPX]], Rubin GPUs, [[NVIDIA-Dynamo]], and [[NVIDIA-Spectrum-6-SPX]] networking to make long-context and multi-turn inference more efficient across the POD.

### NVIDIA context
CMX is the context-memory building block inside [[NVIDIA-STX]] and [[NVIDIA-AI-Data-Platform]] direction. It connects storage, networking, and inference serving, making it relevant to [[NVIDIA-Dynamo]], [[NVIDIA-NIM]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-DOCA]], and [[NVIDIA-Spectrum-X]].

## Connections
- [[NVIDIA-STX]] - STX is the broader modular AI storage reference architecture that includes CMX context memory.
- [[NVIDIA-AI-Data-Platform]] - AI Data Platform uses storage and context infrastructure such as CMX to support agentic workloads.
- [[NVIDIA-Vera-Rubin-POD]] - POD-scale architecture where BlueField-4 STX racks host CMX context memory.
- [[NVIDIA-Groq-3-LPX]] - low-latency inference accelerator that benefits from context memory and Dynamo-aware serving.
- [[NVIDIA-Spectrum-6-SPX]] - networking rack that carries CMX/context traffic across Vera Rubin POD systems.
- [[NVIDIA-Dynamo]] - Dynamo is the serving layer NVIDIA describes as making CMX context storage usable across the pod.
- [[Dynamo-KV-Block-Manager]] - Dynamo component closest to CMX-style KV cache memory tiering.
- [[Dynamo-KV-Cache-Aware-Routing]] - routes requests where reusable context or KV cache can reduce recomputation.
- [[Dynamo-Disaggregated-Serving]] - prefill/decode split increases the need for shared context and cache movement.
- [[NIXL]] - transfer layer that underpins Dynamo KV cache movement between GPU, host, network, and storage tiers.
- [[DOCA-SNAP]] - SNAP is adjacent to BlueField-based storage virtualization and NVMe services.
- [[GPU-Direct-Storage]] - direct GPU storage paths complement CMX context and KV-cache movement.
- [[NVIDIA-BlueField-DPU]] - BlueField provides storage, networking, integrity, encryption, and offload capabilities.
- [[NVIDIA-BlueField-4]] - CMX public material names BlueField-4 as the context memory storage processor.
- [[NVIDIA-ConnectX-9]] - high-bandwidth networking direction for AI data and context movement.
- [[NVIDIA-DOCA]] - DOCA and DOCA Memos provide the software surface for BlueField-accelerated context memory.
- [[NVIDIA-Spectrum-X]] - Ethernet fabric for low-latency RDMA access to context storage.
- [[NVIDIA-NIM]] - NIM inference workloads can benefit from faster context and KV-cache handling in large deployments.

## Source Excerpts
- NVIDIA's CMX page describes a BlueField-4-powered context memory tier for long-context, multi-turn, and agentic inference.
- The CMX page connects BlueField-4, DOCA Memos, Spectrum-X Ethernet, and Dynamo as the co-designed storage, networking, and serving stack.

## Resources
- [NVIDIA CMX Context Memory Storage Platform](https://www.nvidia.com/en-us/data-center/ai-storage/cmx/)
