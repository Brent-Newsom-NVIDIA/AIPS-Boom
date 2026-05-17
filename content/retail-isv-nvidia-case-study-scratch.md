# Retail ISV NVIDIA Case Study Research Scratch

**Purpose:** Temporary handoff scratch file for continuing the retail ISV named-customer case-study ingest after context compaction.

**Current date:** 2026-05-17

## User Requirement

- Research all retail ISVs currently represented in the wiki.
- Find named-customer case studies that involve the ISV helping customers with NVIDIA workloads covered in the wiki.
- Ingest only cases with an explicit NVIDIA tie such as NVIDIA GPUs, Jetson, Metropolis, DeepStream, NIM, NeMo, Triton, TensorRT, cuOpt, Omniverse, Isaac Sim, or NVIDIA-accelerated infrastructure.
- Do not ingest competitor-oriented or generic non-NVIDIA customer stories.
- Keep changes local. Do not push to GitHub unless the user explicitly asks.

## Working Repo And Mirrors

- Canonical repo: `C:\Users\bnewsom\OneDrive - NVIDIA Corporation\Desktop\nvidia-cuda-wiki`
- Branch: `fresh-newton-optix`
- Canonical content: `content/wiki/`, `content/index.md`, `content/log.md`
- Mirror targets after validation:
- `C:\Users\bnewsom\OneDrive - NVIDIA Corporation\Desktop\NVIDIA WIKI`
- `C:\Users\bnewsom\OneDrive - NVIDIA Corporation\AIPS BOOM`

## Validation Commands

```powershell
node scripts/audit-links.mjs
npx.cmd quartz build
```

After validation, mirror canonical content:

```powershell
$repo = 'C:\Users\bnewsom\OneDrive - NVIDIA Corporation\Desktop\nvidia-cuda-wiki'
$targets = @(
  $repo,
  'C:\Users\bnewsom\OneDrive - NVIDIA Corporation\Desktop\NVIDIA WIKI',
  'C:\Users\bnewsom\OneDrive - NVIDIA Corporation\AIPS BOOM'
)
foreach ($target in $targets) {
  if (Test-Path -LiteralPath $target) {
    $wikiDir = Join-Path $target 'wiki'
    if (-not (Test-Path -LiteralPath $wikiDir)) { New-Item -ItemType Directory -Path $wikiDir | Out-Null }
    Copy-Item -Path (Join-Path $repo 'content\wiki\*.md') -Destination $wikiDir -Force
    Copy-Item -Path (Join-Path $repo 'content\index.md') -Destination (Join-Path $target 'index.md') -Force
    Copy-Item -Path (Join-Path $repo 'content\log.md') -Destination (Join-Path $target 'log.md') -Force
  }
}
```

## Already Ingested In This Workstream

### Retail ISV foundation

- `content/wiki/NVIDIA-Retail-ISV-Ecosystem.md`
- `content/wiki/NVIDIA-Partner-Network.md`
- `content/wiki/AiFi.md`
- `content/wiki/Avathon.md`
- `content/wiki/BriefCam.md`
- `content/wiki/Bloomreach.md`
- `content/wiki/Caper-by-Instacart.md`
- `content/wiki/Centific.md`
- `content/wiki/CoolerX.md`
- `content/wiki/Everseen.md`
- `content/wiki/Graymatics.md`
- `content/wiki/LiveX-AI.md`
- `content/wiki/Lyric.md`
- `content/wiki/SandStar.md`
- `content/wiki/SKAI-Intelligence.md`

### Named customer proof point

- `content/wiki/Kroger-Everseen-Checkout-Loss-Prevention.md`
- `content/wiki/Kroger.md`
- `content/wiki/Lenovo.md`

Kroger case details:

- Source: `https://www.lenovo.com/content/dam/lenovo/iso/customer-references-coe/global/en/case-studies/kroger/case-study-kroger.pdf`
- Customer: Kroger
- ISV: Everseen
- Infrastructure partner: Lenovo
- NVIDIA tie: NVIDIA T4 Tensor Core GPUs, NVIDIA accelerated computing platform
- Workload: self-checkout video analytics, scanning-error detection, non-scan/product-switching detection, associate alerting
- Reported proof points: deployed to 1,700 Kroger stores; over 75 percent of self-checkout errors corrected without associate intervention

## Current Local State Before Compaction

- Link audit passed with `0 issue(s)` after Kroger ingest.
- Quartz build passed across `526` input files.
- `content/wiki` had `524` markdown pages after Kroger ingest.
- Canonical content was mirrored to repo root `wiki/`, Desktop `NVIDIA WIKI`, and `AIPS BOOM`.
- Git has uncommitted canonical changes and untracked root mirror files. This is expected.
- Do not remove or revert any untracked root mirror files unless the user asks.

