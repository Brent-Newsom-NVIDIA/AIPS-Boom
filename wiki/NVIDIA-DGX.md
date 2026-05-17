# NVIDIA DGX Systems

**Type:** Platform
**Tags:** NVIDIA, hardware, HPC, AI supercomputer, DGX, data center, training, infrastructure
**Related:** [[NVIDIA-Base-Command]], [[NVIDIA-Base-Command-Manager]], [[NVIDIA-Bright-Cluster-Manager]], [[NVIDIA-BaseOS]], [[NVIDIA-DGX-Cloud]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-BasePOD]], [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]], [[NVIDIA-DGX-B200]], [[NVIDIA-DGX-SuperPOD-B200-RA]], [[NVIDIA-GB200-NVL72]], [[NVIDIA-DGX-SuperPOD-GB200-RA]], [[NVIDIA-DGX-B300]], [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]], [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]], [[NVIDIA-DGX-Spark]], [[NVIDIA-DGX-Station]], [[NVIDIA-DGX-Quantum]], [[NVIDIA-DGX-Enterprise-Support]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-Certified-Systems]], [[NVIDIA-Data-Center-CPUs]], [[NVIDIA-Cloud-Accelerator-NCX]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Vera-Rubin]], [[NVIDIA-Vera-Rubin-POD]], [[NVIDIA-Hopper-Architecture]], [[NVLink]], [[NCCL]], [[NVIDIA-MIG]], [[NVIDIA-GPU-Operator]], [[NVIDIA-Optimized-Frameworks]], [[NVIDIA-Resiliency-Extension]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Enterprise-Licensing-Guide]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; updated from https://www.nvidia.com/en-us/data-center/dgx-b200/, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/index.html, https://www.nvidia.com/en-us/data-center/dgx-b300/, https://www.nvidia.com/en-us/data-center/gb300-nvl72/, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/index.html, https://www.nvidia.com/en-us/products/workstations/dgx-spark/, https://www.nvidia.com/en-us/products/workstations/dgx-station/, https://docs.nvidia.com/dgx-basepod/index.html, https://www.nvidia.com/en-us/data-center/dgx-support/, https://docs.nvidia.com/deeplearning/frameworks/index.html)
**Last Updated:** 2026-05-09

## Summary
NVIDIA DGX systems are purpose-built AI supercomputers and infrastructure platforms integrating NVIDIA GPUs, NVLink interconnects, high-bandwidth memory, networking, DGX OS/BaseOS, and NVIDIA AI software into validated systems for AI training, inference, and development. The DGX family now spans personal AI systems such as [[NVIDIA-DGX-Spark]], deskside systems such as [[NVIDIA-DGX-Station]], data center systems such as [[NVIDIA-DGX-B200]] and [[NVIDIA-DGX-B300]], rack-scale systems such as [[NVIDIA-GB200-NVL72]] and [[NVIDIA-GB300-NVL72]], enterprise reference architectures such as [[NVIDIA-DGX-BasePOD]] and [[NVIDIA-DGX-SuperPOD]], and cloud delivery through [[NVIDIA-DGX-Cloud]].

## Detail

### Purpose
Training large foundation models (LLMs, multi-modal models, scientific AI) at scale requires not just powerful GPUs, but tightly integrated GPU-to-GPU communication fabric, validated software stacks, and production-grade reliability. Assembling these components independently is complex and time-consuming. DGX systems provide a validated, out-of-the-box AI computing platform where all components (GPUs, NVLink, NVSwitch, InfiniBand, storage, software) are integrated, tested, and supported by NVIDIA — reducing time-to-training and operational risk.

### Key Features

