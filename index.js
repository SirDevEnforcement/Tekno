const mySecret = process.env['token'];
const Discord = require("discord.js");
const { Intents } = require('discord.js')
const fs = require("fs");
const { Client } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, "GUILD_MESSAGES", 'GUILD_VOICE_STATES']
  });
module.exports = client;
const { Collection } = require('discord.js');
client.commands = new Collection();
client.aliases = new Collection();
client.prefix = process.env['prefix'];
client.slashCommands = new Collection();
client.Discord = Discord;
client.snipes = new Map();
client.embedColor = "RED";
client.categories = fs.readdirSync('./commands/');

['command', './guild/messageCreate', './guild/messageDelete', './client/ready', './guild/guildEvents', './client/app', './client/antiCrash', './distube/index.js'].forEach((handler) => {
	require(`./handlers/${handler}`)(client);
});



client.login(mySecret)