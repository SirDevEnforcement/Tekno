const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = {
  name: "set-welcome",
  run: async (client, message, args) => {

    if(message.member.hasPermission(`ADMINISTRATOR`) || message.author.id === '585835814743834661') {
      if(!message.guild.me.hasPermission(`MANAGE_CHANNELS` && `MANAGE_MESSAGES`)) {
        message.channel.send('Please make sure I can manage channels **&&** messages!')
      }

      if(message.mentions.channels.first()) {
        db.set(`welcomechannel_${message.guild.id}`, message.mentions.channels.first())
        message.channel.send('Successfully set your welcome channel!')
        }
    }
  
  
}}