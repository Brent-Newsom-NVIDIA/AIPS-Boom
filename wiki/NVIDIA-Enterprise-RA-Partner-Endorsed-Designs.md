# NVIDIA Enterprise RA Partner Endorsed Designs

**Type:** Ecosystem
**Tags:** NVIDIA, Enterprise Reference Architecture, partner endorsed design, AI factory, OEM, Spectrum-X, NVIDIA-Certified Systems
**Related:** [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], [[NVIDIA-NVL72-AI-Factory]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Enterprise-RA-Observability-Guide]], [[NVIDIA-Certified-Systems]], [[NVIDIA-Certified-Storage]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Base-Command-Manager]]
**Sources:** https://docs.nvidia.com/enterprise-reference-architectures/index.html, https://www.cisco.com/c/en/us/products/collateral/data-center-networking/nexus-hyperfabric/hyperfabric-ai-era-ds.html, https://www.cisco.com/c/en/us/products/collateral/switches/nexus-9000-series-switches/nexus-9000-ai-era-ds.html, https://www.cisco.com/c/en/us/products/collateral/servers-unified-computing/ai-pod-ucs-c885a-servers-nexus-9364e--sg2-switches.html, https://www.delltechnologies.com/asset/en-us/solutions/infrastructure-solutions/briefs-summaries/nvidia-2-8-5-200-era-configuration-endorsed-for-the-dell-ai-factory-with-nvidia-brief.pdf, https://www.delltechnologies.com/asset/en-us/solutions/infrastructure-solutions/briefs-summaries/nvidia-2-8-9-400-configuration-era-endorsed-for-the-dell-ai-factory-with-nvidia-brief.pdf, https://www.delltechnologies.com/asset/en-us/products/storage/technical-support/dell-ai-factory-with-nvidia-rtx-pro-6000-on-dell-poweredge-servers-datasheet.pdf, https://www.hpe.com/psnow/doc/a00157780enw, https://lenovopress.lenovo.com/lp2286-lenovo-hybrid-ai-289-platform-guide, https://www.supermicro.com/datasheet/Datasheet_Supermicro_NVIDIA_AI_Factories_HGX.pdf, https://www.supermicro.com/datasheet/Datasheet_Supermicro_NVIDIA_AI_Factories_RTX_PRO_6000.pdf, https://www.supermicro.com/datasheet/Datasheet_Supermicro_NVIDIA_AI_Factories_HGX_B300.pdf
**Last Updated:** 2026-05-17

## Summary
NVIDIA Enterprise RA Partner Endorsed Designs are OEM solution entries that map partner systems to NVIDIA Enterprise Reference Architecture patterns. They are useful when a customer needs a practical procurement and implementation path from the NVIDIA RA concept to a partner-delivered AI factory with validated servers, networking, storage, software, and operations guidance.

## Detail

### How to use this page
Use [[NVIDIA-Enterprise-Reference-Architectures]] to choose the RA family, then use this page to identify partner-endorsed OEM designs aligned to that RA pattern. The design entry helps answer which partner system, GPU class, node pattern, scale range, and endorsement level fit a customer workload before moving into [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Enterprise-RA-Observability-Guide]], and deployment guidance.

### Endorsement criteria
NVIDIA's Design Review Board endorsement criteria include:
- Nodes have passed NVIDIA-Certified for Reference Configuration.
- Network design and topology align to Enterprise RA design points.
- Server bill of materials has been vetted by NVIDIA.
- Cluster bill of materials at maximum scale has been vetted by NVIDIA.

### Partner endorsed design matrix

