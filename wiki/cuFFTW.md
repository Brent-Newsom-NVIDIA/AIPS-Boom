# cuFFTW

**Type:** Library
**Tags:** NVIDIA, CUDA, cuFFT, cuFFTW, FFTW, FFT, porting, signal processing, HPC
**Related:** [[cuFFT]], [[cuFFTDx]], [[cuFFTMp]], [[NVPL-FFT]], [[nvmath-python]], [[NVIDIA-CUDA]]
**Sources:** https://docs.nvidia.com/cuda/cufft/index.html#fftw-interface-to-cufft
**Last Updated:** 2026-04-29

## Summary
cuFFTW is NVIDIA's FFTW3-compatible interface layer for [[cuFFT]]. It lets applications that already use FFTW begin using NVIDIA GPUs with minimal source changes by including `cufftw.h` and linking against cuFFT and cuFFTW libraries.

## Detail

### Purpose
Many scientific and engineering applications were written against FFTW before GPU acceleration was introduced. cuFFTW gives those applications a migration bridge: keep an FFTW-style API surface, link to NVIDIA CUDA libraries, and then progressively move data placement and performance-sensitive paths toward native cuFFT usage.

### Key capabilities
- FFTW3-style interface to the cuFFT library.
- Header and library path through `cufftw.h` and `libcufftw`.
- Double-precision and single-precision FFTW-style functions for supported transform families.
- Complex and real DFT plan coverage for common 1D, 2D, 3D, and many-transform cases.
- Compatibility path for FFTW applications before deeper CUDA/cuFFT-specific optimization.
- NVIDIA docs recommend moving data to and from the GPU and using native cuFFT conversion-guide routines for best performance after the application is working.

### Important limits
- cuFFTW does not implement every FFTW feature.
- Long double and quad precision are not supported.
- Multi-threaded FFTW and distributed-memory FFTW MPI interfaces are not supported.
- Some FFTW concepts exist but are not functional in the cuFFTW interface, such as selected wisdom and cost/plan-inspection functions.

### NVIDIA context
cuFFTW sits between legacy CPU FFTW code and the NVIDIA CUDA FFT stack. Use it when source compatibility and incremental porting matter. Use [[cuFFT]] directly for full CUDA control, [[cuFFTDx]] for in-kernel FFT fusion, [[cuFFTMp]] for distributed multi-process FFTs, and [[NVPL-FFT]] when the FFTW-compatible target is the NVIDIA Grace CPU rather than a GPU.

## Connections
- [[cuFFT]] - cuFFTW is the FFTW3-compatible interface layer for cuFFT.
- [[cuFFTDx]] - device-side FFT sibling for fusing FFTs into CUDA kernels.
- [[cuFFTMp]] - distributed FFT sibling for multi-GPU and multi-node HPC workloads.
- [[NVPL-FFT]] - CPU-side Grace FFT library with FFTW compatibility, complementary to cuFFTW's GPU migration role.
- [[nvmath-python]] - Python-facing math layer for NVIDIA FFT workflows.
- [[NVIDIA-CUDA]] - platform and toolkit context for cuFFT/cuFFTW libraries.

## Source Excerpts
- NVIDIA's current cuFFT documentation describes cuFFT as consisting of cuFFT and cuFFTW libraries.
- The cuFFT docs present cuFFTW as an FFTW3 interface intended to let FFTW applications use NVIDIA GPUs with minimal source changes.
