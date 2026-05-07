@echo off
setlocal
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0install\Install-NVIDIA-Wiki-MCP.ps1" -Pause
endlocal