| OEM | Solution | Server | GPU | Enterprise RA pattern | Min/Max size | Infrastructure | Spectrum-X | Logical architecture |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cisco | Cisco Nexus Hyperfabric AI Enterprise Reference Architecture | UCS C885A Rack Server | HGX H200 | 2-8-9-400, adapted to 2-8-10-400 | 4-128 | Yes | Yes | Yes |
| Cisco | Cisco Enterprise Reference Architecture based on Cisco Nexus | UCS C885A Rack Server | HGX H200 | 2-8-9-400, adapted to 2-8-10-400 | 4-128 | Yes | Yes | Yes |
| Cisco | Cisco AI POD Infrastructure for the NVIDIA 2-8-9-400 Enterprise Reference Architecture | UCS C885A M8 | HGX H200 | 2-8-9-400 | 4-16 | Yes | Yes | Not listed |
| Dell Technologies | Dell AI Factory with NVIDIA | PowerEdge XE7745 | RTX PRO 6000 Blackwell Server Edition, H200 NVL | 2-8-5-200 | 4, 16 | Yes | Yes | Yes |
| Dell Technologies | Dell AI Factory with NVIDIA | PowerEdge XE7740 | RTX PRO 6000 Blackwell Server Edition, H200 NVL | 2-8-5-200 | 4, 16 | Yes | Yes | Yes |
| Dell Technologies | Dell AI Factory with NVIDIA | PowerEdge XE9680 | HGX H200 | 2-8-9-400 | 4, 12 | Yes | Yes | Yes |
| Dell Federal | Dell AI Factory with NVIDIA for Government | PowerEdge XE7740 | RTX PRO 6000 Blackwell Server Edition | 2-8-5-200 | 4-32 | Yes | Yes | Not listed |
| Dell Federal | Dell AI Factory with NVIDIA for Government | PowerEdge XE7745 | RTX PRO 6000 Blackwell Server Edition | 2-8-5-200 | 4-32 | Yes | Yes | Not listed |
| HPE | HPE AI Factory with NVIDIA Enterprise Reference Architectures | ProLiant DL380a Gen12 | RTX PRO 6000 Blackwell Server Edition | 2-8-5-200 | 16, 32 | Yes | Not listed | Not listed |
| Lenovo | Lenovo Hybrid AI 289 | ThinkSystem SR680a V3 | HGX B200, HGX H200 | 2-8-9-400 | 4-32 | Yes | Yes | Yes |
| Supermicro | AI Factory Solutions | SYS-A22GA-NBRT-G1 | HGX B200 | 2-8-9-400 | 4-32 | Yes | Yes | Not listed |
| Supermicro | AI Factory Solutions | SYS-522GA-NRT, SYS-422GL-NR, AS-5126GS-TNRT2 | RTX PRO 6000 Blackwell Server Edition | 2-8-5-200 | 4-32 | Yes | Yes | Not listed |
| Supermicro | AI Factory Solutions | SYS-822GS-NB3RT | HGX B300 Single Plane | 2-8-9-800 | 4, 8, 32 | Yes | Yes | Not listed |

### Enterprise RA tabs and linked docs
- Overview: Program Whitepaper, covering how Enterprise RAs simplify AI factory deployment, reduce complexity, and accelerate time to value.
- Hardware: [[NVIDIA-RTX-PRO-AI-Factory]], [[NVIDIA-HGX-AI-Factory]], and [[NVIDIA-NVL72-AI-Factory]] for RTX PRO, HGX, and GB300 NVL72 AI factory designs.
- Software: [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Run-ai]], and [[NVIDIA-AI-Q-Blueprint]] for AI factory planning, common software stack, NIM LLM scheduling, and research-agent deployment on Enterprise RA.
- Observability: [[NVIDIA-Enterprise-RA-Observability-Guide]] for Prometheus, Grafana, DCGM, NIM Operator, BCM, NetQ, dashboards, and alerting.
- Deployment: [[NVIDIA-Base-Command-Manager]] deployment guide and upstream Kubernetes deployment guide for operationalizing the software stack on Enterprise RA infrastructure.

