# NeMo Gym

**Type:** Library
**Tags:** NVIDIA, NeMo, NeMo Gym, reinforcement learning, RL environments, rollout collection, agent training, verifier, resources server, model server, JSONL, Nemotron
**Related:** [[NVIDIA-NeMo]], [[NeMo-RL]], [[Nemotron-Training-Recipes]], [[Nemotron-3-Nano]], [[Nemotron-3-Super]], [[NeMo-Data-Designer]], [[NeMo-Evaluator]], [[NVIDIA-Agent-Intelligence-Toolkit]], [[NVIDIA-NIM]], [[vLLM]], [[PyTorch]]
**Sources:** https://docs.nvidia.com/nemo/gym/latest/index.html, https://docs.nvidia.com/nemo/gym/latest/about/overview.html, https://docs.nvidia.com/nemo/gym/latest/about/concepts/index.html, https://docs.nvidia.com/nemo/gym/latest/about/ecosystem.html, https://docs.nvidia.com/nemo/gym/latest/data/index.html, https://docs.nvidia.com/nemo/gym/latest/environment-tutorials/index.html, https://docs.nvidia.com/nemo/gym/latest/training-tutorials/index.html, https://docs.nvidia.com/nemo/gym/latest/reference/index.html
**Last Updated:** 2026-04-29

## Summary
NeMo Gym is NVIDIA's library for building reinforcement-learning training environments for large language models. Current docs position it inside the [[NVIDIA-NeMo]] framework as the RL environment infrastructure and rollout-collection layer: it defines agent/model/resources server patterns, routes agent-environment interactions, supports verifier/reward logic, prepares JSONL training datasets, and integrates with RL frameworks such as [[NeMo-RL]].

## Detail

### Purpose
Agent and reasoning model training needs more than prompts and static labels. Teams need environments where an agent can act, call tools, receive verified feedback, and produce trajectories that can become RL, SFT, or DPO training data. NeMo Gym standardizes that environment layer so rollout collection can scale across tasks, tools, model backends, and reward/verifier implementations.

This page is the canonical wiki target for NeMo Gym. Do not split agent server, model server, resources server, data, tutorials, API modules, or individual model recipe pages into separate wiki pages unless NVIDIA publishes a distinct durable product/topic around them.

### Current architecture
- **Agent server:** orchestrates rollouts, tool calling, and verification.
- **Model server:** configures LLM inference backends, including vLLM and OpenAI-compatible response schemas.
- **Resources server:** defines tasks, tools, environment logic, and reward/verification behavior.
- **Data format:** current docs use JSONL for RL training data; each line includes `responses_create_params` using an OpenAI Responses API-style schema.
- **Rollout collection:** produces scored interactions and can feed RL, SFT, DPO, or multi-environment training workflows.
- **Training integrations:** current docs include NeMo RL tutorials, Unsloth tutorials, multi-environment rollout collection, and offline SFT/DPO flows.
- **Model recipes:** current docs include NeMo Gym recipe surfaces for [[Nemotron-3-Nano]] and [[Nemotron-3-Super]].

### NVIDIA context
NeMo Gym is the environment layer around [[NeMo-RL]]. It complements [[NeMo-Data-Designer]] by collecting/verifying interaction data rather than only synthesizing static examples, and complements [[NeMo-Evaluator]] by producing rollout artifacts and verifier signals that can later become evaluation or training data.

## Connections
- [[NVIDIA-NeMo]] - parent NeMo framework family for training, post-training, evaluation, guardrails, and agent workflows.
- [[NeMo-RL]] - primary NVIDIA RL/post-training library that can train from NeMo Gym rollouts.
- [[Nemotron-Training-Recipes]] - current Nemotron training docs and launch material use NeMo Gym in the RL/post-training story.
- [[Nemotron-3-Nano]] and [[Nemotron-3-Super]] - current NeMo Gym docs include model recipe surfaces for these Nemotron 3 models.
- [[NeMo-Data-Designer]] - synthetic data service adjacent to NeMo Gym rollout/training-data generation.
- [[NeMo-Evaluator]] - evaluation layer that can use verifier logic and rollout artifacts downstream.
- [[NVIDIA-Agent-Intelligence-Toolkit]] - broader agent workflow/evaluation toolkit adjacent to NeMo Gym's environment and rollout infrastructure.
- [[NVIDIA-NIM]], [[vLLM]], and [[PyTorch]] - model serving and training stack pieces used around NeMo Gym workflows.

## Source Excerpts
- NVIDIA docs describe NeMo Gym as a library for building RL training environments for LLMs.
- Current docs describe three server components: agent, model, and resources servers.
- Current data docs state that NeMo Gym datasets use JSONL format for RL training.

## Resources
- [NeMo Gym Documentation](https://docs.nvidia.com/nemo/gym/latest/index.html)
- [About NeMo Gym](https://docs.nvidia.com/nemo/gym/latest/about/overview.html)
- [NeMo Gym Concepts](https://docs.nvidia.com/nemo/gym/latest/about/concepts/index.html)
- [NeMo Gym Data](https://docs.nvidia.com/nemo/gym/latest/data/index.html)
- [NeMo Gym Training Tutorials](https://docs.nvidia.com/nemo/gym/latest/training-tutorials/index.html)
