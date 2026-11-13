# OpenCode System Prompt Logger

OpenCode plugin that logs the system prompt for debugging and inspection.

## What it does

Before each model request, this plugin logs the system prompt sent to the LLM.
It covers regular agent requests, compaction, transient generation and title
generation. This is useful for:

- Debugging – understanding what instructions the AI is receiving
- Inspecting `AGENTS.md` – verifying your custom instructions are being loaded
- Development – testing changes to system prompts or agent configurations

## Installation

Add the plugin to your `opencode.json` or `opencode.jsonc`:

```json
{
  "plugins": ["opencode-system-prompt-logger"]
}
```

The plugin will be automatically installed and loaded when OpenCode starts.

## Usage

Once installed, the system prompt will be logged before each model request. The
log entry includes:

- Session ID
- Provider ID and model ID
- Full system prompt content (multiple parts are separated by `-----`)

The plugin uses OpenCode's structured Effect logger. For example:

```text
timestamp=2026-01-01T08:00:00.000Z level=INFO run=abc123 message="
You are a title generator. You output ONLY a thread title. Nothing else.
...
" service=system-prompt-logger sessionID=ses_abc123 providerID=opencode modelID=gpt-5-nano role=server
```

To determine the logs location:

```shell
opencode debug paths log
```

## Requirements

- OpenCode >= 2.2.7

## License

See the [LICENSE](LICENSE) file for details.
