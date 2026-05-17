# NVIDIA AI Workbench Applications

**Type:** Concept
**Tags:** NVIDIA, AI Workbench, applications, JupyterLab, VS Code, TensorBoard, web apps, processes, Docker Compose, proxy
**Related:** [[NVIDIA-AI-Workbench]], [[NVIDIA-AI-Workbench-Projects]], [[NVIDIA-AI-Workbench-Locations]], [[NVIDIA-NIM]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-AI-Blueprints]], [[NVIDIA-ChatRTX]]
**Sources:** https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/application-concept.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/quickstart/example-nim.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/overview/introduction.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Workbench Applications are tools, web apps, background processes, native apps, or multi-container Compose applications managed inside an AI Workbench project. Application definitions are stored with the project so JupyterLab, VS Code, TensorBoard, custom dashboards, NIM demos, or other services can be launched consistently across local and remote locations.

## Detail

### Purpose
AI projects often need more than a notebook: dashboards, services, APIs, model endpoints, background tasks, and multi-container app stacks. AI Workbench Applications make these entry points part of the versioned project configuration so users can launch them through the Desktop App or CLI without remembering container commands, ports, or SSH tunnels.

### Current scope
- Managed applications run in the project container or, for native apps, on the host with access to the container.
- Web apps include JupyterLab, TensorBoard, and custom dashboards.
- Processes are background commands without a web interface.
- Compose apps use Docker Compose files for multi-container environments.
- Native apps include VS Code-style host applications that connect into the project container.
- AI Workbench handles start/stop, proxying, status monitoring, and access URLs.
- Application configurations are stored in `.project/spec.yaml` or Compose files and tracked in Git.
- Application dependencies should be captured in project requirements, apt files, setup scripts, or repository code.
- Current example projects include downloadable [[NVIDIA-NIM]] deployment workflows.

### NVIDIA context
Applications are the runnable user interface for [[NVIDIA-AI-Workbench-Projects]]. They connect Workbench to interactive development, NIM prototyping, RAG and blueprint workflows, and local-to-remote demos on [[NVIDIA-AI-Workbench-Locations]].

## Connections
- [[NVIDIA-AI-Workbench]] - umbrella platform that manages applications.
- [[NVIDIA-AI-Workbench-Projects]] - applications are defined per project and versioned with the project.
- [[NVIDIA-AI-Workbench-Locations]] - applications run on local or remote locations and are proxied through the Desktop App.
- [[NVIDIA-NIM]] - Workbench example projects demonstrate downloadable NIM deployment and endpoint management.
- [[NVIDIA-RAG-Blueprint]] and [[NVIDIA-AI-Blueprints]] - Workbench projects can package full-stack AI workflows as runnable applications.
- [[NVIDIA-ChatRTX]] - local RAG application path adjacent to Workbench customization.

## Source Excerpts
- NVIDIA docs state that AI Workbench manages applications that run in the project container.
- Current docs describe web apps, processes, Compose apps, native apps, and application proxying as key concepts.

## Resources
- [AI Workbench Applications](https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/application-concept.html)
- [AI Workbench NIM Example Projects](https://docs.nvidia.com/ai-workbench/user-guide/latest/quickstart/example-nim.html)
