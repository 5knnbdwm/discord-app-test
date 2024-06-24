import type { CommandResult, CommandConfig } from "robo.js";
// import { CommandInteraction } from "discord.js";

export default (): CommandResult => {
  return "Pong!";
};

export const config: CommandConfig = {
  dmPermission: true,
  timeout: 30 * 1000,
};
