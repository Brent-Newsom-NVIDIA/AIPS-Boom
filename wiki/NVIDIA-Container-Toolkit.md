# NVIDIA Container Toolkit

**Type:** Tool
**Tags:** NVIDIA, containers, Docker, Kubernetes, GPU, runtime, DevOps, cloud-native, nvidia-docker
**Related:** [[NVIDIA-Cloud-Native-Technologies]], [[NVIDIA-GPU-Operator]], [[NGC]], [[NVIDIA-Optimized-Frameworks]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-DCGM]], [[NVIDIA-NIM]], [[NVIDIA-NIM-on-WSL2]], [[NVIDIA-NIM-on-GKE]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-29

## Summary
The NVIDIA Container Toolkit (formerly nvidia-docker2) is a set of tools that enables GPU-accelerated containers by configuring the container runtime to expose NVIDIA GPUs and CUDA libraries to containers without bundling the driver inside the image. It acts as an OCI runtime hook, injecting the correct NVIDIA driver user-space libraries, device nodes, and capabilities into any Docker, containerd, or CRI-O container that requests GPU access. The Container Toolkit is the foundational layer enabling NVIDIA's entire container-based software ecosystem — NGC containers, NIM, GPU Operator — to function correctly.

## Detail

### Purpose
Before NVIDIA Container Toolkit, running GPU code in Docker required either bundling all NVIDIA drivers and CUDA runtimes inside the container image (creating enormous, hard-to-maintain images) or complex bind-mount setups. The Container Toolkit solves this elegantly: the host has the NVIDIA driver installed; the toolkit injects only the driver's user-space libraries (libcuda, libnvidia-ml, etc.) into the container at runtime, while the container image holds only the CUDA toolkit (headers, cublas, etc.). This means one host driver serves all containers, and NGC images work out-of-the-box without knowing the host's driver version.

### Key Features
- **`libnvidia-container`:** Core library that modifies container processes to expose GPU devices and inject NVIDIA user-space libraries (libcuda.so, libcublas.so, libnvidia-ml.so) from the host
- **`nvidia-container-runtime`:** OCI runtime wrapper that intercepts container creation and calls `libnvidia-container` to configure GPU access; drop-in replacement for `runc`
- **`nvidia-container-toolkit` (CDI Support):** Modern implementation using Container Device Interface (CDI) — standard Kubernetes mechanism for exposing specialized devices; generates CDI spec files for GPU devices
- **Docker Integration:** `docker run --gpus all nvcr.io/nvidia/cuda:12.3.0-base-ubuntu22.04` — `--gpus` flag handled by Container Toolkit
- **Kubernetes/containerd/CRI-O:** Configures containerd or CRI-O runtimes to use `nvidia-container-runtime`; enables `nvidia.com/gpu: 1` resource requests in pod specs
- **Multi-GPU Selection:** `--gpus '"device=0,1"'` or `NVIDIA_VISIBLE_DEVICES=0,1` for selecting specific GPUs; `--gpus all` for full access
- **Capability Flags:** `NVIDIA_DRIVER_CAPABILITIES=compute,utility,video` — controls which GPU capabilities (CUDA, graphics, video encode/decode, display) are exposed to the container
- **MIG Support:** Supports exposing specific MIG instances via `NVIDIA_VISIBLE_DEVICES=MIG-UUID` or CDI device names
- **IMEX Channels (Multi-Node):** Newer toolkit versions support NVIDIA IMEX (Interconnect for Multi-node EXecution) channel injection for NVLink-C2C enabled multi-node GPU fabrics

### Use Cases
- Running NGC containers locally with GPU access, including [[NVIDIA-Optimized-Frameworks]] images such as PyTorch containers
- Kubernetes GPU pods: container toolkit provides the runtime-level GPU access for all Kubernetes GPU workloads
- CI/CD pipelines: GPU-accelerated test runners in GitHub Actions, GitLab CI, or Jenkins with Docker
- NIM microservice deployment: all NIM containers require Container Toolkit for GPU access
- Development workstations: developers run GPU code in isolated containers without worrying about Python/CUDA version conflicts
- Multi-tenant GPU servers: Container Toolkit enables multiple independent Docker containers to share GPU hardware safely

### Hardware Requirements / Compatibility
- **GPU:** Any CUDA-capable NVIDIA GPU; compatible with Volta, Turing, Ampere, Hopper, Blackwell, and Jetson devices
- **OS:** Ubuntu 18.04/20.04/22.04/24.04, RHEL 7/8/9, SLES 15, Debian 11/12; WSL2 on Windows 10/11
- **Driver:** NVIDIA Linux driver must be installed on the host; Container Toolkit injects user-space libraries from the host driver
- **Container Runtime:** Docker 19.03+, containerd 1.4+, CRI-O 1.14+; Podman with CDI support

### Language Bindings / APIs
- **CLI:** `nvidia-ctk` — NVIDIA Container Toolkit CLI for installation, configuration, and CDI spec generation
  - `nvidia-ctk runtime configure --runtime=docker` — configure Docker to use NVIDIA runtime
  - `nvidia-ctk cdi generate --output=/etc/cdi/nvidia.yaml` — generate CDI device spec
- **Environment Variables:** `NVIDIA_VISIBLE_DEVICES`, `NVIDIA_DRIVER_CAPABILITIES`, `NVIDIA_REQUIRE_CUDA` — runtime configuration of container GPU access
- **Docker CLI:** `--gpus` flag; `--runtime=nvidia` flag (legacy)
- **Container Spec (OCI):** `nvidia.com/gpu.present: "true"` annotation in container spec for CDI-based runtimes

## Connections
- [[NVIDIA-Cloud-Native-Technologies]] — documentation hub for NVIDIA's Kubernetes, container, and cloud-native GPU stack
- [[NVIDIA-GPU-Operator]] — GPU Operator automates the deployment and lifecycle management of Container Toolkit on all Kubernetes GPU nodes
- [[NGC]] — All NGC containers are designed to work with Container Toolkit; `nvcr.io` images assume host-provided NVIDIA driver
- [[NVIDIA-Optimized-Frameworks]] - framework containers rely on Container Toolkit or equivalent runtime support to access GPUs.
- [[NVIDIA-AI-Enterprise]] — Container Toolkit is a prerequisite for all AI Enterprise software deployments
- [[NVIDIA-DCGM]] — DCGM runs in a container managed by GPU Operator; Container Toolkit provides GPU access to the DCGM container
- [[NVIDIA-NIM]] — NIM microservices are Docker/container-based; Container Toolkit is required for GPU-accelerated NIM deployment
- [[NVIDIA-NIM-on-WSL2]] - manual setup uses Container Toolkit and CDI to expose GPUs to Podman containers inside WSL2.
- [[NVIDIA-NIM-on-GKE]] - GKE deployment relies on the broader NVIDIA GPU container runtime stack underneath Kubernetes workloads.

## Resources
- [NVIDIA Container Toolkit Documentation](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/index.html)
- [Container Toolkit GitHub](https://github.com/NVIDIA/nvidia-container-toolkit)
- [Container Toolkit Installation Guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
- [CDI Support](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/cdi-support.html)
