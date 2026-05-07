# NVIDIA CUDA Knowledge Base

A Quartz 4 static site backed by a curated, interlinked markdown knowledge base covering NVIDIA's public CUDA platform, libraries, hardware, and ecosystem tooling.

## Quick links

- Start here: [START-HERE.md](./START-HERE.md)
- GitHub repo: [Brent-Newsom-NVIDIA/nvidia-cuda-wiki](https://github.com/Brent-Newsom-NVIDIA/nvidia-cuda-wiki)
- Live Quartz site: [NVIDIA CUDA Knowledge Base](https://brent-newsom-nvidia.github.io/nvidia-cuda-wiki/)

## Content source

- **Canonical vault:** `content/`
- **Recommended editing model:** open `content/` directly as the Obsidian vault
- **Scope:** public NVIDIA/CUDA technical documentation - safe to publish broadly. No internal or confidential material.

Canonical structure under `content/`:

- `wiki/` - curated wiki pages (one per concept, library, hardware platform, etc.)
- `index.md` - Master Index, grouped by category
- `log.md` - ingestion history
- `AGENTS.md` - shared project-level agent instructions
- `CLAUDE.md` - Claude-oriented agent instructions
- `codex.md` - Codex-oriented agent instructions

Source material does not need to live in the repo. New pages can be ingested from URLs, docs pages, PDFs, transcripts, and other user-provided sources.

The older standalone `NVIDIA WIKI` desktop folder should be treated as a legacy/local copy unless it is explicitly resynced from `content/`. The repository is the source of truth.

## Updating content

1. Edit markdown directly in `content/`, or open `content/` as the Obsidian vault and work there.
2. Commit changes in this repo normally, or run `publish.bat` from the repo root to stage, commit, and push the latest content changes.

## Agent access with local MCP

Use the local MCP package when you want Claude or Codex to query this wiki as source of truth without uploading files or hosting an internal service.

- Quick install/query card: [CLICK-HERE-TO-INSTALL.md](CLICK-HERE-TO-INSTALL.md)
- Start here: [NVIDIA-WIKI-MCP.md](NVIDIA-WIKI-MCP.md)
- Windows one-click installer: `Install-NVIDIA-Wiki-MCP.cmd`
- Mac one-click installer: `Install-NVIDIA-Wiki-MCP.command`
- Local server: `mcp/nvidia-wiki-mcp.mjs`

The MCP server is read-only, local-only, and exposes tools for wiki search, page reads, related-page traversal, and answer-ready context packs.

## Local preview

```bash
cd C:\Users\bnewsom\OneDrive - NVIDIA Corporation\Desktop\nvidia-cuda-wiki
npx quartz build --serve
```

The site is served at `http://localhost:8080` by default.

## Scripts

- **`scripts/audit-links.mjs`** - scans `content/` for broken `[[wikilinks]]` and writes a categorized report (space-vs-hyphen, case mismatches, genuinely missing targets) to `audit-links-report.txt` at the repo root. The report is gitignored; regenerate with:

  ```bash
  node scripts/audit-links.mjs
  ```

  Exits non-zero when issues are found, so it can gate a publish step.

## Hosting

Quartz is deployed with GitHub Pages.

- Live site: [https://brent-newsom-nvidia.github.io/nvidia-cuda-wiki/](https://brent-newsom-nvidia.github.io/nvidia-cuda-wiki/)
- Deployment workflow: [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)

## Stack

- [Quartz 4](https://quartz.jzhao.xyz/) - Obsidian-aware static site generator
- Link resolution strategy: **shortest path** (matches Obsidian's default)
- Content strategy: **Empty Quartz** (new content folder, canonical vault content lives directly in-repo)
