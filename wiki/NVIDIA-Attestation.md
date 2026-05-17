# NVIDIA Attestation

**Type:** Technology
**Tags:** NVIDIA, attestation, confidential computing, NRAS, RIM, OCSP, security
**Related:** [[NVIDIA-Hopper-Architecture]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-OpenShell]], [[DOCA-App-Shield]], [[NVIDIA-DCGM]], [[NVIDIA-Data-Center-GPU-Drivers]]
**Sources:** https://docs.nvidia.com/attestation/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Attestation is the documentation surface for NVIDIA's attestation suite, which supports integrity and security verification for confidential-computing devices and platforms. The suite includes NVIDIA Remote Attestation Service (NRAS), Reference Integrity Manifest (RIM) Service, and NVIDIA OCSP Service.

## Detail

### Purpose
Confidential computing protects sensitive data and code while in use, but users also need to verify the hardware and software state before trusting a platform. NVIDIA Attestation provides that verification layer for secure AI training, protected inference, and model/IP protection workflows.

### Key capabilities
- Remote attestation for NVIDIA confidential-computing environments.
- Reference integrity manifest services.
- OCSP service for certificate/status validation.
- Integration with secure AI training, protected inference, and IP protection workflows.

### NVIDIA context
Attestation ties hardware trust to the AI software stack. It is relevant for regulated enterprise inference, sensitive training workloads, confidential GPU platforms, and any deployment that needs stronger proof of platform integrity.

## Connections
- [[NVIDIA-Hopper-Architecture]] - Hopper introduced confidential-computing features in the data center GPU context.
- [[NVIDIA-Blackwell-Architecture]] - latest data center platforms continue the confidential AI direction.
- [[NVIDIA-AI-Enterprise]] - enterprise AI deployments need security and compliance controls.
- [[NVIDIA-OpenShell]] - agent runtime security is a separate but related trust boundary.
- [[DOCA-App-Shield]] - App Shield inspects runtime host or VM state from the DPU side, complementing trust verification.
- [[NVIDIA-Data-Center-GPU-Drivers]] - driver and platform state can be part of secure deployment posture.

## Source Excerpts
- NVIDIA Attestation docs describe NRAS, RIM Service, and NVIDIA OCSP Service for integrity verification.