### Partner solution notes
- Cisco Nexus Hyperfabric AI ERA is a full-stack on-premises AI cluster for HGX H200 and Spectrum-X, managed by a cloud-hosted controller. Its Cisco UCS C885A M8 server uses eight H200 SXM GPUs, eight BlueField-3 B3140H SuperNICs for east-west traffic, and two BlueField-3 B3240 DPUs for north-south traffic, with VAST Data storage called out for the storage subsystem.
- Cisco Nexus 9000 ERA uses Nexus switching with the same C885A/HGX H200 design intent. The Cisco documentation emphasizes east-west and north-south fabric sizing, supported optics/cabling, VAST Data high-performance storage, NVIDIA AI Enterprise, Spectrum-X, security, observability, and testing/certification.
- Cisco AI POD for 2-8-9-400 is a smaller Cisco AI POD path for UCS C885A M8 servers and Nexus switching, including OpenShift Platform Plus, NVIDIA AI Enterprise Essentials, Intersight, Nexus Dashboard, control-plane servers, racks, support, and mentored installation services.
- Dell AI Factory 2-8-5-200 uses PowerEdge XE7740/XE7745 nodes with up to eight H200 NVL or RTX PRO 6000 Blackwell Server Edition GPUs, PowerEdge R670 management servers, Spectrum-4 SN5610 and SN2201 networking, PowerScale F710 storage, NVIDIA AI Enterprise, and either upstream Kubernetes/Base Command Manager or Red Hat OpenShift/Dell Automation Platform.
- Dell AI Factory 2-8-9-400 uses PowerEdge XE9680 nodes with eight H200 SXM GPUs per server, up to 12 worker nodes, PowerEdge R670 management servers, Spectrum-4 networking, PowerScale F710 storage, NVIDIA AI Enterprise, and upstream Kubernetes or OpenShift.
- Dell Federal RTX PRO design maps RTX PRO 6000 Blackwell Server Edition GPUs on XE7740/XE7745 to 2-8-5-200 for government and high-assurance environments, including secure networking fabrics, micro-segmentation, encryption, controlled/unclassified and classified enclave considerations, and FedRAMP/DoD compliance framing.
- HPE's endorsed entry centers on ProLiant DL380a Gen12 with RTX PRO 6000 Blackwell Server Edition in a 2-8-5-200 design. HPE's public product materials position DL380a Gen12 as a 4U, two-socket rack server for AI inference with up to eight RTX PRO 6000 Blackwell Server Edition GPUs.
- Lenovo Hybrid AI 289 maps ThinkSystem SR680a/SR685a/SR780a class systems to 2-8-9 patterns using HGX H200 and B200/B300 options, BlueField-3 B3140H and B3220 adapters, NVIDIA SN5610/SN2201 switching, service nodes, and Lenovo XClarity management.
- Supermicro HGX B200 design uses SYS-A22GA-NBRT-G1 systems, four/eight/32-node options, Spectrum-X Ethernet, 2-8-9-400, NVIDIA AI Enterprise and Run:ai, and targets high-volume inference, foundation-model training, data analytics, and HPC.
- Supermicro RTX PRO 6000 design uses SYS-522GA-NRT, SYS-422GL-NR, and AS-5126GS-TNRT2 systems with eight RTX PRO 6000 Blackwell Server Edition GPUs per node, four/eight/32-node options, Spectrum-X Ethernet, 2-8-5-200, and targets inference, RAG, HPC, and visual computing.
- Supermicro HGX B300 design uses SYS-822GS-NB3RT, four/eight/32-node options, Spectrum-X Ethernet, 2-8-9-800, integrated ConnectX-8 SuperNICs at up to 800 Gb/s, BlueField-3, and targets large-scale agentic AI, multimodal inference, training, and FP32 HPC.

### Recommendation logic
- For RTX PRO 6000 Blackwell, multi-workload inference, RAG, visual computing, Omniverse, or power-sensitive enterprise AI, start with [[NVIDIA-RTX-PRO-AI-Factory]] and partner entries from Dell, Dell Federal, HPE, and Supermicro.
- For HGX H200/B200 training, fine-tuning, large-scale inference, and data analytics, start with [[NVIDIA-HGX-AI-Factory]] and partner entries from Cisco, Dell, Lenovo, and Supermicro.
- For HGX B300 and 800 Gb/s-class designs, use [[NVIDIA-HGX-AI-Factory]] and the Supermicro SYS-822GS-NB3RT entry; use [[NVIDIA-NVL72-AI-Factory]] when the need is rack-scale GB300 NVL72.
- For regulated, government, or secure enclave discussions, use Dell Federal and [[NVIDIA-AI-Factory-for-Government]] as adjacent context.
- For software and operations, always pair the hardware partner design with [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]], [[NVIDIA-Enterprise-RA-Observability-Guide]], and deployment guidance for [[NVIDIA-Base-Command-Manager]], upstream Kubernetes, or OpenShift.

