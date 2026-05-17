# NVIDIA Cloud Native Technologies

**Type:** Platform
**Tags:** NVIDIA, cloud native, Kubernetes, GPU Operator, Container Toolkit, device plugin, MLOps
**Related:** [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[Nsight-Cloud]], [[NVIDIA-AI-Cluster-Runtime]], [[KAI-Scheduler]], [[NVIDIA-NVSentinel]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-DCGM]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-Cloud-Accelerator-NCX]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/datacenter/cloud-native/index.html, https://developer.nvidia.com/nsight-cloud
**Last Updated:** 2026-04-29

## Summary
NVIDIA Cloud Native Technologies is the documentation hub for running GPU-accelerated containers and Kubernetes clusters on NVIDIA GPUs. It includes the operational building blocks that expose GPUs to containers and automate the NVIDIA GPU software stack.

## Detail
The docs hub points to cloud-native components such as GPU exposure on Kubernetes nodes and GPU-enabled container runtime support. In practice, the core pages in this area include [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[NVIDIA-Container-Toolkit]], device plugins, DCGM integration, and Kubernetes deployment patterns.

This is a hub page rather than a replacement for the component pages. It should make it easier to answer questions about "NVIDIA Kubernetes stack" or "cloud-native NVIDIA GPU infrastructure" from the wiki. Newer NCX cloud-native components such as [[NVIDIA-AI-Cluster-Runtime]], [[KAI-Scheduler]], and [[NVIDIA-NVSentinel]] extend this layer into validated cluster recipes, scheduling, and remediation. [[Nsight-Cloud]] adds the cloud-native profiling path for Kubernetes and containerized workloads.

## Connections
- [[NVIDIA-GPU-Operator]] - automates driver, device plugin, container toolkit, DCGM, and MIG components.
- [[NVIDIA-Network-Operator]] - automates NVIDIA networking drivers, RDMA, SR-IOV, secondary networks, and DOCA-OFED in Kubernetes.
- [[Nsight-Cloud]] - cloud-native Nsight profiling toolkit for Kubernetes, containers, Operator, and Streamer workflows.
- [[NVIDIA-AI-Cluster-Runtime]] - publishes validated recipes for NVIDIA-accelerated Kubernetes runtimes.
- [[KAI-Scheduler]] - GPU-aware Kubernetes scheduler for AI workloads.
- [[NVIDIA-NVSentinel]] - Kubernetes-native GPU fault detection and remediation.
- [[NVIDIA-Container-Toolkit]] - enables container runtimes to use NVIDIA GPUs.
- [[NVIDIA-DCGM]] - GPU metrics and diagnostics for cloud-native monitoring.
- [[NVIDIA-DGX-SuperPOD]] - target cluster infrastructure for Kubernetes GPU workloads.
- [[NVIDIA-Cloud-Accelerator-NCX]] - cloud partner architecture includes container-service components.

## Source Excerpts
- NVIDIA Cloud Native Technologies docs describe GPU exposure on cluster nodes and running GPU-enabled containers in Kubernetes clusters.
