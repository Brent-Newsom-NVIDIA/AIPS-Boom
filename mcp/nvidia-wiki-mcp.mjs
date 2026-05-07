#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import readline from "node:readline"
import { execSync } from "node:child_process"
import { fileURLToPath } from "node:url"

const VERSION = "0.1.0"
const SERVER_NAME = "nvidia-wiki"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const args = process.argv.slice(2)

function getArg(name, fallback = undefined) {
  const idx = args.indexOf(name)
  if (idx === -1 || idx + 1 >= args.length) return fallback
  return args[idx + 1]
}

function hasFlag(name) {
  return args.includes(name)
}

const repoRoot = path.resolve(getArg("--repo", path.join(__dirname, "..")))
const contentRoot = path.join(repoRoot, "content")
const wikiRoot = path.join(contentRoot, "wiki")

function readFileSafe(file) {
  try {
    return fs.readFileSync(file, "utf8")
  } catch {
    return ""
  }
}

function getCommit() {
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

function stripWikiLink(value) {
  return String(value ?? "")
    .trim()
    .replace(/^\[\[/, "")
    .replace(/\]\]$/, "")
    .split("|")[0]
    .split("#")[0]
    .trim()
}

function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[^a-z0-9.+#/-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function unique(values) {
  return [...new Set(values.filter(Boolean))]
}

function tokenize(value) {
  return unique(
    normalize(value)
      .split(" ")
      .map((token) => token.trim())
      .filter((token) => token.length >= 2 && !STOP_WORDS.has(token)),
  )
}

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "best",
  "by",
  "can",
  "do",
  "does",
  "for",
  "from",
  "get",
  "have",
  "how",
  "i",
  "in",
  "is",
  "it",
  "me",
  "my",
  "nvidia",
  "of",
  "on",
  "or",
  "our",
  "should",
  "that",
  "the",
  "their",
  "this",
  "to",
  "use",
  "want",
  "wants",
  "way",
  "we",
  "what",
  "with",
  "wiki",
])

const QUERY_EXPANSIONS = [
  {
    triggers: ["retail", "store", "stores", "loss", "losses", "shrink", "shrinkage", "theft"],
    terms: [
      "retail",
      "loss prevention",
      "shrinkage",
      "video analytics",
      "Metropolis",
      "DeepStream",
      "VSS",
      "video search",
      "summarization",
      "Jetson",
      "TAO",
      "queue",
      "foot traffic",
      "alert",
    ],
  },
  {
    triggers: ["rag", "retrieval", "knowledge", "documents", "search"],
    terms: ["RAG", "NeMo Retriever", "embedding", "reranking", "AI Data Platform", "NVIDIA NIM"],
  },
  {
    triggers: ["spark", "apache"],
    terms: ["RAPIDS Accelerator for Apache Spark", "cuDF", "NVIDIA RAPIDS"],
  },
  {
    triggers: ["graph", "gnn", "pyg", "dgl"],
    terms: ["PyG", "NVIDIA DGL", "cuGraph", "PyTorch Geometric", "GNN"],
  },
  {
    triggers: ["federated", "privacy", "hospital", "healthcare", "multi-site"],
    terms: ["NVIDIA FLARE", "MONAI", "Clara", "federated learning", "privacy"],
  },
]

function expandQuery(query) {
  const norm = normalize(query)
  const additions = []
  for (const expansion of QUERY_EXPANSIONS) {
    if (expansion.triggers.some((trigger) => norm.includes(normalize(trigger)))) {
      additions.push(...expansion.terms)
    }
  }
  return unique([query, ...additions]).join(" ")
}

function parseField(text, fieldName) {
  const pattern = new RegExp(`^\\*\\*${fieldName}:\\*\\*\\s*(.*)$`, "im")
  const match = text.match(pattern)
  return match ? match[1].trim() : ""
}

function parseSection(text, sectionName) {
  const lines = text.split(/\r?\n/)
  const heading = `## ${sectionName}`.toLowerCase()
  const start = lines.findIndex((line) => line.trim().toLowerCase() === heading)
  if (start === -1) return ""

  const end = lines.findIndex((line, index) => index > start && line.startsWith("## "))
  return lines.slice(start + 1, end === -1 ? undefined : end).join("\n").trim()
}

function titleFromText(text, fallback) {
  const match = text.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : fallback
}

function extractWikiLinks(text) {
  const links = []
  const re = /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g
  let match
  while ((match = re.exec(text)) !== null) {
    links.push(match[1].trim())
  }
  return unique(links)
}

