# NVIDIA NIM on GKE

**Type:** Deployment Guide
**Tags:** NVIDIA, NIM, Google Kubernetes Engine, GKE, Kubernetes, Google Cloud, inference, cloud deployment
**Related:** [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[NIM-for-LLM-Benchmarking-Guide]], [[NVIDIA-NIM-Operator]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-AI-Enterprise-Cloud-Deployment]], [[NVIDIA-Cloud-Native-Technologies]], [[NGC]]
**Sources:** https://docs.nvidia.com/nim/cloud/gke/latest/index.html, https://docs.nvidia.com/nim/cloud/gke/latest/overview.html, https://docs.nvidia.com/nim/cloud/gke/latest/hardware.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM on GKE is NVIDIA's guide for deploying NIM microservices on Google Kubernetes Engine. Current docs offer two deployment paths: an integrated NIM on GKE Kubernetes application from Google Cloud Marketplace for a quick running example, and a Terraform/Helm path for teams that want full control over their cluster and NIM deployment.

## Detail

### Purpose
NIM on GKE gives Google Cloud users a managed Kubernetes path for self-hosting NIM endpoints while keeping OpenAI-style model APIs. It is useful when teams want cloud-native scaling, Google Cloud operations, and NVIDIA model-serving containers in one deployment pattern.

### Current scope
- Integrated NIM on GKE Kubernetes application for quick deployment through Google Cloud Marketplace.
- Terraform and Helm workflow through NVIDIA's `nim-deploy` examples for custom clusters.
- Prerequisites include a GCP account, billing, project ownership or a sufficiently privileged service account, and multiple Google Cloud IAM roles.
- Deployment flow selects deployment name, service account, cluster/GPU location, NIM model name, and terms acceptance.
- Deployment typically takes about 15-20 minutes depending on model and cluster parameters.
- Testing uses `gcloud` cluster credentials, `kubectl` port forwarding, `/v1/health/ready`, `/v1/models`, `/v1/chat/completions`, `/v1/ranking`, and `/v1/embeddings` endpoint examples.
- Optional load testing and performance measurement are documented through NVIDIA's generative AI performance tooling.
- Hardware support docs list GKE configurations for H100, A100, and L4-backed model profiles.

### NVIDIA context
NIM on GKE is one cloud-specific deployment guide within the broader [[NVIDIA-NIM]] operations surface. It complements [[NVIDIA-NIM-Operator]] and [[NVIDIA-GPU-Operator]] for Kubernetes lifecycle management, while [[NVIDIA-AI-Enterprise-Cloud-Deployment]] covers the broader AI Enterprise cloud deployment context across providers.

## Connections
- [[NVIDIA-NIM]] - NIM on GKE is a cloud-specific path for running NIM microservices.
- [[NIM-for-Large-Language-Models]] - LLM NIMs are common targets for the GKE deployment path.
- [[NIM-for-LLM-Benchmarking-Guide]] - GKE docs point to performance testing after deployment.
- [[NVIDIA-NIM-Operator]] - Kubernetes lifecycle manager adjacent to production NIM deployments.
- [[NVIDIA-GPU-Operator]] - underlying Kubernetes GPU enablement layer.
- [[NVIDIA-Container-Toolkit]] - runtime layer for GPU-enabled containers in Kubernetes nodes.
- [[NVIDIA-AI-Enterprise-Cloud-Deployment]] - broader cloud deployment guide for AI Enterprise and managed Kubernetes paths.
- [[NVIDIA-Cloud-Native-Technologies]] - NVIDIA cloud-native hub for Kubernetes, operators, and container deployment.
- [[NGC]] - NIM containers and artifacts are distributed through NVIDIA catalog/registry workflows.

## Source Excerpts
- NVIDIA docs describe two NIM on GKE paths: the integrated Kubernetes application and a Terraform/Helm custom-cluster path.
- Current hardware docs list optimized model profiles across H100, A100, and L4 GKE configurations.

## Resources
- [NIM on GKE Overview](https://docs.nvidia.com/nim/cloud/gke/latest/overview.html)
- [NIM on GKE Hardware Support](https://docs.nvidia.com/nim/cloud/gke/latest/hardware.html)
