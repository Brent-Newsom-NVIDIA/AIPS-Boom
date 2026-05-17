# DOCA Telemetry Service

**Type:** Service
**Tags:** NVIDIA, DOCA, telemetry, DTS, BlueField, Prometheus, OpenTelemetry, NetFlow, monitoring, observability
**Related:** [[NVIDIA-DOCA]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-DCGM]], [[NVIDIA-NetQ]], [[NVIDIA-Mission-Control]], [[DOCA-Flow]], [[DOCA-PCC]], [[NVIDIA-Spectrum-X]], [[Morpheus]]
**Sources:** https://docs.nvidia.com/doca/sdk/doca-telemetry-service-guide/index.html
**Last Updated:** 2026-04-29

## Summary
DOCA Telemetry Service (DTS) is NVIDIA's DOCA service for collecting, aggregating, and exporting telemetry from BlueField and host environments. It belongs in the wiki as the DOCA-side observability service: the place to connect DPU/network counters, BlueField performance data, RDMA notifications, Prometheus/OpenTelemetry exports, and operations tools such as [[NVIDIA-DCGM]], [[NVIDIA-NetQ]], and [[NVIDIA-Mission-Control]].

## Detail
The current DOCA 3.3.0 guide presents DTS as a service with configurable providers and data outputs. It can be deployed from the built-in DOCA service image on BlueField, through a DOCA service container from NGC, or on a host. The docs also include a Grafana monitoring deployment path.

Data providers in the current guide include sysfs, ethtool counters, traffic control information, network interfaces, NVIDIA System Management Interface, [[NVIDIA-DCGM]], BlueField performance, diagnostic data, RDMA notifications, vNIC metrics, adaptive retransmission, PPCC Ethernet, and aggregation providers such as Fluent and Prometheus. That makes DTS a bridging layer between low-level DPU/network hardware state and higher-level AI factory monitoring.

Output options include local storage, Prometheus exporter, NetFlow exporter, OpenTelemetry exporter, Prometheus remote write, load balancer exporter, and distributed real-time analysis exporter. In the wiki graph, this connects DOCA service telemetry to fabric operations, congestion-control tuning, and security analytics rather than leaving observability buried inside individual BlueField or networking pages.

## Connections
- [[NVIDIA-DOCA]] - DTS is a DOCA service in the current DOCA 3.3.0 docs.
- [[NVIDIA-BlueField-DPU]] - BlueField can run the built-in DOCA service image and expose DPU/network telemetry.
- [[NVIDIA-DCGM]] - DTS includes an NVIDIA DCGM provider, linking GPU and DPU/network observability.
- [[NVIDIA-NetQ]] - NetQ is the network operations layer adjacent to DTS data collection.
- [[NVIDIA-Mission-Control]] - Mission Control consumes broader AI factory telemetry and operations signals.
- [[DOCA-Flow]] - packet-processing flows and counters can be analyzed alongside DTS telemetry.
- [[DOCA-PCC]] - programmable congestion-control workflows need fabric telemetry and feedback.
- [[NVIDIA-Spectrum-X]] - Ethernet AI fabrics depend on telemetry for congestion, link, and transport health.
- [[Morpheus]] - security analytics can consume infrastructure telemetry from DPU-side sources.

## Source Excerpts
- "DOCA Telemetry Service Guide"
- "Prometheus Exporter"
- "OpenTelemetry Exporter"

