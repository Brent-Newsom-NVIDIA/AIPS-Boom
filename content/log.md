# Ingestion Log

---

## 2026-05-15 - Ingested NVIDIA Newton and OptiX official sources

**Source URLs:** https://developer.nvidia.com/newton-physics, https://developer.nvidia.com/blog/announcing-newton-an-open-source-physics-engine-for-robotics-simulation, https://developer.nvidia.com/blog/newton-adds-contact-rich-manipulation-and-locomotion-capabilities-for-industrial-robotics/, https://developer.nvidia.com/rtx/ray-tracing/optix, https://developer.nvidia.com/designworks/optix/download, https://docs.nvidia.com/gameworks/content/gameworkslibrary/optix/optix_programming_guide.htm, https://developer.nvidia.com/blog/flexible-and-powerful-ray-tracing-with-optix-8/

**Pages created (2 total):**

- `content/wiki/NVIDIA-Newton.md` - open-source GPU-accelerated physics engine for robotics simulation, robot learning, contact-rich manipulation, locomotion, Warp, OpenUSD, Isaac Lab, and MuJoCo Warp workflows
- `content/wiki/NVIDIA-OptiX.md` - GPU-accelerated ray tracing SDK and application framework for CUDA-oriented rendering, visualization, simulation, denoising, SER, RT Core, and Tensor Core workflows

**Pages updated:**

- `content/index.md` - added Newton under Robotics & Simulation, added OptiX under Rendering & Ray Tracing, refreshed page count/date
- `content/wiki/NVIDIA-Warp.md` - added Newton and Isaac relationship links
- `content/wiki/NVIDIA-Isaac.md` - added Newton relationship link
- `content/wiki/NVIDIA-Omniverse.md` - added Newton and RTX relationship links
- `content/wiki/NVIDIA-RTX.md` - added OptiX relationship link and refreshed OptiX references

---

## 2026-05-09 - AIPS BOOM batch: AI factory hardware, networking, and reference architecture ingest

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/pre-aips-boom-ai-factory-hardware-20260509T040606Z`; local Git tag `codex-backup-pre-aips-boom-ai-factory-hardware-20260509T040606Z`

**Source URLs:** https://docs.nvidia.com/dgx-basepod/reference-architecture-infrastructure-foundation-enterprise-ai/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-b200/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-gb200/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300/latest/index.html, https://docs.nvidia.com/dgx-superpod/reference-architecture/scalable-infrastructure-b300-xdr/latest/index.html, https://docs.nvidia.com/networking/software/spectrumx-solution-stack/index.html, https://docs.nvidia.com/enterprise-reference-architectures/index.html, https://www.nvidia.com/en-us/data-center/dgx-b200/, https://docs.nvidia.com/dgx/dgxb200-user-guide/, https://www.nvidia.com/en-us/networking/products/infiniband/quantum-x800/, https://developer.nvidia.com/blog/nvidia-vera-rubin-pod-seven-chips-five-rack-scale-systems-one-ai-supercomputer/, https://developer.nvidia.com/blog/inside-nvidia-groq-3-lpx-the-low-latency-inference-accelerator-for-the-nvidia-vera-rubin-platform, https://developer.nvidia.com/blog/inside-the-nvidia-rubin-platform-six-new-chips-one-ai-supercomputer/, https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform, https://www.nvidia.com/en-us/data-center/lpx/

**Gap analysis summary:**

- Found that the wiki already had strong canonical pages for [[NVIDIA-Enterprise-AI-Factory]], [[NVIDIA-Enterprise-Reference-Architectures]], [[NVIDIA-DGX]], [[NVIDIA-DGX-SuperPOD]], [[NVIDIA-DGX-B300]], [[NVIDIA-GB200-NVL72]], [[NVIDIA-GB300-NVL72]], [[NVIDIA-Spectrum-X]], [[NVIDIA-Quantum-InfiniBand]], [[NVIDIA-BlueField-DPU]], [[NVIDIA-BlueField-4]], [[NVIDIA-STX]], [[NVIDIA-CMX]], and [[NVIDIA-Vera-Rubin]].
- Added missing first-class pages for the current DGX BasePOD B200/H200/H100 RA, DGX SuperPOD B200 RA, DGX SuperPOD GB200 RA, and two DGX B300 SuperPOD RA variants because each is a distinct NVIDIA-authored architecture document.
- Added [[NVIDIA-DGX-B200]] as a product/system page because B200 was only represented indirectly through DGX and SuperPOD pages.
- Added [[NVIDIA-Spectrum-X-Validated-Solution-Stack]] and [[NVIDIA-Quantum-X800-InfiniBand]] to make current Ethernet/InfiniBand AI factory fabric choices queryable by validated stack and 800 Gb/s generation.
- Added [[NVIDIA-Vera-Rubin-POD]], [[NVIDIA-Spectrum-6-SPX]], and [[NVIDIA-Groq-3-LPX]] from NVIDIA-authored Vera Rubin materials to capture the next-generation AI factory hardware composition.
- Avoided broad build.nvidia scraping and duplicate build-card ingestion; only durable NVIDIA-authored pages/products were added.

**Pages created (11 total):**

- `content/wiki/NVIDIA-DGX-BasePOD-B200-H200-H100-RA.md`
- `content/wiki/NVIDIA-DGX-B200.md`
- `content/wiki/NVIDIA-DGX-SuperPOD-B200-RA.md`
- `content/wiki/NVIDIA-DGX-SuperPOD-GB200-RA.md`
- `content/wiki/NVIDIA-DGX-SuperPOD-B300-Spectrum-4-Ethernet-RA.md`
- `content/wiki/NVIDIA-DGX-SuperPOD-B300-Quantum-X800-InfiniBand-RA.md`
- `content/wiki/NVIDIA-Spectrum-X-Validated-Solution-Stack.md`
- `content/wiki/NVIDIA-Quantum-X800-InfiniBand.md`
- `content/wiki/NVIDIA-Vera-Rubin-POD.md`
- `content/wiki/NVIDIA-Spectrum-6-SPX.md`
- `content/wiki/NVIDIA-Groq-3-LPX.md`

**Pages updated:**

- `content/wiki/NVIDIA-DGX.md`
- `content/wiki/NVIDIA-DGX-SuperPOD.md`
- `content/wiki/NVIDIA-DGX-BasePOD.md`
- `content/wiki/NVIDIA-DGX-B300.md`
- `content/wiki/NVIDIA-GB200-NVL72.md`
- `content/wiki/NVIDIA-GB300-NVL72.md`
- `content/wiki/NVIDIA-Spectrum-X.md`
- `content/wiki/NVIDIA-Quantum-InfiniBand.md`
- `content/wiki/NVIDIA-Enterprise-Reference-Architectures.md`
- `content/wiki/NVIDIA-Enterprise-AI-Factory.md`
- `content/wiki/NVIDIA-Vera-Rubin.md`
- `content/wiki/NVIDIA-CMX.md`
- `content/wiki/NVIDIA-STX.md`
- `content/wiki/NVIDIA-BlueField-DPU.md`
- `content/wiki/NVIDIA-BlueField-4.md`
- `content/wiki/NVIDIA-HGX.md`
- `content/wiki/NVIDIA-Mission-Control.md`
- `content/index.md`

---

## 2026-04-30 - Batch 101: RAPIDS, Spark RAPIDS, DGL, FLARE, Merlin, and Legate Core coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/next-practical-pre-batch101-20260430T171224Z`; local Git tag `codex-backup-pre-batch101-20260430T171224Z`

**Source URLs:** https://docs.nvidia.com/rapids/index.html, https://developer.nvidia.com/topics/ai/data-science/cuda-x-data-science-libraries, https://docs.rapids.ai/, https://docs.nvidia.com/spark-rapids/index.html, https://docs.nvidia.com/spark-rapids/user-guide/latest/index.html, https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/index.html, https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/overview.html, https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/rel-25-08.html, https://docs.nvidia.com/deeplearning/frameworks/dgl-release-notes/rel-25-10.html, https://docs.nvidia.com/physicsnemo/latest/physicsnemo/examples/dgl_to_pyg_migration.html, https://nvflare.readthedocs.io/en/main/flare_overview.html, https://nvflare.readthedocs.io/en/main/welcome.html, https://nvflare.readthedocs.io/en/main/release_notes/flare_272.html, https://developer.nvidia.com/blog/federated-learning-without-the-refactoring-overhead-using-nvidia-flare/, https://developer.nvidia.com/merlin, https://developer.nvidia.com/nvidia-merlin/nvtabular, https://nvidia-merlin.github.io/Merlin/stable/guide/recommender_system_guide.html, https://nvidia-merlin.github.io/NVTabular/stable/Introduction.html, https://developer.nvidia.com/legate, https://docs.nvidia.com/legate/latest/manual/index.html, https://docs.nvidia.com/legate/latest/manual/usage/running.html, https://docs.nvidia.com/cupynumeric/latest/

**Gap analysis summary:**

- Promoted RAPIDS from scattered library references into a canonical [[NVIDIA-RAPIDS]] umbrella page connected to cuDF, cuML, cuGraph, cuVS, cuCIM, Dask, Spark, CUDA, and AI Enterprise.
- Added one canonical [[RAPIDS-Accelerator-for-Apache-Spark]] page for the Spark plugin and user-guide surface instead of splitting deployment targets into separate pages.
- Added [[NVIDIA-DGL]] as a legacy/current-transition GNN page because NVIDIA's current DGL notes deprecate DGL containers after 25.08 and point new GNN work toward [[PyG]].
- Added [[NVIDIA-FLARE]], [[NVIDIA-Merlin]], and [[NVIDIA-Legate-Core]] as high-signal missing NVIDIA software pages for federated learning, recommender systems, and distributed Python/scientific computing.

**Pages created (6 total):**

- `content/wiki/NVIDIA-RAPIDS.md`
- `content/wiki/RAPIDS-Accelerator-for-Apache-Spark.md`
- `content/wiki/NVIDIA-DGL.md`
- `content/wiki/NVIDIA-FLARE.md`
- `content/wiki/NVIDIA-Merlin.md`
- `content/wiki/NVIDIA-Legate-Core.md`

**Pages updated:**

- `content/wiki/cuDF.md`
- `content/wiki/cuML.md`
- `content/wiki/cuGraph.md`
- `content/wiki/cuVS.md`
- `content/wiki/cuCIM.md`
- `content/wiki/Dask.md`
- `content/wiki/cuPyNumeric.md`
- `content/wiki/PyG.md`
- `content/wiki/PhysicsNeMo.md`
- `content/wiki/NVIDIA-Optimized-Frameworks.md`
- `content/wiki/PyTorch.md`
- `content/wiki/NGC.md`
- `content/wiki/NVIDIA-MONAI-Toolkit.md`
- `content/wiki/NVIDIA-Clara.md`
- `content/wiki/NVIDIA-AI-Enterprise.md`
- `content/wiki/NVIDIA-AI-Enterprise-Software.md`
- `content/wiki/NVIDIA-Certified-for-Cloudera.md`
- `content/index.md`

---

## 2026-04-29 - Overnight batch 100: PyG / PyTorch Geometric coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch100-pyg-20260429T170744Z`; local Git tag `codex-backup-overnight-pre-batch100-pyg-20260429T170744Z`

**Source URLs:** https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/index.html, https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/overview.html, https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/rel-26-04.html, https://docs.nvidia.com/deeplearning/frameworks/pyg-release-notes/running.html, https://docs.rapids.ai/api/cugraph/legacy/graph_support/pyg_support/, https://docs.nvidia.com/physicsnemo/latest/physicsnemo/examples/dgl_to_pyg_migration.html

**Gap analysis summary:**

- Found that the wiki only mentioned cuGraph-PyG inside [[cuGraph]] and did not have a canonical [[PyG]] page.
- Added one page for PyG / PyTorch Geometric rather than splitting the NVIDIA PyG overview, release notes, running guide, cuGraph integration, and PhysicsNeMo migration guide into separate pages.
- Captured the current NVIDIA PyG 26.04 container context, NGC image pattern, cuGraph `cugraph_pyg` integration, and PhysicsNeMo DGL-to-PyG backend direction.

**Pages created (1 total):**

- `content/wiki/PyG.md`

**Pages updated:**

- `content/wiki/cuGraph.md`
- `content/wiki/PyTorch.md`
- `content/wiki/NVIDIA-Optimized-Frameworks.md`
- `content/wiki/PhysicsNeMo.md`
- `content/wiki/NGC.md`
- `content/index.md`

---

## 2026-04-29 - Overnight batch 99: Nemotron 3 Ultra base model coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch99-20260429T131411Z`; local Git tag `codex-backup-overnight-pre-batch99-20260429T131411Z`

**Source URLs:** https://docs.nvidia.com/nemotron/nightly/usage-cookbook/Nemotron-3-Ultra-Base/README.html, https://nvidianews.nvidia.com/news/nvidia-debuts-nemotron-3-family-of-open-models, https://nvidianews.nvidia.com/news/nvidia-expands-open-model-families-to-power-the-next-wave-of-agentic-physical-and-healthcare-ai, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/ai-factory-overview.html

**Gap analysis summary:**

- Found that the wiki had Nemotron 3 Nano, Super, Omni, VoiceChat, and safety/speech/retrieval pages but no canonical page for Nemotron 3 Ultra.
- Added a cautious Ultra page because current NVIDIA materials identify Ultra as the large Nemotron 3 reasoning/base-model direction; the page explicitly notes that current Ultra docs describe a base checkpoint and forthcoming full release, not a ready production assistant.
- Connected Ultra to Nemotron, training/customization tools, NIM/inference context, Blackwell/NVFP4, and GB200 NVL72 benchmark context.

**Pages created (1 total):**

- `content/wiki/Nemotron-3-Ultra.md`

**Pages updated:**

- `content/wiki/Nemotron.md`
- `content/index.md`

---

## 2026-04-29 - Overnight batch 98: NIM deployment guides for WSL2 and GKE

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch98-20260429T131035Z`; local Git tag `codex-backup-overnight-pre-batch98-20260429T131035Z`

**Source URLs:** https://docs.nvidia.com/nim/wsl2/latest/index.html, https://docs.nvidia.com/nim/wsl2/latest/getting-started.html, https://docs.nvidia.com/nim/cloud/gke/latest/index.html, https://docs.nvidia.com/nim/cloud/gke/latest/overview.html, https://docs.nvidia.com/nim/cloud/gke/latest/hardware.html

**Gap analysis summary:**

- Found current NVIDIA deployment guides for NIM on WSL2 and NIM on Google Kubernetes Engine that were not represented as canonical wiki pages.
- Added one page per deployment guide/topic rather than splitting the WSL2 installer, port-forwarding, benchmarking, or GKE hardware table into separate pages.
- Connected the new pages to NIM, NIM LLM, NIM Operator, CUDA on WSL, Container Toolkit, GPU Operator, AI Workbench, cloud-native/Kubernetes, and AI Enterprise cloud deployment context.

**Pages created (2 total):**

- `content/wiki/NVIDIA-NIM-on-WSL2.md`
- `content/wiki/NVIDIA-NIM-on-GKE.md`

**Pages updated:**

- `content/wiki/NVIDIA-NIM.md`
- `content/wiki/NVIDIA-NIM-Operator.md`
- `content/wiki/NIM-for-Large-Language-Models.md`
- `content/wiki/CUDA-on-WSL.md`
- `content/wiki/NVIDIA-Container-Toolkit.md`
- `content/wiki/NVIDIA-AI-Enterprise-Cloud-Deployment.md`
- `content/index.md`

---

## 2026-04-29 - Overnight batch 97: Nemotron 3 VoiceChat model

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch97-20260429T130545Z`; local Git tag `codex-backup-overnight-pre-batch97-20260429T130545Z`

**Source URLs:** https://build.nvidia.com/nvidia/nemotron-voicechat/modelcard, https://build.nvidia.com/nvidia/nemotron-voicechat, https://developer.nvidia.com/blog/building-nvidia-nemotron-3-agents-for-reasoning-multimodal-rag-voice-and-safety/, https://developer.nvidia.com/nemotron-voicechat-early-access

**Gap analysis summary:**

- Found a durable NVIDIA-published Build model, `nvidia/nemotron-voicechat`, that was not represented as a canonical wiki page.
- Added one page for [[Nemotron-3-VoiceChat]] rather than creating separate pages for benchmark sections, early-access details, or Build variants.
- Connected the model to Nemotron, NIM, Speech NIM, Riva, ASR/TTS, ACE, Tokkio, and the model-family index.

**Pages created (1 total):**

- `content/wiki/Nemotron-3-VoiceChat.md`

**Pages updated:**

- `content/wiki/Nemotron.md`
- `content/wiki/NVIDIA-Speech-NIM-Microservices.md`
- `content/wiki/NVIDIA-ASR-NIM.md`
- `content/wiki/NVIDIA-TTS-NIM.md`
- `content/wiki/NVIDIA-Riva.md`
- `content/wiki/NVIDIA-NIM.md`
- `content/index.md`

---

## 2026-04-29 - Overnight batch 96: current CUDA specialty library refresh

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch96-20260429T130150Z`; local Git tag `codex-backup-overnight-pre-batch96-20260429T130150Z`

**Source URLs:** https://docs.nvidia.com/cuda/cupqc/index.html, https://docs.nvidia.com/cuda/cupqc/overview/features.html, https://docs.nvidia.com/cuda/cupqc/overview/requirements.html, https://docs.nvidia.com/cuda/cupqc/additional/release_notes.html, https://docs.nvidia.com/cuda/cudss/index.html, https://docs.nvidia.com/cuda/cudss/release_notes.html, https://docs.nvidia.com/cuda/cuequivariance/

**Gap analysis summary:**

- Found existing cuPQC, cuDSS, and cuEquivariance pages whose summaries lagged current NVIDIA docs.
- Refreshed cuPQC around the current SDK structure: cuPQC-PK for ML-KEM/ML-DSA and cuPQC-Hash for SHA-2/SHA-3/SHAKE/Poseidon2/Merkle operations.
- Refreshed cuDSS around current preview features, including batching, hybrid modes, MG/MGMN/MT execution, CUDA Graphs, deterministic mode, and v0.7.x release signals.
- Refreshed cuEquivariance around current segmented-polynomial/segmented-tensor-product terminology, package layout, PyTorch/JAX frontends, and CUDA 12/13 operation packages.
- Updated related index and NVIDIA Quantum wording without creating duplicate subpages for cuPQC-PK, cuPQC-Hash, or cuDSS feature guides.

**Pages created:** none

**Pages updated:**

- `content/wiki/cuPQC.md`
- `content/wiki/cuDSS.md`
- `content/wiki/cuEquivariance.md`
- `content/wiki/NVIDIA-Quantum.md`
- `content/index.md`

---

## 2026-04-29 - Overnight batch 95: cuFFTW FFTW-compatible cuFFT interface

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch95-20260429T125808Z`; local Git tag `codex-backup-overnight-pre-batch95-20260429T125808Z`

**Source URLs:** https://docs.nvidia.com/cuda/cufft/index.html, https://docs.nvidia.com/cuda/cufft/index.html#fftw-interface-to-cufft

**Gap analysis summary:**

- Found that the wiki had cuFFT, cuFFTDx, and cuFFTMp, while current NVIDIA cuFFT documentation says the cuFFT product consists of cuFFT and cuFFTW.
- Added a focused cuFFTW page because NVIDIA documents it as a distinct FFTW3-compatible interface layer for porting existing FFTW applications to NVIDIA GPUs.
- Connected cuFFTW to the existing cuFFT stack, NVPL FFT, CUDA, and Python/HPC math-library context without splitting the rest of the cuFFT manual into feature subpages.

**Pages created (1 total):**

- `content/wiki/cuFFTW.md`

**Pages updated:**

- `content/wiki/cuFFT.md` - linked cuFFTW as the FFTW-compatible cuFFT interface layer.
- `content/wiki/NVPL-FFT.md` - connected CPU-side FFTW-compatible NVPL FFT to the GPU-side cuFFTW path.
- `content/wiki/NVIDIA-CUDA.md` - connected cuFFTW into the CUDA library graph.
- `content/index.md` - updated total page count to 481 and indexed cuFFTW.

---

## 2026-04-29 - Overnight batch 94: cuBLASLt and cuBLASXt API coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch94-20260429T125446Z`; local Git tag `codex-backup-overnight-pre-batch94-20260429T125446Z`

**Source URLs:** https://docs.nvidia.com/cuda/cublas/index.html, https://docs.nvidia.com/cuda/cublas/index.html#using-the-cublaslt-api, https://docs.nvidia.com/cuda/cublas/index.html#using-the-cublasxt-api

**Gap analysis summary:**

- Found that [[cuBLAS]] and [[JAX]] already mentioned cuBLASLt/cuBLASXt but the wiki lacked canonical pages for those durable cuBLAS API families.
- Added separate pages because current NVIDIA cuBLAS documentation presents cuBLASLt and cuBLASXt as distinct API surfaces with different roles: programmable GEMM tuning and single-node multi-GPU BLAS3 execution.
- Connected the new pages to cuBLAS, CUDA, cuBLASMp/cuBLASDx, CUDA math-library users, and framework/inference pages where GEMM acceleration is relevant.

**Pages created (2 total):**

- `content/wiki/cuBLASLt.md`
- `content/wiki/cuBLASXt.md`

**Pages updated:**

- `content/wiki/cuBLAS.md` - converted cuBLASLt/cuBLASXt mentions into canonical wikilinks and added connections.
- `content/wiki/NVIDIA-CUDA.md` - connected cuBLASLt/cuBLASXt into the CUDA library graph.
- `content/wiki/JAX.md` - linked cuBLASLt from the XLA/GEMM connection.
- `content/index.md` - updated total page count to 480 and indexed the new pages.

---

## 2026-04-29 - Overnight batch 93: cuTENSOR multi-GPU and distributed tensor support

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch93-20260429T125110Z`; local Git tag `codex-backup-overnight-pre-batch93-20260429T125110Z`

**Source URLs:** https://docs.nvidia.com/cuda/cutensor/latest/index.html, https://docs.nvidia.com/cuda/cutensor/latest/user_guide_cutensorMg.html, https://docs.nvidia.com/cuda/cutensor/latest/user_guide_cutensorMp.html

**Gap analysis summary:**

- Found that [[cuTENSOR]] mentioned cuTENSORMp but the wiki lacked canonical pages for current cuTENSOR multi-GPU and multi-process support.
- Added separate pages for cuTENSORMg and cuTENSORMp because NVIDIA documents them as distinct current cuTENSOR topics with different process/distribution models.
- Connected the new pages to cuTENSOR, cuTensorNet, cuQuantum, HPC SDK, CUDA, and multi-GPU/multi-node communication context.

**Pages created (2 total):**

- `content/wiki/cuTENSORMg.md`
- `content/wiki/cuTENSORMp.md`

**Pages updated:**

- `content/wiki/cuTENSOR.md` - converted multi-GPU and multi-process tensor support into canonical wikilinks.
- `content/wiki/cuTensorNet.md` - linked adjacent cuTENSOR scale-out tensor support.
- `content/wiki/NVIDIA-HPC-SDK.md` - linked cuTENSOR scale-out libraries from the math-library list.
- `content/wiki/NVIDIA-CUDA.md` - connected cuTENSORMg/cuTENSORMp into the CUDA library graph.
- `content/index.md` - updated total page count to 478 and indexed the new pages.

---

## 2026-04-29 - Overnight batch 92: cuFFTMp and Fortran CUDA interfaces

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch92-20260429T124816Z`; local Git tag `codex-backup-overnight-pre-batch92-20260429T124816Z`

**Source URLs:** https://docs.nvidia.com/cuda/cufftmp/index.html, https://docs.nvidia.com/hpc-sdk/compilers/fortran-cuda-interfaces/frontmatter.html, https://docs.nvidia.com/hpc-sdk/compilers/fortran-cuda-interfaces/iface-introduction.html, https://docs.nvidia.com/hpc-sdk/index.html

**Gap analysis summary:**

- Found existing references to cuFFTMp and Fortran CUDA library interfaces without dedicated wiki pages.
- Added canonical pages for the distributed cuFFT multi-process library and NVIDIA's Fortran interfaces for CUDA libraries.
- Connected the new pages to HPC SDK, CUDA Fortran, OpenACC, CUDA math libraries, NVSHMEM, NVTX, nvmath-python, and the core CUDA page.

**Pages created (2 total):**

- `content/wiki/cuFFTMp.md`
- `content/wiki/NVIDIA-Fortran-CUDA-Interfaces.md`

**Pages updated:**

- `content/wiki/cuFFT.md` - converted cuFFTMp references into canonical wikilinks.
- `content/wiki/NVSHMEM.md` - linked cuFFTMp and Fortran interface coverage.
- `content/wiki/nvmath-python.md` - linked distributed FFT coverage.
- `content/wiki/NVIDIA-HPC-SDK.md` - linked cuFFTMp, NVTX, and Fortran CUDA interfaces.
- `content/wiki/CUDA-Fortran.md` - linked CUDA library interface documentation.
- `content/wiki/NVIDIA-HPC-Compilers.md` - linked Fortran CUDA library interfaces.
- `content/wiki/NVIDIA-OpenACC.md` - linked OpenACC host-data CUDA library usage.
- `content/wiki/NVIDIA-CUDA.md` - connected distributed FFT and Fortran interface coverage.
- `content/index.md` - updated total page count to 476 and indexed the new pages.

---

## 2026-04-29 - Overnight batch 91: NVIDIA HPC SDK and compiler programming models

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch91-20260429T124248Z`; local Git tag `codex-backup-overnight-pre-batch91-20260429T124248Z`

**Source URLs:** https://docs.nvidia.com/hpc-sdk/index.html, https://docs.nvidia.com/hpc-sdk/compilers/hpc-compilers-user-guide/index.html, https://docs.nvidia.com/hpc-sdk/compilers/hpc-compilers-ref-guide/index.html, https://docs.nvidia.com/hpc-sdk/compilers/cuda-fortran-prog-guide/index.html, https://docs.nvidia.com/hpc-sdk/compilers/openacc-gs/index.html

**Gap analysis summary:**

- Found multiple existing CUDA/library pages referencing NVIDIA HPC SDK concepts without canonical wiki pages for the SDK, compiler family, CUDA Fortran, NVIDIA's OpenACC implementation, or stdpar path.
- Added one page per durable NVIDIA HPC SDK topic while keeping standards such as OpenACC/stdpar scoped to NVIDIA's compiler implementation.
- Connected the new pages to CUDA, NVCC, libNVVM, NVPL, HPC-X, NGC, CUDA memory/compatibility concepts, and profiling tools.

**Pages created (5 total):**

- `content/wiki/NVIDIA-HPC-SDK.md`
- `content/wiki/NVIDIA-HPC-Compilers.md`
- `content/wiki/CUDA-Fortran.md`
- `content/wiki/NVIDIA-OpenACC.md`
- `content/wiki/NVIDIA-Stdpar.md`

**Pages updated:**

- `content/wiki/NVIDIA-CUDA.md` - linked HPC SDK compiler/programming-model paths into the CUDA compiler stack.
- `content/wiki/NVCC.md` - clarified that Fortran CUDA programming uses the HPC compiler path.
- `content/wiki/libNVVM.md` - connected compiler backend context to HPC SDK programming models.
- `content/wiki/NVPL.md` - linked CPU math libraries to the HPC SDK hub.
- `content/wiki/NVIDIA-HPC-X.md` - linked HPC-X MPI into the HPC SDK communication-library context.
- `content/wiki/NGC.md` - linked HPC SDK container/distribution context.
- `content/index.md` - updated total page count to 474 and indexed the new pages.

---

## 2026-04-29 - Overnight batch 90: cuQuantum component libraries

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch90-20260429T123849Z`; local Git tag `codex-backup-overnight-pre-batch90-20260429T123849Z`

**Source URLs:** https://docs.nvidia.com/cuda/cuquantum/latest/, https://docs.nvidia.com/cuda/cuquantum/latest/cutensornet/index.html, https://docs.nvidia.com/cuda/cuquantum/latest/cudensitymat/index.html, https://docs.nvidia.com/cuda/cuquantum/latest/cupauliprop/index.html, https://docs.nvidia.com/cuda/cuquantum/latest/custabilizer/index.html, https://docs.nvidia.com/cuda/cuquantum/latest/appliance/overview.html

**Gap analysis summary:**

- Found that the wiki had [[cuQuantum]] and [[cuStateVec]], but current NVIDIA cuQuantum docs list distinct durable component libraries for tensor networks, analog quantum dynamics, Pauli propagation, stabilizer simulation, and the NGC appliance.
- Added one page per current cuQuantum component/appliance topic instead of splitting examples or API subsections into extra pages.
- Connected the new pages to NVIDIA Quantum, CUDA-Q, CUDA-QX, cuTENSOR, NGC/container infrastructure, NCCL, and the existing cuStateVec/cuQuantum pages.

**Pages created (5 total):**

- `content/wiki/cuTensorNet.md`
- `content/wiki/cuDensityMat.md`
- `content/wiki/cuPauliProp.md`
- `content/wiki/cuStabilizer.md`
- `content/wiki/cuQuantum-Appliance.md`

**Pages updated:**

- `content/wiki/cuQuantum.md` - converted component references into canonical wikilinks and added the appliance.
- `content/wiki/cuStateVec.md` - refreshed sources and linked sibling cuQuantum component pages.
- `content/wiki/NVIDIA-Quantum.md` - expanded the cuQuantum solution map.
- `content/wiki/CUDA-Q.md` - linked CUDA-Q simulation backends to current cuQuantum components.
- `content/wiki/CUDA-QX.md` - linked QEC/solver context to current cuQuantum libraries.
- `content/wiki/cuTENSOR.md` - connected tensor algebra prerequisites to cuTensorNet and cuDensityMat.
- `content/wiki/NGC.md` - linked the cuQuantum Appliance container workflow.
- `content/index.md` - updated total page count to 469 and indexed the new pages.

---

## 2026-04-29 - Overnight batch 89: Nemotron ASR Streaming

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch89-20260429T123423Z`; local Git tag `codex-backup-overnight-pre-batch89-20260429T123423Z`

**Source URLs:** https://build.nvidia.com/nvidia/nemotron-asr-streaming/modelcard, https://build.nvidia.com/nvidia/nemotron-asr-streaming, https://huggingface.co/nvidia/nemotron-speech-streaming-en-0.6b

**Gap analysis summary:**

- Added a canonical page for the current NVIDIA-published Nemotron ASR Streaming model after finding a Build NVIDIA model card and no dedicated wiki page.
- Kept it separate from the ASR NIM service page because this page covers the specific 600M-parameter English streaming ASR model and its cache-aware FastConformer-RNNT architecture.
- Connected the model to ASR NIM, Speech NIM Microservices, Riva, Nemotron, NeMo, Tokkio/ACE voice workflows, audio cleanup/enhancement NIMs, Triton, and TensorRT.

**Pages created (1 total):**

- `content/wiki/Nemotron-ASR-Streaming.md`

**Pages updated:**

- `content/wiki/NVIDIA-ASR-NIM.md` - linked the model-specific ASR page from ASR NIM current scope.
- `content/wiki/NVIDIA-Speech-NIM-Microservices.md` - connected the model to the broader Speech NIM surface.
- `content/wiki/NVIDIA-Riva.md` - linked the current Riva/Speech NIM streaming ASR model.
- `content/wiki/Nemotron.md` - linked Nemotron ASR Streaming from the speech-model context.
- `content/wiki/NVIDIA-NIM.md` - connected the model into the speech/media NIM graph.
- `content/index.md` - updated total page count to 464 and indexed the new page.

---

## 2026-04-29 - Overnight batch 88: Nemotron 3 Content Safety

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch88-20260429T123103Z`; local Git tag `codex-backup-overnight-pre-batch88-20260429T123103Z`

**Source URLs:** https://build.nvidia.com/nvidia/nemotron-3-content-safety/modelcard, https://build.nvidia.com/nvidia/nemotron-3-content-safety, https://huggingface.co/nvidia/Nemotron-3-Content-Safety, https://huggingface.co/blog/nvidia/nemotron-3-content-safety

**Gap analysis summary:**

- Added a canonical page for the current NVIDIA-published Nemotron 3 Content Safety model after finding Build NVIDIA and NVIDIA Hugging Face model pages but no dedicated wiki page.
- Kept it distinct from the existing Nemotron Content Safety Reasoning 4B page because this model is the multimodal/multilingual prompt-image-response moderator rather than the reasoning/custom-policy classifier.
- Connected the page to Nemotron, NemoGuard NIMs, NeMo Guardrails, Multimodal Safety NIM, VLM NIMs, NIM, AI Enterprise, and adjacent content-safety guard models.

**Pages created (1 total):**

- `content/wiki/Nemotron-3-Content-Safety.md`

**Pages updated:**

- `content/wiki/NVIDIA-NemoGuard-NIMs.md` - added the new multimodal content-safety model to current scope and connections.
- `content/wiki/NeMo-Guardrails.md` - linked the model from guardrail safety-model context.
- `content/wiki/NIM-for-Multimodal-Safety.md` - connected the model-specific safety page to the multimodal safety NIM family.
- `content/wiki/NIM-for-Vision-Language-Models.md` - linked the model as a safety layer for VLM applications.
- `content/wiki/NVIDIA-NIM.md` - connected the model into the NIM safety and guardrails graph.
- `content/wiki/Nemotron.md` - converted existing Nemotron 3 Content Safety references into canonical wikilinks.
- `content/index.md` - updated total page count to 463 and indexed the new page.

---

