# NVIDIA AI Workbench Locations

**Type:** Concept
**Tags:** NVIDIA, AI Workbench, locations, local development, remote development, SSH, Brev, cloud GPU, container runtime
**Related:** [[NVIDIA-AI-Workbench]], [[NVIDIA-AI-Workbench-Projects]], [[NVIDIA-AI-Workbench-Applications]], [[NVIDIA-Brev]], [[NVIDIA-DGX-Spark]], [[NVIDIA-DGX-Station]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-Jetson-Platform]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/location-concept.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/how-to/add-existing-location.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/overview/introduction.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Workbench Locations are machines with AI Workbench installed where users can create, clone, build, and run Workbench projects. A location can be a local machine, a remote Ubuntu system reachable over SSH, a cloud instance, a workstation, a server, or an NVIDIA Brev-provisioned GPU environment.

## Detail

### Purpose
AI developers often move between local laptops, RTX workstations, cloud GPUs, data center servers, and shared lab machines. AI Workbench Locations provide a consistent management layer so projects can move across machines while retaining the same user experience and container-driven environment model.

### Current scope
- The Desktop App is a lightweight UI, not itself a location.
- A full local install turns the local machine into a Workbench location.
- Remote-only mode lets users add remote locations without a full local install.
- Remote locations are machines reachable by SSH; current docs specify Ubuntu-based remote systems and key-based authentication.
- Locations are independent single machines, not Kubernetes clusters.
- Location Manager shows local and remote location cards.
- A Location Window manages projects on a specific location.
- AI Workbench integrates with [[NVIDIA-Brev]] to provision GPU cloud instances and add them as locations.
- When projects move across locations, AI Workbench combines versioned project configuration with host and user information such as architecture, mounts, and credentials.

### NVIDIA context
Locations are the compute abstraction behind [[NVIDIA-AI-Workbench]]. They connect project portability to NVIDIA local systems such as [[NVIDIA-DGX-Spark]], deskside and data center systems such as [[NVIDIA-DGX-Station]] and [[NVIDIA-DGX-Cloud]], and developer cloud environments such as [[NVIDIA-Brev]].

## Connections
- [[NVIDIA-AI-Workbench]] - Workbench manages local and remote locations.
- [[NVIDIA-AI-Workbench-Projects]] - projects can exist in different states on different locations.
- [[NVIDIA-AI-Workbench-Applications]] - applications run in project containers on locations and are proxied back to the user.
- [[NVIDIA-Brev]] - cloud GPU provisioning path integrated with Workbench locations.
- [[NVIDIA-DGX-Spark]] and [[NVIDIA-DGX-Station]] - local/deskside systems suitable for Workbench locations.
- [[NVIDIA-DGX-Cloud]] - cloud GPU infrastructure target for remote development and scale-up workflows.
- [[NVIDIA-Jetson-Platform]] - Jetson OS is listed in current remote-location guidance.
- [[NVIDIA-AI-Enterprise]] - enterprise development workflows can use Workbench locations as reproducible project environments.

## Source Excerpts
- NVIDIA docs define a location as a machine with AI Workbench installed.
- Current docs state that Workbench locations provide the same UI/UX across supported operating systems.

## Resources
- [AI Workbench Locations](https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/location-concept.html)
- [Add an Existing Remote Location](https://docs.nvidia.com/ai-workbench/user-guide/latest/how-to/add-existing-location.html)
