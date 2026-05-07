# NVIDIA Wiki MCP

Turn the NVIDIA CUDA wiki into a local source-of-truth tool for Claude and Codex.

Need the shortest path? Use [CLICK-HERE-TO-INSTALL.md](CLICK-HERE-TO-INSTALL.md).

This package runs entirely on your machine. It does not host a server, does not call the internet, and only reads the local `content/` folder from this repo.

## What You Get

- Local MCP server named `nvidia-wiki`
- Search across all pages in `content/wiki/`
- Read exact wiki pages by title or `[[wikilink]]`
- Pull answer-ready context packs for customer questions
- Explore related pages through wiki links
- Source-of-truth behavior: if the wiki does not know, the assistant should say so

## 60-Second Install

### Windows

1. Clone or download this repo.
2. Open the repo folder.
3. Double-click:

```text
Install-NVIDIA-Wiki-MCP.cmd
```

The installer configures:

- Claude Desktop
- Claude Code, if `claude` is installed
- Codex, if `codex` is installed

Restart Claude Desktop after install. Restart any open Claude Code or Codex sessions.

### macOS / Linux

```bash
cd /path/to/nvidia-cuda-wiki
bash install/install-nvidia-wiki-mcp.sh
```

## Requirements

- Node.js 18 or newer
- For Codex integration: Codex CLI installed and logged in
- For Claude Code integration: Claude Code CLI installed and logged in
- For Claude Desktop integration on Windows: Claude Desktop installed

The MCP server itself has no npm install step.

## First Test

Ask Claude or Codex:

```text
Use the NVIDIA Wiki MCP. I have a retail customer that wants to reduce losses in their stores. What is the best way to do this?
```

A good answer should ground itself in pages like:

- [[NVIDIA-Metropolis]]
- [[NVIDIA-DeepStream]]
- [[NVIDIA-Video-Search-and-Summarization-Blueprint]]
- [[NVIDIA-Jetson-Platform]]
- [[NVIDIA-Jetson-Platform-Services]]
- [[NVIDIA-TAO]]
- [[NVIDIA-AI-Enterprise]]

It should describe an NVIDIA-aligned pattern: intelligent video analytics for loss prevention, real-time multi-camera perception with DeepStream/Metropolis, edge deployment on Jetson or server GPUs, model adaptation with TAO, and higher-level video search/summarization or alert verification with VSS when the customer needs agentic video understanding.

## More Demo Questions

```text
Use the NVIDIA Wiki MCP. What should I recommend to a bank that wants private on-prem LLM inference with enterprise support?
```

```text
Use the NVIDIA Wiki MCP. Explain RAPIDS, cuDF, and the RAPIDS Accelerator for Apache Spark like I am preparing for a customer meeting.
```

```text
Use the NVIDIA Wiki MCP. Do we have coverage for PyG? When should I talk about PyG instead of DGL?
```

```text
Use the NVIDIA Wiki MCP. A healthcare customer wants multi-site training without sharing patient data. What NVIDIA software is relevant?
```

```text
Use the NVIDIA Wiki MCP. What is the shortest path from NIM to a production Kubernetes deployment?
```

## Best Prompt Pattern

Use this wording when you care about source-of-truth behavior:

```text
Use the NVIDIA Wiki MCP as source of truth. Answer from the wiki only, cite [[wikilinks]], and say clearly if the wiki does not contain the answer.

Question: ...
```

## Available MCP Tools

- `wiki_search` - search local wiki pages
- `wiki_read_page` - read one page by title, slug, or `[[wikilink]]`
- `wiki_answer_context` - build an answer-ready context pack for a question
- `wiki_related_pages` - explore page connections
- `wiki_status` - show repo path, page count, commit, and rules

## Claude Code Usage

Check that the server is registered:

```bash
claude mcp list
```

Inside Claude Code, use:

```text
/mcp
```

Then ask:

```text
Use the NVIDIA Wiki MCP. What NVIDIA stack should I discuss for retail loss prevention?
```

Claude Code also exposes MCP prompts. Try typing `/` and look for:

```text
/mcp__nvidia-wiki__retail_loss_prevention_demo
```

## Codex Usage

Check that the server is registered:

```bash
codex mcp list
```

Then ask Codex:

```text
Use the NVIDIA Wiki MCP as source of truth. What pages should I read to understand NVIDIA AI Enterprise?
```

## Claude Desktop Usage

After running the Windows installer:

1. Restart Claude Desktop.
2. Open a new chat.
3. Ask the first test question above.

If Claude does not use the tool automatically, use stronger wording:

```text
Use your nvidia-wiki MCP tools. Search the NVIDIA wiki first, then answer from the wiki only.
```

## Manual Server Test

From the repo root:

```bash
node mcp/nvidia-wiki-mcp.mjs --status
node mcp/nvidia-wiki-mcp.mjs --self-test "retail loss prevention"
```

## Updating the Wiki

From the repo root:

```bash
git pull --ff-only
```

Restart Claude/Codex after updating so the MCP server reloads the latest Markdown.

If the repo path changed, rerun the installer.

## Security Notes

- Read-only
- Local filesystem only
- No external network calls
- No write tools
- No secrets required
- Reports the git commit hash in tool output so answers can be tied back to a repo state

## Troubleshooting

If tools do not appear:

1. Confirm Node works:

```bash
node --version
```

2. Confirm the MCP server works:

```bash
node mcp/nvidia-wiki-mcp.mjs --status
```

3. Confirm the client registration:

```bash
claude mcp list
codex mcp list
```

4. Restart the app or terminal session.

5. Rerun the installer from the repo root.
