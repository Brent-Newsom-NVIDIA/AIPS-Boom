# NVIDIA GB200 NVL4

**Type:** Platform
**Tags:** NVIDIA, GPU, Hardware, NVLink, Blackwell, Grace, Data Center, Single-Node, AI
**Related:** [[NVIDIA-GB200-NVL72]], [[NVIDIA-Blackwell-Architecture]], [[NVLink]], [[NVIDIA-Grace-CPU]], [[NVIDIA-HGX]], [[NVIDIA-DGX]], [[NCCL]]
**Sources:** ServeTheHome, Tweaktown, Tom's Hardware, VideoCardz — November 2024 coverage of NVIDIA announcement
**Last Updated:** 2026-04-10

## Summary
The NVIDIA GB200 NVL4 is a single-server Grace Blackwell configuration combining four Blackwell B200 GPUs and two Grace CPUs on an enlarged motherboard, connected via fifth-generation NVLink. It targets data centers that need Blackwell-generation AI performance without the full rack-scale footprint of the NVL72. It delivers up to 1.3 TB of coherent shared memory and ~6 kW system power — positioned as the entry point into the GB200 ecosystem.

## Detail

### Purpose
Bridges the gap between single-GPU or dual-GPU Blackwell deployments and the full rack-scale NVL72. Enables organizations to deploy Blackwell AI compute in a standard server form factor without liquid-cooling infrastructure or full-rack commitment.

### Key Specifications
- **GPUs:** 4x NVIDIA Blackwell B200 GPUs
- **CPUs:** 2x NVIDIA Grace CPUs (Arm Neoverse V2, 72 cores each — 144 total)
- **Coherent memory:** Up to 1.3 TB (HBM3E GPU memory + Grace LPDDR5X unified via NVLink-C2C)
- **NVLink bandwidth:** 1.8 TB/s bidirectional per GPU (5th-gen NVLink)
- **System power:** ~6 kW (full server with NICs, SSDs, and components)
- **Form factor:** Single server, enlarged motherboard (4-way NVLink domain)
- **Availability:** H2 2025, via OEM partners (MSI, ASUS, Gigabyte, Lenovo, HPE, Wistron, Pegatron, ASRock Rack)

### Performance vs. Prior Generation (GH200 NVL4)
- **2.2x** simulation performance
- **1.8x** training performance
- **1.8x** inference performance

### Key Features
- 4-way NVLink domain — all four B200 GPUs fully connected via 5th-gen NVLink
- NVLink-C2C connects Grace CPUs to B200 GPUs at 900 GB/s per link
- Unified coherent 1.3 TB memory pool across CPUs and GPUs
- Single-node deployment — no NVLink Switch required (unlike NVL72)
- Standard server chassis compatible — no dedicated liquid-cooling rack needed

### How It Differs from NVL72
| | NVL4 | NVL72 |
|---|---|---|
| GPUs | 4x B200 | 72x B200 |
| CPUs | 2x Grace | 36x Grace |
| Memory | ~1.3 TB | 13.4 TB |
| NVLink | 4-way domain | 72-way all-to-all |
| Form factor | Single server | Full rack (liquid-cooled) |
| NVLink Switch | Not required | Required |
| Power | ~6 kW | Rack-scale |

### Use Cases
- Mid-scale LLM inference (models that fit within 1.3 TB)
- Enterprise AI deployment without full rack infrastructure
- HPC simulation workloads at departmental scale
- Development and fine-tuning of large models
- Organizations stepping into Blackwell without full NVL72 commitment

### Target Customers
Enterprises, research institutions, and cloud providers wanting Blackwell-generation AI in a standard data center footprint. OEM ecosystem: Lenovo, HPE, ASUS, MSI, Gigabyte, ASRock Rack, Wistron, Pegatron.

## Connections
- [[NVIDIA-GB200-NVL72]] — the rack-scale 72-GPU counterpart; NVL4 is the single-node entry point
- [[NVIDIA-Blackwell-Architecture]] — built on B200 Blackwell GPUs
- [[NVIDIA-Grace-CPU]] — 2x Grace CPUs unified with GPUs via NVLink-C2C
- [[NVLink]] — 5th-gen NVLink connects all 4 GPUs at 1.8 TB/s per GPU
- [[NVIDIA-HGX]] — alternative 8-GPU SXM baseboard for OEM servers (x86 CPU)
- [[NVIDIA-DGX]] — NVIDIA's turnkey complete system; NVL4 is OEM/ODM-based

## Resources
- [ServeTheHome coverage](https://www.servethehome.com/this-is-the-new-nvidia-gb200-nvl4-arm-grace-blackwell/)
- [Tweaktown specs breakdown](https://www.tweaktown.com/news/101746/nvidia-unveils-gb200-nvl4-four-blackwell-gpus-dual-grace-1-7tb-memory-5400w-of-power/index.html)
- [Tom's Hardware announcement](https://www.tomshardware.com/pc-components/gpus/nvidia-introduces-a-new-merged-cpu-and-gpu-ai-processor-gb200-grace-blackwell-nvl4-superchip-has-four-b200-gpus-two-grace-cpus)
- [VideoCardz coverage](https://videocardz.com/pixel/nvidia-unveils-gb200-nvl4-four-blackwell-gpus-two-grace-cpus-1-7tb-combined-memory-and-5400w-of-power)
