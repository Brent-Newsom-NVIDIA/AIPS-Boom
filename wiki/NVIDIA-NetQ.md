# NVIDIA NetQ

**Type:** Tool
**Tags:** NVIDIA, NetQ, network operations, observability, telemetry, Cumulus Linux, Spectrum, NVLink, troubleshooting
**Related:** [[NVIDIA-Cumulus-Linux]], [[NVIDIA-DSX-Air]], [[NVIDIA-Mission-Control]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[DOCA-Telemetry-Service]], [[OVS-DOCA]], [[NVIDIA-Spectrum-X]], [[NVIDIA-UFM]], [[NVLink]]
**Sources:** https://docs.nvidia.com/networking-ethernet-software/; https://docs.nvidia.com/networking-ethernet-software/cumulus-netq-51/
**Last Updated:** 2026-04-29

## Summary
NVIDIA NetQ is NVIDIA's network operations tool set for visibility, validation, monitoring, troubleshooting, and lifecycle workflows across Linux-based data center networks. The current public docs are NetQ 5.1 and cover device inventory, network monitoring, events, notifications, validation checks, flow analysis, connectivity verification, and NVLink management. In the wiki, NetQ should be treated as an operations and observability layer for [[NVIDIA-Cumulus-Linux]], [[NVIDIA-Spectrum-X]], [[NVLink]], and [[NVIDIA-Mission-Control]] environments.

## Detail
NVIDIA describes NetQ as a tool set that provides visibility into overlay and underlay networks and correlates configuration and operational state. The docs explicitly cover health and statistics from containers, virtual machines, hosts, switches, and ports, which makes NetQ relevant beyond a single switch OS page.

The NetQ 5.1 documentation includes inventory views for switches, hosts, DPUs, NICs, and device groups. It also includes monitoring areas for BGP, digital optics, DPUs, ECMP, EVPN, hosts, interfaces, IP addresses, LLDP, MAC addresses, MLAG, network topology, NICs, NTP, PTP, RoCE, STP, VLAN, and VXLAN.

Operationally, NetQ is important because it turns the NVIDIA Ethernet fabric into a queryable state system. Instead of debugging one node at a time, administrators can use validation checks, event monitoring, threshold-crossing events, What Just Happened events, gNMI streaming, cable validations, flow analysis, and connectivity verification.

Current docs also list NVLink management material, including NetQ for NVLink, NVLink bringup, service registration, KPI collection, alerts, licensing, partition management, NVOS upgrades, Prometheus monitoring, and troubleshooting. That ties NetQ into the broader AI factory operations picture alongside [[NVIDIA-Mission-Control]].

## Connections
- [[NVIDIA-Cumulus-Linux]] - Cumulus Linux includes NetQ agent/CLI integration for operational health.
- [[NVIDIA-DSX-Air]] - Air/DSX Air is the simulation companion for Cumulus and NetQ learning and validation.
- [[NVIDIA-Mission-Control]] - Mission Control docs reference NetQ/NMX-style visibility for NVLink and network telemetry.
- [[NVIDIA-Enterprise-RA-Observability-Guide]] - Enterprise RA observability guidance uses NetQ as the network telemetry source for dashboarding and alerting.
- [[DOCA-Telemetry-Service]] - DTS is the DOCA-side telemetry service for DPU and network metrics.
- [[OVS-DOCA]] - OVS-DOCA offloaded switching produces virtual networking state that network operations tools may need to validate.
- [[NVIDIA-Spectrum-X]] - NetQ monitors Ethernet fabric state that matters to Spectrum-X AI networking.
- [[NVIDIA-UFM]] - UFM covers fabric management while NetQ covers broader network validation and observability.
- [[NVLink]] - current NetQ docs include NVLink management and monitoring topics.

## Source Excerpts
- "NVIDIA NetQ is a network operations tool set that provides visibility into your overlay and underlay networks."
- "With NetQ, network operations change from a manual, reactive, node-by-node approach."
