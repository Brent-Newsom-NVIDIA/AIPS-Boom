#!/usr/bin/env bash
cd "$(dirname "$0")" || exit 1
bash install/install-nvidia-wiki-mcp.sh
echo
read -r -p "Press Return to close this window..."
