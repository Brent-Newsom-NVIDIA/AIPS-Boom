# AIPS BOOM — NVIDIA CUDA Wiki

*A connected NVIDIA software, CUDA library, hardware, and model knowledge graph for mapping customer needs to NVIDIA technology.*

*Last updated: 2026-05-09*
*Total pages: 503*

---

## Concepts

- [[NVIDIA-AI-Grid]] — Distributed AI infrastructure concept for workload placement across cloud, data center, and edge locations
- [[Floating-Point-and-IEEE-754]] — NVIDIA guidance on CUDA floating-point behavior, IEEE 754 compliance, FMA, and numerical accuracy

## People

*(none yet)*

## Organizations

*(none yet)*

## Technologies

### Math & Linear Algebra
- [[cuBLAS]] — GPU-accelerated BLAS library: all 152 standard routines, Tensor Core GEMM, multi-GPU
- [[cuBLASLt]] — Lightweight cuBLAS GEMM API for descriptor-driven matmul heuristics and tuning
- [[cuBLASXt]] — cuBLAS single-node multi-GPU BLAS Level 3 host interface
- [[cuBLASDx]] — Device-side BLAS-style operations for fusing dense linear algebra into CUDA kernels
- [[cuBLASMp]] — Multi-process distributed dense linear algebra library with PBLAS-like APIs
- [[cuFFT]] — GPU-accelerated Fast Fourier Transform library for 1D/2D/3D real and complex data
- [[cuFFTW]] — FFTW3-compatible interface layer for porting FFTW applications to cuFFT
- [[cuFFTDx]] — Device-side FFT library for fusing FFT operations into CUDA kernels
- [[cuFFTMp]] — Distributed multi-process cuFFT library for 2D/3D multi-GPU, multi-node FFTs
- [[cuRAND]] — GPU-accelerated random number generation library (pseudo and quasi-random, multiple distributions)
- [[cuSOLVER]] — GPU-accelerated dense and sparse direct linear solvers and eigensolvers
- [[cuSOLVERMp]] — Distributed-memory dense linear solver and eigensolver library with ScaLAPACK-like APIs
- [[cuSPARSE]] — GPU-accelerated sparse matrix linear algebra (SpMV, SpMM, preconditioners)
- [[cuSPARSELt]] — Structured sparse matrix-matrix multiplication library for Tensor Core sparse acceleration
- [[cuTENSOR]] — GPU-accelerated tensor contraction, reduction, and elementwise operations
- [[cuTENSORMg]] — cuTENSOR single-process multi-GPU tensor operation support
- [[cuTENSORMp]] — cuTENSOR multi-process distributed tensor contraction support
- [[cuDSS]] — Preview CUDA direct sparse solver with single-GPU, multi-GPU, and multi-node modes
- [[AmgX]] — GPU-accelerated algebraic multigrid and Krylov solver library (open source)
- [[Incomplete-LU-Cholesky]] — CUDA whitepaper guidance for preconditioned iterative solvers using cuSPARSE and cuBLAS
- [[nvmath-python]] — Python interface to NVIDIA CUDA-X math libraries (cuBLAS, cuFFT, cuRAND, cuDSS)
- [[NVBLAS]] — drop-in GPU BLAS shim; transparently redirects Level 3 BLAS calls to cuBLAS via LD_PRELOAD
- [[NVPL]] — NVIDIA Performance Libraries: CPU math (BLAS, LAPACK, FFT, RAND) optimized for Grace/Arm

### Deep Learning
- [[cuDNN]] — GPU-accelerated primitives for deep neural networks (convolution, attention, pooling)
- [[TensorRT]] — inference compiler, runtime, and model optimizer for production DNN deployment
- [[TensorRT-for-RTX]] — RTX-focused TensorRT runtime with AOT/JIT portable engines for local PC and workstation AI inference
- [[TensorRT-LLM]] — LLM inference optimization library with continuous batching, paged KV cache, FP8
- [[Transformer-Engine]] — NVIDIA transformer acceleration library for PyTorch/JAX with FP8, MXFP8, and NVFP4 recipes
- [[NVIDIA-Optimized-Frameworks]] — NVIDIA deep learning framework containers, user guide, and support matrix for PyTorch/TensorFlow/JAX environments
- [[PyG]] — NVIDIA-optimized PyTorch Geometric container and graph neural network workflow for PyTorch, cuGraph, and PhysicsNeMo
- [[NVIDIA-DGL]] — legacy NVIDIA DGL container/release-note surface now deprecated in favor of PyG for forward GNN workflows
- [[CUTLASS]] — open-source C++ template library for custom high-performance GEMM on NVIDIA GPUs
- [[FlashInfer]] — open-source GPU kernel toolkit for LLM inference (attention, batch decode, sampling)
- [[NVIDIA-Deep-Learning-Performance]] — NVIDIA guidance for GPU deep learning performance, precision, Tensor Cores, and profiling
- [[LLM-Inference-Quick-Start-Recipes]] — NVIDIA quick-start recipes for common LLM inference paths across NIM, TensorRT-LLM, Triton, and Dynamo

### Data Processing & ML
- [[NVIDIA-RAPIDS]] — CUDA-X data science framework for GPU-accelerated DataFrames, ML, graphs, vector search, image processing, Dask, and Spark
- [[RAPIDS-Accelerator-for-Apache-Spark]] — GPU acceleration plugin for Spark SQL/DataFrame workloads using RAPIDS cuDF
- [[cuDF]] — GPU-accelerated DataFrame library; 50x faster pandas drop-in (RAPIDS)
- [[cuML]] — GPU-accelerated machine learning; 50x faster scikit-learn drop-in (RAPIDS)
- [[cuGraph]] — GPU-accelerated graph analytics; 48x faster NetworkX drop-in (RAPIDS)
- [[cuVS]] — GPU-accelerated vector search with world-class CAGRA ANN performance (RAPIDS)
- [[NVIDIA-Merlin]] — NVIDIA recommender systems framework family spanning NVTabular, HugeCTR, Merlin Models, Systems, and Triton inference
- [[NVIDIA-Legate-Core]] — runtime and framework foundation for composable accelerated libraries such as cuPyNumeric
- [[cuOpt]] — GPU-accelerated operations research solver for vehicle routing and logistics optimization
- [[NVIDIA-cuOpt-Managed-Service]] — hosted/API-oriented cuOpt service for routing optimization workloads
- [[NeMo-Curator]] — GPU-accelerated multimodal data curation pipelines for LLM training
- [[Morpheus]] — GPU-accelerated AI cybersecurity framework for real-time threat detection
- [[nvComp]] — GPU-accelerated data compression and decompression library (LZ4, Snappy, ZSTD, GDeflate)
- [[GPU-Direct-Storage]] — direct data path from NVMe/network storage to GPU memory bypassing CPU
- [[cuFile-API]] — GPUDirect Storage API surface for registering GPU buffers/files and issuing direct storage I/O

### Image & Video
- [[NVIDIA-DALI]] — GPU-accelerated data loading and augmentation for deep learning training pipelines
- [[CV-CUDA]] — open-source GPU-accelerated image pre/post-processing for computer vision inference
- [[NPP]] — GPU-accelerated image and signal processing primitives library (5,000+ functions)
- [[NVIDIA-Video-Codec-SDK]] — hardware-accelerated video encode (NVENC) and decode (NVDEC) APIs
- [[NVIDIA-Optical-Flow-SDK]] — hardware-accelerated optical flow computation on Turing/Ampere/Ada GPUs
- [[nvImageCodec]] — unified GPU-accelerated image codec library (JPEG, JPEG2000, TIFF, WebP, PNG)
- [[cuCIM]] — GPU-accelerated image processing with scikit-image compatible API (RAPIDS)
- [[nvJPEG]] — GPU-accelerated JPEG encoding/decoding; batch decode backend for DALI and nvImageCodec
- [[nvJPEG2000]] — CUDA-accelerated JPEG2000 encode/decode library
- [[nvTIFF]] — CUDA-accelerated TIFF encode/decode library

### Parallel Algorithms
- [[Thrust]] — GPU-accelerated C++ STL-compatible parallel algorithms (sort, scan, reduce, transform)
- [[CUB]] — GPU cooperative primitives library: device/block/warp-level sort, scan, reduce, histogram
- [[cuda-compute]] — Python bindings for CCCL/CUB/Thrust-style host-callable parallel algorithms
- [[NCCL]] — multi-GPU and multi-node collective communications (all-reduce, all-gather, broadcast)
- [[NVSHMEM]] — GPU-cluster PGAS (Partitioned Global Address Space) communication via OpenSHMEM
- [[NVSHMEM4Py]] — Official Python binding for NVSHMEM symmetric memory, put/get, collectives, and interoperability
- [[NVIDIA-HPC-X]] — NVIDIA MPI, SHMEM, UCX, UCC, HCOLL, ClusterKit, and NCCL-RDMA-SHARP communications toolkit

