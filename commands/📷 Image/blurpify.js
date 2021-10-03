const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "blurpify",
  category: "📷 Image",
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
    .setImage(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${message.author.displayAvatarURL()}`)
    message.channel.send(embed)
  }
  
  }