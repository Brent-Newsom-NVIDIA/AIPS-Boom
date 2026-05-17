# NVIDIA NemoClaw

**Type:** Platform
**Tags:** NVIDIA, NemoClaw, OpenClaw, agents, sandboxing, OpenShell, Nemotron
**Related:** [[NVIDIA-OpenShell]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[Nemotron]], [[Nemotron-3-Nano-Omni]], [[Nemotron-3-Super]], [[NVIDIA-NIM]], [[NVIDIA-NeMo]], [[NVIDIA-DGX]], [[NVIDIA-DGX-Spark]], [[NVIDIA-DGX-Station]]
**Sources:** https://docs.nvidia.com/nemoclaw/index.html, https://www.nvidia.com/en-us/products/workstations/dgx-spark/, https://www.nvidia.com/en-us/products/workstations/dgx-station/, https://developer.nvidia.com/blog/nvidia-nemotron-3-nano-omni-powers-multimodal-agent-reasoning-in-a-single-efficient-open-model, https://docs.nvidia.com/nemotron/latest/usage-cookbook/Nemotron-3-Super/OpenScaffoldingResources/README.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NemoClaw is an open source stack for running OpenClaw always-on assistants with NVIDIA agent infrastructure. The docs identify it as an early alpha preview that installs [[NVIDIA-OpenShell]], part of the NVIDIA agent toolkit stack, and can use open NVIDIA models such as [[Nemotron]].
Current DGX Spark and DGX Station product pages position NemoClaw as a local agent-development stack for secure, always-on AI assistants on NVIDIA desktop AI systems. NVIDIA's current Nemotron 3 Nano Omni technical blog also describes NemoClaw/OpenShell workflows for local video-reasoning assistants powered by [[Nemotron-3-Nano-Omni]].

## Detail

### Purpose
Always-on AI assistants need safer execution boundaries, controlled permissions, and a repeatable runtime. NemoClaw packages that direction into a developer-friendly stack for experimenting with autonomous assistants while using NVIDIA model and agent components.

### Key capabilities
- Installs OpenClaw assistant components with a single-command style workflow.
- Uses [[NVIDIA-OpenShell]] as a secure runtime for autonomous agents.
- Connects to NVIDIA agent tooling and open NVIDIA models such as [[Nemotron]].
- Explicitly marked as alpha/early preview, so APIs and behavior may change.

### NVIDIA context
NemoClaw is a signpost for NVIDIA's agentic AI direction: [[Nemotron]] models, [[NVIDIA-NIM]] endpoints, [[NVIDIA-Agent-Intelligence-Toolkit]], and sandboxed execution are converging into a safer agent runtime story.

## Connections
- [[NVIDIA-OpenShell]] - secure runtime installed by NemoClaw.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - adjacent agent workflow toolkit.
- [[Nemotron]] - NVIDIA open model family referenced by the NemoClaw docs.
- [[Nemotron-3-Nano-Omni]] - current omnimodal Nemotron model referenced by NVIDIA for NemoClaw/OpenShell video reasoning workflows.
- [[Nemotron-3-Super]] - current Nemotron usage cookbook includes OpenClaw setup with Nemotron 3 Super.
- [[NVIDIA-NIM]] - model-serving path for NVIDIA-hosted or self-hosted agents.
- [[NVIDIA-NeMo]] - broader lifecycle suite for building and optimizing AI agents.
- [[NVIDIA-DGX-Spark]] - local GB10 system explicitly positioned for NemoClaw agent development.
- [[NVIDIA-DGX-Station]] - larger GB300 deskside system explicitly positioned for NemoClaw agent development.

## Source Excerpts
- NVIDIA's NemoClaw docs describe an alpha preview for running OpenClaw assistants with OpenShell and NVIDIA models.
