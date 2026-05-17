# Nsight Cloud

**Type:** Cloud-native profiling toolkit
**Tags:** NVIDIA, Nsight, Nsight Cloud, Nsight Operator, Nsight Streamer, Kubernetes, containers, Helm, NGC, Nsight Systems, profiling
**Related:** [[Nsight-Developer-Tools]], [[Nsight-Systems]], [[Nsight-Compute]], [[Nsight-Graphics]], [[NGC]], [[NVIDIA-Cloud-Native-Technologies]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-Developer-Program]]
**Sources:** https://developer.nvidia.com/nsight-cloud, https://docs.nvidia.com/nsight-systems/UserGuide/#profiling-services-in-the-cloud, https://docs.nvidia.com/nsight-developer-tools/index.html, https://github.com/NVIDIA/cloud-native-stack
**Last Updated:** 2026-04-29

## Summary
NVIDIA Nsight Cloud is a suite of cloud-native components that helps Nsight tools profile workloads in containerized cloud, cluster, data center, and HPC environments. It focuses on Kubernetes and remote-cluster profiling workflows, including Nsight Operator for sidecar-based profiling and Nsight Streamer for browser-accessible Nsight Systems UI sessions.

## Detail
Nsight Cloud addresses common friction in profiling cloud and cluster workloads: making Nsight tools available in containers, controlling active profiling sessions across systems, and analyzing results without requiring a local desktop installation.

For Kubernetes, Nsight Operator automates the software needed to profile a workload. NVIDIA describes its components as Nsight Injector, Nsight Coordinator, and Nsight Streamer. Nsight Injector makes Nsight Developer Tools available and configured in a pod, Nsight Coordinator controls profiling-session state across a fleet, and Nsight Streamer deploys the Nsight Systems UI in a pod for web-browser access.

The [[Nsight-Systems]] user guide documents cloud profiling paths that align with Nsight Cloud. Nsight Systems can profile services launched through Kubernetes sidecar injection without modifying container images or Kubernetes/Helm specs. Once the sidecar is enabled, collected data can be filtered by namespace or pod using Kubernetes labels, or by command-line regex inside a container process. NVIDIA documents compatibility with managed Kubernetes variants including AKS, EKS, GKE, and OKE.

Nsight Cloud artifacts are available through [[NGC]] collections and are also included in NVIDIA Cloud Native Stack (CNS), which is based on Ubuntu/RHEL, Kubernetes, Helm, [[NVIDIA-GPU-Operator]], and [[NVIDIA-Network-Operator]]. Keep this page as the canonical page for the Nsight Cloud/Operator/Streamer cloud profiling bundle unless NVIDIA publishes separate current docs for each component.

## Connections
- [[Nsight-Systems]] - primary profiling and analysis tool surfaced through Nsight Cloud, Operator, and Streamer workflows.
- [[Nsight-Compute]] and [[Nsight-Graphics]] - adjacent Nsight tools in the broader suite; Nsight Cloud is designed for Nsight tool deployment in cloud environments.
- [[NGC]] - distribution surface for Nsight Cloud collections, containers, and Helm charts.
- [[NVIDIA-Cloud-Native-Technologies]] - Kubernetes/container infrastructure hub that Nsight Cloud builds upon.
- [[NVIDIA-GPU-Operator]] - cloud-native GPU stack prerequisite for Kubernetes clusters running GPU workloads.
- [[NVIDIA-Network-Operator]] - related CNS component for NVIDIA networking in Kubernetes.
- [[NVIDIA-Container-Toolkit]] - container GPU access layer beneath cloud-native Nsight profiling.

## Resources
- [Nsight Cloud](https://developer.nvidia.com/nsight-cloud)
- [Nsight Systems cloud profiling](https://docs.nvidia.com/nsight-systems/UserGuide/#profiling-services-in-the-cloud)
- [Nsight Developer Tools hub](https://docs.nvidia.com/nsight-developer-tools/index.html)
- [NVIDIA Cloud Native Stack](https://github.com/NVIDIA/cloud-native-stack)
