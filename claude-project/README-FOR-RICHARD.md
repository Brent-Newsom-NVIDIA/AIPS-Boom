# AIPS BOOM Claude Project Setup

This is the non-MCP fallback. It uses Claude Projects and Project Knowledge instead of a local MCP connector.

## Setup

1. Download the repo ZIP from GitHub.
2. Right-click the ZIP and choose **Extract All**.
3. Open Claude.
4. Go to **Projects**.
5. Create a new project named:

```text
AIPS BOOM
```

6. Open `claude-project/PROJECT-INSTRUCTIONS-COPY-PASTE.md`.
7. Copy all of that text.
8. In the Claude Project, paste it into **Project instructions** and save.
9. Upload this file to the Project Knowledge area:

```text
claude-project/NVIDIA-WIKI-PROJECT-KNOWLEDGE.md
```

10. Wait for Claude to finish uploading/indexing the file.

## Test It

Start a new chat inside the NVIDIA Wiki project and ask:

```text
Using this project's knowledge only, I have a retail customer that wants to reduce losses in their stores. What is the best way to do this?
```

A good answer should cite wiki pages like:

- `[[NVIDIA-Metropolis]]`
- `[[NVIDIA-DeepStream]]`
- `[[NVIDIA-Video-Search-and-Summarization-Blueprint]]`
- `[[NVIDIA-Jetson-Platform]]`
- `[[NVIDIA-TAO]]`
- `[[NVIDIA-AI-Enterprise]]`

## More Questions to Try

```text
Using this project's knowledge only, what should I recommend to a bank that wants private on-prem LLM inference with enterprise support?
```

```text
Using this project's knowledge only, explain RAPIDS, cuDF, and the RAPIDS Accelerator for Apache Spark like I am preparing for a customer meeting.
```

```text
Using this project's knowledge only, do we have coverage for PyG? When should I talk about PyG instead of DGL?
```

## If It Seems Wrong

If Claude tries to use web search or does not cite wiki pages, start the prompt with:

```text
Use this project's uploaded knowledge only. Do not use web search. Cite wiki pages with [[wikilinks]].
```

If Claude says it cannot find a topic, that may be correct. Ask it to list the closest matching wiki pages from the Project Knowledge.
