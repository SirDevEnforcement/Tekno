const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "wanted",
    description: "Wanted, dead or alive 💀", 
  run: async (client, message, args) => {


    const embed = new MessageEmbed()
      .setImage(`https://api.leoapi.xyz/image/wanted?image=${message.author.displayAvatarURL()}`)
      message.channel.send({ embeds: [embed] });
  }

}