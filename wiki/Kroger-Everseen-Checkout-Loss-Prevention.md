# Kroger Everseen Checkout Loss Prevention

**Type:** Project
**Tags:** NVIDIA, Kroger, Everseen, Lenovo, retail, checkout loss prevention, self-checkout, edge AI, T4
**Related:** [[Kroger]], [[Everseen]], [[Lenovo]], [[NVIDIA-Retail-ISV-Ecosystem]], [[NVIDIA-Metropolis]], [[NVIDIA-DeepStream]], [[TensorRT]], [[Triton-Inference-Server]], [[NVIDIA-AI-Enterprise]]
**Sources:** https://www.lenovo.com/content/dam/lenovo/iso/customer-references-coe/global/en/case-studies/kroger/case-study-kroger.pdf
**Last Updated:** 2026-05-17

## Summary
Kroger Everseen Checkout Loss Prevention is a named-customer retail AI case study for reducing self-checkout friction and stock losses with Everseen Visual AI, Lenovo Edge AI servers, and NVIDIA GPU acceleration. The Lenovo case study says Kroger deployed Everseen's Visual AI platform on Lenovo edge infrastructure with NVIDIA T4 Tensor Core GPUs to analyze checkout-kiosk video in real time and intervene when scanning errors occur.

## Detail

### Customer and challenge
[[Kroger]] expanded self-service checkout across its U.S. grocery network, but checkout scanning errors created customer friction and retail risk. The case study describes both accidental and intentional missed scans as a concern for customer experience and the retailer's bottom line.

### Solution pattern
Everseen Visual AI uses high-resolution cameras, computer vision, and AI developed on NVIDIA's accelerated computing platform. The system combines unstructured checkout video with structured point-of-sale data feeds, runs inference and analysis in real time, and detects checkout events such as:
- Non-scan events where a customer or cashier fails to scan an item.
- Product-switching events where a barcode or price sticker is used incorrectly.
- Scanning errors that can be surfaced to the shopper as a self-correction prompt.
- Escalations to store associates through mobile alerts when the shopper cannot self-correct.

### Infrastructure
[[Lenovo]] supplied Edge AI servers powered by NVIDIA GPUs. The published hardware list includes Lenovo ThinkSystem SR630 with NVIDIA T4 Tensor Core GPUs and Lenovo ThinkSystem SR550, with CentOS and Everseen Visual AI software. The case study says each Lenovo edge server can process data from up to 20 high-resolution cameras in real time.

### Deployment scale and outcomes
The case study says Kroger moved from pilot to broader deployment quickly, with the platform already rolled out to 1,700 grocery stores at the time of publication and plans to expand further. Reported outcomes include:
- More than 75 percent of self-checkout errors corrected by customers without associate intervention.
- Fewer self-checkout errors.
- Reduced retail shrink.
- Better inventory visibility and on-shelf availability.
- A smoother customer experience with reduced checkout friction.

### NVIDIA stack context
The source names NVIDIA's accelerated computing platform and T4 Tensor Core GPUs directly. In the wiki graph, this case belongs with [[NVIDIA-Metropolis]] and [[NVIDIA-DeepStream]] because those pages represent NVIDIA's retail intelligent video analytics stack for multi-camera video, shrinkage detection, queue monitoring, and real-time edge inference. It also connects to [[TensorRT]] and [[Triton-Inference-Server]] through the Everseen page's NVIDIA retail partner stack.

## Connections
- [[Kroger]] - named retail customer in the case study.
- [[Everseen]] - ISV providing the Visual AI checkout-loss-prevention application.
- [[Lenovo]] - edge AI infrastructure provider in the case study.
- [[NVIDIA-Retail-ISV-Ecosystem]] - recommendation hub that positions Everseen for checkout and store loss prevention.
- [[NVIDIA-Metropolis]] - NVIDIA retail video analytics platform context.
- [[NVIDIA-DeepStream]] - NVIDIA multi-camera streaming analytics context.
- [[TensorRT]] and [[Triton-Inference-Server]] - Everseen-related inference optimization and serving context from the NVIDIA retail partner page.
- [[NVIDIA-AI-Enterprise]] - enterprise deployment context for production NVIDIA AI workloads.

## Source Excerpts
- Lenovo's case study says Kroger uses Everseen Visual AI with Lenovo Edge AI servers and NVIDIA's accelerated computing platform to reduce customer friction and stock losses at self-checkout.
- The case study reports that the solution analyzes checkout-kiosk video in real time, detects non-scans and product-switching patterns, and prompts either shopper self-correction or associate intervention.
- Lenovo reports the platform was deployed at 1,700 Kroger grocery stores at the time of publication and that over 75 percent of self-checkout errors were corrected without employee intervention.

## Resources
- [Kroger: Shaping the self-checkout of tomorrow](https://www.lenovo.com/content/dam/lenovo/iso/customer-references-coe/global/en/case-studies/kroger/case-study-kroger.pdf)
