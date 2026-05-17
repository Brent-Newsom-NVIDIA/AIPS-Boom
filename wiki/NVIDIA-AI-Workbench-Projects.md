# NVIDIA AI Workbench Projects

**Type:** Concept
**Tags:** NVIDIA, AI Workbench, projects, Git, containers, reproducibility, development environment, spec.yaml
**Related:** [[NVIDIA-AI-Workbench]], [[NVIDIA-AI-Workbench-Locations]], [[NVIDIA-AI-Workbench-Applications]], [[NVIDIA-NIM]], [[NVIDIA-Brev]], [[NGC]], [[NVIDIA-AI-Blueprints]], [[NVIDIA-ChatRTX]]
**Sources:** https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/project-concept.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/how-to/projects/overview.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/overview/introduction.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Workbench Projects are Git repositories with versioned configuration files that define containerized AI development environments. A project contains code plus Workbench metadata, build files, mounts, environment settings, and managed applications so the same repository can be cloned, rebuilt, and run across different [[NVIDIA-AI-Workbench-Locations]].

## Detail

### Purpose
AI development often breaks when code, packages, CUDA versions, container images, data mounts, and local user settings drift across machines. AI Workbench Projects make the environment part of the repository while still letting host-specific and user-specific values be resolved per location.

### Current scope
- A project is a Git repository with Workbench configuration.
- The project specification is stored under `.project/spec.yaml` and defines metadata, base environment, mounts, environment variables, and applications.
- Build files such as `apt.txt`, `requirements.txt`, `preBuild.bash`, and `postBuild.bash` customize the container.
- A base environment provides the starting container image, often with CUDA, Python, PyTorch, TensorFlow, or other GPU software.
- The project directory is mounted into the container so code changes persist on the host.
- Additional mounts can attach datasets, model files, shared resources, or output directories.
- Projects can include single-container or multi-container development environments.
- AI Workbench automates Git/container operations, but the project remains a normal Git repository and container workflow.

### NVIDIA context
Projects are the portable unit in [[NVIDIA-AI-Workbench]]. They connect local RTX, cloud, server, and DGX-style development workflows to [[NGC]] containers, [[NVIDIA-NIM]] example projects, [[NVIDIA-AI-Blueprints]], and app prototypes such as [[NVIDIA-ChatRTX]] customization.

## Connections
- [[NVIDIA-AI-Workbench]] - umbrella developer environment that manages projects.
- [[NVIDIA-AI-Workbench-Locations]] - machines where projects are created, cloned, built, and run.
- [[NVIDIA-AI-Workbench-Applications]] - project-managed tools, web apps, processes, and Compose apps.
- [[NVIDIA-NIM]] - current Workbench example projects include downloadable NIM deployments.
- [[NVIDIA-Brev]] - cloud GPU environments can become Workbench remote locations for project execution.
- [[NGC]] - common source for base environments, containers, and model artifacts.
- [[NVIDIA-AI-Blueprints]] - blueprint workflows can be packaged as reproducible Workbench projects.
- [[NVIDIA-ChatRTX]] - local RAG customization workflow connected to AI Workbench.

## Source Excerpts
- NVIDIA docs describe a project as a Git repository with configuration files for a containerized environment.
- Current docs state that project versioning keeps environments reproducible across machines.

## Resources
- [AI Workbench Projects](https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/project-concept.html)
- [How to Work with AI Workbench Projects](https://docs.nvidia.com/ai-workbench/user-guide/latest/how-to/projects/overview.html)
