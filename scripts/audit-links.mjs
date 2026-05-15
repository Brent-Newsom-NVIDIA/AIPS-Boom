// Scan content/ for broken [[wikilinks]] and write a categorized report.
// Run: `node scripts/audit-links.mjs` from the repo root.
// Report goes to audit-links-report.txt at the repo root (gitignored).

import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs"
import { join, relative, basename, extname, dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const CONTENT = resolve(ROOT, "content")
const REPORT_PATH = resolve(ROOT, "audit-links-report.txt")

// Mirror the ignorePatterns from quartz.config.ts. Files matching these
// are excluded from the audit because they aren't published.
const IGNORE = ["private", "templates", ".obsidian", "AGENTS.md", "CLAUDE.md", "codex.md", "raw"]

function isIgnored(relPath) {
  const segs = relPath.replace(/\\/g, "/").split("/")
  return IGNORE.some((pat) => segs.includes(pat) || segs[segs.length - 1] === pat)
}

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) out.push(...walk(full))
    else if (name.toLowerCase().endsWith(".md")) out.push(full)
  }
  return out
}

const files = walk(CONTENT).filter((f) => !isIgnored(relative(CONTENT, f)))

// Index by exact stem and by lowercase stem
const byStem = new Map()
const byLowerStem = new Map()
for (const f of files) {
  const stem = basename(f, extname(f))
  byStem.set(stem, f)
  const lower = stem.toLowerCase()
  if (!byLowerStem.has(lower)) byLowerStem.set(lower, [])
  byLowerStem.get(lower).push(stem)
}

// Match [[target]] and ![[embed]]; capture group 2 is the inner text.
const WIKILINK = /(!?)\[\[([^\]]+)\]\]/g

const missing = []        // stem doesn't exist at all
const caseMismatch = []   // stem exists with different case only
const hyphenMismatch = [] // stem has spaces but a hyphenated variant exists

for (const f of files) {
  const rel = relative(CONTENT, f).replace(/\\/g, "/")
  const text = readFileSync(f, "utf8")
  let m
  while ((m = WIKILINK.exec(text)) !== null) {
    const embed = m[1] === "!"
    let inner = m[2].trim()
    // Strip display text after | and anchor after #
    const pipeIdx = inner.indexOf("|")
    if (pipeIdx !== -1) inner = inner.slice(0, pipeIdx)
    const hashIdx = inner.indexOf("#")
    if (hashIdx !== -1) inner = inner.slice(0, hashIdx)
    inner = inner.trim()
    if (!inner) continue
    // If link includes slashes (explicit path), take basename for stem
    const stem = inner.includes("/") ? inner.split("/").pop() : inner
    // Skip attachment-style embeds (image/pdf embeds with real extensions)
    if (embed && /\.(png|jpg|jpeg|gif|svg|webp|pdf|mp4|webm|mp3|wav)$/i.test(stem)) continue

    if (byStem.has(stem)) continue
    const lower = stem.toLowerCase()
    if (byLowerStem.has(lower)) {
      caseMismatch.push({ file: rel, link: m[0], target: stem, actual: byLowerStem.get(lower) })
      continue
    }
    // Try swapping spaces -> hyphens (shortest-path convention the vault uses)
    if (stem.includes(" ")) {
      const hyph = stem.replace(/ /g, "-")
      if (byStem.has(hyph) || byLowerStem.has(hyph.toLowerCase())) {
        hyphenMismatch.push({ file: rel, link: m[0], target: stem, actual: hyph })
        continue
      }
    }
    missing.push({ file: rel, link: m[0], target: stem })
  }
}

// Build report
const lines = []
lines.push(`Scanned ${files.length} files.`)
lines.push(`Missing targets:    ${missing.length}`)
lines.push(`Case mismatches:    ${caseMismatch.length}`)
lines.push(`Space vs hyphen:    ${hyphenMismatch.length}`)
lines.push("")
if (hyphenMismatch.length) {
  lines.push("=== SPACE-VS-HYPHEN (stem has spaces but hyphenated file exists) ===")
  for (const x of hyphenMismatch) lines.push(`  ${x.file}: ${x.link}  ->  rename link to [[${x.actual}]]`)
  lines.push("")
}
if (caseMismatch.length) {
  lines.push("=== CASE MISMATCH (target exists with different case) ===")
  for (const x of caseMismatch) lines.push(`  ${x.file}: ${x.link}  ->  "${x.target}" but actual is "${x.actual.join(", ")}"`)
  lines.push("")
}
if (missing.length) {
  lines.push("=== MISSING (no matching file; may be intentional placeholder or genuinely missing) ===")
  for (const x of missing) lines.push(`  ${x.file}: ${x.link}  ->  no file "${x.target}.md"`)
  lines.push("")
}

writeFileSync(REPORT_PATH, lines.join("\n"))

const total = missing.length + caseMismatch.length + hyphenMismatch.length
const relReport = relative(process.cwd(), REPORT_PATH) || REPORT_PATH
console.log(
  `audit: ${files.length} files, ${total} issue(s) ` +
  `(${missing.length} missing, ${caseMismatch.length} case, ${hyphenMismatch.length} hyphen)  ->  ${relReport}`
)
// Non-zero exit if issues found, so this can gate a publish step.
process.exit(total > 0 ? 1 : 0)
