#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
server_path="$repo_root/mcp/nvidia-wiki-mcp.mjs"
server_name="nvidia-wiki"
node_version="22.16.0"
runtime_root="$repo_root/.mcp-runtime"

echo "NVIDIA Wiki MCP Installer"
echo "Repo: $repo_root"

node_major() {
  "$1" -p "Number(process.versions.node.split('.')[0])" 2>/dev/null || echo 0
}

node_is_usable() {
  local candidate="$1"
  [ -n "$candidate" ] && [ -x "$candidate" ] && [ "$(node_major "$candidate")" -ge 18 ]
}

portable_node_path() {
  local platform="$1"
  echo "$runtime_root/node-v$node_version-$platform/bin/node"
}

install_portable_node() {
  local os arch platform archive url downloads node_cmd download_ok attempt
  os="$(uname -s)"
  arch="$(uname -m)"

  case "$os:$arch" in
    Darwin:arm64) platform="darwin-arm64" ;;
    Darwin:x86_64) platform="darwin-x64" ;;
    Linux:aarch64|Linux:arm64) platform="linux-arm64" ;;
    Linux:x86_64) platform="linux-x64" ;;
    *)
      echo "Unsupported platform for portable Node download: $os $arch" >&2
      echo "Install Node.js 18+ from https://nodejs.org/en/download and rerun this installer." >&2
      exit 1
      ;;
  esac

  node_cmd="$(portable_node_path "$platform")"
  if node_is_usable "$node_cmd"; then
    echo "$node_cmd"
    return
  fi

  if ! command -v curl >/dev/null 2>&1 || ! command -v tar >/dev/null 2>&1; then
    echo "Need curl and tar to download portable Node." >&2
    echo "Install Node.js 18+ from https://nodejs.org/en/download and rerun this installer." >&2
    exit 1
  fi

  downloads="$runtime_root/downloads"
  mkdir -p "$downloads"
  archive="$downloads/node-v$node_version-$platform.tar.gz"
  url="https://nodejs.org/dist/v$node_version/node-v$node_version-$platform.tar.gz"

  echo "Node.js 18+ was not found. Downloading portable Node $node_version..." >&2
  download_ok=0
  for attempt in 1 2 3; do
    if curl -fL "$url" -o "$archive"; then
      download_ok=1
      break
    fi
    echo "Download attempt $attempt failed." >&2
    [ "$attempt" = "3" ] || sleep 2
  done

  if [ "$download_ok" != "1" ]; then
    echo "Could not download portable Node from $url" >&2
    echo "Install Node.js 18+ from https://nodejs.org/en/download or NVIDIA Self Service, then rerun this installer." >&2
    exit 1
  fi
  tar -xzf "$archive" -C "$runtime_root"

  if ! node_is_usable "$node_cmd"; then
    echo "Portable Node install failed: $node_cmd" >&2
    exit 1
  fi

  echo "$node_cmd"
}

if command -v node >/dev/null 2>&1 && [ "$(node_major "$(command -v node)")" -ge 18 ]; then
  node_cmd="$(command -v node)"
else
  node_cmd="$(install_portable_node)"
fi

echo "Node: $("$node_cmd" --version)"
echo "Node path: $node_cmd"

if [ -d "$repo_root/.git" ] && command -v git >/dev/null 2>&1; then
  echo
  echo "Updating local repo with git pull --ff-only..."
  git -C "$repo_root" pull --ff-only || echo "Warning: git pull --ff-only failed; continuing with local checkout."
fi

echo
echo "Testing MCP server..."
"$node_cmd" "$server_path" --repo "$repo_root" --status

if [ "$(uname -s)" = "Darwin" ]; then
  echo
  echo "Configuring Claude Desktop for macOS..."
  export NVIDIA_WIKI_MCP_REPO_ROOT="$repo_root"
  export NVIDIA_WIKI_MCP_SERVER_PATH="$server_path"
  export NVIDIA_WIKI_MCP_SERVER_NAME="$server_name"
  export NVIDIA_WIKI_MCP_NODE_CMD="$node_cmd"
  "$node_cmd" <<'NODE'
const fs = require("node:fs")
const os = require("node:os")
const path = require("node:path")

const repoRoot = process.env.NVIDIA_WIKI_MCP_REPO_ROOT
const serverPath = process.env.NVIDIA_WIKI_MCP_SERVER_PATH
const serverName = process.env.NVIDIA_WIKI_MCP_SERVER_NAME
const nodeCmd = process.env.NVIDIA_WIKI_MCP_NODE_CMD
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
  command: nodeCmd,
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
  claude mcp add --scope user "$server_name" -- "$node_cmd" "$server_path" --repo "$repo_root"
  echo "Claude Code MCP configured. Check with: claude mcp list"
else
  echo "Claude Code CLI not found; skipping Claude Code setup."
fi

if command -v codex >/dev/null 2>&1; then
  echo
  echo "Configuring Codex..."
  codex mcp remove "$server_name" >/dev/null 2>&1 || true
  codex mcp add "$server_name" -- "$node_cmd" "$server_path" --repo "$repo_root"
  echo "Codex MCP configured. Check with: codex mcp list"
else
  echo "Codex CLI not found; skipping Codex setup."
fi

echo
echo "Try this in Claude or Codex:"
echo "Use the NVIDIA Wiki MCP. I have a retail customer that wants to reduce losses in their stores. What is the best way to do this?"
