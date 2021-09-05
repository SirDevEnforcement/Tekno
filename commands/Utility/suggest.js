const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "suggest",
  category: "Support",
  description: "Send a suggestion to the support server!",
  usage: "t!suggest <suggestion>",
  timeout: 5000,
  run: async (client, message, args) => {
    message.author.send('Your suggestion has been sent to our __Support Server__ for the community to vote on. Support Server; https://discord.gg/dTEjcVFDgj')
    
    const avatar = "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg"
    const guild = client.guilds.cache.get('845327056987619358');
    const channel = guild.channels.cache.get('845327057641537608');

    const embed = new MessageEmbed()
    .setTitle('Suggestion')
    .setDescription(` \`${message.content.slice(9).trim()}\` `)
    .setFooter(message.author.username + '#' + message.author.discriminator, avatar)
    channel.send(embed)

  }
  
  }