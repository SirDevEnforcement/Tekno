const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client({ intents: 32767 });
module.exports = client;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.slashcommands = new Discord.Collection();
client.Discord = Discord;
client.snipes = new Map();
client.categories = fs.readdirSync('./application_commands/');

['./guild/messageCreate', './guild/messageDelete', './client/ready', './client/antiCrash', 'slash_commands', 'interactionCreate', './guild/guildMemberAdd', 'db', './client/rateLimit', './client/guildEvents', './guild/scam-links', 'levels', './client/statcord'].forEach((handler) => {
	require(`./handlers/${handler}`)(client)
})
const mongoose = require('mongoose')
	mongoose.connect(process.env['mongo_uri'], {
		useNewUrlParser: true,
    useUnifiedTopology: true,
	}).then(console.log('[MongoDB] Connected to the Database'))
require('./events/index.js')(client)
require('./website.js')(client)
require('./events/Suggestion.js')(client)
client.login(process.env['token'])