## Connections
- [[NVIDIA-Enterprise-Reference-Architectures]] - program-level source and tab catalog for partner endorsed designs.
- [[NVIDIA-Enterprise-AI-Factory]] - strategic umbrella for building enterprise AI factories.
- [[NVIDIA-RTX-PRO-AI-Factory]] - RTX PRO 2-8-5-200 RA used by Dell, Dell Federal, HPE, and Supermicro designs.
- [[NVIDIA-HGX-AI-Factory]] - HGX 2-8-9 RA used by Cisco, Dell, Lenovo, and Supermicro designs.
- [[NVIDIA-NVL72-AI-Factory]] - rack-scale GB300 NVL72 RA adjacent to the largest AI factory designs.
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] - common software stack across endorsed hardware.
- [[NVIDIA-Enterprise-RA-Observability-Guide]] - day-2 monitoring and alerting layer for endorsed deployments.
- [[NVIDIA-Certified-Systems]] - certification baseline for the partner servers.
- [[NVIDIA-Certified-Storage]] - validated storage expectations for end-to-end AI factories.
- [[NVIDIA-Spectrum-X]] - Ethernet AI fabric used across the endorsed designs.
- [[NVIDIA-Base-Command-Manager]] - deployment and cluster-management layer referenced by Enterprise RA deployment content.

## Source Excerpts
- NVIDIA's Enterprise RA hub lists partner endorsed designs by OEM, solution, server, GPU, pattern, size, and endorsement level.
- NVIDIA's endorsement criteria include certified nodes, RA-aligned network topology, vetted server BOM, and vetted max-scale cluster BOM.
- Cisco describes Nexus Hyperfabric as full-stack AI infrastructure aligned to NVIDIA Enterprise RA for HGX H200 and Spectrum-X.
- Dell describes the AI Factory entries as validated, repeatable platforms aligned to NVIDIA 2-8-5-200 and 2-8-9-400 Enterprise RA configurations.
- Supermicro describes its endorsed designs as full-stack AI factory solutions built on NVIDIA Enterprise RA designs and NVIDIA-Certified Systems.

## Resources
- [NVIDIA Enterprise Reference Architectures](https://docs.nvidia.com/enterprise-reference-architectures/index.html)
- [Cisco Nexus Hyperfabric AI Enterprise Reference Architecture](https://www.cisco.com/c/en/us/products/collateral/data-center-networking/nexus-hyperfabric/hyperfabric-ai-era-ds.html)
- [Cisco Nexus 9000 Enterprise Reference Architecture](https://www.cisco.com/c/en/us/products/collateral/switches/nexus-9000-series-switches/nexus-9000-ai-era-ds.html)
- [Cisco AI POD Infrastructure for NVIDIA 2-8-9-400 Enterprise RA](https://www.cisco.com/c/en/us/products/collateral/servers-unified-computing/ai-pod-ucs-c885a-servers-nexus-9364e--sg2-switches.html)
- [Dell AI Factory 2-8-5-200 Brief](https://www.delltechnologies.com/asset/en-us/solutions/infrastructure-solutions/briefs-summaries/nvidia-2-8-5-200-era-configuration-endorsed-for-the-dell-ai-factory-with-nvidia-brief.pdf)
- [Dell AI Factory 2-8-9-400 Brief](https://www.delltechnologies.com/asset/en-us/solutions/infrastructure-solutions/briefs-summaries/nvidia-2-8-9-400-configuration-era-endorsed-for-the-dell-ai-factory-with-nvidia-brief.pdf)
- [Dell AI Factory for Government RTX PRO 6000 Datasheet](https://www.delltechnologies.com/asset/en-us/products/storage/technical-support/dell-ai-factory-with-nvidia-rtx-pro-6000-on-dell-poweredge-servers-datasheet.pdf)
- [HPE AI Factory with NVIDIA Enterprise Reference Architectures](https://www.hpe.com/psnow/doc/a00157780enw)
- [Lenovo Hybrid AI 289 Platform Guide](https://lenovopress.lenovo.com/lp2286-lenovo-hybrid-ai-289-platform-guide)
- [Supermicro AI Factory Solutions with NVIDIA HGX B200](https://www.supermicro.com/datasheet/Datasheet_Supermicro_NVIDIA_AI_Factories_HGX.pdf)
- [Supermicro AI Factory Solutions with NVIDIA RTX PRO 6000 Blackwell](https://www.supermicro.com/datasheet/Datasheet_Supermicro_NVIDIA_AI_Factories_RTX_PRO_6000.pdf)
- [Supermicro AI Factory Solutions with NVIDIA HGX B300](https://www.supermicro.com/datasheet/Datasheet_Supermicro_NVIDIA_AI_Factories_HGX_B300.pdf)