## 2026-04-29 - Overnight batch 87: Llama Nemotron text retrieval models

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch87-20260429T122609Z`; local Git tag `codex-backup-overnight-pre-batch87-20260429T122609Z`

**Source URLs:** https://build.nvidia.com/nvidia/llama-nemotron-embed-1b-v2/modelcard, https://build.nvidia.com/nvidia/llama-nemotron-embed-1b-v2, https://huggingface.co/nvidia/llama-nemotron-embed-1b-v2, https://build.nvidia.com/nvidia/llama-nemotron-rerank-1b-v2/modelcard, https://build.nvidia.com/nvidia/llama-nemotron-rerank-1b-v2, https://huggingface.co/nvidia/llama-nemotron-rerank-1b-v2

**Gap analysis summary:**

- Added canonical pages for the current NVIDIA-published text embedding and text reranking Llama Nemotron 1B v2 models after finding current Build NVIDIA model cards and no existing wiki pages.
- Kept the text models separate from the visual-document VL pages because they are distinct model cards and serve distinct text retrieval/reranking workflows.
- Connected the pair to NeMo Retriever, Embedding/Reranking NIMs, Nemotron, NeMo Customizer, NIM, RAG blueprints, AI-Q, AI Data Platform, cuVS, TensorRT, and Triton.

**Pages created (2 total):**

- `content/wiki/Llama-Nemotron-Embed-1B-v2.md`
- `content/wiki/Llama-Nemotron-Rerank-1B-v2.md`

**Pages updated:**

- `content/wiki/NeMo-Retriever-Embedding-NIM.md` - linked the text embedding model alongside the VL embedding model.
- `content/wiki/NeMo-Retriever-Reranking-NIM.md` - linked the text reranker alongside the VL reranker.
- `content/wiki/NeMo-Retriever.md` - added model-specific text retrieval and reranking coverage.
- `content/wiki/NVIDIA-NIM.md` - connected the text model pair into the NIM/Retriever graph.
- `content/wiki/Nemotron.md` - linked the Llama Nemotron text retrieval model pair.
- `content/wiki/NeMo-Customizer.md` - linked Llama Nemotron Embed 1B v2 from the embedding customization context.
- `content/wiki/Llama-Nemotron-Embed-VL-1B-v2.md` and `content/wiki/Llama-Nemotron-Rerank-VL-1B-v2.md` - cross-linked text and visual-document retrieval counterparts.
- `content/wiki/NVIDIA-RAG-Blueprint.md` - added text retrieval/reranking model links beside existing multimodal retrieval coverage.
- `content/index.md` - updated total page count to 462 and indexed the new pages.

---

## 2026-04-29 - Overnight batch 86: Llama Nemotron Embed VL 1B v2

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch86-20260429T122059Z`; local Git tag `codex-backup-overnight-pre-batch86-20260429T122059Z`

**Source URLs:** https://build.nvidia.com/nvidia/llama-nemotron-embed-vl-1b-v2/modelcard, https://build.nvidia.com/nvidia/llama-nemotron-embed-vl-1b-v2, https://huggingface.co/nvidia/llama-nemotron-embed-vl-1b-v2

**Gap analysis summary:**

- Added a canonical page for the NVIDIA-published llama-nemotron-embed-vl-1b-v2 model after finding current Build NVIDIA and NVIDIA Hugging Face model pages and no existing wiki page.
- Kept this as a model-specific complement to the broader NeMo Retriever Embedding NIM page instead of duplicating service-level docs.
- Connected the model to its companion multimodal reranker, NeMo Retriever, NIM, VLM/EAGLE context, Nemotron, RAG blueprints, AI Data Platform, TensorRT, and Triton.

**Pages created (1 total):**

- `content/wiki/Llama-Nemotron-Embed-VL-1B-v2.md`

**Pages updated:**

- `content/wiki/Llama-Nemotron-Rerank-VL-1B-v2.md` - linked the companion embedding model used before multimodal reranking.
- `content/wiki/NeMo-Retriever-Embedding-NIM.md` - connected the service-level embedding page to the specific Build NVIDIA model.
- `content/wiki/NeMo-Retriever.md` - added model-specific multimodal document retrieval context.
- `content/wiki/NIM-for-Vision-Language-Models.md` - linked the model as an adjacent VLM-style retrieval embedding surface.
- `content/wiki/NVIDIA-NIM.md` - connected the model into the NIM/Retriever model graph.
- `content/wiki/NVIDIA-RAG-Blueprint.md` - replaced the raw model slug with a canonical wikilink and added rerank pairing.
- `content/wiki/Nemotron.md` - linked Llama Nemotron embedding/reranking retrieval coverage.
- `content/wiki/NVIDIA-EAGLE.md` - added retrieval-model connections for Eagle-style VLM architecture context.
- `content/index.md` - updated total page count to 460 and indexed the new page.

---

## 2026-04-29 - Overnight batch 85: Llama Nemotron Rerank VL 1B v2

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch85-20260429T121645Z`; local Git tag `codex-backup-overnight-pre-batch85-20260429T121645Z`

**Source URLs:** https://build.nvidia.com/nvidia/llama-nemotron-rerank-vl-1b-v2/modelcard, https://build.nvidia.com/nvidia/llama-nemotron-rerank-vl-1b-v2, https://huggingface.co/nvidia/llama-nemotron-rerank-vl-1b-v2

**Gap analysis summary:**

- Added a canonical page for the NVIDIA-published llama-nemotron-rerank-vl-1b-v2 model after finding a current Build NVIDIA model card and no existing wiki page.
- Kept this as a model-specific complement to the broader NeMo Retriever Reranking NIM page rather than duplicating the service-level docs.
- Connected the model to NeMo Retriever, reranking/embedding NIMs, VLM/EAGLE context, Nemotron, document parsing, RAG blueprints, AI Data Platform, TensorRT, and Triton.

**Pages created (1 total):**

- `content/wiki/Llama-Nemotron-Rerank-VL-1B-v2.md`

**Pages updated:**

- `content/wiki/NeMo-Retriever-Reranking-NIM.md` - linked the model-specific multimodal reranker.
- `content/wiki/NeMo-Retriever.md` - connected visual document reranking to Retriever capabilities.
- `content/wiki/NIM-for-Vision-Language-Models.md` - linked the VLM-style reranker.
- `content/wiki/NVIDIA-NIM.md` - linked the Build NVIDIA multimodal reranking model.
- `content/index.md` - updated total page count to 459 and indexed the new page.

---

## 2026-04-29 - Overnight batch 84: NVIDIA Ising

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch84-20260429T121439Z`; local Git tag `codex-backup-overnight-pre-batch84-20260429T121439Z`

**Source URLs:** https://www.nvidia.com/en-us/solutions/quantum-computing/ising/, https://developer.nvidia.com/blog/nvidia-ising-introduces-ai-powered-workflows-to-build-fault-tolerant-quantum-systems/, https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Launches-Ising-the-Worlds-First-Open-AI-Models-to-Accelerate-the-Path-to-Useful-Quantum-Computers/default.aspx

**Gap analysis summary:**

- Added a family-level NVIDIA Ising page after creating individual pages for Ising Calibration and Ising Decoding and finding no queryable hub for the overall NVIDIA model family.
- Kept the hub concise and linked to the existing child pages instead of duplicating model-card details.
- Connected NVIDIA Ising to NVIDIA Quantum, CUDA-Q, CUDA-QX, CUDA-Q Realtime, NVQLink, cuQuantum, NIM, and NVAQC context.

**Pages created (1 total):**

- `content/wiki/NVIDIA-Ising.md`

**Pages updated:**

- `content/wiki/Ising-Calibration-1-35B-A3B.md` and `content/wiki/Ising-Decoding.md` - linked back to the family hub.
- `content/wiki/NVIDIA-Quantum.md` - linked Ising as a current quantum AI model family.
- `content/index.md` - updated total page count to 458 and indexed the new hub.

---

## 2026-04-29 - Overnight batch 83: Ising Decoding

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch83-20260429T121211Z`; local Git tag `codex-backup-overnight-pre-batch83-20260429T121211Z`

**Source URLs:** https://www.nvidia.com/en-us/solutions/quantum-computing/ising/, https://developer.nvidia.com/blog/nvidia-ising-introduces-ai-powered-workflows-to-build-fault-tolerant-quantum-systems/, https://github.com/NVIDIA/Ising-Decoding, https://huggingface.co/nvidia/Ising-Decoder-SurfaceCode-1-Fast, https://huggingface.co/nvidia/Ising-Decoder-SurfaceCode-1-Accurate

**Gap analysis summary:**

- Added a canonical Ising Decoding page after finding NVIDIA Ising, technical blog, GitHub training framework, and Hugging Face model cards for Fast and Accurate variants with no existing wiki page.
- Combined Fast and Accurate checkpoints into one page because they are variants of the same NVIDIA Ising Decoding model domain, avoiding duplicate wiki pages for one conceptual topic.
- Connected Ising Decoding to NVIDIA Quantum, CUDA-QX, CUDA-Q Realtime, NVQLink, Ising Calibration, cuQuantum, PyTorch, and NVAQC context.

**Pages created (1 total):**

- `content/wiki/Ising-Decoding.md`

**Pages updated:**

- `content/wiki/Ising-Calibration-1-35B-A3B.md` - linked the sibling Ising model domain.
- `content/wiki/NVIDIA-Quantum.md`, `content/wiki/CUDA-QX.md`, `content/wiki/CUDA-Q-Realtime.md`, and `content/wiki/NVIDIA-NVQLink.md` - connected QEC/realtime decoding paths.
- `content/index.md` - updated total page count to 457 and indexed the new page.

---

## 2026-04-29 - Overnight batch 82: Ising Calibration 1 35B A3B

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch82-20260429T120827Z`; local Git tag `codex-backup-overnight-pre-batch82-20260429T120827Z`

**Source URLs:** https://build.nvidia.com/nvidia/ising-calibration-1-35b-a3b/modelcard, https://build.nvidia.com/nvidia/ising-calibration-1-35b-a3b, https://huggingface.co/nvidia/Ising-Calibration-1-35B-A3B

**Gap analysis summary:**

- Added a canonical page for the NVIDIA-published Ising Calibration 1 35B A3B model after finding a current Build NVIDIA model card and no existing wiki page.
- Treated this as a durable NVIDIA-authored model entry, not as a generic build-card scrape; skipped deprecated/partner build entries and kept the page scoped to the specific NVIDIA model card.
- Connected the model to NVIDIA Quantum, CUDA-Q, NVQLink, CUDA-QX, NIM, VLM NIM context, Quantum Cloud, and NVAQC.

**Pages created (1 total):**

- `content/wiki/Ising-Calibration-1-35B-A3B.md`

**Pages updated:**

- `content/wiki/NVIDIA-Quantum.md` - connected the new Ising quantum calibration model.
- `content/wiki/NIM-for-Vision-Language-Models.md` - linked the domain-specific VLM endpoint.
- `content/wiki/NVIDIA-NIM.md` - linked the Build NVIDIA/NIM endpoint.
- `content/index.md` - updated total page count to 456 and indexed the new page.

---

## 2026-04-29 - Overnight batch 81: ComputeEval

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch81-20260429T120542Z`; local Git tag `codex-backup-overnight-pre-batch81-20260429T120542Z`

**Source URLs:** https://github.com/NVIDIA/compute-eval, https://developer.nvidia.com/blog/announcing-computeeval-an-open-source-framework-for-evaluating-llms-on-cuda/, https://developer.nvidia.com/blog/benchmarking-llms-on-ai-generated-cuda-code-with-computeeval-2025-2/

**Gap analysis summary:**

- Added a canonical ComputeEval page after Nsight Copilot sourcing showed NVIDIA uses ComputeEval to benchmark CUDA task proficiency and no existing wiki page covered it.
- Kept benchmark releases, model score tables, and individual LLM result rows inside the single ComputeEval page rather than creating per-release or per-model pages.
- Connected ComputeEval to Nsight Copilot, CUDA, CCCL/CUDA libraries, NVTX region timing, CUPTI profiling, Nsight Compute `ncu` profiling, and NIM-hosted model evaluation.

**Pages created (1 total):**

- `content/wiki/ComputeEval.md`

**Pages updated:**

- `content/wiki/Nsight-Copilot.md` - linked ComputeEval as the CUDA task proficiency benchmark.
- `content/wiki/Nsight-Compute.md`, `content/wiki/CUPTI.md`, and `content/wiki/NVTX.md` - connected profiler and annotation paths used by ComputeEval.
- `content/wiki/NVIDIA-NIM.md` - linked ComputeEval to NIM-hosted model evaluation.
- `content/index.md` - updated total page count to 455 and indexed the new page.

---

## 2026-04-29 - Overnight batch 80: Nsight Copilot

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch80-20260429T120252Z`; local Git tag `codex-backup-overnight-pre-batch80-20260429T120252Z`

**Source URLs:** https://developer.nvidia.com/nsight-copilot, https://developer.nvidia.com/tools-overview/nsight-compute/get-started

**Gap analysis summary:**

- Added a canonical Nsight Copilot page after finding a current NVIDIA developer page and current Nsight Compute 2026.1 download page coverage with no existing wiki page.
- Kept the scope to the durable NVIDIA tool rather than creating separate pages for underlying autocomplete models, beta signup paths, or every related forum/build surface.
- Connected Nsight Copilot to Nsight Developer Tools, Nsight Compute, Nsight Visual Studio Code Edition, NIM, CUDA, PyTorch-to-CUDA migration context, and developer-program access.

**Pages created (1 total):**

- `content/wiki/Nsight-Copilot.md`

**Pages updated:**

- `content/wiki/Nsight-Developer-Tools.md` - promoted Nsight Copilot from future gap candidate to linked page.
- `content/wiki/Nsight-Compute.md` - connected the 2026.1 preview integration.
- `content/wiki/Nsight-Visual-Studio-Code-Edition.md` - connected the VS Code assistant path.
- `content/wiki/NVIDIA-NIM.md` - linked Nsight Copilot as a NIM-powered developer-tool assistant.
- `content/index.md` - updated total page count to 454 and indexed the new page.

---

## 2026-04-29 - Overnight batch 79: Compute Sanitizer API refresh

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch79-20260429T115931Z`; local Git tag `codex-backup-overnight-pre-batch79-20260429T115931Z`

**Source URLs:** https://docs.nvidia.com/compute-sanitizer/, https://docs.nvidia.com/compute-sanitizer/ComputeSanitizer/index.html, https://docs.nvidia.com/compute-sanitizer/SanitizerApiGuide/index.html, https://docs.nvidia.com/compute-sanitizer/SanitizerNvtxGuide/index.html

**Gap analysis summary:**

- Refreshed the existing Compute Sanitizer page after finding current NVIDIA docs for the tool, Compute Sanitizer API, Sanitizer API reference, and NVTX Memory API under the same product documentation set.
- Kept Compute Sanitizer API coverage inside `content/wiki/Compute-Sanitizer.md` instead of creating a duplicate API page, matching the current NVIDIA documentation structure and the one-topic-per-page wiki rule.
- Added current coverage for memcheck, racecheck, initcheck, synccheck, CUDA API error reporting, coredumps, CI-friendly options, custom sanitizer/tracing APIs, and NVTX memory metadata.

**Pages created (0 total):**

- None.

**Pages updated:**

- `content/wiki/Compute-Sanitizer.md` - refreshed current tool and API coverage.
- `content/wiki/Nsight-Developer-Tools.md` - clarified that Compute Sanitizer API belongs in the existing Compute Sanitizer page.
- `content/index.md` - updated the Compute Sanitizer entry without changing the total page count.

---

## 2026-04-29 - Overnight batch 78: NVTX

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch78-20260429T115704Z`; local Git tag `codex-backup-overnight-pre-batch78-20260429T115704Z`

**Source URLs:** https://nvidia.github.io/NVTX/, https://nvidia.github.io/NVTX/doxygen-c/html/index.html, https://nvidia.github.io/NVTX/python/

**Gap analysis summary:**

- Added a canonical NVTX page after finding current NVIDIA GitHub Pages documentation and no existing wiki page.
- Kept C/C++ header-only v3 usage, Python package usage, markers, ranges, resource naming/tracking, supported tools, CUDA Toolkit distribution, platform limits, and GPU-code limitation in one page.
- Connected NVTX to Nsight Developer Tools, Nsight Systems, Nsight Compute, Nsight Graphics, CUPTI, CUDA, Nsight Python, and JupyterLab profiling context.

**Pages created (1 total):**

- `content/wiki/NVTX.md`

**Pages updated:**

- `content/wiki/Nsight-Developer-Tools.md` - promoted NVTX from future gap candidate to linked page.
- `content/wiki/Nsight-Systems.md`, `content/wiki/Nsight-Compute.md`, and `content/wiki/Nsight-Graphics.md` - linked profiler support for NVTX ranges.
- `content/wiki/CUPTI.md` - connected CUPTI tracing support for NVTX calls.
- `content/index.md` - updated total page count to 453 and indexed the new page.

---

## 2026-04-29 - Overnight batch 77: Nsight JupyterLab Extension

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch77-20260429T115417Z`; local Git tag `codex-backup-overnight-pre-batch77-20260429T115417Z`

**Source URLs:** https://developer.nvidia.com/tools-overview/nsight-jupyterlab, https://docs.nvidia.com/nsight-systems/UserGuide/#profiling-within-jupyterlab, https://developer.nvidia.com/tools-overview/nsight-compute/get-started, https://pypi.org/project/jupyterlab-nvidia-nsight/

**Gap analysis summary:**

- Added a canonical Nsight JupyterLab Extension page after finding current NVIDIA developer, Nsight Systems, and Nsight Compute references with no existing wiki page.
- Kept JupyterLab cell profiling, Nsight Systems and Nsight Compute integration, profiler GUI-in-notebook behavior, magic commands, and PyPI installation in one page.
- Connected the page to Nsight Developer Tools, Nsight Systems, Nsight Compute, Nsight Python, CUDA Python, CUPTI, CUDA, and Developer Program context.

**Pages created (1 total):**

- `content/wiki/Nsight-JupyterLab-Extension.md`

**Pages updated:**

- `content/wiki/Nsight-Developer-Tools.md` - promoted the JupyterLab extension from future gap candidate to linked page.
- `content/wiki/Nsight-Systems.md`, `content/wiki/Nsight-Compute.md`, and `content/wiki/Nsight-Python.md` - connected notebook profiling workflows.
- `content/index.md` - updated total page count to 452 and indexed the new page.

---

## 2026-04-29 - Overnight batch 76: Nsight Developer Tools

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch76-20260429T115205Z`; local Git tag `codex-backup-overnight-pre-batch76-20260429T115205Z`

**Source URLs:** https://docs.nvidia.com/nsight-developer-tools/index.html, https://developer.nvidia.com/tools-overview, https://developer.nvidia.com/tools-tutorials

**Gap analysis summary:**

- Added a canonical suite-level Nsight Developer Tools page after finding current NVIDIA docs and overview pages with no existing wiki page.
- Kept this as a hub that routes users to the individual Nsight pages instead of duplicating product details already covered elsewhere.
- Noted current NVIDIA overview items that remain future gap candidates: Nsight Copilot, Nsight Tools JupyterLab Extension, NVTX, Compute Sanitizer API, and legacy-tool pages.

**Pages created (1 total):**

- `content/wiki/Nsight-Developer-Tools.md`

**Pages updated:**

- Existing Nsight tool pages were updated with a backlink to `[[Nsight-Developer-Tools]]`.
- `content/index.md` - updated total page count to 451 and indexed the new hub page.

---

## 2026-04-29 - Overnight batch 75: Nsight Cloud

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch75-20260429T114938Z`; local Git tag `codex-backup-overnight-pre-batch75-20260429T114938Z`

**Source URLs:** https://developer.nvidia.com/nsight-cloud, https://docs.nvidia.com/nsight-systems/UserGuide/#profiling-services-in-the-cloud, https://docs.nvidia.com/nsight-developer-tools/index.html, https://github.com/NVIDIA/cloud-native-stack

**Gap analysis summary:**

- Added a canonical Nsight Cloud page after finding NVIDIA's current Nsight Cloud product page and Nsight Systems cloud/Kubernetes profiling docs with no existing wiki page.
- Folded Nsight Operator, Nsight Injector, Nsight Coordinator, and Nsight Streamer into the single Nsight Cloud page because the current public NVIDIA page treats them as components of Nsight Cloud rather than separate docs pages.
- Connected Nsight Cloud to Nsight Systems, NGC, NVIDIA Cloud Native Technologies, GPU Operator, Network Operator, Container Toolkit, and Developer Program context.

**Pages created (1 total):**

- `content/wiki/Nsight-Cloud.md`

**Pages updated:**

- `content/wiki/Nsight-Systems.md` - connected cloud/Kubernetes sidecar profiling to Nsight Cloud.
- `content/wiki/NGC.md` - connected NGC collections, containers, and Helm charts to Nsight Cloud distribution.
- `content/wiki/NVIDIA-GPU-Operator.md` and `content/wiki/NVIDIA-Cloud-Native-Technologies.md` - linked Kubernetes GPU infrastructure to cloud-native profiling.
- `content/index.md` - updated total page count to 450 and indexed the new page.

---

## 2026-04-29 - Overnight batch 74: Nsight Integration

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch74-20260429T114645Z`; local Git tag `codex-backup-overnight-pre-batch74-20260429T114645Z`

**Source URLs:** https://docs.nvidia.com/nsight-vs-integration/index.html, https://docs.nvidia.com/nsight-vs-integration/getting-started/index.html, https://docs.nvidia.com/nsight-vs-integration/release-notes/index.html, https://docs.nvidia.com/nsight-developer-tools/index.html

**Gap analysis summary:**

- Added a canonical Nsight Integration page after finding current NVIDIA 2026.1 docs and no existing wiki page.
- Kept Visual Studio extension behavior, standalone tool discovery, Nsight menu launch flow, project-property propagation, VSE migration context, release-note support changes, and Visual Studio 2026 support in one page.
- Connected Integration to Nsight Visual Studio Edition, Nsight Compute, Nsight Graphics, Nsight Systems, VS Code Edition, CUDA, and Developer Program context.

**Pages created (1 total):**

- `content/wiki/Nsight-Integration.md`

**Pages updated:**

- `content/wiki/Nsight-Visual-Studio-Edition.md` - clarified the relationship between VSE and Integration.
- `content/wiki/Nsight-Compute.md`, `content/wiki/Nsight-Graphics.md`, and `content/wiki/Nsight-Systems.md` - linked standalone tools back to Visual Studio Nsight Integration.
- `content/index.md` - updated total page count to 449 and indexed the new page.

---

## 2026-04-29 - Overnight batch 73: Nsight Visual Studio Code Edition

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch73-20260429T114324Z`; local Git tag `codex-backup-overnight-pre-batch73-20260429T114324Z`

**Source URLs:** https://docs.nvidia.com/nsight-visual-studio-code-edition/latest/introduction/index.html, https://docs.nvidia.com/nsight-visual-studio-code-edition/latest/install-setup/index.html, https://docs.nvidia.com/nsight-visual-studio-code-edition/latest/cuda-debugger/index.html, https://docs.nvidia.com/nsight-visual-studio-code-edition/latest/cuda-control-gpu-execution/index.html, https://docs.nvidia.com/nsight-visual-studio-code-edition/latest/cuda-inspect-state/index.html, https://docs.nvidia.com/nsight-developer-tools/index.html

**Gap analysis summary:**

- Added a canonical Nsight Visual Studio Code Edition page after finding current NVIDIA `latest` documentation and no existing wiki page.
- Kept introduction, setup, local/remote debugging, CUDA debugger walkthroughs, GPU breakpoints, CUDA debugger views, WSL/Remote-SSH/container context, and cuda-gdbserver/QNX notes folded into one page.
- Connected VS Code Edition to Visual Studio Edition, CUDA-GDB, Compute Sanitizer, Nsight Compute, Nsight Systems, NVCC, CUDA-on-WSL, and the Developer Program context.

**Pages created (1 total):**

- `content/wiki/Nsight-Visual-Studio-Code-Edition.md`

**Pages updated:**

- `content/wiki/Nsight-Visual-Studio-Edition.md` - clarified Visual Studio versus VS Code Nsight workflows.
- `content/wiki/CUDA-GDB.md` - connected command-line and remote CUDA debugging context to Nsight VSCE.
- `content/wiki/Nsight-Compute.md` and `content/wiki/Nsight-Systems.md` - linked profiling workflows to the VS Code debugger path.
- `content/index.md` - updated total page count to 448 and indexed the new page.

---

## 2026-04-29 - Overnight batch 72: Nsight Perf SDK

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch72-20260429T114140Z`; local Git tag `codex-backup-overnight-pre-batch72-20260429T114140Z`

**Source URLs:** https://developer.nvidia.com/nsight-perf-sdk, https://developer.nvidia.com/nsight-perfsdk/getting-started/release-note-v2025.5, https://developer.nvidia.com/perfworks, https://docs.nvidia.com/nsight-developer-tools/index.html

**Gap analysis summary:**

- Added a canonical page for Nsight Perf SDK after finding current NVIDIA developer docs and no existing wiki page.
- Kept realtime HUD, GPU Periodic Sampler, timeline viewer, HTML report generation, in-application metrics, CI/CD perf gates, release notes, limitations, and PerfWorks replacement context folded into one page.
- Connected Perf SDK to Nsight Graphics, Nsight Systems, Nsight Aftermath SDK, RTX, Ampere/Blackwell architecture context, and Developer Program support.

**Pages created (1 total):**

- `content/wiki/Nsight-Perf-SDK.md`

**Pages updated:**

- `content/wiki/Nsight-Graphics.md` - connected Graphics profiling workflows to Perf SDK.
- `content/wiki/NVIDIA-RTX.md` - connected RTX graphics performance metrics to Perf SDK.
- `content/index.md` - updated total page count to 447 and indexed the new page.

---

## 2026-04-29 - Overnight batch 71: Nsight Aftermath SDK

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch71-20260429T113955Z`; local Git tag `codex-backup-overnight-pre-batch71-20260429T113955Z`

**Source URLs:** https://developer.nvidia.com/nvidia-aftermath, https://developer.nvidia.com/nsight-aftermath/getting-started, https://docs.nvidia.com/nsight-aftermath/SDK/index.html, https://docs.nvidia.com/nsight-aftermath/ReleaseNotes/index.html

**Gap analysis summary:**

- Added a canonical page for Nsight Aftermath SDK after finding current NVIDIA docs and no existing wiki page.
- Kept GPU crash dump creation/analysis, crash dump monitor/viewer, SDK code samples, event markers, release notes, limitations, system requirements, and graphics API coverage folded into one page.
- Connected Aftermath to Nsight Graphics, Nsight Systems, RTX, modern GPU architecture context, and Developer Program support. Kept it separate from Nsight Graphics because NVIDIA lists it as a separate SDK/product.

**Pages created (1 total):**

- `content/wiki/Nsight-Aftermath-SDK.md`

**Pages updated:**

- `content/wiki/Nsight-Graphics.md` - connected graphics crash dump inspection to Aftermath.
- `content/wiki/NVIDIA-RTX.md` - connected RTX graphics crash diagnosis to Aftermath.
- `content/index.md` - updated total page count to 446 and indexed the new page.

---

## 2026-04-29 - Overnight batch 70: Nsight Graphics

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch70-20260429T113737Z`; local Git tag `codex-backup-overnight-pre-batch70-20260429T113737Z`

**Source URLs:** https://developer.nvidia.com/nsight-graphics/get-started, https://docs.nvidia.com/nsight-graphics/ReleaseNotes/index.html, https://docs.nvidia.com/nsight-developer-tools/index.html

**Gap analysis summary:**

- Added a canonical page for Nsight Graphics after finding current 2026.1 NVIDIA docs and no existing wiki page.
- Kept Graphics Capture, GPU Trace, shader profiler/debugger, GPU crash dump inspection, SDK interfaces, release notes, system requirements, DRIVE, Jetson, tutorials, and feature lists folded into one page.
- Connected Nsight Graphics to the Nsight suite, RTX/ray tracing, DRIVE OS, JetPack/Jetson, Developer Program, and CloudXR context. Left Nsight Aftermath and Nsight Perf SDK as separate future durable pages because NVIDIA lists them as separate products.

**Pages created (1 total):**

- `content/wiki/Nsight-Graphics.md`

**Pages updated:**

- `content/wiki/Nsight-Compute.md`, `content/wiki/Nsight-Systems.md`, and `content/wiki/Nsight-Visual-Studio-Edition.md` - connected the Nsight tool family to Graphics.
- `content/wiki/NVIDIA-RTX.md`, `content/wiki/NVIDIA-DriveOS.md`, and `content/wiki/NVIDIA-JetPack-SDK.md` - connected graphics/ray tracing, DRIVE, and Jetson contexts to Nsight Graphics.
- `content/index.md` - updated total page count to 445 and indexed the new page.

---

## 2026-04-29 - Overnight batch 69: Nsight Deep Learning Designer

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch69-20260429T113522Z`; local Git tag `codex-backup-overnight-pre-batch69-20260429T113522Z`

**Source URLs:** https://developer.nvidia.com/nsight-dl-designer, https://developer.nvidia.com/nsight-dl-designer/getting-started, https://docs.nvidia.com/nsight-dl-designer/index.html, https://docs.nvidia.com/nsight-dl-designer/UserGuide/index.html

**Gap analysis summary:**

- Added a canonical page for Nsight Deep Learning Designer after finding current NVIDIA developer and v2025.5 documentation with no existing wiki page.
- Kept user guide, release notes/system requirements, host-target profiling, TAO activity guidance, PyTorch preview notes, ONNX editing, TensorRT/ONNX Runtime profiling, and export workflows folded into one page.
- Connected DL Designer to the existing Nsight suite, TensorRT, TensorRT Model Optimizer, TensorRT for RTX, TAO, PyTorch, RTX, DriveOS, Jetson, and Developer Program context.

**Pages created (1 total):**

- `content/wiki/Nsight-Deep-Learning-Designer.md`

**Pages updated:**

- `content/wiki/Nsight-Compute.md` and `content/wiki/Nsight-Systems.md` - connected the Nsight tool family to DL Designer.
- `content/wiki/TensorRT.md` - connected TensorRT profiling/export workflows to DL Designer.
- `content/index.md` - updated total page count to 444 and indexed the new page.

---

## 2026-04-29 - Overnight batch 68: TensorRT for RTX

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch68-20260429T113306Z`; local Git tag `codex-backup-overnight-pre-batch68-20260429T113306Z`

**Source URLs:** https://docs.nvidia.com/deeplearning/tensorrt-rtx/latest/index.html, https://docs.nvidia.com/deeplearning/tensorrt-rtx/latest/architecture/architecture-overview.html, https://developer.nvidia.com/tensorrt-rtx

**Gap analysis summary:**

- Added a canonical page for TensorRT for RTX after finding current NVIDIA docs for TensorRT-RTX 1.4 and no existing wiki page.
- Kept release notes, support matrix, install guides, ONNX conversion, native APIs, CUDA Graphs, runtime cache, CPU-only AOT, API capture/replay, and performance guidance folded into the single TensorRT-for-RTX page.
- Connected the page to TensorRT, TensorRT Model Optimizer, RTX, Blackwell/Ada/Turing, CUDA Graphs, ChatRTX/local RTX AI, and adjacent TensorRT ecosystem pages while noting current integration boundaries.

**Pages created (1 total):**

- `content/wiki/TensorRT-for-RTX.md`

**Pages updated:**

- `content/wiki/TensorRT.md` - added TensorRT-for-RTX as an RTX-specific TensorRT specialization.
- `content/wiki/NVIDIA-RTX.md` - connected RTX platform context to TensorRT-for-RTX.
- `content/wiki/TensorRT-Model-Optimizer.md` - connected Model Optimizer quantized ONNX export to TensorRT-RTX.
- `content/index.md` - updated total page count to 443 and indexed the new page.

---

## 2026-04-29 - Overnight batch 67: NeMo Guardrails current docs refresh

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch67-20260429T113046Z`; local Git tag `codex-backup-overnight-pre-batch67-20260429T113046Z`

**Source URLs:** https://docs.nvidia.com/nemo/guardrails/latest/index.html, https://docs.nvidia.com/nemo/guardrails/latest/about/overview.html, https://docs.nvidia.com/nemo/guardrails/latest/about/supported-llms.html, https://docs.nvidia.com/nemo/guardrails/latest/configure-rails/guardrail-catalog/index.html, https://docs.nvidia.com/nemo/guardrails/latest/integration/langchain/agent-middleware.html, https://docs.nvidia.com/nemo/guardrails/latest/configure-rails/caching/kv-cache-reuse.html, https://docs.nvidia.com/nemo/guardrails/latest/user-guides/tracing/index.html, https://docs.nvidia.com/nemo/microservices/26.3.0/guardrails/tutorials/deploy-nemoguard-nims.html

**Gap analysis summary:**

- Refreshed the existing NeMo Guardrails page from current NVIDIA library and NeMo Platform docs instead of creating separate pages for the guardrail catalog, LangGraph/AgentMiddleware integration, tracing, API server, Colang, or KV cache reuse.
- Added current coverage for library-versus-microservice deployment, portable YAML/Colang configuration, catalog rails, agentic security, provider support, observability, and NemoGuard NIM deployment/performance notes.
- Connected Guardrails more explicitly to NeMo Platform, NemoGuard NIMs, NeMo Auditor/Evaluator, Agent Intelligence Toolkit, Nemotron, NIM for LLMs, and AI Blueprint safety contexts.

**Pages created:** None.

**Pages updated:**

- `content/wiki/NeMo-Guardrails.md` - refreshed around current NeMo Guardrails Library and microservice docs.
- `content/index.md` - updated the NeMo Guardrails index description.

---

## 2026-04-29 - Overnight batch 66: NeMo Gym

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch66-20260429T112617Z`; local Git tag `codex-backup-overnight-pre-batch66-20260429T112617Z`

**Source URLs:** https://docs.nvidia.com/nemo/gym/latest/index.html, https://docs.nvidia.com/nemo/gym/latest/about/overview.html, https://docs.nvidia.com/nemo/gym/latest/about/concepts/index.html, https://docs.nvidia.com/nemo/gym/latest/about/ecosystem.html, https://docs.nvidia.com/nemo/gym/latest/data/index.html, https://docs.nvidia.com/nemo/gym/latest/environment-tutorials/index.html, https://docs.nvidia.com/nemo/gym/latest/training-tutorials/index.html, https://docs.nvidia.com/nemo/gym/latest/reference/index.html

**Gap analysis summary:**

- Added one canonical page for NeMo Gym after finding current NVIDIA docs for RL environments, rollout collection, server components, data formats, training tutorials, and Nemotron model recipes.
- Kept agent/model/resources server pages, environment tutorials, training tutorials, API reference, model recipes, and FAQ content folded into the single NeMo Gym page rather than creating many subpages from one docs tree.
- Connected NeMo Gym to NeMo RL, Nemotron training recipes, Nemotron 3 Nano/Super, NeMo Data Designer, NeMo Evaluator, NIM/vLLM/PyTorch, and the broader NeMo graph.

**Pages created (1 total):**

- `content/wiki/NeMo-Gym.md`

**Pages updated:**

- `content/wiki/NeMo-RL.md`, `content/wiki/NVIDIA-NeMo.md`, and `content/wiki/Nemotron-Training-Recipes.md` - connected NeMo Gym to RL/post-training and rollout infrastructure.
- `content/wiki/Nemotron-3-Nano.md` and `content/wiki/Nemotron-3-Super.md` - linked model recipe and post-training references back to the new canonical NeMo Gym page.
- `content/index.md` - updated total page count to 442 and indexed the new page.

---

