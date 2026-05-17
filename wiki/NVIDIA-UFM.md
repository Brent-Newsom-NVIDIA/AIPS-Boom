# NVIDIA UFM (Unified Fabric Manager)

**Type:** Tool
**Tags:** NVIDIA, UFM, InfiniBand, Network Management, Fabric Management, HPC, AI Networking
**Related:** [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-Spectrum-X]], [[NVIDIA-ConnectX-InfiniBand]], [[NVIDIA-DOCA-OFED]], [[NVIDIA-MLNX-OFED]], [[NVIDIA-Firmware-Tools]], [[NVIDIA-NetQ]], [[NVIDIA-Mission-Control]], [[NVIDIA-DCGM]], [[NVIDIA-DGX]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-10

## Summary
NVIDIA UFM (Unified Fabric Manager) is the network management and monitoring platform for NVIDIA InfiniBand and Ethernet AI fabrics. UFM provides subnet management, topology discovery, routing computation, health monitoring, telemetry, quality of service enforcement, and AI workload traffic isolation for large-scale InfiniBand and Spectrum-X Ethernet clusters. It is the control plane for NVIDIA networking in AI supercomputers and HPC environments, supporting fabrics from dozens to hundreds of thousands of endpoints.

## Detail

### Purpose
Large-scale InfiniBand and Ethernet AI fabrics are complex systems with thousands of switches and NICs that require automated subnet management, topology-aware routing, fault detection, and traffic optimization. Without UFM, fabric operators would need to manually configure routing tables, detect failing links, and manage traffic isolation — tasks that are impractical at hyperscale. UFM automates the full fabric lifecycle.

### Key Features
- Subnet Management Agent (SMA): InfiniBand Subnet Manager embedded in UFM for end-to-end routing
- Topology discovery: automatic detection of fabric topology and device inventory
- Smart Routing: topology-aware routing algorithms (fat-tree, dragonfly, torus) for optimal load balancing
- Telemetry and monitoring: per-port counter collection, link error monitoring, temperature and power tracking
- UFM Telemetry: high-rate telemetry streaming via Prometheus and Kafka for real-time fabric observability
- Job isolation: traffic isolation between AI training jobs to prevent cross-job interference
- Predictive failure: ML-based link error prediction for proactive maintenance
- REST API: full management via RESTful interface for automation and integration
- UFM Cyber-AI: anomaly detection for network security and performance regressions
- Supports fabrics up to 10,000+ nodes

### Use Cases
- InfiniBand subnet management for DGX SuperPOD clusters
- Fabric health monitoring and alerting in AI factories
- Traffic isolation between concurrent LLM training jobs
- Network performance analysis for NCCL collective optimization
- Predictive maintenance for large HPC/AI fabric infrastructure
- Integration with Kubernetes and Slurm for job-aware routing

### Hardware Requirements / Compatibility
- Deployed as a software appliance (VM or bare metal server)
- Manages: Quantum (IB) and Spectrum (Ethernet) switch families
- ConnectX-6/7/8 NICs managed as fabric endpoints
- Minimum: Linux server with 16 cores, 64GB RAM (scales with fabric size)
- REST API accessible from any client

### Language Bindings / APIs
- REST API (JSON, HTTPS)
- Python SDK for UFM REST API automation
- Prometheus/Grafana integration for telemetry dashboards
- Kafka for streaming fabric telemetry

## Connections
- [[NVIDIA-Quantum-InfiniBand]] — UFM is the subnet manager and control plane for Quantum IB fabrics
- [[NVIDIA-Spectrum-X]] — UFM extended to manage Spectrum-X Ethernet AI fabrics
- [[NVIDIA-ConnectX-InfiniBand]] — UFM manages ConnectX NIC endpoint configuration and routing
- [[NVIDIA-DOCA-OFED]] — current host driver layer for NVIDIA endpoints participating in managed fabrics.
- [[NVIDIA-MLNX-OFED]] — legacy OFED host stack still relevant to older InfiniBand fabric deployments.
- [[NVIDIA-Firmware-Tools]] — MFT handles device-level firmware and link diagnostics while UFM manages the fabric.
- [[NVIDIA-NetQ]] — NetQ provides adjacent network operations visibility, validation, and NVLink management.
- [[NVIDIA-Mission-Control]] — Mission Control incorporates fabric-aware operations including UFM and network/NVLink observability.
- [[NVIDIA-DCGM]] — DCGM monitors GPU health; UFM monitors network fabric health; complementary tools
- [[NVIDIA-DGX]] — DGX SuperPOD deployments use UFM as the standard fabric management solution

## Resources
- [UFM Official Page](https://www.nvidia.com/en-us/networking/infiniband/ufm/)
- [UFM Documentation](https://docs.nvidia.com/networking/ufm/)
- [NVIDIA Networking Portfolio](https://www.nvidia.com/en-us/networking/)
