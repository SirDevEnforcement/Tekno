const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client({ intents: 32767 });
module.exports = client;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.slashcommands = new Discord.Collection();
client.Discord = Discord;
client.db = require('quick.db')
client.snipes = new Map();
client.categories = fs.readdirSync('./application_commands/');

['./guild/messageCreate', './guild/messageDelete', './client/ready', './client/antiCrash', 'slash_commands', 'interactionCreate', './guild/guildMemberAdd', 'db', './client/rateLimit', './client/guildEvents'].forEach((handler) => {
	require(`./handlers/${handler}`)(client)
})
require('./events/index.js')(client)
require('./website.js')(client)
client.login(process.env['token'])