# NIM for Object Detection

**Type:** Microservice
**Tags:** NVIDIA, NIM, NeMo Retriever, object detection, document extraction, multimodal RAG, page elements, tables, charts, infographics
**Related:** [[NeMo-Retriever]], [[NVIDIA-NIM]], [[NIM-for-Image-OCR]], [[Nemotron-Parse]], [[NIM-for-Vision-Language-Models]], [[NeMo-Retriever-Embedding-NIM]], [[NeMo-Retriever-Reranking-NIM]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-NIM-Operator]], [[Triton-Inference-Server]], [[TensorRT]]
**Sources:** https://docs.nvidia.com/nim/ingestion/object-detection/latest/overview.html; https://docs.nvidia.com/nim/ingestion/object-detection/latest/getting-started.html; https://docs.nvidia.com/nim/ingestion/object-detection/latest/deploy-kubernetes.html; https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-parse/api.html
**Last Updated:** 2026-04-29

## Summary
NIM for Object Detection is NVIDIA's NeMo Retriever NIM family for detecting document elements used in multimodal extraction. Current docs describe three object-detection microservices: page elements, table structure, and graphic elements. Together they identify the regions that downstream OCR and retrieval services need for tables, charts, infographics, and rich enterprise documents.

## Detail
The current object-detection overview places this NIM family inside NeMo Retriever extraction pipelines. These pipelines handle multimodal documents by detecting, contextualizing, and extracting content from text, tables, charts, and infographics before retrieval and answer generation.

The page-elements NIM identifies charts, tables, and infographics in an enterprise document and returns bounding boxes. The table-structure NIM preserves rows, columns, and cell structure to help convert table images into Markdown; [[NIM-for-Image-OCR]] extracts content within those cells. The graphic-elements NIM identifies chart components such as titles, legends, axes, and other regions for OCR and downstream retrieval.

This page is distinct from general computer vision object detection. Its NVIDIA context is enterprise document understanding for multimodal RAG. Use it with [[NIM-for-Image-OCR]], [[NeMo-Retriever-Embedding-NIM]], and [[NeMo-Retriever-Reranking-NIM]] when questions involve extracting searchable knowledge from PDFs, reports, tables, charts, or infographics.

For a single-model document parser that outputs text, table/document structure, semantic classes, and bounding boxes from an input image, use [[Nemotron-Parse]]. Nemotron Parse sits in [[NIM-for-Vision-Language-Models]], while this page covers the NeMo Retriever page/table/graphic detector microservices.

## Connections
- [[NeMo-Retriever]] - Object Detection NIM is a NeMo Retriever extraction microservice family.
- [[NVIDIA-NIM]] - delivered as NVIDIA NIM microservices.
- [[NIM-for-Image-OCR]] - OCR extracts text from the regions detected by object/layout services.
- [[Nemotron-Parse]] - VLM-style document parser that can output bounding boxes and semantic document classes.
- [[NIM-for-Vision-Language-Models]] - current NIM surface for Nemotron-Parse-v1.2.
- [[NeMo-Retriever-Embedding-NIM]] - extracted content can be embedded for semantic search.
- [[NeMo-Retriever-Reranking-NIM]] - retrieved content can be reranked before generation.
- [[NVIDIA-AI-Data-Platform]] - document extraction is a data-platform prerequisite for enterprise RAG.
- [[NVIDIA-AI-Q-Blueprint]] - research agents can use extracted document structure and content.
- [[NVIDIA-NIM-Operator]] - Kubernetes deployment path for NIM microservices.
- [[Triton-Inference-Server]] and [[TensorRT]] - inference acceleration stack named in the current docs.

## Source Excerpts
- "page elements"
- "table structure"
- "graphic elements"
