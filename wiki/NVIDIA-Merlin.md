# NVIDIA Merlin

**Type:** Technology
**Tags:** NVIDIA, Merlin, recommender systems, NVTabular, HugeCTR, Triton, TensorRT, RAPIDS, cuDF, PyTorch, TensorFlow
**Related:** [[NVIDIA-RAPIDS]], [[cuDF]], [[cuML]], [[cuGraph]], [[cuVS]], [[PyTorch]], [[TensorRT]], [[Triton-Inference-Server]], [[NGC]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://developer.nvidia.com/merlin, https://developer.nvidia.com/nvidia-merlin/nvtabular, https://nvidia-merlin.github.io/Merlin/stable/guide/recommender_system_guide.html, https://nvidia-merlin.github.io/NVTabular/stable/Introduction.html
**Last Updated:** 2026-04-30

## Summary
NVIDIA Merlin is NVIDIA's open-source framework family for building, training, and deploying GPU-accelerated recommender systems. It connects RAPIDS data processing, NVTabular feature engineering, HugeCTR training, Merlin Models, Transformers4Rec, Triton-based inference, and NGC container workflows into an end-to-end recommendation stack.

## Detail

### NVIDIA context
Recommendation systems are a major GPU workload class because commercial recommenders combine massive tabular/event datasets, retrieval/ranking models, sparse embeddings, online inference, and continuous experimentation. NVIDIA's Merlin material positions the framework as an end-to-end stack for high-performance recommender workflows on CPUs and GPUs, with components that can be used together or independently.

### Component map
- Merlin Models provides recommender model implementations for retrieval and ranking.
- NVTabular handles GPU-accelerated feature engineering and preprocessing for terabyte-scale tabular recommender datasets.
- HugeCTR is a GPU-focused training framework for deep neural recommender systems, including distributed model-parallel training and hierarchical memory.
- Transformers4Rec targets sequential and session-based recommendation pipelines with transformer architectures.
- Merlin Systems helps package and deploy end-to-end recommender pipelines, including feature-processing steps.
- Triton and [[TensorRT]] connect trained recommender systems to production inference.
- [[NVIDIA-RAPIDS]] and [[cuDF]] provide important DataFrame and preprocessing foundations, especially for NVTabular.

### Current-source note
The public Merlin documentation surface is still NVIDIA-authored and public, but its stable docs are older than some current NVIDIA AI pages. Keep this as one durable topic page for the Merlin recommender stack. Do not create separate wiki pages for every Merlin component unless the user asks for a deeper recommender-systems batch.

## Connections
- [[NVIDIA-RAPIDS]] and [[cuDF]] - NVTabular and recommender preprocessing are built around GPU DataFrame acceleration.
- [[cuML]], [[cuGraph]], and [[cuVS]] - adjacent RAPIDS libraries for classical ML, graph analytics, and vector search in recommender workflows.
- [[PyTorch]] - Merlin includes PyTorch-oriented training paths and recommender models.
- [[TensorRT]] and [[Triton-Inference-Server]] - production inference targets for Merlin recommender pipelines.
- [[NGC]] - NVIDIA distribution surface for Merlin container workflows.
- [[NVIDIA-AI-Enterprise]] - enterprise AI software context for supported recommender-system deployments and adjacent RAPIDS/Triton components.

## Source Excerpts
- NVIDIA Developer describes Merlin components as interoperable pieces for recommender workflows spanning ingest, training, inference, and production deployment.
- NVIDIA NVTabular docs describe it as a Merlin component for terabyte-scale recommender feature engineering accelerated by RAPIDS Dask-cuDF.
- The Merlin recommender systems guide organizes recommendations into ranking, retrieval, and sequential/session-based model patterns.

## Resources
- [NVIDIA Merlin](https://developer.nvidia.com/merlin)
- [NVIDIA Merlin NVTabular](https://developer.nvidia.com/nvidia-merlin/nvtabular)
- [Merlin Recommender Systems Guide](https://nvidia-merlin.github.io/Merlin/stable/guide/recommender_system_guide.html)
- [NVTabular Documentation](https://nvidia-merlin.github.io/NVTabular/stable/Introduction.html)