### Scientific & Physics
- [[NVIDIA-Warp]] — open-source Python framework for GPU-accelerated physics simulation with auto-diff
- [[cuEquivariance]] — NVIDIA geometric neural network library with segmented polynomials, CUDA kernels, PyTorch, and JAX
- [[cuLitho]] — GPU-accelerated computational lithography (OPC, ILT) for semiconductor manufacturing
- [[NVIDIA-Quantum]] — NVIDIA accelerated quantum computing platform for QPU, GPU, CUDA-Q, and NVQLink workflows
- [[NVIDIA-NVQLink]] — realtime GPU-QPU integration architecture for calibration, QEC, and hybrid quantum workflows
- [[NVIDIA-Ising]] — NVIDIA open AI model family for quantum calibration and quantum error correction decoding
- [[CUDA-QX]] — CUDA-Q library collection for quantum error correction and quantum-classical solver workflows
- [[CUDA-Q-Realtime]] — CUDA-Q realtime API and networking layer for NVQLink GPU-to-controller feedback loops
- [[cuQuantum]] — GPU-accelerated quantum computing simulation (state vector, tensor network, density matrix)
- [[cuStateVec]] — cuQuantum state-vector simulation component for quantum circuit workloads
- [[cuTensorNet]] — cuQuantum tensor-network component for contraction paths, slicing, MPS workflows, and distributed execution
- [[cuDensityMat]] — cuQuantum analog quantum dynamics solver library for states, operators, gradients, and time propagation
- [[cuPauliProp]] — cuQuantum Pauli propagation library for Pauli-basis simulation, traces, truncation, and gradients
- [[cuStabilizer]] — cuQuantum stabilizer simulation library for Pauli-frame Clifford circuits and DEM sampling
- [[cuQuantum-Appliance]] — NGC container workflow for multi-GPU cuQuantum simulation with Qiskit and Cirq frontends
- [[CUDA-Q]] — hybrid quantum-classical computing platform with GPU simulation and QPU backend support
- [[Ising-Calibration-1-35B-A3B]] — NVIDIA quantum calibration VLM for analyzing QPU calibration experiment plots
- [[Ising-Decoding]] — NVIDIA Ising QEC predecoder models and training framework for surface-code decoding
- [[NVIDIA-Quantum-Cloud]] — cloud/API access path for running CUDA-Q projects on NVIDIA GPU systems
- [[NVIDIA-Accelerated-Quantum-Center]] — NVAQC research facility integrating quantum hardware with NVIDIA AI supercomputing
- [[NVIDIA-DGX-Quantum]] — queryable DGX Quantum architecture identity now redirected toward NVQLink as the current direction

### Security & Cryptography
- [[cuPQC]] — CUDA cryptography SDK with cuPQC-PK for ML-KEM/ML-DSA and cuPQC-Hash for hash/Merkle operations

### Signal & Electronic Warfare
- [[cuEST]] — GPU-accelerated RF signal processing for electronic warfare and spectrum monitoring

### Development Tools
- [[NVIDIA-CUDA]] — Core NVIDIA GPU computing platform, toolkit, programming model, libraries, and tools
- [[CUDA-Quick-Start-Guide]] — minimal first-steps guide for installing CUDA and verifying a sample application
- [[CUDA-Installation-Guide-Linux]] — full Linux CUDA Toolkit installation guide across package managers, runfile, Conda, pip, and WSL
- [[CUDA-Installation-Guide-Windows]] — full Windows CUDA Toolkit installation guide with Visual Studio and sample verification
- [[CUDA-Programming-Guide]] — core CUDA programming model guide covering kernels, memory, streams, graphs, and runtime behavior
- [[CUDA-Best-Practices-Guide]] — practical CUDA performance guide covering APOD, profiling, memory, precision, and deployment
- [[CUDA-Release-Notes]] — current CUDA Toolkit release notes for component versions, driver requirements, issues, and library updates
- [[NVCC]] — NVIDIA CUDA Compiler Driver; compiles CUDA C/C++ for host and device
- [[NVIDIA-HPC-SDK]] — NVIDIA HPC developer stack for compilers, CUDA programming models, libraries, tools, and containers
- [[NVIDIA-HPC-Compilers]] — nvc, nvc++, nvfortran, and adjacent NVCC compiler docs for NVIDIA GPUs and Arm/x86 CPUs
- [[CUDA-Fortran]] — NVIDIA Fortran extensions for explicit CUDA GPU programming through nvfortran
- [[NVIDIA-Fortran-CUDA-Interfaces]] — Fortran modules/interfaces for calling CUDA libraries from CUDA Fortran, OpenACC, and OpenMP code
- [[NVIDIA-OpenACC]] — NVIDIA HPC compiler implementation and guidance for OpenACC GPU offload
- [[NVIDIA-Stdpar]] — NVIDIA stdpar path for C++ parallel algorithms and Fortran standard parallelism on GPUs
- [[CUDA-GDB]] — GNU GDB-based GPU debugger for CUDA applications on Linux and QNX
- [[NVRTC]] — NVIDIA Runtime Compilation library for JIT compilation of CUDA C++ at runtime
- [[nvJitLink]] — CUDA 12 runtime device-code linker for JIT-linking PTX/cubin/LTOIR modules
- [[libNVVM]] — LLVM-based NVVM IR to PTX compiler backend; enables custom GPU language compilers
- [[NVVM-IR]] — LLVM-based intermediate representation for CUDA GPU compiler front ends
- [[libdevice]] — Device-side bitcode library used by CUDA compiler flows for GPU math and utilities
- [[PTX-ISA]] — NVIDIA virtual GPU instruction set used by CUDA compiler and JIT workflows
- [[PTX-Compiler-APIs]] — Toolkit APIs for compiling PTX strings into GPU assembly code
- [[Inline-PTX-Assembly]] — guide for embedding PTX assembly statements inside CUDA C++ source
- [[PTX-Interoperability]] — ABI and interoperability guide for PTX generated by compilers, DSLs, and runtime systems
- [[nvFatbin]] — Runtime CUDA fatbin creation API for packaging cubin, PTX, and LTO-IR variants
- [[CUDA-Binary-Utilities]] — cuobjdump, nvdisasm, cu++filt, and nvprune tools for CUDA binaries
- [[CUDA-Compile-Time-Advisor]] — ctadvisor tool for analyzing and reducing CUDA C++ compile time
- [[CUDA-Demo-Suite]] — CUDA validation demos such as deviceQuery and bandwidthTest for checking GPU/toolkit setup
- [[CUDA-Debugger-API]] — Low-level CUDA debugger integration API
- [[CUDA-Cpp-Standard-Library]] — CUDA-capable C++ standard library facilities in the CCCL stack
- [[CUDA-Python]] — NVIDIA umbrella for accessing CUDA from Python across core APIs, bindings, libraries, and profiling
- [[cuda-core]] — Pythonic CUDA runtime/core interface for devices, streams, memory, graphs, compilation, and system inspection
- [[cuda-bindings]] — Low-level Python bindings to CUDA C APIs
- [[cuda-pathfinder]] — Python utilities for locating CUDA libraries, headers, tools, bitcode, and static libraries
- [[cuda-compute]] — CCCL Python host-callable parallel algorithms such as reduce, scan, sort, and transform
- [[cuda-coop]] — CCCL Python block/warp cooperative algorithms for Numba CUDA kernels
- [[CUDA-Runtime-API]] — Higher-level CUDA API for devices, memory, streams, graphs, and launches
- [[CUDA-Driver-API]] — Lower-level CUDA API for contexts, modules, memory, and explicit control
- [[CUDA-Math-API]] — device-side math functions (sin, cos, exp, FP16/BF16 intrinsics) for CUDA kernels
- [[Compute-Sanitizer]] — CUDA correctness suite and API for memory, race, init, sync, and custom checker workflows
- [[ComputeEval]] — NVIDIA benchmark framework for evaluating LLM-generated CUDA code correctness and performance
- [[NVTX]] — NVIDIA Tools Extension annotation API for profiling markers, ranges, and resource names
- [[Nsight-Developer-Tools]] — Suite-level hub for NVIDIA Nsight debugging, profiling, correctness, IDE, cloud, and SDK tools
- [[Nsight-Aftermath-SDK]] — SDK for collecting and analyzing GPU crash mini-dumps from D3D12/Vulkan applications
- [[Nsight-Cloud]] — cloud-native Nsight profiling components for Kubernetes, containers, Operator, and Streamer workflows
- [[Nsight-Copilot]] — CUDA-aware AI assistant for VS Code development and preview Nsight Compute guidance
- [[Nsight-Compute]] — interactive GPU kernel profiler with hardware counters and guided analysis
- [[Nsight-Deep-Learning-Designer]] — visual ONNX model design and inference profiling IDE with TensorRT/ONNX Runtime profilers
- [[Nsight-Graphics]] — standalone graphics debugger/profiler for GPU Trace, frame capture, shaders, ray tracing, DRIVE, and Jetson
- [[Nsight-Integration]] — Visual Studio extension that launches standalone Nsight Compute, Graphics, and Systems activities
- [[Nsight-JupyterLab-Extension]] — JupyterLab extension for profiling notebook cells with Nsight Systems and Nsight Compute
- [[Nsight-Perf-SDK]] — graphics profiling toolbox for collecting GPU metrics inside DirectX, Vulkan, and OpenGL applications
- [[Nsight-Python]] — Python-first Nsight kernel profiling automation across kernel configurations
- [[Nsight-Systems]] — system-wide CPU+GPU performance profiler and timeline visualizer
- [[Nsight-Visual-Studio-Code-Edition]] — Visual Studio Code extension for CUDA language support and CUDA-aware debugging workflows
- [[Nsight-Visual-Studio-Edition]] — Visual Studio integration for CUDA debugging, profiling, and GPU development on Windows
- [[Nsight-Eclipse-Plugins]] — Eclipse plugin path for CUDA Linux IDE development workflows

