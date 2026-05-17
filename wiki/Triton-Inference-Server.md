# Triton Inference Server

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Inference, Serving, MLOps, Production, Framework
**Related:** [[TensorRT]], [[TensorRT-LLM]], [[NeMo-Export-Deploy]], [[NIM-for-Large-Language-Models]], [[NIM-for-LLM-Benchmarking-Guide]], [[NVIDIA-AIPerf]], [[NVIDIA-GenAI-Perf]], [[Triton-Performance-Analyzer]], [[Triton-Model-Analyzer]], [[Triton-Model-Navigator]], [[NeMo-Retriever-Embedding-NIM]], [[NIM-for-NV-CLIP]], [[NeMo-Retriever-Reranking-NIM]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[NIM-for-Cosmos-WFM]], [[NIM-for-Cosmos-Embed1]], [[NIM-for-Vision-Language-Models]], [[NIM-for-Visual-Generative-AI]], [[NIM-for-Multimodal-Safety]], [[NVIDIA-Speech-NIM-Microservices]], [[NVIDIA-ASR-NIM]], [[NVIDIA-TTS-NIM]], [[NVIDIA-NMT-NIM]], [[NVIDIA-Background-Noise-Removal-NIM]], [[NIM-for-Maxine-Studio-Voice]], [[NIM-for-Maxine-Audio2Face-2D]], [[NIM-for-Maxine-Eye-Contact]], [[NIM-for-Maxine-Active-Speaker-Detection]], [[NIM-for-Audio2Face-3D]], [[NVIDIA-NemoGuard-NIMs]], [[NIM-for-MAISI]], [[NIM-for-VISTA-3D]], [[NIM-for-RFdiffusion]], [[NIM-for-DiffDock]], [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]], [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]], [[NIM-for-DoMINO-Automotive-Aero]], [[NVIDIA-TAO]], [[Isaac-ROS-DNN-Inference]], [[NVIDIA-Isaac-ROS]], [[cuDNN]], [[PyTorch]], [[NVIDIA-NeMo]], [[FlashInfer]], [[NVIDIA-Triton-AR-VFX-SDKs]], [[NVIDIA-Augmented-Reality-SDK]], [[NVIDIA-Video-Effects-SDK]]
**Sources:** NVIDIA official documentation, developer.nvidia.com/triton-inference-server, https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_analyzer/README.html, https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/model_analyzer/README.html, https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/model_navigator/README.html, https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_analyzer/genai-perf/README.html, https://docs.nvidia.com/nim/benchmarking/llm/latest/overview.html, https://docs.nvidia.com/nim/nvclip/latest/introduction.html, https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/overview.html, https://docs.nvidia.com/maxine/triton/latest/index.html, https://docs.nvidia.com/nim/cosmos/latest/introduction.html, https://docs.nvidia.com/nim/visual-genai/latest/overview.html, https://docs.nvidia.com/nim/speech/latest/about/how-it-works.html, https://docs.nvidia.com/nim/maxine/bnr/latest/overview.html, https://docs.nvidia.com/nim/maxine/studio-voice/latest/overview.html, https://docs.nvidia.com/nim/maxine/audio2face-2d/latest/overview.html, https://docs.nvidia.com/nim/maxine/eye-contact/latest/overview.html, https://docs.nvidia.com/nim/maxine/active-speaker-detection/latest/overview.html, https://docs.nvidia.com/nim/multimodal-safety/latest/overview.html, https://docs.nvidia.com/nemo/export-deploy/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA Triton Inference Server is an open-source, production-grade model serving platform that enables organizations to deploy AI models from any framework at scale on NVIDIA GPUs, CPUs, and other hardware. It supports simultaneous deployment of multiple models, dynamic batching, model ensembles, and provides a standardized HTTP/gRPC inference protocol. Triton is framework-agnostic, supporting TensorRT, ONNX Runtime, PyTorch (TorchScript/Eager), TensorFlow, JAX, OpenVINO, and custom C++/Python backends.

## Detail

### Purpose
Triton solves the operational complexity of serving diverse AI models in production. It provides a unified serving infrastructure that maximizes GPU utilization through concurrent model execution, dynamic batching, and model pipelining, eliminating the need for framework-specific serving solutions for each model type.

### Key Features
- Multi-framework backend support: TensorRT, ONNX Runtime, PyTorch (LibTorch), TensorFlow, JAX, Python, C++, FIL (forest models)
- Dynamic batching: automatically groups inference requests to maximize GPU throughput
- Concurrent model execution: multiple models share GPU memory and execute in parallel
- Model ensembles and Business Logic Scripting (BLS) for multi-step inference pipelines
- Streaming inference support for LLMs and other generative models
- KV cache management and in-flight batching via TensorRT-LLM backend for LLM serving
- gRPC and HTTP/REST inference protocols (KServe v2 compatible)
- Model repository pattern: hot-swappable model versions without server restart
- Metrics endpoint (Prometheus-compatible) for throughput, latency, and GPU utilization
- Decoupled (streaming) request/response mode for long-running inferences
- CUDA shared memory and GPU direct for zero-copy data transfer
- Rate limiting and priority scheduling
- Model warmup and readiness/liveness probes for Kubernetes deployment
- Current performance and deployment tooling includes [[Triton-Performance-Analyzer]], [[Triton-Model-Analyzer]], [[Triton-Model-Navigator]], and generative AI benchmarking with [[NVIDIA-AIPerf]] or legacy [[NVIDIA-GenAI-Perf]].

### Use Cases
- Production LLM serving with streaming token generation
- Computer vision inference pipelines (classification, detection, segmentation)
- Multi-model ensembles (e.g., preprocessing + inference + postprocessing)
- Real-time speech recognition and synthesis serving
- Recommender system inference at scale
- A/B testing with multiple model versions
- Kubernetes-native AI inference microservices

