# NVIDIA OpenShell

**Type:** Platform
**Tags:** NVIDIA, OpenShell, agents, sandbox, security, policy, runtime
**Related:** [[NVIDIA-NemoClaw]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NVIDIA-Attestation]], [[NVIDIA-NIM]], [[Nemotron]], [[Nemotron-3-Nano-Omni]], [[NeMo-Guardrails]], [[NVIDIA-DGX-Spark]], [[NVIDIA-DGX-Station]]
**Sources:** https://docs.nvidia.com/openshell/index.html, https://www.nvidia.com/en-us/products/workstations/dgx-spark/, https://www.nvidia.com/en-us/products/workstations/dgx-station/, https://developer.nvidia.com/blog/nvidia-nemotron-3-nano-omni-powers-multimodal-agent-reasoning-in-a-single-efficient-open-model
**Last Updated:** 2026-04-29

## Summary
NVIDIA OpenShell is a secure runtime for autonomous AI agents. It provides sandboxed execution environments, declarative policies, and permission boundaries designed to protect data, credentials, and infrastructure while agents use tools.

## Detail

### Purpose
Agentic systems can call tools, read files, invoke services, and perform long-running work. OpenShell addresses the risk side of that model by placing agents inside controlled sandboxes with explicit policies and least-privilege access.

### Key capabilities
- Sandboxed execution environments for autonomous agents.
- Declarative policies controlling file access, network activity, and credential exposure.
- CLI-oriented quickstart for creating a sandbox.
- Integration point for [[NVIDIA-NemoClaw]] and broader NVIDIA agent workflows.

### NVIDIA context
OpenShell is important because NVIDIA's agent stack is not only about models and inference. It also includes runtime safety, permissions, and operational controls for enterprise agent deployments.
The DGX Spark and DGX Station product pages make that local: OpenShell-backed NemoClaw agents are positioned for secure always-on assistant workflows on NVIDIA desktop AI systems. NVIDIA's Nemotron 3 Nano Omni technical blog adds a current example of OpenShell/NemoClaw use for privacy-oriented local video-reasoning agents.

## Connections
- [[NVIDIA-NemoClaw]] - OpenShell is installed by NemoClaw for safer assistant execution.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - agent workflows can benefit from sandboxed tool execution.
- [[NeMo-Guardrails]] - policy and safety layer for LLM/agent behavior.
- [[NVIDIA-Attestation]] - broader NVIDIA trust and integrity story for secure AI infrastructure.
- [[NVIDIA-NIM]] - model endpoints used by agents running inside controlled environments.
- [[Nemotron-3-Nano-Omni]] - current omnimodal Nemotron model connected to OpenShell/NemoClaw video reasoning examples.
- [[NVIDIA-DGX-Spark]] - compact local system for running OpenShell-backed agent experiments.
- [[NVIDIA-DGX-Station]] - larger local GB300 system for agent development and deployment experiments.

## Source Excerpts
- NVIDIA OpenShell docs describe sandboxed execution, declarative policies, and constrained permissions for autonomous agents.
