# NVIDIA GPU Operator

**Type:** Tool
**Tags:** NVIDIA, Kubernetes, GPU, containers, operator, cloud-native, DevOps, infrastructure, K8s
**Related:** [[NVIDIA-Cloud-Native-Technologies]], [[NVIDIA-Network-Operator]], [[NVIDIA-NIM-Operator]], [[Nsight-Cloud]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[NVIDIA-AI-Cluster-Runtime]], [[KAI-Scheduler]], [[NVIDIA-NVSentinel]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-DCGM]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NGC]], [[NVIDIA-DGX]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge), https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/gpu-operator.html
**Last Updated:** 2026-04-29

## Summary
The NVIDIA GPU Operator is a Kubernetes Operator that automates the deployment and management of all NVIDIA software components required to provision and use NVIDIA GPUs in Kubernetes clusters — including GPU drivers, the NVIDIA Container Toolkit, DCGM exporter, device plugin, node feature discovery, and MIG manager. Instead of requiring administrators to manually install GPU software on each node, the GPU Operator manages the full GPU software lifecycle declaratively via Kubernetes CRDs, enabling GPU nodes to be provisioned like any other cloud-native resource.

## Detail

### Purpose
Running GPU workloads on Kubernetes requires several layers of software correctly installed and configured on every GPU node: the NVIDIA Linux driver, NVIDIA Container Toolkit (for GPU access from containers), Kubernetes device plugin (to expose GPU resources to the scheduler), DCGM exporter (for metrics), and MIG partitioning (on H100/A100). Without GPU Operator, this must be done manually on every node — and re-done after OS updates, driver upgrades, or node replacement. GPU Operator makes this declarative and automatic: install the operator once, and it handles the rest on all GPU nodes.

### Key Features
- **Automated Driver Installation:** Deploys NVIDIA GPU drivers as a container (`nvcr.io/nvidia/driver`) — driver is installed and loaded without host OS package management; supports driver upgrades without node reimage
- **NVIDIA Container Toolkit:** Automatically installs and configures `nvidia-container-toolkit` on all GPU nodes, enabling `--gpus all` and `nvidia.com/gpu` resource requests in pods
- **Kubernetes Device Plugin:** Deploys `k8s-device-plugin` to advertise GPU resources to the Kubernetes scheduler; pods request `nvidia.com/gpu: 1` (or N)
- **DCGM Exporter:** Deploys DCGM-based Prometheus metrics exporter (`dcgm-exporter`) on every GPU node; exposes GPU utilization, memory, temperature, ECC errors, etc. to Prometheus/Grafana
- **Node Feature Discovery (NFD):** Labels Kubernetes nodes with GPU properties (compute capability, driver version, GPU model, NVLink presence) for affinity-based scheduling
- **MIG Manager:** Automates MIG (Multi-Instance GPU) configuration on H100/A100 nodes; partition GPUs into MIG instances based on `ClusterPolicy` spec
- **GPU Sharing (MPS/MIG):** Supports time-slicing, MIG partitioning, and MPS-based GPU sharing for multi-tenant environments
- **Validator:** Deploys test pods to validate correct driver, toolkit, and device plugin configuration before marking nodes ready
- **OCP/OpenShift Support:** Certified for Red Hat OpenShift; integrates with OpenShift node tuning and special resource operators. The [[Red-Hat-AI-Factory-with-NVIDIA]] guide uses GPU Operator as the core OpenShift enablement step for AI workloads.
- **Air-Gap Support:** Mirroring support for disconnected environments — pull all operator images to a private registry

### Use Cases
- Provisioning GPU nodes in on-premises Kubernetes clusters (DGX SuperPOD, NVIDIA-Certified servers)
- Cloud-native GPU cluster management on managed Kubernetes services (EKS, GKE, AKS) with NVIDIA GPUs
- Automated MIG reconfiguration on H100 clusters for mixed workload types (training vs inference)
- Standardizing GPU node configuration across heterogeneous clusters (A100 + H100 + L40S nodes)
- Enterprise MLOps platforms (Kubeflow, MLflow, Argo Workflows) running on GPU Kubernetes clusters
- Telco / edge deployments requiring automated GPU management on distributed Kubernetes edge nodes

