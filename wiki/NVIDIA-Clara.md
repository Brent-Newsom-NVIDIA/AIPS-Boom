# NVIDIA Clara

**Type:** Platform
**Tags:** NVIDIA, healthcare, medical imaging, genomics, drug discovery, AI, radiology, clinical AI, life sciences
**Related:** [[NVIDIA-Parabricks]], [[NVIDIA-Clara-Viz]], [[NVIDIA-MONAI-Toolkit]], [[NVIDIA-FLARE]], [[NIM-for-MAISI]], [[NIM-for-VISTA-3D]], [[NVIDIA-BioNeMo]], [[BioNeMo-Recipes]], [[NIM-for-AlphaFold2]], [[NIM-for-OpenFold3]], [[NIM-for-Boltz2]], [[NIM-for-Evo-2]], [[NIM-for-MSA-Search]], [[NIM-for-ProteinMPNN]], [[NIM-for-RFdiffusion]], [[NIM-for-MolMIM]], [[NIM-for-GenMol]], [[NIM-for-DiffDock]], [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]], [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]], [[NVIDIA-Holoscan]], [[NVIDIA-Riva]], [[NVIDIA-AI-Enterprise]], [[NVIDIA-NIM]], [[NGC]], [[TensorRT]]
**Sources:** NVIDIA official documentation; https://docs.nvidia.com/clara/index.html, https://docs.nvidia.com/bionemo-framework/latest/main/recipes/, https://docs.nvidia.com/nim/medical/maisi/latest/overview.html, https://docs.nvidia.com/nim/medical/vista3d/latest/overview.html, https://docs.nvidia.com/nim/bionemo/msa-search/latest/overview.html, https://docs.nvidia.com/nim/bionemo/proteinmpnn/latest/overview.html, https://docs.nvidia.com/nim/bionemo/rfdiffusion/latest/overview.html, https://docs.nvidia.com/nim/bionemo/molmim/latest/overview.html, https://docs.nvidia.com/nim/bionemo/genmol/latest/overview.html, https://docs.nvidia.com/nim/bionemo/diffdock/latest/overview.html
**Last Updated:** 2026-04-30

## Summary
NVIDIA Clara is a healthcare AI computing platform that provides domain-specific frameworks, tools, and reference applications for medical imaging, genomics, drug discovery, and clinical AI. It is organized into several focused sub-platforms — Clara Imaging, Clara Parabricks (genomics), and Clara Holoscan (medical-grade edge AI) — each offering GPU-accelerated pipelines and pre-trained models tailored to clinical and life sciences workflows. Clara enables hospitals, medical device companies, and pharmaceutical researchers to develop, validate, and deploy AI-powered diagnostics and therapeutics.

## Detail

### Purpose
Healthcare AI development faces unique challenges: specialized data types (DICOM, FASTQ, whole-slide images), regulatory requirements (FDA 510(k), CE marking), de-identification requirements, scarce labeled datasets, and the need for explainability. Clara addresses these with domain-specific frameworks that handle medical data ingestion, federated learning for privacy-preserving model training, pre-trained models for common medical imaging tasks, and real-time inference pipelines for clinical deployment. It bridges the gap between GPU computing capabilities and healthcare domain requirements.

### Key Features

**Clara Imaging (Medical Imaging AI):**
- **[[NVIDIA-MONAI-Toolkit]]:** NVIDIA AI Enterprise-supported MONAI development sandbox for medical imaging AI, including MONAI Core, MONAI Label, NVIDIA FLARE integration, and curated pretrained models.
- **Medical imaging NIMs:** [[NIM-for-MAISI]] generates synthetic 3D CT images and annotation masks for research workflows, while [[NIM-for-VISTA-3D]] provides interactive 3D segmentation and annotation.
- **MONAI Deploy:** MLOps framework for packaging, validating, and deploying medical imaging AI as MONAI Application Packages (MAPs) integrated with hospital PACS/VNA systems
- **Pre-trained Segmentation Models:** AI models for organ segmentation (liver, lungs, kidneys, brain), lesion detection (lung nodules, liver tumors), and annotation (total body segmentation)
- **[[NVIDIA-Clara-Viz]]:** CUDA-based 2D/3D medical image visualization and digital pathology viewing.

**[[NVIDIA-Parabricks]] (Genomics):**
- **GPU-Accelerated Variant Calling:** Full GATK-compatible secondary analysis pipeline (alignment, duplicate marking, variant calling) running in 20–50 minutes on GPU vs 24–48 hours on CPU
- **FASTA-to-VCF Pipeline:** End-to-end germline and somatic variant calling from raw sequencing reads
- **Multi-GPU Scaling:** Linear scaling across multiple GPUs for large cohort studies
- **Compatibility:** Output VCF files are bit-for-bit compatible with CPU-based GATK, ensuring regulatory compliance and interoperability