### Embedded & Edge
- [[NVIDIA-JetPack-SDK]] — Jetson software stack bundling Jetson Linux, CUDA-X, AI frameworks, samples, tools, and docs
- [[NVIDIA-Jetson-Linux]] — Jetson OS/BSP layer with kernel, bootloader, drivers, flashing, and platform bring-up docs
- [[NVIDIA-VPI]] — Vision Programming Interface for CPU/CUDA/PVA/VIC/OFA-backed computer vision and image processing
- [[cuDLA]] — CUDA API for programming NVIDIA DLA (Deep Learning Accelerator) on Jetson/DRIVE SoCs
- [[CUDA-for-Tegra]] — CUDA guidance for Tegra integrated GPU platforms including Jetson and DRIVE
- [[CUDA-on-WSL]] — CUDA support for Linux GPU development inside Windows Subsystem for Linux 2
- [[CUDA-on-EFLOW]] — CUDA deployment guidance for EFLOW-enabled Windows edge devices running Linux AI containers

### Inference & Data Transfer
- [[NIXL]] — NVIDIA Inference Xfer Library; high-throughput KV cache and tensor transfer for LLM serving
- [[NVIDIA-Dynamo]] — NVIDIA inference-serving platform for local, VM, and Kubernetes deployment paths
- [[Dynamo-Disaggregated-Serving]] — Dynamo prefill/decode split for scalable LLM serving
- [[Dynamo-KV-Cache-Aware-Routing]] — Dynamo router mode for cache-overlap and load-aware request placement
- [[Dynamo-KV-Block-Manager]] — Dynamo KV cache memory layer for block management, offload, and tiering
- [[Dynamo-Planner]] — Dynamo autoscaler for LLM-specific TTFT, ITL, throughput, and SLA targets
- [[Dynamo-Profiler]] — Dynamo profiling tool for deployment recommendations and Planner performance data

---

## NVIDIA Frameworks

### Large Language Models & Speech
- [[NVIDIA-NeMo]] — Modular suite for AI agent lifecycle management, training, microservices, retrieval, and deployment
- [[NeMo-Platform]] — NeMo microservices platform for synthetic data, customization, evaluation, guardrails, and inference
- [[NeMo-Data-Designer]] — NeMo Platform service for scalable synthetic dataset generation
- [[NeMo-Customizer]] — NeMo Platform service for LoRA, SFT, DPO, and embedding model customization
- [[NeMo-Evaluator]] — NeMo Platform service for model, RAG, retriever, and agent evaluation
- [[NeMo-Safe-Synthesizer]] — NeMo Platform service for private synthetic tabular data generation
- [[NeMo-Auditor]] — NeMo Platform early-access service for LLM safety audits
- [[NeMo-AutoModel]] — Hugging Face-compatible NeMo training library for LLM, VLM, diffusion, and fine-tuning workflows
- [[NeMo-RL]] — NeMo post-training library for reinforcement learning and alignment workflows
- [[NeMo-Gym]] — NeMo RL environment and rollout-collection library for verifiable agent training data
- [[NeMo-Run]] — NeMo experiment configuration, execution, and management tool for local, cluster, and cloud runs
- [[NeMo-Megatron-Bridge]] — NeMo library for Hugging Face and Megatron conversion, verification, and high-scale training
- [[NeMo-Export-Deploy]] — NeMo export and deployment library for TensorRT-LLM, vLLM, Triton, and Ray Serve paths
- [[NeMo-Retriever]] — Multimodal extraction, embedding, indexing, retrieval, and reranking microservices for RAG
- [[NVIDIA-Speech-NIM-Microservices]] — Current Speech NIM docs collection for ASR, TTS, and NMT microservices
- [[NVIDIA-ASR-NIM]] — Speech-to-text NIM for Parakeet, Canary, Whisper, Conformer, and Nemotron ASR models
- [[NVIDIA-TTS-NIM]] — Text-to-speech NIM for Magpie models, voices, emotional styles, and voice cloning
- [[NVIDIA-NMT-NIM]] — Neural machine translation NIM for Riva Translate 1.6B and 36-language translation workflows
- [[NVIDIA-Background-Noise-Removal-NIM]] — Maxine audio NIM for streaming and transactional background noise removal
- [[NVIDIA-Agent-Intelligence-Toolkit]] — Framework-agnostic toolkit for agent workflows, profiling, evaluation, MCP, and A2A
- [[NVIDIA-Resiliency-Extension]] — NVRx fault-tolerance, restart, checkpointing, and straggler-detection package for distributed PyTorch training
- [[Megatron-Core]] — composable NVIDIA library for large-scale LLM/MoE/multimodal training primitives and parallelism APIs
- [[Megatron-Energon]] — Megatron multimodal data loader for WebDataset/JSONL, blending, distributed loading, and resumable training data iteration
- [[Megatron-LM]] — open-source framework for 3D-parallel LLM pre-training at trillion-parameter scale
- [[TensorRT-LLM]] — LLM inference optimization: continuous batching, paged KV cache, FP8, TP/PP

### Inference Serving
- [[Triton-Inference-Server]] — multi-framework AI model serving platform with dynamic batching and gRPC/REST
- [[NVIDIA-AIPerf]] — Current NVIDIA tool for benchmarking OpenAI-compatible AI inference latency, throughput, and telemetry
- [[NVIDIA-GenAI-Perf]] — Phased-out NVIDIA generative AI benchmarking tool retained for legacy workflow lookup
- [[Triton-Performance-Analyzer]] — Triton CLI for inference latency/throughput measurement under configurable load
- [[Triton-Model-Analyzer]] — Triton tool for model-configuration search, profiling, and deployment reports
- [[Triton-Model-Navigator]] — Triton toolkit for export, conversion, correctness testing, profiling, and deployment preparation

### Physics & Scientific AI
- [[NVIDIA-Modulus]] — physics-ML framework for PINNs, neural operators (FNO, DeepONet), CFD surrogates
- [[PhysicsNeMo]] — large-scale geoscience physics-AI training (weather, seismic, reservoir simulation)
- [[Earth-2]] — AI-powered Earth climate digital twin; km-scale weather forecasting with neural operators
- [[NIM-for-Earth-2-CorrDiff]] — Earth-2 NIM for weather downscaling and diffusion correction
- [[NIM-for-Earth-2-FourCastNet]] — Earth-2 NIM for global short- to medium-range AI weather forecasting
- [[NIM-for-DoMINO-Automotive-Aero]] — PhysicsNeMo NIM for automotive external-aerodynamics surrogate simulation

