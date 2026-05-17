# NVIDIA AI Workbench

**Type:** Platform
**Tags:** NVIDIA, developer tools, AI Workbench, projects, locations, applications, containers, Git, local development, remote development
**Related:** [[NVIDIA-AI-Workbench-Projects]], [[NVIDIA-AI-Workbench-Locations]], [[NVIDIA-AI-Workbench-Applications]], [[NVIDIA-AI-Enterprise]], [[NGC]], [[NVIDIA-NIM]], [[NVIDIA-Brev]], [[NVIDIA-AI-Blueprints]], [[NVIDIA-NeMo]], [[NVIDIA-DGX-Spark]], [[NVIDIA-DGX-Station]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-Base-Command]], [[NVIDIA-ChatRTX]]
**Sources:** https://docs.nvidia.com/ai-workbench/user-guide/latest/overview/introduction.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/project-concept.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/location-concept.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/application-concept.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/quickstart/example-nim.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Workbench is NVIDIA's developer workflow for portable, reproducible full-stack GPU development environments. Current docs emphasize that it is not an IDE; it uses Git repositories, versioned project configuration, managed container builds, local/remote locations, and project applications so developers can clone a project, build the environment, and work against GPUs on a local machine, cloud instance, server, or workstation.

## Detail

### Purpose
Data scientists and AI developers routinely face environment management problems: package drift, CUDA/driver mismatches, container setup friction, and differences between local and remote machines. NVIDIA AI Workbench treats the repository as the portable unit and uses containers plus host/user-specific runtime configuration to make a project movable across machines.

### Key Features
- **[[NVIDIA-AI-Workbench-Projects]]:** Git repositories with Workbench configuration files such as `.project/spec.yaml`, build files, mounts, environment variables, and managed applications.
- **[[NVIDIA-AI-Workbench-Locations]]:** local or remote machines where Workbench is installed and projects can be built/run.
- **[[NVIDIA-AI-Workbench-Applications]]:** project-managed web apps, processes, native apps, and Compose applications.
- **Container-Based Environments:** Each project runs in an NGC-based Docker container; Workbench handles container lifecycle (build, run, stop, rebuild) transparently — no Docker expertise required
- **Multi-Location Compute:** Move project execution between local workstation, remote SSH server, Brev cloud GPU instance, or other GPU machine with the same project configuration.
- **Integrated Jupyter Lab:** Auto-launches JupyterLab inside the project container; accessible via browser or directly from VS Code
- **VS Code and IDE Integration:** VS Code, Cursor, Windsurf, JupyterLab, RStudio, TensorBoard, and custom web apps can be used through Workbench-managed application definitions.
- **NIM Integration:** Current example projects demonstrate building and deploying downloadable [[NVIDIA-NIM]] workflows inside Workbench.
- **NGC Catalog Access:** Browse NGC containers and models from within Workbench; use NGC models as project dependencies
- **System Snapshot:** Capture and share exact environment state (package versions, container layer hash) for experiment reproducibility
- **Secret Management:** Secure handling of API keys and NGC credentials without committing them to Git
- **Port Forwarding:** Automatic port forwarding for running web apps (Gradio, Streamlit, Jupyter) inside containers on remote machines

### Use Cases
- Local development on NVIDIA RTX workstations for LLM fine-tuning, RAG prototyping, and inference testing
- Reproducible [[NVIDIA-AI-Workbench-Projects]] for data science, RAG, fine-tuning, NIM, and blueprint workflows.
- Local Grace Blackwell development on [[NVIDIA-DGX-Spark]] or larger deskside development on [[NVIDIA-DGX-Station]]
- Sharing reproducible AI project environments with team members across different OS/hardware setups
- Testing NIM microservices locally before deploying to production Kubernetes clusters
- Packaging custom dashboards, JupyterLab, TensorBoard, backend services, and multi-container apps as [[NVIDIA-AI-Workbench-Applications]].
- Data science teams standardizing development environments across Windows (with WSL2) and Linux
- Onboarding new team members — clone a Workbench project and be running GPU code in minutes
- Bridging dev → production: develop on Workbench locally, push to Base Command Platform for large-scale training

### Hardware Requirements / Compatibility
- **Local GPU:** Any NVIDIA RTX 20-series or newer (Turing, Ampere, Ada Lovelace, Blackwell) for local GPU acceleration; also works without local GPU for CPU-only projects
- **Remote Compute:** SSH-accessible NVIDIA GPU servers (DGX, cloud instances, on-prem servers)
- **Host OS:** Windows 11 (with WSL2), macOS (Apple Silicon — remote GPU compute only), Ubuntu 20.04/22.04
- **Container Runtime:** Docker Desktop (Windows/macOS) or Docker Engine (Linux); NVIDIA Container Toolkit required for GPU access
- **CUDA:** Determined by project container; Workbench selects compatible NGC base image

### Language Bindings / APIs
- **GUI:** Primary interface is a desktop application (Windows/macOS/Linux) with graphical project and environment management
- **CLI:** `nvwb` command-line tool for scripting project creation, cloning, and environment management
- **REST API:** Internal API for VS Code extension and IDE integration

## Connections
- [[NVIDIA-AI-Workbench-Projects]] - portable Git/container unit that Workbench manages.
- [[NVIDIA-AI-Workbench-Locations]] - local and remote compute targets where projects run.
- [[NVIDIA-AI-Workbench-Applications]] - project-managed runnable interfaces and services.
- [[NGC]] — Workbench uses NGC as the source for all project base containers and model dependencies
- [[NVIDIA-NIM]] — Workbench has native NIM integration for one-click local NIM deployment and testing
- [[NVIDIA-Brev]] - Workbench integrates with Brev for cloud GPU instance provisioning and locations.
- [[NVIDIA-AI-Blueprints]] - blueprint workflows can be packaged into project/application patterns.
- [[NVIDIA-AI-Enterprise]] — AI Workbench is part of the AI Enterprise platform, available with enterprise support
- [[NVIDIA-Base-Command]] — Workbench serves as the local development companion to Base Command for large-scale cluster training
- [[NVIDIA-NeMo]] — NeMo-based fine-tuning projects can be developed in Workbench and scaled to DGX clusters
- [[NVIDIA-DGX-Spark]] - compact local system for AI Workbench projects and tutorials.
- [[NVIDIA-DGX-Station]] - deskside system for larger local Workbench projects before data center deployment.
- [[NVIDIA-DGX-Cloud]] - remote/cloud GPU infrastructure target for scale-up development.
- [[NVIDIA-ChatRTX]] - local RAG application with a Workbench customization path.

## Resources
- [NVIDIA AI Workbench Page](https://www.nvidia.com/en-us/deep-learning-ai/solutions/data-science/workbench/)
- [AI Workbench Documentation](https://docs.nvidia.com/ai-workbench/latest/index.html)
- [AI Workbench Getting Started](https://docs.nvidia.com/ai-workbench/user-guide/latest/overview/introduction.html)
- [AI Workbench Projects](https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/project-concept.html)
- [AI Workbench Locations](https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/location-concept.html)
- [AI Workbench Applications](https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/application-concept.html)
- [Workbench Example Projects on GitHub](https://github.com/NVIDIA/workbench-example-hybrid-rag)
