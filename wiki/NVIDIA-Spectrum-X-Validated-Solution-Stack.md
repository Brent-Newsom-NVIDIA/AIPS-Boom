# NVIDIA Spectrum-X Validated Solution Stack

**Type:** Compatibility Matrix
**Tags:** NVIDIA, Spectrum-X, validated solution stack, AI factory, GB300, B300, H200, Cumulus Linux, DOCA, NCCL, HPC-X, Network Operator, DTS
**Related:** [[NVIDIA-Spectrum-X]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-NVL72-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-DGX-B300]], [[NVIDIA-HGX]], [[NVIDIA-Cumulus-Linux]], [[NVIDIA-DOCA]], [[NVIDIA-DOCA-OFED]], [[NVIDIA-HPC-X]], [[NCCL]], [[NVIDIA-Network-Operator]], [[DOCA-Telemetry-Service]], [[NVIDIA-NetQ]]
**Sources:** https://docs.nvidia.com/networking/software/spectrumx-solution-stack/index.html
**Last Updated:** 2026-05-09

## Summary
NVIDIA Spectrum-X Validated Solution Stack is the current NVIDIA compatibility page for tested Spectrum-X AI factory software and firmware combinations. It is the "which versions go together" page for Spectrum-X deployments with [[NVIDIA-GB300-NVL72]], [[NVIDIA-DGX-B300]]/B300, and H200-class systems.

## Detail

### Purpose
Use this page when a customer or architect asks what validated component versions belong together for a current Spectrum-X AI factory cluster. It complements [[NVIDIA-Spectrum-X]] by tracking the tested stack rather than the product concept.

### Current validated configuration signal
The latest surfaced configuration in the public docs is April 2026, version 2.1.2.

For GB300 deployments, the April 2026 v2.1.2 table includes:
- GB300 FW/SW Package 1.0.6.
- Cumulus Linux for Spectrum-4 5.16.1.
- ConnectX-8 firmware 40.48.1120.
- DOCA-Host 3.3.0-088814 / 3.3.0-088813.
- NetQ 5.1.0.
- NCCL 2.29.2.
- HPC-X 2.26.
- Network Operator 26.01.
- DTS 1.24.3.

For B300 deployments, the April 2026 v2.1.2 table includes:
- B300 FW/SW package 1.4.3 / 1.4.2.
- Cumulus Linux for Spectrum-4 5.16.1.
- ConnectX-8 firmware 40.48.1120.
- DOCA-Host 3.3.0-088814 / 3.3.0-088813.
- NetQ 5.1.0.
- NCCL 2.29.2.
- HPC-X 2.26.
- Network Operator 26.01.
- DTS 1.24.3.

For H200 deployments, the April 2026 v2.1.2 table includes Cumulus Linux 5.16.1, BlueField FW Bundle 3.3.0, DOCA-Host 3.3.0-088000, NetQ 5.1.0, NCCL 2.29.2, HPC-X 2.26, Network Operator 26.01, and DTS 1.24.3.

### NVIDIA context
This page is especially important for [[NVIDIA-Enterprise-Reference-Architectures]] because hardware reference designs only work in production when the network operating system, host driver, NIC firmware, communication libraries, Kubernetes operator, and telemetry stack are aligned. The page also makes clear that [[NVIDIA-Spectrum-X]] is now positioned as a production AI factory fabric for GB300 NVL72 and HGX systems.

## Connections
- [[NVIDIA-Spectrum-X]] - product/platform page for Ethernet AI networking.
- [[NVIDIA-Enterprise-AI-Factory]] - AI factory infrastructure requires validated network stack choices.
- [[NVIDIA-Enterprise-Reference-Architectures]] - Enterprise RAs depend on validated Spectrum-X software and firmware combinations.
- [[NVIDIA-NVL72-AI-Factory]] - GB300 NVL72 RA uses Spectrum-X networking.
- [[NVIDIA-HGX-AI-Factory]] - B300 HGX RA uses Spectrum-X networking.
- [[NVIDIA-GB300-NVL72]] - current GB300 NVL72 validated stack target.
- [[NVIDIA-DGX-B300]] - B300 system generation validated by the stack table.
- [[NVIDIA-HGX]] - HGX systems are one of the hardware targets for Spectrum-X validation.
- [[NVIDIA-Cumulus-Linux]] - switch OS component in the validated stack.
- [[NVIDIA-DOCA]] and [[NVIDIA-DOCA-OFED]] - host driver and networking software layer.
- [[NVIDIA-HPC-X]] and [[NCCL]] - communication libraries validated with Spectrum-X.
- [[NVIDIA-Network-Operator]] - Kubernetes deployment component for NVIDIA networking.
- [[DOCA-Telemetry-Service]] - DTS telemetry component listed in the validated stack.
- [[NVIDIA-NetQ]] - network operations component in the validated stack.

## Source Excerpts
- NVIDIA describes the Spectrum-X platform with GB300 NVL72 and HGX systems as the next-generation architecture for AI factories.
- The docs say the page catalogs products and versions rigorously tested together and endorsed by NVIDIA as the validated configuration.

## Resources
- [NVIDIA Spectrum-X Validated Solution Stack](https://docs.nvidia.com/networking/software/spectrumx-solution-stack/index.html)
