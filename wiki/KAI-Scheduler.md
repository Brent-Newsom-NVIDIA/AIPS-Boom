# KAI Scheduler

**Type:** Tool
**Tags:** NVIDIA, KAI Scheduler, Kubernetes, GPU scheduling, AI workloads, Run:ai, topology-aware scheduling, gang scheduling
**Related:** [[NVIDIA-Run-ai]], [[NVIDIA-Grove]], [[NVIDIA-Dynamo]], [[Dynamo-Disaggregated-Serving]], [[Dynamo-Planner]], [[NVIDIA-Cloud-Accelerator-NCX]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Cloud-Native-Technologies]]
**Sources:** https://docs.nvidia.com/ncx/index.html; https://github.com/kai-scheduler/KAI-Scheduler; https://docs.nvidia.com/cloud-functions/legacy/latest/cluster-management/kai-scheduler.html; https://docs.nvidia.com/dynamo/latest/kubernetes-deployment/multinode/topology-aware-scheduling; https://docs.nvidia.com/dynamo/latest/components/planner
**Last Updated:** 2026-04-29

## Summary
KAI Scheduler is an open-source Kubernetes scheduler for AI and machine learning workloads, surfaced by NVIDIA NCX and NVIDIA Run:ai materials as the scheduling layer for large-scale GPU clusters. It optimizes GPU resource allocation using batch scheduling, bin packing, fairness policies, hierarchical queues, topology-aware scheduling, gang scheduling, and GPU sharing. In NVIDIA AI infrastructure, KAI sits underneath [[NVIDIA-Grove]], [[NVIDIA-Dynamo]], and cloud/operator workflows that need better GPU placement than the default Kubernetes scheduler provides.

## Detail
KAI Scheduler is built for clusters where GPUs are scarce, expensive, and topology-sensitive. Its public project materials describe support for large-scale GPU clusters, thousands of nodes, interactive jobs, large training jobs, inference workloads, fair resource allocation across consumers, and coexistence with other Kubernetes schedulers.

The scheduler's notable capabilities include batch scheduling, bin packing/spread scheduling, workload priority, hierarchical queues, quota and over-quota weights, Dominant Resource Fairness, time-based fairshare, min-guaranteed runtime, workload consolidation, elastic workloads, Dynamic Resource Allocation, topology-aware scheduling, hierarchical PodGroups, GPU sharing, and scheduler explainability via Kubernetes events.

NVIDIA Cloud Functions docs also reference KAI Scheduler for optimized AI workload scheduling and GPU bin packing. Dynamo docs require KAI for Grove topology-aware pod placement, which ties the scheduler directly to disaggregated inference and multi-component serving.

## Connections
- [[NVIDIA-Run-ai]] - KAI Scheduler is based on NVIDIA Run:ai scheduling work and is listed as an open-source Run:ai solution.
- [[NVIDIA-Grove]] - Grove uses KAI for topology-aware and gang-scheduled placement of inference components.
- [[NVIDIA-Dynamo]] - Dynamo multinode and topology-aware serving paths reference Grove and KAI Scheduler.
- [[Dynamo-Disaggregated-Serving]] - prefill/decode deployments benefit from topology-aware worker placement.
- [[Dynamo-Planner]] - autoscaled workers still require scheduler placement that respects GPU topology and resource groups.
- [[NVIDIA-Cloud-Accelerator-NCX]] - NCX lists KAI as a scalable GPU scheduler component for AI clouds.
- [[NVIDIA-GPU-Operator]] - KAI prerequisites include GPU Operator for scheduling workloads that request GPU resources.
- [[NVIDIA-Cloud-Native-Technologies]] - KAI extends NVIDIA's Kubernetes AI infrastructure story beyond basic GPU exposure.

## Source Excerpts
- "KAI Scheduler is a scalable Kubernetes scheduler optimized for GPU resource allocation."
- "KAI Scheduler is required by Grove for topology-aware pod placement."
