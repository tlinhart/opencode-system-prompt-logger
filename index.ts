import { Plugin } from "@opencode/plugin/effect";
import { Effect } from "effect";

export default Plugin.define({
  id: "opencode-system-prompt-logger",
  effect: (ctx) =>
    Effect.gen(function* () {
      for (const hook of [
        "context",
        "compaction",
        "generate",
        "title",
      ] as const) {
        yield* ctx.session.hook(hook, (event) =>
          Effect.logInfo(
            event.system.map((part) => `\n${part.text}`).join("\n-----"),
            {
              service: "system-prompt-logger",
              sessionID: event.sessionID,
              providerID: event.model.providerID,
              modelID: event.model.id,
            },
          ),
        );
      }
    }),
});
