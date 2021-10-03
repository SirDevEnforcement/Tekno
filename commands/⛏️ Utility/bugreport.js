const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "bugreport",
  category: "⛏️ Utility",
  timeout: 3.6e+6,
  run: async (client, message, args) => {
    const avatar = "https://cdn.discordapp.com/avatars/" + message.author.id + "/" + message.author.avatar + ".jpeg"
    const guild = client.guilds.cache.get('845327056987619358');
    const channel = guild.channels.cache.get('845327057641537609')
    message.author.send('Your report has been sent to our Developer. If you wish to see the outcome, please join our support server; https://discord.gg/dTEjcVFDgj . Timeout: \`1 hour\`')

    const embed = new MessageEmbed()
    .setTitle('Bug Report')
    .setDescription(` ${message.content.slice(11).trim()} `)
    .setFooter(message.author.username + '#' + message.author.discriminator, avatar)
    channel.send(embed)
  }
  
  }