### Robotics & Simulation
- [[NVIDIA-Isaac]] — robotics development platform: Isaac Sim, Isaac Lab, Isaac ROS, manipulation, mobility, and GR00T
- [[NVIDIA-Isaac-Sim]] — Omniverse-based robotics simulation application for synthetic data, sensor simulation, and validation
- [[NVIDIA-Isaac-Lab]] — modular robot-learning framework for RL, imitation learning, motion planning, and sim-to-real workflows
- [[NVIDIA-Isaac-ROS]] — CUDA-accelerated ROS 2 packages, models, and reference workflows for deployed robots
- [[NVIDIA-Isaac-for-Manipulation]] — current Isaac ROS reference architecture for perception-driven robot-arm manipulation
- [[NVIDIA-Isaac-for-Mobility]] — current Isaac ROS mobility workflow area continuing Isaac Perceptor for AMR stacks
- [[Isaac-ROS-NITROS]] — NVIDIA Isaac Transport for ROS, type adaptation/negotiation, and accelerated ROS graph transport
- [[Isaac-ROS-Visual-SLAM]] — cuVSLAM-based visual odometry and SLAM for stereo/IMU robot localization
- [[Isaac-ROS-Visual-Global-Localization]] — cuVGL-based global localization and relocalization from stereo keyframe maps
- [[Isaac-ROS-DNN-Inference]] — TensorRT/Triton-backed DNN inference infrastructure for robot perception graphs
- [[Isaac-ROS-Object-Detection]] — DetectNet, Grounding DINO, RT-DETR, and YOLOv8 object detection packages for Isaac ROS
- [[Isaac-ROS-Image-Segmentation]] — GPU-accelerated semantic segmentation packages for pixel-level robot perception
- [[Isaac-ROS-DNN-Stereo-Depth]] — DNN stereo disparity/depth packages including ESS and FoundationStereo context
- [[Isaac-ROS-AprilTag]] — accelerated fiducial marker detection package with CUDA, CPU, and PVA backend support
- [[Isaac-ROS-Image-Pipeline]] — accelerated camera preprocessing and stereo image-processing package family
- [[Isaac-ROS-Compression]] — H.264 camera image compression/decompression using NVIDIA NVENC/NVDEC
- [[Isaac-ROS-SIPL-Camera]] — SIPL and Camera-over-Ethernet camera driver package for Jetson Thor-era ingest
- [[Isaac-ROS-cuMotion]] — CUDA-accelerated robot-arm motion planning, MoveIt 2 integration, and robot segmentation
- [[Isaac-ROS-nvblox]] — GPU-accelerated 3D reconstruction, mapping, ESDF/TSDF, and Nav2 costmap component
- [[Isaac-ROS-FoundationPose]] — 6DoF object pose-estimation model and ROS 2 package for manipulation workflows
- [[Isaac-ROS-FoundationStereo]] — stereo-depth foundation model and ROS 2 package for disparity/depth perception
- [[NVIDIA-Isaac-GR00T]] — humanoid robotics foundation model platform and data pipeline for general-purpose robot skills
- [[NVIDIA-Omniverse]] — OpenUSD-based 3D simulation and digital twin platform with RTX rendering
- [[NVIDIA-Omniverse-Reference-Architectures]] — Omniverse architecture diagrams for RTX PRO industrial facility digital twins and technical requirements

### Healthcare & Edge AI
- [[NVIDIA-Holoscan]] — real-time AI sensor processing SDK for medical devices and industrial edge computing

---

## Partner / Ecosystem Libraries

### Python GPU Computing
- [[PyTorch]] — CUDA-accelerated deep learning framework backed by cuDNN, cuBLAS, NCCL, and TensorRT export paths
- [[CuPy]] — NumPy/SciPy-compatible GPU array library backed by cuBLAS, cuFFT, cuRAND, cuSPARSE
- [[cuPyNumeric]] — NumPy API implementation on Legate for CPU, GPU, and multi-node scaling
- [[JAX]] — composable function transformations (jit, grad, vmap, pmap) with XLA GPU compilation
- [[TensorFlow-GPU]] — Google's deep learning framework with CUDA/cuDNN/XLA GPU acceleration
- [[Dask]] — Python parallel/distributed computing; scales RAPIDS GPU workflows across multi-GPU clusters
- [[OpenCV-CUDA]] — GPU-accelerated classical computer vision (filters, geometry, feature detection, stereo)

---

---

## Platforms & Products

### AI Cloud & Software Platforms
- [[NGC]] — NVIDIA GPU Cloud: curated hub of GPU-optimized containers, models, Helm charts, and SDKs
- [[NVIDIA-NIM]] — Inference Microservices: production-ready AI inference containers with OpenAI-compatible REST API
- [[NIM-for-Large-Language-Models]] — production NIM family for LLM serving with Day 0, Turbo, and Certified offerings
- [[NIM-for-LLM-Benchmarking-Guide]] — NIM guide for LLM latency, throughput, concurrency, Run:ai sizing, and LoRA benchmark workflows
- [[NVIDIA-NIM-Operator]] — Kubernetes operator for NIM and NeMo microservice lifecycle, model caching, and autoscaling
- [[NVIDIA-NIM-on-GKE]] — Google Kubernetes Engine deployment guide for NIM microservices
- [[NVIDIA-NIM-on-WSL2]] — RTX Windows/WSL2 local deployment guide for downloadable NIM containers
- [[NeMo-Retriever-Embedding-NIM]] — NIM microservice for text/image embeddings in semantic search and RAG workflows
- [[Llama-Nemotron-Embed-1B-v2]] — NVIDIA text embedding model for multilingual long-document QA retrieval
- [[NIM-for-NV-CLIP]] — NIM microservice for multimodal text/image embeddings, semantic image search, and multimodal RAG
- [[NeMo-Retriever-Reranking-NIM]] — NIM microservice for reranking retrieved passages by query relevance
- [[Llama-Nemotron-Rerank-1B-v2]] — NVIDIA text reranker for multilingual and cross-lingual retrieval pipelines
- [[NIM-for-Image-OCR]] — NeMo Retriever OCR microservice for extracting text from images and visual document regions
- [[NIM-for-Object-Detection]] — NeMo Retriever document object-detection NIM family for page, table, and chart elements
- [[NVIDIA-Dynamo]] — NVIDIA inference-serving platform adjacent to NIM and disaggregated serving workflows
- [[NVIDIA-AIStore]] — Distributed storage stack tailored for AI workloads and elastic clusters
- [[NVIDIA-AI-Enterprise]] — End-to-end enterprise AI software suite with SLA support covering the full NVIDIA stack
- [[NVIDIA-AI-Enterprise-Quick-Start-Guide]] — AI Enterprise onboarding guide for account activation, NGC access, first software install, and GPU/container verification
- [[NVIDIA-AI-Enterprise-Software]] — AI Enterprise application-layer and infrastructure-layer software catalog with NGC and support-matrix context
- [[NVIDIA-AI-Enterprise-Infrastructure-Support-Matrix]] — AI Enterprise compatibility matrix for infrastructure software, GPUs, platforms, OS, hypervisors, orchestration, and cloud
- [[NVIDIA-AI-Enterprise-Lifecycle-Policy]] — AI Enterprise branch, compatibility, support, and EOL planning policy
- [[NVIDIA-Enterprise-Licensing-Guide]] — AI Enterprise entitlement, per-GPU licensing, cloud marketplace, BYOL, support, and NVIDIA License System guidance
- [[NVIDIA-Enterprise-Support-and-Services]] — enterprise support entitlement, support levels, support portal, RMA, value-add services, advisory services, and education
- [[NVIDIA-AI-Enterprise-Bare-Metal-Deployment]] — AI Enterprise installation guide for physical servers, drivers, Docker, Kubernetes, and GPUDirect Storage
- [[NVIDIA-AI-Enterprise-VMware-Deployment]] — AI Enterprise deployment guide for VMware vSphere, vGPU, ESXi, vCenter, and AI Enterprise VMs
- [[NVIDIA-AI-Enterprise-Cloud-Deployment]] — AI Enterprise deployment guide for AWS, Azure, Google Cloud, OCI, Alibaba, Tencent, VMIs, managed Kubernetes, and OpenShift
- [[NVIDIA-Enterprise-Reference-Architectures]] — NVIDIA-authored Enterprise RA family for AI factory hardware, software, observability, and deployment patterns
- [[NVIDIA-AI-Enterprise-Software-Reference-Architecture]] — Full-stack AI Enterprise software RA for single-tenant production inference, fine-tuning, and RAG workloads
- [[NVIDIA-Enterprise-RA-Observability-Guide]] — Observability guide for Enterprise RA dashboards, alerts, DCGM, NIM Operator, BCM, and NetQ telemetry
- [[NVIDIA-AI-Enterprise-Security]] — AI Enterprise security white paper for branch strategy, container security, NIM microservices, and software delivery
- [[NVIDIA-AI-Software-for-Regulated-Environments]] — AI Enterprise regulated-environment white paper for government-ready software and hardened/minimal containers
- [[NVIDIA-AI-Factory-for-Government]] — Government AI factory reference design for secure, compliant, agentic, and sovereign AI deployments
- [[Red-Hat-AI-Factory-with-NVIDIA]] — NVIDIA AI Enterprise deployment guide for Red Hat OpenShift AI with NIM, GPU Operator, Network Operator, and NIM Operator
- [[NVIDIA-AI-Blueprints]] — NVIDIA-authored reference workflows for building AI applications on NIM, NeMo, Nemotron, and NVIDIA AI software
- [[NVIDIA-RAG-Blueprint]] — NVIDIA AI Blueprint for enterprise retrieval augmented generation, multimodal RAG, evaluation, and guardrails
- [[NVIDIA-Run-ai]] — NVIDIA AI workload and GPU orchestration platform for Kubernetes, AI Enterprise, Mission Control, and NIM LLM sizing workflows
- [[NVIDIA-Run-ai-Support-and-Lifecycle]] — Run:ai self-hosted support phases, component alignment, and current version lifecycle dates
- [[NVIDIA-AI-Workbench]] — Unified developer environment for GPU projects with one-click environment management and multi-location compute
- [[NVIDIA-AI-Workbench-Projects]] — AI Workbench Git/container project model for reproducible GPU development environments
- [[NVIDIA-AI-Workbench-Locations]] — AI Workbench local and remote machine abstraction for project execution
- [[NVIDIA-AI-Workbench-Applications]] — AI Workbench-managed web apps, processes, native apps, and Compose apps
- [[NVIDIA-Base-Command]] — AI training cluster management platform for DGX systems: job scheduling, dataset versioning, experiment tracking
- [[NVIDIA-Base-Command-Manager]] — Cluster-management platform for provisioning and operating AI data center infrastructure
- [[NVIDIA-BaseOS]] — Validated production operating system layer for DGX and AI factory environments
- [[NVIDIA-DGX-Cloud]] — Cloud-accessible NVIDIA AI supercomputing platform
- [[NVIDIA-Cloud-Functions]] — NVIDIA cloud/API delivery surface for hosted AI functions and services
- [[NVIDIA-API-Documentation]] — public API documentation hub for NVIDIA-hosted model and microservice endpoints
- [[NVIDIA-Brev]] — NVIDIA cloud GPU development environments for prototyping and API experimentation
- [[NVIDIA-Bright-Cluster-Manager]] — NVIDIA Bright cluster-management documentation for HPC and AI infrastructure
- [[NVIDIA-Certification-Programs]] — NVIDIA certification documentation across systems, software, and partner validation programs
- [[NVIDIA-Cloud-Accelerator-NCX]] — cloud accelerator documentation for validated NVIDIA AI infrastructure on cloud partners
- [[KAI-Scheduler]] — open-source GPU-aware Kubernetes scheduler for large-scale AI workloads
- [[NVIDIA-Grove]] — Kubernetes API for topology-aware, gang-scheduled, multi-component inference workloads
- [[NVIDIA-Fleet-Intelligence]] — managed GPU fleet health monitoring and predictive failure signal service
- [[NVIDIA-NCX-Infra-Controller]] — bare-metal lifecycle automation and secure multi-tenant GPU infrastructure management
- [[NVIDIA-AI-Cluster-Runtime]] — validated NVIDIA-accelerated Kubernetes runtime recipes for reproducible AI clusters
- [[NVIDIA-NVSentinel]] — Kubernetes-native GPU fault detection and remediation
- [[NVIDIA-DOCA-Platform-Framework]] — BlueField DPU provisioning and service orchestration framework for cloud environments
- [[NVIDIA-Project-GPUd]] — lightweight GPU telemetry, diagnostics, and issue-identification agent listed in NCX
- [[NVIDIA-Mission-Control]] - Integrated AI factory management platform for DGX B200/B300 and GB200/GB300 NVL72 environments
- [[Optimizing-VM-Configuration-for-AI-Inference]] — NVIDIA white paper for topology-aware VM configuration on HGX systems for near bare-metal AI inference performance

