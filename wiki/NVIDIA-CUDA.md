# NVIDIA CUDA

**Type:** Technology
**Tags:** NVIDIA, CUDA, GPU computing, CUDA Toolkit, programming model, software stack
**Related:** [[CUDA-Programming-Guide]], [[CUDA-Best-Practices-Guide]], [[CUDA-Quick-Start-Guide]], [[CUDA-Installation-Guide-Linux]], [[CUDA-Installation-Guide-Windows]], [[CUDA-Release-Notes]], [[CUDA-Runtime-API]], [[CUDA-Driver-API]], [[CUDA-Python]], [[cuda-core]], [[cuda-bindings]], [[NVCC]], [[NVIDIA-HPC-SDK]], [[NVIDIA-HPC-Compilers]], [[CUDA-Fortran]], [[NVIDIA-Fortran-CUDA-Interfaces]], [[NVIDIA-OpenACC]], [[NVIDIA-Stdpar]], [[CUDA-Graphs]], [[CUDA-Streams]], [[CUDA-Unified-Memory]], [[CUDA-Tile]], [[CUDA-Tile-IR]], [[cuTile]], [[PTX-ISA]], [[CUDA-Demo-Suite]], [[CUDA-on-EFLOW]], [[Floating-Point-and-IEEE-754]], [[cuBLAS]], [[cuBLASLt]], [[cuBLASXt]], [[cuFFT]], [[cuFFTW]], [[cuFFTMp]], [[cuTENSORMg]], [[cuTENSORMp]], [[cuDNN]], [[NVIDIA-Blackwell-Architecture]]
**Sources:** https://docs.nvidia.com/cuda/, https://docs.nvidia.com/cuda/doc/index.html, https://docs.nvidia.com/cuda/cublas/index.html, https://docs.nvidia.com/cuda/cufft/index.html, https://developer.nvidia.com/cuda/python, https://nvidia.github.io/cuda-python/latest/, https://developer.nvidia.com/cuda/tile, https://docs.nvidia.com/cuda/cutile-python/index.html, https://docs.nvidia.com/cuda/tile-ir/latest/index.html
**Last Updated:** 2026-04-29

## Summary
NVIDIA CUDA is the core GPU computing platform and programming model for building accelerated applications across NVIDIA GPUs. The current CUDA Toolkit documentation organizes the stack into installation guides, programming guides, architecture guides, API references, libraries, compiler SDK components, profiling and debugging tools, and deployment compatibility notes.

## Detail

### Role in the NVIDIA stack
CUDA is the foundation beneath NVIDIA CUDA-X libraries, AI frameworks, HPC applications, and many production inference and training systems. It provides the compiler, runtime, driver-level APIs, math and communication libraries, profiling/debugging tools, and GPU programming abstractions used by higher-level software such as [[PyTorch]], [[TensorRT]], [[TensorRT-LLM]], [[NVIDIA-NIM]], and [[NVIDIA-NeMo]].

### Current documentation scope
- **Programming model:** [[CUDA-Programming-Guide]], [[CUDA-Best-Practices-Guide]], [[CUDA-Streams]], [[CUDA-Graphs]], [[CUDA-Unified-Memory]], [[CUDA-Tile]], [[cuTile]], [[Floating-Point-and-IEEE-754]], and architecture-specific tuning guidance.
- **Installation and release tracking:** [[CUDA-Quick-Start-Guide]], [[CUDA-Installation-Guide-Linux]], [[CUDA-Installation-Guide-Windows]], and [[CUDA-Release-Notes]] cover setup, validation, component versions, and known issues.
- **API layers:** [[CUDA-Runtime-API]], [[CUDA-Driver-API]], [[CUDA-Math-API]], [[CUDA-Debugger-API]], [[PTX-Compiler-APIs]], [[NVRTC]], and [[nvJitLink]].
- **Python access:** [[CUDA-Python]], [[cuda-core]], [[cuda-bindings]], [[cuda-pathfinder]], [[cuda-compute]], [[cuda-coop]], [[cuTile]], [[nvmath-python]], and [[CUPTI-Python]].
- **Compiler path:** [[NVCC]], [[NVIDIA-HPC-SDK]], [[NVIDIA-HPC-Compilers]], [[CUDA-Fortran]], [[NVIDIA-OpenACC]], [[NVIDIA-Stdpar]], [[PTX-ISA]], [[CUDA-Tile-IR]], [[NVVM-IR]], [[libNVVM]], [[libdevice]], [[nvFatbin]], and [[CUDA-Binary-Utilities]].
- **Libraries:** [[cuBLAS]], [[cuBLASLt]], [[cuBLASXt]], [[cuFFT]], [[cuFFTW]], [[cuFFTMp]], [[cuRAND]], [[cuSOLVER]], [[cuSPARSE]], [[NPP]], [[nvJPEG]], [[cuDNN]], [[NCCL]], and newer device/distributed libraries such as [[cuBLASDx]], [[cuFFTDx]], [[cuBLASMp]], [[cuSOLVERMp]], [[cuSPARSELt]], [[cuTENSORMg]], and [[cuTENSORMp]].
- **Deployment contexts:** [[CUDA-Compatibility]], [[CUDA-Demo-Suite]], [[CUDA-on-WSL]], [[CUDA-on-EFLOW]], [[CUDA-for-Tegra]], [[NVIDIA-MIG]], [[NVIDIA-vGPU]], [[GPUDirect-RDMA]], and [[GPU-Direct-Storage]].
- **Architecture guidance:** [[NVIDIA-Blackwell-Architecture]], [[NVIDIA-Hopper-Architecture]], [[NVIDIA-Ampere-Architecture]], [[NVIDIA-Ada-Lovelace-Architecture]], and [[NVIDIA-Turing-Architecture]] capture current and legacy tuning/compatibility context.

