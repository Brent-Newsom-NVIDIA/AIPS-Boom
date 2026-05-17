# Ising Calibration 1 35B A3B

**Type:** NVIDIA model
**Tags:** NVIDIA, Ising, quantum computing, quantum calibration, vision-language model, VLM, MoE, NIM, build.nvidia, vLLM, QCalEval
**Related:** [[NVIDIA-Ising]], [[NVIDIA-Quantum]], [[Ising-Decoding]], [[CUDA-Q]], [[NVIDIA-NVQLink]], [[CUDA-QX]], [[NVIDIA-Quantum-Cloud]], [[NVIDIA-NIM]], [[NIM-for-Vision-Language-Models]], [[NVIDIA-Accelerated-Quantum-Center]], [[NVIDIA-DGX-Quantum]], [[NVIDIA-GB200-NVL72]]
**Sources:** https://build.nvidia.com/nvidia/ising-calibration-1-35b-a3b/modelcard, https://build.nvidia.com/nvidia/ising-calibration-1-35b-a3b, https://huggingface.co/nvidia/Ising-Calibration-1-35B-A3B
**Last Updated:** 2026-04-29

## Summary
Ising Calibration 1 35B A3B is a NVIDIA-developed quantum calibration vision-language model for analyzing quantum computing calibration experiment plots. The Build NVIDIA model card positions it as a free endpoint and open VLM for calibration chart understanding across qubit modalities.

## Detail
The model card describes Ising Calibration 1 35B A3B as a quantum calibration VLM built on Qwen3.5-35B-A3B. It analyzes single-image or multi-image quantum calibration experiment plots plus text prompts and generates structured technical analysis.

The intended users are quantum computing researchers, calibration engineers, and developers who need technical descriptions, experimental conclusions, significance assessments, fit-quality evaluations, parameter extraction, or experiment-success classification from calibration plots. NVIDIA cautions that outputs should be validated by domain experts before acting on experimental conclusions.

Architecture-wise, the model is a mixture-of-experts vision-language model with an integrated vision encoder and Qwen3.5-35B-A3B MoE language model. The model card lists about 35B total parameters, about 3B active parameters per token, 256 experts, and 8 active experts.

The model card lists global deployment, NVIDIA Open Model License hosting terms, vLLM runtime, Linux support, and NVIDIA Ada Lovelace, Blackwell, and Hopper hardware compatibility. The Build NVIDIA release date and Hugging Face release date are both April 14, 2026.

## Inputs and Outputs
- **Inputs:** PNG or JPEG calibration plot images plus text prompts through an OpenAI-compatible API.
- **Outputs:** Natural-language technical analysis, conclusions, significance assessments, fit-quality evaluations, parameter extractions, and success classifications.
- **Default inference settings:** the model card lists `temperature=0` and `max_tokens=16384`.
- **Test hardware:** the model card lists 2x NVIDIA L40S 48GB.

## Training and Evaluation
The model card lists 72.5K training entries across two phases: 23.8K in-context-learning formatted entries and 48.7K zero-shot entries.

Evaluation uses QCalEval, described as a benchmark for quantum calibration plots with 243 entries across 87 scenario types from 22 experiment families, spanning superconducting qubits and neutral atoms. QCalEval evaluates six question types: technical description, experimental conclusion, experimental significance, fit quality assessment, parameter extraction, and experiment success classification.

## Connections
- [[NVIDIA-Quantum]] - Ising Calibration belongs in NVIDIA's accelerated quantum computing context.
- [[NVIDIA-Ising]] - family-level page for NVIDIA's quantum calibration and QEC AI models.
- [[Ising-Decoding]] - sibling NVIDIA Ising model domain for quantum error correction pre-decoding.
- [[CUDA-Q]] - CUDA-Q is the programming layer for hybrid quantum-classical workflows around NVIDIA quantum systems.
- [[NVIDIA-NVQLink]] - realtime GPU-QPU integration is adjacent to calibration and QEC workflows.
- [[CUDA-QX]] - CUDA-QX covers QEC and solver libraries in the same quantum software stack.
- [[NVIDIA-NIM]] - Build NVIDIA exposes the model as a NIM/API-style endpoint.
- [[NIM-for-Vision-Language-Models]] - Ising Calibration is a domain-specific VLM endpoint, not a general-purpose VLM NIM docs page.
- [[NVIDIA-Accelerated-Quantum-Center]] - NVAQC is the research context where quantum hardware, CUDA-Q, and AI supercomputing meet.

## Resources
- [Build NVIDIA model card](https://build.nvidia.com/nvidia/ising-calibration-1-35b-a3b/modelcard)
- [Build NVIDIA endpoint page](https://build.nvidia.com/nvidia/ising-calibration-1-35b-a3b)
- [Hugging Face model page](https://huggingface.co/nvidia/Ising-Calibration-1-35B-A3B)
