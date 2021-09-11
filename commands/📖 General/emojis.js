const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "emojis",
  category: 'General',
  timeout: 5000,
  run: async (client, message, args) => {
    if (message.guild.emojis.cache.size == 0) {
      return message.channel.send(new MessageEmbed().setDescription('This guild has no emojis!'))
    } else {
      message.channel.send(new MessageEmbed().setDescription(message.guild.emojis.cache.map(e => e.toString()).splice(25).join(' ')).setFooter('Tekno', client.user.displayAvatarURL())
      )

    }
  }
}