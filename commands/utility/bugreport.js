const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "bugreport",
    description: "Report a bug in the bot!", 
  run: async (client, message, args) => {
    const avatar = "https://cdn.discordapp.com/avatars/" + message.author.id + "/" + message.author.avatar + ".jpeg"
    const guild = client.guilds.cache.get('894164132100730880');
    const channel = guild.channels.cache.get('894164487630901268')
    message.author.send({content: ['Your report has been sent to our Developer. If you wish to see the outcome, please join our support server; https://discord.gg/B82QFdqPPH ']})

    const embed = new MessageEmbed()
    .setTitle('Bug Report')
    .setDescription(` ${message.content.slice(11).trim()} `)
    .setFooter(message.author.username + '#' + message.author.discriminator, avatar)
    channel.send({embeds: [embed]})
  }
  
  }