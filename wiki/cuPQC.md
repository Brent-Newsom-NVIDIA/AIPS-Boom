# cuPQC

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Post-Quantum Cryptography, Security, Cryptography, CUDA-X
**Related:** [[NVIDIA-Quantum]], [[NVIDIA-CUDA]], [[NVCC]], [[NVRTC]], [[CUDA-Cpp-Standard-Library]], [[Thrust]]
**Sources:** https://docs.nvidia.com/cuda/cupqc/index.html, https://docs.nvidia.com/cuda/cupqc/overview/features.html, https://docs.nvidia.com/cuda/cupqc/overview/requirements.html, https://docs.nvidia.com/cuda/cupqc/additional/release_notes.html, https://www.nvidia.com/en-us/solutions/quantum-computing/
**Last Updated:** 2026-04-29

## Summary
cuPQC is NVIDIA's CUDA SDK for building high-performance cryptographic applications on GPUs. Current documentation describes two device-side libraries: cuPQC-PK for post-quantum public-key algorithms such as ML-KEM and ML-DSA, and cuPQC-Hash for SHA-2, SHA-3, SHAKE, Poseidon2, and Merkle tree operations. The SDK is designed to integrate directly into CUDA kernels so cryptographic work can be fused with GPU computation.

## Detail

### Purpose
Cryptographic workloads often need both high throughput and low data-movement overhead. cuPQC addresses this by exposing CUDA-kernel-integrated cryptographic building blocks, allowing applications to run post-quantum key/signature operations and hash/Merkle computations inside GPU kernels rather than staging work through CPU-side libraries.

### Current SDK shape
- **cuPQC-PK:** device-side post-quantum public-key library for ML-KEM key encapsulation and ML-DSA digital signatures.
- **cuPQC-Hash:** device-side cryptographic hash library for SHA-2, SHA-3, SHAKE, Poseidon2, and Merkle tree operations.
- **Descriptor/operator model:** applications describe the algorithm, function, execution mode, and block dimension in CUDA C++ types.
- **Kernel fusion:** cryptographic functions are intended to execute directly in CUDA kernels so they can be fused with other GPU work.
- **Batched throughput:** current docs emphasize high-throughput batched operations for both public-key and hash/Merkle workloads.
- **Security posture:** NVIDIA documents side-channel protections for cuPQC-PK and a separate security notes section.
- **Packaging:** current releases use static libraries such as `libcupqc-pk.a` and `libcupqc-hash.a`, with CommonDx headers as a dependency.
- **Release direction:** cuPQC 0.4.1 documents the cuPQC-PK/cuPQC-Hash naming split and new Poseidon2/Merkle tree improvements.

### Use Cases
- High-throughput TLS/certificate authority operations migrating to PQC
- Code signing and firmware authentication at scale
- VPN and secure channel establishment with quantum-resistant KEM
- Blockchain, ZK, and digital ledger systems requiring GPU-side hashing or Merkle tree computation
- HSM (Hardware Security Module) software acceleration
- IoT device provisioning at scale
- Research into PQC and cryptographic hash performance benchmarking

### Hardware Requirements
- CUDA Toolkit 12.8 or newer
- Supported CUDA compiler, with NVCC 12.8+ listed in current requirements
- C++17-capable host compiler
- x86_64 or Arm64 CPU
- NVIDIA GPU architecture `sm_70`, `sm_75`, `sm_80`, `sm_86`, `sm_87`, `sm_89`, or `sm_90`

### Language Bindings
- CUDA C++ device-side libraries
- CMake integration through SDK package configuration files

## Connections
- [[NVIDIA-Quantum]] - cuPQC is listed in NVIDIA's current quantum solution map for quantum-safe security.
- [[NVIDIA-CUDA]] - platform context for CUDA kernels, compilers, and GPU execution.
- [[NVCC]] - current cuPQC examples compile CUDA C++ with LTO-oriented NVCC flags.
- [[NVRTC]] - adjacent runtime compilation path for systems that generate CUDA code dynamically.
- [[CUDA-Cpp-Standard-Library]] - C++17 CUDA development context for header/static-library integration.
- [[Thrust]] - adjacent CUDA C++ parallel-programming library often used in GPU-side data processing.

## Source Excerpts
- NVIDIA describes cuPQC as an SDK of high-performance GPU cryptography libraries that integrate directly into CUDA kernels.
- Current docs split the SDK into cuPQC-PK for ML-KEM/ML-DSA and cuPQC-Hash for SHA-2, SHA-3, SHAKE, Poseidon2, and Merkle tree operations.

## Resources
- [cuPQC Documentation](https://docs.nvidia.com/cuda/cupqc/index.html)
- [cuPQC SDK Features](https://docs.nvidia.com/cuda/cupqc/overview/features.html)
- [cuPQC System Requirements](https://docs.nvidia.com/cuda/cupqc/overview/requirements.html)
- [NVIDIA cuPQC Developer Page](https://developer.nvidia.com/cupqc)
