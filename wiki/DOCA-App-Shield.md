# DOCA App Shield

**Type:** Library
**Tags:** NVIDIA, DOCA, App Shield, BlueField, DPU, cybersecurity, intrusion detection, forensics, host introspection, DMA
**Related:** [[NVIDIA-DOCA]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-Attestation]], [[Morpheus]], [[DOCA-Telemetry-Service]], [[NVIDIA-DCGM]], [[NVIDIA-DOCA-Platform-Framework]], [[NVIDIA-Firmware-Tools]]
**Sources:** https://docs.nvidia.com/doca/sdk/doca-app-shield/index.html; https://docs.nvidia.com/networking/display/bfswtroubleshooting/DOCA+App+Shield
**Last Updated:** 2026-04-29

## Summary
DOCA App Shield is NVIDIA's DOCA API for host and VM memory introspection from a BlueField DPU. It is a security and forensics surface: App Shield uses DPU services and DMA access to collect and analyze host memory in real time, giving operators a way to detect suspicious processes, libraries, modules, containers, networking state, privileges, and other host artifacts from outside the host operating system.

## Detail
The current DOCA 3.3.0 App Shield guide positions the API as an intrusion-detection and forensics mechanism that is robust against attacks on the host, transparent to the host, and minimally disruptive to application execution. The host does not install a traditional security agent; instead, App Shield reads host or VM memory from the DPU side after the needed configuration files are generated.

The sample coverage makes the query surface clear. Current samples include process lists, threads, virtual address descriptors, environment variables, privileges, containers, network scans, process network state, loaded libraries, kernel modules, and interfaces. That makes App Shield a first-class wiki topic for BlueField security monitoring rather than a footnote under [[NVIDIA-DOCA]].

App Shield also belongs near [[NVIDIA-Attestation]] and [[Morpheus]]. Attestation answers whether a platform should be trusted; App Shield inspects runtime host state from the DPU; Morpheus is the GPU-accelerated AI cybersecurity pipeline that can analyze security telemetry at scale.

## Connections
- [[NVIDIA-DOCA]] - App Shield is a DOCA SDK API.
- [[NVIDIA-BlueField-DPU]] - BlueField provides the independent DPU execution and DMA access path.
- [[NVIDIA-Attestation]] - attestation verifies platform integrity while App Shield inspects runtime host state.
- [[Morpheus]] - Morpheus can analyze security telemetry and anomaly signals related to App Shield outputs.
- [[DOCA-Telemetry-Service]] - DTS covers operational telemetry while App Shield covers security introspection telemetry.
- [[NVIDIA-DCGM]] - GPU fleet health can be correlated with DPU-side security and telemetry signals.
- [[NVIDIA-DOCA-Platform-Framework]] - DPF can orchestrate BlueField services in cloud environments.
- [[NVIDIA-Firmware-Tools]] - App Shield troubleshooting includes BlueField firmware configuration through MFT-style workflows.

## Source Excerpts
- "DOCA App Shield API"
- "intrusion detection and forensics investigation"
- "App Shield uses a DMA device"