## Batch 1 Checkpoint - 2026-05-17

Accepted and ingested:

- AiFi: `content/wiki/AiFi-Metropolis-Autonomous-Retail-Deployments.md`
- AiFi supporting orgs: `Choice-Market`, `Zabka`, `Penske-Entertainment`, `Verizon-Business`, `Loop-Neighborhood`, `Carrefour`, `Morrisons`
- Caper by Instacart: `content/wiki/Caper-Jetson-Smart-Cart-Retail-Deployments.md`
- Caper supporting orgs: `Instacart`, `Bristol-Farms`, `Fairway-Market`, `The-Fresh-Grocer`, `Geisslers-Supermarket`, `McKeevers-Market-and-Eatery`, `Price-Chopper`, `Schnucks`, `ShopRite`, `ALDI`

Batch 1 sources:

- `https://blogs.nvidia.com/blog/ai-fi-retail/`
- `https://www.instacart.com/company/updates/transforming-in-store-shopping-caper-carts-ai-magic-powered-by-nvidia-jetson/`

Rejected/deferred:

- Bloomreach: public sources confirm NVIDIA NeMo/NIM integration, but no accepted named-customer deployment explicitly tied to NVIDIA technology was found in this pass. Keep researching before creating a named-customer Bloomreach case page.

Validation note:

- For this local OneDrive-backed workspace, prefer `node scripts/audit-links.mjs` for incremental validation. Avoid running `npx.cmd quartz build` unless needed because Quartz cleans/recreates `public/` and triggers noisy OneDrive delete notices.

## Batch 2 Checkpoint - 2026-05-17

Accepted and ingested:

- LiveX AI named retail customer: `content/wiki/PUMA-LiveX-AI-Store-Concierge.md`
- LiveX AI supporting org: `PUMA`
- LiveX AI named NVIDIA deployment proof point: `content/wiki/LiveX-AI-GTC-Toy-Jensen-Holographic-Agent.md`
- SKAI Intelligence named customer/brand context: `content/wiki/SKAI-LVMH-Omniverse-Digital-Twin-Retail-Content.md`
- SKAI supporting orgs: `LVMH`, `Hublot`

Batch 2 sources:

- `https://www.retailtouchpoints.com/news/puma-to-debut-ai-powered-interactive-in-store-concierge/618099/`
- `https://blogs.nvidia.com/blog/gtc-2026-news/`
- `https://www.linkedin.com/posts/maomorgan_excited-to-return-speak-at-nvidia-gtc-2026-activity-7435555481466626048-9BwQ`
- `https://www.edaily.co.kr/News/Read?mediaCodeNo=257&newsId=02938886645384632`
- `https://www.prnewswire.com/news-releases/skai-intelligence-unveils-the-future-of-retail-imaging-at-vivatech-2025-302483041.html`

Rejected/deferred:

- Lyric: public sources confirm the Lyric + NVIDIA cuOpt workload, but no accepted named customer explicitly tied to Lyric's NVIDIA cuOpt integration was found in this pass. Keep researching before creating a named-customer Lyric page.

## Batch 3 Checkpoint - 2026-05-17

Accepted and ingested:

- Centific anonymized retail deployment proof: `content/wiki/Centific-NVIDIA-Edge-Retail-Loss-Prevention.md`
- CoolerX named retailer/NVIDIA proof: `content/wiki/CoolerX-Kroger-NVIDIA-In-Store-Retail-Media.md`
- SandStar named retailer proof: `content/wiki/Lawson-China-SandStar-NVIDIA-Store-Operations.md`
- SandStar supporting org: `content/wiki/Lawson-China.md`
- BriefCam NVIDIA Metropolis/GPU integration and deployment proof: `content/wiki/BriefCam-NVIDIA-Metropolis-Video-Analytics.md`
- Avathon NVIDIA VSS integration proof: `content/wiki/Avathon-NVIDIA-VSS-Video-Intelligence.md`

Batch 3 sources:

- `https://www.centific.com/case-studies/leading-home-improvement-retailer`
- `https://www.nvidia.com/en-us/on-demand/session/gtc24-s62627/`
- `https://www.einpresswire.com/article/680609070/cooler-screens-launches-coolerx-using-ai-to-power-digital-in-store-retail-experiences-and-unlock-consumer-intent`
- `https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-s81675/`
- `https://en.sandstar.com/ai-store.html`
- `https://www.briefcam.com/company/news/nvidia-and-loss-prevention-retail-council-introduce-ai-solution-to-address-organized-retail-crime/`
- `https://www.briefcam.com/company/press-releases/briefcam-nvidia-gpus/`
- `https://avathon.com/press-release/avathon-advances-industrial-video-ai-with-nvidia-vss/`

