# Claude Project Setup

Use this when local MCP is blocked or does not load in Claude Desktop.

This path does not require Node.js, command-line tools, MCP connectors, or desktop extension permissions. It uses Claude Project instructions plus one uploaded Project Knowledge file.

## Richard-Friendly Setup

1. Download the repo ZIP from GitHub.
2. Right-click the ZIP and choose **Extract All**.
3. Open Claude.
4. Go to **Projects**.
5. Create a new project named `NVIDIA Wiki`.
6. Open `claude-project/PROJECT-INSTRUCTIONS-COPY-PASTE.md`.
7. Copy all text from that file.
8. Paste it into the Claude Project's **Project instructions** and save.
9. Upload this file to the Project Knowledge area:

```text
claude-project/NVIDIA-WIKI-PROJECT-KNOWLEDGE.md
```

10. Wait for Claude to finish uploading/indexing.
11. Start a new chat inside that project.

## First Test

```text
Using this project's knowledge only, I have a retail customer that wants to reduce losses in their stores. What is the best way to do this?
```

The answer should cite wiki pages with `[[wikilinks]]`.

## Updating the Project

When the wiki changes, rebuild the Project Knowledge file:

```bash
node scripts/build-claude-project-knowledge.mjs
```

Then upload the refreshed `claude-project/NVIDIA-WIKI-PROJECT-KNOWLEDGE.md` to the Claude Project.
