const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "blurpify",
    description: "Blurpify your profile picture!", 
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
    .setImage(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${message.author.displayAvatarURL()}`)
      message.channel.send({ embeds: [embed] });
  }
  
  }