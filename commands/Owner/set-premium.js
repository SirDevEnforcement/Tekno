const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "set-premium",
  run: async (client, message, args) => {

    if(!message.author.id === '585835814743834661') return;

    if(!args[0]) {
      db.set(`premium`, message.guild.id)
      message.channel.send(`**${message.guild.name}** is now premium!`)
    } else if(args[0]) {
      db.set(`premium`, args[0])
      message.channel.send(`**${args[0]}** is now premium!`)
    }
  
  
}}