## 2026-04-29 - Overnight batch 65: Megatron Energon

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch65-20260429T112250Z`; local Git tag `codex-backup-overnight-pre-batch65-20260429T112250Z`

**Source URLs:** https://docs.nvidia.com/megatron-core/developer-guide/latest/user-guide/features/megatron_energon.html, https://nvidia.github.io/Megatron-Energon/, https://nvidia.github.io/Megatron-Energon/basic/quickstart.html, https://nvidia.github.io/Megatron-Energon/basic/data_prep.html, https://github.com/NVIDIA/Megatron-Energon

**Gap analysis summary:**

- Added a canonical page for Megatron Energon after finding current NVIDIA docs that treat it as Megatron's multimodal data loader.
- Kept quickstart tutorials, data preparation, WebDataset/JSONL formats, packing/grouping/joining, CLI utilities, and API modules folded into the single page rather than creating subpages from the docs tree.
- Connected Energon to Megatron Core, Megatron-LM, NeMo, DALI, NeMo Curator, and training resiliency/container context.

**Pages created (1 total):**

- `content/wiki/Megatron-Energon.md`

**Pages updated:**

- `content/wiki/Megatron-Core.md`, `content/wiki/Megatron-LM.md`, and `content/wiki/NVIDIA-NeMo.md` - connected Megatron/NeMo training stack pages to Energon.
- `content/wiki/NVIDIA-DALI.md` and `content/wiki/NeMo-Curator.md` - linked complementary data-loading and data-curation layers.
- `content/index.md` - updated total page count to 441 and indexed the new page.

---

## 2026-04-29 - Overnight batch 64: NVIDIA Resiliency Extension

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch64-20260429T111806Z`; local Git tag `codex-backup-overnight-pre-batch64-20260429T111806Z`

**Source URLs:** https://nvidia.github.io/nvidia-resiliency-ext/, https://github.com/NVIDIA/nvidia-resiliency-ext, https://docs.nvidia.com/nemo/megatron-bridge/latest/training/resiliency.html, https://docs.nvidia.com/mission-control/index.html

**Gap analysis summary:**

- Added one canonical page for NVIDIA Resiliency Extension (NVRx) after finding current NVIDIA-authored docs and Megatron Bridge integration docs for fault-tolerant distributed training.
- Kept fault tolerance, in-process restart, async/local checkpointing, straggler detection, distributed logging, examples, and API sections folded into the canonical NVRx page rather than creating subpages from the same docs tree.
- Connected NVRx to Megatron Bridge, Megatron Core, NeMo RL, Nemotron recipes, Mission Control, DGX, NVSentinel, and fleet-health context so job-level resiliency is distinct from node/fleet remediation.

**Pages created (1 total):**

- `content/wiki/NVIDIA-Resiliency-Extension.md`

**Pages updated:**

- `content/wiki/Megatron-Core.md`, `content/wiki/NeMo-Megatron-Bridge.md`, `content/wiki/NeMo-RL.md`, `content/wiki/NVIDIA-NeMo.md`, and `content/wiki/Nemotron-Training-Recipes.md` - connected NVRx to large-model training workflows.
- `content/wiki/NVIDIA-Mission-Control.md`, `content/wiki/NVIDIA-DGX.md`, and `content/wiki/NVIDIA-NVSentinel.md` - connected NVRx to AI factory, DGX, and operations/resiliency context.
- `content/index.md` - updated total page count to 440 and indexed the new page.

---

## 2026-04-29 - Overnight batch 63: Megatron Core

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch63-20260429T111313Z`; local Git tag `codex-backup-overnight-pre-batch63-20260429T111313Z`

**Source URLs:** https://docs.nvidia.com/megatron-core/developer-guide/latest/index.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/get-started/overview.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/get-started/install.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/user-guide/parallelism-guide.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/models/index.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/user-guide/features/moe.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/user-guide/features/custom_fsdp.html, https://docs.nvidia.com/megatron-core/developer-guide/latest/api-guide/index.html, https://developer.nvidia.com/megatron-core

**Gap analysis summary:**

- Added a canonical page for Megatron Core after current NVIDIA docs distinguished it from Megatron-LM and Megatron Bridge.
- Kept API packages, feature guides, model classes, routing design docs, and individual parallelism subtopics folded into the single Megatron Core page rather than generating many pages from one docs tree.
- Updated the Megatron/NeMo graph so Megatron Core is the library/API layer, Megatron-LM is the reference implementation, and NeMo Megatron Bridge is the conversion/training bridge.

**Pages created (1 total):**

- `content/wiki/Megatron-Core.md`

**Pages updated:**

- `content/wiki/Megatron-LM.md`, `content/wiki/NeMo-Megatron-Bridge.md`, `content/wiki/Nemotron-Training-Recipes.md`, `content/wiki/NVIDIA-NeMo.md`, and `content/wiki/NeMo-RL.md` - clarified Megatron Core vs Megatron-LM vs Bridge relationships.
- `content/wiki/Transformer-Engine.md` and `content/wiki/NVIDIA-Optimized-Frameworks.md` - connected TE and NVIDIA PyTorch containers to Megatron Core.
- `content/index.md` - updated total page count to 439 and indexed the new page.

---

## 2026-04-29 - Overnight batch 62: NVIDIA Optimized Frameworks containers

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch62-20260429T111001Z`; local Git tag `codex-backup-overnight-pre-batch62-20260429T111001Z`

**Source URLs:** https://docs.nvidia.com/deeplearning/frameworks/index.html, https://docs.nvidia.com/deeplearning/frameworks/user-guide/index.html, https://docs.nvidia.com/deeplearning/frameworks/support-matrix/, https://docs.nvidia.com/deeplearning/frameworks/preparing-containers/index.html

**Gap analysis summary:**

- Added a canonical NVIDIA Optimized Frameworks page after finding current NVIDIA docs for deep learning framework containers, DGX/container preparation, the user guide, and the support matrix.
- Kept PyTorch, TensorFlow, JAX, CUDA Deep Learning images, release tables, and individual container versions folded into the umbrella page because the docs tree is a shared framework-container surface rather than separate durable product pages.
- Connected the page to NGC, Container Toolkit, DGX, AI Enterprise, PyTorch, JAX, TensorFlow, Transformer Engine, and core acceleration libraries so container/versioning questions can resolve into the correct source-of-truth page.

**Pages created (1 total):**

- `content/wiki/NVIDIA-Optimized-Frameworks.md`

**Pages updated:**

- `content/wiki/PyTorch.md`, `content/wiki/JAX.md`, and `content/wiki/TensorFlow-GPU.md` - linked framework concept pages to NVIDIA's optimized container distribution layer.
- `content/wiki/NGC.md`, `content/wiki/NVIDIA-Container-Toolkit.md`, `content/wiki/NVIDIA-DGX.md`, and `content/wiki/NVIDIA-AI-Enterprise.md` - connected registry, runtime, DGX, and enterprise context.
- `content/wiki/Transformer-Engine.md` - connected TE's NGC/PyTorch-container install path to the framework-container page.
- `content/index.md` - updated total page count to 438 and indexed the new page.

---

## 2026-04-29 - Overnight batch 61: Transformer Engine

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch61-20260429T110508Z`; local Git tag `codex-backup-overnight-pre-batch61-20260429T110508Z`

**Source URLs:** https://docs.nvidia.com/deeplearning/transformer-engine/index.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/getting_started/index.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/installation.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/features/low_precision_training/introduction/introduction.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/examples/fp8_primer.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/features/low_precision_training/mxfp8/mxfp8.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/features/low_precision_training/nvfp4/nvfp4.html, https://docs.nvidia.com/deeplearning/transformer-engine/user-guide/api/pytorch.html, https://docs.nvidia.com/deeplearning/transformer-engine/release-notes/index.html

**Gap analysis summary:**

- Added a canonical page for NVIDIA Transformer Engine after finding it referenced across BioNeMo Recipes, NeMo/AutoModel, Megatron, Hopper, Blackwell, and PyTorch pages without a first-class wiki target.
- Used current release 2.14 docs and release notes, including PyTorch/JAX support, FP8, MXFP8, NVFP4, NGC/PyPI installation paths, quantized tensor APIs, fused attention, CPU offload, and precision debug tooling.
- Kept individual API classes, recipes, tutorials, and release-note bullets folded into the single Transformer Engine page rather than creating subpages for every low-precision mode or framework binding.

**Pages created (1 total):**

- `content/wiki/Transformer-Engine.md`

**Pages updated:**

- `content/wiki/BioNeMo-Recipes.md`, `content/wiki/PyTorch.md`, `content/wiki/JAX.md`, `content/wiki/Megatron-LM.md`, `content/wiki/NeMo-AutoModel.md`, `content/wiki/NeMo-Megatron-Bridge.md`, and `content/wiki/Nemotron-Training-Recipes.md` - connected training stack pages to Transformer Engine.
- `content/wiki/NVIDIA-Hopper-Architecture.md` and `content/wiki/NVIDIA-Blackwell-Architecture.md` - linked hardware Transformer Engine language to the current software library page.
- `content/wiki/NGC.md` - connected TE to NVIDIA framework container distribution.
- `content/index.md` - updated total page count to 437 and indexed the new page.

---

## 2026-04-29 - Overnight batch 60: BioNeMo Recipes training layer

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch60-20260429T105936Z`; local Git tag `codex-backup-overnight-pre-batch60-20260429T105936Z`

**Source URLs:** https://docs.nvidia.com/bionemo-framework/latest/index.html, https://docs.nvidia.com/bionemo-framework/latest/models/index.html, https://docs.nvidia.com/bionemo-framework/latest/models/amplify/, https://docs.nvidia.com/bionemo-framework/latest/models/ESM-2/, https://docs.nvidia.com/bionemo-framework/latest/models/ESM-2/pre-training/, https://docs.nvidia.com/bionemo-framework/latest/models/evo2/, https://docs.nvidia.com/bionemo-framework/latest/models/geneformer/, https://docs.nvidia.com/bionemo-framework/latest/main/recipes/, https://docs.nvidia.com/bionemo-framework/latest/main/recipes/recipes/, https://docs.nvidia.com/bionemo-framework/latest/main/recipes/models/amplify/amplify/, https://docs.nvidia.com/bionemo-framework/latest/main/recipes/models/esm2/esm2/, https://docs.nvidia.com/bionemo-framework/latest/main/recipes/models/geneformer/geneformer/

**Gap analysis summary:**

- Added one canonical page for BioNeMo Recipes after finding current NVIDIA docs that distinguish BioNeMo's platform/framework layer from its public reference implementations for biological foundation model training.
- Kept AMPLIFY, ESM-2, Geneformer, CodonFM recipe variants, model conversion notes, notebook/tutorial material, and individual recipe folders folded into the single recipe page because they are subtopics of the current BioNeMo recipe tree and several originate from third-party model communities.
- Did not use build.nvidia cards for this batch; existing durable BioNeMo NIM topics remain on their existing NIM pages.
- Updated the surrounding platform graph so BioNeMo queries can move between framework, recipes, PyTorch/Accelerate/Megatron-style training, Clara, AI Enterprise, NGC, and BioNeMo NIM inference pages.

**Pages created (1 total):**

- `content/wiki/BioNeMo-Recipes.md`

**Pages updated:**

- `content/wiki/NVIDIA-BioNeMo.md` - refreshed current Framework/Recipes/NIM positioning and model scope.
- `content/wiki/PyTorch.md`, `content/wiki/Hugging-Face-Accelerate.md`, and `content/wiki/Megatron-LM.md` - connected relevant training stack components to BioNeMo Recipes.
- `content/wiki/NGC.md`, `content/wiki/NVIDIA-Clara.md`, and `content/wiki/NVIDIA-AI-Enterprise.md` - connected platform/distribution/enterprise context to the new recipe page.
- `content/index.md` - updated total page count to 436 and indexed the new page.

---

## 2026-04-29 - Overnight batch 59: Nemotron training recipe stack

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch59-20260429T105032Z`; local Git tag `codex-backup-overnight-pre-batch59-20260429T105032Z`

**Source URLs:** https://docs.nvidia.com/nemotron/latest/index.html, https://docs.nvidia.com/nemotron/latest/nemotron/nano3/README.html, https://docs.nvidia.com/nemotron/latest/nemotron/super3/README.html, https://docs.nvidia.com/nemotron/latest/nemotron/nano3/pretrain.html, https://docs.nvidia.com/nemotron/latest/nemotron/super3/pretrain.html, https://docs.nvidia.com/nemotron/latest/nemotron/nano3/sft.html, https://docs.nvidia.com/nemotron/latest/nemotron/super3/sft.html, https://docs.nvidia.com/nemotron/latest/nemotron/nano3/rl.html, https://docs.nvidia.com/nemotron/latest/nemotron/super3/rl/index.html, https://docs.nvidia.com/nemotron/latest/nemotron/kit.html, https://docs.nvidia.com/nemotron/latest/nemotron/nvidia-stack.html, https://docs.nvidia.com/nemotron/latest/nemo_runspec/package-readme.html, https://docs.nvidia.com/nemotron/latest/nemo_runspec/nemo-run.html, https://docs.nvidia.com/nemotron/latest/runspec/v1/spec.html, https://docs.nvidia.com/nemotron/latest/architecture/README.html, https://docs.nvidia.com/nemotron/latest/architecture/cli-architecture.html

**Gap analysis summary:**

- Added one canonical page for the durable Nemotron training/cookbook layer after finding current NVIDIA docs for Nano3 and Super3 recipes, Nemotron Kit, `nemo_runspec`, runspec metadata, NeMo-Run execution, CLI architecture, and the NVIDIA AI stack behind the recipes.
- Kept individual recipe stages, `nemo_runspec` internals, W&B helpers, artifact-tracking details, and CLI files folded into the canonical recipe page rather than creating many small pages from one docs tree.
- Treated the recipe docs as current/latest NVIDIA-authored material and did not use build.nvidia build cards for this batch.
- Connected recipe coverage back to the existing model and NeMo pages so queries can move from model identity to training, post-training, execution, and evaluation context.

**Pages created (1 total):**

- `content/wiki/Nemotron-Training-Recipes.md`

**Pages updated:**

- `content/wiki/Nemotron.md` - connected the family hub to the public recipe/cookbook layer.
- `content/wiki/Nemotron-3-Nano.md` - added Nano3 pretraining, SFT, RL, and public-data recipe context.
- `content/wiki/Nemotron-3-Super.md` - added Super3 pretraining, two-stage SFT, multi-stage RL, and quantization recipe context.
- `content/wiki/NVIDIA-NeMo.md`, `content/wiki/NeMo-Run.md`, `content/wiki/NeMo-Megatron-Bridge.md`, `content/wiki/NeMo-RL.md`, `content/wiki/NeMo-AutoModel.md`, `content/wiki/NeMo-Data-Designer.md`, and `content/wiki/NeMo-Evaluator.md` - linked the relevant NeMo stack components to the recipe page.
- `content/index.md` - updated total page count to 435 and indexed the new page.

---

## 2026-04-29 - Overnight batch 58: Nemotron 3 text reasoning models

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch58-20260429T104220Z`; local Git tag `codex-backup-overnight-pre-batch58-20260429T104220Z`

**Source URLs:** https://build.nvidia.com/nvidia/nemotron-3-super-120b-a12b/modelcard, https://build.nvidia.com/nvidia/nemotron-3-nano-30b-a3b/modelcard, https://developer.nvidia.com/blog/introducing-nemotron-3-super-an-open-hybrid-mamba-transformer-moe-for-agentic-reasoning/, https://docs.nvidia.com/nemotron/latest/usage-cookbook/Nemotron-3-Super/OpenScaffoldingResources/README.html, https://docs.nvidia.com/nemotron/latest/use-case-examples/Simple%20Nemotron-3-Nano%20Usage%20Example/README.html, https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3.html, https://docs.nvidia.com/nemo/megatron-bridge/latest/models/llm/nemotron3-super.html, https://developer.nvidia.com/nemotron

**Gap analysis summary:**

- Added canonical pages for Nemotron 3 Nano and Nemotron 3 Super after verifying that each has current NVIDIA-authored docs and model surfaces beyond a single build.nvidia listing.
- Kept text-only Nano, Super, Nano Omni, and Parse separate because current NVIDIA docs treat them as distinct durable model topics: efficient text reasoning, high-capacity text reasoning, omnimodal perception, and document parsing.
- Avoided splitting individual Nemotron usage cookbook notebooks, coding-tool setup sections, training stages, or Megatron Bridge recipe sections into separate wiki pages.
- Used build.nvidia cards as durable model signals and relied on current NVIDIA docs/blog pages for architecture, training, agent-tooling, and Megatron Bridge details.

**Pages created (2 total):**

- `content/wiki/Nemotron-3-Nano.md`
- `content/wiki/Nemotron-3-Super.md`

**Pages updated:**

- `content/wiki/Nemotron.md` - connected the family hub to canonical Nano, Super, Nano Omni, and Parse pages.
- `content/wiki/NeMo-Megatron-Bridge.md` - added current dedicated Nemotron 3 Nano and Super model docs.
- `content/wiki/NeMo-AutoModel.md` and `content/wiki/NeMo-RL.md` - connected AutoModel/RL workflows to current Nemotron 3 reasoning models.
- `content/wiki/NVIDIA-NIM.md` - linked the umbrella NIM graph to the new Nemotron 3 model pages.
- `content/wiki/NVIDIA-Agent-Intelligence-Toolkit.md`, `content/wiki/NVIDIA-NemoClaw.md`, `content/wiki/NVIDIA-AI-Q-Blueprint.md`, `content/wiki/NVIDIA-Data-Flywheel-Blueprint.md`, and `content/wiki/NVIDIA-AI-Blueprints.md` - added agent and blueprint connections for Nano/Super model selection.
- `content/index.md` - updated total page count to 434 and indexed the new pages.

---

## 2026-04-29 - Overnight batch 57: Nemotron VLM and document parsing coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch57-20260429T103415Z`; local Git tag `codex-backup-overnight-pre-batch57-20260429T103415Z`

**Source URLs:** https://docs.nvidia.com/nim/vision-language-models/latest/index.html, https://docs.nvidia.com/nim/vision-language-models/latest/release-notes.html, https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-3-nano-omni-30b-a3b-reasoning/api.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-parse/api.html, https://build.nvidia.com/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning, https://blogs.nvidia.com/blog/nemotron-3-nano-omni-multimodal-ai-agents/, https://developer.nvidia.com/blog/nvidia-nemotron-3-nano-omni-powers-multimodal-agent-reasoning-in-a-single-efficient-open-model, https://huggingface.co/nvidia/NVIDIA-Nemotron-Parse-v1.2

**Gap analysis summary:**

- Added canonical pages for two current NVIDIA Nemotron/VLM gaps found in the latest NIM for VLMs 1.7.0 documentation: Nemotron 3 Nano Omni and Nemotron Parse.
- Kept `Nemotron-Parse` as one durable page instead of creating separate pages for v1.2, API examples, older past-release docs, prompt modes, model cards, or bounding-box scripts.
- Kept partner VLM support-matrix entries such as Qwen, Kimi, Gemma, Mistral, and Ministral folded into the broader `NIM-for-Vision-Language-Models` page instead of creating NVIDIA wiki pages for non-NVIDIA model families.
- Treated build.nvidia as a durable model/NIM signal for Nemotron 3 Nano Omni, not as a reason to ingest every build.nvidia listing.

**Pages created (2 total):**

- `content/wiki/Nemotron-3-Nano-Omni.md`
- `content/wiki/Nemotron-Parse.md`

**Pages updated:**

- `content/wiki/NIM-for-Vision-Language-Models.md` - refreshed current 1.7.0 VLM NIM scope and linked canonical Nemotron model pages.
- `content/wiki/Nemotron.md` - connected the Nemotron family hub to Nano Omni and Parse.
- `content/wiki/NVIDIA-NIM.md` - linked the umbrella NIM graph to the new VLM model pages.
- `content/wiki/NIM-for-Image-OCR.md` and `content/wiki/NIM-for-Object-Detection.md` - distinguished NeMo Retriever extraction NIMs from the Nemotron Parse VLM parser.
- `content/wiki/NeMo-Retriever.md`, `content/wiki/NVIDIA-AI-Data-Platform.md`, `content/wiki/NVIDIA-RAG-Blueprint.md`, and `content/wiki/NVIDIA-AI-Q-Blueprint.md` - added document-parsing and omnimodal reasoning connections for retrieval and agent workflows.
- `content/wiki/NVIDIA-NemoClaw.md` and `content/wiki/NVIDIA-OpenShell.md` - linked current Nano Omni agent examples.
- `content/index.md` - updated total page count to 432 and indexed the new pages.

---

## 2026-04-29 - Overnight batch 56: Cosmos Reason VLM NIM

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch56-20260429T103027Z`; local Git tag `codex-backup-overnight-pre-batch56-20260429T103027Z`

**Source URLs:** https://docs.nvidia.com/cosmos/latest/cosmos_nim.html, https://docs.nvidia.com/nim/vision-language-models/latest/examples/cosmos-reason2/api.html, https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html, https://docs.nvidia.com/nim/vision-language-models/latest/fine-tune-model.html, https://docs.nvidia.com/nim/vision-language-models/latest/getting-started.html

**Gap analysis summary:**

- Added one canonical page for Cosmos Reason because current NVIDIA Cosmos docs explicitly route Cosmos Reason1/Reason2 to NVIDIA NIM for VLMs, while the wiki previously only mentioned it inside the broader Cosmos and VLM pages.
- Kept Cosmos Reason as a single durable topic rather than creating separate pages for Reason1, Reason2 2B, Reason2 8B, API examples, support-matrix rows, or model cards.
- Connected Cosmos Reason to Cosmos WFM, Cosmos Embed1, VLM NIMs, VSS, AI Data Platform, NIM, AI Enterprise, TensorRT-LLM, and Triton.

**Pages created (1 total):**

- `content/wiki/NIM-for-Cosmos-Reason.md`

**Pages updated:**

- `content/wiki/NIM-for-Vision-Language-Models.md` - added Cosmos Reason as the canonical Cosmos VLM NIM page and summarized Reason2 support constraints.
- `content/wiki/NIM-for-Cosmos-WFM.md` - separated Cosmos world generation from Cosmos Reason VLM serving.
- `content/wiki/NIM-for-Cosmos-Embed1.md` - linked video embeddings to Cosmos Reason VLM reasoning workflows.
- `content/wiki/NVIDIA-Cosmos.md` - linked Cosmos platform coverage to the new Cosmos Reason page.
- `content/index.md` - updated total page count to 430 and indexed the new page.

---

## 2026-04-29 - Overnight batch 55: NIM LLM Day 0 safety model

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch55-20260429T102310Z`; local Git tag `codex-backup-overnight-pre-batch55-20260429T102310Z`

**Source URLs:** https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/overview.html, https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/nim-offerings.html, https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/release-notes.html, https://docs.nvidia.com/nim/large-language-models/latest/deployment/model-profiles-and-selection.html, https://docs.nvidia.com/nim/large-language-models/latest/day-0/index.html, https://docs.nvidia.com/nim/large-language-models/latest/day-0/support-matrix-day-0.html, https://docs.nvidia.com/nim/large-language-models/latest/day-0/get-started-nemotron-content-safety-reasoning-4b.html

**Gap analysis summary:**

- Added one canonical page for the current docs.nvidia Day 0 NIM page for Nemotron Content Safety Reasoning 4B Experimental.
- Kept Day 0, Certified, model profiles, tool calling, custom logits, and prompt-embedding details on the existing `NIM-for-Large-Language-Models` page rather than splitting the NIM LLM docs tree into many small pages.
- Connected the new safety NIM to Nemotron, NemoGuard NIMs, NeMo Guardrails, NIM LLM, NVIDIA NIM, and the existing content-safety/topic-control/jailbreak NIM pages.

**Pages created (1 total):**

- `content/wiki/Nemotron-Content-Safety-Reasoning-4B-Experimental-NIM.md`

**Pages updated:**

- `content/wiki/NIM-for-Large-Language-Models.md` - refreshed current 2.0.3 release, profile-selection, Day 0 support, and advanced serving details.
- `content/wiki/NVIDIA-NemoGuard-NIMs.md` - added the Day 0 safety classifier to the guardrail NIM family.
- `content/wiki/NeMo-Guardrails.md` - linked guardrail flows to the new safety classifier.
- `content/wiki/Nemotron.md` - connected Nemotron safety model coverage to the new Day 0 NIM.
- `content/wiki/NVIDIA-NIM.md` - linked the umbrella NIM graph to the new Day 0 safety NIM.
- `content/index.md` - updated total page count to 429 and indexed the new page.

---

## 2026-04-29 - Overnight batch 54: Nemotron model-family refresh

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch54-20260429T101948Z`; local Git tag `codex-backup-overnight-pre-batch54-20260429T101948Z`

**Source URLs:** https://docs.nvidia.com/nemo/microservices/latest/customizer/models/index.html, https://docs.nvidia.com/nemo/microservices/latest/fine-tune/models/llama-nemotron.html, https://docs.nvidia.com/nemo/microservices/latest/customizer/models/embedding.html, https://docs.nvidia.com/nemo/automodel/latest/model-coverage/llm.html, https://docs.nvidia.com/nemo/automodel/latest/model-coverage/llm/nvidia/nemotron.html, https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html

**Gap analysis summary:**

- Refreshed the existing `Nemotron` canonical page with current NVIDIA-authored model catalog, customization, training, embedding, and VLM serving coverage.
- Did not create separate wiki pages for individual Nemotron model variants; Llama Nemotron, Nemotron 3, Minitron, Nemotron H, embedding, and Omni references were consolidated into the durable `Nemotron` page.
- Used build.nvidia model cards only as durable current model signals and relied on docs.nvidia current docs for the main Customizer, AutoModel, and NIM support details.

**Pages created (0 total):**

- None.

**Pages updated:**

- `content/wiki/Nemotron.md` - updated current model directions, sources, and connections for Customizer, AutoModel, embedding, retrieval, and VLM NIM support.
- `content/wiki/NeMo-Customizer.md` - added current Nemotron tested-model catalog and embedding customization coverage.
- `content/wiki/NeMo-AutoModel.md` - added current Nemotron/Minitron model coverage details and resources.
- `content/wiki/NIM-for-Vision-Language-Models.md` - clarified current Nemotron 3 Nano Omni support and support-matrix constraints.
- `content/index.md` - refreshed the Nemotron index description.

---

## 2026-04-29 - Overnight batch 53: NVIDIA vGPU for Compute

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch53-20260429T101550Z`; local Git tag `codex-backup-overnight-pre-batch53-20260429T101550Z`

**Source URLs:** https://docs.nvidia.com/ai-enterprise/release-8/8.0/infra-software/vgpu.html, https://docs.nvidia.com/ai-enterprise/release-8/8.0/infra-software/vgpu/overview.html, https://docs.nvidia.com/ai-enterprise/release-8/8.0/infra-software/vgpu/features.html, https://docs.nvidia.com/ai-enterprise/release-8/latest/infra-software/vgpu/licensing.html, https://docs.nvidia.com/ai-enterprise/release-8/latest/support/support-matrix-8/8.0.html

**Gap analysis summary:**

- Added one canonical page for NVIDIA vGPU for Compute because the wiki had a general vGPU page but not the AI Enterprise-specific compute virtualization stack.
- Kept the vGPU for Compute doc set as one page rather than splitting overview, features, installation, licensing, configuration, vGPU types, MMIO limits, DCGM limitations, or platform-specific notes into separate pages.
- Connected the page to vGPU, AI Enterprise, AI Enterprise Software, infrastructure support matrix, VMware deployment, licensing/NLS, data center drivers, MIG, GPUDirect, NVLink/NVSwitch, DCGM, and Container Toolkit.

**Pages created (1 total):**

- `content/wiki/NVIDIA-vGPU-for-Compute.md`

**Pages updated:**

- `content/wiki/NVIDIA-vGPU.md` - added vGPU for Compute as the AI Enterprise-specific virtualization page.
- `content/wiki/NVIDIA-Enterprise-Licensing-Guide.md` - connected NLS licensing guidance to vGPU for Compute.
- `content/wiki/NVIDIA-AI-Enterprise-Software.md` and `content/wiki/NVIDIA-AI-Enterprise-Infrastructure-Support-Matrix.md` - connected the infrastructure catalog/matrix to vGPU for Compute.
- `content/index.md` - updated total page count to 428 and indexed the new page.

---

## 2026-04-29 - Overnight batch 52: AI Enterprise infrastructure support matrix

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch52-20260429T101347Z`; local Git tag `codex-backup-overnight-pre-batch52-20260429T101347Z`

**Source URLs:** https://docs.nvidia.com/ai-enterprise/software/latest/infrastructure-software.html, https://docs.nvidia.com/ai-enterprise/release-8/latest/support-matrix/, https://docs.nvidia.com/ai-enterprise/release-8/latest/support/support-matrix.html, https://docs.nvidia.com/ai-enterprise/release-8/latest/support/support-matrix-8/8.0.html, https://docs.nvidia.com/ai-enterprise/release-8/latest/overview/release-notes-8/8.0.html

**Gap analysis summary:**

- Added one canonical page for the current NVIDIA AI Enterprise Infrastructure Support Matrix because compatibility validation was mentioned by software/lifecycle pages but not independently queryable in the wiki.
- Kept the support matrix as one page rather than creating separate pages for every release, GPU architecture, platform family, OS, hypervisor, Kubernetes distribution, cloud provider, footnote, or component version row.
- Connected the page to AI Enterprise, software catalog, lifecycle, quick start, certified systems, DGX/HGX/GB300 platforms, drivers, DOCA, BlueField, vGPU/MIG, Container Toolkit, Run:ai, Kubernetes operators, BCM, and deployment guides.

**Pages created (1 total):**

- `content/wiki/NVIDIA-AI-Enterprise-Infrastructure-Support-Matrix.md`

**Pages updated:**

- `content/wiki/NVIDIA-AI-Enterprise-Software.md` - linked the software catalog to the infrastructure support matrix.
- `content/wiki/NVIDIA-AI-Enterprise-Lifecycle-Policy.md` - connected lifecycle planning to release-specific compatibility checks.
- `content/wiki/NVIDIA-AI-Enterprise-Quick-Start-Guide.md` - linked first-run setup to compatibility validation.
- `content/index.md` - updated total page count to 427 and indexed the new page.

---

## 2026-04-29 - Overnight batch 51: AI Enterprise quick start guide

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch51-20260429T101150Z`; local Git tag `codex-backup-overnight-pre-batch51-20260429T101150Z`

**Source URLs:** https://docs.nvidia.com/ai-enterprise/release-7/7.4/getting-started/quick-start-guide.html, https://docs.nvidia.com/ai-enterprise/release-7/7.4/index.html, https://docs.nvidia.com/ai-enterprise/index.html

**Gap analysis summary:**

- Added one canonical page for the current NVIDIA AI Enterprise Quick Start Guide because onboarding, enterprise account activation, NGC access, and first verification were only implicit in the broader AI Enterprise pages.
- Kept the quick-start guide as one page rather than splitting account creation, evaluation-account linking, NGC API keys, container pulls, bare-metal driver install, Container Toolkit verification, VMware licensing, Azure VMI activation, or deployment-type selection into separate pages.
- Connected the guide to AI Enterprise, software catalog, licensing, enterprise support, NGC, certified systems, DGX exception handling, data center drivers, Container Toolkit, Base Command Manager, vGPU/NLS, bare-metal/VMware/cloud deployments, Omniverse, and Run:ai.

**Pages created (1 total):**

- `content/wiki/NVIDIA-AI-Enterprise-Quick-Start-Guide.md`

**Pages updated:**

- `content/wiki/NVIDIA-AI-Enterprise.md` - added quick start as the first-run onboarding surface.
- `content/wiki/NVIDIA-AI-Enterprise-Software.md` - connected software catalog browsing to quick-start account/NGC setup.
- `content/wiki/NGC.md` - linked NGC to the quick-start account, API key, and container-access flow.
- `content/index.md` - updated total page count to 426 and indexed the new page.

---

## 2026-04-29 - Overnight batch 50: AI Enterprise software catalog

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch50-20260429T100841Z`; local Git tag `codex-backup-overnight-pre-batch50-20260429T100841Z`

**Source URLs:** https://docs.nvidia.com/ai-enterprise/software/latest/overview.html, https://docs.nvidia.com/ai-enterprise/software/latest/application-software.html, https://docs.nvidia.com/ai-enterprise/software/latest/infrastructure-software.html, https://docs.nvidia.com/ai-enterprise/index.html

**Gap analysis summary:**

- Added one canonical page for the current NVIDIA AI Enterprise Software documentation because the wiki had the AI Enterprise platform and lifecycle pages but not a dedicated queryable application-layer/infrastructure-layer software catalog.
- Kept the software docs together as one page instead of creating separate pages for every table row, component category, release branch link, support-matrix entry, or infrastructure release-note link.
- Connected the catalog to AI Enterprise, lifecycle, NGC, NIM, NeMo, Omniverse, Run:ai, TensorRT, Triton, PyTorch, Riva, TAO, DeepStream, Holoscan, Morpheus, drivers, DOCA, vGPU/MIG, Container Toolkit, Kubernetes operators, Base Command Manager, and Enterprise Support.

**Pages created (1 total):**

- `content/wiki/NVIDIA-AI-Enterprise-Software.md`

**Pages updated:**

- `content/wiki/NVIDIA-AI-Enterprise.md` - added the current software catalog as the supported component map.
- `content/wiki/NVIDIA-AI-Enterprise-Lifecycle-Policy.md` - connected lifecycle branches to the software catalog they govern.
- `content/wiki/NGC.md` - linked NGC to the AI Enterprise software catalog.
- `content/index.md` - updated total page count to 425 and indexed the new page.

---

## 2026-04-29 - Overnight batch 49: Run:ai support and lifecycle coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch49-20260429T100639Z`; local Git tag `codex-backup-overnight-pre-batch49-20260429T100639Z`

**Source URLs:** https://run-ai-docs.nvidia.com/self-hosted/support-policy/product-support-policy, https://run-ai-docs.nvidia.com/self-hosted/support-policy/product-version-life-cycle, https://run-ai-docs.nvidia.com/self-hosted/getting-started/installation, https://docs.nvidia.com/ai-enterprise/index.html

**Gap analysis summary:**

- Added one canonical page for current NVIDIA Run:ai self-hosted support policy and product version lifecycle because the wiki had a Run:ai product page but no queryable support/version page.
- Kept support policy and version lifecycle together instead of creating separate tiny pages for full support, extended support, end of support, individual Run:ai versions, connected installs, air-gapped installs, NGC artifacts, or component alignment.
- Connected the page to Run:ai, AI Enterprise, AI Enterprise lifecycle, Enterprise Support and Services, GPU Operator, Mission Control, NIM LLM deployment/sizing, and NGC.

**Pages created (1 total):**