function loadPages() {
  if (!fs.existsSync(wikiRoot)) {
    throw new Error(`Could not find wiki directory: ${wikiRoot}`)
  }

  const files = fs
    .readdirSync(wikiRoot)
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b))

  const pages = files.map((file) => {
    const fullPath = path.join(wikiRoot, file)
    const text = readFileSafe(fullPath)
    const slug = path.basename(file, ".md")
    const summary = parseSection(text, "Summary")
    const detail = parseSection(text, "Detail")
    const connections = parseSection(text, "Connections")
    const sources = parseField(text, "Sources")
    const relatedRaw = parseField(text, "Related")
    const related = unique([
      ...relatedRaw
        .split(",")
        .map((item) => stripWikiLink(item))
        .filter(Boolean),
      ...extractWikiLinks(connections),
    ])
    const page = {
      slug,
      title: titleFromText(text, slug),
      file: path.relative(repoRoot, fullPath).replaceAll("\\", "/"),
      type: parseField(text, "Type"),
      tags: parseField(text, "Tags"),
      related,
      sources,
      lastUpdated: parseField(text, "Last Updated"),
      summary,
      detail,
      connections,
      text,
    }
    page.searchText = normalize(
      [
        page.slug,
        page.title,
        page.type,
        page.tags,
        page.related.join(" "),
        page.summary,
        page.detail,
        page.connections,
        page.sources,
      ].join("\n"),
    )
    page.titleText = normalize(`${page.slug} ${page.title}`)
    page.summaryText = normalize(page.summary)
    page.tagText = normalize(page.tags)
    return page
  })

  const bySlug = new Map(pages.map((page) => [normalize(page.slug), page]))
  const byTitle = new Map(pages.map((page) => [normalize(page.title), page]))

  return {
    pages,
    bySlug,
    byTitle,
    commit: getCommit(),
    indexText: readFileSafe(path.join(contentRoot, "index.md")),
    logText: readFileSafe(path.join(contentRoot, "log.md")),
  }
}

let cache = loadPages()

function resolvePage(titleOrSlug) {
  const cleaned = stripWikiLink(titleOrSlug)
  const key = normalize(cleaned)
  if (!key) return null
  if (cache.bySlug.has(key)) return cache.bySlug.get(key)
  if (cache.byTitle.has(key)) return cache.byTitle.get(key)

  const loose = key.replaceAll(" ", "-")
  if (cache.bySlug.has(loose)) return cache.bySlug.get(loose)

  return (
    cache.pages.find((page) => normalize(page.slug).includes(key) || normalize(page.title).includes(key)) ??
    null
  )
}

function countOccurrences(haystack, needle) {
  if (!needle) return 0
  let count = 0
  let offset = 0
  while (true) {
    const idx = haystack.indexOf(needle, offset)
    if (idx === -1) break
    count += 1
    offset = idx + needle.length
  }
  return count
}

function scorePage(page, queryTokens, phraseTokens, expandedQuery) {
  let score = 0
  const normalizedQuery = normalize(expandedQuery)
  const phrase = normalize(phraseTokens.join(" "))

  for (const token of queryTokens) {
    if (page.titleText.includes(token)) score += 14
    if (page.tagText.includes(token)) score += 7
    if (page.summaryText.includes(token)) score += 5
    score += Math.min(countOccurrences(page.searchText, token), 8)
  }

  if (phrase && phrase.length > 4) {
    if (page.titleText.includes(phrase)) score += 20
    if (page.summaryText.includes(phrase)) score += 12
    if (page.searchText.includes(phrase)) score += 10
  }

  for (const related of page.related) {
    const relatedNorm = normalize(related)
    for (const token of queryTokens) {
      if (relatedNorm.includes(token)) score += 3
    }
  }

  if (normalizedQuery.includes("retail") && page.searchText.includes("retail")) score += 10
  if (normalizedQuery.includes("loss") && page.searchText.includes("shrinkage")) score += 12
  if (normalizedQuery.includes("store") && page.searchText.includes("retail")) score += 6

  return score
}

