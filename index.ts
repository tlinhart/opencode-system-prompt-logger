import type { Hooks, Plugin } from "@opencode-ai/plugin";

export const SystemPromptLogger: Plugin = async ({ client }) => {
  return {
    "experimental.chat.system.transform": async (input, output) => {
      const message =
        output.system.map((prompt) => `\n${prompt}`).join("\n-----") || "";
      await client.app.log({
        body: {
          service: "system-prompt-logger",
          level: "info",
          message,
          extra: {
            sessionID: input.sessionID || "",
            providerID: input.model.providerID,
            modelID: input.model.id,
          },
        },
      });
    },
  } as Hooks;
};