### Agent Platforms
- [[NVIDIA-AI-Q-Blueprint]] — NVIDIA AI Blueprint for enterprise research agents with retrieval, citations, evaluation, and Enterprise RA sizing context
- [[NVIDIA-Data-Flywheel-Blueprint]] — NVIDIA AI Blueprint for continuously optimizing agents and models with production traffic, NeMo evaluation/customization, and NIM redeployment
- [[NVIDIA-Video-Search-and-Summarization-Blueprint]] — NVIDIA AI Blueprint for vision agents, video search, summarization, and alert verification
- [[NVIDIA-Tokkio-Digital-Human-Blueprint]] — NVIDIA AI Blueprint for interactive digital humans using ACE, speech, RAG/LLM, and avatar animation
- [[NVIDIA-NemoClaw]] — Alpha stack for running OpenClaw assistants with NVIDIA OpenShell and Nemotron models
- [[NVIDIA-OpenShell]] — Secure sandboxed runtime and policy layer for autonomous AI agents

### AI Application Platforms
- [[NVIDIA-AI-Aerial]] — Accelerated AI-RAN platform for 5G/6G wireless network development and simulation
- [[NVIDIA-BioNeMo]] — GPU-accelerated drug discovery and biomolecular AI (protein structure, molecular generation)
- [[NVIDIA-FLARE]] — federated learning and privacy-preserving distributed collaboration SDK for ML, analytics, healthcare, and edge workflows
- [[BioNeMo-Recipes]] — NVIDIA reference implementations for scaling biological foundation model training with Transformer Engine and PyTorch
- [[NIM-for-AlphaFold2]] — BioNeMo NIM for single-chain AlphaFold2 protein structure prediction and MSA workflows
- [[NIM-for-AlphaFold2-Multimer]] — BioNeMo NIM for AlphaFold2 multimer protein-complex structure prediction
- [[NIM-for-OpenFold2]] — BioNeMo NIM for OpenFold2 monomer protein structure prediction with optional MSAs/templates
- [[NIM-for-OpenFold3]] — BioNeMo NIM for all-atom biomolecular complexes with proteins, DNA, RNA, and ligands
- [[NIM-for-Boltz2]] — BioNeMo NIM for biomolecular structure and binding-affinity prediction
- [[NIM-for-Evo-2]] — BioNeMo NIM for Evo 2 DNA sequence interpretation and generation
- [[NIM-for-MSA-Search]] — BioNeMo NIM for GPU-accelerated MSA, paired MSA, and structural template search
- [[NIM-for-RFdiffusion]] — BioNeMo NIM for generative protein structure and complex design
- [[NIM-for-ProteinMPNN]] — BioNeMo NIM for protein sequence design from backbone structures
- [[NIM-for-MolMIM]] — BioNeMo NIM for controlled small molecule generation from SMILES latent spaces
- [[NIM-for-GenMol]] — BioNeMo NIM for fragment-based small molecule generation with SAFE representations
- [[NIM-for-DiffDock]] — BioNeMo NIM for protein-ligand docking and pose prediction
- [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]] — ALCHEMI NIM for MLIP-driven batched atomistic geometry relaxation
- [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]] — ALCHEMI NIM for MLIP-driven batched molecular dynamics simulations
- [[NVIDIA-Riva]] — GPU-accelerated real-time speech AI SDK: ASR, TTS, NLU with sub-100ms latency
- [[NVIDIA-Maxine]] — GPU-accelerated audio/video/AR enhancement for video conferencing and media applications
- [[NIM-for-Maxine-Studio-Voice]] — Maxine NIM for streaming and transactional studio-quality speech enhancement
- [[NIM-for-Maxine-Audio2Face-2D]] — Maxine NIM for animating 2D portrait images from speech audio
- [[NIM-for-Maxine-Eye-Contact]] — Maxine NIM for gaze correction and simulated camera-facing eye contact in video
- [[NIM-for-Maxine-Active-Speaker-Detection]] — Maxine NIM for active speaker detection from video and diarized audio
- [[NIM-for-Audio2Face-3D]] — Digital Human NIM for audio/emotion-driven 3D facial animation and ARKit blendshape output
- [[NVIDIA-AI-for-Media-SDKs]] — Current docs hub for NVIDIA audio, video, AR, and Triton-enabled media AI SDKs
- [[NVIDIA-Audio-Effects-SDK]] — AFX SDK for echo cancellation, denoise, dereverb, speaker focus, studio voice, and voice font
- [[NVIDIA-Augmented-Reality-SDK]] — AR SDK for face/body tracking, landmarks, eye contact, lip sync, and active speaker detection
- [[NVIDIA-Video-Effects-SDK]] — VFX SDK for AI green screen, blur, upscale, webcam denoise, relighting, and video super resolution
- [[NVIDIA-Triton-AR-VFX-SDKs]] — Triton-enabled server deployment path for AR and VFX SDK features
- [[NVIDIA-Capture-SDK]] — capture and stream SDKs for desktop/session capture and NVIDIA media workflows
- [[NVIDIA-CloudXR]] — GPU-accelerated XR streaming platform for remote RTX-rendered spatial experiences
- [[NVIDIA-Cosmos-Curator-LHA]] — Cosmos Curator/LHA documentation for large-scale video analysis and physical AI data curation
- [[NIM-for-Cosmos-WFM]] — Cosmos WFM NIM for text/image/video-to-world and video transfer workflows
- [[NIM-for-Cosmos-Reason]] — Cosmos Reason VLM NIM family for image, video, and text reasoning
- [[NIM-for-Cosmos-Embed1]] — Cosmos Embed1 NIM for joint video-text embeddings and physical AI video retrieval
- [[NIM-for-Vision-Language-Models]] — VLM NIM family for multimodal reasoning, image understanding, and visual assistants
- [[Llama-Nemotron-Embed-VL-1B-v2]] — NVIDIA multimodal embedding model for visual document retrieval and vision RAG
- [[Llama-Nemotron-Rerank-VL-1B-v2]] — NVIDIA multimodal reranker for visual document retrieval and vision RAG
- [[NIM-for-Visual-Generative-AI]] — Visual GenAI NIM family for image generation, image editing, and 3D asset generation
- [[NVIDIA-TAO]] — Train, Adapt, and Optimize platform for fine-tuning and deploying CV, embedding, and VLM models
- [[NVIDIA-Jetson-Platform-Services]] — Jetson edge AI microservice layer for video analytics, VLM, detection, storage, and APIs
- [[NVIDIA-Clara]] — Healthcare AI platform: Parabricks (genomics), MONAI (medical imaging), Clara Guardian (smart hospital)
- [[NVIDIA-Parabricks]] — Clara genomics acceleration platform for next-generation sequencing pipelines
- [[NVIDIA-Clara-Viz]] — Clara medical image visualization toolkit for 2D/3D imaging and pathology data
- [[NVIDIA-MONAI-Toolkit]] — NVIDIA AI Enterprise-supported MONAI distribution for medical imaging AI development
- [[NIM-for-MAISI]] — Medical imaging NIM for synthetic 3D CT generation and annotation masks
- [[NIM-for-VISTA-3D]] — Medical imaging NIM for interactive 3D segmentation and annotation
- [[NVIDIA-Metropolis]] — Intelligent video analytics platform and partner ecosystem for smart cities, retail, and industrial AI
- [[NVIDIA-DeepStream]] — GStreamer-based streaming analytics toolkit for GPU-accelerated multi-stream video AI pipelines