function snippetFor(page, queryTokens) {
  const sections = [
    page.summary,
    page.detail,
    page.connections,
    page.text
      .split("\n")
      .filter((line) => line.trim().startsWith("- "))
      .join("\n"),
  ].filter(Boolean)

  for (const section of sections) {
    const lines = section
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean)
    const hit = lines.find((line) => {
      const norm = normalize(line)
      return queryTokens.some((token) => norm.includes(token))
    })
    if (hit) return truncate(hit.replace(/\s+/g, " "), 420)
  }

  return truncate(page.summary.replace(/\s+/g, " "), 420)
}

function searchPages(query, limit = 8) {
  const expandedQuery = expandQuery(query)
  const queryTokens = tokenize(expandedQuery)
  const phraseTokens = tokenize(query)

  if (queryTokens.length === 0) {
    return []
  }

  return cache.pages
    .map((page) => ({
      page,
      score: scorePage(page, queryTokens, phraseTokens, expandedQuery),
      snippet: snippetFor(page, queryTokens),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.page.title.localeCompare(b.page.title))
    .slice(0, Math.max(1, Math.min(Number(limit) || 8, 20)))
}

function truncate(value, max = 12000) {
  const text = String(value ?? "")
  if (text.length <= max) return text
  return `${text.slice(0, max)}\n\n[truncated at ${max} characters]`
}

function pageHeader(page) {
  return [
    `# [[${page.slug}]]`,
    page.title !== page.slug ? `Title: ${page.title}` : "",
    page.type ? `Type: ${page.type}` : "",
    page.tags ? `Tags: ${page.tags}` : "",
    page.lastUpdated ? `Last Updated: ${page.lastUpdated}` : "",
    `Path: ${page.file}`,
    `Repo Commit: ${cache.commit}`,
    page.sources ? `Sources: ${page.sources}` : "",
  ]
    .filter(Boolean)
    .join("\n")
}

function formatSearchResults(query, results) {
  if (results.length === 0) {
    return [
      `No matching pages were found in the NVIDIA wiki for: ${query}`,
      "",
      "Source-of-truth rule: tell the user this is not in the wiki before using outside sources.",
      `Repo Commit: ${cache.commit}`,
    ].join("\n")
  }

  const lines = [
    `NVIDIA Wiki search results for: ${query}`,
    `Repo Commit: ${cache.commit}`,
    `Pages searched: ${cache.pages.length}`,
    "",
    "Use these pages as source-of-truth context. If the answer needs facts not present here, say the wiki does not contain them.",
    "",
  ]

  results.forEach((result, index) => {
    const page = result.page
    lines.push(`${index + 1}. [[${page.slug}]] - score ${result.score}`)
    if (page.type) lines.push(`   Type: ${page.type}`)
    if (page.lastUpdated) lines.push(`   Last Updated: ${page.lastUpdated}`)
    lines.push(`   Path: ${page.file}`)
    if (page.sources) lines.push(`   Sources: ${page.sources}`)
    if (page.related.length) lines.push(`   Related: ${page.related.slice(0, 8).map((item) => `[[${item}]]`).join(", ")}`)
    lines.push(`   Snippet: ${result.snippet}`)
    lines.push("")
  })

  return lines.join("\n")
}

function formatAnswerContext(question, limit = 8) {
  const results = searchPages(question, limit)
  const lines = [
    `Question: ${question}`,
    "",
    "Instruction for the assistant:",
    "- Answer only from the NVIDIA wiki context below.",
    "- Keep NVIDIA context first.",
    "- Cite wiki page names with [[wikilinks]].",
    "- If a key claim is not supported by these pages, say the wiki does not contain it.",
    "",
    formatSearchResults(question, results),
  ]
  return lines.join("\n")
}

function formatRelated(titleOrSlug, depth = 1, limit = 20) {
  const root = resolvePage(titleOrSlug)
  if (!root) {
    return `No page found for: ${titleOrSlug}`
  }

  const maxDepth = Math.max(1, Math.min(Number(depth) || 1, 2))
  const maxResults = Math.max(1, Math.min(Number(limit) || 20, 50))
  const visited = new Set([root.slug])
  const queue = root.related.map((slug) => ({ slug, depth: 1 }))
  const found = []

  while (queue.length && found.length < maxResults) {
    const item = queue.shift()
    const page = resolvePage(item.slug)
    if (!page || visited.has(page.slug)) continue
    visited.add(page.slug)
    found.push({ page, depth: item.depth })
    if (item.depth < maxDepth) {
      for (const next of page.related) queue.push({ slug: next, depth: item.depth + 1 })
    }
  }

  const lines = [pageHeader(root), "", `Related pages, depth ${maxDepth}:`, ""]
  for (const item of found) {
    lines.push(`- ${"  ".repeat(item.depth - 1)}[[${item.page.slug}]] - ${truncate(item.page.summary.replace(/\s+/g, " "), 260)}`)
  }
  return lines.join("\n")
}

const tools = [
  {
    name: "wiki_search",
    description:
      "Search the local NVIDIA markdown wiki. Use this first for NVIDIA CUDA, NVIDIA software, models, platforms, libraries, and customer-solution questions.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Natural-language query or keywords." },
        limit: { type: "number", description: "Maximum number of pages to return, default 8, max 20." },
      },
      required: ["query"],
      additionalProperties: false,
    },
  },
  {
    name: "wiki_read_page",
    description: "Read a specific NVIDIA wiki page by title, slug, or [[wikilink]].",
    inputSchema: {
      type: "object",
      properties: {
        title: { type: "string", description: "Page title, slug, or [[wikilink]]." },
        max_chars: { type: "number", description: "Maximum characters to return, default 12000." },
      },
      required: ["title"],
      additionalProperties: false,
    },
  },
  {
    name: "wiki_answer_context",
    description:
      "Build an answer-ready context pack from the wiki for a user question. This is the best tool for demos and customer-solution questions.",
    inputSchema: {
      type: "object",
      properties: {
        question: { type: "string", description: "User question to answer from the wiki." },
        limit: { type: "number", description: "Maximum number of pages to include, default 8, max 20." },
      },
      required: ["question"],
      additionalProperties: false,
    },
  },
  {
    name: "wiki_related_pages",
    description: "Explore related pages from a starting wiki page.",
    inputSchema: {
      type: "object",
      properties: {
        title: { type: "string", description: "Starting page title, slug, or [[wikilink]]." },
        depth: { type: "number", description: "Graph depth, 1 or 2. Default 1." },
        limit: { type: "number", description: "Maximum pages to return, default 20, max 50." },
      },
      required: ["title"],
      additionalProperties: false,
    },
  },
  {
    name: "wiki_status",
    description: "Show local wiki path, page count, git commit, and source-of-truth rules.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
]

