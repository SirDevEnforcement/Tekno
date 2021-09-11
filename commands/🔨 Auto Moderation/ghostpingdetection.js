const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "ghostpingdetection",
  category: '🔨 Auto Moderation',
  run: async (client, message, args) => {

        if (message.member.hasPermission(`ADMINISTRATOR`) || message.author.id === '585835814743834661') {
        if (args[0] === 'enable') {
          db.set(`ping_${message.guild.id}`, true)
          message.channel.send('Set your ghostpingdetection to:    \`    true    \`')
        } else if (args[0] === 'disable') {
          db.set(`ping_${message.guild.id}`, false)
          message.channel.send('Set your ghostpingdetection to:    \`    false    \`')
        } else if (!args[0]) {
          message.channel.send(`Current ghostpingdetection: ${db.get(`link_${message.guild.id}`)}`)
        }
      } else {
      message.channel.send(`You need the \`     ADMINISTRATOR     \` permission to use this command!`)
    }
  
  
}}