# NIM for Earth-2 FourCastNet

**Type:** Microservice
**Tags:** NVIDIA, NIM, Earth-2, FourCastNet, weather forecasting, climate AI, Fourier neural operator, global forecast
**Related:** [[Earth-2]], [[NIM-for-Earth-2-CorrDiff]], [[PhysicsNeMo]], [[NVIDIA-Modulus]], [[NVIDIA-NIM]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Omniverse]], [[cuDNN]], [[PyTorch]]
**Sources:** https://docs.nvidia.com/nim/earth-2/fourcastnet/latest/overview.html, https://docs.nvidia.com/nim/earth-2/fourcastnet/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA NIM for Earth-2 FourCastNet packages NVIDIA's FourCastNet weather forecasting model as a deployable NIM microservice. Current NVIDIA docs describe FourCastNet as a data-driven model for accurate short- to medium-range global predictions with a 6-hour time step and long simulated-time stability.

## Detail

### Purpose
FourCastNet NIM gives weather and climate teams a fast API-backed route to global AI weather forecasting. It complements regional downscaling NIMs such as [[NIM-for-Earth-2-CorrDiff]] by producing medium-range global forecasts that can feed broader [[Earth-2]] pipelines.

### Current scope
- Global short- to medium-range forecasting.
- Six-hour forecast time step.
- Predictive stability over long simulated horizons.
- Physically plausible atmospheric dynamics.
- Self-hosted NIM deployment path for weather and climate AI applications.
- Composition with other NIMs for local and global weather/climate prediction pipelines.

### NVIDIA context
FourCastNet NIM gives the wiki a first-class page for a named Earth-2 forecast model rather than burying it inside the Earth-2 overview. It links Earth-2 weather inference to [[PhysicsNeMo]], [[NVIDIA-Modulus]], and the production [[NVIDIA-NIM]] stack.

## Connections
- [[Earth-2]] - parent NVIDIA weather and climate AI platform.
- [[NIM-for-Earth-2-CorrDiff]] - companion Earth-2 NIM for regional downscaling and diffusion correction.
- [[PhysicsNeMo]] - training framework and model-development context for Earth science models.
- [[NVIDIA-Modulus]] - physics-ML and neural operator ecosystem connected to FourCastNet.
- [[NVIDIA-NIM]] - deployment and API layer for the microservice.
- [[NVIDIA-AI-Enterprise]] - enterprise support and deployment context for production NIMs.
- [[NVIDIA-Omniverse]] - visualization and digital-twin context for Earth-2 workflows.
- [[cuDNN]] and [[PyTorch]] - GPU AI software foundations for model training and inference.

## Source Excerpts
- NVIDIA docs describe FourCastNet as a data-driven model for short- to medium-range global predictions.
- The docs position Earth-2 FourCastNet NIM as part of NVIDIA Earth-2 services and software for weather and climate research.

## Resources
- [NVIDIA NIM for Earth-2 FourCastNet Overview](https://docs.nvidia.com/nim/earth-2/fourcastnet/latest/overview.html)
- [NVIDIA NIM for Earth-2 FourCastNet Index](https://docs.nvidia.com/nim/earth-2/fourcastnet/latest/index.html)
