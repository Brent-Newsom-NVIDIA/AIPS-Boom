# NVIDIA Wiki MCP

Turn the NVIDIA CUDA wiki into a local source-of-truth tool for Claude and Codex.

Need the shortest path? Use [CLICK-HERE-TO-INSTALL.md](CLICK-HERE-TO-INSTALL.md).

If local MCP is blocked or Claude Desktop does not load the connector, use [CLAUDE-PROJECT-SETUP.md](CLAUDE-PROJECT-SETUP.md) instead.

The MCP server runs entirely on your machine. It does not host a network service, does not call the internet, and only reads the local `content/` folder from this repo. The installer may download a portable Node runtime if Node is not already available.

## What You Get

- Local MCP server named `nvidia-wiki`
- Search across all pages in `content/wiki/`
- Read exact wiki pages by title or `[[wikilink]]`
- Pull answer-ready context packs for customer questions
- Explore related pages through wiki links
- Source-of-truth behavior: if the wiki does not know, the assistant should say so

## 60-Second Install

### Claude Desktop Extension

For Claude Desktop, the simplest path is:

```text
NVIDIA-Wiki-MCP.mcpb
```

Double-click the file, let Claude Desktop open it, then click **Install**.

This path uses Claude Desktop's local extension installer. It does not require a separate Node.js install because Claude Desktop provides the Node runtime for desktop extensions. If your enterprise policy blocks unsigned or custom desktop extensions, use the Windows or macOS fallback installer below.

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

For Mac, double-click:

```text
Install-NVIDIA-Wiki-MCP.command
```

If Mac asks for confirmation, choose **Open**. If double-click does not work, right-click the file and choose **Open**.

The Mac installer configures Claude Desktop automatically by updating:

```text
~/Library/Application Support/Claude/claude_desktop_config.json
```

You can also run the installer from Terminal:

```bash
cd /path/to/nvidia-cuda-wiki
bash install/install-nvidia-wiki-mcp.sh
```

## Requirements

- No manual Node.js install required. If Node is missing, the installer downloads a portable Node runtime into `.mcp-runtime/`.
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

After running the installer:

1. Fully quit Claude Desktop.
2. Reopen Claude Desktop.
3. Open a new chat.
4. Ask the first test question above.

If Claude does not use the tool automatically, use stronger wording:

```text
Use your nvidia-wiki MCP tools. Search the NVIDIA wiki first, then answer from the wiki only.
```

If Claude says it cannot find the MCP in a registry, you are probably using Claude in a browser or Claude Desktop has not loaded the local MCP config yet. Use the Claude Desktop app, fully quit and reopen it, then try again.

## Manual Server Test

From the repo root:

```bash
node mcp/nvidia-wiki-mcp.mjs --status
node mcp/nvidia-wiki-mcp.mjs --self-test "retail loss prevention"
```

If the installer downloaded portable Node, use the `Node path:` printed by the installer in place of `node`.

## Updating the Wiki

From the repo root:

```bash
git pull --ff-only
```

Restart Claude/Codex after updating so the MCP server reloads the latest Markdown.

If the repo path changed, rerun the installer.

If you ship `NVIDIA-Wiki-MCP.mcpb`, rebuild it after wiki updates:

```bash
node scripts/build-nvidia-wiki-mcpb.mjs
```

## Security Notes

- Read-only
- Local filesystem only
- No external network calls from the MCP server
- The installer may download portable Node.js from `nodejs.org` if Node 18+ is not already installed
- No write tools
- No secrets required
- Reports the git commit hash in tool output so answers can be tied back to a repo state

## Troubleshooting

If tools do not appear:

1. Confirm Node works. Use the `Node path:` printed by the installer if portable Node was downloaded:

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

On Windows, double-click `Check-NVIDIA-Wiki-MCP.cmd` to verify that Claude Desktop's config points to the local MCP server and that the server runs from that config.

The Windows installer writes the MCP registration to the standard Claude Desktop config under `%APPDATA%\Claude\claude_desktop_config.json`. If it finds a Store/MSIX-style Claude package under `%LOCALAPPDATA%\Packages\Claude_*`, it also writes the matching sandboxed Claude config there.

If Claude Desktop still does not show or use the tools after the checker passes, confirm you are using the Claude Desktop app, not `claude.ai` or Cowork. Local MCP servers configured through `claude_desktop_config.json` are a Claude Desktop local mechanism, and some enterprise policies can disable local developer MCP servers.