### Enterprise Data & Storage Platforms
- [[NVIDIA-AI-Data-Platform]] — Reference design for accelerating enterprise storage, retrieval, vector search, RAG, and agent data access
- [[NVIDIA-STX]] — Modular AI-native storage reference architecture built around accelerated compute, BlueField, Spectrum-X, and AI software
- [[NVIDIA-CMX]] — Context memory storage platform for long-context, multi-turn, and agentic inference KV-cache sharing
- [[NVIDIA-Certified-Storage]] — Storage validation program for AI factory, AI Data Platform, training, inference, and KV-cache workloads

### Hardware Platforms
- [[NVIDIA-DGX]] — Purpose-built AI supercomputing systems: DGX H100, DGX B200, DGX SuperPOD
- [[NVIDIA-DGX-SuperPOD]] — Scale-out NVIDIA AI supercomputing reference architecture for AI factories
- [[NVIDIA-DGX-BasePOD]] — Prescriptive enterprise DGX reference architecture for scalable AI infrastructure
- [[NVIDIA-DGX-BasePOD-B200-H200-H100-RA]] — Current BasePOD RA for two-to-eight-node DGX B200/H200/H100 enterprise AI infrastructure
- [[NVIDIA-DGX-B200]] — Blackwell-generation DGX system with eight GPUs, NVLink/NVSwitch, ConnectX-7, BlueField-3, AI Enterprise, and Mission Control
- [[NVIDIA-DGX-SuperPOD-B200-RA]] — DGX B200 SuperPOD RA with 32-system scalable units and NDR400 InfiniBand
- [[NVIDIA-DGX-SuperPOD-GB200-RA]] — DGX GB200 SuperPOD RA for rack-scale GB200 NVL72, NVLink 5, NDR InfiniBand, and Spectrum-4 Ethernet
- [[NVIDIA-DGX-B300]] — Blackwell Ultra DGX system generation for AI factory training and inference deployments
- [[NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA]] — DGX B300 SuperPOD RA for Spectrum-4/Spectrum-X Ethernet and DC busbar power
- [[NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA]] — DGX B300 SuperPOD RA for Quantum-X800 InfiniBand and AC power
- [[NVIDIA-DGX-Spark]] — Compact GB10 Grace Blackwell desktop AI computer for local model and agent development
- [[NVIDIA-DGX-Station]] — GB300 Grace Blackwell Ultra deskside AI supercomputer for large local AI workloads
- [[NVIDIA-DGX-Enterprise-Support]] — DGX support, infrastructure services, and education services for production AI factories
- [[NVIDIA-GB300-NVL72]] — Rack-scale Blackwell Ultra NVL72 system for dense large-model training and inference
- [[NVIDIA-NVL72-AI-Factory]] — Enterprise RA for GB300 NVL72 rack-scale AI factories with Spectrum-X, Mission Control, and NVLink
- [[NVIDIA-RTX-PRO-Server]] — RTX PRO Blackwell enterprise server platform for AI, rendering, simulation, and visualization
- [[NVIDIA-RTX-PRO-AI-Factory]] — Enterprise RA for RTX PRO 6000 Blackwell Server Edition AI factories using the 2-8-5-200 pattern
- [[NVIDIA-Certified-Systems]] — partner systems validated by NVIDIA for enterprise AI and accelerated computing workloads
- [[NVIDIA-Data-Center-CPUs]] — NVIDIA data center CPU documentation covering Grace, Grace Hopper, and Grace Blackwell systems
- [[NVIDIA-Jetson-Platform]] — Edge AI computing modules for robotics, drones, and intelligent cameras (Jetson Orin family)
- [[NVIDIA-Jetson-Thor]] — Blackwell-generation Jetson platform for physical AI and humanoid robotics
- [[NVIDIA-Drive-Platform]] — End-to-end autonomous vehicle platform: DRIVE AGX hardware, DriveWorks SDK, DRIVE Sim
- [[NVIDIA-DRIVE-AGX-Thor]] — DRIVE AGX Thor developer platform for autonomous vehicle and cockpit AI development
- [[NVIDIA-DriveOS]] — Automotive operating system and SDK foundation for DRIVE AGX platforms
- [[NVIDIA-DriveWorks]] — DRIVE SDK modules and tools for AV sensor abstraction, calibration, image, point-cloud, and egomotion workflows
- [[NVIDIA-DRIVE-Sim]] — AV simulation and synthetic-data workflows using Cosmos, Omniverse, NuRec, and dataset curation
- [[NVIDIA-GB200-NVL72]] — Rack-scale liquid-cooled system: 72 Blackwell GPUs, 36 Grace CPUs, 130 TB/s NVLink, 1,440 PFLOPS FP4
- [[NVIDIA-HGX]] — Multi-GPU baseboard platform (8x SXM) for OEM servers; HGX B200, B300, Rubin NVL8 configurations
- [[NVIDIA-HGX-AI-Factory]] — Enterprise RA for HGX B300 AI factories using the 2-8-9-800 pattern
- [[NVIDIA-GB200-NVL4]] — Single-server 4x B200 + 2x Grace config; 1.3 TB coherent memory, ~6 kW, OEM ecosystem entry point
- [[NVIDIA-Vera-Rubin-POD]] — POD-scale Vera Rubin AI factory architecture combining Rubin compute, Groq 3 LPX, Vera CPU, BlueField-4 STX, and Spectrum-6 SPX racks
- [[NVIDIA-Groq-3-LPX]] — Low-latency inference accelerator rack for Vera Rubin POD agentic AI workloads

---

## GPU Architectures

- [[NVIDIA-Blackwell-Architecture]] — 2024 architecture: FP4 Tensor Cores, NVLink 5 (1.8TB/s), NVL72 rack-scale, NVLink-C2C
- [[NVIDIA-Vera-Rubin]] — Next-generation platform after Blackwell with Rubin GPUs, Vera CPU, NVLink 6, and Vera Rubin NVL144 direction
- [[NVIDIA-Vera-Rubin-POD]] — POD-scale Vera Rubin AI factory architecture for five rack-scale systems operating as one AI supercomputer
- [[NVIDIA-Vera-CPU]] — Custom Arm CPU in the Vera Rubin platform, positioned as the successor direction after Grace
- [[NVIDIA-Hopper-Architecture]] — 2022 architecture: Transformer Engine (FP8), NVLink 4 (900GB/s), MIG, Confidential Computing
- [[NVIDIA-Ada-Lovelace-Architecture]] — 2022 architecture for RTX 40/pro visualization GPUs with SER and third-generation RT Cores
- [[NVIDIA-Ampere-Architecture]] — 2020 architecture for A100/A30/A10 and RTX 30-era GPUs with Tensor Core and MIG advances
- [[NVIDIA-Turing-Architecture]] — 2018 architecture that introduced RTX RT Cores, Tensor Cores for graphics, and concurrent INT/FP execution
- [[NVIDIA-Grace-CPU]] — NVIDIA's ARM Neoverse V2 data center CPU; paired with GPUs via NVLink-C2C in GH200/GB200

---

## CUDA Concepts

