const Discord = require("discord.js");
const { Intents } = require('discord.js')
const fs = require("fs");
const { Client } = require('discord.js');
const client = new Client({
  intents: 32767,
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

['command', './guild/messageCreate', './guild/messageDelete', './client/ready', './client/app', './client/antiCrash', './distube/index.js'].forEach((handler) => {
	require(`./handlers/${handler}`)(client);
});


client.login(process.env['token'])