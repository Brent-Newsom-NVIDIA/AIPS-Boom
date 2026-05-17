# Earth-2

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Climate AI, Weather Forecasting, Digital Twin, Scientific Computing
**Related:** [[NIM-for-Earth-2-CorrDiff]], [[NIM-for-Earth-2-FourCastNet]], [[PhysicsNeMo]], [[NVIDIA-Modulus]], [[NVIDIA-NIM]], [[NVIDIA-Omniverse]], [[PyTorch]], [[cuDNN]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/earth-2, https://docs.nvidia.com/nim/earth-2/corrdiff/latest/overview.html, https://docs.nvidia.com/nim/earth-2/fourcastnet/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Earth-2 is a cloud platform and initiative for building an AI-powered digital twin of Earth's climate system, enabling high-resolution weather prediction, climate downscaling, and extreme event simulation at speeds orders of magnitude faster than traditional numerical weather prediction (NWP) models. Earth-2 combines GPU-accelerated AI models (including CorrDiff, FourCastNet, and SFNO), the Omniverse visualization platform, and the PhysicsNeMo training framework to deliver kilometer-scale regional climate simulations in minutes rather than days.

## Detail

### Purpose
Earth-2 solves the critical bottleneck in climate science: traditional numerical weather prediction requires supercomputer resources and hours of compute time for each forecast cycle, making high-resolution ensemble forecasting (needed for uncertainty quantification) impractical. AI-based surrogate models trained on decades of historical weather data can perform equivalent predictions in seconds on NVIDIA GPUs.

### Key Features
- CorrDiff: diffusion model-based high-resolution downscaling (25km → 2km) for regional weather
- FourCastNet: Fourier Neural Operator-based global weather forecast model
- [[NIM-for-Earth-2-CorrDiff]]: current NIM docs package CorrDiff as a self-hosted weather downscaling microservice
- [[NIM-for-Earth-2-FourCastNet]]: current NIM docs package FourCastNet as a global medium-range forecast microservice
- SFNO (Spherical Fourier Neural Operator): geometrically consistent global atmosphere model
- Ensemble forecasting: thousands of ensemble members in minutes for probabilistic prediction
- Kilometer-scale regional forecast generation with physics-guided uncertainty
- Earth-2 Studio: Python SDK for building and visualizing AI weather workflows
- Integration with NVIDIA Omniverse for 3D climate visualization and digital twin rendering
- WB2 (WeatherBench2) benchmark integration for model evaluation
- API-driven access to Earth-2 cloud inference services
- Self-hosted NIM deployment paths for named Earth-2 models through [[NVIDIA-NIM]]
- Support for custom model integration via PhysicsNeMo
- Inference runs on H100/A100 GPU clusters; models trainable via PhysicsNeMo

### Use Cases
- Operational weather forecasting as supplement/replacement to NWP models
- Climate risk assessment for insurance, finance, and infrastructure
- Renewable energy siting and production forecasting (wind, solar)
- Hurricane and typhoon intensity and track prediction
- Agricultural yield forecasting with high-resolution weather inputs
- Flash flood and wildfire risk modeling
- Climate adaptation planning with downscaled regional projections

### Hardware Requirements
- Inference: A100 or H100 GPU (H100 recommended for production deployments)
- Training: Multi-node H100 clusters (PhysicsNeMo-based training requires 100s of GPUs)
- CUDA 11.8 or higher
- Available as cloud service (NVIDIA DGX Cloud / NGC) — local deployment for enterprise

### Language Bindings
- Python (Earth-2 Studio SDK)
- REST API for cloud inference service
- Jupyter notebook-based workflows

## Connections
- [[PhysicsNeMo]] — PhysicsNeMo is the training framework for Earth-2's foundation models
- [[NIM-for-Earth-2-CorrDiff]] - NIM microservice for CorrDiff weather downscaling and diffusion correction.
- [[NIM-for-Earth-2-FourCastNet]] - NIM microservice for global AI weather forecasting with FourCastNet.
- [[NVIDIA-Modulus]] — Modulus neural operator architectures underlie Earth-2's FourCastNet and SFNO
- [[NVIDIA-NIM]] - production microservice layer for current Earth-2 model serving.
- [[NVIDIA-Omniverse]] — Omniverse provides the 3D visualization and digital twin rendering for Earth-2 climate data
- [[NVIDIA-Warp]] — Warp simulation kernels can be integrated for physics-constrained climate computations
- [[cuDNN]] — underpins all attention and convolution computations in transformer-based weather models

## Resources
- [NVIDIA Earth-2 Developer Page](https://developer.nvidia.com/earth-2)
- [Earth-2 Studio GitHub](https://github.com/NVIDIA/earth2studio)
- [Earth-2 Blog](https://developer.nvidia.com/blog/tag/earth-2/)
- [FourCastNet Paper](https://arxiv.org/abs/2202.11214)
