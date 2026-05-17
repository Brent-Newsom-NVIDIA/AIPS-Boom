# NVIDIA CloudXR

**Type:** Technology
**Tags:** NVIDIA, CloudXR, XR, OpenXR, streaming, RTX, spatial computing
**Related:** [[NVIDIA-RTX]], [[NVIDIA-vGPU]], [[NVIDIA-Capture-SDK]], [[NVIDIA-Omniverse]], [[NVIDIA-Omniverse-Reference-Architectures]], [[NVIDIA-Video-Codec-SDK]], [[NVIDIA-Maxine]]
**Sources:** https://docs.nvidia.com/cloudxr-sdk/latest/index.html, https://docs.nvidia.com/cloudxr-sdk/latest/overview/overview.html, https://www.nvidia.com/en-us/design-visualization/solutions/cloud-xr/, https://docs.omniverse.nvidia.com/arch-diagrams/latest/ref-arch-diagrams/factory-dt-diagram.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA CloudXR is a GPU-accelerated XR streaming platform for delivering high-quality XR and spatial computing experiences from powerful servers to lightweight client devices over standard networks. It decouples rendering from display so compute-heavy XR applications can run on NVIDIA GPU servers while users interact through remote clients.

## Detail
CloudXR is built around OpenXR-compatible server-side applications and client SDKs for receiving streamed content. Current CloudXR documentation highlights CloudXR Runtime, client frameworks, CloudXR.js, web delivery, Apple platform support, and deployment across Windows, Linux, on-prem servers, cloud VMs, and containers.

In the wiki, CloudXR connects RTX rendering, capture/encode paths, GPU virtualization, Omniverse-style 3D workloads, and spatial computing delivery.

## Connections
- [[NVIDIA-RTX]] - RTX GPUs provide the rendering and AI acceleration base for high-fidelity XR.
- [[NVIDIA-vGPU]] - virtualized GPU infrastructure can support remote visualization.
- [[NVIDIA-Capture-SDK]] - display capture and streaming workflows are adjacent.
- [[NVIDIA-Video-Codec-SDK]] - video encode/decode is part of streaming pipelines.
- [[NVIDIA-Omniverse]] - spatial and simulation workloads can be streamed to clients.
- [[NVIDIA-Omniverse-Reference-Architectures]] - digital twin delivery architecture includes XR-style remote access patterns.

## Source Excerpts
- NVIDIA CloudXR docs describe a GPU-accelerated XR streaming platform over Ethernet, Wi-Fi, or cellular networks.
- The architecture separates server-side rendering from lightweight client display.
