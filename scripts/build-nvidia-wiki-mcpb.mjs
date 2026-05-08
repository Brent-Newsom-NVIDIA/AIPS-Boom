#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const repoRoot = path.resolve(path.dirname(__filename), "..")
const staging = path.join(repoRoot, ".tmp-mcpb-build", "nvidia-wiki")
const output = path.join(repoRoot, "NVIDIA-Wiki-MCP.mcpb")

const manifest = {
  manifest_version: "0.2",
  name: "nvidia-wiki",
  version: "0.2.0",
  description: "Local AIPS BOOM NVIDIA CUDA wiki source-of-truth tools for Claude Desktop.",
  author: { name: "NVIDIA Wiki Maintainers" },
  server: {
    type: "node",
    entry_point: "mcp/nvidia-wiki-mcp.mjs",
    mcp_config: {
      command: "node",
      args: ["${__dirname}/mcp/nvidia-wiki-mcp.mjs"],
      env: {},
    },
  },
  tools: [
    { name: "wiki_search", description: "Search the local NVIDIA markdown wiki." },
    { name: "wiki_read_page", description: "Read a specific NVIDIA wiki page." },
    { name: "wiki_answer_context", description: "Build an answer-ready context pack from the wiki for a question." },
    { name: "wiki_related_pages", description: "Explore related wiki pages." },
    { name: "wiki_status", description: "Show local wiki path, page count, commit, and source-of-truth rules." },
  ],
  keywords: ["nvidia", "cuda", "wiki", "mcp"],
  license: "MIT",
}

function copyRequiredContent() {
  fs.rmSync(path.join(repoRoot, ".tmp-mcpb-build"), { recursive: true, force: true })
  fs.mkdirSync(path.join(staging, "content"), { recursive: true })

  fs.cpSync(path.join(repoRoot, "mcp"), path.join(staging, "mcp"), { recursive: true })
  fs.cpSync(path.join(repoRoot, "content", "wiki"), path.join(staging, "content", "wiki"), { recursive: true })
  fs.copyFileSync(path.join(repoRoot, "content", "index.md"), path.join(staging, "content", "index.md"))
  fs.copyFileSync(path.join(repoRoot, "content", "log.md"), path.join(staging, "content", "log.md"))
  fs.writeFileSync(path.join(staging, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`)
}

copyRequiredContent()
execFileSync("npx", ["--yes", "@anthropic-ai/mcpb", "validate", path.join(staging, "manifest.json")], {
  cwd: repoRoot,
  stdio: "inherit",
})
execFileSync("npx", ["--yes", "@anthropic-ai/mcpb", "pack", staging, output], {
  cwd: repoRoot,
  stdio: "inherit",
})

console.log(`Wrote ${path.relative(repoRoot, output)}`)
