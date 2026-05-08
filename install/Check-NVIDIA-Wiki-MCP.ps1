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

$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$ClaudeConfig = Join-Path (Join-Path $env:APPDATA "Claude") "claude_desktop_config.json"
$ServerName = "nvidia-wiki"

Write-Host "NVIDIA Wiki MCP Checker" -ForegroundColor Green
Write-Host "Repo: $RepoRoot"

Write-Section "Checking Claude Desktop config"
Test-FilePath "Claude Desktop config" $ClaudeConfig

$config = Read-JsonFile $ClaudeConfig
if (!($config.PSObject.Properties.Name -contains "mcpServers") -or $null -eq $config.mcpServers) {
  throw "Claude config has no mcpServers block. Rerun Install-NVIDIA-Wiki-MCP.cmd."
}

if (!($config.mcpServers.PSObject.Properties.Name -contains $ServerName)) {
  throw "Claude config has no $ServerName server. Rerun Install-NVIDIA-Wiki-MCP.cmd."
}

$server = $config.mcpServers.$ServerName
$command = [string]$server.command
$argsList = @($server.args | ForEach-Object { [string]$_ })

Write-Host "OK: Found $ServerName in Claude config." -ForegroundColor Green
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