### Hardware Requirements / Compatibility
- **GPU:** Any NVIDIA data center GPU (Volta/Turing/Ampere/Hopper/Blackwell) and RTX-class GPUs with Linux driver support
- **Kubernetes:** K8s 1.23+; also supports Red Hat OpenShift 4.10+, Rancher, Tanzu, k3s
- **OS (nodes):** Ubuntu 20.04/22.04, RHEL 8/9, SLES 15 SP4 — GPU Operator manages driver installation, so base OS doesn't need NVIDIA packages
- **Helm:** Installed via Helm chart: `helm install gpu-operator nvidia/gpu-operator`

### Language Bindings / APIs
- **Kubernetes API:** GPU Operator managed via `ClusterPolicy` CRD; `kubectl edit clusterpolicy`
- **Helm:** `helm upgrade gpu-operator nvidia/gpu-operator --set driver.enabled=true ...`
- **Prometheus:** DCGM exporter exposes `/metrics` endpoint scraped by Prometheus
- **REST:** GPU Operator controller uses Kubernetes REST API internally; no separate user-facing REST API

## Connections
- [[NVIDIA-Cloud-Native-Technologies]] — cloud-native documentation hub for GPU Operator, Container Toolkit, Kubernetes, and related deployment docs
- [[NVIDIA-Network-Operator]] — complementary Kubernetes operator for NVIDIA networking, RDMA, SR-IOV, and DOCA-OFED.
- [[NVIDIA-NIM-Operator]] — runs above GPU Operator to manage NIM/NeMo microservices once GPU resources are exposed to Kubernetes.
- [[Nsight-Cloud]] - cloud-native profiling layer that can operate on Kubernetes clusters built on GPU Operator.
- [[Red-Hat-AI-Factory-with-NVIDIA]] — OpenShift AI deployment guide that installs GPU Operator before NIM workloads.
- [[NVIDIA-AI-Cluster-Runtime]] — validated runtime recipes include GPU Operator, drivers, kernels, and Kubernetes configuration.
- [[KAI-Scheduler]] — schedules GPU workloads after GPU Operator exposes GPU resources.
- [[NVIDIA-NVSentinel]] — uses GPU Operator/DCGM-based monitoring as part of Kubernetes fault detection and remediation.
- [[NVIDIA-Container-Toolkit]] — GPU Operator manages the lifecycle of Container Toolkit installation on all cluster nodes
- [[NVIDIA-DCGM]] — DCGM Exporter is a core component deployed by GPU Operator for GPU monitoring
- [[NVIDIA-Enterprise-RA-Observability-Guide]] — Enterprise RA observability builds on GPU Operator-deployed DCGM Exporter in Kubernetes clusters.
- [[NVIDIA-AI-Enterprise]] — GPU Operator is the recommended Kubernetes deployment mechanism for AI Enterprise
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] — AI Enterprise software RA lists GPU Operator as core infrastructure software.
- [[NGC]] — GPU Operator container images are hosted on NGC (`nvcr.io/nvidia/gpu-operator`)
- [[NVIDIA-DGX]] — GPU Operator with Base Command Manager (Kubernetes) manages DGX SuperPOD nodes

## Resources
- [GPU Operator Documentation](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/index.html)
- [GPU Operator in Red Hat AI Factory with NVIDIA](https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/gpu-operator.html)
- [GPU Operator GitHub](https://github.com/NVIDIA/gpu-operator)
- [GPU Operator Helm Chart](https://helm.ngc.nvidia.com/nvidia)
- [GPU Operator with MIG](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/gpu-operator-mig.html)
- [GPU Sharing with GPU Operator](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/gpu-sharing.html)