**Clara Holoscan (Real-Time Medical AI):**
- See [[NVIDIA-Holoscan]] — Clara Holoscan is now its own branded platform for streaming AI sensor processing in medical devices

### Use Cases
- Radiology AI: automated organ and lesion segmentation for radiologist workflow augmentation
- Pathology AI: whole-slide image analysis for cancer grading and tumor detection
- Genomics: rapid population-scale variant calling for oncology, rare disease, and GWAS studies
- Federated learning: multi-site model training across hospital networks without sharing patient data using [[NVIDIA-FLARE]]
- Surgical AI: real-time instrument detection and procedure guidance in the OR (Holoscan)
- Drug target identification and structure prediction for pharmaceutical R&D (BioNeMo integration)

### Hardware Requirements / Compatibility
- **Clara Parabricks:** NVIDIA V100, A100, H100 recommended; minimum GTX 1080 or T4; CUDA 11.x+; Linux only
- **MONAI/Clara Imaging:** Any NVIDIA GPU with CUDA 11.x+; commonly deployed on A100, H100; Docker containerized
- **Storage:** Large-scale genomics pipelines require high-throughput NVMe storage (GPUDirect Storage recommended for large cohorts)
- **OS:** Ubuntu 18.04/20.04/22.04; Red Hat Enterprise Linux 7/8

### Language Bindings / APIs
- **Python:** MONAI Python library (`pip install monai`); Clara Parabricks CLI (`pbrun` command)
- **C++:** Holoscan SDK C++ API for real-time sensor processing
- **CLI:** `pbrun` for Parabricks; `clara` CLI for model registry and pipeline management
- **DICOM/HL7 FHIR:** MONAI Deploy integrates with hospital PACS via DICOMweb and HL7 FHIR standards
- **REST API:** MONAI Label server REST API for active learning annotation workflows

## Connections
- [[NVIDIA-Parabricks]] — genomics acceleration component of Clara for next-generation sequencing workflows.
- [[NVIDIA-Clara-Viz]] — Clara visualization component for 2D/3D medical imaging and pathology.
- [[NVIDIA-MONAI-Toolkit]] — enterprise-supported MONAI distribution for medical imaging AI development.
- [[NVIDIA-FLARE]] — federated learning and federated analytics runtime for privacy-preserving multi-party healthcare AI.
- [[NIM-for-MAISI]] and [[NIM-for-VISTA-3D]] — current medical imaging NIMs for synthetic CT generation and 3D segmentation/annotation.
- [[NVIDIA-BioNeMo]] and [[BioNeMo-Recipes]] — BioNeMo is the drug discovery/computational biology layer of Clara; recipes cover the current public training-reference implementation layer.
- [[NIM-for-AlphaFold2]], [[NIM-for-OpenFold3]], [[NIM-for-Boltz2]], and [[NIM-for-Evo-2]] — representative BioNeMo NIMs for structure, interaction, and DNA sequence workflows.
- [[NIM-for-MSA-Search]], [[NIM-for-ProteinMPNN]], [[NIM-for-RFdiffusion]], [[NIM-for-MolMIM]], [[NIM-for-GenMol]], and [[NIM-for-DiffDock]] — additional BioNeMo NIMs for sequence search, protein design, molecular generation, and docking.
- [[NIM-for-ALCHEMI-Batched-Geometry-Relaxation]] and [[NIM-for-ALCHEMI-Batched-Molecular-Dynamics]] — ALCHEMI NIMs for atomistic modeling adjacent to drug discovery and materials workflows.
- [[NVIDIA-Holoscan]] — Clara Holoscan became the NVIDIA Holoscan SDK; the real-time streaming AI platform for medical devices
- [[NVIDIA-Riva]] — Riva provides speech AI for clinical documentation (ambient clinical intelligence use cases)
- [[NVIDIA-AI-Enterprise]] — Clara workloads run under AI Enterprise license for regulated healthcare environments
- [[NVIDIA-NIM]] - medical imaging, BioNeMo, and speech healthcare capabilities can be deployed as NIM microservices.
- [[NGC]] — Clara containers, Parabricks, MONAI models, and reference applications distributed via NGC
- [[TensorRT]] — TensorRT accelerates inference for MONAI segmentation models and Clara imaging pipelines

## Resources
- [NVIDIA Clara Platform](https://developer.nvidia.com/clara)
- [MONAI Framework](https://monai.io)
- [MONAI Deploy](https://docs.monai.io/projects/monai-deploy-app-sdk/en/latest/)
- [Clara Parabricks Documentation](https://docs.nvidia.com/clara/parabricks/latest/index.html)
- [Clara on NGC](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/clara)