### NVIDIA context
CUDA is the connective tissue for NVIDIA hardware generations from data center GPUs to Jetson edge devices. Current docs explicitly include Blackwell guidance, making CUDA the bridge between low-level GPU architecture features and production AI software that consumes them.

## Connections
- [[NVIDIA-Blackwell-Architecture]] - latest architecture-specific CUDA compatibility and tuning docs live inside the CUDA documentation set.
- [[CUDA-Programming-Guide]] - primary conceptual guide for CUDA programming model behavior.
- [[CUDA-Best-Practices-Guide]] - performance and deployment companion guide.
- [[CUDA-Quick-Start-Guide]] - shortest setup and verification path for new CUDA environments.
- [[CUDA-Release-Notes]] - current toolkit, component, driver, and library version information.
- [[NVCC]] - the CUDA compiler driver is the main compilation front door for CUDA C++.
- [[NVIDIA-HPC-SDK]] - NVIDIA SDK that packages HPC compilers, CUDA programming models, libraries, tools, and containers.
- [[NVIDIA-HPC-Compilers]] - Fortran, C++, and C compilers for CUDA/OpenACC/OpenMP/stdpar HPC application development.
- [[CUDA-Fortran]], [[NVIDIA-Fortran-CUDA-Interfaces]], [[NVIDIA-OpenACC]], and [[NVIDIA-Stdpar]] - HPC SDK programming model and library-interface paths that generate or call CUDA-capable GPU code.
- [[CUDA-Tile]] - NVIDIA's tile-based CUDA programming model for Tensor Core-oriented kernels.
- [[cuTile]] - Python DSL implementation of CUDA Tile.
- [[CUDA-Tile-IR]] - tile-oriented bytecode and virtual instruction set within the CUDA documentation family.
- [[CUDA-Runtime-API]] - the higher-level API most CUDA applications use directly.
- [[CUDA-Driver-API]] - the lower-level API used by runtimes, frameworks, and advanced module loading workflows.
- [[CUDA-Python]] - NVIDIA-maintained Python access layer for CUDA APIs and libraries.
- [[cuda-core]] and [[cuda-bindings]] - Pythonic and low-level access to CUDA runtime/driver concepts.
- [[PTX-ISA]] - virtual GPU ISA emitted by CUDA compiler paths and consumed by JIT/compiler tooling.
- [[CUDA-Demo-Suite]] - CUDA validation utilities help confirm toolkit, driver, and GPU setup.
- [[CUDA-on-EFLOW]] - edge Windows/Linux deployment guidance for CUDA container workloads.
- [[Floating-Point-and-IEEE-754]] - NVIDIA's numerical accuracy guidance for CUDA floating-point behavior.
- [[cuBLAS]] - representative CUDA-X library built on the CUDA platform.
- [[cuBLASLt]] and [[cuBLASXt]] - cuBLAS API families for programmable GEMM and single-node multi-GPU BLAS3 execution.
- [[cuFFT]] and [[cuFFTW]] - FFT library and FFTW-compatible migration interface in the CUDA math stack.

## Source Excerpts
- NVIDIA CUDA docs present the Toolkit as the development environment for high-performance GPU-accelerated applications.
- The documentation hub groups CUDA docs into programming guides, architecture guides, APIs, tools, compiler SDK components, and libraries.
