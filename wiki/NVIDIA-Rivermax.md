# NVIDIA Rivermax

**Type:** SDK
**Tags:** NVIDIA, Rivermax, networking SDK, media streaming, data streaming, GPUDirect, SMPTE ST 2110, BlueField, ConnectX, DOCA
**Related:** [[NVIDIA-DOCA]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-ConnectX-InfiniBand]], [[GPUDirect-RDMA]], [[NVIDIA-Holoscan]], [[NVIDIA-DeepStream]], [[NVIDIA-Video-Codec-SDK]]
**Sources:** https://developer.nvidia.com/networking/rivermax; https://developer.nvidia.com/networking/rivermax/faq; https://docs.nvidia.com/doca/sdk/DOCA-Rivermax/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Rivermax is NVIDIA's optimized networking SDK for media and data streaming applications. It uses NVIDIA ConnectX NICs and BlueField DPUs to deliver kernel-bypass, low-latency, high-throughput data movement, including GPUDirect paths that move payloads directly between network hardware and GPU memory. Rivermax is especially important for SMPTE ST 2110 media workflows, broadcast, virtual production, healthcare imaging, industrial vision, and other streaming applications that need deterministic timing and minimal CPU overhead.

## Detail
Rivermax is a licensed SDK rather than an open-source library. NVIDIA provides API access, example/reference code, advanced samples, tuning guidance, and GitHub sample material for supported workflows. Current developer material describes it as a unified cross-platform SDK spanning Linux, Windows, x86, Arm, containers, and virtualized environments on compatible adapters.

The core technical idea is to keep packet movement off the CPU as much as possible. Rivermax uses kernel bypass, hardware packet pacing, packet handling offloads, and GPUDirect to reduce copies and jitter. For media workflows, it supports ST 2110-style streaming, PTP timing, NMOS integration, ST 2022-7 redundancy, and stream reconstruction patterns.

Rivermax is also now exposed through DOCA Rivermax. The DOCA Rivermax docs describe it as the DOCA API for Rivermax and call out hardware-accelerated packet placement plus header/payload splitting. This connects Rivermax to the broader [[NVIDIA-DOCA]] ecosystem rather than leaving it as an isolated media SDK.

For the broader wiki, Rivermax should connect GPU-accelerated streaming, [[NVIDIA-Holoscan]] sensor pipelines, [[NVIDIA-DeepStream]] video analytics, [[NVIDIA-Video-Codec-SDK]], [[GPUDirect-RDMA]], and NVIDIA networking hardware.

## Connections
- [[NVIDIA-DOCA]] - DOCA Rivermax exposes Rivermax streaming acceleration through DOCA APIs.
- [[NVIDIA-BlueField-DPU]] - BlueField DPUs provide timing and hardware streaming acceleration for Rivermax deployments.
- [[NVIDIA-ConnectX-InfiniBand]] - ConnectX NICs are supported Rivermax network adapters.
- [[GPUDirect-RDMA]] - Rivermax uses GPUDirect-style direct paths between NICs and GPUs for streaming payloads.
- [[NVIDIA-Holoscan]] - Holoscan for Media and sensor pipelines can use Rivermax-style ST 2110 and high-throughput media ingest.
- [[NVIDIA-DeepStream]] - DeepStream handles video analytics after GPU-resident media streams enter the processing pipeline.
- [[NVIDIA-Video-Codec-SDK]] - Rivermax transports media streams while NVENC/NVDEC handle GPU video encode/decode.

## Source Excerpts
- "NVIDIA Rivermax is an optimized networking SDK for media and data streaming applications."
- "Rivermax supports both NVIDIA ConnectX network interface cards and NVIDIA BlueField data processing units."

