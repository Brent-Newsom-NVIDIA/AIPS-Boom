# NIM for Earth-2 CorrDiff

**Type:** Microservice
**Tags:** NVIDIA, NIM, Earth-2, CorrDiff, weather, climate AI, downscaling, super-resolution, diffusion model
**Related:** [[Earth-2]], [[NIM-for-Earth-2-FourCastNet]], [[PhysicsNeMo]], [[NVIDIA-Modulus]], [[NVIDIA-NIM]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Omniverse]], [[cuDNN]], [[PyTorch]]
**Sources:** https://docs.nvidia.com/nim/earth-2/corrdiff/latest/overview.html, https://docs.nvidia.com/nim/earth-2/corrdiff/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM for Earth-2 CorrDiff packages NVIDIA's Correction Diffusion weather downscaling model as a deployable NIM microservice. Current docs describe CorrDiff as a neural network model that improves weather-data accuracy and resolution by correcting a mean machine-learning model with a diffusion model.

## Detail

### Purpose
Weather and climate workflows often need high-resolution local fields from lower-resolution forecasts. CorrDiff NIM provides a consistent API and deployment container for producing higher-resolution, probabilistic weather outputs as part of the [[Earth-2]] services and software stack.

### Current scope
- Downscales surface and atmospheric variables to improve weather-data resolution.
- Uses a two-step correction approach with a diffusion model.
- Produces deterministic and probabilistic predictions.
- Helps recover spectra and distributions for weather extremes.
- Provides a NIM deployment route for self-hosted weather and climate AI applications.
- Can be composed with other NIMs in local and global weather/climate prediction pipelines.

### NVIDIA context
CorrDiff NIM makes one of Earth-2's named AI weather models directly queryable in the wiki graph. It connects [[Earth-2]], [[PhysicsNeMo]], and [[NVIDIA-Modulus]] model development to the [[NVIDIA-NIM]] deployment layer used by enterprise teams.

## Connections
- [[Earth-2]] - parent NVIDIA weather and climate AI platform.
- [[NIM-for-Earth-2-FourCastNet]] - companion Earth-2 NIM for global medium-range forecasting.
- [[PhysicsNeMo]] - training framework and model-development context for Earth science models.
- [[NVIDIA-Modulus]] - neural operator and physics-ML lineage for Earth-2 models.
- [[NVIDIA-NIM]] - deployment and API layer for the microservice.
- [[NVIDIA-AI-Enterprise]] - enterprise support and deployment context for production NIMs.
- [[NVIDIA-Omniverse]] - visualization and digital-twin context for Earth-2 workflows.
- [[cuDNN]] and [[PyTorch]] - GPU AI software foundations for model training and inference.

## Source Excerpts
- NVIDIA docs describe CorrDiff as a neural network model for downscaling surface and atmospheric variables.
- The Earth-2 CorrDiff NIM docs position the model as part of NVIDIA Earth-2 services and software for weather and climate research.

## Resources
- [NVIDIA NIM for Earth-2 CorrDiff Overview](https://docs.nvidia.com/nim/earth-2/corrdiff/latest/overview.html)
- [NVIDIA NIM for Earth-2 CorrDiff Index](https://docs.nvidia.com/nim/earth-2/corrdiff/latest/index.html)
