const client = require('./index.js');
const { GiveawaysManager } = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
  storage: "./database/giveaway.json",
  updateCountdownEvery: 10000,
  hasGuildMembersIntent: false,
  default: {
    botsCanWin: false,
    exemptPermissions: [ "ADMINISTRATOR" ],
    embedColor: "#FF0000",
    footer: "Tekno",
    reaction: "🎉",
  },
});

module.exports = manager;