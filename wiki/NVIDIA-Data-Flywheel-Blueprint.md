# NVIDIA Data Flywheel Blueprint

**Type:** Platform
**Tags:** NVIDIA, AI Blueprint, data flywheel, NeMo microservices, NIM, Nemotron, evaluation, fine-tuning
**Related:** [[NVIDIA-AI-Blueprints]], [[NeMo-Platform]], [[NeMo-Data-Designer]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[NVIDIA-NIM-Operator]], [[Nemotron]], [[Nemotron-3-Nano]], [[Nemotron-3-Super]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-Agent-Intelligence-Toolkit]]
**Sources:** https://build.nvidia.com/nvidia/build-an-enterprise-data-flywheel/modelcard, https://build.nvidia.com/blueprints, https://docs.nvidia.com/nemo/microservices/latest/data-designer/index.html, https://docs.nvidia.com/nemo/microservices/latest/customizer/index.html, https://docs.nvidia.com/nemo/microservices/latest/evaluator/index.html, https://build.nvidia.com/nvidia/nemotron-3-nano-30b-a3b/modelcard, https://build.nvidia.com/nvidia/nemotron-3-super-120b-a12b/modelcard
**Last Updated:** 2026-04-29

## Summary
NVIDIA Data Flywheel Blueprint is an NVIDIA AI Blueprint for continuously improving AI agents and models using production traffic, evaluation, customization, and redeployment loops. The current build.nvidia.com card positions it as a production-integrated workflow built with NVIDIA NeMo microservices, NIM, and open NVIDIA Nemotron-related model choices.

## Detail

### Purpose
AI agents in production can drift, become expensive, or overuse larger models where smaller or fine-tuned models would meet the same quality target. The Data Flywheel Blueprint creates a repeatable optimization loop: collect production interactions, curate data, evaluate model candidates, fine-tune or adapt where needed, and redeploy models that satisfy accuracy, latency, and cost goals.

### Core workflow
- Collect real-world agent traffic and task outputs.
- Curate data from log stores for evaluation, in-context learning, or fine-tuning.
- Compare candidate NIMs and model variants against task-specific metrics.
- Use [[NeMo-Data-Designer]] when synthetic examples are needed to supplement production data.
- Use [[NeMo-Evaluator]] for model and workflow evaluation.
- Use [[NeMo-Customizer]] for LoRA/SFT-style fine-tuning.
- Route and experiment across candidate models through deployment and NIM proxy components.
- Expose the workflow through APIs and deploy with Docker Compose or Kubernetes/Helm patterns.

### NVIDIA context
The Data Flywheel Blueprint sits on top of [[NeMo-Platform]], [[NeMo-Evaluator]], [[NeMo-Customizer]], [[NVIDIA-NIM]], and [[Nemotron]] model families. It is especially relevant to [[NVIDIA-Agent-Intelligence-Toolkit]] and [[NVIDIA-AI-Enterprise]] because it turns agent operations into an ongoing optimization discipline instead of a one-time model deployment. Current Nemotron candidates such as [[Nemotron-3-Nano]] and [[Nemotron-3-Super]] are examples of the smaller/larger model tradeoffs a flywheel may evaluate.

## Connections
- [[NVIDIA-AI-Blueprints]] - Data Flywheel is one of the durable NVIDIA-authored blueprint topics.
- [[NeMo-Platform]] - provides the customization, evaluation, datastore, deployment, and NIM proxy components referenced by the blueprint.
- [[NeMo-Data-Designer]] - synthetic data generation service that can supplement task data for optimization loops.
- [[NeMo-Customizer]] - fine-tuning service used when production evidence shows a smaller or specialized model can meet the target.
- [[NeMo-Evaluator]] - measurement service for comparing candidates and deciding whether to redeploy.
- [[NVIDIA-NIM]] - candidate models are deployed and evaluated through NIM-style microservices.
- [[NIM-for-Large-Language-Models]] - LLM NIMs are common candidate deployments in data-flywheel optimization.
- [[NVIDIA-NIM-Operator]] - enables repeatable Kubernetes deployment, scaling, and redeployment of NIM/NeMo services.
- [[Nemotron]], [[Nemotron-3-Nano]], and [[Nemotron-3-Super]] - current blueprint material ties the workflow to NVIDIA/open model choices in the Nemotron ecosystem.
- [[NVIDIA-AI-Enterprise]] - production governance, support, and lifecycle context for enterprise deployment.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - agent workflows need evaluation and optimization loops that the data flywheel formalizes.

## Source Excerpts
- The build.nvidia.com card describes an automated loop that uses production traffic logs and institutional knowledge to improve model efficiency and accuracy.
- The same card lists NeMo microservices such as Customizer, Evaluator, Datastore, Deployment Manager, Entity Store, and NIM Proxy as NVIDIA components in the blueprint.

## Resources
- [Data Flywheel Blueprint Card](https://build.nvidia.com/nvidia/build-an-enterprise-data-flywheel/modelcard)
- [Build NVIDIA Blueprints](https://build.nvidia.com/blueprints)