Evidence classification:

- Centific: strong anonymized deployment proof. The public customer story does not name the retailer, but it explicitly ties the solution to NVIDIA edge computing and provides store/result metrics.
- CoolerX: named retailer/NVIDIA proof. Public material names Kroger and says CoolerX was developed in collaboration with NVIDIA; NVIDIA GTC material ties Cooler Screens, NVIDIA, and Kroger stores together.
- SandStar: named retailer proof. SandStar names Lawson's AI-driven growth strategy and identifies itself as an NVIDIA Cloud Partner using NVIDIA AI infrastructure and models for retail AI.
- BriefCam: NVIDIA integration/deployment proof, not a named retail customer case. The retail ORC source ties BriefCam to a Metropolis-based workflow; the NVIDIA GPU press release names Hartford Police Department as non-retail deployment context.
- Avathon: NVIDIA VSS integration proof, not a named customer case. The public source explicitly ties Avathon to NVIDIA VSS for video search and summarization.

Rejected/deferred:

- Graymatics: no accepted public named customer or named deployment explicitly tied to NVIDIA technology was found in this pass. Keep researching before creating a Graymatics case page.

## Research Targets

Current ISVs to research for NVIDIA-specific named-customer case studies:

- AiFi
- Avathon
- BriefCam
- Bloomreach
- Caper by Instacart
- Centific
- CoolerX
- Everseen
- Graymatics
- LiveX AI
- Lyric
- SandStar
- SKAI Intelligence

## Search Work Already Started

Broad search batches were started for the ISVs, but results were not fully evaluated before compaction.

The first promising open item:

- `https://blogs.nvidia.com/blog/ai-fi-retail/`
- Likely useful for AiFi/NVIDIA retail case-study research; verify it has named customer(s), explicit NVIDIA technology/workload, and no competitor framing before ingestion.

Search query patterns used:

- `[ISV] NVIDIA customer case study retail named customer`
- `[ISV] NVIDIA Metropolis customer case study`
- `[ISV] NVIDIA Jetson customer case study`
- `[ISV] NVIDIA NIM customer case study`
- `[ISV] NVIDIA cuOpt customer case study`
- `[ISV] NVIDIA Omniverse customer case study`
- `site:[isv-domain] NVIDIA [ISV] customer case study`
- `site:nvidia.com [ISV] retail NVIDIA customer`

## Ingestion Pattern For Accepted Case Studies

For each accepted named-customer case:

- Create a project/case-study page in `content/wiki/`.
- Create customer organization page if missing.
- Create/update infrastructure/partner organization page if useful.
- Update the relevant ISV page with a `Named customer example` section.
- Update `NVIDIA-Retail-ISV-Ecosystem.md` recommendation rows and workload map with the case-study proof point.
- Update workload/platform pages if the case materially strengthens a stack answer, for example `NVIDIA-Metropolis.md`, `NVIDIA-DeepStream.md`, `NVIDIA-NIM.md`, `cuOpt.md`, or `NVIDIA-Omniverse.md`.
- Update `content/index.md` and `content/log.md`.
- Run link audit and Quartz build.
- Mirror after validation.

## Acceptance Criteria

Accept only if all are true:

- Customer is named or the source is strong enough to justify a named case-study page.
- ISV is one of the retail ISVs represented in the wiki.
- NVIDIA technology/workload is explicit in the source.
- The case supports workload recommendation quality.
- The source is public and citable.

Reject or skip if:

- It is generic marketing without a named customer.
- It does not explicitly mention NVIDIA technology/workload.
- It is primarily competitor cloud/GPU/software content.
- It is not relevant to workloads covered in the wiki.

## Likely Wiki Page Naming

Use descriptive case-study page names:

- `[Customer]-[ISV]-[Workload].md`
- Examples:
- `Kroger-Everseen-Checkout-Loss-Prevention.md`
- `Wakefern-Caper-Jetson-Smart-Carts.md` if source confirms NVIDIA Jetson and named customer
- `Bloomreach-[Customer]-NIM-Ecommerce-Search.md` if source confirms named customer and NVIDIA NIM/NeMo

## Final Response Shape After Completion

Keep it concise:

- Say how many case studies were ingested.
- Name the strongest customer proof points by workload.
- Confirm validation and mirror status.
- Confirm no GitHub push.