- [[CUDA-Compatibility]] — Driver/toolkit compatibility rules for CUDA applications in managed deployments
- [[CUDA-Blackwell-Compatibility-Guide]] — CUDA binary compatibility guide for running applications on Blackwell GPUs
- [[CUDA-Blackwell-Tuning-Guide]] — Blackwell-specific CUDA performance tuning guide
- [[CUDA-Hopper-Compatibility-Guide]] — CUDA binary compatibility guide for running applications on Hopper GPUs
- [[CUDA-Hopper-Tuning-Guide]] — Hopper-specific CUDA performance tuning guide covering TMA, clusters, DPX, memory, and NVLink
- [[CUDA-Ada-Compatibility-Guide]] — CUDA binary compatibility guide for running applications on Ada GPUs
- [[CUDA-Ada-Tuning-Guide]] — Ada-specific CUDA performance tuning guide
- [[CUDA-Ampere-Compatibility-Guide]] — CUDA binary compatibility guide for running applications on Ampere GPUs
- [[CUDA-Ampere-Tuning-Guide]] — Ampere-specific CUDA performance tuning guide covering async copy, barriers, Tensor Cores, memory, and NVLink
- [[CUDA-Turing-Compatibility-Guide]] — CUDA binary compatibility guide for running applications on Turing GPUs
- [[CUDA-Turing-Tuning-Guide]] — Turing-specific CUDA performance tuning guide for long-lived multi-generation CUDA support
- [[CUDA-Features-Archive]] — current CUDA docs reference for feature availability across toolkit and driver releases
- [[CUDA-Graphs]] — Capture GPU operation sequences as a graph for single-submission replay; eliminates per-kernel CPU launch overhead
- [[CUDA-Unified-Memory]] — Single-pointer CPU+GPU memory with hardware-managed demand paging; GH200 enables coherent access at NVLink bandwidth
- [[CUDA-Streams]] — Sequences of ordered GPU operations enabling concurrent kernel execution and compute/transfer overlap
- [[NVLink]] — NVIDIA's proprietary high-bandwidth GPU interconnect: NVLink 5 delivers 1.8TB/s per GPU on Blackwell
- [[GPUDirect-RDMA]] — Direct NIC↔GPU memory DMA path, bypassing CPU; enables high-performance inter-node GPU communication
- [[Multi-Process-Service]] — MPS: enables concurrent kernel execution from multiple CUDA processes on a single GPU for improved utilization

---

## Infrastructure & DevOps

- [[NVIDIA-Data-Center-GPU-Drivers]] — Data center GPU driver release notes and deployment documentation
- [[NVIDIA-MIG]] — Multi-Instance GPU partitioning for isolated slices of supported data center GPUs
- [[NVIDIA-vGPU]] — Virtual GPU software and CUDA support for GPU-accelerated virtualized environments
- [[NVIDIA-vGPU-for-Compute]] — AI Enterprise-licensed vGPU virtualization stack for compute VMs, MIG-backed modes, NLS licensing, and virtualized AI/HPC workloads
- [[NVIDIA-Attestation]] — Attestation suite for confidential computing and platform integrity verification
- [[NVIDIA-Cloud-Native-Technologies]] — NVIDIA cloud-native documentation hub for GPU Operator, Container Toolkit, Kubernetes, and container deployment
- [[NVIDIA-GPU-Operator]] — Kubernetes operator automating NVIDIA driver, Container Toolkit, DCGM, MIG Manager, and device plugin lifecycle
- [[NVIDIA-Container-Toolkit]] — Container runtime hook enabling GPU access from Docker/containerd/Podman without driver bundling in images
- [[NVIDIA-DCGM]] — Data Center GPU Manager: cluster telemetry, health monitoring, diagnostics, and Prometheus metrics for GPU fleets
- [[CUPTI]] — CUDA Profiling Tools Interface: low-level API for hardware counters, activity tracing, and CUDA API callbacks used by Nsight tools
- [[CUPTI-Python]] — Python-facing CUPTI profiling and tracing documentation for CUDA applications
- [[NVBit]] — Open-source binary instrumentation framework for custom GPU analysis tools without source code (NVlabs research tool)

---

## Ecosystem & Partners

### LLM Inference
- [[vLLM]] — Open-source high-throughput LLM serving with PagedAttention and continuous batching; NIM-supported backend
- [[DeepSpeed]] — Microsoft's ZeRO optimizer and LLM training/inference library for multi-GPU, multi-node GPU clusters

### GPU Programming
- [[Triton-GPU-Language]] — OpenAI's Python-based GPU kernel language with block-level programming model; powers torch.compile Inductor

### Distributed Training
- [[Hugging-Face-Accelerate]] — Thin PyTorch abstraction for multi-GPU/multi-node training across DDP, FSDP, and DeepSpeed backends

### Enterprise Data Platforms
- [[NVIDIA-Certified-for-Cloudera]] — NVIDIA-authored Cloudera Data Platform reference/certification guidance built on NVIDIA-Certified Systems

---

## Networking

- [[NVIDIA-DOCA]] — software framework for BlueField, SuperNIC, and ConnectX infrastructure offload, DOCA-Host, and DOCA-OFED
- [[DOCA-GPUNetIO]] — GPU-centric network packet processing with GPUDirect RDMA and GPU-initiated networking
- [[DOCA-Flow]] — hardware-accelerated packet-processing pipes, flow steering, actions, monitoring, and forwarding
- [[DOCA-RDMA]] — DOCA API for asynchronous RDMA operations over InfiniBand or RoCE
- [[DOCA-DPA]] — BlueField Data Path Accelerator programming model for communication-centric offloads
- [[DOCA-PCC]] — programmable congestion-control API for BlueField/Ethernet/RoCE networking
- [[DOCA-Telemetry-Service]] — DOCA service for BlueField, host, network, Prometheus, and OpenTelemetry metrics
- [[DOCA-App-Shield]] — DPU-side host and VM memory introspection API for intrusion detection and forensics
- [[DOCA-Device-Emulation]] — DOCA subsystem for emulating host-facing PCIe devices from BlueField software
- [[DOCA-SNAP]] — BlueField storage virtualization services for NVMe, virtio-blk, and virtio-fs emulation
- [[OVS-DOCA]] — DOCA-backed Open vSwitch datapath offload using DOCA Flow on BlueField/NVIDIA NICs
- [[NVIDIA-DOCA-OFED]] — current DOCA-Host Linux driver profile replacing standalone MLNX_OFED for NVIDIA networking
- [[NVIDIA-MLNX-OFED]] — legacy standalone Linux VPI/RDMA stack for InfiniBand, Ethernet, and RoCE, now on 2024 LTS
- [[NVIDIA-MLNX-EN]] — legacy standalone Linux Ethernet/RoCE driver package transitioning into DOCA-Host profiles
- [[NVIDIA-WinOF-2]] — Windows driver package for ConnectX-4 Lx and newer adapters, with current ConnectX-9 support
- [[NVIDIA-Firmware-Tools]] — MFT firmware, configuration, and debug tools for NVIDIA adapters and switches
- [[NVIDIA-Network-Operator]] — Kubernetes operator for NVIDIA networking, RDMA, GPUDirect RDMA, SR-IOV, secondary networks, and DOCA-OFED
- [[NVIDIA-Cumulus-Linux]] — Linux-based Ethernet switch OS for NVIDIA Spectrum and Spectrum-X fabrics
- [[NVIDIA-NetQ]] — network operations and observability tool set for Cumulus, Spectrum, NVLink, and data center fabrics
- [[NVIDIA-DSX-Air]] — cloud-hosted network simulation and digital twin platform for validating NVIDIA networking configurations
- [[NVIDIA-ConnectX-InfiniBand]] — NVIDIA ConnectX NICs and Quantum InfiniBand switches powering DGX SuperPODs and HPC clusters (up to 400Gb/s)
- [[NVIDIA-ConnectX-9]] — 1.6Tb/s-class SuperNIC for next-generation InfiniBand/Ethernet AI networking
- [[NVIDIA-Quantum-X800-InfiniBand]] — End-to-end 800 Gb/s InfiniBand platform for massive-scale AI and HPC fabrics
- [[NVIDIA-Spectrum-X-Validated-Solution-Stack]] — Current validated software/firmware stack table for Spectrum-X AI factory deployments
- [[NVIDIA-Spectrum-6-SPX]] — Vera Rubin POD networking rack using Spectrum-X Ethernet or Quantum-X800 InfiniBand options
- [[NVIDIA-BlueField-DPU]] — Data Processing Unit combining ConnectX NIC with ARM CPU and hardware accelerators for infrastructure offload
- [[NVIDIA-BlueField-4]] — Next-generation DPU tied to STX, CMX, AI-native storage, context memory, and AI data platforms
- [[NVIDIA-Rivermax]] — optimized networking SDK for GPUDirect media/data streaming, SMPTE ST 2110, BlueField, and ConnectX workflows

---

## NVIDIA Model Families