function toolResult(text) {
  return {
    content: [
      {
        type: "text",
        text,
      },
    ],
  }
}

function callTool(name, toolArgs = {}) {
  if (name === "wiki_search") {
    return toolResult(formatSearchResults(toolArgs.query, searchPages(toolArgs.query, toolArgs.limit)))
  }

  if (name === "wiki_read_page") {
    const page = resolvePage(toolArgs.title)
    if (!page) return toolResult(`No page found for: ${toolArgs.title}`)
    return toolResult(`${pageHeader(page)}\n\n${truncate(page.text, Number(toolArgs.max_chars) || 12000)}`)
  }

  if (name === "wiki_answer_context") {
    return toolResult(formatAnswerContext(toolArgs.question, toolArgs.limit))
  }

  if (name === "wiki_related_pages") {
    return toolResult(formatRelated(toolArgs.title, toolArgs.depth, toolArgs.limit))
  }

  if (name === "wiki_status") {
    return toolResult(
      [
        "NVIDIA Wiki MCP status",
        `Repo Root: ${repoRoot}`,
        `Content Root: ${contentRoot}`,
        `Wiki Pages: ${cache.pages.length}`,
        `Repo Commit: ${cache.commit}`,
        "",
        "Rules:",
        "- Treat content/wiki, content/index.md, and content/log.md as source of truth.",
        "- Do not browse outside the wiki unless the user explicitly asks for external update/ingest.",
        "- If the answer is not in the wiki, say so clearly.",
        "- Link related pages with [[wikilinks]] when answering.",
      ].join("\n"),
    )
  }

  return toolResult(`Unknown tool: ${name}`)
}

const prompts = [
  {
    name: "ask_nvidia_wiki",
    description: "Ask a question using the NVIDIA wiki as source of truth.",
    arguments: [
      {
        name: "question",
        description: "The question to answer from the wiki.",
        required: true,
      },
    ],
  },
  {
    name: "retail_loss_prevention_demo",
    description: "Demo prompt for a retail loss-prevention customer scenario.",
    arguments: [],
  },
]

