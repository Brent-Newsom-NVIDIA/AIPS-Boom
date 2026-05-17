# NVIDIA Resiliency Extension

**Type:** Library
**Tags:** NVIDIA, NVRx, resiliency, fault tolerance, distributed training, PyTorch, checkpointing, straggler detection, Slurm, Megatron Bridge, NeMo, AI factory
**Related:** [[NeMo-Megatron-Bridge]], [[Megatron-Core]], [[Megatron-LM]], [[NeMo-RL]], [[NVIDIA-NeMo]], [[Nemotron-Training-Recipes]], [[PyTorch]], [[NVIDIA-Mission-Control]], [[NVIDIA-NVSentinel]], [[NVIDIA-Fleet-Intelligence]], [[NVIDIA-DGX]], [[NVIDIA-Optimized-Frameworks]]
**Sources:** https://nvidia.github.io/nvidia-resiliency-ext/, https://github.com/NVIDIA/nvidia-resiliency-ext, https://docs.nvidia.com/nemo/megatron-bridge/latest/training/resiliency.html, https://docs.nvidia.com/mission-control/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Resiliency Extension (NVRx, `nvidia-resiliency-ext`) is NVIDIA's Python package for adding fault-tolerant behavior to large-scale distributed [[PyTorch]] training. Current NVIDIA docs and project documentation position it as the job-level resiliency layer behind features such as hang detection, automatic restart, in-process restart, async checkpointing, local checkpointing, straggler detection, distributed logging, and shared resiliency utilities.

## Detail

### Purpose
At large GPU counts, training failures are normal: nodes hang, ranks slow down, network paths glitch, and jobs hit preemption or time limits. NVRx improves effective training time by detecting failures earlier, reducing lost work with checkpointing, and restarting training automatically where possible.

This page is the canonical wiki home for the NVRx package. The individual feature guides, APIs, examples, callbacks, and logging utilities stay folded into this page unless NVIDIA publishes a separate durable product/topic around them.

### Current feature scope
The public NVRx docs list the following major areas:
- Fault tolerance: hang detection and automatic in-job restarting.
- In-process restart: restart within the same process when supported by the failure mode and launcher.
- Async checkpointing: non-blocking checkpoint writes.
- Local checkpointing: fast local saves with replication.
- Straggler detection: identifying slower ranks or GPUs.
- Shared utilities and distributed logging, including the NVRx logger.

Current [[NeMo-Megatron-Bridge]] resiliency docs summarize the production/experimental split:
- Fault tolerance, NVRx straggler detection, preemption, async checkpoint save, and local checkpointing are production-oriented.
- Re-run state machine and in-process restart are described as experimental.
- Some capabilities are Slurm-only, while others can work across clusters more broadly.

### NVIDIA stack context
NVRx sits below framework workflows and above the cluster substrate:
- [[NeMo-Megatron-Bridge]] incorporates NVRx resilient training features.
- [[Megatron-Core]] and [[Megatron-LM]] provide the training scale where job-level resiliency becomes important.
- [[Nemotron-Training-Recipes]] and [[NeMo-RL]] are examples of long-running training/post-training workflows that can benefit from fault detection, checkpointing, and restart patterns.
- [[NVIDIA-Mission-Control]] references NVRx in its autonomous job recovery software stack, while also noting that NVRx is installed separately rather than bundled directly.
- [[NVIDIA-NVSentinel]] and [[NVIDIA-Fleet-Intelligence]] are adjacent operations tools, but they focus on node/fleet health and remediation rather than in-training Python job recovery.

### Practical boundaries
NVRx does not replace checkpoint design, storage planning, Slurm policy, GPU health monitoring, or cluster remediation. It is best understood as one layer in a resiliency stack: combine job-level NVRx features with storage/checkpoint strategy, [[NVIDIA-Mission-Control]] operations, [[NVIDIA-NVSentinel]] or fleet-health tooling, and normal scheduler policy.

## Connections
- [[NeMo-Megatron-Bridge]] - current Bridge docs incorporate NVRx features for resilient training.
- [[Megatron-Core]] and [[Megatron-LM]] - large-scale training layers where NVRx protects long-running distributed jobs.
- [[NeMo-RL]] and [[Nemotron-Training-Recipes]] - post-training and recipe workflows that can need restart/checkpointing resiliency.
- [[NVIDIA-NeMo]] - broader framework family around Bridge, RL, Run, and training workflows.
- [[PyTorch]] - NVRx is a Python package for PyTorch-based distributed workloads.
- [[NVIDIA-Mission-Control]] - AI factory operations layer that references NVRx for autonomous job recovery.
- [[NVIDIA-NVSentinel]] and [[NVIDIA-Fleet-Intelligence]] - adjacent node/fleet health tools that complement, but do not replace, job-level resiliency.
- [[NVIDIA-DGX]] and [[NVIDIA-Optimized-Frameworks]] - system and container context for large-scale training environments where NVRx may be deployed.

## Source Excerpts
- NVIDIA docs describe NVRx as tools developed by NVIDIA to improve large-scale distributed training resiliency.
- Current Bridge docs state that Megatron Bridge incorporates resilient training features from NVIDIA Resiliency Extension.
- Mission Control docs note that NVRx is part of the autonomous job recovery software stack but must be installed separately.

## Resources
- [NVIDIA Resiliency Extension Documentation](https://nvidia.github.io/nvidia-resiliency-ext/)
- [NVIDIA Resiliency Extension GitHub](https://github.com/NVIDIA/nvidia-resiliency-ext)
- [Megatron Bridge Resiliency](https://docs.nvidia.com/nemo/megatron-bridge/latest/training/resiliency.html)
- [NVIDIA Mission Control Documentation](https://docs.nvidia.com/mission-control/index.html)
