const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "busted",
    description: "Uh oh, busted!", 
  run: async (client, message, args) => {


    const embed = new MessageEmbed()
    .setImage(`https://api.leoapi.xyz/image/busted?image=https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256`)
      message.channel.send({ embeds: [embed] });
  
  
}}