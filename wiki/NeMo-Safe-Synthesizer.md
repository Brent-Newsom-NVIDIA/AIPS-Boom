# NeMo Safe Synthesizer

**Type:** Microservice
**Tags:** NVIDIA, NeMo Platform, safe synthetic data, privacy, differential privacy, tabular data, PII
**Related:** [[NeMo-Platform]], [[NVIDIA-NeMo]], [[NeMo-Data-Designer]], [[NeMo-Evaluator]], [[NeMo-Customizer]], [[NeMo-Curator]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://docs.nvidia.com/nemo/microservices/latest/safe-synthesizer/about/index.html
**Last Updated:** 2026-04-29

## Summary
NeMo Safe Synthesizer is the NeMo Platform service for creating private synthetic versions of sensitive tabular datasets. Current NVIDIA docs describe it as an early-access service that preserves useful statistical properties while avoiding one-to-one mappings to original records, with PII replacement, synthesis configuration, differential privacy, quality/privacy evaluation, and job-based execution.

## Detail

### Purpose
Organizations often have valuable tabular data that cannot be used directly because it contains private or sensitive information. NeMo Safe Synthesizer helps create synthetic substitutes that can support downstream AI tasks while reducing exposure of original records.

### Current scope
- Uploading tabular source data through NeMo Platform files APIs.
- Preparing data with PII replacement and holdout/split configuration.
- Configuring synthesis, model selection, generation parameters, and differential privacy.
- Executing Safe Synthesizer jobs, monitoring progress, and downloading synthetic outputs.
- Evaluating quality and privacy through current Safe Synthesizer evaluation reports and metrics.
- Using Docker Compose quickstarts or NeMo Platform Helm deployments.

### NVIDIA context
Safe Synthesizer is complementary to [[NeMo-Data-Designer]]. Data Designer is better when teams need to create synthetic data from scratch or from small seeds; Safe Synthesizer is for sensitive existing tabular datasets that need private synthetic counterparts.

## Connections
- [[NeMo-Platform]] - parent platform for Safe Synthesizer jobs and artifacts.
- [[NVIDIA-NeMo]] - broader NeMo lifecycle suite.
- [[NeMo-Data-Designer]] - complementary synthetic data creation service for from-scratch or seeded generation.
- [[NeMo-Evaluator]] - evaluation concepts overlap with quality/privacy assessment of generated data.
- [[NeMo-Customizer]] - private synthetic datasets can become customization inputs.
- [[NeMo-Curator]] - adjacent data preparation and filtering layer.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment/support context for NeMo Platform services.

## Source Excerpts
- NVIDIA docs describe Safe Synthesizer as creating private versions of sensitive tabular datasets.
- Current docs distinguish Safe Synthesizer from Data Designer when sensitive existing data is available.

## Resources
- [NeMo Safe Synthesizer About](https://docs.nvidia.com/nemo/microservices/latest/safe-synthesizer/about/index.html)
