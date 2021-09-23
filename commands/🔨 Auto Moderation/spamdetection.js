const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "spamdetection",
  category: '🔨 Auto Moderation',
  run: async (client, message, args) => {

        if (message.member.hasPermission(`ADMINISTRATOR`) || message.author.id === '585835814743834661') {
      if (!message.guild.me.hasPermission(`MANAGE_MESSAGES`)) {
        message.channel.send('I do not have the correct permissions: \`MANAGE_MESSAGES\`')
      } else {
        if (args[0] === 'enable') {
          db.set(`antispam_${message.guild.id}`, true)
          message.channel.send('Set your spamdetection to:    \`    true    \`')
        } else if (args[0] === 'disable') {
          db.set(`antispam_${message.guild.id}`, false)
          message.channel.send('Set your spamdetection to:    \`    false    \`')
        } else if (!args[0]) {
          message.channel.send(`Current spamdetection: ${db.get(`antispam_${message.guild.id}`)}`)
        }
      }
    } else {
      message.channel.send(`You need the \`     ADMINISTRATOR     \` permission to use this command!`)
    }
  
  
}}