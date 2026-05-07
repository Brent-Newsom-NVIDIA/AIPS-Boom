# Click Here to Install the NVIDIA Wiki Agent

This turns the NVIDIA CUDA wiki into a local source-of-truth tool for Claude and Codex.

## 1. Click Here to Install

On Windows, open this repo folder and double-click:

```text
Install-NVIDIA-Wiki-MCP.cmd
```

On Mac, open this repo folder and double-click:

```text
Install-NVIDIA-Wiki-MCP.command
```

If Mac asks for confirmation, choose **Open**. If double-click does not work, right-click the file and choose **Open**.

When the installer finishes, fully quit and reopen Claude Desktop, Claude Code, or Codex. The installer writes the Claude Desktop MCP config for you.

You do not need to install Node.js first. If Node is missing, the installer downloads a portable Node runtime into this repo folder and uses that automatically.

Important: local MCP works in Claude Desktop, Claude Code, and Codex. It will not attach to a normal Claude browser tab unless that browser session has its own connector support.

## 2. Click Here to Query It

Open Claude or Codex and paste this:

```text
Use the NVIDIA Wiki MCP. I have a retail customer that wants to reduce losses in their stores. What is the best way to do this?
```

You should get an answer grounded in NVIDIA wiki pages such as:

- [[NVIDIA-Metropolis]]
- [[NVIDIA-DeepStream]]
- [[NVIDIA-Video-Search-and-Summarization-Blueprint]]
- [[NVIDIA-Jetson-Platform]]
- [[NVIDIA-Jetson-Platform-Services]]
- [[NVIDIA-TAO]]
- [[NVIDIA-AI-Enterprise]]

## 3. What Good Looks Like

The answer should recommend an NVIDIA-aligned pattern for retail loss prevention:

- Use intelligent video analytics for shrinkage/loss-prevention workflows.
- Use [[NVIDIA-Metropolis]] and [[NVIDIA-DeepStream]] for multi-camera video analytics.
- Use [[NVIDIA-Jetson-Platform]] or server GPUs depending on edge/server placement.
- Use [[NVIDIA-TAO]] when models need customer-specific tuning.
- Use [[NVIDIA-Video-Search-and-Summarization-Blueprint]] when the customer needs video search, summarization, alert verification, or vision-agent workflows.
- Use [[NVIDIA-AI-Enterprise]] for enterprise-supported production deployments.

## 4. More Questions to Try

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

## 5. The Source-of-Truth Prompt

Use this when accuracy matters:

```text
Use the NVIDIA Wiki MCP as source of truth. Answer from the wiki only, cite [[wikilinks]], and say clearly if the wiki does not contain the answer.

Question: ...
```

## 6. If It Does Not Work

From this repo folder, run:

```powershell
node mcp\nvidia-wiki-mcp.mjs --status
```

If Node was downloaded by the one-click installer, use the `Node path:` printed by the installer. Common examples:

Windows:

```powershell
.mcp-runtime\node-v22.16.0-win-x64\node.exe mcp\nvidia-wiki-mcp.mjs --status
```

Mac:

```bash
.mcp-runtime/node-v22.16.0-darwin-arm64/bin/node mcp/nvidia-wiki-mcp.mjs --status
```

Then check the app registration:

```powershell
claude mcp list
codex mcp list
```

If needed, rerun:

```text
Install-NVIDIA-Wiki-MCP.cmd
```

Full details are in [NVIDIA-WIKI-MCP.md](NVIDIA-WIKI-MCP.md).

If Claude says it cannot find the MCP in a registry, open the Claude Desktop app instead of Claude in a browser, fully quit and reopen Claude Desktop, and ask again.