- `content/wiki/NVIDIA-Run-ai-Support-and-Lifecycle.md`

**Pages updated:**

- `content/wiki/NVIDIA-Run-ai.md` - added the support/lifecycle page as the canonical support-date companion.
- `content/wiki/NVIDIA-AI-Enterprise.md` and `content/wiki/NVIDIA-AI-Enterprise-Lifecycle-Policy.md` - connected Run:ai support dates to AI Enterprise lifecycle planning.
- `content/wiki/NVIDIA-Enterprise-Support-and-Services.md` - linked broad enterprise support operations to Run:ai product support periods.
- `content/index.md` - updated total page count to 424 and indexed the new page.

---

## 2026-04-29 - Overnight batch 48: Enterprise Support and Services coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch48-20260429T100405Z`; local Git tag `codex-backup-overnight-pre-batch48-20260429T100405Z`

**Source URLs:** https://docs.nvidia.com/enterprise-services/index.html, https://docs.nvidia.com/enterprise-support-and-services-user-guide/index.html, https://docs.nvidia.com/enterprise-support-and-services-user-guide/nvidia-enterprise-support-overview/index.html, https://docs.nvidia.com/enterprise-support-and-services-user-guide/nvidia-enterprise-support-details/index.html, https://docs.nvidia.com/enterprise-support-and-services-user-guide/value-add-support-services/index.html, https://docs.nvidia.com/enterprise-support-and-services-user-guide/support-resources-and-requests/index.html, https://docs.nvidia.com/enterprise-support-and-services-user-guide/nvidia-enterprise-services/index.html

**Gap analysis summary:**

- Added one canonical page for NVIDIA Enterprise Support and Services because the wiki had DGX-specific support and AI Enterprise licensing, but not the broader support entitlement, portal, RMA, value-add support, advisory-services, and education-services guide.
- Kept the user guide as one wiki page rather than splitting Business Standard/Critical, support portal, RMA, TAM, Site Reliability Engineer, education, or advisory-services sections into separate pages.
- Connected the support/services page to AI Enterprise, licensing, DGX support, NGC, vGPU/NLS, drivers, certified systems, and reference architectures.

**Pages created (1 total):**

- `content/wiki/NVIDIA-Enterprise-Support-and-Services.md`

**Pages updated:**

- `content/wiki/NVIDIA-AI-Enterprise.md` - added support/services as the support entitlement and operations companion to licensing.
- `content/wiki/NVIDIA-Enterprise-Licensing-Guide.md` - linked support-included licensing to the support/services guide.
- `content/wiki/NVIDIA-DGX-Enterprise-Support.md` - distinguished the DGX-specific service page from the broader enterprise support guide.
- `content/index.md` - updated total page count to 423 and indexed the new page.

---

## 2026-04-29 - Overnight batch 47: AI Enterprise licensing guidance

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch47-20260429T095921Z`; local Git tag `codex-backup-overnight-pre-batch47-20260429T095921Z`

**Source URLs:** https://docs.nvidia.com/ai-enterprise/planning-resource/licensing-guide/latest/index.html, https://docs.nvidia.com/ai-enterprise/planning-resource/licensing-guide/latest/overview.html, https://docs.nvidia.com/ai-enterprise/planning-resource/licensing-guide/latest/licensing.html, https://docs.nvidia.com/ai-enterprise/planning-resource/licensing-guide/latest/license-system.html

**Gap analysis summary:**

- Added one canonical licensing page for the current NVIDIA Enterprise Licensing Guide rather than splitting NLS, support, cloud pricing, Inception, Connect, or training/education sections into separate wiki pages.
- Connected AI Enterprise licensing to deployment paths, lifecycle planning, vGPU/NLS, DGX bundle treatment, certified systems, NGC, and cloud marketplace/BYOL context.
- Kept licensing as NVIDIA-specific AI Enterprise guidance and did not create generic AWS/Azure/GCP/OCI, marketplace, or support-program pages.

**Pages created (1 total):**

- `content/wiki/NVIDIA-Enterprise-Licensing-Guide.md`

**Pages updated:**

- `content/wiki/NVIDIA-AI-Enterprise.md` - added licensing as an AI Enterprise planning surface.
- `content/wiki/NVIDIA-AI-Enterprise-Lifecycle-Policy.md`, `content/wiki/NVIDIA-AI-Enterprise-Cloud-Deployment.md`, `content/wiki/NVIDIA-AI-Enterprise-VMware-Deployment.md`, and `content/wiki/NVIDIA-vGPU.md` - connected licensing/NLS/cloud entitlement guidance.
- `content/wiki/NVIDIA-DGX.md` and `content/wiki/NVIDIA-DGX-Enterprise-Support.md` - connected DGX bundle licensing and support-included licensing context.
- `content/index.md` - updated total page count to 422 and indexed the new page.

---

## 2026-04-29 - Overnight batch 46: Omniverse reference architecture coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch46-20260429T095632Z`; local Git tag `codex-backup-overnight-pre-batch46-20260429T095632Z`

**Source URLs:** https://docs.omniverse.nvidia.com/arch-diagrams/latest/index.html, https://docs.omniverse.nvidia.com/arch-diagrams/latest/ref-arch-diagrams/factory-dt-diagram.html, https://docs.omniverse.nvidia.com/arch-diagrams/latest/common/technical-requirements.html

**Gap analysis summary:**

- Added one canonical page for the current Omniverse Reference Architectures docs rather than splitting the single current RTX PRO industrial facility digital twin diagram and shared technical requirements into multiple wiki pages.
- Connected Omniverse reference architecture coverage to Omniverse, RTX PRO Server, RTX PRO AI Factory, Isaac Sim, Cosmos, CloudXR, certified systems, DGX Cloud, drivers, AI Enterprise, and cloud deployment context.
- Used NVIDIA Omniverse documentation as NVIDIA-authored source material; no build.nvidia cards were involved.

**Pages created (1 total):**

- `content/wiki/NVIDIA-Omniverse-Reference-Architectures.md`

**Pages updated:**

- `content/wiki/NVIDIA-Omniverse.md` - connected current Omniverse architecture diagrams and technical requirements to the platform page.
- `content/wiki/NVIDIA-RTX-PRO-Server.md` and `content/wiki/NVIDIA-RTX-PRO-AI-Factory.md` - linked RTX PRO infrastructure to the industrial digital twin architecture.
- `content/wiki/NVIDIA-Isaac-Sim.md`, `content/wiki/NVIDIA-Cosmos.md`, and `content/wiki/NVIDIA-CloudXR.md` - connected robotics simulation, synthetic data/world models, and XR delivery references.
- `content/index.md` - updated total page count to 421 and indexed the new page.

---

## 2026-04-29 - Overnight batch 45: AI Enterprise lifecycle, deployment, and security planning

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch45-20260429T095125Z`; local Git tag `codex-backup-overnight-pre-batch45-20260429T095125Z`

**Source URLs:** https://docs.nvidia.com/ai-enterprise/index.html, https://docs.nvidia.com/ai-enterprise/lifecycle/latest/index.html, https://docs.nvidia.com/ai-enterprise/deployment/bare-metal/latest/overview.html, https://docs.nvidia.com/ai-enterprise/deployment/vmware/latest/overview.html, https://docs.nvidia.com/ai-enterprise/deployment/cloud/latest/overview.html, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-reference-design-for-government-white-paper/latest/index.html, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-reference-design-for-government-white-paper/latest/overview.html, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-software-regulated-environments-white-paper/latest/index.html, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-enterprise-security-white-paper/latest/introduction.html, https://docs.nvidia.com/ai-enterprise/planning-resource/optimizing-vm-configuration-ai-inference/latest/introduction.html

**Gap analysis summary:**

- Added durable pages for current AI Enterprise planning surfaces that were visible from the AI Enterprise docs hub but missing from the wiki: lifecycle policy, bare-metal deployment, VMware deployment, cloud deployment, government reference design, regulated-environment software, AI Enterprise security, and topology-aware VM optimization.
- Kept each source document as one wiki page and did not split individual deployment steps, appendices, branch tables, or white-paper sections into separate pages.
- Updated the AI Enterprise, Enterprise AI Factory, Enterprise RA/software RA, Red Hat AI Factory, and vGPU pages so the new deployment/security/lifecycle topics are reachable from existing canonical pages.
- Preserved NVIDIA context first and avoided creating generic Red Hat, VMware, AWS, Azure, GCP, FedRAMP, or KVM pages from mentions in the NVIDIA docs.

**Pages created (8 total):**

- `content/wiki/NVIDIA-AI-Enterprise-Lifecycle-Policy.md`
- `content/wiki/NVIDIA-AI-Enterprise-Bare-Metal-Deployment.md`
- `content/wiki/NVIDIA-AI-Enterprise-VMware-Deployment.md`
- `content/wiki/NVIDIA-AI-Enterprise-Cloud-Deployment.md`
- `content/wiki/NVIDIA-AI-Factory-for-Government.md`
- `content/wiki/NVIDIA-AI-Software-for-Regulated-Environments.md`
- `content/wiki/NVIDIA-AI-Enterprise-Security.md`
- `content/wiki/Optimizing-VM-Configuration-for-AI-Inference.md`

**Pages updated:**

- `content/wiki/NVIDIA-AI-Enterprise.md` - added lifecycle, deployment, security, regulated-environment, and government AI factory connections.
- `content/wiki/NVIDIA-Enterprise-AI-Factory.md` and `content/wiki/NVIDIA-Enterprise-Reference-Architectures.md` - connected government AI factory reference design to AI factory/RA context.
- `content/wiki/NVIDIA-AI-Enterprise-Software-Reference-Architecture.md` - linked the lifecycle and installation-path pages as operational companions to the software RA.
- `content/wiki/Red-Hat-AI-Factory-with-NVIDIA.md` - linked lifecycle/security/regulatory and adjacent bare-metal/cloud deployment paths.
- `content/wiki/NVIDIA-vGPU.md` - connected VMware AI Enterprise deployment and VM topology optimization.
- `content/index.md` - updated total page count to 420 and indexed the eight new pages.

---

## 2026-04-29 - Overnight batch 44: Red Hat AI Factory with NVIDIA

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch44-20260429T094143Z`; local Git tag `codex-backup-overnight-pre-batch44-20260429T094143Z`

**Source URLs:** https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/index.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/platform-overview.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/overview.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/prerequisites.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/software-overview.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/network-operator.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/gpu-operator.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/deploy-ai-workloads-nim-operator.html, https://docs.nvidia.com/ai-enterprise/deployment/red-hat-ai-factory/latest/deploy-nvidia-nim-redhat.html

**Gap analysis summary:**

- Added one canonical page for the current NVIDIA-authored Red Hat AI Factory with NVIDIA deployment guide instead of creating separate wiki pages for the overview, prerequisites, operator install steps, NIM deployment steps, or OpenShift AI Playground workflow.
- Connected the guide to AI Enterprise, Enterprise AI Factory, Enterprise RA/software RA, NIM, NIM Operator, GPU Operator, Network Operator, Dynamo, NIXL, vLLM, TensorRT-LLM, certified systems/storage, RTX PRO AI Factory, Blueprints, Agent Toolkit, Nemotron, and Cosmos.
- Treated Red Hat/OpenShift concepts as deployment context, not as a reason to create non-NVIDIA topic pages.
- Kept build.nvidia out of this batch; the source set is current docs.nvidia.com content last updated April 15, 2026.

**Pages created (1 total):**

- `content/wiki/Red-Hat-AI-Factory-with-NVIDIA.md`

**Pages updated:**

- `content/wiki/NVIDIA-AI-Enterprise.md`, `content/wiki/NVIDIA-Enterprise-AI-Factory.md`, `content/wiki/NVIDIA-Enterprise-Reference-Architectures.md`, and `content/wiki/NVIDIA-AI-Enterprise-Software-Reference-Architecture.md` - connected the Red Hat/OpenShift deployment track to the broader NVIDIA AI factory graph.
- `content/wiki/NVIDIA-NIM.md`, `content/wiki/NIM-for-Large-Language-Models.md`, and `content/wiki/NVIDIA-NIM-Operator.md` - added OpenShift AI, Helm, NIM Operator, KServe, NIMCache, NIMService, and Gen AI Studio context.
- `content/wiki/NVIDIA-GPU-Operator.md` and `content/wiki/NVIDIA-Network-Operator.md` - connected GPU/network operator roles in the Red Hat AI Factory deployment.
- `content/wiki/NVIDIA-Dynamo.md`, `content/wiki/NIXL.md`, `content/wiki/vLLM.md`, and `content/wiki/TensorRT-LLM.md` - connected distributed inference and inference-engine references from the guide.
- `content/wiki/NVIDIA-Certified-Systems.md`, `content/wiki/NVIDIA-Certified-Storage.md`, and `content/wiki/NVIDIA-RTX-PRO-AI-Factory.md` - connected prerequisites and example certified hardware/storage guidance.
- `content/wiki/NVIDIA-Agent-Intelligence-Toolkit.md`, `content/wiki/NVIDIA-AI-Blueprints.md`, `content/wiki/Nemotron.md`, and `content/wiki/NVIDIA-Cosmos.md` - connected agent/model/application references from the guide.
- `content/index.md` - updated total page count to 412 and indexed the new page.

---

## 2026-04-29 - Overnight batch 43: Enterprise RA application papers

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch43-20260429T093610Z`; local Git tag `codex-backup-overnight-pre-batch43-20260429T093610Z`

**Source URLs:** https://docs.nvidia.com/enterprise-reference-architectures/nim-llm-with-run-ai-and-vanilla-kubernetes.pdf, https://docs.nvidia.com/enterprise-reference-architectures/ai-q-research-agent-blueprint.pdf

**Gap analysis summary:**

- Folded two current NVIDIA Enterprise RA application papers into existing canonical pages instead of creating duplicate paper-specific wiki pages.
- Added NIM LLM with Run:ai scale/sizing context to the Run:ai, NIM LLM, NIM benchmarking, and NIM umbrella pages.
- Added AI-Q Enterprise RA sizing, profiler, Nemotron, RAG, and RTX PRO infrastructure context to the existing AI-Q, Agent Intelligence Toolkit, RAG Blueprint, Nemotron, and Enterprise RA pages.
- Kept the current docs/PDFs represented as sources and connections while avoiding a page per appendix, YAML file, benchmark table, deployment step, or build.nvidia listing.

**Pages created (0 total):**

- None. Existing canonical pages were updated.

**Pages updated:**

- `content/wiki/NVIDIA-Run-ai.md` - added NIM LLM Enterprise RA scheduling, autoscaling, fractional-GPU, and multi-model packing context.
- `content/wiki/NIM-for-Large-Language-Models.md`, `content/wiki/NIM-for-LLM-Benchmarking-Guide.md`, and `content/wiki/NVIDIA-NIM.md` - connected NIM LLM deployment/sizing to Run:ai, Enterprise RA, and Kubernetes software-stack guidance.
- `content/wiki/NVIDIA-AI-Q-Blueprint.md` - added Enterprise RA deployment, sizing, profiler, evaluation, Nemotron, and RTX PRO context.
- `content/wiki/NVIDIA-Agent-Intelligence-Toolkit.md`, `content/wiki/NVIDIA-RAG-Blueprint.md`, and `content/wiki/Nemotron.md` - connected AI-Q Enterprise RA sizing and model/retrieval dependencies.
- `content/wiki/NVIDIA-Enterprise-Reference-Architectures.md` - documented that application-level RA papers are folded into canonical topic pages.
- `content/index.md` - updated descriptions for Run:ai, NIM LLM Benchmarking, and AI-Q.

---

## 2026-04-29 - Overnight batch 42: Enterprise Reference Architecture coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch42-20260429T092611Z`; local Git tag `codex-backup-overnight-pre-batch42-20260429T092611Z`

**Source URLs:** https://docs.nvidia.com/enterprise-reference-architectures/index.html, https://docs.nvidia.com/enterprise-reference-architectures/white-paper/latest/index.html, https://docs.nvidia.com/enterprise-reference-architectures/white-paper/latest/introduction.html, https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/index.html, https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/overview.html, https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/components.html, https://docs.nvidia.com/enterprise-reference-architectures/rtx-pro-ai-factory/latest/software.html, https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/index.html, https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/overview.html, https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/components.html, https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory/latest/software.html, https://docs.nvidia.com/enterprise-reference-architectures/nvl72-ai-factory-with-gb300-nvl72-dual-plane-networking-architecture.pdf, https://docs.nvidia.com/ai-enterprise/reference-architecture/latest/index.html, https://docs.nvidia.com/ai-enterprise/reference-architecture/latest/platform-overview.html, https://docs.nvidia.com/ai-enterprise/reference-architecture/latest/software-stack.html, https://docs.nvidia.com/enterprise-reference-architectures/observability-guide.pdf

**Gap analysis summary:**

- Added missing current NVIDIA Enterprise Reference Architecture coverage: program hub, RTX PRO AI Factory, HGX AI Factory, NVL72 AI Factory, AI Enterprise Software RA, and Enterprise RA Observability Guide.
- Kept build.nvidia out of this batch except as a discovery caution; the batch is based on current public NVIDIA docs/PDFs rather than individual user-published build cards.
- Treated NVIDIA NIM with Run:ai and AI-Q Enterprise RA papers as update candidates for their existing canonical pages, not as new pages in this hardware/software/observability batch.
- Connected the new pages into AI Enterprise, Enterprise AI Factory, Mission Control, RTX PRO Server, HGX, GB300 NVL72, DCGM, GPU Operator, NIM Operator, NetQ, Base Command Manager, certified systems/storage, Spectrum-X, BlueField, DOCA, Network Operator, and Run:ai.

**Pages created (6 total):**

- `content/wiki/NVIDIA-Enterprise-Reference-Architectures.md`
- `content/wiki/NVIDIA-RTX-PRO-AI-Factory.md`
- `content/wiki/NVIDIA-HGX-AI-Factory.md`
- `content/wiki/NVIDIA-NVL72-AI-Factory.md`
- `content/wiki/NVIDIA-AI-Enterprise-Software-Reference-Architecture.md`
- `content/wiki/NVIDIA-Enterprise-RA-Observability-Guide.md`

**Pages updated:**

- `content/wiki/NVIDIA-Enterprise-AI-Factory.md` - connected the strategy page to the current Enterprise RA program and hardware/software/observability pages.
- `content/wiki/NVIDIA-AI-Enterprise.md` - added Software RA and observability relationships to the enterprise software page.
- `content/wiki/NVIDIA-RTX-PRO-Server.md`, `content/wiki/NVIDIA-HGX.md`, and `content/wiki/NVIDIA-GB300-NVL72.md` - connected platform pages to their current Enterprise RAs.
- `content/wiki/NVIDIA-Mission-Control.md`, `content/wiki/NVIDIA-Run-ai.md`, `content/wiki/NVIDIA-Base-Command-Manager.md`, `content/wiki/NVIDIA-GPU-Operator.md`, `content/wiki/NVIDIA-NIM-Operator.md`, `content/wiki/NVIDIA-DCGM.md`, and `content/wiki/NVIDIA-NetQ.md` - connected operations, orchestration, and telemetry pages to RA software/observability guidance.
- `content/wiki/NVIDIA-Certified-Systems.md`, `content/wiki/NVIDIA-Certified-Storage.md`, `content/wiki/NVIDIA-Spectrum-X.md`, `content/wiki/NVIDIA-BlueField-DPU.md`, `content/wiki/NVIDIA-DOCA.md`, and `content/wiki/NVIDIA-Network-Operator.md` - connected validated infrastructure and networking pages to Enterprise RA designs.
- `content/index.md` - updated page count to 411 and indexed the six new pages.

---

## 2026-04-29 - Overnight batch 41: AI Workbench current concepts

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch41-20260429T092039Z`; local Git tag `codex-backup-overnight-pre-batch41-20260429T092039Z`

**Source URLs:** https://docs.nvidia.com/ai-workbench/user-guide/latest/overview/introduction.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/project-concept.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/location-concept.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/concepts/application-concept.html, https://docs.nvidia.com/ai-workbench/user-guide/latest/quickstart/example-nim.html

**Gap analysis summary:**

- Refreshed the existing AI Workbench page from current NVIDIA docs instead of the older verified-knowledge summary.
- Added canonical pages for the current Workbench concept docs: Projects, Locations, and Applications.
- Connected Workbench to Brev, NIM, NGC, AI Blueprints, ChatRTX, DGX Spark/Station/Cloud, and AI Enterprise development workflows.
- Avoided creating pages for every example project, walkthrough, config setting, installer path, or support matrix row.

**Pages created (3 total):**

- `content/wiki/NVIDIA-AI-Workbench-Projects.md`
- `content/wiki/NVIDIA-AI-Workbench-Locations.md`
- `content/wiki/NVIDIA-AI-Workbench-Applications.md`

**Pages updated:**

- `content/wiki/NVIDIA-AI-Workbench.md` - updated summary, current concept model, sources, and connections.
- `content/wiki/NVIDIA-Brev.md` - connected Brev to Workbench location provisioning.
- `content/index.md` - updated page count to 405 and indexed the three new Workbench concept pages.

---

## 2026-04-29 - Overnight batch 40: Dynamo advanced serving components

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch40-20260429T091633Z`; local Git tag `codex-backup-overnight-pre-batch40-20260429T091633Z`

**Source URLs:** https://docs.nvidia.com/dynamo/latest/getting-started/introduction, https://docs.nvidia.com/dynamo/design-docs/disaggregated-serving, https://docs.nvidia.com/dynamo/latest/user-guides/kv-cache-aware-routing, https://docs.nvidia.com/dynamo/latest/components/kvbm, https://docs.nvidia.com/dynamo/backends/v-llm/kv-cache-offloading, https://docs.nvidia.com/dynamo/latest/components/planner, https://docs.nvidia.com/dynamo/latest/components/profiler, https://docs.nvidia.com/dynamo/latest/user-guides/benchmarking

**Gap analysis summary:**

- Added first-class pages for durable current Dynamo docs topics that were missing from the wiki: Disaggregated Serving, KV Cache-Aware Routing, KV Block Manager, Planner, and Profiler.
- Kept Dynamo benchmarking folded into AIPerf and the Profiler context instead of creating a duplicate benchmark page.
- Connected the new pages to Dynamo, NIXL, CMX, Grove, KAI Scheduler, AIPerf, TensorRT-LLM, and vLLM so system-level inference concepts are queryable.
- Avoided creating pages for every Dynamo quickstart, example script, backend recipe, environment variable, or build listing.

**Pages created (5 total):**

- `content/wiki/Dynamo-Disaggregated-Serving.md`
- `content/wiki/Dynamo-KV-Cache-Aware-Routing.md`
- `content/wiki/Dynamo-KV-Block-Manager.md`
- `content/wiki/Dynamo-Planner.md`
- `content/wiki/Dynamo-Profiler.md`

**Pages updated:**

- `content/wiki/NVIDIA-Dynamo.md` - promoted current Dynamo component pages into the umbrella serving framework page.
- `content/wiki/NIXL.md` and `content/wiki/NVIDIA-CMX.md` - connected transfer and context-memory infrastructure to KVBM, routing, and disaggregated serving.
- `content/wiki/NVIDIA-Grove.md` and `content/wiki/KAI-Scheduler.md` - connected topology-aware orchestration to Planner and disaggregated serving.
- `content/wiki/NVIDIA-AIPerf.md` - connected Dynamo benchmarking and Profiler workflows to AIPerf.
- `content/index.md` - updated page count to 402 and indexed the five Dynamo pages.

---

## 2026-04-29 - Overnight batch 39: Triton and AIPerf benchmarking tools

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch39-20260429T091123Z`; local Git tag `codex-backup-overnight-pre-batch39-20260429T091123Z`

**Source URLs:** https://docs.nvidia.com/aiperf/welcome-to-ai-perf-documentation, https://docs.nvidia.com/aiperf/getting-started/profiling-with-ai-perf, https://docs.nvidia.com/aiperf/getting-started/migrating-from-gen-ai-perf, https://docs.nvidia.com/aiperf/architecture-internals/architecture-of-ai-perf, https://docs.nvidia.com/nim/benchmarking/llm/latest/step-by-step.html, https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_analyzer/genai-perf/README.html, https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/perf_analyzer/README.html, https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/model_analyzer/README.html, https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/model_navigator/README.html

**Gap analysis summary:**

- Added canonical pages for durable current NVIDIA benchmarking and Triton deployment-tool topics that were missing from the wiki: AIPerf, GenAI-Perf, Triton Performance Analyzer, Triton Model Analyzer, and Triton Model Navigator.
- Treated GenAI-Perf as a phased-out/legacy workflow page because current NVIDIA docs point new benchmarking users to AIPerf.
- Kept this as one page per durable tool and did not create separate pages for every benchmark tutorial, metric table, CLI flag, model example, or build.nvidia listing.
- Connected the new tools into Triton Inference Server, NIM LLM benchmarking, NIM, TensorRT, TensorRT-LLM, Dynamo, and related inference pages.

**Pages created (5 total):**

- `content/wiki/NVIDIA-AIPerf.md`
- `content/wiki/NVIDIA-GenAI-Perf.md`
- `content/wiki/Triton-Performance-Analyzer.md`
- `content/wiki/Triton-Model-Analyzer.md`
- `content/wiki/Triton-Model-Navigator.md`

**Pages updated:**

- `content/wiki/Triton-Inference-Server.md` - promoted current performance and deployment tooling into the core Triton page.
- `content/wiki/NIM-for-LLM-Benchmarking-Guide.md` and `content/wiki/NVIDIA-NIM.md` - updated benchmark references toward AIPerf while preserving GenAI-Perf migration context.
- `content/wiki/TensorRT.md` and `content/wiki/TensorRT-LLM.md` - connected TensorRT/TensorRT-LLM deployment to Triton tooling and current benchmark tools.
- `content/wiki/NVIDIA-Dynamo.md` - connected AIPerf-style benchmarking to scale-out inference serving.
- `content/index.md` - updated page count to 397 and indexed the five new inference-tooling pages.

---

## 2026-04-29 - Overnight batch 38: NVIDIA TAO coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch38-20260429T090656Z`; local Git tag `codex-backup-overnight-pre-batch38-20260429T090656Z`

**Source URLs:** https://docs.nvidia.com/tao/index.html, https://docs.nvidia.com/tao/tao-toolkit/latest/index.html, https://docs.nvidia.com/tao/tao-toolkit/latest/text/overview.html, https://docs.nvidia.com/tao/tao-toolkit/latest/text/model_zoo/overview.html, https://docs.nvidia.com/tao/tao-toolkit/latest/text/data_services/index.html

**Gap analysis summary:**

- Added a canonical NVIDIA TAO page for the current TAO Toolkit docs surface instead of creating separate pages for every model, launcher, microservice, deploy recipe, or tutorial under the TAO docs tree.
- Captured current TAO scope across fine-tuning microservices, launcher/containers/wheels/source workflows, model zoo, data services, CV/VLM/embedding fine-tuning, quantization, TensorRT, Triton, DeepStream, and NGC.
- Included current release signals from TAO 6.26.3 such as CLIP/Cosmos Embed1/C-RADIO model paths, expanded QDQ ONNX quantization, TensorRT FP8/INT8 engine generation, and Cosmos Reason 2.0 VLM fine-tuning.
- Connected TAO to Metropolis, DeepStream, NGC, NGC Catalog, TensorRT, Triton, Jetson, and Isaac ROS perception pages.

**Pages created (1 total):**

- `content/wiki/NVIDIA-TAO.md`

**Pages updated:**

- `content/wiki/NVIDIA-Metropolis.md` and `content/wiki/NVIDIA-DeepStream.md` - connected TAO as the model customization and optimization path for video analytics.
- `content/wiki/NGC.md` and `content/wiki/NVIDIA-NGC-Catalog.md` - connected TAO containers and pretrained models to NVIDIA artifact distribution.
- `content/wiki/TensorRT.md` and `content/wiki/Triton-Inference-Server.md` - connected TAO deployment/profiling paths to optimized inference and model serving.
- `content/wiki/Isaac-ROS-DNN-Inference.md`, `content/wiki/Isaac-ROS-Object-Detection.md`, and `content/wiki/Isaac-ROS-Image-Segmentation.md` - connected TAO model fine-tuning to robotics perception.
- `content/wiki/NVIDIA-Jetson-Platform.md` - connected TAO to Jetson-deployed DeepStream and robotics models.
- `content/index.md` - updated page count to 392 and indexed NVIDIA TAO.

---

## 2026-04-29 - Overnight batch 37: Isaac ROS perception utilities

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch37-20260429T090226Z`; local Git tag `codex-backup-overnight-pre-batch37-20260429T090226Z`

**Source URLs:** https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_image_segmentation/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_dnn_stereo_depth/index.html, https://nvidia-isaac-ros.github.io/concepts/stereo_depth/ess/index.html, https://nvidia-isaac-ros.github.io/concepts/stereo_depth/foundationstereo/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_apriltag/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_image_pipeline/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_compression/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_sipl_camera/index.html, https://nvidia-isaac-ros.github.io/releases/index.html

**Gap analysis summary:**

- Added the remaining current Isaac ROS perception/utilities pages with durable query value: Image Segmentation, DNN Stereo Depth, AprilTag, Image Pipeline, Compression, and SIPL Camera.
- Kept ESS, SGM, and FoundationStereo context inside the DNN Stereo Depth page while preserving the existing FoundationStereo page as the model-specific canonical page.
- Kept U-Net, SegFormer, Segment Anything, and Segment Anything 2 as details inside Image Segmentation rather than creating one page per model/tutorial.
- Connected image pipeline, SIPL camera, DNN stereo depth, segmentation, AprilTag, and compression into Isaac ROS, Jetson, JetPack, VPI, TensorRT, NITROS, manipulation, and mobility pages.
- Treated hardware support matrices, quickstarts, package subdirectories, and camera examples as source detail only; no one-off tutorial pages were created.

**Pages created (6 total):**

- `content/wiki/Isaac-ROS-Image-Segmentation.md`
- `content/wiki/Isaac-ROS-DNN-Stereo-Depth.md`
- `content/wiki/Isaac-ROS-AprilTag.md`
- `content/wiki/Isaac-ROS-Image-Pipeline.md`
- `content/wiki/Isaac-ROS-Compression.md`
- `content/wiki/Isaac-ROS-SIPL-Camera.md`

**Pages updated:**

- `content/wiki/NVIDIA-Isaac-ROS.md` - promoted the six new perception/utilities pages into the Isaac ROS graph.
- `content/wiki/Isaac-ROS-DNN-Inference.md`, `content/wiki/Isaac-ROS-NITROS.md`, `content/wiki/Isaac-ROS-Object-Detection.md`, `content/wiki/Isaac-ROS-FoundationStereo.md`, and `content/wiki/Isaac-ROS-nvblox.md` - connected the new pages to inference, transport, perception, depth, and mapping.
- `content/wiki/NVIDIA-Isaac-for-Manipulation.md` and `content/wiki/NVIDIA-Isaac-for-Mobility.md` - connected the new camera/perception pages to current reference workflows.
- `content/wiki/NVIDIA-Jetson-Platform.md`, `content/wiki/NVIDIA-JetPack-SDK.md`, `content/wiki/TensorRT.md`, and `content/wiki/NVIDIA-VPI.md` - connected Jetson, JetPack, inference, and vision acceleration context.
- `content/index.md` - updated page count to 391 and indexed the six new Isaac ROS perception/utilities pages.

---

## 2026-04-29 - Overnight batch 36: Isaac ROS core graph components

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch36-20260429T085823Z`; local Git tag `codex-backup-overnight-pre-batch36-20260429T085823Z`

**Source URLs:** https://nvidia-isaac-ros.github.io/concepts/nitros/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_nitros/index.html, https://nvidia-isaac-ros.github.io/concepts/visual_slam/cuvslam/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_visual_slam/index.html, https://nvidia-isaac-ros.github.io/concepts/visual_global_localization/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_mapping_and_localization/isaac_ros_visual_global_localization/index.html, https://nvidia-isaac-ros.github.io/concepts/dnn_inference/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_dnn_inference/index.html, https://nvidia-isaac-ros.github.io/concepts/object_detection/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_object_detection/index.html, https://nvidia-isaac-ros.github.io/releases/index.html

**Gap analysis summary:**

- Added current Isaac ROS core graph pages that were missing from the wiki: NITROS, Visual SLAM/cuVSLAM, Visual Global Localization/cuVGL, DNN Inference, and Object Detection.
- Kept each topic as one canonical page and folded package subdirectories, quickstarts, and model-specific tutorials into the relevant page rather than creating one wiki page per tutorial or model variant.
- Connected NITROS to accelerated ROS 2 type adaptation/negotiation and the Isaac ROS perception graph.
- Connected Visual SLAM and Visual Global Localization to mobility, nvblox, stereo depth, Jetson, and Isaac Sim validation workflows.
- Connected DNN Inference and Object Detection to TensorRT, Triton, NITROS, Jetson, manipulation, and mobility.
- Continued treating build-style pages and individual examples as supporting context only.

**Pages created (5 total):**

- `content/wiki/Isaac-ROS-NITROS.md`
- `content/wiki/Isaac-ROS-Visual-SLAM.md`
- `content/wiki/Isaac-ROS-Visual-Global-Localization.md`
- `content/wiki/Isaac-ROS-DNN-Inference.md`
- `content/wiki/Isaac-ROS-Object-Detection.md`

**Pages updated:**

- `content/wiki/NVIDIA-Isaac.md` and `content/wiki/NVIDIA-Isaac-ROS.md` - promoted the new Isaac ROS core graph pages into the umbrella robotics graph.
- `content/wiki/NVIDIA-Isaac-for-Mobility.md` and `content/wiki/NVIDIA-Isaac-for-Manipulation.md` - connected the new perception, localization, and transport pages to current reference workflows.
- `content/wiki/Isaac-ROS-nvblox.md`, `content/wiki/Isaac-ROS-FoundationPose.md`, and `content/wiki/Isaac-ROS-FoundationStereo.md` - connected mapping and model pages to the new core graph components.
- `content/wiki/NVIDIA-Jetson-Platform.md` and `content/wiki/NVIDIA-JetPack-SDK.md` - connected Jetson/JetPack context to NITROS, Visual SLAM, DNN Inference, and object detection.
- `content/wiki/TensorRT.md` and `content/wiki/Triton-Inference-Server.md` - connected general inference pages to Isaac ROS DNN Inference and robot perception.
- `content/index.md` - updated page count to 385 and indexed the five new Isaac ROS core graph pages.

---

