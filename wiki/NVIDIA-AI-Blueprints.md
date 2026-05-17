# NVIDIA AI Blueprints

**Type:** Platform
**Tags:** NVIDIA, AI blueprints, reference workflows, NIM, NeMo, agents, build.nvidia
**Related:** [[NVIDIA-NIM]], [[NIM-for-Large-Language-Models]], [[NVIDIA-NIM-Operator]], [[Red-Hat-AI-Factory-with-NVIDIA]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-Data-Flywheel-Blueprint]], [[NVIDIA-Video-Search-and-Summarization-Blueprint]], [[NVIDIA-Tokkio-Digital-Human-Blueprint]], [[NeMo-Platform]], [[NeMo-Data-Designer]], [[NeMo-Customizer]], [[NeMo-Evaluator]], [[NeMo-Auditor]], [[NeMo-Retriever-Embedding-NIM]], [[NeMo-Retriever-Reranking-NIM]], [[NIM-for-Cosmos-Embed1]], [[NIM-for-Vision-Language-Models]], [[NIM-for-Visual-Generative-AI]], [[NVIDIA-NemoGuard-NIMs]], [[NIM-for-Multimodal-Safety]], [[NVIDIA-AI-Enterprise]], [[Nemotron]], [[Nemotron-3-Nano]], [[Nemotron-3-Super]], [[Nemotron-3-Nano-Omni]], [[NVIDIA-Brev]]
**Sources:** https://build.nvidia.com/blueprints, https://docs.nvidia.com/rag/latest/, https://docs.nvidia.com/vss/latest/, https://docs.nvidia.com/ace/tokkio/latest/overview/overview.html, https://build.nvidia.com/nvidia/aiq/blueprintcard, https://build.nvidia.com/nvidia/build-an-enterprise-data-flywheel/modelcard, https://docs.nvidia.com/nemo/microservices/latest/data-designer/index.html, https://docs.nvidia.com/nemo/microservices/latest/customizer/index.html, https://docs.nvidia.com/nemo/microservices/latest/evaluator/index.html, https://docs.nvidia.com/nemo/microservices/latest/audit/index.html, https://docs.nvidia.com/nim/cosmos-embed1/latest/introduction.html, https://docs.nvidia.com/nim/vision-language-models/latest/introduction.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/overview.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA AI Blueprints are NVIDIA-published reference workflows, code paths, and deployment patterns for building AI applications on NIM, NeMo, Nemotron, and the broader NVIDIA AI software stack. The build.nvidia.com blueprint catalog should be used as a discovery and current-state source, not as a reason to create a separate wiki page for every listed build or partner example.

## Detail

### Purpose
Blueprints give developers starting points for production-oriented AI applications. They commonly combine NVIDIA model endpoints or downloadable NIMs with orchestration code, deployment instructions, optional Helm or Docker paths, and guidance for connecting enterprise data or domain workflows.

### Current scope
- Agent workflows such as [[NVIDIA-AI-Q-Blueprint]] for enterprise research and deep research.
- Retrieval workflows such as [[NVIDIA-RAG-Blueprint]] for enterprise RAG, multimodal retrieval, evaluation, and guardrails.
- Continuous model and agent optimization workflows such as [[NVIDIA-Data-Flywheel-Blueprint]], with [[NeMo-Data-Designer]], [[NeMo-Customizer]], [[NeMo-Evaluator]], and [[NeMo-Auditor]] providing data generation, adaptation, measurement, and safety-audit services.
- Video intelligence workflows such as [[NVIDIA-Video-Search-and-Summarization-Blueprint]] for vision agents, search, summarization, and alert verification.
- Digital-human workflows such as [[NVIDIA-Tokkio-Digital-Human-Blueprint]] for avatar-based customer-service and enterprise assistant experiences.
- Domain application examples across voice agents, healthcare agents, retail assistants, telecom, warehouse operations, financial data, and physical AI data search.
- Physical AI and multimodal workflows can use [[NIM-for-Cosmos-Embed1]], [[NIM-for-Vision-Language-Models]], and [[NIM-for-Visual-Generative-AI]] without turning every build.nvidia listing into its own wiki page.
- Deployment paths that can include build.nvidia.com endpoints, [[NVIDIA-Brev]] cloud environments, NGC artifacts, Docker Compose, or Kubernetes/Helm depending on the blueprint.
- [[Red-Hat-AI-Factory-with-NVIDIA]] is an OpenShift AI deployment foundation for validated NVIDIA Blueprints and agent workflows in a Red Hat environment.

