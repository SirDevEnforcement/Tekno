const Discord = require('discord.js')
module.exports = {
  name: "pixilate",
    description: "Pixelate your profile picture!", 
  run: async(client, message, args) => {

const avatar = "https://cdn.discordapp.com/avatars/" + message.author.id + "/" + message.author.avatar + ".png"

    const embed = new Discord.MessageEmbed()
    .setTitle('Pixilated!')
    .setImage(`https://api.leoapi.xyz/image/pixelize?image=${avatar}?size=512`)
      message.channel.send({ embeds: [embed] });

  }
  }