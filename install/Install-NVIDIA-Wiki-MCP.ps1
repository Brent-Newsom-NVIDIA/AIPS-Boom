param(
  [switch]$SkipGitPull,
  [switch]$SkipClaudeDesktop,
  [switch]$SkipClaudeCode,
  [switch]$SkipCodex,
  [switch]$Pause
)

$ErrorActionPreference = "Stop"

function Write-Section($Text) {
  Write-Host ""
  Write-Host "== $Text ==" -ForegroundColor Cyan
}

function Test-Command($Name) {
  return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

function Read-JsonFile($Path) {
  if (!(Test-Path $Path)) {
    return [pscustomobject]([ordered]@{})
  }

  $raw = Get-Content -Raw -Path $Path
  if ([string]::IsNullOrWhiteSpace($raw)) {
    return [pscustomobject]([ordered]@{})
  }

  return $raw | ConvertFrom-Json
}

function Ensure-Property($Object, $Name, $Value) {
  if ($Object.PSObject.Properties.Name -contains $Name) {
    $Object.PSObject.Properties[$Name].Value = $Value
  } else {
    $Object | Add-Member -NotePropertyName $Name -NotePropertyValue $Value
  }
}

function Backup-File($Path) {
  if (Test-Path $Path) {
    $timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
    Copy-Item -Path $Path -Destination "$Path.backup-$timestamp" -Force
  }
}

$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$ServerPath = Join-Path $RepoRoot "mcp\nvidia-wiki-mcp.mjs"
$ServerName = "nvidia-wiki"

Write-Host "NVIDIA Wiki MCP Installer" -ForegroundColor Green
Write-Host "Repo: $RepoRoot"

Write-Section "Checking prerequisites"
if (!(Test-Path $ServerPath)) {
  throw "MCP server not found: $ServerPath"
}

if (!(Test-Command "node")) {
  throw "Node.js was not found. Install Node.js 18+ from the NVIDIA software center or nodejs.org, then rerun this installer."
}

$nodeVersion = (& node --version).Trim()
Write-Host "Node: $nodeVersion"

if (!$SkipGitPull -and (Test-Path (Join-Path $RepoRoot ".git")) -and (Test-Command "git")) {
  Write-Section "Updating local repo"
  try {
    & git -C $RepoRoot pull --ff-only
    Write-Host "Repo updated with git pull --ff-only."
  } catch {
    Write-Warning "Could not fast-forward the repo. Continuing with the local checkout. Details: $($_.Exception.Message)"
  }
}

Write-Section "Testing MCP server"
& node $ServerPath --repo $RepoRoot --status
Write-Host "Server status check passed."

if (!$SkipClaudeDesktop) {
  Write-Section "Configuring Claude Desktop"
  $ClaudeDir = Join-Path $env:APPDATA "Claude"
  $ClaudeConfig = Join-Path $ClaudeDir "claude_desktop_config.json"
  New-Item -ItemType Directory -Force -Path $ClaudeDir | Out-Null
  Backup-File $ClaudeConfig

  $config = Read-JsonFile $ClaudeConfig
  if (!($config.PSObject.Properties.Name -contains "mcpServers") -or $null -eq $config.mcpServers) {
    Ensure-Property $config "mcpServers" ([pscustomobject]@{})
  }

  $serverConfig = [ordered]@{
    command = "cmd"
    args = @("/c", "node", "$ServerPath", "--repo", "$RepoRoot")
  }

  Ensure-Property $config.mcpServers $ServerName ([pscustomobject]$serverConfig)
  $config | ConvertTo-Json -Depth 10 | Set-Content -Path $ClaudeConfig -Encoding UTF8
  Write-Host "Claude Desktop config updated: $ClaudeConfig"
  Write-Host "Restart Claude Desktop before using the wiki tools."
}

if (!$SkipClaudeCode) {
  Write-Section "Configuring Claude Code"
  if (Test-Command "claude") {
    try {
      & claude mcp remove --scope user $ServerName 2>$null | Out-Null
    } catch {
    }
    & claude mcp add --scope user $ServerName -- cmd /c node "$ServerPath" --repo "$RepoRoot"
    Write-Host "Claude Code MCP configured. Check with: claude mcp list"
  } else {
    Write-Warning "Claude Code CLI was not found. Skipping Claude Code setup."
  }
}

if (!$SkipCodex) {
  Write-Section "Configuring Codex"
  if (Test-Command "codex") {
    try {
      & codex mcp remove $ServerName 2>$null | Out-Null
    } catch {
    }
    & codex mcp add $ServerName -- cmd /c node "$ServerPath" --repo "$RepoRoot"
    Write-Host "Codex MCP configured. Check with: codex mcp list"
  } else {
    Write-Warning "Codex CLI was not found. Skipping Codex setup."
  }
}

Write-Section "Try it"
Write-Host "In Claude or Codex, ask:"
Write-Host 'Use the NVIDIA Wiki MCP. I have a retail customer that wants to reduce losses in their stores. What is the best way to do this?'
Write-Host ""
Write-Host "More examples are in NVIDIA-WIKI-MCP.md."

if ($Pause) {
  Write-Host ""
  Read-Host "Press Enter to close"
}
