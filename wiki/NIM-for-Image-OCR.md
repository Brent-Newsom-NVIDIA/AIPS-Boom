# NIM for Image OCR

**Type:** Microservice
**Tags:** NVIDIA, NIM, NeMo Retriever, OCR, image OCR, document extraction, multimodal RAG, tables, charts, infographics
**Related:** [[NeMo-Retriever]], [[NVIDIA-NIM]], [[NIM-for-Object-Detection]], [[Nemotron-Parse]], [[NIM-for-Vision-Language-Models]], [[NeMo-Retriever-Embedding-NIM]], [[NeMo-Retriever-Reranking-NIM]], [[NVIDIA-AI-Data-Platform]], [[NVIDIA-AI-Q-Blueprint]], [[NVIDIA-NIM-Operator]], [[Triton-Inference-Server]], [[TensorRT]]
**Sources:** https://docs.nvidia.com/nim/ingestion/image-ocr/latest/overview.html; https://docs.nvidia.com/nim/ingestion/image-ocr/latest/getting-started.html; https://docs.nvidia.com/nim/ingestion/image-ocr/latest/deploy-kubernetes.html; https://docs.nvidia.com/nim/vision-language-models/latest/examples/nemotron-parse/api.html
**Last Updated:** 2026-04-29

## Summary
NIM for Image OCR, also called NeMo Retriever OCR, is NVIDIA's OCR microservice for extracting text from images as part of multimodal retrieval pipelines. It is designed to work with [[NIM-for-Object-Detection]] so enterprise documents with tables, charts, infographics, and image-based content can be parsed and connected to RAG applications.

## Detail
The current docs describe NeMo Retriever NIM microservices as building blocks for extraction and retrieval pipelines that parse, process, and connect multimodal data to generative applications. Image OCR NIM extracts text from images, while object detection NIMs identify page elements, table structure, and graphical elements.

OCR is the text extraction step in document-heavy RAG. It turns image regions into text so downstream systems can embed, index, retrieve, rerank, and answer over content that would otherwise be invisible to text-only retrieval. The docs explicitly position OCR alongside Retriever Embedding and Reranking NIMs for pipelines that retrieve across text and other modalities.

This page should be used for questions about NVIDIA OCR in Retriever/NIM workflows, document extraction, or turning visual document content into retrievable text. Use [[NIM-for-Object-Detection]] for layout and visual-region detection and [[NeMo-Retriever-Embedding-NIM]] for embedding/indexing the extracted text.

For the newer Nemotron document-parser model, use [[Nemotron-Parse]]. That page covers Nemotron-Parse-v1.2 in [[NIM-for-Vision-Language-Models]], which combines Markdown text, bounding boxes, semantic classes, and table/document structure in a single VLM output rather than acting as the Retriever OCR microservice.

## Connections
- [[NeMo-Retriever]] - Image OCR is a NeMo Retriever extraction microservice.
- [[NVIDIA-NIM]] - delivered as an NVIDIA NIM microservice.
- [[NIM-for-Object-Detection]] - object detection finds tables, charts, and infographics for OCR extraction.
- [[Nemotron-Parse]] - VLM-style document parser for text, tables, semantic classes, and bounding boxes.
- [[NIM-for-Vision-Language-Models]] - current NIM surface for Nemotron-Parse-v1.2.
- [[NeMo-Retriever-Embedding-NIM]] - extracted OCR text can be embedded for semantic search.
- [[NeMo-Retriever-Reranking-NIM]] - retrieved OCR-derived passages can be reranked for answer quality.
- [[NVIDIA-AI-Data-Platform]] - multimodal enterprise data extraction feeds AI Data Platform retrieval workflows.
- [[NVIDIA-AI-Q-Blueprint]] - research agents can use OCR-derived enterprise knowledge.
- [[NVIDIA-NIM-Operator]] - Kubernetes deployment path for NIM microservices.
- [[Triton-Inference-Server]] and [[TensorRT]] - inference acceleration stack named in the current docs.

## Source Excerpts
- "optical character recognition"
- "extracts text from images"
- "tables, charts, and infographics"
