# OpenCode System Prompt Logger

OpenCode plugin that logs the system prompt for debugging and inspection.

## What it does

Every time you send a message in OpenCode, this plugin intercepts the system
prompt before it's sent to the LLM and logs it. This is useful for:

- Debugging – understanding what instructions the AI is receiving
- Inspecting `AGENTS.md` – verifying your custom instructions are being loaded
- Development – testing changes to system prompts or agent configurations

## Installation

Add the plugin to your `opencode.json` or `opencode.jsonc`:

```json
{
  "plugin": ["opencode-system-prompt-logger"]
}
```

The plugin will be automatically installed and loaded when OpenCode starts.

## Usage

Once installed, the system prompt will be logged every time you send a message.
The log entry includes:

- Session ID
- Provider ID and model ID
- Full system prompt content (multiple prompts are separated by `-----`)

The plugin logs using OpenCode's structured logging system. See the example:

```
INFO  2026-01-01T08:00:00 +1ms service=system-prompt-logger sessionID=ses_abc123 providerID=opencode modelID=gpt-5-nano
You are a title generator. You output ONLY a thread title. Nothing else.
...
```

To determine the logs location:

```shell
opencode debug paths
```

## Requirements

- OpenCode >= 1.1.37

## License

See the [LICENSE](LICENSE) file for details.
