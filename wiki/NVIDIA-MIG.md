# NVIDIA Multi-Instance GPU

**Type:** Technology
**Tags:** NVIDIA, MIG, Multi-Instance GPU, partitioning, data center, Kubernetes
**Related:** [[NVIDIA-DGX]], [[NVIDIA-GPU-Operator]], [[NVIDIA-DCGM]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Hopper-Architecture]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Jetson-Thor]]
**Sources:** https://docs.nvidia.com/datacenter/tesla/mig-user-guide/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Multi-Instance GPU (MIG) partitions supported NVIDIA data center GPUs into multiple isolated GPU instances with dedicated compute and memory resources. It improves utilization and isolation for multi-tenant inference, development, and smaller training workloads.

## Detail

### Purpose
Large data center GPUs can be underutilized by small or latency-sensitive jobs. MIG lets administrators split a supported GPU into isolated slices so multiple users or services can run with more predictable performance and stronger resource boundaries.

### Key capabilities
- Partition supported GPUs into multiple GPU instances.
- Provide dedicated compute and memory resources per instance.
- Integrate with Docker, Kubernetes, [[NVIDIA-GPU-Operator]], and monitoring tools.
- Improve fleet utilization for mixed-size AI workloads.
- Support operational visibility through [[NVIDIA-DCGM]].

### NVIDIA context
MIG is a critical AI factory capability for [[NVIDIA-DGX]], Kubernetes clusters, and shared enterprise platforms running [[NVIDIA-NIM]], notebooks, training jobs, or inference endpoints with different resource needs.

## Connections
- [[NVIDIA-GPU-Operator]] - automates GPU stack components and can manage MIG in Kubernetes.
- [[NVIDIA-DCGM]] - exposes GPU telemetry and health information relevant to MIG partitions.
- [[NVIDIA-DGX]] - supported DGX systems can use MIG for multi-tenant utilization.
- [[NVIDIA-Hopper-Architecture]] - Hopper GPUs support MIG capabilities for data center partitioning.
- [[NVIDIA-Blackwell-Architecture]] - Blackwell systems continue the AI factory utilization story.
- [[NVIDIA-Jetson-Thor]] - NVIDIA public Jetson Thor material surfaces MIG as an embedded physical AI isolation feature.

## Source Excerpts
- NVIDIA's MIG guide covers partitioning supported GPUs into isolated instances with dedicated compute and memory resources.
