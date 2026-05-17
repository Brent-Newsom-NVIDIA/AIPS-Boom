# Ising Decoding

**Type:** NVIDIA model family / training framework
**Tags:** NVIDIA, Ising, quantum computing, quantum error correction, QEC, surface code, predecoder, CNN, PyTorch, CUDA-Q, CUDA-QX, NVQLink, cuQuantum
**Related:** [[NVIDIA-Ising]], [[NVIDIA-Quantum]], [[Ising-Calibration-1-35B-A3B]], [[CUDA-Q]], [[CUDA-QX]], [[CUDA-Q-Realtime]], [[NVIDIA-NVQLink]], [[cuQuantum]], [[PyTorch]], [[NVIDIA-Accelerated-Quantum-Center]], [[NVIDIA-DGX-Quantum]], [[NVIDIA-GB200-NVL72]]
**Sources:** https://www.nvidia.com/en-us/solutions/quantum-computing/ising/, https://developer.nvidia.com/blog/nvidia-ising-introduces-ai-powered-workflows-to-build-fault-tolerant-quantum-systems/, https://github.com/NVIDIA/Ising-Decoding, https://huggingface.co/nvidia/Ising-Decoder-SurfaceCode-1-Fast, https://huggingface.co/nvidia/Ising-Decoder-SurfaceCode-1-Accurate
**Last Updated:** 2026-04-29

## Summary
Ising Decoding is the NVIDIA Ising model domain for quantum error correction pre-decoding. NVIDIA describes it as a pair of open 3D CNN models, Fast and Accurate, plus a training framework for building, customizing, quantizing, and deploying quantum error-correction decoders.

## Detail
Ising Decoding targets rotated surface-code quantum error correction. A neural predecoder consumes detector syndromes across space and time, predicts local corrections, and then a standard global decoder such as PyMatching produces the final logical decision.

NVIDIA positions this as a way to improve both latency and logical error rates for QEC. The NVIDIA Ising technical blog describes Fast and Accurate variants: Fast has fewer layers, a receptive field of 9, and roughly 913K parameters; Accurate has more layers, a receptive field of 13, and roughly 1.8M parameters. The Fast variant is optimized for speed, while the Accurate variant trades more runtime for larger logical-error-rate improvement.

The public GitHub repository provides the Ising Decoding training framework and recipes. It includes workflows for training or downloading models, assessing performance, exporting or quantizing models, and handing ONNX/test artifacts into CUDA-Q QEC realtime workflows.

The Hugging Face model cards list version 0.1.0, NVIDIA Open Model License terms, Linux support, PyTorch as the primary inference runtime, optional ONNX Runtime or NVIDIA TensorRT through ONNX export, native FP16 SafeTensors support, and INT8/FP8 quantization through NVIDIA ModelOpt export paths.

## Variants
- **Ising-Decoder-SurfaceCode-1-Fast:** 4-layer 3D CNN, receptive field 9, about 913K parameters, optimized for lower latency.
- **Ising-Decoder-SurfaceCode-1-Accurate:** 6-layer 3D CNN, receptive field 13, about 1.8M parameters, optimized for stronger correction quality.

## Inputs and Outputs
- **Inputs:** five-dimensional quantum error correction syndrome tensors shaped like `(B, 4, T, D, D)`.
- **Input channels:** X/Z detector outcomes and geometric detector representations for the surface-code frame components.
- **Outputs:** correction tensors with the same shape, containing logits for spacelike and timelike correction channels.
- **Decoder role:** model outputs are consumed by a downstream global decoder; they are not final logical corrections by themselves.

## Training and Evaluation
NVIDIA says Ising Decoding can train on synthetic circuit-level syndrome data generated on the fly, including data paths using [[cuQuantum]] / cuStabilizer and [[PyTorch]]. The Hugging Face model cards describe synthetic training data and evaluation against PyMatching-style baselines, with logical error rate reduction as the key quality measure.

The NVIDIA Ising page summarizes Ising Decoding as providing 2.5x speed improvement and 3x accuracy improvement against traditional solvers in cited NVIDIA results. The technical blog provides more granular examples for Fast and Accurate predecoders at selected surface-code distances and physical error rates.

## Connections
- [[NVIDIA-Quantum]] - Ising Decoding is part of NVIDIA's accelerated quantum computing platform direction.
- [[NVIDIA-Ising]] - family-level page for NVIDIA's open quantum AI models.
- [[Ising-Calibration-1-35B-A3B]] - sibling Ising model domain for quantum processor calibration.
- [[CUDA-QX]] - CUDA-Q QEC is the software context for realtime decoder workflows.
- [[CUDA-Q-Realtime]] - low-latency API path used for realtime GPU-to-controller feedback loops.
- [[NVIDIA-NVQLink]] - hardware/software integration path for QPU-to-GPU realtime decoding.
- [[cuQuantum]] - used through cuStabilizer in training data generation workflows.
- [[PyTorch]] - primary training/inference framework in the public repository and model cards.
- [[NVIDIA-Accelerated-Quantum-Center]] - research context where QEC, CUDA-Q, NVQLink, and NVIDIA AI supercomputing meet.

## Resources
- [NVIDIA Ising](https://www.nvidia.com/en-us/solutions/quantum-computing/ising/)
- [NVIDIA Ising technical blog](https://developer.nvidia.com/blog/nvidia-ising-introduces-ai-powered-workflows-to-build-fault-tolerant-quantum-systems/)
- [NVIDIA Ising-Decoding GitHub repository](https://github.com/NVIDIA/Ising-Decoding)
- [Ising Decoder SurfaceCode 1 Fast](https://huggingface.co/nvidia/Ising-Decoder-SurfaceCode-1-Fast)
- [Ising Decoder SurfaceCode 1 Accurate](https://huggingface.co/nvidia/Ising-Decoder-SurfaceCode-1-Accurate)
