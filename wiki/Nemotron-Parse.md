# Nemotron Parse

**Type:** Model / NIM microservice
**Tags:** NVIDIA, Nemotron, document AI, document parsing, OCR, tables, bounding boxes, layout, VLM, NIM, NeMo Retriever
**Related:** [[Nemotron]], [[NIM-for-Vision-Language-Models]], [[NVIDIA-NIM]], [[NIM-for-Image-OCR]], [[NIM-for-Object-Detection]], [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], [[NeMo-Retriever-Reranking-NIM]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-RAG-Blueprint]], [[NVIDIA-AI-Q-Blueprint]], [[Nemotron-3-Nano-Omni]], [[TensorRT-LLM]], [[vLLM]], [[Triton-Inference-Server]]
**Sources:** https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-parse/api.html; https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html; https://docs.nvidia.com/nim/vision-language-models/latest/release-notes.html; https://huggingface.co/nvidia/NVIDIA-Nemotron-Parse-v1.2
**Last Updated:** 2026-04-29

## Summary
Nemotron Parse is NVIDIA's document-parsing VLM for extracting document semantics, text, tables, bounding boxes, and semantic classes from images. The current release is Nemotron-Parse-v1.2, served through [[NIM-for-Vision-Language-Models]] 1.7.0 as `nvidia/nemotron-parse-v1.2`.

## Detail

### Purpose
Nemotron Parse turns document page images into machine-usable structure. It is useful when a pipeline needs formatted text in natural reading order plus spatial grounding, semantic classes, and table/document layout information for downstream retrieval, curation, extraction, or agentic document intelligence.

### Current NIM surface
- Current VLM NIM release notes say Nemotron Parse is now known as Nemotron-Parse-v1.2 and that the API changed from the earlier 1.5.0 Nemotron Parse release.
- The NIM API page launches repository `nemotron-parse-v1.2` with release tag `1.7.0-variant`.
- The current API uses Chat Completions with one image URL or base64 image payload plus a required control-token prompt.
- Recommended default prompts extract bounding boxes, semantic classes, and Markdown text, with either text-in-picture extraction enabled or disabled.
- A detection-only prompt can omit text extraction and return bounding boxes/classes only.
- Natural-language instructions instead of the control tokens degrade model quality, according to the current API page.
- The API page includes a bounding-box visualization workflow using postprocessing helpers from the NVIDIA Nemotron Parse v1.2 model repository.

### Model behavior
The NVIDIA model card describes Nemotron Parse v1.2 as a document semantics model that produces structured annotations in document reading order. Outputs can include formatted text, bounding boxes, and semantic classes such as titles, sections, captions, footnotes, lists, tables, bibliography, and images.

Version 1.2 adds a fourth prompt-token category controlling whether text inside pictures is extracted. It also updates reading-order behavior across semantic classes and changes the maximum input image size from the earlier v1.1 dimensions.

### Architecture and deployment
- Model architecture: transformer-based vision encoder-decoder.
- Vision encoder: ViT-H using NVIDIA C-RADIO.
- Decoder: mBART with adapter layers between visual features and decoder input.
- Model size: less than 1B parameters.
- Input: RGB image plus string prompt; current model card lists 1664 x 2048 maximum resolution and 1024 x 1280 minimum resolution.
- Output: string encoding text content, bounding boxes, and class attributes.
- Runtime integrations listed by the model card include TensorRT-LLM and vLLM.
- Current NIM support matrix lists release 1.7.0 as latest, plus 1.5.0 as an older supported release.
- Generic NIM configuration requires compute capability >= 8.0, BF16, 4 GB disk space, and either an NVIDIA GPU with more than 20 GB memory or listed H100/A100/L40S configurations on 1 or 2 GPUs.

### Limits and adjacent pages
Current release notes list important limits: one image per request, no text input, no system messages, no video input, no guided decoding or tool calling, no multilingual support, and x86_64-based GPU support only.

Use this page for the Nemotron Parse VLM/model. Use [[NIM-for-Image-OCR]] for the NeMo Retriever OCR microservice and [[NIM-for-Object-Detection]] for page/table/graphic element detectors. Those Retriever NIMs are extraction building blocks; Nemotron Parse is a VLM-style document parser that combines text, layout, classes, and spatial grounding in one model output.

## Connections
- [[Nemotron]] - parent NVIDIA model family for document, multimodal, reasoning, retrieval, speech, and safety models.
- [[NIM-for-Vision-Language-Models]] - current NIM documentation surface for Nemotron-Parse-v1.2.
- [[NVIDIA-NIM]] - deployment path for the model-specific container/API.
- [[NIM-for-Image-OCR]] - adjacent OCR microservice for extracting text from image regions.
- [[NIM-for-Object-Detection]] - adjacent page/table/graphic element detector family for document layout workflows.
- [[NeMo-Retriever]], [[NeMo-Retriever-Embedding-NIM]], and [[NeMo-Retriever-Reranking-NIM]] - retrieval pipeline context for parsed document text and structure.
- [[NVIDIA-AI-Data-Platform]], [[NVIDIA-RAG-Blueprint]], and [[NVIDIA-AI-Q-Blueprint]] - enterprise retrieval and agent workflows that can benefit from document parsing.
- [[Nemotron-3-Nano-Omni]] - adjacent Nemotron multimodal model for broader text/image/video/audio reasoning.
- [[TensorRT-LLM]], [[vLLM]], and [[Triton-Inference-Server]] - inference and serving stack context.

## Source Excerpts
- "designed to understand document semantics"
- "Only one image per request is supported"
- "The full v1.2 prompt now consists of four prompt tokens"

## Resources
- [Query the Nemotron-Parse-v1.2 API](https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-parse/api.html)
- [NIM for VLMs Support Matrix](https://docs.nvidia.com/nim/vision-language-models/latest/support-matrix.html)
- [NIM for VLMs Release Notes](https://docs.nvidia.com/nim/vision-language-models/latest/release-notes.html)
- [NVIDIA Nemotron Parse v1.2 model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-Parse-v1.2)
