import type { Message, MessageContextMenuCommandInteraction } from "discord.js";
import type { ContextConfig } from "robo.js";

export default async (
  _interaction: MessageContextMenuCommandInteraction,
  message: Message
) => {
  return "yup i got ur message: " + message.content;
};

export const config: ContextConfig = {
  dmPermission: true,
};
