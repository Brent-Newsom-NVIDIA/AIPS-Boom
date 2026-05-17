# NVIDIA Optimized Frameworks

**Type:** Container stack
**Tags:** NVIDIA, optimized frameworks, deep learning containers, NGC, Docker, PyTorch, PyG, DGL, TensorFlow, JAX, CUDA, cuDNN, NCCL, DGX
**Related:** [[NGC]], [[NVIDIA-Container-Toolkit]], [[PyTorch]], [[PyG]], [[NVIDIA-DGL]], [[JAX]], [[TensorFlow-GPU]], [[Transformer-Engine]], [[Megatron-Core]], [[cuDNN]], [[NCCL]], [[TensorRT]], [[NVIDIA-DALI]], [[NVIDIA-DGX]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-GPU-Operator]], [[CUDA-Compatibility]]
**Sources:** https://docs.nvidia.com/deeplearning/frameworks/index.html, https://docs.nvidia.com/deeplearning/frameworks/user-guide/index.html, https://docs.nvidia.com/deeplearning/frameworks/support-matrix/, https://docs.nvidia.com/deeplearning/frameworks/preparing-containers/index.html, https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/index.html, https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/index.html
**Last Updated:** 2026-04-30

## Summary
NVIDIA Optimized Frameworks is NVIDIA's documentation and container distribution surface for GPU-optimized deep learning framework images, including PyTorch, [[PyG]], legacy [[NVIDIA-DGL]], TensorFlow, JAX, TensorRT, and CUDA Deep Learning images. It covers preparing systems to use framework containers, pulling and running containers from [[NGC]], customizing/extending images, and reading the support matrix that maps each container release to its bundled CUDA, framework, communication, profiling, notebook, and acceleration components.

## Detail

### Purpose
NVIDIA Optimized Frameworks solves the compatibility and reproducibility problem around deep learning environments. Instead of manually aligning CUDA, drivers, cuDNN, NCCL, TensorRT, DALI, Python, framework builds, and profiling tools, users can start from NVIDIA-published containers that are versioned, tested, and distributed through NGC.

This page is the canonical wiki page for the containerized framework layer. Individual framework concepts remain on [[PyTorch]], [[JAX]], and [[TensorFlow-GPU]]; the common NVIDIA container, release, and support-matrix behavior belongs here.

### Current docs surface
- The overview page links the main documentation set: preparing Docker containers, the container user guide, the framework support matrix, and optimized-framework release notes.
- The container user guide explains Docker image/container concepts, pulling containers, running GPU-enabled containers, building/customizing images, and working with persistent data.
- The support matrix gives a single view of supported software and exact versions packaged by container image.
- Current support-matrix docs use a year/month image naming convention, so a release such as `26.04` corresponds to April 2026.
- The support matrix currently includes 26.xx framework container images and historical 25.xx, 24.xx, and older series for compatibility lookup.
- CUDA Deep Learning images extend CUDA images with networking and deep learning acceleration libraries such as cuDNN, cuTENSOR, NCCL, and HPC-X for users building their own GPU-accelerated application containers.

### What the containers bundle
Exact contents vary by container family and release, so the support matrix is the source of truth. Across the docs surface, NVIDIA framework containers commonly package combinations of:
- Deep learning frameworks such as [[PyTorch]], [[PyG]], legacy [[NVIDIA-DGL]], [[TensorFlow-GPU]], and [[JAX]].
- CUDA, [[cuDNN]], [[NCCL]], [[TensorRT]], [[NVIDIA-DALI]], and other acceleration libraries.
- [[Transformer-Engine]] in NVIDIA PyTorch containers where supported.
- Distributed training and networking components such as OpenMPI, OpenUCX, HPC-X, Horovod, rdma-core, and GDRCopy where applicable.
- Notebook, profiling, and developer tools such as Jupyter/JupyterLab, TensorBoard, Nsight Systems, and Nsight Compute.

### Operating model
NVIDIA's current container docs assume a host with the NVIDIA driver installed and a container runtime that can expose GPUs. Docker 19.03 and later support GPUs natively through the `--gpus` flag; [[NVIDIA-Container-Toolkit]] provides the NVIDIA runtime plumbing across Docker, containerd, CRI-O, and Kubernetes environments.

The usual path is:
- Prepare the DGX or Linux host for container use.
- Authenticate to [[NGC]] if pulling restricted or enterprise images.
- Pull the selected `nvcr.io` framework image.
- Run it with GPU access, persistent data mounts, and any user/group settings required by the local environment.
- Extend the image with a Dockerfile when project-specific packages, source code, or build artifacts are needed.

## Connections
- [[NGC]] - registry and catalog surface that distributes NVIDIA optimized framework containers.
- [[NVIDIA-Container-Toolkit]] - runtime layer that exposes GPUs to the framework containers.
- [[PyTorch]], [[PyG]], legacy [[NVIDIA-DGL]], [[JAX]], and [[TensorFlow-GPU]] - framework pages for the model-development APIs inside the containers.
- [[Transformer-Engine]] - installed in supported NVIDIA PyTorch containers and used by current low-precision transformer workflows.
- [[Megatron-Core]] - current installation docs recommend NVIDIA PyTorch containers for Megatron Core compatibility.
- [[cuDNN]], [[NCCL]], [[TensorRT]], and [[NVIDIA-DALI]] - core acceleration libraries commonly bundled with framework containers.
- [[NVIDIA-DGX]] - DGX systems use containers as the standard delivery pattern for deep learning frameworks.
- [[NVIDIA-AI-Enterprise]] - enterprise software stack uses the same NGC/container distribution and support model.
- [[NVIDIA-GPU-Operator]] - Kubernetes deployment path that provisions the runtime pieces required to run GPU containers at scale.
- [[CUDA-Compatibility]] - driver/CUDA compatibility guidance is referenced by current support-matrix entries.

## Source Excerpts
- NVIDIA docs describe the support matrix as a single view into software and versions packaged by framework container image.
- Current support-matrix docs state that framework container package names are based on image release year and month.
- The user guide states that Docker 19.03 and later support NVIDIA GPUs as Docker runtime devices.

## Resources
- [NVIDIA Optimized Frameworks](https://docs.nvidia.com/deeplearning/frameworks/index.html)
- [Containers For Deep Learning Frameworks User Guide](https://docs.nvidia.com/deeplearning/frameworks/user-guide/index.html)
- [Frameworks Support Matrix](https://docs.nvidia.com/deeplearning/frameworks/support-matrix/)
- [Preparing To Use Docker Containers](https://docs.nvidia.com/deeplearning/frameworks/preparing-containers/index.html)
