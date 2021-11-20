const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "lock",
    description: "Lock the server!", 
  run: async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send('You do not have the correct permissions! Permission needed: \`MANAGE_CHANNELS\`')
    if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send('I do not have the correct permissions! Permission needed: \`MANAGE_CHANNELS\`')
    const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
    if (args[0] === 'on') {
      channels.forEach(channel => {
        channel.updateOverwrite(message.guild.roles.everyone, {
          SEND_MESSAGES: false
        }).then(() => {
          channel.setName(channel.name += `🔒`)
        })
      })
      return
      const lockembed = new MessageEmbed()
        .setTitle(`${message.guild.name} is now on **lockdown**`)
        message.channel.send({ embeds: [lockembed] });
    } else if (args[0] === 'off') {
      channels.forEach(channel => {
        channel.updateOverwrite(message.guild.roles.everyone, {
          SEND_MESSAGES: true
        }).then(() => {
          channel.setName(channel.name.replace('🔒', ''))
        }
        )
      })
      return
      const unlockembed = new MessageEmbed().setTitle(`${message.guild.name} is now off **lockdown**`)
        message.channel.send({ embeds: [unlockembed] });
    }
  }
}