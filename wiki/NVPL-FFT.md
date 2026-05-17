# NVPL FFT

**Type:** Technology
**Tags:** NVIDIA, NVPL, FFT, CPU, Grace, Arm, HPC, Math Libraries
**Related:** [[NVPL]], [[cuFFT]], [[cuFFTW]], [[NVIDIA-Grace-CPU]], [[cuBLAS]], [[nvmath-python]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-10

## Summary
NVPL FFT (NVIDIA Performance Libraries — Fast Fourier Transform) is a component of the NVIDIA Performance Libraries (NVPL) suite, providing highly optimized CPU-based FFT routines specifically tuned for the NVIDIA Grace CPU (Arm Neoverse V2 architecture). It offers drop-in compatibility with FFTW's C API, enabling existing HPC applications using FFTW to achieve maximum performance on Grace-based systems (GH200, GB200 NVL72) without code changes. NVPL FFT supports 1D, 2D, and 3D FFT plans for real and complex data.

## Detail

### Purpose
The NVIDIA Grace CPU in GH200 and GB200 systems features 72 Arm Neoverse V2 cores with SVE (Scalable Vector Extension) SIMD units. Standard FFTW builds for x86 cannot leverage these efficiently. NVPL FFT provides a Grace-native FFT library that extracts full SIMD performance from the Arm SVE units, delivering significantly higher FFT throughput for HPC, scientific computing, and signal processing workloads running on the CPU side of Grace Hopper and Grace Blackwell systems.

### Key Features
- FFTW3-compatible API: drop-in replacement; link against NVPL FFT instead of FFTW3 without code changes
- Arm SVE optimization: full exploitation of Grace CPU's 128-256 bit Scalable Vector Extension
- 1D, 2D, 3D real and complex FFT plans
- Single and double precision (float and double)
- Multi-threaded: OpenMP-backed parallel FFT for multi-core Grace
- FFTW wisdom file compatibility: plans can be exported/imported
- Part of NVPL suite: consistent packaging and versioning with NVPL BLAS, LAPACK, RAND

### Use Cases
- Scientific computing on Grace Hopper (GH200) or Grace Blackwell (GB200) systems
- Signal processing and spectral analysis on the CPU portion of heterogeneous Grace+GPU nodes
- HPC applications using FFTW (PDE solvers, molecular dynamics, weather models)
- Porting x86 HPC codes to Arm Grace with minimal modification
- Computational fluid dynamics spectral methods

### Hardware Requirements / Compatibility
- NVIDIA Grace CPU (Arm Neoverse V2) required for full performance
- Runs on any AArch64 Linux system (reduced performance on non-Grace Arm)
- GH200 (Grace Hopper Superchip) and GB200 (Grace Blackwell)
- NVPL package: installed via apt/yum on Grace-based systems or downloaded from NGC

### Language Bindings / APIs
- C (FFTW3-compatible API: fftw_plan_dft, fftw_execute, fftw_destroy_plan)
- Fortran (FFTW3 Fortran interface compatible)
- Python: via nvmath-python FFT bindings
- CMake/pkg-config integration: find_package(NVPL_FFT)

## Connections
- [[NVPL]] — NVPL FFT is one component of the NVIDIA Performance Libraries suite (also BLAS, LAPACK, RAND)
- [[cuFFT]] and [[cuFFTW]] — cuFFT/cuFFTW are the GPU-side CUDA FFT and FFTW-porting paths; NVPL FFT is for the CPU side of Grace-based systems
- [[NVIDIA-Grace-CPU]] — NVPL FFT is specifically optimized for the Grace Neoverse V2 CPU architecture
- [[nvmath-python]] — nvmath-python provides Python access to NVPL FFT for GPU-CPU heterogeneous workflows
- [[cuBLAS]] — cuBLAS (GPU) + NVPL BLAS (CPU) together cover the full Grace Hopper compute hierarchy

## Resources
- [NVPL Developer Page](https://developer.nvidia.com/nvpl)
- [NVPL Documentation](https://docs.nvidia.com/nvpl/)
- [NVPL FFT API Reference](https://docs.nvidia.com/nvpl/nvpl_fft/)
