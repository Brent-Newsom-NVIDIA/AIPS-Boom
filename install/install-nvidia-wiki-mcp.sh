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
echo "Claude Desktop users on macOS can add this server manually if needed:"
echo "  command: node"
echo "  args: $server_path --repo $repo_root"
echo
echo "Try this in Claude or Codex:"
echo "Use the NVIDIA Wiki MCP. I have a retail customer that wants to reduce losses in their stores. What is the best way to do this?"
