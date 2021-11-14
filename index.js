const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
  intents: 32767,
  });
module.exports = client;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.prefix = process.env['prefix'];
client.slashCommands = new Discord.Collection();
client.Discord = Discord;
client.snipes = new Map();
client.embedColor = "RED";
client.categories = fs.readdirSync('./commands/');

['command', './guild/messageCreate', './guild/messageDelete', './client/ready', './client/app', './client/antiCrash', './distube/index.js'].forEach((handler) => {
	require(`./handlers/${handler}`)(client);
});

client.login(process.env['token'])