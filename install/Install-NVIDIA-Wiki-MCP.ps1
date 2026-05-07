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

function Get-NodeMajor($NodePath) {
  try {
    $major = & $NodePath -p "Number(process.versions.node.split('.')[0])" 2>$null
    return [int]$major
  } catch {
    return 0
  }
}

function Test-NodeUsable($NodePath) {
  return $NodePath -and (Test-Path $NodePath) -and ((Get-NodeMajor $NodePath) -ge 18)
}

function Get-PortableNodePlatform {
  if ($env:PROCESSOR_ARCHITECTURE -eq "ARM64" -or $env:PROCESSOR_ARCHITEW6432 -eq "ARM64") {
    return "win-arm64"
  }
  return "win-x64"
}

function Install-PortableNode($RepoRoot, $NodeVersion) {
  $platform = Get-PortableNodePlatform
  $runtimeRoot = Join-Path $RepoRoot ".mcp-runtime"
  $nodeDir = Join-Path $runtimeRoot "node-v$NodeVersion-$platform"
  $nodeExe = Join-Path $nodeDir "node.exe"

  if (Test-NodeUsable $nodeExe) {
    return $nodeExe
  }

  $downloads = Join-Path $runtimeRoot "downloads"
  New-Item -ItemType Directory -Force -Path $downloads | Out-Null
  $archive = Join-Path $downloads "node-v$NodeVersion-$platform.zip"
  $url = "https://nodejs.org/dist/v$NodeVersion/node-v$NodeVersion-$platform.zip"

  Write-Host "Node.js 18+ was not found. Downloading portable Node $NodeVersion..."
  $downloaded = $false
  $ProgressPreference = "SilentlyContinue"
  for ($attempt = 1; $attempt -le 3; $attempt++) {
    try {
      Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile $archive
      $downloaded = $true
      break
    } catch {
      Write-Warning "Download attempt $attempt failed: $($_.Exception.Message)"
      if ($attempt -lt 3) {
        Start-Sleep -Seconds 2
      }
    }
  }

  if (!$downloaded) {
    throw "Could not download portable Node from $url. Install Node.js 18+ from https://nodejs.org/en/download or NVIDIA Self Service, then rerun this installer."
  }

  Expand-Archive -Path $archive -DestinationPath $runtimeRoot -Force

  if (!(Test-NodeUsable $nodeExe)) {
    throw "Portable Node install failed: $nodeExe"
  }

  return $nodeExe
}

function Resolve-NodeCommand($RepoRoot) {
  $NodeVersion = "22.16.0"
  $nodeCommand = Get-Command "node" -ErrorAction SilentlyContinue
  if ($nodeCommand -and ((Get-NodeMajor $nodeCommand.Source) -ge 18)) {
    return $nodeCommand.Source
  }

  return Install-PortableNode $RepoRoot $NodeVersion
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

$NodeCmd = Resolve-NodeCommand $RepoRoot
$nodeVersion = (& $NodeCmd --version).Trim()
Write-Host "Node: $nodeVersion"
Write-Host "Node path: $NodeCmd"

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
& $NodeCmd $ServerPath --repo $RepoRoot --status
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
    command = "$NodeCmd"
    args = @("$ServerPath", "--repo", "$RepoRoot")
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
    & claude mcp add --scope user $ServerName -- "$NodeCmd" "$ServerPath" --repo "$RepoRoot"
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
    & codex mcp add $ServerName -- "$NodeCmd" "$ServerPath" --repo "$RepoRoot"
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