## 2026-04-29 - Overnight batch 35: Isaac ROS physical AI workflows

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch35-20260429T085227Z`; local Git tag `codex-backup-overnight-pre-batch35-20260429T085227Z`

**Source URLs:** https://nvidia-isaac-ros.github.io/reference_workflows/isaac_for_manipulation/reference_architecture.html, https://nvidia-isaac-ros.github.io/reference_workflows/isaac_for_mobility/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_cumotion/index.html, https://nvidia-isaac-ros.github.io/concepts/scene_reconstruction/nvblox/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_nvblox/index.html, https://nvidia-isaac-ros.github.io/concepts/pose_estimation/foundationpose/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_pose_estimation/isaac_ros_foundationpose/index.html, https://nvidia-isaac-ros.github.io/concepts/stereo_depth/foundationstereo/index.html, https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_dnn_stereo_depth/isaac_ros_foundationstereo/index.html, https://nvidia-isaac-ros.github.io/releases/index.html

**Gap analysis summary:**

- Added current Isaac ROS physical AI workflow pages that were missing from the wiki: Isaac for Manipulation, Isaac for Mobility, cuMotion, nvblox, FoundationPose, and FoundationStereo.
- Used the latest Isaac ROS naming: Isaac for Manipulation is the current workflow family for what older release notes may call Isaac Manipulator, and Isaac for Mobility continues Isaac Perceptor while current docs optimize the path for Thor.
- Kept each durable workflow/model/component as one canonical page and did not create separate wiki pages for every tutorial, package subdirectory, robot bringup package, or individual build.
- Connected manipulation to cuMotion, nvblox, FoundationPose, FoundationStereo, Isaac Sim, Isaac Lab, Jetson, and TensorRT.
- Connected mobility to nvblox, FoundationStereo, Jetson Thor, Isaac Sim, VPI, TensorRT, and current Isaac ROS release signals.
- Treated build-style and tutorial-style pages as supporting discovery only; no pages were created for one-off examples or repeated variants.

**Pages created (6 total):**

- `content/wiki/NVIDIA-Isaac-for-Manipulation.md`
- `content/wiki/NVIDIA-Isaac-for-Mobility.md`
- `content/wiki/Isaac-ROS-cuMotion.md`
- `content/wiki/Isaac-ROS-nvblox.md`
- `content/wiki/Isaac-ROS-FoundationPose.md`
- `content/wiki/Isaac-ROS-FoundationStereo.md`

**Pages updated:**

- `content/wiki/NVIDIA-Isaac.md` - promoted current manipulation/mobility workflow naming and linked durable Isaac ROS component pages.
- `content/wiki/NVIDIA-Isaac-ROS.md` - connected the new workflow and component pages to the deployment-side ROS 2 stack.
- `content/wiki/NVIDIA-Isaac-Sim.md` and `content/wiki/NVIDIA-Isaac-Lab.md` - connected simulation and robot-learning pages to the new manipulation/mobility workflows.
- `content/wiki/NVIDIA-Jetson-Platform.md` and `content/wiki/NVIDIA-JetPack-SDK.md` - connected current Isaac ROS mobility/manipulation component coverage to Jetson and JetPack compatibility context.
- `content/index.md` - updated page count to 380 and indexed the six new Isaac ROS physical AI pages.

---

## 2026-04-29 - Overnight batch 34: NeMo Framework tooling

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch34-20260429T084414Z`; local Git tag `codex-backup-overnight-pre-batch34-20260429T084414Z`

**Source URLs:** https://docs.nvidia.com/nemo/automodel/latest/index.html, https://docs.nvidia.com/nemo/automodel/latest/about/index.html, https://docs.nvidia.com/nemo/automodel/latest/about/key-features.html, https://docs.nvidia.com/nemo/automodel/latest/launcher/nemo-run.html, https://docs.nvidia.com/nemo/rl/latest/about/overview.html, https://docs.nvidia.com/nemo/rl/latest/about/model-support.html, https://docs.nvidia.com/nemo/rl/latest/about/backends.html, https://docs.nvidia.com/nemo/run/latest/index.html, https://docs.nvidia.com/nemo/megatron-bridge/latest/index.html, https://docs.nvidia.com/nemo/export-deploy/latest/index.html, https://docs.nvidia.com/nemo/export-deploy/latest/apidocs/nemo_export/nemo_export.html, https://docs.nvidia.com/nemo-framework/user-guide/latest/overview.html

**Gap analysis summary:**

- Added current NVIDIA NeMo Framework tooling docs that were missing from the wiki: AutoModel, RL, Run, Megatron Bridge, and Export-Deploy.
- Kept each tool as one canonical page because each has its own latest NVIDIA docs tree, separate package/tool identity, and distinct query intent.
- Connected AutoModel to Hugging Face-compatible training, SFT/PEFT, VLM/diffusion, FP8, QAT, distillation, and NeMo Run launch workflows.
- Connected NeMo RL to post-training, reinforcement learning, Ray, AutoModel/PyTorch and Megatron backends, vLLM rollouts, and Nemotron model support.
- Connected Megatron Bridge and Export-Deploy to the training-to-inference path across Megatron, Hugging Face, TensorRT-LLM, vLLM, Triton, and NIM.
- Continued avoiding per-model or per-recipe pages; supported models and recipes were folded into the canonical tool pages and the existing Nemotron/NeMo pages.

**Pages created (5 total):**

- `content/wiki/NeMo-AutoModel.md`
- `content/wiki/NeMo-RL.md`
- `content/wiki/NeMo-Run.md`
- `content/wiki/NeMo-Megatron-Bridge.md`
- `content/wiki/NeMo-Export-Deploy.md`

**Pages updated:**

- `content/wiki/NVIDIA-NeMo.md` - promoted the five NeMo Framework tooling pages into the core NeMo architecture and connections.
- `content/wiki/NeMo-Customizer.md` and `content/wiki/NeMo-Evaluator.md` - connected managed customization/evaluation to code-level training, post-training, bridge, and deployment tooling.
- `content/wiki/NVIDIA-NIM.md` and `content/wiki/NVIDIA-AI-Enterprise.md` - connected the new framework tooling to inference and enterprise deployment context.
- `content/wiki/Megatron-LM.md`, `content/wiki/TensorRT-LLM.md`, `content/wiki/Triton-Inference-Server.md`, and `content/wiki/vLLM.md` - connected the new NeMo tooling to training, export, and serving paths.
- `content/wiki/Nemotron.md` - connected current Nemotron model support to AutoModel, NeMo RL, and Megatron Bridge.
- `content/index.md` - updated page count to 374 and indexed the five new NeMo Framework tooling pages.

---

## 2026-04-29 - Overnight batch 33: NeMo Platform microservices

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch33-20260429T083628Z`; local Git tag `codex-backup-overnight-pre-batch33-20260429T083628Z`

**Source URLs:** https://docs.nvidia.com/nemo/microservices/latest/index.html, https://docs.nvidia.com/nemo/microservices/latest/data-designer/index.html, https://docs.nvidia.com/nemo/microservices/latest/data-designer/quickstart.html, https://docs.nvidia.com/nemo/microservices/latest/customizer/index.html, https://docs.nvidia.com/nemo/microservices/latest/evaluator/index.html, https://docs.nvidia.com/nemo/microservices/latest/safe-synthesizer/about/index.html, https://docs.nvidia.com/nemo/microservices/latest/audit/index.html

**Gap analysis summary:**

- Added first-class pages for current NVIDIA NeMo Platform microservices that were missing from the wiki: Data Designer, Customizer, Evaluator, Safe Synthesizer, and Auditor.
- Kept each service as one canonical page because each has its own current NVIDIA docs surface, separate service intent, and distinct query target.
- Connected Data Designer to synthetic dataset generation, Customizer to LoRA/SFT/DPO and embedding customization, Evaluator to LLM/RAG/retriever/agent measurement, Safe Synthesizer to private tabular data synthesis, and Auditor to safety vulnerability probing.
- Folded the new services into existing pages for NeMo, NeMo Platform, Data Flywheel, AI-Q, RAG, Guardrails, NemoGuard NIMs, NeMo Curator, NIM, AI Blueprints, and AI Enterprise.
- Continued to treat build.nvidia as discovery/supporting context rather than a reason to create pages for every individual build listing.

**Pages created (5 total):**

- `content/wiki/NeMo-Data-Designer.md`
- `content/wiki/NeMo-Customizer.md`
- `content/wiki/NeMo-Evaluator.md`
- `content/wiki/NeMo-Safe-Synthesizer.md`
- `content/wiki/NeMo-Auditor.md`

**Pages updated:**

- `content/wiki/NeMo-Platform.md` and `content/wiki/NVIDIA-NeMo.md` - promoted the five NeMo Platform services into the core NeMo lifecycle graph.
- `content/wiki/NVIDIA-Data-Flywheel-Blueprint.md`, `content/wiki/NVIDIA-AI-Q-Blueprint.md`, and `content/wiki/NVIDIA-RAG-Blueprint.md` - connected data generation, customization, and evaluation services to blueprint workflows.
- `content/wiki/NeMo-Guardrails.md` and `content/wiki/NVIDIA-NemoGuard-NIMs.md` - connected safety auditing and evaluation to guardrail runtime and safety NIMs.
- `content/wiki/NeMo-Curator.md` - connected data curation to Data Designer, Customizer, Evaluator, and Safe Synthesizer.
- `content/wiki/NVIDIA-NIM.md`, `content/wiki/NVIDIA-AI-Blueprints.md`, and `content/wiki/NVIDIA-AI-Enterprise.md` - connected the new microservices to the broader inference, blueprint, and enterprise software graphs.
- `content/index.md` - updated page count to 369 and indexed the five new NeMo Platform service pages.

---

## 2026-04-29 - Overnight batch 32: NVIDIA Blueprint coverage for RAG, VSS, and Tokkio

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch32-20260429T082759Z`; local Git tag `codex-backup-overnight-pre-batch32-20260429T082759Z`

**Source URLs:** https://docs.nvidia.com/rag/latest/, https://docs.nvidia.com/rag/latest/vlm-embed.html, https://docs.nvidia.com/rag/latest/multimodal-query.html, https://docs.nvidia.com/vss/latest/, https://docs.nvidia.com/vss/latest/adding-workflows.html, https://docs.nvidia.com/vss/latest/vss-agent/VSS-Agent-Overview.html, https://docs.nvidia.com/ace/tokkio/latest/overview/overview.html, https://docs.nvidia.com/ace/tokkio/latest/overview/architecture.html, https://github.com/NVIDIA-AI-Blueprints/digital-human

**Gap analysis summary:**

- Added first-class pages for durable NVIDIA-authored blueprint docs that were missing from the wiki: RAG Blueprint, Video Search and Summarization (VSS), and Tokkio Digital Human.
- Treated each blueprint as one canonical topic page and did not create separate pages for every workflow, deployment profile, sub-blueprint, release note, or build.nvidia listing.
- Connected RAG Blueprint to NIM, NIM Operator, AI-Q, AI Data Platform, NeMo Retriever, NV-CLIP, VLMs, NemoGuard, Nemotron, cuVS, and AI Enterprise.
- Connected VSS to Metropolis, DeepStream, Cosmos, Cosmos Embed1, VLM NIMs, AI Data Platform, NIM, Triton, TensorRT, Jetson, and AI Enterprise.
- Connected Tokkio to ACE, Audio2Face-3D, Riva/Speech NIMs, NIM LLMs, RAG Blueprint, Omniverse, and AI Enterprise.

**Pages created (3 total):**

- `content/wiki/NVIDIA-RAG-Blueprint.md`
- `content/wiki/NVIDIA-Video-Search-and-Summarization-Blueprint.md`
- `content/wiki/NVIDIA-Tokkio-Digital-Human-Blueprint.md`

**Pages updated:**

- `content/wiki/NVIDIA-AI-Blueprints.md` and `content/wiki/NVIDIA-NIM.md` - promoted the new durable blueprints into the umbrella blueprint and NIM graphs.
- `content/wiki/NVIDIA-AI-Q-Blueprint.md`, `content/wiki/NVIDIA-AI-Data-Platform.md`, and `content/wiki/NeMo-Retriever.md` - connected RAG Blueprint to enterprise retrieval and agent workflows.
- `content/wiki/NVIDIA-DeepStream.md`, `content/wiki/NVIDIA-Metropolis.md`, `content/wiki/NVIDIA-Cosmos.md`, `content/wiki/NIM-for-Cosmos-Embed1.md`, and `content/wiki/NIM-for-Vision-Language-Models.md` - connected VSS to video analytics, Cosmos, embeddings, and VLM reasoning.
- `content/wiki/NVIDIA-ACE.md`, `content/wiki/NIM-for-Audio2Face-3D.md`, `content/wiki/NVIDIA-Riva.md`, and `content/wiki/NVIDIA-Speech-NIM-Microservices.md` - connected Tokkio to digital-human, speech, and avatar-animation workflows.
- `content/wiki/NVIDIA-AI-Enterprise.md` - connected all three new blueprint pages to the enterprise-supported software graph.
- `content/index.md` - updated page count to 364 and indexed the three new blueprint pages.

---

## 2026-04-29 - Overnight batch 31: NIM benchmarking, NV-CLIP, and DoMINO

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch31-20260429T081843Z`; local Git tag `codex-backup-overnight-pre-batch31-20260429T081843Z`

**Source URLs:** https://docs.nvidia.com/nim/benchmarking/llm/latest/overview.html, https://docs.nvidia.com/nim/benchmarking/llm/latest/, https://docs.nvidia.com/nim/nvclip/latest/introduction.html, https://docs.nvidia.com/nim/nvclip/latest/index.html, https://docs.nvidia.com/nim/nvclip/latest/getting-started.html, https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/overview.html, https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/index.html, https://docs.nvidia.com/nim/physicsnemo/domino-automotive-aero/latest/prerequisites.html

**Gap analysis summary:**

- Added the current NVIDIA NIM LLM Benchmarking Guide as a first-class guide page because it has a durable latest docs surface and separate query intent from the LLM NIM deployment page.
- Added the current NVIDIA NV-CLIP NIM page for multimodal text/image embeddings, semantic image search, and multimodal RAG; connected it to Retriever, VLM, NVLM, AI Data Platform, AI-Q, AI Enterprise, TensorRT, and Triton.
- Added the current NVIDIA PhysicsNeMo DoMINO Automotive Aero NIM page for automotive external-aerodynamics surrogate simulation; connected it to PhysicsNeMo, Modulus, DRIVE, AI Enterprise, TensorRT, and Triton.
- Treated build.nvidia-style hosted cards as supporting discovery only; this batch did not create pages from individual build listings or repeated builds.
- Kept each created page scoped to one durable NVIDIA docs topic, and merged related context into existing pages instead of creating duplicate topic pages.

**Pages created (3 total):**

- `content/wiki/NIM-for-LLM-Benchmarking-Guide.md`
- `content/wiki/NIM-for-NV-CLIP.md`
- `content/wiki/NIM-for-DoMINO-Automotive-Aero.md`

**Pages updated:**

- `content/wiki/NVIDIA-NIM.md` - promoted LLM benchmarking, NV-CLIP, and DoMINO into the NIM catalog graph.
- `content/wiki/NIM-for-Large-Language-Models.md` - linked the LLM benchmarking guide into deployment and production-readiness context.
- `content/wiki/NeMo-Retriever.md`, `content/wiki/NeMo-Retriever-Embedding-NIM.md`, `content/wiki/NIM-for-Vision-Language-Models.md`, `content/wiki/NVLM.md`, `content/wiki/NVIDIA-AI-Data-Platform.md`, and `content/wiki/NVIDIA-AI-Q-Blueprint.md` - connected NV-CLIP to multimodal embedding, retrieval, RAG, and agent workflows.
- `content/wiki/PhysicsNeMo.md`, `content/wiki/NVIDIA-Modulus.md`, `content/wiki/NVIDIA-Drive-Platform.md`, and `content/wiki/NVIDIA-DRIVE-AGX-Thor.md` - connected DoMINO Automotive Aero to physics-ML, vehicle design, and automotive simulation context.
- `content/wiki/NVIDIA-AI-Enterprise.md`, `content/wiki/TensorRT.md`, and `content/wiki/Triton-Inference-Server.md` - connected the new guide/microservices to enterprise support, acceleration, and serving layers.
- `content/index.md` - updated page count to 361 and indexed the three new pages.

---

## 2026-04-29 - Overnight batch 30: ALCHEMI and expanded BioNeMo NIMs

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch30-20260429T081149Z`; local Git tag `codex-backup-overnight-pre-batch30-20260429T081149Z`

**Source URLs:** https://docs.nvidia.com/nim/alchemi/alchemi-bgr/latest/overview.html, https://docs.nvidia.com/nim/alchemi/alchemi-bmd/latest/overview.html, https://docs.nvidia.com/nim/bionemo/molmim/latest/overview.html, https://docs.nvidia.com/nim/bionemo/genmol/latest/overview.html, https://docs.nvidia.com/nim/bionemo/msa-search/latest/overview.html, https://docs.nvidia.com/nim/bionemo/proteinmpnn/latest/overview.html, https://docs.nvidia.com/nim/bionemo/rfdiffusion/latest/overview.html, https://docs.nvidia.com/nim/bionemo/diffdock/latest/overview.html

**Gap analysis summary:**

- Added current NVIDIA-authored ALCHEMI NIM docs for batched geometry relaxation and batched molecular dynamics.
- Added current BioNeMo NIM docs that were missing from the wiki graph: MolMIM, GenMol, MSA Search, ProteinMPNN, RFdiffusion, and DiffDock.
- Kept each NIM as its own page because each has a separate current NVIDIA docs surface, distinct model/service purpose, and different query intent.
- Connected the new pages into the existing BioNeMo, Clara, NIM, AI Enterprise, TensorRT, Triton, cuEquivariance, and structure-prediction graphs.
- Did not create pages for every release note, support-matrix row, model-card/table entry, or build.nvidia listing; build.nvidia/model-card references remain supporting context only when NVIDIA docs point there.

**Pages created (8 total):**

- `content/wiki/NIM-for-ALCHEMI-Batched-Geometry-Relaxation.md`
- `content/wiki/NIM-for-ALCHEMI-Batched-Molecular-Dynamics.md`
- `content/wiki/NIM-for-MolMIM.md`
- `content/wiki/NIM-for-GenMol.md`
- `content/wiki/NIM-for-MSA-Search.md`
- `content/wiki/NIM-for-ProteinMPNN.md`
- `content/wiki/NIM-for-RFdiffusion.md`
- `content/wiki/NIM-for-DiffDock.md`

**Pages updated:**

- `content/wiki/NVIDIA-BioNeMo.md` - expanded BioNeMo coverage for MSA search, protein design, small molecule generation, docking, and ALCHEMI atomistic modeling.
- `content/wiki/NVIDIA-NIM.md` - promoted additional BioNeMo/ALCHEMI NIMs into the umbrella NIM graph.
- `content/wiki/NVIDIA-AI-Enterprise.md` and `content/wiki/NVIDIA-Clara.md` - linked new life-sciences and atomistic modeling NIMs to enterprise and healthcare/life-sciences contexts.
- `content/wiki/NIM-for-AlphaFold2.md`, `content/wiki/NIM-for-AlphaFold2-Multimer.md`, `content/wiki/NIM-for-OpenFold2.md`, `content/wiki/NIM-for-OpenFold3.md`, `content/wiki/NIM-for-Boltz2.md`, and `content/wiki/NIM-for-Evo-2.md` - connected existing structure/sequence pages to MSA Search, ProteinMPNN, RFdiffusion, and DiffDock where relevant.
- `content/wiki/cuEquivariance.md`, `content/wiki/TensorRT.md`, and `content/wiki/Triton-Inference-Server.md` - connected geometry-aware/scientific NIMs to acceleration and serving layers.
- `content/index.md` - updated page count to 358 and indexed the new ALCHEMI/BioNeMo NIM pages.

---

## 2026-04-29 - Overnight batch 29: Maxine and Digital Human NIM microservices

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch29-20260429T080215Z`; local Git tag `codex-backup-overnight-pre-batch29-20260429T080215Z`

**Source URLs:** https://docs.nvidia.com/nim/maxine/studio-voice/latest/overview.html, https://docs.nvidia.com/nim/maxine/studio-voice/latest/support-matrix.html, https://docs.nvidia.com/nim/maxine/audio2face-2d/latest/overview.html, https://docs.nvidia.com/nim/maxine/audio2face-2d/latest/support-matrix.html, https://docs.nvidia.com/nim/maxine/eye-contact/latest/overview.html, https://docs.nvidia.com/nim/maxine/eye-contact/latest/support-matrix.html, https://docs.nvidia.com/nim/maxine/active-speaker-detection/latest/overview.html, https://docs.nvidia.com/nim/maxine/active-speaker-detection/latest/support-matrix.html, https://docs.nvidia.com/nim/digital-human/a2f-3d/latest/index.html, https://docs.nvidia.com/ace/audio2face-3d-microservice/latest/text/getting-started/overview.html, https://docs.nvidia.com/ace/audio2face-3d-microservice/latest/text/support-matrix.html

**Gap analysis summary:**

- Added current NVIDIA-authored Maxine NIM docs surfaces that were missing from the media AI graph: Studio Voice, Audio2Face-2D, Eye Contact, and Active Speaker Detection.
- Added the current Digital Human Audio2Face-3D NIM page as the ACE-facing 3D avatar animation counterpart to the 2D Maxine Audio2Face page.
- Kept each NIM as its own wiki page because each has a durable current NVIDIA docs surface, separate model/service ID, distinct inputs/outputs, and different query intent.
- Treated build.nvidia links only as Try API/demo references named by the docs, not as independent wiki-page sources or a reason to create per-build pages.
- Connected Maxine NIMs to Maxine, AI for Media SDKs, AR SDK, Audio Effects SDK, Speech NIMs, Riva, ACE, Omniverse, DeepStream, AI Enterprise, TensorRT, Triton, CUDA, NGC, and the master index.

**Pages created (5 total):**

- `content/wiki/NIM-for-Maxine-Studio-Voice.md`
- `content/wiki/NIM-for-Maxine-Audio2Face-2D.md`
- `content/wiki/NIM-for-Maxine-Eye-Contact.md`
- `content/wiki/NIM-for-Maxine-Active-Speaker-Detection.md`
- `content/wiki/NIM-for-Audio2Face-3D.md`

**Pages updated:**

- `content/wiki/NVIDIA-Maxine.md` - promoted current Maxine NIM services into the platform graph.
- `content/wiki/NVIDIA-AI-for-Media-SDKs.md`, `content/wiki/NVIDIA-Augmented-Reality-SDK.md`, and `content/wiki/NVIDIA-Audio-Effects-SDK.md` - linked SDK-level media capabilities to deployable NIM counterparts.
- `content/wiki/NVIDIA-ACE.md` and `content/wiki/NVIDIA-Omniverse.md` - connected Audio2Face-3D to digital-human and 3D avatar workflows.
- `content/wiki/NVIDIA-NIM.md` and `content/wiki/NVIDIA-AI-Enterprise.md` - added media and digital-human NIMs to the broader NIM/enterprise catalog graph.
- `content/wiki/NVIDIA-Speech-NIM-Microservices.md`, `content/wiki/NVIDIA-TTS-NIM.md`, `content/wiki/NVIDIA-Riva.md`, and `content/wiki/NVIDIA-Background-Noise-Removal-NIM.md` - connected speech/audio pipelines to Studio Voice and Audio2Face workflows.
- `content/wiki/NVIDIA-DeepStream.md`, `content/wiki/TensorRT.md`, and `content/wiki/Triton-Inference-Server.md` - connected media NIMs to video pipeline, optimization, and serving layers.
- `content/index.md` - updated page count to 350 and indexed the new Maxine/Digital Human NIM pages.

---

## 2026-04-29 - Overnight batch 28: MONAI medical imaging NIMs

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch28-20260429T075833Z`; local Git tag `codex-backup-overnight-pre-batch28-20260429T075833Z`

**Source URLs:** https://docs.nvidia.com/nim/medical/maisi/latest/overview.html, https://docs.nvidia.com/nim/medical/maisi/latest/index.html, https://docs.nvidia.com/nim/medical/vista3d/latest/overview.html, https://docs.nvidia.com/nim/medical/vista3d/latest/index.html, https://docs.nvidia.com/nim/medical/vista3d/latest/api-reference.html

**Gap analysis summary:**

- Added the two current NVIDIA medical imaging NIM docs pages that were missing from the Clara/MONAI graph: MAISI and VISTA-3D.
- Kept MAISI and VISTA-3D separate because each has its own durable NVIDIA documentation page, model purpose, API surface, and query intent.
- Connected MAISI to MONAI, Clara, Clara Viz, NIM, AI Enterprise, NGC, TensorRT, and Triton as the synthetic CT generation and annotation-mask NIM.
- Connected VISTA-3D to MONAI, Clara, Clara Viz, NIM, AI Enterprise, NGC, TensorRT, and Triton as the interactive 3D segmentation and annotation NIM.
- Did not create separate pages for release notes, API endpoints, 3D Slicer examples, or support matrix rows.

**Pages created (2 total):**

- `content/wiki/NIM-for-MAISI.md`
- `content/wiki/NIM-for-VISTA-3D.md`

**Pages updated:**

- `content/wiki/NVIDIA-MONAI-Toolkit.md` - added current medical imaging NIMs to the MONAI graph.
- `content/wiki/NVIDIA-Clara.md` and `content/wiki/NVIDIA-Clara-Viz.md` - linked MAISI and VISTA-3D into healthcare imaging and visualization workflows.
- `content/wiki/NVIDIA-NIM.md` - promoted medical imaging NIMs into the NIM catalog graph.
- `content/wiki/NVIDIA-AI-Enterprise.md` - connected medical imaging NIMs to enterprise deployment context.
- `content/wiki/TensorRT.md` and `content/wiki/Triton-Inference-Server.md` - connected medical imaging NIMs to acceleration and serving layers.
- `content/index.md` - updated page count to 345 and indexed the new medical imaging NIM pages.

---

## 2026-04-29 - Overnight batch 27: NemoGuard and multimodal safety NIMs

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch27-20260429T075302Z`; local Git tag `codex-backup-overnight-pre-batch27-20260429T075302Z`

**Source URLs:** https://docs.nvidia.com/nemo/microservices/26.3.0/guardrails/tutorials/deploy-nemoguard-nims.html, https://docs.nvidia.com/nim/llama-3-1-nemoguard-8b-topiccontrol/latest/index.html, https://docs.nvidia.com/nim/llama-3-1-nemoguard-8b-contentsafety/latest/index.html, https://docs.nvidia.com/nim/llama-3-1-nemotron-safety-guard-8b/latest/index.html, https://docs.nvidia.com/nim/nemoguard-jailbreakdetect/latest/index.html, https://docs.nvidia.com/nim/multimodal-safety/latest/overview.html

**Gap analysis summary:**

- Added first-class pages for current NVIDIA guardrail and safety NIM surfaces: NemoGuard NIMs, TopicControl, ContentSafety, Nemotron Safety Guard, JailbreakDetect, and Multimodal Safety.
- Kept each guardrail NIM as its own wiki page because each has its own durable NVIDIA docs surface, endpoint behavior, use case, and query intent.
- Connected text safety NIMs to NeMo Guardrails, NeMo Platform, NIM for LLMs, Nemotron, AI Enterprise, TensorRT, and Triton.
- Connected Multimodal Safety to VLM, Visual GenAI, Retriever extraction NIMs, NeMo Guardrails, TensorRT, and Triton for visual moderation and generated-content safety.
- Did not create separate pages for every prompt template, support matrix, hosted Try API, or tutorial code path.

**Pages created (6 total):**

- `content/wiki/NVIDIA-NemoGuard-NIMs.md`
- `content/wiki/Llama-3.1-Nemotron-Safety-Guard-8B-NIM.md`
- `content/wiki/Llama-3.1-NemoGuard-8B-TopicControl-NIM.md`
- `content/wiki/Llama-3.1-NemoGuard-8B-ContentSafety-NIM.md`
- `content/wiki/NVIDIA-NemoGuard-JailbreakDetect-NIM.md`
- `content/wiki/NIM-for-Multimodal-Safety.md`

**Pages updated:**

- `content/wiki/NeMo-Guardrails.md` and `content/wiki/NeMo-Platform.md` - connected guardrail runtime and platform deployment to NemoGuard NIM pages.
- `content/wiki/NVIDIA-NIM.md` - promoted safety and guardrail NIMs into the umbrella NIM graph.
- `content/wiki/NIM-for-Large-Language-Models.md` - linked LLM-serving NIM patterns to guardrail classifier NIMs.
- `content/wiki/NIM-for-Vision-Language-Models.md` and `content/wiki/NIM-for-Visual-Generative-AI.md` - linked multimodal and visual generation workflows to Multimodal Safety.
- `content/wiki/Nemotron.md` and `content/wiki/NVIDIA-NeMo.md` - connected Nemotron/NeMo safety lineage to deployable guardrail NIMs.
- `content/wiki/NVIDIA-AI-Enterprise.md` and `content/wiki/NVIDIA-AI-Blueprints.md` - connected enterprise and blueprint workflows to safety NIMs.
- `content/wiki/TensorRT.md` and `content/wiki/Triton-Inference-Server.md` - connected safety NIMs to acceleration and serving layers.
- `content/index.md` - updated page count to 343 and indexed the new safety NIM pages.

---

## 2026-04-29 - Overnight batch 26: Speech and audio NIM microservices

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch26-20260429T074636Z`; local Git tag `codex-backup-overnight-pre-batch26-20260429T074636Z`

**Source URLs:** https://docs.nvidia.com/nim/speech/latest/index.html, https://docs.nvidia.com/nim/speech/latest/about/how-it-works.html, https://docs.nvidia.com/nim/speech/latest/asr/index.html, https://docs.nvidia.com/nim/speech/latest/tts/index.html, https://docs.nvidia.com/nim/speech/latest/nmt/index.html, https://docs.nvidia.com/nim/maxine/bnr/latest/overview.html

**Gap analysis summary:**

- Added the current NVIDIA Speech NIM documentation surface as a first-class page after verifying that older Riva ASR/TTS/NMT NIM docs have migrated to `docs.nvidia.com/nim/speech/latest`.
- Added separate ASR, TTS, and NMT NIM pages because each is a durable current NVIDIA docs topic with distinct APIs, models, and query intent.
- Added Background Noise Removal NIM from the Maxine NIM docs as a separate audio enhancement microservice rather than folding it into the broader Audio Effects SDK page.
- Linked Speech NIMs to Riva, NeMo, Nemotron, Parakeet, Canary, NIM, TensorRT, Triton, AI Enterprise, ACE, and Maxine so speech model training, serving, and application workflows are queryable from multiple entry points.
- Did not create pages for every ASR/TTS model variant, support matrix row, or build.nvidia Try API listing; those details remain summarized under the canonical NIM pages.

**Pages created (5 total):**

- `content/wiki/NVIDIA-Speech-NIM-Microservices.md`
- `content/wiki/NVIDIA-ASR-NIM.md`
- `content/wiki/NVIDIA-TTS-NIM.md`
- `content/wiki/NVIDIA-NMT-NIM.md`
- `content/wiki/NVIDIA-Background-Noise-Removal-NIM.md`

**Pages updated:**

- `content/wiki/NVIDIA-NIM.md` - promoted Speech NIM and BNR pages into the NIM model/microservice graph.
- `content/wiki/NVIDIA-Riva.md` - pointed Riva-lineage ASR/TTS/NMT NIM coverage at the current Speech NIM docs.
- `content/wiki/Parakeet-ASR.md` and `content/wiki/NVIDIA-Canary.md` - connected existing ASR model pages to current ASR NIM deployment docs.
- `content/wiki/NVIDIA-Maxine.md` and `content/wiki/NVIDIA-Audio-Effects-SDK.md` - linked Background Noise Removal NIM to Maxine/audio cleanup workflows.
- `content/wiki/Nemotron.md`, `content/wiki/NVIDIA-NeMo.md`, and `content/wiki/NVIDIA-ACE.md` - connected speech model families and digital-human speech workflows to current Speech NIM pages.
- `content/wiki/TensorRT.md`, `content/wiki/Triton-Inference-Server.md`, and `content/wiki/NVIDIA-AI-Enterprise.md` - linked speech/audio NIMs to acceleration, serving, and enterprise deployment layers.
- `content/index.md` - updated page count to 337 and indexed the new speech/audio NIM pages.

---

## 2026-04-29 - Overnight batch 25: Cosmos, Earth-2, and multimodal NIM coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch25-20260429T073813Z`; local Git tag `codex-backup-overnight-pre-batch25-20260429T073813Z`

**Source URLs:** https://docs.nvidia.com/nim/cosmos/latest/introduction.html, https://docs.nvidia.com/nim/cosmos/latest/index.html, https://docs.nvidia.com/nim/cosmos-embed1/latest/introduction.html, https://docs.nvidia.com/nim/earth-2/corrdiff/latest/overview.html, https://docs.nvidia.com/nim/earth-2/fourcastnet/latest/overview.html, https://docs.nvidia.com/nim/vision-language-models/latest/introduction.html, https://docs.nvidia.com/nim/vision-language-models/latest/index.html, https://docs.nvidia.com/nim/visual-genai/latest/overview.html, https://docs.nvidia.com/nim/visual-genai/latest/index.html

**Gap analysis summary:**

- Added current first-class NIM pages for Cosmos WFM, Cosmos Embed1, Earth-2 CorrDiff, Earth-2 FourCastNet, Vision Language Models, and Visual Generative AI.
- Kept Cosmos WFM, Cosmos Embed1, Earth-2 weather models, VLM serving, and Visual GenAI as distinct pages because each has its own current NVIDIA documentation surface and query intent.
- Linked Cosmos WFM and Cosmos Embed1 into Cosmos, Omniverse, Isaac, Cosmos Curator, AI Data Platform, NIM, TensorRT, and Triton instead of splitting individual model cards or build.nvidia listings into many pages.
- Linked Earth-2 CorrDiff and FourCastNet into Earth-2, PhysicsNeMo, Modulus, NIM, AI Enterprise, and Omniverse so climate AI deployment is queryable from both science and serving angles.
- Added VLM and Visual GenAI NIMs as durable category pages while avoiding separate pages for every individual model listed in current VLM/Visual GenAI docs or build.nvidia.

**Pages created (6 total):**

- `content/wiki/NIM-for-Cosmos-WFM.md`
- `content/wiki/NIM-for-Cosmos-Embed1.md`
- `content/wiki/NIM-for-Earth-2-CorrDiff.md`
- `content/wiki/NIM-for-Earth-2-FourCastNet.md`
- `content/wiki/NIM-for-Vision-Language-Models.md`
- `content/wiki/NIM-for-Visual-Generative-AI.md`

**Pages updated:**

