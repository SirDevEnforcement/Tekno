const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client({ intents: 32767 });
module.exports = client;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.slashcommands = new Discord.Collection();
client.prefix = 't!' || `<@!${client.user.id}>`;
client.Discord = Discord;
client.snipes = new Map();
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.giveawaysManager = require('./giveaways.js');
client.reactionRoleManager = require('./reaction-roles.js')
client.categories = fs.readdirSync('./application_commands/');

['./guild/messageCreate', './guild/messageDelete', './client/ready', './client/antiCrash', './distube/index', 'slash_commands', 'interactionCreate', './guild/guildMemberAdd', 'db', './client/rateLimit', './client/guildEvents'].forEach((handler) => {
	require(`./handlers/${handler}`)(client)
})
require('./events/index.js')(client)
require('./website.js')(client)
client.login(process.env['token'])