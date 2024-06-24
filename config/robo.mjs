// @ts-check

/**
 * @type {import('robo.js').Config}
 **/
export default {
  clientOptions: {
    intents: ["Guilds", "GuildMessages", "MessageContent", "DirectMessages"],
  },
  plugins: [],
  type: "plugin",
  experimental: {
    userInstall: false,
  },
};