function getPrompt(name, promptArgs = {}) {
  if (name === "ask_nvidia_wiki") {
    const question = promptArgs.question ?? "What should I know from the NVIDIA wiki?"
    return {
      description: "Ask the NVIDIA wiki.",
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Use the NVIDIA Wiki MCP as source of truth. Answer this question from the wiki only, citing [[wikilinks]]. If the wiki does not contain the answer, say that clearly.\n\nQuestion: ${question}`,
          },
        },
      ],
    }
  }

  if (name === "retail_loss_prevention_demo") {
    return {
      description: "Retail loss-prevention demo.",
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text:
              "Use the NVIDIA Wiki MCP as source of truth. I have a retail customer that wants to reduce losses in their stores. What is the best NVIDIA-aligned way to approach this? Give me the recommended solution pattern, the NVIDIA software/hardware pieces to discuss, and the wiki pages I should read next. Cite [[wikilinks]].",
          },
        },
      ],
    }
  }

  return null
}

function listResources() {
  return [
    {
      uri: "wiki://index",
      name: "NVIDIA Wiki Master Index",
      mimeType: "text/markdown",
      description: "content/index.md",
    },
    {
      uri: "wiki://log",
      name: "NVIDIA Wiki Ingestion Log",
      mimeType: "text/markdown",
      description: "content/log.md",
    },
    ...cache.pages.map((page) => ({
      uri: `wiki://page/${encodeURIComponent(page.slug)}`,
      name: page.slug,
      mimeType: "text/markdown",
      description: page.summary ? truncate(page.summary.replace(/\s+/g, " "), 180) : page.file,
    })),
  ]
}

function readResource(uri) {
  if (uri === "wiki://index") {
    return { uri, mimeType: "text/markdown", text: cache.indexText }
  }
  if (uri === "wiki://log") {
    return { uri, mimeType: "text/markdown", text: cache.logText }
  }
  if (uri.startsWith("wiki://page/")) {
    const slug = decodeURIComponent(uri.slice("wiki://page/".length))
    const page = resolvePage(slug)
    if (page) return { uri, mimeType: "text/markdown", text: page.text }
  }
  return { uri, mimeType: "text/plain", text: `No resource found for ${uri}` }
}

function respond(id, result) {
  process.stdout.write(`${JSON.stringify({ jsonrpc: "2.0", id, result })}\n`)
}

function error(id, code, message, data = undefined) {
  process.stdout.write(`${JSON.stringify({ jsonrpc: "2.0", id, error: { code, message, data } })}\n`)
}

async function handle(message) {
  if (!message || typeof message !== "object") return
  const { id, method, params } = message

  try {
    if (method === "initialize") {
      respond(id, {
        protocolVersion: params?.protocolVersion ?? "2025-06-18",
        capabilities: {
          tools: {},
          prompts: {},
          resources: {},
        },
        serverInfo: {
          name: SERVER_NAME,
          version: VERSION,
        },
      })
      return
    }

    if (method === "notifications/initialized") return

    if (method === "ping") {
      respond(id, {})
      return
    }

    if (method === "tools/list") {
      respond(id, { tools })
      return
    }

    if (method === "tools/call") {
      respond(id, callTool(params?.name, params?.arguments ?? {}))
      return
    }

    if (method === "prompts/list") {
      respond(id, { prompts })
      return
    }

    if (method === "prompts/get") {
      const prompt = getPrompt(params?.name, params?.arguments ?? {})
      if (!prompt) error(id, -32602, `Unknown prompt: ${params?.name}`)
      else respond(id, prompt)
      return
    }

    if (method === "resources/list") {
      respond(id, { resources: listResources() })
      return
    }

    if (method === "resources/read") {
      respond(id, { contents: [readResource(params?.uri ?? "")] })
      return
    }

    if (id !== undefined) error(id, -32601, `Method not found: ${method}`)
  } catch (err) {
    error(id, -32000, err?.message ?? String(err))
  }
}

if (hasFlag("--self-test")) {
  const idx = args.indexOf("--self-test")
  const query = idx !== -1 && args[idx + 1] && !args[idx + 1].startsWith("--")
    ? args[idx + 1]
    : "I have a retail customer that wants to reduce losses in their stores. What is the best way to do this?"
  console.log(formatAnswerContext(query, 6))
  process.exit(0)
}

if (hasFlag("--status")) {
  console.log(callTool("wiki_status").content[0].text)
  process.exit(0)
}

const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Number.POSITIVE_INFINITY,
})

rl.on("line", (line) => {
  if (!line.trim()) return
  try {
    handle(JSON.parse(line))
  } catch (err) {
    error(null, -32700, "Parse error", err?.message ?? String(err))
  }
})

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))