### NVIDIA context
Blueprints sit between NVIDIA developer samples and enterprise production platforms. They show how [[NVIDIA-NIM]], [[NeMo-Platform]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NeMo-Retriever]], [[Nemotron]], current model choices such as [[Nemotron-3-Nano]], [[Nemotron-3-Super]], and [[Nemotron-3-Nano-Omni]], and [[NVIDIA-AI-Enterprise]] fit together in real application patterns.

### Wiki curation guidance
Do not create one wiki page per blueprint listing. Create a page only when a blueprint is a durable NVIDIA-authored topic with its own stable docs, architecture, or ecosystem significance. Smaller or duplicate examples should be folded into the canonical topic page, such as [[Nemotron]], [[NVIDIA-Riva]], [[NVIDIA-Cosmos]], [[NeMo-Retriever]], or [[NVIDIA-AI-Q-Blueprint]].

## Connections
- [[NVIDIA-NIM]] - many blueprints rely on hosted or downloadable NIM model endpoints.
- [[NIM-for-Large-Language-Models]] - LLM NIMs provide the self-hosted model serving path for many generative AI blueprints.
- [[NVIDIA-NIM-Operator]] - Kubernetes deployment path for blueprint stacks that include NIM/NeMo microservices.
- [[Red-Hat-AI-Factory-with-NVIDIA]] - OpenShift AI deployment guide that uses validated blueprints as a path from agent prototypes to production.
- [[NeMo-Retriever-Embedding-NIM]] and [[NeMo-Retriever-Reranking-NIM]] - retrieval NIMs commonly appear in RAG and agent blueprints.
- [[NIM-for-Cosmos-Embed1]] - durable NIM for physical AI video search and dataset curation workflows referenced by blueprint-style applications.
- [[NIM-for-Vision-Language-Models]] and [[NIM-for-Visual-Generative-AI]] - multimodal understanding and visual generation NIM families that can compose with blueprint workflows.
- [[NVIDIA-NemoGuard-NIMs]] and [[NIM-for-Multimodal-Safety]] - safety NIM families that can moderate text and multimodal blueprint workflows.
- [[NVIDIA-AI-Enterprise]] - enterprise blueprints map to NVIDIA-supported production AI software.
- [[NVIDIA-RAG-Blueprint]] - durable RAG Blueprint for enterprise retrieval, multimodal RAG, and knowledge-grounded generation.
- [[NVIDIA-AI-Q-Blueprint]] - durable AI Blueprint for enterprise research agents.
- [[NVIDIA-Data-Flywheel-Blueprint]] - durable AI Blueprint for continuous agent and model optimization.
- [[NVIDIA-Video-Search-and-Summarization-Blueprint]] - durable VSS Blueprint for vision agents and video analytics.
- [[NVIDIA-Tokkio-Digital-Human-Blueprint]] - durable Digital Human Blueprint for interactive avatar experiences.
- [[NeMo-Platform]] - blueprints often use NeMo microservices for customization, evaluation, retrieval, and inference.
- [[NeMo-Data-Designer]], [[NeMo-Customizer]], [[NeMo-Evaluator]], and [[NeMo-Auditor]] - NeMo Platform services that turn blueprint workflows into data, adaptation, evaluation, and safety-audit loops.
- [[Nemotron]], [[Nemotron-3-Nano]], [[Nemotron-3-Super]], and [[Nemotron-3-Nano-Omni]] - current blueprints use Nemotron models for reasoning, speech, multimodal perception, and agentic workflows.
- [[NVIDIA-Brev]] - some blueprints expose launchable cloud development paths through Brev.

## Source Excerpts
- build.nvidia.com lists NVIDIA and partner blueprints for AI applications, with tags for launchability, enterprise use, NIM, NeMo, Nemotron, and domain categories.
- The AI-Q and Data Flywheel blueprint cards show how durable blueprints can become canonical wiki pages when they have stable NVIDIA-authored architecture and deployment surfaces.

## Resources
- [Build NVIDIA Blueprints](https://build.nvidia.com/blueprints)