- `content/wiki/NVIDIA-NIM.md` - promoted physical AI, Earth-2, VLM, and Visual GenAI NIM categories into the NIM graph.
- `content/wiki/NVIDIA-Cosmos.md` and `content/wiki/NVIDIA-Cosmos-Curator-LHA.md` - linked Cosmos generation, embedding, and video curation workflows.
- `content/wiki/Earth-2.md` and `content/wiki/PhysicsNeMo.md` - connected named Earth-2 NIMs to climate AI training and inference.
- `content/wiki/NVIDIA-AI-Data-Platform.md` and `content/wiki/NVIDIA-AI-Blueprints.md` - connected physical AI video search, multimodal reasoning, and visual generation to data/blueprint workflows without over-ingesting build.nvidia listings.
- `content/wiki/NVLM.md` - connected NVIDIA VLM model coverage to the current NIM for VLM deployment surface.
- `content/wiki/TensorRT.md`, `content/wiki/Triton-Inference-Server.md`, and `content/wiki/NVIDIA-AI-Enterprise.md` - linked the new NIM categories to serving, acceleration, and enterprise deployment layers.
- `content/wiki/NVIDIA-Omniverse.md` and `content/wiki/NVIDIA-Isaac.md` - connected physical AI simulation and robotics workflows to Cosmos NIM generation and embedding pages.
- `content/index.md` - updated page count to 332 and indexed the new NIM pages.

---

## 2026-04-29 - Overnight batch 24: BioNeMo NIM structure and sequence models

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch24-20260429T073330Z`; local Git tag `codex-backup-overnight-pre-batch24-20260429T073330Z`

**Source URLs:** https://docs.nvidia.com/nim/bionemo/alphafold2/latest/overview.html, https://docs.nvidia.com/nim/bionemo/alphafold2-multimer/latest/overview.html, https://docs.nvidia.com/nim/bionemo/openfold2/latest/overview.html, https://docs.nvidia.com/nim/bionemo/openfold3/latest/overview.html, https://docs.nvidia.com/nim/bionemo/openfold3/latest/support-matrix.html, https://docs.nvidia.com/nim/bionemo/boltz2/latest/overview.html, https://docs.nvidia.com/nim/bionemo/evo2/latest/overview.html

**Gap analysis summary:**

- Added first-class BioNeMo NIM pages for current NVIDIA-authored protein structure, biomolecular-complex, binding-affinity, and DNA foundation-model docs.
- Split AlphaFold2, AlphaFold2-Multimer, OpenFold2, OpenFold3, Boltz2, and Evo 2 because each has a distinct current docs page, model purpose, input surface, and query intent.
- Connected the new pages to BioNeMo, NIM, Clara, AI Enterprise, NGC, TensorRT, and cuEquivariance instead of leaving BioNeMo as a single overloaded drug-discovery page.
- Did not create pages for every BioNeMo model listed in the NIM index; this batch covers the most visible current structure/sequence NIMs and leaves additional biology NIMs for later batches.

**Pages created (6 total):**

- `content/wiki/NIM-for-AlphaFold2.md`
- `content/wiki/NIM-for-AlphaFold2-Multimer.md`
- `content/wiki/NIM-for-OpenFold2.md`
- `content/wiki/NIM-for-OpenFold3.md`
- `content/wiki/NIM-for-Boltz2.md`
- `content/wiki/NIM-for-Evo-2.md`

**Pages updated:**

- `content/wiki/NVIDIA-BioNeMo.md` - promoted current BioNeMo NIM pages into the model/platform graph.
- `content/wiki/NVIDIA-NIM.md` - added the BioNeMo NIM pages to representative model families and connections.
- `content/wiki/NVIDIA-Clara.md` - linked BioNeMo NIMs from the healthcare/life-sciences umbrella.
- `content/wiki/NVIDIA-AI-Enterprise.md` - connected enterprise NIM deployment to BioNeMo model pages.
- `content/wiki/cuEquivariance.md` and `content/wiki/TensorRT.md` - connected optimized structure-prediction NIMs to GPU kernel and inference acceleration layers.
- `content/index.md` - updated page count to 326 and indexed the new BioNeMo NIM pages.

---

## 2026-04-29 - Overnight batch 23: NIM Operator and NeMo Retriever NIM microservices

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch23-20260429T072901Z`; local Git tag `codex-backup-overnight-pre-batch23-20260429T072901Z`

**Source URLs:** https://docs.nvidia.com/nim-operator/latest/index.html, https://docs.nvidia.com/nim-operator/latest/quickstart.html, https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/overview.html, https://docs.nvidia.com/nim/large-language-models/latest/about-nim-llm/nim-offerings.html, https://docs.nvidia.com/nim/large-language-models/latest/deployment/kubernetes-deployment/nim-operator-deployment.html, https://docs.nvidia.com/nim/nemo-retriever/text-embedding/latest/overview.html, https://docs.nvidia.com/nim/nemo-retriever/text-reranking/latest/overview.html, https://docs.nvidia.com/nim/ingestion/image-ocr/latest/overview.html, https://docs.nvidia.com/nim/ingestion/object-detection/latest/overview.html

**Gap analysis summary:**

- Added NIM Operator as the Kubernetes lifecycle-management page for NIM and NeMo microservices.
- Added NIM for Large Language Models as a distinct page because current docs split LLM NIM offerings, architecture, deployment, model-free/model-specific containers, LoRA, MCP/tool calling, observability, and operator deployment from the NIM umbrella.
- Added NeMo Retriever Embedding and Reranking NIM pages so retrieval pipelines can distinguish embedding/search from passage reranking.
- Added Image OCR and Object Detection NIM pages for current multimodal document extraction workflows involving tables, charts, infographics, page elements, and OCR.
- Used latest/current `latest` docs where available and did not create pages for every build.nvidia model card or sample application.

**Pages created (6 total):**

- `content/wiki/NVIDIA-NIM-Operator.md`
- `content/wiki/NIM-for-Large-Language-Models.md`
- `content/wiki/NeMo-Retriever-Embedding-NIM.md`
- `content/wiki/NeMo-Retriever-Reranking-NIM.md`
- `content/wiki/NIM-for-Image-OCR.md`
- `content/wiki/NIM-for-Object-Detection.md`

**Pages updated:**

- `content/wiki/NVIDIA-NIM.md` - promoted NIM Operator, NIM LLM, and Retriever NIM microservices into the NIM graph.
- `content/wiki/NeMo-Retriever.md` - split extraction, embedding, and reranking into first-class related pages.
- `content/wiki/NVIDIA-AI-Enterprise.md` - connected enterprise deployment to NIM Operator and NIM Certified concepts.
- `content/wiki/NVIDIA-GPU-Operator.md` - connected GPU node management to NIM Operator workloads.
- `content/wiki/Triton-Inference-Server.md` and `content/wiki/TensorRT.md` - linked current NIM microservices to the named inference acceleration stack.
- `content/wiki/cuVS.md` and `content/wiki/NVIDIA-AI-Data-Platform.md` - connected embedding/reranking/OCR/object detection to retrieval and vector-search workflows.
- `content/wiki/NVIDIA-AI-Blueprints.md`, `content/wiki/NVIDIA-AI-Q-Blueprint.md`, and `content/wiki/NVIDIA-Data-Flywheel-Blueprint.md` - linked durable blueprint pages to NIM Operator and Retriever NIM components.
- `content/index.md` - updated page count to 320 and indexed the new NIM pages.

---

## 2026-04-29 - Overnight batch 22: DOCA services, storage virtualization, and OVS offload

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch22-20260429T072258Z`; local Git tag `codex-backup-overnight-pre-batch22-20260429T072258Z`

**Source URLs:** https://docs.nvidia.com/doca/sdk/doca-telemetry-service-guide/index.html, https://docs.nvidia.com/doca/sdk/doca-app-shield/index.html, https://docs.nvidia.com/doca/sdk/doca-device-emulation/index.html, https://docs.nvidia.com/doca/sdk/doca-snap-services/index.html, https://docs.nvidia.com/doca/sdk/doca-snap-4-service-guide/index.html, https://docs.nvidia.com/doca/sdk/doca-snap-virtio-fs-service-guide/index.html, https://docs.nvidia.com/doca/sdk/openvswitch-acceleration---ovs-in-doca/index.html, https://docs.nvidia.com/doca/sdk/ovs-doca-hardware-acceleration/index.html, https://docs.nvidia.com/doca/sdk/ovs-dpdk-hardware-acceleration/index.html

**Gap analysis summary:**

- Added current first-class DOCA service/offload pages that were missing after the programming-library batch: Telemetry Service, App Shield, Device Emulation, SNAP, and OVS-DOCA.
- Kept one wiki page per durable NVIDIA documentation topic and avoided creating pages for individual samples, troubleshooting scenarios, or every possible build.nvidia tutorial.
- Connected telemetry to DCGM, NetQ, Mission Control, Spectrum-X, Flow, and PCC so DPU/network metrics are queryable from both operations and programming angles.
- Connected App Shield to Attestation and Morpheus as the DPU-side runtime security/forensics surface.
- Connected Device Emulation and SNAP to BlueField storage virtualization, GPU Direct Storage, AI Data Platform, STX, and CMX.
- Connected OVS-DOCA to DOCA Flow, Network Operator, Spectrum-X, and NetQ as the current Open vSwitch offload path.

**Pages created (5 total):**

- `content/wiki/DOCA-Telemetry-Service.md`
- `content/wiki/DOCA-App-Shield.md`
- `content/wiki/DOCA-Device-Emulation.md`
- `content/wiki/DOCA-SNAP.md`
- `content/wiki/OVS-DOCA.md`

**Pages updated:**

- `content/wiki/NVIDIA-DOCA.md` - promoted current DOCA services and offload integrations into the DOCA platform graph.
- `content/wiki/NVIDIA-BlueField-DPU.md` - connected BlueField to DTS, App Shield, Device Emulation, SNAP, and OVS-DOCA.
- `content/wiki/DOCA-Flow.md` - linked OVS-DOCA and DTS as downstream packet-processing/offload consumers.
- `content/wiki/NVIDIA-DOCA-Platform-Framework.md` - connected DPF to orchestrated BlueField services such as DTS, App Shield, Device Emulation, SNAP, and OVS-DOCA.
- `content/wiki/GPU-Direct-Storage.md`, `content/wiki/NVIDIA-AI-Data-Platform.md`, `content/wiki/NVIDIA-STX.md`, and `content/wiki/NVIDIA-CMX.md` - connected SNAP to storage virtualization and AI-native storage/context-memory designs.
- `content/wiki/NVIDIA-Attestation.md` and `content/wiki/Morpheus.md` - connected App Shield security introspection to trust and cybersecurity analytics.
- `content/wiki/NVIDIA-DCGM.md`, `content/wiki/NVIDIA-NetQ.md`, and `content/wiki/NVIDIA-Mission-Control.md` - connected DTS to AI factory observability.
- `content/wiki/NVIDIA-Network-Operator.md` and `content/wiki/NVIDIA-Spectrum-X.md` - linked OVS-DOCA as a current accelerated networking/offload path.
- `content/index.md` - updated page count to 314 and indexed the new DOCA service/offload pages.

---

## 2026-04-29 - Overnight batch 21: DOCA programming library coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch21-20260429T071900Z`; local Git tag `codex-backup-overnight-pre-batch21-20260429T071900Z`

**Source URLs:** https://docs.nvidia.com/doca/sdk/index.html, https://docs.nvidia.com/doca/sdk/doca-gpunetio/index.html, https://docs.nvidia.com/doca/sdk/doca-flow/index.html, https://docs.nvidia.com/doca/sdk/doca-rdma/index.html, https://docs.nvidia.com/doca/sdk/doca-dpa/index.html, https://docs.nvidia.com/doca/sdk/doca-pcc/index.html, https://docs.nvidia.com/doca/sdk/doca-pcc-application-guide/index.html, https://docs.nvidia.com/doca/sdk/changes-and-new-features/index.html

**Gap analysis summary:**

- Added first-class pages for the major current DOCA programming libraries that were previously only summarized inside `NVIDIA-DOCA`.
- Kept each library on its own wiki page because each has a distinct current docs page and distinct query intent.
- Added GPUNetIO as the CUDA/GPU networking bridge for GPUDirect RDMA, GPU-initiated networking, NIXL, NCCL, Aerial, Holoscan, and NVQLink.
- Added Flow, RDMA, DPA, and PCC as separate packet-processing, memory-access, BlueField execution, and congestion-control concepts.
- Did not create pages for individual demos, samples, or build.nvidia projects referenced by these docs.

**Pages created (5 total):**

- `content/wiki/DOCA-GPUNetIO.md`
- `content/wiki/DOCA-Flow.md`
- `content/wiki/DOCA-RDMA.md`
- `content/wiki/DOCA-DPA.md`
- `content/wiki/DOCA-PCC.md`

**Pages updated:**

- `content/wiki/NVIDIA-DOCA.md` - promoted the DOCA programming libraries into the DOCA platform graph.
- `content/wiki/NVIDIA-BlueField-DPU.md` - connected BlueField to DPA, Flow, RDMA, GPUNetIO, and PCC.
- `content/wiki/GPUDirect-RDMA.md` and `content/wiki/NCCL.md` - linked GPUNetIO and DOCA RDMA where GPU/network data paths intersect.
- `content/wiki/NIXL.md`, `content/wiki/NVIDIA-AI-Aerial.md`, `content/wiki/NVIDIA-Holoscan.md`, and `content/wiki/NVIDIA-NVQLink.md` - connected applications listed by NVIDIA's GPUNetIO docs.
- `content/wiki/NVIDIA-Spectrum-X.md` and `content/wiki/NVIDIA-Firmware-Tools.md` - added PCC/Flow/firmware connections for Ethernet AI networking.
- `content/index.md` - updated page count to 309 and indexed the DOCA library pages.

---

## 2026-04-29 - Overnight batch 20: NVIDIA networking host drivers and firmware tools

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch20-20260429T071137Z`; local Git tag `codex-backup-overnight-pre-batch20-20260429T071137Z`

**Source URLs:** https://docs.nvidia.com/networking/software/firmware-management/index.html, https://docs.nvidia.com/networking/display/mftv4350, https://docs.nvidia.com/networking/display/mftv4350/general-information, https://docs.nvidia.com/networking/display/mftv4350/changes-and-new-features, https://docs.nvidia.com/networking/software/adapter-software/index.html, https://docs.nvidia.com/doca/sdk/mlnx_ofed-to-doca-ofed-transition-guide/index.html, https://docs.nvidia.com/doca/sdk/general-support/index.html, https://docs.nvidia.com/doca/sdk/changes-and-new-features/index.html, https://docs.nvidia.com/networking/display/mlnxofedv24104140lts, https://docs.nvidia.com/networking/display/mlnxofedv24104140lts/introduction, https://docs.nvidia.com/networking/display/mlnxenv24104140lts, https://docs.nvidia.com/networking/display/mlnxenv24104140lts/features-overview-and-configuration, https://docs.nvidia.com/networking/display/nvidiawinof2documentationv26150000, https://docs.nvidia.com/networking/display/nvidiawinof2documentationv26150000/changes-and-new-features

**Gap analysis summary:**

- Added current NVIDIA networking firmware tooling instead of leaving `mst`, `mlxconfig`, `flint`, `mlxlink`, and WinMFT concepts buried in device pages.
- Added DOCA-OFED as the current DOCA-Host replacement path for MLNX_OFED, with explicit links to Network Operator, ConnectX, BlueField, HPC-X, NCCL, and GPUDirect RDMA.
- Added legacy MLNX_OFED and MLNX_EN as standalone LTS pages so older Linux networking runbooks remain queryable while still pointing users toward DOCA-Host/DOCA-OFED.
- Added WinOF-2 as the Windows host-driver counterpart, using the current v26.1.50000 February 2026 GA docs and ConnectX-9 support.
- Skipped build.nvidia content in this batch; the durable docs.nvidia category pages had the needed latest/current information.

**Pages created (5 total):**

- `content/wiki/NVIDIA-Firmware-Tools.md`
- `content/wiki/NVIDIA-DOCA-OFED.md`
- `content/wiki/NVIDIA-MLNX-OFED.md`
- `content/wiki/NVIDIA-MLNX-EN.md`
- `content/wiki/NVIDIA-WinOF-2.md`

**Pages updated:**

- `content/wiki/NVIDIA-DOCA.md` - linked DOCA-Host, DOCA-OFED, and transition context to the broader DOCA page.
- `content/wiki/NVIDIA-ConnectX-InfiniBand.md` and `content/wiki/NVIDIA-ConnectX-9.md` - connected current host drivers, firmware tooling, and Windows support.
- `content/wiki/NVIDIA-BlueField-DPU.md` - updated host-driver language from legacy MLNX_OFED toward current DOCA-Host/DOCA-OFED.
- `content/wiki/NVIDIA-Network-Operator.md` - linked DOCA-OFED as the managed Kubernetes driver surface.
- `content/wiki/NVIDIA-HPC-X.md` - connected HPC-X to current and legacy RDMA host stacks.
- `content/index.md` - updated page count to 304 and indexed the new networking host-software pages.

---

## 2026-04-29 - Overnight batch 19: CUDA Python profiling and communication wrappers

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch19-20260429T070807Z`; local Git tag `codex-backup-overnight-pre-batch19-20260429T070807Z`

**Source URLs:** https://docs.nvidia.com/nvshmem/api/api/language_bindings/python/index.html, https://docs.nvidia.com/nvshmem/api/api/language_bindings/python/overview.html, https://docs.nvidia.com/nvshmem/api/api/language_bindings/python/interoperability.html, https://docs.nvidia.com/nvshmem/api/api/language_bindings/index.html, https://docs.nvidia.com/nvshmem/release-notes-install-guide/install-guide/nvshmem4py-install-proc.html, https://docs.nvidia.com/nsight-python/index.html, https://docs.nvidia.com/nsight-python/overview/quickstart.html, https://developer.nvidia.com/nsight-python, https://nvidia.github.io/cuda-python/latest/

**Gap analysis summary:**

- Added NVSHMEM4Py as the official Python binding for NVSHMEM rather than leaving it buried inside the NVSHMEM page.
- Added Nsight Python as the Python-first profiling automation layer listed from the current CUDA Python hub.
- Kept Numba CUDA and third-party framework docs as context only, since the batch is limited to definitely NVIDIA-authored pages.

**Pages created (2 total):**

- `content/wiki/NVSHMEM4Py.md`
- `content/wiki/Nsight-Python.md`

**Pages updated:**

- `content/wiki/CUDA-Python.md` - completed the CUDA Python hub graph with NVSHMEM4Py and Nsight Python.
- `content/wiki/NVSHMEM.md` - promoted NVSHMEM4Py to a first-class related page.
- `content/wiki/Nsight-Compute.md`, `content/wiki/Nsight-Systems.md`, and `content/wiki/CUPTI-Python.md` - connected Nsight Python to NVIDIA profiling workflows.
- `content/wiki/CuPy.md` and `content/wiki/PyTorch.md` - linked NVSHMEM4Py/Nsight Python Python GPU interoperability context.
- `content/index.md` - updated page count to 299 and indexed the two new pages.

---

## 2026-04-29 - Overnight batch 18: CUDA Python ecosystem coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch18-20260429T070353Z`; local Git tag `codex-backup-overnight-pre-batch18-20260429T070353Z`

**Source URLs:** https://developer.nvidia.com/cuda/python, https://nvidia.github.io/cuda-python/latest/, https://nvidia.github.io/cuda-python/latest/release.html, https://nvidia.github.io/cuda-python/cuda-core/latest/, https://nvidia.github.io/cuda-python/cuda-core/latest/getting-started.html, https://nvidia.github.io/cuda-python/cuda-core/latest/installation.html, https://nvidia.github.io/cuda-python/cuda-core/latest/interoperability.html, https://nvidia.github.io/cuda-python/cuda-bindings/latest/overview.html, https://nvidia.github.io/cuda-python/cuda-pathfinder/latest/, https://nvidia.github.io/cccl/python/compute, https://nvidia.github.io/cccl/python/coop.html

**Gap analysis summary:**

- Added the current NVIDIA CUDA Python umbrella and core component pages that were missing from the wiki.
- Split Python CUDA access into `cuda.core` for Pythonic runtime/core workflows and `cuda.bindings` for low-level CUDA C API parity.
- Added `cuda.pathfinder` for CUDA component discovery in Python packaging/deployment workflows.
- Renamed the older `cuda-parallel` page to the current `cuda.compute` concept instead of creating a duplicate page for the same CCCL Python algorithm surface.
- Added `cuda.coop` as the distinct cooperative block/warp algorithms page for Numba CUDA kernels.

**Pages created (5 total):**

- `content/wiki/CUDA-Python.md`
- `content/wiki/cuda-core.md`
- `content/wiki/cuda-bindings.md`
- `content/wiki/cuda-pathfinder.md`
- `content/wiki/cuda-coop.md`

**Pages renamed/updated:**

- `content/wiki/cuda-parallel.md` -> `content/wiki/cuda-compute.md` - updated to current `cuda.compute` naming and linked the old `cuda.parallel` term only as history/search context.

**Pages updated:**

- `content/wiki/NVIDIA-CUDA.md` - added CUDA Python and component map to the CUDA platform page.
- `content/wiki/CUDA-Runtime-API.md`, `content/wiki/CUDA-Driver-API.md`, and `content/wiki/NVRTC.md` - linked Python access layers and runtime compilation context.
- `content/wiki/CUDA-Cpp-Standard-Library.md` - updated CCCL Python connections from old `cuda.parallel` to `cuda.compute` and `cuda.coop`.
- `content/wiki/CUPTI-Python.md`, `content/wiki/nvmath-python.md`, `content/wiki/cuTile.md`, `content/wiki/CuPy.md`, `content/wiki/CUDA-Graphs.md`, and `content/wiki/Nsight-Compute.md` - wired CUDA Python hub/component relationships.
- `content/index.md` - updated page count to 297 and indexed the new CUDA Python component pages.

---

## 2026-04-29 - Overnight batch 17: CUDA Tile and cuTile separation

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch17-20260429T065740Z`; local Git tag `codex-backup-overnight-pre-batch17-20260429T065740Z`

**Source URLs:** https://developer.nvidia.com/cuda/tile, https://docs.nvidia.com/cuda/cutile-python/index.html, https://docs.nvidia.com/cuda/cutile-python/quickstart.html, https://docs.nvidia.com/cuda/cutile-python/execution.html, https://docs.nvidia.com/cuda/cutile-python/interoperability.html, https://docs.nvidia.com/cuda/cutile-python/performance.html, https://docs.nvidia.com/cuda/cutile-python/compilation.html, https://docs.nvidia.com/cuda/tile-ir/latest/index.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/prog_model.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/syntax.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/semantics.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/memory_model.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/stability.html, https://docs.nvidia.com/cuda/tile-ir/latest/sections/release_notes.html

**Gap analysis summary:**

- Split the older mixed `cuTile / CUDA Tile IR` page into three durable concepts: CUDA Tile as the umbrella programming model, CUDA Tile IR as the low-level spec/bytecode target, and cuTile as the Python DSL.
- Kept NVIDIA's CUDA Tile developer page as a high-signal umbrella source, not as a reason to create pages for every linked learning resource or sample project.
- Updated compiler and programming-model connections so PTX, NVVM, CUDA programming, Triton, Nsight Compute, and Blackwell queries land on the right tile-related concept.

**Pages created (2 total):**

- `content/wiki/CUDA-Tile.md`
- `content/wiki/CUDA-Tile-IR.md`

**Pages updated:**

- `content/wiki/cuTile.md` - rewrote as the Python DSL page and removed unsupported claims that treated it as the Tile IR spec itself.
- `content/wiki/NVIDIA-CUDA.md` and `content/wiki/CUDA-Programming-Guide.md` - added CUDA Tile, cuTile, and Tile IR to the CUDA programming/compiler map.
- `content/wiki/PTX-ISA.md` and `content/wiki/PTX-Interoperability.md` - connected Tile IR memory/interoperability context to PTX.
- `content/wiki/NVVM-IR.md` and `content/wiki/libNVVM.md` - distinguished NVVM IR from CUDA Tile IR and linked cuTile package dependencies.
- `content/wiki/Triton-GPU-Language.md` - linked NVIDIA's Triton-to-CUDA-Tile-IR ecosystem bridge.
- `content/wiki/NVIDIA-Blackwell-Architecture.md` and `content/wiki/Nsight-Compute.md` - added tile programming and profiling connections.
- `content/index.md` - updated the GPU Programming Abstractions section and page count to 292.

---

## 2026-04-29 - Overnight batch 16: NVIDIA accelerated quantum computing coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch16-20260429T065150Z`; local Git tag `codex-backup-overnight-pre-batch16-20260429T065150Z`

**Source URLs:** https://www.nvidia.com/en-us/solutions/quantum-computing/, https://www.nvidia.com/en-us/solutions/quantum-computing/nvqlink/, https://nvidia.github.io/cudaqx/, https://nvidia.github.io/cuda-quantum/latest/using/cudaqx/cudaqx.html, https://nvidia.github.io/cuda-quantum/latest/using/realtime.html, https://nvidia.github.io/cuda-quantum/blogs/blog/2026/03/16/launching-cudaq-realtime/, https://www.nvidia.com/en-us/solutions/quantum-computing/accelerated-quantum-center/, https://www.nvidia.com/en-us/data-center/dgx-quantum/

**Gap analysis summary:**

- Added NVIDIA Quantum as the current platform-level page for NVIDIA accelerated quantum computing.
- Added NVQLink as the current canonical GPU-QPU integration architecture, especially because the DGX Quantum en-US URL now redirects to NVQLink.
- Added CUDA-QX and CUDA-Q Realtime as separate software pages because they have distinct current NVIDIA documentation and APIs.
- Added Quantum Cloud, NVAQC, and DGX Quantum pages so cloud access, research-center, and DGX Quantum query terms are represented without confusing older DGX Quantum identity for the current NVQLink direction.
- Disambiguated NVIDIA Quantum from NVIDIA Quantum InfiniBand.

**Pages created (7 total):**

- `content/wiki/NVIDIA-Quantum.md`
- `content/wiki/NVIDIA-NVQLink.md`
- `content/wiki/CUDA-QX.md`
- `content/wiki/CUDA-Q-Realtime.md`
- `content/wiki/NVIDIA-Quantum-Cloud.md`
- `content/wiki/NVIDIA-Accelerated-Quantum-Center.md`
- `content/wiki/NVIDIA-DGX-Quantum.md`

**Pages updated:**

- `content/wiki/CUDA-Q.md` - connected CUDA-Q to NVQLink, CUDA-QX, CUDA-Q Realtime, Quantum Cloud, and DGX Quantum.
- `content/wiki/cuQuantum.md` and `content/wiki/cuPQC.md` - linked current NVIDIA Quantum solution context.
- `content/wiki/NVIDIA-DGX-Cloud.md` - connected Quantum Cloud and CUDA-Q to cloud GPU contexts.
- `content/wiki/NVIDIA-DGX.md` - added DGX Quantum as a queryable DGX architecture identity.
- `content/wiki/NVIDIA-GB200-NVL72.md` and `content/wiki/NVIDIA-Blackwell-Architecture.md` - connected NVAQC/GB200 accelerated quantum research context.
- `content/wiki/NVIDIA-Quantum-InfiniBand.md` - added disambiguation against the NVIDIA Quantum computing platform.
- `content/index.md` - updated page count to 290 and indexed the seven new quantum pages.

---

## 2026-04-29 - Overnight batch 15: DGX personal systems and enterprise deployment coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch15-20260429T064319Z`; local Git tag `codex-backup-overnight-pre-batch15-20260429T064319Z`

**Source URLs:** https://www.nvidia.com/en-us/products/workstations/dgx-spark/, https://docs.nvidia.com/dgx/dgx-spark/, https://docs.nvidia.com/dgx/dgx-spark/system-overview.html, https://build.nvidia.com/spark, https://www.nvidia.com/en-us/products/workstations/dgx-station/, https://docs.nvidia.com/dgx-basepod/index.html, https://www.nvidia.com/en-us/data-center/dgx-basepod/, https://www.nvidia.com/en-us/data-center/dgx-support/

**Gap analysis summary:**

- Added canonical pages for DGX Spark and DGX Station so current personal/deskside Grace Blackwell systems are not buried only inside the general DGX page.
- Added DGX BasePOD as the missing enterprise DGX reference architecture between standalone DGX systems and DGX SuperPOD.
- Added DGX Enterprise Support as the support/services counterpart to DGX systems, BasePOD, and SuperPOD operations.
- Treated `build.nvidia.com/spark` as a living DGX Spark tutorial surface, not as a source for many separate build pages.

**Pages created (4 total):**

- `content/wiki/NVIDIA-DGX-Spark.md`
- `content/wiki/NVIDIA-DGX-Station.md`
- `content/wiki/NVIDIA-DGX-BasePOD.md`
- `content/wiki/NVIDIA-DGX-Enterprise-Support.md`

**Pages updated:**

- `content/wiki/NVIDIA-DGX.md` - expanded the DGX family graph around Spark, Station, BasePOD, and Enterprise Support.
- `content/wiki/NVIDIA-DGX-SuperPOD.md` and `content/wiki/NVIDIA-DGX-B300.md` - connected BasePOD and Enterprise Support into the data center DGX path.
- `content/wiki/NVIDIA-AI-Enterprise.md`, `content/wiki/NVIDIA-Mission-Control.md`, and `content/wiki/NVIDIA-BaseOS.md` - linked DGX personal, BasePOD, and operations software context.
- `content/wiki/NVIDIA-AI-Workbench.md`, `content/wiki/NVIDIA-NemoClaw.md`, and `content/wiki/NVIDIA-OpenShell.md` - connected local DGX Spark/Station development and agent workflows.
- `content/wiki/NVIDIA-Grace-CPU.md`, `content/wiki/NVIDIA-Blackwell-Architecture.md`, and `content/wiki/NGC.md` - connected Grace Blackwell desktop systems to architecture and software-stack context.
- `content/wiki/NVIDIA-Enterprise-AI-Factory.md` - linked BasePOD and Enterprise Support into the AI factory strategy graph.
- `content/index.md` - updated page count to 283 and indexed the four new DGX pages.

---

## 2026-04-29 - Overnight batch 14: NVIDIA AI for Media SDK expansion

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch14-20260429T063653Z`; local Git tag `codex-backup-overnight-pre-batch14-20260429T063653Z`

**Source URLs:** https://docs.nvidia.com/maxine/index.html, https://docs.nvidia.com/maxine/afx/latest/index.html, https://docs.nvidia.com/maxine/ar/latest/index.html, https://docs.nvidia.com/maxine/vfx/latest/index.html, https://docs.nvidia.com/maxine/triton/latest/index.html

**Gap analysis summary:**

- Added the current NVIDIA AI for Media SDKs docs hub and split its durable SDK components into canonical wiki pages.
- Created separate pages for Audio Effects SDK, Augmented Reality SDK, Video Effects SDK, and Triton-enabled AR/VFX SDK serving because each has its own current NVIDIA docs surface.
- Updated Maxine so older Maxine terminology and current AI-for-Media docs resolve into the same media AI graph.
- Linked media SDKs into Triton, RTX, Capture SDK, Video Codec SDK, and Riva speech/audio workflows.

**Pages created (5 total):**

- `content/wiki/NVIDIA-AI-for-Media-SDKs.md`
- `content/wiki/NVIDIA-Audio-Effects-SDK.md`
- `content/wiki/NVIDIA-Augmented-Reality-SDK.md`
- `content/wiki/NVIDIA-Video-Effects-SDK.md`
- `content/wiki/NVIDIA-Triton-AR-VFX-SDKs.md`

**Pages updated:**

- `content/wiki/NVIDIA-Maxine.md` - linked current AI for Media SDKs docs and component SDK pages.
- `content/wiki/Triton-Inference-Server.md` - connected Triton-enabled AR/VFX SDK serving.
- `content/wiki/NVIDIA-RTX.md` and `content/wiki/NVIDIA-Video-Codec-SDK.md` - connected RTX and codec/video pipelines to AI media effects.
- `content/wiki/NVIDIA-Riva.md` - linked Audio Effects SDK as an upstream speech/audio cleanup companion.
- `content/wiki/NVIDIA-Capture-SDK.md` - connected capture workflows to AI media processing.
- `content/index.md` - updated page count to 279 and indexed the five new AI media SDK pages.

---

## 2026-04-29 - Overnight batch 13: CUDA Ada and Turing architecture guide completion

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch13-20260429T063416Z`; local Git tag `codex-backup-overnight-pre-batch13-20260429T063416Z`

**Source URLs:** https://docs.nvidia.com/cuda/ada-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ada-tuning-guide/index.html, https://docs.nvidia.com/cuda/turing-compatibility-guide/index.html, https://docs.nvidia.com/cuda/turing-tuning-guide/index.html

**Gap analysis summary:**

- Completed the current CUDA architecture guide family by adding Ada and Turing compatibility/tuning pages alongside the Blackwell, Hopper, and Ampere pages created in batch 12.
- Kept these pages tied to current CUDA 13.2 docs rather than historical toolkit archives.
- Updated CUDA compatibility, programming, best-practices, NVCC, PTX, feature archive, Ada architecture, and Turing architecture pages so multi-generation CUDA support is queryable.

**Pages created (4 total):**

- `content/wiki/CUDA-Ada-Compatibility-Guide.md`
- `content/wiki/CUDA-Ada-Tuning-Guide.md`
- `content/wiki/CUDA-Turing-Compatibility-Guide.md`
- `content/wiki/CUDA-Turing-Tuning-Guide.md`

**Pages updated:**

- `content/wiki/CUDA-Compatibility.md`, `content/wiki/CUDA-Best-Practices-Guide.md`, and `content/wiki/CUDA-Programming-Guide.md` - added Ada/Turing architecture-guide links.
- `content/wiki/NVCC.md` and `content/wiki/PTX-ISA.md` - added Ada/Turing `-gencode`, cubin, and PTX compatibility context.
- `content/wiki/NVIDIA-Ada-Lovelace-Architecture.md` and `content/wiki/NVIDIA-Turing-Architecture.md` - connected architecture pages to their guide pages.
- `content/wiki/CUDA-Features-Archive.md` - linked Ada/Turing guide pages as current-doc examples for older GPU generation support.
- `content/index.md` - updated page count to 274 and indexed the four new CUDA guide pages.

---

## 2026-04-29 - Overnight batch 12: CUDA architecture compatibility, tuning, and cuFile API coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch12-20260429T063040Z`; local Git tag `codex-backup-overnight-pre-batch12-20260429T063040Z`