### Hardware Requirements
- NVIDIA GPU (CUDA Compute Capability 6.0+ for basic functionality)
- TensorRT backend requires Volta (7.0+) or newer
- LLM serving via TensorRT-LLM backend: A100/H100/H200 recommended
- CPU-only deployment supported for non-GPU backends
- CUDA 11.x or 12.x depending on backend requirements

### Language Bindings
- Server: C++ core
- Client SDKs: Python, C++, Java, Go
- Configuration: Protocol Buffers (model config.pbtxt)
- REST/gRPC APIs for language-agnostic clients

## Connections
- [[TensorRT]] — primary high-performance backend for optimized CNN/Transformer inference
- [[TensorRT-LLM]] — specialized backend for high-throughput LLM serving with in-flight batching
- [[NeMo-Export-Deploy]] - current NeMo deployment library that uses Triton as a production serving target for exported LLM/MM checkpoints.
- [[NIM-for-Large-Language-Models]] — NIM LLM sits above inference engines and exposes production LLM APIs.
- [[NIM-for-LLM-Benchmarking-Guide]] — LLM benchmark workflows measure OpenAI-compatible services served through NVIDIA inference stacks.
- [[NVIDIA-AIPerf]] - current NVIDIA tool for benchmarking OpenAI-compatible generative AI inference endpoints.
- [[NVIDIA-GenAI-Perf]] - phased-out generative AI benchmark tool documented in the Triton performance section.
- [[Triton-Performance-Analyzer]] - Triton CLI for latency/throughput measurement across model-serving configurations.
- [[Triton-Model-Analyzer]] - Triton configuration search and reporting tool for deployment tuning.
- [[Triton-Model-Navigator]] - model export, conversion, correctness, profiling, and deployment-preparation toolkit.
- [[NeMo-Retriever-Embedding-NIM]] and [[NIM-for-NV-CLIP]] — current docs name Triton as the serving layer for embedding NIM containers.
- [[NeMo-Retriever-Reranking-NIM]] — current docs name Triton as the serving layer for reranking NIM containers.
- [[NIM-for-Image-OCR]] and [[NIM-for-Object-Detection]] — Retriever extraction NIMs use the same NVIDIA inference serving stack.
- [[NIM-for-Cosmos-WFM]] - current Cosmos WFM docs state the NIM sets up Triton Inference Server for serving and inference operations.
- [[NIM-for-Cosmos-Embed1]] - Cosmos embedding NIM follows the same production microservice pattern for API and health endpoints.
- [[NIM-for-Vision-Language-Models]] - VLM NIMs use production container serving with optimized engines or vLLM fallback paths.
- [[NIM-for-Visual-Generative-AI]] - Visual GenAI NIM docs name Triton as part of the high-performance inference stack.
- [[NVIDIA-Speech-NIM-Microservices]] - current Speech NIM docs place Triton inside each ASR, TTS, and NMT container for scheduling, batching, and streaming.
- [[NVIDIA-Background-Noise-Removal-NIM]] - BNR NIM docs name Triton as part of the audio enhancement inference stack.
- [[NIM-for-Maxine-Studio-Voice]], [[NIM-for-Maxine-Audio2Face-2D]], [[NIM-for-Maxine-Eye-Contact]], and [[NIM-for-Maxine-Active-Speaker-Detection]] - current Maxine NIM docs name Triton in the media AI microservice stack.
- [[NIM-for-Audio2Face-3D]] - digital-human NIM adjacent to ACE and Audio2Face microservice deployment.
- [[NIM-for-Multimodal-Safety]] - current docs state Multimodal Safety NIM containers are accelerated with Triton Inference Server.
- [[NVIDIA-NemoGuard-NIMs]] - guardrail NIMs use NIM LLM or classify serving endpoints alongside Triton-backed NIM infrastructure.
- [[NIM-for-MAISI]] and [[NIM-for-VISTA-3D]] - medical imaging NIMs use Triton-style NIM deployment patterns, including VISTA-3D multi-GPU load balancing through Triton.
- [[NIM-for-RFdiffusion]], [[NIM-for-DiffDock]], [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]], [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]], and [[NIM-for-DoMINO-Automotive-Aero]] - BioNeMo, ALCHEMI, and PhysicsNeMo NIMs follow the same containerized service pattern for scientific AI inference.
- [[FlashInfer]] — attention kernel library used by TensorRT-LLM backend within Triton
- [[NVIDIA-TAO]] - TAO docs include integration paths for serving TAO CV models through Triton.
- [[Isaac-ROS-DNN-Inference]] - Isaac ROS package family that offers a Triton node for robot perception models requiring broader backend support.
- [[NVIDIA-Isaac-ROS]] - robotics package ecosystem that can use Triton for DNN inference in ROS graphs.
- [[PyTorch]] — LibTorch backend enables direct serving of PyTorch models
- [[NVIDIA-NeMo]] — NeMo-trained models are commonly deployed through Triton
- [[cuDNN]] — used by PyTorch and TensorFlow backends for DNN primitive acceleration
- [[NVIDIA-Triton-AR-VFX-SDKs]] — media AI guide that uses Triton for AR/VFX SDK server deployments.
- [[NVIDIA-Augmented-Reality-SDK]] and [[NVIDIA-Video-Effects-SDK]] — AR/VFX features can be served through Triton-enabled SDK paths.

## Resources
- [NVIDIA Triton Developer Page](https://developer.nvidia.com/triton-inference-server)
- [Documentation](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/)
- [Performance Benchmarking and Tuning](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_benchmark/genai_perf.html)
- [GitHub](https://github.com/triton-inference-server/server)
- [NVIDIA NGC Container](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/tritonserver)