**Current DGX Systems and platforms (as of 2026):**
- **DGX Spark:** compact GB10 Grace Blackwell desktop AI computer for local model development, fine-tuning, inference, data science, edge prototyping, and local agent work
- **DGX Station:** GB300 Grace Blackwell Ultra deskside AI supercomputer with 748 GB coherent memory, NVLink-C2C, ConnectX-8 networking, MIG partitioning, and optional RTX PRO GPU support
- **DGX H100:** 8× H100 SXM5 (80 GB HBM3) GPUs; 640 GB total GPU memory; 4th-gen NVLink + NVSwitch for all-to-all 900 GB/s GPU bandwidth; 2× ConnectX-7 InfiniBand for multi-node scaling; 10 kW power
- **DGX H200:** 8× H200 SXM5 (141 GB HBM3e) GPUs; 1.1 TB total GPU memory — optimized for LLM inference and large-model training that benefits from bigger memory footprint
- **DGX B200:** 8x Blackwell GPUs; 1,440 GB total HBM3e memory; 14.4 TB/s aggregate NVLink bandwidth; ConnectX-7 networking and BlueField-3 DPUs; Blackwell DGX platform for AI factory develop-to-deploy pipelines
- **DGX B300:** current Blackwell Ultra DGX generation connected to [[NVIDIA-DGX-B300]] and [[NVIDIA-GB300-NVL72]] rack-scale guidance
- **GB200 NVL72:** rack-scale system with 72 Blackwell GPUs and 36 Grace CPUs connected via NVLink 5; designed as a single, liquid-cooled AI supercomputer unit with 130 TB/s rack-scale NVLink bandwidth
- **DGX Station A100/H100:** Workstation-class systems for small-team or on-premises development
- **DGX SuperPOD:** Multi-rack clusters of DGX nodes connected via InfiniBand NDR fabric; scales from ~20 to 1000s of nodes; used for pre-training frontier models; "AI data center in a box"
- **DGX BasePOD:** prescriptive DGX reference architecture for enterprise AI infrastructure below SuperPOD scale; current RA covers DGX B200, H200, and H100 with NDR400 InfiniBand
- **DGX Quantum:** DGX-branded quantum-classical architecture identity; current en-US navigation redirects toward [[NVIDIA-NVQLink]]
- **DGX Cloud:** NVIDIA-managed DGX infrastructure on Oracle Cloud, Azure, GCP, and AWS; per-node/per-hour rental of full DGX pods; includes NVIDIA AI Enterprise software
- **DGX Enterprise Support:** support, infrastructure services, and training layer for DGX systems, BasePOD, and SuperPOD

**Key System Capabilities:**
- **NVLink/NVSwitch Fabric:** All 8 GPUs in a DGX node are fully connected via NVSwitch, enabling any-to-any GPU communication at line rate — critical for tensor parallelism in LLM training
- **NVIDIA AI Enterprise Bundle:** DGX systems ship with Base Command Manager (cluster OS), NGC access, and AI Enterprise software as standard; current [[NVIDIA-Enterprise-Licensing-Guide]] guidance distinguishes Hopper DGX bundle inclusion from Blackwell DGX systems that require separate AI Enterprise licenses
- **Validated Storage Integration:** Certified with VAST Data, WekaFS, DDN EXAScaler, and NetApp for high-throughput model checkpoint storage
- **Validated AI factory ecosystem:** DGX deployments connect to [[NVIDIA-Certified-Systems]], [[NVIDIA-Bright-Cluster-Manager]], [[NVIDIA-Data-Center-CPUs]], and [[NVIDIA-Cloud-Accelerator-NCX]] guidance for broader data center infrastructure.

### Use Cases
- Pre-training LLMs and multimodal foundation models at scale (GPT-4 class, Llama family, Nemotron)
- Large-scale scientific AI: climate modeling, molecular dynamics, drug discovery simulation
- High-throughput LLM inference serving at enterprise scale using DGX H200 or GB200 NVL72
- AI research labs requiring dense GPU compute without public cloud cost/latency concerns
- Enterprise "AI factory" deployment: dedicated on-premises AI infrastructure under DGX SuperPOD architecture
- Edge-to-cloud AI development: DGX Station for local development, DGX SuperPOD for production training

### Hardware Requirements / Compatibility
- **DGX H100:** 2× Intel Xeon Platinum CPUs; 2 TB DDR5 RAM; 30 TB NVMe SSD; Ubuntu 22.04 + DGX OS
- **DGX B200:** 2x Intel Xeon Platinum CPUs; HBM3e GPU memory; NVLink 5 + NVSwitch 4
- **Power:** 10–14.3 kW per DGX node; requires 3-phase power; liquid cooling optional/required for B200 class
- **Networking:** 8× ConnectX-7 (400 Gb/s InfiniBand NDR or 400GbE) network cards per node for inter-node scaling
- **OS:** DGX OS (Ubuntu-based, customized); Base Command Manager as Kubernetes cluster OS for SuperPOD

### Language Bindings / APIs
- DGX is a hardware platform; software APIs are those of the installed frameworks:
  - **CUDA, cuDNN, NCCL** — GPU programming and communication
  - **NGC CLI** — container and model management, including [[NVIDIA-Optimized-Frameworks]] images
  - **Base Command CLI** (`ngc bc`) — job scheduling and cluster management
  - **DCGM REST API** — GPU health and telemetry

