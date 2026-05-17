# NVIDIA Data Center CPUs

**Type:** Hardware
**Tags:** NVIDIA, data center CPUs, Grace CPU, Arm, LPDDR5X, NVLink-C2C, AI data center
**Related:** [[NVIDIA-Grace-CPU]], [[NVIDIA-Vera-CPU]], [[NVIDIA-Vera-Rubin]], [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Hopper-Architecture]], [[NVIDIA-DGX]], [[NVIDIA-GB200-NVL72]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-BaseOS]]
**Sources:** https://docs.nvidia.com/dccpu/index.html, https://www.nvidia.com/en-us/data-center/technologies/rubin/
**Last Updated:** 2026-04-29

## Summary
NVIDIA Data Center CPUs documentation covers NVIDIA CPU platforms purpose-built for modern AI and HPC data centers. The docs center on the NVIDIA Grace CPU and its role in CPU-only systems, Grace Hopper systems, and tightly coupled Grace-Blackwell/Hopper platforms.

## Detail
The Grace CPU uses 72 Arm v9 cores, LPDDR5X memory, and NVIDIA Scalable Coherency Fabric to deliver high bandwidth, deterministic latency, and energy efficiency. It powers memory-coherent systems with NVIDIA Blackwell and Hopper GPUs through NVLink-C2C as well as efficient CPU-only platforms.

This page is a hardware family hub, while [[NVIDIA-Grace-CPU]] remains the deeper page for the Grace CPU itself. [[NVIDIA-Vera-CPU]] now tracks NVIDIA's next-generation custom Arm CPU direction inside the [[NVIDIA-Vera-Rubin]] platform.

## Connections
- [[NVIDIA-Grace-CPU]] - detailed page for the Grace CPU architecture and systems role.
- [[NVIDIA-Vera-CPU]] - next-generation custom Arm CPU for Vera Rubin systems.
- [[NVIDIA-Vera-Rubin]] - platform that pairs Vera CPU with Rubin GPUs.
- [[NVIDIA-Blackwell-Architecture]] - Grace pairs with Blackwell in GB200 systems.
- [[NVIDIA-Hopper-Architecture]] - Grace Hopper systems combine Grace CPU and Hopper GPU.
- [[NVIDIA-GB200-NVL72]] - rack-scale Grace-Blackwell system.
- [[NVIDIA-GB300-NVL72]] - Blackwell Ultra rack-scale successor direction using Grace/GB300 system design.
- [[NVIDIA-BaseOS]] - operating system documentation includes Grace CPU platform support.

## Source Excerpts
- NVIDIA Data Center CPU docs describe Grace as a 72-core Arm v9 CPU with LPDDR5X memory and Scalable Coherency Fabric.
- The docs cover Grace OS installation, Grace CPU systems, and Grace Hopper systems.