### Large Language Models
- [[Nemotron]] — NVIDIA model family for reasoning, safety, speech, OCR, retrieval, multimodal, and agentic AI workflows
- [[Nemotron-Training-Recipes]] — NVIDIA public recipe/cookbook stack for Nemotron 3 Nano and Super pretraining, SFT, RL, evaluation, and execution
- [[Nemotron-3-Nano]] — efficient Nemotron 3 text reasoning model for agent steps, reasoning modes, and NeMo Megatron Bridge workflows
- [[Nemotron-3-Super]] — high-capacity Nemotron 3 reasoning model for long-context, coding, planning, and complex agentic workflows
- [[Nemotron-3-Ultra]] — largest Nemotron 3 base/forthcoming model direction for frontier open reasoning workflows
- [[Nemotron-3-Nano-Omni]] — open omnimodal Nemotron 3 model and NIM for text, image, video, audio, document, and GUI reasoning
- [[Nemotron-Parse]] — Nemotron document parser and NIM for text/table extraction, semantic classes, bounding boxes, and reading-order structure
- [[NVLM]] — Frontier-class multimodal LLM (72B); dual-path NVLM-D/H/X architecture; competitive with GPT-4V
- [[NVIDIA-EAGLE]] — Efficient multimodal LLMs (EAGLE2); context-aware tiling; synthetic data training pipeline

### Speech & Audio
- [[Nemotron-ASR-Streaming]] — NVIDIA English streaming ASR model with cache-aware FastConformer-RNNT architecture
- [[Nemotron-3-VoiceChat]] — 12B full-duplex speech-to-speech Nemotron model for realtime voice agents
- [[Parakeet-ASR]] — State-of-the-art English ASR (0.6B–1.1B); FastConformer encoder; CTC/RNN-T/TDT decoding
- [[NVIDIA-Canary]] — Multilingual ASR + speech translation (EN/ES/DE/FR); encoder-decoder; Canary-1B
- [[NVIDIA-Fugatto]] — Generative audio transformer: text-to-audio, voice transformation, compositional sound generation

### Alignment & Control
- [[NVIDIA-SteerLM]] — Inference-time LLM behavior control via multi-attribute conditioning; HelpSteer dataset

### On-Device AI
- [[NVIDIA-ChatRTX]] — Local RAG chatbot for Windows RTX PCs; TensorRT-LLM backend; no cloud required

### Multimodal
- [[NVIDIA-ACE]] — Avatar Cloud Engine: AI microservices for interactive digital humans and NPCs (ASR+LLM+TTS+animation)

### Quantum Models
- [[NVIDIA-Ising]] — NVIDIA open model family for AI-assisted quantum calibration and QEC
- [[Ising-Calibration-1-35B-A3B]] — NVIDIA Ising-family VLM for quantum calibration plot understanding
- [[Ising-Decoding]] — NVIDIA Ising-family QEC predecoder models and training framework

### World Models
- [[NVIDIA-Cosmos]] — World foundation model platform for physical AI; video generation for synthetic robotics/AV training data

---

## NVIDIA Research

### Overview
- [[NVIDIA-Research]] — NVIDIA's central research org; 300+ researchers; NeRF, StyleGAN, Instant NGP, Megatron scaling

### Neural Rendering
- [[NVIDIA-NeRF]] — Neural Radiance Fields: novel view synthesis from sparse images; NVIDIA co-invented (ECCV 2020)
- [[NVIDIA-Instant-NGP]] — Instant NGP: multiresolution hash encoding for NeRF training in seconds (SIGGRAPH 2022)

### 3D Generation
- [[NVIDIA-GET3D]] — GAN-based 3D textured mesh generation from 2D image supervision (NeurIPS 2022)

### Image Synthesis
- [[NVIDIA-GauGAN]] — SPADE semantic image synthesis; GauGAN2 multimodal input; powers NVIDIA Canvas app

### Real-Time Rendering
- [[NVIDIA-DLSS]] — AI super-sampling and frame generation: DLSS 4 Multi Frame Generation on Blackwell
- [[NVIDIA-RTX]] — RTX platform: RT Cores, Tensor Cores, SER, OptiX 8; DirectX Raytracing and Vulkan RT

---

## Networking & Scale

### InfiniBand
- [[NVIDIA-Quantum-InfiniBand]] — Quantum-2 NDR 400Gb/s InfiniBand switches with SHARP in-network allreduce
- [[NVIDIA-Quantum-X800-InfiniBand]] — Quantum-X800 / XDR 800Gb/s InfiniBand platform with SHARP v4, ConnectX-8/9, LinkX, and UFM
- [[NVIDIA-UFM]] — Unified Fabric Manager: InfiniBand/Ethernet fabric management, monitoring, and routing

### Ethernet AI Networking
- [[NVIDIA-Spectrum-X]] — Spectrum-4 400GbE AI networking platform; Adaptive Routing for lossless Ethernet RDMA
- [[NVIDIA-Spectrum-X-Validated-Solution-Stack]] — Validated Spectrum-X software and firmware compatibility table for GB300, B300, and H200 deployments
- [[NVIDIA-Spectrum-6-SPX]] — Vera Rubin POD networking rack for Spectrum-X Ethernet or Quantum-X800 InfiniBand
- [[NVIDIA-Silicon-Photonics]] — Optical networking direction for scaling future Spectrum-X/AI factory fabrics
- [[NVIDIA-Cumulus-Linux]] — validated switch OS layer for current Spectrum-X reference architecture releases
- [[NVIDIA-NetQ]] — fabric operations visibility and validation for Ethernet AI networking

### Collective Communication
- [[NCCL-Algorithms]] — Ring and tree allreduce algorithms, SHARP offload, topology-aware selection in NCCL
- [[NVIDIA-HPC-X]] — MPI/SHMEM/UCX/UCC toolkit with NCCL-RDMA-SHARP and Spectrum-X plugin guidance

---

## Developer Experience

### Programs & Events
- [[NVIDIA-Developer-Program]] — Free developer program: SDK access, NGC, DLI courses, beta programs, forums
- [[NVIDIA-GTC]] — GPU Technology Conference: annual developer/industry event; Jensen keynote; 1,000+ sessions

### Cloud Labs & Catalogs
- [[NVIDIA-LaunchPad]] — Free cloud GPU lab environments for POC evaluation and hands-on developer access
- [[NVIDIA-NGC-Catalog]] — NGC model and container marketplace: 600+ models, NIM integration, monthly-updated containers

---

## Additional CUDA-X / Libraries

### GPU Programming Abstractions
- [[CUDA-Tile]] — NVIDIA tile-based CUDA programming model for Tensor Core-oriented kernels
- [[CUDA-Tile-IR]] — Low-level CUDA Tile bytecode/specification and tile virtual instruction set
- [[cuTile]] — Python DSL implementation of CUDA Tile for tiled GPU kernels

### CPU Math (Grace/Arm)
- [[NVPL-FFT]] — NVPL FFT: FFTW3-compatible CPU FFT for NVIDIA Grace (Neoverse V2); SVE-optimized

### Physics Simulation (Advanced)
- [[NVIDIA-Warp-Advanced]] — Warp advanced features: FEM, NanoVDB volumes, differentiable rendering, Isaac Lab integration

### LLM Safety & Optimization
- [[NeMo-Guardrails]] — Programmable LLM and agent safety library/microservice with Colang, catalog rails, NemoGuard NIM integration, and LangChain/LangGraph hooks
- [[NVIDIA-NemoGuard-NIMs]] — Guardrail NIM family for content safety, topic control, and jailbreak detection
- [[Nemotron-3-Content-Safety]] — NVIDIA multimodal, multilingual content-safety model for prompt, image, and response moderation
- [[Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM]] — Day 0 NIM LLM safety classifier for content-safety reasoning and dialogue moderation
- [[Llama-3.1-Nemotron-Safety-Guard-8B-NIM]] — Multilingual content-safety NIM for user and bot message moderation
- [[Llama-3.1-NemoGuard-8B-TopicControl-NIM]] — Topic-control NIM for keeping conversations within developer-defined boundaries
- [[Llama-3.1-NemoGuard-8B-ContentSafety-NIM]] — Content-safety NIM for harmful-content detection in LLM applications
- [[NVIDIA-NemoGuard-JailbreakDetect-NIM]] — Classify-endpoint NIM for jailbreak and prompt-injection detection
- [[NIM-for-Multimodal-Safety]] — Multimodal moderation NIM family for visual and generated-content safety checks
- [[TensorRT-Model-Optimizer]] — Model quantization and pruning: FP8/INT4/FP4, QAT, PTQ, TRT-LLM export

---

## Projects

*(none yet)*

## Events

*(none yet)*

## Strategies

- [[NVIDIA-Enterprise-AI-Factory]] — NVIDIA design-guide strategy for production enterprise AI factories across compute, networking, storage, software, security, and operations