**Source URLs:** https://docs.nvidia.com/cuda/blackwell-compatibility-guide/index.html, https://docs.nvidia.com/cuda/blackwell-tuning-guide/index.html, https://docs.nvidia.com/cuda/hopper-compatibility-guide/index.html, https://docs.nvidia.com/cuda/hopper-tuning-guide/index.html, https://docs.nvidia.com/cuda/ampere-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ampere-tuning-guide/index.html, https://docs.nvidia.com/gpudirect-storage/api-reference-guide/index.html, https://docs.nvidia.com/cuda/cuda-features-archive/index.html

**Gap analysis summary:**

- Added canonical pages for current CUDA 13.2 architecture compatibility and tuning guides for Blackwell, Hopper, and Ampere.
- Added `cuFile-API.md` as the API-level companion to GPUDirect Storage.
- Added `CUDA-Features-Archive.md` as a current reference page for feature availability, while explicitly not treating older toolkit releases as canonical.
- Updated the CUDA compatibility, programming, best-practices, architecture, NVCC, PTX, and GPUDirect Storage pages so architecture-specific guidance is reachable from the main CUDA graph.

**Pages created (8 total):**

- `content/wiki/CUDA-Blackwell-Compatibility-Guide.md`
- `content/wiki/CUDA-Blackwell-Tuning-Guide.md`
- `content/wiki/CUDA-Hopper-Compatibility-Guide.md`
- `content/wiki/CUDA-Hopper-Tuning-Guide.md`
- `content/wiki/CUDA-Ampere-Compatibility-Guide.md`
- `content/wiki/CUDA-Ampere-Tuning-Guide.md`
- `content/wiki/cuFile-API.md`
- `content/wiki/CUDA-Features-Archive.md`

**Pages updated:**

- `content/wiki/CUDA-Compatibility.md`, `content/wiki/CUDA-Best-Practices-Guide.md`, and `content/wiki/CUDA-Programming-Guide.md` - connected architecture-specific CUDA guide pages.
- `content/wiki/NVIDIA-Blackwell-Architecture.md`, `content/wiki/NVIDIA-Hopper-Architecture.md`, and `content/wiki/NVIDIA-Ampere-Architecture.md` - linked compatibility and tuning guides from the relevant architecture pages.
- `content/wiki/GPU-Direct-Storage.md` - linked cuFile API as the GPUDirect Storage API reference surface.
- `content/wiki/NVCC.md` and `content/wiki/PTX-ISA.md` - linked PTX/cubin and `-gencode` compatibility guidance.
- `content/index.md` - updated page count to 270 and indexed all eight new CUDA guide/API/reference pages.

---

## 2026-04-29 - Overnight batch 11: Blackwell Ultra, Vera Rubin, and next-generation AI factory infrastructure

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch11-20260429T061925Z`; local Git tag `codex-backup-overnight-pre-batch11-20260429T061925Z`

**Source URLs:** https://www.nvidia.com/en-us/data-center/gb300-nvl72/, https://www.nvidia.com/en-us/data-center/dgx-b300/, https://www.nvidia.com/en-us/data-center/hgx/, https://www.nvidia.com/en-us/data-center/technologies/rubin/, https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform, https://www.nvidia.com/en-us/networking/products/data-processing-unit/, https://www.nvidia.com/en-us/networking/products/ethernet-adapters/connectx-9-supernic/, https://docs.nvidia.com/networking/display/connectx9supernic/introduction, https://www.nvidia.com/en-us/data-center/products/rtx-pro-server/, https://blogs.nvidia.com/blog/rtx-pro-servers/, https://www.nvidia.com/en-us/networking/silicon-photonics/

**Gap analysis summary:**

- Added durable pages for current Blackwell Ultra and next-generation NVIDIA AI factory infrastructure instead of creating separate pages for every HGX/baseboard/product variant.
- Added GB300 NVL72 and DGX B300 as canonical Blackwell Ultra rack/system pages.
- Added Vera Rubin and Vera CPU as the next-generation platform and CPU pages after Blackwell/Grace.
- Added BlueField-4, ConnectX-9, Silicon Photonics, and RTX PRO Server as current NVIDIA-published infrastructure/product topics that connect AI factories, networking, storage, rendering, simulation, and inference.
- Updated existing DGX, HGX, Blackwell, NVLink, data center CPU, networking, AI factory, STX/CMX, RTX, and Omniverse pages so the new pages are queryable from existing entry points.

**Pages created (8 total):**

- `content/wiki/NVIDIA-Vera-Rubin.md`
- `content/wiki/NVIDIA-Vera-CPU.md`
- `content/wiki/NVIDIA-GB300-NVL72.md`
- `content/wiki/NVIDIA-DGX-B300.md`
- `content/wiki/NVIDIA-BlueField-4.md`
- `content/wiki/NVIDIA-ConnectX-9.md`
- `content/wiki/NVIDIA-RTX-PRO-Server.md`
- `content/wiki/NVIDIA-Silicon-Photonics.md`

**Pages updated:**

- `content/wiki/NVIDIA-DGX.md`, `content/wiki/NVIDIA-DGX-SuperPOD.md`, `content/wiki/NVIDIA-HGX.md`, and `content/wiki/NVIDIA-GB200-NVL72.md` - connected Blackwell Ultra, GB300 NVL72, DGX B300, and Vera Rubin into system/platform context.
- `content/wiki/NVIDIA-Blackwell-Architecture.md`, `content/wiki/NVLink.md`, `content/wiki/NVIDIA-Data-Center-CPUs.md`, and `content/wiki/NVIDIA-Grace-CPU.md` - linked Blackwell Ultra, NVLink 6, Vera Rubin, and Vera CPU.
- `content/wiki/NVIDIA-BlueField-DPU.md`, `content/wiki/NVIDIA-DOCA.md`, `content/wiki/NVIDIA-STX.md`, `content/wiki/NVIDIA-CMX.md`, and `content/wiki/NVIDIA-AI-Data-Platform.md` - connected BlueField-4 and ConnectX-9 to AI-native storage/context memory and AI data platforms.
- `content/wiki/NVIDIA-ConnectX-InfiniBand.md`, `content/wiki/NVIDIA-Spectrum-X.md`, `content/wiki/NVIDIA-Quantum-InfiniBand.md`, and `content/wiki/GPUDirect-RDMA.md` - linked ConnectX-9 and silicon photonics into NVIDIA networking.
- `content/wiki/NVIDIA-Enterprise-AI-Factory.md`, `content/wiki/NVIDIA-Certified-Systems.md`, `content/wiki/NVIDIA-AI-Enterprise.md`, `content/wiki/NVIDIA-RTX.md`, `content/wiki/NVIDIA-Omniverse.md`, and `content/wiki/NVIDIA-Mission-Control.md` - connected RTX PRO Server, DGX B300, GB300 NVL72, Vera Rubin, and next-generation infrastructure to enterprise AI factory/software/operations pages.
- `content/index.md` - updated page count to 262 and indexed the eight new AI factory infrastructure pages.

---

## 2026-04-29 - Overnight batch 10: AI blueprints, enterprise AI factory, and AI data platform expansion

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch10-20260429T061032Z`; local Git tag `codex-backup-overnight-pre-batch10-20260429T061032Z`

**Source URLs:** https://build.nvidia.com/blueprints, https://build.nvidia.com/nvidia/aiq/blueprintcard, https://docs.nvidia.com/aiq-blueprint/latest/index.html, https://docs.nvidia.com/aiq-blueprint/latest/architecture/overview.html, https://docs.nvidia.com/aiq-blueprint/latest/deployment/kubernetes.html, https://build.nvidia.com/nvidia/build-an-enterprise-data-flywheel/modelcard, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/introduction.html, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/ai-factory-overview.html, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/agentic-ai-in-the-factory.html, https://docs.nvidia.com/ai-enterprise/planning-resource/ai-factory-white-paper/latest/ecosystem-architecture.html, https://www.nvidia.com/en-us/data-center/ai-data-platform/, https://www.nvidia.com/en-us/data-center/ai-storage/stx/, https://www.nvidia.com/en-us/data-center/ai-storage/cmx/, https://www.nvidia.com/en-us/data-center/products/certified-storage/, https://nvidianews.nvidia.com/news/nvidia-launches-bluefield-4-stx-storage-architecture-with-broad-industry-adoption

**Gap analysis summary:**

- Added canonical pages for durable NVIDIA-authored AI blueprint concepts while explicitly treating build.nvidia as a discovery/current-state source, not a reason to mirror every individual build listing.
- Split out AI-Q and Data Flywheel as standalone pages because both have stable NVIDIA-authored blueprint cards and/or docs surfaces.
- Added the Enterprise AI Factory strategy page from the current NVIDIA AI Enterprise design guide and connected it to AI Enterprise, DGX, Mission Control, AI data, certified systems, and certified storage.
- Added AI Data Platform, STX, CMX, and NVIDIA-Certified Storage as the durable data/storage layer now appearing across NVIDIA AI factory materials.
- Kept partner build listings and narrower blueprint examples folded into canonical pages rather than creating per-build wiki pages.

**Pages created (8 total):**

- `content/wiki/NVIDIA-AI-Blueprints.md`
- `content/wiki/NVIDIA-AI-Q-Blueprint.md`
- `content/wiki/NVIDIA-Data-Flywheel-Blueprint.md`
- `content/wiki/NVIDIA-Enterprise-AI-Factory.md`
- `content/wiki/NVIDIA-AI-Data-Platform.md`
- `content/wiki/NVIDIA-STX.md`
- `content/wiki/NVIDIA-CMX.md`
- `content/wiki/NVIDIA-Certified-Storage.md`

**Pages updated:**

- `content/wiki/NVIDIA-AI-Enterprise.md` - connected AI factory, AI Blueprint, AI Data Platform, and certified storage context.
- `content/wiki/NVIDIA-Agent-Intelligence-Toolkit.md`, `content/wiki/NeMo-Platform.md`, `content/wiki/NeMo-Retriever.md`, `content/wiki/NVIDIA-NIM.md`, and `content/wiki/Nemotron.md` - linked AI-Q, Data Flywheel, blueprint curation, retrieval, model, and evaluation flows.
- `content/wiki/NVIDIA-DGX-Cloud.md`, `content/wiki/NVIDIA-DGX-SuperPOD.md`, and `content/wiki/NVIDIA-Mission-Control.md` - connected enterprise AI factory and data/storage infrastructure.
- `content/wiki/NVIDIA-BlueField-DPU.md`, `content/wiki/NVIDIA-Spectrum-X.md`, `content/wiki/NVIDIA-DOCA.md`, and `content/wiki/NVIDIA-Dynamo.md` - connected STX, CMX, AI Data Platform, context memory, and AI-native storage networking.
- `content/wiki/cuVS.md`, `content/wiki/GPU-Direct-Storage.md`, `content/wiki/NVIDIA-Certified-Systems.md`, and `content/wiki/NVIDIA-Blackwell-Architecture.md` - linked vector search, storage validation, certified compute, and Blackwell compute into the AI data/factory layer.
- `content/index.md` - updated page count to 254 and indexed the eight new AI blueprint, AI factory, and AI data/storage pages.

---

## 2026-04-29 - Overnight batch 9: AI cloud orchestration and NCX component expansion

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch9-20260429T060541Z`; local Git tag `codex-backup-overnight-pre-batch9-20260429T060541Z`

**Source URLs:** https://docs.nvidia.com/run-ai/, https://docs.nvidia.com/run-ai/self-hosted/index.html, https://www.nvidia.com/en-us/software/run-ai/, https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.3.0/overview-runai.html, https://docs.nvidia.com/ncx/index.html, https://github.com/kai-scheduler/KAI-Scheduler, https://docs.nvidia.com/cloud-functions/legacy/latest/cluster-management/kai-scheduler.html, https://docs.nvidia.com/dynamo/latest/kubernetes-deployment/multinode/topology-aware-scheduling, https://github.com/ai-dynamo/grove, https://docs.nvidia.com/fleet-intelligence/latest/index.html, https://github.com/NVIDIA/ncx-infra-controller-core, https://github.com/NVIDIA/aicr, https://github.com/NVIDIA/NVSentinel, https://github.com/NVIDIA/doca-platform, https://github.com/leptonai/gpud

**Gap analysis summary:**

- Split durable AI cloud infrastructure and orchestration components out of the broad NCX and Mission Control pages.
- Added Run:ai as the canonical NVIDIA AI workload/GPU orchestration page, with KAI Scheduler and Grove as linked open-source scheduling/orchestration companions.
- Added NCX component pages for Fleet Intelligence, NCX Infra Controller, AI Cluster Runtime, NVSentinel, DOCA Platform Framework, and Project GPUd.
- Kept NVIDIA Run:ai Model Streamer folded into `NVIDIA-Run-ai.md` for now because this pass found it as a Run:ai product-page feature rather than a standalone current docs surface.
- Treated Project GPUd carefully: the official NCX docs list it as NVIDIA Project GPUd, while the public repository is under LeptonAI; the page notes that context explicitly.

**Pages created (9 total):**

- `content/wiki/NVIDIA-Run-ai.md`
- `content/wiki/KAI-Scheduler.md`
- `content/wiki/NVIDIA-Grove.md`
- `content/wiki/NVIDIA-Fleet-Intelligence.md`
- `content/wiki/NVIDIA-NCX-Infra-Controller.md`
- `content/wiki/NVIDIA-AI-Cluster-Runtime.md`
- `content/wiki/NVIDIA-NVSentinel.md`
- `content/wiki/NVIDIA-DOCA-Platform-Framework.md`
- `content/wiki/NVIDIA-Project-GPUd.md`

**Pages updated:**

- `content/wiki/NVIDIA-Cloud-Accelerator-NCX.md` - linked each durable NCX component to its canonical page.
- `content/wiki/NVIDIA-Dynamo.md` - connected Grove and KAI Scheduler to topology-aware multinode inference deployment.
- `content/wiki/NVIDIA-AI-Enterprise.md` and `content/wiki/NVIDIA-Mission-Control.md` - linked Run:ai into enterprise AI and AI factory operations.
- `content/wiki/NVIDIA-Cloud-Native-Technologies.md` and `content/wiki/NVIDIA-GPU-Operator.md` - linked AICR, KAI Scheduler, and NVSentinel into Kubernetes infrastructure context.
- `content/wiki/NVIDIA-DCGM.md`, `content/wiki/NVIDIA-DGX-Cloud.md`, `content/wiki/NVIDIA-DOCA.md`, and `content/wiki/NVIDIA-BlueField-DPU.md` - connected telemetry, cloud fleet health, DPU orchestration, and infrastructure lifecycle pages.
- `content/index.md` - updated page count to 246 and indexed the nine new AI cloud infrastructure pages.

---

## 2026-04-29 - Overnight batch 8: NVIDIA networking software and DOCA gap expansion

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch8-20260429T060102Z`; local Git tag `codex-backup-overnight-pre-batch8-20260429T060102Z`

**Source URLs:** https://docs.nvidia.com/doca/sdk/index.html, https://developer.nvidia.com/networking/doca, https://developer.nvidia.com/networking/doca/getting-started, https://docs.nvidia.com/networking/software/cloud-orchestration/index.html, https://docs.nvidia.com/networking/display/kubernetes2610/index.html, https://docs.nvidia.com/networking/display/kubernetes2610/nic-conf-operator/spectrum-x-configuration.html, https://docs.nvidia.com/networking-ethernet-software/, https://docs.nvidia.com/networking-ethernet-software/cumulus-linux/, https://docs.nvidia.com/networking-ethernet-software/cumulus-linux/Whats-New/, https://docs.nvidia.com/networking-ethernet-software/cumulus-netq-51/, https://docs.nvidia.com/networking-ethernet-software/nvidia-air/, https://docs.nvidia.com/networking/display/hpcxv226, https://developer.nvidia.com/networking/hpc-x, https://developer.nvidia.com/networking/rivermax, https://developer.nvidia.com/networking/rivermax/faq, https://docs.nvidia.com/doca/sdk/DOCA-Rivermax/index.html

**Gap analysis summary:**

- Added durable NVIDIA networking software pages that were previously only mentioned inside hardware/fabric pages: DOCA, Network Operator, Cumulus Linux, NetQ, DSX Air, HPC-X, and Rivermax.
- Treated build/demo/simulation material cautiously: DSX Air was added as the canonical NVIDIA simulation platform, not as individual build pages.
- Kept DOCA subcomponents such as DOCA Rivermax, DOCA Flow, DOCA services, and DOCA tools consolidated into the DOCA or Rivermax pages rather than creating many one-off subpages from a single docs tree.
- Refreshed existing BlueField, ConnectX, Spectrum-X, Quantum InfiniBand, UFM, GPUDirect RDMA, NCCL, NVSHMEM, GPU Operator, Cloud Native Technologies, Mission Control, Holoscan, and DeepStream pages with new wiki connections.
- Used the latest/current public docs surfaces found in this pass: DOCA 3.3.0, Network Operator 26.1.0, Cumulus Linux 5.16, NetQ 5.1, DSX Air, and HPC-X 2.26.

**Pages created (7 total):**

- `content/wiki/NVIDIA-DOCA.md`
- `content/wiki/NVIDIA-Network-Operator.md`
- `content/wiki/NVIDIA-Cumulus-Linux.md`
- `content/wiki/NVIDIA-NetQ.md`
- `content/wiki/NVIDIA-DSX-Air.md`
- `content/wiki/NVIDIA-HPC-X.md`
- `content/wiki/NVIDIA-Rivermax.md`

**Pages updated:**

- `content/wiki/NVIDIA-BlueField-DPU.md` and `content/wiki/NVIDIA-ConnectX-InfiniBand.md` - connected DOCA, DOCA-OFED, Network Operator, HPC-X, Rivermax, and current NVIDIA networking software context.
- `content/wiki/NVIDIA-Spectrum-X.md`, `content/wiki/NVIDIA-Quantum-InfiniBand.md`, and `content/wiki/NVIDIA-UFM.md` - connected Spectrum-X RA2.1-adjacent docs, Cumulus Linux, NetQ, DSX Air, HPC-X, DOCA, and Mission Control fabric operations.
- `content/wiki/GPUDirect-RDMA.md`, `content/wiki/NCCL.md`, and `content/wiki/NVSHMEM.md` - linked GPU communication paths to DOCA, Network Operator, HPC-X, Spectrum-X, and Quantum InfiniBand.
- `content/wiki/NVIDIA-Cloud-Native-Technologies.md` and `content/wiki/NVIDIA-GPU-Operator.md` - linked Network Operator as the Kubernetes networking companion to GPU Operator.
- `content/wiki/NVIDIA-Mission-Control.md` - connected NetQ to Mission Control network/NVLink observability.
- `content/wiki/NVIDIA-Holoscan.md` and `content/wiki/NVIDIA-DeepStream.md` - connected Rivermax to GPU media streaming, sensor ingest, and video analytics pipelines.
- `content/index.md` - updated page count to 237 and indexed the seven new networking pages.

---

## 2026-04-29 - Overnight batch 7: DRIVE autonomous vehicle platform expansion

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch7-20260429T055544Z`; local Git tag `codex-backup-overnight-pre-batch7-20260429T055544Z`

**Source URLs:** https://developer.nvidia.com/drive, https://developer.nvidia.com/drive/agx, https://developer.nvidia.com/drive/documentation, https://developer.nvidia.com/driveworks, https://developer.nvidia.com/drive/driveworks, https://developer.nvidia.com/drive/drive-sim, https://developer.nvidia.com/blog/?p=105444, https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-sdk/introduction/introduction.html, https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-installation/requirements.html, https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-sdk/embedded-software-components/DRIVE_AGX_SoC/DriveWorks/DriveWorks_SDK/migration/index.html, https://developer.nvidia.com/docs/drive/drive-os/7.0.3/public/drive-os-linux-sdk/embedded-software-components/DRIVE_AGX_SoC/DriveWorks/DriveWorks_SDK/modules/sensors/index.html

**Gap analysis summary:**

- Split four durable DRIVE topics out of the broad DRIVE platform page: DriveOS, DriveWorks, DRIVE AGX Thor, and DRIVE Sim.
- Kept DRIVE AGX Thor bench/in-vehicle SKUs consolidated into one hardware/platform page.
- Kept NuRec, Cosmos Transfer/Predict, and DRIVE Sim data-generation workflows consolidated into the DRIVE Sim page for now, rather than creating pages for each AV simulation sub-workflow.
- Skipped DRIVE Hyperion in this batch because the public page surfaced by search was older and not clearly the current/latest reference architecture.

**Pages created (4 total):**

- `content/wiki/NVIDIA-DriveOS.md`
- `content/wiki/NVIDIA-DriveWorks.md`
- `content/wiki/NVIDIA-DRIVE-AGX-Thor.md`
- `content/wiki/NVIDIA-DRIVE-Sim.md`

**Pages updated:**

- `content/wiki/NVIDIA-Drive-Platform.md` - refreshed the DRIVE hub and linked DriveOS, DriveWorks, DRIVE AGX Thor, and DRIVE Sim.
- `content/wiki/NVIDIA-Cosmos.md` and `content/wiki/NVIDIA-Omniverse.md` - connected current AV simulation and synthetic-data workflows.
- `content/wiki/NVIDIA-Blackwell-Architecture.md`, `content/wiki/TensorRT.md`, `content/wiki/CUDA-for-Tegra.md`, and `content/wiki/cuDLA.md` - connected DRIVE AGX Thor, DriveOS, and DriveWorks to core acceleration topics.
- `content/index.md` - updated page count to 230 and indexed all four new DRIVE pages.

---

## 2026-04-29 - Overnight batch 6: Jetson edge software and Thor hardware expansion

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch6-20260429T055023Z`; local Git tag `codex-backup-overnight-pre-batch6-20260429T055023Z`

**Source URLs:** https://docs.nvidia.com/jetson/, https://docs.nvidia.com/jetson/archives/index.html, https://docs.nvidia.com/jetson/archives/r38.4/DeveloperGuide/, https://docs.nvidia.com/jetson/archives/r38.4/DeveloperGuide/AR/JetsonSoftwareArchitecture.html, https://developer.nvidia.com/embedded/faq, https://developer.nvidia.com/embedded/develop/hardware, https://developer.nvidia.com/embedded/buy-jetson, https://developer.nvidia.com/blog/?p=104879, https://developer.nvidia.com/blog/accelerate-ai-inference-for-edge-and-robotics-with-nvidia-jetson-t4000-and-nvidia-jetpack-7-1/, https://docs.nvidia.com/vpi/4.0/index.html, https://docs.nvidia.com/vpi/4.0/architecture.html, https://docs.nvidia.com/vpi/release_notes.html, https://docs.nvidia.com/jetson/jps/, https://docs.nvidia.com/jetson/jps/moj-overview.html

**Gap analysis summary:**

- Split durable Jetson software topics out of the broad Jetson page: JetPack SDK, Jetson Linux, VPI, and Jetson Platform Services.
- Added one consolidated Jetson Thor page covering Thor/T5000/T4000 current-generation hardware instead of creating separate pages for each SKU.
- Updated the existing Jetson page to reflect Thor/JetPack 7/Jetson Linux 38.x while keeping Orin/JetPack 6 distinctions visible.
- Kept TensorRT Edge-LLM and Video Codec SDK 7.1 signals folded into JetPack/Thor context for now rather than creating pages without a stable docs surface in the wiki.

**Pages created (5 total):**

- `content/wiki/NVIDIA-JetPack-SDK.md`
- `content/wiki/NVIDIA-Jetson-Linux.md`
- `content/wiki/NVIDIA-Jetson-Thor.md`
- `content/wiki/NVIDIA-VPI.md`
- `content/wiki/NVIDIA-Jetson-Platform-Services.md`

**Pages updated:**

- `content/wiki/NVIDIA-Jetson-Platform.md` - refreshed current Thor/Orin positioning and linked JetPack, Jetson Linux, VPI, JPS, and Jetson Thor.
- `content/wiki/CUDA-for-Tegra.md` and `content/wiki/cuDLA.md` - connected embedded CUDA/DLA guidance to JetPack, Jetson Linux, and Jetson Thor.
- `content/wiki/NVIDIA-DeepStream.md` and `content/wiki/NVIDIA-Metropolis.md` - linked Jetson Platform Services and VPI into edge video AI workflows.
- `content/wiki/NVIDIA-Isaac-ROS.md` and `content/wiki/NVIDIA-Isaac-GR00T.md` - connected robotics deployment and humanoid model workflows to JetPack and Jetson Thor.
- `content/wiki/NVIDIA-Blackwell-Architecture.md` and `content/wiki/NVIDIA-MIG.md` - connected Blackwell/MIG concepts to Jetson Thor.
- `content/index.md` - updated page count to 226 and indexed all five new Jetson pages.

---

## 2026-04-29 - Overnight batch 5: Isaac robotics and physical AI documentation expansion

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch5-20260429T054623Z`; local Git tag `codex-backup-overnight-pre-batch5-20260429T054623Z`

**Source URLs:** https://developer.nvidia.com/isaac/, https://docs.isaacsim.omniverse.nvidia.com/latest/index.html, https://isaac-sim.github.io/IsaacLab/develop/index.html, https://isaac-sim.github.io/IsaacLab/develop/source/overview/core-concepts/multi_backend_architecture.html, https://isaac-sim.github.io/IsaacLab/develop/source/overview/core-concepts/renderers.html, https://nvidia-isaac-ros.github.io/, https://nvidia-isaac-ros.github.io/releases/index.html, https://developer.nvidia.com/isaac/gr00t, https://huggingface.co/nvidia/GR00T-N1.6-3B

**Gap analysis summary:**

- Split durable Isaac subtopics out of the umbrella page: Isaac Sim, Isaac Lab, Isaac ROS, and Isaac GR00T each have enough current NVIDIA-authored public material to warrant one canonical wiki page.
- Kept GR00T workflows and GR00T-N model variants consolidated into `NVIDIA-Isaac-GR00T.md` rather than creating separate pages for each model/build/workflow.
- Treated build/model catalog style material as supporting evidence for the canonical topic page, consistent with the no-per-build-page rule.
- Updated adjacent pages so robotics connections are queriable across Omniverse, Warp, Cosmos, Jetson, TensorRT, PyTorch, and DGX Cloud.

**Pages created (4 total):**

- `content/wiki/NVIDIA-Isaac-Sim.md`
- `content/wiki/NVIDIA-Isaac-Lab.md`
- `content/wiki/NVIDIA-Isaac-ROS.md`
- `content/wiki/NVIDIA-Isaac-GR00T.md`

**Pages updated:**

- `content/wiki/NVIDIA-Isaac.md` - refreshed the umbrella Isaac page and linked the four durable subtopics.
- `content/wiki/NVIDIA-Omniverse.md` - connected Omniverse to Isaac Sim, Isaac Lab, and GR00T simulation workflows.
- `content/wiki/NVIDIA-Warp.md` - linked Isaac Lab and Newton/Warp-oriented robot-learning directions.
- `content/wiki/NVIDIA-Cosmos.md` - connected Cosmos to Isaac Sim, Isaac Lab, and GR00T physical AI workflows.
- `content/wiki/NVIDIA-Jetson-Platform.md` - connected Jetson deployment to Isaac ROS and GR00T.
- `content/wiki/TensorRT.md` - linked robotics inference through Isaac ROS and Jetson.
- `content/wiki/PyTorch.md` - linked robot policy training through Isaac Lab and GR00T.
- `content/wiki/NVIDIA-DGX-Cloud.md` - linked DGX Cloud infrastructure to humanoid robotics foundation model training.
- `content/index.md` - updated page count to 221 and indexed all four new Isaac pages.

---

## 2026-04-29 - Overnight batch 4: Clara healthcare and life sciences documentation expansion

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch4-20260429T054137Z`; local Git tag `codex-backup-overnight-pre-batch4-20260429T054137Z`

**Source URLs:** https://docs.nvidia.com/clara/index.html, https://docs.nvidia.com/clara/latest/index.html, https://docs.nvidia.com/clara-viz/index.html, https://docs.nvidia.com/clara/monai/overview.html, https://docs.nvidia.com/holoscan/index.html, https://docs.nvidia.com/holoscan/sdk-user-guide/index.html, https://docs.nvidia.com/bionemo-framework/latest/index.html

**Gap analysis summary:**

- Expanded Clara from a single broad healthcare page into connected pages for three canonical NVIDIA healthcare/life-sciences surfaces: Parabricks, Clara Viz, and NVIDIA MONAI Toolkit.
- Updated existing Clara, BioNeMo, Holoscan, and AI Enterprise pages with current docs-hub links and cross-connections.
- Kept BioNeMo information consolidated into the existing `NVIDIA-BioNeMo.md` page rather than creating a parallel BioNeMo Framework page.

**Pages created (3 total):**

- `content/wiki/NVIDIA-Parabricks.md`
- `content/wiki/NVIDIA-Clara-Viz.md`
- `content/wiki/NVIDIA-MONAI-Toolkit.md`

**Pages updated:**

- `content/wiki/NVIDIA-Clara.md` - connected Parabricks, Clara Viz, MONAI Toolkit, and current Clara docs hub structure.
- `content/wiki/NVIDIA-Holoscan.md` - refreshed current Holoscan docs context and linked Clara imaging companions.
- `content/wiki/NVIDIA-BioNeMo.md` - linked current BioNeMo framework docs and Parabricks as a Clara life-sciences sibling.
- `content/wiki/NVIDIA-AI-Enterprise.md` - connected MONAI Toolkit to enterprise healthcare AI.
- `content/index.md` - updated page count to 217 and indexed the new Clara pages.

---

## 2026-04-29 - Overnight batch 3: CUDA core guides, PTX compiler docs, cuOpt service, and Cloudera certification reference

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch3-20260429T053624Z`; local Git tag `codex-backup-overnight-pre-batch3-20260429T053624Z`

**Source URLs:** https://docs.nvidia.com/cuda/cuda-quick-start-guide/index.html, https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html, https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/index.html, https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html, https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html, https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html, https://docs.nvidia.com/cuda/inline-ptx-assembly/index.html, https://docs.nvidia.com/cuda/ptx-writers-guide-to-interoperability/index.html, https://docs.nvidia.com/cuda/tile-ir/latest/index.html, https://docs.nvidia.com/cuopt/service/latest/index.html, https://docs.nvidia.com/cloudera/prod_certified-for-cloudera.html

**Gap analysis summary:**

- Filled remaining current CUDA documentation gaps from the docs hub: quick start, Linux/Windows install guides, programming guide, best-practices guide, release notes, inline PTX assembly, and PTX interoperability.
- Updated the existing `cuTile` page from the current Tile IR docs instead of creating a duplicate Tile IR page.
- Added a separate page for the cuOpt Managed Service because it is a distinct hosted/API workflow from the base cuOpt library page.
- Added NVIDIA Certified for Cloudera as NVIDIA-authored certification/reference material, while noting that the source is older and should be treated as reference architecture material rather than a fast-moving product page.
- Skipped NVIDIA DIGITS for this batch because the docs surface appears older and not aligned with the current/latest-docs rule.

**Pages created (10 total):**

### CUDA setup, programming, and release docs (6)
- `content/wiki/CUDA-Quick-Start-Guide.md`
- `content/wiki/CUDA-Installation-Guide-Linux.md`
- `content/wiki/CUDA-Installation-Guide-Windows.md`
- `content/wiki/CUDA-Programming-Guide.md`
- `content/wiki/CUDA-Best-Practices-Guide.md`
- `content/wiki/CUDA-Release-Notes.md`

### PTX and compiler docs (2)
- `content/wiki/Inline-PTX-Assembly.md`
- `content/wiki/PTX-Interoperability.md`

### Services and partner/reference docs (2)
- `content/wiki/NVIDIA-cuOpt-Managed-Service.md`
- `content/wiki/NVIDIA-Certified-for-Cloudera.md`

**Pages updated:**

- `content/wiki/NVIDIA-CUDA.md` - linked the current CUDA setup, programming, best-practices, and release-note guide pages.
- `content/wiki/NVCC.md` - connected compiler docs to the CUDA programming guide, best-practices guide, inline PTX, and PTX interoperability.
- `content/wiki/PTX-ISA.md` and `content/wiki/PTX-Compiler-APIs.md` - connected PTX ISA and compiler API pages to inline PTX and interoperability guidance.
- `content/wiki/cuTile.md` - refreshed from current Tile IR docs and linked PTX/compiler-adjacent pages.
- `content/wiki/cuOpt.md` - linked the cuOpt Managed Service as the hosted/API counterpart.
- `content/wiki/NVIDIA-Certified-Systems.md` and `content/wiki/NVIDIA-AI-Enterprise.md` - linked NVIDIA Certified for Cloudera as enterprise reference material.
- `content/index.md` - updated page count to 214 and indexed all 10 new pages.

---

## 2026-04-29 - Overnight batch 2: CUDA guides, AI platform docs, cloud-native infrastructure, and architecture coverage

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/overnight-pre-batch-20260429T052306Z`; local Git tag `codex-backup-overnight-pre-batch-20260429T052306Z`

**Source URLs:** https://docs.api.nvidia.com/, https://build.nvidia.com/, https://docs.nvidia.com/llm-inference-quick-start-recipes/index.html, https://developer.nvidia.com/brev, https://docs.nvidia.com/bright-cluster-manager/index.html, https://docs.nvidia.com/base-command-manager/index.html, https://developer.nvidia.com/capture-sdk, https://docs.nvidia.com/nvidia-certification-programs/index.html, https://docs.nvidia.com/certification-programs/latest/nvidia-certified-systems.html, https://www.nvidia.com/en-us/data-center/products/certified-systems/, https://docs.nvidia.com/ncx/index.html, https://docs.nvidia.com/ncx/ncp-software-reference-guide/latest/index.html, https://docs.nvidia.com/datacenter/cloud-native/index.html, https://docs.nvidia.com/cloudxr-sdk/latest/index.html, https://docs.nvidia.com/cloudxr-sdk/latest/overview/overview.html, https://www.nvidia.com/en-us/design-visualization/solutions/cloud-xr/, https://docs.nvidia.com/cosmos-curator-lha/current, https://docs.nvidia.com/cosmos-curator-lha/current/introduction.html, https://docs.nvidia.com/cosmos/index.html, https://docs.nvidia.com/dccpu/index.html, https://docs.nvidia.com/deeplearning/performance/index.html, https://docs.nvidia.com/cuda/demo-suite/index.html, https://docs.nvidia.com/cuda/eflow-users-guide/index.html, https://docs.nvidia.com/nsight-visual-studio-edition/index.html, https://docs.nvidia.com/cuda/nsight-eclipse-plugins-guide/index.html, https://docs.nvidia.com/cuda/nsightee-plugins-install-guide/index.html, https://docs.nvidia.com/cuda/floating-point/index.html, https://docs.nvidia.com/cuda/incomplete-lu-cholesky/index.html, https://docs.nvidia.com/cuda/ampere-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ampere-tuning-guide/index.html, https://docs.nvidia.com/cuda/ada-compatibility-guide/index.html, https://docs.nvidia.com/cuda/ada-tuning-guide/index.html, https://docs.nvidia.com/cuda/turing-compatibility-guide/index.html, https://docs.nvidia.com/cuda/turing-tuning-guide/index.html

