#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const repoRoot = path.resolve(path.dirname(__filename), "..")
const wikiRoot = path.join(repoRoot, "content", "wiki")
const outputDir = path.join(repoRoot, "claude-project")
const outputPath = path.join(outputDir, "NVIDIA-WIKI-PROJECT-KNOWLEDGE.md")

function read(file) {
  return fs.readFileSync(file, "utf8").trimEnd()
}

function commit() {
  try {
    return execSync("git rev-parse --short=12 HEAD", {
      cwd: repoRoot,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    }).trim()
  } catch {
    return "unknown"
  }
}

const files = fs
  .readdirSync(wikiRoot)
  .filter((file) => file.endsWith(".md"))
  .sort((a, b) => a.localeCompare(b))

const lines = [
  "# AIPS BOOM NVIDIA Wiki Project Knowledge",
  "",
  `Generated from repo commit: ${commit()}`,
  `Generated page count: ${files.length}`,
  "",
  "This generated file is intended for Claude Project Knowledge.",
  "",
  "Source-of-truth rules:",
  "",
  "- Treat the wiki pages, master index, and ingestion log below as canonical.",
  "- Answer from this Project Knowledge before using any outside source.",
  "- If the answer is not present here, say the wiki does not contain it.",
  "- Cite relevant pages using [[wikilinks]].",
  "- Keep NVIDIA context first.",
  "",
  "---",
  "",
  "# Master Index",
  "",
  "Source path: content/index.md",
  "",
  read(path.join(repoRoot, "content", "index.md")),
  "",
  "---",
  "",
  "# Ingestion Log",
  "",
  "Source path: content/log.md",
  "",
  read(path.join(repoRoot, "content", "log.md")),
  "",
  "---",
  "",
  "# Wiki Pages",
  "",
]

for (const file of files) {
  const slug = path.basename(file, ".md")
  const sourcePath = `content/wiki/${file}`
  lines.push(`<!-- BEGIN WIKI PAGE: ${slug} -->`)
  lines.push("")
  lines.push(`# Wiki Page: [[${slug}]]`)
  lines.push("")
  lines.push(`Source path: ${sourcePath}`)
  lines.push("")
  lines.push(read(path.join(wikiRoot, file)))
  lines.push("")
  lines.push(`<!-- END WIKI PAGE: ${slug} -->`)
  lines.push("")
  lines.push("---")
  lines.push("")
}

fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(outputPath, `${lines.join("\n")}\n`)

console.log(`Wrote ${path.relative(repoRoot, outputPath)}`)
console.log(`Pages: ${files.length}`)
