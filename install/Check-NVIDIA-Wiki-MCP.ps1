param(
  [switch]$Pause
)

$ErrorActionPreference = "Stop"

function Write-Section($Text) {
  Write-Host ""
  Write-Host "== $Text ==" -ForegroundColor Cyan
}

function Read-JsonFile($Path) {
  if (!(Test-Path $Path)) {
    throw "File not found: $Path"
  }

  $raw = Get-Content -Raw -Path $Path
  if ([string]::IsNullOrWhiteSpace($raw)) {
    throw "File is empty: $Path"
  }

  return $raw | ConvertFrom-Json
}

function Test-FilePath($Label, $Path) {
  if (Test-Path $Path) {
    Write-Host "OK: $Label exists: $Path" -ForegroundColor Green
  } else {
    Write-Host "MISSING: $Label does not exist: $Path" -ForegroundColor Red
  }
}

function Get-ClaudeConfigPaths {
  $paths = New-Object System.Collections.Generic.List[string]
  $paths.Add((Join-Path (Join-Path $env:APPDATA "Claude") "claude_desktop_config.json"))

  $packagesRoot = Join-Path $env:LOCALAPPDATA "Packages"
  if (Test-Path $packagesRoot) {
    Get-ChildItem -Path $packagesRoot -Directory -Filter "Claude_*" -ErrorAction SilentlyContinue | ForEach-Object {
      $paths.Add((Join-Path $_.FullName "LocalCache\Roaming\Claude\claude_desktop_config.json"))
    }
  }

  return @($paths | Select-Object -Unique)
}

function Read-ClaudeServerConfig($Path, $ServerName) {
  if (!(Test-Path $Path)) {
    return $null
  }

  $config = Read-JsonFile $Path
  if (!($config.PSObject.Properties.Name -contains "mcpServers") -or $null -eq $config.mcpServers) {
    return $null
  }

  if (!($config.mcpServers.PSObject.Properties.Name -contains $ServerName)) {
    return $null
  }

  return $config.mcpServers.$ServerName
}

$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$ServerName = "nvidia-wiki"

Write-Host "NVIDIA Wiki MCP Checker" -ForegroundColor Green
Write-Host "Repo: $RepoRoot"

Write-Section "Checking Claude Desktop config"
foreach ($ClaudeConfig in Get-ClaudeConfigPaths) {
  Test-FilePath "Claude Desktop config" $ClaudeConfig
  $candidate = Read-ClaudeServerConfig $ClaudeConfig $ServerName
  if ($null -ne $candidate) {
    $server = $candidate
    Write-Host "OK: Found $ServerName in $ClaudeConfig" -ForegroundColor Green
  }
}

if ($null -eq $server) {
  throw "Could not find $ServerName in any Claude Desktop config path. Rerun Install-NVIDIA-Wiki-MCP.cmd, or install NVIDIA-Wiki-MCP.mcpb from Claude Desktop Settings > Extensions."
}

$command = [string]$server.command
$argsList = @($server.args | ForEach-Object { [string]$_ })

Write-Host "Command: $command"
Write-Host "Args: $($argsList -join ' ')"

Write-Section "Checking referenced files"
Test-FilePath "Node command" $command
if ($argsList.Count -gt 0) {
  Test-FilePath "MCP server" $argsList[0]
}

Write-Section "Running MCP status"
& $command @argsList --status

Write-Section "Next Claude Desktop test"
Write-Host "Fully quit Claude Desktop from the tray/taskbar, reopen it, then paste this exact prompt:" -ForegroundColor Yellow
Write-Host ""
Write-Host 'Use your local nvidia-wiki MCP tools. Do not use web search. First call wiki_status, then call wiki_answer_context for this question, then answer only from the wiki: I have a retail customer that wants to reduce losses in their stores. What is the best way to do this?'
Write-Host ""
Write-Host 'If you cannot see a tool named wiki_status, say exactly: nvidia-wiki MCP is not loaded.'

if ($Pause) {
  Write-Host ""
  Read-Host "Press Enter to close"
}
