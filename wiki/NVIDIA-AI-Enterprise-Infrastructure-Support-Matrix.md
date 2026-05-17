# NVIDIA AI Enterprise Infrastructure Support Matrix

**Type:** Support Matrix
**Tags:** NVIDIA, AI Enterprise, support matrix, compatibility, infrastructure, GPUs, networking, Kubernetes, cloud, virtualization
**Related:** [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Software]], [[NVIDIA-AI-Enterprise-Lifecycle-Policy]], [[NVIDIA-AI-Enterprise-Quick-Start-Guide]], [[NVIDIA-Certified-Systems]], [[NVIDIA-DGX]], [[NVIDIA-HGX]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-DOCA]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-vGPU]], [[NVIDIA-vGPU-for-Compute]], [[NVIDIA-MIG]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-Run-ai]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], [[NVIDIA-NIM-Operator]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], [[NVIDIA-AI-Enterprise-Cloud-Deployment]]
**Sources:** https://docs.nvidia.com/ai-enterprise/software/latest/infrastructure-software.html, https://docs.nvidia.com/ai-enterprise/release-8/latest/support-matrix/, https://docs.nvidia.com/ai-enterprise/release-8/latest/support/support-matrix.html, https://docs.nvidia.com/ai-enterprise/release-8/latest/support/support-matrix-8/8.0.html, https://docs.nvidia.com/ai-enterprise/release-8/latest/overview/release-notes-8/8.0.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Enterprise Infrastructure Support Matrix is the current compatibility reference for AI Enterprise infrastructure software, NVIDIA GPUs and networking, platforms, operating systems, hypervisors, orchestration options, and public-cloud deployment configurations. The interactive matrix compares releases 7.0 through 8.0, while the static 8.0 support matrix gives stable citations for the latest infrastructure release.

## Detail

### Purpose
Use this page when a question asks whether an AI Enterprise infrastructure stack is supported, which GPU/OS/hypervisor/orchestration combinations are valid, or which infrastructure software versions belong to the current release. Use [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] for branch support timelines and [[NVIDIA-AI-Enterprise-Software]] for the software catalog.

### Matrix scope
- Deployment configurations: bare metal, virtualized on-premises, and public cloud.
- Infrastructure software: GPU drivers, DOCA drivers and microservices, Fabric Manager, vGPU for Compute, Container Toolkit, Run:ai, DPU/GPU/Network/NIM Operators, and Base Command Manager.
- Hardware coverage: NVIDIA GPUs, accelerated platforms, ConnectX NICs, BlueField SuperNICs, and BlueField DPUs.
- Platform coverage: DGX, HGX, IGX, GB200/GB300 NVL, and related NVIDIA accelerated systems.
- Software environment coverage: operating systems, Kubernetes distributions, OpenShift, managed Kubernetes services, hypervisors, standalone containers, and cloud instance types.
- Interactive matrix features: release comparison, deployment-type filters, OS/hypervisor/orchestration filters, footnote tooltips, and per-configuration release badges.

### Current 8.0 infrastructure software versions
- NVIDIA Data Center GPU Driver: 595.58.03.
- NVIDIA DOCA Driver for Networking and DOCA Microservices: 3.3.0.
- NVIDIA Fabric Manager: integrated into AI Enterprise drivers at 595.58.03.
- NVIDIA vGPU for Compute Virtual GPU Manager and Guest Drivers: 20.0.
- NVIDIA Container Toolkit: 1.19.0.
- NVIDIA Run:ai: 2.25 in the AI Enterprise Infra 8.0 support matrix.
- NVIDIA DPU Operator (DPF): 25.10.1.
- NVIDIA GPU Operator: 26.3.0.
- NVIDIA Network Operator: 26.1.0.
- NVIDIA NIM Operator: 3.1.0.
- NVIDIA Base Command Manager: 11.32.1.

### NVIDIA context
Use the support matrix before deploying or upgrading. The matrix is especially important for Blackwell and Grace Blackwell systems, vGPU for Compute, Kubernetes/OpenShift deployments, and cloud deployment paths where a supported instance, OS, driver, operator, and orchestration combination matters.

## Connections
- [[NVIDIA-AI-Enterprise]] - parent product whose infrastructure compatibility is being validated.
- [[NVIDIA-AI-Enterprise-Software]] - software catalog that points to the support matrix for deployment compatibility.
- [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] - branch timelines and compatibility explorer complement this matrix.
- [[NVIDIA-AI-Enterprise-Quick-Start-Guide]] - quick start sends users to support-matrix checks after first setup.
- [[NVIDIA-Certified-Systems]] - many on-premises configurations require certified systems; GB200/GB300 NVL systems use NVIDIA-qualified status.
- [[NVIDIA-DGX]], [[NVIDIA-HGX]], and [[NVIDIA-GB300-NVL72]] - platform families represented in the support matrix.
- [[NVIDIA-Data-Center-GPU-Drivers]], [[NVIDIA-DOCA]], [[NVIDIA-vGPU]], [[NVIDIA-vGPU-for-Compute]], [[NVIDIA-MIG]], and [[NVIDIA-Container-Toolkit]] - infrastructure foundations checked by the matrix.
- [[NVIDIA-Run-ai]] - self-hosted workload orchestration component listed in Infra 8.0 compatibility.
- [[NVIDIA-GPU-Operator]], [[NVIDIA-Network-Operator]], and [[NVIDIA-NIM-Operator]] - Kubernetes operators with release-specific support entries.
- [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]], [[NVIDIA-AI-Enterprise-VMware-Deployment]], and [[NVIDIA-AI-Enterprise-Cloud-Deployment]] - deployment guides whose prerequisites should be checked against the matrix.

## Source Excerpts
- The infrastructure software docs say the matrix verifies supported AI Enterprise configurations across public cloud, data centers, workstations, DGX, and edge.
- The interactive matrix compares releases 7.0 through 8.0 and filters by deployment type, OS, hypervisor, and orchestration.
- The static 8.0 matrix lists supported infrastructure software versions including R595 driver, vGPU 20.0, Container Toolkit 1.19.0, Run:ai 2.25, and the current Kubernetes operators.

## Resources
- [Interactive Infrastructure Support Matrix](https://docs.nvidia.com/ai-enterprise/release-8/latest/support-matrix/)
- [Infrastructure Support Matrix overview](https://docs.nvidia.com/ai-enterprise/release-8/latest/support/support-matrix.html)
- [Infrastructure Support Matrix - Release 8.0](https://docs.nvidia.com/ai-enterprise/release-8/latest/support/support-matrix-8/8.0.html)
- [AI Enterprise Infrastructure Software](https://docs.nvidia.com/ai-enterprise/software/latest/infrastructure-software.html)
- [AI Enterprise Infra 8.0 Release Notes](https://docs.nvidia.com/ai-enterprise/release-8/latest/overview/release-notes-8/8.0.html)