**Gap analysis summary:**

- Continued the current-docs pass across NVIDIA-authored public documentation, focusing on missing CUDA guide pages, architecture guide pages, AI platform docs, cloud-native infrastructure docs, certification docs, and media/XR SDK docs.
- Treated `build.nvidia.com` as a discovery/API surface rather than a per-build page source; no duplicate pages were created for model/build variants.
- Kept one page per canonical NVIDIA doc/topic, and consolidated related material into existing pages where a topic already existed.

**Pages created (22 total):**

### API, AI platform, and infrastructure docs (8)
- `content/wiki/NVIDIA-API-Documentation.md`
- `content/wiki/NVIDIA-Brev.md`
- `content/wiki/NVIDIA-Bright-Cluster-Manager.md`
- `content/wiki/NVIDIA-Certification-Programs.md`
- `content/wiki/NVIDIA-Certified-Systems.md`
- `content/wiki/NVIDIA-Cloud-Accelerator-NCX.md`
- `content/wiki/NVIDIA-Cloud-Native-Technologies.md`
- `content/wiki/NVIDIA-Data-Center-CPUs.md`

### Inference and performance guides (2)
- `content/wiki/LLM-Inference-Quick-Start-Recipes.md`
- `content/wiki/NVIDIA-Deep-Learning-Performance.md`

### Media, XR, and Cosmos docs (3)
- `content/wiki/NVIDIA-Capture-SDK.md`
- `content/wiki/NVIDIA-CloudXR.md`
- `content/wiki/NVIDIA-Cosmos-Curator-LHA.md`

### CUDA guides, tools, and architecture docs (9)
- `content/wiki/CUDA-Demo-Suite.md`
- `content/wiki/CUDA-on-EFLOW.md`
- `content/wiki/Nsight-Visual-Studio-Edition.md`
- `content/wiki/Nsight-Eclipse-Plugins.md`
- `content/wiki/Floating-Point-and-IEEE-754.md`
- `content/wiki/Incomplete-LU-Cholesky.md`
- `content/wiki/NVIDIA-Ampere-Architecture.md`
- `content/wiki/NVIDIA-Ada-Lovelace-Architecture.md`
- `content/wiki/NVIDIA-Turing-Architecture.md`

**Pages updated:**

- `content/wiki/NVIDIA-CUDA.md` - linked CUDA Demo Suite, EFLOW, floating-point guidance, and Ampere/Ada/Turing architecture guidance.
- `content/wiki/NVIDIA-DGX.md` - connected DGX to Bright Cluster Manager, Certified Systems, Data Center CPUs, and NCX.
- `content/wiki/NVIDIA-AI-Enterprise.md` - connected API docs, LLM inference recipes, certified systems, and cloud-native deployment docs.
- `content/wiki/NVIDIA-NIM.md` - linked API docs, LLM inference recipes, Brev, and NCX while preserving the no-per-build-page policy.
- `content/wiki/NVIDIA-Base-Command-Manager.md` - linked Bright Cluster Manager as adjacent cluster-management documentation.
- `content/wiki/NVIDIA-Cosmos.md` - connected Cosmos Curator/LHA to the existing Cosmos platform page.
- `content/wiki/NVIDIA-Grace-CPU.md` - linked Data Center CPUs as the current NVIDIA docs hub for Grace-related CPU systems.
- `content/wiki/NVIDIA-GPU-Operator.md` and `content/wiki/NVIDIA-Container-Toolkit.md` - linked the cloud-native docs hub.
- `content/wiki/NVIDIA-RTX.md` and `content/wiki/NVIDIA-Maxine.md` - linked Capture SDK and CloudXR into RTX/media workflows.
- `content/wiki/cuBLAS.md`, `content/wiki/cuSPARSE.md`, `content/wiki/cuSOLVER.md`, and `content/wiki/AmgX.md` - linked iterative solver/preconditioning guidance.
- `content/wiki/NVCC.md`, `content/wiki/CUDA-Math-API.md`, and `content/wiki/cuFFT.md` - linked floating-point numerical guidance.
- `content/wiki/Nsight-Compute.md`, `content/wiki/Nsight-Systems.md`, and `content/wiki/CUDA-GDB.md` - linked Nsight Visual Studio Edition and Nsight Eclipse plugin paths.
- `content/index.md` - updated page count to 204 and added all 22 new pages to the master index.

---

## 2026-04-29 - Gap analysis and first broad NVIDIA docs/build expansion

**Rollback backup:** `/home/bnewsom/codex/backups/nvidia-cuda-wiki/pre-expansion-20260429T042416Z`; local Git tag `codex-backup-pre-expansion-20260429T042416Z`

**Source URLs:** https://docs.nvidia.com/, https://docs.nvidia.com/cuda/, https://docs.nvidia.com/cuda/doc/index.html, https://docs.nvidia.com/nim/index.html, https://docs.nvidia.com/nemo/index.html, https://docs.nvidia.com/nemo/microservices/latest/index.html, https://docs.nvidia.com/nemo/retriever/latest/index.html, https://docs.nvidia.com/nemo/agent-toolkit/latest/index.html, https://build.nvidia.com/models, https://docs.nvidia.com/dynamo/index.html, https://docs.nvidia.com/aistore, https://docs.nvidia.com/nemoclaw/index.html, https://docs.nvidia.com/openshell/index.html, https://docs.nvidia.com/aerial/index.html, https://docs.nvidia.com/ai-grid/index.html, https://docs.nvidia.com/attestation/index.html, https://docs.nvidia.com/base-command-manager/index.html, https://docs.nvidia.com/baseos/index.html, https://docs.nvidia.com/dgx-cloud/index.html, https://docs.nvidia.com/dgx-superpod/index.html, https://docs.nvidia.com/datacenter/tesla/index.html, https://docs.nvidia.com/cloud-functions/index.html, https://docs.nvidia.com/cupti-python/, https://docs.nvidia.com/cupynumeric/latest/

**Gap analysis summary:**

- Checked all current `content/wiki/*.md` pages against NVIDIA Docs Hub, CUDA 13.2 documentation, build.nvidia.com model catalog, and newly surfaced NVIDIA platform docs.
- Prioritized latest/current NVIDIA-authored public docs and avoided creating duplicate topic pages when an existing topic page should absorb new material.
- Identified major missing clusters: CUDA compiler/runtime/API references, device/distributed CUDA-X libraries, image codecs, CUDA deployment contexts, NeMo agent lifecycle components, NVIDIA agent runtime/sandboxing, AI factory storage/OS/cluster management, DGX Cloud/SuperPOD, and current Nemotron/NIM model catalog updates.

**Pages created (42 total):**

### CUDA platform, APIs, compiler SDK, and deployment (14)
- `content/wiki/NVIDIA-CUDA.md`
- `content/wiki/CUDA-Runtime-API.md`
- `content/wiki/CUDA-Driver-API.md`
- `content/wiki/CUDA-Compatibility.md`
- `content/wiki/PTX-ISA.md`
- `content/wiki/CUDA-Cpp-Standard-Library.md`
- `content/wiki/nvFatbin.md`
- `content/wiki/PTX-Compiler-APIs.md`
- `content/wiki/CUDA-Binary-Utilities.md`
- `content/wiki/CUDA-Compile-Time-Advisor.md`
- `content/wiki/CUDA-Debugger-API.md`
- `content/wiki/libdevice.md`
- `content/wiki/NVVM-IR.md`
- `content/wiki/CUDA-on-WSL.md`

### CUDA-X libraries and codecs (10)
- `content/wiki/cuFFTDx.md`
- `content/wiki/cuBLASDx.md`
- `content/wiki/cuBLASMp.md`
- `content/wiki/cuSOLVERMp.md`
- `content/wiki/cuSPARSELt.md`
- `content/wiki/nvJPEG2000.md`
- `content/wiki/nvTIFF.md`
- `content/wiki/CUDA-for-Tegra.md`
- `content/wiki/CUPTI-Python.md`
- `content/wiki/cuPyNumeric.md`

### Infrastructure, platform, and AI factory docs (10)
- `content/wiki/NVIDIA-Dynamo.md`
- `content/wiki/NVIDIA-AIStore.md`
- `content/wiki/NVIDIA-AI-Grid.md`
- `content/wiki/NVIDIA-Attestation.md`
- `content/wiki/NVIDIA-Base-Command-Manager.md`
- `content/wiki/NVIDIA-BaseOS.md`
- `content/wiki/NVIDIA-DGX-Cloud.md`
- `content/wiki/NVIDIA-DGX-SuperPOD.md`
- `content/wiki/NVIDIA-Data-Center-GPU-Drivers.md`
- `content/wiki/NVIDIA-Cloud-Functions.md`

### Agents, NeMo, and virtualization (8)
- `content/wiki/NVIDIA-NemoClaw.md`
- `content/wiki/NVIDIA-OpenShell.md`
- `content/wiki/NVIDIA-Agent-Intelligence-Toolkit.md`
- `content/wiki/NVIDIA-AI-Aerial.md`
- `content/wiki/NeMo-Platform.md`
- `content/wiki/NeMo-Retriever.md`
- `content/wiki/NVIDIA-MIG.md`
- `content/wiki/NVIDIA-vGPU.md`

**Pages updated:**

- `content/wiki/NVIDIA-NIM.md` - refreshed from current NIM docs and build.nvidia.com model catalog; linked Dynamo, NeMo Platform, NeMo Retriever, NIXL, and Nemotron.
- `content/wiki/NVIDIA-NeMo.md` - reframed from framework-only to current NeMo lifecycle suite covering microservices, framework, Retriever, Guardrails, Agent Toolkit, and deployment.
- `content/wiki/Nemotron.md` - updated from current build.nvidia.com Nemotron model cards, including Nemotron 3, content safety, ASR, OCR/document, retrieval, and multimodal directions.
- `content/wiki/NVIDIA-DGX.md` - connected DGX Cloud, DGX SuperPOD, BaseOS, Base Command Manager, and MIG.
- `content/wiki/NVIDIA-AI-Enterprise.md` - connected NeMo Platform, Retriever, Agent Toolkit, MIG, vGPU, and Attestation.
- `content/wiki/NGC.md` - connected NGC with NIM, Nemotron, NeMo Platform, and Dynamo.
- `content/wiki/NVIDIA-Base-Command.md` - clarified links to Base Command Manager, DGX Cloud, DGX SuperPOD, and BaseOS.
- `content/wiki/NVIDIA-Blackwell-Architecture.md` - connected CUDA compatibility, DGX SuperPOD, MIG, and Attestation.
- `content/wiki/NVCC.md` - connected PTX, NVVM IR, libdevice, nvFatbin, binary utilities, and compile-time advisor.
- `content/wiki/cuBLAS.md`, `content/wiki/cuFFT.md`, `content/wiki/cuSPARSE.md` - linked new Dx/Mp/structured-sparsity companion pages.
- `content/index.md` - updated page count to 182, added all 42 new pages, and fixed pre-existing missing index entries for `PyTorch` and `cuStateVec`.

---

## 2026-04-28 - Ingested NVIDIA Mission Control docs into a consolidated wiki page

**Source URLs:** https://docs.nvidia.com/mission-control/index.html, https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.3.0/index.html, https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.3.0/nmc-release-notes.html, https://docs.nvidia.com/mission-control/docs/systems-administration-guide/2.2.0/overview.html, https://docs.nvidia.com/mission-control/docs/systems-administration-guide/2.3.0/nvlink-management-software.html, https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.3.0/nmc-user-guide-runai-installation.html, https://docs.nvidia.com/mission-control/docs/systems-quick-start-guide/2.0.0/ajr/ajr-overview.html, https://docs.nvidia.com/mission-control/docs/systems-administration-guide/2.1.0/prs/introduction.html

**Pages created (1 total):**

- `content/wiki/NVIDIA-Mission-Control.md` - consolidated Mission Control page covering platform role, built-in workload management, observability, resiliency, and power-aware operations

**Pages updated:**

- `content/index.md` - added Mission Control under AI Cloud & Software Platforms and refreshed page count/date

---

## 2026-04-10 — NVL72, HGX added; NVL4 investigated

- Added `NVIDIA-GB200-NVL72.md` — live fetch from nvidia.com/en-us/data-center/gb200-nvl72/
- Added `NVIDIA-HGX.md` — live fetch from nvidia.com/en-us/data-center/hgx/
- Added `NVIDIA-GB200-NVL4.md` — sourced from ServeTheHome, Tweaktown, Tom's Hardware, VideoCardz (Nov 2024 announcement coverage). No official nvidia.com product page exists yet; OEM availability H2 2025.
- Updated index.md Hardware Platforms section

---

## 2026-04-09 — Wiki initialized

- Created folder structure: `raw/`, `wiki/`
- Created `CLAUDE.md`, `index.md`, `log.md`
- Pages created: 0
- Ready for first source ingestion.

---

## 2026-04-09 — Ingested 43 NVIDIA CUDA-X library pages from official NVIDIA documentation

**Source URLs:** NVIDIA Developer Portal (developer.nvidia.com), GitHub (github.com/NVIDIA), flashinfer.ai, docs.nvidia.com/cuda

**Pages created (43 total):**

### Math & Linear Algebra (9 pages)
- `wiki/cuBLAS.md` — GPU-accelerated BLAS; 152 routines, Tensor Core GEMM, multi-GPU variants
- `wiki/cuFFT.md` — GPU-accelerated FFT; 1D/2D/3D, cuFFTMp multi-node, cuFFTDx in-kernel
- `wiki/cuRAND.md` — GPU-accelerated random number generation; MRG32k3a, Mersenne Twister, Sobol'
- `wiki/cuSOLVER.md` — GPU-accelerated dense/sparse linear solvers and eigensolvers
- `wiki/cuSPARSE.md` — GPU-accelerated sparse linear algebra; 30-150x faster SpMM vs CPU
- `wiki/cuTENSOR.md` — GPU-accelerated tensor contraction/reduction; arbitrary dimensionality, Tensor Cores
- `wiki/cuDSS.md` — GPU-accelerated direct sparse solver; Pascal+ GPUs, Grace Hopper optimized
- `wiki/AmgX.md` — Open-source GPU multigrid/Krylov solver; up to 10x acceleration
- `wiki/nvmath-python.md` — Python interface to CUDA-X math libraries; NumPy/CuPy/PyTorch compatible

### Deep Learning (4 pages)
- `wiki/cuDNN.md` — GPU-accelerated DNN primitives; powers PyTorch, TensorFlow, JAX, MXNet
- `wiki/TensorRT.md` — Inference compiler/runtime/optimizer; 36x vs CPU, TensorRT-LLM for LLMs
- `wiki/CUTLASS.md` — Open-source C++ GEMM template library; Volta through Blackwell
- `wiki/FlashInfer.md` — Open-source LLM inference kernels; attention, batch decode, sampling

### Data Processing & ML (9 pages)
- `wiki/cuDF.md` — GPU DataFrame library; 50x faster pandas drop-in (RAPIDS)
- `wiki/cuML.md` — GPU ML library; 50x faster scikit-learn drop-in (RAPIDS)
- `wiki/cuGraph.md` — GPU graph analytics; 48x faster NetworkX drop-in (RAPIDS)
- `wiki/cuVS.md` — GPU vector search; CAGRA ANN algorithm (RAPIDS)
- `wiki/cuOpt.md` — GPU operations research; vehicle routing and logistics optimization
- `wiki/NeMo-Curator.md` — GPU multimodal data curation for LLM training pipelines
- `wiki/Morpheus.md` — GPU AI cybersecurity framework; digital fingerprinting, phishing detection
- `wiki/nvComp.md` — GPU compression/decompression; LZ4, Snappy, ZSTD, GDeflate, Bitcomp
- `wiki/GPU-Direct-Storage.md` — Direct NVMe-to-GPU data path; eliminates CPU copy bottleneck

### Image & Video (7 pages)
- `wiki/NVIDIA-DALI.md` — GPU data loading/augmentation for DL training; PyTorch/TF/MXNet drop-in
- `wiki/CV-CUDA.md` — Open-source GPU image pre/post-processing; 49x throughput vs CPU baseline
- `wiki/NPP.md` — GPU image/signal processing primitives; 5,000+ functions, 30x faster than CPU
- `wiki/NVIDIA-Video-Codec-SDK.md` — Hardware video encode (NVENC) / decode (NVDEC); AV1, H.265, H.264
- `wiki/NVIDIA-Optical-Flow-SDK.md` — Hardware optical flow on Turing/Ampere/Ada; 80% GPU util reduction
- `wiki/nvImageCodec.md` — Unified GPU image codec; JPEG, JPEG2000, TIFF, WebP, PNG, BMP
- `wiki/cuCIM.md` — GPU scikit-image compatible image processing; WSI/digital pathology (RAPIDS)

### Parallel Algorithms (4 pages)
- `wiki/Thrust.md` — GPU STL-compatible parallel algorithms; 5-100x faster sort vs STL/TBB
- `wiki/CUB.md` — GPU cooperative primitives; device/block/warp-level sort, scan, reduce, histogram
- `wiki/NCCL.md` — Multi-GPU collective communications; all-reduce, all-gather, NVLink/IB/RoCE
- `wiki/NVSHMEM.md` — GPU cluster PGAS communication via OpenSHMEM; GPU-initiated one-sided ops

### Scientific & Physics (4 pages)
- `wiki/NVIDIA-Warp.md` — GPU physics simulation Python framework; JIT-compiled, differentiable
- `wiki/cuEquivariance.md` — GPU equivariant NN kernels; 10x MACE, 200x symmetric contractions
- `wiki/cuLitho.md` — GPU computational lithography; 40x ILT speedup, TSMC/ASML/Synopsys adoption
- `wiki/cuQuantum.md` — GPU quantum simulation SDK; state vector, tensor network, density matrix

### Development Tools (6 pages)
- `wiki/NVCC.md` — NVIDIA CUDA Compiler Driver; compiles .cu files for host + device
- `wiki/CUDA-GDB.md` — GNU GDB-based CUDA debugger; breakpoints inside GPU kernels
- `wiki/NVRTC.md` — CUDA runtime compilation library; JIT compilation of CUDA C++ strings
- `wiki/Compute-Sanitizer.md` — GPU correctness checker; Memcheck, Racecheck, Initcheck, Synccheck
- `wiki/Nsight-Compute.md` — GPU kernel profiler; hardware counters, roofline, guided analysis
- `wiki/Nsight-Systems.md` — System-wide CPU+GPU profiler; timeline, NCCL traces, framework annotations

**index.md updated:** Yes — all 43 pages listed under 7 categories

---

## 2026-04-09 — Batch 2: Ingested 28 additional NVIDIA framework and ecosystem library pages

**Source URLs:** pytorch.org, developer.nvidia.com, github.com/NVIDIA, docs.nvidia.com/cuda, cupy.dev, jax.readthedocs.io, tensorflow.org, docs.dask.org, opencv.org, nvidia.github.io/cccl

**Pages created (28 total):**

### NVIDIA Frameworks (8 pages)
- `wiki/PyTorch.md` — CUDA-accelerated deep learning framework; cuDNN/cuBLAS/NCCL backed, torch.compile, AMP
- `wiki/NVIDIA-NeMo.md` — LLM/speech pre-training and fine-tuning framework; SFT, RLHF, DPO, Megatron-LM core
- `wiki/Triton-Inference-Server.md` — multi-framework production inference server; dynamic batching, gRPC/REST
- `wiki/Megatron-LM.md` — 3D-parallel LLM pre-training at trillion-parameter scale; tensor/pipeline/data parallelism
- `wiki/NVIDIA-Modulus.md` — physics-ML framework for PINNs, FNO, DeepONet; CFD/heat/structural surrogates
- `wiki/NVIDIA-Holoscan.md` — real-time AI sensor processing SDK; medical imaging, surgical AI, industrial edge
- `wiki/NVIDIA-Isaac.md` — robotics platform: Isaac Sim, Isaac Lab, Isaac ROS, Isaac Perceptor, Isaac Manipulator
- `wiki/NVIDIA-Omniverse.md` — OpenUSD-based 3D simulation and digital twin platform with RTX rendering

### Partner / Ecosystem Libraries (5 pages)
- `wiki/CuPy.md` — NumPy/SciPy-compatible GPU array library; wraps cuBLAS, cuFFT, cuRAND, cuSPARSE
- `wiki/JAX.md` — composable GPU function transforms (jit, grad, vmap, pmap) via XLA compiler
- `wiki/TensorFlow-GPU.md` — Google deep learning framework with CUDA/cuDNN/XLA/NCCL GPU support
- `wiki/Dask.md` — Python distributed computing; scales RAPIDS GPU workflows across multi-GPU clusters
- `wiki/OpenCV-CUDA.md` — GPU-accelerated classical CV; filters, geometry, feature detection, video codec

### Missing CUDA-X Libraries (15 pages)
- `wiki/PhysicsNeMo.md` — geoscience physics-AI training; SFNO, FourCastNet, seismic, reservoir simulation
- `wiki/Earth-2.md` — AI climate digital twin; CorrDiff downscaling, ensemble NWP, Earth-2 Studio SDK
- `wiki/cuPQC.md` — GPU-accelerated post-quantum cryptography: Kyber, Dilithium, FALCON, SPHINCS+
- `wiki/CUDA-Q.md` — hybrid quantum-classical platform; cuQuantum simulation, QPU backends, MLIR compiler
- `wiki/NIXL.md` — inference transfer library for disaggregated LLM KV cache; UCX/NVLink/NVMe backends
- `wiki/cuEST.md` — GPU RF signal processing for EW/SIGINT; spectrum sensing, PDW extraction, DOA estimation
- `wiki/cuDLA.md` — CUDA API for DLA deep learning accelerator on Jetson/DRIVE SoCs
- `wiki/nvJPEG.md` — GPU JPEG encode/decode; batch decode backend for DALI; nvJPEG2000 variant
- `wiki/NVBLAS.md` — drop-in Level 3 BLAS shim; GPU-enables legacy apps via LD_PRELOAD with zero code changes
- `wiki/nvJitLink.md` — CUDA 12 runtime device-code linker for PTX/LTOIR/cubin JIT linking
- `wiki/libNVVM.md` — NVVM IR to PTX compiler backend; enables custom GPU language compilers
- `wiki/CUDA-Math-API.md` — device-side math functions (sin, cos, exp, FP16/BF16 intrinsics) for CUDA kernels
- `wiki/NVPL.md` — CPU math libraries (BLAS, LAPACK, FFT, RAND) optimized for NVIDIA Grace/Arm Neoverse V2
- `wiki/cuda-parallel.md` — Python bindings for CUB/Thrust algorithms; JIT-compiled user operators via NVRTC
- `wiki/TensorRT-LLM.md` — LLM inference optimization: continuous batching, paged KV cache, FP8, TP/PP, LoRA

**index.md updated:** Yes — 28 new pages added across 3 new top-level sections (NVIDIA Frameworks, Partner/Ecosystem Libraries) and expanded Technologies section with new categories (Security, Signal/EW, Embedded/Edge, Inference/Transfer)

---

## 2026-04-10 — Batch 3: Ingested 34 additional pages covering NVIDIA platforms, GPU architectures, CUDA concepts, infrastructure tools, and ecosystem libraries.

**Source URLs:** catalog.ngc.nvidia.com, developer.nvidia.com, nvidia.com, docs.nvidia.com, triton-lang.org, deepspeed.ai, docs.vllm.ai, huggingface.co, github.com/NVlabs

**Pages created (34 total):**

### Platforms & Products (11 pages)
- `wiki/NGC.md` — NVIDIA GPU Cloud: container registry, model catalog, Helm charts, CLI; monthly-updated GPU-optimized containers
- `wiki/NVIDIA-NIM.md` — Inference Microservices: OpenAI-compatible REST API containers; TensorRT-LLM/vLLM backends; 1-click LLM deployment
- `wiki/NVIDIA-AI-Enterprise.md` — Enterprise AI software suite with 24/7 SLA support, CVE management, LTS releases, NGC delivery
- `wiki/NVIDIA-BioNeMo.md` — Drug discovery AI platform: ESMFold, DiffDock, protein LMs, molecular generation; NIM integration
- `wiki/NVIDIA-Riva.md` — Real-time speech AI SDK: ASR (Conformer), TTS (FastPitch+HiFiGAN), NLU; gRPC streaming API; <100ms latency
- `wiki/NVIDIA-Maxine.md` — Audio/video/AR AI SDKs for conferencing: noise removal, background removal, gaze correction
- `wiki/NVIDIA-Clara.md` — Healthcare AI: Parabricks genomics (30x WGS speedup), MONAI medical imaging, Clara Guardian edge AI
- `wiki/NVIDIA-Metropolis.md` — IVA platform + 700+ partner ecosystem; microservices for people counting, LPR, safety compliance
- `wiki/NVIDIA-DeepStream.md` — GStreamer-based multi-stream video analytics toolkit; 100+ streams per GPU; TensorRT+Triton integration
- `wiki/NVIDIA-AI-Workbench.md` — Developer IDE for GPU projects; one-click container envs; multi-location compute (local→cloud)
- `wiki/NVIDIA-Base-Command.md` — DGX cluster MLOps: job scheduling, dataset versioning, experiment tracking, multi-tenant RBAC

### Hardware Platforms (3 pages)
- `wiki/NVIDIA-DGX.md` — AI supercomputing systems: DGX H100 (8x H100), DGX B200 (8x B200), DGX SuperPOD; NVSwitch mesh
- `wiki/NVIDIA-Jetson-Platform.md` — Edge AI SOM modules: Jetson AGX Orin (275 TOPS), Orin NX, Orin Nano; JetPack SDK; DeepStream+Isaac ROS
- `wiki/NVIDIA-Drive-Platform.md` — Autonomous vehicle platform: DRIVE AGX Orin/Thor, DriveWorks SDK, DRIVE Sim (Omniverse-based)

### GPU Architectures (3 pages)
- `wiki/NVIDIA-Blackwell-Architecture.md` — 2024 arch: FP4 Tensor Cores, NVLink 5 (1.8TB/s), NVSwitch 4, NVL72 (72 GPUs), NVLink-C2C; B100/B200/GB200
- `wiki/NVIDIA-Hopper-Architecture.md` — 2022 arch: 1st-gen Transformer Engine (FP8), NVLink 4 (900GB/s), MIG, DPX instructions; H100/H200
- `wiki/NVIDIA-Grace-CPU.md` — ARM Neoverse V2 data center CPU; 72 cores; 512GB/s LPDDR5X; NVLink-C2C to GPU (GH200/GB200)

### CUDA Concepts (6 pages)
- `wiki/CUDA-Graphs.md` — Graph-captured GPU workflows for single-submission replay; 30-50% inference latency reduction
- `wiki/CUDA-Unified-Memory.md` — Demand-paging unified CPU+GPU memory; GH200 coherent access at NVLink bandwidth
- `wiki/CUDA-Streams.md` — Ordered GPU operation queues enabling concurrent kernel execution and compute/transfer overlap
- `wiki/NVLink.md` — NVIDIA GPU interconnect: 5 generations from 160GB/s (P100) to 1.8TB/s (B200); NVSwitch full-mesh
- `wiki/GPUDirect-RDMA.md` — Direct NIC↔GPU DMA path; zero CPU copy for inter-node collective communications
- `wiki/Multi-Process-Service.md` — MPS: multi-process GPU sharing with concurrent SM execution; improves utilization for under-saturated workloads

### Infrastructure & DevOps (5 pages)
- `wiki/NVIDIA-GPU-Operator.md` — Kubernetes operator managing full NVIDIA GPU software stack: driver, CTK, DCGM, MIG Manager
- `wiki/NVIDIA-Container-Toolkit.md` — nvidia-container-runtime: GPU access in Docker/containerd without driver bundling in images
- `wiki/NVIDIA-DCGM.md` — Data Center GPU Manager: telemetry, health monitoring, diagnostics, Prometheus exporter for GPU clusters
- `wiki/CUPTI.md` — CUDA Profiling Tools Interface: hardware counters, activity tracing, API callbacks; Nsight tools built on CUPTI
- `wiki/NVBit.md` — Binary instrumentation framework for custom GPU analysis tools; PTX injection without source code

### Ecosystem & Partners (4 pages)
- `wiki/vLLM.md` — High-throughput LLM serving: PagedAttention, continuous batching, OpenAI API, multi-LoRA; NIM backend
- `wiki/DeepSpeed.md` — Microsoft ZeRO optimizer (3 stages + Infinity); MoE, pipeline parallelism; trillion-parameter training
- `wiki/Triton-GPU-Language.md` — OpenAI Python GPU kernel DSL; block-level programming; powers torch.compile Inductor fusion
- `wiki/Hugging-Face-Accelerate.md` — PyTorch distributed training abstraction over DDP/FSDP/DeepSpeed; HF Trainer backbone

### Networking (2 pages)
- `wiki/NVIDIA-ConnectX-InfiniBand.md` — ConnectX NICs + Quantum switches: up to NDR 400Gb/s; SHARP in-network all-reduce; DGX networking
- `wiki/NVIDIA-BlueField-DPU.md` — DPU: ConnectX NIC + ARM CPU + crypto/compress accelerators; zero-trust networking and storage offload

**index.md updated:** Yes — 6 new sections added (Platforms & Products, GPU Architectures, CUDA Concepts, Infrastructure & DevOps, Ecosystem & Partners, Networking); total page count updated to 105

---

## 2026-04-10 — Batch 4: Added 30 new pages covering NVIDIA model families, research, networking, and developer ecosystem. Also refreshed 34 batch 3 pages with live data (parallel agent).

**Source URLs:** developer.nvidia.com, nvidia.com, research.nvidia.com, github.com/NVlabs, github.com/NVIDIA, blogs.nvidia.com

**Pages created (30 total):**

### NVIDIA Model Families (10 pages)
- `wiki/Nemotron.md` — NVIDIA LLM family (3B–340B); Minitron distillation; SteerLM-aligned instruct/reward models
- `wiki/NVIDIA-Cosmos.md` — World foundation model platform: text/image-to-video generation for physical AI training data
- `wiki/Parakeet-ASR.md` — State-of-the-art English ASR; FastConformer; CTC/RNN-T/TDT; 0.6B–1.1B models
- `wiki/NVIDIA-Canary.md` — Multilingual ASR+translation (EN/ES/DE/FR); Canary-1B; encoder-decoder architecture
- `wiki/NVLM.md` — Frontier multimodal LLM (72B); NVLM-D/H/X dual-path architecture; OCR, DocVQA, MathVista
- `wiki/NVIDIA-ChatRTX.md` — Local on-device RAG chatbot for Windows RTX PCs; TensorRT-LLM + CLIP multimodal search
- `wiki/NVIDIA-Fugatto.md` — Generative audio transformer: compositional text-to-audio, voice transformation, music gen
- `wiki/NVIDIA-ACE.md` — Avatar Cloud Engine: ASR+LLM+TTS+Audio2Face microservices for interactive NPC/digital humans
- `wiki/NVIDIA-EAGLE.md` — EAGLE2 competitive multimodal LLMs; context-aware tiling; synthetic data pipeline
- `wiki/NVIDIA-SteerLM.md` — Inference-time LLM behavior steering via multi-attribute conditioning; HelpSteer2 dataset

### NVIDIA Research (7 pages)
- `wiki/NVIDIA-Research.md` — NVIDIA Research overview: 300+ researchers, Toronto/Seattle/Santa Clara labs, NVlabs
- `wiki/NVIDIA-NeRF.md` — Neural Radiance Fields: NVIDIA co-invented (ECCV 2020); novel view synthesis from photos
- `wiki/NVIDIA-Instant-NGP.md` — Instant NGP: hash encoding, NeRF in seconds, real-time rendering (SIGGRAPH 2022)
- `wiki/NVIDIA-GET3D.md` — GET3D: GAN-based 3D textured mesh generation from 2D images (NeurIPS 2022)
- `wiki/NVIDIA-GauGAN.md` — GauGAN/SPADE semantic image synthesis; GauGAN2; NVIDIA Canvas free app
- `wiki/NVIDIA-DLSS.md` — DLSS suite: Super Resolution, Frame Generation, Ray Reconstruction, DLSS 4 Multi Frame Gen
- `wiki/NVIDIA-RTX.md` — RTX platform: RT Cores, Tensor Cores, SER, DMM, Neural Shaders; DXR/Vulkan/OptiX

### Networking & Scale (4 pages)
- `wiki/NVIDIA-Quantum-InfiniBand.md` — Quantum-2 NDR 400Gb/s IB switches; SHARP in-network allreduce; DGX backbone
- `wiki/NVIDIA-Spectrum-X.md` — Spectrum-4 400GbE AI networking; Adaptive Routing; RoCEv2 lossless for NCCL
- `wiki/NVIDIA-UFM.md` — Unified Fabric Manager: IB/Ethernet fabric management, routing, telemetry, job isolation
- `wiki/NCCL-Algorithms.md` — Ring/tree allreduce algorithms, SHARP offload, topology-aware selection, NVLink/IB interaction

### Developer Experience (4 pages)
- `wiki/NVIDIA-Developer-Program.md` — Free developer membership: SDK downloads, NGC access, DLI courses, beta programs
- `wiki/NVIDIA-LaunchPad.md` — Free cloud GPU lab environments on DGX H100 for POC evaluation and demos
- `wiki/NVIDIA-NGC-Catalog.md` — NGC model+container marketplace: 600+ models, NIM integration, monthly container updates
- `wiki/NVIDIA-GTC.md` — GPU Technology Conference: Jensen keynote venue, 1,000+ sessions, major product launches

### Additional CUDA-X / Missing Libraries (5 pages)
- `wiki/cuTile.md` — CUDA Tile IR: hierarchical tile programming model for Blackwell WGMMA/TMA kernel generation
- `wiki/NVPL-FFT.md` — NVPL FFT: FFTW3-compatible CPU FFT optimized for NVIDIA Grace (Neoverse V2 SVE)
- `wiki/NVIDIA-Warp-Advanced.md` — Warp advanced: FEM, NanoVDB volumes, differentiable rendering, Isaac Lab integration
- `wiki/NeMo-Guardrails.md` — LLM safety toolkit; Colang DSL; input/output/dialog/retrieval rails; LangChain integration
- `wiki/TensorRT-Model-Optimizer.md` — Model quantization/pruning: FP8, INT4, FP4 (Blackwell), QAT/PTQ, TRT-LLM export

**index.md updated:** Yes — 5 new top-level sections added (NVIDIA Model Families, NVIDIA Research, Networking & Scale, Developer Experience, Additional CUDA-X/Libraries); total page count updated to 135
