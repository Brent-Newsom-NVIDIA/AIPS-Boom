#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
server_path="$repo_root/mcp/nvidia-wiki-mcp.mjs"
server_name="nvidia-wiki"

echo "NVIDIA Wiki MCP Installer"
echo "Repo: $repo_root"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js 18+ is required. Install Node.js, then rerun this script." >&2
  exit 1
fi

echo "Node: $(node --version)"

if [ -d "$repo_root/.git" ] && command -v git >/dev/null 2>&1; then
  echo
  echo "Updating local repo with git pull --ff-only..."
  git -C "$repo_root" pull --ff-only || echo "Warning: git pull --ff-only failed; continuing with local checkout."
fi

echo
echo "Testing MCP server..."
node "$server_path" --repo "$repo_root" --status

if [ "$(uname -s)" = "Darwin" ]; then
  echo
  echo "Configuring Claude Desktop for macOS..."
  export NVIDIA_WIKI_MCP_REPO_ROOT="$repo_root"
  export NVIDIA_WIKI_MCP_SERVER_PATH="$server_path"
  export NVIDIA_WIKI_MCP_SERVER_NAME="$server_name"
  node <<'NODE'
const fs = require("node:fs")
const os = require("node:os")
const path = require("node:path")

const repoRoot = process.env.NVIDIA_WIKI_MCP_REPO_ROOT
const serverPath = process.env.NVIDIA_WIKI_MCP_SERVER_PATH
const serverName = process.env.NVIDIA_WIKI_MCP_SERVER_NAME
const configDir = path.join(os.homedir(), "Library", "Application Support", "Claude")
const configPath = path.join(configDir, "claude_desktop_config.json")

fs.mkdirSync(configDir, { recursive: true })

let config = {}
if (fs.existsSync(configPath)) {
  const raw = fs.readFileSync(configPath, "utf8").trim()
  if (raw) config = JSON.parse(raw)
}

config.mcpServers ??= {}
config.mcpServers[serverName] = {
  command: "node",
  args: [serverPath, "--repo", repoRoot],
}

fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`)
console.log(`Claude Desktop config updated: ${configPath}`)
NODE
  echo "Restart Claude Desktop before using the wiki tools."
fi

if command -v claude >/dev/null 2>&1; then
  echo
  echo "Configuring Claude Code..."
  claude mcp remove --scope user "$server_name" >/dev/null 2>&1 || true
  claude mcp add --scope user "$server_name" -- node "$server_path" --repo "$repo_root"
  echo "Claude Code MCP configured. Check with: claude mcp list"
else
  echo "Claude Code CLI not found; skipping Claude Code setup."
fi

if command -v codex >/dev/null 2>&1; then
  echo
  echo "Configuring Codex..."
  codex mcp remove "$server_name" >/dev/null 2>&1 || true
  codex mcp add "$server_name" -- node "$server_path" --repo "$repo_root"
  echo "Codex MCP configured. Check with: codex mcp list"
else
  echo "Codex CLI not found; skipping Codex setup."
fi

echo
echo "Try this in Claude or Codex:"
echo "Use the NVIDIA Wiki MCP. I have a retail customer that wants to reduce losses in their stores. What is the best way to do this?"
