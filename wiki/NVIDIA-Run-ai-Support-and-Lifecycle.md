# NVIDIA Run:ai Support and Lifecycle

**Type:** Support Policy
**Tags:** NVIDIA, Run:ai, support policy, lifecycle, self-hosted, version lifecycle, AI Enterprise
**Related:** [[NVIDIA-Run-ai]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-AI-Enterprise-Lifecycle-Policy]], [[NVIDIA-Enterprise-Support-and-Services]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Mission-Control]], [[NIM-for-Large-Language-Models]], [[NIM-for-LLM-Benchmarking-Guide]], [[NGC]]
**Sources:** https://run-ai-docs.nvidia.com/self-hosted/support-policy/product-support-policy, https://run-ai-docs.nvidia.com/self-hosted/support-policy/product-version-life-cycle, https://run-ai-docs.nvidia.com/self-hosted/getting-started/installation, https://docs.nvidia.com/ai-enterprise/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Run:ai Support and Lifecycle is the current NVIDIA Run:ai self-hosted support-policy and version-lifecycle surface. It defines full support, extended support, end-of-support behavior, versioning rules, supported component alignment, and current self-hosted release timelines. As of the current Run:ai docs, v2.24 is the latest self-hosted version, released January 18, 2026, with full support through October 18, 2026 and extended support through January 18, 2027.

## Detail

### Purpose
Use this page when a question asks which Run:ai self-hosted versions are supported, what fixes are available in each support phase, how Run:ai versioning works, or how Run:ai support connects to [[NVIDIA-AI-Enterprise]] lifecycle planning.

### Support phases
- Full support covers critical and important bug fixes for the first 9 months after a major version release.
- Extended support covers critical bug fixes from months 10 through 12 after a major version release.
- End of support starts after month 12, when updates stop and customers should move to a supported Run:ai version.
- Run:ai uses semantic-style versioning where the major/minor pair identifies the major version and the patch field is focused on bug fixes and security updates.
- Run:ai Control Plane, Run:ai Cluster, and Run:ai CLI are released together with the same version number.
- A supported self-hosted environment expects the control plane to be equal to or newer than each Run:ai cluster, and the CLI to match the cluster version.

### Current version lifecycle
- Run:ai 2.24 is marked latest in the current self-hosted docs.
- Run:ai 2.24: released January 18, 2026; full support ends October 18, 2026; extended support ends January 18, 2027.
- Run:ai 2.23: released September 28, 2025; full support ends June 28, 2026; extended support ends September 28, 2026.
- Run:ai 2.22: released July 13, 2025; full support ended April 13, 2026; extended support ends July 13, 2026.
- Run:ai 2.21 and 2.20 have already reached end of support as of April 29, 2026.

### NVIDIA context
Run:ai self-hosted is part of the AI Enterprise infrastructure/orchestration layer, while Run:ai SaaS remains a separate offering. Use [[NVIDIA-Run-ai]] for platform capabilities and deployment concepts, [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] for broader AI Enterprise branch compatibility, and [[NVIDIA-Enterprise-Support-and-Services]] for support cases and entitlement workflows.

## Connections
- [[NVIDIA-Run-ai]] - canonical product page for Run:ai workload and GPU orchestration.
- [[NVIDIA-AI-Enterprise]] - current AI Enterprise docs include Run:ai self-hosted in the enterprise software stack.
- [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] - validates Run:ai alignment with GPU drivers and Kubernetes operators.
- [[NVIDIA-Enterprise-Support-and-Services]] - support entitlement, support cases, and escalation path around supported Run:ai environments.
- [[NVIDIA-GPU-Operator]] - Kubernetes GPU infrastructure whose compatibility matters for self-hosted Run:ai.
- [[NVIDIA-Mission-Control]] - Run:ai is used as the Kubernetes AI workload orchestration layer in Mission Control workflows.
- [[NIM-for-Large-Language-Models]] and [[NIM-for-LLM-Benchmarking-Guide]] - Run:ai is used to schedule and size LLM NIM inference workloads.
- [[NGC]] - Run:ai self-hosted installation docs identify NGC as the recommended artifact source starting with v2.24.

## Source Excerpts
- The support policy defines full support, extended support, and end-of-support periods for Run:ai self-hosted releases.
- The version lifecycle table lists v2.24 as latest with support dates extending into 2027.
- The installation docs describe connected and air-gapped self-hosted installation types and identify NGC as the recommended artifact source.

## Resources
- [Run:ai Product Support Policy](https://run-ai-docs.nvidia.com/self-hosted/support-policy/product-support-policy)
- [Run:ai Product Version Life Cycle](https://run-ai-docs.nvidia.com/self-hosted/support-policy/product-version-life-cycle)
- [Run:ai Self-hosted Installation](https://run-ai-docs.nvidia.com/self-hosted/getting-started/installation)
- [NVIDIA AI Enterprise Docs Hub](https://docs.nvidia.com/ai-enterprise/index.html)
