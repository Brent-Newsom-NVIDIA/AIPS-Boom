# NVIDIA DRIVE Sim

**Type:** Platform
**Tags:** NVIDIA, DRIVE Sim, autonomous vehicles, simulation, synthetic data, Cosmos, Omniverse, NuRec, AV
**Related:** [[NVIDIA-Drive-Platform]], [[NVIDIA-Cosmos]], [[NVIDIA-Omniverse]], [[NVIDIA-Cosmos-Curator-LHA]], [[NVIDIA-NIM]], [[NVIDIA-DRIVE-AGX-Thor]]
**Sources:** https://developer.nvidia.com/drive/drive-sim, https://developer.nvidia.com/drive
**Last Updated:** 2026-04-29

## Summary
NVIDIA DRIVE Sim is NVIDIA's autonomous-vehicle simulation and synthetic-data development surface. Current NVIDIA DRIVE Sim public material emphasizes AV simulation pipelines powered by NVIDIA Cosmos world foundation models, NVIDIA NuRec neural reconstruction, Cosmos Transfer/Predict, physical AI open datasets, Cosmos Curator, and dataset search. It connects DRIVE development to [[NVIDIA-Omniverse]], [[NVIDIA-Cosmos]], and NIM-style model services for generating and validating AV data before deployment on DRIVE AGX platforms.

## Detail

### Purpose
Autonomous vehicle teams need large-scale scenario coverage, synthetic data generation, reconstruction of real-world environments, and closed-loop validation that cannot be achieved safely or economically through road testing alone. DRIVE Sim provides a simulation entry point for AV workflows using NVIDIA physical AI, world model, and Omniverse technologies.

### Key capabilities
- AV simulation and synthetic data generation workflows for training, testing, and validation.
- NVIDIA Cosmos world foundation models for post-training, scenario generation, and video/world generation.
- NVIDIA NuRec neural reconstruction for reconstructing real-world environments into simulation-ready assets.
- Cosmos Transfer and Cosmos Predict workflows for AV data generation.
- Cosmos Curator and dataset search for filtering, annotating, searching, and retrieving AV datasets.
- Open-source AV simulator integration signals, including CARLA integration with NuRec and Cosmos Transfer.
- Physical AI open datasets and starter scene packs for AV workflows.

### NVIDIA context
DRIVE Sim is no longer just a standalone simulator in the wiki sense; current public NVIDIA messaging makes it a bridge between [[NVIDIA-Drive-Platform]], [[NVIDIA-Cosmos]], [[NVIDIA-Omniverse]], and NVIDIA model services. It should stay as one DRIVE simulation page, with NuRec and Cosmos sub-workflows folded here unless a separate durable NVIDIA NuRec docs surface becomes necessary.

## Connections
- [[NVIDIA-Drive-Platform]] - parent AV platform that uses simulation for data generation, testing, and validation.
- [[NVIDIA-Cosmos]] - world foundation model platform used for AV world/video generation and synthetic data.
- [[NVIDIA-Omniverse]] - simulation and digital twin substrate behind NVIDIA AV simulation workflows.
- [[NVIDIA-Cosmos-Curator-LHA]] - adjacent video/data curation workflow for large physical AI datasets.
- [[NVIDIA-NIM]] - current DRIVE Sim material references NVIDIA NIM microservices for model/API workflows.
- [[NVIDIA-DRIVE-AGX-Thor]] - target DRIVE hardware for validating and deploying AV workloads after simulation.

## Source Excerpts
- NVIDIA DRIVE Sim public pages describe AV simulation and SDG pipelines powered by NVIDIA models, tools, and libraries.
- The page highlights Cosmos world foundation models, NuRec neural reconstruction, Cosmos Transfer/Predict, and physical AI open datasets.
- NVIDIA positions Cosmos Curator and dataset search as tools for accelerating AV data processing and retrieval.

## Resources
- [NVIDIA DRIVE Sim](https://developer.nvidia.com/drive/drive-sim)
- [NVIDIA DRIVE Developer Page](https://developer.nvidia.com/drive)
