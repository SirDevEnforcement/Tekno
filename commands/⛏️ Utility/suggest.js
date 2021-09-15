const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "suggest",
  timeout: 5000,
  category: "⛏️ Utility",
  run: async (client, message, args) => {
    message.author.send('Your suggestion has been sent to our __Support Server__ for the community to vote on. Support Server; https://discord.gg/keykNcVDn3')

    const avatar = "https://cdn.discordapp.com/avatars/" + message.author.id + "/" + message.author.avatar + ".png"
    const guild = client.guilds.cache.get('845327056987619358');
    const channel = guild.channels.cache.get('845327057641537608');

    const embed = new MessageEmbed()
      .setTitle('Suggestion')
      .setDescription(` \`${message.content.slice(9).trim()}\` `)
      .setFooter(message.author.username + '#' + message.author.discriminator, avatar)

    channel.send(embed).then(sentMessage => sentMessage.react(`<:check:881238079829053460>`).then(reaction => reaction.message.react(`<:cross:881238098871201802>`)))

  }

}