m const Discord = require("discord.js");
const fs = require('fs');
const DB = require('./Schemas/ModLogsDB')
const client = new Discord.Client({ intents: 32767 });
module.exports = client;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.slashcommands = new Discord.Collection();
client.Discord = Discord;
client.snipes = new Map();
client.editsnipes = new Map()
client.db = require('quick.db');
client.categories = fs.readdirSync('./application_commands/');

['./guild/messageCreate', './guild/messageDelete', './client/ready', './client/antiCrash', 'slash_commands', 'interactionCreate', 'db', './client/rateLimit', './client/guildEvents', './guild/banned-words', './client/statcord', 'modlogs', './client/statscount', 'distube', 'events', './guild/messageUpdate', 'pollInteractionCreate', 'suggestionInteractionCreate', './guild/tags', './guild/guildMemberAdd', './guild/guildMemberRemove', './guild/messageReactionAdd'].forEach((handler) => {
	require(`./handlers/${handler}`)(client)
	console.log(`[HANDLER] ${handler} loaded`)
})

const mongoose = require('mongoose')
	mongoose.connect(process.env['mongo_uri'], {
		useNewUrlParser: true,
    useUnifiedTopology: true,
	}).then(console.log('[MongoDB] Connected to the Database'))

require('./events/index.js')(client)
require('./website.js')(client)
require('./events/Suggestion.js')(client)
require('./functions.js')
client.login(process.env['token'])