## Connections
- [[NVIDIA-Base-Command]] — Base Command Platform is the MLOps software layer for DGX SuperPOD and DGX Cloud
- [[NVIDIA-Base-Command-Manager]] — Base Command Manager handles cluster management and infrastructure operations for AI data centers
- [[NVIDIA-Bright-Cluster-Manager]] — Bright Cluster Manager is the HPC/AI cluster-management lineage adjacent to Base Command Manager
- [[NVIDIA-BaseOS]] — BaseOS/DGX OS provides the validated operating system layer for DGX deployments
- [[NVIDIA-DGX-Cloud]] — cloud-accessible counterpart to on-prem DGX infrastructure
- [[NVIDIA-DGX-SuperPOD]] — scale-out DGX cluster architecture for AI factories and large training runs
- [[NVIDIA-DGX-BasePOD]] and [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]] — prescriptive enterprise DGX reference architecture for building AI infrastructure.
- [[NVIDIA-DGX-B200]] — Blackwell-generation DGX system and AI factory foundation.
- [[NVIDIA-DGX-SuperPOD-B200-RA]] — DGX B200 SuperPOD reference architecture with 32-system scalable units.
- [[NVIDIA-GB200-NVL72]] and [[NVIDIA-DGX-SuperPOD-GB200-RA]] — rack-scale Grace Blackwell SuperPOD architecture.
- [[NVIDIA-DGX-B300]] — current Blackwell Ultra DGX system page.
- [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]] and [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]] — current DGX B300 SuperPOD reference architecture documents.
- [[NVIDIA-DGX-Spark]] — compact personal Grace Blackwell AI computer for local development and agent work.
- [[NVIDIA-DGX-Station]] — GB300 Grace Blackwell Ultra deskside AI supercomputer.
- [[NVIDIA-DGX-Quantum]] — queryable DGX Quantum architecture page that points to current NVQLink direction.
- [[NVIDIA-DGX-Enterprise-Support]] — support and services layer for DGX systems, BasePOD, and SuperPOD.
- [[NVIDIA-GB300-NVL72]] — rack-scale Blackwell Ultra NVL72 system adjacent to DGX B300 deployments.
- [[NVIDIA-Certified-Systems]] — certified partner systems extend validated NVIDIA infrastructure beyond DGX-branded platforms
- [[NVIDIA-Data-Center-CPUs]] — NVIDIA data center CPUs pair Grace with GPU systems in GH200, GB200, and rack-scale AI factory designs
- [[NVIDIA-Cloud-Accelerator-NCX]] — NCX describes cloud partner accelerator infrastructure for NVIDIA AI workloads
- [[NVIDIA-Blackwell-Architecture]] — DGX B200 and GB200 NVL72 are the flagship DGX systems for Blackwell architecture
- [[NVIDIA-Vera-Rubin]] and [[NVIDIA-Vera-Rubin-POD]] — next-generation platform and POD-scale AI factory architecture after Blackwell.
- [[NVIDIA-Hopper-Architecture]] — DGX H100 and H200 are the Hopper-generation DGX systems
- [[NVLink]] — NVLink/NVSwitch fabric is the defining interconnect technology within every DGX node
- [[NCCL]] — NCCL handles GPU-to-GPU communication for distributed training across DGX nodes
- [[NVIDIA-MIG]] — partitions supported DGX GPUs for isolated multi-tenant workloads
- [[NVIDIA-GPU-Operator]] — GPU Operator provisions Kubernetes on DGX SuperPOD nodes
- [[NVIDIA-Optimized-Frameworks]] — DGX systems commonly run NVIDIA deep learning framework containers from NGC.
- [[NVIDIA-Resiliency-Extension]] — long-running DGX training jobs can use NVRx for job-level fault tolerance and restart patterns.
- [[NVIDIA-AI-Enterprise]] — AI Enterprise software included with DGX systems for production AI workloads
- [[NVIDIA-Enterprise-Licensing-Guide]] — explains DGX software bundle treatment for Hopper systems and separate AI Enterprise licensing for Blackwell DGX systems

## Resources
- [DGX Systems Overview](https://www.nvidia.com/en-us/data-center/dgx-systems/)
- [DGX H100 Specifications](https://www.nvidia.com/en-us/data-center/dgx-h100/)
- [DGX B200 Overview](https://www.nvidia.com/en-us/data-center/dgx-b200/)
- [DGX SuperPOD B200 RA](https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/index.html)
- [DGX SuperPOD GB200 RA](https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/index.html)
- [DGX B300](https://www.nvidia.com/en-us/data-center/dgx-b300/)
- [DGX Spark](https://www.nvidia.com/en-us/products/workstations/dgx-spark/)
- [DGX Station](https://www.nvidia.com/en-us/products/workstations/dgx-station/)
- [DGX BasePOD](https://docs.nvidia.com/dgx-basepod/index.html)
- [DGX Enterprise Support](https://www.nvidia.com/en-us/data-center/dgx-support/)
- [GB300 NVL72](https://www.nvidia.com/en-us/data-center/gb300-nvl72/)
- [GB200 NVL72](https://www.nvidia.com/en-us/data-center/gb200-nvl72/)
- [DGX SuperPOD](https://www.nvidia.com/en-us/data-center/dgx-superpod/)
- [DGX Cloud](https://www.nvidia.com/en-us/gpu-cloud/)
