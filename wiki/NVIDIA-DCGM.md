# NVIDIA DCGM (Data Center GPU Manager)

**Type:** Tool
**Tags:** NVIDIA, monitoring, telemetry, GPU, data center, health, Prometheus, Kubernetes, DevOps, observability
**Related:** [[NVIDIA-GPU-Operator]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[DOCA-Telemetry-Service]], [[NVIDIA-NVSentinel]], [[NVIDIA-Fleet-Intelligence]], [[NVIDIA-Project-GPUd]], [[NVIDIA-Container-Toolkit]], [[NVIDIA-DGX]], [[Nsight-Systems]], [[CUPTI]], [[NVIDIA-AI-Enterprise]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
NVIDIA DCGM (Data Center GPU Manager) is a suite of tools for managing and monitoring NVIDIA GPUs in cluster environments. It provides comprehensive GPU health monitoring (temperature, power, clocks, ECC error counts, NVLink errors), telemetry collection for Prometheus/Grafana integration, active health diagnostics, GPU policy enforcement, and job-level GPU accounting. DCGM is the standard GPU observability solution for production AI infrastructure, bundled with NVIDIA AI Enterprise and deployed by the GPU Operator's `dcgm-exporter` in Kubernetes clusters.

## Detail

### Purpose
In a data center with hundreds or thousands of GPUs, operators need visibility into GPU health, performance, and utilization — and the ability to detect degraded hardware before it causes training job failures. DCGM centralizes this: it runs as a daemon on each GPU node, continuously collecting 200+ GPU metrics, running periodic diagnostic tests, enforcing compute policies (clock limits, power caps), and exposing all data via a REST API and Prometheus metrics endpoint. In multi-tenant environments, DCGM provides per-job GPU accounting to track resource consumption by user or job.

### Key Features
- **Telemetry Collection (200+ Metrics):**
  - Utilization: GPU SM utilization, memory utilization, encoder/decoder utilization
  - Memory: used/free VRAM, PCIe/NVLink bandwidth, memory bandwidth
  - Thermal/Power: GPU temperature, power consumption, clock speeds (SM, memory, graphics)
  - Errors: Single-bit and double-bit ECC memory errors, retired pages, PCIe replay errors, NVLink errors
  - Compute: Tensor Core activity, FP16/FP32/FP64 utilization rates
- **Active Health Diagnostics:**
  - `dcgmi diag` — run GPU diagnostic levels 1–4 (quick sanity to full stress test); ISOLATE, INFORM, FAIL result codes
  - Built-in tests: memory bandwidth, SM stress, PCIe bandwidth, NVLink bandwidth, power draw stability
  - Used pre-job to verify GPU health before launching expensive training runs
- **Group Management:** Logical GPU groups for applying policies and collecting metrics across GPU subsets
- **Job Accounting:** `dcgmi stats` — per-GPU-job resource usage tracking; correlates GPU utilization to submitted batch jobs (SLURM integration)
- **Policy Engine:** Auto-enforce GPU settings — power capping, ECC error response, clock limits; trigger actions on threshold crossing
- **Go Bindings & Python Bindings:** DCGM client libraries for integration with custom monitoring pipelines
- **DCGM Exporter (Kubernetes):** Go-based Prometheus exporter that wraps DCGM; deployed by GPU Operator; scrape endpoint `/metrics` with all GPU metrics; integrates with standard Grafana dashboards
- **Profiling Groups:** DCGM supports hardware performance counter collection via CUPTI integration for L3 cache analysis, NVLink traffic monitoring, and Tensor Core pipe utilization

### Use Cases
- Production GPU cluster monitoring in AI training infrastructure (DGX SuperPOD, cloud GPU clusters)
- Kubernetes GPU observability: DCGM exporter + Prometheus + Grafana dashboards (NVIDIA provides official Grafana dashboard templates)
- Pre-flight GPU health checks before launching large training jobs to avoid wasted compute time
- Detecting ECC memory errors that could cause silent data corruption in LLM training
- Alerting on thermal events (GPU temperature >85°C) or power anomalies for preventive maintenance
- Job-level GPU accounting in SLURM-based HPC clusters for resource billing and capacity planning

### Hardware Requirements / Compatibility
- **GPU:** NVIDIA Kepler (K80) and newer; full feature set on Volta, Ampere, Hopper, and Blackwell
- **OS:** Ubuntu 18.04/20.04/22.04/24.04, RHEL 7/8/9, SLES 15; distributed as a `.deb`/`.rpm` package or Docker container
- **Driver:** NVIDIA driver r450+ recommended; r535+ for H100 full feature support
- **Kubernetes:** DCGM Exporter deployed via GPU Operator; K8s 1.19+

### Language Bindings / APIs
- **CLI (`dcgmi`):** `dcgmi discovery -l` (list GPUs), `dcgmi diag -r 1` (run level 1 diagnostic), `dcgmi stats -e` (enable job stats), `dcgmi group -c myGroup` (create group)
- **REST API:** DCGM daemon exposes REST API on localhost for programmatic metric collection and group management
- **Python Bindings:** `pydcgm` — Python wrapper for DCGM client library; used in custom monitoring scripts
- **Go Bindings:** Used by DCGM Exporter and other NVIDIA Kubernetes tools
- **C++ API:** Low-level `dcgm.h` C API for highest-performance metric collection
- **Prometheus:** DCGM Exporter metrics at `http://<node>:9400/metrics` — standard Prometheus scrape target

## Connections
- [[NVIDIA-GPU-Operator]] — GPU Operator deploys and manages DCGM Exporter on all Kubernetes GPU nodes as part of its standard stack
- [[NVIDIA-Enterprise-RA-Observability-Guide]] — Enterprise RA observability guidance uses DCGM/DCGM Exporter as the GPU telemetry source for dashboards and alerts.
- [[DOCA-Telemetry-Service]] — DTS includes an NVIDIA DCGM provider, connecting GPU telemetry with DPU/network telemetry workflows.
- [[NVIDIA-NVSentinel]] — Kubernetes-native fault remediation can use DCGM-provided GPU health signals.
- [[NVIDIA-Fleet-Intelligence]] — managed fleet health and predictive failure signals sit above low-level DCGM telemetry.
- [[NVIDIA-Project-GPUd]] — GPUd can detect GPU/fabric issues using DCGM-adjacent signals.
- [[NVIDIA-Container-Toolkit]] — Container Toolkit enables DCGM to run in a container while accessing host GPU hardware
- [[NVIDIA-DGX]] — DCGM is the standard monitoring tool for DGX systems; Base Command Manager integrates DCGM for cluster health
- [[Nsight-Systems]] — Nsight Systems provides developer-level profiling traces; DCGM provides operations-level production monitoring
- [[CUPTI]] — DCGM uses CUPTI (via profiling groups) for hardware counter collection in advanced monitoring scenarios
- [[NVIDIA-AI-Enterprise]] — DCGM is bundled in AI Enterprise for production-grade GPU monitoring with enterprise SLA

## Resources
- [DCGM Developer Page](https://developer.nvidia.com/dcgm)
- [DCGM Documentation](https://docs.nvidia.com/datacenter/dcgm/latest/user-guide/index.html)
- [DCGM Exporter GitHub](https://github.com/NVIDIA/dcgm-exporter)
- [DCGM API Reference](https://docs.nvidia.com/datacenter/dcgm/latest/dcgm-api/index.html)
- [Grafana Dashboard for DCGM](https://grafana.com/grafana/dashboards/12239)
