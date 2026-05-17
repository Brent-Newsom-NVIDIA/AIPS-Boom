# NVIDIA Grove

**Type:** Tool
**Tags:** NVIDIA, Grove, Dynamo, Kubernetes, inference, disaggregated serving, topology-aware scheduling, gang scheduling
**Related:** [[NVIDIA-Dynamo]], [[Dynamo-Disaggregated-Serving]], [[Dynamo-Planner]], [[Dynamo-Profiler]], [[KAI-Scheduler]], [[NVIDIA-Run-ai]], [[NVIDIA-Cloud-Accelerator-NCX]], [[NIXL]], [[TensorRT-LLM]], [[NVIDIA-NIM]]
**Sources:** https://docs.nvidia.com/ncx/index.html; https://github.com/ai-dynamo/grove; https://docs.nvidia.com/dynamo/latest/kubernetes-deployment/multinode/topology-aware-scheduling; https://docs.nvidia.com/dynamo/latest/components/planner; https://www.nvidia.com/en-us/software/run-ai/
**Last Updated:** 2026-04-29

## Summary
Grove is a Kubernetes API for orchestrating multi-component AI inference workloads. NVIDIA NCX describes it as a modular component of [[NVIDIA-Dynamo]], and the public Grove project describes one declarative interface for workloads ranging from single-pod deployments to multi-node, disaggregated systems. Grove is important for NVIDIA inference because it provides the topology-aware, gang-scheduled, autoscaled deployment structure that large disaggregated serving systems need.

## Detail
Grove lets operators describe an entire inference serving system as a single custom resource. Components such as prefill, decode, routing, leader, worker, frontend, or other roles are modeled as PodCliques and related scaling/scheduling groups.

The motivation is that modern inference systems often need behavior Kubernetes does not provide natively: multi-node scaling units, hierarchical gang scheduling, explicit startup ordering, and topology-aware placement. This matters for LLM serving because prefill/decode disaggregation, pipeline components, and router/worker relationships can fail or underperform if scheduled independently without topology constraints.

In NVIDIA's stack, Grove connects [[NVIDIA-Dynamo]] inference deployment to [[KAI-Scheduler]] placement. Dynamo docs say topology-aware scheduling uses Grove, ClusterTopology resources, and KAI Scheduler so related pods can be placed within appropriate rack, block, or topology domains.

## Connections
- [[NVIDIA-Dynamo]] - Grove is a modular Dynamo component for declarative multi-component inference deployments.
- [[Dynamo-Disaggregated-Serving]] - Grove is relevant when prefill and decode workers need coordinated scheduling.
- [[Dynamo-Planner]] - Planner scaling decisions need a placement layer to add/remove workers safely.
- [[Dynamo-Profiler]] - generated deployment recommendations can flow into Grove-managed Kubernetes deployments.
- [[KAI-Scheduler]] - Grove relies on KAI for topology-aware and gang-scheduled placement.
- [[NVIDIA-Run-ai]] - NVIDIA Run:ai product materials list Grove as a topology-optimized serving component.
- [[NVIDIA-Cloud-Accelerator-NCX]] - NCX lists Grove among the modular software components for AI cloud operators.
- [[NIXL]] - disaggregated serving often depends on fast KV cache and tensor movement across topology-aware placements.
- [[TensorRT-LLM]] - optimized LLM runtimes are common payloads for multi-component inference services.
- [[NVIDIA-NIM]] - NIM deployments can sit above the inference-serving substrate that Dynamo/Grove manage.

## Source Excerpts
- "Grove is a Kubernetes API that provides a single declarative interface."
- "KAI Scheduler is required by Grove for topology-aware pod placement."
