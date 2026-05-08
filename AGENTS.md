# NVIDIA Wiki Agent - Operating Instructions

You are working in the shared Git repository for an NVIDIA internal wiki. The repository itself is the canonical source of truth.

## Canonical Wiki Locations

The authoritative wiki content lives in:

```text
content/wiki/      <- Individual wiki pages
content/index.md   <- Master index of all wiki pages
content/log.md     <- Ingestion history and change log
```

Agent instruction files are provided at both the repo root and inside `content/` so a freshly cloned repo can be queried immediately from either location.

There is no canonical `raw/` folder in this repository. Sources may come from user-provided URLs, local files, docs pages, PDFs, transcripts, or other materials the user explicitly points you to.

## Query Mode

When the user asks a question:

- Treat the wiki as the single source of truth for normal questions.
- Answer from `content/wiki/`, `content/index.md`, and `content/log.md`.
- Do not browse the web or use outside sources unless the user explicitly asks you to ingest, verify, or update from an external source.
- If the answer is not in the wiki, say that clearly instead of filling gaps from outside knowledge.
- Trace `[[links]]` and related pages to build answers, not just keyword matches.

## Ingestion Process

When the user says "ingest [source]" or points you at a docs page, file, or document:

1. Read the source fully.
2. Identify notable entities: concepts, people, organizations, technologies, projects, events, and strategies.
3. For each entity, check whether a page already exists in `content/wiki/`. If yes, update and expand it. If no, create it.
4. Wire up `[[links]]` between related pages.
5. Update `content/index.md` with any new pages.
6. Append an entry to `content/log.md` with date, source, and pages created or updated.

## Wiki Page Schema

Every wiki page in `content/wiki/` should follow this structure:

```markdown
# [Concept / Person / Organization / Topic]

**Type:** [Concept | Person | Organization | Project | Event | Technology | Strategy]
**Tags:** [comma-separated tags]
**Related:** [[Page Name]], [[Page Name]]
**Sources:** [source file(s) or URL(s) this was derived from]
**Last Updated:** [date]

## Summary
2-4 sentence overview.

## Detail
Deeper content, context, key facts.

## Connections
- [[Related Page]] - why it's connected
- [[Another Page]] - why it's connected

## Source Excerpts
Relevant quotes or passages from the original source.
```

## Index Format

`content/index.md` is organized by type:

```markdown
## Concepts
- [[Concept Name]] - one-line description

## People
- [[Person Name]] - role/context

## Organizations
- [[Org Name]] - one-line description

## Technologies
- [[Tech Name]] - one-line description

## Projects
- [[Project Name]] - one-line description
```

## Principles

- Never create a second parallel knowledge store outside `content/`
- Prefer updating existing pages over creating duplicates
- Always link aggressively; every page should connect to at least two others when possible
- NVIDIA context first; frame concepts in terms of NVIDIA technology, business, and strategy where applicable
- Only touch the repo files needed for the task at hand
