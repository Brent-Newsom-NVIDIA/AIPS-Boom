# PTX Compiler APIs

**Type:** Technology
**Tags:** NVIDIA, CUDA, PTX, compiler API, JIT, runtime compilation
**Related:** [[NVIDIA-CUDA]], [[PTX-ISA]], [[PTX-Interoperability]], [[CUDA-Driver-API]], [[NVRTC]], [[nvJitLink]], [[CUDA-Compatibility]]
**Sources:** https://docs.nvidia.com/cuda/ptx-compiler-api/index.html
**Last Updated:** 2026-04-29

## Summary
PTX Compiler APIs compile PTX programs into GPU assembly code through a CUDA Toolkit API. They decouple PTX compilation from immediate module loading, enabling applications to compile, cache, and manage GPU code more explicitly.

## Detail

### Purpose
The Driver API can JIT-load PTX directly, but some systems need earlier compilation, explicit caching, or better control over compilation behavior. PTX Compiler APIs support those workflows by compiling PTX strings into GPU assembly code before the application loads or links the result.

### Key capabilities
- Compile PTX text into GPU assembly code.
- Separate compilation from loading and linking.
- Integrate with [[CUDA-Driver-API]] module loading and [[nvJitLink]].
- Use the PTX compiler shipped with the CUDA Toolkit, which can matter when host drivers lag behind the newest toolkit.
- Support dynamic-language, DSL, and runtime-specialization systems.

### NVIDIA context
These APIs are useful when deploying CUDA applications across managed fleets where [[CUDA-Compatibility]] and driver versions affect JIT behavior. They also fit advanced ML compiler paths that emit PTX and want deterministic compilation/caching control.

## Connections
- [[PTX-ISA]] - source input language for these APIs.
- [[PTX-Interoperability]] - ABI and linking rules for PTX producers.
- [[CUDA-Driver-API]] - loads compiled outputs.
- [[NVRTC]] - can generate PTX from CUDA C++ strings before PTX compilation.
- [[nvJitLink]] - can link compiled device code into larger modules.
- [[CUDA-Compatibility]] - explains why toolkit compiler support and driver JIT support may differ.

## Source Excerpts
- NVIDIA's guide describes PTX Compiler APIs as APIs for compiling PTX programs into GPU assembly code.
