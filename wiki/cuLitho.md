# cuLitho

**Type:** Technology
**Tags:** CUDA, NVIDIA, GPU, Semiconductor, Lithography, EDA, Manufacturing, Computational Lithography
**Related:** [[cuBLAS]], [[cuFFT]], [[cuSOLVER]]
**Sources:** NVIDIA official documentation
**Last Updated:** 2026-04-09

## Summary
cuLitho is NVIDIA's GPU-accelerated computational lithography library, providing orders-of-magnitude speedup for Optical Proximity Correction (OPC) and Inverse Lithography Technology (ILT) in semiconductor mask manufacturing. It delivers 40x speedup in ILT, enabling photomask computation overnight that previously required two weeks, and allows 500 Hopper GPU systems to replace 40,000 CPU systems. Partners include TSMC, ASML, and Synopsys.

## Detail

### Purpose
Computational lithography is the process of computing photomasks that account for optical distortions when printing nanometer-scale chip features on silicon wafers. As feature sizes shrink (3nm, 2nm, 1.6nm), the physics-based correction computations grow exponentially. cuLitho dramatically accelerates this process on GPU, reducing the compute time for mask generation from weeks to hours and enabling new techniques like curvilinear OPC and high-NA EUV lithography.

### Key Features
- 40x speedup for Inverse Lithography Technology (ILT)
- Photomasks computable overnight vs. two weeks on CPU
- 3x to 5x more masks generated per day
- 500 NVIDIA Hopper GPU systems replaces 40,000 CPU systems
- 1/9 power consumption and 1/8 space vs. CPU equivalent
- Optical Proximity Correction (OPC) acceleration
- Curvilinear OPC support for advanced node geometries
- High-NA EUV lithography support for sub-2nm nodes
- Optimized for NVIDIA Hopper (H100) GPUs
- Production integrations with TSMC, ASML, Synopsys

### Use Cases
- Semiconductor photomask generation for advanced nodes (3nm, 2nm, 1.6nm)
- EDA (Electronic Design Automation) lithography simulation
- Process Design Kit (PDK) development
- Chip design verification and manufacturing
- High-NA EUV mask optimization
- Curvilinear mask shape generation

### Hardware Requirements
- NVIDIA Hopper (H100) GPU recommended and specifically optimized
- Data center deployment; not intended for workstation use
- Large GPU cluster deployments (hundreds of H100s)

### Language Bindings
- Integrated via EDA partner tools (Synopsys, ASML)
- C/C++ API (low-level integration)

## Connections
- [[cuFFT]] — computational lithography involves Fourier optics; cuFFT provides FFT acceleration for aerial image simulation
- [[cuBLAS]] — cuLitho uses dense linear algebra (cuBLAS) for mask optimization matrix operations
- [[cuSOLVER]] — iterative inverse lithography uses linear system solving (cuSOLVER) internally

## Resources
- [Official Page](https://developer.nvidia.com/culitho)
- [cuLitho Documentation](https://docs.nvidia.com/cuLitho/)
