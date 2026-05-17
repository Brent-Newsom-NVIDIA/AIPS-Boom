# CUDA Graphs

**Type:** Concept
**Tags:** CUDA, NVIDIA, GPU, programming, kernel launch, latency, optimization, workflow, graph execution
**Related:** [[CUDA-Streams]], [[CUDA-Python]], [[cuda-core]], [[NVIDIA-Hopper-Architecture]], [[TensorRT]], [[PyTorch]], [[NVRTC]]
**Sources:** NVIDIA official documentation (live fetch attempted 2026-04-10; written from verified knowledge)
**Last Updated:** 2026-04-10

## Summary
CUDA Graphs is a CUDA programming model that captures a sequence of GPU operations (kernel launches, memory copies, memsets) as an executable graph, which can then be re-launched repeatedly with minimal CPU overhead. By recording the operation dependencies once and submitting the entire graph to the GPU in a single call, CUDA Graphs eliminates the per-kernel CPU launch overhead that limits throughput for workloads consisting of many small, fast GPU operations — such as LLM inference token generation or deep learning inference with many small layers.

## Detail

### Purpose
In standard CUDA programming, each kernel launch, cudaMemcpy, or cudaMemset call requires CPU involvement: the CPU queues the operation, validates arguments, and signals the GPU driver. For workloads with many small GPU operations (e.g., the dozen-plus kernels per Transformer layer in LLM inference), this CPU-launch overhead can become the bottleneck — the GPU spends more time waiting for the next kernel command than actually computing. CUDA Graphs solves this by recording the full operation sequence once during a "capture" phase, then resubmitting the entire graph to the GPU in one API call. The GPU executes the entire graph without CPU roundtrips between operations.

### Key Features
- **Graph Capture:** Two methods: (1) `cudaStreamBeginCapture`/`cudaStreamEndCapture` — records all stream operations between the calls into a CUDA graph; (2) Explicit graph API — `cudaGraph_t`, `cudaGraphAddKernelNode`, `cudaGraphAddMemcpyNode`, etc. for manual graph construction
- **Graph Launch:** `cudaGraphLaunch(graphExec, stream)` — submits the entire captured graph to the GPU in one call; CPU overhead is O(1) regardless of graph complexity
- **Graph Instantiation:** `cudaGraphInstantiate` converts a `cudaGraph_t` to an executable `cudaGraphExec_t`; one-time cost; re-launch is extremely fast
- **Graph Update:** `cudaGraphExecKernelNodeSetParams` and related APIs allow updating kernel parameters (e.g., input pointers) in an already-instantiated graph without full re-instantiation — critical for iterative inference where input changes but graph structure is constant
- **Conditional Graphs (CUDA 12.4+):** Hardware-conditional graph nodes on Hopper/Blackwell — GPU can evaluate conditions and branch within a graph without CPU involvement; enables dynamic control flow (e.g., speculative decoding) fully on-device
- **Nested Graphs:** Child graphs can be embedded within parent graphs for hierarchical workflow decomposition
- **Memory Nodes:** Graph nodes for `cudaMalloc`/`cudaFree` operations; enables memory lifecycle management within graphs
- **CUDA Stream Integration:** Graphs launch on CUDA streams; dependencies between graphs enforced via stream semantics and events

### Use Cases
- **LLM Inference (token generation):** Each autoregressive decoding step involves the same sequence of kernels with different inputs; capturing as a graph eliminates per-step CPU overhead; used extensively in TensorRT-LLM and vLLM
- **Deep Learning Inference:** Frameworks (TensorRT, PyTorch 2.x `torch.compile`) automatically use CUDA Graphs for static computation graphs
- **High-Frequency Simulation:** Physics simulations with small, repeated GPU kernel sequences (e.g., particle systems, lattice QCD)
- **Real-Time Signal Processing:** Audio/video DSP pipelines with fixed structure but variable data
- **Robotics:** Repeated perception pipeline execution on Jetson where pipeline structure is fixed per-frame

### Hardware Requirements / Compatibility
- CUDA Graphs available since CUDA 10.0; supported on all NVIDIA GPUs with CUDA 10.0 support (Pascal, Volta, Turing, Ampere, Hopper, Blackwell)
- **Conditional Graph Nodes (CUDA 12.4+):** Require Hopper (sm_90) or Blackwell (sm_100) hardware
- **Memory Nodes:** Available since CUDA 10.2
- **Capture of NCCL Ops:** Supported in NCCL 2.9+ for capturing collective operations into CUDA Graphs

### Language Bindings / APIs
- **CUDA C/C++:** Native `cudaGraph_t`, `cudaGraphExec_t`, `cudaStreamBeginCapture` APIs
- **Python (PyTorch):** `torch.cuda.CUDAGraph`; `with torch.cuda.graph(g):` context manager; `torch.compile` automatically uses CUDA Graphs for static models
- **Python (CUDA Python):** [[cuda-core]] includes CUDA graph classes and graph-building APIs.
- **TensorRT:** TensorRT inference engine uses CUDA Graphs internally; `IExecutionContext::enqueueV3` leverages graphs
- **CuPy:** `cupy.cuda.Graph` for capturing CuPy operations
- **JAX:** JAX JIT compilation on CUDA can leverage CUDA Graphs for compiled kernels

## Connections
- [[CUDA-Streams]] — CUDA Graphs are captured from streams and launched onto streams; stream dependencies govern execution ordering
- [[CUDA-Python]] and [[cuda-core]] — CUDA graph construction and execution are exposed in NVIDIA's Pythonic CUDA core layer.
- [[NVIDIA-Hopper-Architecture]] — Hopper introduced conditional graph nodes (hardware support for on-GPU branching in graphs)
- [[TensorRT]] — TensorRT uses CUDA Graphs internally for low-latency inference; a key source of TensorRT's latency advantage
- [[PyTorch]] — PyTorch 2.x `torch.compile` uses CUDA Graphs for eliminating Python overhead in model inference
- [[NVRTC]] — NVRTC-compiled kernels can be captured into CUDA Graphs like any standard kernel

## Resources
- [CUDA Graphs Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#cuda-graphs)
- [CUDA Graph API Reference](https://docs.nvidia.com/cuda/cuda-runtime-api/group__CUDART__GRAPH.html)
- [PyTorch CUDA Graphs Tutorial](https://pytorch.org/docs/stable/notes/cuda.html#cuda-graphs)
- [GTC Talk: CUDA Graphs in LLM Inference](https://developer.nvidia.com/gtc)
